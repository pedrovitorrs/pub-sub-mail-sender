import { IEventData } from './event-data'

export interface Subscriber<T extends IEventData> {
  subscribe: () => void
  receiveMessage: (data: T['payload']) => Promise<void>
  unpackageEventData: (payload: any) => any

}
