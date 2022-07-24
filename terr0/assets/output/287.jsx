require('./288');

require('./117');

require('./8');

require('./43');

var t,
  module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module289 = require('./289'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module52 = require('./52'),
  module75 = require('./75'),
  module290 = require('./290'),
  _ = 0,
  b = (function (t) {
    function n(t) {
      var module23;
      module22(this, n);
      module23 = module30(this, module33(n).call(this, t));

      n._confirmProps(t);

      module23._identifier = _++;
      return module23;
    }

    module36(n, t);
    module23(
      n,
      [
        {
          key: 'getChildContext',
          value: function () {
            return {
              virtualizedList: null,
            };
          },
        },
        {
          key: 'componentDidMount',
          value: function () {},
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            if (this._eventSubscription) this._eventSubscription.remove();
          },
        },
        {
          key: 'UNSAFE_componentWillReceiveProps',
          value: function (t) {
            n._confirmProps(t);
          },
        },
        {
          key: 'render',
          value: function () {
            if (true !== this.props.visible) return null;
            var t = {
                backgroundColor: this.props.transparent ? 'transparent' : 'white',
              },
              n = this.props.animationType;

            if (!n) {
              n = 'none';
              if (this.props.animated) n = 'slide';
            }

            var o = this.props.presentationStyle;

            if (!o) {
              o = 'fullScreen';
              if (this.props.transparent) o = 'overFullScreen';
            }

            var s = this.props.children;
            return (
              <module290
                animationType={n}
                presentationStyle={o}
                transparent={this.props.transparent}
                hardwareAccelerated={this.props.hardwareAccelerated}
                onRequestClose={this.props.onRequestClose}
                onShow={this.props.onShow}
                identifier={this._identifier}
                style={k.modal}
                onStartShouldSetResponder={this._shouldSetResponder}
                supportedOrientations={this.props.supportedOrientations}
                onOrientationChange={this.props.onOrientationChange}
              >
                <module75 style={[k.container, t]}>{s}</module75>
              </module290>
            );
          },
        },
        {
          key: '_shouldSetResponder',
          value: function () {
            return true;
          },
        },
      ],
      [
        {
          key: '_confirmProps',
          value: function (t) {
            if (t.presentationStyle && 'overFullScreen' !== t.presentationStyle && t.transparent)
              console.warn("Modal with '" + t.presentationStyle + "' presentation style and 'transparent' value is not supported.");
          },
        },
      ]
    );
    return n;
  })(React.Component);

b.defaultProps = {
  visible: true,
  hardwareAccelerated: false,
};
b.contextTypes = {
  rootTag: PropTypes.number,
};
b.childContextTypes = {
  virtualizedList: PropTypes.object,
};
var C = module289.isRTL ? 'right' : 'left',
  k = module52.create({
    modal: {
      position: 'absolute',
    },
    container:
      ((t = {
        position: 'absolute',
      }),
      module46(t, C, 0),
      module46(t, 'top', 0),
      t),
  });
module.exports = b;
