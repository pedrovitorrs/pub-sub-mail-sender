export default class BaseRedisRepository {
    redisClient: any
    constructor (redisClient) {
      this.redisClient = redisClient
    }
}