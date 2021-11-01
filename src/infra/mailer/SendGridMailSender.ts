import { IMailSenderMessage, IMailSender, IMailSenderConfiguration } from './protocols/IMailSender'

export class SendGridMailSender implements IMailSender<any> {
  configure (configuration: IMailSenderConfiguration): any {
    return ''
  }

  async sendMail (message: IMailSenderMessage): Promise<void> {
    console.log('Send mail with sendgrid')
  }
}
