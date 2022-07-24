var module46 = require('./46'),
  module12 = require('./12'),
  module22 = require('./22');

function c(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function l(n) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      c(Object(s), true).forEach(function (o) {
        module46(n, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
    else
      c(Object(s)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return n;
}

import module3 from './3';

class f {
  constructor() {
    var n =
      arguments.length > 0 && undefined !== arguments[0]
        ? arguments[0]
        : {
            viewAreaCoveragePercentThreshold: 0,
          };
    module22(this, t);
    this._hasInteracted = false;
    this._timers = new Set();
    this._viewableIndices = [];
    this._viewableItems = new Map();
    this._config = n;
  }

  dispose() {
    this._timers.forEach(clearTimeout);
  }

  computeViewableItems(t, n, o, s, c) {
    var l = this._config,
      f = l.itemVisiblePercentThreshold,
      v = l.viewAreaCoveragePercentThreshold,
      b = null != v,
      y = b ? v : f;
    module3(null != y && (null != f) != (null != v), 'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold');
    var p = [];
    if (0 === t) return p;

    var w = -1,
      _ = c || {
        first: 0,
        last: t - 1,
      },
      I = _.first,
      O = _.last;

    if (O >= t) {
      console.warn(
        'Invalid render range computing viewability ' +
          JSON.stringify({
            renderRange: c,
            itemCount: t,
          })
      );
      return [];
    }

    for (var k = I; k <= O; k++) {
      var P = s(k);

      if (P) {
        var j = P.offset - n,
          S = j + P.length;

        if (j < o && S > 0) {
          w = k;
          if (h(b, y, j, S, o, P.length)) p.push(k);
        } else if (w >= 0) break;
      }
    }

    return p;
  }

  onUpdate(t, n, o, s, c, l, u) {
    var f = this;

    if ((!this._config.waitForInteraction || this._hasInteracted) && 0 !== t && s(0)) {
      var h = [];
      if (
        (t && (h = this.computeViewableItems(t, n, o, s, u)),
        this._viewableIndices.length !== h.length ||
          !this._viewableIndices.every(function (t, n) {
            return t === h[n];
          }))
      )
        if (((this._viewableIndices = h), this._config.minimumViewTime)) {
          var v = setTimeout(function () {
            f._timers.delete(v);

            f._onUpdateSync(h, l, c);
          }, this._config.minimumViewTime);

          this._timers.add(v);
        } else this._onUpdateSync(h, l, c);
    }
  }

  resetViewableIndices() {
    this._viewableIndices = [];
  }

  recordInteraction() {
    this._hasInteracted = true;
  }

  _onUpdateSync(t, o, s) {
    var c = this;
    t = t.filter(function (t) {
      return c._viewableIndices.includes(t);
    });
    var u = this._viewableItems,
      f = new Map(
        t.map(function (t) {
          var n = s(t, true);
          return [n.key, n];
        })
      ),
      h = [],
      v = f,
      b = Array.isArray(v),
      y = 0;

    for (v = b ? v : v['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
      var p;

      if (b) {
        if (y >= v.length) break;
        p = v[y++];
      } else {
        if ((y = v.next()).done) break;
        p = y.value;
      }

      var w = module12(p, 2),
        _ = w[0],
        I = w[1];
      if (!u.has(_)) h.push(I);
    }

    var O = u,
      k = Array.isArray(O),
      P = 0;

    for (O = k ? O : O['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
      var j;

      if (k) {
        if (P >= O.length) break;
        j = O[P++];
      } else {
        if ((P = O.next()).done) break;
        j = P.value;
      }

      var S = module12(j, 2),
        T = S[0],
        A = S[1];
      if (!f.has(T))
        h.push(
          l({}, A, {
            isViewable: false,
          })
        );
    }

    if (h.length > 0) {
      this._viewableItems = f;
      o({
        viewableItems: Array.from(f.values()),
        changed: h,
        viewabilityConfig: this._config,
      });
    }
  }
}

function h(t, n, o, s, c, l) {
  if (b(o, s, c)) return true;
  var u = v(o, s, c);
  return 100 * (t ? u / c : u / l) >= n;
}

function v(t, n, o) {
  var s = n ** o - t ** 0;
  return 0 ** s;
}

function b(t, n, o) {
  return t >= 0 && n <= o && n > t;
}

module.exports = f;
