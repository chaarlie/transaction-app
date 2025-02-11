import { useQuery } from '@tanstack/react-query'
import { Transaction } from '../../typings'
import TransactionList from './TransactionList'
import { getTransactions } from '../../services/api/getTransactions'

function Transactions() {
  const { isPending, error, data, isFetching } = useQuery<Transaction[]>({
    queryKey: ['transactions'],
    queryFn: getTransactions
  })

  return (
    <div>
      {isPending ? 'Loading...' : null}
      {error ? 'An error has occurred: ' + error.message : null}
      {isFetching ? 'Updating...' : null}
      {data ? <TransactionList transactions={data} /> : null}
    </div>
  )
}

export default Transactions
