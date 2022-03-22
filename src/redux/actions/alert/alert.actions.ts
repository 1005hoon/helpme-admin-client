export enum AlertActionType {
    OPEN_ALERT_MESSAGE = 'ALERT_OPEN_ALERT_MESSAGE',
    CLOSE_ALERT_MESSAGE = 'ALERT_CLOSE_ALERT_MESSAGE',
}

export interface IOpenAlertMessage {
    type: AlertActionType.OPEN_ALERT_MESSAGE;
    payload: string;
}

export interface ICloseAlertMessage {
    type: AlertActionType.CLOSE_ALERT_MESSAGE;
}

export type AlertActions = IOpenAlertMessage | ICloseAlertMessage;
