var module46 = require('./46'),
  module11 = require('./11'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36');

function p(t, n) {
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

import React from 'react';

var module305 = require('./305'),
  module233 = require('./233');

class _ {
  constructor(t, n) {
    var s;
    module22(this, p);
    (s = module30(this, module33(p).call(this, t, n)))._flatListRef = null;
    s._shouldBounceFirstRowOnMount = false;

    s._onScroll = function (t) {
      if (s.state.openRowKey)
        s.setState({
          openRowKey: null,
        });
      if (s.props.onScroll) s.props.onScroll(t);
    };

    s._renderItem = function (t) {
      var n = s.props.renderQuickActions(t),
        o = s.props.keyExtractor(t.item, t.index);
      if (!n) return s.props.renderItem(t);
      var l = false;

      if (s._shouldBounceFirstRowOnMount) {
        s._shouldBounceFirstRowOnMount = false;
        l = true;
      }

      return (
        <module305
          slideoutView={n}
          isOpen={o === s.state.openRowKey}
          maxSwipeDistance={s._getMaxSwipeDistance(t)}
          onOpen={function () {
            return s._onOpen(o);
          }}
          onClose={function () {
            return s._onClose(o);
          }}
          shouldBounceOnMount={l}
          onSwipeEnd={s._setListViewScrollable}
          onSwipeStart={s._setListViewNotScrollable}
        >
          <t />
        </module305>
      );
    };

    s._setListViewScrollable = function () {
      s._setListViewScrollableTo(true);
    };

    s._setListViewNotScrollable = function () {
      s._setListViewScrollableTo(false);
    };

    s.state = {
      openRowKey: null,
    };
    s._shouldBounceFirstRowOnMount = s.props.bounceFirstRowOnMount;
    return s;
  }

  render() {
    var t = this;
    return <module233 />;
  }

  _getMaxSwipeDistance(t) {
    return 'function' == typeof this.props.maxSwipeDistance ? this.props.maxSwipeDistance(t) : this.props.maxSwipeDistance;
  }

  _setListViewScrollableTo(t) {
    if (this._flatListRef)
      this._flatListRef.setNativeProps({
        scrollEnabled: t,
      });
  }

  _onOpen(t) {
    this.setState({
      openRowKey: t,
    });
  }

  _onClose(t) {
    this.setState({
      openRowKey: null,
    });
  }
}

_.defaultProps = (function (n) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      p(Object(s), true).forEach(function (o) {
        module46(n, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
    else
      p(Object(s)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return n;
})({}, module233.defaultProps, {
  bounceFirstRowOnMount: true,
  renderQuickActions: function () {
    return null;
  },
});

module.exports = _;
