var module19 = require('./19'),
  module20 = require('./20'),
  module21 = require('./21');

module.exports = function (u) {
  return module19(u) || module20(u) || module21();
};
