require = (function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    "trim-canvas": [
      function (require, module, exports) {
        !(function (e, t) {
          "object" == typeof exports && "object" == typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define([], t)
            : "object" == typeof exports
            ? (exports.trimCanvas = t())
            : (e.trimCanvas = t());
        })(this, function () {
          return (function (e) {
            function t(n) {
              if (r[n]) return r[n].exports;
              var o = (r[n] = { exports: {}, id: n, loaded: !1 });
              return (
                e[n].call(o.exports, o, o.exports, t),
                (o.loaded = !0),
                o.exports
              );
            }
            var r = {};
            return (t.m = e), (t.c = r), (t.p = ""), t(0);
          })([
            function (e, t) {
              "use strict";
              function r(e) {
                var t = e.getContext("2d"),
                  r = e.width,
                  n = e.height,
                  o = t.getImageData(0, 0, r, n).data,
                  f = a(!0, r, n, o),
                  i = a(!1, r, n, o),
                  c = u(!0, r, n, o),
                  d = u(!1, r, n, o),
                  p = d - c + 1,
                  l = i - f + 1,
                  s = t.getImageData(c, f, p, l);
                return (
                  (e.width = p),
                  (e.height = l),
                  t.clearRect(0, 0, p, l),
                  t.putImageData(s, 0, 0),
                  e
                );
              }
              function n(e, t, r, n) {
                return {
                  red: n[4 * (r * t + e)],
                  green: n[4 * (r * t + e) + 1],
                  blue: n[4 * (r * t + e) + 2],
                  alpha: n[4 * (r * t + e) + 3],
                };
              }
              function o(e, t, r, o) {
                return n(e, t, r, o).alpha;
              }
              function a(e, t, r, n) {
                for (
                  var a = e ? 1 : -1, u = e ? 0 : r - 1, f = u;
                  e ? f < r : f > -1;
                  f += a
                )
                  for (var i = 0; i < t; i++) if (o(i, f, t, n)) return f;
                return null;
              }
              function u(e, t, r, n) {
                for (
                  var a = e ? 1 : -1, u = e ? 0 : t - 1, f = u;
                  e ? f < t : f > -1;
                  f += a
                )
                  for (var i = 0; i < r; i++) if (o(f, i, t, n)) return f;
                return null;
              }
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = r);
            },
          ]);
        });
      },
      {},
    ],
  },
  {},
  []
);
