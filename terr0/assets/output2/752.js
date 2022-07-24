var module356 = require('./356');

class u {
  constructor(o, u, s) {
    module356.default(this, n);
    this._name = u;
    this._groupId = o;
    this._description = s;
  }

  build() {
    if (!this._groupId) throw new Error('AndroidChannelGroup: Missing required `groupId` property');
    if (!this._name) throw new Error('AndroidChannelGroup: Missing required `name` property');
    return {
      name: this._name,
      groupId: this._groupId,
      description: this._description,
      channels: [],
    };
  }

  groupId() {
    return this._groupId;
  }

  name() {
    return this._name;
  }

  description() {
    return this._description;
  }
}

export default u;
