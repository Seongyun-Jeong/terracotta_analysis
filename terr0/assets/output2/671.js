var module2 = require('./2'),
  o = {
    admob: 'Firebase/AdMob',
    analytics: 'Firebase/Analytics',
    auth: 'Firebase/Auth',
    config: 'Firebase/RemoteConfig',
    database: 'Firebase/Database',
    links: 'Firebase/DynamicLinks',
    messaging: 'Firebase/Messaging',
    perf: 'Firebase/Performance',
    storage: 'Firebase/Storage',
  },
  s = {
    admob: 'ads',
  },
  t = {
    1: {
      code: 'SERVICE_MISSING',
      message: 'Google Play services is missing on this device.',
    },
    2: {
      code: 'SERVICE_VERSION_UPDATE_REQUIRED',
      message: 'The installed version of Google Play services on this device is out of date.',
    },
    3: {
      code: 'SERVICE_DISABLED',
      message: 'The installed version of Google Play services has been disabled on this device.',
    },
    9: {
      code: 'SERVICE_INVALID',
      message: 'The version of the Google Play services installed on this device is not authentic.',
    },
    18: {
      code: 'SERVICE_UPDATING',
      message: 'Google Play services is currently being updated on this device.',
    },
    19: {
      code: 'SERVICE_MISSING_PERMISSION',
      message: "Google Play service doesn't have one or more required permissions.",
    },
  },
  l = {
    OPTIONS: {
      logLevel: 'warn',
      errorOnMissingPlayServices: true,
      promptOnMissingPlayServices: true,
    },
    FLAGS: {
      checkedPlayServices: false,
    },
    STRINGS: {
      WARN_INITIALIZE_DEPRECATION:
        "Deprecation: Calling 'initializeApp()' for apps that are already initialised natively is unnecessary, use 'firebase.app()' instead to access the already initialized default app instance.",

      get ERROR_MISSING_CORE() {
        return 'ios' === module2.Platform.OS
          ? 'RNFirebase core module was not found natively on iOS, ensure you have correctly included the RNFirebase pod in your projects `Podfile` and have run `pod install`.\r\n\r\n See http://invertase.link/ios for the ios setup guide.'
          : 'RNFirebase core module was not found natively on Android, ensure you have correctly added the RNFirebase and Firebase gradle dependencies to your `android/app/build.gradle` file.\r\n\r\n See http://invertase.link/android for the android setup guide.';
      },

      ERROR_INIT_OBJECT: 'Firebase.initializeApp(options <-- requires a valid configuration object.',
      ERROR_INIT_STRING_NAME: 'Firebase.initializeApp(options, name <-- requires a valid string value.',
      ERROR_INIT_SERVICE_URL_OR_REGION_UNSUPPORTED: function (n) {
        return n + ' does not support a URL or region as a param, please pass in an app.';
      },
      ERROR_MISSING_CB: function (n) {
        return 'Missing required callback for method ' + n + '().';
      },
      ERROR_MISSING_ARG: function (n, o) {
        return "Missing required argument of type '" + n + "' for method '" + o + "()'.";
      },
      ERROR_MISSING_ARG_NAMED: function (n, o, s) {
        return "Missing required argument '" + n + "' of type '" + o + "' for method '" + s + "()'.";
      },
      ERROR_ARG_INVALID_VALUE: function (n, o, s) {
        return "Invalid value for argument '" + n + "' expected value '" + o + "' but got '" + s + "'.";
      },
      ERROR_PROTECTED_PROP: function (n) {
        return "Property '" + n + "' is protected and can not be overridden by extendApp.";
      },
      ERROR_MISSING_MODULE: function (t, l) {
        var u = 'firebase.' + t + '()';
        return 'ios' === module2.Platform.OS
          ? "You attempted to use a firebase module that's not installed natively on your iOS project by calling " +
              u +
              ".\r\n\r\nEnsure you have the required Firebase iOS SDK pod for this module included in your Podfile, in this instance confirm you've added \"pod '" +
              o[t] +
              '\'" to your Podfile\r\n\r\nSee http://invertase.link/ios for full setup instructions.'
          : "You attempted to use a firebase module that's not installed on your Android project by calling " +
              u +
              '.\r\n\r\nEnsure you have:\r\n\r\n1) Installed the required Firebase Android SDK dependency ' +
              ("'com.google.firebase:firebase-" + (s[t] || t) + "'") +
              " in your 'android/app/build.gradle' file.\r\n\r\n2) Imported the " +
              ("'io.invertase.firebase." + t + '.' + l + "Package'") +
              " module in your 'MainApplication.java' file.\r\n\r\n3) Added the " +
              ("'new " + l + "Package()'") +
              " line inside of the RN 'getPackages()' method list.\r\n\r\nSee http://invertase.link/android for full setup instructions.";
      },
      ERROR_APP_NOT_INIT: function (n) {
        return 'The [' + n + '] firebase app has not been initialized!';
      },
      ERROR_MISSING_OPT: function (n) {
        return "Failed to initialize app. FirebaseOptions missing or invalid '" + n + "' property.";
      },
      ERROR_NOT_APP: function (n) {
        return 'Invalid App instance passed to firebase.' + n + '(app <--).';
      },
      ERROR_UNSUPPORTED_CLASS_METHOD: function (n, o) {
        return n + '.' + o + '() is unsupported by the native Firebase SDKs.';
      },
      ERROR_UNSUPPORTED_CLASS_PROPERTY: function (n, o) {
        return n + '.' + o + ' is unsupported by the native Firebase SDKs.';
      },
      ERROR_UNSUPPORTED_MODULE_METHOD: function (n, o) {
        return 'firebase.' + n + '().' + o + '() is unsupported by the native Firebase SDKs.';
      },
      ERROR_PLAY_SERVICES: function (n) {
        var o = t[n],
          s = 'Google Play Services is required to run firebase services on android but a valid installation was not found on this device.';
        if (2 === n) s = 'Google Play Services is out of date and may cause some firebase services like authentication to hang when used. It is recommended that you update it.';
        return (
          s +
          '\r\n\r\n-------------------------\r\n' +
          (o ? o.code + ': ' + o.message + ' (code ' + n + ')' : 'A specific play store availability reason reason was not available (unknown code: ' + n + ')') +
          '\r\n-------------------------\r\n\r\nFor more information on how to resolve this issue, configure Play Services checks or for guides on how to validate Play Services on your users devices see the link below:\r\n\r\nhttp://invertase.link/play-services'
        );
      },
    },
  };

export default l;
