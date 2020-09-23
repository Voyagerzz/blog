import { Document } from 'mongoose'
export interface Post extends Document {
    readonly tittle: string,
    readonly description: string,
    readonly content: string,
    readonly date_posted: string
}