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