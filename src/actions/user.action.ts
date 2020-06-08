import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/register.constants'
import { api } from '../api'
import { TRootState } from '../store'
import { alertAction } from './alert.actions'

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

export const registerRequest = () => ({
    type: REGISTER_REQUEST
})

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
})

export const registerFailure = () => ({
    type: REGISTER_FAILURE
})