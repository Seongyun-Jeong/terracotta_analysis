import regeneratorRuntime from 'regenerator-runtime';

var module22 = require('./22'),
  module8 = require('./8').TimePickerAndroid,
  o = (function () {
    function o() {
      module22(this, o);
    }

    module23(o, null, [
      {
        key: 'open',
        value: function (t) {
          return regeneratorRuntime.async(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return n.abrupt('return', module8.open(t));

                case 1:
                case 'end':
                  return n.stop();
              }
          });
        },
      },
    ]);
    return o;
  })();

o.timeSetAction = 'timeSetAction';
o.dismissedAction = 'dismissedAction';
module.exports = o;
