import { Subscriber, IEventData } from '../../protocols'
import { RedisClient } from 'redis'

export abstract class AbstractSubscriber<C, T extends IEventData> implements Subscriber<IEventData> {
  protected client: C
  abstract subject: T['subject']

  abstract subscribe (): void
  abstract receiveMessage (data: T['payload']): Promise<void>

  public setClient (client: C): void {
    this.client = client
  }

  unpackageEventData (payload: any): any {
    return typeof payload === 'object' ? payload : JSON.parse(payload)
  }
}

export abstract class AbstractRedisSubscriber<T extends IEventData> extends AbstractSubscriber<RedisClient, T> {
  subscribe (): void {
    this.client.on('message', (channel, message) => {
      const payload = this.unpackageEventData(message)
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.receiveMessage(payload)
    })

    console.log('this.subject', this.subject)
    this.client.subscribe(this.subject)
    console.log(`Channel: ${this.subject}`)
  }
}
