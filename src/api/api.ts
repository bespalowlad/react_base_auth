import axios from 'axios'
import { IUserData, IUserLoginData } from '../types'

interface IApi {
    signup: (userData: IUserData) => Promise<any>
    signin: (userData: IUserLoginData) => Promise<any>
    fetchProfile: (token: string) => Promise<any>
}

class Api implements IApi {
    private baseUrl = `https://nodejs-registration-api.herokuapp.com`
    // private baseUrl = `http://localhost:5000`

    signup(userData: IUserData): Promise<any> {
        return axios.post(`${this.baseUrl}/users`, userData)
    }

    signin(userData: IUserLoginData): Promise<any> {
        return axios.post(`${this.baseUrl}/users/login`, userData)
    }

    fetchProfile(token: string): Promise<any> {
        return axios.get(`${this.baseUrl}/users/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
    }
}

const api = new Api()

export default api