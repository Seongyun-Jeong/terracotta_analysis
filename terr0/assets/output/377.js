var module378 = require('./378'),
  module375 = require('./375'),
  u = function (t) {
    return {
      goBack: function (u) {
        var f = u;

        if (undefined === u && t.key) {
          module375.default('string' == typeof t.key, 'key should be a string');
          f = t.key;
        }

        return module378.default.back({
          key: f,
        });
      },
      navigate: function (t, u, f) {
        if ('string' == typeof t)
          return module378.default.navigate({
            routeName: t,
            params: u,
            action: f,
          });
        else {
          module375.default('object' == typeof t, 'Must navigateTo an object or a string');
          module375.default(null == u, 'Params must not be provided to .navigate() when specifying an object');
          module375.default(null == f, 'Child action must not be provided to .navigate() when specifying an object');
          return module378.default.navigate(t);
        }
      },
      setParams: function (u) {
        module375.default(t.key && 'string' == typeof t.key, 'setParams cannot be called by root navigator');
        return module378.default.setParams({
          params: u,
          key: t.key,
        });
      },
    };
  };

exports.default = u;
