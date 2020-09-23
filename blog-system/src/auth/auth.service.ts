import { Injectable } from '@nestjs/common';
import { UsersService} from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { User } from '../users/interface/user.interface'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
        ) {}
    async validateUser (username: string, pass: string) :Promise<any> {
        const user = await this.usersService.findUser(username)
        if (user && user.password === pass) {
            return user
        }
        return null
    }
    async login (user: User) {
        const payload = {username: user.userName, sub: user.userId}
        return {
            result: true,
            code: 0,
            message: 'success',
            access_token: this.jwtService.sign(payload)
        }
    }
}
