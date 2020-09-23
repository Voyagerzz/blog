import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose'
import { BlogModule } from './blog/blog.module'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
const modules = [
  BlogModule, 
  AuthModule, 
  UsersModule
]
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/blog', { useNewUrlParser: true }), ...modules],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
