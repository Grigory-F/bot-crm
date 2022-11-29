import http from '@/http-common.js'

class FeedbackService {
    basePathApiService = '/feedback/'
    getAll(page, count, clientType, status, type, userId) {
        
        return http.get(this.basePathApiService,
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
                    Authorization: localStorage.getItem('token'),
                    "Content-Type": "application/json"
                },
            }
        )
    }
    getOne(id) {
        return http.get(this.basePathApiService + `${id}/`, {
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json"
            },
        })
    }
    update(content, id) {
        return http.put(this.basePathApiService + `${id}/`, {


            "answer": content.answer || "",
            "type": content.type,
            "status": content.status


        }, {
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json"
            },
        })
    }
}

export default new FeedbackService()
