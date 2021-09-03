import ExpressHttpServer from '../../infra/http/server/ExpressHttpServer'
import ExpressMiddlewaresConfig from '../config/ExpressMiddlewaresConfig'
import ExpressRoutesConfig from '../config/ExpressRoutesConfig'

export default class ExpressApplicationAdapter {
  start (port: number): ExpressHttpServer {
    return new ExpressHttpServer({
      routesSetup: new ExpressRoutesConfig().config.bind(ExpressRoutesConfig),
      middlewaresSetup: new ExpressMiddlewaresConfig().config.bind(ExpressMiddlewaresConfig),
      options: { port }
    })
  }
}
