/**
 * Parse the raw data from the CNB API
 * @param {string} rawData - The raw data from the CNB API
 * @dataFormat
 * 20 Aug 2025 #161
 * Country|Currency|Amount|Code|Rate
 * Australia|dollar|1|AUD|13.534
 * @returns {Object} - The parsed data
 */

import { drop, either, isEmpty, isNil, map, pipe, reject, split } from "ramda"

const parseRates = rawData =>
  either(isEmpty, isNil)(rawData) 
  ? [] 
  : pipe(
        split('\n')
      , drop(2)
      , reject(isEmpty)
      , map(split('|'))
      , map(([country, currency, amount, code, rate]) => ({ country, currency, amount, code, rate })),
  )(rawData)

export default parseRates