var module11 = require('./11'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module278 = require('./278'),
  React = require('react'),
  module309 = require('./309'),
  module305 = require('./305');

class w {
  constructor(t, u) {
    var c;
    module22(this, h);
    (c = module30(this, module33(h).call(this, t, u)))._listViewRef = null;
    c._shouldBounceFirstRowOnMount = false;

    c._onScroll = function (t) {
      if (c.props.dataSource.getOpenRowID())
        c.setState({
          dataSource: c.state.dataSource.setOpenRowID(null),
        });
      if (c.props.onScroll) c.props.onScroll(t);
    };

    c._renderRow = function (t, n, o) {
      var s = c.props.renderQuickActions(t, n, o);
      if (!s) return c.props.renderRow(t, n, o);
      var u = false;

      if (c._shouldBounceFirstRowOnMount) {
        c._shouldBounceFirstRowOnMount = false;
        u = o === c.props.dataSource.getFirstRowID();
      }

      return (
        <module305
          slideoutView={s}
          isOpen={t.id === c.props.dataSource.getOpenRowID()}
          maxSwipeDistance={c._getMaxSwipeDistance(t, n, o)}
          key={o}
          onOpen={function () {
            return c._onOpen(t.id);
          }}
          onClose={function () {
            return c._onClose(t.id);
          }}
          onSwipeEnd={function () {
            return c._setListViewScrollable(true);
          }}
          onSwipeStart={function () {
            return c._setListViewScrollable(false);
          }}
          shouldBounceOnMount={u}
        >
          <t>{o}</t>
        </module305>
      );
    };

    c._shouldBounceFirstRowOnMount = c.props.bounceFirstRowOnMount;
    c.state = {
      dataSource: c.props.dataSource,
    };
    return c;
  }

  UNSAFE_componentWillReceiveProps(t) {
    if (this.state.dataSource.getDataSource() !== t.dataSource.getDataSource())
      this.setState({
        dataSource: t.dataSource,
      });
  }

  render() {
    var n = this;
    return <module278 />;
  }

  _setListViewScrollable(t) {
    if (this._listViewRef && 'function' == typeof this._listViewRef.setNativeProps)
      this._listViewRef.setNativeProps({
        scrollEnabled: t,
      });
  }

  getScrollResponder() {
    if (this._listViewRef && 'function' == typeof this._listViewRef.getScrollResponder) return this._listViewRef.getScrollResponder();
  }

  _getMaxSwipeDistance(t, n, o) {
    return 'function' == typeof this.props.maxSwipeDistance ? this.props.maxSwipeDistance(t, n, o) : this.props.maxSwipeDistance;
  }

  _onOpen(t) {
    this.setState({
      dataSource: this.state.dataSource.setOpenRowID(t),
    });
  }

  _onClose(t) {
    this.setState({
      dataSource: this.state.dataSource.setOpenRowID(null),
    });
  }
}

w.defaultProps = {
  bounceFirstRowOnMount: false,
  renderQuickActions: function () {
    return null;
  },
};
module.exports = w;
