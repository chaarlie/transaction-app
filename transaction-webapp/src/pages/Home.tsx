import { useContext } from 'react'
import Transactions from '../components/transactions/Transactions'
import ModalContainer from '../components/modals/ModalContainer'
import {
  AppModalContext,
  AppModalContextProps
} from '../store/context/AppModalContext'
import AddTransaction from '../components/transactions/AddTransaction'

function Home() {
  const { setShowModal, setCurrentModalContent } =
    useContext<AppModalContextProps>(AppModalContext)

  function handleButtonClick() {
    setCurrentModalContent(<AddTransaction />)
    setShowModal(true)
  }

  return (
    <section className="grid m-5 grid-cols-12" id="charlie">
      <div id="modal"></div>
      <div className="col-span-12 grid  grid-cols-12   ">
        <div className="col-span-3 p-2 -mt-1">
          <h2 className=" text-oak font-bold rounded text-2xl">
            {' '}
            Transaction List{' '}
          </h2>
        </div>

        <div className="col-span-9 justify-items-end p-2 ">
          <button
            onClick={handleButtonClick}
            className=" px-3 py-1 block text-white rounded bg-primary-green/95 hover:cursor-pointer  hover:bg-primary-green/90 active:bg-primary-green "
          >
            {' '}
            Add
          </button>
        </div>
      </div>
      <div className="col-start-2 col-span-10    ">
        <Transactions />
      </div>
      <ModalContainer />
    </section>
  )
}

export default Home
