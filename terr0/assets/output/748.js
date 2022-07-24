var module404 = require('./404');

var module356 = require('./356'),
  module749 = module404(require('./749')),
  module750 = require('./750'),
  l = (function () {
    function t(n, s, c) {
      module356.default(this, t);
      this._action = n;
      this._icon = s;
      this._remoteInputs = [];
      this._showUserInterface = true;
      this._title = c;
    }

    module357.default(t, [
      {
        key: 'addRemoteInput',
        value: function (t) {
          if (!(t instanceof module749.default)) throw new Error("AndroidAction:addRemoteInput expects an 'RemoteInput' but got type " + typeof t);

          this._remoteInputs.push(t);

          return this;
        },
      },
      {
        key: 'setAllowGenerateReplies',
        value: function (t) {
          this._allowGeneratedReplies = t;
          return this;
        },
      },
      {
        key: 'setSemanticAction',
        value: function (t) {
          if (!Object.values(module750.SemanticAction).includes(t)) throw new Error('AndroidAction:setSemanticAction Invalid Semantic Action: ' + t);
          this._semanticAction = t;
          return this;
        },
      },
      {
        key: 'setShowUserInterface',
        value: function (t) {
          this._showUserInterface = t;
          return this;
        },
      },
      {
        key: 'build',
        value: function () {
          if (!this._action) throw new Error('AndroidAction: Missing required `action` property');
          if (!this._icon) throw new Error('AndroidAction: Missing required `icon` property');
          if (!this._title) throw new Error('AndroidAction: Missing required `title` property');
          return {
            action: this._action,
            allowGeneratedReplies: this._allowGeneratedReplies,
            icon: this._icon,
            remoteInputs: this._remoteInputs.map(function (t) {
              return t.build();
            }),
            semanticAction: this._semanticAction,
            showUserInterface: this._showUserInterface,
            title: this._title,
          };
        },
      },
      {
        key: 'action',
        get: function () {
          return this._action;
        },
      },
      {
        key: 'allowGeneratedReplies',
        get: function () {
          return this._allowGeneratedReplies;
        },
      },
      {
        key: 'icon',
        get: function () {
          return this._icon;
        },
      },
      {
        key: 'remoteInputs',
        get: function () {
          return this._remoteInputs;
        },
      },
      {
        key: 'semanticAction',
        get: function () {
          return this._semanticAction;
        },
      },
      {
        key: 'showUserInterface',
        get: function () {
          return this._showUserInterface;
        },
      },
      {
        key: 'title',
        get: function () {
          return this._title;
        },
      },
    ]);
    return t;
  })();

exports.default = l;

exports.fromNativeAndroidAction = function (t) {
  var n = new l(t.action, t.icon, t.title);
  if (t.allowGeneratedReplies) n.setAllowGenerateReplies(t.allowGeneratedReplies);
  if (t.remoteInputs)
    t.remoteInputs.forEach(function (t) {
      n.addRemoteInput(module749.fromNativeAndroidRemoteInput(t));
    });
  if (t.semanticAction) n.setSemanticAction(t.semanticAction);
  if (t.showUserInterface) n.setShowUserInterface(t.showUserInterface);
  return n;
};
