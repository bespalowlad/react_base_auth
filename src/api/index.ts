import { TUserResponse, IMessageResponse } from '../types/api.types'

export interface IResponse extends Response {
    text: () => Promise<any>
}

export interface IApi {
    register: (user: any) => Promise<any>
    login: (username: string, password: string) => Promise<any>,
    profileFetch: (token: string) => Promise<any>,
    handleResponse: (response: IResponse) => Promise<any>
}

class Api implements IApi {
    private _token: string = ''

    register<T>(user: T) {
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'applications/json' },
            body: JSON.stringify(user)
        }

        return fetch('/users/register', requestOptions).then(this.handleResponse)
    }

    login(username: string, password: string) {
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'applications/json' },
            body: JSON.stringify({ username, password })
        }

        return fetch('/users/authenticate', requestOptions).then(this.handleResponse)
    }

    profileFetch(token: string) {
        const requestOptions: RequestInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }

        return fetch('/profile', requestOptions).then(this.handleResponse)
    }

    handleResponse(response: IResponse) {
        return response.text().then(text => {
            const data: TUserResponse | IMessageResponse = text && JSON.parse(text)

            if (!response.ok) {
                if (response.status === 401) {
                    //auto logout
                }

                const error = (data && (data as IMessageResponse).message) || response.statusText
                return Promise.reject(error)
            }

            return data
        })
    }
}

export const api = new Api()