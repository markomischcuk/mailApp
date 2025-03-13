import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './entities/entity';
import axios from 'axios';
import { MailService } from './mail.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
    private readonly mailService: MailService,
  ) {}

  async getPosts(): Promise<{ message: string }> {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const postsData = response.data;

      const savedPosts = [];
      for (const postData of postsData) {
        const post = this.postsRepository.create({
          title: postData.title,
          body: postData.body,
          userId: postData.userId,
        });

        const savedPost = await this.postsRepository.save(post);
        savedPosts.push(savedPost);
      }

      await this.mailService.sendMail(
        process.env.PASSWORD,
        'Posts Added',
        `A total of ${savedPosts.length} posts were added successfully.`,
      );

      return { message: 'ok200ok' };
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Error fetching posts from API');
    }
  }
}
