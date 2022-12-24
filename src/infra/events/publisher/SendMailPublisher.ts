import { AbstractRedisPublisher } from './abstract-publisher'
import { IEventData } from '../protocols'
import { IPayload } from './protocols/IPayload'
import { MailSubjects } from '../subjects/MailSubject'

// TODO Create a my EventData
interface ISendMailEventData extends IEventData {
  payload: IPayload
}

// TODO Create a Publisher
export class SendMailPublisher extends AbstractRedisPublisher<ISendMailEventData> {
  subject = MailSubjects.CREATED_MAIL_QUEUE
}
