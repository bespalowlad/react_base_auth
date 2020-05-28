import { IAlertSuccess, IAlertError, IAlertClear } from '../types/alert.types'
import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from '../constants/alert.constants'

interface IState {
    type?: string
    message?: string
}

type ActionTypes = IAlertSuccess | IAlertError | IAlertClear

export const alert = (state = {}, action: ActionTypes): IState => {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                ...state,
                type: 'success',
                message: action.message
            }

        case ALERT_ERROR:
            return {
                ...state,
                type: 'error',
                message: action.message
            }

        case ALERT_CLEAR:
            return {}

        default:
            return state
    }
}