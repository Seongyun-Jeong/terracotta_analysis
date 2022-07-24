var module404 = require("./404");

export default function default(t) {
  class n {
    constructor() {
      var t, n;
      module356.default(this, s);

      (n = module358.default(this, (t = module361.default(s)).call.apply(t, [this].concat(args))))._renderScene = function (t) {
        var o = t.route,
            s = n.props,
            u = s.screenProps,
            c = s.descriptors,
            p = c[o.key],
            l = p.getComponent();
        return <module373.SceneView screenProps={u} navigation={p.navigation} component={l} />;
      };

      n._renderIcon = function (t) {
        var o = t.route,
            s = t.focused,
            u = undefined === s || s,
            c = t.tintColor,
            p = t.horizontal,
            l = undefined !== p && p,
            f = n.props.descriptors,
            b = f[o.key],
            v = b.options;
        return v.tabBarIcon ? 'function' == typeof v.tabBarIcon ? v.tabBarIcon({
          focused: u,
          tintColor: c,
          horizontal: l
        }) : v.tabBarIcon : null;
      };

      n._getButtonComponent = function (t) {
        var o = t.route,
            s = n.props.descriptors,
            u = s[o.key],
            c = u.options;
        return c.tabBarButtonComponent ? c.tabBarButtonComponent : null;
      };

      n._getLabelText = function (t) {
        var o = t.route,
            s = n.props.descriptors,
            u = s[o.key],
            c = u.options;
        return c.tabBarLabel ? c.tabBarLabel : 'string' == typeof c.title ? c.title : o.routeName;
      };

      n._getAccessibilityLabel = function (t) {
        var o = t.route,
            s = n.props.descriptors,
            u = s[o.key],
            c = u.options;
        if (undefined !== c.tabBarAccessibilityLabel) return c.tabBarAccessibilityLabel;

        var p = n._getLabelText({
          route: o
        });

        if ('string' == typeof p) {
          var l = n.props.navigation.state.routes;
          return p + ", tab, " + (l.indexOf(o) + 1) + " of " + l.length;
        }
      };

      n._getTestID = function (t) {
        var o = t.route,
            s = n.props.descriptors,
            u = s[o.key],
            c = u.options;
        return c.tabBarTestID;
      };

      n._makeDefaultHandler = function (t) {
        var o = t.route,
            s = t.navigation;
        return function () {
          if (s.isFocused()) o.hasOwnProperty('index') && o.index > 0 ? s.dispatch(module373.StackActions.popToTop({
            key: o.key
          })) : s.emit('refocus');else n._jumpTo(o.routeName);
        };
      };

      n._handleTabPress = function (t) {
        var o = t.route;
        n._isTabPress = true;

        var s = n.props.descriptors,
            u = s[o.key],
            c = u.navigation,
            p = u.options,
            l = n._makeDefaultHandler({
          route: o,
          navigation: c
        });

        if (p.tabBarOnPress) p.tabBarOnPress({
          navigation: c,
          defaultHandler: l
        });else l();
      };

      n._handleTabLongPress = function (t) {
        var o = t.route,
            s = n.props.descriptors,
            u = s[o.key],
            c = u.navigation,
            p = u.options,
            l = n._makeDefaultHandler({
          route: o,
          navigation: c
        });

        if (p.tabBarOnLongPress) p.tabBarOnLongPress({
          navigation: c,
          defaultHandler: l
        });else l();
      };

      n._handleIndexChange = function (t) {
        if (n._isTabPress) n._isTabPress = false;else n._jumpTo(n.props.navigation.state.routes[t].routeName);
      };

      n._handleSwipeStart = function () {
        n.setState({
          isSwiping: true
        });
      };

      n._handleSwipeEnd = function () {
        n.setState({
          isSwiping: false
        });
      };

      n._jumpTo = function (t) {
        return n.props.navigation.dispatch(module373.NavigationActions.navigate({
          routeName: t
        }));
      };

      n._isTabPress = false;
      return n;
    }

    render() {
      var n = this.props,
          s = n.descriptors,
          u = n.navigation,
          c = n.screenProps,
          p = u.state,
          l = p.routes[p.index],
          f = s[l.key],
          v = y({}, this.props.navigationConfig, {}, f.options);
      return <t />;
    }

  }

  return function (t) {
    var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
        s = module373.TabRouter(t, o);
    return module373.createNavigator(n, s, o);
  };
}
import React from "react";

var module51 = require("./51"),
    module284 = require("./284"),
    module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    module373 = require("./373");

function h(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n) s = s.filter(function (n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    });
    o.push.apply(o, s);
  }

  return o;
}

function y(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2) h(Object(o), true).forEach(function (n) {
      module284.default(t, n, o[n]);
    });else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));else h(Object(o)).forEach(function (n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
    });
  }

  return t;
}