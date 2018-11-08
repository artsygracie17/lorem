const ipsum = require('./ipsum')
const parallel = ipsum.parallel
const series = ipsum.series
const mocks = require('./ipsum_mock')
const cb = () => {}


describe('Parallel Tests', () => {
  test('Single function in array', () => {
    const mockFn = jest.fn()
    parallel([mockFn], cb)
    expect(mockFn).toHaveBeenCalled()
  })

//   test('Empty array', () => {
//     parallel([], cb)
//     expect(mockFn).toHaveBeenCalled()
//   })

  test('Calls exampleArray functions in order', async () => {
    // expect.assertions(1);
    const data = await parallel(mocks.exampleArray, cb);
    expect(mocks.exampleArray[0](() => {})).toHaveBeenCalled()
  });

  test('Calls all fns in array', async () => {
    const mockFns = [jest.fn(), jest.fn(), jest.fn()]
    const data = await parallel(mockFns, cb);
    mockFns.forEach(fn => {
        expect(fn).toHaveBeenCalled()
    })
  });
})
