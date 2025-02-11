import { UpdateTransactionType } from '../../typings'

export const updateTransaction = async (
  id: string,
  transaction: UpdateTransactionType
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_HOST}/transaction/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    }
  )

  if (!response.ok) {
    throw new Error('Failed to update transaction')
  }
}
