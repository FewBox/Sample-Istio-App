import ActionTypes from '../actions/ActionTypes';
import { MetaAction } from '../actions/Action';
import { Common } from './State';

const commonState = { isLoadingVisiable: false, isMessageVisiable: false, message: '' };
export default (state : Common = commonState, action: any) => {
    switch(action.type)
    {
        case ActionTypes.BEGIN_LOADING:
            return {...state, isLoadingVisiable:true};
        case ActionTypes.END_LOADING:
            return {...state, isLoadingVisiable:false};
        case ActionTypes.SHOW_MESSAGE:
            return {...state, isMessageVisiable:true, message: action.meta };
        default:
            return state;
    }
}