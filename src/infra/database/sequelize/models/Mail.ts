import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript'

export enum MailStatusType {
    PROCESSING= 'PROCESSING',
    SENT= 'SENT',
    ERROR= 'ERROR',
}

@Table({
  modelName: 'Mail',
  freezeTableName: true,
  tableName: 'Mail',
  timestamps: true
})
export class Mail extends Model {    
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  mailFrom: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  mailTo: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  mailSubject: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  mailText: string

  @Column({
    type: DataType.ENUM(),
    values: [MailStatusType.PROCESSING, MailStatusType.SENT, MailStatusType.ERROR]
  })
  mailStatus: string
}