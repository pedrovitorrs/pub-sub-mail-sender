import { SequelizeHelper } from '../../database/sequelize/SequelizeHelper'
import WinstonLoggerHelper from '../../helpers/WinstonLoggerHelper'
import ExpressHttpServer from '../../http/server/ExpressHttpServer'
import { BootstrapApplication } from './protocols/BootstrapApplication'
import { Job } from 'bullmq'

import { sendMailWorker } from '../../database/redis/bull/worker/SendMailWorker'
import { IMail as Mail } from '../../database/redis/bull/interfaces/IMail'

export class HttpBootstrapApplication extends BootstrapApplication<ExpressHttpServer> {
  configureProcessHandlers (): void {
    const gracefulShutdown = (arg: any): void => {
      let exitCode = 0
      if (arg instanceof Error) {
        WinstonLoggerHelper.error(arg)
        exitCode = 1
      }
      this.server.stop().finally(() => process.exit(exitCode))
    }

    process.on('SIGTERM', gracefulShutdown)
    process.on('SIGINT', gracefulShutdown)
    process.on('uncaughtException', gracefulShutdown)
    process.on('unhandledRejection', gracefulShutdown)
  }

  async bootstrap (): Promise<void> {
    this.configureProcessHandlers()
    await new SequelizeHelper().authenticateDB()
    sendMailWorker.on('completed', (job: Job<Mail>) => {})
    sendMailWorker.on('failed', (job: Job<Mail>, err: Error) => {})

    return await this.server.start()
  }
}
