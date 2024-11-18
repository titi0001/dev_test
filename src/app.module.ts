import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { DatabaseService } from './db/database.service';
import { AppDataSource } from './db/appDataSource';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: AppDataSource,
      inject: [AppDataSource],
    }),
    UserModule,
    PostModule,
  ],
  providers: [DatabaseService],
})
export class AppModule {}
