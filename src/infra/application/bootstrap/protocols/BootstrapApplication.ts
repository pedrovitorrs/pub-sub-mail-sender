export abstract class BootstrapApplication<T = any> {
    server: T
    constructor (server: T) {
      this.server = server
    }
  
    abstract bootstrap (): Promise<void>
}