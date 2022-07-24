var module51 = require('./51'),
  React = require('react'),
  module2 = require('./2'),
  module439 = require('./439'),
  f = {};

function s(t, l) {
  var n = f[t.displayName];
  return n || (f[t.displayName] = module439.default(t, l));
}

module.exports = {
  get ScrollView() {
    return s(module2.default.ScrollView, {
      disallowInterruption: true,
    });
  },

  get Switch() {
    return s(module2.default.Switch, {
      shouldCancelWhenOutside: false,
      shouldActivateOnStart: true,
      disallowInterruption: true,
    });
  },

  get TextInput() {
    return s(module2.default.TextInput);
  },

  get ToolbarAndroid() {
    return s(module2.default.ToolbarAndroid);
  },

  get DrawerLayoutAndroid() {
    var t = s(module2.default.DrawerLayoutAndroid, {
      disallowInterruption: true,
    });
    t.positions = module2.default.DrawerLayoutAndroid.positions;
    return t;
  },

  get FlatList() {
    if (!f.FlatList) {
      var t = this.ScrollView;
      f.FlatList = React.default.forwardRef(function (u, f) {
        return React.default.createElement(
          module2.default.FlatList,
          module51.default(
            {
              ref: f,
            },
            u,
            {
              renderScrollComponent: function (l) {
                return React.default.createElement(t, l);
              },
            }
          )
        );
      });
    }

    return f.FlatList;
  },
};
