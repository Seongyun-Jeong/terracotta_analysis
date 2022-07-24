var t,
  module8 = require('./8').NativeAnimatedModule,
  module117 = require('./117'),
  module3 = require('./3'),
  u = 1,
  c = 1,
  f = {
    createAnimatedNode: function (t, o) {
      A();
      module8.createAnimatedNode(t, o);
    },
    startListeningToAnimatedNodeValue: function (t) {
      A();
      module8.startListeningToAnimatedNodeValue(t);
    },
    stopListeningToAnimatedNodeValue: function (t) {
      A();
      module8.stopListeningToAnimatedNodeValue(t);
    },
    connectAnimatedNodes: function (t, o) {
      A();
      module8.connectAnimatedNodes(t, o);
    },
    disconnectAnimatedNodes: function (t, o) {
      A();
      module8.disconnectAnimatedNodes(t, o);
    },
    startAnimatingNode: function (t, o, s, u) {
      A();
      module8.startAnimatingNode(t, o, s, u);
    },
    stopAnimation: function (t) {
      A();
      module8.stopAnimation(t);
    },
    setAnimatedNodeValue: function (t, o) {
      A();
      module8.setAnimatedNodeValue(t, o);
    },
    setAnimatedNodeOffset: function (t, o) {
      A();
      module8.setAnimatedNodeOffset(t, o);
    },
    flattenAnimatedNodeOffset: function (t) {
      A();
      module8.flattenAnimatedNodeOffset(t);
    },
    extractAnimatedNodeOffset: function (t) {
      A();
      module8.extractAnimatedNodeOffset(t);
    },
    connectAnimatedNodeToView: function (t, o) {
      A();
      module8.connectAnimatedNodeToView(t, o);
    },
    disconnectAnimatedNodeFromView: function (t, o) {
      A();
      module8.disconnectAnimatedNodeFromView(t, o);
    },
    dropAnimatedNode: function (t) {
      A();
      module8.dropAnimatedNode(t);
    },
    addAnimatedEventToView: function (t, o, s) {
      A();
      module8.addAnimatedEventToView(t, o, s);
    },
    removeAnimatedEventFromView: function (t, o, s) {
      A();
      module8.removeAnimatedEventFromView(t, o, s);
    },
  },
  p = {
    opacity: true,
    transform: true,
    borderRadius: true,
    borderBottomEndRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderBottomStartRadius: true,
    borderTopEndRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderTopStartRadius: true,
    elevation: true,
    shadowOpacity: true,
    shadowRadius: true,
    scaleX: true,
    scaleY: true,
    translateX: true,
    translateY: true,
  },
  l = {
    translateX: true,
    translateY: true,
    scale: true,
    scaleX: true,
    scaleY: true,
    rotate: true,
    rotateX: true,
    rotateY: true,
    perspective: true,
  },
  v = {
    inputRange: true,
    outputRange: true,
    extrapolate: true,
    extrapolateRight: true,
    extrapolateLeft: true,
  };

function A() {
  module3(module8, 'Native animated module is not available');
}

var N = false;
module.exports = {
  API: f,
  addWhitelistedStyleProp: function (t) {
    p[t] = true;
  },
  addWhitelistedTransformProp: function (t) {
    l[t] = true;
  },
  addWhitelistedInterpolationParam: function (t) {
    v[t] = true;
  },
  validateStyles: function (t) {
    for (var n in t) if (!p.hasOwnProperty(n)) throw new Error("Style property '" + n + "' is not supported by native animated module");
  },
  validateTransform: function (t) {
    t.forEach(function (t) {
      if (!l.hasOwnProperty(t.property)) throw new Error("Property '" + t.property + "' is not supported by native animated module");
    });
  },
  validateInterpolation: function (t) {
    for (var n in t) if (!v.hasOwnProperty(n)) throw new Error("Interpolation property '" + n + "' is not supported by native animated module");
  },
  generateNewNodeTag: function () {
    return u++;
  },
  generateNewAnimationId: function () {
    return c++;
  },
  assertNativeAnimatedModule: A,
  shouldUseNativeDriver: function (t) {
    if (t.useNativeDriver && !module8) {
      if (!N) {
        console.warn(
          'Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. More info: https://github.com/facebook/react-native/issues/11094#issuecomment-263240420'
        );
        N = true;
      }

      return false;
    } else return t.useNativeDriver || false;
  },
  transformDataType: function (t) {
    return 'string' != typeof t ? t : /deg$/.test(t) ? ((parseFloat(t) || 0) * Math.PI) / 180 : parseFloat(t) || 0;
  },

  get nativeEventEmitter() {
    if (!t) t = new module117(module8);
    return t;
  },
};
