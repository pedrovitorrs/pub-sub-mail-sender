import MailEntity from "../../../../domain/entities/MailEntity/Mail"
import { SendMailPublisher } from "../../../../infra/database/redis/bull/publishers/SendMailPublisher"
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
        
        await this.mailRepository.save(mailEntity)
        await this.sendMailPublisher.publish({ mailId: mailEntity.id })
    }
}