!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var a = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "assets/"),
    t((t.s = 420));
})([
  function (e, t, n) {
    (function (e) {
      var t;
      !(function (t, n) {
        e.exports = n();
      })(0, function () {
        "use strict";
        function r() {
          return rt.apply(null, arguments);
        }
        function a(e) {
          return (
            e instanceof Array ||
            "[object Array]" === Object.prototype.toString.call(e)
          );
        }
        function i(e) {
          return (
            null != e && "[object Object]" === Object.prototype.toString.call(e)
          );
        }
        function s(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function o(e) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
          var t;
          for (t in e) if (s(e, t)) return !1;
          return !0;
        }
        function u(e) {
          return void 0 === e;
        }
        function d(e) {
          return (
            "number" == typeof e ||
            "[object Number]" === Object.prototype.toString.call(e)
          );
        }
        function l(e) {
          return (
            e instanceof Date ||
            "[object Date]" === Object.prototype.toString.call(e)
          );
        }
        function c(e, t) {
          var n,
            r = [];
          for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
          return r;
        }
        function _(e, t) {
          for (var n in t) s(t, n) && (e[n] = t[n]);
          return (
            s(t, "toString") && (e.toString = t.toString),
            s(t, "valueOf") && (e.valueOf = t.valueOf),
            e
          );
        }
        function f(e, t, n, r) {
          return Me(e, t, n, r, !0).utc();
        }
        function h(e) {
          return (
            null == e._pf &&
              (e._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1,
              }),
            e._pf
          );
        }
        function m(e) {
          if (null == e._isValid) {
            var t = h(e),
              n = at.call(t.parsedDateParts, function (e) {
                return null != e;
              }),
              r =
                !isNaN(e._d.getTime()) &&
                t.overflow < 0 &&
                !t.empty &&
                !t.invalidEra &&
                !t.invalidMonth &&
                !t.invalidWeekday &&
                !t.weekdayMismatch &&
                !t.nullInput &&
                !t.invalidFormat &&
                !t.userInvalidated &&
                (!t.meridiem || (t.meridiem && n));
            if (
              (e._strict &&
                (r =
                  r &&
                  0 === t.charsLeftOver &&
                  0 === t.unusedTokens.length &&
                  void 0 === t.bigHour),
              null != Object.isFrozen && Object.isFrozen(e))
            )
              return r;
            e._isValid = r;
          }
          return e._isValid;
        }
        function p(e) {
          var t = f(NaN);
          return null != e ? _(h(t), e) : (h(t).userInvalidated = !0), t;
        }
        function y(e, t) {
          var n, r, a;
          if (
            (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
            u(t._i) || (e._i = t._i),
            u(t._f) || (e._f = t._f),
            u(t._l) || (e._l = t._l),
            u(t._strict) || (e._strict = t._strict),
            u(t._tzm) || (e._tzm = t._tzm),
            u(t._isUTC) || (e._isUTC = t._isUTC),
            u(t._offset) || (e._offset = t._offset),
            u(t._pf) || (e._pf = h(t)),
            u(t._locale) || (e._locale = t._locale),
            it.length > 0)
          )
            for (n = 0; n < it.length; n++)
              u((a = t[(r = it[n])])) || (e[r] = a);
          return e;
        }
        function M(e) {
          y(this, e),
            (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
            this.isValid() || (this._d = new Date(NaN)),
            !1 === st && ((st = !0), r.updateOffset(this), (st = !1));
        }
        function g(e) {
          return e instanceof M || (null != e && null != e._isAMomentObject);
        }
        function v(e) {
          !1 === r.suppressDeprecationWarnings &&
            "undefined" != typeof console &&
            console.warn;
        }
        function L(e, t) {
          var n = !0;
          return _(function () {
            if (
              (null != r.deprecationHandler && r.deprecationHandler(null, e), n)
            ) {
              var a,
                i,
                o,
                u = [];
              for (i = 0; i < arguments.length; i++) {
                if (((a = ""), "object" == typeof arguments[i])) {
                  a += "\n[" + i + "] ";
                  for (o in arguments[0])
                    s(arguments[0], o) &&
                      (a += o + ": " + arguments[0][o] + ", ");
                  a = a.slice(0, -2);
                } else a = arguments[i];
                u.push(a);
              }
              v((Array.prototype.slice.call(u).join(""), new Error().stack)),
                (n = !1);
            }
            return t.apply(this, arguments);
          }, t);
        }
        function Y(e, t) {
          null != r.deprecationHandler && r.deprecationHandler(e, t),
            ot[e] || (v(), (ot[e] = !0));
        }
        function w(e) {
          return (
            ("undefined" != typeof Function && e instanceof Function) ||
            "[object Function]" === Object.prototype.toString.call(e)
          );
        }
        function k(e, t) {
          var n,
            r = _({}, e);
          for (n in t)
            s(t, n) &&
              (i(e[n]) && i(t[n])
                ? ((r[n] = {}), _(r[n], e[n]), _(r[n], t[n]))
                : null != t[n]
                ? (r[n] = t[n])
                : delete r[n]);
          for (n in e) s(e, n) && !s(t, n) && i(e[n]) && (r[n] = _({}, r[n]));
          return r;
        }
        function b(e) {
          null != e && this.set(e);
        }
        function D(e, t, n) {
          var r = "" + Math.abs(e),
            a = t - r.length;
          return (
            (e >= 0 ? (n ? "+" : "") : "-") +
            Math.pow(10, Math.max(0, a)).toString().substr(1) +
            r
          );
        }
        function T(e, t, n, r) {
          var a = r;
          "string" == typeof r &&
            (a = function () {
              return this[r]();
            }),
            e && (ft[e] = a),
            t &&
              (ft[t[0]] = function () {
                return D(a.apply(this, arguments), t[1], t[2]);
              }),
            n &&
              (ft[n] = function () {
                return this.localeData().ordinal(a.apply(this, arguments), e);
              });
        }
        function x(e, t) {
          return e.isValid()
            ? ((t = S(t, e.localeData())),
              (_t[t] =
                _t[t] ||
                (function (e) {
                  var t,
                    n,
                    r = e.match(lt);
                  for (t = 0, n = r.length; t < n; t++)
                    ft[r[t]]
                      ? (r[t] = ft[r[t]])
                      : (r[t] = (function (e) {
                          return e.match(/\[[\s\S]/)
                            ? e.replace(/^\[|\]$/g, "")
                            : e.replace(/\\/g, "");
                        })(r[t]));
                  return function (t) {
                    var a,
                      i = "";
                    for (a = 0; a < n; a++)
                      i += w(r[a]) ? r[a].call(t, e) : r[a];
                    return i;
                  };
                })(t)),
              _t[t](e))
            : e.localeData().invalidDate();
        }
        function S(e, t) {
          var n = 5;
          for (ct.lastIndex = 0; n >= 0 && ct.test(e); )
            (e = e.replace(ct, function (e) {
              return t.longDateFormat(e) || e;
            })),
              (ct.lastIndex = 0),
              (n -= 1);
          return e;
        }
        function j(e, t) {
          var n = e.toLowerCase();
          ht[n] = ht[n + "s"] = ht[t] = e;
        }
        function H(e) {
          return "string" == typeof e ? ht[e] || ht[e.toLowerCase()] : void 0;
        }
        function E(e) {
          var t,
            n,
            r = {};
          for (n in e) s(e, n) && (t = H(n)) && (r[t] = e[n]);
          return r;
        }
        function A(e, t) {
          mt[e] = t;
        }
        function O(e) {
          return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
        }
        function P(e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        }
        function C(e) {
          var t = +e,
            n = 0;
          return 0 !== t && isFinite(t) && (n = P(t)), n;
        }
        function R(e, t) {
          return function (n) {
            return null != n
              ? (F(this, e, n), r.updateOffset(this, t), this)
              : W(this, e);
          };
        }
        function W(e, t) {
          return e.isValid()
            ? e._d["get" + (e._isUTC ? "UTC" : "") + t]()
            : NaN;
        }
        function F(e, t, n) {
          e.isValid() &&
            !isNaN(n) &&
            ("FullYear" === t &&
            O(e.year()) &&
            1 === e.month() &&
            29 === e.date()
              ? ((n = C(n)),
                e._d["set" + (e._isUTC ? "UTC" : "") + t](
                  n,
                  e.month(),
                  q(n, e.month())
                ))
              : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
        }
        function N(e, t, n) {
          dt[e] = w(t)
            ? t
            : function (e, r) {
                return e && n ? n : t;
              };
        }
        function I(e) {
          return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function z(e, t) {
          var n,
            r = t;
          for (
            "string" == typeof e && (e = [e]),
              d(t) &&
                (r = function (e, n) {
                  n[t] = C(e);
                }),
              n = 0;
            n < e.length;
            n++
          )
            At[e[n]] = r;
        }
        function B(e, t) {
          z(e, function (e, n, r, a) {
            (r._w = r._w || {}), t(e, r._w, r, a);
          });
        }
        function U(e, t, n) {
          null != t && s(At, e) && At[e](t, n._a, n, e);
        }
        function q(e, t) {
          if (isNaN(e) || isNaN(t)) return NaN;
          var n = (function (e, t) {
            return ((e % t) + t) % t;
          })(t, 12);
          return (
            (e += (t - n) / 12), 1 === n ? (O(e) ? 29 : 28) : 31 - ((n % 7) % 2)
          );
        }
        function J(e, t) {
          var n;
          if (!e.isValid()) return e;
          if ("string" == typeof t)
            if (/^\d+$/.test(t)) t = C(t);
            else if (((t = e.localeData().monthsParse(t)), !d(t))) return e;
          return (
            (n = Math.min(e.date(), q(e.year(), t))),
            e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
            e
          );
        }
        function G(e) {
          return null != e
            ? (J(this, e), r.updateOffset(this, !0), this)
            : W(this, "Month");
        }
        function V() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            n,
            r = [],
            a = [],
            i = [];
          for (t = 0; t < 12; t++)
            (n = f([2e3, t])),
              r.push(this.monthsShort(n, "")),
              a.push(this.months(n, "")),
              i.push(this.months(n, "")),
              i.push(this.monthsShort(n, ""));
          for (r.sort(e), a.sort(e), i.sort(e), t = 0; t < 12; t++)
            (r[t] = I(r[t])), (a[t] = I(a[t]));
          for (t = 0; t < 24; t++) i[t] = I(i[t]);
          (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
            (this._monthsShortRegex = this._monthsRegex),
            (this._monthsStrictRegex = new RegExp(
              "^(" + a.join("|") + ")",
              "i"
            )),
            (this._monthsShortStrictRegex = new RegExp(
              "^(" + r.join("|") + ")",
              "i"
            ));
        }
        function $(e) {
          return O(e) ? 366 : 365;
        }
        function K(e) {
          var t, n;
          return (
            e < 100 && e >= 0
              ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
                (t = new Date(Date.UTC.apply(null, n))),
                isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
              : (t = new Date(Date.UTC.apply(null, arguments))),
            t
          );
        }
        function X(e, t, n) {
          var r = 7 + t - n;
          return -((7 + K(e, 0, r).getUTCDay() - t) % 7) + r - 1;
        }
        function Z(e, t, n, r, a) {
          var i,
            s,
            o = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + X(e, r, a);
          return (
            o <= 0
              ? (s = $((i = e - 1)) + o)
              : o > $(e)
              ? ((i = e + 1), (s = o - $(e)))
              : ((i = e), (s = o)),
            { year: i, dayOfYear: s }
          );
        }
        function Q(e, t, n) {
          var r,
            a,
            i = X(e.year(), t, n),
            s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
          return (
            s < 1
              ? (r = s + ee((a = e.year() - 1), t, n))
              : s > ee(e.year(), t, n)
              ? ((r = s - ee(e.year(), t, n)), (a = e.year() + 1))
              : ((a = e.year()), (r = s)),
            { week: r, year: a }
          );
        }
        function ee(e, t, n) {
          var r = X(e, t, n),
            a = X(e + 1, t, n);
          return ($(e) - r + a) / 7;
        }
        function te(e, t) {
          return e.slice(t, 7).concat(e.slice(0, t));
        }
        function ne() {
          function e(e, t) {
            return t.length - e.length;
          }
          var t,
            n,
            r,
            a,
            i,
            s = [],
            o = [],
            u = [],
            d = [];
          for (t = 0; t < 7; t++)
            (n = f([2e3, 1]).day(t)),
              (r = I(this.weekdaysMin(n, ""))),
              (a = I(this.weekdaysShort(n, ""))),
              (i = I(this.weekdays(n, ""))),
              s.push(r),
              o.push(a),
              u.push(i),
              d.push(r),
              d.push(a),
              d.push(i);
          s.sort(e),
            o.sort(e),
            u.sort(e),
            d.sort(e),
            (this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i")),
            (this._weekdaysShortRegex = this._weekdaysRegex),
            (this._weekdaysMinRegex = this._weekdaysRegex),
            (this._weekdaysStrictRegex = new RegExp(
              "^(" + u.join("|") + ")",
              "i"
            )),
            (this._weekdaysShortStrictRegex = new RegExp(
              "^(" + o.join("|") + ")",
              "i"
            )),
            (this._weekdaysMinStrictRegex = new RegExp(
              "^(" + s.join("|") + ")",
              "i"
            ));
        }
        function re() {
          return this.hours() % 12 || 12;
        }
        function ae(e, t) {
          T(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
          });
        }
        function ie(e, t) {
          return t._meridiemParse;
        }
        function se(e) {
          return e ? e.toLowerCase().replace("_", "-") : e;
        }
        function oe(r) {
          var a = null;
          if (void 0 === an[r] && void 0 !== e && e && e.exports)
            try {
              (a = tn._abbr), t, n(300)("./" + r), ue(a);
            } catch (e) {
              an[r] = null;
            }
          return an[r];
        }
        function ue(e, t) {
          var n;
          return (
            e &&
              ((n = u(t) ? le(e) : de(e, t))
                ? (tn = n)
                : "undefined" != typeof console && console.warn),
            tn._abbr
          );
        }
        function de(e, t) {
          if (null !== t) {
            var n,
              r = rn;
            if (((t.abbr = e), null != an[e]))
              Y(
                "defineLocaleOverride",
                "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
              ),
                (r = an[e]._config);
            else if (null != t.parentLocale)
              if (null != an[t.parentLocale]) r = an[t.parentLocale]._config;
              else {
                if (null == (n = oe(t.parentLocale)))
                  return (
                    sn[t.parentLocale] || (sn[t.parentLocale] = []),
                    sn[t.parentLocale].push({ name: e, config: t }),
                    null
                  );
                r = n._config;
              }
            return (
              (an[e] = new b(k(r, t))),
              sn[e] &&
                sn[e].forEach(function (e) {
                  de(e.name, e.config);
                }),
              ue(e),
              an[e]
            );
          }
          return delete an[e], null;
        }
        function le(e) {
          var t;
          if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
            return tn;
          if (!a(e)) {
            if ((t = oe(e))) return t;
            e = [e];
          }
          return (function (e) {
            for (var t, n, r, a, i = 0; i < e.length; ) {
              for (
                t = (a = se(e[i]).split("-")).length,
                  n = (n = se(e[i + 1])) ? n.split("-") : null;
                t > 0;

              ) {
                if ((r = oe(a.slice(0, t).join("-")))) return r;
                if (
                  n &&
                  n.length >= t &&
                  (function (e, t) {
                    var n,
                      r = Math.min(e.length, t.length);
                    for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
                    return r;
                  })(a, n) >=
                    t - 1
                )
                  break;
                t--;
              }
              i++;
            }
            return tn;
          })(e);
        }
        function ce(e) {
          var t,
            n = e._a;
          return (
            n &&
              -2 === h(e).overflow &&
              ((t =
                n[Pt] < 0 || n[Pt] > 11
                  ? Pt
                  : n[Ct] < 1 || n[Ct] > q(n[Ot], n[Pt])
                  ? Ct
                  : n[Rt] < 0 ||
                    n[Rt] > 24 ||
                    (24 === n[Rt] &&
                      (0 !== n[Wt] || 0 !== n[Ft] || 0 !== n[Nt]))
                  ? Rt
                  : n[Wt] < 0 || n[Wt] > 59
                  ? Wt
                  : n[Ft] < 0 || n[Ft] > 59
                  ? Ft
                  : n[Nt] < 0 || n[Nt] > 999
                  ? Nt
                  : -1),
              h(e)._overflowDayOfYear && (t < Ot || t > Ct) && (t = Ct),
              h(e)._overflowWeeks && -1 === t && (t = It),
              h(e)._overflowWeekday && -1 === t && (t = zt),
              (h(e).overflow = t)),
            e
          );
        }
        function _e(e) {
          var t,
            n,
            r,
            a,
            i,
            s,
            o = e._i,
            u = on.exec(o) || un.exec(o);
          if (u) {
            for (h(e).iso = !0, t = 0, n = ln.length; t < n; t++)
              if (ln[t][1].exec(u[1])) {
                (a = ln[t][0]), (r = !1 !== ln[t][2]);
                break;
              }
            if (null == a) return void (e._isValid = !1);
            if (u[3]) {
              for (t = 0, n = cn.length; t < n; t++)
                if (cn[t][1].exec(u[3])) {
                  i = (u[2] || " ") + cn[t][0];
                  break;
                }
              if (null == i) return void (e._isValid = !1);
            }
            if (!r && null != i) return void (e._isValid = !1);
            if (u[4]) {
              if (!dn.exec(u[4])) return void (e._isValid = !1);
              s = "Z";
            }
            (e._f = a + (i || "") + (s || "")), pe(e);
          } else e._isValid = !1;
        }
        function fe(e) {
          var t,
            n = fn.exec(
              (function (e) {
                return e
                  .replace(/\([^)]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .replace(/^\s\s*/, "")
                  .replace(/\s\s*$/, "");
              })(e._i)
            );
          if (n) {
            if (
              ((t = (function (e, t, n, r, a, i) {
                var s = [
                  (function (e) {
                    var t = parseInt(e, 10);
                    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
                  })(e),
                  Ut.indexOf(t),
                  parseInt(n, 10),
                  parseInt(r, 10),
                  parseInt(a, 10),
                ];
                return i && s.push(parseInt(i, 10)), s;
              })(n[4], n[3], n[2], n[5], n[6], n[7])),
              !(function (e, t, n) {
                if (e && Kt.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay())
                  return (h(n).weekdayMismatch = !0), (n._isValid = !1), !1;
                return !0;
              })(n[1], t, e))
            )
              return;
            (e._a = t),
              (e._tzm = (function (e, t, n) {
                if (e) return hn[e];
                if (t) return 0;
                var r = parseInt(n, 10),
                  a = r % 100;
                return ((r - a) / 100) * 60 + a;
              })(n[8], n[9], n[10])),
              (e._d = K.apply(null, e._a)),
              e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              (h(e).rfc2822 = !0);
          } else e._isValid = !1;
        }
        function he(e, t, n) {
          return null != e ? e : null != t ? t : n;
        }
        function me(e) {
          var t,
            n,
            a,
            i,
            s,
            o = [];
          if (!e._d) {
            for (
              a = (function (e) {
                var t = new Date(r.now());
                return e._useUTC
                  ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                  : [t.getFullYear(), t.getMonth(), t.getDate()];
              })(e),
                e._w &&
                  null == e._a[Ct] &&
                  null == e._a[Pt] &&
                  (function (e) {
                    var t, n, r, a, i, s, o, u, d;
                    null != (t = e._w).GG || null != t.W || null != t.E
                      ? ((i = 1),
                        (s = 4),
                        (n = he(t.GG, e._a[Ot], Q(ge(), 1, 4).year)),
                        (r = he(t.W, 1)),
                        ((a = he(t.E, 1)) < 1 || a > 7) && (u = !0))
                      : ((i = e._locale._week.dow),
                        (s = e._locale._week.doy),
                        (d = Q(ge(), i, s)),
                        (n = he(t.gg, e._a[Ot], d.year)),
                        (r = he(t.w, d.week)),
                        null != t.d
                          ? ((a = t.d) < 0 || a > 6) && (u = !0)
                          : null != t.e
                          ? ((a = t.e + i), (t.e < 0 || t.e > 6) && (u = !0))
                          : (a = i));
                    r < 1 || r > ee(n, i, s)
                      ? (h(e)._overflowWeeks = !0)
                      : null != u
                      ? (h(e)._overflowWeekday = !0)
                      : ((o = Z(n, r, a, i, s)),
                        (e._a[Ot] = o.year),
                        (e._dayOfYear = o.dayOfYear));
                  })(e),
                null != e._dayOfYear &&
                  ((s = he(e._a[Ot], a[Ot])),
                  (e._dayOfYear > $(s) || 0 === e._dayOfYear) &&
                    (h(e)._overflowDayOfYear = !0),
                  (n = K(s, 0, e._dayOfYear)),
                  (e._a[Pt] = n.getUTCMonth()),
                  (e._a[Ct] = n.getUTCDate())),
                t = 0;
              t < 3 && null == e._a[t];
              ++t
            )
              e._a[t] = o[t] = a[t];
            for (; t < 7; t++)
              e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
            24 === e._a[Rt] &&
              0 === e._a[Wt] &&
              0 === e._a[Ft] &&
              0 === e._a[Nt] &&
              ((e._nextDay = !0), (e._a[Rt] = 0)),
              (e._d = (
                e._useUTC
                  ? K
                  : function (e, t, n, r, a, i, s) {
                      var o;
                      return (
                        e < 100 && e >= 0
                          ? ((o = new Date(e + 400, t, n, r, a, i, s)),
                            isFinite(o.getFullYear()) && o.setFullYear(e))
                          : (o = new Date(e, t, n, r, a, i, s)),
                        o
                      );
                    }
              ).apply(null, o)),
              (i = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
              null != e._tzm &&
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
              e._nextDay && (e._a[Rt] = 24),
              e._w &&
                void 0 !== e._w.d &&
                e._w.d !== i &&
                (h(e).weekdayMismatch = !0);
          }
        }
        function pe(e) {
          if (e._f !== r.ISO_8601)
            if (e._f !== r.RFC_2822) {
              (e._a = []), (h(e).empty = !0);
              var t,
                n,
                a,
                i,
                o,
                u,
                d = "" + e._i,
                l = d.length,
                c = 0;
              for (
                a = S(e._f, e._locale).match(lt) || [], t = 0;
                t < a.length;
                t++
              )
                (i = a[t]),
                  (n = (d.match(
                    (function (e, t) {
                      return s(dt, e)
                        ? dt[e](t._strict, t._locale)
                        : new RegExp(
                            I(
                              e
                                .replace("\\", "")
                                .replace(
                                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                                  function (e, t, n, r, a) {
                                    return t || n || r || a;
                                  }
                                )
                            )
                          );
                    })(i, e)
                  ) || [])[0]) &&
                    ((o = d.substr(0, d.indexOf(n))).length > 0 &&
                      h(e).unusedInput.push(o),
                    (d = d.slice(d.indexOf(n) + n.length)),
                    (c += n.length)),
                  ft[i]
                    ? (n ? (h(e).empty = !1) : h(e).unusedTokens.push(i),
                      U(i, n, e))
                    : e._strict && !n && h(e).unusedTokens.push(i);
              (h(e).charsLeftOver = l - c),
                d.length > 0 && h(e).unusedInput.push(d),
                e._a[Rt] <= 12 &&
                  !0 === h(e).bigHour &&
                  e._a[Rt] > 0 &&
                  (h(e).bigHour = void 0),
                (h(e).parsedDateParts = e._a.slice(0)),
                (h(e).meridiem = e._meridiem),
                (e._a[Rt] = (function (e, t, n) {
                  var r;
                  if (null == n) return t;
                  return null != e.meridiemHour
                    ? e.meridiemHour(t, n)
                    : null != e.isPM
                    ? ((r = e.isPM(n)) && t < 12 && (t += 12),
                      r || 12 !== t || (t = 0),
                      t)
                    : t;
                })(e._locale, e._a[Rt], e._meridiem)),
                null !== (u = h(e).era) &&
                  (e._a[Ot] = e._locale.erasConvertYear(u, e._a[Ot])),
                me(e),
                ce(e);
            } else fe(e);
          else _e(e);
        }
        function ye(e) {
          var t = e._i,
            n = e._f;
          return (
            (e._locale = e._locale || le(e._l)),
            null === t || (void 0 === n && "" === t)
              ? p({ nullInput: !0 })
              : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                g(t)
                  ? new M(ce(t))
                  : (l(t)
                      ? (e._d = t)
                      : a(n)
                      ? (function (e) {
                          var t,
                            n,
                            r,
                            a,
                            i,
                            s,
                            o = !1;
                          if (0 === e._f.length)
                            return (
                              (h(e).invalidFormat = !0),
                              void (e._d = new Date(NaN))
                            );
                          for (a = 0; a < e._f.length; a++)
                            (i = 0),
                              (s = !1),
                              (t = y({}, e)),
                              null != e._useUTC && (t._useUTC = e._useUTC),
                              (t._f = e._f[a]),
                              pe(t),
                              m(t) && (s = !0),
                              (i += h(t).charsLeftOver),
                              (i += 10 * h(t).unusedTokens.length),
                              (h(t).score = i),
                              o
                                ? i < r && ((r = i), (n = t))
                                : (null == r || i < r || s) &&
                                  ((r = i), (n = t), s && (o = !0));
                          _(e, n || t);
                        })(e)
                      : n
                      ? pe(e)
                      : (function (e) {
                          var t = e._i;
                          u(t)
                            ? (e._d = new Date(r.now()))
                            : l(t)
                            ? (e._d = new Date(t.valueOf()))
                            : "string" == typeof t
                            ? (function (e) {
                                var t = _n.exec(e._i);
                                null === t
                                  ? (_e(e),
                                    !1 === e._isValid &&
                                      (delete e._isValid,
                                      fe(e),
                                      !1 === e._isValid &&
                                        (delete e._isValid,
                                        e._strict
                                          ? (e._isValid = !1)
                                          : r.createFromInputFallback(e))))
                                  : (e._d = new Date(+t[1]));
                              })(e)
                            : a(t)
                            ? ((e._a = c(t.slice(0), function (e) {
                                return parseInt(e, 10);
                              })),
                              me(e))
                            : i(t)
                            ? (function (e) {
                                if (!e._d) {
                                  var t = E(e._i),
                                    n = void 0 === t.day ? t.date : t.day;
                                  (e._a = c(
                                    [
                                      t.year,
                                      t.month,
                                      n,
                                      t.hour,
                                      t.minute,
                                      t.second,
                                      t.millisecond,
                                    ],
                                    function (e) {
                                      return e && parseInt(e, 10);
                                    }
                                  )),
                                    me(e);
                                }
                              })(e)
                            : d(t)
                            ? (e._d = new Date(t))
                            : r.createFromInputFallback(e);
                        })(e),
                    m(e) || (e._d = null),
                    e))
          );
        }
        function Me(e, t, n, r, s) {
          var u = {};
          return (
            (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
            (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
            ((i(e) && o(e)) || (a(e) && 0 === e.length)) && (e = void 0),
            (u._isAMomentObject = !0),
            (u._useUTC = u._isUTC = s),
            (u._l = n),
            (u._i = e),
            (u._f = t),
            (u._strict = r),
            (function (e) {
              var t = new M(ce(ye(e)));
              return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
            })(u)
          );
        }
        function ge(e, t, n, r) {
          return Me(e, t, n, r, !1);
        }
        function ve(e, t) {
          var n, r;
          if ((1 === t.length && a(t[0]) && (t = t[0]), !t.length)) return ge();
          for (n = t[0], r = 1; r < t.length; ++r)
            (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
          return n;
        }
        function Le(e) {
          var t = E(e),
            n = t.year || 0,
            r = t.quarter || 0,
            a = t.month || 0,
            i = t.week || t.isoWeek || 0,
            o = t.day || 0,
            u = t.hour || 0,
            d = t.minute || 0,
            l = t.second || 0,
            c = t.millisecond || 0;
          (this._isValid = (function (e) {
            var t,
              n,
              r = !1;
            for (t in e)
              if (
                s(e, t) &&
                (-1 === Et.call(yn, t) || (null != e[t] && isNaN(e[t])))
              )
                return !1;
            for (n = 0; n < yn.length; ++n)
              if (e[yn[n]]) {
                if (r) return !1;
                parseFloat(e[yn[n]]) !== C(e[yn[n]]) && (r = !0);
              }
            return !0;
          })(t)),
            (this._milliseconds = +c + 1e3 * l + 6e4 * d + 1e3 * u * 60 * 60),
            (this._days = +o + 7 * i),
            (this._months = +a + 3 * r + 12 * n),
            (this._data = {}),
            (this._locale = le()),
            this._bubble();
        }
        function Ye(e) {
          return e instanceof Le;
        }
        function we(e) {
          return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
        }
        function ke(e, t) {
          T(e, 0, 0, function () {
            var e = this.utcOffset(),
              n = "+";
            return (
              e < 0 && ((e = -e), (n = "-")),
              n + D(~~(e / 60), 2) + t + D(~~e % 60, 2)
            );
          });
        }
        function be(e, t) {
          var n,
            r,
            a,
            i = (t || "").match(e);
          return null === i
            ? null
            : ((n = i[i.length - 1] || []),
              (r = (n + "").match(Mn) || ["-", 0, 0]),
              0 === (a = 60 * r[1] + C(r[2])) ? 0 : "+" === r[0] ? a : -a);
        }
        function De(e, t) {
          var n, a;
          return t._isUTC
            ? ((n = t.clone()),
              (a =
                (g(e) || l(e) ? e.valueOf() : ge(e).valueOf()) - n.valueOf()),
              n._d.setTime(n._d.valueOf() + a),
              r.updateOffset(n, !1),
              n)
            : ge(e).local();
        }
        function Te(e) {
          return -Math.round(e._d.getTimezoneOffset());
        }
        function xe() {
          return !!this.isValid() && this._isUTC && 0 === this._offset;
        }
        function Se(e, t) {
          var n,
            r,
            a,
            i = e,
            o = null;
          return (
            Ye(e)
              ? (i = { ms: e._milliseconds, d: e._days, M: e._months })
              : d(e) || !isNaN(+e)
              ? ((i = {}), t ? (i[t] = +e) : (i.milliseconds = +e))
              : (o = gn.exec(e))
              ? ((n = "-" === o[1] ? -1 : 1),
                (i = {
                  y: 0,
                  d: C(o[Ct]) * n,
                  h: C(o[Rt]) * n,
                  m: C(o[Wt]) * n,
                  s: C(o[Ft]) * n,
                  ms: C(we(1e3 * o[Nt])) * n,
                }))
              : (o = vn.exec(e))
              ? ((n = "-" === o[1] ? -1 : 1),
                (i = {
                  y: je(o[2], n),
                  M: je(o[3], n),
                  w: je(o[4], n),
                  d: je(o[5], n),
                  h: je(o[6], n),
                  m: je(o[7], n),
                  s: je(o[8], n),
                }))
              : null == i
              ? (i = {})
              : "object" == typeof i &&
                ("from" in i || "to" in i) &&
                ((a = (function (e, t) {
                  var n;
                  if (!e.isValid() || !t.isValid())
                    return { milliseconds: 0, months: 0 };
                  (t = De(t, e)),
                    e.isBefore(t)
                      ? (n = He(e, t))
                      : (((n = He(t, e)).milliseconds = -n.milliseconds),
                        (n.months = -n.months));
                  return n;
                })(ge(i.from), ge(i.to))),
                ((i = {}).ms = a.milliseconds),
                (i.M = a.months)),
            (r = new Le(i)),
            Ye(e) && s(e, "_locale") && (r._locale = e._locale),
            Ye(e) && s(e, "_isValid") && (r._isValid = e._isValid),
            r
          );
        }
        function je(e, t) {
          var n = e && parseFloat(e.replace(",", "."));
          return (isNaN(n) ? 0 : n) * t;
        }
        function He(e, t) {
          var n = {};
          return (
            (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
            e.clone().add(n.months, "M").isAfter(t) && --n.months,
            (n.milliseconds = +t - +e.clone().add(n.months, "M")),
            n
          );
        }
        function Ee(e, t) {
          return function (n, r) {
            var a, i;
            return (
              null === r ||
                isNaN(+r) ||
                (Y(
                  t,
                  "moment()." +
                    t +
                    "(period, number) is deprecated. Please use moment()." +
                    t +
                    "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                ),
                (i = n),
                (n = r),
                (r = i)),
              (a = Se(n, r)),
              Ae(this, a, e),
              this
            );
          };
        }
        function Ae(e, t, n, a) {
          var i = t._milliseconds,
            s = we(t._days),
            o = we(t._months);
          e.isValid() &&
            ((a = null == a || a),
            o && J(e, W(e, "Month") + o * n),
            s && F(e, "Date", W(e, "Date") + s * n),
            i && e._d.setTime(e._d.valueOf() + i * n),
            a && r.updateOffset(e, s || o));
        }
        function Oe(e) {
          return "string" == typeof e || e instanceof String;
        }
        function Pe(e, t) {
          if (e.date() < t.date()) return -Pe(t, e);
          var n,
            r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
            a = e.clone().add(r, "months");
          return (
            (n =
              t - a < 0
                ? (t - a) / (a - e.clone().add(r - 1, "months"))
                : (t - a) / (e.clone().add(r + 1, "months") - a)),
            -(r + n) || 0
          );
        }
        function Ce(e) {
          var t;
          return void 0 === e
            ? this._locale._abbr
            : (null != (t = le(e)) && (this._locale = t), this);
        }
        function Re() {
          return this._locale;
        }
        function We(e, t) {
          return ((e % t) + t) % t;
        }
        function Fe(e, t, n) {
          return e < 100 && e >= 0
            ? new Date(e + 400, t, n) - Tn
            : new Date(e, t, n).valueOf();
        }
        function Ne(e, t, n) {
          return e < 100 && e >= 0
            ? Date.UTC(e + 400, t, n) - Tn
            : Date.UTC(e, t, n);
        }
        function Ie(e, t) {
          return t.erasAbbrRegex(e);
        }
        function ze() {
          var e,
            t,
            n = [],
            r = [],
            a = [],
            i = [],
            s = this.eras();
          for (e = 0, t = s.length; e < t; ++e)
            r.push(I(s[e].name)),
              n.push(I(s[e].abbr)),
              a.push(I(s[e].narrow)),
              i.push(I(s[e].name)),
              i.push(I(s[e].abbr)),
              i.push(I(s[e].narrow));
          (this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i")),
            (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
            (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
            (this._erasNarrowRegex = new RegExp("^(" + a.join("|") + ")", "i"));
        }
        function Be(e, t) {
          T(0, [e, e.length], 0, t);
        }
        function Ue(e, t, n, r, a) {
          var i;
          return null == e
            ? Q(this, r, a).year
            : ((i = ee(e, r, a)),
              t > i && (t = i),
              function (e, t, n, r, a) {
                var i = Z(e, t, n, r, a),
                  s = K(i.year, 0, i.dayOfYear);
                return (
                  this.year(s.getUTCFullYear()),
                  this.month(s.getUTCMonth()),
                  this.date(s.getUTCDate()),
                  this
                );
              }.call(this, e, t, n, r, a));
        }
        function qe(e) {
          return e;
        }
        function Je(e, t, n, r) {
          var a = le(),
            i = f().set(r, t);
          return a[n](i, e);
        }
        function Ge(e, t, n) {
          if ((d(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
            return Je(e, t, n, "month");
          var r,
            a = [];
          for (r = 0; r < 12; r++) a[r] = Je(e, r, n, "month");
          return a;
        }
        function Ve(e, t, n, r) {
          "boolean" == typeof e
            ? (d(t) && ((n = t), (t = void 0)), (t = t || ""))
            : ((n = t = e),
              (e = !1),
              d(t) && ((n = t), (t = void 0)),
              (t = t || ""));
          var a,
            i = le(),
            s = e ? i._week.dow : 0,
            o = [];
          if (null != n) return Je(t, (n + s) % 7, r, "day");
          for (a = 0; a < 7; a++) o[a] = Je(t, (a + s) % 7, r, "day");
          return o;
        }
        function $e(e, t, n, r) {
          var a = Se(t, n);
          return (
            (e._milliseconds += r * a._milliseconds),
            (e._days += r * a._days),
            (e._months += r * a._months),
            e._bubble()
          );
        }
        function Ke(e) {
          return e < 0 ? Math.floor(e) : Math.ceil(e);
        }
        function Xe(e) {
          return (4800 * e) / 146097;
        }
        function Ze(e) {
          return (146097 * e) / 4800;
        }
        function Qe(e) {
          return function () {
            return this.as(e);
          };
        }
        function et(e) {
          return function () {
            return this.isValid() ? this._data[e] : NaN;
          };
        }
        function tt(e) {
          return (e > 0) - (e < 0) || +e;
        }
        function nt() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var e,
            t,
            n,
            r,
            a,
            i,
            s,
            o,
            u = er(this._milliseconds) / 1e3,
            d = er(this._days),
            l = er(this._months),
            c = this.asSeconds();
          return c
            ? ((e = P(u / 60)),
              (t = P(e / 60)),
              (u %= 60),
              (e %= 60),
              (n = P(l / 12)),
              (l %= 12),
              (r = u ? u.toFixed(3).replace(/\.?0+$/, "") : ""),
              (a = c < 0 ? "-" : ""),
              (i = tt(this._months) !== tt(c) ? "-" : ""),
              (s = tt(this._days) !== tt(c) ? "-" : ""),
              (o = tt(this._milliseconds) !== tt(c) ? "-" : ""),
              a +
                "P" +
                (n ? i + n + "Y" : "") +
                (l ? i + l + "M" : "") +
                (d ? s + d + "D" : "") +
                (t || e || u ? "T" : "") +
                (t ? o + t + "H" : "") +
                (e ? o + e + "M" : "") +
                (u ? o + r + "S" : ""))
            : "P0D";
        }
        var rt, at;
        at = Array.prototype.some
          ? Array.prototype.some
          : function (e) {
              var t,
                n = Object(this),
                r = n.length >>> 0;
              for (t = 0; t < r; t++)
                if (t in n && e.call(this, n[t], t, n)) return !0;
              return !1;
            };
        var it = (r.momentProperties = []),
          st = !1,
          ot = {};
        (r.suppressDeprecationWarnings = !1), (r.deprecationHandler = null);
        var ut;
        ut = Object.keys
          ? Object.keys
          : function (e) {
              var t,
                n = [];
              for (t in e) s(e, t) && n.push(t);
              return n;
            };
        var dt,
          lt =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
          ct = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
          _t = {},
          ft = {},
          ht = {},
          mt = {},
          pt = /\d/,
          yt = /\d\d/,
          Mt = /\d{3}/,
          gt = /\d{4}/,
          vt = /[+-]?\d{6}/,
          Lt = /\d\d?/,
          Yt = /\d\d\d\d?/,
          wt = /\d\d\d\d\d\d?/,
          kt = /\d{1,3}/,
          bt = /\d{1,4}/,
          Dt = /[+-]?\d{1,6}/,
          Tt = /\d+/,
          xt = /[+-]?\d+/,
          St = /Z|[+-]\d\d:?\d\d/gi,
          jt = /Z|[+-]\d\d(?::?\d\d)?/gi,
          Ht =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
        dt = {};
        var Et,
          At = {},
          Ot = 0,
          Pt = 1,
          Ct = 2,
          Rt = 3,
          Wt = 4,
          Ft = 5,
          Nt = 6,
          It = 7,
          zt = 8;
        (Et = Array.prototype.indexOf
          ? Array.prototype.indexOf
          : function (e) {
              var t;
              for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
              return -1;
            }),
          T("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
          T("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e);
          }),
          T("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e);
          }),
          j("month", "M"),
          A("month", 8),
          N("M", Lt),
          N("MM", Lt, yt),
          N("MMM", function (e, t) {
            return t.monthsShortRegex(e);
          }),
          N("MMMM", function (e, t) {
            return t.monthsRegex(e);
          }),
          z(["M", "MM"], function (e, t) {
            t[Pt] = C(e) - 1;
          }),
          z(["MMM", "MMMM"], function (e, t, n, r) {
            var a = n._locale.monthsParse(e, r, n._strict);
            null != a ? (t[Pt] = a) : (h(n).invalidMonth = e);
          });
        var Bt =
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          Ut = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          qt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
          Jt = Ht,
          Gt = Ht;
        T("Y", 0, 0, function () {
          var e = this.year();
          return e <= 9999 ? D(e, 4) : "+" + e;
        }),
          T(0, ["YY", 2], 0, function () {
            return this.year() % 100;
          }),
          T(0, ["YYYY", 4], 0, "year"),
          T(0, ["YYYYY", 5], 0, "year"),
          T(0, ["YYYYYY", 6, !0], 0, "year"),
          j("year", "y"),
          A("year", 1),
          N("Y", xt),
          N("YY", Lt, yt),
          N("YYYY", bt, gt),
          N("YYYYY", Dt, vt),
          N("YYYYYY", Dt, vt),
          z(["YYYYY", "YYYYYY"], Ot),
          z("YYYY", function (e, t) {
            t[Ot] = 2 === e.length ? r.parseTwoDigitYear(e) : C(e);
          }),
          z("YY", function (e, t) {
            t[Ot] = r.parseTwoDigitYear(e);
          }),
          z("Y", function (e, t) {
            t[Ot] = parseInt(e, 10);
          }),
          (r.parseTwoDigitYear = function (e) {
            return C(e) + (C(e) > 68 ? 1900 : 2e3);
          });
        var Vt = R("FullYear", !0);
        T("w", ["ww", 2], "wo", "week"),
          T("W", ["WW", 2], "Wo", "isoWeek"),
          j("week", "w"),
          j("isoWeek", "W"),
          A("week", 5),
          A("isoWeek", 5),
          N("w", Lt),
          N("ww", Lt, yt),
          N("W", Lt),
          N("WW", Lt, yt),
          B(["w", "ww", "W", "WW"], function (e, t, n, r) {
            t[r.substr(0, 1)] = C(e);
          });
        T("d", 0, "do", "day"),
          T("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e);
          }),
          T("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e);
          }),
          T("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e);
          }),
          T("e", 0, 0, "weekday"),
          T("E", 0, 0, "isoWeekday"),
          j("day", "d"),
          j("weekday", "e"),
          j("isoWeekday", "E"),
          A("day", 11),
          A("weekday", 11),
          A("isoWeekday", 11),
          N("d", Lt),
          N("e", Lt),
          N("E", Lt),
          N("dd", function (e, t) {
            return t.weekdaysMinRegex(e);
          }),
          N("ddd", function (e, t) {
            return t.weekdaysShortRegex(e);
          }),
          N("dddd", function (e, t) {
            return t.weekdaysRegex(e);
          }),
          B(["dd", "ddd", "dddd"], function (e, t, n, r) {
            var a = n._locale.weekdaysParse(e, r, n._strict);
            null != a ? (t.d = a) : (h(n).invalidWeekday = e);
          }),
          B(["d", "e", "E"], function (e, t, n, r) {
            t[r] = C(e);
          });
        var $t =
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          Kt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          Xt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          Zt = Ht,
          Qt = Ht,
          en = Ht;
        T("H", ["HH", 2], 0, "hour"),
          T("h", ["hh", 2], 0, re),
          T("k", ["kk", 2], 0, function () {
            return this.hours() || 24;
          }),
          T("hmm", 0, 0, function () {
            return "" + re.apply(this) + D(this.minutes(), 2);
          }),
          T("hmmss", 0, 0, function () {
            return (
              "" + re.apply(this) + D(this.minutes(), 2) + D(this.seconds(), 2)
            );
          }),
          T("Hmm", 0, 0, function () {
            return "" + this.hours() + D(this.minutes(), 2);
          }),
          T("Hmmss", 0, 0, function () {
            return (
              "" + this.hours() + D(this.minutes(), 2) + D(this.seconds(), 2)
            );
          }),
          ae("a", !0),
          ae("A", !1),
          j("hour", "h"),
          A("hour", 13),
          N("a", ie),
          N("A", ie),
          N("H", Lt),
          N("h", Lt),
          N("k", Lt),
          N("HH", Lt, yt),
          N("hh", Lt, yt),
          N("kk", Lt, yt),
          N("hmm", Yt),
          N("hmmss", wt),
          N("Hmm", Yt),
          N("Hmmss", wt),
          z(["H", "HH"], Rt),
          z(["k", "kk"], function (e, t, n) {
            var r = C(e);
            t[Rt] = 24 === r ? 0 : r;
          }),
          z(["a", "A"], function (e, t, n) {
            (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
          }),
          z(["h", "hh"], function (e, t, n) {
            (t[Rt] = C(e)), (h(n).bigHour = !0);
          }),
          z("hmm", function (e, t, n) {
            var r = e.length - 2;
            (t[Rt] = C(e.substr(0, r))),
              (t[Wt] = C(e.substr(r))),
              (h(n).bigHour = !0);
          }),
          z("hmmss", function (e, t, n) {
            var r = e.length - 4,
              a = e.length - 2;
            (t[Rt] = C(e.substr(0, r))),
              (t[Wt] = C(e.substr(r, 2))),
              (t[Ft] = C(e.substr(a))),
              (h(n).bigHour = !0);
          }),
          z("Hmm", function (e, t, n) {
            var r = e.length - 2;
            (t[Rt] = C(e.substr(0, r))), (t[Wt] = C(e.substr(r)));
          }),
          z("Hmmss", function (e, t, n) {
            var r = e.length - 4,
              a = e.length - 2;
            (t[Rt] = C(e.substr(0, r))),
              (t[Wt] = C(e.substr(r, 2))),
              (t[Ft] = C(e.substr(a)));
          });
        var tn,
          nn = R("Hours", !0),
          rn = {
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            longDateFormat: {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              w: "a week",
              ww: "%d weeks",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            months: Bt,
            monthsShort: Ut,
            week: { dow: 0, doy: 6 },
            weekdays: $t,
            weekdaysMin: Xt,
            weekdaysShort: Kt,
            meridiemParse: /[ap]\.?m?\.?/i,
          },
          an = {},
          sn = {},
          on =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          un =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
          dn = /Z|[+-]\d\d(?::?\d\d)?/,
          ln = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/],
            ["YYYYMM", /\d{6}/, !1],
            ["YYYY", /\d{4}/, !1],
          ],
          cn = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/],
          ],
          _n = /^\/?Date\((-?\d+)/i,
          fn =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
          hn = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
        (r.createFromInputFallback = L(
          "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
          function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
          }
        )),
          (r.ISO_8601 = function () {}),
          (r.RFC_2822 = function () {});
        var mn = L(
            "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = ge.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e < this
                  ? this
                  : e
                : p();
            }
          ),
          pn = L(
            "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
            function () {
              var e = ge.apply(null, arguments);
              return this.isValid() && e.isValid()
                ? e > this
                  ? this
                  : e
                : p();
            }
          ),
          yn = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
        ke("Z", ":"),
          ke("ZZ", ""),
          N("Z", jt),
          N("ZZ", jt),
          z(["Z", "ZZ"], function (e, t, n) {
            (n._useUTC = !0), (n._tzm = be(jt, e));
          });
        var Mn = /([\+\-]|\d\d)/gi;
        r.updateOffset = function () {};
        var gn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
          vn =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        (Se.fn = Le.prototype),
          (Se.invalid = function () {
            return Se(NaN);
          });
        var Ln = Ee(1, "add"),
          Yn = Ee(-1, "subtract");
        (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
          (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
        var wn = L(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          ),
          kn = 1e3,
          bn = 60 * kn,
          Dn = 60 * bn,
          Tn = 3506328 * Dn;
        T("N", 0, 0, "eraAbbr"),
          T("NN", 0, 0, "eraAbbr"),
          T("NNN", 0, 0, "eraAbbr"),
          T("NNNN", 0, 0, "eraName"),
          T("NNNNN", 0, 0, "eraNarrow"),
          T("y", ["y", 1], "yo", "eraYear"),
          T("y", ["yy", 2], 0, "eraYear"),
          T("y", ["yyy", 3], 0, "eraYear"),
          T("y", ["yyyy", 4], 0, "eraYear"),
          N("N", Ie),
          N("NN", Ie),
          N("NNN", Ie),
          N("NNNN", function (e, t) {
            return t.erasNameRegex(e);
          }),
          N("NNNNN", function (e, t) {
            return t.erasNarrowRegex(e);
          }),
          z(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
            var a = n._locale.erasParse(e, r, n._strict);
            a ? (h(n).era = a) : (h(n).invalidEra = e);
          }),
          N("y", Tt),
          N("yy", Tt),
          N("yyy", Tt),
          N("yyyy", Tt),
          N("yo", function (e, t) {
            return t._eraYearOrdinalRegex || Tt;
          }),
          z(["y", "yy", "yyy", "yyyy"], Ot),
          z(["yo"], function (e, t, n, r) {
            var a;
            n._locale._eraYearOrdinalRegex &&
              (a = e.match(n._locale._eraYearOrdinalRegex)),
              n._locale.eraYearOrdinalParse
                ? (t[Ot] = n._locale.eraYearOrdinalParse(e, a))
                : (t[Ot] = parseInt(e, 10));
          }),
          T(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
          T(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100;
          }),
          Be("gggg", "weekYear"),
          Be("ggggg", "weekYear"),
          Be("GGGG", "isoWeekYear"),
          Be("GGGGG", "isoWeekYear"),
          j("weekYear", "gg"),
          j("isoWeekYear", "GG"),
          A("weekYear", 1),
          A("isoWeekYear", 1),
          N("G", xt),
          N("g", xt),
          N("GG", Lt, yt),
          N("gg", Lt, yt),
          N("GGGG", bt, gt),
          N("gggg", bt, gt),
          N("GGGGG", Dt, vt),
          N("ggggg", Dt, vt),
          B(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
            t[r.substr(0, 2)] = C(e);
          }),
          B(["gg", "GG"], function (e, t, n, a) {
            t[a] = r.parseTwoDigitYear(e);
          }),
          T("Q", 0, "Qo", "quarter"),
          j("quarter", "Q"),
          A("quarter", 7),
          N("Q", pt),
          z("Q", function (e, t) {
            t[Pt] = 3 * (C(e) - 1);
          }),
          T("D", ["DD", 2], "Do", "date"),
          j("date", "D"),
          A("date", 9),
          N("D", Lt),
          N("DD", Lt, yt),
          N("Do", function (e, t) {
            return e
              ? t._dayOfMonthOrdinalParse || t._ordinalParse
              : t._dayOfMonthOrdinalParseLenient;
          }),
          z(["D", "DD"], Ct),
          z("Do", function (e, t) {
            t[Ct] = C(e.match(Lt)[0]);
          });
        var xn = R("Date", !0);
        T("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
          j("dayOfYear", "DDD"),
          A("dayOfYear", 4),
          N("DDD", kt),
          N("DDDD", Mt),
          z(["DDD", "DDDD"], function (e, t, n) {
            n._dayOfYear = C(e);
          }),
          T("m", ["mm", 2], 0, "minute"),
          j("minute", "m"),
          A("minute", 14),
          N("m", Lt),
          N("mm", Lt, yt),
          z(["m", "mm"], Wt);
        var Sn = R("Minutes", !1);
        T("s", ["ss", 2], 0, "second"),
          j("second", "s"),
          A("second", 15),
          N("s", Lt),
          N("ss", Lt, yt),
          z(["s", "ss"], Ft);
        var jn = R("Seconds", !1);
        T("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          T(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          T(0, ["SSS", 3], 0, "millisecond"),
          T(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
          }),
          T(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
          }),
          T(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          T(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          T(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          T(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          j("millisecond", "ms"),
          A("millisecond", 16),
          N("S", kt, pt),
          N("SS", kt, yt),
          N("SSS", kt, Mt);
        var Hn, En;
        for (Hn = "SSSS"; Hn.length <= 9; Hn += "S") N(Hn, Tt);
        for (Hn = "S"; Hn.length <= 9; Hn += "S")
          z(Hn, function (e, t) {
            t[Nt] = C(1e3 * ("0." + e));
          });
        (En = R("Milliseconds", !1)),
          T("z", 0, 0, "zoneAbbr"),
          T("zz", 0, 0, "zoneName");
        var An = M.prototype;
        (An.add = Ln),
          (An.calendar = function (e, t) {
            1 === arguments.length &&
              ((function (e) {
                return (
                  g(e) ||
                  l(e) ||
                  Oe(e) ||
                  d(e) ||
                  (function (e) {
                    var t = a(e),
                      n = !1;
                    return (
                      t &&
                        (n =
                          0 ===
                          e.filter(function (t) {
                            return !d(t) && Oe(e);
                          }).length),
                      t && n
                    );
                  })(e) ||
                  (function (e) {
                    var t,
                      n,
                      r = i(e) && !o(e),
                      a = !1,
                      u = [
                        "years",
                        "year",
                        "y",
                        "months",
                        "month",
                        "M",
                        "days",
                        "day",
                        "d",
                        "dates",
                        "date",
                        "D",
                        "hours",
                        "hour",
                        "h",
                        "minutes",
                        "minute",
                        "m",
                        "seconds",
                        "second",
                        "s",
                        "milliseconds",
                        "millisecond",
                        "ms",
                      ];
                    for (t = 0; t < u.length; t += 1)
                      (n = u[t]), (a = a || s(e, n));
                    return r && a;
                  })(e) ||
                  null === e ||
                  void 0 === e
                );
              })(arguments[0])
                ? ((e = arguments[0]), (t = void 0))
                : (function (e) {
                    var t,
                      n,
                      r = i(e) && !o(e),
                      a = !1,
                      u = [
                        "sameDay",
                        "nextDay",
                        "lastDay",
                        "nextWeek",
                        "lastWeek",
                        "sameElse",
                      ];
                    for (t = 0; t < u.length; t += 1)
                      (n = u[t]), (a = a || s(e, n));
                    return r && a;
                  })(arguments[0]) && ((t = arguments[0]), (e = void 0)));
            var n = e || ge(),
              u = De(n, this).startOf("day"),
              c = r.calendarFormat(this, u) || "sameElse",
              _ = t && (w(t[c]) ? t[c].call(this, n) : t[c]);
            return this.format(_ || this.localeData().calendar(c, this, ge(n)));
          }),
          (An.clone = function () {
            return new M(this);
          }),
          (An.diff = function (e, t, n) {
            var r, a, i;
            if (!this.isValid()) return NaN;
            if (!(r = De(e, this)).isValid()) return NaN;
            switch (
              ((a = 6e4 * (r.utcOffset() - this.utcOffset())), (t = H(t)))
            ) {
              case "year":
                i = Pe(this, r) / 12;
                break;
              case "month":
                i = Pe(this, r);
                break;
              case "quarter":
                i = Pe(this, r) / 3;
                break;
              case "second":
                i = (this - r) / 1e3;
                break;
              case "minute":
                i = (this - r) / 6e4;
                break;
              case "hour":
                i = (this - r) / 36e5;
                break;
              case "day":
                i = (this - r - a) / 864e5;
                break;
              case "week":
                i = (this - r - a) / 6048e5;
                break;
              default:
                i = this - r;
            }
            return n ? i : P(i);
          }),
          (An.endOf = function (e) {
            var t, n;
            if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid())
              return this;
            switch (((n = this._isUTC ? Ne : Fe), e)) {
              case "year":
                t = n(this.year() + 1, 0, 1) - 1;
                break;
              case "quarter":
                t =
                  n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
                break;
              case "month":
                t = n(this.year(), this.month() + 1, 1) - 1;
                break;
              case "week":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                  ) - 1;
                break;
              case "isoWeek":
                t =
                  n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                  ) - 1;
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date() + 1) - 1;
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t +=
                    Dn -
                    We(t + (this._isUTC ? 0 : this.utcOffset() * bn), Dn) -
                    1);
                break;
              case "minute":
                (t = this._d.valueOf()), (t += bn - We(t, bn) - 1);
                break;
              case "second":
                (t = this._d.valueOf()), (t += kn - We(t, kn) - 1);
            }
            return this._d.setTime(t), r.updateOffset(this, !0), this;
          }),
          (An.format = function (e) {
            e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
            var t = x(this, e);
            return this.localeData().postformat(t);
          }),
          (An.from = function (e, t) {
            return this.isValid() && ((g(e) && e.isValid()) || ge(e).isValid())
              ? Se({ to: this, from: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }),
          (An.fromNow = function (e) {
            return this.from(ge(), e);
          }),
          (An.to = function (e, t) {
            return this.isValid() && ((g(e) && e.isValid()) || ge(e).isValid())
              ? Se({ from: this, to: e }).locale(this.locale()).humanize(!t)
              : this.localeData().invalidDate();
          }),
          (An.toNow = function (e) {
            return this.to(ge(), e);
          }),
          (An.get = function (e) {
            return (e = H(e)), w(this[e]) ? this[e]() : this;
          }),
          (An.invalidAt = function () {
            return h(this).overflow;
          }),
          (An.isAfter = function (e, t) {
            var n = g(e) ? e : ge(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = H(t) || "millisecond")
                ? this.valueOf() > n.valueOf()
                : n.valueOf() < this.clone().startOf(t).valueOf())
            );
          }),
          (An.isBefore = function (e, t) {
            var n = g(e) ? e : ge(e);
            return (
              !(!this.isValid() || !n.isValid()) &&
              ("millisecond" === (t = H(t) || "millisecond")
                ? this.valueOf() < n.valueOf()
                : this.clone().endOf(t).valueOf() < n.valueOf())
            );
          }),
          (An.isBetween = function (e, t, n, r) {
            var a = g(e) ? e : ge(e),
              i = g(t) ? t : ge(t);
            return (
              !!(this.isValid() && a.isValid() && i.isValid()) &&
              ("(" === (r = r || "()")[0]
                ? this.isAfter(a, n)
                : !this.isBefore(a, n)) &&
              (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
            );
          }),
          (An.isSame = function (e, t) {
            var n,
              r = g(e) ? e : ge(e);
            return (
              !(!this.isValid() || !r.isValid()) &&
              ("millisecond" === (t = H(t) || "millisecond")
                ? this.valueOf() === r.valueOf()
                : ((n = r.valueOf()),
                  this.clone().startOf(t).valueOf() <= n &&
                    n <= this.clone().endOf(t).valueOf()))
            );
          }),
          (An.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t);
          }),
          (An.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t);
          }),
          (An.isValid = function () {
            return m(this);
          }),
          (An.lang = wn),
          (An.locale = Ce),
          (An.localeData = Re),
          (An.max = pn),
          (An.min = mn),
          (An.parsingFlags = function () {
            return _({}, h(this));
          }),
          (An.set = function (e, t) {
            if ("object" == typeof e) {
              var n,
                r = (function (e) {
                  var t,
                    n = [];
                  for (t in e) s(e, t) && n.push({ unit: t, priority: mt[t] });
                  return (
                    n.sort(function (e, t) {
                      return e.priority - t.priority;
                    }),
                    n
                  );
                })((e = E(e)));
              for (n = 0; n < r.length; n++) this[r[n].unit](e[r[n].unit]);
            } else if (((e = H(e)), w(this[e]))) return this[e](t);
            return this;
          }),
          (An.startOf = function (e) {
            var t, n;
            if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid())
              return this;
            switch (((n = this._isUTC ? Ne : Fe), e)) {
              case "year":
                t = n(this.year(), 0, 1);
                break;
              case "quarter":
                t = n(this.year(), this.month() - (this.month() % 3), 1);
                break;
              case "month":
                t = n(this.year(), this.month(), 1);
                break;
              case "week":
                t = n(this.year(), this.month(), this.date() - this.weekday());
                break;
              case "isoWeek":
                t = n(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1)
                );
                break;
              case "day":
              case "date":
                t = n(this.year(), this.month(), this.date());
                break;
              case "hour":
                (t = this._d.valueOf()),
                  (t -= We(t + (this._isUTC ? 0 : this.utcOffset() * bn), Dn));
                break;
              case "minute":
                (t = this._d.valueOf()), (t -= We(t, bn));
                break;
              case "second":
                (t = this._d.valueOf()), (t -= We(t, kn));
            }
            return this._d.setTime(t), r.updateOffset(this, !0), this;
          }),
          (An.subtract = Yn),
          (An.toArray = function () {
            var e = this;
            return [
              e.year(),
              e.month(),
              e.date(),
              e.hour(),
              e.minute(),
              e.second(),
              e.millisecond(),
            ];
          }),
          (An.toObject = function () {
            var e = this;
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds(),
            };
          }),
          (An.toDate = function () {
            return new Date(this.valueOf());
          }),
          (An.toISOString = function (e) {
            if (!this.isValid()) return null;
            var t = !0 !== e,
              n = t ? this.clone().utc() : this;
            return n.year() < 0 || n.year() > 9999
              ? x(
                  n,
                  t
                    ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                )
              : w(Date.prototype.toISOString)
              ? t
                ? this.toDate().toISOString()
                : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                    .toISOString()
                    .replace("Z", x(n, "Z"))
              : x(
                  n,
                  t
                    ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                    : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                );
          }),
          (An.inspect = function () {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e,
              t,
              n,
              r = "moment",
              a = "";
            return (
              this.isLocal() ||
                ((r =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (a = "Z")),
              (e = "[" + r + '("]'),
              (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
              (n = a + '[")]'),
              this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
            );
          }),
          "undefined" != typeof Symbol &&
            null != Symbol.for &&
            (An[Symbol.for("nodejs.util.inspect.custom")] = function () {
              return "Moment<" + this.format() + ">";
            }),
          (An.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (An.toString = function () {
            return this.clone()
              .locale("en")
              .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }),
          (An.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (An.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }),
          (An.creationData = function () {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }),
          (An.eraName = function () {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].name;
              if (r[e].until <= n && n <= r[e].since) return r[e].name;
            }
            return "";
          }),
          (An.eraNarrow = function () {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].narrow;
              if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
            }
            return "";
          }),
          (An.eraAbbr = function () {
            var e,
              t,
              n,
              r = this.localeData().eras();
            for (e = 0, t = r.length; e < t; ++e) {
              if (
                ((n = this.startOf("day").valueOf()),
                r[e].since <= n && n <= r[e].until)
              )
                return r[e].abbr;
              if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
            }
            return "";
          }),
          (An.eraYear = function () {
            var e,
              t,
              n,
              a,
              i = this.localeData().eras();
            for (e = 0, t = i.length; e < t; ++e)
              if (
                ((n = i[e].since <= i[e].until ? 1 : -1),
                (a = this.startOf("day").valueOf()),
                (i[e].since <= a && a <= i[e].until) ||
                  (i[e].until <= a && a <= i[e].since))
              )
                return (this.year() - r(i[e].since).year()) * n + i[e].offset;
            return this.year();
          }),
          (An.year = Vt),
          (An.isLeapYear = function () {
            return O(this.year());
          }),
          (An.weekYear = function (e) {
            return Ue.call(
              this,
              e,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }),
          (An.isoWeekYear = function (e) {
            return Ue.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
          }),
          (An.quarter = An.quarters =
            function (e) {
              return null == e
                ? Math.ceil((this.month() + 1) / 3)
                : this.month(3 * (e - 1) + (this.month() % 3));
            }),
          (An.month = G),
          (An.daysInMonth = function () {
            return q(this.year(), this.month());
          }),
          (An.week = An.weeks =
            function (e) {
              var t = this.localeData().week(this);
              return null == e ? t : this.add(7 * (e - t), "d");
            }),
          (An.isoWeek = An.isoWeeks =
            function (e) {
              var t = Q(this, 1, 4).week;
              return null == e ? t : this.add(7 * (e - t), "d");
            }),
          (An.weeksInYear = function () {
            var e = this.localeData()._week;
            return ee(this.year(), e.dow, e.doy);
          }),
          (An.weeksInWeekYear = function () {
            var e = this.localeData()._week;
            return ee(this.weekYear(), e.dow, e.doy);
          }),
          (An.isoWeeksInYear = function () {
            return ee(this.year(), 1, 4);
          }),
          (An.isoWeeksInISOWeekYear = function () {
            return ee(this.isoWeekYear(), 1, 4);
          }),
          (An.date = xn),
          (An.day = An.days =
            function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
              return null != e
                ? ((e = (function (e, t) {
                    return "string" != typeof e
                      ? e
                      : isNaN(e)
                      ? "number" == typeof (e = t.weekdaysParse(e))
                        ? e
                        : null
                      : parseInt(e, 10);
                  })(e, this.localeData())),
                  this.add(e - t, "d"))
                : t;
            }),
          (An.weekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d");
          }),
          (An.isoWeekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              var t = (function (e, t) {
                return "string" == typeof e
                  ? t.weekdaysParse(e) % 7 || 7
                  : isNaN(e)
                  ? null
                  : e;
              })(e, this.localeData());
              return this.day(this.day() % 7 ? t : t - 7);
            }
            return this.day() || 7;
          }),
          (An.dayOfYear = function (e) {
            var t =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) /
                  864e5
              ) + 1;
            return null == e ? t : this.add(e - t, "d");
          }),
          (An.hour = An.hours = nn),
          (An.minute = An.minutes = Sn),
          (An.second = An.seconds = jn),
          (An.millisecond = An.milliseconds = En),
          (An.utcOffset = function (e, t, n) {
            var a,
              i = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
              if ("string" == typeof e) {
                if (null === (e = be(jt, e))) return this;
              } else Math.abs(e) < 16 && !n && (e *= 60);
              return (
                !this._isUTC && t && (a = Te(this)),
                (this._offset = e),
                (this._isUTC = !0),
                null != a && this.add(a, "m"),
                i !== e &&
                  (!t || this._changeInProgress
                    ? Ae(this, Se(e - i, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      r.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? i : Te(this);
          }),
          (An.utc = function (e) {
            return this.utcOffset(0, e);
          }),
          (An.local = function (e) {
            return (
              this._isUTC &&
                (this.utcOffset(0, e),
                (this._isUTC = !1),
                e && this.subtract(Te(this), "m")),
              this
            );
          }),
          (An.parseZone = function () {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var e = be(St, this._i);
              null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
            }
            return this;
          }),
          (An.hasAlignedHourOffset = function (e) {
            return (
              !!this.isValid() &&
              ((e = e ? ge(e).utcOffset() : 0),
              (this.utcOffset() - e) % 60 == 0)
            );
          }),
          (An.isDST = function () {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }),
          (An.isLocal = function () {
            return !!this.isValid() && !this._isUTC;
          }),
          (An.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC;
          }),
          (An.isUtc = xe),
          (An.isUTC = xe),
          (An.zoneAbbr = function () {
            return this._isUTC ? "UTC" : "";
          }),
          (An.zoneName = function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }),
          (An.dates = L("dates accessor is deprecated. Use date instead.", xn)),
          (An.months = L(
            "months accessor is deprecated. Use month instead",
            G
          )),
          (An.years = L("years accessor is deprecated. Use year instead", Vt)),
          (An.zone = L(
            "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
            function (e, t) {
              return null != e
                ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
                : -this.utcOffset();
            }
          )),
          (An.isDSTShifted = L(
            "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
            function () {
              if (!u(this._isDSTShifted)) return this._isDSTShifted;
              var e,
                t = {};
              return (
                y(t, this),
                (t = ye(t))._a
                  ? ((e = t._isUTC ? f(t._a) : ge(t._a)),
                    (this._isDSTShifted =
                      this.isValid() &&
                      (function (e, t, n) {
                        var r,
                          a = Math.min(e.length, t.length),
                          i = Math.abs(e.length - t.length),
                          s = 0;
                        for (r = 0; r < a; r++)
                          ((n && e[r] !== t[r]) ||
                            (!n && C(e[r]) !== C(t[r]))) &&
                            s++;
                        return s + i;
                      })(t._a, e.toArray()) > 0))
                  : (this._isDSTShifted = !1),
                this._isDSTShifted
              );
            }
          ));
        var On = b.prototype;
        (On.calendar = function (e, t, n) {
          var r = this._calendar[e] || this._calendar.sameElse;
          return w(r) ? r.call(t, n) : r;
        }),
          (On.longDateFormat = function (e) {
            var t = this._longDateFormat[e],
              n = this._longDateFormat[e.toUpperCase()];
            return t || !n
              ? t
              : ((this._longDateFormat[e] = n
                  .match(lt)
                  .map(function (e) {
                    return "MMMM" === e ||
                      "MM" === e ||
                      "DD" === e ||
                      "dddd" === e
                      ? e.slice(1)
                      : e;
                  })
                  .join("")),
                this._longDateFormat[e]);
          }),
          (On.invalidDate = function () {
            return this._invalidDate;
          }),
          (On.ordinal = function (e) {
            return this._ordinal.replace("%d", e);
          }),
          (On.preparse = qe),
          (On.postformat = qe),
          (On.relativeTime = function (e, t, n, r) {
            var a = this._relativeTime[n];
            return w(a) ? a(e, t, n, r) : a.replace(/%d/i, e);
          }),
          (On.pastFuture = function (e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return w(n) ? n(t) : n.replace(/%s/i, t);
          }),
          (On.set = function (e) {
            var t, n;
            for (n in e)
              s(e, n) && (w((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
            (this._config = e),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }),
          (On.eras = function (e, t) {
            var n,
              a,
              i,
              s = this._eras || le("en")._eras;
            for (n = 0, a = s.length; n < a; ++n) {
              switch (typeof s[n].since) {
                case "string":
                  (i = r(s[n].since).startOf("day")),
                    (s[n].since = i.valueOf());
              }
              switch (typeof s[n].until) {
                case "undefined":
                  s[n].until = 1 / 0;
                  break;
                case "string":
                  (i = r(s[n].until).startOf("day").valueOf()),
                    (s[n].until = i.valueOf());
              }
            }
            return s;
          }),
          (On.erasParse = function (e, t, n) {
            var r,
              a,
              i,
              s,
              o,
              u = this.eras();
            for (e = e.toUpperCase(), r = 0, a = u.length; r < a; ++r)
              if (
                ((i = u[r].name.toUpperCase()),
                (s = u[r].abbr.toUpperCase()),
                (o = u[r].narrow.toUpperCase()),
                n)
              )
                switch (t) {
                  case "N":
                  case "NN":
                  case "NNN":
                    if (s === e) return u[r];
                    break;
                  case "NNNN":
                    if (i === e) return u[r];
                    break;
                  case "NNNNN":
                    if (o === e) return u[r];
                }
              else if ([i, s, o].indexOf(e) >= 0) return u[r];
          }),
          (On.erasConvertYear = function (e, t) {
            var n = e.since <= e.until ? 1 : -1;
            return void 0 === t
              ? r(e.since).year()
              : r(e.since).year() + (t - e.offset) * n;
          }),
          (On.erasAbbrRegex = function (e) {
            return (
              s(this, "_erasAbbrRegex") || ze.call(this),
              e ? this._erasAbbrRegex : this._erasRegex
            );
          }),
          (On.erasNameRegex = function (e) {
            return (
              s(this, "_erasNameRegex") || ze.call(this),
              e ? this._erasNameRegex : this._erasRegex
            );
          }),
          (On.erasNarrowRegex = function (e) {
            return (
              s(this, "_erasNarrowRegex") || ze.call(this),
              e ? this._erasNarrowRegex : this._erasRegex
            );
          }),
          (On.months = function (e, t) {
            return e
              ? a(this._months)
                ? this._months[e.month()]
                : this._months[
                    (this._months.isFormat || qt).test(t)
                      ? "format"
                      : "standalone"
                  ][e.month()]
              : a(this._months)
              ? this._months
              : this._months.standalone;
          }),
          (On.monthsShort = function (e, t) {
            return e
              ? a(this._monthsShort)
                ? this._monthsShort[e.month()]
                : this._monthsShort[qt.test(t) ? "format" : "standalone"][
                    e.month()
                  ]
              : a(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }),
          (On.monthsParse = function (e, t, n) {
            var r, a, i;
            if (this._monthsParseExact)
              return function (e, t, n) {
                var r,
                  a,
                  i,
                  s = e.toLocaleLowerCase();
                if (!this._monthsParse)
                  for (
                    this._monthsParse = [],
                      this._longMonthsParse = [],
                      this._shortMonthsParse = [],
                      r = 0;
                    r < 12;
                    ++r
                  )
                    (i = f([2e3, r])),
                      (this._shortMonthsParse[r] = this.monthsShort(
                        i,
                        ""
                      ).toLocaleLowerCase()),
                      (this._longMonthsParse[r] = this.months(
                        i,
                        ""
                      ).toLocaleLowerCase());
                return n
                  ? "MMM" === t
                    ? -1 !== (a = Et.call(this._shortMonthsParse, s))
                      ? a
                      : null
                    : -1 !== (a = Et.call(this._longMonthsParse, s))
                    ? a
                    : null
                  : "MMM" === t
                  ? -1 !== (a = Et.call(this._shortMonthsParse, s))
                    ? a
                    : -1 !== (a = Et.call(this._longMonthsParse, s))
                    ? a
                    : null
                  : -1 !== (a = Et.call(this._longMonthsParse, s))
                  ? a
                  : -1 !== (a = Et.call(this._shortMonthsParse, s))
                  ? a
                  : null;
              }.call(this, e, t, n);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                r = 0;
              r < 12;
              r++
            ) {
              if (
                ((a = f([2e3, r])),
                n &&
                  !this._longMonthsParse[r] &&
                  ((this._longMonthsParse[r] = new RegExp(
                    "^" + this.months(a, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[r] = new RegExp(
                    "^" + this.monthsShort(a, "").replace(".", "") + "$",
                    "i"
                  ))),
                n ||
                  this._monthsParse[r] ||
                  ((i =
                    "^" + this.months(a, "") + "|^" + this.monthsShort(a, "")),
                  (this._monthsParse[r] = new RegExp(i.replace(".", ""), "i"))),
                n && "MMMM" === t && this._longMonthsParse[r].test(e))
              )
                return r;
              if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                return r;
              if (!n && this._monthsParse[r].test(e)) return r;
            }
          }),
          (On.monthsRegex = function (e) {
            return this._monthsParseExact
              ? (s(this, "_monthsRegex") || V.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex)
              : (s(this, "_monthsRegex") || (this._monthsRegex = Gt),
                this._monthsStrictRegex && e
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }),
          (On.monthsShortRegex = function (e) {
            return this._monthsParseExact
              ? (s(this, "_monthsRegex") || V.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = Jt),
                this._monthsShortStrictRegex && e
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }),
          (On.week = function (e) {
            return Q(e, this._week.dow, this._week.doy).week;
          }),
          (On.firstDayOfYear = function () {
            return this._week.doy;
          }),
          (On.firstDayOfWeek = function () {
            return this._week.dow;
          }),
          (On.weekdays = function (e, t) {
            var n = a(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  e && !0 !== e && this._weekdays.isFormat.test(t)
                    ? "format"
                    : "standalone"
                ];
            return !0 === e ? te(n, this._week.dow) : e ? n[e.day()] : n;
          }),
          (On.weekdaysMin = function (e) {
            return !0 === e
              ? te(this._weekdaysMin, this._week.dow)
              : e
              ? this._weekdaysMin[e.day()]
              : this._weekdaysMin;
          }),
          (On.weekdaysShort = function (e) {
            return !0 === e
              ? te(this._weekdaysShort, this._week.dow)
              : e
              ? this._weekdaysShort[e.day()]
              : this._weekdaysShort;
          }),
          (On.weekdaysParse = function (e, t, n) {
            var r, a, i;
            if (this._weekdaysParseExact)
              return function (e, t, n) {
                var r,
                  a,
                  i,
                  s = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                  for (
                    this._weekdaysParse = [],
                      this._shortWeekdaysParse = [],
                      this._minWeekdaysParse = [],
                      r = 0;
                    r < 7;
                    ++r
                  )
                    (i = f([2e3, 1]).day(r)),
                      (this._minWeekdaysParse[r] = this.weekdaysMin(
                        i,
                        ""
                      ).toLocaleLowerCase()),
                      (this._shortWeekdaysParse[r] = this.weekdaysShort(
                        i,
                        ""
                      ).toLocaleLowerCase()),
                      (this._weekdaysParse[r] = this.weekdays(
                        i,
                        ""
                      ).toLocaleLowerCase());
                return n
                  ? "dddd" === t
                    ? -1 !== (a = Et.call(this._weekdaysParse, s))
                      ? a
                      : null
                    : "ddd" === t
                    ? -1 !== (a = Et.call(this._shortWeekdaysParse, s))
                      ? a
                      : null
                    : -1 !== (a = Et.call(this._minWeekdaysParse, s))
                    ? a
                    : null
                  : "dddd" === t
                  ? -1 !== (a = Et.call(this._weekdaysParse, s))
                    ? a
                    : -1 !== (a = Et.call(this._shortWeekdaysParse, s))
                    ? a
                    : -1 !== (a = Et.call(this._minWeekdaysParse, s))
                    ? a
                    : null
                  : "ddd" === t
                  ? -1 !== (a = Et.call(this._shortWeekdaysParse, s))
                    ? a
                    : -1 !== (a = Et.call(this._weekdaysParse, s))
                    ? a
                    : -1 !== (a = Et.call(this._minWeekdaysParse, s))
                    ? a
                    : null
                  : -1 !== (a = Et.call(this._minWeekdaysParse, s))
                  ? a
                  : -1 !== (a = Et.call(this._weekdaysParse, s))
                  ? a
                  : -1 !== (a = Et.call(this._shortWeekdaysParse, s))
                  ? a
                  : null;
              }.call(this, e, t, n);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                r = 0;
              r < 7;
              r++
            ) {
              if (
                ((a = f([2e3, 1]).day(r)),
                n &&
                  !this._fullWeekdaysParse[r] &&
                  ((this._fullWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[r] = new RegExp(
                    "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[r] ||
                  ((i =
                    "^" +
                    this.weekdays(a, "") +
                    "|^" +
                    this.weekdaysShort(a, "") +
                    "|^" +
                    this.weekdaysMin(a, "")),
                  (this._weekdaysParse[r] = new RegExp(
                    i.replace(".", ""),
                    "i"
                  ))),
                n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
              )
                return r;
              if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
                return r;
              if (n && "dd" === t && this._minWeekdaysParse[r].test(e))
                return r;
              if (!n && this._weekdaysParse[r].test(e)) return r;
            }
          }),
          (On.weekdaysRegex = function (e) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || ne.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Zt),
                this._weekdaysStrictRegex && e
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }),
          (On.weekdaysShortRegex = function (e) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || ne.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (s(this, "_weekdaysShortRegex") ||
                  (this._weekdaysShortRegex = Qt),
                this._weekdaysShortStrictRegex && e
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }),
          (On.weekdaysMinRegex = function (e) {
            return this._weekdaysParseExact
              ? (s(this, "_weekdaysRegex") || ne.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = en),
                this._weekdaysMinStrictRegex && e
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }),
          (On.isPM = function (e) {
            return "p" === (e + "").toLowerCase().charAt(0);
          }),
          (On.meridiem = function (e, t, n) {
            return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
          }),
          ue("en", {
            eras: [
              {
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "Before Christ",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 === C((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
          }),
          (r.lang = L(
            "moment.lang is deprecated. Use moment.locale instead.",
            ue
          )),
          (r.langData = L(
            "moment.langData is deprecated. Use moment.localeData instead.",
            le
          ));
        var Pn = Math.abs,
          Cn = Qe("ms"),
          Rn = Qe("s"),
          Wn = Qe("m"),
          Fn = Qe("h"),
          Nn = Qe("d"),
          In = Qe("w"),
          zn = Qe("M"),
          Bn = Qe("Q"),
          Un = Qe("y"),
          qn = et("milliseconds"),
          Jn = et("seconds"),
          Gn = et("minutes"),
          Vn = et("hours"),
          $n = et("days"),
          Kn = et("months"),
          Xn = et("years"),
          Zn = Math.round,
          Qn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 },
          er = Math.abs,
          tr = Le.prototype;
        //! moment.js
        return (
          (tr.isValid = function () {
            return this._isValid;
          }),
          (tr.abs = function () {
            var e = this._data;
            return (
              (this._milliseconds = Pn(this._milliseconds)),
              (this._days = Pn(this._days)),
              (this._months = Pn(this._months)),
              (e.milliseconds = Pn(e.milliseconds)),
              (e.seconds = Pn(e.seconds)),
              (e.minutes = Pn(e.minutes)),
              (e.hours = Pn(e.hours)),
              (e.months = Pn(e.months)),
              (e.years = Pn(e.years)),
              this
            );
          }),
          (tr.add = function (e, t) {
            return $e(this, e, t, 1);
          }),
          (tr.subtract = function (e, t) {
            return $e(this, e, t, -1);
          }),
          (tr.as = function (e) {
            if (!this.isValid()) return NaN;
            var t,
              n,
              r = this._milliseconds;
            if ("month" === (e = H(e)) || "quarter" === e || "year" === e)
              switch (
                ((t = this._days + r / 864e5), (n = this._months + Xe(t)), e)
              ) {
                case "month":
                  return n;
                case "quarter":
                  return n / 3;
                case "year":
                  return n / 12;
              }
            else
              switch (((t = this._days + Math.round(Ze(this._months))), e)) {
                case "week":
                  return t / 7 + r / 6048e5;
                case "day":
                  return t + r / 864e5;
                case "hour":
                  return 24 * t + r / 36e5;
                case "minute":
                  return 1440 * t + r / 6e4;
                case "second":
                  return 86400 * t + r / 1e3;
                case "millisecond":
                  return Math.floor(864e5 * t) + r;
                default:
                  throw new Error("Unknown unit " + e);
              }
          }),
          (tr.asMilliseconds = Cn),
          (tr.asSeconds = Rn),
          (tr.asMinutes = Wn),
          (tr.asHours = Fn),
          (tr.asDays = Nn),
          (tr.asWeeks = In),
          (tr.asMonths = zn),
          (tr.asQuarters = Bn),
          (tr.asYears = Un),
          (tr.valueOf = function () {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * C(this._months / 12)
              : NaN;
          }),
          (tr._bubble = function () {
            var e,
              t,
              n,
              r,
              a,
              i = this._milliseconds,
              s = this._days,
              o = this._months,
              u = this._data;
            return (
              (i >= 0 && s >= 0 && o >= 0) ||
                (i <= 0 && s <= 0 && o <= 0) ||
                ((i += 864e5 * Ke(Ze(o) + s)), (s = 0), (o = 0)),
              (u.milliseconds = i % 1e3),
              (e = P(i / 1e3)),
              (u.seconds = e % 60),
              (t = P(e / 60)),
              (u.minutes = t % 60),
              (n = P(t / 60)),
              (u.hours = n % 24),
              (s += P(n / 24)),
              (a = P(Xe(s))),
              (o += a),
              (s -= Ke(Ze(a))),
              (r = P(o / 12)),
              (o %= 12),
              (u.days = s),
              (u.months = o),
              (u.years = r),
              this
            );
          }),
          (tr.clone = function () {
            return Se(this);
          }),
          (tr.get = function (e) {
            return (e = H(e)), this.isValid() ? this[e + "s"]() : NaN;
          }),
          (tr.milliseconds = qn),
          (tr.seconds = Jn),
          (tr.minutes = Gn),
          (tr.hours = Vn),
          (tr.days = $n),
          (tr.weeks = function () {
            return P(this.days() / 7);
          }),
          (tr.months = Kn),
          (tr.years = Xn),
          (tr.humanize = function (e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n,
              r,
              a = !1,
              i = Qn;
            return (
              "object" == typeof e && ((t = e), (e = !1)),
              "boolean" == typeof e && (a = e),
              "object" == typeof t &&
                ((i = Object.assign({}, Qn, t)),
                null != t.s && null == t.ss && (i.ss = t.s - 1)),
              (n = this.localeData()),
              (r = (function (e, t, n, r) {
                var a = Se(e).abs(),
                  i = Zn(a.as("s")),
                  s = Zn(a.as("m")),
                  o = Zn(a.as("h")),
                  u = Zn(a.as("d")),
                  d = Zn(a.as("M")),
                  l = Zn(a.as("w")),
                  c = Zn(a.as("y")),
                  _ =
                    (i <= n.ss && ["s", i]) ||
                    (i < n.s && ["ss", i]) ||
                    (s <= 1 && ["m"]) ||
                    (s < n.m && ["mm", s]) ||
                    (o <= 1 && ["h"]) ||
                    (o < n.h && ["hh", o]) ||
                    (u <= 1 && ["d"]) ||
                    (u < n.d && ["dd", u]);
                return (
                  null != n.w &&
                    (_ = _ || (l <= 1 && ["w"]) || (l < n.w && ["ww", l])),
                  (_ = _ ||
                    (d <= 1 && ["M"]) ||
                    (d < n.M && ["MM", d]) ||
                    (c <= 1 && ["y"]) || ["yy", c]),
                  (_[2] = t),
                  (_[3] = +e > 0),
                  (_[4] = r),
                  function (e, t, n, r, a) {
                    return a.relativeTime(t || 1, !!n, e, r);
                  }.apply(null, _)
                );
              })(this, !a, i, n)),
              a && (r = n.pastFuture(+this, r)),
              n.postformat(r)
            );
          }),
          (tr.toISOString = nt),
          (tr.toString = nt),
          (tr.toJSON = nt),
          (tr.locale = Ce),
          (tr.localeData = Re),
          (tr.toIsoString = L(
            "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
            nt
          )),
          (tr.lang = wn),
          T("X", 0, 0, "unix"),
          T("x", 0, 0, "valueOf"),
          N("x", xt),
          N("X", /[+-]?\d+(\.\d{1,3})?/),
          z("X", function (e, t, n) {
            n._d = new Date(1e3 * parseFloat(e));
          }),
          z("x", function (e, t, n) {
            n._d = new Date(C(e));
          }),
          (r.version = "2.27.0"),
          (function (e) {
            rt = e;
          })(ge),
          (r.fn = An),
          (r.min = function () {
            return ve("isBefore", [].slice.call(arguments, 0));
          }),
          (r.max = function () {
            return ve("isAfter", [].slice.call(arguments, 0));
          }),
          (r.now = function () {
            return Date.now ? Date.now() : +new Date();
          }),
          (r.utc = f),
          (r.unix = function (e) {
            return ge(1e3 * e);
          }),
          (r.months = function (e, t) {
            return Ge(e, t, "months");
          }),
          (r.isDate = l),
          (r.locale = ue),
          (r.invalid = p),
          (r.duration = Se),
          (r.isMoment = g),
          (r.weekdays = function (e, t, n) {
            return Ve(e, t, n, "weekdays");
          }),
          (r.parseZone = function () {
            return ge.apply(null, arguments).parseZone();
          }),
          (r.localeData = le),
          (r.isDuration = Ye),
          (r.monthsShort = function (e, t) {
            return Ge(e, t, "monthsShort");
          }),
          (r.weekdaysMin = function (e, t, n) {
            return Ve(e, t, n, "weekdaysMin");
          }),
          (r.defineLocale = de),
          (r.updateLocale = function (e, t) {
            if (null != t) {
              var n,
                r,
                a = rn;
              null != an[e] && null != an[e].parentLocale
                ? an[e].set(k(an[e]._config, t))
                : (null != (r = oe(e)) && (a = r._config),
                  (t = k(a, t)),
                  null == r && (t.abbr = e),
                  ((n = new b(t)).parentLocale = an[e]),
                  (an[e] = n)),
                ue(e);
            } else
              null != an[e] &&
                (null != an[e].parentLocale
                  ? ((an[e] = an[e].parentLocale), e === ue() && ue(e))
                  : null != an[e] && delete an[e]);
            return an[e];
          }),
          (r.locales = function () {
            return ut(an);
          }),
          (r.weekdaysShort = function (e, t, n) {
            return Ve(e, t, n, "weekdaysShort");
          }),
          (r.normalizeUnits = H),
          (r.relativeTimeRounding = function (e) {
            return void 0 === e ? Zn : "function" == typeof e && ((Zn = e), !0);
          }),
          (r.relativeTimeThreshold = function (e, t) {
            return (
              void 0 !== Qn[e] &&
              (void 0 === t
                ? Qn[e]
                : ((Qn[e] = t), "s" === e && (Qn.ss = t - 1), !0))
            );
          }),
          (r.calendarFormat = function (e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6
              ? "sameElse"
              : n < -1
              ? "lastWeek"
              : n < 0
              ? "lastDay"
              : n < 1
              ? "sameDay"
              : n < 2
              ? "nextDay"
              : n < 7
              ? "nextWeek"
              : "sameElse";
          }),
          (r.prototype = An),
          (r.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM",
          }),
          r
        );
      });
    }.call(t, n(57)(e)));
  },
  ,
  function (e, t, n) {
    var r, a;
    /*!
     * jQuery JavaScript Library v3.2.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2017-03-20T18:59Z
     */
    !(function (t, n) {
      "use strict";
      "object" == typeof e && "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";
      function s(e, t) {
        var n = (t = t || $).createElement("script");
        (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
      }
      function o(e) {
        var t = !!e && "length" in e && e.length,
          n = oe.type(e);
        return (
          "function" !== n &&
          !oe.isWindow(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      function d(e, t, n) {
        return oe.isFunction(t)
          ? oe.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? oe.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? oe.grep(e, function (e) {
              return ee.call(t, e) > -1 !== n;
            })
          : pe.test(t)
          ? oe.filter(t, e, n)
          : ((t = oe.filter(t, e)),
            oe.grep(e, function (e) {
              return ee.call(t, e) > -1 !== n && 1 === e.nodeType;
            }));
      }
      function l(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      function c(e) {
        return e;
      }
      function _(e) {
        throw e;
      }
      function f(e, t, n, r) {
        var a;
        try {
          e && oe.isFunction((a = e.promise))
            ? a.call(e).done(t).fail(n)
            : e && oe.isFunction((a = e.then))
            ? a.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      function h() {
        $.removeEventListener("DOMContentLoaded", h),
          n.removeEventListener("load", h),
          oe.ready();
      }
      function m() {
        this.expando = oe.expando + m.uid++;
      }
      function p(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(Se, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : xe.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Te.set(e, t, n);
          } else n = void 0;
        return n;
      }
      function y(e, t, n, r) {
        var a,
          i = 1,
          s = 20,
          o = r
            ? function () {
                return r.cur();
              }
            : function () {
                return oe.css(e, t, "");
              },
          u = o(),
          d = (n && n[3]) || (oe.cssNumber[t] ? "" : "px"),
          l = (oe.cssNumber[t] || ("px" !== d && +u)) && He.exec(oe.css(e, t));
        if (l && l[3] !== d) {
          (d = d || l[3]), (n = n || []), (l = +u || 1);
          do {
            (l /= i = i || ".5"), oe.style(e, t, l + d);
          } while (i !== (i = o() / u) && 1 !== i && --s);
        }
        return (
          n &&
            ((l = +l || +u || 0),
            (a = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = d), (r.start = l), (r.end = a))),
          a
        );
      }
      function M(e, t) {
        for (var n, r, a = [], i = 0, s = e.length; i < s; i++)
          (r = e[i]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((a[i] = De.get(r, "display") || null),
                  a[i] || (r.style.display = "")),
                "" === r.style.display &&
                  Ae(r) &&
                  (a[i] = (function (e) {
                    var t,
                      n = e.ownerDocument,
                      r = e.nodeName,
                      a = Pe[r];
                    return (
                      a ||
                      ((t = n.body.appendChild(n.createElement(r))),
                      (a = oe.css(t, "display")),
                      t.parentNode.removeChild(t),
                      "none" === a && (a = "block"),
                      (Pe[r] = a),
                      a)
                    );
                  })(r)))
              : "none" !== n && ((a[i] = "none"), De.set(r, "display", n)));
        for (i = 0; i < s; i++) null != a[i] && (e[i].style.display = a[i]);
        return e;
      }
      function g(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && u(e, t)) ? oe.merge([e], n) : n
        );
      }
      function v(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"));
      }
      function L(e, t, n, r, a) {
        for (
          var i,
            s,
            o,
            u,
            d,
            l,
            c = t.createDocumentFragment(),
            _ = [],
            f = 0,
            h = e.length;
          f < h;
          f++
        )
          if ((i = e[f]) || 0 === i)
            if ("object" === oe.type(i)) oe.merge(_, i.nodeType ? [i] : i);
            else if (Ne.test(i)) {
              for (
                s = s || c.appendChild(t.createElement("div")),
                  o = (Re.exec(i) || ["", ""])[1].toLowerCase(),
                  u = Fe[o] || Fe._default,
                  s.innerHTML = u[1] + oe.htmlPrefilter(i) + u[2],
                  l = u[0];
                l--;

              )
                s = s.lastChild;
              oe.merge(_, s.childNodes), ((s = c.firstChild).textContent = "");
            } else _.push(t.createTextNode(i));
        for (c.textContent = "", f = 0; (i = _[f++]); )
          if (r && oe.inArray(i, r) > -1) a && a.push(i);
          else if (
            ((d = oe.contains(i.ownerDocument, i)),
            (s = g(c.appendChild(i), "script")),
            d && v(s),
            n)
          )
            for (l = 0; (i = s[l++]); ) We.test(i.type || "") && n.push(i);
        return c;
      }
      function Y() {
        return !0;
      }
      function w() {
        return !1;
      }
      function k() {
        try {
          return $.activeElement;
        } catch (e) {}
      }
      function b(e, t, n, r, a, i) {
        var s, o;
        if ("object" == typeof t) {
          "string" != typeof n && ((r = r || n), (n = void 0));
          for (o in t) b(e, o, n, r, t[o], i);
          return e;
        }
        if (
          (null == r && null == a
            ? ((a = n), (r = n = void 0))
            : null == a &&
              ("string" == typeof n
                ? ((a = r), (r = void 0))
                : ((a = r), (r = n), (n = void 0))),
          !1 === a)
        )
          a = w;
        else if (!a) return e;
        return (
          1 === i &&
            ((s = a),
            ((a = function (e) {
              return oe().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = oe.guid++))),
          e.each(function () {
            oe.event.add(this, t, a, r, n);
          })
        );
      }
      function D(e, t) {
        return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr")
          ? oe(">tbody", e)[0] || e
          : e;
      }
      function T(e, t) {
        var n, r, a, i, s, o, u, d;
        if (1 === t.nodeType) {
          if (
            De.hasData(e) &&
            ((i = De.access(e)), (s = De.set(t, i)), (d = i.events))
          ) {
            delete s.handle, (s.events = {});
            for (a in d)
              for (n = 0, r = d[a].length; n < r; n++)
                oe.event.add(t, a, d[a][n]);
          }
          Te.hasData(e) &&
            ((o = Te.access(e)), (u = oe.extend({}, o)), Te.set(t, u));
        }
      }
      function x(e, t, n, r) {
        t = Z.apply([], t);
        var a,
          i,
          o,
          u,
          d,
          l,
          c = 0,
          _ = e.length,
          f = _ - 1,
          h = t[0],
          m = oe.isFunction(h);
        if (
          m ||
          (_ > 1 && "string" == typeof h && !se.checkClone && Ge.test(h))
        )
          return e.each(function (a) {
            var i = e.eq(a);
            m && (t[0] = h.call(this, a, i.html())), x(i, t, n, r);
          });
        if (
          _ &&
          ((a = L(t, e[0].ownerDocument, !1, e, r)),
          (i = a.firstChild),
          1 === a.childNodes.length && (a = i),
          i || r)
        ) {
          for (
            u = (o = oe.map(g(a, "script"), function (e) {
              return (
                (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
              );
            })).length;
            c < _;
            c++
          )
            (d = a),
              c !== f &&
                ((d = oe.clone(d, !0, !0)), u && oe.merge(o, g(d, "script"))),
              n.call(e[c], d, c);
          if (u)
            for (
              l = o[o.length - 1].ownerDocument,
                oe.map(o, function (e) {
                  var t = Ve.exec(e.type);
                  return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
                }),
                c = 0;
              c < u;
              c++
            )
              (d = o[c]),
                We.test(d.type || "") &&
                  !De.access(d, "globalEval") &&
                  oe.contains(l, d) &&
                  (d.src
                    ? oe._evalUrl && oe._evalUrl(d.src)
                    : s(d.textContent.replace($e, ""), l));
        }
        return e;
      }
      function S(e, t, n) {
        for (var r, a = t ? oe.filter(t, e) : e, i = 0; null != (r = a[i]); i++)
          n || 1 !== r.nodeType || oe.cleanData(g(r)),
            r.parentNode &&
              (n && oe.contains(r.ownerDocument, r) && v(g(r, "script")),
              r.parentNode.removeChild(r));
        return e;
      }
      function j(e, t, n) {
        var r,
          a,
          i,
          s,
          o = e.style;
        return (
          (n = n || Ze(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              oe.contains(e.ownerDocument, e) ||
              (s = oe.style(e, t)),
            !se.pixelMarginRight() &&
              Xe.test(s) &&
              Ke.test(t) &&
              ((r = o.width),
              (a = o.minWidth),
              (i = o.maxWidth),
              (o.minWidth = o.maxWidth = o.width = s),
              (s = n.width),
              (o.width = r),
              (o.minWidth = a),
              (o.maxWidth = i))),
          void 0 !== s ? s + "" : s
        );
      }
      function H(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      function E(e) {
        var t = oe.cssProps[e];
        return (
          t ||
            (t = oe.cssProps[e] =
              (function (e) {
                if (e in at) return e;
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = rt.length;
                  n--;

                )
                  if ((e = rt[n] + t) in at) return e;
              })(e) || e),
          t
        );
      }
      function A(e, t, n) {
        var r = He.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function O(e, t, n, r, a) {
        var i,
          s = 0;
        for (
          i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
          i < 4;
          i += 2
        )
          "margin" === n && (s += oe.css(e, n + Ee[i], !0, a)),
            r
              ? ("content" === n && (s -= oe.css(e, "padding" + Ee[i], !0, a)),
                "margin" !== n &&
                  (s -= oe.css(e, "border" + Ee[i] + "Width", !0, a)))
              : ((s += oe.css(e, "padding" + Ee[i], !0, a)),
                "padding" !== n &&
                  (s += oe.css(e, "border" + Ee[i] + "Width", !0, a)));
        return s;
      }
      function P(e, t, n) {
        var r,
          a = Ze(e),
          i = j(e, t, a),
          s = "border-box" === oe.css(e, "boxSizing", !1, a);
        return Xe.test(i)
          ? i
          : ((r = s && (se.boxSizingReliable() || i === e.style[t])),
            "auto" === i && (i = e["offset" + t[0].toUpperCase() + t.slice(1)]),
            (i = parseFloat(i) || 0) +
              O(e, t, n || (s ? "border" : "content"), r, a) +
              "px");
      }
      function C(e, t, n, r, a) {
        return new C.prototype.init(e, t, n, r, a);
      }
      function R() {
        st &&
          (!1 === $.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(R)
            : n.setTimeout(R, oe.fx.interval),
          oe.fx.tick());
      }
      function W() {
        return (
          n.setTimeout(function () {
            it = void 0;
          }),
          (it = oe.now())
        );
      }
      function F(e, t) {
        var n,
          r = 0,
          a = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          a["margin" + (n = Ee[r])] = a["padding" + n] = e;
        return t && (a.opacity = a.width = e), a;
      }
      function N(e, t, n) {
        for (
          var r,
            a = (I.tweeners[t] || []).concat(I.tweeners["*"]),
            i = 0,
            s = a.length;
          i < s;
          i++
        )
          if ((r = a[i].call(n, t, e))) return r;
      }
      function I(e, t, n) {
        var r,
          a,
          i = 0,
          s = I.prefilters.length,
          o = oe.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (a) return !1;
            for (
              var t = it || W(),
                n = Math.max(0, d.startTime + d.duration - t),
                r = 1 - (n / d.duration || 0),
                i = 0,
                s = d.tweens.length;
              i < s;
              i++
            )
              d.tweens[i].run(r);
            return (
              o.notifyWith(e, [d, r, n]),
              r < 1 && s
                ? n
                : (s || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
            );
          },
          d = o.promise({
            elem: e,
            props: oe.extend({}, t),
            opts: oe.extend(
              !0,
              { specialEasing: {}, easing: oe.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: it || W(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = oe.Tween(
                e,
                d.opts,
                t,
                n,
                d.opts.specialEasing[t] || d.opts.easing
              );
              return d.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? d.tweens.length : 0;
              if (a) return this;
              for (a = !0; n < r; n++) d.tweens[n].run(1);
              return (
                t
                  ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t]))
                  : o.rejectWith(e, [d, t]),
                this
              );
            },
          }),
          l = d.props;
        for (
          (function (e, t) {
            var n, r, a, i, s;
            for (n in e)
              if (
                ((r = oe.camelCase(n)),
                (a = t[r]),
                (i = e[n]),
                Array.isArray(i) && ((a = i[1]), (i = e[n] = i[0])),
                n !== r && ((e[r] = i), delete e[n]),
                (s = oe.cssHooks[r]) && ("expand" in s))
              ) {
                (i = s.expand(i)), delete e[r];
                for (n in i) (n in e) || ((e[n] = i[n]), (t[n] = a));
              } else t[r] = a;
          })(l, d.opts.specialEasing);
          i < s;
          i++
        )
          if ((r = I.prefilters[i].call(d, e, l, d.opts)))
            return (
              oe.isFunction(r.stop) &&
                (oe._queueHooks(d.elem, d.opts.queue).stop = oe.proxy(
                  r.stop,
                  r
                )),
              r
            );
        return (
          oe.map(l, N, d),
          oe.isFunction(d.opts.start) && d.opts.start.call(e, d),
          d
            .progress(d.opts.progress)
            .done(d.opts.done, d.opts.complete)
            .fail(d.opts.fail)
            .always(d.opts.always),
          oe.fx.timer(oe.extend(u, { elem: e, anim: d, queue: d.opts.queue })),
          d
        );
      }
      function z(e) {
        return (e.match(Le) || []).join(" ");
      }
      function B(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function U(e, t, n, r) {
        var a;
        if (Array.isArray(t))
          oe.each(t, function (t, a) {
            n || Mt.test(e)
              ? r(e, a)
              : U(
                  e + "[" + ("object" == typeof a && null != a ? t : "") + "]",
                  a,
                  n,
                  r
                );
          });
        else if (n || "object" !== oe.type(t)) r(e, t);
        else for (a in t) U(e + "[" + a + "]", t[a], n, r);
      }
      function q(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            a = 0,
            i = t.toLowerCase().match(Le) || [];
          if (oe.isFunction(n))
            for (; (r = i[a++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function J(e, t, n, r) {
        function a(o) {
          var u;
          return (
            (i[o] = !0),
            oe.each(e[o] || [], function (e, o) {
              var d = o(t, n, r);
              return "string" != typeof d || s || i[d]
                ? s
                  ? !(u = d)
                  : void 0
                : (t.dataTypes.unshift(d), a(d), !1);
            }),
            u
          );
        }
        var i = {},
          s = e === St;
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
      }
      function G(e, t) {
        var n,
          r,
          a = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((a[n] ? e : r || (r = {}))[n] = t[n]);
        return r && oe.extend(!0, e, r), e;
      }
      var V = [],
        $ = n.document,
        K = Object.getPrototypeOf,
        X = V.slice,
        Z = V.concat,
        Q = V.push,
        ee = V.indexOf,
        te = {},
        ne = te.toString,
        re = te.hasOwnProperty,
        ae = re.toString,
        ie = ae.call(Object),
        se = {},
        oe = function (e, t) {
          return new oe.fn.init(e, t);
        },
        ue = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        de = /^-ms-/,
        le = /-([a-z])/g;
      (oe.fn = oe.prototype =
        {
          jquery: "3.2.1",
          constructor: oe,
          length: 0,
          toArray: function () {
            return X.call(this);
          },
          get: function (e) {
            return null == e
              ? X.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = oe.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return oe.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              oe.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(X.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: Q,
          sort: V.sort,
          splice: V.splice,
        }),
        (oe.extend = oe.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              a,
              i,
              s = arguments[0] || {},
              o = 1,
              u = arguments.length,
              d = !1;
            for (
              "boolean" == typeof s && ((d = s), (s = arguments[o] || {}), o++),
                "object" == typeof s || oe.isFunction(s) || (s = {}),
                o === u && ((s = this), o--);
              o < u;
              o++
            )
              if (null != (e = arguments[o]))
                for (t in e)
                  (n = s[t]),
                    s !== (r = e[t]) &&
                      (d && r && (oe.isPlainObject(r) || (a = Array.isArray(r)))
                        ? (a
                            ? ((a = !1), (i = n && Array.isArray(n) ? n : []))
                            : (i = n && oe.isPlainObject(n) ? n : {}),
                          (s[t] = oe.extend(d, i, r)))
                        : void 0 !== r && (s[t] = r));
            return s;
          }),
        oe.extend({
          expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isFunction: function (e) {
            return "function" === oe.type(e);
          },
          isWindow: function (e) {
            return null != e && e === e.window;
          },
          isNumeric: function (e) {
            var t = oe.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          },
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== ne.call(e)) &&
              (!(t = K(e)) ||
                ("function" ==
                  typeof (n = re.call(t, "constructor") && t.constructor) &&
                  ae.call(n) === ie))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          type: function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? te[ne.call(e)] || "object"
              : typeof e;
          },
          globalEval: function (e) {
            s(e);
          },
          camelCase: function (e) {
            return e.replace(de, "ms-").replace(le, function (e, t) {
              return t.toUpperCase();
            });
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (o(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(ue, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (o(Object(e))
                  ? oe.merge(n, "string" == typeof e ? [e] : e)
                  : Q.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : ee.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, a = e.length; r < n; r++)
              e[a++] = t[r];
            return (e.length = a), e;
          },
          grep: function (e, t, n) {
            for (var r = [], a = 0, i = e.length, s = !n; a < i; a++)
              !t(e[a], a) !== s && r.push(e[a]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              a,
              i = 0,
              s = [];
            if (o(e))
              for (r = e.length; i < r; i++)
                null != (a = t(e[i], i, n)) && s.push(a);
            else for (i in e) null != (a = t(e[i], i, n)) && s.push(a);
            return Z.apply([], s);
          },
          guid: 1,
          proxy: function (e, t) {
            var n, r, a;
            if (
              ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
              oe.isFunction(e))
            )
              return (
                (r = X.call(arguments, 2)),
                (a = function () {
                  return e.apply(t || this, r.concat(X.call(arguments)));
                }),
                (a.guid = e.guid = e.guid || oe.guid++),
                a
              );
          },
          now: Date.now,
          support: se,
        }),
        "function" == typeof Symbol &&
          (oe.fn[Symbol.iterator] = V[Symbol.iterator]),
        oe.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            te["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var ce =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        (function (e) {
          function t(e, t, n, r) {
            var a,
              i,
              s,
              o,
              u,
              l,
              _,
              f = t && t.ownerDocument,
              h = t ? t.nodeType : 9;
            if (
              ((n = n || []),
              "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
            )
              return n;
            if (
              !r &&
              ((t ? t.ownerDocument || t : R) !== S && x(t), (t = t || S), H)
            ) {
              if (11 !== h && (u = fe.exec(e)))
                if ((a = u[1])) {
                  if (9 === h) {
                    if (!(s = t.getElementById(a))) return n;
                    if (s.id === a) return n.push(s), n;
                  } else if (
                    f &&
                    (s = f.getElementById(a)) &&
                    P(t, s) &&
                    s.id === a
                  )
                    return n.push(s), n;
                } else {
                  if (u[2]) return V.apply(n, t.getElementsByTagName(e)), n;
                  if (
                    (a = u[3]) &&
                    M.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return V.apply(n, t.getElementsByClassName(a)), n;
                }
              if (M.qsa && !z[e + " "] && (!E || !E.test(e))) {
                if (1 !== h) (f = t), (_ = e);
                else if ("object" !== t.nodeName.toLowerCase()) {
                  for (
                    (o = t.getAttribute("id"))
                      ? (o = o.replace(ye, Me))
                      : t.setAttribute("id", (o = C)),
                      i = (l = Y(e)).length;
                    i--;

                  )
                    l[i] = "#" + o + " " + c(l[i]);
                  (_ = l.join(",")), (f = (he.test(e) && d(t.parentNode)) || t);
                }
                if (_)
                  try {
                    return V.apply(n, f.querySelectorAll(_)), n;
                  } catch (e) {
                  } finally {
                    o === C && t.removeAttribute("id");
                  }
              }
            }
            return k(e.replace(re, "$1"), t, n, r);
          }
          function n() {
            function e(n, r) {
              return (
                t.push(n + " ") > g.cacheLength && delete e[t.shift()],
                (e[n + " "] = r)
              );
            }
            var t = [];
            return e;
          }
          function r(e) {
            return (e[C] = !0), e;
          }
          function a(e) {
            var t = S.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
              g.attrHandle[n[r]] = t;
          }
          function s(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function o(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ve(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function u(e) {
            return r(function (t) {
              return (
                (t = +t),
                r(function (n, r) {
                  for (var a, i = e([], n.length, t), s = i.length; s--; )
                    n[(a = i[s])] && (n[a] = !(r[a] = n[a]));
                })
              );
            });
          }
          function d(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          function l() {}
          function c(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function _(e, t, n) {
            var r = t.dir,
              a = t.next,
              i = a || r,
              s = n && "parentNode" === i,
              o = F++;
            return t.first
              ? function (t, n, a) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s) return e(t, n, a);
                  return !1;
                }
              : function (t, n, u) {
                  var d,
                    l,
                    c,
                    _ = [W, o];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || s) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((c = t[C] || (t[C] = {})),
                          (l = c[t.uniqueID] || (c[t.uniqueID] = {})),
                          a && a === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((d = l[i]) && d[0] === W && d[1] === o)
                            return (_[2] = d[2]);
                          if (((l[i] = _), (_[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function f(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var a = e.length; a--; ) if (!e[a](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function h(e, t, n, r, a) {
            for (var i, s = [], o = 0, u = e.length, d = null != t; o < u; o++)
              (i = e[o]) && ((n && !n(i, r, a)) || (s.push(i), d && t.push(o)));
            return s;
          }
          function m(e, n, a, i, s, o) {
            return (
              i && !i[C] && (i = m(i)),
              s && !s[C] && (s = m(s, o)),
              r(function (r, o, u, d) {
                var l,
                  c,
                  _,
                  f = [],
                  m = [],
                  p = o.length,
                  y =
                    r ||
                    (function (e, n, r) {
                      for (var a = 0, i = n.length; a < i; a++) t(e, n[a], r);
                      return r;
                    })(n || "*", u.nodeType ? [u] : u, []),
                  M = !e || (!r && n) ? y : h(y, f, e, u, d),
                  g = a ? (s || (r ? e : p || i) ? [] : o) : M;
                if ((a && a(M, g, u, d), i))
                  for (l = h(g, m), i(l, [], u, d), c = l.length; c--; )
                    (_ = l[c]) && (g[m[c]] = !(M[m[c]] = _));
                if (r) {
                  if (s || e) {
                    if (s) {
                      for (l = [], c = g.length; c--; )
                        (_ = g[c]) && l.push((M[c] = _));
                      s(null, (g = []), l, d);
                    }
                    for (c = g.length; c--; )
                      (_ = g[c]) &&
                        (l = s ? K(r, _) : f[c]) > -1 &&
                        (r[l] = !(o[l] = _));
                  }
                } else (g = h(g === o ? g.splice(p, g.length) : g)), s ? s(null, o, g, d) : V.apply(o, g);
              })
            );
          }
          function p(e) {
            for (
              var t,
                n,
                r,
                a = e.length,
                i = g.relative[e[0].type],
                s = i || g.relative[" "],
                o = i ? 1 : 0,
                u = _(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                d = _(
                  function (e) {
                    return K(t, e) > -1;
                  },
                  s,
                  !0
                ),
                l = [
                  function (e, n, r) {
                    var a =
                      (!i && (r || n !== b)) ||
                      ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                    return (t = null), a;
                  },
                ];
              o < a;
              o++
            )
              if ((n = g.relative[e[o].type])) l = [_(f(l), n)];
              else {
                if ((n = g.filter[e[o].type].apply(null, e[o].matches))[C]) {
                  for (r = ++o; r < a && !g.relative[e[r].type]; r++);
                  return m(
                    o > 1 && f(l),
                    o > 1 &&
                      c(
                        e
                          .slice(0, o - 1)
                          .concat({ value: " " === e[o - 2].type ? "*" : "" })
                      ).replace(re, "$1"),
                    n,
                    o < r && p(e.slice(o, r)),
                    r < a && p((e = e.slice(r))),
                    r < a && c(e)
                  );
                }
                l.push(n);
              }
            return f(l);
          }
          var y,
            M,
            g,
            v,
            L,
            Y,
            w,
            k,
            b,
            D,
            T,
            x,
            S,
            j,
            H,
            E,
            A,
            O,
            P,
            C = "sizzle" + 1 * new Date(),
            R = e.document,
            W = 0,
            F = 0,
            N = n(),
            I = n(),
            z = n(),
            B = function (e, t) {
              return e === t && (T = !0), 0;
            },
            U = {}.hasOwnProperty,
            q = [],
            J = q.pop,
            G = q.push,
            V = q.push,
            $ = q.slice,
            K = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            X =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            Z = "[\\x20\\t\\r\\n\\f]",
            Q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ee =
              "\\[" +
              Z +
              "*(" +
              Q +
              ")(?:" +
              Z +
              "*([*^$|!~]?=)" +
              Z +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              Q +
              "))|)" +
              Z +
              "*\\]",
            te =
              ":(" +
              Q +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              ee +
              ")*)|.*)\\)|)",
            ne = new RegExp(Z + "+", "g"),
            re = new RegExp(
              "^" + Z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Z + "+$",
              "g"
            ),
            ae = new RegExp("^" + Z + "*," + Z + "*"),
            ie = new RegExp("^" + Z + "*([>+~]|" + Z + ")" + Z + "*"),
            se = new RegExp("=" + Z + "*([^\\]'\"]*?)" + Z + "*\\]", "g"),
            oe = new RegExp(te),
            ue = new RegExp("^" + Q + "$"),
            de = {
              ID: new RegExp("^#(" + Q + ")"),
              CLASS: new RegExp("^\\.(" + Q + ")"),
              TAG: new RegExp("^(" + Q + "|[*])"),
              ATTR: new RegExp("^" + ee),
              PSEUDO: new RegExp("^" + te),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  Z +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  Z +
                  "*(?:([+-]|)" +
                  Z +
                  "*(\\d+)|))" +
                  Z +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + X + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  Z +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  Z +
                  "*((?:-\\d)?\\d*)" +
                  Z +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            le = /^(?:input|select|textarea|button)$/i,
            ce = /^h\d$/i,
            _e = /^[^{]+\{\s*\[native \w/,
            fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            he = /[+~]/,
            me = new RegExp(
              "\\\\([\\da-f]{1,6}" + Z + "?|(" + Z + ")|.)",
              "ig"
            ),
            pe = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Me = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ge = function () {
              x();
            },
            ve = _(
              function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            V.apply((q = $.call(R.childNodes)), R.childNodes),
              q[R.childNodes.length].nodeType;
          } catch (e) {
            V = {
              apply: q.length
                ? function (e, t) {
                    G.apply(e, $.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          (M = t.support = {}),
            (L = t.isXML =
              function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
              }),
            (x = t.setDocument =
              function (e) {
                var t,
                  n,
                  r = e ? e.ownerDocument || e : R;
                return r !== S && 9 === r.nodeType && r.documentElement
                  ? ((S = r),
                    (j = S.documentElement),
                    (H = !L(S)),
                    R !== S &&
                      (n = S.defaultView) &&
                      n.top !== n &&
                      (n.addEventListener
                        ? n.addEventListener("unload", ge, !1)
                        : n.attachEvent && n.attachEvent("onunload", ge)),
                    (M.attributes = a(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (M.getElementsByTagName = a(function (e) {
                      return (
                        e.appendChild(S.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (M.getElementsByClassName = _e.test(
                      S.getElementsByClassName
                    )),
                    (M.getById = a(function (e) {
                      return (
                        (j.appendChild(e).id = C),
                        !S.getElementsByName || !S.getElementsByName(C).length
                      );
                    })),
                    M.getById
                      ? ((g.filter.ID = function (e) {
                          var t = e.replace(me, pe);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (g.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && H) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((g.filter.ID = function (e) {
                          var t = e.replace(me, pe);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (g.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && H) {
                            var n,
                              r,
                              a,
                              i = t.getElementById(e);
                            if (i) {
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                              for (
                                a = t.getElementsByName(e), r = 0;
                                (i = a[r++]);

                              )
                                if (
                                  (n = i.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [i];
                            }
                            return [];
                          }
                        })),
                    (g.find.TAG = M.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : M.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            r = [],
                            a = 0,
                            i = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = i[a++]); )
                              1 === n.nodeType && r.push(n);
                            return r;
                          }
                          return i;
                        }),
                    (g.find.CLASS =
                      M.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && H)
                          return t.getElementsByClassName(e);
                      }),
                    (A = []),
                    (E = []),
                    (M.qsa = _e.test(S.querySelectorAll)) &&
                      (a(function (e) {
                        (j.appendChild(e).innerHTML =
                          "<a id='" +
                          C +
                          "'></a><select id='" +
                          C +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            E.push("[*^$]=" + Z + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            E.push("\\[" + Z + "*(?:value|" + X + ")"),
                          e.querySelectorAll("[id~=" + C + "-]").length ||
                            E.push("~="),
                          e.querySelectorAll(":checked").length ||
                            E.push(":checked"),
                          e.querySelectorAll("a#" + C + "+*").length ||
                            E.push(".#.+[+~]");
                      }),
                      a(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = S.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            E.push("name" + Z + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            E.push(":enabled", ":disabled"),
                          (j.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            E.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          E.push(",.*:");
                      })),
                    (M.matchesSelector = _e.test(
                      (O =
                        j.matches ||
                        j.webkitMatchesSelector ||
                        j.mozMatchesSelector ||
                        j.oMatchesSelector ||
                        j.msMatchesSelector)
                    )) &&
                      a(function (e) {
                        (M.disconnectedMatch = O.call(e, "*")),
                          O.call(e, "[s!='']:x"),
                          A.push("!=", te);
                      }),
                    (E = E.length && new RegExp(E.join("|"))),
                    (A = A.length && new RegExp(A.join("|"))),
                    (t = _e.test(j.compareDocumentPosition)),
                    (P =
                      t || _e.test(j.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              r = t && t.parentNode;
                            return (
                              e === r ||
                              !(
                                !r ||
                                1 !== r.nodeType ||
                                !(n.contains
                                  ? n.contains(r)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(r))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (B = t
                      ? function (e, t) {
                          if (e === t) return (T = !0), 0;
                          var n =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            n ||
                            (1 &
                              (n =
                                (e.ownerDocument || e) ===
                                (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!M.sortDetached &&
                              t.compareDocumentPosition(e) === n)
                              ? e === S || (e.ownerDocument === R && P(R, e))
                                ? -1
                                : t === S || (t.ownerDocument === R && P(R, t))
                                ? 1
                                : D
                                ? K(D, e) - K(D, t)
                                : 0
                              : 4 & n
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (T = !0), 0;
                          var n,
                            r = 0,
                            a = e.parentNode,
                            i = t.parentNode,
                            o = [e],
                            u = [t];
                          if (!a || !i)
                            return e === S
                              ? -1
                              : t === S
                              ? 1
                              : a
                              ? -1
                              : i
                              ? 1
                              : D
                              ? K(D, e) - K(D, t)
                              : 0;
                          if (a === i) return s(e, t);
                          for (n = e; (n = n.parentNode); ) o.unshift(n);
                          for (n = t; (n = n.parentNode); ) u.unshift(n);
                          for (; o[r] === u[r]; ) r++;
                          return r
                            ? s(o[r], u[r])
                            : o[r] === R
                            ? -1
                            : u[r] === R
                            ? 1
                            : 0;
                        }),
                    S)
                  : S;
              }),
            (t.matches = function (e, n) {
              return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
              if (
                ((e.ownerDocument || e) !== S && x(e),
                (n = n.replace(se, "='$1']")),
                M.matchesSelector &&
                  H &&
                  !z[n + " "] &&
                  (!A || !A.test(n)) &&
                  (!E || !E.test(n)))
              )
                try {
                  var r = O.call(e, n);
                  if (
                    r ||
                    M.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {}
              return t(n, S, null, [e]).length > 0;
            }),
            (t.contains = function (e, t) {
              return (e.ownerDocument || e) !== S && x(e), P(e, t);
            }),
            (t.attr = function (e, t) {
              (e.ownerDocument || e) !== S && x(e);
              var n = g.attrHandle[t.toLowerCase()],
                r =
                  n && U.call(g.attrHandle, t.toLowerCase())
                    ? n(e, t, !H)
                    : void 0;
              return void 0 !== r
                ? r
                : M.attributes || !H
                ? e.getAttribute(t)
                : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
            }),
            (t.escape = function (e) {
              return (e + "").replace(ye, Me);
            }),
            (t.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
              var t,
                n = [],
                r = 0,
                a = 0;
              if (
                ((T = !M.detectDuplicates),
                (D = !M.sortStable && e.slice(0)),
                e.sort(B),
                T)
              ) {
                for (; (t = e[a++]); ) t === e[a] && (r = n.push(a));
                for (; r--; ) e.splice(n[r], 1);
              }
              return (D = null), e;
            }),
            (v = t.getText =
              function (e) {
                var t,
                  n = "",
                  r = 0,
                  a = e.nodeType;
                if (a) {
                  if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += v(e);
                  } else if (3 === a || 4 === a) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += v(t);
                return n;
              }),
            ((g = t.selectors =
              {
                cacheLength: 50,
                createPseudo: r,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(me, pe)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(me, pe)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || t.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && t.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return de.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            oe.test(n) &&
                            (t = Y(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(me, pe).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = N[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + Z + ")" + e + "(" + Z + "|$)"
                      )) &&
                        N(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, n, r) {
                    return function (a) {
                      var i = t.attr(a, e);
                      return null == i
                        ? "!=" === n
                        : !n ||
                            ((i += ""),
                            "=" === n
                              ? i === r
                              : "!=" === n
                              ? i !== r
                              : "^=" === n
                              ? r && 0 === i.indexOf(r)
                              : "*=" === n
                              ? r && i.indexOf(r) > -1
                              : "$=" === n
                              ? r && i.slice(-r.length) === r
                              : "~=" === n
                              ? (" " + i.replace(ne, " ") + " ").indexOf(r) > -1
                              : "|=" === n &&
                                (i === r ||
                                  i.slice(0, r.length + 1) === r + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, a) {
                    var i = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      o = "of-type" === t;
                    return 1 === r && 0 === a
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, u) {
                          var d,
                            l,
                            c,
                            _,
                            f,
                            h,
                            m = i !== s ? "nextSibling" : "previousSibling",
                            p = t.parentNode,
                            y = o && t.nodeName.toLowerCase(),
                            M = !u && !o,
                            g = !1;
                          if (p) {
                            if (i) {
                              for (; m; ) {
                                for (_ = t; (_ = _[m]); )
                                  if (
                                    o
                                      ? _.nodeName.toLowerCase() === y
                                      : 1 === _.nodeType
                                  )
                                    return !1;
                                h = m = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [s ? p.firstChild : p.lastChild]), s && M)
                            ) {
                              for (
                                g =
                                  (f =
                                    (d =
                                      (l =
                                        (c = (_ = p)[C] || (_[C] = {}))[
                                          _.uniqueID
                                        ] || (c[_.uniqueID] = {}))[e] ||
                                      [])[0] === W && d[1]) && d[2],
                                  _ = f && p.childNodes[f];
                                (_ =
                                  (++f && _ && _[m]) || (g = f = 0) || h.pop());

                              )
                                if (1 === _.nodeType && ++g && _ === t) {
                                  l[e] = [W, f, g];
                                  break;
                                }
                            } else if (
                              (M &&
                                (g = f =
                                  (d =
                                    (l =
                                      (c = (_ = t)[C] || (_[C] = {}))[
                                        _.uniqueID
                                      ] || (c[_.uniqueID] = {}))[e] ||
                                    [])[0] === W && d[1]),
                              !1 === g)
                            )
                              for (
                                ;
                                (_ =
                                  (++f && _ && _[m]) ||
                                  (g = f = 0) ||
                                  h.pop()) &&
                                ((o
                                  ? _.nodeName.toLowerCase() !== y
                                  : 1 !== _.nodeType) ||
                                  !++g ||
                                  (M &&
                                    ((l =
                                      (c = _[C] || (_[C] = {}))[_.uniqueID] ||
                                      (c[_.uniqueID] = {}))[e] = [W, g]),
                                  _ !== t));

                              );
                            return (g -= a) === r || (g % r == 0 && g / r >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var a,
                      i =
                        g.pseudos[e] ||
                        g.setFilters[e.toLowerCase()] ||
                        t.error("unsupported pseudo: " + e);
                    return i[C]
                      ? i(n)
                      : i.length > 1
                      ? ((a = [e, e, "", n]),
                        g.setFilters.hasOwnProperty(e.toLowerCase())
                          ? r(function (e, t) {
                              for (var r, a = i(e, n), s = a.length; s--; )
                                e[(r = K(e, a[s]))] = !(t[r] = a[s]);
                            })
                          : function (e) {
                              return i(e, 0, a);
                            })
                      : i;
                  },
                },
                pseudos: {
                  not: r(function (e) {
                    var t = [],
                      n = [],
                      a = w(e.replace(re, "$1"));
                    return a[C]
                      ? r(function (e, t, n, r) {
                          for (
                            var i, s = a(e, null, r, []), o = e.length;
                            o--;

                          )
                            (i = s[o]) && (e[o] = !(t[o] = i));
                        })
                      : function (e, r, i) {
                          return (
                            (t[0] = e),
                            a(t, null, i, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: r(function (e) {
                    return function (n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: r(function (e) {
                    return (
                      (e = e.replace(me, pe)),
                      function (t) {
                        return (
                          (t.textContent || t.innerText || v(t)).indexOf(e) > -1
                        );
                      }
                    );
                  }),
                  lang: r(function (e) {
                    return (
                      ue.test(e || "") || t.error("unsupported lang: " + e),
                      (e = e.replace(me, pe).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = H
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === j;
                  },
                  focus: function (e) {
                    return (
                      e === S.activeElement &&
                      (!S.hasFocus || S.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: o(!1),
                  disabled: o(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !g.pseudos.empty(e);
                  },
                  header: function (e) {
                    return ce.test(e.nodeName);
                  },
                  input: function (e) {
                    return le.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: u(function () {
                    return [0];
                  }),
                  last: u(function (e, t) {
                    return [t - 1];
                  }),
                  eq: u(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: u(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: u(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                  }),
                  gt: u(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = g.pseudos.eq);
          for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
          })
            g.pseudos[y] = (function (e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            })(y);
          for (y in { submit: !0, reset: !0 })
            g.pseudos[y] = (function (e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            })(y);
          return (
            (l.prototype = g.filters = g.pseudos),
            (g.setFilters = new l()),
            (Y = t.tokenize =
              function (e, n) {
                var r,
                  a,
                  i,
                  s,
                  o,
                  u,
                  d,
                  l = I[e + " "];
                if (l) return n ? 0 : l.slice(0);
                for (o = e, u = [], d = g.preFilter; o; ) {
                  (r && !(a = ae.exec(o))) ||
                    (a && (o = o.slice(a[0].length) || o), u.push((i = []))),
                    (r = !1),
                    (a = ie.exec(o)) &&
                      ((r = a.shift()),
                      i.push({ value: r, type: a[0].replace(re, " ") }),
                      (o = o.slice(r.length)));
                  for (s in g.filter)
                    !(a = de[s].exec(o)) ||
                      (d[s] && !(a = d[s](a))) ||
                      ((r = a.shift()),
                      i.push({ value: r, type: s, matches: a }),
                      (o = o.slice(r.length)));
                  if (!r) break;
                }
                return n ? o.length : o ? t.error(e) : I(e, u).slice(0);
              }),
            (w = t.compile =
              function (e, n) {
                var a,
                  i = [],
                  s = [],
                  o = z[e + " "];
                if (!o) {
                  for (n || (n = Y(e)), a = n.length; a--; )
                    (o = p(n[a]))[C] ? i.push(o) : s.push(o);
                  (o = z(
                    e,
                    (function (e, n) {
                      var a = n.length > 0,
                        i = e.length > 0,
                        s = function (r, s, o, u, d) {
                          var l,
                            c,
                            _,
                            f = 0,
                            m = "0",
                            p = r && [],
                            y = [],
                            M = b,
                            v = r || (i && g.find.TAG("*", d)),
                            L = (W += null == M ? 1 : Math.random() || 0.1),
                            Y = v.length;
                          for (
                            d && (b = s === S || s || d);
                            m !== Y && null != (l = v[m]);
                            m++
                          ) {
                            if (i && l) {
                              for (
                                c = 0,
                                  s ||
                                    l.ownerDocument === S ||
                                    (x(l), (o = !H));
                                (_ = e[c++]);

                              )
                                if (_(l, s || S, o)) {
                                  u.push(l);
                                  break;
                                }
                              d && (W = L);
                            }
                            a && ((l = !_ && l) && f--, r && p.push(l));
                          }
                          if (((f += m), a && m !== f)) {
                            for (c = 0; (_ = n[c++]); ) _(p, y, s, o);
                            if (r) {
                              if (f > 0)
                                for (; m--; )
                                  p[m] || y[m] || (y[m] = J.call(u));
                              y = h(y);
                            }
                            V.apply(u, y),
                              d &&
                                !r &&
                                y.length > 0 &&
                                f + n.length > 1 &&
                                t.uniqueSort(u);
                          }
                          return d && ((W = L), (b = M)), p;
                        };
                      return a ? r(s) : s;
                    })(s, i)
                  )).selector = e;
                }
                return o;
              }),
            (k = t.select =
              function (e, t, n, r) {
                var a,
                  i,
                  s,
                  o,
                  u,
                  l = "function" == typeof e && e,
                  _ = !r && Y((e = l.selector || e));
                if (((n = n || []), 1 === _.length)) {
                  if (
                    (i = _[0] = _[0].slice(0)).length > 2 &&
                    "ID" === (s = i[0]).type &&
                    9 === t.nodeType &&
                    H &&
                    g.relative[i[1].type]
                  ) {
                    if (
                      !(t = (g.find.ID(s.matches[0].replace(me, pe), t) ||
                        [])[0])
                    )
                      return n;
                    l && (t = t.parentNode),
                      (e = e.slice(i.shift().value.length));
                  }
                  for (
                    a = de.needsContext.test(e) ? 0 : i.length;
                    a-- && ((s = i[a]), !g.relative[(o = s.type)]);

                  )
                    if (
                      (u = g.find[o]) &&
                      (r = u(
                        s.matches[0].replace(me, pe),
                        (he.test(i[0].type) && d(t.parentNode)) || t
                      ))
                    ) {
                      if ((i.splice(a, 1), !(e = r.length && c(i))))
                        return V.apply(n, r), n;
                      break;
                    }
                }
                return (
                  (l || w(e, _))(
                    r,
                    t,
                    !H,
                    n,
                    !t || (he.test(e) && d(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (M.sortStable = C.split("").sort(B).join("") === C),
            (M.detectDuplicates = !!T),
            x(),
            (M.sortDetached = a(function (e) {
              return 1 & e.compareDocumentPosition(S.createElement("fieldset"));
            })),
            a(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              i("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (M.attributes &&
              a(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              i("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            a(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              i(X, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            t
          );
        })(n);
      (oe.find = ce),
        (oe.expr = ce.selectors),
        (oe.expr[":"] = oe.expr.pseudos),
        (oe.uniqueSort = oe.unique = ce.uniqueSort),
        (oe.text = ce.getText),
        (oe.isXMLDoc = ce.isXML),
        (oe.contains = ce.contains),
        (oe.escapeSelector = ce.escape);
      var _e = function (e, t, n) {
          for (var r = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (a && oe(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        fe = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        he = oe.expr.match.needsContext,
        me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        pe = /^.[^:#\[\.,]*$/;
      (oe.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? oe.find.matchesSelector(r, e)
              ? [r]
              : []
            : oe.find.matches(
                e,
                oe.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        oe.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              a = this;
            if ("string" != typeof e)
              return this.pushStack(
                oe(e).filter(function () {
                  for (t = 0; t < r; t++)
                    if (oe.contains(a[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) oe.find(e, a[t], n);
            return r > 1 ? oe.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(d(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(d(this, e || [], !0));
          },
          is: function (e) {
            return !!d(
              this,
              "string" == typeof e && he.test(e) ? oe(e) : e || [],
              !1
            ).length;
          },
        });
      var ye,
        Me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((oe.fn.init = function (e, t, n) {
        var r, a;
        if (!e) return this;
        if (((n = n || ye), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : Me.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof oe ? t[0] : t),
              oe.merge(
                this,
                oe.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : $,
                  !0
                )
              ),
              me.test(r[1]) && oe.isPlainObject(t))
            )
              for (r in t)
                oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (a = $.getElementById(r[2])) && ((this[0] = a), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : oe.isFunction(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(oe)
          : oe.makeArray(e, this);
      }).prototype = oe.fn),
        (ye = oe($));
      var ge = /^(?:parents|prev(?:Until|All))/,
        ve = { children: !0, contents: !0, next: !0, prev: !0 };
      oe.fn.extend({
        has: function (e) {
          var t = oe(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (oe.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            a = this.length,
            i = [],
            s = "string" != typeof e && oe(e);
          if (!he.test(e))
            for (; r < a; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && oe.find.matchesSelector(n, e))
                ) {
                  i.push(n);
                  break;
                }
          return this.pushStack(i.length > 1 ? oe.uniqueSort(i) : i);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? ee.call(oe(e), this[0])
              : ee.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        oe.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return _e(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return _e(e, "parentNode", n);
            },
            next: function (e) {
              return l(e, "nextSibling");
            },
            prev: function (e) {
              return l(e, "previousSibling");
            },
            nextAll: function (e) {
              return _e(e, "nextSibling");
            },
            prevAll: function (e) {
              return _e(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return _e(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return _e(e, "previousSibling", n);
            },
            siblings: function (e) {
              return fe((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return fe(e.firstChild);
            },
            contents: function (e) {
              return u(e, "iframe")
                ? e.contentDocument
                : (u(e, "template") && (e = e.content || e),
                  oe.merge([], e.childNodes));
            },
          },
          function (e, t) {
            oe.fn[e] = function (n, r) {
              var a = oe.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (a = oe.filter(r, a)),
                this.length > 1 &&
                  (ve[e] || oe.uniqueSort(a), ge.test(e) && a.reverse()),
                this.pushStack(a)
              );
            };
          }
        );
      var Le = /[^\x20\t\r\n\f]+/g;
      (oe.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  oe.each(e.match(Le) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : oe.extend({}, e);
        var t,
          n,
          r,
          a,
          i = [],
          s = [],
          o = -1,
          u = function () {
            for (a = a || e.once, r = t = !0; s.length; o = -1)
              for (n = s.shift(); ++o < i.length; )
                !1 === i[o].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((o = i.length), (n = !1));
            e.memory || (n = !1), (t = !1), a && (i = n ? [] : "");
          },
          d = {
            add: function () {
              return (
                i &&
                  (n && !t && ((o = i.length - 1), s.push(n)),
                  (function t(n) {
                    oe.each(n, function (n, r) {
                      oe.isFunction(r)
                        ? (e.unique && d.has(r)) || i.push(r)
                        : r && r.length && "string" !== oe.type(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                oe.each(arguments, function (e, t) {
                  for (var n; (n = oe.inArray(t, i, n)) > -1; )
                    i.splice(n, 1), n <= o && o--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? oe.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (a = s = []), (i = n = ""), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (a = s = []), n || t || (i = n = ""), this;
            },
            locked: function () {
              return !!a;
            },
            fireWith: function (e, n) {
              return (
                a ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || u()),
                this
              );
            },
            fire: function () {
              return d.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return d;
      }),
        oe.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  oe.Callbacks("memory"),
                  oe.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  oe.Callbacks("once memory"),
                  oe.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  oe.Callbacks("once memory"),
                  oe.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              a = {
                state: function () {
                  return r;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return a.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return oe
                    .Deferred(function (n) {
                      oe.each(t, function (t, r) {
                        var a = oe.isFunction(e[r[4]]) && e[r[4]];
                        i[r[1]](function () {
                          var e = a && a.apply(this, arguments);
                          e && oe.isFunction(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, a ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (e, r, a) {
                  function i(e, t, r, a) {
                    return function () {
                      var o = this,
                        u = arguments,
                        d = function () {
                          var n, d;
                          if (!(e < s)) {
                            if ((n = r.apply(o, u)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (d =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              oe.isFunction(d)
                                ? a
                                  ? d.call(n, i(s, t, c, a), i(s, t, _, a))
                                  : (s++,
                                    d.call(
                                      n,
                                      i(s, t, c, a),
                                      i(s, t, _, a),
                                      i(s, t, c, t.notifyWith)
                                    ))
                                : (r !== c && ((o = void 0), (u = [n])),
                                  (a || t.resolveWith)(o, u));
                          }
                        },
                        l = a
                          ? d
                          : function () {
                              try {
                                d();
                              } catch (n) {
                                oe.Deferred.exceptionHook &&
                                  oe.Deferred.exceptionHook(n, l.stackTrace),
                                  e + 1 >= s &&
                                    (r !== _ && ((o = void 0), (u = [n])),
                                    t.rejectWith(o, u));
                              }
                            };
                      e
                        ? l()
                        : (oe.Deferred.getStackHook &&
                            (l.stackTrace = oe.Deferred.getStackHook()),
                          n.setTimeout(l));
                    };
                  }
                  var s = 0;
                  return oe
                    .Deferred(function (n) {
                      t[0][3].add(
                        i(0, n, oe.isFunction(a) ? a : c, n.notifyWith)
                      ),
                        t[1][3].add(i(0, n, oe.isFunction(e) ? e : c)),
                        t[2][3].add(i(0, n, oe.isFunction(r) ? r : _));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? oe.extend(e, a) : a;
                },
              },
              i = {};
            return (
              oe.each(t, function (e, n) {
                var s = n[2],
                  o = n[5];
                (a[n[1]] = s.add),
                  o &&
                    s.add(
                      function () {
                        r = o;
                      },
                      t[3 - e][2].disable,
                      t[0][2].lock
                    ),
                  s.add(n[3].fire),
                  (i[n[0]] = function () {
                    return (
                      i[n[0] + "With"](this === i ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (i[n[0] + "With"] = s.fireWith);
              }),
              a.promise(i),
              e && e.call(i, i),
              i
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              a = X.call(arguments),
              i = oe.Deferred(),
              s = function (e) {
                return function (n) {
                  (r[e] = this),
                    (a[e] = arguments.length > 1 ? X.call(arguments) : n),
                    --t || i.resolveWith(r, a);
                };
              };
            if (
              t <= 1 &&
              (f(e, i.done(s(n)).resolve, i.reject, !t),
              "pending" === i.state() || oe.isFunction(a[n] && a[n].then))
            )
              return i.then();
            for (; n--; ) f(a[n], s(n), i.reject);
            return i.promise();
          },
        });
      var Ye = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (oe.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          Ye.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (oe.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var we = oe.Deferred();
      (oe.fn.ready = function (e) {
        return (
          we.then(e).catch(function (e) {
            oe.readyException(e);
          }),
          this
        );
      }),
        oe.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --oe.readyWait : oe.isReady) ||
              ((oe.isReady = !0),
              (!0 !== e && --oe.readyWait > 0) || we.resolveWith($, [oe]));
          },
        }),
        (oe.ready.then = we.then),
        "complete" === $.readyState ||
        ("loading" !== $.readyState && !$.documentElement.doScroll)
          ? n.setTimeout(oe.ready)
          : ($.addEventListener("DOMContentLoaded", h),
            n.addEventListener("load", h));
      var ke = function (e, t, n, r, a, i, s) {
          var o = 0,
            u = e.length,
            d = null == n;
          if ("object" === oe.type(n)) {
            a = !0;
            for (o in n) ke(e, t, o, n[o], !0, i, s);
          } else if (
            void 0 !== r &&
            ((a = !0),
            oe.isFunction(r) || (s = !0),
            d &&
              (s
                ? (t.call(e, r), (t = null))
                : ((d = t),
                  (t = function (e, t, n) {
                    return d.call(oe(e), n);
                  }))),
            t)
          )
            for (; o < u; o++) t(e[o], n, s ? r : r.call(e[o], o, t(e[o], n)));
          return a ? e : d ? t.call(e) : u ? t(e[0], n) : i;
        },
        be = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
      (m.uid = 1),
        (m.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                be(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              a = this.cache(e);
            if ("string" == typeof t) a[oe.camelCase(t)] = n;
            else for (r in t) a[oe.camelCase(r)] = t[r];
            return a;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][oe.camelCase(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(oe.camelCase)
                  : (t = oe.camelCase(t)) in r
                  ? [t]
                  : t.match(Le) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || oe.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t);
          },
        });
      var De = new m(),
        Te = new m(),
        xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Se = /[A-Z]/g;
      oe.extend({
        hasData: function (e) {
          return Te.hasData(e) || De.hasData(e);
        },
        data: function (e, t, n) {
          return Te.access(e, t, n);
        },
        removeData: function (e, t) {
          Te.remove(e, t);
        },
        _data: function (e, t, n) {
          return De.access(e, t, n);
        },
        _removeData: function (e, t) {
          De.remove(e, t);
        },
      }),
        oe.fn.extend({
          data: function (e, t) {
            var n,
              r,
              a,
              i = this[0],
              s = i && i.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((a = Te.get(i)),
                1 === i.nodeType && !De.get(i, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (r = s[n].name).indexOf("data-") &&
                    ((r = oe.camelCase(r.slice(5))), p(i, r, a[r]));
                De.set(i, "hasDataAttrs", !0);
              }
              return a;
            }
            return "object" == typeof e
              ? this.each(function () {
                  Te.set(this, e);
                })
              : ke(
                  this,
                  function (t) {
                    var n;
                    if (i && void 0 === t) {
                      if (void 0 !== (n = Te.get(i, e))) return n;
                      if (void 0 !== (n = p(i, e))) return n;
                    } else
                      this.each(function () {
                        Te.set(this, e, t);
                      });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              Te.remove(this, e);
            });
          },
        }),
        oe.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = De.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = De.access(e, t, oe.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
              r = n.length,
              a = n.shift(),
              i = oe._queueHooks(e, t);
            "inprogress" === a && ((a = n.shift()), r--),
              a &&
                ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                a.call(
                  e,
                  function () {
                    oe.dequeue(e, t);
                  },
                  i
                )),
              !r && i && i.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              De.get(e, n) ||
              De.access(e, n, {
                empty: oe.Callbacks("once memory").add(function () {
                  De.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        oe.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? oe.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = oe.queue(this, e, t);
                    oe._queueHooks(this, e),
                      "fx" === e &&
                        "inprogress" !== n[0] &&
                        oe.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              oe.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              a = oe.Deferred(),
              i = this,
              s = this.length,
              o = function () {
                --r || a.resolveWith(i, [i]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = De.get(i[s], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(o));
            return o(), a.promise(t);
          },
        });
      var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        He = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Ee = ["Top", "Right", "Bottom", "Left"],
        Ae = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display &&
              oe.contains(e.ownerDocument, e) &&
              "none" === oe.css(e, "display"))
          );
        },
        Oe = function (e, t, n, r) {
          var a,
            i,
            s = {};
          for (i in t) (s[i] = e.style[i]), (e.style[i] = t[i]);
          a = n.apply(e, r || []);
          for (i in t) e.style[i] = s[i];
          return a;
        },
        Pe = {};
      oe.fn.extend({
        show: function () {
          return M(this, !0);
        },
        hide: function () {
          return M(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                Ae(this) ? oe(this).show() : oe(this).hide();
              });
        },
      });
      var Ce = /^(?:checkbox|radio)$/i,
        Re = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        We = /^$|\/(?:java|ecma)script/i,
        Fe = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      (Fe.optgroup = Fe.option),
        (Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead),
        (Fe.th = Fe.td);
      var Ne = /<|&#?\w+;/;
      !(function () {
        var e = $.createDocumentFragment().appendChild($.createElement("div")),
          t = $.createElement("input");
        t.setAttribute("type", "radio"),
          t.setAttribute("checked", "checked"),
          t.setAttribute("name", "t"),
          e.appendChild(t),
          (se.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (e.innerHTML = "<textarea>x</textarea>"),
          (se.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
      })();
      var Ie = $.documentElement,
        ze = /^key/,
        Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ue = /^([^.]*)(?:\.(.+)|)/;
      (oe.event = {
        global: {},
        add: function (e, t, n, r, a) {
          var i,
            s,
            o,
            u,
            d,
            l,
            c,
            _,
            f,
            h,
            m,
            p = De.get(e);
          if (p)
            for (
              n.handler && ((n = (i = n).handler), (a = i.selector)),
                a && oe.find.matchesSelector(Ie, a),
                n.guid || (n.guid = oe.guid++),
                (u = p.events) || (u = p.events = {}),
                (s = p.handle) ||
                  (s = p.handle =
                    function (t) {
                      return void 0 !== oe && oe.event.triggered !== t.type
                        ? oe.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                d = (t = (t || "").match(Le) || [""]).length;
              d--;

            )
              (f = m = (o = Ue.exec(t[d]) || [])[1]),
                (h = (o[2] || "").split(".").sort()),
                f &&
                  ((c = oe.event.special[f] || {}),
                  (f = (a ? c.delegateType : c.bindType) || f),
                  (c = oe.event.special[f] || {}),
                  (l = oe.extend(
                    {
                      type: f,
                      origType: m,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: a,
                      needsContext: a && oe.expr.match.needsContext.test(a),
                      namespace: h.join("."),
                    },
                    i
                  )),
                  (_ = u[f]) ||
                    (((_ = u[f] = []).delegateCount = 0),
                    (c.setup && !1 !== c.setup.call(e, r, h, s)) ||
                      (e.addEventListener && e.addEventListener(f, s))),
                  c.add &&
                    (c.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                  a ? _.splice(_.delegateCount++, 0, l) : _.push(l),
                  (oe.event.global[f] = !0));
        },
        remove: function (e, t, n, r, a) {
          var i,
            s,
            o,
            u,
            d,
            l,
            c,
            _,
            f,
            h,
            m,
            p = De.hasData(e) && De.get(e);
          if (p && (u = p.events)) {
            for (d = (t = (t || "").match(Le) || [""]).length; d--; )
              if (
                ((o = Ue.exec(t[d]) || []),
                (f = m = o[1]),
                (h = (o[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  c = oe.event.special[f] || {},
                    _ = u[(f = (r ? c.delegateType : c.bindType) || f)] || [],
                    o =
                      o[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = i = _.length;
                  i--;

                )
                  (l = _[i]),
                    (!a && m !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (o && !o.test(l.namespace)) ||
                      (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                      (_.splice(i, 1),
                      l.selector && _.delegateCount--,
                      c.remove && c.remove.call(e, l));
                s &&
                  !_.length &&
                  ((c.teardown && !1 !== c.teardown.call(e, h, p.handle)) ||
                    oe.removeEvent(e, f, p.handle),
                  delete u[f]);
              } else for (f in u) oe.event.remove(e, f + t[d], n, r, !0);
            oe.isEmptyObject(u) && De.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            a,
            i,
            s,
            o = oe.event.fix(e),
            u = new Array(arguments.length),
            d = (De.get(this, "events") || {})[o.type] || [],
            l = oe.event.special[o.type] || {};
          for (u[0] = o, t = 1; t < arguments.length; t++) u[t] = arguments[t];
          if (
            ((o.delegateTarget = this),
            !l.preDispatch || !1 !== l.preDispatch.call(this, o))
          ) {
            for (
              s = oe.event.handlers.call(this, o, d), t = 0;
              (a = s[t++]) && !o.isPropagationStopped();

            )
              for (
                o.currentTarget = a.elem, n = 0;
                (i = a.handlers[n++]) && !o.isImmediatePropagationStopped();

              )
                (o.rnamespace && !o.rnamespace.test(i.namespace)) ||
                  ((o.handleObj = i),
                  (o.data = i.data),
                  void 0 !==
                    (r = (
                      (oe.event.special[i.origType] || {}).handle || i.handler
                    ).apply(a.elem, u)) &&
                    !1 === (o.result = r) &&
                    (o.preventDefault(), o.stopPropagation()));
            return l.postDispatch && l.postDispatch.call(this, o), o.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            a,
            i,
            s,
            o = [],
            u = t.delegateCount,
            d = e.target;
          if (u && d.nodeType && !("click" === e.type && e.button >= 1))
            for (; d !== this; d = d.parentNode || this)
              if (
                1 === d.nodeType &&
                ("click" !== e.type || !0 !== d.disabled)
              ) {
                for (i = [], s = {}, n = 0; n < u; n++)
                  void 0 === s[(a = (r = t[n]).selector + " ")] &&
                    (s[a] = r.needsContext
                      ? oe(a, this).index(d) > -1
                      : oe.find(a, this, null, [d]).length),
                    s[a] && i.push(r);
                i.length && o.push({ elem: d, handlers: i });
              }
          return (
            (d = this),
            u < t.length && o.push({ elem: d, handlers: t.slice(u) }),
            o
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(oe.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: oe.isFunction(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[oe.expando] ? e : new oe.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== k() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === k() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && u(this, "input"))
                return this.click(), !1;
            },
            _default: function (e) {
              return u(e.target, "a");
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (oe.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (oe.Event = function (e, t) {
          if (!(this instanceof oe.Event)) return new oe.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Y
                  : w),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && oe.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || oe.now()),
            (this[oe.expando] = !0);
        }),
        (oe.Event.prototype = {
          constructor: oe.Event,
          isDefaultPrevented: w,
          isPropagationStopped: w,
          isImmediatePropagationStopped: w,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Y),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Y),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Y),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        oe.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && ze.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Be.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          oe.event.addProp
        ),
        oe.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            oe.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = e.relatedTarget,
                  a = e.handleObj;
                return (
                  (r && (r === this || oe.contains(this, r))) ||
                    ((e.type = a.origType),
                    (n = a.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        oe.fn.extend({
          on: function (e, t, n, r) {
            return b(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return b(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, a;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                oe(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (a in e) this.off(a, t, e[a]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = w),
              this.each(function () {
                oe.event.remove(this, e, n, t);
              })
            );
          },
        });
      var qe =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Je = /<script|<style|<link/i,
        Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ve = /^true\/(.*)/,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      oe.extend({
        htmlPrefilter: function (e) {
          return e.replace(qe, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var r,
            a,
            i,
            s,
            o = e.cloneNode(!0),
            u = oe.contains(e.ownerDocument, e);
          if (
            !(
              se.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              oe.isXMLDoc(e)
            )
          )
            for (s = g(o), r = 0, a = (i = g(e)).length; r < a; r++)
              !(function (e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Ce.test(e.type)
                  ? (t.checked = e.checked)
                  : ("input" !== n && "textarea" !== n) ||
                    (t.defaultValue = e.defaultValue);
              })(i[r], s[r]);
          if (t)
            if (n)
              for (
                i = i || g(e), s = s || g(o), r = 0, a = i.length;
                r < a;
                r++
              )
                T(i[r], s[r]);
            else T(e, o);
          return (
            (s = g(o, "script")).length > 0 && v(s, !u && g(e, "script")), o
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, a = oe.event.special, i = 0;
            void 0 !== (n = e[i]);
            i++
          )
            if (be(n)) {
              if ((t = n[De.expando])) {
                if (t.events)
                  for (r in t.events)
                    a[r]
                      ? oe.event.remove(n, r)
                      : oe.removeEvent(n, r, t.handle);
                n[De.expando] = void 0;
              }
              n[Te.expando] && (n[Te.expando] = void 0);
            }
        },
      }),
        oe.fn.extend({
          detach: function (e) {
            return S(this, e, !0);
          },
          remove: function (e) {
            return S(this, e);
          },
          text: function (e) {
            return ke(
              this,
              function (e) {
                return void 0 === e
                  ? oe.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return x(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                D(this, e).appendChild(e);
              }
            });
          },
          prepend: function () {
            return x(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = D(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return x(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return x(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (oe.cleanData(g(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return oe.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return ke(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Je.test(e) &&
                  !Fe[(Re.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = oe.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (oe.cleanData(g(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return x(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 &&
                  (oe.cleanData(g(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        oe.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            oe.fn[e] = function (e) {
              for (
                var n, r = [], a = oe(e), i = a.length - 1, s = 0;
                s <= i;
                s++
              )
                (n = s === i ? this : this.clone(!0)),
                  oe(a[s])[t](n),
                  Q.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Ke = /^margin/,
        Xe = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
        Ze = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        };
      !(function () {
        function e() {
          if (o) {
            (o.style.cssText =
              "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
              (o.innerHTML = ""),
              Ie.appendChild(s);
            var e = n.getComputedStyle(o);
            (t = "1%" !== e.top),
              (i = "2px" === e.marginLeft),
              (r = "4px" === e.width),
              (o.style.marginRight = "50%"),
              (a = "4px" === e.marginRight),
              Ie.removeChild(s),
              (o = null);
          }
        }
        var t,
          r,
          a,
          i,
          s = $.createElement("div"),
          o = $.createElement("div");
        o.style &&
          ((o.style.backgroundClip = "content-box"),
          (o.cloneNode(!0).style.backgroundClip = ""),
          (se.clearCloneStyle = "content-box" === o.style.backgroundClip),
          (s.style.cssText =
            "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
          s.appendChild(o),
          oe.extend(se, {
            pixelPosition: function () {
              return e(), t;
            },
            boxSizingReliable: function () {
              return e(), r;
            },
            pixelMarginRight: function () {
              return e(), a;
            },
            reliableMarginLeft: function () {
              return e(), i;
            },
          }));
      })();
      var Qe = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" },
        rt = ["Webkit", "Moz", "ms"],
        at = $.createElement("div").style;
      oe.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = j(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: { float: "cssFloat" },
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var a,
              i,
              s,
              o = oe.camelCase(t),
              u = et.test(t),
              d = e.style;
            if (
              (u || (t = E(o)),
              (s = oe.cssHooks[t] || oe.cssHooks[o]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (a = s.get(e, !1, r))
                ? a
                : d[t];
            "string" == (i = typeof n) &&
              (a = He.exec(n)) &&
              a[1] &&
              ((n = y(e, t, a)), (i = "number")),
              null != n &&
                n == n &&
                ("number" === i &&
                  (n += (a && a[3]) || (oe.cssNumber[o] ? "" : "px")),
                se.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (d[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  (u ? d.setProperty(t, n) : (d[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var a,
            i,
            s,
            o = oe.camelCase(t);
          return (
            et.test(t) || (t = E(o)),
            (s = oe.cssHooks[t] || oe.cssHooks[o]) &&
              "get" in s &&
              (a = s.get(e, !0, n)),
            void 0 === a && (a = j(e, t, r)),
            "normal" === a && t in nt && (a = nt[t]),
            "" === n || n
              ? ((i = parseFloat(a)), !0 === n || isFinite(i) ? i || 0 : a)
              : a
          );
        },
      }),
        oe.each(["height", "width"], function (e, t) {
          oe.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Qe.test(oe.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? P(e, t, r)
                  : Oe(e, tt, function () {
                      return P(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var a,
                i = r && Ze(e),
                s =
                  r &&
                  O(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, i), i);
              return (
                s &&
                  (a = He.exec(n)) &&
                  "px" !== (a[3] || "px") &&
                  ((e.style[t] = n), (n = oe.css(e, t))),
                A(0, n, s)
              );
            },
          };
        }),
        (oe.cssHooks.marginLeft = H(se.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(j(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Oe(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        oe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (oe.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  a = {},
                  i = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                a[e + Ee[r] + t] = i[r] || i[r - 2] || i[0];
              return a;
            },
          }),
            Ke.test(e) || (oe.cssHooks[e + t].set = A);
        }),
        oe.fn.extend({
          css: function (e, t) {
            return ke(
              this,
              function (e, t, n) {
                var r,
                  a,
                  i = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (r = Ze(e), a = t.length; s < a; s++)
                    i[t[s]] = oe.css(e, t[s], !1, r);
                  return i;
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (oe.Tween = C),
        ((C.prototype = {
          constructor: C,
          init: function (e, t, n, r, a, i) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = a || oe.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = i || (oe.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = C.propHooks[this.prop];
            return e && e.get ? e.get(this) : C.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = C.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    oe.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : C.propHooks._default.set(this),
              this
            );
          },
        }).init.prototype = C.prototype),
        ((C.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = oe.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              oe.fx.step[e.prop]
                ? oe.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (null == e.elem.style[oe.cssProps[e.prop]] &&
                    !oe.cssHooks[e.prop])
                ? (e.elem[e.prop] = e.now)
                : oe.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }).scrollTop = C.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (oe.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (oe.fx = C.prototype.init),
        (oe.fx.step = {});
      var it,
        st,
        ot = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      (oe.Animation = oe.extend(I, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return y(n.elem, e, He.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          oe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Le));
          for (var n, r = 0, a = e.length; r < a; r++)
            (n = e[r]),
              (I.tweeners[n] = I.tweeners[n] || []),
              I.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              a,
              i,
              s,
              o,
              u,
              d,
              l,
              c = "width" in t || "height" in t,
              _ = this,
              f = {},
              h = e.style,
              m = e.nodeType && Ae(e),
              p = De.get(e, "fxshow");
            n.queue ||
              (null == (s = oe._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (o = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || o();
                })),
              s.unqueued++,
              _.always(function () {
                _.always(function () {
                  s.unqueued--, oe.queue(e, "fx").length || s.empty.fire();
                });
              }));
            for (r in t)
              if (((a = t[r]), ot.test(a))) {
                if (
                  (delete t[r],
                  (i = i || "toggle" === a),
                  a === (m ? "hide" : "show"))
                ) {
                  if ("show" !== a || !p || void 0 === p[r]) continue;
                  m = !0;
                }
                f[r] = (p && p[r]) || oe.style(e, r);
              }
            if ((u = !oe.isEmptyObject(t)) || !oe.isEmptyObject(f)) {
              c &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (d = p && p.display) && (d = De.get(e, "display")),
                "none" === (l = oe.css(e, "display")) &&
                  (d
                    ? (l = d)
                    : (M([e], !0),
                      (d = e.style.display || d),
                      (l = oe.css(e, "display")),
                      M([e]))),
                ("inline" === l || ("inline-block" === l && null != d)) &&
                  "none" === oe.css(e, "float") &&
                  (u ||
                    (_.done(function () {
                      h.display = d;
                    }),
                    null == d &&
                      ((l = h.display), (d = "none" === l ? "" : l))),
                  (h.display = "inline-block"))),
                n.overflow &&
                  ((h.overflow = "hidden"),
                  _.always(function () {
                    (h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2]);
                  })),
                (u = !1);
              for (r in f)
                u ||
                  (p
                    ? "hidden" in p && (m = p.hidden)
                    : (p = De.access(e, "fxshow", { display: d })),
                  i && (p.hidden = !m),
                  m && M([e], !0),
                  _.done(function () {
                    m || M([e]), De.remove(e, "fxshow");
                    for (r in f) oe.style(e, r, f[r]);
                  })),
                  (u = N(m ? p[r] : 0, r, _)),
                  r in p ||
                    ((p[r] = u.start), m && ((u.end = u.start), (u.start = 0)));
            }
          },
        ],
        prefilter: function (e, t) {
          t ? I.prefilters.unshift(e) : I.prefilters.push(e);
        },
      })),
        (oe.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? oe.extend({}, e)
              : {
                  complete: n || (!n && t) || (oe.isFunction(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !oe.isFunction(t) && t),
                };
          return (
            oe.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in oe.fx.speeds
                  ? (r.duration = oe.fx.speeds[r.duration])
                  : (r.duration = oe.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              oe.isFunction(r.old) && r.old.call(this),
                r.queue && oe.dequeue(this, r.queue);
            }),
            r
          );
        }),
        oe.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(Ae)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var a = oe.isEmptyObject(e),
              i = oe.speed(t, n, r),
              s = function () {
                var t = I(this, oe.extend({}, e), i);
                (a || De.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              a || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  a = null != e && e + "queueHooks",
                  i = oe.timers,
                  s = De.get(this);
                if (a) s[a] && s[a].stop && r(s[a]);
                else for (a in s) s[a] && s[a].stop && ut.test(a) && r(s[a]);
                for (a = i.length; a--; )
                  i[a].elem !== this ||
                    (null != e && i[a].queue !== e) ||
                    (i[a].anim.stop(n), (t = !1), i.splice(a, 1));
                (!t && n) || oe.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = De.get(this),
                  r = n[e + "queue"],
                  a = n[e + "queueHooks"],
                  i = oe.timers,
                  s = r ? r.length : 0;
                for (
                  n.finish = !0,
                    oe.queue(this, e, []),
                    a && a.stop && a.stop.call(this, !0),
                    t = i.length;
                  t--;

                )
                  i[t].elem === this &&
                    i[t].queue === e &&
                    (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < s; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        oe.each(["toggle", "show", "hide"], function (e, t) {
          var n = oe.fn[t];
          oe.fn[t] = function (e, r, a) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(F(t, !0), e, r, a);
          };
        }),
        oe.each(
          {
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            oe.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (oe.timers = []),
        (oe.fx.tick = function () {
          var e,
            t = 0,
            n = oe.timers;
          for (it = oe.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || oe.fx.stop(), (it = void 0);
        }),
        (oe.fx.timer = function (e) {
          oe.timers.push(e), oe.fx.start();
        }),
        (oe.fx.interval = 13),
        (oe.fx.start = function () {
          st || ((st = !0), R());
        }),
        (oe.fx.stop = function () {
          st = null;
        }),
        (oe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (oe.fn.delay = function (e, t) {
          return (
            (e = oe.fx ? oe.fx.speeds[e] || e : e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var a = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(a);
              };
            })
          );
        }),
        (function () {
          var e = $.createElement("input"),
            t = $.createElement("select").appendChild(
              $.createElement("option")
            );
          (e.type = "checkbox"),
            (se.checkOn = "" !== e.value),
            (se.optSelected = t.selected),
            ((e = $.createElement("input")).value = "t"),
            (e.type = "radio"),
            (se.radioValue = "t" === e.value);
        })();
      var dt,
        lt = oe.expr.attrHandle;
      oe.fn.extend({
        attr: function (e, t) {
          return ke(this, oe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            oe.removeAttr(this, e);
          });
        },
      }),
        oe.extend({
          attr: function (e, t, n) {
            var r,
              a,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === e.getAttribute
                ? oe.prop(e, t, n)
                : ((1 === i && oe.isXMLDoc(e)) ||
                    (a =
                      oe.attrHooks[t.toLowerCase()] ||
                      (oe.expr.match.bool.test(t) ? dt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void oe.removeAttr(e, t)
                      : a && "set" in a && void 0 !== (r = a.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : a && "get" in a && null !== (r = a.get(e, t))
                    ? r
                    : null == (r = oe.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!se.radioValue && "radio" === t && u(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              a = t && t.match(Le);
            if (a && 1 === e.nodeType)
              for (; (n = a[r++]); ) e.removeAttribute(n);
          },
        }),
        (dt = {
          set: function (e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = lt[t] || oe.find.attr;
          lt[t] = function (e, t, r) {
            var a,
              i,
              s = t.toLowerCase();
            return (
              r ||
                ((i = lt[s]),
                (lt[s] = a),
                (a = null != n(e, t, r) ? s : null),
                (lt[s] = i)),
              a
            );
          };
        });
      var ct = /^(?:input|select|textarea|button)$/i,
        _t = /^(?:a|area)$/i;
      oe.fn.extend({
        prop: function (e, t) {
          return ke(this, oe.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[oe.propFix[e] || e];
          });
        },
      }),
        oe.extend({
          prop: function (e, t, n) {
            var r,
              a,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && oe.isXMLDoc(e)) ||
                  ((t = oe.propFix[t] || t), (a = oe.propHooks[t])),
                void 0 !== n
                  ? a && "set" in a && void 0 !== (r = a.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : a && "get" in a && null !== (r = a.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = oe.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : ct.test(e.nodeName) || (_t.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        se.optSelected ||
          (oe.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        oe.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            oe.propFix[this.toLowerCase()] = this;
          }
        ),
        oe.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              a,
              i,
              s,
              o,
              u = 0;
            if (oe.isFunction(e))
              return this.each(function (t) {
                oe(this).addClass(e.call(this, t, B(this)));
              });
            if ("string" == typeof e && e)
              for (t = e.match(Le) || []; (n = this[u++]); )
                if (((a = B(n)), (r = 1 === n.nodeType && " " + z(a) + " "))) {
                  for (s = 0; (i = t[s++]); )
                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                  a !== (o = z(r)) && n.setAttribute("class", o);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              a,
              i,
              s,
              o,
              u = 0;
            if (oe.isFunction(e))
              return this.each(function (t) {
                oe(this).removeClass(e.call(this, t, B(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
              for (t = e.match(Le) || []; (n = this[u++]); )
                if (((a = B(n)), (r = 1 === n.nodeType && " " + z(a) + " "))) {
                  for (s = 0; (i = t[s++]); )
                    for (; r.indexOf(" " + i + " ") > -1; )
                      r = r.replace(" " + i + " ", " ");
                  a !== (o = z(r)) && n.setAttribute("class", o);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : oe.isFunction(e)
              ? this.each(function (n) {
                  oe(this).toggleClass(e.call(this, n, B(this), t), t);
                })
              : this.each(function () {
                  var t, r, a, i;
                  if ("string" === n)
                    for (
                      r = 0, a = oe(this), i = e.match(Le) || [];
                      (t = i[r++]);

                    )
                      a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = B(this)) && De.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : De.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + z(B(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var ft = /\r/g;
      oe.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            a = this[0];
          if (arguments.length)
            return (
              (r = oe.isFunction(e)),
              this.each(function (n) {
                var a;
                1 === this.nodeType &&
                  (null == (a = r ? e.call(this, n, oe(this).val()) : e)
                    ? (a = "")
                    : "number" == typeof a
                    ? (a += "")
                    : Array.isArray(a) &&
                      (a = oe.map(a, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    oe.valHooks[this.type] ||
                    oe.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, a, "value")) ||
                    (this.value = a));
              })
            );
          if (a)
            return (t =
              oe.valHooks[a.type] || oe.valHooks[a.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(a, "value"))
              ? n
              : "string" == typeof (n = a.value)
              ? n.replace(ft, "")
              : null == n
              ? ""
              : n;
        },
      }),
        oe.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = oe.find.attr(e, "value");
                return null != t ? t : z(oe.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  a = e.options,
                  i = e.selectedIndex,
                  s = "select-one" === e.type,
                  o = s ? null : [],
                  d = s ? i + 1 : a.length;
                for (r = i < 0 ? d : s ? i : 0; r < d; r++)
                  if (
                    ((n = a[r]).selected || r === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))
                  ) {
                    if (((t = oe(n).val()), s)) return t;
                    o.push(t);
                  }
                return o;
              },
              set: function (e, t) {
                for (
                  var n, r, a = e.options, i = oe.makeArray(t), s = a.length;
                  s--;

                )
                  ((r = a[s]).selected =
                    oe.inArray(oe.valHooks.option.get(r), i) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), i;
              },
            },
          },
        }),
        oe.each(["radio", "checkbox"], function () {
          (oe.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = oe.inArray(oe(e).val(), t) > -1);
            },
          }),
            se.checkOn ||
              (oe.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        });
      var ht = /^(?:focusinfocus|focusoutblur)$/;
      oe.extend(oe.event, {
        trigger: function (e, t, r, a) {
          var i,
            s,
            o,
            u,
            d,
            l,
            c,
            _ = [r || $],
            f = re.call(e, "type") ? e.type : e,
            h = re.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = o = r = r || $),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !ht.test(f + oe.event.triggered) &&
              (f.indexOf(".") > -1 &&
                ((f = (h = f.split(".")).shift()), h.sort()),
              (d = f.indexOf(":") < 0 && "on" + f),
              (e = e[oe.expando]
                ? e
                : new oe.Event(f, "object" == typeof e && e)),
              (e.isTrigger = a ? 2 : 3),
              (e.namespace = h.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : oe.makeArray(t, [e])),
              (c = oe.event.special[f] || {}),
              a || !c.trigger || !1 !== c.trigger.apply(r, t)))
          ) {
            if (!a && !c.noBubble && !oe.isWindow(r)) {
              for (
                u = c.delegateType || f, ht.test(u + f) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                _.push(s), (o = s);
              o === (r.ownerDocument || $) &&
                _.push(o.defaultView || o.parentWindow || n);
            }
            for (i = 0; (s = _[i++]) && !e.isPropagationStopped(); )
              (e.type = i > 1 ? u : c.bindType || f),
                (l =
                  (De.get(s, "events") || {})[e.type] && De.get(s, "handle")) &&
                  l.apply(s, t),
                (l = d && s[d]) &&
                  l.apply &&
                  be(s) &&
                  ((e.result = l.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = f),
              a ||
                e.isDefaultPrevented() ||
                (c._default && !1 !== c._default.apply(_.pop(), t)) ||
                !be(r) ||
                (d &&
                  oe.isFunction(r[f]) &&
                  !oe.isWindow(r) &&
                  ((o = r[d]) && (r[d] = null),
                  (oe.event.triggered = f),
                  r[f](),
                  (oe.event.triggered = void 0),
                  o && (r[d] = o))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = oe.extend(new oe.Event(), n, { type: e, isSimulated: !0 });
          oe.event.trigger(r, null, t);
        },
      }),
        oe.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              oe.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return oe.event.trigger(e, t, n, !0);
          },
        }),
        oe.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            oe.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        oe.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        (se.focusin = "onfocusin" in n),
        se.focusin ||
          oe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              oe.event.simulate(t, e.target, oe.event.fix(e));
            };
            oe.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this,
                  a = De.access(r, t);
                a || r.addEventListener(e, n, !0),
                  De.access(r, t, (a || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this,
                  a = De.access(r, t) - 1;
                a
                  ? De.access(r, t, a)
                  : (r.removeEventListener(e, n, !0), De.remove(r, t));
              },
            };
          });
      var mt = n.location,
        pt = oe.now(),
        yt = /\?/;
      oe.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            oe.error("Invalid XML: " + e),
          t
        );
      };
      var Mt = /\[\]$/,
        gt = /\r?\n/g,
        vt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
      (oe.param = function (e, t) {
        var n,
          r = [],
          a = function (e, t) {
            var n = oe.isFunction(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(e) || (e.jquery && !oe.isPlainObject(e)))
          oe.each(e, function () {
            a(this.name, this.value);
          });
        else for (n in e) U(n, e[n], t, a);
        return r.join("&");
      }),
        oe.fn.extend({
          serialize: function () {
            return oe.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = oe.prop(this, "elements");
              return e ? oe.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !oe(this).is(":disabled") &&
                  Lt.test(this.nodeName) &&
                  !vt.test(e) &&
                  (this.checked || !Ce.test(e))
                );
              })
              .map(function (e, t) {
                var n = oe(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? oe.map(n, function (e) {
                      return { name: t.name, value: e.replace(gt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(gt, "\r\n") };
              })
              .get();
          },
        });
      var Yt = /%20/g,
        wt = /#.*$/,
        kt = /([?&])_=[^&]*/,
        bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Dt = /^(?:GET|HEAD)$/,
        Tt = /^\/\//,
        xt = {},
        St = {},
        jt = "*/".concat("*"),
        Ht = $.createElement("a");
      (Ht.href = mt.href),
        oe.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                mt.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": jt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": oe.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? G(G(e, oe.ajaxSettings), t) : G(oe.ajaxSettings, e);
          },
          ajaxPrefilter: q(xt),
          ajaxTransport: q(St),
          ajax: function (e, t) {
            function r(e, t, r, o) {
              var d,
                _,
                f,
                v,
                L,
                Y = t;
              l ||
                ((l = !0),
                u && n.clearTimeout(u),
                (a = void 0),
                (s = o || ""),
                (w.readyState = e > 0 ? 4 : 0),
                (d = (e >= 200 && e < 300) || 304 === e),
                r &&
                  (v = (function (e, t, n) {
                    for (
                      var r, a, i, s, o = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (a in o)
                        if (o[a] && o[a].test(r)) {
                          u.unshift(a);
                          break;
                        }
                    if (u[0] in n) i = u[0];
                    else {
                      for (a in n) {
                        if (!u[0] || e.converters[a + " " + u[0]]) {
                          i = a;
                          break;
                        }
                        s || (s = a);
                      }
                      i = i || s;
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i];
                  })(h, w, r)),
                (v = (function (e, t, n, r) {
                  var a,
                    i,
                    s,
                    o,
                    u,
                    d = {},
                    l = e.dataTypes.slice();
                  if (l[1])
                    for (s in e.converters)
                      d[s.toLowerCase()] = e.converters[s];
                  for (i = l.shift(); i; )
                    if (
                      (e.responseFields[i] && (n[e.responseFields[i]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = i),
                      (i = l.shift()))
                    )
                      if ("*" === i) i = u;
                      else if ("*" !== u && u !== i) {
                        if (!(s = d[u + " " + i] || d["* " + i]))
                          for (a in d)
                            if (
                              (o = a.split(" "))[1] === i &&
                              (s = d[u + " " + o[0]] || d["* " + o[0]])
                            ) {
                              !0 === s
                                ? (s = d[a])
                                : !0 !== d[a] && ((i = o[0]), l.unshift(o[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + u + " to " + i,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(h, v, w, d)),
                d
                  ? (h.ifModified &&
                      ((L = w.getResponseHeader("Last-Modified")) &&
                        (oe.lastModified[i] = L),
                      (L = w.getResponseHeader("etag")) && (oe.etag[i] = L)),
                    204 === e || "HEAD" === h.type
                      ? (Y = "nocontent")
                      : 304 === e
                      ? (Y = "notmodified")
                      : ((Y = v.state), (_ = v.data), (d = !(f = v.error))))
                  : ((f = Y), (!e && Y) || ((Y = "error"), e < 0 && (e = 0))),
                (w.status = e),
                (w.statusText = (t || Y) + ""),
                d ? y.resolveWith(m, [_, Y, w]) : y.rejectWith(m, [w, Y, f]),
                w.statusCode(g),
                (g = void 0),
                c &&
                  p.trigger(d ? "ajaxSuccess" : "ajaxError", [w, h, d ? _ : f]),
                M.fireWith(m, [w, Y]),
                c &&
                  (p.trigger("ajaxComplete", [w, h]),
                  --oe.active || oe.event.trigger("ajaxStop")));
            }
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var a,
              i,
              s,
              o,
              u,
              d,
              l,
              c,
              _,
              f,
              h = oe.ajaxSetup({}, t),
              m = h.context || h,
              p = h.context && (m.nodeType || m.jquery) ? oe(m) : oe.event,
              y = oe.Deferred(),
              M = oe.Callbacks("once memory"),
              g = h.statusCode || {},
              v = {},
              L = {},
              Y = "canceled",
              w = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!o)
                      for (o = {}; (t = bt.exec(s)); )
                        o[t[1].toLowerCase()] = t[2];
                    t = o[e.toLowerCase()];
                  }
                  return null == t ? null : t;
                },
                getAllResponseHeaders: function () {
                  return l ? s : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == l &&
                      ((e = L[e.toLowerCase()] = L[e.toLowerCase()] || e),
                      (v[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == l && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) w.always(e[w.status]);
                    else for (t in e) g[t] = [g[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || Y;
                  return a && a.abort(t), r(0, t), this;
                },
              };
            if (
              (y.promise(w),
              (h.url = ((e || h.url || mt.href) + "").replace(
                Tt,
                mt.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(Le) || [
                "",
              ]),
              null == h.crossDomain)
            ) {
              d = $.createElement("a");
              try {
                (d.href = h.url),
                  (d.href = d.href),
                  (h.crossDomain =
                    Ht.protocol + "//" + Ht.host != d.protocol + "//" + d.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = oe.param(h.data, h.traditional)),
              J(xt, h, t, w),
              l)
            )
              return w;
            (c = oe.event && h.global) &&
              0 == oe.active++ &&
              oe.event.trigger("ajaxStart"),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Dt.test(h.type)),
              (i = h.url.replace(wt, "")),
              h.hasContent
                ? h.data &&
                  h.processData &&
                  0 ===
                    (h.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (h.data = h.data.replace(Yt, "+"))
                : ((f = h.url.slice(i.length)),
                  h.data &&
                    ((i += (yt.test(i) ? "&" : "?") + h.data), delete h.data),
                  !1 === h.cache &&
                    ((i = i.replace(kt, "$1")),
                    (f = (yt.test(i) ? "&" : "?") + "_=" + pt++ + f)),
                  (h.url = i + f)),
              h.ifModified &&
                (oe.lastModified[i] &&
                  w.setRequestHeader("If-Modified-Since", oe.lastModified[i]),
                oe.etag[i] && w.setRequestHeader("If-None-Match", oe.etag[i])),
              ((h.data && h.hasContent && !1 !== h.contentType) ||
                t.contentType) &&
                w.setRequestHeader("Content-Type", h.contentType),
              w.setRequestHeader(
                "Accept",
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                      ("*" !== h.dataTypes[0] ? ", " + jt + "; q=0.01" : "")
                  : h.accepts["*"]
              );
            for (_ in h.headers) w.setRequestHeader(_, h.headers[_]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, w, h) || l))
              return w.abort();
            if (
              ((Y = "abort"),
              M.add(h.complete),
              w.done(h.success),
              w.fail(h.error),
              (a = J(St, h, t, w)))
            ) {
              if (((w.readyState = 1), c && p.trigger("ajaxSend", [w, h]), l))
                return w;
              h.async &&
                h.timeout > 0 &&
                (u = n.setTimeout(function () {
                  w.abort("timeout");
                }, h.timeout));
              try {
                (l = !1), a.send(v, r);
              } catch (e) {
                if (l) throw e;
                r(-1, e);
              }
            } else r(-1, "No Transport");
            return w;
          },
          getJSON: function (e, t, n) {
            return oe.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return oe.get(e, void 0, t, "script");
          },
        }),
        oe.each(["get", "post"], function (e, t) {
          oe[t] = function (e, n, r, a) {
            return (
              oe.isFunction(n) && ((a = a || r), (r = n), (n = void 0)),
              oe.ajax(
                oe.extend(
                  { url: e, type: t, dataType: a, data: n, success: r },
                  oe.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (oe._evalUrl = function (e) {
          return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        oe.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (oe.isFunction(e) && (e = e.call(this[0])),
                (t = oe(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return oe.isFunction(e)
              ? this.each(function (t) {
                  oe(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = oe(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = oe.isFunction(e);
            return this.each(function (n) {
              oe(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  oe(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (oe.expr.pseudos.hidden = function (e) {
          return !oe.expr.pseudos.visible(e);
        }),
        (oe.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (oe.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Et = { 0: 200, 1223: 204 },
        At = oe.ajaxSettings.xhr();
      (se.cors = !!At && "withCredentials" in At),
        (se.ajax = At = !!At),
        oe.ajaxTransport(function (e) {
          var t, r;
          if (se.cors || (At && !e.crossDomain))
            return {
              send: function (a, i) {
                var s,
                  o = e.xhr();
                if (
                  (o.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) o[s] = e.xhrFields[s];
                e.mimeType &&
                  o.overrideMimeType &&
                  o.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    a["X-Requested-With"] ||
                    (a["X-Requested-With"] = "XMLHttpRequest");
                for (s in a) o.setRequestHeader(s, a[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        o.onload =
                        o.onerror =
                        o.onabort =
                        o.onreadystatechange =
                          null),
                      "abort" === e
                        ? o.abort()
                        : "error" === e
                        ? "number" != typeof o.status
                          ? i(0, "error")
                          : i(o.status, o.statusText)
                        : i(
                            Et[o.status] || o.status,
                            o.statusText,
                            "text" !== (o.responseType || "text") ||
                              "string" != typeof o.responseText
                              ? { binary: o.response }
                              : { text: o.responseText },
                            o.getAllResponseHeaders()
                          ));
                  };
                }),
                  (o.onload = t()),
                  (r = o.onerror = t("error")),
                  void 0 !== o.onabort
                    ? (o.onabort = r)
                    : (o.onreadystatechange = function () {
                        4 === o.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  o.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        oe.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        oe.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return oe.globalEval(e), e;
            },
          },
        }),
        oe.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        oe.ajaxTransport("script", function (e) {
          if (e.crossDomain) {
            var t, n;
            return {
              send: function (r, a) {
                (t = oe("<script>")
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && a("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  $.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var Ot = [],
        Pt = /(=)\?(?=&|$)|\?\?/;
      oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Ot.pop() || oe.expando + "_" + pt++;
          return (this[e] = !0), e;
        },
      }),
        oe.ajaxPrefilter("json jsonp", function (e, t, r) {
          var a,
            i,
            s,
            o =
              !1 !== e.jsonp &&
              (Pt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Pt.test(e.data) &&
                  "data");
          if (o || "jsonp" === e.dataTypes[0])
            return (
              (a = e.jsonpCallback =
                oe.isFunction(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
              o
                ? (e[o] = e[o].replace(Pt, "$1" + a))
                : !1 !== e.jsonp &&
                  (e.url += (yt.test(e.url) ? "&" : "?") + e.jsonp + "=" + a),
              (e.converters["script json"] = function () {
                return s || oe.error(a + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (i = n[a]),
              (n[a] = function () {
                s = arguments;
              }),
              r.always(function () {
                void 0 === i ? oe(n).removeProp(a) : (n[a] = i),
                  e[a] && ((e.jsonpCallback = t.jsonpCallback), Ot.push(a)),
                  s && oe.isFunction(i) && i(s[0]),
                  (s = i = void 0);
              }),
              "script"
            );
        }),
        (se.createHTMLDocument = (function () {
          var e = $.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            2 === e.childNodes.length
          );
        })()),
        (oe.parseHTML = function (e, t, n) {
          if ("string" != typeof e) return [];
          "boolean" == typeof t && ((n = t), (t = !1));
          var r, a, i;
          return (
            t ||
              (se.createHTMLDocument
                ? (((r = (t =
                    $.implementation.createHTMLDocument("")).createElement(
                    "base"
                  )).href = $.location.href),
                  t.head.appendChild(r))
                : (t = $)),
            (a = me.exec(e)),
            (i = !n && []),
            a
              ? [t.createElement(a[1])]
              : ((a = L([e], t, i)),
                i && i.length && oe(i).remove(),
                oe.merge([], a.childNodes))
          );
        }),
        (oe.fn.load = function (e, t, n) {
          var r,
            a,
            i,
            s = this,
            o = e.indexOf(" ");
          return (
            o > -1 && ((r = z(e.slice(o))), (e = e.slice(0, o))),
            oe.isFunction(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (a = "POST"),
            s.length > 0 &&
              oe
                .ajax({ url: e, type: a || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (i = arguments),
                    s.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, i || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        oe.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            oe.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (oe.expr.pseudos.animated = function (e) {
          return oe.grep(oe.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (oe.offset = {
          setOffset: function (e, t, n) {
            var r,
              a,
              i,
              s,
              o,
              u,
              d = oe.css(e, "position"),
              l = oe(e),
              c = {};
            "static" === d && (e.style.position = "relative"),
              (o = l.offset()),
              (i = oe.css(e, "top")),
              (u = oe.css(e, "left")),
              ("absolute" === d || "fixed" === d) &&
              (i + u).indexOf("auto") > -1
                ? ((s = (r = l.position()).top), (a = r.left))
                : ((s = parseFloat(i) || 0), (a = parseFloat(u) || 0)),
              oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, o))),
              null != t.top && (c.top = t.top - o.top + s),
              null != t.left && (c.left = t.left - o.left + a),
              "using" in t ? t.using.call(e, c) : l.css(c);
          },
        }),
        oe.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    oe.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r,
              a,
              i = this[0];
            if (i)
              return i.getClientRects().length
                ? ((r = i.getBoundingClientRect()),
                  (t = i.ownerDocument),
                  (n = t.documentElement),
                  (a = t.defaultView),
                  {
                    top: r.top + a.pageYOffset - n.clientTop,
                    left: r.left + a.pageXOffset - n.clientLeft,
                  })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n = this[0],
                r = { top: 0, left: 0 };
              return (
                "fixed" === oe.css(n, "position")
                  ? (t = n.getBoundingClientRect())
                  : ((e = this.offsetParent()),
                    (t = this.offset()),
                    u(e[0], "html") || (r = e.offset()),
                    (r = {
                      top: r.top + oe.css(e[0], "borderTopWidth", !0),
                      left: r.left + oe.css(e[0], "borderLeftWidth", !0),
                    })),
                {
                  top: t.top - r.top - oe.css(n, "marginTop", !0),
                  left: t.left - r.left - oe.css(n, "marginLeft", !0),
                }
              );
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === oe.css(e, "position");

              )
                e = e.offsetParent;
              return e || Ie;
            });
          },
        }),
        oe.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            oe.fn[e] = function (r) {
              return ke(
                this,
                function (e, r, a) {
                  var i;
                  if (
                    (oe.isWindow(e)
                      ? (i = e)
                      : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === a)
                  )
                    return i ? i[t] : e[r];
                  i
                    ? i.scrollTo(n ? i.pageXOffset : a, n ? a : i.pageYOffset)
                    : (e[r] = a);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        oe.each(["top", "left"], function (e, t) {
          oe.cssHooks[t] = H(se.pixelPosition, function (e, n) {
            if (n)
              return (n = j(e, t)), Xe.test(n) ? oe(e).position()[t] + "px" : n;
          });
        }),
        oe.each({ Height: "height", Width: "width" }, function (e, t) {
          oe.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              oe.fn[r] = function (a, i) {
                var s = arguments.length && (n || "boolean" != typeof a),
                  o = n || (!0 === a || !0 === i ? "margin" : "border");
                return ke(
                  this,
                  function (t, n, a) {
                    var i;
                    return oe.isWindow(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((i = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          i["scroll" + e],
                          t.body["offset" + e],
                          i["offset" + e],
                          i["client" + e]
                        ))
                      : void 0 === a
                      ? oe.css(t, n, o)
                      : oe.style(t, n, a, o);
                  },
                  t,
                  s ? a : void 0,
                  s
                );
              };
            }
          );
        }),
        oe.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (oe.holdReady = function (e) {
          e ? oe.readyWait++ : oe.ready(!0);
        }),
        (oe.isArray = Array.isArray),
        (oe.parseJSON = JSON.parse),
        (oe.nodeName = u),
        void 0 !==
          (a = function () {
            return oe;
          }.apply(t, (r = []))) && (e.exports = a);
      var Ct = n.jQuery,
        Rt = n.$;
      return (
        (oe.noConflict = function (e) {
          return (
            n.$ === oe && (n.$ = Rt),
            e && n.jQuery === oe && (n.jQuery = Ct),
            oe
          );
        }),
        i || (n.jQuery = n.$ = oe),
        oe
      );
    });
  },
  function (e, t) {
    var n = (e.exports = { version: "2.5.1" });
    "number" == typeof __e && (__e = n);
  },
  function (e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function (e, t, n) {
    var r = n(53)("wks"),
      a = n(39),
      i = n(4).Symbol,
      s = "function" == typeof i;
    (e.exports = function (e) {
      return r[e] || (r[e] = (s && i[e]) || (s ? i : a)("Symbol." + e));
    }).store = r;
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    e.exports = n(265).default;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var t = 1; t < arguments.length; t++)
        for (var n in arguments[t])
          Object.prototype.hasOwnProperty.call(arguments[t], n) &&
            (e[n] = arguments[t][n]);
      return e;
    }
    (t.__esModule = !0),
      (t.extend = r),
      (t.indexOf = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }),
      (t.escapeExpression = function (e) {
        if ("string" != typeof e) {
          if (e && e.toHTML) return e.toHTML();
          if (null == e) return "";
          if (!e) return e + "";
          e = "" + e;
        }
        return s.test(e)
          ? e.replace(i, function (e) {
              return a[e];
            })
          : e;
      }),
      (t.isEmpty = function (e) {
        return (!e && 0 !== e) || !(!d(e) || 0 !== e.length);
      }),
      (t.createFrame = function (e) {
        var t = r({}, e);
        return (t._parent = e), t;
      }),
      (t.blockParams = function (e, t) {
        return (e.path = t), e;
      }),
      (t.appendContextPath = function (e, t) {
        return (e ? e + "." : "") + t;
      });
    var a = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
        "=": "&#x3D;",
      },
      i = /[&<>"'`=]/g,
      s = /[&<>"'`=]/,
      o = Object.prototype.toString;
    t.toString = o;
    var u = function (e) {
      return "function" == typeof e;
    };
    u(/x/) &&
      (t.isFunction = u =
        function (e) {
          return "function" == typeof e && "[object Function]" === o.call(e);
        }),
      (t.isFunction = u);
    var d =
      Array.isArray ||
      function (e) {
        return !(!e || "object" != typeof e) && "[object Array]" === o.call(e);
      };
    t.isArray = d;
  },
  function (e, t, n) {
    var r = n(21);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function (e, t, n) {
    e.exports = n(240);
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(43));
    t.default = function (e) {
      return function () {
        var t = e.apply(this, arguments);
        return new r.default(function (e, n) {
          function a(i, s) {
            try {
              var o = t[i](s),
                u = o.value;
            } catch (e) {
              return void n(e);
            }
            if (!o.done)
              return r.default.resolve(u).then(
                function (e) {
                  a("next", e);
                },
                function (e) {
                  a("throw", e);
                }
              );
            e(u);
          }
          return a("next");
        });
      };
    };
  },
  function (e, t, n) {
    var r = n(4),
      a = n(3),
      i = n(31),
      s = n(14),
      o = function (e, t, n) {
        var u,
          d,
          l,
          c = e & o.F,
          _ = e & o.G,
          f = e & o.S,
          h = e & o.P,
          m = e & o.B,
          p = e & o.W,
          y = _ ? a : a[t] || (a[t] = {}),
          M = y.prototype,
          g = _ ? r : f ? r[t] : (r[t] || {}).prototype;
        _ && (n = t);
        for (u in n)
          ((d = !c && g && void 0 !== g[u]) && u in y) ||
            ((l = d ? g[u] : n[u]),
            (y[u] =
              _ && "function" != typeof g[u]
                ? n[u]
                : m && d
                ? i(l, r)
                : p && g[u] == l
                ? (function (e) {
                    var t = function (t, n, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(l)
                : h && "function" == typeof l
                ? i(Function.call, l)
                : l),
            h &&
              (((y.virtual || (y.virtual = {}))[u] = l),
              e & o.R && M && !M[u] && s(M, u, l)));
      };
    (o.F = 1),
      (o.G = 2),
      (o.S = 4),
      (o.P = 8),
      (o.B = 16),
      (o.W = 32),
      (o.U = 64),
      (o.R = 128),
      (e.exports = o);
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          (e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }));
        })
      : (e.exports = function (e, t) {
          e.super_ = t;
          var n = function () {};
          (n.prototype = t.prototype),
            (e.prototype = new n()),
            (e.prototype.constructor = e);
        });
  },
  function (e, t, n) {
    var r = n(15),
      a = n(33);
    e.exports = n(17)
      ? function (e, t, n) {
          return r.f(e, t, a(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(9),
      a = n(219),
      i = n(59),
      s = Object.defineProperty;
    t.f = n(17)
      ? Object.defineProperty
      : function (e, t, n) {
          if ((r(e), (t = i(t, !0)), r(n), a))
            try {
              return s(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (u === setTimeout) return setTimeout(e, 0);
      if ((u === n || !u) && setTimeout)
        return (u = setTimeout), setTimeout(e, 0);
      try {
        return u(e, 0);
      } catch (t) {
        try {
          return u.call(null, e, 0);
        } catch (t) {
          return u.call(this, e, 0);
        }
      }
    }
    function i() {
      if (!f) {
        var e = a(function () {
          f &&
            c &&
            ((f = !1),
            c.length ? (_ = c.concat(_)) : (h = -1),
            _.length && i());
        });
        f = !0;
        for (var t = _.length; t; ) {
          for (c = _, _ = []; ++h < t; ) c && c[h].run();
          (h = -1), (t = _.length);
        }
        (c = null),
          (f = !1),
          (function (e) {
            if (d === clearTimeout) return clearTimeout(e);
            if ((d === r || !d) && clearTimeout)
              return (d = clearTimeout), clearTimeout(e);
            try {
              d(e);
            } catch (t) {
              try {
                return d.call(null, e);
              } catch (t) {
                return d.call(this, e);
              }
            }
          })(e);
      }
    }
    function s(e, t) {
      (this.fun = e), (this.array = t);
    }
    function o() {}
    var u,
      d,
      l = (e.exports = {});
    !(function () {
      try {
        u = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        u = n;
      }
      try {
        d = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (e) {
        d = r;
      }
    })();
    var c,
      _ = [],
      f = !1,
      h = -1;
    (l.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      _.push(new s(e, t)), 1 !== _.length || f || a(i);
    }),
      (s.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (l.title = "browser"),
      (l.browser = !0),
      (l.env = {}),
      (l.argv = []),
      (l.version = ""),
      (l.versions = {}),
      (l.on = o),
      (l.addListener = o),
      (l.once = o),
      (l.off = o),
      (l.removeListener = o),
      (l.removeAllListeners = o),
      (l.emit = o),
      (l.prependListener = o),
      (l.prependOnceListener = o),
      (l.listeners = function (e) {
        return [];
      }),
      (l.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (l.cwd = function () {
        return "/";
      }),
      (l.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (l.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    e.exports = !n(23)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      function r() {
        return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function a(e, t) {
        if (r() < t) throw new RangeError("Invalid typed array length");
        return (
          i.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = i.prototype)
            : (null === e && (e = new i(t)), (e.length = t)),
          e
        );
      }
      function i(e, t, n) {
        if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i))
          return new i(e, t, n);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return u(this, e);
        }
        return s(this, e, t, n);
      }
      function s(e, t, n, r) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, n, r) {
              if ((t.byteLength, n < 0 || t.byteLength < n))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < n + (r || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === n && void 0 === r
                  ? new Uint8Array(t)
                  : void 0 === r
                  ? new Uint8Array(t, n)
                  : new Uint8Array(t, n, r);
              i.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = i.prototype)
                : (e = d(e, t));
              return e;
            })(e, t, n, r)
          : "string" == typeof t
          ? (function (e, t, n) {
              ("string" == typeof n && "" !== n) || (n = "utf8");
              if (!i.isEncoding(n))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var r = 0 | c(t, n),
                s = (e = a(e, r)).write(t, n);
              s !== r && (e = e.slice(0, s));
              return e;
            })(e, t, n)
          : (function (e, t) {
              if (i.isBuffer(t)) {
                var n = 0 | l(t.length);
                return 0 === (e = a(e, n)).length ? e : (t.copy(e, 0, 0, n), e);
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length ||
                    (function (e) {
                      return e != e;
                    })(t.length)
                    ? a(e, 0)
                    : d(e, t);
                if ("Buffer" === t.type && S(t.data)) return d(e, t.data);
              }
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function o(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function u(e, t) {
        if ((o(t), (e = a(e, t < 0 ? 0 : 0 | l(t))), !i.TYPED_ARRAY_SUPPORT))
          for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }
      function d(e, t) {
        var n = t.length < 0 ? 0 : 0 | l(t.length);
        e = a(e, n);
        for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
        return e;
      }
      function l(e) {
        if (e >= r())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              r().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function c(e, t) {
        if (i.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var r = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return k(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return b(e).length;
            default:
              if (r) return k(e).length;
              (t = ("" + t).toLowerCase()), (r = !0);
          }
      }
      function _(e, t, n) {
        var r = e[t];
        (e[t] = e[n]), (e[n] = r);
      }
      function f(e, t, n, r, a) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = a ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (a) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!a) return -1;
          n = 0;
        }
        if (("string" == typeof t && (t = i.from(t, r)), i.isBuffer(t)))
          return 0 === t.length ? -1 : h(e, t, n, r, a);
        if ("number" == typeof t)
          return (
            (t &= 255),
            i.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? a
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : h(e, [t], n, r, a)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function h(e, t, n, r, a) {
        function i(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        var s = 1,
          o = e.length,
          u = t.length;
        if (
          void 0 !== r &&
          ("ucs2" === (r = String(r).toLowerCase()) ||
            "ucs-2" === r ||
            "utf16le" === r ||
            "utf-16le" === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (o /= 2), (u /= 2), (n /= 2);
        }
        var d;
        if (a) {
          var l = -1;
          for (d = n; d < o; d++)
            if (i(e, d) === i(t, -1 === l ? 0 : d - l)) {
              if ((-1 === l && (l = d), d - l + 1 === u)) return l * s;
            } else -1 !== l && (d -= d - l), (l = -1);
        } else
          for (n + u > o && (n = o - u), d = n; d >= 0; d--) {
            for (var c = !0, _ = 0; _ < u; _++)
              if (i(e, d + _) !== i(t, _)) {
                c = !1;
                break;
              }
            if (c) return d;
          }
        return -1;
      }
      function m(e, t, n, r) {
        return D(
          (function (e) {
            for (var t = [], n = 0; n < e.length; ++n)
              t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          r
        );
      }
      function p(e, t, n) {
        n = Math.min(e.length, n);
        for (var r = [], a = t; a < n; ) {
          var i = e[a],
            s = null,
            o = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
          if (a + o <= n) {
            var u, d, l, c;
            switch (o) {
              case 1:
                i < 128 && (s = i);
                break;
              case 2:
                128 == (192 & (u = e[a + 1])) &&
                  (c = ((31 & i) << 6) | (63 & u)) > 127 &&
                  (s = c);
                break;
              case 3:
                (u = e[a + 1]),
                  (d = e[a + 2]),
                  128 == (192 & u) &&
                    128 == (192 & d) &&
                    (c = ((15 & i) << 12) | ((63 & u) << 6) | (63 & d)) >
                      2047 &&
                    (c < 55296 || c > 57343) &&
                    (s = c);
                break;
              case 4:
                (u = e[a + 1]),
                  (d = e[a + 2]),
                  (l = e[a + 3]),
                  128 == (192 & u) &&
                    128 == (192 & d) &&
                    128 == (192 & l) &&
                    (c =
                      ((15 & i) << 18) |
                      ((63 & u) << 12) |
                      ((63 & d) << 6) |
                      (63 & l)) > 65535 &&
                    c < 1114112 &&
                    (s = c);
            }
          }
          null === s
            ? ((s = 65533), (o = 1))
            : s > 65535 &&
              ((s -= 65536),
              r.push(((s >>> 10) & 1023) | 55296),
              (s = 56320 | (1023 & s))),
            r.push(s),
            (a += o);
        }
        return (function (e) {
          var t = e.length;
          if (t <= j) return String.fromCharCode.apply(String, e);
          var n = "",
            r = 0;
          for (; r < t; )
            n += String.fromCharCode.apply(String, e.slice(r, (r += j)));
          return n;
        })(r);
      }
      function y(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function M(e, t, n, r, a, s) {
        if (!i.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > a || t < s)
          throw new RangeError('"value" argument is out of bounds');
        if (n + r > e.length) throw new RangeError("Index out of range");
      }
      function g(e, t, n, r) {
        t < 0 && (t = 65535 + t + 1);
        for (var a = 0, i = Math.min(e.length - n, 2); a < i; ++a)
          e[n + a] =
            (t & (255 << (8 * (r ? a : 1 - a)))) >>> (8 * (r ? a : 1 - a));
      }
      function v(e, t, n, r) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var a = 0, i = Math.min(e.length - n, 4); a < i; ++a)
          e[n + a] = (t >>> (8 * (r ? a : 3 - a))) & 255;
      }
      function L(e, t, n, r, a, i) {
        if (n + r > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function Y(e, t, n, r, a) {
        return a || L(e, 0, n, 4), x.write(e, t, n, r, 23, 4), n + 4;
      }
      function w(e, t, n, r, a) {
        return a || L(e, 0, n, 8), x.write(e, t, n, r, 52, 8), n + 8;
      }
      function k(e, t) {
        t = t || 1 / 0;
        for (var n, r = e.length, a = null, i = [], s = 0; s < r; ++s) {
          if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
            if (!a) {
              if (n > 56319) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === r) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              a = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), (a = n);
              continue;
            }
            n = 65536 + (((a - 55296) << 10) | (n - 56320));
          } else a && (t -= 3) > -1 && i.push(239, 191, 189);
          if (((a = null), n < 128)) {
            if ((t -= 1) < 0) break;
            i.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            i.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            i.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return i;
      }
      function b(e) {
        return T.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(H, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function D(e, t, n, r) {
        for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a)
          t[a + n] = e[a];
        return a;
      }
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */
      var T = n(282),
        x = n(283),
        S = n(72);
      (t.Buffer = i),
        (t.SlowBuffer = function (e) {
          return +e != e && (e = 0), i.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (i.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = r()),
        (i.poolSize = 8192),
        (i._augment = function (e) {
          return (e.__proto__ = i.prototype), e;
        }),
        (i.from = function (e, t, n) {
          return s(null, e, t, n);
        }),
        i.TYPED_ARRAY_SUPPORT &&
          ((i.prototype.__proto__ = Uint8Array.prototype),
          (i.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            i[Symbol.species] === i &&
            Object.defineProperty(i, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (i.alloc = function (e, t, n) {
          return (function (e, t, n, r) {
            return (
              o(t),
              t <= 0
                ? a(e, t)
                : void 0 !== n
                ? "string" == typeof r
                  ? a(e, t).fill(n, r)
                  : a(e, t).fill(n)
                : a(e, t)
            );
          })(null, e, t, n);
        }),
        (i.allocUnsafe = function (e) {
          return u(null, e);
        }),
        (i.allocUnsafeSlow = function (e) {
          return u(null, e);
        }),
        (i.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (i.compare = function (e, t) {
          if (!i.isBuffer(e) || !i.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var n = e.length, r = t.length, a = 0, s = Math.min(n, r);
            a < s;
            ++a
          )
            if (e[a] !== t[a]) {
              (n = e[a]), (r = t[a]);
              break;
            }
          return n < r ? -1 : r < n ? 1 : 0;
        }),
        (i.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (i.concat = function (e, t) {
          if (!S(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return i.alloc(0);
          var n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var r = i.allocUnsafe(t),
            a = 0;
          for (n = 0; n < e.length; ++n) {
            var s = e[n];
            if (!i.isBuffer(s))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            s.copy(r, a), (a += s.length);
          }
          return r;
        }),
        (i.byteLength = c),
        (i.prototype._isBuffer = !0),
        (i.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) _(this, t, t + 1);
          return this;
        }),
        (i.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            _(this, t, t + 3), _(this, t + 1, t + 2);
          return this;
        }),
        (i.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            _(this, t, t + 7),
              _(this, t + 1, t + 6),
              _(this, t + 2, t + 5),
              _(this, t + 3, t + 4);
          return this;
        }),
        (i.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? p(this, 0, e)
            : function (e, t, n) {
                var r = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                  return "";
                if (
                  ((void 0 === n || n > this.length) && (n = this.length),
                  n <= 0)
                )
                  return "";
                if (((n >>>= 0), (t >>>= 0), n <= t)) return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, n) {
                        var r = e.length;
                        (!t || t < 0) && (t = 0),
                          (!n || n < 0 || n > r) && (n = r);
                        for (var a = "", i = t; i < n; ++i)
                          a += (function (e) {
                            return e < 16
                              ? "0" + e.toString(16)
                              : e.toString(16);
                          })(e[i]);
                        return a;
                      })(this, t, n);
                    case "utf8":
                    case "utf-8":
                      return p(this, t, n);
                    case "ascii":
                      return (function (e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for (var a = t; a < n; ++a)
                          r += String.fromCharCode(127 & e[a]);
                        return r;
                      })(this, t, n);
                    case "latin1":
                    case "binary":
                      return (function (e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for (var a = t; a < n; ++a)
                          r += String.fromCharCode(e[a]);
                        return r;
                      })(this, t, n);
                    case "base64":
                      return (function (e, t, n) {
                        return 0 === t && n === e.length
                          ? T.fromByteArray(e)
                          : T.fromByteArray(e.slice(t, n));
                      })(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, n) {
                        for (
                          var r = e.slice(t, n), a = "", i = 0;
                          i < r.length;
                          i += 2
                        )
                          a += String.fromCharCode(r[i] + 256 * r[i + 1]);
                        return a;
                      })(this, t, n);
                    default:
                      if (r) throw new TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (r = !0);
                  }
              }.apply(this, arguments);
        }),
        (i.prototype.equals = function (e) {
          if (!i.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === i.compare(this, e);
        }),
        (i.prototype.inspect = function () {
          var e = "",
            n = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
              this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (i.prototype.compare = function (e, t, n, r, a) {
          if (!i.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === a && (a = this.length),
            t < 0 || n > e.length || r < 0 || a > this.length)
          )
            throw new RangeError("out of range index");
          if (r >= a && t >= n) return 0;
          if (r >= a) return -1;
          if (t >= n) return 1;
          if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (a >>>= 0), this === e))
            return 0;
          for (
            var s = a - r,
              o = n - t,
              u = Math.min(s, o),
              d = this.slice(r, a),
              l = e.slice(t, n),
              c = 0;
            c < u;
            ++c
          )
            if (d[c] !== l[c]) {
              (s = d[c]), (o = l[c]);
              break;
            }
          return s < o ? -1 : o < s ? 1 : 0;
        }),
        (i.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (i.prototype.indexOf = function (e, t, n) {
          return f(this, e, t, n, !0);
        }),
        (i.prototype.lastIndexOf = function (e, t, n) {
          return f(this, e, t, n, !1);
        }),
        (i.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
          else if (void 0 === n && "string" == typeof t)
            (r = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(n)
                ? ((n |= 0), void 0 === r && (r = "utf8"))
                : ((r = n), (n = void 0));
          }
          var a = this.length - t;
          if (
            ((void 0 === n || n > a) && (n = a),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          r || (r = "utf8");
          for (var i = !1; ; )
            switch (r) {
              case "hex":
                return (function (e, t, n, r) {
                  n = Number(n) || 0;
                  var a = e.length - n;
                  r ? (r = Number(r)) > a && (r = a) : (r = a);
                  var i = t.length;
                  if (i % 2 != 0) throw new TypeError("Invalid hex string");
                  r > i / 2 && (r = i / 2);
                  for (var s = 0; s < r; ++s) {
                    var o = parseInt(t.substr(2 * s, 2), 16);
                    if (isNaN(o)) return s;
                    e[n + s] = o;
                  }
                  return s;
                })(this, e, t, n);
              case "utf8":
              case "utf-8":
                return (function (e, t, n, r) {
                  return D(k(t, e.length - n), e, n, r);
                })(this, e, t, n);
              case "ascii":
                return m(this, e, t, n);
              case "latin1":
              case "binary":
                return (function (e, t, n, r) {
                  return m(e, t, n, r);
                })(this, e, t, n);
              case "base64":
                return (function (e, t, n, r) {
                  return D(b(t), e, n, r);
                })(this, e, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (function (e, t, n, r) {
                  return D(
                    (function (e, t) {
                      for (
                        var n, r, a, i = [], s = 0;
                        s < e.length && !((t -= 2) < 0);
                        ++s
                      )
                        (n = e.charCodeAt(s)),
                          (r = n >> 8),
                          (a = n % 256),
                          i.push(a),
                          i.push(r);
                      return i;
                    })(t, e.length - n),
                    e,
                    n,
                    r
                  );
                })(this, e, t, n);
              default:
                if (i) throw new TypeError("Unknown encoding: " + r);
                (r = ("" + r).toLowerCase()), (i = !0);
            }
        }),
        (i.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var j = 4096;
      (i.prototype.slice = function (e, t) {
        var n = this.length;
        (e = ~~e),
          (t = void 0 === t ? n : ~~t),
          e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          t < e && (t = e);
        var r;
        if (i.TYPED_ARRAY_SUPPORT)
          (r = this.subarray(e, t)).__proto__ = i.prototype;
        else {
          var a = t - e;
          r = new i(a, void 0);
          for (var s = 0; s < a; ++s) r[s] = this[s + e];
        }
        return r;
      }),
        (i.prototype.readUIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || y(e, t, this.length);
          for (var r = this[e], a = 1, i = 0; ++i < t && (a *= 256); )
            r += this[e + i] * a;
          return r;
        }),
        (i.prototype.readUIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || y(e, t, this.length);
          for (var r = this[e + --t], a = 1; t > 0 && (a *= 256); )
            r += this[e + --t] * a;
          return r;
        }),
        (i.prototype.readUInt8 = function (e, t) {
          return t || y(e, 1, this.length), this[e];
        }),
        (i.prototype.readUInt16LE = function (e, t) {
          return t || y(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (i.prototype.readUInt16BE = function (e, t) {
          return t || y(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (i.prototype.readUInt32LE = function (e, t) {
          return (
            t || y(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (i.prototype.readUInt32BE = function (e, t) {
          return (
            t || y(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (i.prototype.readIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || y(e, t, this.length);
          for (var r = this[e], a = 1, i = 0; ++i < t && (a *= 256); )
            r += this[e + i] * a;
          return (a *= 128), r >= a && (r -= Math.pow(2, 8 * t)), r;
        }),
        (i.prototype.readIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || y(e, t, this.length);
          for (var r = t, a = 1, i = this[e + --r]; r > 0 && (a *= 256); )
            i += this[e + --r] * a;
          return (a *= 128), i >= a && (i -= Math.pow(2, 8 * t)), i;
        }),
        (i.prototype.readInt8 = function (e, t) {
          return (
            t || y(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (i.prototype.readInt16LE = function (e, t) {
          t || y(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (i.prototype.readInt16BE = function (e, t) {
          t || y(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (i.prototype.readInt32LE = function (e, t) {
          return (
            t || y(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (i.prototype.readInt32BE = function (e, t) {
          return (
            t || y(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (i.prototype.readFloatLE = function (e, t) {
          return t || y(e, 4, this.length), x.read(this, e, !0, 23, 4);
        }),
        (i.prototype.readFloatBE = function (e, t) {
          return t || y(e, 4, this.length), x.read(this, e, !1, 23, 4);
        }),
        (i.prototype.readDoubleLE = function (e, t) {
          return t || y(e, 8, this.length), x.read(this, e, !0, 52, 8);
        }),
        (i.prototype.readDoubleBE = function (e, t) {
          return t || y(e, 8, this.length), x.read(this, e, !1, 52, 8);
        }),
        (i.prototype.writeUIntLE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), (n |= 0), !r)) {
            M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          }
          var a = 1,
            i = 0;
          for (this[t] = 255 & e; ++i < n && (a *= 256); )
            this[t + i] = (e / a) & 255;
          return t + n;
        }),
        (i.prototype.writeUIntBE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), (n |= 0), !r)) {
            M(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          }
          var a = n - 1,
            i = 1;
          for (this[t + a] = 255 & e; --a >= 0 && (i *= 256); )
            this[t + a] = (e / i) & 255;
          return t + n;
        }),
        (i.prototype.writeUInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 1, 255, 0),
            i.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (i.prototype.writeUInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 2, 65535, 0),
            i.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : g(this, e, t, !0),
            t + 2
          );
        }),
        (i.prototype.writeUInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 2, 65535, 0),
            i.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : g(this, e, t, !1),
            t + 2
          );
        }),
        (i.prototype.writeUInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 4, 4294967295, 0),
            i.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : v(this, e, t, !0),
            t + 4
          );
        }),
        (i.prototype.writeUInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 4, 4294967295, 0),
            i.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : v(this, e, t, !1),
            t + 4
          );
        }),
        (i.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var a = Math.pow(2, 8 * n - 1);
            M(this, e, t, n, a - 1, -a);
          }
          var i = 0,
            s = 1,
            o = 0;
          for (this[t] = 255 & e; ++i < n && (s *= 256); )
            e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1),
              (this[t + i] = (((e / s) >> 0) - o) & 255);
          return t + n;
        }),
        (i.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t |= 0), !r)) {
            var a = Math.pow(2, 8 * n - 1);
            M(this, e, t, n, a - 1, -a);
          }
          var i = n - 1,
            s = 1,
            o = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
            e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1),
              (this[t + i] = (((e / s) >> 0) - o) & 255);
          return t + n;
        }),
        (i.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 1, 127, -128),
            i.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (i.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 2, 32767, -32768),
            i.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : g(this, e, t, !0),
            t + 2
          );
        }),
        (i.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 2, 32767, -32768),
            i.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : g(this, e, t, !1),
            t + 2
          );
        }),
        (i.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 4, 2147483647, -2147483648),
            i.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : v(this, e, t, !0),
            t + 4
          );
        }),
        (i.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || M(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            i.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : v(this, e, t, !1),
            t + 4
          );
        }),
        (i.prototype.writeFloatLE = function (e, t, n) {
          return Y(this, e, t, !0, n);
        }),
        (i.prototype.writeFloatBE = function (e, t, n) {
          return Y(this, e, t, !1, n);
        }),
        (i.prototype.writeDoubleLE = function (e, t, n) {
          return w(this, e, t, !0, n);
        }),
        (i.prototype.writeDoubleBE = function (e, t, n) {
          return w(this, e, t, !1, n);
        }),
        (i.prototype.copy = function (e, t, n, r) {
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r < 0) throw new RangeError("sourceEnd out of bounds");
          r > this.length && (r = this.length),
            e.length - t < r - n && (r = e.length - t + n);
          var a,
            s = r - n;
          if (this === e && n < t && t < r)
            for (a = s - 1; a >= 0; --a) e[a + t] = this[a + n];
          else if (s < 1e3 || !i.TYPED_ARRAY_SUPPORT)
            for (a = 0; a < s; ++a) e[a + t] = this[a + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
          return s;
        }),
        (i.prototype.fill = function (e, t, n, r) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : "string" == typeof n && ((r = n), (n = this.length)),
              1 === e.length)
            ) {
              var a = e.charCodeAt(0);
              a < 256 && (e = a);
            }
            if (void 0 !== r && "string" != typeof r)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof r && !i.isEncoding(r))
              throw new TypeError("Unknown encoding: " + r);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= t) return this;
          (t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0);
          var s;
          if ("number" == typeof e) for (s = t; s < n; ++s) this[s] = e;
          else {
            var o = i.isBuffer(e) ? e : k(new i(e, r).toString()),
              u = o.length;
            for (s = 0; s < n - t; ++s) this[s + t] = o[s % u];
          }
          return this;
        });
      var H = /[^+\/0-9A-Za-z-_]/g;
    }.call(t, n(6)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      if (!(this instanceof r)) return new r(e);
      o.call(this, e),
        u.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", function () {
          if (this.allowHalfOpen || this._writableState.ended) return;
          a(function (e) {
            e.end();
          }, this);
        });
    }
    var a = n(35),
      i =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
    e.exports = r;
    var s = n(28);
    s.inherits = n(13);
    var o = n(75),
      u = n(79);
    s.inherits(r, o);
    for (var d = i(u.prototype), l = 0; l < d.length; l++) {
      var c = d[l];
      r.prototype[c] || (r.prototype[c] = u.prototype[c]);
    }
    Object.defineProperty(r.prototype, "destroyed", {
      get: function () {
        return (
          void 0 !== this._readableState &&
          void 0 !== this._writableState &&
          this._readableState.destroyed &&
          this._writableState.destroyed
        );
      },
      set: function (e) {
        void 0 !== this._readableState &&
          void 0 !== this._writableState &&
          ((this._readableState.destroyed = e),
          (this._writableState.destroyed = e));
      },
    }),
      (r.prototype._destroy = function (e, t) {
        this.push(null), this.end(), a(t, e);
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  ,
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t, n) {
    var r = n(63),
      a = n(46);
    e.exports = function (e) {
      return r(a(e));
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        var e = document.querySelectorAll("script"),
          t = [],
          n = [],
          r = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var s, o = (0, l.default)(e);
            !(r = (s = o.next()).done);
            r = !0
          ) {
            var u = s.value;
            t.push(u.innerHTML);
          }
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            !r && o.return && o.return();
          } finally {
            if (a) throw i;
          }
        }
        var d = !0,
          c = !1,
          _ = void 0;
        try {
          for (
            var h, m = (0, l.default)(t);
            !(d = (h = m.next()).done);
            d = !0
          ) {
            var p = h.value;
            if (p.includes("OberloMerchant")) {
              n = /"shopDomain":"(.*?)"/gm.exec(p);
            }
          }
        } catch (e) {
          (c = !0), (_ = e);
        } finally {
          try {
            !d && m.return && m.return();
          } finally {
            if (c) throw _;
          }
        }
        var y = !0,
          M = !1,
          g = void 0;
        try {
          for (
            var v, L = (0, l.default)(n);
            !(y = (v = L.next()).done);
            y = !0
          ) {
            var Y = v.value;
            if (
              void 0 !== Y &&
              !Y.includes("shopDomain") &&
              Y.includes("myshopify")
            )
              return Y;
          }
        } catch (e) {
          (M = !0), (g = e);
        } finally {
          try {
            !y && L.return && L.return();
          } finally {
            if (M) throw g;
          }
        }
        throw (
          ((0, f.default)(chrome.i18n.getMessage("e01")),
          new Error(chrome.i18n.getMessage("e01")))
        );
      }
      function i(e) {
        localStorage.setItem(_.aliLink, e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.checkImportReview =
          t.fetchDataBackground =
          t.prepareProductListPageNew =
          t.aliAllLink =
          t.findAliLinkPageNew =
          t.findAliLink =
          t.shouldShowModalOverwriteReview =
          t.isPermitAccount =
            void 0);
      var s = r(n(43)),
        o = r(n(231)),
        u = r(n(10)),
        d = r(n(11)),
        l = r(n(229)),
        c =
          ((t.isPermitAccount = (function () {
            var e = (0, d.default)(
              u.default.mark(function e() {
                var t, n, r, i, s, o, d, l, c, _, p, y;
                return u.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = a()), (e.next = 3), m.default.getSetting(t)
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            (e.next = 6),
                            (0, h.request_not_options_response_text)(
                              "https://alireviews-fe.onecommerce.io"
                            )
                          );
                        case 6:
                          if (!(r = e.sent)) {
                            e.next = 15;
                            break;
                          }
                          if (
                            ((i = new DOMParser()),
                            (s = i.parseFromString(r, "text/html")),
                            (o = s.getElementById("info_shop")),
                            (d = (o && o.getAttribute("shop")) || "") == t)
                          ) {
                            e.next = 15;
                            break;
                          }
                          return (
                            (0, f.default)(
                              '\n<style>\n.alireview-toast-wrapper .alert-warning::before{\n    width: 17px;\n    height: 13px;\n    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgBpZLRDYIwEIb/g/rOCIygG8i7JjqBOoFuIE5gnMREBxAn0BEYwXeFejQitBxJjX9CGq7tf1/vjiBIn4M1LxFNy10TCy+8jFvHMryKFc2RBxBFM/5SNtt+QwEezqExBsYYBJGknVWnbSITOSKGCm8VLdOMekgsKpuoivATeLmbH6UipU/BHkQbDyO4RLV4h4bwUpeoMflFhOV/JqRzPMtE2lLQOEDrq32BFpw1dg0+BRUABVktFgy4xRFCbrFJRImCxxMqA2FizT5NikyuSTWdLkF3YrO+GtW4sUH21Bs/q1yQAJI5LwAAAABJRU5ErkJggg==");\n}\n</style>\nPlease <a href="https://app.alireviews.io/install" target="_blank">log in</a> your store to Ali Reviews',
                              "warning"
                            ),
                            e.abrupt("return", !1)
                          );
                        case 15:
                          if ("error" !== n.status) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (l = n.message),
                            (c = void 0 === l ? "" : l),
                            (_ = n.url),
                            (p = void 0 === _ ? "" : _),
                            (y =
                              c +
                              ' <a href="' +
                              p +
                              '" target="_blank" style="">Upgrade now</a>'),
                            (0, f.default)(y, "warning"),
                            e.abrupt("return", !1)
                          );
                        case 20:
                          return e.abrupt("return", !0);
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t.shouldShowModalOverwriteReview = (function () {
            var e = (0, d.default)(
              u.default.mark(function e(t, n) {
                var r, a;
                return u.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 1),
                            (e.next = 4),
                            m.default.checkHasReview(t, n)
                          );
                        case 4:
                          if (!(r = e.sent)) {
                            e.next = 8;
                            break;
                          }
                          return (
                            (a = (0, o.default)(r)),
                            e.abrupt(
                              "return",
                              a.length && parseInt(r.is_reviews) > 0
                            )
                          );
                        case 8:
                          e.next = 13;
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(1));
                        case 13:
                          return e.abrupt("return", !1);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[1, 10]]
                );
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()),
          (t.findAliLink = (function () {
            var e = (0, d.default)(
              u.default.mark(function e(t) {
                var n, r, a;
                return u.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n = t.find('[id^="openInAliButton_"]')).length) {
                            e.next = 4;
                            break;
                          }
                          throw (
                            ((0, f.default)(chrome.i18n.getMessage("e02")),
                            new Error(chrome.i18n.getMessage("e02")))
                          );
                        case 4:
                          return (
                            (r = n && n.attr("id")),
                            (a = r && r.replace("openInAliButton_", "")),
                            (e.next = 9),
                            (0, h.getAlilink)(
                              a,
                              (function () {
                                var e = (0, d.default)(
                                  u.default.mark(function e(t) {
                                    var n, r, a, s;
                                    return u.default.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((n = t.url),
                                                (window.getStorageAliLink = !1),
                                                (e.prev = 2),
                                                (r = new URL(n)),
                                                null ===
                                                  (a =
                                                    r.searchParams.get(
                                                      "dl_target_url"
                                                    ) ||
                                                    r.searchParams.get("ulp")))
                                              ) {
                                                e.next = 9;
                                                break;
                                              }
                                              i(a), (e.next = 13);
                                              break;
                                            case 9:
                                              return (
                                                (e.next = 11),
                                                (0, h.request_follow)(
                                                  n.replace(
                                                    "http://",
                                                    "https://"
                                                  )
                                                )
                                              );
                                            case 11:
                                              i((s = e.sent).url);
                                            case 13:
                                              (window.getStorageAliLink = !0),
                                                (e.next = 20);
                                              break;
                                            case 16:
                                              throw (
                                                ((e.prev = 16),
                                                (e.t0 = e.catch(2)),
                                                (0, f.default)(e.t0.message),
                                                e.t0)
                                              );
                                            case 20:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      this,
                                      [[2, 16]]
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (t.findAliLinkPageNew = (function () {
            var e = (0, d.default)(
              u.default.mark(function e(t) {
                var n, r, a;
                return u.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ((n = t.find(".alireview-icon")).length) {
                            e.next = 4;
                            break;
                          }
                          throw (
                            ((0, f.default)(chrome.i18n.getMessage("e02")),
                            new Error(chrome.i18n.getMessage("e02")))
                          );
                        case 4:
                          return (
                            (r = n.length > 0 && n.attr("data-idali")),
                            (a = parseInt(r)),
                            (e.next = 8),
                            (0, h.getAlilink)(
                              a,
                              (function () {
                                var e = (0, d.default)(
                                  u.default.mark(function e(t) {
                                    var n, r, a, s;
                                    return u.default.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((n = t.url),
                                                (window.getStorageAliLink = !1),
                                                (e.prev = 2),
                                                (r = new URL(n)),
                                                null ===
                                                  (a =
                                                    r.searchParams.get(
                                                      "dl_target_url"
                                                    ) ||
                                                    r.searchParams.get("ulp")))
                                              ) {
                                                e.next = 9;
                                                break;
                                              }
                                              i(a), (e.next = 13);
                                              break;
                                            case 9:
                                              return (
                                                (e.next = 11),
                                                (0, h.request_follow)(
                                                  n.replace(
                                                    "http://",
                                                    "https://"
                                                  )
                                                )
                                              );
                                            case 11:
                                              i((s = e.sent).url);
                                            case 13:
                                              (window.getStorageAliLink = !0),
                                                (e.next = 20);
                                              break;
                                            case 16:
                                              throw (
                                                ((e.prev = 16),
                                                (e.t0 = e.catch(2)),
                                                (0, f.default)(e.t0.message),
                                                e.t0)
                                              );
                                            case 20:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      this,
                                      [[2, 16]]
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (t.aliAllLink = (function () {
            var t = (0, d.default)(
              u.default.mark(function t() {
                var n,
                  r,
                  i,
                  l,
                  _,
                  f,
                  h = this;
                return u.default.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (n = a()),
                            (t.next = 4),
                            m.default.getSetting(n)
                          );
                        case 4:
                          return (
                            (r = t.sent),
                            (i = []),
                            (l = e(".main-content").find(
                              '[id^="openInAliButton_"]'
                            )),
                            (_ = (0, o.default)(l).map(function (e) {
                              return l[e];
                            })),
                            (t.next = 10),
                            s.default.all(
                              _.map(
                                (function () {
                                  var t = (0, d.default)(
                                    u.default.mark(function t(n) {
                                      var r, a, i, s;
                                      return u.default.wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                if (
                                                  ((r =
                                                    e(n) && e(n).attr("id")),
                                                  void 0 ===
                                                    (a =
                                                      r &&
                                                      r.replace(
                                                        "openInAliButton_",
                                                        ""
                                                      )))
                                                ) {
                                                  t.next = 11;
                                                  break;
                                                }
                                                if (
                                                  ((t.t0 = void 0 !== a), !t.t0)
                                                ) {
                                                  t.next = 8;
                                                  break;
                                                }
                                                return (t.next = 7), c(a);
                                              case 7:
                                                t.t0 = t.sent;
                                              case 8:
                                                return (
                                                  (i = t.t0),
                                                  (s = i.url),
                                                  t.abrupt("return", {
                                                    id: a,
                                                    url: s,
                                                  })
                                                );
                                              case 11:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        h
                                      );
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 10:
                          return (
                            (f = t.sent),
                            t.abrupt("return", { data: f, shop: n, setting: r })
                          );
                        case 14:
                          throw ((t.prev = 14), (t.t0 = t.catch(0)), t.t0);
                        case 17:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 14]]
                );
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (function () {
            var e = (0, d.default)(
              u.default.mark(function e(t) {
                var n, r;
                return u.default.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            (0, h.promiseGetAliLink)(t)
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            (r = n.url),
                            e.abrupt("return", { id: t, url: r })
                          );
                        case 8:
                          throw ((e.prev = 8), (e.t0 = e.catch(0)), e.t0);
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 8]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })());
      (t.prepareProductListPageNew = (function () {
        var t = (0, d.default)(
          u.default.mark(function t() {
            var n,
              r,
              a,
              i,
              s,
              o =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              d =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              l = arguments[2],
              c = arguments[3];
            return u.default.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((n = e('meta[name="csrf-token"]').attr("content")), !o)
                      ) {
                        t.next = 8;
                        break;
                      }
                      return (
                        (t.next = 4), m.default.getDataListProductIdOberlo(n, d)
                      );
                    case 4:
                      return (r = t.sent), t.abrupt("return", r);
                    case 8:
                      (a = []), (i = l);
                    case 11:
                      if (!(i <= c)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 14),
                        m.default.getDataListProductIdOberlo(n, i)
                      );
                    case 14:
                      (s = t.sent) && (a = a.concat(s));
                    case 16:
                      i++, (t.next = 11);
                      break;
                    case 19:
                      return t.abrupt("return", a);
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })()),
        (t.fetchDataBackground = (function () {
          var e = (0, d.default)(
            u.default.mark(function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return u.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          new s.default(function (e, r) {
                            chrome.runtime.sendMessage(
                              { contentScriptQuery: t, values: n },
                              function (t) {
                                e(t);
                              }
                            );
                          })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (t.checkImportReview = (function () {
          var e = (0, d.default)(
            u.default.mark(function e(t) {
              var n, r;
              return u.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = a()), (e.next = 3), m.default.checkImport(n, t)
                        );
                      case 3:
                        if (0 != (r = e.sent).status) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (0, f.default)(r.message, "danger"),
                          e.abrupt("return", !1)
                        );
                      case 7:
                        return e.abrupt("return", !0);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })());
      (t.convertStyleToStar = function (e) {
        var t = /\d+/g.exec(e);
        return null === t ? 0 : t[0] / 20;
      }),
        (t.formatSpecialCharacter = function (e) {
          return e.replace(/([!@#$%^&*()+=\[\]\\';,./{}|":<>?~_-])/g, "\\$1");
        }),
        (t.getShopifyDomain = a),
        (t.addAlireviewModalWrapper = function () {
          var e = document.createElement("div");
          e.classList.add("alireview-modal-wrapper"),
            document.body.appendChild(e);
        }),
        (t.findProductId = function (e) {
          try {
            var t = a(),
              n = e.find('a[href^="https://' + t + '"]');
            if (!n)
              throw (
                ((0, f.default)(chrome.i18n.getMessage("e02")),
                new Error(chrome.i18n.getMessage("e02")))
              );
            var r = n.attr("href");
            return new URL(r).pathname.replace("/admin/products/", "");
          } catch (e) {
            throw ((0, f.default)(e.message), e);
          }
        }),
        (t.findProductIdPageNew = function () {
          try {
            var t = e(".page-sidebar"),
              n = a(),
              r = t.find('a[href^="https://' + n + '"]');
            if (!r)
              throw (
                ((0, f.default)(chrome.i18n.getMessage("e02")),
                new Error(chrome.i18n.getMessage("e02")))
              );
            var i = r.attr("href");
            return new URL(i).pathname.replace("/admin/products/", "");
          } catch (e) {
            throw ((0, f.default)(e.message), e);
          }
        }),
        (t.addAlireviewWrapper = function () {
          document.body.classList.add(_.alireviewWrapper);
        }),
        (t.findProductTitle = function (e) {
          var t = e.find('[id^="openInAliButton_"]');
          if (!t.length)
            throw (
              ((0, f.default)(chrome.i18n.getMessage("e02")),
              new Error(chrome.i18n.getMessage("e02")))
            );
          return t.text().trim();
        }),
        (t.findProductImage = function (e) {
          var t = e.find(".product-page-image").find("img");
          return t ? t.attr("src") : "";
        }),
        (t.clearModalBackdrop = function () {
          e(".modal-backdrop").remove();
        }),
        (t.setStatusOverwriteReview = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          localStorage.setItem(_.isOverwriteReview, e);
        }),
        (t.getStatusOverwriteReview = function () {
          return localStorage.getItem(_.isOverwriteReview);
        }),
        (t.setAliLink = i),
        (t.getStorageAliLink = function () {
          return localStorage.getItem(_.aliLink);
        }),
        (t.hideContentModal = function () {
          var e = document.querySelector(".alireview-modal-wrapper"),
            t = e && e.querySelector(".modal"),
            n = t && t.querySelector(".modal-body");
          n && (n.innerHTML = "");
        }),
        (t.tryGetReviewAgain = function () {
          var t = e("#try-add-review"),
            n = e(".alireview-modal-wrapper .modal");
          t.on("click", function (e) {
            e.preventDefault(), n.modal("hide");
          });
        }),
        (t.shouldShowToastGetReview = function () {
          var t = e("#modalSettingReview");
          return t && t.is(":visible");
        }),
        (t.getPageNumber = function () {
          var e = document.location.href,
            t = void 0 === e ? "" : e,
            n = new URL(t).searchParams;
          return parseInt(n.get("page") || 1);
        }),
        (t.handleHideModalBulkImport = function () {
          e(".alireview-modal-bulk-wrapper").css({ display: "none" }),
            setTimeout(function () {
              e(".alireview-modal-bulk-wrapper").css({ display: "block" });
            }, 1e3);
        });
      var _ = n(56),
        f = r(n(37)),
        h = n(34),
        m = r(n(41));
    }.call(t, n(2)));
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = t && t.loc,
        i = void 0,
        s = void 0;
      n && (e += " - " + (i = n.start.line) + ":" + (s = n.start.column));
      for (
        var o = Error.prototype.constructor.call(this, e), u = 0;
        u < a.length;
        u++
      )
        this[a[u]] = o[a[u]];
      Error.captureStackTrace && Error.captureStackTrace(this, r);
      try {
        n &&
          ((this.lineNumber = i),
          Object.defineProperty
            ? Object.defineProperty(this, "column", {
                value: s,
                enumerable: !0,
              })
            : (this.column = s));
      } catch (e) {}
    }
    t.__esModule = !0;
    var a = [
      "description",
      "fileName",
      "lineNumber",
      "message",
      "name",
      "number",
      "stack",
    ];
    (r.prototype = new Error()), (t.default = r), (e.exports = t.default);
  },
  function (e, t, n) {
    (function (e) {
      function n(e) {
        return Object.prototype.toString.call(e);
      }
      (t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
      }),
        (t.isBoolean = function (e) {
          return "boolean" == typeof e;
        }),
        (t.isNull = function (e) {
          return null === e;
        }),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = function (e) {
          return "number" == typeof e;
        }),
        (t.isString = function (e) {
          return "string" == typeof e;
        }),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e;
        }),
        (t.isUndefined = function (e) {
          return void 0 === e;
        }),
        (t.isRegExp = function (e) {
          return "[object RegExp]" === n(e);
        }),
        (t.isObject = function (e) {
          return "object" == typeof e && null !== e;
        }),
        (t.isDate = function (e) {
          return "[object Date]" === n(e);
        }),
        (t.isError = function (e) {
          return "[object Error]" === n(e) || e instanceof Error;
        }),
        (t.isFunction = function (e) {
          return "function" == typeof e;
        }),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = e.isBuffer);
    }.call(t, n(19).Buffer));
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t, n) {
    var r = n(218),
      a = n(54);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, a);
      };
  },
  function (e, t, n) {
    var r = n(32);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, a) {
            return e.call(t, n, r, a);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    };
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.promiseGetAliLink =
          t.post =
          t.put =
          t.request_not_options_response_text =
          t.request_follow_response_text =
          t.request_response_text =
          t.request_follow =
            void 0);
      var a = r(n(43)),
        i = r(n(10)),
        s = r(n(11));
      (t.request_follow = (function () {
        var e = (0, s.default)(
          i.default.mark(function e(t) {
            return i.default.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (0, o.fetchDataBackground)("request_follow", { url: t })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })()),
        (t.request_response_text = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (0, o.fetchDataBackground)("request_response_text", {
                            url: t,
                            options: n,
                          })
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (t.request_follow_response_text = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (0, o.fetchDataBackground)(
                            "request_follow_response_text",
                            { url: t }
                          )
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (t.request_not_options_response_text = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (0, o.fetchDataBackground)(
                            "request_not_options_response_text",
                            { url: t }
                          )
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (t.put = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t, n) {
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (0, o.fetchDataBackground)("put", { url: t, data: n })
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })()),
        (t.post = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t, n) {
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          (0, o.fetchDataBackground)("post", {
                            url: t,
                            data: n,
                          })
                        );
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })()),
        (t.promiseGetAliLink = (function () {
          var t = (0, s.default)(
            i.default.mark(function t(n) {
              var r;
              return i.default.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r =
                            "https://app.oberlo.com/ajax/products/ali-url?id=" +
                            n),
                          t.abrupt(
                            "return",
                            new a.default(function (t) {
                              e.get(r, function (e) {
                                if (1 === e.status && e.success) {
                                  var n = e.url;
                                  try {
                                    var r = new URL(n),
                                      a =
                                        n.includes("dl_target_url") ||
                                        n.includes("ulp")
                                          ? r.searchParams.get(
                                              "dl_target_url"
                                            ) || r.searchParams.get("ulp")
                                          : n;
                                    return t(a);
                                  } catch (e) {
                                    return t("");
                                  }
                                }
                                return t("");
                              });
                            })
                          )
                        );
                      case 2:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })());
      t.getAlilink = function (t, n) {
        var r = "https://app.oberlo.com/ajax/products/ali-url?id=" + t;
        return e.get(r, function (e) {
          if (1 === e.status && e.success) return n(e);
          throw new Error("Could not get aliexpress link");
        });
      };
      var o = n(26);
      t.default = (function () {
        var e = (0, s.default)(
          i.default.mark(function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return i.default.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        (0, o.fetchDataBackground)("request", {
                          url: t,
                          options: n,
                        })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    }.call(t, n(2)));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      !t.version ||
      0 === t.version.indexOf("v0.") ||
      (0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8."))
        ? (e.exports = function (e, n, r, a) {
            if ("function" != typeof e)
              throw new TypeError('"callback" argument must be a function');
            var i,
              s,
              o = arguments.length;
            switch (o) {
              case 0:
              case 1:
                return t.nextTick(e);
              case 2:
                return t.nextTick(function () {
                  e.call(null, n);
                });
              case 3:
                return t.nextTick(function () {
                  e.call(null, n, r);
                });
              case 4:
                return t.nextTick(function () {
                  e.call(null, n, r, a);
                });
              default:
                for (i = new Array(o - 1), s = 0; s < i.length; )
                  i[s++] = arguments[s];
                return t.nextTick(function () {
                  e.apply(null, i);
                });
            }
          })
        : (e.exports = t.nextTick);
    }.call(t, n(16)));
  },
  function (e, t, n) {
    var r = n(15).f,
      a = n(18),
      i = n(5)("toStringTag");
    e.exports = function (e, t, n) {
      e &&
        !a((e = n ? e : e.prototype), i) &&
        r(e, i, { configurable: !0, value: t });
    };
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "warning",
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = a.timeOut,
            s = void 0 === i ? 7e3 : i,
            o = a.buttonClose,
            u = void 0 === o || o;
          (document.querySelector(".alireview-toast-wrapper").innerHTML = (0,
          r.default)({ message: t, type: n })),
            u || e("#alireview-toast .close").hide(),
            e("#alireview-toast").alert(),
            0 != s &&
              window.setTimeout(function () {
                e("#alireview-toast").alert("close");
              }, s);
        });
      var r = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n(264));
    }.call(t, n(2)));
  },
  function (e, t, n) {
    var r = n(46);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function (e, t) {
    e.exports = !0;
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        this.origin = "https://app.alireviews.io/api";
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(10)),
        s = r(n(11)),
        o = n(34),
        u = r(o);
      n(280);
      (a.prototype.checkHasReview = (function () {
        var e = (0, s.default)(
          i.default.mark(function e(t, n) {
            var r, a, s, o;
            return i.default.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = this.origin + "/shops/" + t + "/products/" + n),
                        (e.prev = 1),
                        (e.next = 4),
                        (0, u.default)(r)
                      );
                    case 4:
                      if (
                        ((a = e.sent),
                        (s = a.status),
                        (o = a.result),
                        200 !== s || !a.ok)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", o);
                    case 8:
                      e.next = 13;
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(1));
                    case 13:
                      return e.abrupt("return", null);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 10]]
            );
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })()),
        (a.prototype.getSettingBanner = (function () {
          var e = (0, s.default)(
            i.default.mark(function e() {
              var t, n, r, a;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.origin + "/banner"),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, u.default)(t)
                        );
                      case 4:
                        if (
                          ((n = e.sent),
                          (r = n.status),
                          (a = n.result),
                          200 !== r || !n.ok)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", a);
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1));
                      case 13:
                        return e.abrupt("return", null);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 10]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.postClickBanner = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n, r, a, s;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = this.origin + "/banner-count"),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, o.post)(n, t)
                        );
                      case 4:
                        if (
                          ((r = e.sent),
                          (a = r.status),
                          (s = r.result),
                          200 !== a || !r.ok)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", s);
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1));
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 10]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getSettingSortAliExpress = (function () {
          var e = (0, s.default)(
            i.default.mark(function e() {
              var t, n, r, a;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.origin + "/type-review"),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, u.default)(t)
                        );
                      case 4:
                        if (
                          ((n = e.sent),
                          (r = n.status),
                          (a = n.result),
                          200 !== r || !n.ok)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", a);
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1));
                      case 13:
                        return e.abrupt("return", null);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 10]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.checkHasReviews = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t, n) {
              var r, a, s, u;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r =
                            this.origin +
                            "/shops/" +
                            t +
                            "/products/bulk_exist_review"),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, o.post)(r, n)
                        );
                      case 4:
                        if (
                          ((a = e.sent),
                          (s = a.status),
                          (u = a.result),
                          200 !== s || !a.ok)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", u);
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1));
                      case 13:
                        return e.abrupt("return", null);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 10]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getSetting = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n, r, a, s, o;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = encodeURIComponent(t)),
                          (r = this.origin + "/settings/" + n),
                          (e.prev = 2),
                          (e.next = 5),
                          (0, u.default)(r)
                        );
                      case 5:
                        if (
                          ((a = e.sent),
                          (s = a.status),
                          (o = a.result),
                          200 !== s || !a.ok)
                        ) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", o);
                      case 9:
                        e.next = 14;
                        break;
                      case 11:
                        (e.prev = 11), (e.t0 = e.catch(2));
                      case 14:
                        return e.abrupt("return", null);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[2, 11]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getContentAliexpressPage = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n, r, a, s, o;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = encodeURIComponent(t)),
                          (r =
                            this.origin +
                            "/v7/extensions/ae/feedback-url/content?feedback_url=" +
                            n),
                          (e.prev = 2),
                          (e.next = 5),
                          (0, u.default)(r)
                        );
                      case 5:
                        if (
                          ((a = e.sent),
                          (s = a.status),
                          (o = a.result),
                          200 !== s || !a.ok)
                        ) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", o);
                      case 9:
                        e.next = 14;
                        break;
                      case 11:
                        (e.prev = 11), (e.t0 = e.catch(2));
                      case 14:
                        return e.abrupt("return", null);
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[2, 11]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getCountries = (function () {
          var e = (0, s.default)(
            i.default.mark(function e() {
              var t, n, r, a;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.origin + "/countries"),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, u.default)(t)
                        );
                      case 4:
                        if (
                          ((n = e.sent),
                          (r = n.status),
                          (a = n.result),
                          200 !== r || !n.ok)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", a);
                      case 8:
                        throw new Error("Fetch request error " + t);
                      case 11:
                        throw ((e.prev = 11), (e.t0 = e.catch(1)), e.t0);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 11]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.saveReview = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t, n, r) {
              var a,
                s,
                u,
                d,
                l,
                c,
                _ =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : [];
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = { reviews: r, settings: _ }),
                          (s = encodeURIComponent(t)),
                          (u = this.origin + "/shops/" + s + "/products/" + n),
                          (e.prev = 4),
                          (e.next = 7),
                          (0, o.put)(u, a)
                        );
                      case 7:
                        if (
                          ((d = e.sent),
                          (l = d.status),
                          (c = d.result),
                          200 !== l || !d.ok)
                        ) {
                          e.next = 14;
                          break;
                        }
                        return (
                          c.totalReviews > 0 &&
                            document.getElementById(n) &&
                            document
                              .getElementById(n)
                              .classList.add("alireview-icon-imported"),
                          e.abrupt("return", { status: "success", result: c })
                        );
                      case 14:
                        if (429 !== l) {
                          e.next = 16;
                          break;
                        }
                        return e.abrupt("return", { status: "429" });
                      case 16:
                        e.next = 21;
                        break;
                      case 18:
                        (e.prev = 18), (e.t0 = e.catch(4));
                      case 21:
                        return e.abrupt("return", { status: "failure" });
                      case 22:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[4, 18]]
              );
            })
          );
          return function (t, n, r) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.saveAliUrl = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n, r, a, s;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n =
                            this.origin +
                            "/update-link-aliexpress-from-extension"),
                          (e.prev = 2),
                          (e.next = 5),
                          (0, o.post)(n, t)
                        );
                      case 5:
                        if (
                          ((r = e.sent),
                          (a = r.status),
                          (s = r.result),
                          200 !== a || !r.ok)
                        ) {
                          e.next = 9;
                          break;
                        }
                        return e.abrupt("return", s);
                      case 9:
                        e.next = 14;
                        break;
                      case 11:
                        (e.prev = 11), (e.t0 = e.catch(2));
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[2, 11]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.deleteReviews = (function () {
          var e = (0, s.default)(
            i.default.mark(function e() {
              var t,
                n,
                r,
                a,
                s =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                u =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.origin + "/oberlo/deleteReviewsProduct"),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, o.post)(t, { shop: s, productId: u })
                        );
                      case 4:
                        if (
                          ((n = e.sent),
                          (r = n.status),
                          (a = n.result),
                          200 !== r || !n.ok)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", a);
                      case 8:
                        throw new Error("Fetch request error " + t);
                      case 11:
                        throw ((e.prev = 11), (e.t0 = e.catch(1)), e.t0);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 11]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.collectProductFromOberloPage = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          (0, o.request_response_text)(t, {})
                        );
                      case 3:
                        return (n = e.sent), e.abrupt("return", n);
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0));
                      case 10:
                        return e.abrupt("return", "");
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getAliLink = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n, r, s, o, u;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), a.prototype.ajaxCall(t);
                      case 2:
                        if (!(n = e.sent)) {
                          e.next = 10;
                          break;
                        }
                        if (!n.success) {
                          e.next = 10;
                          break;
                        }
                        return (
                          (r = new URL(n.url)),
                          (s = r.searchParams.get("dl_target_url") || null),
                          (o = r.searchParams.get("ulp") || null),
                          (u = s || o),
                          e.abrupt("return", u)
                        );
                      case 10:
                        return e.abrupt("return", "");
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getDataListProductIdOberlo = (function () {
          var e = (0, s.default)(
            i.default.mark(function e() {
              var t,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          a.prototype.getListProductIdOberlo(n, r)
                        );
                      case 3:
                        if (!(t = e.sent).status) {
                          e.next = 6;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          t.data.myProductsV2.myProducts
                        );
                      case 6:
                        e.next = 11;
                        break;
                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(0));
                      case 11:
                        return e.abrupt("return", null);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 8]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getListProductIdOberlo = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "";
          return e.ajax({
            type: "GET",
            url: "https://app.oberlo.com/ajax/my-products?page=" + n,
            headers: { "X-CSRF-TOKEN": t },
          });
        }),
        (a.prototype.ajaxCall = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n, r, a, s;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (n = new Headers()).append(
                            "x-requested-with",
                            "XMLHttpRequest"
                          ),
                          (e.next = 5),
                          (0, u.default)(t, {
                            method: "GET",
                            credentials: "include",
                            headers: n,
                          })
                        );
                      case 5:
                        if (
                          ((r = e.sent),
                          (a = r.status),
                          (s = r.result),
                          200 !== a || !r.ok)
                        ) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return", s);
                      case 10:
                        e.next = 16;
                        break;
                      case 13:
                        (e.prev = 13), (e.t0 = e.catch(0));
                      case 16:
                        return e.abrupt("return", null);
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 13]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getOberloProductPage = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t) {
              var n;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          (0, o.request_response_text)(t)
                        );
                      case 3:
                        return (n = e.sent), e.abrupt("return", n);
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0));
                      case 10:
                        return e.abrupt("return", "");
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[0, 7]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.getBannerAliexpress = (function () {
          var e = (0, s.default)(
            i.default.mark(function e() {
              var t, n, r, a;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = this.origin + "/banner-aliexpress"),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, u.default)(t)
                        );
                      case 4:
                        if (
                          ((n = e.sent),
                          (r = n.status),
                          (a = n.result),
                          200 !== r || !n.ok)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", a);
                      case 8:
                        throw new Error("Fetch request error " + t);
                      case 11:
                        throw ((e.prev = 11), (e.t0 = e.catch(1)), e.t0);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 11]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })()),
        (a.prototype.checkImport = (function () {
          var e = (0, s.default)(
            i.default.mark(function e(t, n) {
              var r, a, s, o;
              return i.default.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r =
                            this.origin +
                            "/checkImport/shops/" +
                            t +
                            "/products/" +
                            n),
                          (e.prev = 1),
                          (e.next = 4),
                          (0, u.default)(r)
                        );
                      case 4:
                        if (
                          ((a = e.sent),
                          (s = a.status),
                          (o = a.result),
                          200 !== s || !a.ok)
                        ) {
                          e.next = 8;
                          break;
                        }
                        return e.abrupt("return", o);
                      case 8:
                        e.next = 13;
                        break;
                      case 10:
                        (e.prev = 10), (e.t0 = e.catch(1));
                      case 13:
                        return e.abrupt("return", null);
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this,
                [[1, 10]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })()),
        (t.default = new a());
    }.call(t, n(2)));
  },
  ,
  function (e, t, n) {
    e.exports = { default: n(242), __esModule: !0 };
  },
  function (e, t, n) {
    "use strict";
    var r = n(243)(!0);
    n(64)(
      String,
      "String",
      function (e) {
        (this._t = String(e)), (this._i = 0);
      },
      function () {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function (e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function (e, t) {
    e.exports = function (e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (e, t, n) {
    var r = n(53)("keys"),
      a = n(39);
    e.exports = function (e) {
      return r[e] || (r[e] = a(e));
    };
  },
  function (e, t, n) {
    var r = n(21),
      a = n(4).document,
      i = r(a) && r(a.createElement);
    e.exports = function (e) {
      return i ? a.createElement(e) : {};
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(32);
    e.exports.f = function (e) {
      return new (function (e) {
        var t, n;
        (this.promise = new e(function (e, r) {
          if (void 0 !== t || void 0 !== n)
            throw TypeError("Bad Promise constructor");
          (t = e), (n = r);
        })),
          (this.resolve = r(t)),
          (this.reject = r(n));
      })(e);
    };
  },
  function (e, t, n) {
    function r(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function a(e, t, n) {
      return s(e, t, n);
    }
    var i = n(19),
      s = i.Buffer;
    s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow
      ? (e.exports = i)
      : (r(i, t), (t.Buffer = a)),
      r(s, a),
      (a.from = function (e, t, n) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return s(e, t, n);
      }),
      (a.alloc = function (e, t, n) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var r = s(e);
        return (
          void 0 !== t
            ? "string" == typeof n
              ? r.fill(t, n)
              : r.fill(t)
            : r.fill(0),
          r
        );
      }),
      (a.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return s(e);
      }),
      (a.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e);
      });
  },
  ,
  function (e, t, n) {
    var r = n(4),
      a = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    e.exports = function (e) {
      return a[e] || (a[e] = {});
    };
  },
  function (e, t) {
    e.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  function (e, t, n) {
    n(247);
    for (
      var r = n(4),
        a = n(14),
        i = n(25),
        s = n(5)("toStringTag"),
        o =
          "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
            ","
          ),
        u = 0;
      u < o.length;
      u++
    ) {
      var d = o[u],
        l = r[d],
        c = l && l.prototype;
      c && !c[s] && a(c, s, d), (i[d] = i.Array);
    }
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    (t.alireviewWrapper = "alireview-wrapper"),
      (t.alireviewIcon = "alireview-icon"),
      (t.alireviewProductPage = "alireview-products-page"),
      (t.idModalSettingReview = "#modalSettingReview"),
      (t.idModalOverwriteReview = "#modalOverwriteReview"),
      (t.gotoModalSetting = "#input-link-aliexpress"),
      (t.isOverwriteReview = "IS_OVERWRITE_REVIEW"),
      (t.aliLink = "ALIEXPRESS_LINK"),
      (t.limitNumberImport = {
        free: 10,
        startup: 10,
        starter: 30,
        essential: 500,
        premium: 1e3,
        enterprise: 1500,
      }),
      (t.nextPlan = {
        free: "essential",
        startup: "essential",
        starter: "essential",
        essential: "premium",
        premium: "enterprise",
      });
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    var r = n(47),
      a = Math.min;
    e.exports = function (e) {
      return e > 0 ? a(r(e), 9007199254740991) : 0;
    };
  },
  function (e, t, n) {
    var r = n(21);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, a;
      if (t && "function" == typeof (n = e.toString) && !r((a = n.call(e))))
        return a;
      if ("function" == typeof (n = e.valueOf) && !r((a = n.call(e)))) return a;
      if (!t && "function" == typeof (n = e.toString) && !r((a = n.call(e))))
        return a;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t, n) {
    var r = n(66),
      a = n(5)("iterator"),
      i = n(25);
    e.exports = n(3).getIteratorMethod = function (e) {
      if (void 0 != e) return e[a] || e["@@iterator"] || i[r(e)];
    };
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  ,
  function (e, t, n) {
    var r = n(29);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(40),
      a = n(12),
      i = n(221),
      s = n(14),
      o = n(18),
      u = n(25),
      d = n(244),
      l = n(36),
      c = n(246),
      _ = n(5)("iterator"),
      f = !([].keys && "next" in [].keys()),
      h = function () {
        return this;
      };
    e.exports = function (e, t, n, m, p, y, M) {
      d(n, t, m);
      var g,
        v,
        L,
        Y = function (e) {
          if (!f && e in D) return D[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        w = t + " Iterator",
        k = "values" == p,
        b = !1,
        D = e.prototype,
        T = D[_] || D["@@iterator"] || (p && D[p]),
        x = T || Y(p),
        S = p ? (k ? Y("entries") : x) : void 0,
        j = "Array" == t ? D.entries || T : T;
      if (
        (j &&
          (L = c(j.call(new e()))) !== Object.prototype &&
          L.next &&
          (l(L, w, !0), r || o(L, _) || s(L, _, h)),
        k &&
          T &&
          "values" !== T.name &&
          ((b = !0),
          (x = function () {
            return T.call(this);
          })),
        (r && !M) || (!f && !b && D[_]) || s(D, _, x),
        (u[t] = x),
        (u[w] = h),
        p)
      )
        if (
          ((g = {
            values: k ? x : Y("values"),
            keys: y ? x : Y("keys"),
            entries: S,
          }),
          M)
        )
          for (v in g) v in D || i(D, v, g[v]);
        else a(a.P + a.F * (f || b), t, g);
      return g;
    };
  },
  function (e, t, n) {
    var r = n(4).document;
    e.exports = r && r.documentElement;
  },
  function (e, t, n) {
    var r = n(29),
      a = n(5)("toStringTag"),
      i =
        "Arguments" ==
        r(
          (function () {
            return arguments;
          })()
        );
    e.exports = function (e) {
      var t, n, s;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (n = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), a))
        ? n
        : i
        ? r(t)
        : "Object" == (s = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : s;
    };
  },
  function (e, t, n) {
    var r = n(9),
      a = n(32),
      i = n(5)("species");
    e.exports = function (e, t) {
      var n,
        s = r(e).constructor;
      return void 0 === s || void 0 == (n = r(s)[i]) ? t : a(n);
    };
  },
  function (e, t, n) {
    var r,
      a,
      i,
      s = n(31),
      o = n(253),
      u = n(65),
      d = n(49),
      l = n(4),
      c = l.process,
      _ = l.setImmediate,
      f = l.clearImmediate,
      h = l.MessageChannel,
      m = l.Dispatch,
      p = 0,
      y = {},
      M = function () {
        var e = +this;
        if (y.hasOwnProperty(e)) {
          var t = y[e];
          delete y[e], t();
        }
      },
      g = function (e) {
        M.call(e.data);
      };
    (_ && f) ||
      ((_ = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (y[++p] = function () {
            o("function" == typeof e ? e : Function(e), t);
          }),
          r(p),
          p
        );
      }),
      (f = function (e) {
        delete y[e];
      }),
      "process" == n(29)(c)
        ? (r = function (e) {
            c.nextTick(s(M, e, 1));
          })
        : m && m.now
        ? (r = function (e) {
            m.now(s(M, e, 1));
          })
        : h
        ? ((i = (a = new h()).port2),
          (a.port1.onmessage = g),
          (r = s(i.postMessage, i, 1)))
        : l.addEventListener &&
          "function" == typeof postMessage &&
          !l.importScripts
        ? ((r = function (e) {
            l.postMessage(e + "", "*");
          }),
          l.addEventListener("message", g, !1))
        : (r =
            "onreadystatechange" in d("script")
              ? function (e) {
                  u.appendChild(d("script")).onreadystatechange = function () {
                    u.removeChild(this), M.call(e);
                  };
                }
              : function (e) {
                  setTimeout(s(M, e, 1), 0);
                })),
      (e.exports = { set: _, clear: f });
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function (e, t, n) {
    var r = n(9),
      a = n(21),
      i = n(50);
    e.exports = function (e, t) {
      if ((r(e), a(t) && t.constructor === e)) return t;
      var n = i.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e, t, n) {
      (this.helpers = e || {}),
        (this.partials = t || {}),
        (this.decorators = n || {}),
        o.registerDefaultHelpers(this),
        u.registerDefaultDecorators(this);
    }
    (t.__esModule = !0), (t.HandlebarsEnvironment = a);
    var i = n(8),
      s = r(n(27)),
      o = n(266),
      u = n(274),
      d = r(n(276));
    t.VERSION = "4.0.11";
    t.COMPILER_REVISION = 7;
    t.REVISION_CHANGES = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: "== 1.x.x",
      5: "== 2.0.0-alpha.x",
      6: ">= 2.0.0-beta.1",
      7: ">= 4.0.0",
    };
    a.prototype = {
      constructor: a,
      logger: d.default,
      log: d.default.log,
      registerHelper: function (e, t) {
        if ("[object Object]" === i.toString.call(e)) {
          if (t) throw new s.default("Arg not supported with multiple helpers");
          i.extend(this.helpers, e);
        } else this.helpers[e] = t;
      },
      unregisterHelper: function (e) {
        delete this.helpers[e];
      },
      registerPartial: function (e, t) {
        if ("[object Object]" === i.toString.call(e))
          i.extend(this.partials, e);
        else {
          if (void 0 === t)
            throw new s.default(
              'Attempting to register a partial called "' + e + '" as undefined'
            );
          this.partials[e] = t;
        }
      },
      unregisterPartial: function (e) {
        delete this.partials[e];
      },
      registerDecorator: function (e, t) {
        if ("[object Object]" === i.toString.call(e)) {
          if (t)
            throw new s.default("Arg not supported with multiple decorators");
          i.extend(this.decorators, e);
        } else this.decorators[e] = t;
      },
      unregisterDecorator: function (e) {
        delete this.decorators[e];
      },
    };
    var l = d.default.log;
    (t.log = l), (t.createFrame = i.createFrame), (t.logger = d.default);
  },
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  },
  function (e, t, n) {
    (function (e) {
      function n() {
        if (void 0 !== i) return i;
        if (e.XMLHttpRequest) {
          i = new e.XMLHttpRequest();
          try {
            i.open("GET", e.XDomainRequest ? "/" : "https://example.com");
          } catch (e) {
            i = null;
          }
        } else i = null;
        return i;
      }
      function r(e) {
        var t = n();
        if (!t) return !1;
        try {
          return (t.responseType = e), t.responseType === e;
        } catch (e) {}
        return !1;
      }
      function a(e) {
        return "function" == typeof e;
      }
      (t.fetch = a(e.fetch) && a(e.ReadableStream)), (t.blobConstructor = !1);
      try {
        new Blob([new ArrayBuffer(1)]), (t.blobConstructor = !0);
      } catch (e) {}
      var i,
        s = void 0 !== e.ArrayBuffer,
        o = s && a(e.ArrayBuffer.prototype.slice);
      (t.arraybuffer = t.fetch || (s && r("arraybuffer"))),
        (t.msstream = !t.fetch && o && r("ms-stream")),
        (t.mozchunkedarraybuffer =
          !t.fetch && s && r("moz-chunked-arraybuffer")),
        (t.overrideMimeType = t.fetch || (!!n() && a(n().overrideMimeType))),
        (t.vbArray = a(e.VBArray)),
        (i = null);
    }.call(t, n(6)));
  },
  function (e, t, n) {
    ((t = e.exports = n(75)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(79)),
      (t.Duplex = n(20)),
      (t.Transform = n(81)),
      (t.PassThrough = n(290));
  },
  function (e, t, n) {
    "use strict";
    (function (t, r) {
      function a(e, t) {
        (y = y || n(20)),
          (e = e || {}),
          (this.objectMode = !!e.objectMode),
          t instanceof y &&
            (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var r = e.highWaterMark,
          a = this.objectMode ? 16 : 16384;
        (this.highWaterMark = r || 0 === r ? r : a),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new T()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (D || (D = n(80).StringDecoder),
            (this.decoder = new D(e.encoding)),
            (this.encoding = e.encoding));
      }
      function i(e) {
        if (((y = y || n(20)), !(this instanceof i))) return new i(e);
        (this._readableState = new a(e, this)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          v.call(this);
      }
      function s(e, t, n, r, a) {
        var i = e._readableState;
        if (null === t)
          (i.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0), d(e);
            })(e, i);
        else {
          var s;
          a ||
            (s = (function (e, t) {
              var n;
              (function (e) {
                return L.isBuffer(e) || e instanceof Y;
              })(t) ||
                "string" == typeof t ||
                void 0 === t ||
                e.objectMode ||
                (n = new TypeError("Invalid non-string/buffer chunk"));
              return n;
            })(i, t)),
            s
              ? e.emit("error", s)
              : i.objectMode || (t && t.length > 0)
              ? ("string" == typeof t ||
                  i.objectMode ||
                  Object.getPrototypeOf(t) === L.prototype ||
                  (t = (function (e) {
                    return L.from(e);
                  })(t)),
                r
                  ? i.endEmitted
                    ? e.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : o(e, i, t, !0)
                  : i.ended
                  ? e.emit("error", new Error("stream.push() after EOF"))
                  : ((i.reading = !1),
                    i.decoder && !n
                      ? ((t = i.decoder.write(t)),
                        i.objectMode || 0 !== t.length
                          ? o(e, i, t, !1)
                          : c(e, i))
                      : o(e, i, t, !1)))
              : r || (i.reading = !1);
        }
        return (function (e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          );
        })(i);
      }
      function o(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit("data", n), e.read(0))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && d(e)),
          c(e, t);
      }
      function u(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= j
                    ? (e = j)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function d(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (b("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            t.sync ? p(l, e) : l(e));
      }
      function l(e) {
        b("emit readable"), e.emit("readable"), _(e);
      }
      function c(e, t) {
        t.readingMore ||
          ((t.readingMore = !0),
          p(
            function (e, t) {
              var n = t.length;
              for (
                ;
                !t.reading &&
                !t.flowing &&
                !t.ended &&
                t.length < t.highWaterMark &&
                (b("maybeReadMore read 0"), e.read(0), n !== t.length);

              )
                n = t.length;
              t.readingMore = !1;
            },
            e,
            t
          ));
      }
      function _(e) {
        var t = e._readableState;
        for (b("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function f(e, t) {
        if (0 === t.length) return null;
        var n;
        return (
          t.objectMode
            ? (n = t.buffer.shift())
            : !e || e >= t.length
            ? ((n = t.decoder
                ? t.buffer.join("")
                : 1 === t.buffer.length
                ? t.buffer.head.data
                : t.buffer.concat(t.length)),
              t.buffer.clear())
            : (n = (function (e, t, n) {
                var r;
                e < t.head.data.length
                  ? ((r = t.head.data.slice(0, e)),
                    (t.head.data = t.head.data.slice(e)))
                  : (r =
                      e === t.head.data.length
                        ? t.shift()
                        : n
                        ? (function (e, t) {
                            var n = t.head,
                              r = 1,
                              a = n.data;
                            e -= a.length;
                            for (; (n = n.next); ) {
                              var i = n.data,
                                s = e > i.length ? i.length : e;
                              if (
                                (s === i.length
                                  ? (a += i)
                                  : (a += i.slice(0, e)),
                                0 === (e -= s))
                              ) {
                                s === i.length
                                  ? (++r,
                                    n.next
                                      ? (t.head = n.next)
                                      : (t.head = t.tail = null))
                                  : ((t.head = n), (n.data = i.slice(s)));
                                break;
                              }
                              ++r;
                            }
                            return (t.length -= r), a;
                          })(e, t)
                        : (function (e, t) {
                            var n = L.allocUnsafe(e),
                              r = t.head,
                              a = 1;
                            r.data.copy(n), (e -= r.data.length);
                            for (; (r = r.next); ) {
                              var i = r.data,
                                s = e > i.length ? i.length : e;
                              if (
                                (i.copy(n, n.length - e, 0, s), 0 === (e -= s))
                              ) {
                                s === i.length
                                  ? (++a,
                                    r.next
                                      ? (t.head = r.next)
                                      : (t.head = t.tail = null))
                                  : ((t.head = r), (r.data = i.slice(s)));
                                break;
                              }
                              ++a;
                            }
                            return (t.length -= a), n;
                          })(e, t));
                return r;
              })(e, t.buffer, t.decoder)),
          n
        );
      }
      function h(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted ||
          ((t.ended = !0),
          p(
            function (e, t) {
              e.endEmitted ||
                0 !== e.length ||
                ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
            },
            t,
            e
          ));
      }
      function m(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      }
      var p = n(35);
      e.exports = i;
      var y,
        M = n(72);
      i.ReadableState = a;
      n(76).EventEmitter;
      var g = function (e, t) {
          return e.listeners(t).length;
        },
        v = n(77),
        L = n(51).Buffer,
        Y = t.Uint8Array || function () {},
        w = n(28);
      w.inherits = n(13);
      var k = n(285),
        b = void 0;
      b = k && k.debuglog ? k.debuglog("stream") : function () {};
      var D,
        T = n(286),
        x = n(78);
      w.inherits(i, v);
      var S = ["error", "close", "destroy", "pause", "resume"];
      Object.defineProperty(i.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (i.prototype.destroy = x.destroy),
        (i.prototype._undestroy = x.undestroy),
        (i.prototype._destroy = function (e, t) {
          this.push(null), t(e);
        }),
        (i.prototype.push = function (e, t) {
          var n,
            r = this._readableState;
          return (
            r.objectMode
              ? (n = !0)
              : "string" == typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding &&
                  ((e = L.from(e, t)), (t = "")),
                (n = !0)),
            s(this, e, t, !1, n)
          );
        }),
        (i.prototype.unshift = function (e) {
          return s(this, e, null, !0, !1);
        }),
        (i.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (i.prototype.setEncoding = function (e) {
          return (
            D || (D = n(80).StringDecoder),
            (this._readableState.decoder = new D(e)),
            (this._readableState.encoding = e),
            this
          );
        });
      var j = 8388608;
      (i.prototype.read = function (e) {
        b("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            b("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? h(this) : d(this),
            null
          );
        if (0 === (e = u(e, t)) && t.ended)
          return 0 === t.length && h(this), null;
        var r = t.needReadable;
        b("need readable", r),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            b("length less than watermark", (r = !0)),
          t.ended || t.reading
            ? b("reading or ended", (r = !1))
            : r &&
              (b("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = u(n, t)));
        var a;
        return (
          null === (a = e > 0 ? f(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && h(this)),
          null !== a && this.emit("data", a),
          a
        );
      }),
        (i.prototype._read = function (e) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (i.prototype.pipe = function (e, t) {
          function n(t, r) {
            b("onunpipe"),
              t === l &&
                r &&
                !1 === r.hasUnpiped &&
                ((r.hasUnpiped = !0),
                b("cleanup"),
                e.removeListener("close", o),
                e.removeListener("finish", u),
                e.removeListener("drain", h),
                e.removeListener("error", s),
                e.removeListener("unpipe", n),
                l.removeListener("end", a),
                l.removeListener("end", d),
                l.removeListener("data", i),
                (y = !0),
                !c.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  h());
          }
          function a() {
            b("onend"), e.end();
          }
          function i(t) {
            b("ondata"), (v = !1);
            !1 !== e.write(t) ||
              v ||
              (((1 === c.pipesCount && c.pipes === e) ||
                (c.pipesCount > 1 && -1 !== m(c.pipes, e))) &&
                !y &&
                (b("false write response, pause", l._readableState.awaitDrain),
                l._readableState.awaitDrain++,
                (v = !0)),
              l.pause());
          }
          function s(t) {
            b("onerror", t),
              d(),
              e.removeListener("error", s),
              0 === g(e, "error") && e.emit("error", t);
          }
          function o() {
            e.removeListener("finish", u), d();
          }
          function u() {
            b("onfinish"), e.removeListener("close", o), d();
          }
          function d() {
            b("unpipe"), l.unpipe(e);
          }
          var l = this,
            c = this._readableState;
          switch (c.pipesCount) {
            case 0:
              c.pipes = e;
              break;
            case 1:
              c.pipes = [c.pipes, e];
              break;
            default:
              c.pipes.push(e);
          }
          (c.pipesCount += 1), b("pipe count=%d opts=%j", c.pipesCount, t);
          var f =
            (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? a : d;
          c.endEmitted ? p(f) : l.once("end", f), e.on("unpipe", n);
          var h = (function (e) {
            return function () {
              var t = e._readableState;
              b("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && g(e, "data") && ((t.flowing = !0), _(e));
            };
          })(l);
          e.on("drain", h);
          var y = !1,
            v = !1;
          return (
            l.on("data", i),
            (function (e, t, n) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? M(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", s),
            e.once("close", o),
            e.once("finish", u),
            e.emit("pipe", l),
            c.flowing || (b("pipe resume"), l.resume()),
            e
          );
        }),
        (i.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return e && e !== t.pipes
              ? this
              : (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n),
                this);
          if (!e) {
            var r = t.pipes,
              a = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var i = 0; i < a; i++) r[i].emit("unpipe", this, n);
            return this;
          }
          var s = m(t.pipes, e);
          return -1 === s
            ? this
            : (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n),
              this);
        }),
        (i.prototype.on = function (e, t) {
          var n = v.prototype.on.call(this, e, t);
          if ("data" === e) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === e) {
            var r = this._readableState;
            r.endEmitted ||
              r.readableListening ||
              ((r.readableListening = r.needReadable = !0),
              (r.emittedReadable = !1),
              r.reading
                ? r.length && d(this)
                : p(function (e) {
                    b("readable nexttick read 0"), e.read(0);
                  }, this));
          }
          return n;
        }),
        (i.prototype.addListener = i.prototype.on),
        (i.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (b("resume"),
              (e.flowing = !0),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0),
                  p(
                    function (e, t) {
                      t.reading || (b("resume read 0"), e.read(0)),
                        (t.resumeScheduled = !1),
                        (t.awaitDrain = 0),
                        e.emit("resume"),
                        _(e),
                        t.flowing && !t.reading && e.read(0);
                    },
                    e,
                    t
                  ));
              })(this, e)),
            this
          );
        }),
        (i.prototype.pause = function () {
          return (
            b("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (b("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (i.prototype.wrap = function (e) {
          var t = this._readableState,
            n = !1,
            r = this;
          e.on("end", function () {
            if ((b("wrapped end"), t.decoder && !t.ended)) {
              var e = t.decoder.end();
              e && e.length && r.push(e);
            }
            r.push(null);
          }),
            e.on("data", function (a) {
              if (
                (b("wrapped data"),
                t.decoder && (a = t.decoder.write(a)),
                (!t.objectMode || (null !== a && void 0 !== a)) &&
                  (t.objectMode || (a && a.length)))
              ) {
                r.push(a) || ((n = !0), e.pause());
              }
            });
          for (var a in e)
            void 0 === this[a] &&
              "function" == typeof e[a] &&
              (this[a] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(a));
          for (var i = 0; i < S.length; i++) e.on(S[i], r.emit.bind(r, S[i]));
          return (
            (r._read = function (t) {
              b("wrapped _read", t), n && ((n = !1), e.resume());
            }),
            r
          );
        }),
        (i._fromList = f);
    }.call(t, n(6), n(16)));
  },
  function (e, t) {
    function n() {
      (this._events = this._events || {}),
        (this._maxListeners = this._maxListeners || void 0);
    }
    function r(e) {
      return "function" == typeof e;
    }
    function a(e) {
      return "object" == typeof e && null !== e;
    }
    function i(e) {
      return void 0 === e;
    }
    (e.exports = n),
      (n.EventEmitter = n),
      (n.prototype._events = void 0),
      (n.prototype._maxListeners = void 0),
      (n.defaultMaxListeners = 10),
      (n.prototype.setMaxListeners = function (e) {
        if (
          !(function (e) {
            return "number" == typeof e;
          })(e) ||
          e < 0 ||
          isNaN(e)
        )
          throw TypeError("n must be a positive number");
        return (this._maxListeners = e), this;
      }),
      (n.prototype.emit = function (e) {
        var t, n, s, o, u, d;
        if (
          (this._events || (this._events = {}),
          "error" === e &&
            (!this._events.error ||
              (a(this._events.error) && !this._events.error.length)))
        ) {
          if ((t = arguments[1]) instanceof Error) throw t;
          var l = new Error('Uncaught, unspecified "error" event. (' + t + ")");
          throw ((l.context = t), l);
        }
        if (((n = this._events[e]), i(n))) return !1;
        if (r(n))
          switch (arguments.length) {
            case 1:
              n.call(this);
              break;
            case 2:
              n.call(this, arguments[1]);
              break;
            case 3:
              n.call(this, arguments[1], arguments[2]);
              break;
            default:
              (o = Array.prototype.slice.call(arguments, 1)), n.apply(this, o);
          }
        else if (a(n))
          for (
            o = Array.prototype.slice.call(arguments, 1),
              s = (d = n.slice()).length,
              u = 0;
            u < s;
            u++
          )
            d[u].apply(this, o);
        return !0;
      }),
      (n.prototype.addListener = function (e, t) {
        var s;
        if (!r(t)) throw TypeError("listener must be a function");
        return (
          this._events || (this._events = {}),
          this._events.newListener &&
            this.emit("newListener", e, r(t.listener) ? t.listener : t),
          this._events[e]
            ? a(this._events[e])
              ? this._events[e].push(t)
              : (this._events[e] = [this._events[e], t])
            : (this._events[e] = t),
          a(this._events[e]) &&
            !this._events[e].warned &&
            (s = i(this._maxListeners)
              ? n.defaultMaxListeners
              : this._maxListeners) &&
            s > 0 &&
            this._events[e].length > s &&
            ((this._events[e].warned = !0), console.trace),
          this
        );
      }),
      (n.prototype.on = n.prototype.addListener),
      (n.prototype.once = function (e, t) {
        function n() {
          this.removeListener(e, n), a || ((a = !0), t.apply(this, arguments));
        }
        if (!r(t)) throw TypeError("listener must be a function");
        var a = !1;
        return (n.listener = t), this.on(e, n), this;
      }),
      (n.prototype.removeListener = function (e, t) {
        var n, i, s, o;
        if (!r(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (
          ((n = this._events[e]),
          (s = n.length),
          (i = -1),
          n === t || (r(n.listener) && n.listener === t))
        )
          delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
        else if (a(n)) {
          for (o = s; o-- > 0; )
            if (n[o] === t || (n[o].listener && n[o].listener === t)) {
              i = o;
              break;
            }
          if (i < 0) return this;
          1 === n.length
            ? ((n.length = 0), delete this._events[e])
            : n.splice(i, 1),
            this._events.removeListener && this.emit("removeListener", e, t);
        }
        return this;
      }),
      (n.prototype.removeAllListeners = function (e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener)
          return (
            0 === arguments.length
              ? (this._events = {})
              : this._events[e] && delete this._events[e],
            this
          );
        if (0 === arguments.length) {
          for (t in this._events)
            "removeListener" !== t && this.removeAllListeners(t);
          return (
            this.removeAllListeners("removeListener"), (this._events = {}), this
          );
        }
        if (((n = this._events[e]), r(n))) this.removeListener(e, n);
        else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this;
      }),
      (n.prototype.listeners = function (e) {
        return this._events && this._events[e]
          ? r(this._events[e])
            ? [this._events[e]]
            : this._events[e].slice()
          : [];
      }),
      (n.prototype.listenerCount = function (e) {
        if (this._events) {
          var t = this._events[e];
          if (r(t)) return 1;
          if (t) return t.length;
        }
        return 0;
      }),
      (n.listenerCount = function (e, t) {
        return e.listenerCount(t);
      });
  },
  function (e, t, n) {
    e.exports = n(76).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      e.emit("error", t);
    }
    var a = n(35);
    e.exports = {
      destroy: function (e, t) {
        var n = this,
          i = this._readableState && this._readableState.destroyed,
          s = this._writableState && this._writableState.destroyed;
        i || s
          ? t
            ? t(e)
            : !e ||
              (this._writableState && this._writableState.errorEmitted) ||
              a(r, this, e)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? (a(r, n, e),
                  n._writableState && (n._writableState.errorEmitted = !0))
                : t && t(e);
            }));
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, r, a) {
      function i(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry;
              e.entry = null;
              for (; r; ) {
                var a = r.callback;
                t.pendingcb--, a(n), (r = r.next);
              }
              t.corkedRequestsFree
                ? (t.corkedRequestsFree.next = e)
                : (t.corkedRequestsFree = e);
            })(t, e);
          });
      }
      function s(e, t) {
        (h = h || n(20)),
          (e = e || {}),
          (this.objectMode = !!e.objectMode),
          t instanceof h &&
            (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var r = e.highWaterMark,
          a = this.objectMode ? 16 : 16384;
        (this.highWaterMark = r || 0 === r ? r : a),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === e.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                r = n.sync,
                a = n.writecb;
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, r, a) {
                  --t.pendingcb,
                    n
                      ? (f(a, r),
                        f(_, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", r))
                      : (a(r),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", r),
                        _(e, t));
                })(e, n, r, t, a);
              else {
                var i = c(n);
                i ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  l(e, n),
                  r ? m(d, e, n, i, a) : d(e, n, i, a);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new i(this));
      }
      function o(e) {
        if (((h = h || n(20)), !(Y.call(o, this) || this instanceof h)))
          return new o(e);
        (this._writableState = new s(e, this)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          M.call(this);
      }
      function u(e, t, n, r, a, i, s) {
        (t.writelen = r),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          n ? e._writev(a, t.onwrite) : e._write(a, i, t.onwrite),
          (t.sync = !1);
      }
      function d(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          r(),
          _(e, t);
      }
      function l(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var r = t.bufferedRequestCount,
            a = new Array(r),
            s = t.corkedRequestsFree;
          s.entry = n;
          for (var o = 0, d = !0; n; )
            (a[o] = n), n.isBuf || (d = !1), (n = n.next), (o += 1);
          (a.allBuffers = d),
            u(e, t, !0, t.length, a, "", s.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            s.next
              ? ((t.corkedRequestsFree = s.next), (s.next = null))
              : (t.corkedRequestsFree = new i(t));
        } else {
          for (; n; ) {
            var l = n.chunk,
              c = n.encoding,
              _ = n.callback;
            if (
              (u(e, t, !1, t.objectMode ? 1 : l.length, l, c, _),
              (n = n.next),
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequestCount = 0),
          (t.bufferedRequest = n),
          (t.bufferProcessing = !1);
      }
      function c(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function _(e, t) {
        var n = c(t);
        return (
          n &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" == typeof e._final
                  ? (t.pendingcb++,
                    (t.finalCalled = !0),
                    f(
                      function (e, t) {
                        e._final(function (n) {
                          t.pendingcb--,
                            n && e.emit("error", n),
                            (t.prefinished = !0),
                            e.emit("prefinish"),
                            _(e, t);
                        });
                      },
                      e,
                      t
                    ))
                  : ((t.prefinished = !0), e.emit("prefinish")));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          n
        );
      }
      var f = n(35);
      e.exports = o;
      var h,
        m =
          !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
            ? r
            : f;
      o.WritableState = s;
      var p = n(28);
      p.inherits = n(13);
      var y = { deprecate: n(289) },
        M = n(77),
        g = n(51).Buffer,
        v = a.Uint8Array || function () {},
        L = n(78);
      p.inherits(o, M),
        (s.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(s.prototype, "buffer", {
              get: y.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })();
      var Y;
      "function" == typeof Symbol &&
      Symbol.hasInstance &&
      "function" == typeof Function.prototype[Symbol.hasInstance]
        ? ((Y = Function.prototype[Symbol.hasInstance]),
          Object.defineProperty(o, Symbol.hasInstance, {
            value: function (e) {
              return !!Y.call(this, e) || (e && e._writableState instanceof s);
            },
          }))
        : (Y = function (e) {
            return e instanceof this;
          }),
        (o.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (o.prototype.write = function (e, t, n) {
          var r = this._writableState,
            a = !1,
            i =
              (function (e) {
                return g.isBuffer(e) || e instanceof v;
              })(e) && !r.objectMode;
          return (
            i &&
              !g.isBuffer(e) &&
              (e = (function (e) {
                return g.from(e);
              })(e)),
            "function" == typeof t && ((n = t), (t = null)),
            i ? (t = "buffer") : t || (t = r.defaultEncoding),
            "function" != typeof n && (n = function () {}),
            r.ended
              ? (function (e, t) {
                  var n = new Error("write after end");
                  e.emit("error", n), f(t, n);
                })(this, n)
              : (i ||
                  (function (e, t, n, r) {
                    var a = !0,
                      i = !1;
                    return (
                      null === n
                        ? (i = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof n ||
                          void 0 === n ||
                          t.objectMode ||
                          (i = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      i && (e.emit("error", i), f(r, i), (a = !1)),
                      a
                    );
                  })(this, r, e, n)) &&
                (r.pendingcb++,
                (a = (function (e, t, n, r, a, i) {
                  if (!n) {
                    var s = (function (e, t, n) {
                      return (
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          "string" != typeof t ||
                          (t = g.from(t, n)),
                        t
                      );
                    })(t, r, a);
                    r !== s && ((n = !0), (a = "buffer"), (r = s));
                  }
                  var o = t.objectMode ? 1 : r.length;
                  t.length += o;
                  var d = t.length < t.highWaterMark;
                  if ((d || (t.needDrain = !0), t.writing || t.corked)) {
                    var l = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: r,
                      encoding: a,
                      isBuf: n,
                      callback: i,
                      next: null,
                    }),
                      l
                        ? (l.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else u(e, t, !1, o, r, a, i);
                  return d;
                })(this, r, i, e, t, n))),
            a
          );
        }),
        (o.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (o.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              l(this, e));
        }),
        (o.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        (o.prototype._write = function (e, t, n) {
          n(new Error("_write() is not implemented"));
        }),
        (o.prototype._writev = null),
        (o.prototype.end = function (e, t, n) {
          var r = this._writableState;
          "function" == typeof e
            ? ((n = e), (e = null), (t = null))
            : "function" == typeof t && ((n = t), (t = null)),
            null !== e && void 0 !== e && this.write(e, t),
            r.corked && ((r.corked = 1), this.uncork()),
            r.ending ||
              r.finished ||
              (function (e, t, n) {
                (t.ending = !0),
                  _(e, t),
                  n && (t.finished ? f(n) : e.once("finish", n)),
                  (t.ended = !0),
                  (e.writable = !1);
              })(this, r, n);
        }),
        Object.defineProperty(o.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (o.prototype.destroy = L.destroy),
        (o.prototype._undestroy = L.undestroy),
        (o.prototype._destroy = function (e, t) {
          this.end(), t(e);
        });
    }.call(t, n(16), n(287).setImmediate, n(6)));
  },
  function (e, t, n) {
    var r = n(19).Buffer,
      a =
        r.isEncoding ||
        function (e) {
          switch (e && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        },
      i = (t.StringDecoder = function (e) {
        switch (
          ((this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, "")),
          (function (e) {
            if (e && !a(e)) throw new Error("Unknown encoding: " + e);
          })(e),
          this.encoding)
        ) {
          case "utf8":
            this.surrogateSize = 3;
            break;
          case "ucs2":
          case "utf16le":
            (this.surrogateSize = 2),
              (this.detectIncompleteChar = function (e) {
                (this.charReceived = e.length % 2),
                  (this.charLength = this.charReceived ? 2 : 0);
              });
            break;
          case "base64":
            (this.surrogateSize = 3),
              (this.detectIncompleteChar = function (e) {
                (this.charReceived = e.length % 3),
                  (this.charLength = this.charReceived ? 3 : 0);
              });
            break;
          default:
            return void (this.write = function (e) {
              return e.toString(this.encoding);
            });
        }
        (this.charBuffer = new r(6)),
          (this.charReceived = 0),
          (this.charLength = 0);
      });
    (i.prototype.write = function (e) {
      for (var t = ""; this.charLength; ) {
        var n =
          e.length >= this.charLength - this.charReceived
            ? this.charLength - this.charReceived
            : e.length;
        if (
          (e.copy(this.charBuffer, this.charReceived, 0, n),
          (this.charReceived += n),
          this.charReceived < this.charLength)
        )
          return "";
        e = e.slice(n, e.length);
        if (
          !(
            (a = (t = this.charBuffer
              .slice(0, this.charLength)
              .toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 &&
            a <= 56319
          )
        ) {
          if (((this.charReceived = this.charLength = 0), 0 === e.length))
            return t;
          break;
        }
        (this.charLength += this.surrogateSize), (t = "");
      }
      this.detectIncompleteChar(e);
      r = e.length;
      this.charLength &&
        (e.copy(this.charBuffer, 0, e.length - this.charReceived, r),
        (r -= this.charReceived));
      var r = (t += e.toString(this.encoding, 0, r)).length - 1,
        a = t.charCodeAt(r);
      if (a >= 55296 && a <= 56319) {
        var i = this.surrogateSize;
        return (
          (this.charLength += i),
          (this.charReceived += i),
          this.charBuffer.copy(this.charBuffer, i, 0, i),
          e.copy(this.charBuffer, 0, 0, i),
          t.substring(0, r)
        );
      }
      return t;
    }),
      (i.prototype.detectIncompleteChar = function (e) {
        for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
          var n = e[e.length - t];
          if (1 == t && n >> 5 == 6) {
            this.charLength = 2;
            break;
          }
          if (t <= 2 && n >> 4 == 14) {
            this.charLength = 3;
            break;
          }
          if (t <= 3 && n >> 3 == 30) {
            this.charLength = 4;
            break;
          }
        }
        this.charReceived = t;
      }),
      (i.prototype.end = function (e) {
        var t = "";
        if ((e && e.length && (t = this.write(e)), this.charReceived)) {
          var n = this.charReceived,
            r = this.charBuffer,
            a = this.encoding;
          t += r.slice(0, n).toString(a);
        }
        return t;
      });
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      if (!(this instanceof r)) return new r(e);
      i.call(this, e),
        (this._transformState = new (function (e) {
          (this.afterTransform = function (t, n) {
            return (function (e, t, n) {
              var r = e._transformState;
              r.transforming = !1;
              var a = r.writecb;
              if (!a)
                return e.emit(
                  "error",
                  new Error("write callback called multiple times")
                );
              (r.writechunk = null),
                (r.writecb = null),
                null !== n && void 0 !== n && e.push(n),
                a(t);
              var i = e._readableState;
              (i.reading = !1),
                (i.needReadable || i.length < i.highWaterMark) &&
                  e._read(i.highWaterMark);
            })(e, t, n);
          }),
            (this.needTransform = !1),
            (this.transforming = !1),
            (this.writecb = null),
            (this.writechunk = null),
            (this.writeencoding = null);
        })(this));
      var t = this;
      (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.once("prefinish", function () {
          "function" == typeof this._flush
            ? this._flush(function (e, n) {
                a(t, e, n);
              })
            : a(t);
        });
    }
    function a(e, t, n) {
      if (t) return e.emit("error", t);
      null !== n && void 0 !== n && e.push(n);
      var r = e._writableState,
        a = e._transformState;
      if (r.length)
        throw new Error("Calling transform done when ws.length != 0");
      if (a.transforming)
        throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }
    e.exports = r;
    var i = n(20),
      s = n(28);
    (s.inherits = n(13)),
      s.inherits(r, i),
      (r.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          i.prototype.push.call(this, e, t)
        );
      }),
      (r.prototype._transform = function (e, t, n) {
        throw new Error("_transform() is not implemented");
      }),
      (r.prototype._write = function (e, t, n) {
        var r = this._transformState;
        if (
          ((r.writecb = n),
          (r.writechunk = e),
          (r.writeencoding = t),
          !r.transforming)
        ) {
          var a = this._readableState;
          (r.needTransform || a.needReadable || a.length < a.highWaterMark) &&
            this._read(a.highWaterMark);
        }
      }),
      (r.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (r.prototype._destroy = function (e, t) {
        var n = this;
        i.prototype._destroy.call(this, e, function (e) {
          t(e), n.emit("close");
        });
      });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("af", {
        months:
          "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays:
          "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
            "_"
          ),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
          return /^nm$/i.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (n ? "vm" : "VM") : n ? "nm" : "NM";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Vandag om] LT",
          nextDay: "[Môre om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[Gister om] LT",
          lastWeek: "[Laas] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "oor %s",
          past: "%s gelede",
          s: "'n paar sekondes",
          ss: "%d sekondes",
          m: "'n minuut",
          mm: "%d minute",
          h: "'n uur",
          hh: "%d ure",
          d: "'n dag",
          dd: "%d dae",
          M: "'n maand",
          MM: "%d maande",
          y: "'n jaar",
          yy: "%d jaar",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠",
        },
        n = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0",
        },
        r = function (e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : 2 === e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5;
        },
        a = {
          s: [
            "أقل من ثانية",
            "ثانية واحدة",
            ["ثانيتان", "ثانيتين"],
            "%d ثوان",
            "%d ثانية",
            "%d ثانية",
          ],
          m: [
            "أقل من دقيقة",
            "دقيقة واحدة",
            ["دقيقتان", "دقيقتين"],
            "%d دقائق",
            "%d دقيقة",
            "%d دقيقة",
          ],
          h: [
            "أقل من ساعة",
            "ساعة واحدة",
            ["ساعتان", "ساعتين"],
            "%d ساعات",
            "%d ساعة",
            "%d ساعة",
          ],
          d: [
            "أقل من يوم",
            "يوم واحد",
            ["يومان", "يومين"],
            "%d أيام",
            "%d يومًا",
            "%d يوم",
          ],
          M: [
            "أقل من شهر",
            "شهر واحد",
            ["شهران", "شهرين"],
            "%d أشهر",
            "%d شهرا",
            "%d شهر",
          ],
          y: [
            "أقل من عام",
            "عام واحد",
            ["عامان", "عامين"],
            "%d أعوام",
            "%d عامًا",
            "%d عام",
          ],
        },
        i = function (e) {
          return function (t, n, i, s) {
            var o = r(t),
              u = a[e][r(t)];
            return 2 === o && (u = u[n ? 0 : 1]), u.replace(/%d/i, t);
          };
        },
        s = [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ];
      return e.defineLocale("ar", {
        months: s,
        monthsShort: s,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م";
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: i("s"),
          ss: i("s"),
          m: i("m"),
          mm: i("m"),
          h: i("h"),
          hh: i("h"),
          d: i("d"),
          dd: i("d"),
          M: i("M"),
          MM: i("M"),
          y: i("y"),
          yy: i("y"),
        },
        preparse: function (e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = function (e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : 2 === e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5;
        },
        n = {
          s: [
            "أقل من ثانية",
            "ثانية واحدة",
            ["ثانيتان", "ثانيتين"],
            "%d ثوان",
            "%d ثانية",
            "%d ثانية",
          ],
          m: [
            "أقل من دقيقة",
            "دقيقة واحدة",
            ["دقيقتان", "دقيقتين"],
            "%d دقائق",
            "%d دقيقة",
            "%d دقيقة",
          ],
          h: [
            "أقل من ساعة",
            "ساعة واحدة",
            ["ساعتان", "ساعتين"],
            "%d ساعات",
            "%d ساعة",
            "%d ساعة",
          ],
          d: [
            "أقل من يوم",
            "يوم واحد",
            ["يومان", "يومين"],
            "%d أيام",
            "%d يومًا",
            "%d يوم",
          ],
          M: [
            "أقل من شهر",
            "شهر واحد",
            ["شهران", "شهرين"],
            "%d أشهر",
            "%d شهرا",
            "%d شهر",
          ],
          y: [
            "أقل من عام",
            "عام واحد",
            ["عامان", "عامين"],
            "%d أعوام",
            "%d عامًا",
            "%d عام",
          ],
        },
        r = function (e) {
          return function (r, a, i, s) {
            var o = t(r),
              u = n[e][t(r)];
            return 2 === o && (u = u[a ? 0 : 1]), u.replace(/%d/i, r);
          };
        },
        a = [
          "جانفي",
          "فيفري",
          "مارس",
          "أفريل",
          "ماي",
          "جوان",
          "جويلية",
          "أوت",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ];
      return e.defineLocale("ar-dz", {
        months: a,
        monthsShort: a,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م";
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: r("s"),
          ss: r("s"),
          m: r("m"),
          mm: r("m"),
          h: r("h"),
          hh: r("h"),
          d: r("d"),
          dd: r("d"),
          M: r("M"),
          MM: r("M"),
          y: r("y"),
          yy: r("y"),
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 0, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ar-kw", {
        months:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        monthsShort:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        week: { dow: 0, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          0: "0",
        },
        n = function (e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : 2 === e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5;
        },
        r = {
          s: [
            "أقل من ثانية",
            "ثانية واحدة",
            ["ثانيتان", "ثانيتين"],
            "%d ثوان",
            "%d ثانية",
            "%d ثانية",
          ],
          m: [
            "أقل من دقيقة",
            "دقيقة واحدة",
            ["دقيقتان", "دقيقتين"],
            "%d دقائق",
            "%d دقيقة",
            "%d دقيقة",
          ],
          h: [
            "أقل من ساعة",
            "ساعة واحدة",
            ["ساعتان", "ساعتين"],
            "%d ساعات",
            "%d ساعة",
            "%d ساعة",
          ],
          d: [
            "أقل من يوم",
            "يوم واحد",
            ["يومان", "يومين"],
            "%d أيام",
            "%d يومًا",
            "%d يوم",
          ],
          M: [
            "أقل من شهر",
            "شهر واحد",
            ["شهران", "شهرين"],
            "%d أشهر",
            "%d شهرا",
            "%d شهر",
          ],
          y: [
            "أقل من عام",
            "عام واحد",
            ["عامان", "عامين"],
            "%d أعوام",
            "%d عامًا",
            "%d عام",
          ],
        },
        a = function (e) {
          return function (t, a, i, s) {
            var o = n(t),
              u = r[e][n(t)];
            return 2 === o && (u = u[a ? 0 : 1]), u.replace(/%d/i, t);
          };
        },
        i = [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر",
        ];
      return e.defineLocale("ar-ly", {
        months: i,
        monthsShort: i,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م";
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: a("s"),
          ss: a("s"),
          m: a("m"),
          mm: a("m"),
          h: a("h"),
          hh: a("h"),
          d: a("d"),
          dd: a("d"),
          M: a("M"),
          MM: a("M"),
          y: a("y"),
          yy: a("y"),
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ar-ma", {
        months:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        monthsShort:
          "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
            "_"
          ),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠",
        },
        n = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0",
        };
      return e.defineLocale("ar-sa", {
        months:
          "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        monthsShort:
          "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return "م" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ص" : "م";
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        preparse: function (e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ar-tn", {
        months:
          "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        monthsShort:
          "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı",
      };
      return e.defineLocale("az", {
        months:
          "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
            "_"
          ),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split(
          "_"
        ),
        weekdays:
          "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
            "_"
          ),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[sabah saat] LT",
          nextWeek: "[gələn həftə] dddd [saat] LT",
          lastDay: "[dünən] LT",
          lastWeek: "[keçən həftə] dddd [saat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s əvvəl",
          s: "birneçə saniyə",
          ss: "%d saniyə",
          m: "bir dəqiqə",
          mm: "%d dəqiqə",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir il",
          yy: "%d il",
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
          return /^(gündüz|axşam)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "gecə"
            : e < 12
            ? "səhər"
            : e < 17
            ? "gündüz"
            : "axşam";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
          if (0 === e) return e + "-ıncı";
          var n = e % 10;
          return e + (t[n] || t[(e % 100) - n] || t[e >= 100 ? 100 : null]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, n) {
        //! moment.js locale configuration
        return "m" === n
          ? t
            ? "хвіліна"
            : "хвіліну"
          : "h" === n
          ? t
            ? "гадзіна"
            : "гадзіну"
          : e +
            " " +
            (function (e, t) {
              var n = e.split("_");
              return t % 10 == 1 && t % 100 != 11
                ? n[0]
                : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
                ? n[1]
                : n[2];
            })(
              {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў",
              }[n],
              +e
            );
      }
      return e.defineLocale("be", {
        months: {
          format:
            "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
              "_"
            ),
          standalone:
            "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
              "_"
            ),
        },
        monthsShort:
          "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
          format:
            "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
              "_"
            ),
          standalone:
            "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
              "_"
            ),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., HH:mm",
          LLLL: "dddd, D MMMM YYYY г., HH:mm",
        },
        calendar: {
          sameDay: "[Сёння ў] LT",
          nextDay: "[Заўтра ў] LT",
          lastDay: "[Учора ў] LT",
          nextWeek: function () {
            return "[У] dddd [ў] LT";
          },
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return "[У мінулую] dddd [ў] LT";
              case 1:
              case 2:
              case 4:
                return "[У мінулы] dddd [ў] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "праз %s",
          past: "%s таму",
          s: "некалькі секунд",
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "дзень",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t,
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
          return /^(дня|вечара)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return (e % 10 != 2 && e % 10 != 3) ||
                e % 100 == 12 ||
                e % 100 == 13
                ? e + "-ы"
                : e + "-і";
            case "D":
              return e + "-га";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("bg", {
        months:
          "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
            "_"
          ),
        monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split(
          "_"
        ),
        weekdays:
          "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Днес в] LT",
          nextDay: "[Утре в] LT",
          nextWeek: "dddd [в] LT",
          lastDay: "[Вчера в] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[Миналата] dddd [в] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[Миналия] dddd [в] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "след %s",
          past: "преди %s",
          s: "няколко секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дена",
          M: "месец",
          MM: "%d месеца",
          y: "година",
          yy: "%d години",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            n = e % 100;
          return 0 === e
            ? e + "-ев"
            : 0 === n
            ? e + "-ен"
            : n > 10 && n < 20
            ? e + "-ти"
            : 1 === t
            ? e + "-ви"
            : 2 === t
            ? e + "-ри"
            : 7 === t || 8 === t
            ? e + "-ми"
            : e + "-ти";
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("bm", {
        months:
          "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
            "_"
          ),
        monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
          "_"
        ),
        weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
        weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
        weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "MMMM [tile] D [san] YYYY",
          LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
          LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
        },
        calendar: {
          sameDay: "[Bi lɛrɛ] LT",
          nextDay: "[Sini lɛrɛ] LT",
          nextWeek: "dddd [don lɛrɛ] LT",
          lastDay: "[Kunu lɛrɛ] LT",
          lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s kɔnɔ",
          past: "a bɛ %s bɔ",
          s: "sanga dama dama",
          ss: "sekondi %d",
          m: "miniti kelen",
          mm: "miniti %d",
          h: "lɛrɛ kelen",
          hh: "lɛrɛ %d",
          d: "tile kelen",
          dd: "tile %d",
          M: "kalo kelen",
          MM: "kalo %d",
          y: "san kelen",
          yy: "san %d",
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "১",
          2: "২",
          3: "৩",
          4: "৪",
          5: "৫",
          6: "৬",
          7: "৭",
          8: "৮",
          9: "৯",
          0: "০",
        },
        n = {
          "১": "1",
          "২": "2",
          "৩": "3",
          "৪": "4",
          "৫": "5",
          "৬": "6",
          "৭": "7",
          "৮": "8",
          "৯": "9",
          "০": "0",
        };
      return e.defineLocale("bn", {
        months:
          "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
            "_"
          ),
        monthsShort:
          "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
            "_"
          ),
        weekdays:
          "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
            "_"
          ),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
        longDateFormat: {
          LT: "A h:mm সময়",
          LTS: "A h:mm:ss সময়",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm সময়",
          LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
        },
        calendar: {
          sameDay: "[আজ] LT",
          nextDay: "[আগামীকাল] LT",
          nextWeek: "dddd, LT",
          lastDay: "[গতকাল] LT",
          lastWeek: "[গত] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s পরে",
          past: "%s আগে",
          s: "কয়েক সেকেন্ড",
          ss: "%d সেকেন্ড",
          m: "এক মিনিট",
          mm: "%d মিনিট",
          h: "এক ঘন্টা",
          hh: "%d ঘন্টা",
          d: "এক দিন",
          dd: "%d দিন",
          M: "এক মাস",
          MM: "%d মাস",
          y: "এক বছর",
          yy: "%d বছর",
        },
        preparse: function (e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            ("রাত" === t && e >= 4) || ("দুপুর" === t && e < 5) || "বিকাল" === t
              ? e + 12
              : e
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "রাত"
            : e < 10
            ? "সকাল"
            : e < 17
            ? "দুপুর"
            : e < 20
            ? "বিকাল"
            : "রাত";
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "༡",
          2: "༢",
          3: "༣",
          4: "༤",
          5: "༥",
          6: "༦",
          7: "༧",
          8: "༨",
          9: "༩",
          0: "༠",
        },
        n = {
          "༡": "1",
          "༢": "2",
          "༣": "3",
          "༤": "4",
          "༥": "5",
          "༦": "6",
          "༧": "7",
          "༨": "8",
          "༩": "9",
          "༠": "0",
        };
      return e.defineLocale("bo", {
        months:
          "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
            "_"
          ),
        monthsShort:
          "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split(
            "_"
          ),
        monthsShortRegex: /^(ཟླ་\d{1,2})/,
        monthsParseExact: !0,
        weekdays:
          "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
            "_"
          ),
        weekdaysShort:
          "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
          sameDay: "[དི་རིང] LT",
          nextDay: "[སང་ཉིན] LT",
          nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
          lastDay: "[ཁ་སང] LT",
          lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ལ་",
          past: "%s སྔན་ལ",
          s: "ལམ་སང",
          ss: "%d སྐར་ཆ།",
          m: "སྐར་མ་གཅིག",
          mm: "%d སྐར་མ",
          h: "ཆུ་ཚོད་གཅིག",
          hh: "%d ཆུ་ཚོད",
          d: "ཉིན་གཅིག",
          dd: "%d ཉིན་",
          M: "ཟླ་བ་གཅིག",
          MM: "%d ཟླ་བ",
          y: "ལོ་གཅིག",
          yy: "%d ལོ",
        },
        preparse: function (e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            ("མཚན་མོ" === t && e >= 4) ||
            ("ཉིན་གུང" === t && e < 5) ||
            "དགོང་དག" === t
              ? e + 12
              : e
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "མཚན་མོ"
            : e < 10
            ? "ཞོགས་ཀས"
            : e < 17
            ? "ཉིན་གུང"
            : e < 20
            ? "དགོང་དག"
            : "མཚན་མོ";
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n) {
        return (
          e +
          " " +
          (function (e, t) {
            if (2 === t)
              return (function (e) {
                var t = { m: "v", b: "v", d: "z" };
                if (void 0 === t[e.charAt(0)]) return e;
                return t[e.charAt(0)] + e.substring(1);
              })(e);
            return e;
          })({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e)
        );
      }
      function n(e) {
        return e > 9 ? n(e % 10) : e;
      }
      var r = [
          /^gen/i,
          /^c[ʼ\']hwe/i,
          /^meu/i,
          /^ebr/i,
          /^mae/i,
          /^(mez|eve)/i,
          /^gou/i,
          /^eos/i,
          /^gwe/i,
          /^her/i,
          /^du/i,
          /^ker/i,
        ],
        a =
          /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
        i = [/^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i];
      return e.defineLocale("br", {
        months:
          "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
            "_"
          ),
        monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split(
          "_"
        ),
        weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParse: i,
        fullWeekdaysParse: [
          /^sul/i,
          /^lun/i,
          /^meurzh/i,
          /^merc[ʼ\']her/i,
          /^yaou/i,
          /^gwener/i,
          /^sadorn/i,
        ],
        shortWeekdaysParse: [
          /^Sul/i,
          /^Lun/i,
          /^Meu/i,
          /^Mer/i,
          /^Yao/i,
          /^Gwe/i,
          /^Sad/i,
        ],
        minWeekdaysParse: i,
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex:
          /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
        monthsShortStrictRegex:
          /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [a viz] MMMM YYYY",
          LLL: "D [a viz] MMMM YYYY HH:mm",
          LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hiziv da] LT",
          nextDay: "[Warcʼhoazh da] LT",
          nextWeek: "dddd [da] LT",
          lastDay: "[Decʼh da] LT",
          lastWeek: "dddd [paset da] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "a-benn %s",
          past: "%s ʼzo",
          s: "un nebeud segondennoù",
          ss: "%d eilenn",
          m: "ur vunutenn",
          mm: t,
          h: "un eur",
          hh: "%d eur",
          d: "un devezh",
          dd: t,
          M: "ur miz",
          MM: t,
          y: "ur bloaz",
          yy: function (e) {
            switch (n(e)) {
              case 1:
              case 3:
              case 4:
              case 5:
              case 9:
                return e + " bloaz";
              default:
                return e + " vloaz";
            }
          },
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
          return e + (1 === e ? "añ" : "vet");
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /a.m.|g.m./,
        isPM: function (e) {
          return "g.m." === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "a.m." : "g.m.";
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n) {
        var r = e + " ";
        switch (n) {
          case "ss":
            return (r +=
              1 === e
                ? "sekunda"
                : 2 === e || 3 === e || 4 === e
                ? "sekunde"
                : "sekundi");
          case "m":
            return t ? "jedna minuta" : "jedne minute";
          case "mm":
            return (r +=
              1 === e
                ? "minuta"
                : 2 === e || 3 === e || 4 === e
                ? "minute"
                : "minuta");
          case "h":
            return t ? "jedan sat" : "jednog sata";
          case "hh":
            return (r +=
              1 === e
                ? "sat"
                : 2 === e || 3 === e || 4 === e
                ? "sata"
                : "sati");
          case "dd":
            return (r += 1 === e ? "dan" : "dana");
          case "MM":
            return (r +=
              1 === e
                ? "mjesec"
                : 2 === e || 3 === e || 4 === e
                ? "mjeseca"
                : "mjeseci");
          case "yy":
            return (r +=
              1 === e
                ? "godina"
                : 2 === e || 3 === e || 4 === e
                ? "godine"
                : "godina");
        }
      }
      return e.defineLocale("bs", {
        months:
          "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
                return "[prošlu] dddd [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ca", {
        months: {
          standalone:
            "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
              "_"
            ),
          format:
            "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
              "_"
            ),
          isFormat: /D[oD]?(\s)+MMMM/,
        },
        monthsShort:
          "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
            "_"
          ),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a les] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
          llll: "ddd D MMM YYYY, H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          nextDay: function () {
            return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          lastDay: function () {
            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [passat a " +
              (1 !== this.hours() ? "les" : "la") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "uns segons",
          ss: "%d segons",
          m: "un minut",
          mm: "%d minuts",
          h: "una hora",
          hh: "%d hores",
          d: "un dia",
          dd: "%d dies",
          M: "un mes",
          MM: "%d mesos",
          y: "un any",
          yy: "%d anys",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n =
            1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
          return ("w" !== t && "W" !== t) || (n = "a"), e + n;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
      }
      function n(e, n, r, a) {
        var i = e + " ";
        switch (r) {
          case "s":
            return n || a ? "pár sekund" : "pár sekundami";
          case "ss":
            return n || a ? i + (t(e) ? "sekundy" : "sekund") : i + "sekundami";
          case "m":
            return n ? "minuta" : a ? "minutu" : "minutou";
          case "mm":
            return n || a ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
          case "h":
            return n ? "hodina" : a ? "hodinu" : "hodinou";
          case "hh":
            return n || a ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
          case "d":
            return n || a ? "den" : "dnem";
          case "dd":
            return n || a ? i + (t(e) ? "dny" : "dní") : i + "dny";
          case "M":
            return n || a ? "měsíc" : "měsícem";
          case "MM":
            return n || a ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
          case "y":
            return n || a ? "rok" : "rokem";
          case "yy":
            return n || a ? i + (t(e) ? "roky" : "let") : i + "lety";
        }
      }
      //! moment.js locale configuration
      var r =
          "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
            "_"
          ),
        a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
        i = [
          /^led/i,
          /^úno/i,
          /^bře/i,
          /^dub/i,
          /^kvě/i,
          /^(čvn|červen$|června)/i,
          /^(čvc|červenec|července)/i,
          /^srp/i,
          /^zář/i,
          /^říj/i,
          /^lis/i,
          /^pro/i,
        ],
        s =
          /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
      return e.defineLocale("cs", {
        months: r,
        monthsShort: a,
        monthsRegex: s,
        monthsShortRegex: s,
        monthsStrictRegex:
          /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex:
          /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: i,
        longMonthsParse: i,
        shortMonthsParse: i,
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
          l: "D. M. YYYY",
        },
        calendar: {
          sameDay: "[dnes v] LT",
          nextDay: "[zítra v] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v neděli v] LT";
              case 1:
              case 2:
                return "[v] dddd [v] LT";
              case 3:
                return "[ve středu v] LT";
              case 4:
                return "[ve čtvrtek v] LT";
              case 5:
                return "[v pátek v] LT";
              case 6:
                return "[v sobotu v] LT";
            }
          },
          lastDay: "[včera v] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulou neděli v] LT";
              case 1:
              case 2:
                return "[minulé] dddd [v] LT";
              case 3:
                return "[minulou středu v] LT";
              case 4:
              case 5:
                return "[minulý] dddd [v] LT";
              case 6:
                return "[minulou sobotu v] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "před %s",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("cv", {
        months:
          "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
            "_"
          ),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split(
          "_"
        ),
        weekdays:
          "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
            "_"
          ),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
          LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
        },
        calendar: {
          sameDay: "[Паян] LT [сехетре]",
          nextDay: "[Ыран] LT [сехетре]",
          lastDay: "[Ӗнер] LT [сехетре]",
          nextWeek: "[Ҫитес] dddd LT [сехетре]",
          lastWeek: "[Иртнӗ] dddd LT [сехетре]",
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return (
              e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
            );
          },
          past: "%s каялла",
          s: "пӗр-ик ҫеккунт",
          ss: "%d ҫеккунт",
          m: "пӗр минут",
          mm: "%d минут",
          h: "пӗр сехет",
          hh: "%d сехет",
          d: "пӗр кун",
          dd: "%d кун",
          M: "пӗр уйӑх",
          MM: "%d уйӑх",
          y: "пӗр ҫул",
          yy: "%d ҫул",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("cy", {
        months:
          "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
            "_"
          ),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split(
          "_"
        ),
        weekdays:
          "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
            "_"
          ),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Heddiw am] LT",
          nextDay: "[Yfory am] LT",
          nextWeek: "dddd [am] LT",
          lastDay: "[Ddoe am] LT",
          lastWeek: "dddd [diwethaf am] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "mewn %s",
          past: "%s yn ôl",
          s: "ychydig eiliadau",
          ss: "%d eiliad",
          m: "munud",
          mm: "%d munud",
          h: "awr",
          hh: "%d awr",
          d: "diwrnod",
          dd: "%d diwrnod",
          M: "mis",
          MM: "%d mis",
          y: "blwyddyn",
          yy: "%d flynedd",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
          var t = e,
            n = "";
          return (
            t > 20
              ? (n =
                  40 === t || 50 === t || 60 === t || 80 === t || 100 === t
                    ? "fed"
                    : "ain")
              : t > 0 &&
                (n = [
                  "",
                  "af",
                  "il",
                  "ydd",
                  "ydd",
                  "ed",
                  "ed",
                  "ed",
                  "fed",
                  "fed",
                  "fed",
                  "eg",
                  "fed",
                  "eg",
                  "eg",
                  "fed",
                  "eg",
                  "eg",
                  "fed",
                  "eg",
                  "fed",
                ][t]),
            e + n
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("da", {
        months:
          "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
          "_"
        ),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "på dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[i] dddd[s kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "få sekunder",
          ss: "%d sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en måned",
          MM: "%d måneder",
          y: "et år",
          yy: "%d år",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        var a = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          w: ["eine Woche", "einer Woche"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale("de", {
        months:
          "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]",
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          w: t,
          ww: "%d Wochen",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        var a = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          w: ["eine Woche", "einer Woche"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale("de-at", {
        months:
          "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]",
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          w: t,
          ww: "%d Wochen",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        var a = {
          m: ["eine Minute", "einer Minute"],
          h: ["eine Stunde", "einer Stunde"],
          d: ["ein Tag", "einem Tag"],
          dd: [e + " Tage", e + " Tagen"],
          w: ["eine Woche", "einer Woche"],
          M: ["ein Monat", "einem Monat"],
          MM: [e + " Monate", e + " Monaten"],
          y: ["ein Jahr", "einem Jahr"],
          yy: [e + " Jahre", e + " Jahren"],
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale("de-ch", {
        months:
          "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
            "_"
          ),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]",
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: t,
          mm: "%d Minuten",
          h: t,
          hh: "%d Stunden",
          d: t,
          dd: t,
          w: t,
          ww: "%d Wochen",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = [
          "ޖެނުއަރީ",
          "ފެބްރުއަރީ",
          "މާރިޗު",
          "އޭޕްރީލު",
          "މޭ",
          "ޖޫން",
          "ޖުލައި",
          "އޯގަސްޓު",
          "ސެޕްޓެމްބަރު",
          "އޮކްޓޯބަރު",
          "ނޮވެމްބަރު",
          "ޑިސެމްބަރު",
        ],
        n = [
          "އާދިއްތަ",
          "ހޯމަ",
          "އަންގާރަ",
          "ބުދަ",
          "ބުރާސްފަތި",
          "ހުކުރު",
          "ހޮނިހިރު",
        ];
      return e.defineLocale("dv", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/M/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /މކ|މފ/,
        isPM: function (e) {
          return "މފ" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "މކ" : "މފ";
        },
        calendar: {
          sameDay: "[މިއަދު] LT",
          nextDay: "[މާދަމާ] LT",
          nextWeek: "dddd LT",
          lastDay: "[އިއްޔެ] LT",
          lastWeek: "[ފާއިތުވި] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ތެރޭގައި %s",
          past: "ކުރިން %s",
          s: "ސިކުންތުކޮޅެއް",
          ss: "d% ސިކުންތު",
          m: "މިނިޓެއް",
          mm: "މިނިޓު %d",
          h: "ގަޑިއިރެއް",
          hh: "ގަޑިއިރު %d",
          d: "ދުވަހެއް",
          dd: "ދުވަސް %d",
          M: "މަހެއް",
          MM: "މަސް %d",
          y: "އަހަރެއް",
          yy: "އަހަރު %d",
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 7, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("el", {
        monthsNominativeEl:
          "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
            "_"
          ),
        monthsGenitiveEl:
          "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
            "_"
          ),
        months: function (e, t) {
          return e
            ? "string" == typeof t &&
              /D/.test(t.substring(0, t.indexOf("MMMM")))
              ? this._monthsGenitiveEl[e.month()]
              : this._monthsNominativeEl[e.month()]
            : this._monthsNominativeEl;
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split(
          "_"
        ),
        weekdays:
          "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "μμ" : "ΜΜ") : n ? "πμ" : "ΠΜ";
        },
        isPM: function (e) {
          return "μ" === (e + "").toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendarEl: {
          sameDay: "[Σήμερα {}] LT",
          nextDay: "[Αύριο {}] LT",
          nextWeek: "dddd [{}] LT",
          lastDay: "[Χθες {}] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 6:
                return "[το προηγούμενο] dddd [{}] LT";
              default:
                return "[την προηγούμενη] dddd [{}] LT";
            }
          },
          sameElse: "L",
        },
        calendar: function (e, t) {
          var n = this._calendarEl[e],
            r = t && t.hours();
          //! moment.js locale configuration
          return (
            (function (e) {
              return (
                ("undefined" != typeof Function && e instanceof Function) ||
                "[object Function]" === Object.prototype.toString.call(e)
              );
            })(n) && (n = n.apply(t)),
            n.replace("{}", r % 12 == 1 ? "στη" : "στις")
          );
        },
        relativeTime: {
          future: "σε %s",
          past: "%s πριν",
          s: "λίγα δευτερόλεπτα",
          ss: "%d δευτερόλεπτα",
          m: "ένα λεπτό",
          mm: "%d λεπτά",
          h: "μία ώρα",
          hh: "%d ώρες",
          d: "μία μέρα",
          dd: "%d μέρες",
          M: "ένας μήνας",
          MM: "%d μήνες",
          y: "ένας χρόνος",
          yy: "%d χρόνια",
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("en-au", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 0, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("en-ca", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY-MM-DD",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("en-gb", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("en-ie", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("en-il", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("en-in", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("en-nz", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("en-sg", {
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split(
          "_"
        ),
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("eo", {
        months:
          "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
            "_"
          ),
        monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split(
          "_"
        ),
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split(
          "_"
        ),
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "[la] D[-an de] MMMM, YYYY",
          LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
          LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
          llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
          return "p" === e.charAt(0).toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "p.t.m." : "P.T.M.") : n ? "a.t.m." : "A.T.M.";
        },
        calendar: {
          sameDay: "[Hodiaŭ je] LT",
          nextDay: "[Morgaŭ je] LT",
          nextWeek: "dddd[n je] LT",
          lastDay: "[Hieraŭ je] LT",
          lastWeek: "[pasintan] dddd[n je] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "post %s",
          past: "antaŭ %s",
          s: "kelkaj sekundoj",
          ss: "%d sekundoj",
          m: "unu minuto",
          mm: "%d minutoj",
          h: "unu horo",
          hh: "%d horoj",
          d: "unu tago",
          dd: "%d tagoj",
          M: "unu monato",
          MM: "%d monatoj",
          y: "unu jaro",
          yy: "%d jaroj",
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t =
          "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        r = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i,
        ],
        a =
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale("es", {
        months:
          "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex:
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex:
          /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
          "_"
        ),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [pasado a la" +
              (1 !== this.hours() ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
        invalidDate: "Fecha invalida",
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t =
          "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        r = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i,
        ],
        a =
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale("es-do", {
        months:
          "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex:
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex:
          /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
          "_"
        ),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [pasado a la" +
              (1 !== this.hours() ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t =
          "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
            "_"
          ),
        n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        r = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i,
        ],
        a =
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale("es-us", {
        months:
          "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
            "_"
          ),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex:
          /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex:
          /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split(
          "_"
        ),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "MM/DD/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
        },
        calendar: {
          sameDay: function () {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextDay: function () {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          nextWeek: function () {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastDay: function () {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
          },
          lastWeek: function () {
            return (
              "[el] dddd [pasado a la" +
              (1 !== this.hours() ? "s" : "") +
              "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        var a = {
          s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
          ss: [e + "sekundi", e + "sekundit"],
          m: ["ühe minuti", "üks minut"],
          mm: [e + " minuti", e + " minutit"],
          h: ["ühe tunni", "tund aega", "üks tund"],
          hh: [e + " tunni", e + " tundi"],
          d: ["ühe päeva", "üks päev"],
          M: ["kuu aja", "kuu aega", "üks kuu"],
          MM: [e + " kuu", e + " kuud"],
          y: ["ühe aasta", "aasta", "üks aasta"],
          yy: [e + " aasta", e + " aastat"],
        };
        return t ? (a[n][2] ? a[n][2] : a[n][1]) : r ? a[n][0] : a[n][1];
      }
      return e.defineLocale("et", {
        months:
          "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
            "_"
          ),
        monthsShort:
          "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
            "_"
          ),
        weekdays:
          "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
            "_"
          ),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Täna,] LT",
          nextDay: "[Homme,] LT",
          nextWeek: "[Järgmine] dddd LT",
          lastDay: "[Eile,] LT",
          lastWeek: "[Eelmine] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s pärast",
          past: "%s tagasi",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: "%d päeva",
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("eu", {
        months:
          "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
            "_"
          ),
        monthsShort:
          "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
            "_"
          ),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY[ko] MMMM[ren] D[a]",
          LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
          LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
          l: "YYYY-M-D",
          ll: "YYYY[ko] MMM D[a]",
          lll: "YYYY[ko] MMM D[a] HH:mm",
          llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
        },
        calendar: {
          sameDay: "[gaur] LT[etan]",
          nextDay: "[bihar] LT[etan]",
          nextWeek: "dddd LT[etan]",
          lastDay: "[atzo] LT[etan]",
          lastWeek: "[aurreko] dddd LT[etan]",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s barru",
          past: "duela %s",
          s: "segundo batzuk",
          ss: "%d segundo",
          m: "minutu bat",
          mm: "%d minutu",
          h: "ordu bat",
          hh: "%d ordu",
          d: "egun bat",
          dd: "%d egun",
          M: "hilabete bat",
          MM: "%d hilabete",
          y: "urte bat",
          yy: "%d urte",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "۱",
          2: "۲",
          3: "۳",
          4: "۴",
          5: "۵",
          6: "۶",
          7: "۷",
          8: "۸",
          9: "۹",
          0: "۰",
        },
        n = {
          "۱": "1",
          "۲": "2",
          "۳": "3",
          "۴": "4",
          "۵": "5",
          "۶": "6",
          "۷": "7",
          "۸": "8",
          "۹": "9",
          "۰": "0",
        };
      return e.defineLocale("fa", {
        months:
          "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
            "_"
          ),
        monthsShort:
          "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
            "_"
          ),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split(
          "_"
        ),
        weekdaysShort:
          "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (e) {
          return /بعد از ظهر/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [پیش] [ساعت] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          ss: "%d ثانیه",
          m: "یک دقیقه",
          mm: "%d دقیقه",
          h: "یک ساعت",
          hh: "%d ساعت",
          d: "یک روز",
          dd: "%d روز",
          M: "یک ماه",
          MM: "%d ماه",
          y: "یک سال",
          yy: "%d سال",
        },
        preparse: function (e) {
          return e
            .replace(/[۰-۹]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, a, i) {
        var s = "";
        switch (a) {
          case "s":
            return i ? "muutaman sekunnin" : "muutama sekunti";
          case "ss":
            s = i ? "sekunnin" : "sekuntia";
            break;
          case "m":
            return i ? "minuutin" : "minuutti";
          case "mm":
            s = i ? "minuutin" : "minuuttia";
            break;
          case "h":
            return i ? "tunnin" : "tunti";
          case "hh":
            s = i ? "tunnin" : "tuntia";
            break;
          case "d":
            return i ? "päivän" : "päivä";
          case "dd":
            s = i ? "päivän" : "päivää";
            break;
          case "M":
            return i ? "kuukauden" : "kuukausi";
          case "MM":
            s = i ? "kuukauden" : "kuukautta";
            break;
          case "y":
            return i ? "vuoden" : "vuosi";
          case "yy":
            s = i ? "vuoden" : "vuotta";
        }
        return (s =
          (function (e, t) {
            return e < 10 ? (t ? r[e] : n[e]) : e;
          })(e, i) +
          " " +
          s);
      }
      //! moment.js locale configuration
      var n =
          "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
            " "
          ),
        r = [
          "nolla",
          "yhden",
          "kahden",
          "kolmen",
          "neljän",
          "viiden",
          "kuuden",
          n[7],
          n[8],
          n[9],
        ];
      return e.defineLocale("fi", {
        months:
          "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
            "_"
          ),
        monthsShort:
          "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
            "_"
          ),
        weekdays:
          "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
            "_"
          ),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM[ta] YYYY",
          LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
          LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
          l: "D.M.YYYY",
          ll: "Do MMM YYYY",
          lll: "Do MMM YYYY, [klo] HH.mm",
          llll: "ddd, Do MMM YYYY, [klo] HH.mm",
        },
        calendar: {
          sameDay: "[tänään] [klo] LT",
          nextDay: "[huomenna] [klo] LT",
          nextWeek: "dddd [klo] LT",
          lastDay: "[eilen] [klo] LT",
          lastWeek: "[viime] dddd[na] [klo] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s päästä",
          past: "%s sitten",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("fil", {
        months:
          "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
            "_"
          ),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
          "_"
        ),
        weekdays:
          "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm",
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L",
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon",
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("fo", {
        months:
          "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split(
          "_"
        ),
        weekdays:
          "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
            "_"
          ),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D. MMMM, YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Í dag kl.] LT",
          nextDay: "[Í morgin kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[Í gjár kl.] LT",
          lastWeek: "[síðstu] dddd [kl] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "um %s",
          past: "%s síðani",
          s: "fá sekund",
          ss: "%d sekundir",
          m: "ein minuttur",
          mm: "%d minuttir",
          h: "ein tími",
          hh: "%d tímar",
          d: "ein dagur",
          dd: "%d dagar",
          M: "ein mánaður",
          MM: "%d mánaðir",
          y: "eitt ár",
          yy: "%d ár",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t =
          /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
        n = [
          /^janv/i,
          /^févr/i,
          /^mars/i,
          /^avr/i,
          /^mai/i,
          /^juin/i,
          /^juil/i,
          /^août/i,
          /^sept/i,
          /^oct/i,
          /^nov/i,
          /^déc/i,
        ];
      return e.defineLocale("fr", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        monthsRegex: t,
        monthsShortRegex: t,
        monthsStrictRegex:
          /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
        monthsShortStrictRegex:
          /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + (1 === e ? "er" : "");
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e");
          }
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("fr-ca", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case "M":
            case "Q":
            case "D":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e");
          }
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("fr-ch", {
        months:
          "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
            "_"
          ),
        monthsShort:
          "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split(
          "_"
        ),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
            default:
            case "M":
            case "Q":
            case "D":
            case "DDD":
            case "d":
              return e + (1 === e ? "er" : "e");
            case "w":
            case "W":
              return e + (1 === e ? "re" : "e");
          }
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t =
          "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
            "_"
          ),
        n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
      return e.defineLocale("fy", {
        months:
          "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
            "_"
          ),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split(
          "_"
        ),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[hjoed om] LT",
          nextDay: "[moarn om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[juster om] LT",
          lastWeek: "[ôfrûne] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "oer %s",
          past: "%s lyn",
          s: "in pear sekonden",
          ss: "%d sekonden",
          m: "ien minút",
          mm: "%d minuten",
          h: "ien oere",
          hh: "%d oeren",
          d: "ien dei",
          dd: "%d dagen",
          M: "ien moanne",
          MM: "%d moannen",
          y: "ien jier",
          yy: "%d jierren",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ga", {
        months: [
          "Eanáir",
          "Feabhra",
          "Márta",
          "Aibreán",
          "Bealtaine",
          "Meitheamh",
          "Iúil",
          "Lúnasa",
          "Meán Fómhair",
          "Deireadh Fómhair",
          "Samhain",
          "Nollaig",
        ],
        monthsShort: [
          "Ean",
          "Feabh",
          "Márt",
          "Aib",
          "Beal",
          "Meith",
          "Iúil",
          "Lún",
          "M.F.",
          "D.F.",
          "Samh",
          "Noll",
        ],
        monthsParseExact: !0,
        weekdays: [
          "Dé Domhnaigh",
          "Dé Luain",
          "Dé Máirt",
          "Dé Céadaoin",
          "Déardaoin",
          "Dé hAoine",
          "Dé Sathairn",
        ],
        weekdaysShort: [
          "Domh",
          "Luan",
          "Máirt",
          "Céad",
          "Déar",
          "Aoine",
          "Sath",
        ],
        weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Inniu ag] LT",
          nextDay: "[Amárach ag] LT",
          nextWeek: "dddd [ag] LT",
          lastDay: "[Inné ag] LT",
          lastWeek: "dddd [seo caite] [ag] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "i %s",
          past: "%s ó shin",
          s: "cúpla soicind",
          ss: "%d soicind",
          m: "nóiméad",
          mm: "%d nóiméad",
          h: "uair an chloig",
          hh: "%d uair an chloig",
          d: "lá",
          dd: "%d lá",
          M: "mí",
          MM: "%d míonna",
          y: "bliain",
          yy: "%d bliain",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("gd", {
        months: [
          "Am Faoilleach",
          "An Gearran",
          "Am Màrt",
          "An Giblean",
          "An Cèitean",
          "An t-Ògmhios",
          "An t-Iuchar",
          "An Lùnastal",
          "An t-Sultain",
          "An Dàmhair",
          "An t-Samhain",
          "An Dùbhlachd",
        ],
        monthsShort: [
          "Faoi",
          "Gear",
          "Màrt",
          "Gibl",
          "Cèit",
          "Ògmh",
          "Iuch",
          "Lùn",
          "Sult",
          "Dàmh",
          "Samh",
          "Dùbh",
        ],
        monthsParseExact: !0,
        weekdays: [
          "Didòmhnaich",
          "Diluain",
          "Dimàirt",
          "Diciadain",
          "Diardaoin",
          "Dihaoine",
          "Disathairne",
        ],
        weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[An-diugh aig] LT",
          nextDay: "[A-màireach aig] LT",
          nextWeek: "dddd [aig] LT",
          lastDay: "[An-dè aig] LT",
          lastWeek: "dddd [seo chaidh] [aig] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ann an %s",
          past: "bho chionn %s",
          s: "beagan diogan",
          ss: "%d diogan",
          m: "mionaid",
          mm: "%d mionaidean",
          h: "uair",
          hh: "%d uairean",
          d: "latha",
          dd: "%d latha",
          M: "mìos",
          MM: "%d mìosan",
          y: "bliadhna",
          yy: "%d bliadhna",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("gl", {
        months:
          "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
            "_"
          ),
        monthsShort:
          "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
        },
        calendar: {
          sameDay: function () {
            return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
          },
          nextDay: function () {
            return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
          },
          nextWeek: function () {
            return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
          },
          lastDay: function () {
            return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
          },
          lastWeek: function () {
            return (
              "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
            );
          },
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return 0 === e.indexOf("un") ? "n" + e : "en " + e;
          },
          past: "hai %s",
          s: "uns segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "unha hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un ano",
          yy: "%d anos",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        var a = {
          s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
          ss: [e + " सॅकंडांनी", e + " सॅकंड"],
          m: ["एका मिणटान", "एक मिनूट"],
          mm: [e + " मिणटांनी", e + " मिणटां"],
          h: ["एका वरान", "एक वर"],
          hh: [e + " वरांनी", e + " वरां"],
          d: ["एका दिसान", "एक दीस"],
          dd: [e + " दिसांनी", e + " दीस"],
          M: ["एका म्हयन्यान", "एक म्हयनो"],
          MM: [e + " म्हयन्यानी", e + " म्हयने"],
          y: ["एका वर्सान", "एक वर्स"],
          yy: [e + " वर्सांनी", e + " वर्सां"],
        };
        return r ? a[n][0] : a[n][1];
      }
      return e.defineLocale("gom-deva", {
        months: {
          standalone:
            "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
              "_"
            ),
          format:
            "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split(
              "_"
            ),
          isFormat: /MMMM(\s)+D[oD]?/,
        },
        monthsShort:
          "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split(
          "_"
        ),
        weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
        weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "A h:mm [वाजतां]",
          LTS: "A h:mm:ss [वाजतां]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [वाजतां]",
          LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
          llll: "ddd, D MMM YYYY, A h:mm [वाजतां]",
        },
        calendar: {
          sameDay: "[आयज] LT",
          nextDay: "[फाल्यां] LT",
          nextWeek: "[फुडलो] dddd[,] LT",
          lastDay: "[काल] LT",
          lastWeek: "[फाटलो] dddd[,] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s",
          past: "%s आदीं",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + "वेर";
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
            case "w":
            case "W":
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "राती" === t
              ? e < 4
                ? e
                : e + 12
              : "सकाळीं" === t
              ? e
              : "दनपारां" === t
              ? e > 12
                ? e
                : e + 12
              : "सांजे" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "राती"
            : e < 12
            ? "सकाळीं"
            : e < 16
            ? "दनपारां"
            : e < 20
            ? "सांजे"
            : "राती";
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        var a = {
          s: ["thoddea sekondamni", "thodde sekond"],
          ss: [e + " sekondamni", e + " sekond"],
          m: ["eka mintan", "ek minut"],
          mm: [e + " mintamni", e + " mintam"],
          h: ["eka voran", "ek vor"],
          hh: [e + " voramni", e + " voram"],
          d: ["eka disan", "ek dis"],
          dd: [e + " disamni", e + " dis"],
          M: ["eka mhoinean", "ek mhoino"],
          MM: [e + " mhoineamni", e + " mhoine"],
          y: ["eka vorsan", "ek voros"],
          yy: [e + " vorsamni", e + " vorsam"],
        };
        return r ? a[n][0] : a[n][1];
      }
      return e.defineLocale("gom-latn", {
        months: {
          standalone:
            "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
              "_"
            ),
          format:
            "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
              "_"
            ),
          isFormat: /MMMM(\s)+D[oD]?/,
        },
        monthsShort:
          "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split(
          "_"
        ),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "A h:mm [vazta]",
          LTS: "A h:mm:ss [vazta]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [vazta]",
          LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
          llll: "ddd, D MMM YYYY, A h:mm [vazta]",
        },
        calendar: {
          sameDay: "[Aiz] LT",
          nextDay: "[Faleam] LT",
          nextWeek: "[Fuddlo] dddd[,] LT",
          lastDay: "[Kal] LT",
          lastWeek: "[Fattlo] dddd[,] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s",
          past: "%s adim",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function (e, t) {
          switch (t) {
            case "D":
              return e + "er";
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
            case "w":
            case "W":
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /rati|sokallim|donparam|sanje/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "rati" === t
              ? e < 4
                ? e
                : e + 12
              : "sokallim" === t
              ? e
              : "donparam" === t
              ? e > 12
                ? e
                : e + 12
              : "sanje" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "rati"
            : e < 12
            ? "sokallim"
            : e < 16
            ? "donparam"
            : e < 20
            ? "sanje"
            : "rati";
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "૧",
          2: "૨",
          3: "૩",
          4: "૪",
          5: "૫",
          6: "૬",
          7: "૭",
          8: "૮",
          9: "૯",
          0: "૦",
        },
        n = {
          "૧": "1",
          "૨": "2",
          "૩": "3",
          "૪": "4",
          "૫": "5",
          "૬": "6",
          "૭": "7",
          "૮": "8",
          "૯": "9",
          "૦": "0",
        };
      return e.defineLocale("gu", {
        months:
          "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
            "_"
          ),
        monthsShort:
          "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split(
          "_"
        ),
        weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
        weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
        longDateFormat: {
          LT: "A h:mm વાગ્યે",
          LTS: "A h:mm:ss વાગ્યે",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm વાગ્યે",
          LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
        },
        calendar: {
          sameDay: "[આજ] LT",
          nextDay: "[કાલે] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ગઇકાલે] LT",
          lastWeek: "[પાછલા] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s મા",
          past: "%s પહેલા",
          s: "અમુક પળો",
          ss: "%d સેકંડ",
          m: "એક મિનિટ",
          mm: "%d મિનિટ",
          h: "એક કલાક",
          hh: "%d કલાક",
          d: "એક દિવસ",
          dd: "%d દિવસ",
          M: "એક મહિનો",
          MM: "%d મહિનો",
          y: "એક વર્ષ",
          yy: "%d વર્ષ",
        },
        preparse: function (e) {
          return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "રાત" === t
              ? e < 4
                ? e
                : e + 12
              : "સવાર" === t
              ? e
              : "બપોર" === t
              ? e >= 10
                ? e
                : e + 12
              : "સાંજ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "રાત"
            : e < 10
            ? "સવાર"
            : e < 17
            ? "બપોર"
            : e < 20
            ? "સાંજ"
            : "રાત";
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("he", {
        months:
          "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
            "_"
          ),
        monthsShort:
          "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
            "_"
          ),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [ב]MMMM YYYY",
          LLL: "D [ב]MMMM YYYY HH:mm",
          LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
          l: "D/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[היום ב־]LT",
          nextDay: "[מחר ב־]LT",
          nextWeek: "dddd [בשעה] LT",
          lastDay: "[אתמול ב־]LT",
          lastWeek: "[ביום] dddd [האחרון בשעה] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "בעוד %s",
          past: "לפני %s",
          s: "מספר שניות",
          ss: "%d שניות",
          m: "דקה",
          mm: "%d דקות",
          h: "שעה",
          hh: function (e) {
            return 2 === e ? "שעתיים" : e + " שעות";
          },
          d: "יום",
          dd: function (e) {
            return 2 === e ? "יומיים" : e + " ימים";
          },
          M: "חודש",
          MM: function (e) {
            return 2 === e ? "חודשיים" : e + " חודשים";
          },
          y: "שנה",
          yy: function (e) {
            return 2 === e
              ? "שנתיים"
              : e % 10 == 0 && 10 !== e
              ? e + " שנה"
              : e + " שנים";
          },
        },
        meridiemParse:
          /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function (e) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 5
            ? "לפנות בוקר"
            : e < 10
            ? "בבוקר"
            : e < 12
            ? n
              ? 'לפנה"צ'
              : "לפני הצהריים"
            : e < 18
            ? n
              ? 'אחה"צ'
              : "אחרי הצהריים"
            : "בערב";
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        n = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        };
      return e.defineLocale("hi", {
        months:
          "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
            "_"
          ),
        monthsShort:
          "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
          "_"
        ),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm बजे",
          LTS: "A h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[कल] LT",
          nextWeek: "dddd, LT",
          lastDay: "[कल] LT",
          lastWeek: "[पिछले] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s में",
          past: "%s पहले",
          s: "कुछ ही क्षण",
          ss: "%d सेकंड",
          m: "एक मिनट",
          mm: "%d मिनट",
          h: "एक घंटा",
          hh: "%d घंटे",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महीने",
          MM: "%d महीने",
          y: "एक वर्ष",
          yy: "%d वर्ष",
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "रात" === t
              ? e < 4
                ? e
                : e + 12
              : "सुबह" === t
              ? e
              : "दोपहर" === t
              ? e >= 10
                ? e
                : e + 12
              : "शाम" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "रात"
            : e < 10
            ? "सुबह"
            : e < 17
            ? "दोपहर"
            : e < 20
            ? "शाम"
            : "रात";
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n) {
        var r = e + " ";
        switch (n) {
          case "ss":
            return (r +=
              1 === e
                ? "sekunda"
                : 2 === e || 3 === e || 4 === e
                ? "sekunde"
                : "sekundi");
          case "m":
            return t ? "jedna minuta" : "jedne minute";
          case "mm":
            return (r +=
              1 === e
                ? "minuta"
                : 2 === e || 3 === e || 4 === e
                ? "minute"
                : "minuta");
          case "h":
            return t ? "jedan sat" : "jednog sata";
          case "hh":
            return (r +=
              1 === e
                ? "sat"
                : 2 === e || 3 === e || 4 === e
                ? "sata"
                : "sati");
          case "dd":
            return (r += 1 === e ? "dan" : "dana");
          case "MM":
            return (r +=
              1 === e
                ? "mjesec"
                : 2 === e || 3 === e || 4 === e
                ? "mjeseca"
                : "mjeseci");
          case "yy":
            return (r +=
              1 === e
                ? "godina"
                : 2 === e || 3 === e || 4 === e
                ? "godine"
                : "godina");
        }
      }
      return e.defineLocale("hr", {
        months: {
          format:
            "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
              "_"
            ),
          standalone:
            "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
              "_"
            ),
        },
        monthsShort:
          "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM YYYY",
          LLL: "Do MMMM YYYY H:mm",
          LLLL: "dddd, Do MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[prošlu] [nedjelju] [u] LT";
              case 3:
                return "[prošlu] [srijedu] [u] LT";
              case 6:
                return "[prošle] [subote] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prošli] dddd [u] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: "dan",
          dd: t,
          M: "mjesec",
          MM: t,
          y: "godinu",
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, n, r) {
        var a = e;
        switch (n) {
          case "s":
            return r || t ? "néhány másodperc" : "néhány másodperce";
          case "ss":
            return a + (r || t) ? " másodperc" : " másodperce";
          case "m":
            return "egy" + (r || t ? " perc" : " perce");
          case "mm":
            return a + (r || t ? " perc" : " perce");
          case "h":
            return "egy" + (r || t ? " óra" : " órája");
          case "hh":
            return a + (r || t ? " óra" : " órája");
          case "d":
            return "egy" + (r || t ? " nap" : " napja");
          case "dd":
            return a + (r || t ? " nap" : " napja");
          case "M":
            return "egy" + (r || t ? " hónap" : " hónapja");
          case "MM":
            return a + (r || t ? " hónap" : " hónapja");
          case "y":
            return "egy" + (r || t ? " év" : " éve");
          case "yy":
            return a + (r || t ? " év" : " éve");
        }
        return "";
      }
      function n(e) {
        return (e ? "" : "[múlt] ") + "[" + r[this.day()] + "] LT[-kor]";
      }
      //! moment.js locale configuration
      var r =
        "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
          " "
        );
      return e.defineLocale("hu", {
        months:
          "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split(
          "_"
        ),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split(
          "_"
        ),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY. MMMM D.",
          LLL: "YYYY. MMMM D. H:mm",
          LLLL: "YYYY. MMMM D., dddd H:mm",
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
          return "u" === e.charAt(1).toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU";
        },
        calendar: {
          sameDay: "[ma] LT[-kor]",
          nextDay: "[holnap] LT[-kor]",
          nextWeek: function () {
            return n.call(this, !0);
          },
          lastDay: "[tegnap] LT[-kor]",
          lastWeek: function () {
            return n.call(this, !1);
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "%s múlva",
          past: "%s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("hy-am", {
        months: {
          format:
            "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
              "_"
            ),
          standalone:
            "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
              "_"
            ),
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split(
          "_"
        ),
        weekdays:
          "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
            "_"
          ),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY թ.",
          LLL: "D MMMM YYYY թ., HH:mm",
          LLLL: "dddd, D MMMM YYYY թ., HH:mm",
        },
        calendar: {
          sameDay: "[այսօր] LT",
          nextDay: "[վաղը] LT",
          lastDay: "[երեկ] LT",
          nextWeek: function () {
            return "dddd [օրը ժամը] LT";
          },
          lastWeek: function () {
            return "[անցած] dddd [օրը ժամը] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "%s հետո",
          past: "%s առաջ",
          s: "մի քանի վայրկյան",
          ss: "%d վայրկյան",
          m: "րոպե",
          mm: "%d րոպե",
          h: "ժամ",
          hh: "%d ժամ",
          d: "օր",
          dd: "%d օր",
          M: "ամիս",
          MM: "%d ամիս",
          y: "տարի",
          yy: "%d տարի",
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e);
        },
        meridiem: function (e) {
          return e < 4
            ? "գիշերվա"
            : e < 12
            ? "առավոտվա"
            : e < 17
            ? "ցերեկվա"
            : "երեկոյան";
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
          switch (t) {
            case "DDD":
            case "w":
            case "W":
            case "DDDo":
              return 1 === e ? e + "-ին" : e + "-րդ";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("id", {
        months:
          "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "siang" === t
              ? e >= 11
                ? e
                : e + 12
              : "sore" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Besok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kemarin pukul] LT",
          lastWeek: "dddd [lalu pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lalu",
          s: "beberapa detik",
          ss: "%d detik",
          m: "semenit",
          mm: "%d menit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e) {
        return e % 100 == 11 || e % 10 != 1;
      }
      function n(e, n, r, a) {
        var i = e + " ";
        switch (r) {
          case "s":
            return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
          case "ss":
            return t(e)
              ? i + (n || a ? "sekúndur" : "sekúndum")
              : i + "sekúnda";
          case "m":
            return n ? "mínúta" : "mínútu";
          case "mm":
            return t(e)
              ? i + (n || a ? "mínútur" : "mínútum")
              : n
              ? i + "mínúta"
              : i + "mínútu";
          case "hh":
            return t(e)
              ? i + (n || a ? "klukkustundir" : "klukkustundum")
              : i + "klukkustund";
          case "d":
            return n ? "dagur" : a ? "dag" : "degi";
          case "dd":
            return t(e)
              ? n
                ? i + "dagar"
                : i + (a ? "daga" : "dögum")
              : n
              ? i + "dagur"
              : i + (a ? "dag" : "degi");
          case "M":
            return n ? "mánuður" : a ? "mánuð" : "mánuði";
          case "MM":
            return t(e)
              ? n
                ? i + "mánuðir"
                : i + (a ? "mánuði" : "mánuðum")
              : n
              ? i + "mánuður"
              : i + (a ? "mánuð" : "mánuði");
          case "y":
            return n || a ? "ár" : "ári";
          case "yy":
            return t(e)
              ? i + (n || a ? "ár" : "árum")
              : i + (n || a ? "ár" : "ári");
        }
      }
      return e.defineLocale("is", {
        months:
          "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split(
          "_"
        ),
        weekdays:
          "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
            "_"
          ),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
        },
        calendar: {
          sameDay: "[í dag kl.] LT",
          nextDay: "[á morgun kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[í gær kl.] LT",
          lastWeek: "[síðasta] dddd [kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "eftir %s",
          past: "fyrir %s síðan",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: "klukkustund",
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("it", {
        months:
          "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
            "_"
          ),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
          "_"
        ),
        weekdays:
          "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: function () {
            return (
              "[Oggi a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          nextDay: function () {
            return (
              "[Domani a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          nextWeek: function () {
            return (
              "dddd [a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          lastDay: function () {
            return (
              "[Ieri a" +
              (this.hours() > 1 ? "lle " : 0 === this.hours() ? " " : "ll'") +
              "]LT"
            );
          },
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return (
                  "[La scorsa] dddd [a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              default:
                return (
                  "[Lo scorso] dddd [a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "tra %s",
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("it-ch", {
        months:
          "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
            "_"
          ),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split(
          "_"
        ),
        weekdays:
          "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Oggi alle] LT",
          nextDay: "[Domani alle] LT",
          nextWeek: "dddd [alle] LT",
          lastDay: "[Ieri alle] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[la scorsa] dddd [alle] LT";
              default:
                return "[lo scorso] dddd [alle] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
          },
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ja", {
        eras: [
          {
            since: "2019-05-01",
            offset: 1,
            name: "令和",
            narrow: "㋿",
            abbr: "R",
          },
          {
            since: "1989-01-08",
            until: "2019-04-30",
            offset: 1,
            name: "平成",
            narrow: "㍻",
            abbr: "H",
          },
          {
            since: "1926-12-25",
            until: "1989-01-07",
            offset: 1,
            name: "昭和",
            narrow: "㍼",
            abbr: "S",
          },
          {
            since: "1912-07-30",
            until: "1926-12-24",
            offset: 1,
            name: "大正",
            narrow: "㍽",
            abbr: "T",
          },
          {
            since: "1873-01-01",
            until: "1912-07-29",
            offset: 6,
            name: "明治",
            narrow: "㍾",
            abbr: "M",
          },
          {
            since: "0001-01-01",
            until: "1873-12-31",
            offset: 1,
            name: "西暦",
            narrow: "AD",
            abbr: "AD",
          },
          {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "紀元前",
            narrow: "BC",
            abbr: "BC",
          },
        ],
        eraYearOrdinalRegex: /(元|\d+)年/,
        eraYearOrdinalParse: function (e, t) {
          return "元" === t[1] ? 1 : parseInt(t[1] || e, 10);
        },
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日 dddd HH:mm",
          l: "YYYY/MM/DD",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日(ddd) HH:mm",
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
          return "午後" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "午前" : "午後";
        },
        calendar: {
          sameDay: "[今日] LT",
          nextDay: "[明日] LT",
          nextWeek: function (e) {
            return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
          },
          lastDay: "[昨日] LT",
          lastWeek: function (e) {
            return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT";
          },
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function (e, t) {
          switch (t) {
            case "y":
              return 1 === e ? "元年" : e + "年";
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "数秒",
          ss: "%d秒",
          m: "1分",
          mm: "%d分",
          h: "1時間",
          hh: "%d時間",
          d: "1日",
          dd: "%d日",
          M: "1ヶ月",
          MM: "%dヶ月",
          y: "1年",
          yy: "%d年",
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("jv", {
        months:
          "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split(
          "_"
        ),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "enjing" === t
              ? e
              : "siyang" === t
              ? e >= 11
                ? e
                : e + 12
              : "sonten" === t || "ndalu" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11
            ? "enjing"
            : e < 15
            ? "siyang"
            : e < 19
            ? "sonten"
            : "ndalu";
        },
        calendar: {
          sameDay: "[Dinten puniko pukul] LT",
          nextDay: "[Mbenjang pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kala wingi pukul] LT",
          lastWeek: "dddd [kepengker pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "wonten ing %s",
          past: "%s ingkang kepengker",
          s: "sawetawis detik",
          ss: "%d detik",
          m: "setunggal menit",
          mm: "%d menit",
          h: "setunggal jam",
          hh: "%d jam",
          d: "sedinten",
          dd: "%d dinten",
          M: "sewulan",
          MM: "%d wulan",
          y: "setaun",
          yy: "%d taun",
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ka", {
        months:
          "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
            "_"
          ),
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split(
          "_"
        ),
        weekdays: {
          standalone:
            "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
              "_"
            ),
          format:
            "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
              "_"
            ),
          isFormat: /(წინა|შემდეგ)/,
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[დღეს] LT[-ზე]",
          nextDay: "[ხვალ] LT[-ზე]",
          lastDay: "[გუშინ] LT[-ზე]",
          nextWeek: "[შემდეგ] dddd LT[-ზე]",
          lastWeek: "[წინა] dddd LT-ზე",
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            return e.replace(
              /(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,
              function (e, t, n) {
                return "ი" === n ? t + "ში" : t + n + "ში";
              }
            );
          },
          past: function (e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
              ? e.replace(/(ი|ე)$/, "ის წინ")
              : /წელი/.test(e)
              ? e.replace(/წელი$/, "წლის წინ")
              : e;
          },
          s: "რამდენიმე წამი",
          ss: "%d წამი",
          m: "წუთი",
          mm: "%d წუთი",
          h: "საათი",
          hh: "%d საათი",
          d: "დღე",
          dd: "%d დღე",
          M: "თვე",
          MM: "%d თვე",
          y: "წელი",
          yy: "%d წელი",
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
          return 0 === e
            ? e
            : 1 === e
            ? e + "-ლი"
            : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
            ? "მე-" + e
            : e + "-ე";
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші",
      };
      return e.defineLocale("kk", {
        months:
          "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
            "_"
          ),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split(
          "_"
        ),
        weekdays:
          "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Бүгін сағат] LT",
          nextDay: "[Ертең сағат] LT",
          nextWeek: "dddd [сағат] LT",
          lastDay: "[Кеше сағат] LT",
          lastWeek: "[Өткен аптаның] dddd [сағат] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ішінде",
          past: "%s бұрын",
          s: "бірнеше секунд",
          ss: "%d секунд",
          m: "бір минут",
          mm: "%d минут",
          h: "бір сағат",
          hh: "%d сағат",
          d: "бір күн",
          dd: "%d күн",
          M: "бір ай",
          MM: "%d ай",
          y: "бір жыл",
          yy: "%d жыл",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "១",
          2: "២",
          3: "៣",
          4: "៤",
          5: "៥",
          6: "៦",
          7: "៧",
          8: "៨",
          9: "៩",
          0: "០",
        },
        n = {
          "១": "1",
          "២": "2",
          "៣": "3",
          "៤": "4",
          "៥": "5",
          "៦": "6",
          "៧": "7",
          "៨": "8",
          "៩": "9",
          "០": "0",
        };
      return e.defineLocale("km", {
        months:
          "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
            "_"
          ),
        monthsShort:
          "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
            "_"
          ),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (e) {
          return "ល្ងាច" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ព្រឹក" : "ល្ងាច";
        },
        calendar: {
          sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
          nextDay: "[ស្អែក ម៉ោង] LT",
          nextWeek: "dddd [ម៉ោង] LT",
          lastDay: "[ម្សិលមិញ ម៉ោង] LT",
          lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sទៀត",
          past: "%sមុន",
          s: "ប៉ុន្មានវិនាទី",
          ss: "%d វិនាទី",
          m: "មួយនាទី",
          mm: "%d នាទី",
          h: "មួយម៉ោង",
          hh: "%d ម៉ោង",
          d: "មួយថ្ងៃ",
          dd: "%d ថ្ងៃ",
          M: "មួយខែ",
          MM: "%d ខែ",
          y: "មួយឆ្នាំ",
          yy: "%d ឆ្នាំ",
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: "ទី%d",
        preparse: function (e) {
          return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "೧",
          2: "೨",
          3: "೩",
          4: "೪",
          5: "೫",
          6: "೬",
          7: "೭",
          8: "೮",
          9: "೯",
          0: "೦",
        },
        n = {
          "೧": "1",
          "೨": "2",
          "೩": "3",
          "೪": "4",
          "೫": "5",
          "೬": "6",
          "೭": "7",
          "೮": "8",
          "೯": "9",
          "೦": "0",
        };
      return e.defineLocale("kn", {
        months:
          "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
            "_"
          ),
        monthsShort:
          "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
        weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
        weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
          sameDay: "[ಇಂದು] LT",
          nextDay: "[ನಾಳೆ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ನಿನ್ನೆ] LT",
          lastWeek: "[ಕೊನೆಯ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ನಂತರ",
          past: "%s ಹಿಂದೆ",
          s: "ಕೆಲವು ಕ್ಷಣಗಳು",
          ss: "%d ಸೆಕೆಂಡುಗಳು",
          m: "ಒಂದು ನಿಮಿಷ",
          mm: "%d ನಿಮಿಷ",
          h: "ಒಂದು ಗಂಟೆ",
          hh: "%d ಗಂಟೆ",
          d: "ಒಂದು ದಿನ",
          dd: "%d ದಿನ",
          M: "ಒಂದು ತಿಂಗಳು",
          MM: "%d ತಿಂಗಳು",
          y: "ಒಂದು ವರ್ಷ",
          yy: "%d ವರ್ಷ",
        },
        preparse: function (e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "ರಾತ್ರಿ" === t
              ? e < 4
                ? e
                : e + 12
              : "ಬೆಳಿಗ್ಗೆ" === t
              ? e
              : "ಮಧ್ಯಾಹ್ನ" === t
              ? e >= 10
                ? e
                : e + 12
              : "ಸಂಜೆ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "ರಾತ್ರಿ"
            : e < 10
            ? "ಬೆಳಿಗ್ಗೆ"
            : e < 17
            ? "ಮಧ್ಯಾಹ್ನ"
            : e < 20
            ? "ಸಂಜೆ"
            : "ರಾತ್ರಿ";
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function (e) {
          return e + "ನೇ";
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
          "_"
        ),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY년 MMMM D일",
          LLL: "YYYY년 MMMM D일 A h:mm",
          LLLL: "YYYY년 MMMM D일 dddd A h:mm",
          l: "YYYY.MM.DD.",
          ll: "YYYY년 MMMM D일",
          lll: "YYYY년 MMMM D일 A h:mm",
          llll: "YYYY년 MMMM D일 dddd A h:mm",
        },
        calendar: {
          sameDay: "오늘 LT",
          nextDay: "내일 LT",
          nextWeek: "dddd LT",
          lastDay: "어제 LT",
          lastWeek: "지난주 dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇 초",
          ss: "%d초",
          m: "1분",
          mm: "%d분",
          h: "한 시간",
          hh: "%d시간",
          d: "하루",
          dd: "%d일",
          M: "한 달",
          MM: "%d달",
          y: "일 년",
          yy: "%d년",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "일";
            case "M":
              return e + "월";
            case "w":
            case "W":
              return e + "주";
            default:
              return e;
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function (e) {
          return "오후" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "오전" : "오후";
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "١",
          2: "٢",
          3: "٣",
          4: "٤",
          5: "٥",
          6: "٦",
          7: "٧",
          8: "٨",
          9: "٩",
          0: "٠",
        },
        n = {
          "١": "1",
          "٢": "2",
          "٣": "3",
          "٤": "4",
          "٥": "5",
          "٦": "6",
          "٧": "7",
          "٨": "8",
          "٩": "9",
          "٠": "0",
        },
        r = [
          "کانونی دووەم",
          "شوبات",
          "ئازار",
          "نیسان",
          "ئایار",
          "حوزەیران",
          "تەمموز",
          "ئاب",
          "ئەیلوول",
          "تشرینی یەكەم",
          "تشرینی دووەم",
          "كانونی یەکەم",
        ];
      return e.defineLocale("ku", {
        months: r,
        monthsShort: r,
        weekdays:
          "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
            "_"
          ),
        weekdaysShort:
          "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function (e) {
          return /ئێواره‌/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "به‌یانی" : "ئێواره‌";
        },
        calendar: {
          sameDay: "[ئه‌مرۆ كاتژمێر] LT",
          nextDay: "[به‌یانی كاتژمێر] LT",
          nextWeek: "dddd [كاتژمێر] LT",
          lastDay: "[دوێنێ كاتژمێر] LT",
          lastWeek: "dddd [كاتژمێر] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "له‌ %s",
          past: "%s",
          s: "چه‌ند چركه‌یه‌ك",
          ss: "چركه‌ %d",
          m: "یه‌ك خوله‌ك",
          mm: "%d خوله‌ك",
          h: "یه‌ك كاتژمێر",
          hh: "%d كاتژمێر",
          d: "یه‌ك ڕۆژ",
          dd: "%d ڕۆژ",
          M: "یه‌ك مانگ",
          MM: "%d مانگ",
          y: "یه‌ك ساڵ",
          yy: "%d ساڵ",
        },
        preparse: function (e) {
          return e
            .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
              return n[e];
            })
            .replace(/،/g, ",");
        },
        postformat: function (e) {
          return e
            .replace(/\d/g, function (e) {
              return t[e];
            })
            .replace(/,/g, "،");
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү",
      };
      return e.defineLocale("ky", {
        months:
          "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
            "_"
          ),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split(
          "_"
        ),
        weekdays:
          "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Бүгүн саат] LT",
          nextDay: "[Эртең саат] LT",
          nextWeek: "dddd [саат] LT",
          lastDay: "[Кечээ саат] LT",
          lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ичинде",
          past: "%s мурун",
          s: "бирнече секунд",
          ss: "%d секунд",
          m: "бир мүнөт",
          mm: "%d мүнөт",
          h: "бир саат",
          hh: "%d саат",
          d: "бир күн",
          dd: "%d күн",
          M: "бир ай",
          MM: "%d ай",
          y: "бир жыл",
          yy: "%d жыл",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        var a = {
          m: ["eng Minutt", "enger Minutt"],
          h: ["eng Stonn", "enger Stonn"],
          d: ["een Dag", "engem Dag"],
          M: ["ee Mount", "engem Mount"],
          y: ["ee Joer", "engem Joer"],
        };
        return t ? a[n][0] : a[n][1];
      }
      function n(e) {
        if (((e = parseInt(e, 10)), isNaN(e))) return !1;
        if (e < 0) return !0;
        if (e < 10) return 4 <= e && e <= 7;
        if (e < 100) {
          var t = e % 10;
          return n(0 === t ? e / 10 : t);
        }
        if (e < 1e4) {
          for (; e >= 10; ) e /= 10;
          return n(e);
        }
        return (e /= 1e3), n(e);
      }
      return e.defineLocale("lb", {
        months:
          "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
            "_"
          ),
        monthsShort:
          "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
            "_"
          ),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm [Auer]",
          LTS: "H:mm:ss [Auer]",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm [Auer]",
          LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
        },
        calendar: {
          sameDay: "[Haut um] LT",
          sameElse: "L",
          nextDay: "[Muer um] LT",
          nextWeek: "dddd [um] LT",
          lastDay: "[Gëschter um] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 2:
              case 4:
                return "[Leschten] dddd [um] LT";
              default:
                return "[Leschte] dddd [um] LT";
            }
          },
        },
        relativeTime: {
          future: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
          },
          past: function (e) {
            return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e;
          },
          s: "e puer Sekonnen",
          ss: "%d Sekonnen",
          m: t,
          mm: "%d Minutten",
          h: t,
          hh: "%d Stonnen",
          d: t,
          dd: "%d Deeg",
          M: t,
          MM: "%d Méint",
          y: t,
          yy: "%d Joer",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("lo", {
        months:
          "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
            "_"
          ),
        monthsShort:
          "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
            "_"
          ),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "ວັນdddd D MMMM YYYY HH:mm",
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
          return "ຕອນແລງ" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
        },
        calendar: {
          sameDay: "[ມື້ນີ້ເວລາ] LT",
          nextDay: "[ມື້ອື່ນເວລາ] LT",
          nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
          lastDay: "[ມື້ວານນີ້ເວລາ] LT",
          lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ອີກ %s",
          past: "%sຜ່ານມາ",
          s: "ບໍ່ເທົ່າໃດວິນາທີ",
          ss: "%d ວິນາທີ",
          m: "1 ນາທີ",
          mm: "%d ນາທີ",
          h: "1 ຊົ່ວໂມງ",
          hh: "%d ຊົ່ວໂມງ",
          d: "1 ມື້",
          dd: "%d ມື້",
          M: "1 ເດືອນ",
          MM: "%d ເດືອນ",
          y: "1 ປີ",
          yy: "%d ປີ",
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
          return "ທີ່" + e;
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, n, a) {
        return t ? r(n)[0] : a ? r(n)[1] : r(n)[2];
      }
      function n(e) {
        return e % 10 == 0 || (e > 10 && e < 20);
      }
      function r(e) {
        return i[e].split("_");
      }
      function a(e, a, i, s) {
        var o = e + " ";
        return 1 === e
          ? o + t(0, a, i[0], s)
          : a
          ? o + (n(e) ? r(i)[1] : r(i)[0])
          : s
          ? o + r(i)[1]
          : o + (n(e) ? r(i)[1] : r(i)[2]);
      }
      //! moment.js locale configuration
      var i = {
        ss: "sekundė_sekundžių_sekundes",
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus",
      };
      return e.defineLocale("lt", {
        months: {
          format:
            "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
              "_"
            ),
          standalone:
            "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
              "_"
            ),
          isFormat:
            /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split(
          "_"
        ),
        weekdays: {
          format:
            "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
              "_"
            ),
          standalone:
            "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
              "_"
            ),
          isFormat: /dddd HH:mm/,
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY [m.] MMMM D [d.]",
          LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
          l: "YYYY-MM-DD",
          ll: "YYYY [m.] MMMM D [d.]",
          lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
        },
        calendar: {
          sameDay: "[Šiandien] LT",
          nextDay: "[Rytoj] LT",
          nextWeek: "dddd LT",
          lastDay: "[Vakar] LT",
          lastWeek: "[Praėjusį] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "po %s",
          past: "prieš %s",
          s: function (e, t, n, r) {
            return t
              ? "kelios sekundės"
              : r
              ? "kelių sekundžių"
              : "kelias sekundes";
          },
          ss: a,
          m: t,
          mm: a,
          h: t,
          hh: a,
          d: t,
          dd: a,
          M: t,
          MM: a,
          y: t,
          yy: a,
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
          return e + "-oji";
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, n) {
        return n
          ? t % 10 == 1 && t % 100 != 11
            ? e[2]
            : e[3]
          : t % 10 == 1 && t % 100 != 11
          ? e[0]
          : e[1];
      }
      function n(e, n, r) {
        return e + " " + t(a[r], e, n);
      }
      function r(e, n, r) {
        return t(a[r], e, n);
      }
      //! moment.js locale configuration
      var a = {
        ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_"),
      };
      return e.defineLocale("lv", {
        months:
          "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays:
          "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
            "_"
          ),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY.",
          LL: "YYYY. [gada] D. MMMM",
          LLL: "YYYY. [gada] D. MMMM, HH:mm",
          LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
        },
        calendar: {
          sameDay: "[Šodien pulksten] LT",
          nextDay: "[Rīt pulksten] LT",
          nextWeek: "dddd [pulksten] LT",
          lastDay: "[Vakar pulksten] LT",
          lastWeek: "[Pagājušā] dddd [pulksten] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "pēc %s",
          past: "pirms %s",
          s: function (e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm";
          },
          ss: n,
          m: r,
          mm: n,
          h: r,
          hh: n,
          d: r,
          dd: n,
          M: r,
          MM: n,
          y: r,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        words: {
          ss: ["sekund", "sekunda", "sekundi"],
          m: ["jedan minut", "jednog minuta"],
          mm: ["minut", "minuta", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mjesec", "mjeseca", "mjeseci"],
          yy: ["godina", "godine", "godina"],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, r) {
          var a = t.words[r];
          return 1 === r.length
            ? n
              ? a[0]
              : a[1]
            : e + " " + t.correctGrammaticalCase(e, a);
        },
      };
      return e.defineLocale("me", {
        months:
          "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays:
          "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
            "_"
          ),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sjutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedjelju] [u] LT";
              case 3:
                return "[u] [srijedu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[juče u] LT",
          lastWeek: function () {
            return [
              "[prošle] [nedjelje] [u] LT",
              "[prošlog] [ponedjeljka] [u] LT",
              "[prošlog] [utorka] [u] LT",
              "[prošle] [srijede] [u] LT",
              "[prošlog] [četvrtka] [u] LT",
              "[prošlog] [petka] [u] LT",
              "[prošle] [subote] [u] LT",
            ][this.day()];
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "nekoliko sekundi",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "dan",
          dd: t.translate,
          M: "mjesec",
          MM: t.translate,
          y: "godinu",
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("mi", {
        months:
          "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
            "_"
          ),
        monthsShort:
          "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
            "_"
          ),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [i] HH:mm",
          LLLL: "dddd, D MMMM YYYY [i] HH:mm",
        },
        calendar: {
          sameDay: "[i teie mahana, i] LT",
          nextDay: "[apopo i] LT",
          nextWeek: "dddd [i] LT",
          lastDay: "[inanahi i] LT",
          lastWeek: "dddd [whakamutunga i] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "i roto i %s",
          past: "%s i mua",
          s: "te hēkona ruarua",
          ss: "%d hēkona",
          m: "he meneti",
          mm: "%d meneti",
          h: "te haora",
          hh: "%d haora",
          d: "he ra",
          dd: "%d ra",
          M: "he marama",
          MM: "%d marama",
          y: "he tau",
          yy: "%d tau",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("mk", {
        months:
          "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
            "_"
          ),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split(
          "_"
        ),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
          "_"
        ),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[Денес во] LT",
          nextDay: "[Утре во] LT",
          nextWeek: "[Во] dddd [во] LT",
          lastDay: "[Вчера во] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[Изминатата] dddd [во] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[Изминатиот] dddd [во] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "за %s",
          past: "пред %s",
          s: "неколку секунди",
          ss: "%d секунди",
          m: "една минута",
          mm: "%d минути",
          h: "еден час",
          hh: "%d часа",
          d: "еден ден",
          dd: "%d дена",
          M: "еден месец",
          MM: "%d месеци",
          y: "една година",
          yy: "%d години",
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10,
            n = e % 100;
          return 0 === e
            ? e + "-ев"
            : 0 === n
            ? e + "-ен"
            : n > 10 && n < 20
            ? e + "-ти"
            : 1 === t
            ? e + "-ви"
            : 2 === t
            ? e + "-ри"
            : 7 === t || 8 === t
            ? e + "-ми"
            : e + "-ти";
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ml", {
        months:
          "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
            "_"
          ),
        monthsShort:
          "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
            "_"
          ),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
          LT: "A h:mm -നു",
          LTS: "A h:mm:ss -നു",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm -നു",
          LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
        },
        calendar: {
          sameDay: "[ഇന്ന്] LT",
          nextDay: "[നാളെ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ഇന്നലെ] LT",
          lastWeek: "[കഴിഞ്ഞ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s കഴിഞ്ഞ്",
          past: "%s മുൻപ്",
          s: "അൽപ നിമിഷങ്ങൾ",
          ss: "%d സെക്കൻഡ്",
          m: "ഒരു മിനിറ്റ്",
          mm: "%d മിനിറ്റ്",
          h: "ഒരു മണിക്കൂർ",
          hh: "%d മണിക്കൂർ",
          d: "ഒരു ദിവസം",
          dd: "%d ദിവസം",
          M: "ഒരു മാസം",
          MM: "%d മാസം",
          y: "ഒരു വർഷം",
          yy: "%d വർഷം",
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            ("രാത്രി" === t && e >= 4) ||
            "ഉച്ച കഴിഞ്ഞ്" === t ||
            "വൈകുന്നേരം" === t
              ? e + 12
              : e
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "രാത്രി"
            : e < 12
            ? "രാവിലെ"
            : e < 17
            ? "ഉച്ച കഴിഞ്ഞ്"
            : e < 20
            ? "വൈകുന്നേരം"
            : "രാത്രി";
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        switch (n) {
          case "s":
            return t ? "хэдхэн секунд" : "хэдхэн секундын";
          case "ss":
            return e + (t ? " секунд" : " секундын");
          case "m":
          case "mm":
            return e + (t ? " минут" : " минутын");
          case "h":
          case "hh":
            return e + (t ? " цаг" : " цагийн");
          case "d":
          case "dd":
            return e + (t ? " өдөр" : " өдрийн");
          case "M":
          case "MM":
            return e + (t ? " сар" : " сарын");
          case "y":
          case "yy":
            return e + (t ? " жил" : " жилийн");
          default:
            return e;
        }
      }
      return e.defineLocale("mn", {
        months:
          "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
            "_"
          ),
        monthsShort:
          "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
        weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
        weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY оны MMMMын D",
          LLL: "YYYY оны MMMMын D HH:mm",
          LLLL: "dddd, YYYY оны MMMMын D HH:mm",
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (e) {
          return "ҮХ" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ҮӨ" : "ҮХ";
        },
        calendar: {
          sameDay: "[Өнөөдөр] LT",
          nextDay: "[Маргааш] LT",
          nextWeek: "[Ирэх] dddd LT",
          lastDay: "[Өчигдөр] LT",
          lastWeek: "[Өнгөрсөн] dddd LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s дараа",
          past: "%s өмнө",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + " өдөр";
            default:
              return e;
          }
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, n, r) {
        var a = "";
        if (t)
          switch (n) {
            case "s":
              a = "काही सेकंद";
              break;
            case "ss":
              a = "%d सेकंद";
              break;
            case "m":
              a = "एक मिनिट";
              break;
            case "mm":
              a = "%d मिनिटे";
              break;
            case "h":
              a = "एक तास";
              break;
            case "hh":
              a = "%d तास";
              break;
            case "d":
              a = "एक दिवस";
              break;
            case "dd":
              a = "%d दिवस";
              break;
            case "M":
              a = "एक महिना";
              break;
            case "MM":
              a = "%d महिने";
              break;
            case "y":
              a = "एक वर्ष";
              break;
            case "yy":
              a = "%d वर्षे";
          }
        else
          switch (n) {
            case "s":
              a = "काही सेकंदां";
              break;
            case "ss":
              a = "%d सेकंदां";
              break;
            case "m":
              a = "एका मिनिटा";
              break;
            case "mm":
              a = "%d मिनिटां";
              break;
            case "h":
              a = "एका तासा";
              break;
            case "hh":
              a = "%d तासां";
              break;
            case "d":
              a = "एका दिवसा";
              break;
            case "dd":
              a = "%d दिवसां";
              break;
            case "M":
              a = "एका महिन्या";
              break;
            case "MM":
              a = "%d महिन्यां";
              break;
            case "y":
              a = "एका वर्षा";
              break;
            case "yy":
              a = "%d वर्षां";
          }
        return a.replace(/%d/i, e);
      }
      //! moment.js locale configuration
      var n = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        r = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        };
      return e.defineLocale("mr", {
        months:
          "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
            "_"
          ),
        monthsShort:
          "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split(
          "_"
        ),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm वाजता",
          LTS: "A h:mm:ss वाजता",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm वाजता",
          LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[उद्या] LT",
          nextWeek: "dddd, LT",
          lastDay: "[काल] LT",
          lastWeek: "[मागील] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sमध्ये",
          past: "%sपूर्वी",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return r[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return n[e];
          });
        },
        meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "पहाटे" === t || "सकाळी" === t
              ? e
              : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t
              ? e >= 12
                ? e
                : e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e >= 0 && e < 6
            ? "पहाटे"
            : e < 12
            ? "सकाळी"
            : e < 17
            ? "दुपारी"
            : e < 20
            ? "सायंकाळी"
            : "रात्री";
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ms", {
        months:
          "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
          "_"
        ),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "tengahari" === t
              ? e >= 11
                ? e
                : e + 12
              : "petang" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11
            ? "pagi"
            : e < 15
            ? "tengahari"
            : e < 19
            ? "petang"
            : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ms-my", {
        months:
          "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split(
          "_"
        ),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "pagi" === t
              ? e
              : "tengahari" === t
              ? e >= 11
                ? e
                : e + 12
              : "petang" === t || "malam" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 11
            ? "pagi"
            : e < 15
            ? "tengahari"
            : e < 19
            ? "petang"
            : "malam";
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun",
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("mt", {
        months:
          "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
            "_"
          ),
        monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split(
          "_"
        ),
        weekdays:
          "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
            "_"
          ),
        weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
        weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Illum fil-]LT",
          nextDay: "[Għada fil-]LT",
          nextWeek: "dddd [fil-]LT",
          lastDay: "[Il-bieraħ fil-]LT",
          lastWeek: "dddd [li għadda] [fil-]LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "f’ %s",
          past: "%s ilu",
          s: "ftit sekondi",
          ss: "%d sekondi",
          m: "minuta",
          mm: "%d minuti",
          h: "siegħa",
          hh: "%d siegħat",
          d: "ġurnata",
          dd: "%d ġranet",
          M: "xahar",
          MM: "%d xhur",
          y: "sena",
          yy: "%d sni",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "၁",
          2: "၂",
          3: "၃",
          4: "၄",
          5: "၅",
          6: "၆",
          7: "၇",
          8: "၈",
          9: "၉",
          0: "၀",
        },
        n = {
          "၁": "1",
          "၂": "2",
          "၃": "3",
          "၄": "4",
          "၅": "5",
          "၆": "6",
          "၇": "7",
          "၈": "8",
          "၉": "9",
          "၀": "0",
        };
      return e.defineLocale("my", {
        months:
          "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
            "_"
          ),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split(
          "_"
        ),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split(
          "_"
        ),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[ယနေ.] LT [မှာ]",
          nextDay: "[မနက်ဖြန်] LT [မှာ]",
          nextWeek: "dddd LT [မှာ]",
          lastDay: "[မနေ.က] LT [မှာ]",
          lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
          sameElse: "L",
        },
        relativeTime: {
          future: "လာမည့် %s မှာ",
          past: "လွန်ခဲ့သော %s က",
          s: "စက္ကန်.အနည်းငယ်",
          ss: "%d စက္ကန့်",
          m: "တစ်မိနစ်",
          mm: "%d မိနစ်",
          h: "တစ်နာရီ",
          hh: "%d နာရီ",
          d: "တစ်ရက်",
          dd: "%d ရက်",
          M: "တစ်လ",
          MM: "%d လ",
          y: "တစ်နှစ်",
          yy: "%d နှစ်",
        },
        preparse: function (e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("nb", {
        months:
          "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split(
          "_"
        ),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          ss: "%d sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          M: "en måned",
          MM: "%d måneder",
          y: "ett år",
          yy: "%d år",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "१",
          2: "२",
          3: "३",
          4: "४",
          5: "५",
          6: "६",
          7: "७",
          8: "८",
          9: "९",
          0: "०",
        },
        n = {
          "१": "1",
          "२": "2",
          "३": "3",
          "४": "4",
          "५": "5",
          "६": "6",
          "७": "7",
          "८": "8",
          "९": "9",
          "०": "0",
        };
      return e.defineLocale("ne", {
        months:
          "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
            "_"
          ),
        monthsShort:
          "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split(
          "_"
        ),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "Aको h:mm बजे",
          LTS: "Aको h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, Aको h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "राति" === t
              ? e < 4
                ? e
                : e + 12
              : "बिहान" === t
              ? e
              : "दिउँसो" === t
              ? e >= 10
                ? e
                : e + 12
              : "साँझ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 3
            ? "राति"
            : e < 12
            ? "बिहान"
            : e < 16
            ? "दिउँसो"
            : e < 20
            ? "साँझ"
            : "राति";
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[भोलि] LT",
          nextWeek: "[आउँदो] dddd[,] LT",
          lastDay: "[हिजो] LT",
          lastWeek: "[गएको] dddd[,] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sमा",
          past: "%s अगाडि",
          s: "केही क्षण",
          ss: "%d सेकेण्ड",
          m: "एक मिनेट",
          mm: "%d मिनेट",
          h: "एक घण्टा",
          hh: "%d घण्टा",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महिना",
          MM: "%d महिना",
          y: "एक बर्ष",
          yy: "%d बर्ष",
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t =
          "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        r = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i,
        ],
        a =
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale("nl", {
        months:
          "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex:
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex:
          /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays:
          "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
            "_"
          ),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t =
          "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
            "_"
          ),
        n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        r = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i,
        ],
        a =
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale("nl-be", {
        months:
          "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: function (e, r) {
          return e ? (/-MMM-/.test(r) ? n[e.month()] : t[e.month()]) : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex:
          /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex:
          /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: r,
        longMonthsParse: r,
        shortMonthsParse: r,
        weekdays:
          "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
            "_"
          ),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("nn", {
        months:
          "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split(
          "_"
        ),
        weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
        },
        calendar: {
          sameDay: "[I dag klokka] LT",
          nextDay: "[I morgon klokka] LT",
          nextWeek: "dddd [klokka] LT",
          lastDay: "[I går klokka] LT",
          lastWeek: "[Føregåande] dddd [klokka] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "%s sidan",
          s: "nokre sekund",
          ss: "%d sekund",
          m: "eit minutt",
          mm: "%d minutt",
          h: "ein time",
          hh: "%d timar",
          d: "ein dag",
          dd: "%d dagar",
          M: "ein månad",
          MM: "%d månader",
          y: "eit år",
          yy: "%d år",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("oc-lnc", {
        months: {
          standalone:
            "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
              "_"
            ),
          format:
            "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
              "_"
            ),
          isFormat: /D[oD]?(\s)+MMMM/,
        },
        monthsShort:
          "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
          llll: "ddd D MMM YYYY, H:mm",
        },
        calendar: {
          sameDay: "[uèi a] LT",
          nextDay: "[deman a] LT",
          nextWeek: "dddd [a] LT",
          lastDay: "[ièr a] LT",
          lastWeek: "dddd [passat a] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "unas segondas",
          ss: "%d segondas",
          m: "una minuta",
          mm: "%d minutas",
          h: "una ora",
          hh: "%d oras",
          d: "un jorn",
          dd: "%d jorns",
          M: "un mes",
          MM: "%d meses",
          y: "un an",
          yy: "%d ans",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n =
            1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
          return ("w" !== t && "W" !== t) || (n = "a"), e + n;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "੧",
          2: "੨",
          3: "੩",
          4: "੪",
          5: "੫",
          6: "੬",
          7: "੭",
          8: "੮",
          9: "੯",
          0: "੦",
        },
        n = {
          "੧": "1",
          "੨": "2",
          "੩": "3",
          "੪": "4",
          "੫": "5",
          "੬": "6",
          "੭": "7",
          "੮": "8",
          "੯": "9",
          "੦": "0",
        };
      return e.defineLocale("pa-in", {
        months:
          "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
            "_"
          ),
        monthsShort:
          "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
            "_"
          ),
        weekdays:
          "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
          LT: "A h:mm ਵਜੇ",
          LTS: "A h:mm:ss ਵਜੇ",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
          LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
        },
        calendar: {
          sameDay: "[ਅਜ] LT",
          nextDay: "[ਕਲ] LT",
          nextWeek: "[ਅਗਲਾ] dddd, LT",
          lastDay: "[ਕਲ] LT",
          lastWeek: "[ਪਿਛਲੇ] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s ਵਿੱਚ",
          past: "%s ਪਿਛਲੇ",
          s: "ਕੁਝ ਸਕਿੰਟ",
          ss: "%d ਸਕਿੰਟ",
          m: "ਇਕ ਮਿੰਟ",
          mm: "%d ਮਿੰਟ",
          h: "ਇੱਕ ਘੰਟਾ",
          hh: "%d ਘੰਟੇ",
          d: "ਇੱਕ ਦਿਨ",
          dd: "%d ਦਿਨ",
          M: "ਇੱਕ ਮਹੀਨਾ",
          MM: "%d ਮਹੀਨੇ",
          y: "ਇੱਕ ਸਾਲ",
          yy: "%d ਸਾਲ",
        },
        preparse: function (e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "ਰਾਤ" === t
              ? e < 4
                ? e
                : e + 12
              : "ਸਵੇਰ" === t
              ? e
              : "ਦੁਪਹਿਰ" === t
              ? e >= 10
                ? e
                : e + 12
              : "ਸ਼ਾਮ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "ਰਾਤ"
            : e < 10
            ? "ਸਵੇਰ"
            : e < 17
            ? "ਦੁਪਹਿਰ"
            : e < 20
            ? "ਸ਼ਾਮ"
            : "ਰਾਤ";
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
      }
      function n(e, n, r) {
        var a = e + " ";
        switch (r) {
          case "ss":
            return a + (t(e) ? "sekundy" : "sekund");
          case "m":
            return n ? "minuta" : "minutę";
          case "mm":
            return a + (t(e) ? "minuty" : "minut");
          case "h":
            return n ? "godzina" : "godzinę";
          case "hh":
            return a + (t(e) ? "godziny" : "godzin");
          case "MM":
            return a + (t(e) ? "miesiące" : "miesięcy");
          case "yy":
            return a + (t(e) ? "lata" : "lat");
        }
      }
      //! moment.js locale configuration
      var r =
          "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
            "_"
          ),
        a =
          "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
            "_"
          );
      return e.defineLocale("pl", {
        months: function (e, t) {
          return e
            ? "" === t
              ? "(" + a[e.month()] + "|" + r[e.month()] + ")"
              : /D MMMM/.test(t)
              ? a[e.month()]
              : r[e.month()]
            : r;
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split(
          "_"
        ),
        weekdays:
          "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
            "_"
          ),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Dziś o] LT",
          nextDay: "[Jutro o] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W niedzielę o] LT";
              case 2:
                return "[We wtorek o] LT";
              case 3:
                return "[W środę o] LT";
              case 6:
                return "[W sobotę o] LT";
              default:
                return "[W] dddd [o] LT";
            }
          },
          lastDay: "[Wczoraj o] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[W zeszłą niedzielę o] LT";
              case 3:
                return "[W zeszłą środę o] LT";
              case 6:
                return "[W zeszłą sobotę o] LT";
              default:
                return "[W zeszły] dddd [o] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "%s temu",
          s: "kilka sekund",
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: "1 dzień",
          dd: "%d dni",
          M: "miesiąc",
          MM: n,
          y: "rok",
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("pt", {
        months:
          "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
            "_"
          ),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
          "_"
        ),
        weekdays:
          "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
            "_"
          ),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day()
              ? "[Último] dddd [às] LT"
              : "[Última] dddd [às] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("pt-br", {
        months:
          "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
            "_"
          ),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split(
          "_"
        ),
        weekdays:
          "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
            "_"
          ),
        weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
        weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day()
              ? "[Último] dddd [às] LT"
              : "[Última] dddd [às] LT";
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "poucos segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos",
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n) {
        var r = " ";
        return (
          (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (r = " de "),
          e +
            r +
            {
              ss: "secunde",
              mm: "minute",
              hh: "ore",
              dd: "zile",
              MM: "luni",
              yy: "ani",
            }[n]
        );
      }
      return e.defineLocale("ro", {
        months:
          "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
            "_"
          ),
        monthsShort:
          "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[azi la] LT",
          nextDay: "[mâine la] LT",
          nextWeek: "dddd [la] LT",
          lastDay: "[ieri la] LT",
          lastWeek: "[fosta] dddd [la] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "peste %s",
          past: "%s în urmă",
          s: "câteva secunde",
          ss: t,
          m: "un minut",
          mm: t,
          h: "o oră",
          hh: t,
          d: "o zi",
          dd: t,
          M: "o lună",
          MM: t,
          y: "un an",
          yy: t,
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, n) {
        //! moment.js locale configuration
        return "m" === n
          ? t
            ? "минута"
            : "минуту"
          : e +
              " " +
              (function (e, t) {
                var n = e.split("_");
                return t % 10 == 1 && t % 100 != 11
                  ? n[0]
                  : t % 10 >= 2 &&
                    t % 10 <= 4 &&
                    (t % 100 < 10 || t % 100 >= 20)
                  ? n[1]
                  : n[2];
              })(
                {
                  ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                  mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                  hh: "час_часа_часов",
                  dd: "день_дня_дней",
                  MM: "месяц_месяца_месяцев",
                  yy: "год_года_лет",
                }[n],
                +e
              );
      }
      var n = [
        /^янв/i,
        /^фев/i,
        /^мар/i,
        /^апр/i,
        /^ма[йя]/i,
        /^июн/i,
        /^июл/i,
        /^авг/i,
        /^сен/i,
        /^окт/i,
        /^ноя/i,
        /^дек/i,
      ];
      return e.defineLocale("ru", {
        months: {
          format:
            "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
              "_"
            ),
          standalone:
            "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
              "_"
            ),
        },
        monthsShort: {
          format:
            "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
              "_"
            ),
          standalone:
            "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
              "_"
            ),
        },
        weekdays: {
          standalone:
            "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
              "_"
            ),
          format:
            "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
              "_"
            ),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        monthsRegex:
          /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex:
          /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex:
          /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex:
          /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., H:mm",
          LLLL: "dddd, D MMMM YYYY г., H:mm",
        },
        calendar: {
          sameDay: "[Сегодня, в] LT",
          nextDay: "[Завтра, в] LT",
          lastDay: "[Вчера, в] LT",
          nextWeek: function (e) {
            if (e.week() === this.week())
              return 2 === this.day()
                ? "[Во] dddd, [в] LT"
                : "[В] dddd, [в] LT";
            switch (this.day()) {
              case 0:
                return "[В следующее] dddd, [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В следующий] dddd, [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В следующую] dddd, [в] LT";
            }
          },
          lastWeek: function (e) {
            if (e.week() === this.week())
              return 2 === this.day()
                ? "[Во] dddd, [в] LT"
                : "[В] dddd, [в] LT";
            switch (this.day()) {
              case 0:
                return "[В прошлое] dddd, [в] LT";
              case 1:
              case 2:
              case 4:
                return "[В прошлый] dddd, [в] LT";
              case 3:
              case 5:
              case 6:
                return "[В прошлую] dddd, [в] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "через %s",
          past: "%s назад",
          s: "несколько секунд",
          ss: t,
          m: t,
          mm: t,
          h: "час",
          hh: t,
          d: "день",
          dd: t,
          M: "месяц",
          MM: t,
          y: "год",
          yy: t,
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
          return /^(дня|вечера)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
              return e + "-й";
            case "D":
              return e + "-го";
            case "w":
            case "W":
              return e + "-я";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = [
          "جنوري",
          "فيبروري",
          "مارچ",
          "اپريل",
          "مئي",
          "جون",
          "جولاءِ",
          "آگسٽ",
          "سيپٽمبر",
          "آڪٽوبر",
          "نومبر",
          "ڊسمبر",
        ],
        n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
      return e.defineLocale("sd", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm",
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام";
        },
        calendar: {
          sameDay: "[اڄ] LT",
          nextDay: "[سڀاڻي] LT",
          nextWeek: "dddd [اڳين هفتي تي] LT",
          lastDay: "[ڪالهه] LT",
          lastWeek: "[گزريل هفتي] dddd [تي] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s پوء",
          past: "%s اڳ",
          s: "چند سيڪنڊ",
          ss: "%d سيڪنڊ",
          m: "هڪ منٽ",
          mm: "%d منٽ",
          h: "هڪ ڪلاڪ",
          hh: "%d ڪلاڪ",
          d: "هڪ ڏينهن",
          dd: "%d ڏينهن",
          M: "هڪ مهينو",
          MM: "%d مهينا",
          y: "هڪ سال",
          yy: "%d سال",
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("se", {
        months:
          "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
            "_"
          ),
        monthsShort:
          "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
            "_"
          ),
        weekdays:
          "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
            "_"
          ),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "MMMM D. [b.] YYYY",
          LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
          LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
        },
        calendar: {
          sameDay: "[otne ti] LT",
          nextDay: "[ihttin ti] LT",
          nextWeek: "dddd [ti] LT",
          lastDay: "[ikte ti] LT",
          lastWeek: "[ovddit] dddd [ti] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s geažes",
          past: "maŋit %s",
          s: "moadde sekunddat",
          ss: "%d sekunddat",
          m: "okta minuhta",
          mm: "%d minuhtat",
          h: "okta diimmu",
          hh: "%d diimmut",
          d: "okta beaivi",
          dd: "%d beaivvit",
          M: "okta mánnu",
          MM: "%d mánut",
          y: "okta jahki",
          yy: "%d jagit",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("si", {
        months:
          "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
            "_"
          ),
        monthsShort:
          "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays:
          "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
            "_"
          ),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "a h:mm",
          LTS: "a h:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY MMMM D",
          LLL: "YYYY MMMM D, a h:mm",
          LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
        },
        calendar: {
          sameDay: "[අද] LT[ට]",
          nextDay: "[හෙට] LT[ට]",
          nextWeek: "dddd LT[ට]",
          lastDay: "[ඊයේ] LT[ට]",
          lastWeek: "[පසුගිය] dddd LT[ට]",
          sameElse: "L",
        },
        relativeTime: {
          future: "%sකින්",
          past: "%sකට පෙර",
          s: "තත්පර කිහිපය",
          ss: "තත්පර %d",
          m: "මිනිත්තුව",
          mm: "මිනිත්තු %d",
          h: "පැය",
          hh: "පැය %d",
          d: "දිනය",
          dd: "දින %d",
          M: "මාසය",
          MM: "මාස %d",
          y: "වසර",
          yy: "වසර %d",
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
          return e + " වැනි";
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function (e) {
          return "ප.ව." === e || "පස් වරු" === e;
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "ප.ව." : "පස් වරු") : n ? "පෙ.ව." : "පෙර වරු";
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e) {
        return e > 1 && e < 5;
      }
      function n(e, n, r, a) {
        var i = e + " ";
        switch (r) {
          case "s":
            return n || a ? "pár sekúnd" : "pár sekundami";
          case "ss":
            return n || a ? i + (t(e) ? "sekundy" : "sekúnd") : i + "sekundami";
          case "m":
            return n ? "minúta" : a ? "minútu" : "minútou";
          case "mm":
            return n || a ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
          case "h":
            return n ? "hodina" : a ? "hodinu" : "hodinou";
          case "hh":
            return n || a ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
          case "d":
            return n || a ? "deň" : "dňom";
          case "dd":
            return n || a ? i + (t(e) ? "dni" : "dní") : i + "dňami";
          case "M":
            return n || a ? "mesiac" : "mesiacom";
          case "MM":
            return n || a
              ? i + (t(e) ? "mesiace" : "mesiacov")
              : i + "mesiacmi";
          case "y":
            return n || a ? "rok" : "rokom";
          case "yy":
            return n || a ? i + (t(e) ? "roky" : "rokov") : i + "rokmi";
        }
      }
      //! moment.js locale configuration
      var r =
          "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
            "_"
          ),
        a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
      return e.defineLocale("sk", {
        months: r,
        monthsShort: a,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split(
          "_"
        ),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[dnes o] LT",
          nextDay: "[zajtra o] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v nedeľu o] LT";
              case 1:
              case 2:
                return "[v] dddd [o] LT";
              case 3:
                return "[v stredu o] LT";
              case 4:
                return "[vo štvrtok o] LT";
              case 5:
                return "[v piatok o] LT";
              case 6:
                return "[v sobotu o] LT";
            }
          },
          lastDay: "[včera o] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[minulú nedeľu o] LT";
              case 1:
              case 2:
                return "[minulý] dddd [o] LT";
              case 3:
                return "[minulú stredu o] LT";
              case 4:
              case 5:
                return "[minulý] dddd [o] LT";
              case 6:
                return "[minulú sobotu o] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "pred %s",
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      function t(e, t, n, r) {
        var a = e + " ";
        switch (n) {
          case "s":
            return t || r ? "nekaj sekund" : "nekaj sekundami";
          case "ss":
            return (a +=
              1 === e
                ? t
                  ? "sekundo"
                  : "sekundi"
                : 2 === e
                ? t || r
                  ? "sekundi"
                  : "sekundah"
                : e < 5
                ? t || r
                  ? "sekunde"
                  : "sekundah"
                : "sekund");
          case "m":
            return t ? "ena minuta" : "eno minuto";
          case "mm":
            return (a +=
              1 === e
                ? t
                  ? "minuta"
                  : "minuto"
                : 2 === e
                ? t || r
                  ? "minuti"
                  : "minutama"
                : e < 5
                ? t || r
                  ? "minute"
                  : "minutami"
                : t || r
                ? "minut"
                : "minutami");
          case "h":
            return t ? "ena ura" : "eno uro";
          case "hh":
            return (a +=
              1 === e
                ? t
                  ? "ura"
                  : "uro"
                : 2 === e
                ? t || r
                  ? "uri"
                  : "urama"
                : e < 5
                ? t || r
                  ? "ure"
                  : "urami"
                : t || r
                ? "ur"
                : "urami");
          case "d":
            return t || r ? "en dan" : "enim dnem";
          case "dd":
            return (a +=
              1 === e
                ? t || r
                  ? "dan"
                  : "dnem"
                : 2 === e
                ? t || r
                  ? "dni"
                  : "dnevoma"
                : t || r
                ? "dni"
                : "dnevi");
          case "M":
            return t || r ? "en mesec" : "enim mesecem";
          case "MM":
            return (a +=
              1 === e
                ? t || r
                  ? "mesec"
                  : "mesecem"
                : 2 === e
                ? t || r
                  ? "meseca"
                  : "mesecema"
                : e < 5
                ? t || r
                  ? "mesece"
                  : "meseci"
                : t || r
                ? "mesecev"
                : "meseci");
          case "y":
            return t || r ? "eno leto" : "enim letom";
          case "yy":
            return (a +=
              1 === e
                ? t || r
                  ? "leto"
                  : "letom"
                : 2 === e
                ? t || r
                  ? "leti"
                  : "letoma"
                : e < 5
                ? t || r
                  ? "leta"
                  : "leti"
                : t || r
                ? "let"
                : "leti");
        }
      }
      return e.defineLocale("sl", {
        months:
          "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split(
          "_"
        ),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD. MM. YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danes ob] LT",
          nextDay: "[jutri ob] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[v] [nedeljo] [ob] LT";
              case 3:
                return "[v] [sredo] [ob] LT";
              case 6:
                return "[v] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[v] dddd [ob] LT";
            }
          },
          lastDay: "[včeraj ob] LT",
          lastWeek: function () {
            switch (this.day()) {
              case 0:
                return "[prejšnjo] [nedeljo] [ob] LT";
              case 3:
                return "[prejšnjo] [sredo] [ob] LT";
              case 6:
                return "[prejšnjo] [soboto] [ob] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[prejšnji] dddd [ob] LT";
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "čez %s",
          past: "pred %s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("sq", {
        months:
          "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
            "_"
          ),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split(
          "_"
        ),
        weekdays:
          "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
            "_"
          ),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function (e) {
          return "M" === e.charAt(0);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "PD" : "MD";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Sot në] LT",
          nextDay: "[Nesër në] LT",
          nextWeek: "dddd [në] LT",
          lastDay: "[Dje në] LT",
          lastWeek: "dddd [e kaluar në] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "në %s",
          past: "%s më parë",
          s: "disa sekonda",
          ss: "%d sekonda",
          m: "një minutë",
          mm: "%d minuta",
          h: "një orë",
          hh: "%d orë",
          d: "një ditë",
          dd: "%d ditë",
          M: "një muaj",
          MM: "%d muaj",
          y: "një vit",
          yy: "%d vite",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        words: {
          ss: ["sekunda", "sekunde", "sekundi"],
          m: ["jedan minut", "jedne minute"],
          mm: ["minut", "minute", "minuta"],
          h: ["jedan sat", "jednog sata"],
          hh: ["sat", "sata", "sati"],
          dd: ["dan", "dana", "dana"],
          MM: ["mesec", "meseca", "meseci"],
          yy: ["godina", "godine", "godina"],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, r) {
          var a = t.words[r];
          return 1 === r.length
            ? n
              ? a[0]
              : a[1]
            : e + " " + t.correctGrammaticalCase(e, a);
        },
      };
      return e.defineLocale("sr", {
        months:
          "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
            "_"
          ),
        monthsShort:
          "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split(
          "_"
        ),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[u] [nedelju] [u] LT";
              case 3:
                return "[u] [sredu] [u] LT";
              case 6:
                return "[u] [subotu] [u] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[u] dddd [u] LT";
            }
          },
          lastDay: "[juče u] LT",
          lastWeek: function () {
            return [
              "[prošle] [nedelje] [u] LT",
              "[prošlog] [ponedeljka] [u] LT",
              "[prošlog] [utorka] [u] LT",
              "[prošle] [srede] [u] LT",
              "[prošlog] [četvrtka] [u] LT",
              "[prošlog] [petka] [u] LT",
              "[prošle] [subote] [u] LT",
            ][this.day()];
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "za %s",
          past: "pre %s",
          s: "nekoliko sekundi",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "dan",
          dd: t.translate,
          M: "mesec",
          MM: t.translate,
          y: "godinu",
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        words: {
          ss: ["секунда", "секунде", "секунди"],
          m: ["један минут", "једне минуте"],
          mm: ["минут", "минуте", "минута"],
          h: ["један сат", "једног сата"],
          hh: ["сат", "сата", "сати"],
          dd: ["дан", "дана", "дана"],
          MM: ["месец", "месеца", "месеци"],
          yy: ["година", "године", "година"],
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, r) {
          var a = t.words[r];
          return 1 === r.length
            ? n
              ? a[0]
              : a[1]
            : e + " " + t.correctGrammaticalCase(e, a);
        },
      };
      return e.defineLocale("sr-cyrl", {
        months:
          "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
            "_"
          ),
        monthsShort:
          "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: !0,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split(
          "_"
        ),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm",
        },
        calendar: {
          sameDay: "[данас у] LT",
          nextDay: "[сутра у] LT",
          nextWeek: function () {
            switch (this.day()) {
              case 0:
                return "[у] [недељу] [у] LT";
              case 3:
                return "[у] [среду] [у] LT";
              case 6:
                return "[у] [суботу] [у] LT";
              case 1:
              case 2:
              case 4:
              case 5:
                return "[у] dddd [у] LT";
            }
          },
          lastDay: "[јуче у] LT",
          lastWeek: function () {
            return [
              "[прошле] [недеље] [у] LT",
              "[прошлог] [понедељка] [у] LT",
              "[прошлог] [уторка] [у] LT",
              "[прошле] [среде] [у] LT",
              "[прошлог] [четвртка] [у] LT",
              "[прошлог] [петка] [у] LT",
              "[прошле] [суботе] [у] LT",
            ][this.day()];
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "за %s",
          past: "пре %s",
          s: "неколико секунди",
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: "дан",
          dd: t.translate,
          M: "месец",
          MM: t.translate,
          y: "годину",
          yy: t.translate,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ss", {
        months:
          "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
            "_"
          ),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split(
          "_"
        ),
        weekdays:
          "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
            "_"
          ),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Namuhla nga] LT",
          nextDay: "[Kusasa nga] LT",
          nextWeek: "dddd [nga] LT",
          lastDay: "[Itolo nga] LT",
          lastWeek: "dddd [leliphelile] [nga] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "nga %s",
          past: "wenteka nga %s",
          s: "emizuzwana lomcane",
          ss: "%d mzuzwana",
          m: "umzuzu",
          mm: "%d emizuzu",
          h: "lihora",
          hh: "%d emahora",
          d: "lilanga",
          dd: "%d emalanga",
          M: "inyanga",
          MM: "%d tinyanga",
          y: "umnyaka",
          yy: "%d iminyaka",
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function (e, t, n) {
          return e < 11
            ? "ekuseni"
            : e < 15
            ? "emini"
            : e < 19
            ? "entsambama"
            : "ebusuku";
        },
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "ekuseni" === t
              ? e
              : "emini" === t
              ? e >= 11
                ? e
                : e + 12
              : "entsambama" === t || "ebusuku" === t
              ? 0 === e
                ? 0
                : e + 12
              : void 0
          );
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("sv", {
        months:
          "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
            "_"
          ),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split(
          "_"
        ),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
          "_"
        ),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Igår] LT",
          nextWeek: "[På] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "om %s",
          past: "för %s sedan",
          s: "några sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en månad",
          MM: "%d månader",
          y: "ett år",
          yy: "%d år",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? ":e"
              : 1 === t
              ? ":a"
              : 2 === t
              ? ":a"
              : ":e")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("sw", {
        months:
          "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
            "_"
          ),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split(
          "_"
        ),
        weekdays:
          "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
            "_"
          ),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "hh:mm A",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[leo saa] LT",
          nextDay: "[kesho saa] LT",
          nextWeek: "[wiki ijayo] dddd [saat] LT",
          lastDay: "[jana] LT",
          lastWeek: "[wiki iliyopita] dddd [saat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s baadaye",
          past: "tokea %s",
          s: "hivi punde",
          ss: "sekunde %d",
          m: "dakika moja",
          mm: "dakika %d",
          h: "saa limoja",
          hh: "masaa %d",
          d: "siku moja",
          dd: "siku %d",
          M: "mwezi mmoja",
          MM: "miezi %d",
          y: "mwaka mmoja",
          yy: "miaka %d",
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
          1: "௧",
          2: "௨",
          3: "௩",
          4: "௪",
          5: "௫",
          6: "௬",
          7: "௭",
          8: "௮",
          9: "௯",
          0: "௦",
        },
        n = {
          "௧": "1",
          "௨": "2",
          "௩": "3",
          "௪": "4",
          "௫": "5",
          "௬": "6",
          "௭": "7",
          "௮": "8",
          "௯": "9",
          "௦": "0",
        };
      return e.defineLocale("ta", {
        months:
          "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
            "_"
          ),
        monthsShort:
          "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
            "_"
          ),
        weekdays:
          "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
            "_"
          ),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split(
          "_"
        ),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, HH:mm",
          LLLL: "dddd, D MMMM YYYY, HH:mm",
        },
        calendar: {
          sameDay: "[இன்று] LT",
          nextDay: "[நாளை] LT",
          nextWeek: "dddd, LT",
          lastDay: "[நேற்று] LT",
          lastWeek: "[கடந்த வாரம்] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s இல்",
          past: "%s முன்",
          s: "ஒரு சில விநாடிகள்",
          ss: "%d விநாடிகள்",
          m: "ஒரு நிமிடம்",
          mm: "%d நிமிடங்கள்",
          h: "ஒரு மணி நேரம்",
          hh: "%d மணி நேரம்",
          d: "ஒரு நாள்",
          dd: "%d நாட்கள்",
          M: "ஒரு மாதம்",
          MM: "%d மாதங்கள்",
          y: "ஒரு வருடம்",
          yy: "%d ஆண்டுகள்",
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function (e) {
          return e + "வது";
        },
        preparse: function (e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (e, t, n) {
          return e < 2
            ? " யாமம்"
            : e < 6
            ? " வைகறை"
            : e < 10
            ? " காலை"
            : e < 14
            ? " நண்பகல்"
            : e < 18
            ? " எற்பாடு"
            : e < 22
            ? " மாலை"
            : " யாமம்";
        },
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "யாமம்" === t
              ? e < 2
                ? e
                : e + 12
              : "வைகறை" === t || "காலை" === t
              ? e
              : "நண்பகல்" === t && e >= 10
              ? e
              : e + 12
          );
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("te", {
        months:
          "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
            "_"
          ),
        monthsShort:
          "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
            "_"
          ),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm",
        },
        calendar: {
          sameDay: "[నేడు] LT",
          nextDay: "[రేపు] LT",
          nextWeek: "dddd, LT",
          lastDay: "[నిన్న] LT",
          lastWeek: "[గత] dddd, LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s లో",
          past: "%s క్రితం",
          s: "కొన్ని క్షణాలు",
          ss: "%d సెకన్లు",
          m: "ఒక నిమిషం",
          mm: "%d నిమిషాలు",
          h: "ఒక గంట",
          hh: "%d గంటలు",
          d: "ఒక రోజు",
          dd: "%d రోజులు",
          M: "ఒక నెల",
          MM: "%d నెలలు",
          y: "ఒక సంవత్సరం",
          yy: "%d సంవత్సరాలు",
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "రాత్రి" === t
              ? e < 4
                ? e
                : e + 12
              : "ఉదయం" === t
              ? e
              : "మధ్యాహ్నం" === t
              ? e >= 10
                ? e
                : e + 12
              : "సాయంత్రం" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "రాత్రి"
            : e < 10
            ? "ఉదయం"
            : e < 17
            ? "మధ్యాహ్నం"
            : e < 20
            ? "సాయంత్రం"
            : "రాత్రి";
        },
        week: { dow: 0, doy: 6 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("tet", {
        months:
          "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
            "_"
          ),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split(
          "_"
        ),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Ohin iha] LT",
          nextDay: "[Aban iha] LT",
          nextWeek: "dddd [iha] LT",
          lastDay: "[Horiseik iha] LT",
          lastWeek: "dddd [semana kotuk] [iha] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "iha %s",
          past: "%s liuba",
          s: "segundu balun",
          ss: "segundu %d",
          m: "minutu ida",
          mm: "minutu %d",
          h: "oras ida",
          hh: "oras %d",
          d: "loron ida",
          dd: "loron %d",
          M: "fulan ida",
          MM: "fulan %d",
          y: "tinan ida",
          yy: "tinan %d",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        0: "-ум",
        1: "-ум",
        2: "-юм",
        3: "-юм",
        4: "-ум",
        5: "-ум",
        6: "-ум",
        7: "-ум",
        8: "-ум",
        9: "-ум",
        10: "-ум",
        12: "-ум",
        13: "-ум",
        20: "-ум",
        30: "-юм",
        40: "-ум",
        50: "-ум",
        60: "-ум",
        70: "-ум",
        80: "-ум",
        90: "-ум",
        100: "-ум",
      };
      return e.defineLocale("tg", {
        months:
          "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
            "_"
          ),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
          "_"
        ),
        weekdays:
          "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
        weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
        weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Имрӯз соати] LT",
          nextDay: "[Пагоҳ соати] LT",
          lastDay: "[Дирӯз соати] LT",
          nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
          lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "баъди %s",
          past: "%s пеш",
          s: "якчанд сония",
          m: "як дақиқа",
          mm: "%d дақиқа",
          h: "як соат",
          hh: "%d соат",
          d: "як рӯз",
          dd: "%d рӯз",
          M: "як моҳ",
          MM: "%d моҳ",
          y: "як сол",
          yy: "%d сол",
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "шаб" === t
              ? e < 4
                ? e
                : e + 12
              : "субҳ" === t
              ? e
              : "рӯз" === t
              ? e >= 11
                ? e
                : e + 12
              : "бегоҳ" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          return e < 4
            ? "шаб"
            : e < 11
            ? "субҳ"
            : e < 16
            ? "рӯз"
            : e < 19
            ? "бегоҳ"
            : "шаб";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("th", {
        months:
          "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
            "_"
          ),
        monthsShort:
          "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY เวลา H:mm",
          LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
          return "หลังเที่ยง" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
        },
        calendar: {
          sameDay: "[วันนี้ เวลา] LT",
          nextDay: "[พรุ่งนี้ เวลา] LT",
          nextWeek: "dddd[หน้า เวลา] LT",
          lastDay: "[เมื่อวานนี้ เวลา] LT",
          lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "อีก %s",
          past: "%sที่แล้ว",
          s: "ไม่กี่วินาที",
          ss: "%d วินาที",
          m: "1 นาที",
          mm: "%d นาที",
          h: "1 ชั่วโมง",
          hh: "%d ชั่วโมง",
          d: "1 วัน",
          dd: "%d วัน",
          M: "1 เดือน",
          MM: "%d เดือน",
          y: "1 ปี",
          yy: "%d ปี",
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        1: "'inji",
        5: "'inji",
        8: "'inji",
        70: "'inji",
        80: "'inji",
        2: "'nji",
        7: "'nji",
        20: "'nji",
        50: "'nji",
        3: "'ünji",
        4: "'ünji",
        100: "'ünji",
        6: "'njy",
        9: "'unjy",
        10: "'unjy",
        30: "'unjy",
        60: "'ynjy",
        90: "'ynjy",
      };
      return e.defineLocale("tk", {
        months:
          "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
            "_"
          ),
        monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split(
          "_"
        ),
        weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split(
          "_"
        ),
        weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
        weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[bugün sagat] LT",
          nextDay: "[ertir sagat] LT",
          nextWeek: "[indiki] dddd [sagat] LT",
          lastDay: "[düýn] LT",
          lastWeek: "[geçen] dddd [sagat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s soň",
          past: "%s öň",
          s: "birnäçe sekunt",
          m: "bir minut",
          mm: "%d minut",
          h: "bir sagat",
          hh: "%d sagat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir aý",
          MM: "%d aý",
          y: "bir ýyl",
          yy: "%d ýyl",
        },
        ordinal: function (e, n) {
          switch (n) {
            case "d":
            case "D":
            case "Do":
            case "DD":
              return e;
            default:
              if (0 === e) return e + "'unjy";
              var r = e % 10;
              return e + (t[r] || t[(e % 100) - r] || t[e >= 100 ? 100 : null]);
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("tl-ph", {
        months:
          "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
            "_"
          ),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split(
          "_"
        ),
        weekdays:
          "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm",
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L",
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon",
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, r, a) {
        var i = (function (e) {
          var t = Math.floor((e % 1e3) / 100),
            r = Math.floor((e % 100) / 10),
            a = e % 10,
            i = "";
          t > 0 && (i += n[t] + "vatlh");
          r > 0 && (i += ("" !== i ? " " : "") + n[r] + "maH");
          a > 0 && (i += ("" !== i ? " " : "") + n[a]);
          return "" === i ? "pagh" : i;
        })(e);
        switch (r) {
          case "ss":
            return i + " lup";
          case "mm":
            return i + " tup";
          case "hh":
            return i + " rep";
          case "dd":
            return i + " jaj";
          case "MM":
            return i + " jar";
          case "yy":
            return i + " DIS";
        }
      }
      //! moment.js locale configuration
      var n = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
      return e.defineLocale("tlh", {
        months:
          "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
            "_"
          ),
        monthsShort:
          "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort:
          "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin:
          "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[DaHjaj] LT",
          nextDay: "[wa’leS] LT",
          nextWeek: "LLL",
          lastDay: "[wa’Hu’] LT",
          lastWeek: "LLL",
          sameElse: "L",
        },
        relativeTime: {
          future: function (e) {
            var t = e;
            return (t =
              -1 !== e.indexOf("jaj")
                ? t.slice(0, -3) + "leS"
                : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "waQ"
                : -1 !== e.indexOf("DIS")
                ? t.slice(0, -3) + "nem"
                : t + " pIq");
          },
          past: function (e) {
            var t = e;
            return (t =
              -1 !== e.indexOf("jaj")
                ? t.slice(0, -3) + "Hu’"
                : -1 !== e.indexOf("jar")
                ? t.slice(0, -3) + "wen"
                : -1 !== e.indexOf("DIS")
                ? t.slice(0, -3) + "ben"
                : t + " ret");
          },
          s: "puS lup",
          ss: t,
          m: "wa’ tup",
          mm: t,
          h: "wa’ rep",
          hh: t,
          d: "wa’ jaj",
          dd: t,
          M: "wa’ jar",
          MM: t,
          y: "wa’ DIS",
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı",
      };
      return e.defineLocale("tr", {
        months:
          "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
            "_"
          ),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split(
          "_"
        ),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split(
          "_"
        ),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        meridiem: function (e, t, n) {
          return e < 12 ? (n ? "öö" : "ÖÖ") : n ? "ös" : "ÖS";
        },
        meridiemParse: /öö|ÖÖ|ös|ÖS/,
        isPM: function (e) {
          return "ös" === e || "ÖS" === e;
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[yarın saat] LT",
          nextWeek: "[gelecek] dddd [saat] LT",
          lastDay: "[dün] LT",
          lastWeek: "[geçen] dddd [saat] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s önce",
          s: "birkaç saniye",
          ss: "%d saniye",
          m: "bir dakika",
          mm: "%d dakika",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir yıl",
          yy: "%d yıl",
        },
        ordinal: function (e, n) {
          switch (n) {
            case "d":
            case "D":
            case "Do":
            case "DD":
              return e;
            default:
              if (0 === e) return e + "'ıncı";
              var r = e % 10;
              return e + (t[r] || t[(e % 100) - r] || t[e >= 100 ? 100 : null]);
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, n, r) {
        var a = {
          s: ["viensas secunds", "'iensas secunds"],
          ss: [e + " secunds", e + " secunds"],
          m: ["'n míut", "'iens míut"],
          mm: [e + " míuts", e + " míuts"],
          h: ["'n þora", "'iensa þora"],
          hh: [e + " þoras", e + " þoras"],
          d: ["'n ziua", "'iensa ziua"],
          dd: [e + " ziuas", e + " ziuas"],
          M: ["'n mes", "'iens mes"],
          MM: [e + " mesen", e + " mesen"],
          y: ["'n ar", "'iens ar"],
          yy: [e + " ars", e + " ars"],
        };
        return r ? a[n][0] : t ? a[n][0] : a[n][1];
      }
      return e.defineLocale("tzl", {
        months:
          "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
            "_"
          ),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split(
          "_"
        ),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split(
          "_"
        ),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM [dallas] YYYY",
          LLL: "D. MMMM [dallas] YYYY HH.mm",
          LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function (e) {
          return "d'o" === e.toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
        },
        calendar: {
          sameDay: "[oxhi à] LT",
          nextDay: "[demà à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[ieiri à] LT",
          lastWeek: "[sür el] dddd [lasteu à] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "osprei %s",
          past: "ja%s",
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("tzm", {
        months:
          "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
            "_"
          ),
        monthsShort:
          "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
            "_"
          ),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
          "_"
        ),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
          "_"
        ),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
          nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
          nextWeek: "dddd [ⴴ] LT",
          lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
          lastWeek: "dddd [ⴴ] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
          past: "ⵢⴰⵏ %s",
          s: "ⵉⵎⵉⴽ",
          ss: "%d ⵉⵎⵉⴽ",
          m: "ⵎⵉⵏⵓⴺ",
          mm: "%d ⵎⵉⵏⵓⴺ",
          h: "ⵙⴰⵄⴰ",
          hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
          d: "ⴰⵙⵙ",
          dd: "%d oⵙⵙⴰⵏ",
          M: "ⴰⵢoⵓⵔ",
          MM: "%d ⵉⵢⵢⵉⵔⵏ",
          y: "ⴰⵙⴳⴰⵙ",
          yy: "%d ⵉⵙⴳⴰⵙⵏ",
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("tzm-latn", {
        months:
          "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
            "_"
          ),
        monthsShort:
          "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
            "_"
          ),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
          "_"
        ),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
          "_"
        ),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[asdkh g] LT",
          nextDay: "[aska g] LT",
          nextWeek: "dddd [g] LT",
          lastDay: "[assant g] LT",
          lastWeek: "dddd [g] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "dadkh s yan %s",
          past: "yan %s",
          s: "imik",
          ss: "%d imik",
          m: "minuḍ",
          mm: "%d minuḍ",
          h: "saɛa",
          hh: "%d tassaɛin",
          d: "ass",
          dd: "%d ossan",
          M: "ayowr",
          MM: "%d iyyirn",
          y: "asgas",
          yy: "%d isgasn",
        },
        week: { dow: 6, doy: 12 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("ug-cn", {
        months:
          "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
            "_"
          ),
        monthsShort:
          "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
            "_"
          ),
        weekdays:
          "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
        weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
          LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
          LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t
              ? e
              : "چۈشتىن كېيىن" === t || "كەچ" === t
              ? e + 12
              : e >= 11
              ? e
              : e + 12
          );
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600
            ? "يېرىم كېچە"
            : r < 900
            ? "سەھەر"
            : r < 1130
            ? "چۈشتىن بۇرۇن"
            : r < 1230
            ? "چۈش"
            : r < 1800
            ? "چۈشتىن كېيىن"
            : "كەچ";
        },
        calendar: {
          sameDay: "[بۈگۈن سائەت] LT",
          nextDay: "[ئەتە سائەت] LT",
          nextWeek: "[كېلەركى] dddd [سائەت] LT",
          lastDay: "[تۆنۈگۈن] LT",
          lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s كېيىن",
          past: "%s بۇرۇن",
          s: "نەچچە سېكونت",
          ss: "%d سېكونت",
          m: "بىر مىنۇت",
          mm: "%d مىنۇت",
          h: "بىر سائەت",
          hh: "%d سائەت",
          d: "بىر كۈن",
          dd: "%d كۈن",
          M: "بىر ئاي",
          MM: "%d ئاي",
          y: "بىر يىل",
          yy: "%d يىل",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "-كۈنى";
            case "w":
            case "W":
              return e + "-ھەپتە";
            default:
              return e;
          }
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      function t(e, t, n) {
        //! moment.js locale configuration
        return "m" === n
          ? t
            ? "хвилина"
            : "хвилину"
          : "h" === n
          ? t
            ? "година"
            : "годину"
          : e +
            " " +
            (function (e, t) {
              var n = e.split("_");
              return t % 10 == 1 && t % 100 != 11
                ? n[0]
                : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20)
                ? n[1]
                : n[2];
            })(
              {
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років",
              }[n],
              +e
            );
      }
      function n(e) {
        return function () {
          return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
        };
      }
      return e.defineLocale("uk", {
        months: {
          format:
            "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
              "_"
            ),
          standalone:
            "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
              "_"
            ),
        },
        monthsShort:
          "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function (e, t) {
          var n,
            r = {
              nominative:
                "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
                  "_"
                ),
              accusative:
                "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
                  "_"
                ),
              genitive:
                "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
                  "_"
                ),
            };
          return !0 === e
            ? r.nominative.slice(1, 7).concat(r.nominative.slice(0, 1))
            : e
            ? ((n = /(\[[ВвУу]\]) ?dddd/.test(t)
                ? "accusative"
                : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
                ? "genitive"
                : "nominative"),
              r[n][e.day()])
            : r.nominative;
        },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY р.",
          LLL: "D MMMM YYYY р., HH:mm",
          LLLL: "dddd, D MMMM YYYY р., HH:mm",
        },
        calendar: {
          sameDay: n("[Сьогодні "),
          nextDay: n("[Завтра "),
          lastDay: n("[Вчора "),
          nextWeek: n("[У] dddd ["),
          lastWeek: function () {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return n("[Минулої] dddd [").call(this);
              case 1:
              case 2:
              case 4:
                return n("[Минулого] dddd [").call(this);
            }
          },
          sameElse: "L",
        },
        relativeTime: {
          future: "за %s",
          past: "%s тому",
          s: "декілька секунд",
          ss: t,
          m: t,
          mm: t,
          h: "годину",
          hh: t,
          d: "день",
          dd: t,
          M: "місяць",
          MM: t,
          y: "рік",
          yy: t,
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
          return /^(дня|вечора)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
          switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return e + "-й";
            case "D":
              return e + "-го";
            default:
              return e;
          }
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      //! moment.js locale configuration
      var t = [
          "جنوری",
          "فروری",
          "مارچ",
          "اپریل",
          "مئی",
          "جون",
          "جولائی",
          "اگست",
          "ستمبر",
          "اکتوبر",
          "نومبر",
          "دسمبر",
        ],
        n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
      return e.defineLocale("ur", {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm",
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return "شام" === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? "صبح" : "شام";
        },
        calendar: {
          sameDay: "[آج بوقت] LT",
          nextDay: "[کل بوقت] LT",
          nextWeek: "dddd [بوقت] LT",
          lastDay: "[گذشتہ روز بوقت] LT",
          lastWeek: "[گذشتہ] dddd [بوقت] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s بعد",
          past: "%s قبل",
          s: "چند سیکنڈ",
          ss: "%d سیکنڈ",
          m: "ایک منٹ",
          mm: "%d منٹ",
          h: "ایک گھنٹہ",
          hh: "%d گھنٹے",
          d: "ایک دن",
          dd: "%d دن",
          M: "ایک ماہ",
          MM: "%d ماہ",
          y: "ایک سال",
          yy: "%d سال",
        },
        preparse: function (e) {
          return e.replace(/،/g, ",");
        },
        postformat: function (e) {
          return e.replace(/,/g, "،");
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("uz", {
        months:
          "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
            "_"
          ),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split(
          "_"
        ),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split(
          "_"
        ),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm",
        },
        calendar: {
          sameDay: "[Бугун соат] LT [да]",
          nextDay: "[Эртага] LT [да]",
          nextWeek: "dddd [куни соат] LT [да]",
          lastDay: "[Кеча соат] LT [да]",
          lastWeek: "[Утган] dddd [куни соат] LT [да]",
          sameElse: "L",
        },
        relativeTime: {
          future: "Якин %s ичида",
          past: "Бир неча %s олдин",
          s: "фурсат",
          ss: "%d фурсат",
          m: "бир дакика",
          mm: "%d дакика",
          h: "бир соат",
          hh: "%d соат",
          d: "бир кун",
          dd: "%d кун",
          M: "бир ой",
          MM: "%d ой",
          y: "бир йил",
          yy: "%d йил",
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("uz-latn", {
        months:
          "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
            "_"
          ),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split(
          "_"
        ),
        weekdays:
          "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
            "_"
          ),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm",
        },
        calendar: {
          sameDay: "[Bugun soat] LT [da]",
          nextDay: "[Ertaga] LT [da]",
          nextWeek: "dddd [kuni soat] LT [da]",
          lastDay: "[Kecha soat] LT [da]",
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: "L",
        },
        relativeTime: {
          future: "Yaqin %s ichida",
          past: "Bir necha %s oldin",
          s: "soniya",
          ss: "%d soniya",
          m: "bir daqiqa",
          mm: "%d daqiqa",
          h: "bir soat",
          hh: "%d soat",
          d: "bir kun",
          dd: "%d kun",
          M: "bir oy",
          MM: "%d oy",
          y: "bir yil",
          yy: "%d yil",
        },
        week: { dow: 1, doy: 7 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("vi", {
        months:
          "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
            "_"
          ),
        monthsShort:
          "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (e) {
          return /^ch$/i.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [năm] YYYY",
          LLL: "D MMMM [năm] YYYY HH:mm",
          LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[Hôm nay lúc] LT",
          nextDay: "[Ngày mai lúc] LT",
          nextWeek: "dddd [tuần tới lúc] LT",
          lastDay: "[Hôm qua lúc] LT",
          lastWeek: "dddd [tuần trước lúc] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "%s tới",
          past: "%s trước",
          s: "vài giây",
          ss: "%d giây",
          m: "một phút",
          mm: "%d phút",
          h: "một giờ",
          hh: "%d giờ",
          d: "một ngày",
          dd: "%d ngày",
          M: "một tháng",
          MM: "%d tháng",
          y: "một năm",
          yy: "%d năm",
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("x-pseudo", {
        months:
          "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
            "_"
          ),
        monthsShort:
          "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
            "_"
          ),
        monthsParseExact: !0,
        weekdays:
          "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
            "_"
          ),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        calendar: {
          sameDay: "[T~ódá~ý át] LT",
          nextDay: "[T~ómó~rró~w át] LT",
          nextWeek: "dddd [át] LT",
          lastDay: "[Ý~ést~érdá~ý át] LT",
          lastWeek: "[L~ást] dddd [át] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "í~ñ %s",
          past: "%s á~gó",
          s: "á ~féw ~sécó~ñds",
          ss: "%d s~écóñ~ds",
          m: "á ~míñ~úté",
          mm: "%d m~íñú~tés",
          h: "á~ñ hó~úr",
          hh: "%d h~óúrs",
          d: "á ~dáý",
          dd: "%d d~áýs",
          M: "á ~móñ~th",
          MM: "%d m~óñt~hs",
          y: "á ~ýéár",
          yy: "%d ý~éárs",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return (
            e +
            (1 == ~~((e % 100) / 10)
              ? "th"
              : 1 === t
              ? "st"
              : 2 === t
              ? "nd"
              : 3 === t
              ? "rd"
              : "th")
          );
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("yo", {
        months:
          "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
            "_"
          ),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split(
          "_"
        ),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A",
        },
        calendar: {
          sameDay: "[Ònì ni] LT",
          nextDay: "[Ọ̀la ni] LT",
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: "[Àna ni] LT",
          lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "ní %s",
          past: "%s kọjá",
          s: "ìsẹjú aayá die",
          ss: "aayá %d",
          m: "ìsẹjú kan",
          mm: "ìsẹjú %d",
          h: "wákati kan",
          hh: "wákati %d",
          d: "ọjọ́ kan",
          dd: "ọjọ́ %d",
          M: "osù kan",
          MM: "osù %d",
          y: "ọdún kan",
          yy: "ọdún %d",
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("zh-cn", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "下午" === t || "晚上" === t
              ? e + 12
              : e >= 11
              ? e
              : e + 12
          );
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600
            ? "凌晨"
            : r < 900
            ? "早上"
            : r < 1130
            ? "上午"
            : r < 1230
            ? "中午"
            : r < 1800
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: function (e) {
            return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
          },
          lastDay: "[昨天]LT",
          lastWeek: function (e) {
            return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT";
          },
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "周";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s后",
          past: "%s前",
          s: "几秒",
          ss: "%d 秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年",
        },
        week: { dow: 1, doy: 4 },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("zh-hk", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "中午" === t
              ? e >= 11
                ? e
                : e + 12
              : "下午" === t || "晚上" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600
            ? "凌晨"
            : r < 900
            ? "早上"
            : r < 1200
            ? "上午"
            : 1200 === r
            ? "中午"
            : r < 1800
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年",
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("zh-mo", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "D/M/YYYY",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "中午" === t
              ? e >= 11
                ? e
                : e + 12
              : "下午" === t || "晚上" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600
            ? "凌晨"
            : r < 900
            ? "早上"
            : r < 1130
            ? "上午"
            : r < 1230
            ? "中午"
            : r < 1800
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天] LT",
          nextDay: "[明天] LT",
          nextWeek: "[下]dddd LT",
          lastDay: "[昨天] LT",
          lastWeek: "[上]dddd LT",
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年",
        },
      });
    });
  },
  function (e, t, n) {
    !(function (e, t) {
      t(n(0));
    })(0, function (e) {
      "use strict";
      return e.defineLocale("zh-tw", {
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return (
            12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t
              ? e
              : "中午" === t
              ? e >= 11
                ? e
                : e + 12
              : "下午" === t || "晚上" === t
              ? e + 12
              : void 0
          );
        },
        meridiem: function (e, t, n) {
          var r = 100 * e + t;
          return r < 600
            ? "凌晨"
            : r < 900
            ? "早上"
            : r < 1130
            ? "上午"
            : r < 1230
            ? "中午"
            : r < 1800
            ? "下午"
            : "晚上";
        },
        calendar: {
          sameDay: "[今天] LT",
          nextDay: "[明天] LT",
          nextWeek: "[下]dddd LT",
          lastDay: "[昨天] LT",
          lastWeek: "[上]dddd LT",
          sameElse: "L",
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
            case "d":
            case "D":
            case "DDD":
              return e + "日";
            case "M":
              return e + "月";
            case "w":
            case "W":
              return e + "週";
            default:
              return e;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年",
        },
      });
    });
  },
  ,
  ,
  ,
  function (e, t, n) {
    var r = n(18),
      a = n(24),
      i = n(237)(!1),
      s = n(48)("IE_PROTO");
    e.exports = function (e, t) {
      var n,
        o = a(e),
        u = 0,
        d = [];
      for (n in o) n != s && r(o, n) && d.push(n);
      for (; t.length > u; ) r(o, (n = t[u++])) && (~i(d, n) || d.push(n));
      return d;
    };
  },
  function (e, t, n) {
    e.exports =
      !n(17) &&
      !n(23)(function () {
        return (
          7 !=
          Object.defineProperty(n(49)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t) {},
  function (e, t, n) {
    e.exports = n(14);
  },
  function (e, t, n) {
    var r = n(9),
      a = n(245),
      i = n(54),
      s = n(48)("IE_PROTO"),
      o = function () {},
      u = function () {
        var e,
          t = n(49)("iframe"),
          r = i.length;
        for (
          t.style.display = "none",
            n(65).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            u = e.F;
          r--;

        )
          delete u.prototype[i[r]];
        return u();
      };
    e.exports =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((o.prototype = r(e)),
              (n = new o()),
              (o.prototype = null),
              (n[s] = e))
            : (n = u()),
          void 0 === t ? n : a(n, t)
        );
      };
  },
  ,
  ,
  function (e, t, n) {
    var r = n(9);
    e.exports = function (e, t, n, a) {
      try {
        return a ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = e.return;
        throw (void 0 !== i && r(i.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var r = n(25),
      a = n(5)("iterator"),
      i = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (r.Array === e || i[a] === e);
    };
  },
  function (e, t, n) {
    var r = n(5)("iterator"),
      a = !1;
    try {
      var i = [7][r]();
      (i.return = function () {
        a = !0;
      }),
        Array.from(i, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !a) return !1;
      var n = !1;
      try {
        var i = [7],
          s = i[r]();
        (s.next = function () {
          return { done: (n = !0) };
        }),
          (i[r] = function () {
            return s;
          }),
          e(i);
      } catch (e) {}
      return n;
    };
  },
  function (e, t, n) {
    e.exports = { default: n(259), __esModule: !0 };
  },
  function (e, t, n) {
    e.exports = { default: n(262), __esModule: !0 };
  },
  ,
  function (e, t, n) {
    e.exports = { default: n(235), __esModule: !0 };
  },
  function (e, t, n) {
    e.exports = { default: n(310), __esModule: !0 };
  },
  ,
  ,
  function (e, t, n) {
    n(236), (e.exports = n(3).Object.keys);
  },
  function (e, t, n) {
    var r = n(38),
      a = n(30);
    n(239)("keys", function () {
      return function (e) {
        return a(r(e));
      };
    });
  },
  function (e, t, n) {
    var r = n(24),
      a = n(58),
      i = n(238);
    e.exports = function (e) {
      return function (t, n, s) {
        var o,
          u = r(t),
          d = a(u.length),
          l = i(s, d);
        if (e && n != n) {
          for (; d > l; ) if ((o = u[l++]) != o) return !0;
        } else
          for (; d > l; l++)
            if ((e || l in u) && u[l] === n) return e || l || 0;
        return !e && -1;
      };
    };
  },
  function (e, t, n) {
    var r = n(47),
      a = Math.max,
      i = Math.min;
    e.exports = function (e, t) {
      return (e = r(e)) < 0 ? a(e + t, 0) : i(e, t);
    };
  },
  function (e, t, n) {
    var r = n(12),
      a = n(3),
      i = n(23);
    e.exports = function (e, t) {
      var n = (a.Object || {})[e] || Object[e],
        s = {};
      (s[e] = t(n)),
        r(
          r.S +
            r.F *
              i(function () {
                n(1);
              }),
          "Object",
          s
        );
    };
  },
  function (e, t, n) {
    var r =
        (function () {
          return this;
        })() || Function("return this")(),
      a =
        r.regeneratorRuntime &&
        Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
      i = a && r.regeneratorRuntime;
    if (((r.regeneratorRuntime = void 0), (e.exports = n(241)), a))
      r.regeneratorRuntime = i;
    else
      try {
        delete r.regeneratorRuntime;
      } catch (e) {
        r.regeneratorRuntime = void 0;
      }
  },
  function (e, t) {
    !(function (t) {
      "use strict";
      function n(e, t, n, i) {
        var s = t && t.prototype instanceof a ? t : a,
          o = Object.create(s.prototype),
          u = new c(i || []);
        return (
          (o._invoke = (function (e, t, n) {
            var a = w;
            return function (i, s) {
              if (a === b) throw new Error("Generator is already running");
              if (a === D) {
                if ("throw" === i) throw s;
                return f();
              }
              for (n.method = i, n.arg = s; ; ) {
                var o = n.delegate;
                if (o) {
                  var u = d(o, n);
                  if (u) {
                    if (u === T) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (a === w) throw ((a = D), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                a = b;
                var l = r(e, t, n);
                if ("normal" === l.type) {
                  if (((a = n.done ? D : k), l.arg === T)) continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((a = D), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          })(e, n, u)),
          o
        );
      }
      function r(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      function a() {}
      function i() {}
      function s() {}
      function o(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }
      function u(e) {
        function t(n, a, i, s) {
          var o = r(e[n], e, a);
          if ("throw" !== o.type) {
            var u = o.arg,
              d = u.value;
            return d && "object" == typeof d && p.call(d, "__await")
              ? Promise.resolve(d.__await).then(
                  function (e) {
                    t("next", e, i, s);
                  },
                  function (e) {
                    t("throw", e, i, s);
                  }
                )
              : Promise.resolve(d).then(function (e) {
                  (u.value = e), i(u);
                }, s);
          }
          s(o.arg);
        }
        var n;
        this._invoke = function (e, r) {
          function a() {
            return new Promise(function (n, a) {
              t(e, r, n, a);
            });
          }
          return (n = n ? n.then(a, a) : a());
        };
      }
      function d(e, t) {
        var n = e.iterator[t.method];
        if (n === h) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = h),
              d(e, t),
              "throw" === t.method)
            )
              return T;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return T;
        }
        var a = r(n, e.iterator, t.arg);
        if ("throw" === a.type)
          return (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), T;
        var i = a.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = h)),
              (t.delegate = null),
              T)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            T);
      }
      function l(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function c(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(function (e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }, this),
          this.reset(!0);
      }
      function _(e) {
        if (e) {
          var t = e[M];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              r = function t() {
                for (; ++n < e.length; )
                  if (p.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = h), (t.done = !0), t;
              };
            return (r.next = r);
          }
        }
        return { next: f };
      }
      function f() {
        return { value: h, done: !0 };
      }
      var h,
        m = Object.prototype,
        p = m.hasOwnProperty,
        y = "function" == typeof Symbol ? Symbol : {},
        M = y.iterator || "@@iterator",
        g = y.asyncIterator || "@@asyncIterator",
        v = y.toStringTag || "@@toStringTag",
        L = "object" == typeof e,
        Y = t.regeneratorRuntime;
      if (Y) L && (e.exports = Y);
      else {
        (Y = t.regeneratorRuntime = L ? e.exports : {}).wrap = n;
        var w = "suspendedStart",
          k = "suspendedYield",
          b = "executing",
          D = "completed",
          T = {},
          x = {};
        x[M] = function () {
          return this;
        };
        var S = Object.getPrototypeOf,
          j = S && S(S(_([])));
        j && j !== m && p.call(j, M) && (x = j);
        var H = (s.prototype = a.prototype = Object.create(x));
        (i.prototype = H.constructor = s),
          (s.constructor = i),
          (s[v] = i.displayName = "GeneratorFunction"),
          (Y.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === i || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (Y.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, s)
                : ((e.__proto__ = s), v in e || (e[v] = "GeneratorFunction")),
              (e.prototype = Object.create(H)),
              e
            );
          }),
          (Y.awrap = function (e) {
            return { __await: e };
          }),
          o(u.prototype),
          (u.prototype[g] = function () {
            return this;
          }),
          (Y.AsyncIterator = u),
          (Y.async = function (e, t, r, a) {
            var i = new u(n(e, t, r, a));
            return Y.isGeneratorFunction(t)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          o(H),
          (H[v] = "Generator"),
          (H[M] = function () {
            return this;
          }),
          (H.toString = function () {
            return "[object Generator]";
          }),
          (Y.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (Y.values = _),
          (c.prototype = {
            constructor: c,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = h),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = h),
                this.tryEntries.forEach(l),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    p.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = h);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              function t(t, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (n.next = t),
                  r && ((n.method = "next"), (n.arg = h)),
                  !!r
                );
              }
              if (this.done) throw e;
              for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r],
                  i = a.completion;
                if ("root" === a.tryLoc) return t("end");
                if (a.tryLoc <= this.prev) {
                  var s = p.call(a, "catchLoc"),
                    o = p.call(a, "finallyLoc");
                  if (s && o) {
                    if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return t(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return t(a.catchLoc, !0);
                  } else {
                    if (!o)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return t(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  p.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var a = r;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), T)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                T
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), l(n), T;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    l(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = h),
                T
              );
            },
          });
      }
    })(
      (function () {
        return this;
      })() || Function("return this")()
    );
  },
  function (e, t, n) {
    n(220), n(44), n(55), n(250), n(257), n(258), (e.exports = n(3).Promise);
  },
  function (e, t, n) {
    var r = n(47),
      a = n(46);
    e.exports = function (e) {
      return function (t, n) {
        var i,
          s,
          o = String(a(t)),
          u = r(n),
          d = o.length;
        return u < 0 || u >= d
          ? e
            ? ""
            : void 0
          : (i = o.charCodeAt(u)) < 55296 ||
            i > 56319 ||
            u + 1 === d ||
            (s = o.charCodeAt(u + 1)) < 56320 ||
            s > 57343
          ? e
            ? o.charAt(u)
            : i
          : e
          ? o.slice(u, u + 2)
          : s - 56320 + ((i - 55296) << 10) + 65536;
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(222),
      a = n(33),
      i = n(36),
      s = {};
    n(14)(s, n(5)("iterator"), function () {
      return this;
    }),
      (e.exports = function (e, t, n) {
        (e.prototype = r(s, { next: a(1, n) })), i(e, t + " Iterator");
      });
  },
  function (e, t, n) {
    var r = n(15),
      a = n(9),
      i = n(30);
    e.exports = n(17)
      ? Object.defineProperties
      : function (e, t) {
          a(e);
          for (var n, s = i(t), o = s.length, u = 0; o > u; )
            r.f(e, (n = s[u++]), t[n]);
          return e;
        };
  },
  function (e, t, n) {
    var r = n(18),
      a = n(38),
      i = n(48)("IE_PROTO"),
      s = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = a(e)),
          r(e, i)
            ? e[i]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? s
            : null
        );
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(248),
      a = n(249),
      i = n(25),
      s = n(24);
    (e.exports = n(64)(
      Array,
      "Array",
      function (e, t) {
        (this._t = s(e)), (this._i = 0), (this._k = t);
      },
      function () {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), a(1))
          : "keys" == t
          ? a(0, n)
          : "values" == t
          ? a(0, e[n])
          : a(0, [n, e[n]]);
      },
      "values"
    )),
      (i.Arguments = i.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function (e, t) {
    e.exports = function () {};
  },
  function (e, t) {
    e.exports = function (e, t) {
      return { value: t, done: !!e };
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      a,
      i,
      s,
      o = n(40),
      u = n(4),
      d = n(31),
      l = n(66),
      c = n(12),
      _ = n(21),
      f = n(32),
      h = n(251),
      m = n(252),
      p = n(67),
      y = n(68).set,
      M = n(254)(),
      g = n(50),
      v = n(69),
      L = n(70),
      Y = u.TypeError,
      w = u.process,
      k = u.Promise,
      b = "process" == l(w),
      D = function () {},
      T = (a = g.f),
      x = !!(function () {
        try {
          var e = k.resolve(1),
            t = ((e.constructor = {})[n(5)("species")] = function (e) {
              e(D, D);
            });
          return (
            (b || "function" == typeof PromiseRejectionEvent) &&
            e.then(D) instanceof t
          );
        } catch (e) {}
      })(),
      S = function (e) {
        var t;
        return !(!_(e) || "function" != typeof (t = e.then)) && t;
      },
      j = function (e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          M(function () {
            for (var r = e._v, a = 1 == e._s, i = 0; n.length > i; )
              !(function (t) {
                var n,
                  i,
                  s = a ? t.ok : t.fail,
                  o = t.resolve,
                  u = t.reject,
                  d = t.domain;
                try {
                  s
                    ? (a || (2 == e._h && A(e), (e._h = 1)),
                      !0 === s
                        ? (n = r)
                        : (d && d.enter(), (n = s(r)), d && d.exit()),
                      n === t.promise
                        ? u(Y("Promise-chain cycle"))
                        : (i = S(n))
                        ? i.call(n, o, u)
                        : o(n))
                    : u(r);
                } catch (e) {
                  u(e);
                }
              })(n[i++]);
            (e._c = []), (e._n = !1), t && !e._h && H(e);
          });
        }
      },
      H = function (e) {
        y.call(u, function () {
          var t,
            n,
            r,
            a = e._v,
            i = E(e);
          if (
            (i &&
              ((t = v(function () {
                b
                  ? w.emit("unhandledRejection", a, e)
                  : (n = u.onunhandledrejection)
                  ? n({ promise: e, reason: a })
                  : (r = u.console) &&
                    r.error &&
                    r.error("Unhandled promise rejection", a);
              })),
              (e._h = b || E(e) ? 2 : 1)),
            (e._a = void 0),
            i && t.e)
          )
            throw t.v;
        });
      },
      E = function (e) {
        if (1 == e._h) return !1;
        for (var t, n = e._a || e._c, r = 0; n.length > r; )
          if ((t = n[r++]).fail || !E(t.promise)) return !1;
        return !0;
      },
      A = function (e) {
        y.call(u, function () {
          var t;
          b
            ? w.emit("rejectionHandled", e)
            : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      O = function (e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          j(t, !0));
      },
      P = function (e) {
        var t,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === e) throw Y("Promise can't be resolved itself");
            (t = S(e))
              ? M(function () {
                  var r = { _w: n, _d: !1 };
                  try {
                    t.call(e, d(P, r, 1), d(O, r, 1));
                  } catch (e) {
                    O.call(r, e);
                  }
                })
              : ((n._v = e), (n._s = 1), j(n, !1));
          } catch (e) {
            O.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    x ||
      ((k = function (e) {
        h(this, k, "Promise", "_h"), f(e), r.call(this);
        try {
          e(d(P, this, 1), d(O, this, 1));
        } catch (e) {
          O.call(this, e);
        }
      }),
      ((r = function (e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = n(255)(k.prototype, {
        then: function (e, t) {
          var n = T(p(this, k));
          return (
            (n.ok = "function" != typeof e || e),
            (n.fail = "function" == typeof t && t),
            (n.domain = b ? w.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && j(this, !1),
            n.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (i = function () {
        var e = new r();
        (this.promise = e),
          (this.resolve = d(P, e, 1)),
          (this.reject = d(O, e, 1));
      }),
      (g.f = T =
        function (e) {
          return e === k || e === s ? new i(e) : a(e);
        })),
      c(c.G + c.W + c.F * !x, { Promise: k }),
      n(36)(k, "Promise"),
      n(256)("Promise"),
      (s = n(3).Promise),
      c(c.S + c.F * !x, "Promise", {
        reject: function (e) {
          var t = T(this);
          return (0, t.reject)(e), t.promise;
        },
      }),
      c(c.S + c.F * (o || !x), "Promise", {
        resolve: function (e) {
          return L(o && this === s ? k : this, e);
        },
      }),
      c(
        c.S +
          c.F *
            !(
              x &&
              n(227)(function (e) {
                k.all(e).catch(D);
              })
            ),
        "Promise",
        {
          all: function (e) {
            var t = this,
              n = T(t),
              r = n.resolve,
              a = n.reject,
              i = v(function () {
                var n = [],
                  i = 0,
                  s = 1;
                m(e, !1, function (e) {
                  var o = i++,
                    u = !1;
                  n.push(void 0),
                    s++,
                    t.resolve(e).then(function (e) {
                      u || ((u = !0), (n[o] = e), --s || r(n));
                    }, a);
                }),
                  --s || r(n);
              });
            return i.e && a(i.v), n.promise;
          },
          race: function (e) {
            var t = this,
              n = T(t),
              r = n.reject,
              a = v(function () {
                m(e, !1, function (e) {
                  t.resolve(e).then(n.resolve, r);
                });
              });
            return a.e && r(a.v), n.promise;
          },
        }
      );
  },
  function (e, t) {
    e.exports = function (e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(n + ": incorrect invocation!");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(31),
      a = n(225),
      i = n(226),
      s = n(9),
      o = n(58),
      u = n(60),
      d = {},
      l = {};
    ((t = e.exports =
      function (e, t, n, c, _) {
        var f,
          h,
          m,
          p,
          y = _
            ? function () {
                return e;
              }
            : u(e),
          M = r(n, c, t ? 2 : 1),
          g = 0;
        if ("function" != typeof y) throw TypeError(e + " is not iterable!");
        if (i(y)) {
          for (f = o(e.length); f > g; g++)
            if ((p = t ? M(s((h = e[g]))[0], h[1]) : M(e[g])) === d || p === l)
              return p;
        } else
          for (m = y.call(e); !(h = m.next()).done; )
            if ((p = a(m, M, h.value, t)) === d || p === l) return p;
      }).BREAK = d),
      (t.RETURN = l);
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    };
  },
  function (e, t, n) {
    var r = n(4),
      a = n(68).set,
      i = r.MutationObserver || r.WebKitMutationObserver,
      s = r.process,
      o = r.Promise,
      u = "process" == n(29)(s);
    e.exports = function () {
      var e,
        t,
        n,
        d = function () {
          var r, a;
          for (u && (r = s.domain) && r.exit(); e; ) {
            (a = e.fn), (e = e.next);
            try {
              a();
            } catch (r) {
              throw (e ? n() : (t = void 0), r);
            }
          }
          (t = void 0), r && r.enter();
        };
      if (u)
        n = function () {
          s.nextTick(d);
        };
      else if (i) {
        var l = !0,
          c = document.createTextNode("");
        new i(d).observe(c, { characterData: !0 }),
          (n = function () {
            c.data = l = !l;
          });
      } else if (o && o.resolve) {
        var _ = o.resolve();
        n = function () {
          _.then(d);
        };
      } else
        n = function () {
          a.call(r, d);
        };
      return function (r) {
        var a = { fn: r, next: void 0 };
        t && (t.next = a), e || ((e = a), n()), (t = a);
      };
    };
  },
  function (e, t, n) {
    var r = n(14);
    e.exports = function (e, t, n) {
      for (var a in t) n && e[a] ? (e[a] = t[a]) : r(e, a, t[a]);
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      a = n(3),
      i = n(15),
      s = n(17),
      o = n(5)("species");
    e.exports = function (e) {
      var t = "function" == typeof a[e] ? a[e] : r[e];
      s &&
        t &&
        !t[o] &&
        i.f(t, o, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(12),
      a = n(3),
      i = n(4),
      s = n(67),
      o = n(70);
    r(r.P + r.R, "Promise", {
      finally: function (e) {
        var t = s(this, a.Promise || i.Promise),
          n = "function" == typeof e;
        return this.then(
          n
            ? function (n) {
                return o(t, e()).then(function () {
                  return n;
                });
              }
            : e,
          n
            ? function (n) {
                return o(t, e()).then(function () {
                  throw n;
                });
              }
            : e
        );
      },
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(12),
      a = n(50),
      i = n(69);
    r(r.S, "Promise", {
      try: function (e) {
        var t = a.f(this),
          n = i(e);
        return (n.e ? t.reject : t.resolve)(n.v), t.promise;
      },
    });
  },
  function (e, t, n) {
    n(260), (e.exports = n(3).Object.assign);
  },
  function (e, t, n) {
    var r = n(12);
    r(r.S + r.F, "Object", { assign: n(261) });
  },
  function (e, t, n) {
    "use strict";
    var r = n(30),
      a = n(61),
      i = n(45),
      s = n(38),
      o = n(63),
      u = Object.assign;
    e.exports =
      !u ||
      n(23)(function () {
        var e = {},
          t = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
        );
      })
        ? function (e, t) {
            for (
              var n = s(e), u = arguments.length, d = 1, l = a.f, c = i.f;
              u > d;

            )
              for (
                var _,
                  f = o(arguments[d++]),
                  h = l ? r(f).concat(l(f)) : r(f),
                  m = h.length,
                  p = 0;
                m > p;

              )
                c.call(f, (_ = h[p++])) && (n[_] = f[_]);
            return n;
          }
        : u;
  },
  function (e, t, n) {
    n(55), n(44), (e.exports = n(263));
  },
  function (e, t, n) {
    var r = n(9),
      a = n(60);
    e.exports = n(3).getIterator = function (e) {
      var t = a(e);
      if ("function" != typeof t) throw TypeError(e + " is not iterable!");
      return r(t.call(e));
    };
  },
  function (e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
      compiler: [7, ">= 4.0.0"],
      main: function (e, t, n, r, a) {
        var i,
          s,
          o = null != t ? t : e.nullContext || {},
          u = n.helperMissing;
        return (
          '<div class="alert alert-' +
          e.escapeExpression(
            "function" ==
              typeof (s =
                null != (s = n.type || (null != t ? t.type : t)) ? s : u)
              ? s.call(o, { name: "type", hash: {}, data: a })
              : s
          ) +
          ' alert-dismissible fade show" id="alireview-toast" role="alert">\n  ' +
          (null !=
          (i =
            "function" ==
            typeof (s =
              null != (s = n.message || (null != t ? t.message : t)) ? s : u)
              ? s.call(o, { name: "message", hash: {}, data: a })
              : s)
            ? i
            : "") +
          '\n\n  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n    <span aria-hidden="true">&times;</span>\n  </button>\n</div>'
        );
      },
      useData: !0,
    });
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    }
    function i() {
      var e = new s.HandlebarsEnvironment();
      return (
        d.extend(e, s),
        (e.SafeString = o.default),
        (e.Exception = u.default),
        (e.Utils = d),
        (e.escapeExpression = d.escapeExpression),
        (e.VM = l),
        (e.template = function (t) {
          return l.template(t, e);
        }),
        e
      );
    }
    t.__esModule = !0;
    var s = a(n(71)),
      o = r(n(277)),
      u = r(n(27)),
      d = a(n(8)),
      l = a(n(278)),
      c = r(n(279)),
      _ = i();
    (_.create = i),
      c.default(_),
      (_.default = _),
      (t.default = _),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.__esModule = !0),
      (t.registerDefaultHelpers = function (e) {
        a.default(e),
          i.default(e),
          s.default(e),
          o.default(e),
          u.default(e),
          d.default(e),
          l.default(e);
      });
    var a = r(n(267)),
      i = r(n(268)),
      s = r(n(269)),
      o = r(n(270)),
      u = r(n(271)),
      d = r(n(272)),
      l = r(n(273));
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(8);
    (t.default = function (e) {
      e.registerHelper("blockHelperMissing", function (t, n) {
        var a = n.inverse,
          i = n.fn;
        if (!0 === t) return i(this);
        if (!1 === t || null == t) return a(this);
        if (r.isArray(t))
          return t.length > 0
            ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n))
            : a(this);
        if (n.data && n.ids) {
          var s = r.createFrame(n.data);
          (s.contextPath = r.appendContextPath(n.data.contextPath, n.name)),
            (n = { data: s });
        }
        return i(t, n);
      });
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(8),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n(27));
    (t.default = function (e) {
      e.registerHelper("each", function (e, t) {
        function n(t, n, a) {
          d &&
            ((d.key = t),
            (d.index = n),
            (d.first = 0 === n),
            (d.last = !!a),
            l && (d.contextPath = l + t)),
            (u += i(e[t], {
              data: d,
              blockParams: r.blockParams([e[t], t], [l + t, null]),
            }));
        }
        if (!t) throw new a.default("Must pass iterator to #each");
        var i = t.fn,
          s = t.inverse,
          o = 0,
          u = "",
          d = void 0,
          l = void 0;
        if (
          (t.data &&
            t.ids &&
            (l = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
          r.isFunction(e) && (e = e.call(this)),
          t.data && (d = r.createFrame(t.data)),
          e && "object" == typeof e)
        )
          if (r.isArray(e))
            for (var c = e.length; o < c; o++)
              o in e && n(o, o, o === e.length - 1);
          else {
            var _ = void 0;
            for (var f in e)
              e.hasOwnProperty(f) &&
                (void 0 !== _ && n(_, o - 1), (_ = f), o++);
            void 0 !== _ && n(_, o - 1, !0);
          }
        return 0 === o && (u = s(this)), u;
      });
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(27));
    (t.default = function (e) {
      e.registerHelper("helperMissing", function () {
        if (1 !== arguments.length)
          throw new r.default(
            'Missing helper: "' + arguments[arguments.length - 1].name + '"'
          );
      });
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(8);
    (t.default = function (e) {
      e.registerHelper("if", function (e, t) {
        return (
          r.isFunction(e) && (e = e.call(this)),
          (!t.hash.includeZero && !e) || r.isEmpty(e)
            ? t.inverse(this)
            : t.fn(this)
        );
      }),
        e.registerHelper("unless", function (t, n) {
          return e.helpers.if.call(this, t, {
            fn: n.inverse,
            inverse: n.fn,
            hash: n.hash,
          });
        });
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function (e) {
        e.registerHelper("log", function () {
          for (
            var t = [void 0], n = arguments[arguments.length - 1], r = 0;
            r < arguments.length - 1;
            r++
          )
            t.push(arguments[r]);
          var a = 1;
          null != n.hash.level
            ? (a = n.hash.level)
            : n.data && null != n.data.level && (a = n.data.level),
            (t[0] = a),
            e.log.apply(e, t);
        });
      }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    (t.__esModule = !0),
      (t.default = function (e) {
        e.registerHelper("lookup", function (e, t) {
          return e && e[t];
        });
      }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(8);
    (t.default = function (e) {
      e.registerHelper("with", function (e, t) {
        r.isFunction(e) && (e = e.call(this));
        var n = t.fn;
        if (r.isEmpty(e)) return t.inverse(this);
        var a = t.data;
        return (
          t.data &&
            t.ids &&
            ((a = r.createFrame(t.data)).contextPath = r.appendContextPath(
              t.data.contextPath,
              t.ids[0]
            )),
          n(e, {
            data: a,
            blockParams: r.blockParams([e], [a && a.contextPath]),
          })
        );
      });
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    (t.__esModule = !0),
      (t.registerDefaultDecorators = function (e) {
        r.default(e);
      });
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(275));
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(8);
    (t.default = function (e) {
      e.registerDecorator("inline", function (e, t, n, a) {
        var i = e;
        return (
          t.partials ||
            ((t.partials = {}),
            (i = function (a, i) {
              var s = n.partials;
              n.partials = r.extend({}, s, t.partials);
              var o = e(a, i);
              return (n.partials = s), o;
            })),
          (t.partials[a.args[0]] = a.fn),
          i
        );
      });
    }),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = n(8),
      a = {
        methodMap: ["debug", "info", "warn", "error"],
        level: "info",
        lookupLevel: function (e) {
          if ("string" == typeof e) {
            var t = r.indexOf(a.methodMap, e.toLowerCase());
            e = t >= 0 ? t : parseInt(e, 10);
          }
          return e;
        },
        log: function (e) {
          if (
            ((e = a.lookupLevel(e)),
            "undefined" != typeof console && a.lookupLevel(a.level) <= e)
          ) {
            var t = a.methodMap[e];
            console[t] || (t = "log");
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
          }
        },
      };
    (t.default = a), (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      this.string = e;
    }
    (t.__esModule = !0),
      (r.prototype.toString = r.prototype.toHTML =
        function () {
          return "" + this.string;
        }),
      (t.default = r),
      (e.exports = t.default);
  },
  function (e, t, n) {
    "use strict";
    function r(e, t, n, r, a, s, o) {
      function u(t) {
        var a =
            arguments.length <= 1 || void 0 === arguments[1]
              ? {}
              : arguments[1],
          i = o;
        return (
          !o ||
            t == o[0] ||
            (t === e.nullContext && null === o[0]) ||
            (i = [t].concat(o)),
          n(
            e,
            t,
            e.helpers,
            e.partials,
            a.data || r,
            s && [a.blockParams].concat(s),
            i
          )
        );
      }
      return (
        (u = i(n, u, e, o, r, s)),
        (u.program = t),
        (u.depth = o ? o.length : 0),
        (u.blockParams = a || 0),
        u
      );
    }
    function a() {
      return "";
    }
    function i(e, t, n, r, a, i) {
      if (e.decorator) {
        var o = {};
        (t = e.decorator(t, o, n, r && r[0], a, i, r)), s.extend(t, o);
      }
      return t;
    }
    (t.__esModule = !0),
      (t.checkRevision = function (e) {
        var t = (e && e[0]) || 1,
          n = u.COMPILER_REVISION;
        if (t !== n) {
          if (t < n) {
            var r = u.REVISION_CHANGES[n],
              a = u.REVISION_CHANGES[t];
            throw new o.default(
              "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                r +
                ") or downgrade your runtime to an older version (" +
                a +
                ")."
            );
          }
          throw new o.default(
            "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
              e[1] +
              ")."
          );
        }
      }),
      (t.template = function (e, t) {
        function n(t) {
          function r(t) {
            return "" + e.main(a, t, a.helpers, a.partials, o, l, d);
          }
          var s =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1],
            o = s.data;
          n._setup(s),
            !s.partial &&
              e.useData &&
              (o = (function (e, t) {
                return (
                  (t && "root" in t) ||
                    ((t = t ? u.createFrame(t) : {}).root = e),
                  t
                );
              })(t, o));
          var d = void 0,
            l = e.useBlockParams ? [] : void 0;
          return (
            e.useDepths &&
              (d = s.depths
                ? t != s.depths[0]
                  ? [t].concat(s.depths)
                  : s.depths
                : [t]),
            (r = i(e.main, r, a, s.depths || [], o, l))(t, s)
          );
        }
        if (!t) throw new o.default("No environment passed to template");
        if (!e || !e.main)
          throw new o.default("Unknown template object: " + typeof e);
        (e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
        var a = {
          strict: function (e, t) {
            if (!(t in e))
              throw new o.default('"' + t + '" not defined in ' + e);
            return e[t];
          },
          lookup: function (e, t) {
            for (var n = e.length, r = 0; r < n; r++)
              if (e[r] && null != e[r][t]) return e[r][t];
          },
          lambda: function (e, t) {
            return "function" == typeof e ? e.call(t) : e;
          },
          escapeExpression: s.escapeExpression,
          invokePartial: function (n, r, a) {
            a.hash && ((r = s.extend({}, r, a.hash)), a.ids && (a.ids[0] = !0)),
              (n = t.VM.resolvePartial.call(this, n, r, a));
            var i = t.VM.invokePartial.call(this, n, r, a);
            if (
              (null == i &&
                t.compile &&
                ((a.partials[a.name] = t.compile(n, e.compilerOptions, t)),
                (i = a.partials[a.name](r, a))),
              null != i)
            ) {
              if (a.indent) {
                for (
                  var u = i.split("\n"), d = 0, l = u.length;
                  d < l && (u[d] || d + 1 !== l);
                  d++
                )
                  u[d] = a.indent + u[d];
                i = u.join("\n");
              }
              return i;
            }
            throw new o.default(
              "The partial " +
                a.name +
                " could not be compiled when running in runtime-only mode"
            );
          },
          fn: function (t) {
            var n = e[t];
            return (n.decorator = e[t + "_d"]), n;
          },
          programs: [],
          program: function (e, t, n, a, i) {
            var s = this.programs[e],
              o = this.fn(e);
            return (
              t || i || a || n
                ? (s = r(this, e, o, t, n, a, i))
                : s || (s = this.programs[e] = r(this, e, o)),
              s
            );
          },
          data: function (e, t) {
            for (; e && t--; ) e = e._parent;
            return e;
          },
          merge: function (e, t) {
            var n = e || t;
            return e && t && e !== t && (n = s.extend({}, t, e)), n;
          },
          nullContext: Object.seal({}),
          noop: t.VM.noop,
          compilerInfo: e.compiler,
        };
        return (
          (n.isTop = !0),
          (n._setup = function (n) {
            n.partial
              ? ((a.helpers = n.helpers),
                (a.partials = n.partials),
                (a.decorators = n.decorators))
              : ((a.helpers = a.merge(n.helpers, t.helpers)),
                e.usePartial && (a.partials = a.merge(n.partials, t.partials)),
                (e.usePartial || e.useDecorators) &&
                  (a.decorators = a.merge(n.decorators, t.decorators)));
          }),
          (n._child = function (t, n, i, s) {
            if (e.useBlockParams && !i)
              throw new o.default("must pass block params");
            if (e.useDepths && !s)
              throw new o.default("must pass parent depths");
            return r(a, t, e[t], n, 0, i, s);
          }),
          n
        );
      }),
      (t.wrapProgram = r),
      (t.resolvePartial = function (e, t, n) {
        return (
          e
            ? e.call || n.name || ((n.name = e), (e = n.partials[e]))
            : (e =
                "@partial-block" === n.name
                  ? n.data["partial-block"]
                  : n.partials[n.name]),
          e
        );
      }),
      (t.invokePartial = function (e, t, n) {
        var r = n.data && n.data["partial-block"];
        (n.partial = !0),
          n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
        var i = void 0;
        if (
          (n.fn &&
            n.fn !== a &&
            (function () {
              n.data = u.createFrame(n.data);
              var e = n.fn;
              (i = n.data["partial-block"] =
                function (t) {
                  var n =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? {}
                      : arguments[1];
                  return (
                    (n.data = u.createFrame(n.data)),
                    (n.data["partial-block"] = r),
                    e(t, n)
                  );
                }),
                e.partials &&
                  (n.partials = s.extend({}, n.partials, e.partials));
            })(),
          void 0 === e && i && (e = i),
          void 0 === e)
        )
          throw new o.default("The partial " + n.name + " could not be found");
        if (e instanceof Function) return e(t, n);
      }),
      (t.noop = a);
    var s = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(8)),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n(27)),
      u = n(71);
  },
  function (e, t, n) {
    "use strict";
    (function (n) {
      (t.__esModule = !0),
        (t.default = function (e) {
          var t = void 0 !== n ? n : window,
            r = t.Handlebars;
          e.noConflict = function () {
            return t.Handlebars === e && (t.Handlebars = r), e;
          };
        }),
        (e.exports = t.default);
    }.call(t, n(6)));
  },
  function (e, t, n) {
    (function (e) {
      var r = n(281),
        a = n(292),
        i = n(293),
        s = n(294),
        o = t;
      (o.request = function (t, n) {
        t = "string" == typeof t ? s.parse(t) : a(t);
        var i = -1 === e.location.protocol.search(/^https?:$/) ? "http:" : "",
          o = t.protocol || i,
          u = t.hostname || t.host,
          d = t.port,
          l = t.path || "/";
        u && -1 !== u.indexOf(":") && (u = "[" + u + "]"),
          (t.url = (u ? o + "//" + u : "") + (d ? ":" + d : "") + l),
          (t.method = (t.method || "GET").toUpperCase()),
          (t.headers = t.headers || {});
        var c = new r(t);
        return n && c.on("response", n), c;
      }),
        (o.get = function (e, t) {
          var n = o.request(e, t);
          return n.end(), n;
        }),
        (o.Agent = function () {}),
        (o.Agent.defaultMaxSockets = 4),
        (o.STATUS_CODES = i),
        (o.METHODS = [
          "CHECKOUT",
          "CONNECT",
          "COPY",
          "DELETE",
          "GET",
          "HEAD",
          "LOCK",
          "M-SEARCH",
          "MERGE",
          "MKACTIVITY",
          "MKCOL",
          "MOVE",
          "NOTIFY",
          "OPTIONS",
          "PATCH",
          "POST",
          "PROPFIND",
          "PROPPATCH",
          "PURGE",
          "PUT",
          "REPORT",
          "SEARCH",
          "SUBSCRIBE",
          "TRACE",
          "UNLOCK",
          "UNSUBSCRIBE",
        ]);
    }.call(t, n(6)));
  },
  function (e, t, n) {
    (function (t, r, a) {
      var i = n(73),
        s = n(13),
        o = n(284),
        u = n(74),
        d = n(291),
        l = o.IncomingMessage,
        c = o.readyStates,
        _ = (e.exports = function (e) {
          var n = this;
          u.Writable.call(n),
            (n._opts = e),
            (n._body = []),
            (n._headers = {}),
            e.auth &&
              n.setHeader(
                "Authorization",
                "Basic " + new t(e.auth).toString("base64")
              ),
            Object.keys(e.headers).forEach(function (t) {
              n.setHeader(t, e.headers[t]);
            });
          var r,
            a = !0;
          if ("disable-fetch" === e.mode || "timeout" in e) (a = !1), (r = !0);
          else if ("prefer-streaming" === e.mode) r = !1;
          else if ("allow-wrong-content-type" === e.mode)
            r = !i.overrideMimeType;
          else {
            if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode)
              throw new Error("Invalid value for opts.mode");
            r = !0;
          }
          (n._mode = (function (e, t) {
            return i.fetch && t
              ? "fetch"
              : i.mozchunkedarraybuffer
              ? "moz-chunked-arraybuffer"
              : i.msstream
              ? "ms-stream"
              : i.arraybuffer && e
              ? "arraybuffer"
              : i.vbArray && e
              ? "text:vbarray"
              : "text";
          })(r, a)),
            n.on("finish", function () {
              n._onFinish();
            });
        });
      s(_, u.Writable),
        (_.prototype.setHeader = function (e, t) {
          var n = e.toLowerCase();
          -1 === f.indexOf(n) && (this._headers[n] = { name: e, value: t });
        }),
        (_.prototype.getHeader = function (e) {
          var t = this._headers[e.toLowerCase()];
          return t ? t.value : null;
        }),
        (_.prototype.removeHeader = function (e) {
          delete this._headers[e.toLowerCase()];
        }),
        (_.prototype._onFinish = function () {
          var e = this;
          if (!e._destroyed) {
            var n = e._opts,
              s = e._headers,
              o = null;
            "GET" !== n.method &&
              "HEAD" !== n.method &&
              (o = i.blobConstructor
                ? new r.Blob(
                    e._body.map(function (e) {
                      return d(e);
                    }),
                    { type: (s["content-type"] || {}).value || "" }
                  )
                : t.concat(e._body).toString());
            var u = [];
            if (
              (Object.keys(s).forEach(function (e) {
                var t = s[e].name,
                  n = s[e].value;
                Array.isArray(n)
                  ? n.forEach(function (e) {
                      u.push([t, e]);
                    })
                  : u.push([t, n]);
              }),
              "fetch" === e._mode)
            )
              r.fetch(e._opts.url, {
                method: e._opts.method,
                headers: u,
                body: o || void 0,
                mode: "cors",
                credentials: n.withCredentials ? "include" : "same-origin",
              }).then(
                function (t) {
                  (e._fetchResponse = t), e._connect();
                },
                function (t) {
                  e.emit("error", t);
                }
              );
            else {
              var l = (e._xhr = new r.XMLHttpRequest());
              try {
                l.open(e._opts.method, e._opts.url, !0);
              } catch (t) {
                return void a.nextTick(function () {
                  e.emit("error", t);
                });
              }
              "responseType" in l && (l.responseType = e._mode.split(":")[0]),
                "withCredentials" in l &&
                  (l.withCredentials = !!n.withCredentials),
                "text" === e._mode &&
                  "overrideMimeType" in l &&
                  l.overrideMimeType("text/plain; charset=x-user-defined"),
                "timeout" in n &&
                  ((l.timeout = n.timeout),
                  (l.ontimeout = function () {
                    e.emit("timeout");
                  })),
                u.forEach(function (e) {
                  l.setRequestHeader(e[0], e[1]);
                }),
                (e._response = null),
                (l.onreadystatechange = function () {
                  switch (l.readyState) {
                    case c.LOADING:
                    case c.DONE:
                      e._onXHRProgress();
                  }
                }),
                "moz-chunked-arraybuffer" === e._mode &&
                  (l.onprogress = function () {
                    e._onXHRProgress();
                  }),
                (l.onerror = function () {
                  e._destroyed || e.emit("error", new Error("XHR error"));
                });
              try {
                l.send(o);
              } catch (t) {
                return void a.nextTick(function () {
                  e.emit("error", t);
                });
              }
            }
          }
        }),
        (_.prototype._onXHRProgress = function () {
          (function (e) {
            try {
              var t = e.status;
              return null !== t && 0 !== t;
            } catch (e) {
              return !1;
            }
          })(this._xhr) &&
            !this._destroyed &&
            (this._response || this._connect(),
            this._response._onXHRProgress());
        }),
        (_.prototype._connect = function () {
          var e = this;
          e._destroyed ||
            ((e._response = new l(e._xhr, e._fetchResponse, e._mode)),
            e._response.on("error", function (t) {
              e.emit("error", t);
            }),
            e.emit("response", e._response));
        }),
        (_.prototype._write = function (e, t, n) {
          this._body.push(e), n();
        }),
        (_.prototype.abort = _.prototype.destroy =
          function () {
            (this._destroyed = !0),
              this._response && (this._response._destroyed = !0),
              this._xhr && this._xhr.abort();
          }),
        (_.prototype.end = function (e, t, n) {
          "function" == typeof e && ((n = e), (e = void 0)),
            u.Writable.prototype.end.call(this, e, t, n);
        }),
        (_.prototype.flushHeaders = function () {}),
        (_.prototype.setTimeout = function () {}),
        (_.prototype.setNoDelay = function () {}),
        (_.prototype.setSocketKeepAlive = function () {});
      var f = [
        "accept-charset",
        "accept-encoding",
        "access-control-request-headers",
        "access-control-request-method",
        "connection",
        "content-length",
        "cookie",
        "cookie2",
        "date",
        "dnt",
        "expect",
        "host",
        "keep-alive",
        "origin",
        "referer",
        "te",
        "trailer",
        "transfer-encoding",
        "upgrade",
        "user-agent",
        "via",
      ];
    }.call(t, n(19).Buffer, n(6), n(16)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0;
    }
    (t.byteLength = function (e) {
      return (3 * e.length) / 4 - r(e);
    }),
      (t.toByteArray = function (e) {
        var t,
          n,
          a,
          o,
          u,
          d = e.length;
        (o = r(e)), (u = new s((3 * d) / 4 - o)), (n = o > 0 ? d - 4 : d);
        var l = 0;
        for (t = 0; t < n; t += 4)
          (a =
            (i[e.charCodeAt(t)] << 18) |
            (i[e.charCodeAt(t + 1)] << 12) |
            (i[e.charCodeAt(t + 2)] << 6) |
            i[e.charCodeAt(t + 3)]),
            (u[l++] = (a >> 16) & 255),
            (u[l++] = (a >> 8) & 255),
            (u[l++] = 255 & a);
        return (
          2 === o
            ? ((a = (i[e.charCodeAt(t)] << 2) | (i[e.charCodeAt(t + 1)] >> 4)),
              (u[l++] = 255 & a))
            : 1 === o &&
              ((a =
                (i[e.charCodeAt(t)] << 10) |
                (i[e.charCodeAt(t + 1)] << 4) |
                (i[e.charCodeAt(t + 2)] >> 2)),
              (u[l++] = (a >> 8) & 255),
              (u[l++] = 255 & a)),
          u
        );
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, n = e.length, r = n % 3, i = "", s = [], o = 0, u = n - r;
          o < u;
          o += 16383
        )
          s.push(
            (function (e, t, n) {
              for (var r, i = [], s = t; s < n; s += 3)
                (r = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2]),
                  i.push(
                    (function (e) {
                      return (
                        a[(e >> 18) & 63] +
                        a[(e >> 12) & 63] +
                        a[(e >> 6) & 63] +
                        a[63 & e]
                      );
                    })(r)
                  );
              return i.join("");
            })(e, o, o + 16383 > u ? u : o + 16383)
          );
        return (
          1 === r
            ? ((t = e[n - 1]),
              (i += a[t >> 2]),
              (i += a[(t << 4) & 63]),
              (i += "=="))
            : 2 === r &&
              ((t = (e[n - 2] << 8) + e[n - 1]),
              (i += a[t >> 10]),
              (i += a[(t >> 4) & 63]),
              (i += a[(t << 2) & 63]),
              (i += "=")),
          s.push(i),
          s.join("")
        );
      });
    for (
      var a = [],
        i = [],
        s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        u = 0,
        d = o.length;
      u < d;
      ++u
    )
      (a[u] = o[u]), (i[o.charCodeAt(u)] = u);
    (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, n, r, a) {
      var i,
        s,
        o = 8 * a - r - 1,
        u = (1 << o) - 1,
        d = u >> 1,
        l = -7,
        c = n ? a - 1 : 0,
        _ = n ? -1 : 1,
        f = e[t + c];
      for (
        c += _, i = f & ((1 << -l) - 1), f >>= -l, l += o;
        l > 0;
        i = 256 * i + e[t + c], c += _, l -= 8
      );
      for (
        s = i & ((1 << -l) - 1), i >>= -l, l += r;
        l > 0;
        s = 256 * s + e[t + c], c += _, l -= 8
      );
      if (0 === i) i = 1 - d;
      else {
        if (i === u) return s ? NaN : (1 / 0) * (f ? -1 : 1);
        (s += Math.pow(2, r)), (i -= d);
      }
      return (f ? -1 : 1) * s * Math.pow(2, i - r);
    }),
      (t.write = function (e, t, n, r, a, i) {
        var s,
          o,
          u,
          d = 8 * i - a - 1,
          l = (1 << d) - 1,
          c = l >> 1,
          _ = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          f = r ? 0 : i - 1,
          h = r ? 1 : -1,
          m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((o = isNaN(t) ? 1 : 0), (s = l))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                (t += s + c >= 1 ? _ / u : _ * Math.pow(2, 1 - c)) * u >= 2 &&
                  (s++, (u /= 2)),
                s + c >= l
                  ? ((o = 0), (s = l))
                  : s + c >= 1
                  ? ((o = (t * u - 1) * Math.pow(2, a)), (s += c))
                  : ((o = t * Math.pow(2, c - 1) * Math.pow(2, a)), (s = 0)));
          a >= 8;
          e[n + f] = 255 & o, f += h, o /= 256, a -= 8
        );
        for (
          s = (s << a) | o, d += a;
          d > 0;
          e[n + f] = 255 & s, f += h, s /= 256, d -= 8
        );
        e[n + f - h] |= 128 * m;
      });
  },
  function (e, t, n) {
    (function (e, r, a) {
      var i = n(73),
        s = n(13),
        o = n(74),
        u = (t.readyStates = {
          UNSENT: 0,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: 4,
        }),
        d = (t.IncomingMessage = function (t, n, a) {
          var s = this;
          if (
            (o.Readable.call(s),
            (s._mode = a),
            (s.headers = {}),
            (s.rawHeaders = []),
            (s.trailers = {}),
            (s.rawTrailers = []),
            s.on("end", function () {
              e.nextTick(function () {
                s.emit("close");
              });
            }),
            "fetch" === a)
          ) {
            (s._fetchResponse = n),
              (s.url = n.url),
              (s.statusCode = n.status),
              (s.statusMessage = n.statusText),
              n.headers.forEach(function (e, t) {
                (s.headers[t.toLowerCase()] = e), s.rawHeaders.push(t, e);
              });
            var u = n.body.getReader();
            function d() {
              u.read()
                .then(function (e) {
                  s._destroyed ||
                    (e.done ? s.push(null) : (s.push(new r(e.value)), d()));
                })
                .catch(function (e) {
                  s.emit("error", e);
                });
            }
            d();
          } else {
            (s._xhr = t),
              (s._pos = 0),
              (s.url = t.responseURL),
              (s.statusCode = t.status),
              (s.statusMessage = t.statusText);
            if (
              (t
                .getAllResponseHeaders()
                .split(/\r?\n/)
                .forEach(function (e) {
                  var t = e.match(/^([^:]+):\s*(.*)/);
                  if (t) {
                    var n = t[1].toLowerCase();
                    "set-cookie" === n
                      ? (void 0 === s.headers[n] && (s.headers[n] = []),
                        s.headers[n].push(t[2]))
                      : void 0 !== s.headers[n]
                      ? (s.headers[n] += ", " + t[2])
                      : (s.headers[n] = t[2]),
                      s.rawHeaders.push(t[1], t[2]);
                  }
                }),
              (s._charset = "x-user-defined"),
              !i.overrideMimeType)
            ) {
              var l = s.rawHeaders["mime-type"];
              if (l) {
                var c = l.match(/;\s*charset=([^;])(;|$)/);
                c && (s._charset = c[1].toLowerCase());
              }
              s._charset || (s._charset = "utf-8");
            }
          }
        });
      s(d, o.Readable),
        (d.prototype._read = function () {}),
        (d.prototype._onXHRProgress = function () {
          var e = this,
            t = e._xhr,
            n = null;
          switch (e._mode) {
            case "text:vbarray":
              if (t.readyState !== u.DONE) break;
              try {
                n = new a.VBArray(t.responseBody).toArray();
              } catch (e) {}
              if (null !== n) {
                e.push(new r(n));
                break;
              }
            case "text":
              try {
                n = t.responseText;
              } catch (t) {
                e._mode = "text:vbarray";
                break;
              }
              if (n.length > e._pos) {
                var i = n.substr(e._pos);
                if ("x-user-defined" === e._charset) {
                  for (var s = new r(i.length), o = 0; o < i.length; o++)
                    s[o] = 255 & i.charCodeAt(o);
                  e.push(s);
                } else e.push(i, e._charset);
                e._pos = n.length;
              }
              break;
            case "arraybuffer":
              if (t.readyState !== u.DONE || !t.response) break;
              (n = t.response), e.push(new r(new Uint8Array(n)));
              break;
            case "moz-chunked-arraybuffer":
              if (((n = t.response), t.readyState !== u.LOADING || !n)) break;
              e.push(new r(new Uint8Array(n)));
              break;
            case "ms-stream":
              if (((n = t.response), t.readyState !== u.LOADING)) break;
              var d = new a.MSStreamReader();
              (d.onprogress = function () {
                d.result.byteLength > e._pos &&
                  (e.push(new r(new Uint8Array(d.result.slice(e._pos)))),
                  (e._pos = d.result.byteLength));
              }),
                (d.onload = function () {
                  e.push(null);
                }),
                d.readAsArrayBuffer(n);
          }
          e._xhr.readyState === u.DONE &&
            "ms-stream" !== e._mode &&
            e.push(null);
        });
    }.call(t, n(16), n(19).Buffer, n(6)));
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    var r = n(51).Buffer;
    e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (e.prototype.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, n = "" + t.data; (t = t.next); )
            n += e + t.data;
          return n;
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return r.alloc(0);
          if (1 === this.length) return this.head.data;
          for (var t = r.allocUnsafe(e >>> 0), n = this.head, a = 0; n; )
            !(function (e, t, n) {
              e.copy(t, n);
            })(n.data, t, a),
              (a += n.data.length),
              (n = n.next);
          return t;
        }),
        e
      );
    })();
  },
  function (e, t, n) {
    function r(e, t) {
      (this._id = e), (this._clearFn = t);
    }
    var a = Function.prototype.apply;
    (t.setTimeout = function () {
      return new r(a.call(setTimeout, window, arguments), clearTimeout);
    }),
      (t.setInterval = function () {
        return new r(a.call(setInterval, window, arguments), clearInterval);
      }),
      (t.clearTimeout = t.clearInterval =
        function (e) {
          e && e.close();
        }),
      (r.prototype.unref = r.prototype.ref = function () {}),
      (r.prototype.close = function () {
        this._clearFn.call(window, this._id);
      }),
      (t.enroll = function (e, t) {
        clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
      }),
      (t.unenroll = function (e) {
        clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
      }),
      (t._unrefActive = t.active =
        function (e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 &&
            (e._idleTimeoutId = setTimeout(function () {
              e._onTimeout && e._onTimeout();
            }, t));
        }),
      n(288),
      (t.setImmediate = setImmediate),
      (t.clearImmediate = clearImmediate);
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        "use strict";
        function r(e) {
          delete o[e];
        }
        function a(e) {
          if (u) setTimeout(a, 0, e);
          else {
            var t = o[e];
            if (t) {
              u = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    r = e.args;
                  switch (r.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(r[0]);
                      break;
                    case 2:
                      t(r[0], r[1]);
                      break;
                    case 3:
                      t(r[0], r[1], r[2]);
                      break;
                    default:
                      t.apply(n, r);
                  }
                })(t);
              } finally {
                r(e), (u = !1);
              }
            }
          }
        }
        if (!e.setImmediate) {
          var i,
            s = 1,
            o = {},
            u = !1,
            d = e.document,
            l = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (l = l && l.setTimeout ? l : e),
            "[object process]" === {}.toString.call(e.process)
              ? (i = function (e) {
                  t.nextTick(function () {
                    a(e);
                  });
                })
              : (function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? (function () {
                  var t = "setImmediate$" + Math.random() + "$",
                    n = function (n) {
                      n.source === e &&
                        "string" == typeof n.data &&
                        0 === n.data.indexOf(t) &&
                        a(+n.data.slice(t.length));
                    };
                  e.addEventListener
                    ? e.addEventListener("message", n, !1)
                    : e.attachEvent("onmessage", n),
                    (i = function (n) {
                      e.postMessage(t + n, "*");
                    });
                })()
              : e.MessageChannel
              ? (function () {
                  var e = new MessageChannel();
                  (e.port1.onmessage = function (e) {
                    a(e.data);
                  }),
                    (i = function (t) {
                      e.port2.postMessage(t);
                    });
                })()
              : d && "onreadystatechange" in d.createElement("script")
              ? (function () {
                  var e = d.documentElement;
                  i = function (t) {
                    var n = d.createElement("script");
                    (n.onreadystatechange = function () {
                      a(t),
                        (n.onreadystatechange = null),
                        e.removeChild(n),
                        (n = null);
                    }),
                      e.appendChild(n);
                  };
                })()
              : (i = function (e) {
                  setTimeout(a, 0, e);
                }),
            (l.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var r = { callback: e, args: t };
              return (o[s] = r), i(s), s++;
            }),
            (l.clearImmediate = r);
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }.call(t, n(6), n(16)));
  },
  function (e, t, n) {
    (function (t) {
      function n(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var n = t.localStorage[e];
        return null != n && "true" === String(n).toLowerCase();
      }
      e.exports = function (e, t) {
        if (n("noDeprecation")) return e;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(t);
            n("traceDeprecation"), (r = !0);
          }
          return e.apply(this, arguments);
        };
      };
    }.call(t, n(6)));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      if (!(this instanceof r)) return new r(e);
      a.call(this, e);
    }
    e.exports = r;
    var a = n(81),
      i = n(28);
    (i.inherits = n(13)),
      i.inherits(r, a),
      (r.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    var r = n(19).Buffer;
    e.exports = function (e) {
      if (e instanceof Uint8Array) {
        if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
          return e.buffer;
        if ("function" == typeof e.buffer.slice)
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
      }
      if (r.isBuffer(e)) {
        for (var t = new Uint8Array(e.length), n = e.length, a = 0; a < n; a++)
          t[a] = e[a];
        return t.buffer;
      }
      throw new Error("Argument must be a Buffer");
    };
  },
  function (e, t) {
    e.exports = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        for (var a in r) n.call(r, a) && (e[a] = r[a]);
      }
      return e;
    };
    var n = Object.prototype.hasOwnProperty;
  },
  function (e, t) {
    e.exports = {
      100: "Continue",
      101: "Switching Protocols",
      102: "Processing",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      207: "Multi-Status",
      208: "Already Reported",
      226: "IM Used",
      300: "Multiple Choices",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      308: "Permanent Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Payload Too Large",
      414: "URI Too Long",
      415: "Unsupported Media Type",
      416: "Range Not Satisfiable",
      417: "Expectation Failed",
      418: "I'm a teapot",
      421: "Misdirected Request",
      422: "Unprocessable Entity",
      423: "Locked",
      424: "Failed Dependency",
      425: "Unordered Collection",
      426: "Upgrade Required",
      428: "Precondition Required",
      429: "Too Many Requests",
      431: "Request Header Fields Too Large",
      451: "Unavailable For Legal Reasons",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported",
      506: "Variant Also Negotiates",
      507: "Insufficient Storage",
      508: "Loop Detected",
      509: "Bandwidth Limit Exceeded",
      510: "Not Extended",
      511: "Network Authentication Required",
    };
  },
  function (e, t, n) {
    "use strict";
    function r() {
      (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    function a(e, t, n) {
      if (e && s.isObject(e) && e instanceof r) return e;
      var a = new r();
      return a.parse(e, t, n), a;
    }
    var i = n(295),
      s = n(296);
    (t.parse = a),
      (t.resolve = function (e, t) {
        return a(e, !1, !0).resolve(t);
      }),
      (t.resolveObject = function (e, t) {
        return e ? a(e, !1, !0).resolveObject(t) : t;
      }),
      (t.format = function (e) {
        return (
          s.isString(e) && (e = a(e)),
          e instanceof r ? e.format() : r.prototype.format.call(e)
        );
      }),
      (t.Url = r);
    var o = /^([a-z0-9.+-]+:)/i,
      u = /:[0-9]*$/,
      d = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      l = ["{", "}", "|", "\\", "^", "`"].concat([
        "<",
        ">",
        '"',
        "`",
        " ",
        "\r",
        "\n",
        "\t",
      ]),
      c = ["'"].concat(l),
      _ = ["%", "/", "?", ";", "#"].concat(c),
      f = ["/", "?", "#"],
      h = /^[+a-z0-9A-Z_-]{0,63}$/,
      m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      p = { javascript: !0, "javascript:": !0 },
      y = { javascript: !0, "javascript:": !0 },
      M = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
      },
      g = n(297);
    (r.prototype.parse = function (e, t, n) {
      if (!s.isString(e))
        throw new TypeError(
          "Parameter 'url' must be a string, not " + typeof e
        );
      var r = e.indexOf("?"),
        a = -1 !== r && r < e.indexOf("#") ? "?" : "#",
        u = e.split(a);
      u[0] = u[0].replace(/\\/g, "/");
      var l = (e = u.join(a));
      if (((l = l.trim()), !n && 1 === e.split("#").length)) {
        var v = d.exec(l);
        if (v)
          return (
            (this.path = l),
            (this.href = l),
            (this.pathname = v[1]),
            v[2]
              ? ((this.search = v[2]),
                (this.query = t
                  ? g.parse(this.search.substr(1))
                  : this.search.substr(1)))
              : t && ((this.search = ""), (this.query = {})),
            this
          );
      }
      var L = o.exec(l);
      if (L) {
        var Y = (L = L[0]).toLowerCase();
        (this.protocol = Y), (l = l.substr(L.length));
      }
      if (n || L || l.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var w = "//" === l.substr(0, 2);
        !w || (L && y[L]) || ((l = l.substr(2)), (this.slashes = !0));
      }
      if (!y[L] && (w || (L && !M[L]))) {
        for (var k = -1, b = 0; b < f.length; b++) {
          -1 !== (x = l.indexOf(f[b])) && (-1 === k || x < k) && (k = x);
        }
        var D, T;
        -1 !== (T = -1 === k ? l.lastIndexOf("@") : l.lastIndexOf("@", k)) &&
          ((D = l.slice(0, T)),
          (l = l.slice(T + 1)),
          (this.auth = decodeURIComponent(D))),
          (k = -1);
        for (b = 0; b < _.length; b++) {
          var x = l.indexOf(_[b]);
          -1 !== x && (-1 === k || x < k) && (k = x);
        }
        -1 === k && (k = l.length),
          (this.host = l.slice(0, k)),
          (l = l.slice(k)),
          this.parseHost(),
          (this.hostname = this.hostname || "");
        var S =
          "[" === this.hostname[0] &&
          "]" === this.hostname[this.hostname.length - 1];
        if (!S)
          for (
            var j = this.hostname.split(/\./), b = 0, H = j.length;
            b < H;
            b++
          ) {
            var E = j[b];
            if (E && !E.match(h)) {
              for (var A = "", O = 0, P = E.length; O < P; O++)
                E.charCodeAt(O) > 127 ? (A += "x") : (A += E[O]);
              if (!A.match(h)) {
                var C = j.slice(0, b),
                  R = j.slice(b + 1),
                  W = E.match(m);
                W && (C.push(W[1]), R.unshift(W[2])),
                  R.length && (l = "/" + R.join(".") + l),
                  (this.hostname = C.join("."));
                break;
              }
            }
          }
        this.hostname.length > 255
          ? (this.hostname = "")
          : (this.hostname = this.hostname.toLowerCase()),
          S || (this.hostname = i.toASCII(this.hostname));
        var F = this.port ? ":" + this.port : "",
          N = this.hostname || "";
        (this.host = N + F),
          (this.href += this.host),
          S &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            "/" !== l[0] && (l = "/" + l));
      }
      if (!p[Y])
        for (var b = 0, H = c.length; b < H; b++) {
          var I = c[b];
          if (-1 !== l.indexOf(I)) {
            var z = encodeURIComponent(I);
            z === I && (z = escape(I)), (l = l.split(I).join(z));
          }
        }
      var B = l.indexOf("#");
      -1 !== B && ((this.hash = l.substr(B)), (l = l.slice(0, B)));
      var U = l.indexOf("?");
      if (
        (-1 !== U
          ? ((this.search = l.substr(U)),
            (this.query = l.substr(U + 1)),
            t && (this.query = g.parse(this.query)),
            (l = l.slice(0, U)))
          : t && ((this.search = ""), (this.query = {})),
        l && (this.pathname = l),
        M[Y] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
      ) {
        var F = this.pathname || "",
          q = this.search || "";
        this.path = F + q;
      }
      return (this.href = this.format()), this;
    }),
      (r.prototype.format = function () {
        var e = this.auth || "";
        e &&
          ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ":")), (e += "@"));
        var t = this.protocol || "",
          n = this.pathname || "",
          r = this.hash || "",
          a = !1,
          i = "";
        this.host
          ? (a = e + this.host)
          : this.hostname &&
            ((a =
              e +
              (-1 === this.hostname.indexOf(":")
                ? this.hostname
                : "[" + this.hostname + "]")),
            this.port && (a += ":" + this.port)),
          this.query &&
            s.isObject(this.query) &&
            Object.keys(this.query).length &&
            (i = g.stringify(this.query));
        var o = this.search || (i && "?" + i) || "";
        return (
          t && ":" !== t.substr(-1) && (t += ":"),
          this.slashes || ((!t || M[t]) && !1 !== a)
            ? ((a = "//" + (a || "")),
              n && "/" !== n.charAt(0) && (n = "/" + n))
            : a || (a = ""),
          r && "#" !== r.charAt(0) && (r = "#" + r),
          o && "?" !== o.charAt(0) && (o = "?" + o),
          (n = n.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e);
          })),
          (o = o.replace("#", "%23")),
          t + a + n + o + r
        );
      }),
      (r.prototype.resolve = function (e) {
        return this.resolveObject(a(e, !1, !0)).format();
      }),
      (r.prototype.resolveObject = function (e) {
        if (s.isString(e)) {
          var t = new r();
          t.parse(e, !1, !0), (e = t);
        }
        for (var n = new r(), a = Object.keys(this), i = 0; i < a.length; i++) {
          var o = a[i];
          n[o] = this[o];
        }
        if (((n.hash = e.hash), "" === e.href)) return (n.href = n.format()), n;
        if (e.slashes && !e.protocol) {
          for (var u = Object.keys(e), d = 0; d < u.length; d++) {
            var l = u[d];
            "protocol" !== l && (n[l] = e[l]);
          }
          return (
            M[n.protocol] &&
              n.hostname &&
              !n.pathname &&
              (n.path = n.pathname = "/"),
            (n.href = n.format()),
            n
          );
        }
        if (e.protocol && e.protocol !== n.protocol) {
          if (!M[e.protocol]) {
            for (var c = Object.keys(e), _ = 0; _ < c.length; _++) {
              var f = c[_];
              n[f] = e[f];
            }
            return (n.href = n.format()), n;
          }
          if (((n.protocol = e.protocol), e.host || y[e.protocol]))
            n.pathname = e.pathname;
          else {
            for (
              w = (e.pathname || "").split("/");
              w.length && !(e.host = w.shift());

            );
            e.host || (e.host = ""),
              e.hostname || (e.hostname = ""),
              "" !== w[0] && w.unshift(""),
              w.length < 2 && w.unshift(""),
              (n.pathname = w.join("/"));
          }
          if (
            ((n.search = e.search),
            (n.query = e.query),
            (n.host = e.host || ""),
            (n.auth = e.auth),
            (n.hostname = e.hostname || e.host),
            (n.port = e.port),
            n.pathname || n.search)
          ) {
            var h = n.pathname || "",
              m = n.search || "";
            n.path = h + m;
          }
          return (n.slashes = n.slashes || e.slashes), (n.href = n.format()), n;
        }
        var p = n.pathname && "/" === n.pathname.charAt(0),
          g = e.host || (e.pathname && "/" === e.pathname.charAt(0)),
          v = g || p || (n.host && e.pathname),
          L = v,
          Y = (n.pathname && n.pathname.split("/")) || [],
          w = (e.pathname && e.pathname.split("/")) || [],
          k = n.protocol && !M[n.protocol];
        if (
          (k &&
            ((n.hostname = ""),
            (n.port = null),
            n.host && ("" === Y[0] ? (Y[0] = n.host) : Y.unshift(n.host)),
            (n.host = ""),
            e.protocol &&
              ((e.hostname = null),
              (e.port = null),
              e.host && ("" === w[0] ? (w[0] = e.host) : w.unshift(e.host)),
              (e.host = null)),
            (v = v && ("" === w[0] || "" === Y[0]))),
          g)
        )
          (n.host = e.host || "" === e.host ? e.host : n.host),
            (n.hostname =
              e.hostname || "" === e.hostname ? e.hostname : n.hostname),
            (n.search = e.search),
            (n.query = e.query),
            (Y = w);
        else if (w.length)
          Y || (Y = []),
            Y.pop(),
            (Y = Y.concat(w)),
            (n.search = e.search),
            (n.query = e.query);
        else if (!s.isNullOrUndefined(e.search)) {
          if (k) {
            n.hostname = n.host = Y.shift();
            (j = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
              ((n.auth = j.shift()), (n.host = n.hostname = j.shift()));
          }
          return (
            (n.search = e.search),
            (n.query = e.query),
            (s.isNull(n.pathname) && s.isNull(n.search)) ||
              (n.path =
                (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
            (n.href = n.format()),
            n
          );
        }
        if (!Y.length)
          return (
            (n.pathname = null),
            n.search ? (n.path = "/" + n.search) : (n.path = null),
            (n.href = n.format()),
            n
          );
        for (
          var b = Y.slice(-1)[0],
            D =
              ((n.host || e.host || Y.length > 1) &&
                ("." === b || ".." === b)) ||
              "" === b,
            T = 0,
            x = Y.length;
          x >= 0;
          x--
        )
          "." === (b = Y[x])
            ? Y.splice(x, 1)
            : ".." === b
            ? (Y.splice(x, 1), T++)
            : T && (Y.splice(x, 1), T--);
        if (!v && !L) for (; T--; T) Y.unshift("..");
        !v || "" === Y[0] || (Y[0] && "/" === Y[0].charAt(0)) || Y.unshift(""),
          D && "/" !== Y.join("/").substr(-1) && Y.push("");
        var S = "" === Y[0] || (Y[0] && "/" === Y[0].charAt(0));
        if (k) {
          n.hostname = n.host = S ? "" : Y.length ? Y.shift() : "";
          var j = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
          j && ((n.auth = j.shift()), (n.host = n.hostname = j.shift()));
        }
        return (
          (v = v || (n.host && Y.length)) && !S && Y.unshift(""),
          Y.length
            ? (n.pathname = Y.join("/"))
            : ((n.pathname = null), (n.path = null)),
          (s.isNull(n.pathname) && s.isNull(n.search)) ||
            (n.path =
              (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
          (n.auth = e.auth || n.auth),
          (n.slashes = n.slashes || e.slashes),
          (n.href = n.format()),
          n
        );
      }),
      (r.prototype.parseHost = function () {
        var e = this.host,
          t = u.exec(e);
        t &&
          (":" !== (t = t[0]) && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))),
          e && (this.hostname = e);
      });
  },
  function (e, t, n) {
    (function (e, r) {
      var a;
      !(function (i) {
        function s(e) {
          throw new RangeError(S[e]);
        }
        function o(e, t) {
          for (var n = e.length, r = []; n--; ) r[n] = t(e[n]);
          return r;
        }
        function u(e, t) {
          var n = e.split("@"),
            r = "";
          n.length > 1 && ((r = n[0] + "@"), (e = n[1]));
          return r + o((e = e.replace(x, ".")).split("."), t).join(".");
        }
        function d(e) {
          for (var t, n, r = [], a = 0, i = e.length; a < i; )
            (t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < i
              ? 56320 == (64512 & (n = e.charCodeAt(a++)))
                ? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
                : (r.push(t), a--)
              : r.push(t);
          return r;
        }
        function l(e) {
          return o(e, function (e) {
            var t = "";
            return (
              e > 65535 &&
                ((t += E((((e -= 65536) >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += E(e))
            );
          }).join("");
        }
        function c(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
        }
        function _(e, t, n) {
          var r = 0;
          for (
            e = n ? H(e / Y) : e >> 1, e += H(e / t);
            e > (j * v) >> 1;
            r += M
          )
            e = H(e / j);
          return H(r + ((j + 1) * e) / (e + L));
        }
        function f(e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            u,
            d,
            c,
            f,
            h = [],
            m = e.length,
            p = 0,
            L = k,
            Y = w;
          for ((n = e.lastIndexOf(b)) < 0 && (n = 0), r = 0; r < n; ++r)
            e.charCodeAt(r) >= 128 && s("not-basic"), h.push(e.charCodeAt(r));
          for (a = n > 0 ? n + 1 : 0; a < m; ) {
            for (
              i = p, o = 1, u = M;
              a >= m && s("invalid-input"),
                ((d = (function (e) {
                  return e - 48 < 10
                    ? e - 22
                    : e - 65 < 26
                    ? e - 65
                    : e - 97 < 26
                    ? e - 97
                    : M;
                })(e.charCodeAt(a++))) >= M ||
                  d > H((y - p) / o)) &&
                  s("overflow"),
                (p += d * o),
                (c = u <= Y ? g : u >= Y + v ? v : u - Y),
                !(d < c);
              u += M
            )
              o > H(y / (f = M - c)) && s("overflow"), (o *= f);
            (Y = _(p - i, (t = h.length + 1), 0 == i)),
              H(p / t) > y - L && s("overflow"),
              (L += H(p / t)),
              (p %= t),
              h.splice(p++, 0, L);
          }
          return l(h);
        }
        function h(e) {
          var t,
            n,
            r,
            a,
            i,
            o,
            u,
            l,
            f,
            h,
            m,
            p,
            L,
            Y,
            D,
            T = [];
          for (p = (e = d(e)).length, t = k, n = 0, i = w, o = 0; o < p; ++o)
            (m = e[o]) < 128 && T.push(E(m));
          for (r = a = T.length, a && T.push(b); r < p; ) {
            for (u = y, o = 0; o < p; ++o) (m = e[o]) >= t && m < u && (u = m);
            for (
              u - t > H((y - n) / (L = r + 1)) && s("overflow"),
                n += (u - t) * L,
                t = u,
                o = 0;
              o < p;
              ++o
            )
              if (((m = e[o]) < t && ++n > y && s("overflow"), m == t)) {
                for (
                  l = n, f = M;
                  (h = f <= i ? g : f >= i + v ? v : f - i), !(l < h);
                  f += M
                )
                  (D = l - h),
                    (Y = M - h),
                    T.push(E(c(h + (D % Y), 0))),
                    (l = H(D / Y));
                T.push(E(c(l, 0))), (i = _(n, L, r == a)), (n = 0), ++r;
              }
            ++n, ++t;
          }
          return T.join("");
        }
        "object" == typeof t && t && t.nodeType,
          "object" == typeof e && e && e.nodeType;
        var m = "object" == typeof r && r;
        var p,
          y = 2147483647,
          M = 36,
          g = 1,
          v = 26,
          L = 38,
          Y = 700,
          w = 72,
          k = 128,
          b = "-",
          D = /^xn--/,
          T = /[^\x20-\x7E]/,
          x = /[\x2E\u3002\uFF0E\uFF61]/g,
          S = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input",
          },
          j = M - g,
          H = Math.floor,
          E = String.fromCharCode;
        (p = {
          version: "1.4.1",
          ucs2: { decode: d, encode: l },
          decode: f,
          encode: h,
          toASCII: function (e) {
            return u(e, function (e) {
              return T.test(e) ? "xn--" + h(e) : e;
            });
          },
          toUnicode: function (e) {
            return u(e, function (e) {
              return D.test(e) ? f(e.slice(4).toLowerCase()) : e;
            });
          },
        }),
          void 0 !==
            (a = function () {
              return p;
            }.call(t, n, t, e)) && (e.exports = a);
      })();
    }.call(t, n(57)(e), n(6)));
  },
  function (e, t, n) {
    "use strict";
    e.exports = {
      isString: function (e) {
        return "string" == typeof e;
      },
      isObject: function (e) {
        return "object" == typeof e && null !== e;
      },
      isNull: function (e) {
        return null === e;
      },
      isNullOrUndefined: function (e) {
        return null == e;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (t.decode = t.parse = n(298)), (t.encode = t.stringify = n(299));
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, a) {
      (t = t || "&"), (n = n || "=");
      var i = {};
      if ("string" != typeof e || 0 === e.length) return i;
      var s = /\+/g;
      e = e.split(t);
      var o = 1e3;
      a && "number" == typeof a.maxKeys && (o = a.maxKeys);
      var u = e.length;
      o > 0 && u > o && (u = o);
      for (var d = 0; d < u; ++d) {
        var l,
          c,
          _,
          f,
          h = e[d].replace(s, "%20"),
          m = h.indexOf(n);
        m >= 0
          ? ((l = h.substr(0, m)), (c = h.substr(m + 1)))
          : ((l = h), (c = "")),
          (_ = decodeURIComponent(l)),
          (f = decodeURIComponent(c)),
          !(function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          })(i, _)
            ? (i[_] = f)
            : r(i[_])
            ? i[_].push(f)
            : (i[_] = [i[_], f]);
      }
      return i;
    };
    var r =
      Array.isArray ||
      function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (e.map) return e.map(t);
      for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
      return n;
    }
    var a = function (e) {
      switch (typeof e) {
        case "string":
          return e;
        case "boolean":
          return e ? "true" : "false";
        case "number":
          return isFinite(e) ? e : "";
        default:
          return "";
      }
    };
    e.exports = function (e, t, n, o) {
      return (
        (t = t || "&"),
        (n = n || "="),
        null === e && (e = void 0),
        "object" == typeof e
          ? r(s(e), function (s) {
              var o = encodeURIComponent(a(s)) + n;
              return i(e[s])
                ? r(e[s], function (e) {
                    return o + encodeURIComponent(a(e));
                  }).join(t)
                : o + encodeURIComponent(a(e[s]));
            }).join(t)
          : o
          ? encodeURIComponent(a(o)) + n + encodeURIComponent(a(e))
          : ""
      );
    };
    var i =
        Array.isArray ||
        function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        },
      s =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
          return t;
        };
  },
  function (e, t, n) {
    function r(e) {
      return n(a(e));
    }
    function a(e) {
      var t = i[e];
      if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
      return t;
    }
    var i = {
      "./af": 82,
      "./af.js": 82,
      "./ar": 83,
      "./ar-dz": 84,
      "./ar-dz.js": 84,
      "./ar-kw": 85,
      "./ar-kw.js": 85,
      "./ar-ly": 86,
      "./ar-ly.js": 86,
      "./ar-ma": 87,
      "./ar-ma.js": 87,
      "./ar-sa": 88,
      "./ar-sa.js": 88,
      "./ar-tn": 89,
      "./ar-tn.js": 89,
      "./ar.js": 83,
      "./az": 90,
      "./az.js": 90,
      "./be": 91,
      "./be.js": 91,
      "./bg": 92,
      "./bg.js": 92,
      "./bm": 93,
      "./bm.js": 93,
      "./bn": 94,
      "./bn.js": 94,
      "./bo": 95,
      "./bo.js": 95,
      "./br": 96,
      "./br.js": 96,
      "./bs": 97,
      "./bs.js": 97,
      "./ca": 98,
      "./ca.js": 98,
      "./cs": 99,
      "./cs.js": 99,
      "./cv": 100,
      "./cv.js": 100,
      "./cy": 101,
      "./cy.js": 101,
      "./da": 102,
      "./da.js": 102,
      "./de": 103,
      "./de-at": 104,
      "./de-at.js": 104,
      "./de-ch": 105,
      "./de-ch.js": 105,
      "./de.js": 103,
      "./dv": 106,
      "./dv.js": 106,
      "./el": 107,
      "./el.js": 107,
      "./en-au": 108,
      "./en-au.js": 108,
      "./en-ca": 109,
      "./en-ca.js": 109,
      "./en-gb": 110,
      "./en-gb.js": 110,
      "./en-ie": 111,
      "./en-ie.js": 111,
      "./en-il": 112,
      "./en-il.js": 112,
      "./en-in": 113,
      "./en-in.js": 113,
      "./en-nz": 114,
      "./en-nz.js": 114,
      "./en-sg": 115,
      "./en-sg.js": 115,
      "./eo": 116,
      "./eo.js": 116,
      "./es": 117,
      "./es-do": 118,
      "./es-do.js": 118,
      "./es-us": 119,
      "./es-us.js": 119,
      "./es.js": 117,
      "./et": 120,
      "./et.js": 120,
      "./eu": 121,
      "./eu.js": 121,
      "./fa": 122,
      "./fa.js": 122,
      "./fi": 123,
      "./fi.js": 123,
      "./fil": 124,
      "./fil.js": 124,
      "./fo": 125,
      "./fo.js": 125,
      "./fr": 126,
      "./fr-ca": 127,
      "./fr-ca.js": 127,
      "./fr-ch": 128,
      "./fr-ch.js": 128,
      "./fr.js": 126,
      "./fy": 129,
      "./fy.js": 129,
      "./ga": 130,
      "./ga.js": 130,
      "./gd": 131,
      "./gd.js": 131,
      "./gl": 132,
      "./gl.js": 132,
      "./gom-deva": 133,
      "./gom-deva.js": 133,
      "./gom-latn": 134,
      "./gom-latn.js": 134,
      "./gu": 135,
      "./gu.js": 135,
      "./he": 136,
      "./he.js": 136,
      "./hi": 137,
      "./hi.js": 137,
      "./hr": 138,
      "./hr.js": 138,
      "./hu": 139,
      "./hu.js": 139,
      "./hy-am": 140,
      "./hy-am.js": 140,
      "./id": 141,
      "./id.js": 141,
      "./is": 142,
      "./is.js": 142,
      "./it": 143,
      "./it-ch": 144,
      "./it-ch.js": 144,
      "./it.js": 143,
      "./ja": 145,
      "./ja.js": 145,
      "./jv": 146,
      "./jv.js": 146,
      "./ka": 147,
      "./ka.js": 147,
      "./kk": 148,
      "./kk.js": 148,
      "./km": 149,
      "./km.js": 149,
      "./kn": 150,
      "./kn.js": 150,
      "./ko": 151,
      "./ko.js": 151,
      "./ku": 152,
      "./ku.js": 152,
      "./ky": 153,
      "./ky.js": 153,
      "./lb": 154,
      "./lb.js": 154,
      "./lo": 155,
      "./lo.js": 155,
      "./lt": 156,
      "./lt.js": 156,
      "./lv": 157,
      "./lv.js": 157,
      "./me": 158,
      "./me.js": 158,
      "./mi": 159,
      "./mi.js": 159,
      "./mk": 160,
      "./mk.js": 160,
      "./ml": 161,
      "./ml.js": 161,
      "./mn": 162,
      "./mn.js": 162,
      "./mr": 163,
      "./mr.js": 163,
      "./ms": 164,
      "./ms-my": 165,
      "./ms-my.js": 165,
      "./ms.js": 164,
      "./mt": 166,
      "./mt.js": 166,
      "./my": 167,
      "./my.js": 167,
      "./nb": 168,
      "./nb.js": 168,
      "./ne": 169,
      "./ne.js": 169,
      "./nl": 170,
      "./nl-be": 171,
      "./nl-be.js": 171,
      "./nl.js": 170,
      "./nn": 172,
      "./nn.js": 172,
      "./oc-lnc": 173,
      "./oc-lnc.js": 173,
      "./pa-in": 174,
      "./pa-in.js": 174,
      "./pl": 175,
      "./pl.js": 175,
      "./pt": 176,
      "./pt-br": 177,
      "./pt-br.js": 177,
      "./pt.js": 176,
      "./ro": 178,
      "./ro.js": 178,
      "./ru": 179,
      "./ru.js": 179,
      "./sd": 180,
      "./sd.js": 180,
      "./se": 181,
      "./se.js": 181,
      "./si": 182,
      "./si.js": 182,
      "./sk": 183,
      "./sk.js": 183,
      "./sl": 184,
      "./sl.js": 184,
      "./sq": 185,
      "./sq.js": 185,
      "./sr": 186,
      "./sr-cyrl": 187,
      "./sr-cyrl.js": 187,
      "./sr.js": 186,
      "./ss": 188,
      "./ss.js": 188,
      "./sv": 189,
      "./sv.js": 189,
      "./sw": 190,
      "./sw.js": 190,
      "./ta": 191,
      "./ta.js": 191,
      "./te": 192,
      "./te.js": 192,
      "./tet": 193,
      "./tet.js": 193,
      "./tg": 194,
      "./tg.js": 194,
      "./th": 195,
      "./th.js": 195,
      "./tk": 196,
      "./tk.js": 196,
      "./tl-ph": 197,
      "./tl-ph.js": 197,
      "./tlh": 198,
      "./tlh.js": 198,
      "./tr": 199,
      "./tr.js": 199,
      "./tzl": 200,
      "./tzl.js": 200,
      "./tzm": 201,
      "./tzm-latn": 202,
      "./tzm-latn.js": 202,
      "./tzm.js": 201,
      "./ug-cn": 203,
      "./ug-cn.js": 203,
      "./uk": 204,
      "./uk.js": 204,
      "./ur": 205,
      "./ur.js": 205,
      "./uz": 206,
      "./uz-latn": 207,
      "./uz-latn.js": 207,
      "./uz.js": 206,
      "./vi": 208,
      "./vi.js": 208,
      "./x-pseudo": 209,
      "./x-pseudo.js": 209,
      "./yo": 210,
      "./yo.js": 210,
      "./zh-cn": 211,
      "./zh-cn.js": 211,
      "./zh-hk": 212,
      "./zh-hk.js": 212,
      "./zh-mo": 213,
      "./zh-mo.js": 213,
      "./zh-tw": 214,
      "./zh-tw.js": 214,
    };
    (r.keys = function () {
      return Object.keys(i);
    }),
      (r.resolve = a),
      (e.exports = r),
      (r.id = 300);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    var r = n(3),
      a = r.JSON || (r.JSON = { stringify: JSON.stringify });
    e.exports = function (e) {
      return a.stringify.apply(a, arguments);
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function a(e) {
      var t = "arlv_close_banner_" + e.banner_key,
        n = m(t),
        r = e.position.display ? e.position.display : bottom,
        a = e.position.spacing ? e.position.spacing : 0,
        i = e.time_delay ? 1e3 * parseInt(e.time_delay) : 0,
        s = "";
      s =
        "top" == r
          ? "top: " + a + "px; bottom: unset;"
          : "bottom" == r
          ? "top: unset; bottom: " + a + "px;"
          : "bottom: unset; top: 50%; transform: translate(-50%, -50%);";
      var o = { banner: e.banner_url, link: e.link_redirect, style: s };
      n ||
        setTimeout(function () {
          document.body.insertAdjacentHTML("afterbegin", (0, L.default)(o));
          var e = document.getElementById("js-alrv-banner-wrap"),
            n = document.getElementById("js-alrv-banner-close");
          document
            .getElementById("js-alrv-link-redirect")
            .addEventListener("click", function () {
              e.remove(), c(t, !0, 365);
            }),
            n.addEventListener("click", function () {
              e.remove(), c(t, !0, 365);
            });
        }, i);
    }
    function i(e, t) {
      var n = "arlv_is_cooldown_" + t,
        r = m(n),
        a = !0,
        i = !1,
        s = void 0;
      try {
        for (var o, u = (0, M.default)(e); !(a = (o = u.next()).done); a = !0) {
          var l = o.value;
          if (!l.is_search && !r) {
            var c = "arlv_count_display_banner_" + l.id,
              _ = JSON.parse(m(c)),
              h = { banner: l.banner_url, link: l.link_redirect, style: "" };
            switch (l.position) {
              case "under-category":
                var p = document.querySelector("#home-firstscreen .container");
                (h.style = "margin-top : 15px;"),
                  p &&
                    (p.insertAdjacentHTML("beforeend", (0, v.default)(h)),
                    f("show"));
                break;
              case "right-banner":
                var y = document.querySelector(
                  "#home-firstscreen .container > div > div:nth-child(4)"
                );
                y &&
                  (y.insertAdjacentHTML("afterbegin", (0, v.default)(h)),
                  f("show"));
                break;
              case "banner-slider":
                var g =
                    "home" == t
                      ? ".banner-main .slick-slider"
                      : ".slick-slider",
                  L = document.querySelector(g);
                L &&
                  (L.insertAdjacentHTML("afterbegin", (0, v.default)(h)),
                  f("show"));
                break;
              case "top":
                h.style = "margin-bottom : 0;";
                var Y = document.querySelector(".top-banner-container");
                document.body.insertAdjacentHTML(
                  "afterbegin",
                  (0, v.default)(h)
                ),
                  f("show"),
                  Y && Y.remove();
            }
            d(n, c, _);
          }
        }
      } catch (e) {
        (i = !0), (s = e);
      } finally {
        try {
          !a && u.return && u.return();
        } finally {
          if (i) throw s;
        }
      }
    }
    function s(e, t, n) {
      (m(k) && m(k) == b) || h(k, b);
      var r = [];
      if (n) {
        if (
          (r = t.filter(function (e) {
            return "under-category" == e.position && e.type == b;
          })).length
        )
          return r.reduce(function (e, t) {
            return e.count < t.count ? e : t;
          });
      } else if (
        (r = t.filter(function (t) {
          return t.is_search == e && t.type == b;
        })).length
      )
        return r.reduce(function (e, t) {
          return e.count < t.count ? e : t;
        });
      return [];
    }
    function o(e, t) {
      var n = [],
        r = !0,
        a = !1,
        i = void 0;
      try {
        for (
          var s, o = (0, M.default)(e[t]);
          !(r = (s = o.next()).done);
          r = !0
        ) {
          var u = s.value,
            d = "arlv_count_display_banner_" + u.id;
          if (!m(d)) {
            var l = {
              id: u.id,
              count: 0,
              is_search: u.is_search,
              type: u.type,
              position: u.position,
            };
            h(d, (0, y.default)(l));
          }
          var c = JSON.parse(m(d));
          n.push(c);
        }
      } catch (e) {
        (a = !0), (i = e);
      } finally {
        try {
          !r && o.return && o.return();
        } finally {
          if (a) throw i;
        }
      }
      return n;
    }
    function u(e, t, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = [],
        i = s(!0, e, r),
        o = s(!1, e, r),
        u = !0,
        d = !1,
        l = void 0;
      try {
        for (
          var c, _ = (0, M.default)(t[n]);
          !(u = (c = _.next()).done);
          u = !0
        ) {
          var f = c.value;
          ((i.id === f.id && i.count < 3) || (o.id === f.id && o.count < 3)) &&
            a.push(f);
        }
      } catch (e) {
        (d = !0), (l = e);
      } finally {
        try {
          !u && _.return && _.return();
        } finally {
          if (d) throw l;
        }
      }
      return (p = a[0]), a;
    }
    function d(e, t, n) {
      var r = document.getElementById("js-alrv-banner-custom-wrap"),
        a = document.getElementById("js-alrv-banner-custom-close"),
        i = document.getElementById("js-alrv-custom-link-redirect");
      a &&
        a.addEventListener("click", function () {
          r.remove(),
            _(e, !0, 1),
            (n.count += 1),
            h(t, (0, y.default)(n)),
            h(k, n.type);
        }),
        i &&
          i.addEventListener("click", function () {
            r.remove(),
              (n.count += 1),
              f("click"),
              _(e, !0, 1),
              h(t, (0, y.default)(n)),
              h(k, n.type);
          });
    }
    function l() {
      var e = document.querySelector("#form-searchbar"),
        t = document.createElement("input");
      t.setAttribute("type", "text"),
        t.setAttribute("value", "1"),
        t.setAttribute("name", "arlv_cnt_search"),
        t.setAttribute("id", "arlv_cnt_search"),
        t.setAttribute("style", "display:none;");
      document.querySelector("#form-searchbar #arlv_cnt_search") ||
        e.appendChild(t);
    }
    function c(e, t, n) {
      var r = new Date();
      r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
      var a = "expires=" + r.toUTCString();
      document.cookie = e + "=" + t + ";" + a + ";path=/";
    }
    function _(e, t, n) {
      var r = new Date();
      r.setTime(r.getTime() + 60 * n * 60 * 1e3);
      var a = "expires=" + r.toUTCString();
      document.cookie = e + "=" + t + ";" + a + ";path=/";
    }
    function f(e) {
      var t = {
        banner_id: p.id,
        page: p.page,
        name: p.name,
        type: p.type,
        banner_url: p.banner_url,
        action: e,
        is_search: p.is_search ? 1 : 0,
        date_submit: (0, Y.default)().format("YYYY-MM-DD"),
      };
      g.default
        .postClickBanner(t)
        .then(function (e) {})
        .catch(function (e) {});
    }
    function h(e, t) {
      var n = new Date(),
        r = new Date();
      r.setFullYear(n.getFullYear()),
        r.setMonth(n.getMonth()),
        r.setDate(n.getDate() + 1),
        r.setHours(0),
        r.setMinutes(0),
        (document.cookie = e + "=" + t + "; expires=" + r.toString());
    }
    function m(e) {
      for (
        var t = e + "=", n = document.cookie.split(";"), r = 0;
        r < n.length;
        r++
      ) {
        for (var a = n[r]; " " == a.charAt(0); ) a = a.substring(1);
        if (0 == a.indexOf(t)) return a.substring(t.length, a.length);
      }
      return "";
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.loadSettingBanner = t.loadStyleCss = void 0);
    var p,
      y = r(n(232)),
      M = (r(n(358)), r(n(228)), r(n(229))),
      g = r(n(41)),
      v = r(n(363)),
      L = r(n(364)),
      Y = r(n(0)),
      w = "" + window.location.origin + window.location.pathname,
      k = "arlv_type_banner",
      b = 0;
    (t.loadStyleCss = function () {
      document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://ar.cdnhub.co/css/aliexpress_banner_extension.css" rel="stylesheet">'
      );
    }),
      (t.loadSettingBanner = function () {
        window.addEventListener("DOMContentLoaded", function () {
          setTimeout(function () {
            document.getElementById("js-alrv-banner-wrap") ||
              g.default
                .getSettingBanner()
                .then(function (e) {
                  e &&
                  e.custom_banner &&
                  e.custom_banner.status &&
                  w.includes("aliexpress")
                    ? ((b = e.type),
                      (function (t) {
                        var n = (function (t, n) {
                            return (e.custom_banner.data || []).reduce(
                              function (e, t) {
                                var r = t[n];
                                return e[r] || (e[r] = []), e[r].push(t), e;
                              },
                              {}
                            );
                          })(0, "page"),
                          r =
                            (document.getElementById("isHome") &&
                              document.getElementById("isHome").value) ||
                            null,
                          a =
                            "productlist" ===
                            (document.body.getAttribute("data-spm") || null);
                        for (var s in n)
                          if (
                            w.includes("best.") &&
                            "best.aliexpress.com" === s
                          ) {
                            var c = o(n, s),
                              _ = document.querySelector(
                                "#home-firstscreen .new-container.component-wrap"
                              );
                            i(u(c, n, s, !!_), "best"), l();
                          } else
                            w.includes("best.") || "aliexpress.com" !== s
                              ? !r &&
                                "aliexpress.com/item" === s &&
                                w.includes("item")
                                ? i(u(o(n, s), n, s), "item")
                                : a &&
                                  "aliexpress.com, best.aliexpress.com" === s &&
                                  !w.includes("category")
                                ? (!(function (e, t) {
                                    var n = "arlv_is_cooldown_" + "search",
                                      r = m(n),
                                      a = (function (e, t) {
                                        t || (t = location.href);
                                        var n =
                                            "[\\?&]" +
                                            (e = e
                                              .replace(/[\[]/, "\\[")
                                              .replace(/[\]]/, "\\]")) +
                                            "=([^&#]*)",
                                          r = new RegExp(n).exec(t);
                                        return null == r ? null : r[1];
                                      })("arlv_cnt_search");
                                    if (
                                      (m("arlv_count_search") ||
                                        h("arlv_count_search", 0),
                                      a)
                                    ) {
                                      var i = parseInt(m("arlv_count_search"));
                                      h("arlv_count_search", (i += 1));
                                    }
                                    var s = !0,
                                      o = !1,
                                      u = void 0;
                                    try {
                                      for (
                                        var l, c = (0, M.default)(e);
                                        !(s = (l = c.next()).done);
                                        s = !0
                                      ) {
                                        var _ = l.value;
                                        if (!r) {
                                          var p =
                                              "arlv_count_display_banner_" +
                                              _.id,
                                            y = JSON.parse(m(p)),
                                            g = {
                                              banner: _.banner_url,
                                              link: _.link_redirect,
                                              style:
                                                "\n          position: fixed;\n          bottom: 10px;\n          text-align: center;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          left: 50%;\n          transform: translateX(-50%);\n          max-width: 970px;\n        ",
                                            };
                                          parseInt(m("arlv_count_search")) >=
                                            5 &&
                                            (document.body.insertAdjacentHTML(
                                              "afterbegin",
                                              (0, v.default)(g)
                                            ),
                                            d(n, p, y),
                                            f("show"),
                                            h("arlv_count_search", 0));
                                        }
                                      }
                                    } catch (e) {
                                      (o = !0), (u = e);
                                    } finally {
                                      try {
                                        !s && c.return && c.return();
                                      } finally {
                                        if (o) throw u;
                                      }
                                    }
                                  })(u(o(n, s), n, s)),
                                  l())
                                : a &&
                                  "aliexpress.com, best.aliexpress.com" === s &&
                                  w.includes("category") &&
                                  (function (e, t) {
                                    var n = "arlv_is_cooldown_" + "category",
                                      r = m(n);
                                    m("arlv_count_click_category") ||
                                      h("arlv_count_click_category", 0);
                                    var a = document.querySelectorAll(
                                        ".category .content a"
                                      ),
                                      i = !0,
                                      s = !1,
                                      o = void 0;
                                    try {
                                      for (
                                        var u, l = (0, M.default)(a);
                                        !(i = (u = l.next()).done);
                                        i = !0
                                      )
                                        u.value.addEventListener(
                                          "click",
                                          function (e) {
                                            var t = parseInt(
                                              m("arlv_count_click_category")
                                            );
                                            h(
                                              "arlv_count_click_category",
                                              (t += 1)
                                            );
                                          }
                                        );
                                    } catch (e) {
                                      (s = !0), (o = e);
                                    } finally {
                                      try {
                                        !i && l.return && l.return();
                                      } finally {
                                        if (s) throw o;
                                      }
                                    }
                                    var c = !0,
                                      _ = !1,
                                      p = void 0;
                                    try {
                                      for (
                                        var y, g = (0, M.default)(e);
                                        !(c = (y = g.next()).done);
                                        c = !0
                                      ) {
                                        var L = y.value;
                                        if (!r) {
                                          var Y =
                                              "arlv_count_display_banner_" +
                                              L.id,
                                            w = JSON.parse(m(Y)),
                                            k = {
                                              banner: L.banner_url,
                                              link: L.link_redirect,
                                              style:
                                                "\n          position: fixed;\n          bottom: 10px;\n          text-align: center;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          left: 50%;\n          transform: translateX(-50%);\n          max-width: 970px;\n        ",
                                            };
                                          parseInt(
                                            m("arlv_count_click_category")
                                          ) >= 5 &&
                                            (document.body.insertAdjacentHTML(
                                              "afterbegin",
                                              (0, v.default)(k)
                                            ),
                                            d(n, Y, w),
                                            f("show"),
                                            h("arlv_count_click_category", 0));
                                        }
                                      }
                                    } catch (e) {
                                      (_ = !0), (p = e);
                                    } finally {
                                      try {
                                        !c && g.return && g.return();
                                      } finally {
                                        if (_) throw p;
                                      }
                                    }
                                  })(u(o(n, s), n, s))
                              : (i(u(o(n, s), n, s), "home"), l());
                      })())
                    : (function (e) {
                        var t = !0,
                          n = !1,
                          r = void 0;
                        try {
                          for (
                            var i, s = (0, M.default)(e);
                            !(t = (i = s.next()).done);
                            t = !0
                          ) {
                            var o = i.value;
                            if (parseInt(o.status)) {
                              if (o.page.all_page)
                                switch (o.channel.toLowerCase()) {
                                  case "aliexpress":
                                    w.includes("aliexpress.com") && a(o);
                                    break;
                                  case "oberlo":
                                    w.includes("app.oberlo.com") && a(o);
                                }
                              var u = o.page.specific
                                  ? o.page.specific.split(",")
                                  : [],
                                d = !0,
                                l = !1,
                                c = void 0;
                              try {
                                for (
                                  var _, f = (0, M.default)(u);
                                  !(d = (_ = f.next()).done);
                                  d = !0
                                ) {
                                  var h = _.value;
                                  (h = h.trim().replace("*", "")),
                                    w.includes(h) && a(o);
                                }
                              } catch (e) {
                                (l = !0), (c = e);
                              } finally {
                                try {
                                  !d && f.return && f.return();
                                } finally {
                                  if (l) throw c;
                                }
                              }
                            }
                          }
                        } catch (e) {
                          (n = !0), (r = e);
                        } finally {
                          try {
                            !t && s.return && s.return();
                          } finally {
                            if (n) throw r;
                          }
                        }
                      })(e.global_banner);
                })
                .catch(function (e) {});
          }, 1500);
        });
      });
  },
  function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(n(359));
    t.default = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return (0, r.default)(e);
    };
  },
  function (e, t, n) {
    e.exports = { default: n(360), __esModule: !0 };
  },
  function (e, t, n) {
    n(44), n(361), (e.exports = n(3).Array.from);
  },
  function (e, t, n) {
    "use strict";
    var r = n(31),
      a = n(12),
      i = n(38),
      s = n(225),
      o = n(226),
      u = n(58),
      d = n(362),
      l = n(60);
    a(
      a.S +
        a.F *
          !n(227)(function (e) {
            Array.from(e);
          }),
      "Array",
      {
        from: function (e) {
          var t,
            n,
            a,
            c,
            _ = i(e),
            f = "function" == typeof this ? this : Array,
            h = arguments.length,
            m = h > 1 ? arguments[1] : void 0,
            p = void 0 !== m,
            y = 0,
            M = l(_);
          if (
            (p && (m = r(m, h > 2 ? arguments[2] : void 0, 2)),
            void 0 == M || (f == Array && o(M)))
          )
            for (n = new f((t = u(_.length))); t > y; y++)
              d(n, y, p ? m(_[y], y) : _[y]);
          else
            for (c = M.call(_), n = new f(); !(a = c.next()).done; y++)
              d(n, y, p ? s(c, m, [a.value, y], !0) : a.value);
          return (n.length = y), n;
        },
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(15),
      a = n(33);
    e.exports = function (e, t, n) {
      t in e ? r.f(e, t, a(0, n)) : (e[t] = n);
    };
  },
  function (e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
      compiler: [7, ">= 4.0.0"],
      main: function (e, t, n, r, a) {
        var i,
          s = null != t ? t : e.nullContext || {},
          o = n.helperMissing,
          u = e.escapeExpression;
        return (
          '<div class="alrv-banner-custom-wrap" id="js-alrv-banner-custom-wrap" style="' +
          u(
            "function" ==
              typeof (i =
                null != (i = n.style || (null != t ? t.style : t)) ? i : o)
              ? i.call(s, { name: "style", hash: {}, data: a })
              : i
          ) +
          '">\n    <div class="alrv-banner-custom-img-wrap">\n        <a href="' +
          u(
            "function" ==
              typeof (i =
                null != (i = n.link || (null != t ? t.link : t)) ? i : o)
              ? i.call(s, { name: "link", hash: {}, data: a })
              : i
          ) +
          '" target="_blank" id="js-alrv-custom-link-redirect">\n            <img src="' +
          u(
            "function" ==
              typeof (i =
                null != (i = n.banner || (null != t ? t.banner : t)) ? i : o)
              ? i.call(s, { name: "banner", hash: {}, data: a })
              : i
          ) +
          '">\n        </a>\n        <span class="alrv-banner-custom-close" id="js-alrv-banner-custom-close">&times;</span>\n    </div>\n</div>\n'
        );
      },
      useData: !0,
    });
  },
  function (e, t, n) {
    var r = n(7);
    e.exports = (r.default || r).template({
      compiler: [7, ">= 4.0.0"],
      main: function (e, t, n, r, a) {
        var i,
          s = null != t ? t : e.nullContext || {},
          o = n.helperMissing,
          u = e.escapeExpression;
        return (
          '<div class="alrv-banner-wrap" id="js-alrv-banner-wrap" style="' +
          u(
            "function" ==
              typeof (i =
                null != (i = n.style || (null != t ? t.style : t)) ? i : o)
              ? i.call(s, { name: "style", hash: {}, data: a })
              : i
          ) +
          '">\n    <div class="alrv-banner-img-wrap">\n        <a href="' +
          u(
            "function" ==
              typeof (i =
                null != (i = n.link || (null != t ? t.link : t)) ? i : o)
              ? i.call(s, { name: "link", hash: {}, data: a })
              : i
          ) +
          '" target="_blank" id="js-alrv-link-redirect">\n            <img src="' +
          u(
            "function" ==
              typeof (i =
                null != (i = n.banner || (null != t ? t.banner : t)) ? i : o)
              ? i.call(s, { name: "banner", hash: {}, data: a })
              : i
          ) +
          '">\n        </a>\n        <span class="alrv-banner-close" id="js-alrv-banner-close">&times;</span>\n    </div>\n</div>\n'
        );
      },
      useData: !0,
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    n(421);
    var r = n(41),
      a = n.n(r),
      i = n(357);
    n.n(i);
    const s = `${window.location.origin}${window.location.pathname}`;
    window.addEventListener("DOMContentLoaded", function () {
      Object(i.loadStyleCss)();
    }),
      Object(i.loadSettingBanner)(),
      s.includes("aliexpress.com/item/") &&
        chrome.storage.sync.get(["shopName"], (e) => {
          const { shopName: t } = e;
          a.a
            .getSetting(t)
            .then((e) => {
              const { status: t = "" } = e;
              if ("success" === t) {
                const { data: t } = e,
                  { setting: n = {} } = t,
                  { affiliate_program: r = "" } = n;
              }
            })
            .catch((e) => {});
        });
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      try {
        e = e || window.location.href;
        return /^((https?:\/\/)|(\/\/))([a-zA-Z0-9]+)?(.?aliexpress.)[a-zA-Z]+\/item\/[0-9]+(.html)/g.test(
          e
        );
      } catch (e) {
        return !1;
      }
    }
    function a(e) {
      try {
        if (r(e)) {
          return (function (e) {
            const t = e.match(/\d+/g);
            if (t && 0 !== t.length) return parseInt(t.join(""));
          })(new URL(e).pathname);
        }
        return null;
      } catch (e) {
        return null;
      }
    }
    var i = n(34);
    n.n(i);
    const s = "https://minion.alihunter.io";
    window.addEventListener("DOMContentLoaded", () => {
      if (r()) {
        !(async function (e) {
          try {
            const t = `${s}/promotion-generate?productId=${e}&subid=AR`,
              n = await Object(i.post)(t, {
                headers: {
                  "Content-Type": "application/json",
                  "Content-From": "*.aliexpress",
                },
                productId: e,
              });
            if (n && n.result && n.result.promotion_link) {
              const e = `<iframe src="${n.result.promotion_link}" height="0" width="0" style="opacity: 0;"></iframe>`;
              document.body.insertAdjacentHTML("beforeend", e);
            }
          } catch (e) {}
        })(a(window.location.href));
      }
    });
  },
]);
