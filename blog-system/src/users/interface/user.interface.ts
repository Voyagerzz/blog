import { Document } from 'mongoose'
export interface User extends Document {
    readonly userId: number,
    readonly userName: string,
    readonly password: string
}