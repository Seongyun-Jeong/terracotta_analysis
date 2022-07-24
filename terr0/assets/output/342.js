require('./43');

var n,
  module117 = require('./117'),
  module8 = require('./8'),
  c = module8.NetInfo,
  f = new module117(c),
  u = new Map();

function s(n) {
  return 'none' !== n.type && 'unknown' !== n.type;
}

n = function (n) {
  return 'NONE' !== n && 'UNKNOWN' !== n;
};

var v = new Map(),
  C = {
    addEventListener: function (n, t) {
      var o;
      if ('connectionChange' === n)
        o = f.addListener('networkStatusDidChange', function (n) {
          t({
            type: n.connectionType,
            effectiveType: n.effectiveConnectionType,
          });
        });
      else {
        if ('change' !== n) {
          console.warn('Trying to subscribe to unknown event: "' + n + '"');
          return {
            remove: function () {},
          };
        }

        console.warn('NetInfo\'s "change" event is deprecated. Listen to the "connectionChange" event instead.');
        o = f.addListener('networkStatusDidChange', function (n) {
          t(n.network_info);
        });
      }
      u.set(t, o);
      return {
        remove: function () {
          return C.removeEventListener(n, t);
        },
      };
    },
    removeEventListener: function (n, t) {
      var o = u.get(t);

      if (o) {
        o.remove();
        u.delete(t);
      }
    },
    fetch: function () {
      console.warn('NetInfo.fetch() is deprecated. Use NetInfo.getConnectionInfo() instead.');
      return c.getCurrentConnectivity().then(function (n) {
        return n.network_info;
      });
    },
    getConnectionInfo: function () {
      return c.getCurrentConnectivity().then(function (n) {
        return {
          type: n.connectionType,
          effectiveType: n.effectiveConnectionType,
        };
      });
    },
    isConnected: {
      addEventListener: function (t, o) {
        var c = function (c) {
          if ('change' === t) o(n(c));
          else if ('connectionChange' === t) o(s(c));
        };

        v.set(o, c);
        C.addEventListener(t, c);
        return {
          remove: function () {
            return C.isConnected.removeEventListener(t, o);
          },
        };
      },
      removeEventListener: function (n, t) {
        var o = v.get(t);
        C.removeEventListener(n, o);
        v.delete(t);
      },
      fetch: function () {
        return C.getConnectionInfo().then(s);
      },
    },
    isConnectionExpensive: function () {
      return c.isConnectionMetered();
    },
  };
module.exports = C;
