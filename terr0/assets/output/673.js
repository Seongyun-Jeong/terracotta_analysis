var module404 = require('./404');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module670 = require('./670'),
  module674 = require('./674'),
  module675 = require('./675'),
  module676 = require('./676'),
  module677 = require('./677'),
  module679 = require('./679'),
  module678 = require('./678'),
  module680 = require('./680'),
  module681 = require('./681'),
  module684 = require('./684'),
  module683 = module404(require('./683')),
  S = ['interstitial_event', 'rewarded_video_event'],
  z = 'RNFirebaseAdMob';

exports.MODULE_NAME = z;
var L = 'admob';
exports.NAMESPACE = L;

var k = (function (t) {
  function n(t) {
    var l;
    module356.default(this, n);
    (l = module358.default(
      this,
      module361.default(n).call(this, t, {
        events: S,
        moduleName: z,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: L,
      })
    ))._initialized = false;
    l._appId = null;
    module670.SharedEventEmitter.addListener('interstitial_event', l._onInterstitialEvent.bind(module360.default(l)));
    module670.SharedEventEmitter.addListener('rewarded_video_event', l._onRewardedVideoEvent.bind(module360.default(l)));
    return l;
  }

  module362.default(n, t);
  module357.default(n, [
    {
      key: '_onInterstitialEvent',
      value: function (t) {
        var n = 'interstitial_' + t.adUnit;
        module670.SharedEventEmitter.listeners(n).length;
        module670.SharedEventEmitter.emit(n, t);
      },
    },
    {
      key: '_onRewardedVideoEvent',
      value: function (t) {
        var n = 'rewarded_video_' + t.adUnit;
        module670.SharedEventEmitter.listeners(n).length;
        module670.SharedEventEmitter.emit(n, t);
      },
    },
    {
      key: 'initialize',
      value: function (t) {
        if (this._initialized) module674.getLogger(this).warn('AdMob has already been initialized!');
        else {
          this._initialized = true;
          this._appId = t;
          module675.getNativeModule(this).initialize(t);
        }
      },
    },
    {
      key: 'openDebugMenu',
      value: function () {
        if (this._initialized) {
          module674.getLogger(this).info('Opening debug menu');
          module675.getNativeModule(this).openDebugMenu(this._appId);
        } else module674.getLogger(this).warn('AdMob needs to be initialized before opening the dev menu!');
      },
    },
    {
      key: 'interstitial',
      value: function (t) {
        return new module677.default(this, t);
      },
    },
    {
      key: 'rewarded',
      value: function (t) {
        return new module679.default(this, t);
      },
    },
  ]);
  return n;
})(module676.default);

exports.default = k;
var R = {
  Banner: module681.default,
  NativeExpress: module684.default,
  AdRequest: module678.default,
  VideoOptions: module680.default,
  EventTypes: module683.default,
  RewardedVideoEventTypes: module683.RewardedVideoEventTypes,
  NativeExpressEventTypes: module683.NativeExpressEventTypes,
};
exports.statics = R;
