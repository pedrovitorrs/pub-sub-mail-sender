import http from 'http'
import express from 'express'
import { HttpServer } from './protocols/HttpServer'

class ExpressHttpServer implements HttpServer {
  app: any
  server: http.Server
  port: number

  constructor ({ routesSetup, middlewaresSetup, options }) {
    this.app = express()
    this.server = http.createServer(this.app)
    this.port = options.port

    routesSetup(this.app)
    middlewaresSetup(this.app)
  }

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  start (): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server = this.server.listen(this.port)
      this.server.on('error', (error) => reject(error))
      this.server.on('listening', () => {
        resolve()
      })
    })
  }

  // eslint-disable-next-line @typescript-eslint/promise-function-async
  stop (): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.close(err => {
        if (err) reject(err)
        else resolve()
      })
    })
  }
}

export default ExpressHttpServer