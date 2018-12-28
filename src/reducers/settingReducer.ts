import ActionTypes from '../actions/ActionTypes';
import { EmptyAction } from '../actions/Action';
import { Setting } from './State';

const settingState = {lang:'zh-cn'};
export default (state : Setting = settingState, action: any) => {
    switch(action.type)
    {
        default:
            return state;
    }
}