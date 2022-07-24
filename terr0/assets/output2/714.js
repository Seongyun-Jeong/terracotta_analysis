var module356 = require('./356'),
  module715 = require('./715');

class f {
  constructor(u, f) {
    module356.default(this, t);
    this._document = new module715.default(u, f.document);
    this._newIndex = f.newIndex;
    this._oldIndex = f.oldIndex;
    this._type = f.type;
  }

  doc() {
    return this._document;
  }

  newIndex() {
    return this._newIndex;
  }

  oldIndex() {
    return this._oldIndex;
  }

  type() {
    return this._type;
  }
}

export default f;
