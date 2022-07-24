var module626 = require('./626');

module.exports = function (n, s, o) {
  return !module626(n.props, s) || !module626(n.state, o);
};
