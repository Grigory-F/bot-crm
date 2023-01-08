import http from '@/http-common.js'

class MailingService {
    basePathApiService = "mailing/create"
    create(mailParams) {
        return http.post(
            this.basePathApiService,
            {
                params: {
                    "is_test_send": mailParams.test,
                    "message": mailParams.message,
                    "platforms": mailParams.whereToSend,
                    "postponed_time": mailParams.time,
                    "media": mailParams.filesArray

                    /* [
                        {
                            "filename": "image",
                            "ext": "jpeg",
                            "data": "base64 str"
                        },
                        ...
                    ] */
                },
                headers: {
                    Authorization: localStorage.getItem('token'),
                    "Content-Type": "application/json"
                },
            })
    }
    tokenVerification() {
        return http.get(this.basePathApiService)
    }
}

export default new AuthService()
