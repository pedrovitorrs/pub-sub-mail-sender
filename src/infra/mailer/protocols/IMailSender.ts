export interface IAddres {
    email: string
    name: string
}

export interface IMailSenderAuth {
    user: string
    pass: string
}

export interface IMailSenderConfiguration {
    host: string
    port: number
    secure: boolean
    auth: IMailSender
}

export interface IMessage {
    to: IAddres
    from: IAddres
    subject: string
    html: string
}

export interface IMailSender<T = IMailSenderConfiguration> {
    configure: (configuration: IMailSenderConfiguration) => T
    sendMail(message: IMessage): Promise<void>;
}