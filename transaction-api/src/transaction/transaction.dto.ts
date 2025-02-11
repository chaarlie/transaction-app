export class TransactionDto {
  title: string;
  description: string;
  amount: number;
  fromAccount: string;
  toAccount: string;
  constructor(payload: TransactionDto) {
    Object.assign(this, payload);
  }
}
