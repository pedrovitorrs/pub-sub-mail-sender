import { IEventManagerContext } from '../protocols/event-manager'
import { RedisClient } from 'redis'

export interface IRedisEventContext extends IEventManagerContext {
  client: RedisClient
}
