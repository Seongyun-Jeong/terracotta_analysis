var module404 = require('./404');

var o = {};
var module667 = module404(require('./667'));
Object.keys(module667).forEach(function (t) {
  if ('default' !== t && '__esModule' !== t)
    Object.prototype.hasOwnProperty.call(o, t) ||
      Object.defineProperty(exports, t, {
        enumerable: true,
        get: function () {
          return module667[t];
        },
      });
});
var n = module667.default;
export default n;
