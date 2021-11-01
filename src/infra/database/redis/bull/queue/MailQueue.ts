import { Queue } from 'bullmq'
import { MailSubjects } from '../subject/MailSubject'

export const MailQueue = new Queue(MailSubjects.CREATED_MAIL_QUEUE)