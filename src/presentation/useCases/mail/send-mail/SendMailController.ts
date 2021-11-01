import { Controller, HttpResponse, HttpRequest } from '../../../protocols/Controller'
import { HttpStatusCode } from '@ifexcorp/rest-http-errors'

import { SendMailDTO } from './SendMailDTO'
import { SendMailUseCase } from './SendMailUseCase'

import { transformObject } from '../../../utils/transformObject'
import { validateClass } from '../../../utils/validationErrors'

export class SendMailController implements Controller<HttpRequest,HttpResponse> {
    constructor (private readonly sendMailUseCase: SendMailUseCase) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        const dto = transformObject(SendMailDTO, httpRequest.body)
        await validateClass(dto)

        await this.sendMailUseCase.execute(dto)
        
        return {
          status: HttpStatusCode.CREATED,
          body: undefined
        }
    }
}
