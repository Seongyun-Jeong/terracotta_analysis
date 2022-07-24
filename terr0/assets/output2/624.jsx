var module404 = require('./404');

import React from 'react';
import module2 from './2';
import PropTypes from 'prop-types';

var module51 = require('./51'),
  module284 = require('./284'),
  module392 = require('./392'),
  module405 = require('./405'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module625 = require('./625'),
  module627 = require('./627');

function k(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (o)
      l = l.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, l);
  }

  return n;
}

function A(t) {
  for (var o = 1; o < arguments.length; o++) {
    var n = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      k(Object(n), true).forEach(function (o) {
        module284.default(t, o, n[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    else
      k(Object(n)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
      });
  }

  return t;
}

var C = 'ios' === module2.Platform.OS,
  E = module2.FlatList ? module2.Animated.createAnimatedComponent(module2.FlatList) : null,
  O = module2.Animated.createAnimatedComponent(module2.ScrollView),
  w = module2.I18nManager.isRTL;

class D {
  constructor(t) {
    var n;
    module356.default(this, o);
    (n = module358.default(this, module361.default(o).call(this, t))).state = {
      hideCarousel: true,
      interpolators: [],
    };

    var l = n._getFirstItem(t.firstItem);

    n._activeItem = l;
    n._previousActiveItem = l;
    n._previousFirstItem = l;
    n._previousItemsLength = l;
    n._mounted = false;
    n._positions = [];
    n._currentContentOffset = 0;
    n._canFireBeforeCallback = false;
    n._canFireCallback = false;
    n._scrollOffsetRef = null;
    n._onScrollTriggered = true;
    n._lastScrollDate = 0;
    n._scrollEnabled = false !== t.scrollEnabled;
    n._initPositionsAndInterpolators = n._initPositionsAndInterpolators.bind(module360.default(n));
    n._renderItem = n._renderItem.bind(module360.default(n));
    n._onSnap = n._onSnap.bind(module360.default(n));
    n._onLayout = n._onLayout.bind(module360.default(n));
    n._onScroll = n._onScroll.bind(module360.default(n));
    n._onScrollBeginDrag = t.enableSnap ? n._onScrollBeginDrag.bind(module360.default(n)) : undefined;
    n._onScrollEnd = t.enableSnap || t.autoplay ? n._onScrollEnd.bind(module360.default(n)) : undefined;
    n._onScrollEndDrag = t.enableMomentum ? undefined : n._onScrollEndDrag.bind(module360.default(n));
    n._onMomentumScrollEnd = t.enableMomentum ? n._onMomentumScrollEnd.bind(module360.default(n)) : undefined;
    n._onTouchStart = n._onTouchStart.bind(module360.default(n));
    n._onTouchEnd = n._onTouchEnd.bind(module360.default(n));
    n._onTouchRelease = n._onTouchRelease.bind(module360.default(n));
    n._getKeyExtractor = n._getKeyExtractor.bind(module360.default(n));

    n._setScrollHandler(t);

    n._ignoreNextMomentum = false;
    if (!module2.ViewPropTypes) console.warn('react-native-snap-carousel: It is recommended to use at least version 0.44 of React Native with the plugin');
    if (!(t.vertical || (t.sliderWidth && t.itemWidth)))
      console.warn('react-native-snap-carousel: You need to specify both `sliderWidth` and `itemWidth` for horizontal carousels');
    if (!(!t.vertical || (t.sliderHeight && t.itemHeight)))
      console.warn('react-native-snap-carousel: You need to specify both `sliderHeight` and `itemHeight` for vertical carousels');
    if (!(!t.apparitionDelay || C || t.useScrollView))
      console.warn('react-native-snap-carousel: Using `apparitionDelay` on Android is not recommended since it can lead to rendering issues');
    if (t.customAnimationType || t.customAnimationOptions)
      console.warn('react-native-snap-carousel: Props `customAnimationType` and `customAnimationOptions` have been renamed to `activeAnimationType` and `activeAnimationOptions`');
    if (t.onScrollViewScroll) console.warn('react-native-snap-carousel: Prop `onScrollViewScroll` has been removed. Use `onScroll` instead');
    return n;
  }

  componentDidMount() {
    var t = this,
      o = this.props,
      n = o.apparitionDelay,
      l = o.autoplay,
      s = o.firstItem,
      u = this._getFirstItem(s),
      c = function () {
        t.setState({
          hideCarousel: false,
        });
        if (l) t.startAutoplay();
      };

    this._mounted = true;

    this._initPositionsAndInterpolators();

    requestAnimationFrame(function () {
      if (t._mounted) {
        t._snapToItem(u, false, false, true, false);

        t._hackActiveSlideAnimation(u, 'start', true);

        if (n)
          t._apparitionTimeout = setTimeout(function () {
            c();
          }, n);
        else c();
      }
    });
  }

  shouldComponentUpdate(t, o) {
    return false === this.props.shouldOptimizeUpdates || module625.default(this, t, o);
  }

  componentWillReceiveProps(t) {
    var o = this.state.interpolators,
      n = t.firstItem,
      l = t.itemHeight,
      s = t.itemWidth,
      u = t.scrollEnabled,
      c = t.sliderHeight,
      h = t.sliderWidth,
      p = this._getCustomDataLength(t);

    if (p) {
      var _ = this._getFirstItem(n, t),
        f = this._activeItem || 0 === this._activeItem ? this._activeItem : _,
        v = h && h !== this.props.sliderWidth,
        S = c && c !== this.props.sliderHeight,
        y = s && s !== this.props.itemWidth,
        T = l && l !== this.props.itemHeight,
        I = u !== this.props.scrollEnabled;

      if (f > p - 1) f = p - 1;
      if (I) this._setScrollEnabled(u);

      if (o.length !== p || v || S || y || T) {
        this._activeItem = f;
        this._previousItemsLength = p;

        this._initPositionsAndInterpolators(t);

        if (this._previousItemsLength > p) this._hackActiveSlideAnimation(f, null, true);
        if (v || S || y || T) this._snapToItem(f, false, false, false, false);
      } else if (_ !== this._previousFirstItem && _ !== this._activeItem) {
        this._activeItem = _;
        this._previousFirstItem = _;

        this._snapToItem(_, false, true, false, false);
      }

      if (t.onScroll !== this.props.onScroll) this._setScrollHandler(t);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
    this.stopAutoplay();
    clearTimeout(this._apparitionTimeout);
    clearTimeout(this._hackSlideAnimationTimeout);
    clearTimeout(this._enableAutoplayTimeout);
    clearTimeout(this._autoplayTimeout);
    clearTimeout(this._snapNoMomentumTimeout);
    clearTimeout(this._edgeItemTimeout);
    clearTimeout(this._lockScrollTimeout);
  }

  _setScrollHandler(t) {
    var o = {
      listener: this._onScroll,
      useNativeDriver: true,
    };
    this._scrollPos = new module2.Animated.Value(0);
    var n = t.vertical
      ? [
          {
            nativeEvent: {
              contentOffset: {
                y: this._scrollPos,
              },
            },
          },
        ]
      : [
          {
            nativeEvent: {
              contentOffset: {
                x: this._scrollPos,
              },
            },
          },
        ];

    if (t.onScroll && Array.isArray(t.onScroll._argMapping)) {
      n.pop();
      var l = module405.default(t.onScroll._argMapping, 1)[0];
      if (l && l.nativeEvent && l.nativeEvent.contentOffset) this._scrollPos = l.nativeEvent.contentOffset.x || l.nativeEvent.contentOffset.y || this._scrollPos;
      n.push.apply(n, module392.default(t.onScroll._argMapping));
    }

    this._onScrollHandler = module2.Animated.event(n, o);
  }

  _needsScrollView() {
    return this.props.useScrollView || !E || this._shouldUseStackLayout() || this._shouldUseTinderLayout();
  }

  _needsRTLAdaptations() {
    var t = this.props.vertical;
    return w && !C && !t;
  }

  _canLockScroll() {
    var t = this.props,
      o = t.scrollEnabled,
      n = t.enableMomentum,
      l = t.lockScrollWhileSnapping;
    return o && !n && l;
  }

  _enableLoop() {
    var t = this.props,
      o = t.data,
      n = t.enableSnap,
      l = t.loop;
    return n && l && o && o.length && o.length > 1;
  }

  _shouldAnimateSlides() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props,
      o = t.inactiveSlideOpacity,
      n = t.inactiveSlideScale,
      l = t.scrollInterpolator,
      s = t.slideInterpolatedStyle;
    return o < 1 || n < 1 || !!l || !!s || this._shouldUseShiftLayout() || this._shouldUseStackLayout() || this._shouldUseTinderLayout();
  }

  _shouldUseCustomAnimation() {
    return !!this.props.activeAnimationOptions && !this._shouldUseStackLayout() && !this._shouldUseTinderLayout();
  }

  _shouldUseShiftLayout() {
    var t = this.props,
      o = t.inactiveSlideShift;
    return 'default' === t.layout && 0 !== o;
  }

  _shouldUseStackLayout() {
    return 'stack' === this.props.layout;
  }

  _shouldUseTinderLayout() {
    return 'tinder' === this.props.layout;
  }

  _getCustomData() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props,
      o = t.data,
      n = t.loopClonesPerSide,
      l = o && o.length;
    if (!l) return [];
    if (!this._enableLoop()) return o;
    var u = [],
      c = [];

    if (n > l) {
      for (var h, p, _ = Math.floor(n / l), f = n % l, v = 0; v < _; v++) {
        var S, y;
        (S = u).push.apply(S, module392.default(o));
        (y = c).push.apply(y, module392.default(o));
      }

      (h = u).unshift.apply(h, module392.default(o.slice(-f)));
      (p = c).push.apply(p, module392.default(o.slice(0, f)));
    } else {
      u = o.slice(-n);
      c = o.slice(0, n);
    }

    return u.concat(o, c);
  }

  _getCustomDataLength() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props,
      o = t.data,
      n = t.loopClonesPerSide,
      l = o && o.length;
    return l ? (this._enableLoop() ? l + 2 * n : l) : 0;
  }

  _getCustomIndex(t) {
    var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.props,
      n = this._getCustomDataLength(o);

    return !n || (!t && 0 !== t) ? 0 : this._needsRTLAdaptations() ? n - t - 1 : t;
  }

  _getDataIndex(t) {
    var o = this.props,
      n = o.data,
      l = o.loopClonesPerSide,
      u = n && n.length;
    if (!this._enableLoop() || !u) return t;
    if (t >= u + l) return l > u ? (t - l) % u : t - u - l;

    if (t < l) {
      if (l > u) {
        for (var c = [], h = [], p = Math.floor(l / u), _ = l % u, f = 0; f < u; f++) c.push(f);

        for (var v = 0; v < p; v++) h.push.apply(h, c);

        h.unshift.apply(h, module392.default(c.slice(-_)));
        return h[t];
      }

      return t + u - l;
    }

    return t - l;
  }

  _getPositionIndex(t) {
    var o = this.props,
      n = o.loop,
      l = o.loopClonesPerSide;
    return n ? t + l : t;
  }

  _getFirstItem(t) {
    var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : this.props,
      n = o.loopClonesPerSide,
      l = this._getCustomDataLength(o);

    return !l || t > l - 1 || t < 0 ? 0 : this._enableLoop() ? t + n : t;
  }

  _getWrappedRef() {
    return this._carouselRef && this._carouselRef.getNode && this._carouselRef.getNode();
  }

  _getScrollEnabled() {
    return this._scrollEnabled;
  }

  _setScrollEnabled() {
    var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
      o = this._getWrappedRef();

    if (o && o.setNativeProps) {
      o.setNativeProps({
        scrollEnabled: t,
      });
      this._scrollEnabled = t;
    }
  }

  _getKeyExtractor(t, o) {
    return this._needsScrollView() ? 'scrollview-item-' + o : 'flatlist-item-' + o;
  }

  _getScrollOffset(t) {
    var o = this.props.vertical;
    return t && t.nativeEvent && t.nativeEvent.contentOffset ? t.nativeEvent.contentOffset[o ? 'y' : 'x'] : 0;
  }

  _getContainerInnerMargin() {
    var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0],
      o = this.props,
      n = o.sliderWidth,
      l = o.sliderHeight,
      s = o.itemWidth,
      u = o.itemHeight,
      c = o.vertical,
      h = o.activeSlideAlignment;
    return ('start' === h && !t) || ('end' === h && t) ? 0 : ('end' === h && !t) || ('start' === h && t) ? (c ? l - u : n - s) : c ? (l - u) / 2 : (n - s) / 2;
  }

  _getViewportOffset() {
    var t = this.props,
      o = t.sliderWidth,
      n = t.sliderHeight,
      l = t.itemWidth,
      s = t.itemHeight,
      u = t.vertical,
      c = t.activeSlideAlignment;
    if ('start' === c) return u ? s / 2 : l / 2;
    else if ('end' === c) return u ? n - s / 2 : o - l / 2;
    else return u ? n / 2 : o / 2;
  }

  _getCenter(t) {
    return t + this._getViewportOffset() - this._getContainerInnerMargin();
  }

  _getActiveItem(t) {
    for (var o = this.props, n = o.activeSlideOffset, l = o.swipeThreshold, s = this._getCenter(t), u = n || l, c = 0; c < this._positions.length; c++) {
      var h = this._positions[c],
        p = h.start,
        _ = h.end;
      if (s + u >= p && s - u <= _) return c;
    }

    var f = this._positions.length - 1;
    return this._positions[f] && s - u > this._positions[f].end ? f : 0;
  }

  _initPositionsAndInterpolators() {
    var t = this,
      o = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props,
      n = o.data,
      l = o.itemWidth,
      s = o.itemHeight,
      u = o.scrollInterpolator,
      c = o.vertical ? s : l;

    if (n && n.length) {
      var h = [];
      this._positions = [];

      this._getCustomData(o).forEach(function (n, l) {
        var s,
          p = t._getCustomIndex(l, o);

        if (
          ((t._positions[l] = {
            start: l * c,
            end: l * c + c,
          }),
          t._shouldAnimateSlides(o))
        ) {
          if (t._shouldUseCustomAnimation()) s = new module2.Animated.Value(p === t._activeItem ? 1 : 0);
          else {
            var _;

            if (u) _ = u(p, o);
            else if (t._shouldUseStackLayout()) _ = module627.stackScrollInterpolator(p, o);
            else if (t._shouldUseTinderLayout()) _ = module627.tinderScrollInterpolator(p, o);
            if (!(_ && _.inputRange && _.outputRange)) _ = module627.defaultScrollInterpolator(p, o);
            s = t._scrollPos.interpolate(
              A({}, _, {
                extrapolate: 'clamp',
              })
            );
          }
        } else s = new module2.Animated.Value(1);
        h.push(s);
      });

      this.setState({
        interpolators: h,
      });
    }
  }

  _getSlideAnimation(t, o) {
    var n = this.state.interpolators,
      l = this.props,
      s = l.activeAnimationType,
      u = l.activeAnimationOptions,
      c = n && n[t];
    if (!c && 0 !== c) return null;
    var h = A(
      {
        isInteraction: false,
        useNativeDriver: true,
      },
      u,
      {
        toValue: o,
      }
    );
    return module2.Animated.parallel([
      module2.Animated.timing(
        c,
        A({}, h, {
          easing: module2.Easing.linear,
        })
      ),
      module2.Animated[s](c, A({}, h)),
    ]);
  }

  _playCustomSlideAnimation(t, o) {
    var n = this.state.interpolators,
      l = this._getCustomDataLength(),
      s = this._getCustomIndex(t),
      u = this._getDataIndex(s),
      c = this._getCustomIndex(o),
      h = this._getDataIndex(c),
      p = [];

    if (this._enableLoop())
      for (var _ = 0; _ < l; _++)
        this._getDataIndex(_) === u && n[_] ? p.push(this._getSlideAnimation(_, 0)) : this._getDataIndex(_) === h && n[_] && p.push(this._getSlideAnimation(_, 1));
    else {
      if (n[t]) p.push(this._getSlideAnimation(t, 0));
      if (n[o]) p.push(this._getSlideAnimation(o, 1));
    }
    module2.Animated.parallel(p, {
      stopTogether: false,
    }).start();
  }

  _hackActiveSlideAnimation(t, o) {
    var n = this,
      l = arguments.length > 2 && undefined !== arguments[2] && arguments[2],
      s = this.props.data;

    if (this._mounted && this._carouselRef && this._positions[t] && (l || !this._enableLoop())) {
      var u = this._positions[t] && this._positions[t].start;

      if (u || 0 === u) {
        var c = s && s.length,
          h = o || 1 === c ? 'start' : 'end';

        this._scrollTo(u + ('start' === h ? -1 : 1), false);

        clearTimeout(this._hackSlideAnimationTimeout);
        this._hackSlideAnimationTimeout = setTimeout(function () {
          n._scrollTo(u, false);
        }, 50);
      }
    }
  }

  _lockScroll() {
    var t = this,
      o = this.props.lockScrollTimeoutDuration;
    clearTimeout(this._lockScrollTimeout);
    this._lockScrollTimeout = setTimeout(function () {
      t._releaseScroll();
    }, o);

    this._setScrollEnabled(false);
  }

  _releaseScroll() {
    clearTimeout(this._lockScrollTimeout);

    this._setScrollEnabled(true);
  }

  _repositionScroll(t) {
    var o = this.props,
      n = o.data,
      l = o.loopClonesPerSide,
      s = n && n.length;

    if (this._enableLoop() && s && !(t >= l && t < s + l)) {
      var u = t;
      if (t >= s + l) u = t - s;
      else if (t < l) u = t + s;

      this._snapToItem(u, false, false, false, false);
    }
  }

  _scrollTo(t) {
    var o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
      n = this.props.vertical,
      l = this._getWrappedRef();

    if (this._mounted && l) {
      var s = A(
        {},
        this._needsScrollView()
          ? {
              x: n ? 0 : t,
              y: n ? t : 0,
            }
          : {
              offset: t,
            },
        {
          animated: o,
        }
      );
      if (this._needsScrollView()) l.scrollTo(s);
      else l.scrollToOffset(s);
    }
  }

  _onScroll(t) {
    var o = this.props,
      n = o.callbackOffsetMargin,
      l = o.enableMomentum,
      s = o.onScroll,
      u = t ? this._getScrollOffset(t) : this._currentContentOffset,
      c = this._getActiveItem(u),
      h = c === this._itemToSnapTo,
      p = u >= this._scrollOffsetRef - n && u <= this._scrollOffsetRef + n;

    this._currentContentOffset = u;
    this._onScrollTriggered = true;
    this._lastScrollDate = Date.now();
    if (this._activeItem !== c && this._shouldUseCustomAnimation()) this._playCustomSlideAnimation(this._activeItem, c);

    if (l) {
      clearTimeout(this._snapNoMomentumTimeout);
      if (this._activeItem !== c) this._activeItem = c;

      if (h) {
        if (this._canFireBeforeCallback) this._onBeforeSnap(this._getDataIndex(c));
        if (p && this._canFireCallback) this._onSnap(this._getDataIndex(c));
      }
    } else if (this._activeItem !== c && h) {
      if (this._canFireBeforeCallback) this._onBeforeSnap(this._getDataIndex(c));

      if (p) {
        this._activeItem = c;
        if (this._canLockScroll()) this._releaseScroll();
        if (this._canFireCallback) this._onSnap(this._getDataIndex(c));
      }
    }

    if (c === this._itemToSnapTo && u === this._scrollOffsetRef) this._repositionScroll(c);
    if ('function' == typeof s && t) s(t);
  }

  _onStartShouldSetResponderCapture(t) {
    var o = this.props.onStartShouldSetResponderCapture;
    if (o) o(t);
    return this._getScrollEnabled();
  }

  _onTouchStart() {
    var t = this.props.onTouchStart;
    if (false !== this._getScrollEnabled() && this._autoplaying) this.stopAutoplay();
    if (t) t();
  }

  _onTouchEnd() {
    var t = this.props.onTouchEnd;
    if (false !== this._getScrollEnabled() && autoplay && !this._autoplaying) this.startAutoplay();
    if (t) t();
  }

  _onScrollBeginDrag(t) {
    var o = this.props.onScrollBeginDrag;

    if (this._getScrollEnabled()) {
      this._scrollStartOffset = this._getScrollOffset(t);
      this._scrollStartActive = this._getActiveItem(this._scrollStartOffset);
      this._ignoreNextMomentum = false;
      if (o) o(t);
    }
  }

  _onScrollEndDrag(t) {
    var o = this.props.onScrollEndDrag;
    if (this._carouselRef && this._onScrollEnd) this._onScrollEnd();
    if (o) o(t);
  }

  _onMomentumScrollEnd(t) {
    var o = this.props.onMomentumScrollEnd;
    if (this._carouselRef && this._onScrollEnd) this._onScrollEnd();
    if (o) o(t);
  }

  _onScrollEnd(t) {
    var o = this,
      n = this.props,
      l = n.autoplay,
      s = n.autoplayDelay,
      u = n.enableSnap;
    if (this._ignoreNextMomentum) this._ignoreNextMomentum = false;
    else {
      this._scrollEndOffset = this._currentContentOffset;
      this._scrollEndActive = this._getActiveItem(this._scrollEndOffset);
      if (u) this._snapScroll(this._scrollEndOffset - this._scrollStartOffset);

      if (l && !this._autoplaying) {
        clearTimeout(this._enableAutoplayTimeout);
        this._enableAutoplayTimeout = setTimeout(function () {
          o.startAutoplay();
        }, s + 50);
      }
    }
  }

  _onTouchRelease(t) {
    var o = this;

    if (this.props.enableMomentum && C) {
      clearTimeout(this._snapNoMomentumTimeout);
      this._snapNoMomentumTimeout = setTimeout(function () {
        o._snapToItem(o._activeItem);
      }, 100);
    }
  }

  _onLayout(t) {
    var o = this.props.onLayout;

    if (this._onLayoutInitDone) {
      this._initPositionsAndInterpolators();

      this._snapToItem(this._activeItem, false, false, false, false);
    } else this._onLayoutInitDone = true;

    if (o) o(t);
  }

  _snapScroll(t) {
    var o = this.props.swipeThreshold;
    if (!this._scrollEndActive && 0 !== this._scrollEndActive && C) this._scrollEndActive = this._scrollStartActive;
    if (this._scrollStartActive !== this._scrollEndActive) this._snapToItem(this._scrollEndActive);
    else if (t > 0) t > o ? this._snapToItem(this._scrollStartActive + 1) : this._snapToItem(this._scrollEndActive);
    else if (t < 0 && t < -o) this._snapToItem(this._scrollStartActive - 1);
    else this._snapToItem(this._scrollEndActive);
  }

  _snapToItem(t) {
    var o = this,
      n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
      l = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2],
      s = arguments.length > 3 && undefined !== arguments[3] && arguments[3],
      u = !(arguments.length > 4 && undefined !== arguments[4]) || arguments[4],
      c = this.props,
      h = c.enableMomentum,
      p = c.onSnapToItem,
      _ = c.onBeforeSnapToItem,
      f = this._getCustomDataLength(),
      v = this._getWrappedRef();

    if (f && v) {
      if (!t || t < 0) t = 0;
      else if (f > 0 && t >= f) t = f - 1;

      if (t !== this._previousActiveItem) {
        this._previousActiveItem = t;
        if (u && this._canLockScroll()) this._lockScroll();

        if (l) {
          if (_) this._canFireBeforeCallback = true;
          if (p) this._canFireCallback = true;
        }
      }

      this._itemToSnapTo = t;
      this._scrollOffsetRef = this._positions[t] && this._positions[t].start;
      this._onScrollTriggered = false;

      if (this._scrollOffsetRef || 0 === this._scrollOffsetRef) {
        this._scrollTo(this._scrollOffsetRef, n);

        if (h) {
          if (C && !s) this._ignoreNextMomentum = true;

          if (!(0 !== t && t !== f - 1)) {
            clearTimeout(this._edgeItemTimeout);
            this._edgeItemTimeout = setTimeout(function () {
              if (!(s || t !== o._activeItem || o._onScrollTriggered)) o._onScroll();
            }, 250);
          }
        }
      }
    }
  }

  _onBeforeSnap(t) {
    var o = this.props.onBeforeSnapToItem;

    if (this._carouselRef) {
      this._canFireBeforeCallback = false;
      if (o) o(t);
    }
  }

  _onSnap(t) {
    var o = this.props.onSnapToItem;

    if (this._carouselRef) {
      this._canFireCallback = false;
      if (o) o(t);
    }
  }

  startAutoplay() {
    var t = this,
      o = this.props,
      n = o.autoplayInterval,
      l = o.autoplayDelay;

    if (!this._autoplaying) {
      clearTimeout(this._autoplayTimeout);
      this._autoplayTimeout = setTimeout(function () {
        t._autoplaying = true;
        t._autoplayInterval = setInterval(function () {
          if (t._autoplaying) t.snapToNext();
        }, n);
      }, l);
    }
  }

  stopAutoplay() {
    this._autoplaying = false;
    clearInterval(this._autoplayInterval);
  }

  snapToItem(t) {
    var o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
      n = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2];
    if (!t || t < 0) t = 0;

    var l = this._getPositionIndex(t);

    if (l !== this._activeItem) this._snapToItem(l, o, n);
  }

  snapToNext() {
    var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
      o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
      n = this._getCustomDataLength(),
      l = this._activeItem + 1;

    if (l > n - 1) {
      if (!this._enableLoop()) return;
      l = 0;
    }

    this._snapToItem(l, t, o);
  }

  snapToPrev() {
    var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0],
      o = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
      n = this._getCustomDataLength(),
      l = this._activeItem - 1;

    if (l < 0) {
      if (!this._enableLoop()) return;
      l = n - 1;
    }

    this._snapToItem(l, t, o);
  }

  triggerRenderingHack(t) {
    if (!(Date.now() - this._lastScrollDate < 500)) {
      var o = this._currentContentOffset;

      if (o || 0 === o) {
        var n = t || (0 === o ? 1 : -1);

        this._scrollTo(o + n, false);
      }
    }
  }

  _getSlideInterpolatedStyle(t, o) {
    var n = this.props,
      l = n.layoutCardOffset,
      s = n.slideInterpolatedStyle;
    return s
      ? s(t, o, this.props)
      : this._shouldUseTinderLayout()
      ? module627.tinderAnimatedStyles(t, o, this.props, l)
      : this._shouldUseStackLayout()
      ? module627.stackAnimatedStyles(t, o, this.props, l)
      : this._shouldUseShiftLayout()
      ? module627.shiftAnimatedStyles(t, o, this.props)
      : module627.defaultAnimatedStyles(t, o, this.props);
  }

  _renderItem(t) {
    var o = t.item,
      l = t.index,
      s = this.state.interpolators,
      u = this.props,
      c = u.hasParallaxImages,
      h = u.itemWidth,
      p = u.itemHeight,
      _ = u.keyExtractor,
      f = u.renderItem,
      v = u.sliderHeight,
      T = u.sliderWidth,
      I = u.slideStyle,
      b = u.vertical,
      k = s && s[l];
    if (!k && 0 !== k) return null;

    var A = this._shouldAnimateSlides(),
      C = A ? module2.Animated.View : module2.View,
      E = A ? this._getSlideInterpolatedStyle(l, k) : {},
      O = c
        ? {
            scrollPosition: this._scrollPos,
            carouselRef: this._carouselRef,
            vertical: b,
            sliderWidth: T,
            sliderHeight: v,
            itemWidth: h,
            itemHeight: p,
          }
        : undefined,
      w = b
        ? {
            height: p,
          }
        : {
            width: h,
          },
      D = this._needsScrollView()
        ? {
            key: _ ? _(o, l) : this._getKeyExtractor(o, l),
          }
        : {};

    return (
      <C>
        {f(
          {
            item: o,
            index: l,
          },
          O
        )}
      </C>
    );
  }

  _getComponentOverridableProps() {
    var t = this.props,
      o = t.enableMomentum,
      n = t.itemWidth,
      l = t.itemHeight,
      s = t.loopClonesPerSide,
      u = t.sliderWidth,
      c = t.sliderHeight,
      h = t.vertical,
      p = Math.ceil(h ? c / l : u / n) + 1 + 2 * (this._enableLoop() ? s : 2),
      _ = 1 + 2 * p,
      f = _,
      v = this._needsScrollView()
        ? {}
        : {
            initialNumToRender: p,
            maxToRenderPerBatch: _,
            windowSize: f,
          };

    return A(
      {
        decelerationRate: o ? 0.9 : 'fast',
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false,
        overScrollMode: 'never',
        automaticallyAdjustContentInsets: false,
        directionalLockEnabled: true,
        pinchGestureEnabled: false,
        scrollsToTop: false,
        removeClippedSubviews: !this._needsScrollView(),
        inverted: this._needsRTLAdaptations(),
      },
      v
    );
  }

  _getComponentStaticProps() {
    var t = this,
      o = this.state.hideCarousel,
      n = this.props,
      l = n.containerCustomStyle,
      s = n.contentContainerCustomStyle,
      u = n.keyExtractor,
      c = n.sliderWidth,
      h = n.sliderHeight,
      p = n.style,
      _ = n.vertical,
      f = [
        l || p || {},
        o
          ? {
              opacity: 0,
            }
          : {},
        _
          ? {
              height: h,
              flexDirection: 'column',
            }
          : {
              width: c,
              flexDirection: this._needsRTLAdaptations() ? 'row-reverse' : 'row',
            },
      ],
      v = [
        _
          ? {
              paddingTop: this._getContainerInnerMargin(),
              paddingBottom: this._getContainerInnerMargin(true),
            }
          : {
              paddingLeft: this._getContainerInnerMargin(),
              paddingRight: this._getContainerInnerMargin(true),
            },
        s || {},
      ],
      S = this._needsScrollView()
        ? {}
        : {
            renderItem: this._renderItem,
            numColumns: 1,
            getItemLayout: undefined,
            initialScrollIndex: undefined,
            keyExtractor: u || this._getKeyExtractor,
          };
    return A(
      {
        ref: function (o) {
          return (t._carouselRef = o);
        },
        data: this._getCustomData(),
        style: f,
        contentContainerStyle: v,
        horizontal: !_,
        scrollEventThrottle: 1,
        onScroll: this._onScrollHandler,
        onScrollBeginDrag: this._onScrollBeginDrag,
        onScrollEndDrag: this._onScrollEndDrag,
        onMomentumScrollEnd: this._onMomentumScrollEnd,
        onResponderRelease: this._onTouchRelease,
        onStartShouldSetResponderCapture: this._onStartShouldSetResponderCapture,
        onTouchStart: this._onTouchStart,
        onTouchEnd: this._onScrollEnd,
        onLayout: this._onLayout,
      },
      S
    );
  }

  render() {
    var t = this,
      o = this.props,
      n = o.data,
      l = o.renderItem,
      s = o.useScrollView;
    if (!n || !l) return null;
    var u = A({}, this._getComponentOverridableProps(), {}, this.props, {}, this._getComponentStaticProps()),
      c = 'function' == typeof s ? s : O;
    return this._needsScrollView() ? (
      <c>
        {this._getCustomData().map(function (o, n) {
          return t._renderItem({
            item: o,
            index: n,
          });
        })}
      </c>
    ) : (
      <E />
    );
  }

  realIndex() {
    return this._activeItem;
  }

  currentIndex() {
    return this._getDataIndex(this._activeItem);
  }

  currentScrollPosition() {
    return this._currentContentOffset;
  }
}

