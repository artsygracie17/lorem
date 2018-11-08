const ipsum = require('./ipsum')
const parallel = ipsum.parallel
const series = ipsum.series
const cb = () => {}

const mocks = require('./ipsum_mock')
const { exampleArray } = mocks


describe('Parallel Tests', () => {
  test('Empty array', () => {
    const mockFn = jest.fn()
    parallel([mockFn], cb)
    expect(mockFn).toHaveBeenCalled()
  })

  test('Example array', () => {
    const mockFn = jest.fn()
    parallel(exampleArray, cb)
    expect(exampleArray).toHaveBeenCalledTimes(9)
  })
})
