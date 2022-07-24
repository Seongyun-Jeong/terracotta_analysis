var module393 = require('./393'),
  module394 = require('./394'),
  module395 = require('./395');

module.exports = function (u) {
  return module393(u) || module394(u) || module395();
};
