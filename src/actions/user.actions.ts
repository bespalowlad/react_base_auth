import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN, LOGOUT, AUTHENTICATE_REQUEST, AUTHENTICATE_SUCCESS, AUTHENTICATE_FAILURE } from '../constants/userAction.constants'
import { TRegisterRequestAction, TRegisterSuccessAction, TRegisterFailureAction, TLoginAction, TLogoutAction, TAuthenticateRequestAction, TAuthenticateSuccessAction, TAuthenticateFailureAction } from '../types/userAction.types'
import { api } from '../api'
import { TRootState } from '../store'
import { alertAction } from './alert.actions'
import { ICurrentUser } from '../types/currentUser.types'
import { IUser, TUserResponse } from '../types/api.types'

export const register = <T>(user: T): ThunkAction<Promise<any>, TRootState, unknown, Action<string>> => async dispatch => {
    console.log('action/register')

    dispatch(registerRequest())

    try {
        const data: any = await api.register(user)
        const currentUser: ICurrentUser = { username: data.username }

        dispatch(alertAction.success('Registration successful'))
        dispatch(login(currentUser))
    } catch (error) {
        dispatch(registerFailure())
        dispatch(alertAction.error(error))
        dispatch(logout())
    }
}

export const registerRequest = (): TRegisterRequestAction => ({
    type: REGISTER_REQUEST
})

export const registerSuccess = (): TRegisterSuccessAction => ({
    type: REGISTER_SUCCESS
})

export const registerFailure = (): TRegisterFailureAction => ({
    type: REGISTER_FAILURE
})

export const login = (user: ICurrentUser): TLoginAction => ({
    type: LOGIN,
    user
})

export const logout = (): TLogoutAction => ({
    type: LOGOUT
})

export const authenticateRequest = (): TAuthenticateRequestAction => ({
    type: AUTHENTICATE_REQUEST
})

export const authenticateSuccess = (username: string, password: string): TAuthenticateSuccessAction => ({
    type: AUTHENTICATE_SUCCESS,
    user: { username, password }
})

export const authenticateFailure = (): TAuthenticateFailureAction => ({
    type: AUTHENTICATE_FAILURE
})

