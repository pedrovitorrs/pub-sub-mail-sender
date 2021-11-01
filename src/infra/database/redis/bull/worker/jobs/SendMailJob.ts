import { IMail } from "../../interfaces/IMail";
import { Job } from "bullmq";
import { MailSenderFactory } from "../../../../../mailer/MailSenderFactory";
import { Mail } from "../../../../sequelize/models/Mail";
import MailRepository from "../../../../sequelize/repositories/MailRepository";

export default async (job: Job<IMail>): Promise<void> => {
  const mailEntity = await new MailRepository(Mail).findById(job.data.mailId);
  console.log(mailEntity.dataValues);
  await new MailSenderFactory().getMailSender().sendMail({
    from: `mailcontext - ${mailEntity.dataValues.mailFrom}`,
    subject: `${mailEntity.dataValues.mailFrom}`,
    to: `${mailEntity.dataValues.mailTo}`,
    html: `
            <div>
              ${mailEntity.dataValues.mailText}
            <div>
          `,
    text: `
        ${mailEntity.dataValues.mailText}
          `,
  });
};
