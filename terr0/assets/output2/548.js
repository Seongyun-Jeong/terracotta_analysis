export default function default() {
  var t = {
    translationX: {},
    translationY: {},
    state: {},
    oldState: {},
    absoluteX: {},
    absoluteY: {},
    x: {},
    y: {},
    velocityX: {},
    velocityY: {},
    scale: {},
    focalX: {},
    focalY: {},
    rotation: {},
    anchorX: {},
    anchorY: {},
    velocity: {},
    numberOfPointers: {},
    layout: {
      x: {},
      y: {},
      width: {},
      height: {}
    },
    contentOffset: {
      y: {},
      x: {}
    },
    layoutMeasurement: {
      width: {},
      height: {}
    },
    contentSize: {
      width: {},
      height: {}
    },
    zoomScale: {},
    contentInset: {
      right: {},
      top: {},
      left: {},
      bottom: {}
    }
  };

  (function t(o) {
    for (var n in o) {
      o[n].__isProxy = true;
      t(o[n]);
    }
  })(t);

  return t;
}