import * as axios from 'axios'
declare module 'axios' {
    interface AxiosResponse<T = any> {
        data: T;
        status: number;
        statusText: string;
        headers: any
    }
}
const axiosResponse = ((res: AxiosResponse) => {
    console.log(res, 'res')
    return res
})
export default axiosResponse