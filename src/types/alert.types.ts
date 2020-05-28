import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from '../constants/alert.constants'

export interface IAlertSuccess {
    type: typeof ALERT_SUCCESS
    message: string
}

export interface IAlertError {
    type: typeof ALERT_ERROR
    message: string
}

export interface IAlertClear {
    type: typeof ALERT_CLEAR
}