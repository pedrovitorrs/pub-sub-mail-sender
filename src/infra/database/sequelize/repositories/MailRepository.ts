import { SequelizeBaseBaseRepository } from "./SequelizeBaseBaseRepository";

export default class MailRepository extends SequelizeBaseBaseRepository<
  string,
  any,
  any,
  any
> {
  async findById(id): Promise<any> {
    return this.model.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: { id },
    });
  }
}
