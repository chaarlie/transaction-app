import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Home from './pages/Home'
import { AppModalProvider } from './store/context/AppModalContext'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppModalProvider>
        <main className="grid grid-cols-12 border-2 border-shade-3  w-3/4 grid-flow-row mx-auto bg-natural">
          <div className="col-span-10 col-start-2  justify-center">
            <Home />
          </div>
        </main>
      </AppModalProvider>
    </QueryClientProvider>
  )
}

export default App
