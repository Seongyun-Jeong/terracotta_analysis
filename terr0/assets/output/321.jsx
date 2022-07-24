var module46 = require('./46'),
  module11 = require('./11'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36');

function h(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

var module45 = require('./45'),
  module253 = require('./253'),
  module182 = require('./182'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module78 = require('./78'),
  module52 = require('./52'),
  module42 = require('./42'),
  module75 = require('./75'),
  module322 = require('./322'),
  module66 = require('./66'),
  module190 = require('./190'),
  module156 = require('./156'),
  module162 = require('./162'),
  D = 'webview',
  R = module190({
    IDLE: null,
    LOADING: null,
    ERROR: null,
  }),
  A = function () {
    return (
      <module75 style={M.loadingView}>
        <module45 style={M.loadingProgressBar} />
      </module75>
    );
  };

class F {
  constructor() {
    var t, n;
    module22(this, h);
    (n = module30(this, (t = module33(h)).call.apply(t, [this].concat(args)))).state = {
      viewState: R.IDLE,
      lastErrorEvent: null,
      startInLoadingState: true,
    };

    n.goForward = function () {
      module42.dispatchViewManagerCommand(n.getWebViewHandle(), module42.getViewManagerConfig('RCTWebView').Commands.goForward, null);
    };

    n.goBack = function () {
      module42.dispatchViewManagerCommand(n.getWebViewHandle(), module42.getViewManagerConfig('RCTWebView').Commands.goBack, null);
    };

    n.reload = function () {
      n.setState({
        viewState: R.LOADING,
      });
      module42.dispatchViewManagerCommand(n.getWebViewHandle(), module42.getViewManagerConfig('RCTWebView').Commands.reload, null);
    };

    n.stopLoading = function () {
      module42.dispatchViewManagerCommand(n.getWebViewHandle(), module42.getViewManagerConfig('RCTWebView').Commands.stopLoading, null);
    };

    n.postMessage = function (t) {
      module42.dispatchViewManagerCommand(n.getWebViewHandle(), module42.getViewManagerConfig('RCTWebView').Commands.postMessage, [String(t)]);
    };

    n.injectJavaScript = function (t) {
      module42.dispatchViewManagerCommand(n.getWebViewHandle(), module42.getViewManagerConfig('RCTWebView').Commands.injectJavaScript, [t]);
    };

    n.updateNavigationState = function (t) {
      if (n.props.onNavigationStateChange) n.props.onNavigationStateChange(t.nativeEvent);
    };

    n.getWebViewHandle = function () {
      return module78.findNodeHandle(n.refs[D]);
    };

    n.onLoadingStart = function (t) {
      var o = n.props.onLoadStart;
      if (o) o(t);
      n.updateNavigationState(t);
    };

    n.onLoadingError = function (t) {
      t.persist();
      var o = n.props,
        s = o.onError,
        l = o.onLoadEnd;
      if (s) s(t);
      if (l) l(t);
      console.warn('Encountered an error loading page', t.nativeEvent);
      n.setState({
        lastErrorEvent: t.nativeEvent,
        viewState: R.ERROR,
      });
    };

    n.onLoadingFinish = function (t) {
      var o = n.props,
        s = o.onLoad,
        l = o.onLoadEnd;
      if (s) s(t);
      if (l) l(t);
      n.setState({
        viewState: R.IDLE,
      });
      n.updateNavigationState(t);
    };

    n.onMessage = function (t) {
      var o = n.props.onMessage;
      if (o) o(t);
    };

    return n;
  }

  UNSAFE_componentWillMount() {
    if (this.props.startInLoadingState)
      this.setState({
        viewState: R.LOADING,
      });
  }

  render() {
    var t = null;
    if (this.state.viewState === R.LOADING) t = (this.props.renderLoading || A)();
    else if (this.state.viewState === R.ERROR) {
      var o = this.state.lastErrorEvent;
      t = this.props.renderError && this.props.renderError(o.domain, o.code, o.description);
    } else this.state.viewState !== R.IDLE && console.error('RCTWebView invalid state encountered: ' + this.state.loading);
    var s = [M.container, this.props.style];
    if (!(this.state.viewState !== R.LOADING && this.state.viewState !== R.ERROR)) s.push(M.hidden);
    var l = this.props.source || {};
    if (this.props.html) l.html = this.props.html;
    else if (this.props.url) l.uri = this.props.url;
    if ('POST' === l.method && l.headers) console.warn('WebView: `source.headers` is not supported when using POST.');
    else if ('GET' === l.method && l.body) console.warn('WebView: `source.body` is not supported when using GET.');
    var c = this.props.nativeConfig || {},
      p = (this.props.originWhitelist || []).map(module322.originWhitelistToRegex),
      h = c.component || I,
      u = <h />;
    return (
      <module75 style={M.container}>
        {u}
        {t}
      </module75>
    );
  }
}

F.propTypes = (function (n) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      h(Object(s), true).forEach(function (o) {
        module46(n, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
    else
      h(Object(s)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return n;
})({}, module253, {
  renderError: PropTypes.func,
  renderLoading: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadEnd: PropTypes.func,
  onLoadStart: PropTypes.func,
  onError: PropTypes.func,
  automaticallyAdjustContentInsets: PropTypes.bool,
  contentInset: module182,
  onNavigationStateChange: PropTypes.func,
  onMessage: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  startInLoadingState: PropTypes.bool,
  style: module253.style,
  html: module66(PropTypes.string, 'Use the `source` prop instead.'),
  url: module66(PropTypes.string, 'Use the `source` prop instead.'),
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      method: PropTypes.oneOf(['GET', 'POST']),
      headers: PropTypes.object,
      body: PropTypes.string,
    }),
    PropTypes.shape({
      html: PropTypes.string,
      baseUrl: PropTypes.string,
    }),
    PropTypes.number,
  ]),
  useWebKit: PropTypes.bool,
  hardwareAccelerationEnabledExperimental: PropTypes.bool,
  javaScriptEnabled: PropTypes.bool,
  thirdPartyCookiesEnabled: PropTypes.bool,
  domStorageEnabled: PropTypes.bool,
  geolocationEnabled: PropTypes.bool,
  injectedJavaScript: PropTypes.string,
  scalesPageToFit: PropTypes.bool,
  allowFileAccess: PropTypes.bool,
  userAgent: PropTypes.string,
  testID: PropTypes.string,
  mediaPlaybackRequiresUserAction: PropTypes.bool,
  allowUniversalAccessFromFileURLs: PropTypes.bool,
  originWhitelist: PropTypes.arrayOf(PropTypes.string),
  injectJavaScript: PropTypes.func,
  mixedContentMode: PropTypes.oneOf(['never', 'always', 'compatibility']),
  saveFormDataDisabled: PropTypes.bool,
  nativeConfig: PropTypes.shape({
    component: PropTypes.any,
    props: PropTypes.object,
    viewManager: PropTypes.object,
  }),
  urlPrefixesForDefaultIntent: PropTypes.arrayOf(PropTypes.string),
});

F.defaultProps = {
  javaScriptEnabled: true,
  thirdPartyCookiesEnabled: true,
  scalesPageToFit: true,
  hardwareAccelerationEnabledExperimental: true,
  saveFormDataDisabled: false,
  originWhitelist: module322.defaultOriginWhitelist,
};
var I = module156('RCTWebView'),
  M = module52.create({
    container: {
      flex: 1,
    },
    hidden: {
      height: 0,
      flex: 0,
    },
    loadingView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingProgressBar: {
      height: 20,
    },
  });
module.exports = F;
