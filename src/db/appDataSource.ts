import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const createAppDataSource = (
  configService: ConfigService,
): DataSource => {
  return new DataSource({
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT') || 3306,
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: configService.get<boolean>('TYPEORM_SYNC') || false,
  });
};
