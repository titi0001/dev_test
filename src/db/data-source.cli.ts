import { ConfigModule, ConfigService } from '@nestjs/config';
import { createAppDataSource } from './appDataSource';

ConfigModule.forRoot();

const configService = new ConfigService();
export const AppDataSource = createAppDataSource(configService);
