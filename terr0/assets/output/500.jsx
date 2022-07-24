var module404 = require('./404');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module498 = require('./498'),
  S = (function (t) {
    function n(t) {
      var s;
      module356.default(this, n);
      (s = module358.default(this, module361.default(n).call(this, t)))._isIdle = true;
      s._currentIndex = 0;

      s._getPageIndex = function (t) {
        return module2.I18nManager.isRTL ? s.props.navigationState.routes.length - (t + 1) : t;
      };

      s._setPage = function (t) {
        var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
          o = s._viewPager;

        if (o) {
          var p = s._getPageIndex(t);

          if (false === s.props.animationEnabled || false === n) o.setPageWithoutAnimation(p);
          else o.setPage(p);
        }
      };

      s._handlePageChange = function (t, n) {
        if (s._isIdle && s._currentIndex !== t) {
          s._setPage(t, n);

          s._currentIndex = t;
        }
      };

      s._handlePageScroll = function (t) {
        s.props.offsetX.setValue(s._getPageIndex(t.nativeEvent.position) * s.props.layout.width * -1);
        s.props.panX.setValue(t.nativeEvent.offset * s.props.layout.width * (module2.I18nManager.isRTL ? 1 : -1));
      };

      s._handlePageScrollStateChanged = function (t) {
        s._isIdle = 'string' != typeof t && t.nativeEvent ? 'idle' === t.nativeEvent.pageScrollState : 'idle' === t;
        var n = s._currentIndex,
          o = s.props.navigationState.routes[n];

        switch (
          (s.props.canJumpToTab({
            route: o,
          })
            ? s.props.jumpTo(o.key)
            : (s._setPage(s.props.navigationState.index), (s._currentIndex = s.props.navigationState.index)),
          t)
        ) {
          case 'dragging':
            if (s.props.onSwipeStart) s.props.onSwipeStart();
            break;

          case 'settling':
            if (s.props.onSwipeEnd) s.props.onSwipeEnd();
            break;

          case 'idle':
            if (s.props.onAnimationEnd) s.props.onAnimationEnd();
        }
      };

      s._handlePageSelected = function (t) {
        var n = s._getPageIndex(t.nativeEvent.position);

        s._currentIndex = n;
      };

      s._currentIndex = s.props.navigationState.index;
      return s;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentDidUpdate',
        value: function (t) {
          if (t.navigationState.routes.length !== this.props.navigationState.routes.length || t.layout.width !== this.props.layout.width)
            this._handlePageChange(this.props.navigationState.index, false);
          else if (t.navigationState.index !== this.props.navigationState.index) this._handlePageChange(this.props.navigationState.index);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            o = n.navigationState,
            s = n.swipeEnabled,
            p = n.keyboardDismissMode,
            l = (module2.I18nManager.isRTL ? React.Children.toArray(this.props.children).reverse() : React.Children.toArray(this.props.children)).map(function (n, s) {
              var p = o.routes[s],
                l = s === o.index;
              return (
                <module2.View
                  key={p.key}
                  testID={t.props.getTestID({
                    route: p,
                  })}
                  accessibilityElementsHidden={!l}
                  importantForAccessibility={l ? 'auto' : 'no-hide-descendants'}
                  style={_.page}
                >
                  {n}
                </module2.View>
              );
            }),
            u = this._getPageIndex(o.index);

          return (
            <module2.ViewPagerAndroid
              key={o.routes.length}
              keyboardDismissMode={p}
              initialPage={u}
              scrollEnabled={false !== s}
              onPageScroll={this._handlePageScroll}
              onPageScrollStateChanged={this._handlePageScrollStateChanged}
              onPageSelected={this._handlePageSelected}
              style={_.container}
              ref={function (n) {
                return (t._viewPager = n);
              }}
            >
              {l}
            </module2.ViewPagerAndroid>
          );
        },
      },
    ]);
    return n;
  })(React.Component);

exports.default = S;
S.propTypes = module498.PagerRendererPropType;
S.defaultProps = {
  canJumpToTab: function () {
    return true;
  },
  keyboardDismissMode: 'on-drag',
};

var _ = module2.StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  page: {
    overflow: 'hidden',
  },
});
