export interface ApplicationConfig<T = any> {
  config: (app: T) => void
}
