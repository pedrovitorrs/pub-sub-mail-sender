import crypto from 'crypto'

class GenerateActivationHelper {
  generateRangeNumber (min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  generateActivationToken (): string {
    return crypto.randomBytes(64).toString('hex')
  }

  /**
   * @deprecated
   */
  generateActivationCode (prefix: string, quantity: number): string {
    const numbers = Array(quantity)
      .fill(-1)
      .filter((_, index) => (index % 4) === 0)
      .map(() => this.generateRangeNumber(1111, 9999))
      .join('-')
    return `${prefix || 'A'}-${numbers}`
  }

  generatePrefixedCode (prefix: string, quantity: number, divisor?: number): string {
    divisor = divisor || 4
    const numbers = Array(quantity)
      .fill(-1)
      .filter((_, index) => (index % divisor) === 0)
      .map(() => this.generateRangeNumber(1111, 9999))
      .join('-')
    return `${prefix || 'A'}-${numbers}`
  }
}

export default new GenerateActivationHelper()
