var module404 = require('./404');

var module51 = require('./51'),
  module356 = require('./356'),
  module2 = require('./2'),
  module668 = require('./668'),
  module670 = require('./670'),
  module671 = require('./671'),
  module672 = require('./672'),
  module673 = module404(require('./673')),
  module685 = module404(require('./685')),
  module697 = module404(require('./697')),
  module698 = module404(require('./698')),
  module699 = module404(require('./699')),
  module700 = module404(require('./700')),
  module708 = module404(require('./708')),
  module733 = module404(require('./733')),
  module735 = module404(require('./735')),
  module736 = module404(require('./736')),
  module744 = module404(require('./744')),
  module747 = module404(require('./747')),
  module758 = module404(require('./758')),
  module761 = module404(require('./761')),
  module764 = module404(require('./764')),
  z = module2.NativeModules.RNFirebase,
  I = (function () {
    function t(n, l) {
      var o = this,
        p = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      module356.default(this, t);
      this._initialized = false;
      this._nativeInitialized = false;
      this._name = n;
      this._options = module51.default({}, l);

      if (p) {
        this._initialized = true;
        this._nativeInitialized = true;
      } else if (l.databaseURL && l.apiKey)
        z.initializeApp(this._name, this._options, function (t, n) {
          o._initialized = true;
          module670.SharedEventEmitter.emit('AppReady:' + o._name, {
            error: t,
            result: n,
          });
        });

      this.admob = module668.default.appModule(this, module673.NAMESPACE, module673.default);
      this.analytics = module668.default.appModule(this, module697.NAMESPACE, module697.default);
      this.auth = module668.default.appModule(this, module685.NAMESPACE, module685.default);
      this.config = module668.default.appModule(this, module698.NAMESPACE, module698.default);
      this.crashlytics = module668.default.appModule(this, module699.NAMESPACE, module699.default);
      this.database = module668.default.appModule(this, module700.NAMESPACE, module700.default);
      this.firestore = module668.default.appModule(this, module708.NAMESPACE, module708.default);
      this.functions = module668.default.appModule(this, module733.NAMESPACE, module733.default);
      this.iid = module668.default.appModule(this, module735.NAMESPACE, module735.default);
      this.links = module668.default.appModule(this, module736.NAMESPACE, module736.default);
      this.messaging = module668.default.appModule(this, module744.NAMESPACE, module744.default);
      this.notifications = module668.default.appModule(this, module747.NAMESPACE, module747.default);
      this.perf = module668.default.appModule(this, module758.NAMESPACE, module758.default);
      this.storage = module668.default.appModule(this, module761.NAMESPACE, module761.default);
      this.utils = module668.default.appModule(this, module764.NAMESPACE, module764.default);
      this._extendedProps = {};
    }

    module357.default(t, [
      {
        key: 'extendApp',
        value: function (t) {
          if (!module672.isObject(t)) throw new Error(module671.default.STRINGS.ERROR_MISSING_ARG('Object', 'extendApp'));

          for (var n = Object.keys(t), s = 0, u = n.length; s < u; s++) {
            var l = n[s];
            if (!this._extendedProps[l] && Object.hasOwnProperty.call(this, l)) throw new Error(module671.default.STRINGS.ERROR_PROTECTED_PROP(l));
            this[l] = t[l];
            this._extendedProps[l] = true;
          }
        },
      },
      {
        key: 'delete',
        value: function () {
          var t = this;
          return this._name === module668.default.DEFAULT_APP_NAME && this._nativeInitialized
            ? Promise.reject(new Error('Unable to delete the default native firebase app instance.'))
            : z.deleteApp(this._name).then(function () {
                return module668.default.deleteApp(t._name);
              });
        },
      },
      {
        key: 'onReady',
        value: function () {
          var t = this;
          return this._initialized
            ? Promise.resolve(this)
            : new Promise(function (n, s) {
                module670.SharedEventEmitter.once('AppReady:' + t._name, function (u) {
                  var l = u.error;
                  return l ? s(new Error(l)) : n(t);
                });
              });
        },
      },
      {
        key: 'toString',
        value: function () {
          return this._name;
        },
      },
      {
        key: 'name',
        get: function () {
          return this._name;
        },
      },
      {
        key: 'options',
        get: function () {
          return module51.default({}, this._options);
        },
      },
    ]);
    return t;
  })();

exports.default = I;