export default D;
D.propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  itemWidth: PropTypes.number,
  itemHeight: PropTypes.number,
  sliderWidth: PropTypes.number,
  sliderHeight: PropTypes.number,
  activeAnimationType: PropTypes.string,
  activeAnimationOptions: PropTypes.object,
  activeSlideAlignment: PropTypes.oneOf(['center', 'end', 'start']),
  activeSlideOffset: PropTypes.number,
  apparitionDelay: PropTypes.number,
  autoplay: PropTypes.bool,
  autoplayDelay: PropTypes.number,
  autoplayInterval: PropTypes.number,
  callbackOffsetMargin: PropTypes.number,
  containerCustomStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  contentContainerCustomStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  enableMomentum: PropTypes.bool,
  enableSnap: PropTypes.bool,
  firstItem: PropTypes.number,
  hasParallaxImages: PropTypes.bool,
  inactiveSlideOpacity: PropTypes.number,
  inactiveSlideScale: PropTypes.number,
  inactiveSlideShift: PropTypes.number,
  layout: PropTypes.oneOf(['default', 'stack', 'tinder']),
  layoutCardOffset: PropTypes.number,
  lockScrollTimeoutDuration: PropTypes.number,
  lockScrollWhileSnapping: PropTypes.bool,
  loop: PropTypes.bool,
  loopClonesPerSide: PropTypes.number,
  scrollEnabled: PropTypes.bool,
  scrollInterpolator: PropTypes.func,
  slideInterpolatedStyle: PropTypes.func,
  slideStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  shouldOptimizeUpdates: PropTypes.bool,
  swipeThreshold: PropTypes.number,
  useScrollView: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  vertical: PropTypes.bool,
  onBeforeSnapToItem: PropTypes.func,
  onSnapToItem: PropTypes.func,
};
D.defaultProps = {
  activeAnimationType: 'timing',
  activeAnimationOptions: null,
  activeSlideAlignment: 'center',
  activeSlideOffset: 20,
  apparitionDelay: 0,
  autoplay: false,
  autoplayDelay: 1e3,
  autoplayInterval: 3e3,
  callbackOffsetMargin: 5,
  containerCustomStyle: {},
  contentContainerCustomStyle: {},
  enableMomentum: false,
  enableSnap: true,
  firstItem: 0,
  hasParallaxImages: false,
  inactiveSlideOpacity: 0.7,
  inactiveSlideScale: 0.9,
  inactiveSlideShift: 0,
  layout: 'default',
  lockScrollTimeoutDuration: 1e3,
  lockScrollWhileSnapping: false,
  loop: false,
  loopClonesPerSide: 3,
  scrollEnabled: true,
  slideStyle: {},
  shouldOptimizeUpdates: true,
  swipeThreshold: 20,
  useScrollView: !E,
  vertical: false,
};
