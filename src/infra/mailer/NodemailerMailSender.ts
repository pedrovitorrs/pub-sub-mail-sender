import { IMailSenderMessage, IMailSender, IMailSenderConfiguration } from './protocols/IMailSender'
import nodemailer, { Transporter } from 'nodemailer'
import EnvironmentHelper from '../helpers/EnvironmentHelper'

export class NodemailerMailSender implements IMailSender<any> {
  private transport: Transporter

  configure ({ host, port, secure, auth }: IMailSenderConfiguration): any {
    this.transport = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: auth.user, // generated ethereal user
        pass: auth.pass // generated ethereal password
      }
    })
  }

  async sendMail (message: IMailSenderMessage): Promise<void> {
    return await this.transport.sendMail({
      from: message.from,
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text
    })
  }
}
