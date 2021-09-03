import { NodemailerMailSender } from "../../../../infra/mailer/NodemailerMailSender"
import { SendMailDTO } from "./SendMailDTO"

export class SendMailUseCase {
  constructor (
    private readonly nodemailerMailSender: NodemailerMailSender
  ) { }

  async execute (sendMailDTO: SendMailDTO): Promise<any> {
        // TODO - Terminar de implementar função que faz o envio do email
        //this.nodemailerMailSender.configure()
        //return this.nodemailerMailSender.sendMail(sendMailDTO)
        return console.log(sendMailDTO)
    }
}