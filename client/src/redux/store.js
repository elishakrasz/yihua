import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'
import rootSaga from './root-saga'

import { fetchCollectionsStart } from './shop/shop.sagas'
import rootRducer from './root-reducer'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
} 
export const store = createStore(rootRducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor };