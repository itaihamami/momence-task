import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './App.css'
import Converter from './components/Converter'
import Header from './components/Header'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Converter />
      </QueryClientProvider>
    </>
  )
}

export default App
