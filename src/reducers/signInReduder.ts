import ActionTypes from '../actions/ActionTypes';
import { SignIn } from './State';

const signInState = {isValid:true};
export default (state : SignIn = signInState, action: any) => {
    switch(action.type)
    {
        case ActionTypes.SHOW_SIGNINERRORMESSAGE:
            return {...state, isValid: false };
        default:
            return state;
    }
}