var module404 = require('./404');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module705 = require('./705'),
  module763 = module404(require('./763')),
  module672 = require('./672'),
  module675 = require('./675');

class _ {
  constructor(t, o) {
    var h;
    module356.default(this, u);
    (h = module358.default(this, module361.default(u).call(this, o)))._storage = t;
    return h;
  }

  toString() {
    return 'gs://' + this._storage.app.options.storageBucket + this.path;
  }

  child(t) {
    return new u(this._storage, this.path + '/' + t);
  }

  delete() {
    return module675.getNativeModule(this._storage).delete(this.path);
  }

  getDownloadURL() {
    return module675.getNativeModule(this._storage).getDownloadURL(this.path);
  }

  getMetadata() {
    return module675.getNativeModule(this._storage).getMetadata(this.path);
  }

  updateMetadata() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return module675.getNativeModule(this._storage).updateMetadata(this.path, t);
  }

  downloadFile(t) {
    return new module763.default(module763.DOWNLOAD_TASK, module675.getNativeModule(this._storage).downloadFile(this.path, t), this);
  }

  putFile(t) {
    var u = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
      n = module672.isIOS ? t.replace('file://', '') : t;
    if (n.includes('%')) n = decodeURIComponent(n);
    return new module763.default(module763.UPLOAD_TASK, module675.getNativeModule(this._storage).putFile(this.path, n, u), this);
  }

  fullPath() {
    return this.path;
  }

  put() {
    return this.putFile;
  }
}

export default _;
