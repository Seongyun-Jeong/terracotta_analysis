var module356 = require('./356'),
  s = (function () {
    function t(o) {
      module356.default(this, t);
      this._allowedDataTypes = [];
      this._choices = [];
      this._resultKey = o;
    }

    module357.default(t, [
      {
        key: 'setAllowDataType',
        value: function (t, l) {
          this._allowedDataTypes.push({
            allow: l,
            mimeType: t,
          });

          return this;
        },
      },
      {
        key: 'setAllowFreeFormInput',
        value: function (t) {
          this._allowFreeFormInput = t;
          return this;
        },
      },
      {
        key: 'setChoices',
        value: function (t) {
          this._choices = t;
          return this;
        },
      },
      {
        key: 'setLabel',
        value: function (t) {
          this._label = t;
          return this;
        },
      },
      {
        key: 'build',
        value: function () {
          if (!this._resultKey) throw new Error('AndroidRemoteInput: Missing required `resultKey` property');
          return {
            allowedDataTypes: this._allowedDataTypes,
            allowFreeFormInput: this._allowFreeFormInput,
            choices: this._choices,
            label: this._label,
            resultKey: this._resultKey,
          };
        },
      },
      {
        key: 'allowedDataTypes',
        get: function () {
          return this._allowedDataTypes;
        },
      },
      {
        key: 'allowFreeFormInput',
        get: function () {
          return this._allowFreeFormInput;
        },
      },
      {
        key: 'choices',
        get: function () {
          return this._choices;
        },
      },
      {
        key: 'label',
        get: function () {
          return this._label;
        },
      },
      {
        key: 'resultKey',
        get: function () {
          return this._resultKey;
        },
      },
    ]);
    return t;
  })();

exports.default = s;

exports.fromNativeAndroidRemoteInput = function (t) {
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
};
