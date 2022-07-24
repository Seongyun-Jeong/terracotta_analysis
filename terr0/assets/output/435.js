var module51 = require('./51'),
  React = require('react'),
  module2 = require('./2'),
  module436 = require('./436'),
  module429 = require('./429').default(module436.ScrollView),
  c = React.default.forwardRef(function (t, o) {
    return React.default.createElement(
      module2.FlatList,
      module51.default(
        {
          ref: o,
        },
        t,
        {
          renderScrollComponent: function (t) {
            return React.default.createElement(module429, t);
          },
        }
      )
    );
  }),
  S = React.default.forwardRef(function (t, o) {
    return React.default.createElement(
      module2.SectionList,
      module51.default(
        {
          ref: o,
        },
        t,
        {
          renderScrollComponent: function (t) {
            return React.default.createElement(module429, t);
          },
        }
      )
    );
  });

module.exports = {
  ScrollView: module429,
  FlatList: c,
  SectionList: S,
};
