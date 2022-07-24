require('./46');

require('./43');

require('./69');

var module22 = require('./22'),
  module3 = require('./3'),
  module8 = require('./8'),
  l = module8.ShareModule,
  u = (function () {
    function s() {
      module22(this, s);
    }

    module23(s, null, [
      {
        key: 'share',
        value: function (t) {
          var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
          module3('object' == typeof t && null !== t, 'Content to share must be a valid object');
          module3('string' == typeof t.url || 'string' == typeof t.message, 'At least one of URL and message is required');
          module3('object' == typeof n && null !== n, 'Options must be a valid object');
          module3(!t.title || 'string' == typeof t.title, 'Invalid title: title should be a string.');
          return l.share(t, n.dialogTitle);
        },
      },
      {
        key: 'sharedAction',
        get: function () {
          return 'sharedAction';
        },
      },
      {
        key: 'dismissedAction',
        get: function () {
          return 'dismissedAction';
        },
      },
    ]);
    return s;
  })();

module.exports = u;
