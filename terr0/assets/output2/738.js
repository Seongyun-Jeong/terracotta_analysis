var module356 = require('./356');

class s {
  constructor(u) {
    module356.default(this, t);
    this._link = u;
  }

  setCampaign(t) {
    this._campaign = t;
    return this._link;
  }

  setContent(t) {
    this._content = t;
    return this._link;
  }

  setMedium(t) {
    this._medium = t;
    return this._link;
  }

  setSource(t) {
    this._source = t;
    return this._link;
  }

  setTerm(t) {
    this._term = t;
    return this._link;
  }

  build() {
    return {
      campaign: this._campaign,
      content: this._content,
      medium: this._medium,
      source: this._source,
      term: this._term,
    };
  }
}

export default s;
