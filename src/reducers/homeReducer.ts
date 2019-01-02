import ActionTypes from '../actions/ActionTypes';
import { PayloadAction } from '../actions/Action';
import { Home } from './State';

const homeState = {
    photos: []
};
export default (state : Home = homeState, action: any): Home => {
    switch(action.type)
    {
        case ActionTypes.LOAD_HOMEPAGE:
            return {...state, photos: action.payload };
        default:
            return state;
    }
}