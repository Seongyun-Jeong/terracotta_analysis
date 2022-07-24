var module356 = require('./356');

class s {
  constructor(t, s) {
    if ((module356.default(this, n), s < 0)) throw new Error('Timestamp nanoseconds out of range: ' + s);
    if (s >= 1e9) throw new Error('Timestamp nanoseconds out of range: ' + s);
    if (t < -62135596800) throw new Error('Timestamp seconds out of range: ' + t);
    if (t >= 253402300800) throw new Error('Timestamp seconds out of range: ' + t);
    this.seconds = t;
    this.nanoseconds = s;
  }

  toDate() {
    return new Date(this.toMillis());
  }

  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }

  isEqual(n) {
    return n.seconds === this.seconds && n.nanoseconds === this.nanoseconds;
  }

  toString() {
    return 'Timestamp(seconds=' + this.seconds + ', nanoseconds=' + this.nanoseconds + ')';
  }
}

export default s;
