import React, { useState } from 'react'
import { NewTransactionType } from '../../typings'
import TransactionForm from './TransactionForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTransaction } from '../../services/api/createTransaction'

export default function AddTransaction() {
  const [formData, setFormData] = useState<NewTransactionType>({
    title: '',
    description: '',
    amount: 0,
    fromAccount: '',
    toAccount: ''
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate(formData)
  }

  return (
    <TransactionForm
      label="add transaction"
      transaction={formData}
      setTransaction={setFormData}
      handleSubmit={handleSubmit}
    />
  )
}
