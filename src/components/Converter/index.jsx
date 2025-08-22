import { useMemo } from "react"
import { either, indexBy, isEmpty, isNil, map, prop } from "ramda"
import useGetLatestRates from "../../hooks/useGetLatestRates"
import ConverterForm from "./components/ConverterForm"
import RatesTable from "./components/RatesTable"

const Converter = () => {
  const { isLoading, error, rates } = useGetLatestRates()

  const ratesByCode = useMemo(() => {
    return rates ? indexBy(prop('code'), rates) : {}
  }, [rates])

  return <section id="converter">
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {!error && !isLoading && !either(isEmpty, isNil)(rates) && (
      <div className="d-flex flex-column gap-2">
        <ConverterForm ratesByCode={ratesByCode} />
        <hr />
        <RatesTable rates={rates} />
      </div>
    )}
  </section>
}

export default Converter