import express from 'express';
import { createServer } from 'node:http';
import { config } from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import { logger } from './logger';
import cors from 'cors';
import corsOptions from './cors/waitlist';
import { initializeDatabase } from './src/config/database';
import limiter from './limiter';
import { configureRoutes } from '@fast/utils';
import errorHandler from './src/middlewares/handlers-errors';

config();
const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(limiter);
app.use(cors(corsOptions));
app.use(errorHandler);

initializeDatabase();
configureRoutes(app, []);

server.listen(PORT, () => {
  logger.info('This server is running');
});
