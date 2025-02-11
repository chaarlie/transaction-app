import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  getAllTransactions() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  async getTransactionById(@Param('id') id: string) {
    return this.transactionService.findOne(id);
  }

  @Post()
  createTransaction(@Body() payload: TransactionDto) {
    return this.transactionService.createOne(payload);
  }
  @Patch(':id')
  updateTransaction(@Param('id') id: string, @Body() payload: TransactionDto) {
    return this.transactionService.updateTransaction(id, payload);
  }

  @Delete(':id')
  deleteTransaction(@Param('id') id: string) {
    this.transactionService.remove(id);
  }
}
