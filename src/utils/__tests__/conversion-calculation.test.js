import { describe, test, expect } from 'vitest'
import conversionCalculation from '../conversion-calculation'

describe('conversionCalculation', () => {
  test('calculates basic conversion correctly', () => {
    // 100 CZK to EUR with rate 25.5
    const result = conversionCalculation(1, 25.5, 100)
    expect(result).toBeCloseTo(3.92, 2) // 100 / 25.5 * 1
  })

  test('handles different currency amounts', () => {
    // 100 CZK to USD with rate 22.8 (USD amount is 1)
    const result = conversionCalculation(1, 22.8, 100)
    expect(result).toBeCloseTo(4.39, 2) // 100 / 22.8 * 1
  })

  test('handles currencies with amount bigger than 1', () => {
    // 100 CZK to JPY with rate 0.15 (JPY amount is 100)
    // This simulates currencies where the rate is for 100 units
    const result = conversionCalculation(100, 0.15, 100)
    expect(result).toBeCloseTo(66666.67, 2) // 100 / 0.15 * 100
  })

  test('handles zero amounts', () => {
    const result = conversionCalculation(1, 25.5, 0)
    expect(result).toBe(0)
  })

  test('handles zero conversion rate', () => {
    const result = conversionCalculation(1, 0, 100)
    expect(result).toBe(Infinity) // Division by zero
  })

  test('handles negative amounts', () => {
    const result = conversionCalculation(1, 25.5, -100)
    expect(result).toBe(-3.9215686274509802)
  })

  test('handles decimal amounts', () => {
    const result = conversionCalculation(1, 25.5, 50.5)
    expect(result).toBeCloseTo(1.98, 2) // 50.5 / 25.5 * 1
  })

  test('handles large numbers', () => {
    const result = conversionCalculation(1, 25.5, 10000)
    expect(result).toBeCloseTo(392.16, 2) // 10000 / 25.5 * 1
  })

  test('handles small numbers', () => {
    const result = conversionCalculation(1, 25.5, 0.01)
    expect(result).toBeCloseTo(0.0004, 4) // 0.01 / 25.5 * 1
  })

  test('uses default parameters correctly', () => {
    const result = conversionCalculation()
    expect(result).toBe(0) // 0 / 1 * 0
  })

  test('handles partial default parameters', () => {
    const result = conversionCalculation(1, 25.5) // amountInCzk defaults to 0
    expect(result).toBe(0)
  })

  test('handles edge case with very small rate', () => {
    const result = conversionCalculation(1, 0.0001, 100)
    expect(result).toBeCloseTo(1000000, 0) // 100 / 0.0001 * 1
  })

  test('handles edge case with very large rate', () => {
    const result = conversionCalculation(1, 999999, 100)
    expect(result).toBeCloseTo(0.0001, 4) // 100 / 999999 * 1
  })
})
