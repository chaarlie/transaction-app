import { NewTransactionType } from '../../typings'

export const createTransaction = async (transaction: NewTransactionType) => {
  const response = await fetch(`${import.meta.env.VITE_API_HOST}/transaction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transaction)
  })

  if (!response.ok) {
    throw new Error('Failed to add transaction')
  }

  return response.json()
}
