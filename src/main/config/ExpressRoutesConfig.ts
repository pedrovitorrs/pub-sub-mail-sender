import fs from 'fs'
import path from 'path'
import express, { Router } from 'express'
import { ApplicationConfig } from './protocols/ApplicationConfig'
import { handleError } from '@ifexcorp/rest-express-utils'
import EnvironmentHelper from '../../infra/helpers/EnvironmentHelper'

export default class ExpressRoutesConfig implements ApplicationConfig<express.Application> {
  config (app): void {
    const fn = path.resolve(__dirname, '..', 'routes')
    const routes = fs.readdirSync(fn)
      .filter(file => file.endsWith(process.env.NODE_ENV !== 'development' ? '.js' : '.ts'))
      .map(async (file) => {
        const Routes = (await import(`../routes/${file}`)).default
        const router = Router()
        new Routes().route(router)
        app.use(`/api/v1/${file.replace(file.slice(-9), '').toLowerCase()}`, router)
      })

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.all([...routes]).then(() => {
      app.get('/health', async (req, res) => res.status(200).send({ message: 'online' }))
      if (EnvironmentHelper.get<string>('NODE_ENV', 'development') !== 'production') {
        const docfilename = path.resolve(process.cwd(), 'docs-ui', 'apidoc')
        app.use('/api/docs', express.static(docfilename))
        app.use('/api/docs', (req, res, next) => {
          res.sendFile(path.resolve(process.cwd(), 'docs-ui', 'apidoc', 'index.html'))
        })
      }

      app.use(handleError)
    })
  }
}
