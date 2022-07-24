var module356 = require('./356');

class s {
  constructor(o) {
    module356.default(this, t);
    this._allowedDataTypes = [];
    this._choices = [];
    this._resultKey = o;
  }

  setAllowDataType(t, l) {
    this._allowedDataTypes.push({
      allow: l,
      mimeType: t,
    });

    return this;
  }

  setAllowFreeFormInput(t) {
    this._allowFreeFormInput = t;
    return this;
  }

  setChoices(t) {
    this._choices = t;
    return this;
  }

  setLabel(t) {
    this._label = t;
    return this;
  }

  build() {
    if (!this._resultKey) throw new Error('AndroidRemoteInput: Missing required `resultKey` property');
    return {
      allowedDataTypes: this._allowedDataTypes,
      allowFreeFormInput: this._allowFreeFormInput,
      choices: this._choices,
      label: this._label,
      resultKey: this._resultKey,
    };
  }

  allowedDataTypes() {
    return this._allowedDataTypes;
  }

  allowFreeFormInput() {
    return this._allowFreeFormInput;
  }

  choices() {
    return this._choices;
  }

  label() {
    return this._label;
  }

  resultKey() {
    return this._resultKey;
  }
}

export default s;
export function fromNativeAndroidRemoteInput(t) {
  var l = new s(t.resultKey);
  if (t.allowedDataTypes)
    for (var o = 0; o < t.allowedDataTypes.length; o++) {
      var n = t.allowedDataTypes[o];
      l.setAllowDataType(n.mimeType, n.allow);
    }
  if (t.allowFreeFormInput) l.setAllowFreeFormInput(t.allowFreeFormInput);
  if (t.choices) l.setChoices(t.choices);
  if (t.label) l.setLabel(t.label);
  return l;
}
