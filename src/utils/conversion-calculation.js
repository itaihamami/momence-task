/**
 * Calculates the result of a currency conversion
 * @param {number} amountInRate - The amount in the rate currency
 * @param {number} conversionRate - The conversion rate
 * @param {number} amountInCzk - The amount in CZK
 * @returns {number} The result of the conversion
 */

const conversionCalculation = (amountInRate=0, conversionRate=1, amountInCzk=0) =>
  amountInCzk / conversionRate * amountInRate

export default conversionCalculation