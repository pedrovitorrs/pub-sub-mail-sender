import { DatabaseRepository } from '../../protocols/DataBaseRepository'

export abstract class SequelizeBaseBaseRepository<ID, T = any, Q = any, R = any> implements DatabaseRepository<ID, T, Q, R> {
  protected model: any
  constructor (model) {
    this.model = model
  }

  async findAll (query?: Q): Promise<R[]> {
    return this.model.findAll(query)
  }

  async save (payload: T): Promise<R> {
    const { id } = await this.model.create(payload)
    return this.model.findOne({ where: { id } })
  }

  async findById (id: ID): Promise<R> {
    return this.model.findOne({ where: { id } })
  }

  async updateById (query: Q, payload: T): Promise<void> {
    return this.model.update(payload, {
      where: query
    })
  }

  async softDelete (id: ID): Promise<void> {
    return this.model.update({ deleted: true }, { where: { id } })
  }

  async deleteById (id: string): Promise<void> {
    return this.model.destroy({
      where: { id }
    })
  }
}
