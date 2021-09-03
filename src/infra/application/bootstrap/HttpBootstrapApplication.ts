import { BootstrapApplication } from './protocols/BootstrapApplication'
import ExpressHttpServer from '../../http/server/ExpressHttpServer'

export class HttpBootstrapApplication extends BootstrapApplication<ExpressHttpServer> {
    async bootstrap (): Promise<void> {  
      return await this.server.start()
    }
}