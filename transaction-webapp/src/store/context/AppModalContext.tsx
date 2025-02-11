import { ReactNode, createContext, useReducer } from 'react'

export enum AppModalContextActionTypes {
  SET_SHOW_MODAL = 'SET_SHOW_MODAL',
  SET_CURRENT_MODAL = 'SET_CURRENT_MODAL'
}

export interface AppModalContextProps {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  currentModalContent: ReactNode | null
  setCurrentModalContent: (children: ReactNode) => void
}

const initialState: AppModalContextProps = {
  showModal: false,
  //@ts-ignore
  setShowModal: (showModal: boolean) => {},
  currentModalContent: null,
  //@ts-ignore
  setCurrentModalContent: (children: ReactNode) => {}
}

export const AppModalContext = createContext(initialState)

function appModalContextReducer(
  state: AppModalContextProps,
  action: { type: AppModalContextActionTypes; payload: any }
): AppModalContextProps {
  switch (action.type) {
    case AppModalContextActionTypes.SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload
      }

    case AppModalContextActionTypes.SET_CURRENT_MODAL:
      return {
        ...state,
        currentModalContent: action.payload
      }
    default: {
      return state
    }
  }
}

export const AppModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appModalContextReducer, initialState)

  function setShowModal(value: any) {
    dispatch({
      type: AppModalContextActionTypes.SET_SHOW_MODAL,
      payload: value
    })
  }

  function setCurrentModalContent(value: any) {
    dispatch({
      type: AppModalContextActionTypes.SET_CURRENT_MODAL,
      payload: value
    })
  }

  return (
    <AppModalContext.Provider
      value={{
        showModal: state.showModal,
        currentModalContent: state.currentModalContent,
        setShowModal,
        setCurrentModalContent
      }}
    >
      {children}
    </AppModalContext.Provider>
  )
}
