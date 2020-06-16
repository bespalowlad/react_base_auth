import { AUTHENTICATE_REQUEST, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE } from '../constants/userAction.constants'
import { TAuthenticateRequestAction, TAuthenticateSuccessAction, TAuthenticateFailureAction } from '../types/userAction.types'

const loggedIn: boolean = !!localStorage.getItem('token')

interface IState {
    loggedIn: boolean
}

const initialState: IState = {
    loggedIn
}

type ActionType = any

export const authenticate = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case AUTHENTICATE_REQUEST:
            return state

        case AUTHENTICATE_SUCCESS:
            return {
                ...state,
                loggedIn: true
            }

        case AUTHENTICATE_FAILURE:
            return {
                ...state,
                loggedIn: false
            }

        default:
            return state
    }
}