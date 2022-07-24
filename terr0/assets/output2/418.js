export function _TESTING_ONLY_normalize_keys() {
  n = 'id';
  t = 0;
}
export function generateKey() {
  return n + '-' + t++;
}
var n = 'id-' + Date.now(),
  t = 0;
