import { Controller, Get } from '@nestjs/common';
import { PostsService } from './post.service';
import { Posts } from './entities/entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('fetch')
  async fetchPosts(): Promise<{message: string}> {
    return this.postsService.getPosts();
  }
  
}
