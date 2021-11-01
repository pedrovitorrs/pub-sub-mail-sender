import { ClassConstructor, plainToClass } from 'class-transformer'

export const transformObject = <F = unknown, T = unknown>(to: ClassConstructor<F>, from: T): F => {
  return plainToClass(to, from)
}