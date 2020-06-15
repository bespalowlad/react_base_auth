import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN, LOGOUT, AUTHENTICATE_REQUEST, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE } from '../constants/userAction.constants'
import { ICurrentUser } from './currentUser.types'
import { TUserResponse } from './api.types'

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

export type TAuthenticateRequestAction = {
    type: typeof AUTHENTICATE_REQUEST
}

export type TAuthenticateSuccessAction = {
    type: typeof AUTHENTICATE_SUCCESS
    user: { username: string, password: string }
}

export type TAuthenticateFailureAction = {
    type: typeof AUTHENTICATE_FAILURE
}