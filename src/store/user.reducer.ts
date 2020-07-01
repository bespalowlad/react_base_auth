import { IUser, RegistrRequestAction, RegistrSuccessAction, RegistrFailure } from '../types'
import { REGISTR_REQUEST, REGISTR_SUCCESS, REGISTR_FAILURE } from '../constants'

interface IState {
    registrRequest: boolean
    isRegistrSuccess: boolean
    user: IUser | null
}

const initialState: IState = {
    registrRequest: false,
    isRegistrSuccess: false,
    user: null
}

type ActionType = RegistrRequestAction | RegistrSuccessAction | RegistrFailure

const userReducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case REGISTR_REQUEST:
            return {
                ...state,
                registrRequest: !state.registrRequest
            }

        case REGISTR_SUCCESS:
            return {
                registrRequest: false,
                isRegistrSuccess: true,
                user: action.user
            }

        case REGISTR_FAILURE:
            return {
                registrRequest: false,
                isRegistrSuccess: false,
                user: null
            }

        default:
            return state
    }
}

export default userReducer