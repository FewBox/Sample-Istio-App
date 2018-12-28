import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import home from './homeReducer';
import setting from './settingReducer';
import common from './commonReducer';

const appReducer = combineReducers({setting, home, common, routing});
export default (state: any, action: any) => {
  if (action.type === 'RESETSESSION') {
    state = undefined;
  }
  return appReducer(state, action)
}