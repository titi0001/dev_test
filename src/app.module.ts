import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AppDataSource } from './db/data-source.cli';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...AppDataSource.options,
      }),
    }),
    UserModule,
    PostModule,
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  async onModuleInit() {
    try {
      await AppDataSource.initialize();
      this.logger.log('Database connection initialized successfully!');
    } catch (error) {
      this.logger.error('Database initialization failed', error.stack);
      process.exit(1);
    }
  }
}
