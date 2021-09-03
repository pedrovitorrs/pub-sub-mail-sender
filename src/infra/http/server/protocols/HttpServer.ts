import { Server } from './Server'

export class HttpServer implements Server {
  start: () => Promise<void>

  stop: () => Promise<void>
}
