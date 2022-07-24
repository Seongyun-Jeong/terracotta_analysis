var module187 = require('./187'),
  o = module187.twoArgumentPooler;

function n(t, o) {
  this.left = t;
  this.top = o;
}

n.prototype.destructor = function () {
  this.left = null;
  this.top = null;
};

module187.addPoolingTo(n, o);
module.exports = n;
