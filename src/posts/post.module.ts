import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { PostsService } from "./post.service";
import { PostsController } from './post.controller';
import { Posts } from './entities/entity';
import { MailService } from './mail.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts]), 
  ],
  providers: [PostsService, MailService],
  controllers: [PostsController],
})
export class PostsModule {}