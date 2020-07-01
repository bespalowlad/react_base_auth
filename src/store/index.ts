import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from './user.reducer'

const loggerMiddleware = createLogger()

const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, loggerMiddleware)
))

export type StateType = ReturnType<typeof rootReducer>