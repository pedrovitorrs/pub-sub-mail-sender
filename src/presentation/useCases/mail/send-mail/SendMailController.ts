import ExceptionHandler from '../../../../domain/helpers/exception-handler/ExceptionHandler'
import { Controller, HttpResponse, HttpRequest } from '../../../protocols/Controller'
import { ExpressValidationError } from '@ifexcorp/rest-express-utils'

import { SendMailDTO } from './SendMailDTO'
import { SendMailUseCase } from './SendMailUseCase'

import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

export class SendMailController implements Controller<HttpRequest,HttpResponse> {
    constructor (private readonly sendMailUseCase: SendMailUseCase) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        const dto = plainToClass(SendMailDTO, httpRequest.body)
        const validationErrors = await validate(dto)

        ExceptionHandler.throwWhen(
            validationErrors.length > 0,
            new ExpressValidationError(
              validationErrors.map(error => ({
                param: error.property,
                msg: Object.values(error.constraints)[0]
              }))
            )
        )

        const data = await this.sendMailUseCase.execute(dto)
        
        return {status: 200, body: data}
    }
}
