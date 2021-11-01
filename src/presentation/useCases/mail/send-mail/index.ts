import { SendMailController } from './SendMailController'
import { SendMailUseCase } from './SendMailUseCase'

import SendMailPublisher from '../../../../infra/database/redis/bull/publishers/SendMailPublisher'
import MailRepository from '../../../../infra/database/sequelize/repositories/MailRepository'
import { Mail } from '../../../../infra/database/sequelize/models/Mail'

const sendMailUseCase = new SendMailUseCase(
    new MailRepository(Mail),
    SendMailPublisher
)

const sendMailController = new SendMailController(
    sendMailUseCase
)

export {
    sendMailController,
    sendMailUseCase
}
