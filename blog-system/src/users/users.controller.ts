import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common'
import {UsersService } from './users.service'
import { Response } from 'express'
import {CreateUserDTO} from './dto/created-user.dto'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Post('create')
    async createUser(@Res() res: Response, @Body() createdUserDTO: CreateUserDTO) :Promise<any> {
        const newUser = this.usersService.createUser(createdUserDTO)
        return res.status(HttpStatus.OK).json({
            message: "User has been submitted successfully!",
            user: newUser
        })
    }

}
