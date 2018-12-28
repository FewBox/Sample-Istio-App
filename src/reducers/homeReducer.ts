import ActionTypes from '../actions/ActionTypes';
import { PayloadAction } from '../actions/Action';
import { Home } from './State';
import value from '*.json';

const emptyPagingData = {
    items:null,
    itemCount:0,
    pageCount:0,
    pageRange:0,
    pageIndex:1
};
const homeState = {
    bestDiscountProducts: emptyPagingData,
    bestPriceProducts: emptyPagingData,
    recommendProducts: emptyPagingData
};
export default (state : Home = homeState, action: any): Home => {
    switch(action.type)
    {
        default:
            return state;
    }
}