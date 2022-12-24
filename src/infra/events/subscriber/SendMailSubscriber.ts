import { MailStatusType } from "../../database/sequelize/models";
import MailRepository from "../../database/sequelize/repositories/MailRepository";
import { IMailSender } from "../../mailer/protocols/IMailSender";
import { IEventData } from "../protocols";
import { MailSubjects } from "../subjects/MailSubject";
import { AbstractRedisSubscriber } from "./protocols/abstract-subscriber";

interface ISendMailEventData extends IEventData {
  payload: {
    id: string;
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;
  };
}

export default class SendMailSubscriber extends AbstractRedisSubscriber<ISendMailEventData> {
  constructor(
    private readonly mailRepository: MailRepository,
    private readonly mailSender: IMailSender
  ) {
    super();
  }
  subject = MailSubjects.CREATED_MAIL_QUEUE;

  async receiveMessage(data): Promise<void> {
    console.log("CREATED RECEIVED", data);
    try {
      await this.mailSender.sendMail(data);
      const mailer = await this.mailRepository.findById(data.mailId);
      mailer.mailStatus = MailStatusType.SENT;
      mailer.updatedAt = new Date();

      await this.mailRepository.updateById({ id: data.mailId }, mailer)
    } catch (error) {
      console.log(error);
    }
  }
}
