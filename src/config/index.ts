import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'imob',
  password: 'imob',
  database: 'imob',
  entities: [User],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
} as TypeOrmModuleOptions;
