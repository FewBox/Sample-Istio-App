import { MiddlewareAPI } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import ActionTypes from '../actions/ActionTypes';
import { Store, Home } from '../reducers/State';
import AjaxObservable from '../fetch/ajaxObservable';
import {} from '../actions';

const changeLanguageEric =(action$: ActionsObservable<any>, store: MiddlewareAPI<Store>) => action$.ofType(ActionTypes.CHANGE_LANGUAGE)
.switchMap((action)=>{
    return Observable.of();
});

export default [changeLanguageEric];