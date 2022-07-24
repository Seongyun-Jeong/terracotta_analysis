var module356 = require('./356');

class h {
  constructor(u) {
    module356.default(this, t);
    this.path = u ? (u.length > 1 && u.endsWith('/') ? u.substring(0, u.length - 1) : u) : '/';
  }

  key() {
    return '/' === this.path ? null : this.path.substring(this.path.lastIndexOf('/') + 1);
  }
}

export default h;
