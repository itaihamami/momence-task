import { describe, test, expect, vi, beforeEach } from "vitest"

vi.mock("../../api/api", () => ({
  default: {
    get: vi.fn()
  }
}))

import getRates from "../getRates"

describe("getRates is defined", () => {
  test("function getRates should be defined", () => {
    expect(getRates).toBeDefined()
  })
})

describe('getRates', () => {
  let mockApi
  beforeEach(async () => {
    vi.clearAllMocks()
    const apiModule = await import("../../api/api")
    mockApi = apiModule.default
  })

  test('should return rates', async () => {
    const mockResponse = {
      status: 200,
      statusText: "OK",
      data: '20 Aug 2025 #161\nCountry|Currency|Amount|Code|Rate\nAustralia|dollar|1|AUD|15.123'
    }

    mockApi.get.mockResolvedValue(mockResponse)

    const result = await getRates()

    expect(result).toEqual(mockResponse.data)
    expect(mockApi.get).toHaveBeenCalledWith('/daily.txt')
  })

  test('should throw an error if the response status is not 200', async () => {
    const mockResponse = {
      status: 404,
      statusText: "Not Found",
      data: ''
    }

    mockApi.get.mockResolvedValue(mockResponse)

    await expect(getRates()).rejects.toThrow('HTTP 404: Not Found')
  })
})