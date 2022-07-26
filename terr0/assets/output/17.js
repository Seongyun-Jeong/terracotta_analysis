require('./26');

var module18 = require('./18'),
  module22 = require('./22'),
  module24 = require('./24'),
  module25 = require('./25'),
  module3 = require('./3'),
  module27 = require('./27'),
  c = (function () {
    function c() {
      module22(this, c);
      this._lazyCallableModules = {};
      this._queue = [[], [], [], 0];
      this._successCallbacks = {};
      this._failureCallbacks = {};
      this._callID = 0;
      this._lastFlush = 0;
      this._eventLoopStartTime = Date.now();
      this._immediatesCallback = null;
      this.callFunctionReturnFlushedQueue = this.callFunctionReturnFlushedQueue.bind(this);
      this.callFunctionReturnResultAndFlushedQueue = this.callFunctionReturnResultAndFlushedQueue.bind(this);
      this.flushedQueue = this.flushedQueue.bind(this);
      this.invokeCallbackAndReturnFlushedQueue = this.invokeCallbackAndReturnFlushedQueue.bind(this);
    }

    module23(
      c,
      [
        {
          key: 'callFunctionReturnFlushedQueue',
          value: function (t, u, l) {
            var s = this;

            this.__guard(function () {
              s.__callFunction(t, u, l);
            });

            return this.flushedQueue();
          },
        },
        {
          key: 'callFunctionReturnResultAndFlushedQueue',
          value: function (t, u, l) {
            var s,
              n = this;

            this.__guard(function () {
              s = n.__callFunction(t, u, l);
            });

            return [s, this.flushedQueue()];
          },
        },
        {
          key: 'invokeCallbackAndReturnFlushedQueue',
          value: function (t, u) {
            var l = this;

            this.__guard(function () {
              l.__invokeCallback(t, u);
            });

            return this.flushedQueue();
          },
        },
        {
          key: 'flushedQueue',
          value: function () {
            var t = this;

            this.__guard(function () {
              t.__callImmediates();
            });

            var u = this._queue;
            this._queue = [[], [], [], this._callID];
            return u[0].length ? u : null;
          },
        },
        {
          key: 'getEventLoopRunningTime',
          value: function () {
            return Date.now() - this._eventLoopStartTime;
          },
        },
        {
          key: 'registerCallableModule',
          value: function (t, u) {
            this._lazyCallableModules[t] = function () {
              return u;
            };
          },
        },
        {
          key: 'registerLazyCallableModule',
          value: function (t, u) {
            var l,
              s = u;

            this._lazyCallableModules[t] = function () {
              if (s) {
                l = s();
                s = null;
              }

              return l;
            };
          },
        },
        {
          key: 'getCallableModule',
          value: function (t) {
            var u = this._lazyCallableModules[t];
            return u ? u() : null;
          },
        },
        {
          key: 'enqueueNativeCall',
          value: function (t, u, l, s, h) {
            if (s || h) {
              if (s) l.push(this._callID << 1);
              if (h) l.push((this._callID << 1) | 1);
              this._successCallbacks[this._callID] = h;
              this._failureCallbacks[this._callID] = s;
            }

            this._callID++;

            this._queue[0].push(t);

            this._queue[1].push(u);

            this._queue[2].push(l);

            var o = Date.now();

            if (globals.nativeFlushQueueImmediate && o - this._lastFlush >= 5) {
              var c = this._queue;
              this._queue = [[], [], [], this._callID];
              this._lastFlush = o;
              globals.nativeFlushQueueImmediate(c);
            }

            module25.counterEvent('pending_js_to_native_queue', this._queue[0].length);
            if (this.__spy)
              this.__spy({
                type: 1,
                module: t + '',
                method: u,
                args: l,
              });
          },
        },
        {
          key: 'createDebugLookup',
          value: function (t, u, l) {},
        },
        {
          key: 'setImmediatesCallback',
          value: function (t) {
            this._immediatesCallback = t;
          },
        },
        {
          key: '__guard',
          value: function (t) {
            if (this.__shouldPauseOnThrow()) t();
            else
              try {
                t();
              } catch (t) {
                module24.reportFatalError(t);
              }
          },
        },
        {
          key: '__shouldPauseOnThrow',
          value: function () {
            return 'undefined' != typeof DebuggerInternal && true === DebuggerInternal.shouldPauseOnThrow;
          },
        },
        {
          key: '__callImmediates',
          value: function () {
            module25.beginEvent('JSTimers.callImmediates()');
            if (null != this._immediatesCallback) this._immediatesCallback();
            module25.endEvent();
          },
        },
        {
          key: '__callFunction',
          value: function (t, u, l) {
            this._lastFlush = Date.now();
            this._eventLoopStartTime = this._lastFlush;
            if (this.__spy) module25.beginEvent(t + '.' + u + '(' + module27(l) + ')');
            else module25.beginEvent(t + '.' + u + '(...)');
            if (this.__spy)
              this.__spy({
                type: 0,
                module: t,
                method: u,
                args: l,
              });
            var s = this.getCallableModule(t);
            module3(!!s, 'Module %s is not a registered callable module (calling %s)', t, u);
            module3(!!s[u], 'Method %s does not exist on module %s', u, t);
            var c = s[u].apply(s, l);
            module25.endEvent();
            return c;
          },
        },
        {
          key: '__invokeCallback',
          value: function (u, l) {
            this._lastFlush = Date.now();
            this._eventLoopStartTime = this._lastFlush;
            var s = u >>> 1,
              n = 1 & u ? this._successCallbacks[s] : this._failureCallbacks[s];

            if (n) {
              delete this._successCallbacks[s];
              delete this._failureCallbacks[s];
              n.apply(undefined, module18(l));
            }
          },
        },
      ],
      [
        {
          key: 'spy',
          value: function (t) {
            c.prototype.__spy =
              true === t
                ? function (t) {
                    console.log((0 === t.type ? 'N->JS' : 'JS->N') + ' : ' + (t.module ? t.module + '.' : '') + t.method + '(' + JSON.stringify(t.args) + ')');
                  }
                : false === t
                ? null
                : t;
          },
        },
      ]
    );
    return c;
  })();

module.exports = c;
