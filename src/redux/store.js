import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'

import rootRducer from './root-reducer'

const middlewares = [logger];

export const store = createStore(rootRducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

export default { store, persistor };