import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/userAction.constants'
import { TRegisterRequestAction, TRegisterSuccessAction, TRegisterFailureAction } from '../types/userAction.types'
import { registerRequest, registerSuccess, registerFailure } from '../actions/user.actions'

interface IState {
    registering?: Boolean
}

const initialState: IState = {}

type ActionTypes = TRegisterRequestAction | TRegisterSuccessAction | TRegisterFailureAction

export const register = (state = initialState, action: ActionTypes): IState => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { registering: true }

        case REGISTER_SUCCESS:
            return {}

        case REGISTER_FAILURE:
            return {}

        default:
            return state
    }
}