require(d[3]);

var module356 = require('./356'),
  module722 = require('./722'),
  y = (function () {
    function n(l, u) {
      module356.default(this, n);
      this._type = l;
      this._elements = u;
    }

    module357.default(
      n,
      [
        {
          key: 'type',
          get: function () {
            return this._type;
          },
        },
        {
          key: 'elements',
          get: function () {
            return this._elements;
          },
        },
      ],
      [
        {
          key: 'delete',
          value: function () {
            return new n(o);
          },
        },
        {
          key: 'increment',
          value: function (t) {
            return new n(v, t);
          },
        },
        {
          key: 'serverTimestamp',
          value: function () {
            return new n(c);
          },
        },
        {
          key: 'arrayUnion',
          value: function (...args) {
            return new n(f, module722.buildNativeArray(args));
          },
        },
        {
          key: 'arrayRemove',
          value: function (...args) {
            return new n(p, module722.buildNativeArray(args));
          },
        },
      ]
    );
    return n;
  })();

exports.default = y;
var o = 'delete';
exports.TypeFieldValueDelete = o;
var v = 'increment';
exports.TypeFieldValueIncrement = v;
var p = 'remove';
exports.TypeFieldValueRemove = p;
var f = 'union';
exports.TypeFieldValueUnion = f;
var c = 'timestamp';
exports.TypeFieldValueTimestamp = c;
