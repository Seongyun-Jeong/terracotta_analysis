exports.default = function (t) {
  module191.default(
    'function' != typeof t || (t.prototype && t.prototype.isReactComponent),
    '`createAnimatedComponent` does not support stateless functional components; use a class component instead.'
  );
  return (function (y, ...args) {
    function A() {
      var t, n;
      module356.default(this, A);
      (n = module358.default(this, (t = module361.default(A)).call.apply(t, [this].concat(args))))._invokeAnimatedPropsCallbackOnMount = false;

      n._animatedPropsCallback = function () {
        if (null == n._component) n._invokeAnimatedPropsCallbackOnMount = true;
        else if ('function' != typeof n._component.setNativeProps) n.forceUpdate();
        else n._component.setNativeProps(n._propsAnimated.__getValue());
      };

      n._setComponentRef = function (t) {
        if (t !== n._component) n._component = t;
      };

      return n;
    }

    module362.default(A, y);
    module357.default(A, [
      {
        key: 'componentWillUnmount',
        value: function () {
          this._detachPropUpdater();

          if (this._propsAnimated) this._propsAnimated.__detach();

          this._detachNativeEvents();
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          this._component.setNativeProps(t);
        },
      },
      {
        key: 'componentWillMount',
        value: function () {
          this._attachProps(this.props);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          if (this._invokeAnimatedPropsCallbackOnMount) {
            this._invokeAnimatedPropsCallbackOnMount = false;

            this._animatedPropsCallback();
          }

          this._propsAnimated.setNativeView(this._component);

          this._attachNativeEvents();

          this._attachPropUpdater();
        },
      },
      {
        key: '_getEventViewRef',
        value: function () {
          return this._component.getScrollableNode ? this._component.getScrollableNode() : this._component;
        },
      },
      {
        key: '_attachNativeEvents',
        value: function () {
          var t = this._getEventViewRef();

          for (var n in this.props) {
            var o = this.props[n];
            if (o instanceof module547.default) o.attachEvent(t, n);
          }
        },
      },
      {
        key: '_detachNativeEvents',
        value: function () {
          var t = this._getEventViewRef();

          for (var n in this.props) {
            var o = this.props[n];
            if (o instanceof module547.default) o.detachEvent(t, n);
          }
        },
      },
      {
        key: '_reattachNativeEvents',
        value: function (t) {
          var n = this._getEventViewRef(),
            o = new Set(),
            s = new Set();

          for (var p in this.props) {
            var c = this.props[p];
            if (c instanceof module547.default) s.add(c.__nodeID);
          }

          for (var l in t) {
            var u = this.props[l];
            if (u instanceof module547.default) s.has(u.__nodeID) ? o.add(u.__nodeID) : u.detachEvent(n, l);
          }

          for (var v in this.props) {
            var f = this.props[v];
            if (f instanceof module547.default && !o.has(f.__nodeID)) f.attachEvent(n, v);
          }
        },
      },
      {
        key: '_attachProps',
        value: function (t) {
          var n = this._propsAnimated;
          this._propsAnimated = module565.createOrReusePropsNode(t, this._animatedPropsCallback, n);
          if (n !== this._propsAnimated && n) n.__detach();
        },
      },
      {
        key: '_updateFromNative',
        value: function (t) {
          this._component.setNativeProps(t);
        },
      },
      {
        key: '_attachPropUpdater',
        value: function () {
          var t = module2.findNodeHandle(this);
          N.set(t, this);
          if (1 === N.size) module542.default.addListener('onReanimatedPropsChange', P);
        },
      },
      {
        key: '_detachPropUpdater',
        value: function () {
          var t = module2.findNodeHandle(this);
          N.delete(t);
          if (0 === N.size) module542.default.removeAllListeners('onReanimatedPropsChange');
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t) {
          this._attachProps(this.props);

          this._reattachNativeEvents(t);

          this._propsAnimated.setNativeView(this._component);
        },
      },
      {
        key: '_filterNonAnimatedStyle',
        value: function (t) {
          var n = {};

          for (var o in t) {
            var s = t[o];
            if (!(s instanceof module527.default || 'transform' === o)) n[o] = s;
          }

          return n;
        },
      },
      {
        key: '_filterNonAnimatedProps',
        value: function (t) {
          var n = {};

          for (var o in t) {
            var s = t[o];
            if ('style' === o) n[o] = this._filterNonAnimatedStyle(module2.StyleSheet.flatten(s));
            else if (!(s instanceof module527.default)) n[o] = s;
          }

          return n;
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this._filterNonAnimatedProps(this.props);

          return React.default.createElement(
            t,
            module51.default({}, o, {
              ref: this._setComponentRef,
              collapsable: false,
            })
          );
        },
      },
      {
        key: 'getNode',
        value: function () {
          return this._component;
        },
      },
    ]);
    return A;
  })(React.default.Component);
};

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module542 = require('./542'),
  module547 = require('./547'),
  module527 = require('./527'),
  module565 = require('./565'),
  module191 = require('./191'),
  N = new Map();

function P(t) {
  var n = N.get(t.viewTag);
  if (n) n._updateFromNative(t.props);
}
