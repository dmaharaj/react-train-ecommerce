import { takeEvery, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

//at every yield, handing control back to saga middleware to decide how to proceed next

export function* fetchCollectionsAsync() {
    
    yield console.log('I am fired and sagafied');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }
        
    // }
    // dispatch(fetchCollectionsStart()); 

    // collectionRef.get().then(snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     console.log("collectionsMap: ", collectionsMap);

    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    //takeEvery creates a non-blocking call, filtering the action type and sending a function to get executed
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync);
}