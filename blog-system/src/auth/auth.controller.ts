import { Controller, Request, Post, Get, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { Response } from 'express'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth.service'
@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService) {}
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async profile(@Request() req) {
        return req.user
    }
    @UseGuards(AuthGuard('jwt'))
    @Get('test')
    async getTest(@Res() res: Response) :Promise<any> {
        return res.status(HttpStatus.OK).json({
            result: true,
            code: 0,
            message: 'success'
        })
    }
}
