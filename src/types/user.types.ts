import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/register.constants'

export type TRegisterRequestAction = {
    type: typeof REGISTER_REQUEST
}

export type TRegisterSuccessAction = {
    type: typeof REGISTER_SUCCESS
}

export type TRegisterFailureAction = {
    type: typeof REGISTER_FAILURE
}