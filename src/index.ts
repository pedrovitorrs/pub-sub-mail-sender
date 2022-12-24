import 'reflect-metadata'
import { HttpBootstrapApplication } from './infra/application/bootstrap/HttpBootstrapApplication'
import ExpressApplicationAdapter from './main/adapters/ExpressApplicationAdapter'
import EnvironmentHelper from './infra/helpers/EnvironmentHelper'
import EnvironmentLoader from './infra/env/EnvironmentLoader'
import { RedisEventLoader } from './infra/events/loader'

const main = (): void => {
  EnvironmentLoader.load()
  const port = EnvironmentHelper.get('APP_PORT', 3000)

  const server = new ExpressApplicationAdapter().start(port)
  new HttpBootstrapApplication(server)
    .bootstrap()
    .then(() => RedisEventLoader.load())
    .catch(console.error)
}

main()
