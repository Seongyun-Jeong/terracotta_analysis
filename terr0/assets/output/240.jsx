var module11 = require('./11'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module32 = require('./32'),
  module36 = require('./36'),
  module46 = require('./46');

function u(t, n) {
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

function f(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      u(Object(o), true).forEach(function (n) {
        module46(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      u(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

require('./43');

require('./247');

require('./74');

var y,
  R,
  v,
  module212 = require('./212'),
  React = require('react'),
  module78 = require('./78'),
  module241 = require('./241'),
  module246 = require('./246'),
  module52 = require('./52'),
  module75 = require('./75'),
  module245 = require('./245'),
  module3 = require('./3'),
  module248 = require('./248'),
  module156 = require('./156'),
  module162 = require('./162');

function O(t) {
  var n = f({}, module241.Mixin);

  for (var o in n) 'function' == typeof n[o] && (n[o] = n[o].bind(t));

  return n;
}

y = module156('RCTScrollView');
v = module156('AndroidHorizontalScrollView');
R = module156('AndroidHorizontalScrollContentView');
var I = module52.create({
  baseVertical: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    overflow: 'scroll',
  },
  baseHorizontal: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  contentContainerHorizontal: {
    flexDirection: 'row',
  },
});

class M {
  constructor() {
    var t, o;
    module22(this, u);

    for (var R in (((o = module30(this, (t = module33(u)).call.apply(t, [this].concat(args))))._scrollResponder = O(module32(o))),
    (o._scrollAnimatedValue = new module212.Value(0)),
    (o._scrollAnimatedValueAttachment = null),
    (o._stickyHeaderRefs = new Map()),
    (o._headerLayoutYs = new Map()),
    (o.state = f(
      {
        layoutHeight: null,
      },
      module241.Mixin.scrollResponderMixinGetInitialState()
    )),
    (o._handleScroll = function (t) {
      if ('on-drag' === o.props.keyboardDismissMode && o.state.isTouching) module245();

      o._scrollResponder.scrollResponderHandleScroll(t);
    }),
    (o._handleLayout = function (t) {
      if (o.props.invertStickyHeaders)
        o.setState({
          layoutHeight: t.nativeEvent.layout.height,
        });
      if (o.props.onLayout) o.props.onLayout(t);
    }),
    (o._handleContentOnLayout = function (t) {
      var n = t.nativeEvent.layout,
        l = n.width,
        s = n.height;
      if (o.props.onContentSizeChange) o.props.onContentSizeChange(l, s);
    }),
    (o._scrollViewRef = null),
    (o._setScrollViewRef = function (t) {
      o._scrollViewRef = t;
    }),
    (o._innerViewRef = null),
    (o._setInnerViewRef = function (t) {
      o._innerViewRef = t;
    }),
    module241.Mixin))
      'function' == typeof module241.Mixin[R] && R.startsWith('scrollResponder') && (module32(o)[R] = module241.Mixin[R].bind(module32(o)));

    Object.keys(module241.Mixin)
      .filter(function (t) {
        return 'function' != typeof module241.Mixin[t];
      })
      .forEach(function (t) {
        module32(o)[t] = module241.Mixin[t];
      });
    return o;
  }

  UNSAFE_componentWillMount() {
    this._scrollResponder.UNSAFE_componentWillMount();

    this._scrollAnimatedValue = new module212.Value(this.props.contentOffset ? this.props.contentOffset.y : 0);

    this._scrollAnimatedValue.setOffset(this.props.contentInset ? this.props.contentInset.top : 0);

    this._stickyHeaderRefs = new Map();
    this._headerLayoutYs = new Map();
  }

  UNSAFE_componentWillReceiveProps(t) {
    var n = this.props.contentInset ? this.props.contentInset.top : 0,
      o = t.contentInset ? t.contentInset.top : 0;
    if (n !== o) this._scrollAnimatedValue.setOffset(o || 0);
  }

  componentDidMount() {
    this._updateAnimatedNodeAttachment();
  }

  componentDidUpdate() {
    this._updateAnimatedNodeAttachment();
  }

  componentWillUnmount() {
    this._scrollResponder.componentWillUnmount();

    if (this._scrollAnimatedValueAttachment) this._scrollAnimatedValueAttachment.detach();
  }

  setNativeProps(t) {
    if (this._scrollViewRef) this._scrollViewRef.setNativeProps(t);
  }

  getScrollResponder() {
    return this;
  }

  getScrollableNode() {
    return module78.findNodeHandle(this._scrollViewRef);
  }

  getInnerViewNode() {
    return module78.findNodeHandle(this._innerViewRef);
  }

  scrollTo(t, n, o) {
    if ('number' == typeof t) console.warn('`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.');
    else {
      var l = t || {};
      n = l.x;
      t = l.y;
      o = l.animated;
    }

    this._scrollResponder.scrollResponderScrollTo({
      x: n || 0,
      y: t || 0,
      animated: false !== o,
    });
  }

  scrollToEnd(t) {
    var n = false !== (t && t.animated);

    this._scrollResponder.scrollResponderScrollToEnd({
      animated: n,
    });
  }

  scrollWithoutAnimationTo() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
      n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0;
    console.warn('`scrollWithoutAnimationTo` is deprecated. Use `scrollTo` instead');
    this.scrollTo({
      x: n,
      y: t,
      animated: false,
    });
  }

  flashScrollIndicators() {
    this._scrollResponder.scrollResponderFlashScrollIndicators();
  }

  _getKeyForIndex(t, n) {
    var o = n[t];
    return o && o.key;
  }

  _updateAnimatedNodeAttachment() {
    if (this._scrollAnimatedValueAttachment) this._scrollAnimatedValueAttachment.detach();
    if (this.props.stickyHeaderIndices && this.props.stickyHeaderIndices.length > 0)
      this._scrollAnimatedValueAttachment = module212.attachNativeEvent(this._scrollViewRef, 'onScroll', [
        {
          nativeEvent: {
            contentOffset: {
              y: this._scrollAnimatedValue,
            },
          },
        },
      ]);
  }

  _setStickyHeaderRef(t, n) {
    if (n) this._stickyHeaderRefs.set(t, n);
    else this._stickyHeaderRefs.delete(t);
  }

  _onStickyHeaderLayout(t, n, o) {
    var l = this.props.stickyHeaderIndices;

    if (l) {
      var s = React.Children.toArray(this.props.children);

      if (o === this._getKeyForIndex(t, s)) {
        var c = n.nativeEvent.layout.y;

        this._headerLayoutYs.set(o, c);

        var p = l[l.indexOf(t) - 1];

        if (null != p) {
          var h = this._stickyHeaderRefs.get(this._getKeyForIndex(p, s));

          if (h) h.setNextHeaderY(c);
        }
      }
    }
  }

  render() {
    var n,
      o,
      l = this;

    if (this.props.horizontal) {
      n = v;
      o = R;
    } else {
      n = y;
      o = module75;
    }

    module3(undefined !== n, 'ScrollViewClass must not be undefined');
    module3(undefined !== o, 'ScrollContentContainerViewClass must not be undefined');
    var s = [this.props.horizontal && I.contentContainerHorizontal, this.props.contentContainerStyle],
      c = {};
    if (this.props.onContentSizeChange)
      c = {
        onLayout: this._handleContentOnLayout,
      };
    var p = this.props.stickyHeaderIndices,
      h = this.props.children;

    if (null != p && p.length > 0) {
      var u = React.Children.toArray(this.props.children);
      h = u.map(function (t, n) {
        var o = t ? p.indexOf(n) : -1;

        if (o > -1) {
          var s = t.key,
            c = p[o + 1];
          return (
            <module246
              key={s}
              ref={function (t) {
                return l._setStickyHeaderRef(s, t);
              }}
              nextHeaderLayoutY={l._headerLayoutYs.get(l._getKeyForIndex(c, u))}
              onLayout={function (t) {
                return l._onStickyHeaderLayout(n, t, s);
              }}
              scrollAnimatedValue={l._scrollAnimatedValue}
              inverted={l.props.invertStickyHeaders}
              scrollViewHeight={l.state.layoutHeight}
            >
              {t}
            </module246>
          );
        }

        return t;
      });
    }

    var _ = p && p.length > 0,
      w = <o>{h}</o>,
      H = undefined !== this.props.alwaysBounceHorizontal ? this.props.alwaysBounceHorizontal : this.props.horizontal,
      V = undefined !== this.props.alwaysBounceVertical ? this.props.alwaysBounceVertical : !this.props.horizontal,
      A = !!this.props.DEPRECATED_sendUpdatedChildFrames,
      C = this.props.horizontal ? I.baseHorizontal : I.baseVertical,
      O = f({}, this.props, {
        alwaysBounceHorizontal: H,
        alwaysBounceVertical: V,
        style: [C, this.props.style],
        onContentSizeChange: null,
        onLayout: this._handleLayout,
        onMomentumScrollBegin: this._scrollResponder.scrollResponderHandleMomentumScrollBegin,
        onMomentumScrollEnd: this._scrollResponder.scrollResponderHandleMomentumScrollEnd,
        onResponderGrant: this._scrollResponder.scrollResponderHandleResponderGrant,
        onResponderReject: this._scrollResponder.scrollResponderHandleResponderReject,
        onResponderRelease: this._scrollResponder.scrollResponderHandleResponderRelease,
        onResponderTerminate: this._scrollResponder.scrollResponderHandleTerminate,
        onResponderTerminationRequest: this._scrollResponder.scrollResponderHandleTerminationRequest,
        onScrollBeginDrag: this._scrollResponder.scrollResponderHandleScrollBeginDrag,
        onScrollEndDrag: this._scrollResponder.scrollResponderHandleScrollEndDrag,
        onScrollShouldSetResponder: this._scrollResponder.scrollResponderHandleScrollShouldSetResponder,
        onStartShouldSetResponder: this._scrollResponder.scrollResponderHandleStartShouldSetResponder,
        onStartShouldSetResponderCapture: this._scrollResponder.scrollResponderHandleStartShouldSetResponderCapture,
        onTouchEnd: this._scrollResponder.scrollResponderHandleTouchEnd,
        onTouchMove: this._scrollResponder.scrollResponderHandleTouchMove,
        onTouchStart: this._scrollResponder.scrollResponderHandleTouchStart,
        onTouchCancel: this._scrollResponder.scrollResponderHandleTouchCancel,
        onScroll: this._handleScroll,
        scrollBarThumbImage: module162(this.props.scrollBarThumbImage),
        scrollEventThrottle: _ ? 1 : this.props.scrollEventThrottle,
        sendMomentumEvents: !(!this.props.onMomentumScrollBegin && !this.props.onMomentumScrollEnd),
        DEPRECATED_sendUpdatedChildFrames: A,
        snapToStart: false !== this.props.snapToStart,
        snapToEnd: false !== this.props.snapToEnd,
        pagingEnabled: this.props.pagingEnabled || null != this.props.snapToInterval || null != this.props.snapToOffsets,
      }),
      M = this.props.decelerationRate;

    if (null != M) O.decelerationRate = module248(M);
    var z = this.props.refreshControl;
    return z ? (
      React.cloneElement(
        z,
        {
          style: O.style,
        },
        <n>{w}</n>
      )
    ) : (
      <n>{w}</n>
    );
  }
}

module.exports = M;
