var module398 = require('./398'),
  module375 = require('./375');

function c(n) {
  return n ? (n.screen ? n.screen : n) : null;
}

var u = function (n) {
  var u = Object.keys(n);
  module375.default(u.length > 0, 'Please specify at least one route when configuring a navigator.');
  u.forEach(function (t) {
    var u = n[t],
      f = c(u);
    if (!f || (!module398.isValidElementType(f) && !u.getScreen))
      throw new Error(
        "The component for route '" +
          t +
          "' must be a React component. For example:\n\nimport MyScreen from './MyScreen';\n...\n" +
          t +
          ": MyScreen,\n}\n\nYou can also use a navigator:\n\nimport MyNavigator from './MyNavigator';\n...\n" +
          t +
          ': MyNavigator,\n}'
      );
    if (u.screen && u.getScreen) throw new Error("Route '" + t + "' should declare a screen or a getScreen, not both.");
  });
};

exports.default = u;
