import { useContext, useEffect, useState } from 'react'
import {
  AppModalContextProps,
  AppModalContext
} from '../../store/context/AppModalContext'
import { Transaction } from '../../typings'
import UpdateTransaction from './UpdateTranaction'
import { useQueryClient, useMutation } from '@tanstack/react-query'

import { deleteTransaction } from '../../services/api/deleteTransaction'

function TransactionRow(transaction: Transaction) {
  const [transactionDeleteId, setTransactionDeleteId] = useState<string>('')

  const { setShowModal, setCurrentModalContent } =
    useContext<AppModalContextProps>(AppModalContext)

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: () => deleteTransaction(transactionDeleteId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
    }
  })

  function handleEditButtonClick(id: string) {
    setCurrentModalContent(<UpdateTransaction id={id} />)
    setShowModal(true)
  }

  function handleDeleteButtonClick(id: string) {
    setTransactionDeleteId(id)
  }

  useEffect(() => {
    if (transactionDeleteId) {
      mutation.mutate()
    }
  }, [transactionDeleteId])

  return (
    <tr className="mt-5">
      <td>{transaction.title}</td>
      <td>{transaction.description}</td>
      <td>{transaction.fromAccount}</td>
      <td>{transaction.toAccount}</td>
      <td className="flex gap-3 ">
        <button
          onClick={() => handleEditButtonClick(transaction.transactionId)}
          className="px-3 py-1 block text-white rounded bg-sky-700/95 hover:cursor-pointer  hover:bg-sky-700/90 active:bg-sky-700"
        >
          {' '}
          Edit{' '}
        </button>
        <button
          onClick={() => handleDeleteButtonClick(transaction.transactionId)}
          className="px-3 py-1 block text-white rounded bg-red-600/95 hover:cursor-pointer  hover:bg-red-600/90 active:bg-red-600"
        >
          {' '}
          Remove
        </button>
      </td>
    </tr>
  )
}

export default TransactionRow
