var module46 = require('./46');

function t(n, t) {
  var o = Object.keys(n);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    if (t)
      s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function o(o) {
  for (var s = 1; s < arguments.length; s++) {
    var p = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      t(Object(p), true).forEach(function (t) {
        module46(o, t, p[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(p));
    else
      t(Object(p)).forEach(function (n) {
        Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(p, n));
      });
  }

  return o;
}

var s,
  module16 = require('./16'),
  module326 = require('./326'),
  module8 = require('./8'),
  module78 = require('./78'),
  module328 = require('./328'),
  module147 = require('./147'),
  module3 = require('./3'),
  module329 = require('./329'),
  O = {},
  k = 1,
  v = {},
  w = new Map(),
  j = function (n) {
    return n();
  },
  A = {
    setWrapperComponentProvider: function (n) {
      s = n;
    },
    registerConfig: function (n) {
      n.forEach(function (n) {
        if (n.run) A.registerRunnable(n.appKey, n.run);
        else {
          module3(null != n.component, 'AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.', n.appKey);
          A.registerComponent(n.appKey, n.component, n.section);
        }
      });
    },
    registerComponent: function (n, t, o) {
      O[n] = {
        componentProvider: t,
        run: function (n) {
          module329(j(t), n.initialProps, n.rootTag, s && s(n), n.fabric);
        },
      };
      if (o) v[n] = O[n];
      return n;
    },
    registerRunnable: function (n, t) {
      O[n] = {
        run: t,
      };
      return n;
    },
    registerSection: function (n, t) {
      A.registerComponent(n, t, true);
    },
    getAppKeys: function () {
      return Object.keys(O);
    },
    getSectionKeys: function () {
      return Object.keys(v);
    },
    getSections: function () {
      return o({}, v);
    },
    getRunnable: function (n) {
      return O[n];
    },
    getRegistry: function () {
      return {
        sections: A.getSectionKeys(),
        runnables: o({}, O),
      };
    },
    setComponentProviderInstrumentationHook: function (n) {
      j = n;
    },
    runApplication: function (n, t) {
      var o =
        'Running application "' +
        n +
        '" with appParams: ' +
        JSON.stringify(t) +
        '. __DEV__ === ' +
        String(false) +
        ', development-level warning are OFF, performance optimizations are ON';
      module147(o);
      module326.addSource('AppRegistry.runApplication' + k++, function () {
        return o;
      });
      module3(
        O[n] && O[n].run,
        'Application ' +
          n +
          " has not been registered.\n\nHint: This error often happens when you're running the packager (local dev server) from a wrong folder. For example you have multiple apps and the packager is still running for the app you were working on before.\nIf this is the case, simply kill the old packager instance (e.g. close the packager terminal window) and start the packager in the correct app folder (e.g. cd into app folder and run 'npm start').\n\nThis error can also happen due to a require() error during initialization or failure to call AppRegistry.registerComponent.\n\n"
      );
      module328.setActiveScene({
        name: n,
      });
      O[n].run(t);
    },
    unmountApplicationComponentAtRootTag: function (n) {
      module78.unmountComponentAtNodeAndRemoveContainer(n);
    },
    registerHeadlessTask: function (n, t) {
      if (w.has(n)) console.warn("registerHeadlessTask called multiple times for same key '" + n + "'");
      w.set(n, t);
    },
    startHeadlessTask: function (n, t, o) {
      var s = w.get(t);
      if (!s) throw new Error('No task registered for key ' + t);
      s()(o)
        .then(function () {
          return module8.HeadlessJsTaskSupport.notifyTaskFinished(n);
        })
        .catch(function (t) {
          console.error(t);
          module8.HeadlessJsTaskSupport.notifyTaskFinished(n);
        });
    },
  };

module16.registerCallableModule('AppRegistry', A);
module.exports = A;
