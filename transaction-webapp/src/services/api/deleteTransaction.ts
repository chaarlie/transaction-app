export const deleteTransaction = async (id: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_HOST}/transaction/${id}`,
    {
      method: 'DELETE'
    }
  )

  if (!response.ok) {
    throw new Error('Failed to update transaction')
  }
}
