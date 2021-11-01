import { validate } from 'class-validator'
import ExceptionHandler from '../../domain/helpers/exception-handler/ExceptionHandler'
import { ExpressValidationError } from '@ifexcorp/rest-express-utils'

export const validateClass = async (dto: any): Promise<void> => {
  const validationErrors = await validate(dto)

  ExceptionHandler.throwWhen(
    validationErrors.length > 0,
    new ExpressValidationError(
      validationErrors.map(
        error => ({ param: error.property, msg: Object.values(error.constraints)[0] })
      )
    )
  )
}
