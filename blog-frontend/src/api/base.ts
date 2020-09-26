import instance from '../axios/axios'
import { Method } from 'axios'
export function request(method: Method, url: string) :any{
   if (method === 'GET') {
       return function (id?: number | string) :any {
        const idType = typeof id
        return instance({
                url: idType === 'number' || idType === 'string' ?  `${url}${id}` : url,
                method: method
            })
        }
    } else {
        return function (params: any) {
            return instance({
                method: method,
                url: url,
                data: params
            })
        }
    }
}