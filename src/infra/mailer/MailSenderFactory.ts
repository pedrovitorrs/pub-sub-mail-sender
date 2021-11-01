import EnvironmentHelper from '../helpers/EnvironmentHelper'
import { NodemailerMailSender } from './NodemailerMailSender'
import { IMailSender } from './protocols/IMailSender'
import { SendGridMailSender } from './SendGridMailSender'

export class MailSenderFactory {
  getMailSender (): IMailSender {
    const env = EnvironmentHelper.get('NODE_ENV', 'development')
    const mailSender = (env === 'development') ? new NodemailerMailSender() : new SendGridMailSender()

    mailSender.configure({
      host: EnvironmentHelper.get<string>('SMTP_HOST', ''),
      port: EnvironmentHelper.get<number>('SMTP_PORT'),
      secure: EnvironmentHelper.get<boolean>('SMTP_SECURE', false),
      auth: {
        user: EnvironmentHelper.get<string>('SMTP_FROM'), // generated ethereal user
        pass: EnvironmentHelper.get<string>('SMTP_PASS') // generated ethereal password
      }
    })

    return mailSender
  }
}
