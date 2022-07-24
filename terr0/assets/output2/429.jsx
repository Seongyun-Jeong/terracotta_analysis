export default function default(n) {
  var h, N;

  class _ {
    constructor() {
      var n, t;
      module356.default(this, p);

      (t = module358.default(this, (n = module361.default(p)).call.apply(n, [this].concat(args))))._captureRef = function (n) {
        t._innerRef = n;
        if (t.props.onRef) t.props.onRef(n);
      };

      t.setNativeProps = function () {
        var n;
        return (n = t._innerRef.getNode()).setNativeProps.apply(n, arguments);
      };

      t.getScrollResponder = function () {
        var n;
        return (n = t._innerRef.getNode()).getScrollResponder.apply(n, arguments);
      };

      t.getScrollableNode = function () {
        var n;
        return (n = t._innerRef.getNode()).getScrollableNode.apply(n, arguments);
      };

      t.getInnerViewNode = function () {
        var n;
        return (n = t._innerRef.getNode()).getInnerViewNode.apply(n, arguments);
      };

      t.scrollTo = function () {
        var n;
        return (n = t._innerRef.getNode()).scrollTo.apply(n, arguments);
      };

      t.scrollToEnd = function () {
        var n;
        return (n = t._innerRef.getNode()).scrollToEnd.apply(n, arguments);
      };

      t.scrollWithoutAnimationTo = function () {
        var n;
        return (n = t._innerRef.getNode()).scrollWithoutAnimationTo.apply(n, arguments);
      };

      t.flashScrollIndicators = function () {
        var n;
        return (n = t._innerRef.getNode()).flashScrollIndicators.apply(n, arguments);
      };

      return t;
    }

    render() {
      return <R />;
    }

  }

  class R {
    constructor() {
      module356.default(this, v);
      return module358.default(this, module361.default(v).apply(this, arguments));
    }

    componentDidMount() {
      var n = this;
      this._subscription = this.props.navigation.addListener('refocus', function () {
        var t = n.getNode();
        if (n.props.navigation.isFocused() && null !== t) null != t.scrollToTop ? t.scrollToTop() : null != t.scrollTo && t.scrollTo({
          y: 0
        });
      });
    }

    getNode() {
      return null === this._scrollRef ? null : this._scrollRef.getScrollResponder ? this._scrollRef.getScrollResponder() : this._scrollRef.getNode ? this._scrollRef.getNode() : this._scrollRef;
    }

    componentWillUnmount() {
      if (null != this._subscription) this._subscription.remove();
    }

    render() {
      var o = this;
      return <n />;
    }

  }

  _.displayName = "NavigationAwareScrollable(" + (n.displayName || n.name) + ")";
  return module430.default(_, n);
}
import React from "react";

var module51 = require("./51"),
    module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    module430 = require("./430"),
    module373 = require("./373");