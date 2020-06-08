import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/register.constants'

interface IState {
    registering?: Boolean
}

const initialState: IState = {}

type ActionTypes = any

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