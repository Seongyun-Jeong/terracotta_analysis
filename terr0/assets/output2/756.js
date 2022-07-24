var module404 = require('./404');

var module356 = require('./356'),
  module748 = module404(require('./748')),
  module750 = require('./750');

class h {
  constructor(n, s) {
    module356.default(this, t);
    this._notification = n;

    if (s) {
      this._actions = s.actions
        ? s.actions.map(function (t) {
            return module748.fromNativeAndroidAction(t);
          })
        : [];
      this._autoCancel = s.autoCancel;
      this._badgeIconType = s.badgeIconType;
      this._bigPicture = s.bigPicture;
      this._bigText = s.bigText;
      this._category = s.category;
      this._channelId = s.channelId;
      this._clickAction = s.clickAction;
      this._color = s.color;
      this._colorized = s.colorized;
      this._contentInfo = s.contentInfo;
      this._defaults = s.defaults;
      this._group = s.group;
      this._groupAlertBehaviour = s.groupAlertBehaviour;
      this._groupSummary = s.groupSummary;
      this._largeIcon = s.largeIcon;
      this._lights = s.lights;
      this._localOnly = s.localOnly;
      this._number = s.number;
      this._ongoing = s.ongoing;
      this._onlyAlertOnce = s.onlyAlertOnce;
      this._people = s.people;
      this._priority = s.priority;
      this._progress = s.progress;
      this._remoteInputHistory = s.remoteInputHistory;
      this._shortcutId = s.shortcutId;
      this._showWhen = s.showWhen;
      this._smallIcon = s.smallIcon;
      this._sortKey = s.sortKey;
      this._tag = s.tag;
      this._ticker = s.ticker;
      this._timeoutAfter = s.timeoutAfter;
      this._usesChronometer = s.usesChronometer;
      this._vibrate = s.vibrate;
      this._visibility = s.visibility;
      this._when = s.when;
    }

    this._actions = this._actions || [];
    this._people = this._people || [];
    this._smallIcon = this._smallIcon || {
      icon: 'ic_launcher',
    };
  }

  addAction(t) {
    if (!(t instanceof module748.default)) throw new Error("AndroidNotification:addAction expects an 'AndroidAction' but got type " + typeof t);

    this._actions.push(t);

    return this._notification;
  }

  addPerson(t) {
    this._people.push(t);

    return this._notification;
  }

  setAutoCancel(t) {
    this._autoCancel = t;
    return this._notification;
  }

  setBadgeIconType(t) {
    if (!Object.values(module750.BadgeIconType).includes(t)) throw new Error('AndroidNotification:setBadgeIconType Invalid BadgeIconType: ' + t);
    this._badgeIconType = t;
    return this._notification;
  }

  setBigPicture(t, n, o, s) {
    this._bigPicture = {
      contentTitle: o,
      largeIcon: n,
      picture: t,
      summaryText: s,
    };
    return this._notification;
  }

  setBigText(t, n, o) {
    this._bigText = {
      contentTitle: n,
      summaryText: o,
      text: t,
    };
    return this._notification;
  }

  setCategory(t) {
    if (!Object.values(module750.Category).includes(t)) throw new Error('AndroidNotification:setCategory Invalid Category: ' + t);
    this._category = t;
    return this._notification;
  }

  setChannelId(t) {
    this._channelId = t;
    return this._notification;
  }

  setClickAction(t) {
    this._clickAction = t;
    return this._notification;
  }

  setColor(t) {
    this._color = t;
    return this._notification;
  }

  setColorized(t) {
    this._colorized = t;
    return this._notification;
  }

  setContentInfo(t) {
    this._contentInfo = t;
    return this._notification;
  }

  setDefaults(t) {
    this._defaults = t;
    return this._notification;
  }

  setGroup(t) {
    this._group = t;
    return this._notification;
  }

  setGroupAlertBehaviour(t) {
    if (!Object.values(module750.GroupAlert).includes(t)) throw new Error('AndroidNotification:setGroupAlertBehaviour Invalid GroupAlert: ' + t);
    this._groupAlertBehaviour = t;
    return this._notification;
  }

  setGroupSummary(t) {
    this._groupSummary = t;
    return this._notification;
  }

  setLargeIcon(t) {
    this._largeIcon = t;
    return this._notification;
  }

  setLights(t, n, o) {
    this._lights = {
      argb: t,
      onMs: n,
      offMs: o,
    };
    return this._notification;
  }

  setLocalOnly(t) {
    this._localOnly = t;
    return this._notification;
  }

  setNumber(t) {
    this._number = t;
    return this._notification;
  }

  setOngoing(t) {
    this._ongoing = t;
    return this._notification;
  }

  setOnlyAlertOnce(t) {
    this._onlyAlertOnce = t;
    return this._notification;
  }

