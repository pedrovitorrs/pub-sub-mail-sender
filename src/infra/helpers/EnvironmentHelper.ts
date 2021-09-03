const cache = {}

export default class EnvironmentHelper {
  static get<T = any> (key: string, defaultValue?: T): T {
    if (!(key in process.env)) {
      if (defaultValue !== undefined) {
        return defaultValue
      }
      throw new Error(`⚠️ '${key}' is not found in process.env! ⚠️`)
    }

    if (!(key in cache)) {
      cache[key] = process.env[key]
    }

    return cache[key]
  }
}
