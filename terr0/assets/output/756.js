var module404 = require('./404');

var module356 = require('./356'),
  module748 = module404(require('./748')),
  module750 = require('./750'),
  h = (function () {
    function t(n, s) {
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

    module357.default(t, [
      {
        key: 'addAction',
        value: function (t) {
          if (!(t instanceof module748.default)) throw new Error("AndroidNotification:addAction expects an 'AndroidAction' but got type " + typeof t);

          this._actions.push(t);

          return this._notification;
        },
      },
      {
        key: 'addPerson',
        value: function (t) {
          this._people.push(t);

          return this._notification;
        },
      },
      {
        key: 'setAutoCancel',
        value: function (t) {
          this._autoCancel = t;
          return this._notification;
        },
      },
      {
        key: 'setBadgeIconType',
        value: function (t) {
          if (!Object.values(module750.BadgeIconType).includes(t)) throw new Error('AndroidNotification:setBadgeIconType Invalid BadgeIconType: ' + t);
          this._badgeIconType = t;
          return this._notification;
        },
      },
      {
        key: 'setBigPicture',
        value: function (t, n, o, s) {
          this._bigPicture = {
            contentTitle: o,
            largeIcon: n,
            picture: t,
            summaryText: s,
          };
          return this._notification;
        },
      },
      {
        key: 'setBigText',
        value: function (t, n, o) {
          this._bigText = {
            contentTitle: n,
            summaryText: o,
            text: t,
          };
          return this._notification;
        },
      },
      {
        key: 'setCategory',
        value: function (t) {
          if (!Object.values(module750.Category).includes(t)) throw new Error('AndroidNotification:setCategory Invalid Category: ' + t);
          this._category = t;
          return this._notification;
        },
      },
      {
        key: 'setChannelId',
        value: function (t) {
          this._channelId = t;
          return this._notification;
        },
      },
      {
        key: 'setClickAction',
        value: function (t) {
          this._clickAction = t;
          return this._notification;
        },
      },
      {
        key: 'setColor',
        value: function (t) {
          this._color = t;
          return this._notification;
        },
      },
      {
        key: 'setColorized',
        value: function (t) {
          this._colorized = t;
          return this._notification;
        },
      },
      {
        key: 'setContentInfo',
        value: function (t) {
          this._contentInfo = t;
          return this._notification;
        },
      },
      {
        key: 'setDefaults',
        value: function (t) {
          this._defaults = t;
          return this._notification;
        },
      },
      {
        key: 'setGroup',
        value: function (t) {
          this._group = t;
          return this._notification;
        },
      },
      {
        key: 'setGroupAlertBehaviour',
        value: function (t) {
          if (!Object.values(module750.GroupAlert).includes(t)) throw new Error('AndroidNotification:setGroupAlertBehaviour Invalid GroupAlert: ' + t);
          this._groupAlertBehaviour = t;
          return this._notification;
        },
      },
      {
        key: 'setGroupSummary',
        value: function (t) {
          this._groupSummary = t;
          return this._notification;
        },
      },
      {
        key: 'setLargeIcon',
        value: function (t) {
          this._largeIcon = t;
          return this._notification;
        },
      },
      {
        key: 'setLights',
        value: function (t, n, o) {
          this._lights = {
            argb: t,
            onMs: n,
            offMs: o,
          };
          return this._notification;
        },
      },
      {
        key: 'setLocalOnly',
        value: function (t) {
          this._localOnly = t;
          return this._notification;
        },
      },
      {
        key: 'setNumber',
        value: function (t) {
          this._number = t;
          return this._notification;
        },
      },
      {
        key: 'setOngoing',
        value: function (t) {
          this._ongoing = t;
          return this._notification;
        },
      },
      {
        key: 'setOnlyAlertOnce',
        value: function (t) {
          this._onlyAlertOnce = t;
          return this._notification;
        },
      },
      {
        key: 'setPriority',
        value: function (t) {
          if (!Object.values(module750.Priority).includes(t)) throw new Error('AndroidNotification:setPriority Invalid Priority: ' + t);
          this._priority = t;
          return this._notification;
        },
      },
      {
        key: 'setProgress',
        value: function (t, n, o) {
          this._progress = {
            max: t,
            progress: n,
            indeterminate: o,
          };
          return this._notification;
        },
      },
      {
        key: 'setRemoteInputHistory',
        value: function (t) {
          this._remoteInputHistory = t;
          return this._notification;
        },
      },
      {
        key: 'setShortcutId',
        value: function (t) {
          this._shortcutId = t;
          return this._notification;
        },
      },
      {
        key: 'setShowWhen',
        value: function (t) {
          this._showWhen = t;
          return this._notification;
        },
      },
      {
        key: 'setSmallIcon',
        value: function (t, n) {
          this._smallIcon = {
            icon: t,
            level: n,
          };
          return this._notification;
        },
      },
      {
        key: 'setSortKey',
        value: function (t) {
          this._sortKey = t;
          return this._notification;
        },
      },
      {
        key: 'setTag',
        value: function (t) {
          this._tag = t;
          return this._notification;
        },
      },
      {
        key: 'setTicker',
        value: function (t) {
          this._ticker = t;
          return this._notification;
        },
      },
      {
        key: 'setTimeoutAfter',
        value: function (t) {
          this._timeoutAfter = t;
          return this._notification;
        },
      },
      {
        key: 'setUsesChronometer',
        value: function (t) {
          this._usesChronometer = t;
          return this._notification;
        },
      },
      {
        key: 'setVibrate',
        value: function (t) {
          this._vibrate = t;
          return this._notification;
        },
      },
      {
        key: 'setVisibility',
        value: function (t) {
          this._visibility = t;
          return this._notification;
        },
      },
      {
        key: 'setWhen',
        value: function (t) {
          this._when = t;
          return this._notification;
        },
      },
      {
        key: 'build',
        value: function () {
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
        },
      },
      {
        key: 'actions',
        get: function () {
          return this._actions;
        },
      },
      {
        key: 'autoCancel',
        get: function () {
          return this._autoCancel;
        },
      },
      {
        key: 'badgeIconType',
        get: function () {
          return this._badgeIconType;
        },
      },
      {
        key: 'bigPicture',
        get: function () {
          return this._bigPicture;
        },
      },
      {
        key: 'bigText',
        get: function () {
          return this._bigText;
        },
      },
      {
        key: 'category',
        get: function () {
          return this._category;
        },
      },
      {
        key: 'channelId',
        get: function () {
          return this._channelId;
        },
      },
      {
        key: 'clickAction',
        get: function () {
          return this._clickAction;
        },
      },
      {
        key: 'color',
        get: function () {
          return this._color;
        },
      },
      {
        key: 'colorized',
        get: function () {
          return this._colorized;
        },
      },
      {
        key: 'contentInfo',
        get: function () {
          return this._contentInfo;
        },
      },
      {
        key: 'defaults',
        get: function () {
          return this._defaults;
        },
      },
      {
        key: 'group',
        get: function () {
          return this._group;
        },
      },
      {
        key: 'groupAlertBehaviour',
        get: function () {
          return this._groupAlertBehaviour;
        },
      },
      {
        key: 'groupSummary',
        get: function () {
          return this._groupSummary;
        },
      },
      {
        key: 'largeIcon',
        get: function () {
          return this._largeIcon;
        },
      },
      {
        key: 'lights',
        get: function () {
          return this._lights;
        },
      },
      {
        key: 'localOnly',
        get: function () {
          return this._localOnly;
        },
      },
      {
        key: 'number',
        get: function () {
          return this._number;
        },
      },
      {
        key: 'ongoing',
        get: function () {
          return this._ongoing;
        },
      },
      {
        key: 'onlyAlertOnce',
        get: function () {
          return this._onlyAlertOnce;
        },
      },
      {
        key: 'people',
        get: function () {
          return this._people;
        },
      },
      {
        key: 'priority',
        get: function () {
          return this._priority;
        },
      },
      {
        key: 'progress',
        get: function () {
          return this._progress;
        },
      },
      {
        key: 'remoteInputHistory',
        get: function () {
          return this._remoteInputHistory;
        },
      },
      {
        key: 'shortcutId',
        get: function () {
          return this._shortcutId;
        },
      },
      {
        key: 'showWhen',
        get: function () {
          return this._showWhen;
        },
      },
      {
        key: 'smallIcon',
        get: function () {
          return this._smallIcon;
        },
      },
      {
        key: 'sortKey',
        get: function () {
          return this._sortKey;
        },
      },
      {
        key: 'tag',
        get: function () {
          return this._tag;
        },
      },
      {
        key: 'ticker',
        get: function () {
          return this._ticker;
        },
      },
      {
        key: 'timeoutAfter',
        get: function () {
          return this._timeoutAfter;
        },
      },
      {
        key: 'usesChronometer',
        get: function () {
          return this._usesChronometer;
        },
      },
      {
        key: 'vibrate',
        get: function () {
          return this._vibrate;
        },
      },
      {
        key: 'visibility',
        get: function () {
          return this._visibility;
        },
      },
      {
        key: 'when',
        get: function () {
          return this._when;
        },
      },
    ]);
    return t;
  })();

exports.default = h;
