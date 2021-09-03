/**
 * Cryptography base interface
 *
 * Should be extended and implemented.
 */

export interface CryptographyHelper {
  encrypt: (plainText: string) => string
  compare: (plainText: string, hash: string) => boolean
}
