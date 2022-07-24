var module356 = require('./356'),
  module751 = require('./751'),
  module752 = require('./752'),
  module675 = require('./675'),
  c = (function () {
    function t(o) {
      module356.default(this, t);
      this._notifications = o;
    }

    module357.default(t, [
      {
        key: 'createChannel',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if (!(t instanceof module751.default)) throw new Error("AndroidNotifications:createChannel expects an 'AndroidChannel' but got type " + typeof t);
            return module675.getNativeModule(this._notifications).createChannel(t.build());
          }

          return Promise.resolve();
        },
      },
      {
        key: 'createChannelGroup',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if (!(t instanceof module752.default)) throw new Error("AndroidNotifications:createChannelGroup expects an 'AndroidChannelGroup' but got type " + typeof t);
            return module675.getNativeModule(this._notifications).createChannelGroup(t.build());
          }

          return Promise.resolve();
        },
      },
      {
        key: 'createChannelGroups',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if (!Array.isArray(t)) throw new Error("AndroidNotifications:createChannelGroups expects an 'Array' but got type " + typeof t);

            for (var n = [], o = 0; o < t.length; o++) {
              var l = t[o];
              if (!(l instanceof module752.default))
                throw new Error("AndroidNotifications:createChannelGroups expects array items of type 'AndroidChannelGroup' but got type " + typeof l);
              n.push(l.build());
            }

            return module675.getNativeModule(this._notifications).createChannelGroups(n);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'createChannels',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if (!Array.isArray(t)) throw new Error("AndroidNotifications:createChannels expects an 'Array' but got type " + typeof t);

            for (var n = [], o = 0; o < t.length; o++) {
              var f = t[o];
              if (!(f instanceof module751.default)) throw new Error("AndroidNotifications:createChannels expects array items of type 'AndroidChannel' but got type " + typeof f);
              n.push(f.build());
            }

            return module675.getNativeModule(this._notifications).createChannels(n);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'removeDeliveredNotificationsByTag',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:removeDeliveredNotificationsByTag expects an 'string' but got type " + typeof t);
            return module675.getNativeModule(this._notifications).removeDeliveredNotificationsByTag(t);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'deleteChannelGroup',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:deleteChannelGroup expects an 'string' but got type " + typeof t);
            return module675.getNativeModule(this._notifications).deleteChannelGroup(t);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'deleteChannel',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:deleteChannel expects an 'string' but got type " + typeof t);
            return module675.getNativeModule(this._notifications).deleteChannel(t);
          }

          return Promise.resolve();
        },
      },
      {
        key: 'getChannel',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:getChannel expects an 'string' but got type " + typeof t);
            return Promise.resolve(module675.getNativeModule(this._notifications).getChannel(t));
          }

          return Promise.resolve(null);
        },
      },
      {
        key: 'getChannels',
        value: function () {
          return 'android' === module2.Platform.OS ? Promise.resolve(module675.getNativeModule(this._notifications).getChannels()) : Promise.resolve([]);
        },
      },
      {
        key: 'getChannelGroup',
        value: function (t) {
          if ('android' === module2.Platform.OS) {
            if ('string' != typeof t) throw new Error("AndroidNotifications:getChannel expects an 'string' but got type " + typeof t);
            return Promise.resolve(module675.getNativeModule(this._notifications).getChannelGroup(t));
          }

          return Promise.resolve(null);
        },
      },
      {
        key: 'getChannelGroups',
        value: function () {
          return 'android' === module2.Platform.OS ? Promise.resolve(module675.getNativeModule(this._notifications).getChannelGroups()) : Promise.resolve([]);
        },
      },
    ]);
    return t;
  })();

exports.default = c;
