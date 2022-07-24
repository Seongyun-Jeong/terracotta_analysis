var regeneratorRuntime = require('regenerator-runtime'),
  module46 = require('./46');

function o(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

require('./78');

var module57 = require('./57'),
  module183 = require('./183'),
  module253 = require('./253'),
  module255 = require('./255'),
  module8 = require('./8'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module52 = require('./52'),
  module76 = require('./76'),
  module74 = require('./74'),
  module176 = require('./176'),
  module162 = require('./162'),
  S = module8.ImageLoader,
  module256 = require('./256'),
  j = 1;

var E = (function (t) {
  for (var c = 1; c < arguments.length; c++) {
    var u = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      o(Object(u), true).forEach(function (o) {
        module46(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      o(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
})({}, module253, {
  style: module183(module57),
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      headers: PropTypes.objectOf(PropTypes.string),
    }),
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        headers: PropTypes.objectOf(PropTypes.string),
      })
    ),
  ]),
  blurRadius: PropTypes.number,
  defaultSource: PropTypes.number,
  loadingIndicatorSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
    }),
    PropTypes.number,
  ]),
  progressiveRenderingEnabled: PropTypes.bool,
  fadeDuration: PropTypes.number,
  onLoadStart: PropTypes.func,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadEnd: PropTypes.func,
  testID: PropTypes.string,
  resizeMethod: PropTypes.oneOf(['auto', 'resize', 'scale']),
  resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat', 'center']),
});

var P = function (t, n) {
  var o,
    c,
    u,
    s,
    f = module162(t.source),
    h = module162(t.defaultSource),
    b = module162(t.loadingIndicatorSource);
  if (
    (f && '' === f.uri && console.warn('source.uri should not be an empty string'),
    t.src && console.warn('The <Image> component requires a `source` property rather than `src`.'),
    t.children)
  )
    throw new Error(
      'The <Image> component cannot contain children. If you want to render content on top of the image, consider using the <ImageBackground> component or absolute positioning.'
    );
  if (t.defaultSource && t.loadingIndicatorSource)
    throw new Error('The <Image> component cannot have defaultSource and loadingIndicatorSource at the same time. Please use either defaultSource or loadingIndicatorSource.');

  if ((!f || f.uri || Array.isArray(f) || (f = null), null != (null == (o = f) ? undefined : o.uri))) {
    var S = f,
      j = S.width,
      E = S.height;
    u = module74([
      {
        width: j,
        height: E,
      },
      L.base,
      t.style,
    ]);
    s = [
      {
        uri: f.uri,
      },
    ];
  } else {
    u = module74([L.base, t.style]);
    s = f;
  }

  var P = t.onLoadStart,
    z = t.onLoad,
    D = t.onLoadEnd,
    T = t.onError,
    q = module176(t, {
      style: u,
      shouldNotifyLoadEvents: !!(P || z || D || T),
      src: s,
      headers: null == (c = f) ? undefined : c.headers,
      defaultSrc: h ? h.uri : null,
      loadingIndicatorSrc: b ? b.uri : null,
      ref: n,
    });
  return (
    <module76.Consumer>
      {function (t) {
        return t ? <module256 /> : <module255 />;
      }}
    </module76.Consumer>
  );
};

(P = React.forwardRef(P)).displayName = 'Image';

P.getSize = function (t, n, o) {
  return S.getSize(t)
    .then(function (t) {
      n(t.width, t.height);
    })
    .catch(
      o ||
        function () {
          console.warn('Failed to get size for image: ' + t);
        }
    );
};

P.prefetch = function (t, n) {
  var o = j++;
  if (n) n(o);
  return S.prefetchImage(t, o);
};

P.abortPrefetch = function (t) {
  S.abortRequest(t);
};

P.queryCache = function (n) {
  return regeneratorRuntime.async(function (o) {
    for (;;)
      switch ((o.prev = o.next)) {
        case 0:
          o.next = 2;
          return regeneratorRuntime.awrap(S.queryCache(n));

        case 2:
          return o.abrupt('return', o.sent);

        case 3:
        case 'end':
          return o.stop();
      }
  });
};

P.resolveAssetSource = module162;
P.propTypes = E;
var L = module52.create({
  base: {
    overflow: 'hidden',
  },
});
module.exports = P;
