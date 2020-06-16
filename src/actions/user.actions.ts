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
        const currentUser: any = await api.register(user)
        // const currentUser: ICurrentUser = { username: data.username }

        dispatch(alertAction.success('Registration successful'))
        dispatch(login(currentUser))
        // localStorage.setItem('token', (currentUser as TUserResponse).token)
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

export const login = (user: TUserResponse): TLoginAction => ({
    type: LOGIN,
    user
})

export const logout = (): TLogoutAction => ({
    type: LOGOUT
})

export const authenticate = (username: string, password: string): ThunkAction<Promise<any>, TRootState, unknown, Action<string>> => async dispatch => {
    console.log('action/authenticate')

    dispatch(authenticateRequest())

    try {
        const currentUser: any = await api.login(username, password)

        dispatch(alertAction.success('Login successful'))
        // dispatch(authenticateSuccess(username, password))
        dispatch(login(currentUser))
        localStorage.setItem('token', (currentUser as TUserResponse).token)
    } catch (error) {
        dispatch(authenticateFailure())
        dispatch(alertAction.error(error))
        dispatch(logout())
    }
}

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

export const profileFetch = (token: string): ThunkAction<Promise<any>, TRootState, unknown, Action<string>> => async dispatch => {
    console.log('action/profileFetch')

    try {
        const currentUser: any = await api.profileFetch(token)
        dispatch(login(currentUser))
    } catch (error) {
        console.log('PROFILE FETCH FAILURE!')
    }
}

