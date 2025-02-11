import { ReactNode } from 'react'

export default function ModalContent({
  children,
  onClose
}: {
  children: ReactNode
  onClose: () => void
}) {
  return (
    <div className="modal absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <button onClick={onClose} className="bg-slate-300 w-8 h-8 cursor-pointer">
        X
      </button>
      {children}
    </div>
  )
}
