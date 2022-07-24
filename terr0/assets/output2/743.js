var module356 = require('./356');

class u {
  constructor(l) {
    module356.default(this, t);
    this._link = l;
  }

  setDescriptionText(t) {
    this._descriptionText = t;
    return this._link;
  }

  setImageUrl(t) {
    this._imageUrl = t;
    return this._link;
  }

  setTitle(t) {
    this._title = t;
    return this._link;
  }

  build() {
    return {
      descriptionText: this._descriptionText,
      imageUrl: this._imageUrl,
      title: this._title,
    };
  }
}

export default u;
