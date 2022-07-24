export function addWhitelistedNativeProps(t) {
  p = c({}, p, {}, t);
  s();
}
export function addWhitelistedUIProps(t) {
  b = c({}, b, {}, t);
  s();
}

var module284 = require('./284'),
  module528 = require('./528');

function l(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function c(t) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      l(Object(c), true).forEach(function (n) {
        module284.default(t, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      l(Object(c)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(c, o));
      });
  }

  return t;
}

var b = {
    opacity: true,
    transform: true,
    backgroundColor: true,
    borderRightColor: true,
    borderBottomColor: true,
    borderColor: true,
    borderEndColor: true,
    borderLeftColor: true,
    borderStartColor: true,
    borderTopColor: true,
    shadowOpacity: true,
    shadowRadius: true,
    scaleX: true,
    scaleY: true,
    translateX: true,
    translateY: true,
  },
  p = {
    borderBottomWidth: true,
    borderEndWidth: true,
    borderLeftWidth: true,
    borderRightWidth: true,
    borderStartWidth: true,
    borderTopWidth: true,
    borderWidth: true,
    bottom: true,
    flex: true,
    flexGrow: true,
    flexShrink: true,
    height: true,
    left: true,
    margin: true,
    marginBottom: true,
    marginEnd: true,
    marginHorizontal: true,
    marginLeft: true,
    marginRight: true,
    marginStart: true,
    marginTop: true,
    marginVertical: true,
    maxHeight: true,
    maxWidth: true,
    minHeight: true,
    minWidth: true,
    padding: true,
    paddingBottom: true,
    paddingEnd: true,
    paddingHorizontal: true,
    paddingLeft: true,
    paddingRight: true,
    paddingStart: true,
    paddingTop: true,
    paddingVertical: true,
    right: true,
    start: true,
    top: true,
    width: true,
    zIndex: true,
    borderBottomEndRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    borderBottomStartRadius: true,
    borderRadius: true,
    borderTopEndRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderTopStartRadius: true,
    opacity: true,
    elevation: true,
    fontSize: true,
    lineHeight: true,
    textShadowRadius: true,
    letterSpacing: true,
    display: true,
    backfaceVisibility: true,
    overflow: true,
    resizeMode: true,
    fontStyle: true,
    fontWeight: true,
    textAlign: true,
    textDecorationLine: true,
    fontFamily: true,
    textAlignVertical: true,
    fontVariant: true,
    textDecorationStyle: true,
    textTransform: true,
    writingDirection: true,
    color: true,
  };

function s() {
  module528.default.configureProps(Object.keys(p), Object.keys(b));
}

s();
