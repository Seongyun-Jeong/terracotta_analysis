export default function default(o, f) {
  if ('backgroundColor' === o) return 'rgba(0,0,0,0)';
  if ('color' === o || -1 !== o.indexOf('Color')) return 'rgba(0,0,0,1)';
  if (0 === o.indexOf('rotate') || 0 === o.indexOf('skew')) return '0deg';
  if ('opacity' === o || 0 === o.indexOf('scale')) return 1;
  if ('fontSize' === o) return 14;
  if (0 === o.indexOf('margin') || 0 === o.indexOf('padding')) for (var l, u = 0; u < n.length; u++) if (l = n[u], o.substr(-l.length) === l) {
    for (var c, b = o.substr(0, o.length - l.length), s = t[l], O = 0; O < s.length; O++) if ((c = b + s[O]) in f) return f[c];

    break;
  }
  return 0;
}
var t = {
  Top: ['Vertical', ''],
  Bottom: ['Vertical', ''],
  Vertical: [''],
  Left: ['Horizontal', ''],
  Right: ['Horizontal', ''],
  Horizontal: ['']
},
    n = Object.keys(t);