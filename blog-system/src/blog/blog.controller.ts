import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body } from '@nestjs/common'
import { BlogService } from './blog.service'
import { CreatePostDTO } from './dto/created-post.dto'
import { Response } from 'express'
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes'
@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) { }

    @Get('posts')
    async getPosts(@Res() res: Response) :Promise<any>{
        const posts = await this.blogService.getPosts();
        return res.status(HttpStatus.OK).json(posts);
    }
    @Get('post/:postID')
    async getPost(@Res() res: Response, @Param('postID', new ValidateObjectId()) postID: number) :Promise<any>{
        const post = await this.blogService.getPost(postID);
        if (!post) throw new NotFoundException('Post does not exist!');
        return res.status(HttpStatus.OK).json(post);

    }
    @Post('/publish-article')
    async addPost(@Res() res: Response, @Body() createPostDTO: CreatePostDTO) :Promise<any>{
        const newPost = await this.blogService.addPost(createPostDTO);
        return res.status(HttpStatus.OK).json({
            code: 0,
            result: true,
            message: 'success'
        })
    }
}