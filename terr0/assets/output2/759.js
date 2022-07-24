var module356 = require('./356'),
  module675 = require('./675');

class c {
  constructor(n, f) {
    module356.default(this, t);
    this._perf = n;
    this.identifier = f;
  }

  getAttribute(t) {
    return module675.getNativeModule(this._perf).getTraceAttribute(this.identifier, t);
  }

  getAttributes() {
    return module675.getNativeModule(this._perf).getTraceAttributes(this.identifier);
  }

  getMetric(t) {
    return module675.getNativeModule(this._perf).getTraceLongMetric(this.identifier, t);
  }

  incrementMetric(t, u) {
    return module675.getNativeModule(this._perf).incrementTraceMetric(this.identifier, t, u);
  }

  putAttribute(t, u) {
    return module675.getNativeModule(this._perf).putTraceAttribute(this.identifier, t, u);
  }

  putMetric(t, u) {
    return module675.getNativeModule(this._perf).putTraceMetric(this.identifier, t, u);
  }

  removeAttribute(t) {
    return module675.getNativeModule(this._perf).removeTraceAttribute(this.identifier, t);
  }

  start() {
    return module675.getNativeModule(this._perf).startTrace(this.identifier);
  }

  stop() {
    return module675.getNativeModule(this._perf).stopTrace(this.identifier);
  }
}

export default c;
