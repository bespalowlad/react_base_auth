import { REGISTR_REQUEST } from '../constants'

export interface IUserApi {

}

export interface IUser {
    id: string
    name: string
    email: string
}

export interface RegistrRequestAction {
    type: typeof REGISTR_REQUEST
}