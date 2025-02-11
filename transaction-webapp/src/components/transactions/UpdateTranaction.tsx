import React, { useEffect, useState } from 'react'

import TransactionForm from './TransactionForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UpdateTransactionType } from '../../typings'
import { updateTransaction } from '../../services/api/updateTransaction'
import { getTransactionById } from '../../services/api/getTransactionById'

export default function UpdateTransaction({ id }: { id: string }) {
  const [formData, setFormData] = useState<UpdateTransactionType>({
    title: '',
    description: '',
    amount: 0,
    fromAccount: '',
    toAccount: ''
  })

  useEffect(() => {
    if (id) {
      getTransactionById(id).then((data) => {
        setFormData(data)
      })
    }
  }, [id])

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: () => updateTransaction(id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      queryClient.refetchQueries({ queryKey: ['transactions'] })
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate(formData)
  }

  return (
    <TransactionForm
      label="update transaction"
      transaction={formData}
      setTransaction={setFormData}
      handleSubmit={handleSubmit}
    />
  )
}
