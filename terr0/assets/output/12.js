var module13 = require('./13'),
  module14 = require('./14'),
  module15 = require('./15');

module.exports = function (u, c) {
  return module13(u) || module14(u, c) || module15();
};
