import { IMail as Mail } from '../interfaces/IMail'
import { Queue } from 'bullmq'
import { MailSubjects } from '../subject/MailSubject'
import { MailQueue } from '../queue/MailQueue'

export class SendMailPublisher {
  constructor (private readonly queue: Queue) {}

  async publish (payload: Mail): Promise<void> {
    await this.queue.add(MailSubjects.CREATED_MAIL_QUEUE, payload)
  }
}

export default new SendMailPublisher(MailQueue)
