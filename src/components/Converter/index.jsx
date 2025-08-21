import { useMemo } from "react"
import { either, indexBy, isEmpty, isNil, map, prop } from "ramda"
import useGetLatestRates from "../../hooks/useGetLatestRates"
import { Cell, HeadCell, Row, Table } from "./styles"
import ConverterForm from "./components/ConverterForm"

const Converter = () => {
  const { isLoading, error, rates } = useGetLatestRates()

  const ratesByCode = useMemo(() => {
    return rates ? indexBy(prop('code'), rates) : {}
  }, [rates])

  return <section id="converter">
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {!error && !isLoading && !either(isEmpty, isNil)(rates) && (
      <div className="d-flex flex-column gap-3">
        <ConverterForm ratesByCode={ratesByCode} />
        <h2>Latest Exchange Rates</h2>
        <Table>
          <thead>
            <Row>
              <HeadCell>Country</HeadCell>
              <HeadCell>Currency</HeadCell>
              <HeadCell>Amount</HeadCell>
              <HeadCell>Code</HeadCell>
              <HeadCell>Rate</HeadCell>
            </Row>
          </thead>
          <tbody>
            {map(rate => (
              <Row key={rate.code}>
                <Cell>{rate.country}</Cell>
                <Cell>{rate.currency}</Cell>
                <Cell>{rate.amount}</Cell>
                <Cell>{rate.code}</Cell>
                <Cell>{rate.rate}</Cell>
              </Row>
            ), rates)}
          </tbody>
        </Table>
      </div>
    )}
  </section>
}

export default Converter