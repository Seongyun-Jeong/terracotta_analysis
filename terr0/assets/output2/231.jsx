import React from 'react';
import module3 from './3';

var module11 = require('./11'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module204 = require('./204').AnimatedEvent,
  module218 = require('./218'),
  module68 = require('./68');

module.exports = function (f, N) {
  module3(
    'function' != typeof f || (f.prototype && f.prototype.isReactComponent),
    '`createAnimatedComponent` does not support stateless functional components; use a class component instead.'
  );

  class k {
    constructor(t) {
      var o;
      module22(this, u);
      (o = module30(this, module33(u).call(this, t)))._invokeAnimatedPropsCallbackOnMount = false;
      o._eventDetachers = [];

      o._animatedPropsCallback = function () {
        if (null == o._component) o._invokeAnimatedPropsCallbackOnMount = true;
        else if (u.__skipSetNativeProps_FOR_TESTS_ONLY || 'function' != typeof o._component.setNativeProps) o.forceUpdate();
        else {
          if (o._propsAnimated.__isNative)
            throw new Error('Attempting to run JS driven animation on animated node that has been moved to "native" earlier by starting an animation with `useNativeDriver: true`');

          o._component.setNativeProps(o._propsAnimated.__getAnimatedValue());
        }
      };

      o._setComponentRef = function (t) {
        o._prevComponent = o._component;
        o._component = t;
      };

      return o;
    }

    componentWillUnmount() {
      if (this._propsAnimated) this._propsAnimated.__detach();

      this._detachNativeEvents();
    }

    setNativeProps(t) {
      this._component.setNativeProps(t);
    }

    UNSAFE_componentWillMount() {
      this._attachProps(this.props);
    }

    componentDidMount() {
      if (this._invokeAnimatedPropsCallbackOnMount) {
        this._invokeAnimatedPropsCallbackOnMount = false;

        this._animatedPropsCallback();
      }

      this._propsAnimated.setNativeView(this._component);

      this._attachNativeEvents();
    }

    _attachNativeEvents() {
      var t = this,
        n = this._component.getScrollableNode ? this._component.getScrollableNode() : this._component,
        o = function (o) {
          var s = t.props[o];

          if (s instanceof module204 && s.__isNative) {
            s.__attach(n, o);

            t._eventDetachers.push(function () {
              return s.__detach(n, o);
            });
          }
        };

      for (var s in this.props) o(s);
    }

    _detachNativeEvents() {
      this._eventDetachers.forEach(function (t) {
        return t();
      });

      this._eventDetachers = [];
    }

    _attachProps(t) {
      var n = this._propsAnimated;
      this._propsAnimated = new module218(t, this._animatedPropsCallback);
      if (n) n.__detach();
    }

    UNSAFE_componentWillReceiveProps(t) {
      this._attachProps(t);
    }

    componentDidUpdate(t) {
      if (this._component !== this._prevComponent) this._propsAnimated.setNativeView(this._component);

      if (!(this._component === this._prevComponent && t === this.props)) {
        this._detachNativeEvents();

        this._attachNativeEvents();
      }
    }

    render() {
      var n = this._propsAnimated.__getValue();

      return <f />;
    }

    getNode() {
      return this._component;
    }
  }

  k.__skipSetNativeProps_FOR_TESTS_ONLY = false;
  var y = f.propTypes;
  k.propTypes = {
    style: function (t, n, o) {
      if (y)
        for (var s in module68)
          y[s] ||
            undefined === t[s] ||
            console.warn('You are setting the style `{ ' + s + ': ... }` as a prop. You should nest it in a style object. E.g. `{ style: { ' + s + ': ... } }`');
    },
  };
  return k;
};
