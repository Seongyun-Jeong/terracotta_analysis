var module404 = require('./404');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  v = (function (t, ...args) {
    function n() {
      var t, s;
      module356.default(this, n);
      (s = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).state = {
        loading: Math.abs(s.props.navigationState.index - s.props.index) > s.props.lazyPreloadDistance,
      };

      s.handleEnter = function (t) {
        if (t === s.props.index && s.state.loading)
          s.setState({
            loading: false,
          });
      };

      return s;
    }

    module362.default(n, t);
    module357.default(
      n,
      [
        {
          key: 'componentDidMount',
          value: function () {
            var t = this;
            if (this.props.lazy) this.props.addListener('enter', this.handleEnter);
            else if (this.state.loading)
              setTimeout(function () {
                return t.setState({
                  loading: false,
                });
              }, 0);
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (t, n) {
            if (!(this.props.lazy === t.lazy && this.state.loading === n.loading))
              this.props.lazy && this.state.loading ? this.props.addListener('enter', this.handleEnter) : this.props.removeListener('enter', this.handleEnter);
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.props.removeListener('enter', this.handleEnter);
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this.props,
              n = t.navigationState,
              o = t.index,
              s = t.layout,
              l = t.style,
              u = this.state.loading,
              h = n.index === o;
            return (
              <module2.View
                accessibilityElementsHidden={!h}
                importantForAccessibility={h ? 'auto' : 'no-hide-descendants'}
                style={[
                  f.route,
                  s.width
                    ? {
                        width: s.width,
                      }
                    : h
                    ? module2.StyleSheet.absoluteFill
                    : null,
                  l,
                ]}
                __source={{
                  fileName: '/Users/osdnk/work/react-native-tab-view/src/SceneView.tsx',
                  lineNumber: 92,
                }}
              >
                {h || s.width
                  ? this.props.children({
                      loading: u,
                    })
                  : null}
              </module2.View>
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            return n.loading && Math.abs(t.navigationState.index - t.index) <= t.lazyPreloadDistance
              ? {
                  loading: false,
                }
              : null;
          },
        },
      ]
    );
    return n;
  })(React.Component);

exports.default = v;
var f = module2.StyleSheet.create({
  route: {
    flex: 1,
    overflow: 'hidden',
  },
});
