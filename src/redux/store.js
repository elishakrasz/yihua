import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootRducer from './root-reducer'

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
} 
export const store = createStore(rootRducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor };