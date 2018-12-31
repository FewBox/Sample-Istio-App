import { MiddlewareAPI } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import ActionTypes from '../actions/ActionTypes';
import { Store, Home } from '../reducers/State';
import AjaxObservable from '../fetch/ajaxObservable';
import {redirect} from '../actions';
import { ENOTEMPTY } from 'constants';

const signInEpic =(action$: ActionsObservable<any>, store: MiddlewareAPI<Store>) => action$.ofType(ActionTypes.SIGNIN)
.switchMap((action)=>{
    return AjaxObservable({ path: '/api/signin', method: 'POST', body: {username:action.username, password:action.password}}, store);
})
.map((response)=>{
    debugger;
    if(response.value.isValid){
        store.dispatch(redirect('/master/home'));
        return null;
    }
});

export default [signInEpic];