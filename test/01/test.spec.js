/**
 * Main tests
 */

describe('Module', function () {
  let logger

  it('should import', function () {
    logger = require('../../dist')

    expect(logger).to.have.property('enabled')
  })

  it('should ref console methods when enabled', function () {
    logger.enabled = true

    expect(logger).to.have.property('error', console.error)
    expect(logger).to.have.property('info', console.info)
    expect(logger).to.have.property('log', console.log)
    expect(logger).to.have.property('time', console.time)
    expect(logger).to.have.property('timeEnd', console.timeEnd)
    expect(logger).to.have.property('warn', console.warn)
  })

  it('should unref console methods when disabled', function () {
    logger.enabled = false

    expect(logger).to.have.property('error', console.error)
    expect(logger).to.have.property('info', logger._nada)
    expect(logger).to.have.property('log', logger._nada)
    expect(logger).to.have.property('time', logger._nada)
    expect(logger).to.have.property('timeEnd', logger._nada)
    expect(logger).to.have.property('warn', console.warn)
  })
})
