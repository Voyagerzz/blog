import { AxiosResponse } from "axios"

export const resCallback = ((res: AxiosResponse) => {
    if (res.data.result) {
        return Promise.resolve(res.data)
    } else {
        return Promise.reject(res.data.message)
    }
    
})