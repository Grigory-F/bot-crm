import http from '@/http-common.js'

class AuthService {
    basePathApiService = "auth/"
    auth(authData) {
        return http.post(
            this.basePathApiService,
            authData)
    }
    tokenVerification() {
        return http.get(this.basePathApiService)
    }
}

export default new AuthService()
