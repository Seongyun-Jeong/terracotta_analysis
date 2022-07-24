var module12 = require('./12'),
  module22 = require('./22'),
  module29 = require('./29'),
  module147 = require('./147');

function c() {
  s.addFileSource('react_hierarchy.txt', function () {
    return require('./327')();
  });
}

var s = (function () {
  function s() {
    module22(this, s);
  }

  module23(s, null, [
    {
      key: '_maybeInit',
      value: function () {
        if (!s._subscription) {
          s._subscription = module29.addListener('collectBugExtraData', s.collectExtraData, null);
          c();
        }

        if (!s._redboxSubscription) s._redboxSubscription = module29.addListener('collectRedBoxExtraData', s.collectExtraData, null);
      },
    },
    {
      key: 'addSource',
      value: function (t, o) {
        return this._addSource(t, o, s._extraSources);
      },
    },
    {
      key: 'addFileSource',
      value: function (t, o) {
        return this._addSource(t, o, s._fileSources);
      },
    },
    {
      key: '_addSource',
      value: function (t, o, n) {
        s._maybeInit();

        if (n.has(t)) console.warn("BugReporting.add* called multiple times for same key '" + t + "'");
        n.set(t, o);
        return {
          remove: function () {
            n.delete(t);
          },
        };
      },
    },
    {
      key: 'collectExtraData',
      value: function () {
        var o = {},
          n = s._extraSources,
          u = Array.isArray(n),
          c = 0;

        for (n = u ? n : n['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
          var f;

          if (u) {
            if (c >= n.length) break;
            f = n[c++];
          } else {
            if ((c = n.next()).done) break;
            f = c.value;
          }

          var x = module12(f, 2),
            _ = x[0],
            b = x[1];
          o[_] = b();
        }

        var y = {},
          S = s._fileSources,
          v = Array.isArray(S),
          p = 0;

        for (S = v ? S : S['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
          var k;

          if (v) {
            if (p >= S.length) break;
            k = S[p++];
          } else {
            if ((p = S.next()).done) break;
            k = p.value;
          }

          var D = module12(k, 2),
            E = D[0],
            h = D[1];
          y[E] = h();
        }

        module147('BugReporting extraData:', o);

        var module8 = require('./8').BugReporting;

        if (module8 && module8.setExtraData) module8.setExtraData(o, y);

        var module8 = require('./8').RedBox;

        if (module8 && module8.setExtraData) module8.setExtraData(o, 'From BugReporting.js');
        return {
          extras: o,
          files: y,
        };
      },
    },
  ]);
  return s;
})();

s._extraSources = new Map();
s._fileSources = new Map();
s._subscription = null;
s._redboxSubscription = null;
module.exports = s;
