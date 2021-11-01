import path from 'path'
import { createLogger, format, Logger, transports } from 'winston'

class WinstonLoggerFactory {
  private readonly logger: Logger
  constructor () {
    this.logger = this.createLogger()
  }

  createLogger (): Logger {
    const logfilename = path.resolve(process.cwd(), 'logs')
    const infoFilter = format((info, opts) => (info.level === 'info' ? info : false))
    const warnFilter = format((info, opts) => (info.level === 'warn' ? info : false))

    return createLogger({
      format: format.combine(
        format.timestamp({
          format: 'DD-MM-YYYY HH:mm:ss'
        }),
        format.json(),
        format.prettyPrint(),
        format.colorize()
      ),
      transports: [
        new transports.Console({
          format: format.combine(
            format.simple(),
            format.printf(({ level, message }) => `${level}: ${message}`)
          )
        }),
        new transports.File({
          filename: path.resolve(logfilename, 'error.log'),
          level: 'error',
          maxFiles: 10,
          maxsize: 1048576
        }),
        new transports.File({
          filename: path.resolve(logfilename, 'warn.log'),
          level: 'warn',
          maxFiles: 10,
          maxsize: 1048576,
          format: warnFilter()
        }),
        new transports.File({
          filename: path.resolve(logfilename, 'info.log'),
          level: 'info',
          maxFiles: 10,
          maxsize: 1048576,
          format: infoFilter()
        })
      ]
    })
  }

  getLogger (): Logger {
    return this.logger
  }
}

export default new WinstonLoggerFactory()
