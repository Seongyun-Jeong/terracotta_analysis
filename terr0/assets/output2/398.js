var o = 'function' == typeof Symbol && ('function' == typeof Symbol ? Symbol.for : '@@for'),
  t = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.element') : 60103,
  n = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.portal') : 60106,
  f = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.fragment') : 60107,
  c = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.strict_mode') : 60108,
  y = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.profiler') : 60114,
  u = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.provider') : 60109,
  l = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.context') : 60110,
  s = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.async_mode') : 60111,
  p = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.concurrent_mode') : 60111,
  b = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.forward_ref') : 60112,
  S = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.suspense') : 60113,
  $ = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.suspense_list') : 60120,
  M = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.memo') : 60115,
  _ = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.lazy') : 60116,
  C = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.fundamental') : 60117,
  P = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.responder') : 60118,
  v = o ? ('function' == typeof Symbol ? Symbol.for : '@@for')('react.scope') : 60119;

function w(o) {
  if ('object' == typeof o && null !== o) {
    var $ = o.$$typeof;

    switch ($) {
      case t:
        switch ((o = o.type)) {
          case s:
          case p:
          case f:
          case y:
          case c:
          case S:
            return o;

          default:
            switch ((o = o && o.$$typeof)) {
              case l:
              case b:
              case _:
              case M:
              case u:
                return o;

              default:
                return $;
            }
        }

      case n:
        return $;
    }
  }
}

function x(o) {
  return w(o) === p;
}

exports.typeOf = w;
exports.AsyncMode = s;
exports.ConcurrentMode = p;
exports.ContextConsumer = l;
exports.ContextProvider = u;
exports.Element = t;
exports.ForwardRef = b;
exports.Fragment = f;
exports.Lazy = _;
exports.Memo = M;
exports.Portal = n;
exports.Profiler = y;
exports.StrictMode = c;
exports.Suspense = S;
export function isValidElementType(o) {
  return (
    'string' == typeof o ||
    'function' == typeof o ||
    o === f ||
    o === p ||
    o === y ||
    o === c ||
    o === S ||
    o === $ ||
    ('object' == typeof o &&
      null !== o &&
      (o.$$typeof === _ || o.$$typeof === M || o.$$typeof === u || o.$$typeof === l || o.$$typeof === b || o.$$typeof === C || o.$$typeof === P || o.$$typeof === v))
  );
}
export function isAsyncMode(o) {
  return x(o) || w(o) === s;
}
exports.isConcurrentMode = x;
export function isContextConsumer(o) {
  return w(o) === l;
}
export function isContextProvider(o) {
  return w(o) === u;
}
export function isElement(o) {
  return 'object' == typeof o && null !== o && o.$$typeof === t;
}
export function isForwardRef(o) {
  return w(o) === b;
}
export function isFragment(o) {
  return w(o) === f;
}
export function isLazy(o) {
  return w(o) === _;
}
export function isMemo(o) {
  return w(o) === M;
}
export function isPortal(o) {
  return w(o) === n;
}
export function isProfiler(o) {
  return w(o) === y;
}
export function isStrictMode(o) {
  return w(o) === c;
}
export function isSuspense(o) {
  return w(o) === S;
}
