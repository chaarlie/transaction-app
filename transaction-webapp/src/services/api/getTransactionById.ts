export const getTransactionById = async (id: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_HOST}/transaction/${id}`
  )
  return response.json()
}
