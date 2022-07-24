var module25 = require('./25'),
  module147 = require('./147'),
  module106 = globals.nativeQPLTimestamp || globals.nativePerformanceNow || require('./106'),
  s = {},
  c = {},
  u = {},
  f = {},
  T = {
    addTimespan: function (n, t, o) {
      if (!s[n])
        s[n] = {
          description: o,
          totalTime: t,
        };
    },
    startTimespan: function (t, c) {
      if (!s[t]) {
        s[t] = {
          description: c,
          startTime: module106(),
        };
        f[t] = module25.beginAsyncEvent(t);
      }
    },
    stopTimespan: function (t) {
      var c = s[t];
      if (c && c.startTime) c.endTime || ((c.endTime = module106()), (c.totalTime = c.endTime - (c.startTime || 0)), module25.endAsyncEvent(t, f[t]), delete f[t]);
    },
    clear: function () {
      s = {};
      c = {};
      u = {};
    },
    clearCompleted: function () {
      for (var n in s) s[n].totalTime && delete s[n];

      c = {};
      u = {};
    },
    clearExceptTimespans: function (n) {
      s = Object.keys(s).reduce(function (t, o) {
        if (-1 !== n.indexOf(o)) t[o] = s[o];
        return t;
      }, {});
      c = {};
      u = {};
    },
    currentTimestamp: function () {
      return module106();
    },
    getTimespans: function () {
      return s;
    },
    hasTimespan: function (n) {
      return !!s[n];
    },
    logTimespans: function () {
      for (var n in s) s[n].totalTime && module147(n + ': ' + s[n].totalTime + 'ms');
    },
    addTimespans: function (n, t) {
      for (var o = 0, s = n.length; o < s; o += 2) {
        var c = t[o / 2];
        T.addTimespan(c, n[o + 1] - n[o], c);
      }
    },
    setExtra: function (n, t) {
      if (!c[n]) c[n] = t;
    },
    getExtras: function () {
      return c;
    },
    logExtras: function () {
      module147(c);
    },
    markPoint: function (n, t) {
      if (!u[n]) u[n] = null != t ? t : module106();
    },
    getPoints: function () {
      return u;
    },
    logPoints: function () {
      for (var n in u) module147(n + ': ' + u[n] + 'ms');
    },
  };

module.exports = T;
