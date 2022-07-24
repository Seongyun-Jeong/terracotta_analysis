var module178 = require('./178'),
  c = module178.checkMergeObjectArg,
  n = module178.checkMergeIntoObjectArg;

module.exports = function (t, o) {
  if ((n(t), null != o)) for (var f in (c(o), o)) Object.prototype.hasOwnProperty.call(o, f) && (t[f] = o[f]);
};
