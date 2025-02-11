import { NewTransactionType } from '../../typings'

export interface TransactionFormProps {
  label: string
  transaction: NewTransactionType
  setTransaction: (transaction: any) => void
  handleSubmit: (e: React.FormEvent) => void
}
export default function TransactionForm({
  label,
  transaction,
  setTransaction,
  handleSubmit
}: TransactionFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setTransaction((prevData: any) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <div className="max-w-lg mx-auto p-6  rounded-lg shadow-md bg-stone">
      <h2 className="capitalize text-2xl font-semibold text-center mb-4">
        {label}
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={transaction.title}
            onChange={handleChange}
            required
            className="mt-1 bg-white block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={transaction.description}
            onChange={handleChange}
            rows={3}
            required
            className="mt-1 bg-white  block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            required
            className="mt-1 bg-white  block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="fromAccount"
            className="block text-sm font-medium text-gray-700"
          >
            From Account
          </label>
          <input
            type="text"
            id="fromAccount"
            name="fromAccount"
            value={transaction.fromAccount}
            onChange={handleChange}
            required
            className="mt-1 bg-white  block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="toAccount"
            className="block text-sm font-medium text-gray-700"
          >
            To Account
          </label>
          <input
            type="text"
            id="toAccount"
            name="toAccount"
            value={transaction.toAccount}
            onChange={handleChange}
            required
            className="mt-1 bg-white  block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="capitalize w-full x-3 py-1 block text-white rounded bg-sky-700/95 hover:cursor-pointer  hover:bg-sky-700/90 active:bg-sky-700"
          >
            {label}
          </button>
        </div>
      </form>
    </div>
  )
}
