import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'
import { useContext } from 'react'
import {
  AppModalContextProps,
  AppModalContext
} from '../../store/context/AppModalContext'

export default function ModalContainer() {
  const { showModal, setShowModal, currentModalContent } =
    useContext<AppModalContextProps>(AppModalContext)

  return (
    <>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)}>
            {currentModalContent}
          </ModalContent>,
          document.body
        )}
    </>
  )
}
