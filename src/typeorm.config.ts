/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres ',
  password: 'Dhaivik@2002',
  database: 'project',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;