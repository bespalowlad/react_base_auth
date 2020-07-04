import { IUser, RegistrRequestAction, RegistrSuccessAction, RegistrFailureAction, LoginRequestAction, LoginSuccessAction, LoginFailureActionAction, logoutAction } from '../types'
import { REGISTR_REQUEST, REGISTR_SUCCESS, REGISTR_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants'

interface IState {
    registrRequest: boolean
    isRegistrSuccess: boolean,
    loginRequest: boolean,
    isLoginSuccess: boolean,
    user: IUser | null
}

const initialState: IState = {
    registrRequest: false,
    isRegistrSuccess: false,
    loginRequest: false,
    isLoginSuccess: false,
    user: null
}

type ActionType = RegistrRequestAction | RegistrSuccessAction | RegistrFailureAction | LoginRequestAction | LoginSuccessAction | LoginFailureActionAction | logoutAction

const userReducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case REGISTR_REQUEST:
            return {
                ...state,
                registrRequest: !state.registrRequest
            }

        case REGISTR_SUCCESS:
            return {
                ...state,
                registrRequest: false,
                isRegistrSuccess: true,
                user: action.user
            }

        case REGISTR_FAILURE:
            return {
                ...state,
                registrRequest: false,
                isRegistrSuccess: false,
                user: null
            }

        case LOGIN_REQUEST:
            return {
                ...state,
                loginRequest: !state.loginRequest
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loginRequest: false,
                isLoginSuccess: true,
                user: action.user
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loginRequest: false,
                isLoginSuccess: false,
                user: null
            }

        case LOGOUT:
            return {
                ...state,
                user: null
            }

        default:
            return state
    }
}

export default userReducer