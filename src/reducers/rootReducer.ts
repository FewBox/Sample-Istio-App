import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import signIn from './signInReduder';
import home from './homeReducer';
import setting from './settingReducer';
import master from './masterReducer';

const appReducer = combineReducers({signIn, setting, home, master, routing});
export default (state: any, action: any) => {
  if (action.type === 'RESETSESSION') {
    state = undefined;
  }
  return appReducer(state, action)
}