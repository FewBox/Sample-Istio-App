import ActionTypes from './ActionTypes';

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

export const clearPath = ()=>({
    type: ActionTypes.CLEAR_PATH
});