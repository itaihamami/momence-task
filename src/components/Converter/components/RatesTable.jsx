import { map } from "ramda"
import { Cell, HeadCell, Row, Table } from "../styles"

const RatesTable = ({ rates }) => {
  return (
    <>
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
    </>
  )
}

export default RatesTable