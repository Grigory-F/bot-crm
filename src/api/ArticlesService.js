import http from '@/http-common.js'

class ArticlesService {
    getAll(page, limit) {
        return http.get('/api/articles/', { params: { page: page, limit: limit } })
    }

    getOne(id) {
        return http.get('/api/articles/', { params: { id: id } })
    }

    create(content) {
        return http.post('/api/articles/', { data: content })
    }

    /*   edit (id) {
          return http.put('/api/articles/', { data: content })
      } */

    delete(id) {
        return http.delete(URL, {
            id: id
        });
    }
}

export default new ArticlesService()
