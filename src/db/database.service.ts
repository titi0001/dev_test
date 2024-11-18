import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit() {
    try {
      await this.initializeDatabase();
      this.logger.log('Data Source has been initialized successfully!');
    } catch (err) {
      this.logger.error('Error during Data Source initialization:', err);
      process.exit(1);
    }
  }

  private async initializeDatabase() {
    await new Promise((resolve) => setTimeout(resolve, 20000));
    if (!this.dataSource.isInitialized) {
      await this.dataSource.initialize();
    }
  }
}
