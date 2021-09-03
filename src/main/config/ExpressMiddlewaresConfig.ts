import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import { ApplicationConfig } from './protocols/ApplicationConfig'

export default class ExpressMiddlewaresConfig implements ApplicationConfig<express.Application> {
  config (app): void {
    app.use(express.urlencoded({ extended: false, limit: '1kb' }))
    app.use(express.json({ limit: '50mb' }))
    app.set(helmet())
    app.use(cors())
  }
}
