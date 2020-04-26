import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { fetchCollectionsStart } from './shop/shop.sagas'
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };