import { createStore, applyMiddleware, combineReducers } from 'redux'

import { alert } from './alert.reducer'

const rootReducer = combineReducers({
    alert
})

export const store = createStore(rootReducer)

export type TRootState = ReturnType<typeof rootReducer>