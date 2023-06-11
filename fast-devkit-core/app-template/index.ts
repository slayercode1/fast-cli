import express from 'express';
import { createServer } from 'node:http';
import { config } from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import { logger } from './logger';
import cors from 'cors';
import corsOptions from './cors/waitlist';
import { configureRoutes } from '@ghost_/fast-utils';
import { initializeDatabase } from './src/config/database';
import limiter from './limiter';
import { ExampleController } from './src/resources/controller';

config();
const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(limiter);
// app.use(cors(corsOptions));
// app.use()

initializeDatabase();
configureRoutes(app, [ExampleController]);

server.listen(PORT, () => {
  logger.info('This server is running');
});
