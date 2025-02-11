import { Injectable } from '@nestjs/common';
import { TransactionEntity } from './transaction.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDto } from './transaction.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepository: Repository<TransactionEntity>,
  ) {}

  createOne(payload: TransactionDto): Promise<TransactionEntity> {
    const transaction = new TransactionEntity();
    transaction.transactionId = uuidv4();
    transaction.title = payload.title;
    transaction.description = payload.description;
    transaction.amount = payload.amount;
    transaction.fromAccount = payload.fromAccount;
    transaction.toAccount = payload.toAccount;

    return this.transactionRepository.save(transaction);
  }

  updateTransaction(id: string, payload: TransactionDto) {
    this.transactionRepository.update(id, payload);
  }

  findAll(): Promise<TransactionEntity[]> {
    return this.transactionRepository.find();
  }

  findOne(id: string): Promise<TransactionEntity | null> {
    return this.transactionRepository.findOneBy({ transactionId: id });
  }

  remove(id: string) {
    this.transactionRepository.delete(id);
  }
}
