require('./43');

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module117 = require('./117'),
  module8 = require('./8'),
  module3 = require('./3'),
  L = module8.IntentAndroid;

class f {
  constructor() {
    module22(this, f);
    return module30(this, module33(f).call(this, L));
  }

  addEventListener(n, t) {
    this.addListener(n, t);
  }

  removeEventListener(n, t) {
    this.removeListener(n, t);
  }

  openURL(n) {
    this._validateURL(n);

    return L.openURL(n);
  }

  canOpenURL(n) {
    this._validateURL(n);

    return L.canOpenURL(n);
  }

  getInitialURL() {
    return L.getInitialURL();
  }

  sendIntent(n, t) {
    return L.sendIntent(n, t);
  }

  _validateURL(n) {
    module3('string' == typeof n, 'Invalid URL: should be a string. Was: ' + n);
    module3(n, 'Invalid URL: cannot be empty');
  }
}

module.exports = new f();
