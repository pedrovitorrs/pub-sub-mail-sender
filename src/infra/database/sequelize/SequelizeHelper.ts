import { sequelizeInstace } from './instance'

export class SequelizeHelper {
  async authenticateDB (): Promise<void> {
    await sequelizeInstace.getInstance().authenticate()
  }
}
