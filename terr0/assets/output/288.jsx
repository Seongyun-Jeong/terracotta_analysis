require('./39');

require('./29');

require('./78');

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module52 = require('./52'),
  module75 = require('./75');

class f {
  constructor() {
    var n, l;
    module22(this, c);
    (l = module30(this, (n = module33(c)).call.apply(n, [this].concat(args)))).state = {
      inspector: null,
      mainKey: 1,
    };
    l._subscription = null;
    return l;
  }

  getChildContext() {
    return {
      rootTag: this.props.rootTag,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    if (null != this._subscription) this._subscription.remove();
  }

  render() {
    var t = this,
      n = (
        <module75
          collapsable={!this.state.inspector}
          key={this.state.mainKey}
          pointerEvents="box-none"
          style={v.appContainer}
          ref={function (n) {
            t._mainRef = n;
          }}
        >
          {this.props.children}
        </module75>
      ),
      o = this.props.WrapperComponent;
    if (null != o) n = <o>{n}</o>;
    return (
      <module75 style={v.appContainer} pointerEvents="box-none">
        {n}
        {null}
        {this.state.inspector}
      </module75>
    );
  }
}

f.childContextTypes = {
  rootTag: PropTypes.number,
};
var v = module52.create({
  appContainer: {
    flex: 1,
  },
});
module.exports = f;
