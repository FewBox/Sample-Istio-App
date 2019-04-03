import ActionTypes from '../actions/ActionTypes';
import { EmptyAction } from '../actions/Action';
import { Setting } from './State';

const settingState = {lang:'en-us'};
export default (state : Setting = settingState, action: any) => {
    switch(action.type)
    {
        case ActionTypes.CHANGE_LANGUAGE:
            return {...state, lang: action.lang };
        default:
            return state;
    }
}