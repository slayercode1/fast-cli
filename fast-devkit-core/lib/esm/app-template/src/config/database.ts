import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { logger } from '../../logger';
import { Example } from '../resources/example.entity';
import { ExampleMigration1685034068562 } from '../migrations/1685034068562-exemple-migration';

config();

export const Database = new DataSource({
  type: 'mysql',
  host: process.env.DBHOST,
  port: +process.env.DBPORT,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  entities: [Example],
  migrations: [ExampleMigration1685034068562],
  migrationsRun: true,
  migrationsTableName: 'versioning',
  logging: +process.env.DEBUG === 1,
  synchronize: +process.env.DEV === 1,
});

export async function initializeDatabase() {
  try {
    await Database.initialize();
    logger.info('Database connected');
  } catch (error) {
    logger.error(error);
  }
}
