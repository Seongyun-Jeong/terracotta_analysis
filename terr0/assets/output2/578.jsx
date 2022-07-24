exports.createTransitioningComponent = D;
import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module51 = require('./51'),
  module528 = require('./528'),
  y = React.createContext();

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
    return (
      <y.Consumer>
        {function (u) {
          return <t />;
        }}
      </y.Consumer>
    );
  };
}

class E {
  constructor() {
    var t, o;
    module356.default(this, n);
    (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).transitions = [];
    return o;
  }

  componentDidMount() {
    var t = k('group', this.props);
    t.sequence = true;
    t.transitions = this.transitions;
    this.props.context.push(t);
  }

  render() {
    return <y.Provider value={this.transitions}>{this.props.children}</y.Provider>;
  }
}

class w {
  constructor() {
    var t, o;
    module356.default(this, n);
    (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).transitions = [];
    return o;
  }

  componentDidMount() {
    var t = k('group', this.props);
    t.transitions = this.transitions;
    this.props.context.push(t);
  }

  render() {
    return <y.Provider value={this.transitions}>{this.props.children}</y.Provider>;
  }
}

class C {
  constructor() {
    module356.default(this, n);
    return module358.default(this, module361.default(n).apply(this, arguments));
  }

  componentDidMount() {
    this.props.context.push(k('out', this.props));
  }

  render() {
    return this.props.children || null;
  }
}

class x {
  constructor() {
    module356.default(this, n);
    return module358.default(this, module361.default(n).apply(this, arguments));
  }

  componentDidMount() {
    this.props.context.push(k('change', this.props));
  }

  render() {
    return this.props.children || null;
  }
}

class T {
  constructor() {
    module356.default(this, n);
    return module358.default(this, module361.default(n).apply(this, arguments));
  }

  componentDidMount() {
    this.props.context.push(k('in', this.props));
  }

  render() {
    return this.props.children || null;
  }
}

function D(t) {
  return (function (k, ...args) {
    function M() {
      var n, o;
      module356.default(this, M);
      (o = module358.default(this, (n = module361.default(M)).call.apply(n, [this].concat(args)))).propTypes = t.propTypes;
      o.transitions = [];
      o.viewRef = React.createRef();
      return o;
    }

    module362.default(M, k);
    module357(M, [
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
            s = module370(u, ['transition']);
          return (
            <React.Fragment>
              <y.Provider value={this.transitions}>{o}</y.Provider>
              <t />
            </React.Fragment>
          );
        },
      },
    ]);
    return M;
  })(React.Component);
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
