import { useEffect, useState } from "react"
import { keys, map, pathOr } from "ramda"
import conversionCalculation from "../../../utils/conversion-calculation"

const ConverterForm = ({ ratesByCode }) => {
  const [amount, setAmount] = useState(0)
  const [convertTo, setConvertTo] = useState('')
  const [amountInRate, setAmountInRate] = useState(1)
  const [result, setResult] = useState(0)

  const calculateResult = () => {
    setResult(conversionCalculation(amountInRate, pathOr(1, [convertTo, 'rate'], ratesByCode), amount))
  }

  useEffect(() => {
    setAmountInRate(pathOr(1, [convertTo, 'amount'], ratesByCode))
    calculateResult()
  }, [convertTo, amount])

  return (
    <div className='d-flex flex-column gap-1'>
      <h2>Currency Converter</h2>
      <div className='d-flex justify-content-between gap-3'>
        <div className='d-flex flex-column align-items-start'>
          <label htmlFor="amount">Amount in Kč</label>
          <input id="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <div className='d-flex flex-column align-items-start'>
          <label htmlFor="convertTo">Convert to</label>
          <select id="convertTo" onChange={e => setConvertTo(e.target.value)} value={convertTo}>
            <option value=''>Select currency</option>
            {map(code => (
              <option key={code} value={code}>{code}</option>
            ), keys(ratesByCode))}
          </select>
        </div>
      </div>
      <div className='d-flex gap-3 align-items-center justify-content-center'>
        <h3>Result: {result.toFixed(2)} {convertTo}</h3>
      </div>
    </div>
  )
}

export default ConverterModal