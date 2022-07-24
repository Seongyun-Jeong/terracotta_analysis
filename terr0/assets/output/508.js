var module284 = require('./284'),
  module373 = require('./373'),
  module509 = require('./509');

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

function c(t) {
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

function f(t, n, o) {
  if (t.hasOwnProperty(n) && undefined !== t[n]) return t;
  else {
    t[n] = o;
    return t;
  }
}

var s = function t(n) {
  return n.routes && n.routes[n.index] ? t(n.routes[n.index]) : n.key;
};

exports.default = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  n = f((n = f((n = c({}, n)), 'resetOnBlur', !!n.unmountInactiveRoutes || !!n.resetOnBlur)), 'backBehavior', 'initialRoute');

  var l = module373.SwitchRouter(t, n),
    D = -1,
    p = function () {
      return ++D;
    };

  return c({}, l, {
    getActionCreators: function (t, n) {
      return c(
        {
          openDrawer: function () {
            return module509.default.openDrawer({
              key: n,
            });
          },
          closeDrawer: function () {
            return module509.default.closeDrawer({
              key: n,
            });
          },
          toggleDrawer: function () {
            return module509.default.toggleDrawer({
              key: n,
            });
          },
        },
        l.getActionCreators(t, n)
      );
    },
    getStateForAction: function (t, n) {
      if (!n)
        return c({}, l.getStateForAction(t, undefined), {
          isDrawerOpen: false,
          isDrawerIdle: true,
          drawerMovementDirection: null,
          openId: p(),
          closeId: p(),
          toggleId: p(),
        });

      if (null == t.key || t.key === n.key) {
        if (t.type === module509.default.DRAWER_CLOSED)
          return c({}, n, {
            isDrawerOpen: false,
            isDrawerIdle: true,
            drawerMovementDirection: null,
          });
        if (t.type === module509.default.DRAWER_OPENED)
          return c({}, n, {
            isDrawerOpen: true,
            isDrawerIdle: true,
            drawerMovementDirection: null,
          });
        if (t.type === module509.default.CLOSE_DRAWER)
          return c({}, n, {
            closeId: p(),
          });
        if (t.type === module509.default.MARK_DRAWER_SETTLING)
          return c({}, n, {
            isDrawerIdle: false,
            drawerMovementDirection: t.willShow ? 'opening' : 'closing',
          });
        if (t.type === module509.default.MARK_DRAWER_ACTIVE)
          return c({}, n, {
            isDrawerIdle: false,
            drawerMovementDirection: null,
          });
        if (t.type === module509.default.MARK_DRAWER_IDLE)
          return c({}, n, {
            isDrawerIdle: true,
            drawerMovementDirection: null,
          });
        if (t.type === module373.NavigationActions.BACK && (n.isDrawerOpen || !n.isDrawerIdle) && 'closing' !== n.drawerMovementDirection)
          return c({}, n, {
            closeId: p(),
          });
        if (t.type === module509.default.OPEN_DRAWER)
          return c({}, n, {
            openId: p(),
          });
        if (t.type === module509.default.TOGGLE_DRAWER)
          return c({}, n, {
            toggleId: p(),
          });
      }

      var f = l.getStateForAction(t, n);
      return null === f
        ? null
        : f !== n
        ? s(f) === s(n) || (!n.isDrawerOpen && 'closing' === n.drawerMovementDirection)
          ? f
          : c({}, f, {
              closeId: p(),
            })
        : n;
    },
  });
};
