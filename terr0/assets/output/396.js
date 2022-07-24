exports.default = function (n, u) {
  var f = n[u];
  if (!f)
    throw new Error(
      'There is no route defined for key ' +
        u +
        '.\nMust be one of: ' +
        Object.keys(n)
          .map(function (n) {
            return "'" + n + "'";
          })
          .join(',')
    );
  if (f.screen) return f.screen;

  if ('function' == typeof f.getScreen) {
    var c = f.getScreen();
    module375.default(
      module398.isValidElementType(c),
      "The getScreen defined for route '" +
        u +
        " didn't return a valid screen or navigator.\n\nPlease pass it like this:\n" +
        u +
        ": {\n  getScreen: () => require('./MyScreen').default\n}"
    );
    return c;
  }

  return f;
};

var module398 = require('./398'),
  module375 = require('./375');
