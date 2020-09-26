import { request } from '../base'
export const login = request('POST', '/auth/login/')
export const test = request('GET', '/auth/test/')
export const publishArticle = request('POST', '/blog/publish-article')