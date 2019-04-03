import { PayloadAction } from './Action';
import ActionTypes from './ActionTypes';

export const changeLanguage = (lang) =>({
    type: ActionTypes.CHANGE_LANGUAGE,
    meta: lang
});

export const beginLoading = () =>({
    type: ActionTypes.BEGIN_LOADING
});

export const endLoading = () =>({
    type: ActionTypes.END_LOADING
});

export const showMessage = (message) =>({
    type: ActionTypes.SHOW_MESSAGE,
    meta: message
});

export const hideMessage = () =>({
    type: ActionTypes.HIDE_MESSAGE
});

export const signIn = (username, password) =>({
    type: ActionTypes.SIGNIN,
    username: username,
    password: password
});

export const signOut = () => ({
    type: ActionTypes.SIGNOUT
});

export const clearPath = ()=>({
    type: ActionTypes.CLEAR_PATH
});

export const redirect = (path)=>({
    type: ActionTypes.REDIRECT,
    payload: path
});

export const showSignInErrorMessage = ()=>({
    type: ActionTypes.SHOW_SIGNINERRORMESSAGE
});

export const initHomePage = ()=>({
    type: ActionTypes.INIT_HOMEPAGE
});

export const loadHomePage = (payload)=>({
    type: ActionTypes.LOAD_HOMEPAGE,
    payload: payload
});