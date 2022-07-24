var module284 = require('./284'),
  module356 = require('./356'),
  module675 = require('./675');

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function f(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      l(Object(u), true).forEach(function (o) {
        module284.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      l(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

class s {
  constructor(n) {
    module356.default(this, t);
    this.shouldAutoComplete = true;
    var u = module675.getNativeModule(n);
    this._backgroundFetchResult = {
      noData: u.backgroundFetchResultNoData,
      newData: u.backgroundFetchResultNewData,
      failure: u.backgroundFetchResultFailed,
    };
  }

  backgroundFetchResult() {
    return f({}, this._backgroundFetchResult);
  }
}

export default s;
