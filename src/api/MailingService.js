import http from "@/http-common.js";

class MailingService {
  basePathApiService = "mailing/";
  createMail(mailParams) {
    return http.post(`${this.basePathApiService}create`, {
      params: {
        is_test_send: mailParams.test,
        message: mailParams.message,
        platforms: mailParams.whereToSend,
        postponed_time: mailParams.time,
        media: mailParams.filesArray,

        /* [
                        {
                            "filename": "image",
                            "ext": "jpeg",
                            "data": "base64 str"
                        },
                        ...
                    ] */
      },
    });
  }
  getMail(count, page) {
    return http.get(`${this.basePathApiService}?count=${count}&page=${page}`);
  }
}

export default new MailingService();
