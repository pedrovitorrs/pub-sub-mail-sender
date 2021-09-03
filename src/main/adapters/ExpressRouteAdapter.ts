import express from 'express'
import { catchAsync } from '@ifexcorp/rest-express-utils'

export default class ExpressRouteAdapter {
  static route (fn): express.Handler {
    return catchAsync(async (req, res, next): Promise<void> => {
      try {
        const httpRequest = {
          body: req.body,
          headers: req.headers,
          auth: {
            token: req['token'],
            tokenPayload: req['tokenPayload']
          },
          params: req.params,
          query: req.query
        }

        const result = await fn(httpRequest)
        res.status(result.status).json(result)
      } catch (err) {
        next(err)
      }
    })
  }
}