import parseRates from "../parseRates"
import { describe, test, expect } from "vitest"

describe("parseRates is defined", () => {
  test("function parseRates should be defined", () => {
    expect(parseRates).toBeDefined()
  })
})

describe("parseRates should return an array", () => {
  test("function parseRates should return an array", () => {
    expect(parseRates("")).toBeDefined()
    expect(parseRates("")).toBeInstanceOf(Array)
  })
})

describe("parseRates should return an array of objects", () => {
  test("function parseRates should return an array of objects", () => {
    const rawData = '20 Aug 2025 #161\nCountry|Currency|Amount|Code|Rate\nAustralia|dollar|1|AUD|15.123'
    expect(parseRates(rawData)).toBeDefined()
    expect(parseRates(rawData)).toBeInstanceOf(Array)
    expect(parseRates(rawData)[0]).toBeInstanceOf(Object)
  })
})

describe("parseRates should return an array of objects with the correct properties", () => {
  test("function parseRates should return an array of objects with the correct properties", () => {
    const rawData = '20 Aug 2025 #161\nCountry|Currency|Amount|Code|Rate\nAustralia|dollar|1|AUD|15.123'
    expect(parseRates(rawData)[0]).toHaveProperty("country")
    expect(parseRates(rawData)[0]).toHaveProperty("currency")
    expect(parseRates(rawData)[0]).toHaveProperty("amount")
    expect(parseRates(rawData)[0]).toHaveProperty("code")
    expect(parseRates(rawData)[0]).toHaveProperty("rate")
  })
})

describe("parseRates should return an array of objects with the correct values", () => {
  test("function parseRates should return an array of objects with the correct values", () => {
    const rawData = '20 Aug 2025 #161\nCountry|Currency|Amount|Code|Rate\nAustralia|dollar|1|AUD|15.123'
    expect(parseRates(rawData)[0]).toHaveProperty("country", "Australia")
    expect(parseRates(rawData)[0]).toHaveProperty("currency", "dollar")
    expect(parseRates(rawData)[0]).toHaveProperty("amount", "1")
    expect(parseRates(rawData)[0]).toHaveProperty("code", "AUD")
    expect(parseRates(rawData)[0]).toHaveProperty("rate", "15.123")
  })
})