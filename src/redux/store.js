import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';

import rootRducer from './root-reducer'

const middlewares = [logger];

const store = createStore(rootRducer, applyMiddleware(...middlewares))

export default store;