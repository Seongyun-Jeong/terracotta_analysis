var module356 = require('./356'),
  module675 = require('./675');

class o {
  constructor(s, h, o) {
    module356.default(this, t);
    this._perf = s;
    this.url = h;
    this.httpMethod = o;
  }

  getAttribute(t) {
    return module675.getNativeModule(this._perf).getHttpMetricAttribute(this.url, this.httpMethod, t);
  }

  getAttributes() {
    return module675.getNativeModule(this._perf).getHttpMetricAttributes(this.url, this.httpMethod);
  }

  putAttribute(t, u) {
    return module675.getNativeModule(this._perf).putHttpMetricAttribute(this.url, this.httpMethod, t, u);
  }

  removeAttribute(t) {
    return module675.getNativeModule(this._perf).removeHttpMetricAttribute(this.url, this.httpMethod, t);
  }

  setHttpResponseCode(t) {
    return module675.getNativeModule(this._perf).setHttpMetricResponseCode(this.url, this.httpMethod, t);
  }

  setRequestPayloadSize(t) {
    return module675.getNativeModule(this._perf).setHttpMetricRequestPayloadSize(this.url, this.httpMethod, t);
  }

  setResponseContentType(t) {
    return module675.getNativeModule(this._perf).setHttpMetricResponseContentType(this.url, this.httpMethod, t);
  }

  setResponsePayloadSize(t) {
    return module675.getNativeModule(this._perf).setHttpMetricResponsePayloadSize(this.url, this.httpMethod, t);
  }

  start() {
    return module675.getNativeModule(this._perf).startHttpMetric(this.url, this.httpMethod);
  }

  stop() {
    return module675.getNativeModule(this._perf).stopHttpMetric(this.url, this.httpMethod);
  }
}

export default o;
