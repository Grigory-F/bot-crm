import http from '@/http-common.js'

class FeedbackService {
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
                },
                headers: {
                    Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNjY0Mzc5OTYxfQ.ThovbVgxSDyfk1z-DA4CcNlNf1ljlgBNbrC5GZR63qk",
                    "Content-Type": "application/json"
                },
            }
        )
    }
    getOne(id) {
        return http.get(`/feedback/${id}/`, /* { params: { 'id': id } } */{
            headers: {
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNjY0Mzc5OTYxfQ.ThovbVgxSDyfk1z-DA4CcNlNf1ljlgBNbrC5GZR63qk",
                "Content-Type": "application/json"
            },
        })
    }
    update(content, id) {
        return http.put(`/feedback/${id}/`, {


            "answer": content.answer || "",
            "type": content.type,
            "status": content.status


        }, {
            headers: {
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNjY0Mzc5OTYxfQ.ThovbVgxSDyfk1z-DA4CcNlNf1ljlgBNbrC5GZR63qk",
                "Content-Type": "application/json"
            },
        })
    }
}

export default new FeedbackService()
