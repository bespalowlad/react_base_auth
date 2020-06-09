import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN, LOGOUT } from '../constants/userAction.constants'
import { ICurrentUser } from './currentUser.types'

export type TRegisterRequestAction = {
    type: typeof REGISTER_REQUEST
}

export type TRegisterSuccessAction = {
    type: typeof REGISTER_SUCCESS
}

export type TRegisterFailureAction = {
    type: typeof REGISTER_FAILURE
}

export type TLoginAction = {
    type: typeof LOGIN,
    user: ICurrentUser
}

export type TLogoutAction = {
    type: typeof LOGOUT
}