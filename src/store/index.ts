import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './user.reducer'

const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware()
))

export type StateType = ReturnType<typeof rootReducer>