var t,
  n,
  s,
  u,
  module163 = require('./163'),
  module164 = require('./164');

function f() {
  if (u) return u;
  var t = globals.nativeExtensions && globals.nativeExtensions.SourceCode;

  if (!t) {
    var module8 = require('./8');

    t = module8 && module8.SourceCode;
  }

  u = t.scriptURL;
  return u;
}

function l() {
  if (undefined === n) {
    var t = f(),
      s = t && t.match(/^https?:\/\/.*?\//);
    n = s ? s[0] : null;
  }

  return n;
}

function v(t) {
  if (t) {
    if (t.startsWith('assets://')) return null;
    if (!(t = t.substring(0, t.lastIndexOf('/') + 1)).includes('://')) t = 'file://' + t;
  }

  return t;
}

module.exports = function (n) {
  if ('object' == typeof n) return n;
  var u = module163.getAssetByID(n);
  if (!u) return null;
  var p = new module164(l(), (undefined === s && (s = v(f())), s), u);
  return t ? t(p) : p.defaultAsset();
};

module.exports.pickScale = module164.pickScale;

module.exports.setCustomSourceTransformer = function (n) {
  t = n;
};
