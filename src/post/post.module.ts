import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { ServiceModule } from './service/service.module';

@Module({
  controllers: [PostController],
  imports: [ServiceModule]
})
export class PostModule {}
