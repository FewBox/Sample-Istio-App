import { MiddlewareAPI } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import ActionTypes from '../actions/ActionTypes';
import { Store, Home } from '../reducers/State';
import AjaxObservable from '../fetch/ajaxObservable';
import { loadHomePage } from '../actions';

const initHomeEric =(action$: ActionsObservable<any>, store: MiddlewareAPI<Store>) => action$.ofType(ActionTypes.INIT_HOMEPAGE)
.switchMap(()=>{
    return AjaxObservable({ path: '/api/photos', method: 'GET'}, store);
})
.map((response)=>{
    return loadHomePage(response.value.payload);
});

export default [initHomeEric];