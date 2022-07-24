exports.createTransitioningComponent = D;

var module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module51 = require('./51'),
  React = require('react'),
  module2 = require('./2'),
  module528 = require('./528'),
  y = React.default.createContext();

function k(t, n) {
  var u = {
    type: t,
  };
  if ('durationMs' in n) u.durationMs = n.durationMs;
  if ('interpolation' in n) u.interpolation = n.interpolation;
  if ('type' in n) u.animation = n.type;
  if ('delayMs' in n) u.delayMs = n.delayMs;
  if ('propagation' in n) u.propagation = n.propagation;
  return u;
}

function M(t) {
  return function (n) {
    return React.default.createElement(y.Consumer, null, function (u) {
      return React.default.createElement(
        t,
        module51.default(
          {
            context: u,
          },
          n
        )
      );
    });
  };
}

var T = (function (t) {
    function n() {
      module356.default(this, n);
      return module358.default(this, module361.default(n).apply(this, arguments));
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(k('in', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return n;
  })(React.default.Component),
  x = (function (t) {
    function n() {
      module356.default(this, n);
      return module358.default(this, module361.default(n).apply(this, arguments));
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(k('change', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return n;
  })(React.default.Component),
  C = (function (t) {
    function n() {
      module356.default(this, n);
      return module358.default(this, module361.default(n).apply(this, arguments));
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentDidMount',
        value: function () {
          this.props.context.push(k('out', this.props));
        },
      },
      {
        key: 'render',
        value: function () {
          return this.props.children || null;
        },
      },
    ]);
    return n;
  })(React.default.Component),
  w = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);
      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).transitions = [];
      return o;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = k('group', this.props);
          t.transitions = this.transitions;
          this.props.context.push(t);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            y.Provider,
            {
              value: this.transitions,
            },
            this.props.children
          );
        },
      },
    ]);
    return n;
  })(React.default.Component),
  E = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);
      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).transitions = [];
      return o;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = k('group', this.props);
          t.sequence = true;
          t.transitions = this.transitions;
          this.props.context.push(t);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            y.Provider,
            {
              value: this.transitions,
            },
            this.props.children
          );
        },
      },
    ]);
    return n;
  })(React.default.Component);

function D(t) {
  return (function (k, ...args) {
    function M() {
      var n, o;
      module356.default(this, M);
      (o = module358.default(this, (n = module361.default(M)).call.apply(n, [this].concat(args)))).propTypes = t.propTypes;
      o.transitions = [];
      o.viewRef = React.default.createRef();
      return o;
    }

    module362.default(M, k);
    module357.default(M, [
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.animateMount) this.animateNextTransition();
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          this.viewRef.current.setNativeProps(t);
        },
      },
      {
        key: 'animateNextTransition',
        value: function () {
          var t = module2.findNodeHandle(this.viewRef.current);
          module528.default.animateNextTransition(t, {
            transitions: this.transitions,
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var u = this.props,
            o = u.transition,
            s = module370.default(u, ['transition']);
          return React.default.createElement(
            React.default.Fragment,
            null,
            React.default.createElement(
              y.Provider,
              {
                value: this.transitions,
              },
              o
            ),
            React.default.createElement(
              t,
              module51.default({}, s, {
                ref: this.viewRef,
                collapsable: false,
              })
            )
          );
        },
      },
    ]);
    return M;
  })(React.default.Component);
}

var N = {
  View: D(module2.View),
};
exports.Transitioning = N;
var P = {
  Sequence: M(E),
  Together: M(w),
  In: M(T),
  Out: M(C),
  Change: M(x),
};
exports.Transition = P;
