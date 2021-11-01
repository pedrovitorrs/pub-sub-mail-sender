import { UuidIdentifierGenerator } from "../../../infra/helpers/UuidIdentifierGenerator"

export enum MailStatusType {
    PROCESSING= 'PROCESSING',
    SENT= 'SENT',
    ERROR= 'ERROR',
}

export default class MailEntity {
  id: string
  mailFrom: string
  mailTo: string
  mailSubject: string
  mailText: string
  mailStatus: MailStatusType

  constructor (mailFrom: string, mailTo: string, mailSubject: string, mailText: string) {
    this.id = UuidIdentifierGenerator.generate()
    this.mailFrom = mailFrom,
    this.mailTo = mailTo,
    this.mailSubject = mailSubject,
    this.mailText = mailText
    this.mailStatus = MailStatusType.PROCESSING
  }
}
