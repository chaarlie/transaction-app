export const getTransactions = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_HOST}/transaction/`)
  return response.json()
}
