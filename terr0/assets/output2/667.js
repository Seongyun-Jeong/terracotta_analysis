require('./669');

import module2 from './2';

var module356 = require('./356'),
  module668 = require('./668'),
  module671 = require('./671'),
  module766 = require('./766'),
  module673 = require('./673'),
  module685 = require('./685'),
  module697 = require('./697'),
  module698 = require('./698'),
  module699 = require('./699'),
  module700 = require('./700'),
  module708 = require('./708'),
  module733 = require('./733'),
  module735 = require('./735'),
  module736 = require('./736'),
  module744 = require('./744'),
  module747 = require('./747'),
  module758 = require('./758'),
  module761 = require('./761'),
  module764 = require('./764'),
  k = module2.NativeModules.RNFirebase,
  R = v;

class v {
  constructor() {
    if ((module356.default(this, t), !k)) throw new Error(module671.default.STRINGS.ERROR_MISSING_CORE);
    module668.default.initializeNativeApps();
    this.admob = module668.default.moduleAndStatics('admob', module673.statics, module673.MODULE_NAME);
    this.analytics = module668.default.moduleAndStatics('analytics', module697.statics, module697.MODULE_NAME);
    this.auth = module668.default.moduleAndStatics('auth', module685.statics, module685.MODULE_NAME);
    this.config = module668.default.moduleAndStatics('config', module698.statics, module698.MODULE_NAME);
    this.crashlytics = module668.default.moduleAndStatics('crashlytics', module699.statics, module699.MODULE_NAME);
    this.database = module668.default.moduleAndStatics('database', module700.statics, module700.MODULE_NAME);
    this.firestore = module668.default.moduleAndStatics('firestore', module708.statics, module708.MODULE_NAME);
    this.functions = module668.default.moduleAndStatics('functions', module733.statics, module733.MODULE_NAME);
    this.iid = module668.default.moduleAndStatics('iid', module735.statics, module735.MODULE_NAME);
    this.links = module668.default.moduleAndStatics('links', module736.statics, module736.MODULE_NAME);
    this.messaging = module668.default.moduleAndStatics('messaging', module744.statics, module744.MODULE_NAME);
    this.notifications = module668.default.moduleAndStatics('notifications', module747.statics, module747.MODULE_NAME);
    this.perf = module668.default.moduleAndStatics('perf', module758.statics, module758.MODULE_NAME);
    this.storage = module668.default.moduleAndStatics('storage', module761.statics, module761.MODULE_NAME);
    this.utils = module668.default.moduleAndStatics('utils', module764.statics, module764.MODULE_NAME);
  }

  initializeApp(t, s) {
    return module668.default.initializeApp(t, s);
  }

  app(t) {
    return module668.default.app(t);
  }

  apps() {
    return module668.default.apps();
  }

  SDK_VERSION() {
    return module766.default;
  }
}

export default R;
var I = v.admob,
  w = v.analytics,
  z = v.auth,
  G = v.config,
  j = v.crashlytics,
  C = v.database,
  F = v.firestore,
  K = v.functions,
  P = v.iid,
  T = v.links,
  V = v.messaging,
  q = v.notifications,
  x = v.perf,
  B = v.storage,
  H = v.utils;
exports.utils = H;
exports.storage = B;
exports.perf = x;
exports.notifications = q;
exports.messaging = V;
exports.links = T;
exports.iid = P;
exports.functions = K;
exports.firestore = F;
exports.database = C;
exports.crashlytics = j;
exports.config = G;
exports.auth = z;
exports.analytics = w;
exports.admob = I;
