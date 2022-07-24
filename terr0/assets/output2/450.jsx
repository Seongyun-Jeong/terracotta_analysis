import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module439 = require('./439'),
  f = {};

function s(t, l) {
  var n = f[t.displayName];
  return n || (f[t.displayName] = module439.default(t, l));
}

module.exports = {
  get ScrollView() {
    return s(module2.ScrollView, {
      disallowInterruption: true,
    });
  },

  get Switch() {
    return s(module2.Switch, {
      shouldCancelWhenOutside: false,
      shouldActivateOnStart: true,
      disallowInterruption: true,
    });
  },

  get TextInput() {
    return s(module2.TextInput);
  },

  get ToolbarAndroid() {
    return s(module2.ToolbarAndroid);
  },

  get DrawerLayoutAndroid() {
    var t = s(module2.DrawerLayoutAndroid, {
      disallowInterruption: true,
    });
    t.positions = module2.DrawerLayoutAndroid.positions;
    return t;
  },

  get FlatList() {
    if (!f.FlatList) {
      var t = this.ScrollView;
      f.FlatList = React.forwardRef(function (u, f) {
        return <module2.FlatList />;
      });
    }

    return f.FlatList;
  },
};
