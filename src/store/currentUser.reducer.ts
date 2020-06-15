import { ICurrentUser } from '../types/currentUser.types'
import { TLoginAction, TLogoutAction } from '../types/userAction.types'
import { LOGIN, LOGOUT } from '../constants/userAction.constants'

interface IState {
    user: null | ICurrentUser
}

const initialState: IState = {
    user: null
}

type ActionTypes = TLoginAction | TLogoutAction

export const currentUser = (state = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.user
            }
        }

        case LOGOUT: {
            return { user: null }
        }

        default:
            return state
    }
}