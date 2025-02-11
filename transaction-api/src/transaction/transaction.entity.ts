import {
  Entity,
  Column,
  BaseEntity,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'transaction' })
export class TransactionEntity extends BaseEntity {
  @PrimaryColumn()
  transactionId: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column({
    nullable: true,
  })
  fromAccount: string;

  @Column({
    nullable: true,
  })
  toAccount: string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  transactionDate: Date;
}
