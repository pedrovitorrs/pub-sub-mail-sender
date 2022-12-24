import { RedisClient } from 'redis'
import { IRedisEventContext } from './RedisEventContext'

class RedisEventContextBuilder {
  private _client: RedisClient

  client (client: RedisClient): RedisEventContextBuilder {
    this._client = client
    return this
  }

  build (): IRedisEventContext {
    return {
      client: this._client
    }
  }
}

export default new RedisEventContextBuilder()
