import redis, { RedisClient } from 'redis'
import bluebird from 'bluebird'
import EnvironmentHelper from '../../helpers/EnvironmentHelper'

bluebird.promisifyAll(redis)

const client = redis.createClient({
  host: EnvironmentHelper.get('REDIS_HOST', '127.0.0.1'),
  port: EnvironmentHelper.get<number>('REDIS_PORT', 6379),
  password: EnvironmentHelper.get('REDIS_PASSWORD', '')
})

export const clientSubscriber = redis.createClient({
  host: EnvironmentHelper.get('REDIS_HOST', '127.0.0.1'),
  port: EnvironmentHelper.get<number>('REDIS_PORT', 6379),
  password: EnvironmentHelper.get('REDIS_PASSWORD', '')
})

export const clientPublisher = redis.createClient({
  host: EnvironmentHelper.get('REDIS_HOST', '127.0.0.1'),
  port: EnvironmentHelper.get<number>('REDIS_PORT', 6379),
  password: EnvironmentHelper.get('REDIS_PASSWORD', '')
})

export const createClient = (): RedisClient => {
  return redis.createClient({
    host: EnvironmentHelper.get('REDIS_HOST', '127.0.0.1'),
    port: EnvironmentHelper.get<number>('REDIS_PORT', 6379),
    password: EnvironmentHelper.get('REDIS_PASSWORD', '')
  })
}

export default client