  setPriority(t) {
    if (!Object.values(module750.Priority).includes(t)) throw new Error('AndroidNotification:setPriority Invalid Priority: ' + t);
    this._priority = t;
    return this._notification;
  }

  setProgress(t, n, o) {
    this._progress = {
      max: t,
      progress: n,
      indeterminate: o,
    };
    return this._notification;
  }

  setRemoteInputHistory(t) {
    this._remoteInputHistory = t;
    return this._notification;
  }

  setShortcutId(t) {
    this._shortcutId = t;
    return this._notification;
  }

  setShowWhen(t) {
    this._showWhen = t;
    return this._notification;
  }

  setSmallIcon(t, n) {
    this._smallIcon = {
      icon: t,
      level: n,
    };
    return this._notification;
  }

  setSortKey(t) {
    this._sortKey = t;
    return this._notification;
  }

  setTag(t) {
    this._tag = t;
    return this._notification;
  }

  setTicker(t) {
    this._ticker = t;
    return this._notification;
  }

  setTimeoutAfter(t) {
    this._timeoutAfter = t;
    return this._notification;
  }

  setUsesChronometer(t) {
    this._usesChronometer = t;
    return this._notification;
  }

  setVibrate(t) {
    this._vibrate = t;
    return this._notification;
  }

  setVisibility(t) {
    this._visibility = t;
    return this._notification;
  }

  setWhen(t) {
    this._when = t;
    return this._notification;
  }

  build() {
    if (!this._channelId) throw new Error('AndroidNotification: Missing required `channelId` property');
    if (!this._smallIcon) throw new Error('AndroidNotification: Missing required `smallIcon` property');
    return {
      actions: this._actions.map(function (t) {
        return t.build();
      }),
      autoCancel: this._autoCancel,
      badgeIconType: this._badgeIconType,
      bigPicture: this._bigPicture,
      bigText: this._bigText,
      category: this._category,
      channelId: this._channelId,
      clickAction: this._clickAction,
      color: this._color,
      colorized: this._colorized,
      contentInfo: this._contentInfo,
      defaults: this._defaults,
      group: this._group,
      groupAlertBehaviour: this._groupAlertBehaviour,
      groupSummary: this._groupSummary,
      largeIcon: this._largeIcon,
      lights: this._lights,
      localOnly: this._localOnly,
      number: this._number,
      ongoing: this._ongoing,
      onlyAlertOnce: this._onlyAlertOnce,
      people: this._people,
      priority: this._priority,
      progress: this._progress,
      remoteInputHistory: this._remoteInputHistory,
      shortcutId: this._shortcutId,
      showWhen: this._showWhen,
      smallIcon: this._smallIcon,
      sortKey: this._sortKey,
      tag: this._tag,
      ticker: this._ticker,
      timeoutAfter: this._timeoutAfter,
      usesChronometer: this._usesChronometer,
      vibrate: this._vibrate,
      visibility: this._visibility,
      when: this._when,
    };
  }

  actions() {
    return this._actions;
  }

  autoCancel() {
    return this._autoCancel;
  }

  badgeIconType() {
    return this._badgeIconType;
  }

  bigPicture() {
    return this._bigPicture;
  }

  bigText() {
    return this._bigText;
  }

  category() {
    return this._category;
  }

  channelId() {
    return this._channelId;
  }

  clickAction() {
    return this._clickAction;
  }

  color() {
    return this._color;
  }

  colorized() {
    return this._colorized;
  }

  contentInfo() {
    return this._contentInfo;
  }

  defaults() {
    return this._defaults;
  }

  group() {
    return this._group;
  }

  groupAlertBehaviour() {
    return this._groupAlertBehaviour;
  }

  groupSummary() {
    return this._groupSummary;
  }

  largeIcon() {
    return this._largeIcon;
  }

  lights() {
    return this._lights;
  }

  localOnly() {
    return this._localOnly;
  }

  number() {
    return this._number;
  }

  ongoing() {
    return this._ongoing;
  }

  onlyAlertOnce() {
    return this._onlyAlertOnce;
  }

  people() {
    return this._people;
  }

  priority() {
    return this._priority;
  }

  progress() {
    return this._progress;
  }

  remoteInputHistory() {
    return this._remoteInputHistory;
  }

  shortcutId() {
    return this._shortcutId;
  }

  showWhen() {
    return this._showWhen;
  }

  smallIcon() {
    return this._smallIcon;
  }

  sortKey() {
    return this._sortKey;
  }

  tag() {
    return this._tag;
  }

  ticker() {
    return this._ticker;
  }

  timeoutAfter() {
    return this._timeoutAfter;
  }

  usesChronometer() {
    return this._usesChronometer;
  }

  vibrate() {
    return this._vibrate;
  }

  visibility() {
    return this._visibility;
  }

  when() {
    return this._when;
  }
}

export default h;
