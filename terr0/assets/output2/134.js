var module46 = require('./46'),
  module22 = require('./22');

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function u(n) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      l(Object(u), true).forEach(function (o) {
        module46(n, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(u));
    else
      l(Object(u)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(u, t));
      });
  }

  return n;
}

require('./43');

(function () {
  function t() {
    module22(this, t);
  }

  module23(t, null, [
    {
      key: 'alert',
      value: function (t, n, o) {
        this.prompt(t, n, o, 'default');
      },
    },
    {
      key: 'prompt',
      value: function (t, n, o) {
        var l = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 'plain-text',
          u = arguments.length > 4 ? arguments[4] : undefined,
          s = arguments.length > 5 ? arguments[5] : undefined;

        if ('function' != typeof l) {
          var p,
            f,
            y = [],
            v = [];
          if ('function' == typeof o) y = [o];
          else if (Array.isArray(o))
            o.forEach(function (t, n) {
              if (((y[n] = t.onPress), 'cancel' === t.style ? (p = String(n)) : 'destructive' === t.style && (f = String(n)), t.text || n < (o || []).length - 1)) {
                var l = {};
                l[n] = t.text || '';
                v.push(l);
              }
            });
          c.alertWithArgs(
            {
              title: t || '',
              message: n || undefined,
              buttons: v,
              type: l || undefined,
              defaultValue: u,
              cancelButtonKey: p,
              destructiveButtonKey: f,
              keyboardType: s,
            },
            function (t, n) {
              var o = y[t];
              if (o) o(n);
            }
          );
        } else {
          console.warn(
            'You passed a callback function as the "type" argument to Alert.prompt(). React Native is assuming  you want to use the deprecated Alert.prompt(title, defaultValue, buttons, callback) signature. The current signature is Alert.prompt(title, message, callbackOrButtons, type, defaultValue, keyboardType) and the old syntax will be removed in a future version.'
          );
          var b = l;
          c.alertWithArgs(
            {
              title: t || '',
              type: 'plain-text',
              defaultValue: n,
            },
            function (t, n) {
              b(n);
            }
          );
        }
      },
    },
  ]);
})();

var module8 = require('./8'),
  c = module8.AlertManager,
  p = (function () {
    function t() {
      module22(this, t);
    }

    module23(t, null, [
      {
        key: 'alert',
        value: function (t, n, o, l) {
          f.alert(t, n, o, l);
        },
      },
      {
        key: 'prompt',
        value: function (t, n, o) {
          if (arguments.length > 3 && undefined !== arguments[3]) arguments[3];
          if (arguments.length > 4) arguments[4];
          if (arguments.length > 5) arguments[5];
        },
      },
    ]);
    return t;
  })(),
  f = (function () {
    function t() {
      module22(this, t);
    }

    module23(t, null, [
      {
        key: 'alert',
        value: function (t, n, o, l) {
          var c = {
            title: t || '',
            message: n || '',
          };
          if (l)
            c = u({}, c, {
              cancelable: l.cancelable,
            });
          var p = o
              ? o.slice(0, 3)
              : [
                  {
                    text: 'OK',
                  },
                ],
            f = p.pop(),
            y = p.pop(),
            v = p.pop();
          if (v)
            c = u({}, c, {
              buttonNeutral: v.text || '',
            });
          if (y)
            c = u({}, c, {
              buttonNegative: y.text || '',
            });
          if (f)
            c = u({}, c, {
              buttonPositive: f.text || '',
            });
          module8.DialogManagerAndroid.showAlert(
            c,
            function (t) {
              return console.warn(t);
            },
            function (t, n) {
              if (t === module8.DialogManagerAndroid.buttonClicked)
                n === module8.DialogManagerAndroid.buttonNeutral
                  ? v.onPress && v.onPress()
                  : n === module8.DialogManagerAndroid.buttonNegative
                  ? y.onPress && y.onPress()
                  : n === module8.DialogManagerAndroid.buttonPositive && f.onPress && f.onPress();
              else if (t === module8.DialogManagerAndroid.dismissed && l && l.onDismiss) l.onDismiss();
            }
          );
        },
      },
    ]);
    return t;
  })();

module.exports = p;
