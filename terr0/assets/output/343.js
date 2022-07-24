var module22 = require('./22'),
  module117 = require('./117'),
  module8 = require('./8').PushNotificationManager,
  module3 = require('./3'),
  s = new module117(module8),
  u = new Map();

class f {
  constructor(o) {
    var c = this;
    module22(this, n);
    this._data = {};
    this._remoteNotificationCompleteCallbackCalled = false;
    this._isRemote = o.remote;
    if (this._isRemote) this._notificationId = o.notificationId;
    if (o.remote)
      Object.keys(o).forEach(function (t) {
        var n = o[t];

        if ('aps' === t) {
          c._alert = n.alert;
          c._sound = n.sound;
          c._badgeCount = n.badge;
          c._category = n.category;
          c._contentAvailable = n['content-available'];
          c._threadID = n['thread-id'];
        } else c._data[t] = n;
      });
    else {
      this._badgeCount = o.applicationIconBadgeNumber;
      this._sound = o.soundName;
      this._alert = o.alertBody;
      this._data = o.userInfo;
      this._category = o.category;
    }
  }

  finish(t) {
    if (this._isRemote && this._notificationId && !this._remoteNotificationCompleteCallbackCalled) {
      this._remoteNotificationCompleteCallbackCalled = true;
      module8.onFinishRemoteNotification(this._notificationId, t);
    }
  }

  getMessage() {
    return this._alert;
  }

  getSound() {
    return this._sound;
  }

  getCategory() {
    return this._category;
  }

  getAlert() {
    return this._alert;
  }

  getContentAvailable() {
    return this._contentAvailable;
  }

  getBadgeCount() {
    return this._badgeCount;
  }

  getData() {
    return this._data;
  }

  getThreadID() {
    return this._threadID;
  }
}

f.FetchResult = {
  NewData: 'UIBackgroundFetchResultNewData',
  NoData: 'UIBackgroundFetchResultNoData',
  ResultFailed: 'UIBackgroundFetchResultFailed',
};
module.exports = f;
