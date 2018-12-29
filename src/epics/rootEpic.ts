import { combineEpics } from 'redux-observable';
import homeEpic from './homeEpic';
import signInEpic from './signInEpic';

export default combineEpics(...homeEpic, ...signInEpic);