require('./43');

require('./78').NativeComponent;

require('./239');

require('./192');

var t,
  module11 = require('./11'),
  module9 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  React = require('react'),
  module238 = require('./238'),
  module42 = require('./42').getViewManagerConfig('AndroidSwipeRefreshLayout');

t = module42
  ? module42.Constants
  : {
      SIZE: {},
    };

class R {
  constructor() {
    var t, s;
    module22(this, c);
    (s = module30(this, (t = module33(c)).call.apply(t, [this].concat(args))))._lastNativeRefreshing = false;

    s._onRefresh = function () {
      s._lastNativeRefreshing = true;
      if (s.props.onRefresh) s.props.onRefresh();
      s.forceUpdate();
    };

    return s;
  }

  componentDidMount() {
    this._lastNativeRefreshing = this.props.refreshing;
  }

  componentDidUpdate(t) {
    if (this.props.refreshing !== t.refreshing) this._lastNativeRefreshing = this.props.refreshing;
    else if (this.props.refreshing !== this._lastNativeRefreshing && this._setNativePropsOnRef) {
      this._setNativePropsOnRef({
        refreshing: this.props.refreshing,
      });

      this._lastNativeRefreshing = this.props.refreshing;
    }
  }

  render() {
    var t = this,
      o = this.props,
      h = module9(o, ['tintColor', 'titleColor', 'title']);
    return <module238 />;
  }
}

R.SIZE = t.SIZE;
module.exports = R;
