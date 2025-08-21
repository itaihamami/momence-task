import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './App.css'
import Converter from './components/Converter'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Converter />
      </QueryClientProvider>
    </>
  )
}

export default App
