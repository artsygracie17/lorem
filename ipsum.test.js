const ipsum = require('./ipsum')
const parallel = ipsum.parallel
const series = ipsum.series
const cb = () => {}

describe('Parallel Tests', () => {
  test('Empty array', () => {
    const mockFn = jest.fn()
    parallel([mockFn], cb)
    expect(mockFn).toHaveBeenCalled()
  })
})
