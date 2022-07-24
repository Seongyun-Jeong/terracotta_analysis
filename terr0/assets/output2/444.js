var t = {
    UNDETERMINED: 0,
    FAILED: 1,
    BEGAN: 2,
    CANCELLED: 3,
    ACTIVE: 4,
    END: 5,
    print: function (E) {
      for (var n = Object.keys(t), f = 0; f < n.length; f++) if (E === t[n[f]]) return n[f];
    },
  },
  E = t;
export default E;
