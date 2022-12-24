import { Publisher, IEventData } from '../protocols'
import { RedisClient } from 'redis'

export abstract class AbstractPublisher<C, T extends IEventData> implements Publisher<IEventData> {
  abstract subject: T['subject']
  protected client: C
  constructor (client: C) {
    this.client = client
  }

  abstract publish (data: T['payload']): Promise<void>

  packageEventData (payload: T['payload']): any {
    return typeof payload === 'object' ? JSON.stringify(payload) : payload
  }
}

export abstract class AbstractRedisPublisher<T extends IEventData> extends AbstractPublisher<RedisClient, T> {
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  publish (data: T['payload']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(
        this.subject,
        this.packageEventData(data),
        (err) => {
          if (err) return reject(err)
          resolve()
        })
    })
  }
}
