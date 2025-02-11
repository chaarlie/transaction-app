import { Transaction } from '../../typings'
import TransactionRow from './TransactionRow'

export type TransactionListProps = {
  transactions: Transaction[]
}

function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="w-full max-h-78 overflow-y-scroll ">
      <table className="border-separate w-full border-gray-400">
        <thead className="uppercase">
          <tr className="bg-primary-green text-white  ">
            <th>title</th>
            <th>description</th>
            <th>from account</th>
            <th>to account</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionRow key={transaction.transactionId} {...transaction} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionList
