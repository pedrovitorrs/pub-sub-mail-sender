import { IsEmail, IsNotEmpty } from 'class-validator'
import { IAddres } from '../../../../infra/mailer/protocols/IMailSender'

export class SendMailDTO {
    @IsNotEmpty({ message: 'To is required!' })
    public to: IAddres
    @IsNotEmpty({ message: 'From is required!' })
    public from: IAddres
    @IsNotEmpty({ message: 'Subject is required!' })
    public subject: string
    @IsNotEmpty({ message: 'Text is required!' })
    public html: string
}