import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import { REGISTR_REQUEST, REGISTR_SUCCESS, REGISTR_FAILURE } from '../constants'
import { RegistrRequestAction, RegistrSuccessAction, RegistrFailure, IUserData, IUser } from '../types'
import { api } from '../api'
import { StateType } from '../store'

export const registrRequest = (): RegistrRequestAction => ({
    type: REGISTR_REQUEST
})

export const registrSuccess = (user: IUser): RegistrSuccessAction => ({
    type: REGISTR_SUCCESS,
    user
})

export const registrFailure = (): RegistrFailure => ({
    type: REGISTR_FAILURE
})

export const signup = (userData: IUserData): ThunkAction<Promise<any>, StateType, unknown, Action<string>> => async dispatch => {
    dispatch(registrRequest())

    try {
        const { data } = await api.signup(userData)
        const { _id: id, name, email } = data.user
        console.log({ id, name, email })
        dispatch(registrSuccess({ id, name, email }))
    } catch (err) {
        dispatch(registrFailure())
    }
}

