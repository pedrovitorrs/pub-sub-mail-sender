import dotenv from 'dotenv'
import EnvironmentHelper from '../helpers/EnvironmentHelper'

export default class EnvironmentLoader {
  static load (): void {
    const env: string = EnvironmentHelper.get('NODE_ENV', 'development')
    if (env !== 'production') {
      dotenv.config({ path: `.env.${env}`.replace(/\.$/, '') })
    }
  }
}
