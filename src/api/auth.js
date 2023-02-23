import {
    HttpClient,
    API
} from './httpClient'

const AUTH_API = `${API}/authenticate`

//Login
const login = (email, password) => {
    const payload = {
        email,
        password
    }
    return HttpClient.post(AUTH_API, payload)
}

const AuthApi = {
    login
}

export {
    AuthApi
}