require('./43');

var module11 = require('./11'),
  module9 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module243 = require('./243'),
  module244 = require('./244'),
  React = require('react'),
  module52 = require('./52'),
  module75 = require('./75');

class v {
  constructor(t) {
    var o;
    module22(this, p);
    (o = module30(this, module33(p).call(this, t)))._frame = null;
    o._subscriptions = [];
    o._initialFrameHeight = 0;

    o._onKeyboardChange = function (t) {
      if (null != t) {
        var n = t.duration,
          s = t.easing,
          l = t.endCoordinates,
          u = o._relativeKeyboardHeight(l);

        if (o.state.bottom !== u) {
          if (n && s)
            module244.configureNext({
              duration: n > 10 ? n : 10,
              update: {
                duration: n > 10 ? n : 10,
                type: module244.Types[s] || 'keyboard',
              },
            });
          o.setState({
            bottom: u,
          });
        }
      } else
        o.setState({
          bottom: 0,
        });
    };

    o._onLayout = function (t) {
      o._frame = t.nativeEvent.layout;
      if (!o._initialFrameHeight) o._initialFrameHeight = o._frame.height;
    };

    o.state = {
      bottom: 0,
    };
    o.viewRef = React.createRef();
    return o;
  }

  _relativeKeyboardHeight(t) {
    var o = this._frame;
    if (!o || !t) return 0;
    var n = t.screenY - this.props.keyboardVerticalOffset;
    return (o.y + o.height - n) ** 0;
  }

  componentDidMount() {
    this._subscriptions = [module243.addListener('keyboardDidHide', this._onKeyboardChange), module243.addListener('keyboardDidShow', this._onKeyboardChange)];
  }

  componentWillUnmount() {
    this._subscriptions.forEach(function (t) {
      t.remove();
    });
  }

  render() {
    var n = this.props,
      s = n.behavior,
      l = n.children,
      u = n.contentContainerStyle,
      h = n.enabled,
      c = n.style,
      f = module9(n, ['behavior', 'children', 'contentContainerStyle', 'enabled', 'keyboardVerticalOffset', 'style']),
      v = h ? this.state.bottom : 0;

    switch (s) {
      case 'height':
        var p;
        if (null != this._frame && this.state.bottom > 0)
          p = {
            height: this._initialFrameHeight - v,
            flex: 0,
          };
        return <module75>{l}</module75>;

      case 'position':
        return (
          <module75>
            <module75
              style={module52.compose(u, {
                bottom: v,
              })}
            >
              {l}
            </module75>
          </module75>
        );

      case 'padding':
        return <module75>{l}</module75>;

      default:
        return <module75>{l}</module75>;
    }
  }
}

v.defaultProps = {
  enabled: true,
  keyboardVerticalOffset: 0,
};
module.exports = v;
