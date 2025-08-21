import { useQuery } from "@tanstack/react-query"
import getRates from "../services/getRates"
import parseRates from "../services/parseRates"

const useGetLatestRates = () => {
  const { data, isLoading, error } = useQuery({queryKey: ['rates'], queryFn: getRates})
  const rates = parseRates(data)

  return { isLoading, error, rates }
}

export default useGetLatestRates