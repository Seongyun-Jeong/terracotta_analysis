var module356 = require('./356'),
  module750 = require('./750');

class u {
  constructor(s, u, h) {
    if ((module356.default(this, t), !Object.values(module750.Importance).includes(h))) throw new Error('AndroidChannel() Invalid Importance: ' + h);
    this._channelId = s;
    this._name = u;
    this._importance = h;
  }

  enableLights(t) {
    this._lightsEnabled = t;
    return this;
  }

  enableVibration(t) {
    this._vibrationEnabled = t;
    return this;
  }

  setBypassDnd(t) {
    this._bypassDnd = t;
    return this;
  }

  setDescription(t) {
    this._description = t;
    return this;
  }

  setGroup(t) {
    this._group = t;
    return this;
  }

  setLightColor(t) {
    this._lightColor = t;
    return this;
  }

  setLockScreenVisibility(t) {
    if (!Object.values(module750.Visibility).includes(t)) throw new Error('AndroidChannel:setLockScreenVisibility Invalid Visibility: ' + t);
    this._lockScreenVisibility = t;
    return this;
  }

  setShowBadge(t) {
    this._showBadge = t;
    return this;
  }

  setSound(t) {
    this._sound = t;
    return this;
  }

  setVibrationPattern(t) {
    this._vibrationPattern = t;
    return this;
  }

  build() {
    if (!this._channelId) throw new Error('AndroidChannel: Missing required `channelId` property');
    if (!this._importance) throw new Error('AndroidChannel: Missing required `importance` property');
    if (!this._name) throw new Error('AndroidChannel: Missing required `name` property');
    return {
      bypassDnd: this._bypassDnd,
      channelId: this._channelId,
      description: this._description,
      group: this._group,
      importance: this._importance,
      lightColor: this._lightColor,
      lightsEnabled: this._lightsEnabled,
      lockScreenVisibility: this._lockScreenVisibility,
      name: this._name,
      showBadge: this._showBadge,
      sound: this._sound,
      vibrationEnabled: this._vibrationEnabled,
      vibrationPattern: this._vibrationPattern,
    };
  }

  bypassDnd() {
    return this._bypassDnd;
  }

  channelId() {
    return this._channelId;
  }

  description() {
    return this._description;
  }

  group() {
    return this._group;
  }

  importance() {
    return this._importance;
  }

  lightColor() {
    return this._lightColor;
  }

  lightsEnabled() {
    return this._lightsEnabled;
  }

  lockScreenVisibility() {
    return this._lockScreenVisibility;
  }

  name() {
    return this._name;
  }

  showBadge() {
    return this._showBadge;
  }

  sound() {
    return this._sound;
  }

  vibrationEnabled() {
    return this._vibrationEnabled;
  }

  vibrationPattern() {
    return this._vibrationPattern;
  }
}

export default u;
