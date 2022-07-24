var module3 = require('./3');

module.exports = function (s) {
  module3(!(s.delayPressIn < 0 || s.delayPressOut < 0 || s.delayLongPress < 0), 'Touchable components cannot have negative delay properties');
};
