import { Logger } from 'winston'
import { LoggerHelper } from './protocols/LoggerHelper'
import WinstonLoggerFactory from '../factory/WinstonLoggerFactory'

class WinstonLoggerHelper implements LoggerHelper {
  logger: Logger

  constructor () {
    this.logger = WinstonLoggerFactory.getLogger()
  }

  log ({ level, message }): void {
    this.logger.log(level, this.parseMessage(message))
  }

  error (message): void {
    this.log({
      level: 'error',
      message
    })
  }

  info (message): void {
    this.log({
      level: 'info',
      message
    })
  }

  warn (message): void {
    this.log({
      level: 'info',
      message
    })
  }

  parseMessage (message): string {
    return message instanceof Error ? message.message : message
  }
}

export default new WinstonLoggerHelper()
