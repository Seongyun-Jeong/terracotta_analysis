import regeneratorRuntime from 'regenerator-runtime';

var module22 = require('./22'),
  module8 = require('./8');

class A {
  constructor() {
    module22(this, A);
    this.PERMISSIONS = {
      READ_CALENDAR: 'android.permission.READ_CALENDAR',
      WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
      CAMERA: 'android.permission.CAMERA',
      READ_CONTACTS: 'android.permission.READ_CONTACTS',
      WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
      GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS',
      ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
      ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
      RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
      READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
      CALL_PHONE: 'android.permission.CALL_PHONE',
      READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
      WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
      ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
      USE_SIP: 'android.permission.USE_SIP',
      PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
      BODY_SENSORS: 'android.permission.BODY_SENSORS',
      SEND_SMS: 'android.permission.SEND_SMS',
      RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
      READ_SMS: 'android.permission.READ_SMS',
      RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
      RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
      READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
      WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',
    };
    this.RESULTS = {
      GRANTED: 'granted',
      DENIED: 'denied',
      NEVER_ASK_AGAIN: 'never_ask_again',
    };
  }

  checkPermission(n) {
    console.warn('"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead');
    return module8.PermissionsAndroid.checkPermission(n);
  }

  check(n) {
    return module8.PermissionsAndroid.checkPermission(n);
  }

  requestPermission(s, o) {
    var module8;
    return regeneratorRuntime.async(
      function (A) {
        for (;;)
          switch ((A.prev = A.next)) {
            case 0:
              console.warn('"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead');
              A.next = 3;
              return regeneratorRuntime.awrap(this.request(s, o));

            case 3:
              module8 = A.sent;
              return A.abrupt('return', module8 === this.RESULTS.GRANTED);

            case 5:
            case 'end':
              return A.stop();
          }
      },
      null,
      this
    );
  }

  request(s, o) {
    return regeneratorRuntime.async(function (A) {
      for (;;)
        switch ((A.prev = A.next)) {
          case 0:
            if (!o) {
              A.next = 6;
              break;
            }

            A.next = 3;
            return regeneratorRuntime.awrap(module8.PermissionsAndroid.shouldShowRequestPermissionRationale(s));

          case 3:
            if (!A.sent) {
              A.next = 6;
              break;
            }

            return A.abrupt(
              'return',
              new Promise(function (n, A) {
                module8.DialogManagerAndroid.showAlert(
                  o,
                  function () {
                    return A(new Error('Error showing rationale'));
                  },
                  function () {
                    return n(module8.PermissionsAndroid.requestPermission(s));
                  }
                );
              })
            );

          case 6:
            return A.abrupt('return', module8.PermissionsAndroid.requestPermission(s));

          case 7:
          case 'end':
            return A.stop();
        }
    });
  }

  requestMultiple(n) {
    return module8.PermissionsAndroid.requestMultiplePermissions(n);
  }
}

A = new A();
module.exports = A;
