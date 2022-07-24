function t() {
  var module43 = require('./43');

  t = function () {
    return module43;
  };

  return module43;
}

var module42 = require('./42');

function o(n, o) {
  if (!t().default.isTesting) module42.configureNextLayoutAnimation(n, null != o ? o : function () {}, function () {});
}

function c(n, t, s) {
  return {
    duration: n,
    create: {
      type: t,
      property: s,
    },
    update: {
      type: t,
    },
    delete: {
      type: t,
      property: s,
    },
  };
}

var p = {
    easeInEaseOut: c(300, 'easeInEaseOut', 'opacity'),
    linear: c(500, 'linear', 'opacity'),
    spring: {
      duration: 700,
      create: {
        type: 'linear',
        property: 'opacity',
      },
      update: {
        type: 'spring',
        springDamping: 0.4,
      },
      delete: {
        type: 'linear',
        property: 'opacity',
      },
    },
  },
  u = {
    configureNext: o,
    create: c,
    Types: Object.freeze({
      spring: 'spring',
      linear: 'linear',
      easeInEaseOut: 'easeInEaseOut',
      easeIn: 'easeIn',
      easeOut: 'easeOut',
      keyboard: 'keyboard',
    }),
    Properties: Object.freeze({
      opacity: 'opacity',
      scaleX: 'scaleX',
      scaleY: 'scaleY',
      scaleXY: 'scaleXY',
    }),
    checkConfig: function () {
      console.error('LayoutAnimation.checkConfig(...) has been disabled.');
    },
    Presets: p,
    easeInEaseOut: o.bind(null, p.easeInEaseOut),
    linear: o.bind(null, p.linear),
    spring: o.bind(null, p.spring),
  };
module.exports = u;
