export interface IMailSenderConfiguration {
    host: string
    service?: string
    port: number
    secure: boolean
    auth: IMailSenderAuthConfiguration
  }
  
  export interface IMailSenderAuthConfiguration {
    user: string
    pass: string
  }
  
  export interface IMailSenderMessage {
    from: string
    to: string
    subject: string
    text: string
    html: string
  }
  export interface IMailSender<T = any> {
    configure: (configuration: IMailSenderConfiguration) => T
    sendMail: (message: IMailSenderMessage) => Promise<void>
  }
  