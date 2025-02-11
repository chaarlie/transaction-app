export interface Transaction {
  transactionId: string
  title: string
  description: string
  amount: number
  fromAccount: string
  toAccount: string
  transactionDate: string
}

export type NewTransactionType = Omit<
  Transaction,
  'transactionId' | 'transactionDate'
>
export type UpdateTransactionType = NewTransaction
