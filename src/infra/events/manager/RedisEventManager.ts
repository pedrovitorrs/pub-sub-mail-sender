import { IEventManager } from '../protocols/event-manager'
import { IRedisEventContext } from '../context/RedisEventContext'
import { AbstractSubscriber } from '../subscriber/protocols/abstract-subscriber'
import { Subscriber, IEventData } from '../protocols'
import { RedisClient } from 'redis'
import { createClient } from '../../database/redis/index'

class RedisEventManager implements IEventManager<IRedisEventContext> {
  private readonly subscribers: Array<AbstractSubscriber<RedisClient, IEventData>> = []
  addSubscriber (sub: AbstractSubscriber<RedisClient, IEventData>): RedisEventManager {
    this.subscribers.push(sub)
    return this
  }

  initialize (context: IRedisEventContext): void {
    for (const sub of this.subscribers) {
      console.log(sub)
      sub.setClient(createClient())
      sub.subscribe()
    }
  }
}

export default new RedisEventManager()
