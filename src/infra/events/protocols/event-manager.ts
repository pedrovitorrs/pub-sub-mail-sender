export interface IEventManagerContext {}

export interface IEventManager<T extends IEventManagerContext> {
  initialize: (context: T) => void
}
