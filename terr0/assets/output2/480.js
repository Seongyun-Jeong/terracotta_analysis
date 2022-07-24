var module2 = require('./2').NativeModules.PlatformConstants;

export function supportsImprovedSpringAnimation() {
  if (module2 && module2.reactNativeVersion) {
    var o = module2.reactNativeVersion,
      t = o.major,
      s = o.minor;
    return s >= 50 || (0 === t && 0 === s);
  }

  return false;
}
