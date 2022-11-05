import http from '@/http-common.js'

class AuthService {
    auth(authData) {
        return http.post(
            "auth/",
            JSON.stringify(authData)
            
    }
    getOne(id) {
        return http.get(`/feedback/${id}/`)
    }
    
}

export default new AuthService()
