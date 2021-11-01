import { IsEmail, IsNotEmpty } from 'class-validator'

export class SendMailDTO {
    @IsNotEmpty({ message: 'To is required!' })
    public to: string

    @IsNotEmpty({ message: 'From is required!' })
    public from: string
    
    @IsNotEmpty({ message: 'Subject is required!' })
    public subject: string
    
    @IsNotEmpty({ message: 'Text is required!' })
    public html: string
}