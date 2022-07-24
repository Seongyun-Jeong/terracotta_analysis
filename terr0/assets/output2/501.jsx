var module404 = require('./404');

import React from 'react';
import PropTypes from 'prop-types';
import module2 from './2';

var module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module498 = require('./498');

function w(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

class b {
  constructor(t) {
    var o;
    module356.default(this, n);
    (o = module358.default(this, module361.default(n).call(this, t)))._isIdle = true;
    o._isInitial = true;

    o._setInitialPage = function () {
      if (o.props.layout.width) {
        o._isInitial = true;

        o._scrollTo(o.props.navigationState.index * o.props.layout.width, false);
      }

      setTimeout(function () {
        o._isInitial = false;
      }, 50);
    };

    o._scrollTo = function (t) {
      var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
      if (o._isIdle && o._scrollView)
        o._scrollView.scrollTo({
          x: t,
          animated: n && false !== o.props.animationEnabled,
        });
    };

    o._handleMomentumScrollEnd = function (t) {
      var n = Math.round(t.nativeEvent.contentOffset.x / o.props.layout.width),
        l = o.props.navigationState.routes[n];

      if (
        o.props.canJumpToTab({
          route: l,
        })
      ) {
        o.props.jumpTo(l.key);
        if (o.props.onAnimationEnd) o.props.onAnimationEnd();
      } else
        globals.requestAnimationFrame(function () {
          o._scrollTo(o.props.navigationState.index * o.props.layout.width);
        });
    };

    o._handleScroll = function (t) {
      if (!o._isInitial && 0 !== t.nativeEvent.contentSize.width) {
        var n = o.props,
          l = n.navigationState,
          s = n.layout,
          c = l.index * s.width;
        o.props.offsetX.setValue(-c);
        o.props.panX.setValue(c - t.nativeEvent.contentOffset.x);
        globals.cancelAnimationFrame(o._idleCallback);
        o._isIdle = false;
        o._idleCallback = globals.requestAnimationFrame(function () {
          o._isIdle = true;
        });
      }
    };

    var s = o.props,
      p = s.navigationState,
      f = s.layout;
    o.state = {
      initialOffset: {
        x: p.index * f.width,
        y: 0,
      },
    };
    return o;
  }

  componentDidMount() {
    this._setInitialPage();
  }

  componentDidUpdate(t) {
    var n = this.props.navigationState.index * this.props.layout.width;
    if (t.navigationState.routes.length !== this.props.navigationState.routes.length || t.layout.width !== this.props.layout.width) this._scrollTo(n, false);
    else if (t.navigationState.index !== this.props.navigationState.index) this._scrollTo(n);
  }

  render() {
    var t = this,
      n = this.props,
      o = n.children,
      l = n.layout,
      s = n.navigationState,
      c = n.onSwipeStart,
      u = n.onSwipeEnd,
      p = n.bounces;
    return (
      <module2.ScrollView
        horizontal
        pagingEnabled
        directionalLockEnabled
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        overScrollMode="never"
        scrollToOverflowEnabled
        scrollEnabled={this.props.swipeEnabled}
        automaticallyAdjustContentInsets={false}
        bounces={p}
        alwaysBounceHorizontal={p}
        scrollsToTop={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={1}
        onScroll={this._handleScroll}
        onScrollBeginDrag={c}
        onScrollEndDrag={u}
        onMomentumScrollEnd={this._handleMomentumScrollEnd}
        contentOffset={this.state.initialOffset}
        style={S.container}
        contentContainerStyle={l.width ? null : S.container}
        ref={function (n) {
          return (t._scrollView = n);
        }}
      >
        <o />
      </module2.ScrollView>
    );
  }
}

export default b;

b.propTypes = (function (t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      w(Object(l), true).forEach(function (n) {
        module284.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      w(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
})({}, module498.PagerRendererPropType, {
  bounces: PropTypes.bool.isRequired,
});

b.defaultProps = {
  canJumpToTab: function () {
    return true;
  },
  bounces: false,
};
var S = module2.StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    overflow: 'hidden',
  },
});
