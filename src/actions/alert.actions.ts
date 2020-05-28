import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from '../constants/alert.constants'
import { IAlertSuccess, IAlertError, IAlertClear } from '../types/alert.types'

export const alertAction = {
    success,
    error,
    clear
}

function success(message: string): IAlertSuccess {
    return {
        type: ALERT_SUCCESS,
        message
    }
}

function error(message: string): IAlertError {
    return {
        type: ALERT_ERROR,
        message
    }
}

function clear(message: string): IAlertClear {
    return {
        type: ALERT_CLEAR,
    }
}