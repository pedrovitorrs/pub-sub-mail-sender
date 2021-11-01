export interface DatabaseRepository<ID = string, T = any, Q = any, R = any> {
    save: (payload: T) => Promise<R>
    findById: (id: ID) => Promise<R>
    findAll: (query?: Q) => Promise<R[]>
    updateById: (query: Q, payload: T) => Promise<void>
    softDelete: (id: ID) => Promise<void>
  }
  