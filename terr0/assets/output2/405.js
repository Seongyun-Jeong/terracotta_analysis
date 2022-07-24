var module406 = require('./406'),
  module407 = require('./407'),
  module408 = require('./408');

module.exports = function (u, c) {
  return module406(u) || module407(u, c) || module408();
};
