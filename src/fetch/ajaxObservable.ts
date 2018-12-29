import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';
import { MiddlewareAPI } from 'redux';
import { beginLoading, endLoading, showMessage } from '../actions';
import { AjaxSetting } from './Fetch';
import { Store } from '../reducers/State';
import { HOST, PORT, HEADER, METHOD, RESPONSETYPE } from '../config';
import { AjaxRequest, AjaxResponse } from 'rxjs/observable/dom/AjaxObservable'
  

const initAjaxSetting = (ajaxSetting: AjaxSetting) : AjaxRequest  => ({
        url: _.template('<%= host %>:<%= port %><%= path %>')({'host':HOST, 'port': PORT, 'path':ajaxSetting.path}),
        body: ajaxSetting.body ? JSON.stringify(ajaxSetting.body) : undefined,
        crossDomain: true,
        headers: ajaxSetting.headers ? ajaxSetting.headers : HEADER,
        method: String(ajaxSetting.method ? ajaxSetting.method : METHOD),
        responseType: ajaxSetting.responseType ? ajaxSetting.responseType : RESPONSETYPE,
        withCredentials: !!ajaxSetting.withCredentials
    }
);

const ajaxObservable = (ajaxSetting: AjaxSetting, store : MiddlewareAPI<Store>) : Observable<any> => {
    return Observable
    .of(beginLoading())
    .do(store.dispatch)
    .switchMap(
      () => {
        debugger;
          return Observable.ajax(initAjaxSetting(ajaxSetting));
        }
    ).map(
      (ajaxResponse: AjaxResponse) => {
          if(ajaxResponse.response.isSuccessful){
          }
          else{
            store.dispatch(showMessage(ajaxResponse.response.message));
          }
          return Observable.of(ajaxResponse.response);
      }
    ).catch(
        (error: Error) => { 
          return UnknownNetworkErrorObservable(error, store);}
    );
};
  
const UnknownNetworkErrorObservable = (
    error: any,
    store: MiddlewareAPI<Store>
  ): Observable<any> =>
    Observable.of(beginLoading())
      .do(store.dispatch)
      .do(
        () => {()=>{console.log('Unknown Network Error...');}}
      ).do(
        () => console.log(error),
      )
      .skip(3);
  

export default ajaxObservable;