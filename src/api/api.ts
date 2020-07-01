import axios from 'axios'
import { IUserData } from '../types'

interface IApi {
    signup: (userData: IUserData) => Promise<any>
}

class Api implements IApi {
    private baseUrl = `https://nodejs-registration-api.herokuapp.com`
    // private baseUrl = `http://localhost:5000`

    signup(userData: IUserData): Promise<any> {
        return axios.post(`${this.baseUrl}/users`, userData)
    }
}

const api = new Api()

export default api