import regeneratorRuntime from 'regenerator-runtime';

var module22 = require('./22'),
  module8 = require('./8').DatePickerAndroid;

function u(t, n) {
  var o = t[n];
  if ('object' == typeof o && 'function' == typeof o.getMonth) t[n] = o.getTime();
}

var s = (function () {
  function s() {
    module22(this, s);
  }

  module23(s, null, [
    {
      key: 'open',
      value: function (n) {
        var o;
        return regeneratorRuntime.async(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                if (null != (o = n)) {
                  u(o, 'date');
                  u(o, 'minDate');
                  u(o, 'maxDate');
                }

                return t.abrupt('return', module8.open(n));

              case 3:
              case 'end':
                return t.stop();
            }
        });
      },
    },
  ]);
  return s;
})();

s.dateSetAction = 'dateSetAction';
s.dismissedAction = 'dismissedAction';
module.exports = s;
