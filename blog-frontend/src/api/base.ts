import instance from '../axios/axios'
export function request(method: string, url: string) :any{
   if (method === 'GET') {
       return function (id?: number | string) :any {
        const idType = typeof id
        return instance({
                method: 'get',
                url: idType === 'number' || idType === 'string' ?  `${url}${id}` : url
            })
        }
    } else {
        return function (params: object) {
            return instance({
                method: 'post',
                url: url,
                params: params
            })
        }
    }
}