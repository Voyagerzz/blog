export const setLocal = (key: string, val: any) => {
    if (typeof val === 'object') {
        val = JSON.stringify(val)
    }
    localStorage.setItem(key, val)
}
export const getLocal = (key: string) => {
    const body = 'Bearer '
    return body + localStorage.getItem(key)
}