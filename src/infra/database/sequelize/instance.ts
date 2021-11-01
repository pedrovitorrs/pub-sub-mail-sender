/* eslint-disable @typescript-eslint/no-floating-promises */
import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import * as Models from './models'

let sequelize
export const sequelizeInstace = {
  getInstance () {
    if (!sequelize) {
      const sequelizeConfig: string = path.resolve(process.cwd(), 'sequelize-config.js')

      const { database, username, password, dialect, host } = require(sequelizeConfig)
      const models = Object.keys(Models).filter(key => !/(Type)/.test(key)).map(key => Models[key])
      sequelize = new Sequelize({
        database,
        dialect,
        host,
        username,
        password,
        storage: ':memory:',
        models
      })
    }
    return sequelize
  }
}
