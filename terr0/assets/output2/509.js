var module284 = require('./284');

function R(t, n) {
  var R = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    R.push.apply(R, o);
  }

  return R;
}

function o(t) {
  for (var o = 1; o < arguments.length; o++) {
    var E = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      R(Object(E), true).forEach(function (R) {
        module284.default(t, R, E[R]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(E));
    else
      R(Object(E)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(E, n));
      });
  }

  return t;
}

var E = {
  OPEN_DRAWER: 'Navigation/OPEN_DRAWER',
  CLOSE_DRAWER: 'Navigation/CLOSE_DRAWER',
  TOGGLE_DRAWER: 'Navigation/TOGGLE_DRAWER',
  DRAWER_OPENED: 'Navigation/DRAWER_OPENED',
  DRAWER_CLOSED: 'Navigation/DRAWER_CLOSED',
  MARK_DRAWER_ACTIVE: 'Navigation/MARK_DRAWER_ACTIVE',
  MARK_DRAWER_IDLE: 'Navigation/MARK_DRAWER_IDLE',
  MARK_DRAWER_SETTLING: 'Navigation/MARK_DRAWER_SETTLING',
  openDrawer: function (t) {
    return o(
      {
        type: 'Navigation/OPEN_DRAWER',
      },
      t
    );
  },
  closeDrawer: function (t) {
    return o(
      {
        type: 'Navigation/CLOSE_DRAWER',
      },
      t
    );
  },
  toggleDrawer: function (t) {
    return o(
      {
        type: 'Navigation/TOGGLE_DRAWER',
      },
      t
    );
  },
  markDrawerIdle: function (t) {
    return o(
      {
        type: 'Navigation/MARK_DRAWER_IDLE',
      },
      t
    );
  },
  markDrawerActive: function (t) {
    return o(
      {
        type: 'Navigation/MARK_DRAWER_ACTIVE',
      },
      t
    );
  },
  markDrawerSettling: function (t) {
    return o(
      {
        type: 'Navigation/MARK_DRAWER_SETTLING',
      },
      t
    );
  },
};
export default E;
