var module356 = require('./356');

class u {
  constructor() {
    module356.default(this, t);
    this._props = {
      keywords: [],
      testDevices: [],
    };
  }

  build() {
    return this._props;
  }

  addTestDevice(t) {
    this._props.testDevices.push(t || 'DEVICE_ID_EMULATOR');

    return this;
  }

  addKeyword(t) {
    this._props.keywords.push(t);

    return this;
  }

  setBirthday() {}

  setContentUrl(t) {
    this._props.contentUrl = t;
    return this;
  }

  setGender(t) {
    if (['male', 'female', 'unknown'].includes(t)) this._props.gender = t;
    return this;
  }

  setLocation() {}

  setRequestAgent(t) {
    this._props.requestAgent = t;
    return this;
  }

  setIsDesignedForFamilies(t) {
    this._props.isDesignedForFamilies = t;
    return this;
  }

  tagForChildDirectedTreatment(t) {
    this._props.tagForChildDirectedTreatment = t;
    return this;
  }
}

export default u;
