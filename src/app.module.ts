import { PostsModule } from './posts/post.module';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts/entities/entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgresuser',
      password: 'newpassword',
      database: 'postgres',
      synchronize: true,
      entities: [Posts],
    }),
    PostsModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
