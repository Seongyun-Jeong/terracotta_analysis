var module356 = require('./356'),
  module672 = require('./672'),
  module674 = require('./674'),
  module675 = require('./675');

class u {
  constructor(o, u, f) {
    if (
      (module356.default(this, t),
      (this._notification = o),
      f
        ? ((this._alertAction = f.alertAction),
          (this._attachments = f.attachments || []),
          (this._badge = f.badge),
          (this._category = f.category),
          (this._hasAction = f.hasAction),
          (this._launchImage = f.launchImage),
          (this._threadIdentifier = f.threadIdentifier))
        : (this._attachments = []),
      !module672.isIOS || !u || !u.ios)
    )
      return this;

    var l = function (t) {
      var n = o.notificationId;

      if (n && u) {
        module674.getLogger(u).debug('Completion handler called for notificationId=' + n);
        module675.getNativeModule(u).complete(n, t);
      }
    };

    if (u.ios.shouldAutoComplete) l(u.ios.backgroundFetchResult.noData);
    else this._complete = l;
  }

  addAttachment(t, n, o) {
    this._attachments.push({
      identifier: t,
      options: o,
      url: n,
    });

    return this._notification;
  }

  setAlertAction(t) {
    this._alertAction = t;
    return this._notification;
  }

  setBadge(t) {
    this._badge = t;
    return this._notification;
  }

  setCategory(t) {
    this._category = t;
    return this._notification;
  }

  setHasAction(t) {
    this._hasAction = t;
    return this._notification;
  }

  setLaunchImage(t) {
    this._launchImage = t;
    return this._notification;
  }

  setThreadIdentifier(t) {
    this._threadIdentifier = t;
    return this._notification;
  }

  build() {
    return {
      alertAction: this._alertAction,
      attachments: this._attachments,
      badge: this._badge,
      category: this._category,
      hasAction: this._hasAction,
      launchImage: this._launchImage,
      threadIdentifier: this._threadIdentifier,
    };
  }

  alertAction() {
    return this._alertAction;
  }

  attachments() {
    return this._attachments;
  }

  badge() {
    return this._badge;
  }

  category() {
    return this._category;
  }

  hasAction() {
    return this._hasAction;
  }

  launchImage() {
    return this._launchImage;
  }

  threadIdentifier() {
    return this._threadIdentifier;
  }

  complete() {
    return this._complete;
  }
}

export default u;
