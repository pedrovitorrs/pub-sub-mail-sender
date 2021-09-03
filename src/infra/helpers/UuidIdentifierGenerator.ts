import { v4 } from 'uuid'

export class UuidIdentifierGenerator {
  static generate (): string {
    return v4()
  }
}
