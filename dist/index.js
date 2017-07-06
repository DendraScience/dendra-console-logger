'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Tiny console logger that can be enabled and disabled.
 *
 * @author J. Scott Smith
 * @license BSD-2-Clause-FreeBSD
 * @module dendra-console-logger
 */

var Logger = function () {
  function Logger(options) {
    _classCallCheck(this, Logger);

    this.methods = options.methods;
    this.enabled = options.enabled; // Must be done after methods is set
  }

  _createClass(Logger, [{
    key: '_nada',
    value: function _nada() {} // Log methods re-routed here when disabled

  }, {
    key: 'enabled',
    get: function get() {
      return this._enabled;
    },
    set: function set(newEnabled) {
      var _this = this;

      this._enabled = newEnabled;

      Object.keys(this.methods).forEach(function (key) {
        _this[key] = newEnabled || key === 'error' || key === 'warn' ? _this.methods[key] : _this._nada;
      });
    }
  }]);

  return Logger;
}();

exports.default = new Logger({
  enabled: true,
  methods: {
    error: console.error,
    info: console.info,
    log: console.log,
    time: console.time,
    timeEnd: console.timeEnd,
    warn: console.warn
  }
});
module.exports = exports['default'];