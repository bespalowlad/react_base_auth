export interface IUser {
    id: number
    username: string
    firstName: string
    lastName: string
    password: string
    email: string
    token: 'fake-jwt-token'
}

export type TUserResponse = Omit<IUser, 'password'>

export interface IMessageResponse {
    message: string
}