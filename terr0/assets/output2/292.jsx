import React from 'react';

var module11 = require('./11'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module293 = require('./293'),
  module294 = require('./294'),
  module52 = require('./52'),
  module69 = require('./69'),
  y = 'picker',
  b = (function (v, ...args) {
    function b() {
      var t, o;
      module22(this, b);
      (o = module30(this, (t = module33(b)).call.apply(t, [this].concat(args)))).state = b.getDerivedStateFromProps(o.props);

      o._onChange = function (t) {
        if (o.props.onValueChange) {
          var s = t.nativeEvent.position;

          if (s >= 0) {
            var n = React.Children.toArray(o.props.children)[s].props.value;
            o.props.onValueChange(n, s);
          } else o.props.onValueChange(null, s);
        }

        if (o.refs[y] && o.state.selectedIndex !== t.nativeEvent.position)
          o.refs[y].setNativeProps({
            selected: o.state.selectedIndex,
          });
      };

      return o;
    }

    module36(b, v);
    module23(
      b,
      [
        {
          key: 'render',
          value: function () {
            var s = 'dropdown' === this.props.mode ? module293 : module294,
              o = {
                enabled: this.props.enabled,
                items: this.state.items,
                mode: this.props.mode,
                onSelect: this._onChange,
                prompt: this.props.prompt,
                selected: this.state.selectedIndex,
                testID: this.props.testID,
                style: [C.pickerAndroid, this.props.style],
                accessibilityLabel: this.props.accessibilityLabel,
              };
            return <s />;
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t) {
            var s = 0,
              o = React.Children.map(t.children, function (o, n) {
                if (o.props.value === t.selectedValue) s = n;
                var p = {
                  value: o.props.value,
                  label: o.props.label,
                };
                if (o.props.color) p.color = module69(o.props.color);
                return p;
              });
            return {
              selectedIndex: s,
              items: o,
            };
          },
        },
      ]
    );
    return b;
  })(React.Component),
  C = module52.create({
    pickerAndroid: {
      height: 50,
    },
  });

module.exports = b;
