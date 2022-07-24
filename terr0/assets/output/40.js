var module22 = require('./22');

class n {
  constructor(s) {
    module22(this, n);
    this.subscriber = s;
  }

  remove() {
    this.subscriber.removeSubscription(this);
  }
}

module.exports = n;
