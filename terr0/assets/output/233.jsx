var module11 = require('./11'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module46 = require('./46');

function f(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function p(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      f(Object(o), true).forEach(function (n) {
        module46(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      f(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

require('./43');

var module152 = require('./152'),
  React = require('react'),
  module75 = require('./75'),
  module234 = require('./234'),
  module52 = require('./52'),
  module3 = require('./3'),
  _ = p({}, module234.defaultProps, {
    numColumns: 1,
    removeClippedSubviews: true,
  });

class I {
  constructor(t) {
    var l;
    module22(this, f);
    (l = module30(this, module33(f).call(this, t)))._virtualizedListPairs = [];

    l._captureRef = function (t) {
      l._listRef = t;
    };

    l._getItem = function (t, n) {
      var o = l.props.numColumns;

      if (o > 1) {
        for (var s = [], u = 0; u < o; u++) {
          var c = t[n * o + u];
          if (null != c) s.push(c);
        }

        return s;
      }

      return t[n];
    };

    l._getItemCount = function (t) {
      return t ? Math.ceil(t.length / l.props.numColumns) : 0;
    };

    l._keyExtractor = function (t, n) {
      var o = l.props,
        s = o.keyExtractor,
        u = o.numColumns;

      if (u > 1) {
        module3(
          Array.isArray(t),
          'FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.',
          u
        );
        return t
          .map(function (t, o) {
            return s(t, n * u + o);
          })
          .join(':');
      } else return s(t, n);
    };

    l._renderItem = function (t) {
      var n = l.props,
        o = n.renderItem,
        s = n.numColumns,
        u = n.columnWrapperStyle;

      if (s > 1) {
        var c = t.item,
          f = t.index;
        module3(Array.isArray(c), 'Expected array of items with numColumns > 1');
        return (
          <module75 style={module52.compose(k.row, u)}>
            {c.map(function (n, l) {
              var u = o({
                item: n,
                index: f * s + l,
                separators: t.separators,
              });
              return (
                u &&
                React.cloneElement(u, {
                  key: l,
                })
              );
            })}
          </module75>
        );
      }

      return o(t);
    };

    l._checkProps(l.props);

    if (l.props.viewabilityConfigCallbackPairs)
      l._virtualizedListPairs = l.props.viewabilityConfigCallbackPairs.map(function (t) {
        return {
          viewabilityConfig: t.viewabilityConfig,
          onViewableItemsChanged: l._createOnViewableItemsChanged(t.onViewableItemsChanged),
        };
      });
    else if (l.props.onViewableItemsChanged)
      l._virtualizedListPairs.push({
        viewabilityConfig: l.props.viewabilityConfig,
        onViewableItemsChanged: l._createOnViewableItemsChanged(l.props.onViewableItemsChanged),
      });
    return l;
  }

  scrollToEnd(t) {
    if (this._listRef) this._listRef.scrollToEnd(t);
  }

  scrollToIndex(t) {
    if (this._listRef) this._listRef.scrollToIndex(t);
  }

  scrollToItem(t) {
    if (this._listRef) this._listRef.scrollToItem(t);
  }

  scrollToOffset(t) {
    if (this._listRef) this._listRef.scrollToOffset(t);
  }

  recordInteraction() {
    if (this._listRef) this._listRef.recordInteraction();
  }

  flashScrollIndicators() {
    if (this._listRef) this._listRef.flashScrollIndicators();
  }

  getScrollResponder() {
    if (this._listRef) return this._listRef.getScrollResponder();
  }

  getScrollableNode() {
    if (this._listRef) return this._listRef.getScrollableNode();
  }

  setNativeProps(t) {
    if (this._listRef) this._listRef.setNativeProps(t);
  }
}

I.defaultProps = _;
var k = module52.create({
  row: {
    flexDirection: 'row',
  },
});
module.exports = I;
