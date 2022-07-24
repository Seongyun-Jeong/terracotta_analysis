var n,
  module107 = require('./107');

n = module107.now
  ? function () {
      return module107.now();
    }
  : function () {
      return Date.now();
    };
module.exports = n;
