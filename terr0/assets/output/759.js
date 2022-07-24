var module356 = require('./356'),
  module675 = require('./675'),
  c = (function () {
    function t(n, f) {
      module356.default(this, t);
      this._perf = n;
      this.identifier = f;
    }

    module357.default(t, [
      {
        key: 'getAttribute',
        value: function (t) {
          return module675.getNativeModule(this._perf).getTraceAttribute(this.identifier, t);
        },
      },
      {
        key: 'getAttributes',
        value: function () {
          return module675.getNativeModule(this._perf).getTraceAttributes(this.identifier);
        },
      },
      {
        key: 'getMetric',
        value: function (t) {
          return module675.getNativeModule(this._perf).getTraceLongMetric(this.identifier, t);
        },
      },
      {
        key: 'incrementMetric',
        value: function (t, u) {
          return module675.getNativeModule(this._perf).incrementTraceMetric(this.identifier, t, u);
        },
      },
      {
        key: 'putAttribute',
        value: function (t, u) {
          return module675.getNativeModule(this._perf).putTraceAttribute(this.identifier, t, u);
        },
      },
      {
        key: 'putMetric',
        value: function (t, u) {
          return module675.getNativeModule(this._perf).putTraceMetric(this.identifier, t, u);
        },
      },
      {
        key: 'removeAttribute',
        value: function (t) {
          return module675.getNativeModule(this._perf).removeTraceAttribute(this.identifier, t);
        },
      },
      {
        key: 'start',
        value: function () {
          return module675.getNativeModule(this._perf).startTrace(this.identifier);
        },
      },
      {
        key: 'stop',
        value: function () {
          return module675.getNativeModule(this._perf).stopTrace(this.identifier);
        },
      },
    ]);
    return t;
  })();

exports.default = c;
