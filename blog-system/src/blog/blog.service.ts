import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Post } from './interfaces/post.interface'
import { CreatePostDTO } from './dto/created-post.dto'

@Injectable()
export class BlogService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}
    async getPosts() :Promise<Post[]> {
        const posts = this.postModel.find().exec()
        return posts
    }
    async getPost(postID :number) :Promise<Post> {
        const post = await this.postModel
            .findById(postID)
            .exec()
        return post
    }
    async addPost(createPostDTO :CreatePostDTO) :Promise<Post> {
        const newPost = await this.postModel(createPostDTO)
        return newPost.save()
    }
    async editPost(postID :number, createPostDTO :CreatePostDTO) :Promise<Post> {
        const editedPost = await this.postModel
            .findByIdAndUpdate(postID, createPostDTO, { new: true })
        return editedPost
    }

    async deletePost(postID :number): Promise<any> {
        const deletedPost = await this.postModel
            .findByIdAndRemove(postID)
        return deletedPost
    }
}