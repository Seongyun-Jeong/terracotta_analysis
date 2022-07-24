!(function (t) {
  'use strict';

  var n = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,
    s = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    y = /[^-+\dA-Z]/g,
    o = function (t, c, f, h) {
      if ((1 !== arguments.length || 'string' !== T(t) || /\d/.test(t) || ((c = t), (t = undefined)), (t = t || new Date()) instanceof Date || (t = new Date(t)), isNaN(t)))
        throw TypeError('Invalid date');
      var D = (c = String(o.masks[c] || c || o.masks.default)).slice(0, 4);

      if (!('UTC:' !== D && 'GMT:' !== D)) {
        c = c.slice(4);
        f = true;
        if ('GMT:' === D) h = true;
      }

      var N = f ? 'getUTC' : 'get',
        H = t[N + 'Date'](),
        p = t[N + 'Day'](),
        S = t[N + 'Month'](),
        v = t[N + 'FullYear'](),
        b = t[N + 'Hours'](),
        A = t[N + 'Minutes'](),
        F = t[N + 'Seconds'](),
        C = t[N + 'Milliseconds'](),
        w = f ? 0 : t.getTimezoneOffset(),
        J = M(t),
        P = l(t),
        U = {
          d: H,
          dd: u(H),
          ddd: o.i18n.dayNames[p],
          dddd: o.i18n.dayNames[p + 7],
          m: S + 1,
          mm: u(S + 1),
          mmm: o.i18n.monthNames[S],
          mmmm: o.i18n.monthNames[S + 12],
          yy: String(v).slice(2),
          yyyy: v,
          h: b % 12 || 12,
          hh: u(b % 12 || 12),
          H: b,
          HH: u(b),
          M: A,
          MM: u(A),
          s: F,
          ss: u(F),
          l: u(C, 3),
          L: u(Math.round(C / 10)),
          t: b < 12 ? o.i18n.timeNames[0] : o.i18n.timeNames[1],
          tt: b < 12 ? o.i18n.timeNames[2] : o.i18n.timeNames[3],
          T: b < 12 ? o.i18n.timeNames[4] : o.i18n.timeNames[5],
          TT: b < 12 ? o.i18n.timeNames[6] : o.i18n.timeNames[7],
          Z: h ? 'GMT' : f ? 'UTC' : (String(t).match(s) || ['']).pop().replace(y, ''),
          o: (w > 0 ? '-' : '+') + u(100 * Math.floor(Math.abs(w) / 60) + (Math.abs(w) % 60), 4),
          S: ['th', 'st', 'nd', 'rd'][H % 10 > 3 ? 0 : (((H % 100) - (H % 10) != 10) * H) % 10],
          W: J,
          N: P,
        };
      return c.replace(n, function (t) {
        return t in U ? U[t] : t.slice(1, t.length - 1);
      });
    };

  function u(t, n) {
    for (t = String(t), n = n || 2; t.length < n; ) t = '0' + t;

    return t;
  }

  function M(t) {
    var n = new Date(t.getFullYear(), t.getMonth(), t.getDate());
    n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
    var s = new Date(n.getFullYear(), 0, 4);
    s.setDate(s.getDate() - ((s.getDay() + 6) % 7) + 3);
    var y = n.getTimezoneOffset() - s.getTimezoneOffset();
    n.setHours(n.getHours() - y);
    var o = (n - s) / 6048e5;
    return 1 + Math.floor(o);
  }

  function l(t) {
    var n = t.getDay();
    if (0 === n) n = 7;
    return n;
  }

  function T(t) {
    return null === t ? 'null' : undefined === t ? 'undefined' : 'object' != typeof t ? typeof t : Array.isArray(t) ? 'array' : {}.toString.call(t).slice(8, -1).toLowerCase();
  }

  o.masks = {
    default: 'ddd mmm dd yyyy HH:MM:ss',
    shortDate: 'm/d/yy',
    mediumDate: 'mmm d, yyyy',
    longDate: 'mmmm d, yyyy',
    fullDate: 'dddd, mmmm d, yyyy',
    shortTime: 'h:MM TT',
    mediumTime: 'h:MM:ss TT',
    longTime: 'h:MM:ss TT Z',
    isoDate: 'yyyy-mm-dd',
    isoTime: 'HH:MM:ss',
    isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z',
  };
  o.i18n = {
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthNames: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
  };
  if ('function' == typeof define && define.amd)
    define(function () {
      return o;
    });
  else if ('object' == typeof exports) module.exports = o;
  else t.dateFormat = o;
})(this);
