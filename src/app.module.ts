import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersController } from './users/users.controller';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
//import { DotenvConfigOptions } from 'dotenv';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://sghosh:sghosh19@cluster0-sdw5r.mongodb.net/NestjsDemo',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
