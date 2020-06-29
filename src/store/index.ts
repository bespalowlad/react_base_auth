import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({

})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware()
))

export type StateType = ReturnType<typeof rootReducer>