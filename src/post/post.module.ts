import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { ServiceModule } from './service/service.module';
import { PostService } from './post.service';

@Module({
  controllers: [PostController],
  imports: [ServiceModule],
  providers: [PostService]
})
export class PostModule {}
