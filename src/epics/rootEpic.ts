import { combineEpics } from 'redux-observable';
import homeEpic from './homeEpic';
import { PayloadAction } from '../actions/Action';
import { Home } from '../reducers/State';

export default combineEpics(...homeEpic);