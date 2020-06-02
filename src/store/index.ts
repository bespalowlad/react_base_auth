import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { alert } from './alert.reducer'

const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
    alert
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
))

export type TRootState = ReturnType<typeof rootReducer>