import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN, LOGOUT } from '../constants/userAction.constants'
import { TRegisterRequestAction, TRegisterSuccessAction, TRegisterFailureAction, TLoginAction, TLogoutAction } from '../types/userAction.types'
import { api } from '../api'
import { TRootState } from '../store'
import { alertAction } from './alert.actions'
import { ICurrentUser } from '../types/currentUser.types'

export const register = <T>(user: T): ThunkAction<Promise<any>, TRootState, unknown, Action<string>> => async dispatch => {
    console.log('action/register')

    dispatch(registerRequest())

    try {
        await api.register(user)
        dispatch(alertAction.success('Registration successful'))
    } catch (error) {
        dispatch(registerFailure())
        dispatch(alertAction.error(error))
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