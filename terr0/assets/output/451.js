var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module284 = require('./284'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module441 = require('./441'),
  module445 = require('./445'),
  module452 = require('./452');

function Y(t, f) {
  var l = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    if (f)
      n = n.filter(function (f) {
        return Object.getOwnPropertyDescriptor(t, f).enumerable;
      });
    l.push.apply(l, n);
  }

  return l;
}

function y(t) {
  for (var f = 1; f < arguments.length; f++) {
    var l = null != arguments[f] ? arguments[f] : {};
    if (f % 2)
      Y(Object(l), true).forEach(function (f) {
        module284.default(t, f, l[f]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      Y(Object(l)).forEach(function (f) {
        Object.defineProperty(t, f, Object.getOwnPropertyDescriptor(l, f));
      });
  }

  return t;
}

var p = module441.default(
  'TapGestureHandler',
  y({}, module445.default, {
    maxDurationMs: PropTypes.default.number,
    maxDelayMs: PropTypes.default.number,
    numberOfTaps: PropTypes.default.number,
    maxDeltaX: PropTypes.default.number,
    maxDeltaY: PropTypes.default.number,
    maxDist: PropTypes.default.number,
    minPointers: PropTypes.default.number,
  }),
  {}
);
exports.TapGestureHandler = p;
var D = module441.default(
  'FlingGestureHandler',
  y({}, module445.default, {
    numberOfPointers: PropTypes.default.number,
    direction: PropTypes.default.number,
  }),
  {}
);
exports.FlingGestureHandler = D;

var h = (function (t) {
    function o() {
      module356.default(this, o);
      return module358.default(this, module361.default(o).apply(this, arguments));
    }

    module362.default(o, t);
    module357.default(o, [
      {
        key: 'componentDidMount',
        value: function () {
          console.warn(
            'ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase'
          );
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children;
        },
      },
    ]);
    return o;
  })(React.default.Component),
  G =
    module452.default && module452.default.forceTouchAvailable
      ? module441.default(
          'ForceTouchGestureHandler',
          y({}, module445.default, {
            minForce: PropTypes.default.number,
            maxForce: PropTypes.default.number,
            feedbackOnActivation: PropTypes.default.bool,
          }),
          {}
        )
      : h;

exports.ForceTouchGestureHandler = G;
G.forceTouchAvailable = (module452.default && module452.default.forceTouchAvailable) || false;
var H = module441.default(
  'LongPressGestureHandler',
  y({}, module445.default, {
    minDurationMs: PropTypes.default.number,
    maxDist: PropTypes.default.number,
  }),
  {}
);

function P(t) {
  var f = y({}, t);

  if (undefined !== t.minDeltaX) {
    delete f.minDeltaX;
    f.activeOffsetXStart = -t.minDeltaX;
    f.activeOffsetXEnd = t.minDeltaX;
  }

  if (undefined !== t.maxDeltaX) {
    delete f.maxDeltaX;
    f.failOffsetXStart = -t.maxDeltaX;
    f.failOffsetXEnd = t.maxDeltaX;
  }

  if (undefined !== t.minOffsetX) {
    delete f.minOffsetX;
    if (t.minOffsetX < 0) f.activeOffsetXStart = t.minOffsetX;
    else f.activeOffsetXEnd = t.minOffsetX;
  }

  if (undefined !== t.minDeltaY) {
    delete f.minDeltaY;
    f.activeOffsetYStart = -t.minDeltaY;
    f.activeOffsetYEnd = t.minDeltaY;
  }

  if (undefined !== t.maxDeltaY) {
    delete f.maxDeltaY;
    f.failOffsetYStart = -t.maxDeltaY;
    f.failOffsetYEnd = t.maxDeltaY;
  }

  if (undefined !== t.minOffsetY) {
    delete f.minOffsetY;
    if (t.minOffsetY < 0) f.activeOffsetYStart = t.minOffsetY;
    else f.activeOffsetYEnd = t.minOffsetY;
  }

  if (undefined !== t.activeOffsetX) {
    delete f.activeOffsetX;

    if (Array.isArray(t.activeOffsetX)) {
      f.activeOffsetXStart = t.activeOffsetX[0];
      f.activeOffsetXEnd = t.activeOffsetX[1];
    } else if (t.activeOffsetX < 0) f.activeOffsetXStart = t.activeOffsetX;
    else f.activeOffsetXEnd = t.activeOffsetX;
  }

  if (undefined !== t.activeOffsetY) {
    delete f.activeOffsetY;

    if (Array.isArray(t.activeOffsetY)) {
      f.activeOffsetYStart = t.activeOffsetY[0];
      f.activeOffsetYEnd = t.activeOffsetY[1];
    } else if (t.activeOffsetY < 0) f.activeOffsetYStart = t.activeOffsetY;
    else f.activeOffsetYEnd = t.activeOffsetY;
  }

  if (undefined !== t.failOffsetX) {
    delete f.failOffsetX;

    if (Array.isArray(t.failOffsetX)) {
      f.failOffsetXStart = t.failOffsetX[0];
      f.failOffsetXEnd = t.failOffsetX[1];
    } else if (t.failOffsetX < 0) f.failOffsetXStart = t.failOffsetX;
    else f.failOffsetXEnd = t.failOffsetX;
  }

  if (undefined !== t.failOffsetY) {
    delete f.failOffsetY;

    if (Array.isArray(t.failOffsetY)) {
      f.failOffsetYStart = t.failOffsetY[0];
      f.failOffsetYEnd = t.failOffsetY[1];
    } else if (t.failOffsetY < 0) f.failOffsetYStart = t.failOffsetY;
    else f.failOffsetYEnd = t.failOffsetY;
  }

  return f;
}

exports.LongPressGestureHandler = H;
var E = module441.default(
  'PanGestureHandler',
  y({}, module445.default, {
    activeOffsetY: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.arrayOf(PropTypes.default.number)]),
    activeOffsetX: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.arrayOf(PropTypes.default.number)]),
    failOffsetY: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.arrayOf(PropTypes.default.number)]),
    failOffsetX: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.arrayOf(PropTypes.default.number)]),
    minDist: PropTypes.default.number,
    minVelocity: PropTypes.default.number,
    minVelocityX: PropTypes.default.number,
    minVelocityY: PropTypes.default.number,
    minPointers: PropTypes.default.number,
    maxPointers: PropTypes.default.number,
    avgTouches: PropTypes.default.bool,
  }),
  {},
  function (t) {
    return P(t);
  },
  {
    activeOffsetYStart: true,
    activeOffsetYEnd: true,
    activeOffsetXStart: true,
    activeOffsetXEnd: true,
    failOffsetYStart: true,
    failOffsetYEnd: true,
    failOffsetXStart: true,
    failOffsetXEnd: true,
  }
);
exports.PanGestureHandler = E;
var S = module441.default('PinchGestureHandler', module445.default, {});
exports.PinchGestureHandler = S;
var T = module441.default('RotationGestureHandler', module445.default, {});
exports.RotationGestureHandler = T;
