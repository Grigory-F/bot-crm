import http from '@/http-common.js'

class AuthService {
    getAll(page, count, clientType, status, type, userId) {
        return http.get('/feedback/',
            {
                params: {
                    "page": page,
                    "count": count,
                    "client_type": clientType,
                    "status": status,
                    "type": type,
                    "user_id": userId,
                }
            }
        )
    }
    getOne(id) {
        return http.get(`/feedback/${id}/`, /* { params: { 'id': id } } */{
            headers: {
                Authorization:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNjYzNTM0OTMwfQ.LQuJNKopq_E0biN9vCRn5KKMeORh1qGGX0MeFMon0xg",
                "Content-Type": "application/json"
            },
        })
    }
    update(content) {
        return http.put('/api/articles/', {
            "id": content.id,
            "answer": content.answer,
            "type": content.type,
            "status": content.status
        })
    }
}

export default new AuthService()
