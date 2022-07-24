import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module670 = require('./670'),
  module674 = require('./674'),
  module676 = require('./676'),
  module675 = require('./675'),
  module672 = require('./672'),
  module748 = require('./748'),
  module751 = require('./751'),
  module752 = require('./752'),
  module753 = require('./753'),
  module754 = require('./754'),
  module749 = require('./749'),
  module755 = require('./755'),
  module750 = require('./750'),
  D = ['notifications_notification_displayed', 'notifications_notification_opened', 'notifications_notification_received'],
  k = 'RNFirebaseNotifications';

exports.MODULE_NAME = k;
var j = 'notifications';
exports.NAMESPACE = j;

class O {
  constructor(t) {
    var o;
    module356.default(this, h);
    (o = module358.default(
      this,
      module361.default(h).call(this, t, {
        events: D,
        hasCustomUrlSupport: false,
        moduleName: k,
        hasMultiAppSupport: false,
        namespace: j,
      })
    ))._android = new module753.default(module360.default(o));
    o._ios = new module754.default(module360.default(o));
    module670.SharedEventEmitter.addListener('notifications_notification_displayed', function (t) {
      module670.SharedEventEmitter.emit('onNotificationDisplayed', new module755.default(t, module360.default(o)));
    });
    module670.SharedEventEmitter.addListener('notifications_notification_opened', function (t) {
      module670.SharedEventEmitter.emit('onNotificationOpened', {
        action: t.action,
        notification: new module755.default(t.notification, module360.default(o)),
        results: t.results,
      });
    });
    module670.SharedEventEmitter.addListener('notifications_notification_received', function (t) {
      module670.SharedEventEmitter.emit('onNotification', new module755.default(t, module360.default(o)));
    });
    if ('ios' === module2.Platform.OS) module675.getNativeModule(module360.default(o)).jsInitialised();
    return o;
  }

  cancelAllNotifications() {
    return module675.getNativeModule(this).cancelAllNotifications();
  }

  cancelNotification(t) {
    return t ? module675.getNativeModule(this).cancelNotification(t) : Promise.reject(new Error('Notifications: cancelNotification expects a `notificationId`'));
  }

  displayNotification(t) {
    if (!(t instanceof module755.default)) return Promise.reject(new Error("Notifications:displayNotification expects a 'Notification' but got type " + typeof t));

    try {
      return module675.getNativeModule(this).displayNotification(t.build());
    } catch (t) {
      return Promise.reject(t);
    }
  }

  getBadge() {
    return module675.getNativeModule(this).getBadge();
  }

  getInitialNotification() {
    var t = this;
    return module675
      .getNativeModule(this)
      .getInitialNotification()
      .then(function (n) {
        return n
          ? {
              action: n.action,
              notification: new module755.default(n.notification, t),
              results: n.results,
            }
          : null;
      });
  }

  getScheduledNotifications() {
    return module675.getNativeModule(this).getScheduledNotifications();
  }

  onNotification(t) {
    var n,
      o = this;
    if (module672.isFunction(t)) n = t;
    else {
      if (!module672.isObject(t) || !module672.isFunction(t.next))
        throw new Error('Notifications.onNotification failed: First argument must be a function or observer object with a `next` function.');
      n = t.next;
    }
    module674.getLogger(this).info('Creating onNotification listener');
    module670.SharedEventEmitter.addListener('onNotification', n);
    return function () {
      module674.getLogger(o).info('Removing onNotification listener');
      module670.SharedEventEmitter.removeListener('onNotification', n);
    };
  }

  onNotificationDisplayed(t) {
    var n,
      o = this;
    if (module672.isFunction(t)) n = t;
    else {
      if (!module672.isObject(t) || !module672.isFunction(t.next))
        throw new Error('Notifications.onNotificationDisplayed failed: First argument must be a function or observer object with a `next` function.');
      n = t.next;
    }
    module674.getLogger(this).info('Creating onNotificationDisplayed listener');
    module670.SharedEventEmitter.addListener('onNotificationDisplayed', n);
    return function () {
      module674.getLogger(o).info('Removing onNotificationDisplayed listener');
      module670.SharedEventEmitter.removeListener('onNotificationDisplayed', n);
    };
  }

  onNotificationOpened(t) {
    var n,
      o = this;
    if (module672.isFunction(t)) n = t;
    else {
      if (!module672.isObject(t) || !module672.isFunction(t.next))
        throw new Error('Notifications.onNotificationOpened failed: First argument must be a function or observer object with a `next` function.');
      n = t.next;
    }
    module674.getLogger(this).info('Creating onNotificationOpened listener');
    module670.SharedEventEmitter.addListener('onNotificationOpened', n);
    return function () {
      module674.getLogger(o).info('Removing onNotificationOpened listener');
      module670.SharedEventEmitter.removeListener('onNotificationOpened', n);
    };
  }

  removeAllDeliveredNotifications() {
    return module675.getNativeModule(this).removeAllDeliveredNotifications();
  }

  removeDeliveredNotification(t) {
    return t ? module675.getNativeModule(this).removeDeliveredNotification(t) : Promise.reject(new Error('Notifications: removeDeliveredNotification expects a `notificationId`'));
  }

  scheduleNotification(t, n) {
    if (!(t instanceof module755.default)) return Promise.reject(new Error("Notifications:scheduleNotification expects a 'Notification' but got type " + typeof t));

    try {
      var o = t.build();
      o.schedule = n;
      return module675.getNativeModule(this).scheduleNotification(o);
    } catch (t) {
      return Promise.reject(t);
    }
  }

  setBadge(t) {
    return module675.getNativeModule(this).setBadge(t);
  }

  android() {
    return this._android;
  }

  ios() {
    return this._ios;
  }
}

export default O;
var x = {
  Android: {
    Action: module748.default,
    BadgeIconType: module750.BadgeIconType,
    Category: module750.Category,
    Channel: module751.default,
    ChannelGroup: module752.default,
    Defaults: module750.Defaults,
    GroupAlert: module750.GroupAlert,
    Importance: module750.Importance,
    Priority: module750.Priority,
    RemoteInput: module749.default,
    SemanticAction: module750.SemanticAction,
    Visibility: module750.Visibility,
  },
  Notification: module755.default,
};
exports.statics = x;
