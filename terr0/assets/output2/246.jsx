import React from 'react';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module212 = require('./212'),
  module52 = require('./52'),
  module75 = require('./75'),
  c = module212.createAnimatedComponent(module75),
  f = module52.create({
    header: {
      zIndex: 10,
    },
    fill: {
      flex: 1,
    },
  });

class v {
  constructor() {
    var n, s;
    module22(this, h);
    (s = module30(this, (n = module33(h)).call.apply(n, [this].concat(args)))).state = {
      measured: false,
      layoutY: 0,
      layoutHeight: 0,
      nextHeaderLayoutY: s.props.nextHeaderLayoutY,
    };

    s._onLayout = function (t) {
      s.setState({
        measured: true,
        layoutY: t.nativeEvent.layout.y,
        layoutHeight: t.nativeEvent.layout.height,
      });
      s.props.onLayout(t);
      var n = React.Children.only(s.props.children);
      if (n.props.onLayout) n.props.onLayout(t);
    };

    return s;
  }

  setNextHeaderY(t) {
    this.setState({
      nextHeaderLayoutY: t,
    });
  }

  render() {
    var t = this.props,
      n = t.inverted,
      o = t.scrollViewHeight,
      u = this.state,
      s = u.measured,
      l = u.layoutHeight,
      h = u.layoutY,
      y = u.nextHeaderLayoutY,
      v = [-1, 0],
      L = [0, 0];
    if (s)
      if (n) {
        if (null != o) {
          var H = h + l - o;

          if (H > 0) {
            v.push(H);
            L.push(0);
            v.push(H + 1);
            L.push(1);
            var Y = (y || 0) - l - o;

            if (Y > H) {
              v.push(Y, Y + 1);
              L.push(Y - H, Y - H);
            }
          }
        }
      } else {
        v.push(h);
        L.push(0);
        var x = (y || 0) - l;

        if (x >= h) {
          v.push(x, x + 1);
          L.push(x - h, x - h);
        } else {
          v.push(h + 1);
          L.push(1);
        }
      }
    var C = this.props.scrollAnimatedValue.interpolate({
        inputRange: v,
        outputRange: L,
      }),
      E = React.Children.only(this.props.children);
    return (
      <c
        collapsable={false}
        onLayout={this._onLayout}
        style={[
          E.props.style,
          f.header,
          {
            transform: [
              {
                translateY: C,
              },
            ],
          },
        ]}
      >
        <E style={f.fill} onLayout={undefined} />
      </c>
    );
  }
}

module.exports = v;
