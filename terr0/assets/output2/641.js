exports.registerAnimation = u;
export function getAnimationByName(n) {
  return o[n];
}
export function getAnimationNames() {
  return Object.keys(o);
}
export function initializeRegistryWithDefinitions(n) {
  Object.keys(n).forEach(function (o) {
    u(o, module640.default(n[o]));
  });
}

var module640 = require('./640'),
  o = {};

function u(n, t) {
  o[n] = t;
}
