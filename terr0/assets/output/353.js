var module78 = require('./78'),
  module42 = require('./42');

module.exports = function (t, f) {
  if ('number' != typeof t && 'window' !== t) t = module78.findNodeHandle(t) || 'window';
  return module42.__takeSnapshot(t, f);
};
