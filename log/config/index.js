import winston from 'winston';
import { resolve } from 'path';

import config from 'config';

const { console: { level } } = config.get('log');
const { createLogger, format, transports } = winston;
const logger = createLogger({
  level,
  format: format.combine(
    format.colorize(),
    format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new transports.File({ filename: resolve(process.cwd(), 'log/files', 'error.log'), level: 'error' }),
    new transports.File({ filename: resolve(process.cwd(), 'log/files', 'combined.log') })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple()
  }));
}
export default logger;