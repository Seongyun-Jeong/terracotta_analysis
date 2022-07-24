var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module759 = require('./759'),
  module760 = require('./760'),
  module676 = require('./676'),
  module675 = require('./675'),
  h = 'RNFirebasePerformance';

exports.MODULE_NAME = h;
var w = 'perf';
exports.NAMESPACE = w;

var M = {
    CONNECT: true,
    DELETE: true,
    GET: true,
    HEAD: true,
    OPTIONS: true,
    PATCH: true,
    POST: true,
    PUT: true,
    TRACE: true,
  },
  b = (function (t) {
    function p(t) {
      module356.default(this, p);
      return module358.default(
        this,
        module361.default(p).call(this, t, {
          moduleName: h,
          hasMultiAppSupport: false,
          hasCustomUrlSupport: false,
          namespace: w,
        })
      );
    }

    module362.default(p, t);
    module357.default(p, [
      {
        key: 'setPerformanceCollectionEnabled',
        value: function (t) {
          if ('boolean' != typeof t) throw new Error('firebase.perf().setPerformanceCollectionEnabled() requires a boolean value');
          return module675.getNativeModule(this).setPerformanceCollectionEnabled(t);
        },
      },
      {
        key: 'newTrace',
        value: function (t) {
          if ('string' != typeof t) throw new Error('firebase.perf().newTrace() requires a string value');
          return new module759.default(this, t);
        },
      },
      {
        key: 'newHttpMetric',
        value: function (t, n) {
          if ('string' != typeof t || 'string' != typeof n) throw new Error('firebase.perf().newHttpMetric() requires url and httpMethod string values');
          if (!M[n]) throw new Error('firebase.perf().newHttpMetric() httpMethod should be one of ' + Object.keys(M).join(', '));
          return new module760.default(this, t, n);
        },
      },
    ]);
    return p;
  })(module676.default);

exports.default = b;
exports.statics = {};
