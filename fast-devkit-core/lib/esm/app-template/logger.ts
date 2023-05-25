import { createLogger, transports, format } from 'winston';

export const logger = createLogger({
  transports: [
    new transports.File({ filename: 'log/error.json', level: 'error' }),
    new transports.File({ filename: 'log/combined.json' }),
  ],
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json({ space: 2 }),
    format.printf((info) => {
      return JSON.stringify({
        timestamp: info.timestamp,
        level: info.level,
        message: info.message,
      });
    }),
  ),
});
