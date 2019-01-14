import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
import { MiddlewareAPI } from 'redux';
import { beginLoading, endLoading, showMessage } from '../actions';
import { AjaxSetting } from './Fetch';
import { Store, MessageType } from '../reducers/State';
import { HOST, PORT, HEADER, METHOD, RESPONSETYPE } from '../config';
import { AjaxRequest, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable'
import { isUndefined } from 'util';
  

const initAjaxSetting = (ajaxSetting: AjaxSetting) : AjaxRequest  => {
  return {
    url: _.template('<%= host %>:<%= port %><%= path %>')({'host':HOST, 'port': PORT, 'path':ajaxSetting.path}),
    body: ajaxSetting.body ? JSON.stringify(ajaxSetting.body) : undefined,
    crossDomain: true,
    headers: {...(ajaxSetting.headers ? ajaxSetting.headers : HEADER), EndUser: window.localStorage.getItem('enduser')},
    method: String(ajaxSetting.method ? ajaxSetting.method : METHOD),
    responseType: ajaxSetting.responseType ? ajaxSetting.responseType : RESPONSETYPE,
    withCredentials: !!ajaxSetting.withCredentials
  }
};

const ajaxObservable = (ajaxSetting: AjaxSetting, store : MiddlewareAPI<Store>) : Observable<any> => {
    return Observable
    .of(beginLoading())
    .do(store.dispatch)
    .switchMap(
      () => {
        var options = initAjaxSetting(ajaxSetting);
        return Observable.ajax(options);
      }
    ).map(
      (ajaxResponse: AjaxResponse) => {
          if(ajaxResponse.response.isSuccessful==true){
            return Observable.of(ajaxResponse.response);
          }
          else if(isUndefined(ajaxResponse.response.isSuccessful)){
            return Observable.of(ajaxResponse.response);
          }
          else{
            return showMessage({content:ajaxResponse.response.errorMessage, type: MessageType.Error});
          }
      }
    )
    .catch(
        (error: Error) => { 
          return UnknownNetworkErrorObservable(error, store);}
    )
    .finally(()=>{
      store.dispatch(endLoading());
    });
};
  
const UnknownNetworkErrorObservable = (
    error: any,
    store: MiddlewareAPI<Store>
  ): Observable<any> =>
    Observable.of(beginLoading())
      .do(store.dispatch)
      .skip(3);
  

export default ajaxObservable;