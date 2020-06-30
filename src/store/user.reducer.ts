import { IUser, RegistrRequestAction } from '../types'
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

type ActionType = RegistrRequestAction

const userReducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case REGISTR_REQUEST:
            return {
                ...state,
                registrRequest: !state.registrRequest
            }

        default:
            return state
    }
}

export default userReducer