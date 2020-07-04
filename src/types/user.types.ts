import {
    REGISTR_REQUEST,
    REGISTR_SUCCESS,
    REGISTR_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants'

export interface IUserApi {

}

export interface IUser {
    id: string
    name: string
    email: string
}

export interface IUserData {
    name: string
    email: string
    password: string
}

export type IUserLoginData = Omit<IUserData, 'name'>

export interface RegistrRequestAction {
    type: typeof REGISTR_REQUEST
}

export interface RegistrSuccessAction {
    type: typeof REGISTR_SUCCESS,
    user: IUser
}

export interface RegistrFailureAction {
    type: typeof REGISTR_FAILURE
}

export interface LoginRequestAction {
    type: typeof LOGIN_REQUEST
}

export interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS
    user: IUser
}

export interface LoginFailureActionAction {
    type: typeof LOGIN_FAILURE
}

export interface logoutAction {
    type: typeof LOGOUT
}