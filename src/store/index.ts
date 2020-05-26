import { createStore, applyMiddleware, combineReducers } from 'redux'

const rootReducer = combineReducers({

})

export const store = createStore(rootReducer)

export type TRootState = ReturnType<typeof rootReducer>