/**
 * Tiny console logger that can be enabled and disabled.
 *
 * @author J. Scott Smith
 * @license BSD-2-Clause-FreeBSD
 * @module dendra-console-logger
 */

class Logger {
  constructor (options) {
    this.methods = options.methods
    this.enabled = options.enabled // Must be done after methods is set
  }

  _nada () {} // Log methods re-routed here when disabled

  get enabled () { return this._enabled }
  set enabled (newEnabled) {
    this._enabled = newEnabled

    Object.keys(this.methods).forEach(key => {
      this[key] = newEnabled || key === 'error' || key === 'warn' ? this.methods[key] : this._nada
    })
  }
}

export default new Logger({
  enabled: true,
  methods: {
    error: console.error,
    info: console.info,
    log: console.log,
    time: console.time,
    timeEnd: console.timeEnd,
    warn: console.warn
  }
})
