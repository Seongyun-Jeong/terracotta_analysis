import React from 'react';
import PropTypes from 'prop-types';
import module3 from './3';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module170 = require('./170'),
  module171 = require('./171'),
  module174 = require('./174'),
  module175 = require('./175'),
  module157 = require('./157'),
  module176 = require('./176');

function S(t, n) {
  if (null == t || null == n) return true;
  if (t.length !== n.length) return true;

  for (var o = 0; o < t.length; o++) if (t[o] !== n[o]) return true;

  return false;
}

var w = module176(module175.UIView, {}),
  x = {
    transform: {
      diff: S,
    },
    opacity: true,
  },
  C = module176(x, {
    clipping: {
      diff: S,
    },
  }),
  T = module176(x, {
    fill: {
      diff: S,
    },
    stroke: {
      diff: S,
    },
    strokeWidth: true,
    strokeCap: true,
    strokeJoin: true,
    strokeDash: {
      diff: S,
    },
  }),
  _ = module176(T, {
    d: {
      diff: S,
    },
  }),
  A = module176(T, {
    alignment: true,
    frame: {
      diff: function (t, n) {
        if (t === n) return false;

        if (t.font !== n.font) {
          if (null === t.font) return true;
          if (null === n.font) return true;
          if (t.font.fontFamily !== n.font.fontFamily || t.font.fontSize !== n.font.fontSize || t.font.fontWeight !== n.font.fontWeight || t.font.fontStyle !== n.font.fontStyle)
            return true;
        }

        return S(t.lines, n.lines);
      },
    },
    path: {
      diff: S,
    },
  }),
  R = module157('ARTSurfaceView', function () {
    return {
      validAttributes: w,
      uiViewClassName: 'ARTSurfaceView',
    };
  }),
  W = module157('ARTGroup', function () {
    return {
      validAttributes: C,
      uiViewClassName: 'ARTGroup',
    };
  }),
  J = module157('ARTShape', function () {
    return {
      validAttributes: _,
      uiViewClassName: 'ARTShape',
    };
  }),
  V = module157('ARTText', function () {
    return {
      validAttributes: A,
      uiViewClassName: 'ARTText',
    };
  });

function G(t) {
  return t ? ('string' == typeof t ? t : t.length ? t.join('\n') : '') : '';
}

class I {
  constructor() {
    module22(this, f);
    return module30(this, module33(f).apply(this, arguments));
  }

  getChildContext() {
    return {
      isInSurface: true,
    };
  }

  render() {
    var t = N(this.props.height, 0),
      n = N(this.props.width, 0);
    return (
      <R
        style={[
          this.props.style,
          {
            height: t,
            width: n,
          },
        ]}
      >
        {this.props.children}
      </R>
    );
  }
}

function N(t, n) {
  return null == t ? n : +t;
}

I.childContextTypes = {
  isInSurface: PropTypes.bool,
};
var z = new module174();

function D(t) {
  var n = null != t.scaleX ? t.scaleX : null != t.scale ? t.scale : 1,
    o = null != t.scaleY ? t.scaleY : null != t.scale ? t.scale : 1;
  z.transformTo(1, 0, 0, 1, 0, 0)
    .move(t.x || 0, t.y || 0)
    .rotate(t.rotation || 0, t.originX, t.originY)
    .scale(n, o, t.originX, t.originY);
  if (null != t.transform) z.transform(t.transform);
  return [z.xx, z.yx, z.xy, z.yy, z.x, z.y];
}

function E(t) {
  return false === t.visible ? 0 : null == t.opacity ? 1 : +t.opacity;
}

class F {
  constructor() {
    module22(this, f);
    return module30(this, module33(f).apply(this, arguments));
  }

  render() {
    var t = this.props;
    module3(this.context.isInSurface, 'ART: <Group /> must be a child of a <Surface />');
    return (
      <W opacity={E(t)} transform={D(t)}>
        {this.props.children}
      </W>
    );
  }
}

F.contextTypes = {
  isInSurface: PropTypes.bool.isRequired,
};
var P = 0,
  X = 1,
  Y = 2,
  O = 3;

class M {
  constructor() {
    module22(this, f);
    return module30(this, module33(f).apply(this, arguments));
  }

  render() {
    var t = this.props,
      n = [N(t.x, 0), N(t.y, 0), N(t.width, 0), N(t.height, 0)],
      o = module176(t);
    delete o.x;
    delete o.y;
    return (
      <W clipping={n} opacity={E(t)} transform={D(o)}>
        {this.props.children}
      </W>
    );
  }
}

function q(t, n, o) {
  var l = new module170(t);
  n[o + 0] = l.red / 255;
  n[o + 1] = l.green / 255;
  n[o + 2] = l.blue / 255;
  n[o + 3] = l.alpha;
}

function j(t, n, o) {
  var l = 0;
  if ('length' in t)
    for (; l < t.length; ) {
      q(t[l], n, o + 4 * l);
      l++;
    }
  else
    for (var u in t) {
      q(t[u], n, o + 4 * l);
      l++;
    }
  return o + 4 * l;
}

function L(t, n, o, l, u) {
  var s,
    f = 0;
  if ('length' in t)
    for (; f < t.length; ) {
      s = (f / (t.length - 1)) * l;
      n[o + f] = u ? 1 - s : s;
      f++;
    }
  else
    for (var c in t) {
      s = +c * l;
      n[o + f] = u ? 1 - s : s;
      f++;
    }
  return o + f;
}

function U(t, n, o) {
  L(t, n, j(t, n, o), 1, false);
}

