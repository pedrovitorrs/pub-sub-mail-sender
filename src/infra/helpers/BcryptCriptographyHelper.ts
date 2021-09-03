import bcrypt from 'bcrypt'
import { CryptographyHelper } from './protocols/CryptographyHelper'

export class BcryptCriptographyHelper implements CryptographyHelper {
  encrypt (plainText: string): string {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(plainText, salt)
  }

  compare (plainText: string, hash: string): boolean {
    return bcrypt.compareSync(plainText, hash)
  }
}

export default new BcryptCriptographyHelper()
