import { IEventData } from './event-data'

export interface Publisher<T extends IEventData> {
  publish: (eventName: string, data: T['payload']) => Promise<void>

  packageEventData: (data: T) => any
}
