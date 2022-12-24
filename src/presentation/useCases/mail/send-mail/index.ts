import { SendMailController } from './SendMailController'
import { SendMailUseCase } from './SendMailUseCase'

import { SendMailPublisher } from "../../../../infra/events/publisher/SendMailPublisher"
import MailRepository from '../../../../infra/database/sequelize/repositories/MailRepository'
import { Mail } from '../../../../infra/database/sequelize/models/Mail'
import RedisClient, { clientPublisher } from '../../../../infra/database/redis'

const sendMailUseCase = new SendMailUseCase(
    new MailRepository(Mail),
    new SendMailPublisher(clientPublisher)
)

const sendMailController = new SendMailController(
    sendMailUseCase
)

export {
    sendMailController,
    sendMailUseCase
}
