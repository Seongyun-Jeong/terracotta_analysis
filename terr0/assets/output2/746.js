var module356 = require('./356'),
  module672 = require('./672');

class u {
  constructor(n) {
    module356.default(this, t);

    if (n) {
      this._collapseKey = n.collapseKey;
      this._data = n.data;
      this._from = n.from;
      this._messageId = n.messageId;
      this._messageType = n.messageType;
      this._sentTime = n.sentTime;
    }

    this._data = this._data || {};
    this._messageId = this._messageId || module672.generatePushID();
    this._ttl = 3600;
  }

  setCollapseKey(t) {
    this._collapseKey = t;
    return this;
  }

  setData() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    if (!module672.isObject(t)) throw new Error("RemoteMessage:setData expects an object but got type '" + typeof t + "'.");
    this._data = t;
    return this;
  }

  setMessageId(t) {
    this._messageId = t;
    return this;
  }

  setMessageType(t) {
    this._messageType = t;
    return this;
  }

  setTo(t) {
    this._to = t;
    return this;
  }

  setTtl(t) {
    this._ttl = t;
    return this;
  }

  build() {
    if (!this._data) throw new Error('RemoteMessage: Missing required `data` property');
    if (!this._messageId) throw new Error('RemoteMessage: Missing required `messageId` property');
    if (!this._to) throw new Error('RemoteMessage: Missing required `to` property');
    if (!this._ttl) throw new Error('RemoteMessage: Missing required `ttl` property');
    return {
      collapseKey: this._collapseKey,
      data: this._data,
      messageId: this._messageId,
      messageType: this._messageType,
      to: this._to,
      ttl: this._ttl,
    };
  }

  collapseKey() {
    return this._collapseKey;
  }

  data() {
    return this._data;
  }

  from() {
    return this._from;
  }

  messageId() {
    return this._messageId;
  }

  messageType() {
    return this._messageType;
  }

  sentTime() {
    return this._sentTime;
  }

  to() {
    return this._to;
  }

  ttl() {
    return this._ttl;
  }
}

export default u;
