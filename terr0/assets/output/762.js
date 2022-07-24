var module404 = require('./404');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module705 = require('./705'),
  module763 = module404(require('./763')),
  module672 = require('./672'),
  module675 = require('./675'),
  _ = (function (t) {
    function u(t, o) {
      var h;
      module356.default(this, u);
      (h = module358.default(this, module361.default(u).call(this, o)))._storage = t;
      return h;
    }

    module362.default(u, t);
    module357.default(u, [
      {
        key: 'toString',
        value: function () {
          return 'gs://' + this._storage.app.options.storageBucket + this.path;
        },
      },
      {
        key: 'child',
        value: function (t) {
          return new u(this._storage, this.path + '/' + t);
        },
      },
      {
        key: 'delete',
        value: function () {
          return module675.getNativeModule(this._storage).delete(this.path);
        },
      },
      {
        key: 'getDownloadURL',
        value: function () {
          return module675.getNativeModule(this._storage).getDownloadURL(this.path);
        },
      },
      {
        key: 'getMetadata',
        value: function () {
          return module675.getNativeModule(this._storage).getMetadata(this.path);
        },
      },
      {
        key: 'updateMetadata',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
          return module675.getNativeModule(this._storage).updateMetadata(this.path, t);
        },
      },
      {
        key: 'downloadFile',
        value: function (t) {
          return new module763.default(module763.DOWNLOAD_TASK, module675.getNativeModule(this._storage).downloadFile(this.path, t), this);
        },
      },
      {
        key: 'putFile',
        value: function (t) {
          var u = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
            n = module672.isIOS ? t.replace('file://', '') : t;
          if (n.includes('%')) n = decodeURIComponent(n);
          return new module763.default(module763.UPLOAD_TASK, module675.getNativeModule(this._storage).putFile(this.path, n, u), this);
        },
      },
      {
        key: 'fullPath',
        get: function () {
          return this.path;
        },
      },
      {
        key: 'put',
        get: function () {
          return this.putFile;
        },
      },
    ]);
    return u;
  })(module705.default);

exports.default = _;
