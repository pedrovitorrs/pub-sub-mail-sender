import { RedisEventManager } from "../manager";
import { RedisEventContextBuilder } from "../context";
import SendMailSubscriber from "../subscriber/SendMailSubscriber";

import redisClient, { clientSubscriber } from "../../database/redis/index";
import MailRepository from "../../database/sequelize/repositories/MailRepository";
import { Mail } from "../../database/sequelize/models/Mail";
import { MailSenderFactory } from "../../mailer/MailSenderFactory";

class RedisEventLoader {
  load(): void {
    RedisEventManager.addSubscriber(
      new SendMailSubscriber(
        new MailRepository(Mail),
        new MailSenderFactory().getMailSender()
      )
    ).initialize(RedisEventContextBuilder.client(clientSubscriber).build());
  }
}

export default new RedisEventLoader();
