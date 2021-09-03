import { IMailSender, IMessage, IMailSenderConfiguration} from "./protocols/IMailSender";
import nodemailer, { Transporter } from 'nodemailer'

export class NodemailerMailSender implements IMailSender {
    private transport = Transporter
    configure (mailSenderConfiguration: IMailSenderConfiguration): any {
        this.transport = nodemailer.createTransport(mailSenderConfiguration)
    }

    async sendMail(message: IMessage): Promise<void> {
        return this.transport.sendMail(message)
    }
}