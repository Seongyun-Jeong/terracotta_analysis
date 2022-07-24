import module2 from './2';

var module356 = require('./356'),
  module756 = require('./756'),
  module757 = require('./757'),
  module672 = require('./672');

class _ {
  constructor(o, s) {
    module356.default(this, t);

    if (o) {
      this._body = o.body;
      this._data = o.data;
      this._notificationId = o.notificationId;
      this._sound = o.sound;
      this._subtitle = o.subtitle;
      this._title = o.title;
    }

    this._android = new module756.default(this, o && o.android);
    this._ios = new module757.default(this, s, o && o.ios);
    this._data = this._data || {};
    this._notificationId = this._notificationId || module672.generatePushID();
  }

  setBody(t) {
    this._body = t;
    return this;
  }

  setData() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    if (!module672.isObject(t)) throw new Error("Notification:withData expects an object but got type '" + typeof t + "'.");
    this._data = t;
    return this;
  }

  setNotificationId(t) {
    this._notificationId = t;
    return this;
  }

  setSound(t) {
    this._sound = t;
    return this;
  }

  setSubtitle(t) {
    this._subtitle = t;
    return this;
  }

  setTitle(t) {
    this._title = t;
    return this;
  }

  build() {
    if (!this._notificationId) throw new Error('Notification: Missing required `notificationId` property');
    return {
      android: 'android' === module2.Platform.OS ? this._android.build() : undefined,
      body: this._body,
      data: this._data,
      ios: 'ios' === module2.Platform.OS ? this._ios.build() : undefined,
      notificationId: this._notificationId,
      sound: this._sound,
      subtitle: this._subtitle,
      title: this._title,
    };
  }

  android() {
    return this._android;
  }

  body() {
    return this._body;
  }

  data() {
    return this._data;
  }

  ios() {
    return this._ios;
  }

  notificationId() {
    return this._notificationId;
  }

  sound() {
    return this._sound;
  }

  subtitle() {
    return this._subtitle;
  }

  title() {
    return this._title;
  }
}

export default _;
