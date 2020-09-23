import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { User } from './interface/user.interface'
import {CreateUserDTO} from './dto/created-user.dto'

@Injectable()
export class UsersService {
    constructor (@InjectModel('User') private readonly userModel: Model<User>) {
       
    }
    async findUser(username: string): Promise<User> {
        const user = await this.userModel.find({username: username})
        return user[0]
    }
    async createUser(CreateUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
        console.log(CreateUserDTO)
        const newUser = this.userModel(CreateUserDTO)
        return newUser.save()
    }
}
