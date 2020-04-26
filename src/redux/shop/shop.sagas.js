import { takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

//at every yield, handing control back to saga middleware to decide how to proceed next

export function* fetchCollectionsAsync() {
    
    yield console.log('I am fired');
}

export function* fetchCollectionsStart() {
    //takeEvery creates a non-blocking call, filtering the action type and sending a function to get executed
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync);
}