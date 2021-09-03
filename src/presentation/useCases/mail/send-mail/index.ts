import { SendMailController } from './SendMailController'
import { SendMailUseCase } from './SendMailUseCase'

import { NodemailerMailSender } from '../../../../infra/mailer/NodemailerMailSender'

const sendMailUseCase = new SendMailUseCase(
    new NodemailerMailSender
)

const sendMailController = new SendMailController(
    sendMailUseCase
)

export {
    sendMailController,
    sendMailUseCase
}
