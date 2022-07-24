import PropTypes from 'prop-types';
import React from 'react';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module284 = require('./284'),
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
    maxDurationMs: PropTypes.number,
    maxDelayMs: PropTypes.number,
    numberOfTaps: PropTypes.number,
    maxDeltaX: PropTypes.number,
    maxDeltaY: PropTypes.number,
    maxDist: PropTypes.number,
    minPointers: PropTypes.number,
  }),
  {}
);
exports.TapGestureHandler = p;
var D = module441.default(
  'FlingGestureHandler',
  y({}, module445.default, {
    numberOfPointers: PropTypes.number,
    direction: PropTypes.number,
  }),
  {}
);
exports.FlingGestureHandler = D;
var G =
  module452.default && module452.default.forceTouchAvailable
    ? module441.default(
        'ForceTouchGestureHandler',
        y({}, module445.default, {
          minForce: PropTypes.number,
          maxForce: PropTypes.number,
          feedbackOnActivation: PropTypes.bool,
        }),
        {}
      )
    : h;

class h {
  constructor() {
    module356.default(this, o);
    return module358.default(this, module361.default(o).apply(this, arguments));
  }

  componentDidMount() {
    console.warn(
      'ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase'
    );
  }

  render() {
    return this.props.children;
  }
}

exports.ForceTouchGestureHandler = G;
G.forceTouchAvailable = (module452.default && module452.default.forceTouchAvailable) || false;
var H = module441.default(
  'LongPressGestureHandler',
  y({}, module445.default, {
    minDurationMs: PropTypes.number,
    maxDist: PropTypes.number,
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
    activeOffsetY: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    activeOffsetX: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    failOffsetY: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    failOffsetX: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    minDist: PropTypes.number,
    minVelocity: PropTypes.number,
    minVelocityX: PropTypes.number,
    minVelocityY: PropTypes.number,
    minPointers: PropTypes.number,
    maxPointers: PropTypes.number,
    avgTouches: PropTypes.bool,
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
