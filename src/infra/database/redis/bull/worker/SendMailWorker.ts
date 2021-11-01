import { Worker } from 'bullmq'
import EnvironmentHelper from '../../../../helpers/EnvironmentHelper'
import { MailSubjects } from '../subject/MailSubject'
import SendMailJob from './jobs/SendMailJob'

const sendMailWorker = new Worker(MailSubjects.CREATED_MAIL_QUEUE, SendMailJob, {
  connection: {
    host: EnvironmentHelper.get('REDIS_HOST', '127.0.0.1'),
    port: Number(EnvironmentHelper.get('REDIS_PORT', '6379')),
    password: EnvironmentHelper.get('REDIS_PASSWORD', '')
  },
  concurrency: Number(EnvironmentHelper.get('BULLMQ_CONCURRENCY', '1'))
})

export {
    sendMailWorker
}
