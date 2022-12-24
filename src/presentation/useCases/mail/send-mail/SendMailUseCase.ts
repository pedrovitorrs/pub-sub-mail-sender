import MailEntity from "../../../../domain/entities/MailEntity/Mail"
import { SendMailPublisher } from "../../../../infra/events/publisher/SendMailPublisher"
import MailRepository from "../../../../infra/database/sequelize/repositories/MailRepository"
import { NodemailerMailSender } from "../../../../infra/mailer/NodemailerMailSender"
import { SendMailDTO } from "./SendMailDTO"

export class SendMailUseCase {
  constructor (
    private readonly mailRepository: MailRepository,
    private readonly sendMailPublisher: SendMailPublisher
  ) { }

  async execute (sendMailDTO: SendMailDTO): Promise<any> {
        const mailEntity = new MailEntity(sendMailDTO.from, sendMailDTO.to, sendMailDTO.subject, sendMailDTO.html)
        
        const { id } = await this.mailRepository.save(mailEntity)
        sendMailDTO.mailId = id;
        await this.sendMailPublisher.publish(sendMailDTO)
    }
}