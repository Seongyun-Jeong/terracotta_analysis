var module11 = require('./11'),
  module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module32 = require('./32'),
  module36 = require('./36');

function h(t, n) {
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
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      h(Object(l), true).forEach(function (o) {
        module46(t, o, l[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      h(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var React = require('react'),
  module78 = require('./78'),
  module42 = require('./42'),
  module245 = require('./245'),
  module320 = require('./320'),
  O = 'viewPager';

class v {
  constructor() {
    var t, n;
    module22(this, h);

    (n = module30(this, (t = module33(h)).call.apply(t, [this].concat(args)))).getInnerViewNode = function () {
      return n.refs[O].getInnerViewNode();
    };

    n._childrenWithOverridenStyle = function () {
      return React.Children.map(n.props.children, function (t) {
        if (!t) return null;
        var n = f({}, t.props, {
          style: [
            t.props.style,
            {
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              width: undefined,
              height: undefined,
            },
          ],
          collapsable: false,
        });
        if (t.type && t.type.displayName && 'RCTView' !== t.type.displayName && 'View' !== t.type.displayName)
          console.warn('Each ViewPager child must be a <View>. Was ' + t.type.displayName);
        return <t.type />;
      });
    };

    n._onPageScroll = function (t) {
      if (n.props.onPageScroll) n.props.onPageScroll(t);
      if ('on-drag' === n.props.keyboardDismissMode) module245();
    };

    n._onPageScrollStateChanged = function (t) {
      if (n.props.onPageScrollStateChanged) n.props.onPageScrollStateChanged(t);
    };

    n._onPageSelected = function (t) {
      if (n.props.onPageSelected) n.props.onPageSelected(t);
    };

    n.setPage = function (t) {
      module42.dispatchViewManagerCommand(module78.findNodeHandle(module32(n)), module42.getViewManagerConfig('AndroidViewPager').Commands.setPage, [t]);
    };

    n.setPageWithoutAnimation = function (t) {
      module42.dispatchViewManagerCommand(module78.findNodeHandle(module32(n)), module42.getViewManagerConfig('AndroidViewPager').Commands.setPageWithoutAnimation, [t]);
    };

    return n;
  }

  componentDidMount() {
    if (null != this.props.initialPage) this.setPageWithoutAnimation(this.props.initialPage);
  }

  render() {
    return <module320 />;
  }
}

module.exports = v;
