var module404 = require('./404');

var module356 = require('./356'),
  module749 = module404(require('./749')),
  module750 = require('./750');

class l {
  constructor(n, s, c) {
    module356.default(this, t);
    this._action = n;
    this._icon = s;
    this._remoteInputs = [];
    this._showUserInterface = true;
    this._title = c;
  }

  addRemoteInput(t) {
    if (!(t instanceof module749.default)) throw new Error("AndroidAction:addRemoteInput expects an 'RemoteInput' but got type " + typeof t);

    this._remoteInputs.push(t);

    return this;
  }

  setAllowGenerateReplies(t) {
    this._allowGeneratedReplies = t;
    return this;
  }

  setSemanticAction(t) {
    if (!Object.values(module750.SemanticAction).includes(t)) throw new Error('AndroidAction:setSemanticAction Invalid Semantic Action: ' + t);
    this._semanticAction = t;
    return this;
  }

  setShowUserInterface(t) {
    this._showUserInterface = t;
    return this;
  }

  build() {
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
  }

  action() {
    return this._action;
  }

  allowGeneratedReplies() {
    return this._allowGeneratedReplies;
  }

  icon() {
    return this._icon;
  }

  remoteInputs() {
    return this._remoteInputs;
  }

  semanticAction() {
    return this._semanticAction;
  }

  showUserInterface() {
    return this._showUserInterface;
  }

  title() {
    return this._title;
  }
}

export default l;
export function fromNativeAndroidAction(t) {
  var n = new l(t.action, t.icon, t.title);
  if (t.allowGeneratedReplies) n.setAllowGenerateReplies(t.allowGeneratedReplies);
  if (t.remoteInputs)
    t.remoteInputs.forEach(function (t) {
      n.addRemoteInput(module749.fromNativeAndroidRemoteInput(t));
    });
  if (t.semanticAction) n.setSemanticAction(t.semanticAction);
  if (t.showUserInterface) n.setShowUserInterface(t.showUserInterface);
  return n;
}