function $(t, n, o) {
  var l = j(t, n, o);
  L(t, n, (l = L(t, n, (l = j(t, n, l)), 0.5, false)), 0.5, true);
}

function B(t, n) {
  var o = t[0],
    l = +n.width,
    u = +n.height;

  if (o === X) {
    t[1] *= l;
    t[2] *= u;
    t[3] *= l;
    t[4] *= u;
  } else if (o === Y) {
    t[1] *= l;
    t[2] *= u;
    t[3] *= l;
    t[4] *= u;
    t[5] *= l;
    t[6] *= u;
  }
}

function H(t, n) {
  if (null == t) return null;

  if (t._brush) {
    if (t._bb) {
      B(t._brush, n);
      t._bb = false;
    }

    return t._brush;
  }

  var o = new module170(t);
  return [P, o.red / 255, o.green / 255, o.blue / 255, o.alpha];
}

function K(t) {
  if (null == t) return null;
  var n = new module170(t);
  return [n.red / 255, n.green / 255, n.blue / 255, n.alpha];
}

function Q(t) {
  switch (t) {
    case 'butt':
      return 0;

    case 'square':
      return 2;

    default:
      return 1;
  }
}

function Z(t) {
  switch (t) {
    case 'miter':
      return 0;

    case 'bevel':
      return 2;

    default:
      return 1;
  }
}

var nt = {},
  et = /^[\s"']*/,
  rt = /[\s"']*$/;

class tt {
  constructor() {
    module22(this, c);
    return module30(this, module33(c).apply(this, arguments));
  }

  render() {
    var t = this.props,
      n = t.d || G(t.children),
      o = (n instanceof module171 ? n : new module171(n)).toJSON();
    return (
      <J
        fill={H(t.fill, t)}
        opacity={E(t)}
        stroke={K(t.stroke)}
        strokeCap={Q(t.strokeCap)}
        strokeDash={t.strokeDash || null}
        strokeJoin={Z(t.strokeJoin)}
        strokeWidth={N(t.strokeWidth, 1)}
        transform={D(t)}
        d={o}
      />
    );
  }
}

function it(t) {
  return t.split(',')[0].replace(et, '').replace(rt, '');
}

function ot(t) {
  if (nt.hasOwnProperty(t)) return nt[t];
  var n = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?)[ptexm\%]*(?:\s*\/.*?)?\s+)?\s*\"?([^\"]*)/i.exec(t);
  if (!n) return null;
  var o = it(n[3]),
    l = +n[2] || 12,
    u = /bold/.exec(n[1]),
    s = /italic/.exec(n[1]);
  nt[t] = {
    fontFamily: o,
    fontSize: l,
    fontWeight: u ? 'bold' : 'normal',
    fontStyle: s ? 'italic' : 'normal',
  };
  return nt[t];
}

function lt(t) {
  return null == t
    ? null
    : 'string' == typeof t
    ? ot(t)
    : {
        fontFamily: it(t.fontFamily),
        fontSize: +t.fontSize || 12,
        fontWeight: null != t.fontWeight ? t.fontWeight.toString() : '400',
        fontStyle: t.fontStyle,
      };
}

var ut = /\n/g;

function at(t) {
  switch (t) {
    case 'right':
      return 1;

    case 'center':
      return 2;

    default:
      return 0;
  }
}

class st {
  constructor() {
    module22(this, c);
    return module30(this, module33(c).apply(this, arguments));
  }

  render() {
    var module22 = o.font,
      module23 = G(o.children),
      o = this.props,
      l = o.path,
      u = l ? (l instanceof module171 ? l : new module171(l)).toJSON() : null,
      s = {
        font: lt(module22),
        lines: module23.split(ut),
      };
    return (
      <V
        fill={H(o.fill, o)}
        opacity={E(o)}
        stroke={K(o.stroke)}
        strokeCap={Q(o.strokeCap)}
        strokeDash={o.strokeDash || null}
        strokeJoin={Z(o.strokeJoin)}
        strokeWidth={N(o.strokeWidth, 1)}
        transform={D(o)}
        alignment={at(o.alignment)}
        frame={s}
        path={u}
      />
    );
  }
}

var ft = {
  LinearGradient: function (t, n, o, l, u) {
    var s = X;

    if (arguments.length < 5) {
      var f = ((null == n ? 270 : n) * Math.PI) / 180,
        c = Math.cos(f),
        h = -Math.sin(f),
        p = (Math.abs(c) + Math.abs(h)) / 2;
      n = 0.5 - (c *= p);
      l = 0.5 + c;
      o = 0.5 - (h *= p);
      u = 0.5 + h;
      this._bb = true;
    } else this._bb = false;

    var v = [s, +n, +o, +l, +u];
    U(t, v, 5);
    this._brush = v;
  },
  RadialGradient: function (t, n, o, l, u, s, f) {
    if (null == u) u = l;
    if (null == s) s = n;
    if (null == f) f = o;

    if (null == n) {
      n = o = l = u = s = f = 0.5;
      this._bb = true;
    } else this._bb = false;

    var c = [Y, +n, +o, 2 * +l, 2 * +u, +s, +f];
    $(t, c, 7);
    this._brush = c;
  },
  Pattern: function (t, n, o, l, u) {
    this._brush = [O, t, +l || 0, +u || 0, +n, +o];
  },
  Transform: module174,
  Path: module171,
  Surface: I,
  Group: F,
  ClippingRectangle: M,
  Shape: tt,
  Text: st,
};
module.exports = ft;
