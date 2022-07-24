import React from 'react';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module202 = require('./202'),
  module289 = require('./289'),
  module306 = require('./306'),
  module52 = require('./52'),
  module75 = require('./75'),
  f = module289.isRTL,
  w = 0,
  R = 300,
  S = function () {},
  y = module52.create({
    slideOutContainer: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
  });

class P {
  constructor() {
    var t, u;
    module22(this, _);

    (u = module30(this, (t = module33(_)).call.apply(t, [this].concat(args))))._handleMoveShouldSetPanResponderCapture = function (n, t) {
      return t.dy < 10 && u._isValidSwipe(t);
    };

    u._handlePanResponderGrant = function (n, t) {};

    u._handlePanResponderMove = function (n, t) {
      if (!u._isSwipingExcessivelyRightFromClosedPosition(t)) {
        if (u.props.onSwipeStart) u.props.onSwipeStart();
        if (u._isSwipingRightFromClosed(t)) u._swipeSlowSpeed(t);
        else u._swipeFullSpeed(t);
      }
    };

    u._onPanResponderTerminationRequest = function (n, t) {
      return false;
    };

    u._handlePanResponderEnd = function (n, t) {
      var o = f ? -t.dx : t.dx;

      if (u._isSwipingRightFromClosed(t)) {
        if (u.props.onOpen) u.props.onOpen();

        u._animateBounceBack(R);
      } else if (u._shouldAnimateRemainder(t))
        o < 0 ? (u.props.onOpen && u.props.onOpen(), u._animateToOpenPositionWith(t.vx, o)) : (u.props.onClose && u.props.onClose(), u._animateToClosedPosition());
      else if (u._previousLeft === w) u._animateToClosedPosition();
      else u._animateToOpenPosition();

      if (u.props.onSwipeEnd) u.props.onSwipeEnd();
    };

    u._panResponder = module306.create({
      onMoveShouldSetPanResponderCapture: u._handleMoveShouldSetPanResponderCapture,
      onPanResponderGrant: u._handlePanResponderGrant,
      onPanResponderMove: u._handlePanResponderMove,
      onPanResponderRelease: u._handlePanResponderEnd,
      onPanResponderTerminationRequest: u._onPanResponderTerminationRequest,
      onPanResponderTerminate: u._handlePanResponderEnd,
      onShouldBlockNativeResponder: function (n, t) {
        return false;
      },
    });
    u._previousLeft = w;
    u._timeoutID = null;
    u.state = {
      currentLeft: new module202.Value(u._previousLeft),
      isSwipeableViewRendered: false,
      rowHeight: null,
    };

    u._onSwipeableViewLayout = function (n) {
      u.setState({
        isSwipeableViewRendered: true,
        rowHeight: n.nativeEvent.layout.height,
      });
    };

    u._animateToClosedPositionDuringBounce = function () {
      u._animateToClosedPosition(R);
    };

    return u;
  }

  componentDidMount() {
    var n = this;
    if (this.props.shouldBounceOnMount)
      this._timeoutID = setTimeout(function () {
        n._animateBounceBack(400);
      }, 700);
  }

  UNSAFE_componentWillReceiveProps(n) {
    var t,
      o,
      s = null != (t = this.props.isOpen) && t,
      u = null != (o = n.isOpen) && o;
    if (s && !u) this._animateToClosedPosition();
  }

  componentWillUnmount() {
    if (null != this._timeoutID) clearTimeout(this._timeoutID);
  }

  render() {
    var n;
    if (this.state.isSwipeableViewRendered && this.state.rowHeight)
      n = (
        <module75
          style={[
            y.slideOutContainer,
            {
              height: this.state.rowHeight,
            },
          ]}
        >
          {this.props.slideoutView}
        </module75>
      );
    var t = (
      <module202.View
        onLayout={this._onSwipeableViewLayout}
        style={{
          transform: [
            {
              translateX: this.state.currentLeft,
            },
          ],
        }}
      >
        {this.props.children}
      </module202.View>
    );
    return (
      <module75>
        {n}
        {t}
      </module75>
    );
  }

  close() {
    if (this.props.onClose) this.props.onClose();

    this._animateToClosedPosition();
  }

  _isSwipingRightFromClosed(n) {
    var t = f ? -n.dx : n.dx;
    return this._previousLeft === w && t > 0;
  }

  _swipeFullSpeed(n) {
    this.state.currentLeft.setValue(this._previousLeft + n.dx);
  }

  _swipeSlowSpeed(n) {
    this.state.currentLeft.setValue(this._previousLeft + n.dx / 4);
  }

  _isSwipingExcessivelyRightFromClosedPosition(n) {
    var t = f ? -n.dx : n.dx;
    return this._isSwipingRightFromClosed(n) && t > 120;
  }

  _animateTo(n) {
    var t = this,
      o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 300,
      s = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : S;
    module202
      .timing(this.state.currentLeft, {
        duration: o,
        toValue: n,
        useNativeDriver: true,
      })
      .start(function () {
        t._previousLeft = n;
        s();
      });
  }

  _animateToOpenPosition() {
    var n,
      t = null != (n = this.props.maxSwipeDistance) ? n : 0,
      o = f ? -t : t;

    this._animateTo(-o);
  }

  _animateToOpenPositionWith(n, t) {
    var o;
    n = n > 0.3 ? n : 0.3;
    var s = null != (o = this.props.maxSwipeDistance) ? o : 0,
      u = Math.abs((s - Math.abs(t)) / n),
      p = f ? -s : s;

    this._animateTo(-p, u);
  }

  _animateToClosedPosition() {
    var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 300;

    this._animateTo(w, n);
  }

  _animateBounceBack(n) {
    var t = f ? -30 : 30;

    this._animateTo(-t, n, this._animateToClosedPositionDuringBounce);
  }

  _isValidSwipe(n) {
    var t;
    return !(null != (t = this.props.preventSwipeRight) && t && this._previousLeft === w && n.dx > 0) && Math.abs(n.dx) > 10;
  }

  _shouldAnimateRemainder(n) {
    var t,
      o = null != (t = this.props.swipeThreshold) ? t : 30;
    return Math.abs(n.dx) > o || n.vx > 0.3;
  }
}

module.exports = P;
