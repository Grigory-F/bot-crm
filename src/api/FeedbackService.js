import http from '@/http-common.js'

class FeedbackService {
    basePathApiService = '/feedback/'
    getAll(page, count, clientType, status, type, userId) {
        
        return http.get(basePathApiService,
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
                    Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNjY3ODkzNzM4fQ.P8MolruSYG_QOqE_RTEGScCWf_iW-i-8X1rh2DlWo9Y",
                    "Content-Type": "application/json"
                },
            }
        )
    }
    getOne(id) {
        return http.get(basePathApiService + `${id}/`, {
            headers: {
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNjY3ODkzNzM4fQ.P8MolruSYG_QOqE_RTEGScCWf_iW-i-8X1rh2DlWo9Y",
                "Content-Type": "application/json"
            },
        })
    }
    update(content, id) {
        return http.put(basePathApiService + `${id}/`, {


            "answer": content.answer || "",
            "type": content.type,
            "status": content.status


        }, {
            headers: {
                Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNjY3ODkzNzM4fQ.P8MolruSYG_QOqE_RTEGScCWf_iW-i-8X1rh2DlWo9Y",
                "Content-Type": "application/json"
            },
        })
    }
}

export default new FeedbackService()
