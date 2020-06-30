import axios from 'axios'

interface IUserData {
    name: string
    email: string
    password: string
}

interface IApi {
    registr: (userData: IUserData) => Promise<any>
}

class Api implements IApi {
    private baseUrl = `https://nodejs-registration-api.herokuapp.com/`

    registr(userData: IUserData): Promise<any> {
        return axios.post(`${this.baseUrl}/users`, JSON.stringify(userData))
    }
}

const api = new Api()

export default api