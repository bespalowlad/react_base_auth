import { REGISTR_REQUEST, REGISTR_SUCCESS, REGISTR_FAILURE } from '../constants'

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

export interface RegistrRequestAction {
    type: typeof REGISTR_REQUEST
}

export interface RegistrSuccessAction {
    type: typeof REGISTR_SUCCESS,
    user: IUser
}

export interface RegistrFailure {
    type: typeof REGISTR_FAILURE
}