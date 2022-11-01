import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { join } from 'path';
const parentDir = join(__dirname, '..');

const connectionOpts: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME || 'typescript-koa',
  entities: [
    `${parentDir}/**/*.entity.ts`,
  ],
  synchronize: true,
};

const connection:Promise<Connection> = createConnection(connectionOpts);

export default connection;