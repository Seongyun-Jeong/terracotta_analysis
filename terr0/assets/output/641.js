exports.registerAnimation = u;

exports.getAnimationByName = function (n) {
  return o[n];
};

exports.getAnimationNames = function () {
  return Object.keys(o);
};

exports.initializeRegistryWithDefinitions = function (n) {
  Object.keys(n).forEach(function (o) {
    u(o, module640.default(n[o]));
  });
};

var module640 = require('./640'),
  o = {};

function u(n, t) {
  o[n] = t;
}
