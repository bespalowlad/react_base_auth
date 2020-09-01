import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import {
    REGISTR_REQUEST,
    REGISTR_SUCCESS,
    REGISTR_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants'
import {
    RegistrRequestAction,
    RegistrSuccessAction,
    RegistrFailureAction,
    IUserData,
    IUserLoginData,
    IUser,
    LoginRequestAction,
    LoginSuccessAction,
    LoginFailureActionAction,
    logoutAction
} from '../types'
import { api } from '../api'
import { StateType } from '../store'

export const registrRequest = (): RegistrRequestAction => ({
    type: REGISTR_REQUEST
})

export const registrSuccess = (user: IUser): RegistrSuccessAction => ({
    type: REGISTR_SUCCESS,
    user
})

export const registrFailure = (): RegistrFailureAction => ({
    type: REGISTR_FAILURE
})

export const signup = (userData: IUserData): ThunkAction<Promise<any>, StateType, unknown, Action<string>> => async dispatch => {
    dispatch(registrRequest())

    try {
        const { data } = await api.signup(userData)
        const { _id: id, name, email } = data.user
        dispatch(registrSuccess({ id, name, email }))
        localStorage.setItem('token', data.token)
    } catch (err) {
        dispatch(registrFailure())
        localStorage.removeItem('token')
    }
}

export const loginRequest = (): LoginRequestAction => ({
    type: LOGIN_REQUEST
})

export const loginSuccess = (user: IUser): LoginSuccessAction => ({
    type: LOGIN_SUCCESS,
    user
})

export const loginFailure = (): LoginFailureActionAction => ({
    type: LOGIN_FAILURE
})

export const signin = (userData: IUserLoginData): ThunkAction<Promise<any>, StateType, unknown, Action<string>> => async dispatch => {
    dispatch(loginRequest())

    try {
        const { data } = await api.signin(userData)
        const { _id: id, name, email } = data.user
        dispatch(loginSuccess({ id, name, email }))
        localStorage.setItem('token', data.token)
    } catch (err) {
        dispatch(loginFailure())
        localStorage.removeItem('token')
    }
}

export const fetchProfile = (token: string): ThunkAction<Promise<any>, StateType, unknown, Action<string>> => async dispatch => {
    dispatch(loginRequest())

    try {
        const { data } = await api.fetchProfile(token)
        const { _id: id, name, email } = data
        dispatch(loginSuccess({ id, name, email }))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const logout = (): logoutAction => ({
    type: LOGOUT
})