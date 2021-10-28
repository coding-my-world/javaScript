/*! @beidou/browser v1.2.2 (d8cb94e)*/
var Beidou = function (t) {
    var n = function (t, r) {
        return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, n) {
            t.__proto__ = n
        } || function (t, n) {
            for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
        })(t, r)
    };

    function r(t, r) {
        function e() {
            this.constructor = t
        }

        n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
    }

    var e = function () {
        return (e = Object.assign || function (t) {
            for (var n, r = 1, e = arguments.length; r < e; r++) for (var i in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            return t
        }).apply(this, arguments)
    };

    function i(t, n) {
        var r = {};
        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (r[e] = t[e]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (e = Object.getOwnPropertySymbols(t); i < e.length; i++) n.indexOf(e[i]) < 0 && (r[e[i]] = t[e[i]])
        }
        return r
    }

    function o(t) {
        var n = "function" == typeof Symbol && t[Symbol.iterator], r = 0;
        return n ? n.call(t) : {
            next: function () {
                return t && r >= t.length && (t = void 0), {value: t && t[r++], done: !t}
            }
        }
    }

    function u(t, n) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var e, i, o = r.call(t), u = [];
        try {
            for (; (void 0 === n || n-- > 0) && !(e = o.next()).done;) u.push(e.value)
        } catch (t) {
            i = {error: t}
        } finally {
            try {
                e && !e.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return u
    }

    function a() {
        for (var t = [], n = 0; n < arguments.length; n++) t = t.concat(u(arguments[n]));
        return t
    }

    var c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function f(t, n) {
        return t(n = {exports: {}}, n.exports), n.exports
    }

    var s, v, d = function (t) {
            return t && t.Math == Math && t
        },
        h = d("object" == typeof globalThis && globalThis) || d("object" == typeof window && window) || d("object" == typeof self && self) || d("object" == typeof c && c) || function () {
            return this
        }() || Function("return this")(), l = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }, p = !l(function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }), b = {}.propertyIsEnumerable, m = Object.getOwnPropertyDescriptor, y = {
            f: m && !b.call({1: 2}, 1) ? function (t) {
                var n = m(this, t);
                return !!n && n.enumerable
            } : b
        }, g = function (t, n) {
            return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
        }, w = {}.toString, x = function (t) {
            return w.call(t).slice(8, -1)
        }, A = "".split, E = l(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (t) {
            return "String" == x(t) ? A.call(t, "") : Object(t)
        } : Object, O = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        }, S = function (t) {
            return E(O(t))
        }, T = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }, j = {}, k = function (t) {
            return "function" == typeof t ? t : void 0
        }, z = function (t, n) {
            return arguments.length < 2 ? k(j[t]) || k(h[t]) : j[t] && j[t][n] || h[t] && h[t][n]
        }, P = z("navigator", "userAgent") || "", N = h.process, L = h.Deno, C = N && N.versions || L && L.version,
        F = C && C.v8;
    F ? v = (s = F.split("."))[0] < 4 ? 1 : s[0] + s[1] : P && (!(s = P.match(/Edge\/(\d+)/)) || s[1] >= 74) && (s = P.match(/Chrome\/(\d+)/)) && (v = s[1]);
    var M = v && +v, R = !!Object.getOwnPropertySymbols && !l(function () {
        var t = Symbol();
        return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && M && M < 41
    }), I = R && !Symbol.sham && "symbol" == typeof Symbol.iterator, D = I ? function (t) {
        return "symbol" == typeof t
    } : function (t) {
        var n = z("Symbol");
        return "function" == typeof n && Object(t) instanceof n
    }, H = h["__core-js_shared__"] || function (t, n) {
        try {
            Object.defineProperty(h, t, {value: n, configurable: !0, writable: !0})
        } catch (r) {
            h[t] = n
        }
        return n
    }("__core-js_shared__", {}), V = f(function (t) {
        (t.exports = function (t, n) {
            return H[t] || (H[t] = void 0 !== n ? n : {})
        })("versions", []).push({version: "3.17.3", mode: "pure", copyright: "© 2021 Denis Pushkarev (zloirock.ru)"})
    }), q = function (t) {
        return Object(O(t))
    }, B = {}.hasOwnProperty, U = Object.hasOwn || function (t, n) {
        return B.call(q(t), n)
    }, X = 0, J = Math.random(), Q = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++X + J).toString(36)
    }, _ = V("wks"), K = h.Symbol, W = I ? K : K && K.withoutSetter || Q, Z = function (t) {
        return U(_, t) && (R || "string" == typeof _[t]) || (R && U(K, t) ? _[t] = K[t] : _[t] = W("Symbol." + t)), _[t]
    }, Y = Z("toPrimitive"), G = function (t, n) {
        if (!T(t) || D(t)) return t;
        var r, e = t[Y];
        if (void 0 !== e) {
            if (void 0 === n && (n = "default"), r = e.call(t, n), !T(r) || D(r)) return r;
            throw TypeError("Can't convert object to primitive value")
        }
        return void 0 === n && (n = "number"), function (t, n) {
            var r, e;
            if ("string" === n && "function" == typeof (r = t.toString) && !T(e = r.call(t))) return e;
            if ("function" == typeof (r = t.valueOf) && !T(e = r.call(t))) return e;
            if ("string" !== n && "function" == typeof (r = t.toString) && !T(e = r.call(t))) return e;
            throw TypeError("Can't convert object to primitive value")
        }(t, n)
    }, $ = function (t) {
        var n = G(t, "string");
        return D(n) ? n : String(n)
    }, tt = h.document, nt = T(tt) && T(tt.createElement), rt = function (t) {
        return nt ? tt.createElement(t) : {}
    }, et = !p && !l(function () {
        return 7 != Object.defineProperty(rt("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }), it = Object.getOwnPropertyDescriptor, ot = {
        f: p ? it : function (t, n) {
            if (t = S(t), n = $(n), et) try {
                return it(t, n)
            } catch (t) {
            }
            if (U(t, n)) return g(!y.f.call(t, n), t[n])
        }
    }, ut = /#|\.prototype\./, at = function (t, n) {
        var r = ft[ct(t)];
        return r == vt || r != st && ("function" == typeof n ? l(n) : !!n)
    }, ct = at.normalize = function (t) {
        return String(t).replace(ut, ".").toLowerCase()
    }, ft = at.data = {}, st = at.NATIVE = "N", vt = at.POLYFILL = "P", dt = at, ht = function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }, lt = function (t, n, r) {
        if (ht(t), void 0 === n) return t;
        switch (r) {
            case 0:
                return function () {
                    return t.call(n)
                };
            case 1:
                return function (r) {
                    return t.call(n, r)
                };
            case 2:
                return function (r, e) {
                    return t.call(n, r, e)
                };
            case 3:
                return function (r, e, i) {
                    return t.call(n, r, e, i)
                }
        }
        return function () {
            return t.apply(n, arguments)
        }
    }, pt = function (t) {
        if (!T(t)) throw TypeError(String(t) + " is not an object");
        return t
    }, bt = Object.defineProperty, mt = {
        f: p ? bt : function (t, n, r) {
            if (pt(t), n = $(n), pt(r), et) try {
                return bt(t, n, r)
            } catch (t) {
            }
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
            return "value" in r && (t[n] = r.value), t
        }
    }, yt = p ? function (t, n, r) {
        return mt.f(t, n, g(1, r))
    } : function (t, n, r) {
        return t[n] = r, t
    }, gt = ot.f, wt = function (t) {
        var n = function (n, r, e) {
            if (this instanceof t) {
                switch (arguments.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(n);
                    case 2:
                        return new t(n, r)
                }
                return new t(n, r, e)
            }
            return t.apply(this, arguments)
        };
        return n.prototype = t.prototype, n
    }, xt = function (t, n) {
        var r, e, i, o, u, a, c, f, s = t.target, v = t.global, d = t.stat, l = t.proto,
            p = v ? h : d ? h[s] : (h[s] || {}).prototype, b = v ? j : j[s] || yt(j, s, {})[s], m = b.prototype;
        for (i in n) r = !dt(v ? i : s + (d ? "." : "#") + i, t.forced) && p && U(p, i), u = b[i], r && (a = t.noTargetGet ? (f = gt(p, i)) && f.value : p[i]), o = r && a ? a : n[i], r && typeof u == typeof o || (c = t.bind && r ? lt(o, h) : t.wrap && r ? wt(o) : l && "function" == typeof o ? lt(Function.call, o) : o, (t.sham || o && o.sham || u && u.sham) && yt(c, "sham", !0), yt(b, i, c), l && (U(j, e = s + "Prototype") || yt(j, e, {}), yt(j[e], i, o), t.real && m && !m[i] && yt(m, i, o)))
    }, At = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var t, n = !1, r = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), n = r instanceof Array
        } catch (t) {
        }
        return function (r, e) {
            return pt(r), function (t) {
                if (!T(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
            }(e), n ? t.call(r, e) : r.__proto__ = e, r
        }
    }() : void 0);
    xt({target: "Object", stat: !0}, {setPrototypeOf: At});
    var Et = j.Object.setPrototypeOf || ({__proto__: []} instanceof Array ? function (t, n) {
        return t.__proto__ = n, t
    } : function (t, n) {
        for (var r in n) t.hasOwnProperty(r) || (t[r] = n[r]);
        return t
    });
    var Ot = function (t) {
        function n(n) {
            var r = this.constructor, e = t.call(this, n) || this;
            return e.message = n, e.name = r.prototype.constructor.name, Et(e, r.prototype), e
        }

        return r(n, t), n
    }(Error), St = Array.isArray || function (t) {
        return "Array" == x(t)
    }, Tt = Math.ceil, jt = Math.floor, kt = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? jt : Tt)(t)
    }, zt = Math.min, Pt = function (t) {
        return t > 0 ? zt(kt(t), 9007199254740991) : 0
    }, Nt = function (t, n, r) {
        var e = $(n);
        e in t ? mt.f(t, e, g(0, r)) : t[e] = r
    }, Lt = Z("species"), Ct = function (t, n) {
        return new (function (t) {
            var n;
            return St(t) && ("function" != typeof (n = t.constructor) || n !== Array && !St(n.prototype) ? T(n) && null === (n = n[Lt]) && (n = void 0) : n = void 0), void 0 === n ? Array : n
        }(t))(0 === n ? 0 : n)
    }, Ft = Z("species"), Mt = function (t) {
        return M >= 51 || !l(function () {
            var n = [];
            return (n.constructor = {})[Ft] = function () {
                return {foo: 1}
            }, 1 !== n[t](Boolean).foo
        })
    }, Rt = Z("isConcatSpreadable"), It = M >= 51 || !l(function () {
        var t = [];
        return t[Rt] = !1, t.concat()[0] !== t
    }), Dt = Mt("concat"), Ht = function (t) {
        if (!T(t)) return !1;
        var n = t[Rt];
        return void 0 !== n ? !!n : St(t)
    };
    xt({target: "Array", proto: !0, forced: !It || !Dt}, {
        concat: function (t) {
            var n, r, e, i, o, u = q(this), a = Ct(u, 0), c = 0;
            for (n = -1, e = arguments.length; n < e; n++) if (o = -1 === n ? u : arguments[n], Ht(o)) {
                if (c + (i = Pt(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                for (r = 0; r < i; r++, c++) r in o && Nt(a, c, o[r])
            } else {
                if (c >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                Nt(a, c++, o)
            }
            return a.length = c, a
        }
    });
    var Vt, qt = function (t) {
            if (D(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return String(t)
        }, Bt = Math.max, Ut = Math.min, Xt = function (t, n) {
            var r = kt(t);
            return r < 0 ? Bt(r + n, 0) : Ut(r, n)
        }, Jt = function (t) {
            return function (n, r, e) {
                var i, o = S(n), u = Pt(o.length), a = Xt(e, u);
                if (t && r != r) {
                    for (; u > a;) if ((i = o[a++]) != i) return !0
                } else for (; u > a; a++) if ((t || a in o) && o[a] === r) return t || a || 0;
                return !t && -1
            }
        }, Qt = {includes: Jt(!0), indexOf: Jt(!1)}, _t = {}, Kt = Qt.indexOf, Wt = function (t, n) {
            var r, e = S(t), i = 0, o = [];
            for (r in e) !U(_t, r) && U(e, r) && o.push(r);
            for (; n.length > i;) U(e, r = n[i++]) && (~Kt(o, r) || o.push(r));
            return o
        },
        Zt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Yt = Object.keys || function (t) {
            return Wt(t, Zt)
        }, Gt = p ? Object.defineProperties : function (t, n) {
            pt(t);
            for (var r, e = Yt(n), i = e.length, o = 0; i > o;) mt.f(t, r = e[o++], n[r]);
            return t
        }, $t = z("document", "documentElement"), tn = V("keys"), nn = function (t) {
            return tn[t] || (tn[t] = Q(t))
        }, rn = nn("IE_PROTO"), en = function () {
        }, on = function (t) {
            return "<script>" + t + "<\/script>"
        }, un = function (t) {
            t.write(on("")), t.close();
            var n = t.parentWindow.Object;
            return t = null, n
        }, an = function () {
            try {
                Vt = new ActiveXObject("htmlfile")
            } catch (t) {
            }
            var t, n;
            an = "undefined" != typeof document ? document.domain && Vt ? un(Vt) : ((n = rt("iframe")).style.display = "none", $t.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write(on("document.F=Object")), t.close(), t.F) : un(Vt);
            for (var r = Zt.length; r--;) delete an.prototype[Zt[r]];
            return an()
        };
    _t[rn] = !0;
    var cn = Object.create || function (t, n) {
            var r;
            return null !== t ? (en.prototype = pt(t), r = new en, en.prototype = null, r[rn] = t) : r = an(), void 0 === n ? r : Gt(r, n)
        }, fn = Zt.concat("length", "prototype"), sn = {
            f: Object.getOwnPropertyNames || function (t) {
                return Wt(t, fn)
            }
        }, vn = sn.f, dn = {}.toString,
        hn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        ln = {
            f: function (t) {
                return hn && "[object Window]" == dn.call(t) ? function (t) {
                    try {
                        return vn(t)
                    } catch (t) {
                        return hn.slice()
                    }
                }(t) : vn(S(t))
            }
        }, pn = {f: Object.getOwnPropertySymbols}, bn = function (t, n, r, e) {
            e && e.enumerable ? t[n] = r : yt(t, n, r)
        }, mn = {f: Z}, yn = mt.f, gn = function (t) {
            var n = j.Symbol || (j.Symbol = {});
            U(n, t) || yn(n, t, {value: mn.f(t)})
        }, wn = {};
    wn[Z("toStringTag")] = "z";
    var xn = "[object z]" === String(wn), An = Z("toStringTag"), En = "Arguments" == x(function () {
        return arguments
    }()), On = xn ? x : function (t) {
        var n, r, e;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
            try {
                return t[n]
            } catch (t) {
            }
        }(n = Object(t), An)) ? r : En ? x(n) : "Object" == (e = x(n)) && "function" == typeof n.callee ? "Arguments" : e
    }, Sn = xn ? {}.toString : function () {
        return "[object " + On(this) + "]"
    }, Tn = mt.f, jn = Z("toStringTag"), kn = function (t, n, r, e) {
        if (t) {
            var i = r ? t : t.prototype;
            U(i, jn) || Tn(i, jn, {configurable: !0, value: n}), e && !xn && yt(i, "toString", Sn)
        }
    }, zn = Function.toString;
    "function" != typeof H.inspectSource && (H.inspectSource = function (t) {
        return zn.call(t)
    });
    var Pn, Nn, Ln, Cn = H.inspectSource, Fn = h.WeakMap, Mn = "function" == typeof Fn && /native code/.test(Cn(Fn)),
        Rn = h.WeakMap;
    if (Mn || H.state) {
        var In = H.state || (H.state = new Rn), Dn = In.get, Hn = In.has, Vn = In.set;
        Pn = function (t, n) {
            if (Hn.call(In, t)) throw new TypeError("Object already initialized");
            return n.facade = t, Vn.call(In, t, n), n
        }, Nn = function (t) {
            return Dn.call(In, t) || {}
        }, Ln = function (t) {
            return Hn.call(In, t)
        }
    } else {
        var qn = nn("state");
        _t[qn] = !0, Pn = function (t, n) {
            if (U(t, qn)) throw new TypeError("Object already initialized");
            return n.facade = t, yt(t, qn, n), n
        }, Nn = function (t) {
            return U(t, qn) ? t[qn] : {}
        }, Ln = function (t) {
            return U(t, qn)
        }
    }
    var Bn = {
            set: Pn, get: Nn, has: Ln, enforce: function (t) {
                return Ln(t) ? Nn(t) : Pn(t, {})
            }, getterFor: function (t) {
                return function (n) {
                    var r;
                    if (!T(n) || (r = Nn(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        }, Un = [].push, Xn = function (t) {
            var n = 1 == t, r = 2 == t, e = 3 == t, i = 4 == t, o = 6 == t, u = 7 == t, a = 5 == t || o;
            return function (c, f, s, v) {
                for (var d, h, l = q(c), p = E(l), b = lt(f, s, 3), m = Pt(p.length), y = 0, g = v || Ct, w = n ? g(c, m) : r || u ? g(c, 0) : void 0; m > y; y++) if ((a || y in p) && (h = b(d = p[y], y, l), t)) if (n) w[y] = h; else if (h) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return d;
                    case 6:
                        return y;
                    case 2:
                        Un.call(w, d)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        Un.call(w, d)
                }
                return o ? -1 : e || i ? i : w
            }
        }, Jn = {
            forEach: Xn(0),
            map: Xn(1),
            filter: Xn(2),
            some: Xn(3),
            every: Xn(4),
            find: Xn(5),
            findIndex: Xn(6),
            filterReject: Xn(7)
        }, Qn = Jn.forEach, _n = nn("hidden"), Kn = Z("toPrimitive"), Wn = Bn.set, Zn = Bn.getterFor("Symbol"),
        Yn = Object.prototype, Gn = h.Symbol, $n = z("JSON", "stringify"), tr = ot.f, nr = mt.f, rr = ln.f, er = y.f,
        ir = V("symbols"), or = V("op-symbols"), ur = V("string-to-symbol-registry"),
        ar = V("symbol-to-string-registry"), cr = V("wks"), fr = h.QObject,
        sr = !fr || !fr.prototype || !fr.prototype.findChild, vr = p && l(function () {
            return 7 != cn(nr({}, "a", {
                get: function () {
                    return nr(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (t, n, r) {
            var e = tr(Yn, n);
            e && delete Yn[n], nr(t, n, r), e && t !== Yn && nr(Yn, n, e)
        } : nr, dr = function (t, n) {
            var r = ir[t] = cn(Gn.prototype);
            return Wn(r, {type: "Symbol", tag: t, description: n}), p || (r.description = n), r
        }, hr = function (t, n, r) {
            t === Yn && hr(or, n, r), pt(t);
            var e = $(n);
            return pt(r), U(ir, e) ? (r.enumerable ? (U(t, _n) && t[_n][e] && (t[_n][e] = !1), r = cn(r, {enumerable: g(0, !1)})) : (U(t, _n) || nr(t, _n, g(1, {})), t[_n][e] = !0), vr(t, e, r)) : nr(t, e, r)
        }, lr = function (t, n) {
            pt(t);
            var r = S(n), e = Yt(r).concat(yr(r));
            return Qn(e, function (n) {
                p && !pr.call(r, n) || hr(t, n, r[n])
            }), t
        }, pr = function (t) {
            var n = $(t), r = er.call(this, n);
            return !(this === Yn && U(ir, n) && !U(or, n)) && (!(r || !U(this, n) || !U(ir, n) || U(this, _n) && this[_n][n]) || r)
        }, br = function (t, n) {
            var r = S(t), e = $(n);
            if (r !== Yn || !U(ir, e) || U(or, e)) {
                var i = tr(r, e);
                return !i || !U(ir, e) || U(r, _n) && r[_n][e] || (i.enumerable = !0), i
            }
        }, mr = function (t) {
            var n = rr(S(t)), r = [];
            return Qn(n, function (t) {
                U(ir, t) || U(_t, t) || r.push(t)
            }), r
        }, yr = function (t) {
            var n = t === Yn, r = rr(n ? or : S(t)), e = [];
            return Qn(r, function (t) {
                !U(ir, t) || n && !U(Yn, t) || e.push(ir[t])
            }), e
        };
    if (R || (bn((Gn = function () {
        if (this instanceof Gn) throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? qt(arguments[0]) : void 0, n = Q(t), r = function (t) {
            this === Yn && r.call(or, t), U(this, _n) && U(this[_n], n) && (this[_n][n] = !1), vr(this, n, g(1, t))
        };
        return p && sr && vr(Yn, n, {configurable: !0, set: r}), dr(n, t)
    }).prototype, "toString", function () {
        return Zn(this).tag
    }), bn(Gn, "withoutSetter", function (t) {
        return dr(Q(t), t)
    }), y.f = pr, mt.f = hr, ot.f = br, sn.f = ln.f = mr, pn.f = yr, mn.f = function (t) {
        return dr(Z(t), t)
    }, p && nr(Gn.prototype, "description", {
        configurable: !0, get: function () {
            return Zn(this).description
        }
    })), xt({global: !0, wrap: !0, forced: !R, sham: !R}, {Symbol: Gn}), Qn(Yt(cr), function (t) {
        gn(t)
    }), xt({target: "Symbol", stat: !0, forced: !R}, {
        for: function (t) {
            var n = qt(t);
            if (U(ur, n)) return ur[n];
            var r = Gn(n);
            return ur[n] = r, ar[r] = n, r
        }, keyFor: function (t) {
            if (!D(t)) throw TypeError(t + " is not a symbol");
            if (U(ar, t)) return ar[t]
        }, useSetter: function () {
            sr = !0
        }, useSimple: function () {
            sr = !1
        }
    }), xt({target: "Object", stat: !0, forced: !R, sham: !p}, {
        create: function (t, n) {
            return void 0 === n ? cn(t) : lr(cn(t), n)
        }, defineProperty: hr, defineProperties: lr, getOwnPropertyDescriptor: br
    }), xt({target: "Object", stat: !0, forced: !R}, {
        getOwnPropertyNames: mr,
        getOwnPropertySymbols: yr
    }), xt({
        target: "Object", stat: !0, forced: l(function () {
            pn.f(1)
        })
    }, {
        getOwnPropertySymbols: function (t) {
            return pn.f(q(t))
        }
    }), $n) {
        var gr = !R || l(function () {
            var t = Gn();
            return "[null]" != $n([t]) || "{}" != $n({a: t}) || "{}" != $n(Object(t))
        });
        xt({target: "JSON", stat: !0, forced: gr}, {
            stringify: function (t, n, r) {
                for (var e, i = [t], o = 1; arguments.length > o;) i.push(arguments[o++]);
                if (e = n, (T(n) || void 0 !== t) && !D(t)) return St(n) || (n = function (t, n) {
                    if ("function" == typeof e && (n = e.call(this, t, n)), !D(n)) return n
                }), i[1] = n, $n.apply(null, i)
            }
        })
    }
    Gn.prototype[Kn] || yt(Gn.prototype, Kn, Gn.prototype.valueOf), kn(Gn, "Symbol"), _t[_n] = !0, gn("asyncIterator"), gn("hasInstance"), gn("isConcatSpreadable"), gn("iterator"), gn("match"), gn("matchAll"), gn("replace"), gn("search"), gn("species"), gn("split"), gn("toPrimitive"), gn("toStringTag"), gn("unscopables"), kn(h.JSON, "JSON", !0);
    var wr, xr, Ar, Er = j.Symbol, Or = {}, Sr = !l(function () {
        function t() {
        }

        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }), Tr = nn("IE_PROTO"), jr = Object.prototype, kr = Sr ? Object.getPrototypeOf : function (t) {
        return t = q(t), U(t, Tr) ? t[Tr] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? jr : null
    }, zr = Z("iterator"), Pr = !1;
    [].keys && ("next" in (Ar = [].keys()) ? (xr = kr(kr(Ar))) !== Object.prototype && (wr = xr) : Pr = !0);
    var Nr = null == wr || l(function () {
        var t = {};
        return wr[zr].call(t) !== t
    });
    "function" != typeof (wr = Nr ? {} : cn(wr))[zr] && yt(wr, zr, function () {
        return this
    });
    var Lr = {IteratorPrototype: wr, BUGGY_SAFARI_ITERATORS: Pr}, Cr = Lr.IteratorPrototype, Fr = function () {
        return this
    }, Mr = Lr.BUGGY_SAFARI_ITERATORS, Rr = Z("iterator"), Ir = function () {
        return this
    }, Dr = function (t, n, r, e, i, o, u) {
        !function (t, n, r) {
            var e = n + " Iterator";
            t.prototype = cn(Cr, {next: g(1, r)}), kn(t, e, !1, !0), Or[e] = Fr
        }(r, n, e);
        var a, c, f, s = function (t) {
                if (t === i && p) return p;
                if (!Mr && t in h) return h[t];
                switch (t) {
                    case"keys":
                    case"values":
                    case"entries":
                        return function () {
                            return new r(this, t)
                        }
                }
                return function () {
                    return new r(this)
                }
            }, v = n + " Iterator", d = !1, h = t.prototype, l = h[Rr] || h["@@iterator"] || i && h[i],
            p = !Mr && l || s(i), b = "Array" == n && h.entries || l;
        if (b && (a = kr(b.call(new t))) !== Object.prototype && a.next && (kn(a, v, !0, !0), Or[v] = Ir), "values" == i && l && "values" !== l.name && (d = !0, p = function () {
            return l.call(this)
        }), u && h[Rr] !== p && yt(h, Rr, p), Or[n] = p, i) if (c = {
            values: s("values"),
            keys: o ? p : s("keys"),
            entries: s("entries")
        }, u) for (f in c) !Mr && !d && f in h || bn(h, f, c[f]); else xt({target: n, proto: !0, forced: Mr || d}, c);
        return c
    }, Hr = Bn.set, Vr = Bn.getterFor("Array Iterator");
    Dr(Array, "Array", function (t, n) {
        Hr(this, {type: "Array Iterator", target: S(t), index: 0, kind: n})
    }, function () {
        var t = Vr(this), n = t.target, r = t.kind, e = t.index++;
        return !n || e >= n.length ? (t.target = void 0, {value: void 0, done: !0}) : "keys" == r ? {
            value: e,
            done: !1
        } : "values" == r ? {value: n[e], done: !1} : {value: [e, n[e]], done: !1}
    }, "values");
    Or.Arguments = Or.Array;
    var qr = Z("toStringTag");
    for (var Br in {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }) {
        var Ur = h[Br], Xr = Ur && Ur.prototype;
        Xr && On(Xr) !== qr && yt(Xr, qr, Br), Or[Br] = Or.Array
    }
    var Jr = Er;
    gn("asyncDispose"), gn("dispose"), gn("matcher"), gn("metadata"), gn("observable"), gn("patternMatch"), gn("replaceAll");
    var Qr = Jr, _r = function (t) {
        return function (n, r) {
            var e, i, o = qt(O(n)), u = kt(r), a = o.length;
            return u < 0 || u >= a ? t ? "" : void 0 : (e = o.charCodeAt(u)) < 55296 || e > 56319 || u + 1 === a || (i = o.charCodeAt(u + 1)) < 56320 || i > 57343 ? t ? o.charAt(u) : e : t ? o.slice(u, u + 2) : i - 56320 + (e - 55296 << 10) + 65536
        }
    }, Kr = {codeAt: _r(!1), charAt: _r(!0)}.charAt, Wr = Bn.set, Zr = Bn.getterFor("String Iterator");
    Dr(String, "String", function (t) {
        Wr(this, {type: "String Iterator", string: qt(t), index: 0})
    }, function () {
        var t, n = Zr(this), r = n.string, e = n.index;
        return e >= r.length ? {value: void 0, done: !0} : (t = Kr(r, e), n.index += t.length, {value: t, done: !1})
    });
    var Yr, Gr = mn.f("iterator"), $r = f(function (t) {
            function n(r) {
                return "function" == typeof Qr && "symbol" == typeof Gr ? (t.exports = n = function (t) {
                    return typeof t
                }, t.exports.default = t.exports, t.exports.__esModule = !0) : (t.exports = n = function (t) {
                    return t && "function" == typeof Qr && t.constructor === Qr && t !== Qr.prototype ? "symbol" : typeof t
                }, t.exports.default = t.exports, t.exports.__esModule = !0), n(r)
            }

            t.exports = n, t.exports.default = t.exports, t.exports.__esModule = !0
        }), te = (Yr = $r) && Yr.__esModule && Object.prototype.hasOwnProperty.call(Yr, "default") ? Yr.default : Yr,
        ne = Mt("slice"), re = Z("species"), ee = [].slice, ie = Math.max;
    xt({target: "Array", proto: !0, forced: !ne}, {
        slice: function (t, n) {
            var r, e, i, o = S(this), u = Pt(o.length), a = Xt(t, u), c = Xt(void 0 === n ? u : n, u);
            if (St(o) && ("function" != typeof (r = o.constructor) || r !== Array && !St(r.prototype) ? T(r) && null === (r = r[re]) && (r = void 0) : r = void 0, r === Array || void 0 === r)) return ee.call(o, a, c);
            for (e = new (void 0 === r ? Array : r)(ie(c - a, 0)), i = 0; a < c; a++, i++) a in o && Nt(e, i, o[a]);
            return e.length = i, e
        }
    });
    var oe = function (t) {
        return j[t + "Prototype"]
    }, ue = oe("Array").slice, ae = Array.prototype, ce = function (t) {
        var n = t.slice;
        return t === ae || t instanceof Array && n === ae.slice ? ue : n
    }, fe = function (t, n) {
        var r = [][t];
        return !!r && l(function () {
            r.call(null, n || function () {
                throw 1
            }, 1)
        })
    }, se = Jn.forEach, ve = fe("forEach") ? [].forEach : function (t) {
        return se(this, t, arguments.length > 1 ? arguments[1] : void 0)
    };
    xt({target: "Array", proto: !0, forced: [].forEach != ve}, {forEach: ve});
    var de = oe("Array").forEach, he = Array.prototype, le = {DOMTokenList: !0, NodeList: !0}, pe = function (t) {
        var n = t.forEach;
        return t === he || t instanceof Array && n === he.forEach || le.hasOwnProperty(On(t)) ? de : n
    }, be = l(function () {
        Yt(1)
    });
    xt({target: "Object", stat: !0, forced: be}, {
        keys: function (t) {
            return Yt(q(t))
        }
    });
    var me = j.Object.keys, ye = Qt.includes;
    xt({target: "Array", proto: !0}, {
        includes: function (t) {
            return ye(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ge = oe("Array").includes, we = Z("match"), xe = function (t) {
        if (function (t) {
            var n;
            return T(t) && (void 0 !== (n = t[we]) ? !!n : "RegExp" == x(t))
        }(t)) throw TypeError("The method doesn't accept regular expressions");
        return t
    }, Ae = Z("match");
    xt({
        target: "String", proto: !0, forced: !function (t) {
            var n = /./;
            try {
                "/./"[t](n)
            } catch (r) {
                try {
                    return n[Ae] = !1, "/./"[t](n)
                } catch (t) {
                }
            }
            return !1
        }("includes")
    }, {
        includes: function (t) {
            return !!~qt(O(this)).indexOf(qt(xe(t)), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ee = oe("String").includes, Oe = Array.prototype, Se = String.prototype, Te = function (t) {
        var n = t.includes;
        return t === Oe || t instanceof Array && n === Oe.includes ? ge : "string" == typeof t || t === Se || t instanceof String && n === Se.includes ? Ee : n
    }, je = [].reverse, ke = [1, 2];
    xt({target: "Array", proto: !0, forced: String(ke) === String(ke.reverse())}, {
        reverse: function () {
            return St(this) && (this.length = this.length), je.call(this)
        }
    });
    var ze = oe("Array").reverse, Pe = Array.prototype, Ne = function (t) {
        var n = t.reverse;
        return t === Pe || t instanceof Array && n === Pe.reverse ? ze : n
    };
    xt({target: "Date", stat: !0}, {
        now: function () {
            return (new Date).getTime()
        }
    });
    var Le = j.Date.now, Ce = "\t\n\v\f\r                　\u2028\u2029\ufeff", Fe = "[" + Ce + "]",
        Me = RegExp("^" + Fe + Fe + "*"), Re = RegExp(Fe + Fe + "*$"), Ie = function (t) {
            return function (n) {
                var r = qt(O(n));
                return 1 & t && (r = r.replace(Me, "")), 2 & t && (r = r.replace(Re, "")), r
            }
        }, De = {start: Ie(1), end: Ie(2), trim: Ie(3)}.trim, He = h.parseInt, Ve = /^[+-]?0[Xx]/,
        qe = 8 !== He(Ce + "08") || 22 !== He(Ce + "0x16") ? function (t, n) {
            var r = De(qt(t));
            return He(r, n >>> 0 || (Ve.test(r) ? 16 : 10))
        } : He;
    xt({global: !0, forced: parseInt != qe}, {parseInt: qe});
    var Be = j.parseInt;

    function Ue(t, n) {
        return t.require(n)
    }

    function Xe() {
        return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
    }

    var Je = {};

    function Qe() {
        return Xe() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : Je
    }

    function _e() {
        var t = Qe(), n = t.crypto || t.msCrypto;
        if (void 0 !== n && n.getRandomValues) {
            var r = new Uint16Array(8);
            n.getRandomValues(r), r[3] = 4095 & r[3] | 16384, r[4] = 16383 & r[4] | 32768;
            var e = function (t) {
                for (var n = t.toString(16); n.length < 4;) n = "0" + n;
                return n
            };
            return e(r[0]) + e(r[1]) + e(r[2]) + e(r[3]) + e(r[4]) + e(r[5]) + e(r[6]) + e(r[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var n = 16 * Math.random() | 0;
            return ("x" === t ? n : 3 & n | 8).toString(16)
        })
    }

    function Ke(t) {
        if (t.message) return t.message;
        if (t.exceptions && t.exceptions[0]) {
            var n = t.exceptions[0];
            if (n.content) return n.content
        }
        return "<unknown>"
    }

    function We(t) {
        var n, r = Qe(), e = ["debug", "info", "warn", "error", "log", "assert"];
        if (!("console" in r)) return t();
        var i = r.console, o = {};
        pe(e).call(e, function (t) {
            t in r.console && i[t].__beidou_original__ && (o[t] = i[t], i[t] = i[t].__beidou_original__)
        });
        var u = t();
        return pe(n = me(o)).call(n, function (t) {
            i[t] = o[t]
        }), u
    }

    function Ze(t, n, r) {
        t.exceptions = t.exceptions || [], t.exceptions[0] = t.exceptions[0] || {}, t.exceptions[0].content = t.exceptions[0].content || r + ":" + n || ""
    }

    function Ye() {
        try {
            return document.location.href
        } catch (t) {
            return ""
        }
    }

    function Ge() {
        var t = Ye();
        return !(!Te(t).call(t, "localhost") && !Te(t).call(t, "127.0.0.1"))
    }

    function $e(t) {
        try {
            for (var n = t, r = [], e = 0, i = 0, o = " > ".length, u = void 0; n && e++ < 5 && !("html" === (u = ti(n)) || e > 1 && i + r.length * o + u.length >= 80);) r.push(u), i += u.length, n = n.parentNode;
            return Ne(r).call(r).join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }

    function ti(t) {
        var n, r, e, i, o, u = t, a = [];
        if (!u || !u.tagName) return "";
        if (a.push(u.tagName.toLowerCase()), u.id && a.push("#" + u.id), (n = u.className) && bi(n)) for (r = n.split(/\s+/), o = 0; o < r.length; o++) a.push("." + r[o]);
        var c = ["type", "name", "title", "alt"];
        for (o = 0; o < c.length; o++) e = c[o], (i = u.getAttribute(e)) && a.push("[" + e + '="' + i + '"]');
        return a.join("")
    }

    var ni = Le(), ri = 0, ei = {
        now: function () {
            var t = Le() - ni;
            return t < ri && (t = ri), ri = t, t
        }, timeOrigin: ni
    }, ii = function () {
        if (Xe()) try {
            return Ue(module, "perf_hooks").performance
        } catch (t) {
            return ei
        }
        var t = Qe().performance;
        return t && t.now ? (void 0 === t.timeOrigin && (t.timeOrigin = t.timing && t.timing.navigationStart || ni), t) : ei
    }();

    function oi() {
        return (ii.timeOrigin + ii.now()) / 1e3
    }

    var ui = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
    var ai = 6e4;

    function ci(t, n) {
        if (!n) return ai;
        var r = Be("" + n, 10);
        if (!isNaN(r)) return 1e3 * r;
        var e = Date.parse("" + n);
        return isNaN(e) ? ai : e - t
    }

    var fi = "<anonymous>";

    function si(t) {
        try {
            return t && "function" == typeof t && t.name || fi
        } catch (t) {
            return fi
        }
    }

    var vi = Qe();

    function di(t) {
        switch (Object.prototype.toString.call(t)) {
            case"[object Error]":
            case"[object Exception]":
            case"[object DOMException]":
                return !0;
            default:
                return Oi(t, Error)
        }
    }

    function hi(t) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(t)
    }

    function li(t) {
        return "[object DOMError]" === Object.prototype.toString.call(t)
    }

    function pi(t) {
        return "[object DOMException]" === Object.prototype.toString.call(t)
    }

    function bi(t) {
        return "[object String]" === Object.prototype.toString.call(t)
    }

    function mi(t) {
        return null === t || "object" !== te(t) && "function" != typeof t
    }

    function yi(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function gi(t) {
        return "undefined" != typeof Event && Oi(t, Event)
    }

    function wi(t) {
        return "undefined" != typeof Element && Oi(t, Element)
    }

    function xi(t) {
        return "[object RegExp]" === Object.prototype.toString.call(t)
    }

    function Ai(t) {
        return Boolean(t && t.then && "function" == typeof t.then)
    }

    function Ei(t) {
        return yi(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
    }

    function Oi(t, n) {
        try {
            return t instanceof n
        } catch (t) {
            return !1
        }
    }

    function Si(t) {
        var n;
        return ce(n = Object.prototype.toString.call(t)).call(n, 8, -1)
    }

    function Ti(t) {
        try {
            var n = vi.location, r = document.createElement("a");
            return r.href = t, r.hostname == n.hostname && r.port == n.port && r.protocol == n.protocol
        } catch (t) {
            return !1
        }
    }

    var ji = Qe(), ki = "Beidou Logger ", zi = function () {
        function t() {
            this.t = !1
        }

        return t.prototype.disable = function () {
            this.t = !1
        }, t.prototype.enable = function () {
            this.t = !0
        }, t.prototype.log = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            this.t && We(function () {
                ji.console.log(ki + "[Log]: " + t.join(" "))
            })
        }, t.prototype.warn = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            this.t && We(function () {
                ji.console.warn(ki + "[Warn]: " + t.join(" "))
            })
        }, t.prototype.error = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            this.t && We(function () {
                ji.console.error(ki + "[Error]: " + t.join(" "))
            })
        }, t
    }();
    ji.__BEIDOU__ = ji.__BEIDOU__ || {};
    var Pi = ji.__BEIDOU__.logger || (ji.__BEIDOU__.logger = new zi);
    xt({target: "Object", stat: !0, forced: !p, sham: !p}, {defineProperties: Gt});
    var Ni = f(function (t) {
        var n = j.Object, r = t.exports = function (t, r) {
            return n.defineProperties(t, r)
        };
        n.defineProperties.sham && (r.sham = !0)
    }), Li = Jn.map, Ci = Mt("map");
    xt({target: "Array", proto: !0, forced: !Ci}, {
        map: function (t) {
            return Li(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Fi = oe("Array").map, Mi = Array.prototype, Ri = function (t) {
            var n = t.map;
            return t === Mi || t instanceof Array && n === Mi.map ? Fi : n
        }, Ii = z("JSON", "stringify"), Di = /[\uD800-\uDFFF]/g, Hi = /^[\uD800-\uDBFF]$/, Vi = /^[\uDC00-\uDFFF]$/,
        qi = function (t, n, r) {
            var e = r.charAt(n - 1), i = r.charAt(n + 1);
            return Hi.test(t) && !Vi.test(i) || Vi.test(t) && !Hi.test(e) ? "\\u" + t.charCodeAt(0).toString(16) : t
        }, Bi = l(function () {
            return '"\\udf06\\ud834"' !== Ii("\udf06\ud834") || '"\\udead"' !== Ii("\udead")
        });
    Ii && xt({target: "JSON", stat: !0, forced: Bi}, {
        stringify: function (t, n, r) {
            var e = Ii.apply(null, arguments);
            return "string" == typeof e ? e.replace(Di, qi) : e
        }
    }), j.JSON || (j.JSON = {stringify: JSON.stringify});
    var Ui = function (t, n, r) {
        return j.JSON.stringify.apply(null, arguments)
    };
    xt({target: "Array", stat: !0}, {isArray: St});
    var Xi = j.Array.isArray, Ji = Math.floor, Qi = function (t, n) {
            var r = t.length, e = Ji(r / 2);
            return r < 8 ? _i(t, n) : Ki(Qi(t.slice(0, e), n), Qi(t.slice(e), n), n)
        }, _i = function (t, n) {
            for (var r, e, i = t.length, o = 1; o < i;) {
                for (e = o, r = t[o]; e && n(t[e - 1], r) > 0;) t[e] = t[--e];
                e !== o++ && (t[e] = r)
            }
            return t
        }, Ki = function (t, n, r) {
            for (var e = t.length, i = n.length, o = 0, u = 0, a = []; o < e || u < i;) o < e && u < i ? a.push(r(t[o], n[u]) <= 0 ? t[o++] : n[u++]) : a.push(o < e ? t[o++] : n[u++]);
            return a
        }, Wi = Qi, Zi = P.match(/firefox\/(\d+)/i), Yi = !!Zi && +Zi[1], Gi = /MSIE|Trident/.test(P),
        $i = P.match(/AppleWebKit\/(\d+)\./), to = !!$i && +$i[1], no = [], ro = no.sort, eo = l(function () {
            no.sort(void 0)
        }), io = l(function () {
            no.sort(null)
        }), oo = fe("sort"), uo = !l(function () {
            if (M) return M < 70;
            if (!(Yi && Yi > 3)) {
                if (Gi) return !0;
                if (to) return to < 603;
                var t, n, r, e, i = "";
                for (t = 65; t < 76; t++) {
                    switch (n = String.fromCharCode(t), t) {
                        case 66:
                        case 69:
                        case 70:
                        case 72:
                            r = 3;
                            break;
                        case 68:
                        case 71:
                            r = 4;
                            break;
                        default:
                            r = 2
                    }
                    for (e = 0; e < 47; e++) no.push({k: n + e, v: r})
                }
                for (no.sort(function (t, n) {
                    return n.v - t.v
                }), e = 0; e < no.length; e++) n = no[e].k.charAt(0), i.charAt(i.length - 1) !== n && (i += n);
                return "DGBEFHACIJK" !== i
            }
        });
    xt({target: "Array", proto: !0, forced: eo || !io || !oo || !uo}, {
        sort: function (t) {
            void 0 !== t && ht(t);
            var n = q(this);
            if (uo) return void 0 === t ? ro.call(n) : ro.call(n, t);
            var r, e, i = [], o = Pt(n.length);
            for (e = 0; e < o; e++) e in n && i.push(n[e]);
            for (r = (i = Wi(i, function (t) {
                return function (n, r) {
                    return void 0 === r ? -1 : void 0 === n ? 1 : void 0 !== t ? +t(n, r) || 0 : qt(n) > qt(r) ? 1 : -1
                }
            }(t))).length, e = 0; e < r;) n[e] = i[e++];
            for (; e < o;) delete n[e++];
            return n
        }
    });
    var ao = oe("Array").sort, co = Array.prototype, fo = function (t) {
            var n = t.sort;
            return t === co || t instanceof Array && n === co.sort ? ao : n
        }, so = !l(function () {
            return Object.isExtensible(Object.preventExtensions({}))
        }), vo = f(function (t) {
            var n = mt.f, r = !1, e = Q("meta"), i = 0, o = Object.isExtensible || function () {
                return !0
            }, u = function (t) {
                n(t, e, {value: {objectID: "O" + i++, weakData: {}}})
            }, a = t.exports = {
                enable: function () {
                    a.enable = function () {
                    }, r = !0;
                    var t = sn.f, n = [].splice, i = {};
                    i[e] = 1, t(i).length && (sn.f = function (r) {
                        for (var i = t(r), o = 0, u = i.length; o < u; o++) if (i[o] === e) {
                            n.call(i, o, 1);
                            break
                        }
                        return i
                    }, xt({target: "Object", stat: !0, forced: !0}, {getOwnPropertyNames: ln.f}))
                }, fastKey: function (t, n) {
                    if (!T(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!U(t, e)) {
                        if (!o(t)) return "F";
                        if (!n) return "E";
                        u(t)
                    }
                    return t[e].objectID
                }, getWeakData: function (t, n) {
                    if (!U(t, e)) {
                        if (!o(t)) return !0;
                        if (!n) return !1;
                        u(t)
                    }
                    return t[e].weakData
                }, onFreeze: function (t) {
                    return so && r && o(t) && !U(t, e) && u(t), t
                }
            };
            _t[e] = !0
        }), ho = (vo.enable, vo.fastKey, vo.getWeakData, vo.onFreeze, Z("iterator")), lo = Array.prototype,
        po = Z("iterator"), bo = function (t) {
            if (null != t) return t[po] || t["@@iterator"] || Or[On(t)]
        }, mo = function (t, n, r) {
            var e, i;
            pt(t);
            try {
                if (void 0 === (e = t.return)) {
                    if ("throw" === n) throw r;
                    return r
                }
                e = e.call(t)
            } catch (t) {
                i = !0, e = t
            }
            if ("throw" === n) throw r;
            if (i) throw e;
            return pt(e), r
        }, yo = function (t, n) {
            this.stopped = t, this.result = n
        }, go = function (t, n, r) {
            var e, i, o, u, a, c, f, s, v = r && r.that, d = !(!r || !r.AS_ENTRIES), h = !(!r || !r.IS_ITERATOR),
                l = !(!r || !r.INTERRUPTED), p = lt(n, v, 1 + d + l), b = function (t) {
                    return e && mo(e, "normal", t), new yo(!0, t)
                }, m = function (t) {
                    return d ? (pt(t), l ? p(t[0], t[1], b) : p(t[0], t[1])) : l ? p(t, b) : p(t)
                };
            if (h) e = t; else {
                if ("function" != typeof (i = bo(t))) throw TypeError("Target is not iterable");
                if (void 0 !== (s = i) && (Or.Array === s || lo[ho] === s)) {
                    for (o = 0, u = Pt(t.length); u > o; o++) if ((a = m(t[o])) && a instanceof yo) return a;
                    return new yo(!1)
                }
                e = function (t, n) {
                    var r = arguments.length < 2 ? bo(t) : n;
                    if ("function" != typeof r) throw TypeError(String(t) + " is not iterable");
                    return pt(r.call(t))
                }(t, i)
            }
            for (c = e.next; !(f = c.call(e)).done;) {
                try {
                    a = m(f.value)
                } catch (t) {
                    mo(e, "throw", t)
                }
                if ("object" == typeof a && a && a instanceof yo) return a
            }
            return new yo(!1)
        }, wo = function (t, n, r) {
            if (!(t instanceof n)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return t
        }, xo = mt.f, Ao = Jn.forEach, Eo = Bn.set, Oo = Bn.getterFor, So = function (t, n, r) {
            var e, i = -1 !== t.indexOf("Map"), o = -1 !== t.indexOf("Weak"), u = i ? "set" : "add", a = h[t],
                c = a && a.prototype, f = {};
            if (p && "function" == typeof a && (o || c.forEach && !l(function () {
                (new a).entries().next()
            }))) {
                e = n(function (n, r) {
                    Eo(wo(n, e, t), {type: t, collection: new a}), null != r && go(r, n[u], {that: n, AS_ENTRIES: i})
                });
                var s = Oo(t);
                Ao(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function (t) {
                    var n = "add" == t || "set" == t;
                    t in c && (!o || "clear" != t) && yt(e.prototype, t, function (r, e) {
                        var i = s(this).collection;
                        if (!n && o && !T(r)) return "get" == t && void 0;
                        var u = i[t](0 === r ? 0 : r, e);
                        return n ? this : u
                    })
                }), o || xo(e.prototype, "size", {
                    configurable: !0, get: function () {
                        return s(this).collection.size
                    }
                })
            } else e = r.getConstructor(n, t, i, u), vo.enable();
            return kn(e, t, !1, !0), f[t] = e, xt({global: !0, forced: !0}, f), o || r.setStrong(e, t, i), e
        }, To = function (t, n, r) {
            for (var e in n) r && r.unsafe && t[e] ? t[e] = n[e] : bn(t, e, n[e], r);
            return t
        }, jo = vo.getWeakData, ko = Bn.set, zo = Bn.getterFor, Po = Jn.find, No = Jn.findIndex, Lo = 0, Co = function (t) {
            return t.frozen || (t.frozen = new Fo)
        }, Fo = function () {
            this.entries = []
        }, Mo = function (t, n) {
            return Po(t.entries, function (t) {
                return t[0] === n
            })
        };
    Fo.prototype = {
        get: function (t) {
            var n = Mo(this, t);
            if (n) return n[1]
        }, has: function (t) {
            return !!Mo(this, t)
        }, set: function (t, n) {
            var r = Mo(this, t);
            r ? r[1] = n : this.entries.push([t, n])
        }, delete: function (t) {
            var n = No(this.entries, function (n) {
                return n[0] === t
            });
            return ~n && this.entries.splice(n, 1), !!~n
        }
    }, So("WeakSet", function (t) {
        return function () {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    }, {
        getConstructor: function (t, n, r, e) {
            var i = t(function (t, o) {
                wo(t, i, n), ko(t, {type: n, id: Lo++, frozen: void 0}), null != o && go(o, t[e], {
                    that: t,
                    AS_ENTRIES: r
                })
            }), o = zo(n), u = function (t, n, r) {
                var e = o(t), i = jo(pt(n), !0);
                return !0 === i ? Co(e).set(n, r) : i[e.id] = r, t
            };
            return To(i.prototype, {
                delete: function (t) {
                    var n = o(this);
                    if (!T(t)) return !1;
                    var r = jo(t);
                    return !0 === r ? Co(n).delete(t) : r && U(r, n.id) && delete r[n.id]
                }, has: function (t) {
                    var n = o(this);
                    if (!T(t)) return !1;
                    var r = jo(t);
                    return !0 === r ? Co(n).has(t) : r && U(r, n.id)
                }
            }), To(i.prototype, r ? {
                get: function (t) {
                    var n = o(this);
                    if (T(t)) {
                        var r = jo(t);
                        return !0 === r ? Co(n).get(t) : r ? r[n.id] : void 0
                    }
                }, set: function (t, n) {
                    return u(this, t, n)
                }
            } : {
                add: function (t) {
                    return u(this, t, !0)
                }
            }), i
        }
    });
    var Ro = j.WeakSet, Io = Mt("splice"), Do = Math.max, Ho = Math.min;
    xt({target: "Array", proto: !0, forced: !Io}, {
        splice: function (t, n) {
            var r, e, i, o, u, a, c = q(this), f = Pt(c.length), s = Xt(t, f), v = arguments.length;
            if (0 === v ? r = e = 0 : 1 === v ? (r = 0, e = f - s) : (r = v - 2, e = Ho(Do(kt(n), 0), f - s)), f + r - e > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (i = Ct(c, e), o = 0; o < e; o++) (u = s + o) in c && Nt(i, o, c[u]);
            if (i.length = e, r < e) {
                for (o = s; o < f - e; o++) a = o + r, (u = o + e) in c ? c[a] = c[u] : delete c[a];
                for (o = f; o > f - e + r; o--) delete c[o - 1]
            } else if (r > e) for (o = f - e; o > s; o--) a = o + r - 1, (u = o + e - 1) in c ? c[a] = c[u] : delete c[a];
            for (o = 0; o < r; o++) c[o + s] = arguments[o + 2];
            return c.length = f - e + r, i
        }
    });
    var Vo = oe("Array").splice, qo = Array.prototype, Bo = function (t) {
        var n = t.splice;
        return t === qo || t instanceof Array && n === qo.splice ? Vo : n
    }, Uo = function () {
        function t() {
            this.i = "function" == typeof Ro, this.o = this.i ? new Ro : []
        }

        return t.prototype.memoize = function (t) {
            if (this.i) return !!this.o.has(t) || (this.o.add(t), !1);
            for (var n = 0; n < this.o.length; n++) {
                if (this.o[n] === t) return !0
            }
            return this.o.push(t), !1
        }, t.prototype.unmemoize = function (t) {
            if (this.i) this.o.delete(t); else for (var n = 0; n < this.o.length; n++) if (this.o[n] === t) {
                var r;
                Bo(r = this.o).call(r, n, 1);
                break
            }
        }, t
    }(), Xo = Qt.indexOf, Jo = [].indexOf, Qo = !!Jo && 1 / [1].indexOf(1, -0) < 0, _o = fe("indexOf");
    xt({target: "Array", proto: !0, forced: Qo || !_o}, {
        indexOf: function (t) {
            return Qo ? Jo.apply(this, arguments) || 0 : Xo(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ko = oe("Array").indexOf, Wo = Array.prototype, Zo = function (t) {
        var n = t.indexOf;
        return t === Wo || t instanceof Array && n === Wo.indexOf ? Ko : n
    };

    function Yo(t, n) {
        return void 0 === n && (n = 0), "string" != typeof t || 0 === n ? t : t.length <= n ? t : t.substr(0, n) + "..."
    }

    function Go(t, n) {
        return !!bi(t) && (xi(n) ? n.test(t) : "string" == typeof n && -1 !== Zo(t).call(t, n))
    }

    function $o(t) {
        if (di(t)) {
            var n = t, r = {message: n.message, name: n.name, stack: n.stack};
            for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (r[e] = n[e]);
            return r
        }
        if (gi(t)) {
            var i = t, o = {};
            o.type = i.type;
            try {
                o.target = wi(i.target) ? $e(i.target) : Object.prototype.toString.call(i.target)
            } catch (t) {
                o.target = "<unknown>"
            }
            try {
                o.currentTarget = wi(i.currentTarget) ? $e(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
            } catch (t) {
                o.currentTarget = "<unknown>"
            }
            for (var e in "undefined" != typeof CustomEvent && Oi(t, CustomEvent) && (o.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, e) && (o[e] = i);
            return o
        }
        return t
    }

    function tu(t) {
        return function (t) {
            return ~-encodeURI(t).split(/%..|./).length
        }(Ui(t))
    }

    function nu(t, n) {
        return "domain" === n && t && "object" === te(t) && t.u ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : "undefined" != typeof global && t === global ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : Ei(t) ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + si(t) + "]" : t
    }

    function ru(t, n, r, e) {
        if (void 0 === r && (r = 1 / 0), void 0 === e && (e = new Uo), 0 === r) return function (t) {
            var n = Object.prototype.toString.call(t);
            if ("string" == typeof t) return t;
            if ("[object Object]" === n) return "[Object]";
            if ("[object Array]" === n) return "[Array]";
            var r = nu(t);
            return mi(r) ? r : n
        }(n);
        if (null != n && "function" == typeof n.toJSON) return n.toJSON();
        var i = nu(n, t);
        if (mi(i)) return i;
        var o = $o(n), u = Xi(n) ? [] : {};
        if (e.memoize(n)) return "[Circular ~]";
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (u[a] = ru(a, o[a], r - 1, e));
        return e.unmemoize(n), u
    }

    function eu(t, n) {
        try {
            return JSON.parse(Ui(t, function (t, r) {
                return ru(t, r, n)
            }))
        } catch (t) {
            return "**non-serializable**"
        }
    }

    function iu(t, n) {
        void 0 === n && (n = 40);
        var r = me($o(t));
        if (fo(r).call(r), !r.length) return "[object has no keys]";
        if (r[0].length >= n) return Yo(r[0], n);
        for (var e = r.length; e > 0; e--) {
            var i = ce(r).call(r, 0, e).join(", ");
            if (!(i.length > n)) return e === r.length ? i : Yo(i, n)
        }
        return ""
    }

    var ou = [].slice, uu = /MSIE .\./.test(P), au = function (t) {
        return function (n, r) {
            var e = arguments.length > 2, i = e ? ou.call(arguments, 2) : void 0;
            return t(e ? function () {
                ("function" == typeof n ? n : Function(n)).apply(this, i)
            } : n, r)
        }
    };
    xt({global: !0, bind: !0, forced: uu}, {setTimeout: au(h.setTimeout), setInterval: au(h.setInterval)});
    var cu, fu = j.setTimeout, su = oe("Array").concat, vu = Array.prototype, du = function (t) {
        var n = t.concat;
        return t === vu || t instanceof Array && n === vu.concat ? su : n
    };
    !function (t) {
        t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED"
    }(cu || (cu = {}));
    var hu = function () {
        function t(t) {
            var n = this;
            this.s = cu.PENDING, this.h = [], this.l = function (t) {
                n.p(cu.RESOLVED, t)
            }, this.m = function (t) {
                n.p(cu.REJECTED, t)
            }, this.p = function (t, r) {
                n.s === cu.PENDING && (Ai(r) ? r.then(n.l, n.m) : (n.s = t, n.g = r, n.A()))
            }, this.S = function (t) {
                var r;
                n.h = du(r = n.h).call(r, t), n.A()
            }, this.A = function () {
                var t;
                if (n.s !== cu.PENDING) {
                    var r = ce(t = n.h).call(t);
                    n.h = [], pe(r).call(r, function (t) {
                        t.done || (n.s === cu.RESOLVED && t.onfulfilled && t.onfulfilled(n.g), n.s === cu.REJECTED && t.onrejected && t.onrejected(n.g), t.done = !0)
                    })
                }
            };
            try {
                t(this.l, this.m)
            } catch (t) {
                this.m(t)
            }
        }

        return t.resolve = function (n) {
            return new t(function (t) {
                t(n)
            })
        }, t.reject = function (n) {
            return new t(function (t, r) {
                r(n)
            })
        }, t.all = function (n) {
            return new t(function (r, e) {
                if (Xi(n)) if (0 !== n.length) {
                    var i = n.length, o = [];
                    pe(n).call(n, function (n, u) {
                        t.resolve(n).then(function (t) {
                            o[u] = t, 0 === (i -= 1) && r(o)
                        }).then(null, e)
                    })
                } else r([]); else e(new TypeError("Promise.all requires an array as input."))
            })
        }, t.prototype.then = function (n, r) {
            var e = this;
            return new t(function (t, i) {
                e.S({
                    done: !1, onfulfilled: function (r) {
                        if (n) try {
                            return void t(n(r))
                        } catch (t) {
                            return void i(t)
                        } else t(r)
                    }, onrejected: function (n) {
                        if (r) try {
                            return void t(r(n))
                        } catch (t) {
                            return void i(t)
                        } else i(n)
                    }
                })
            })
        }, t.prototype.catch = function (t) {
            return this.then(function (t) {
                return t
            }, t)
        }, t.prototype.finally = function (n) {
            var r = this;
            return new t(function (t, e) {
                var i, o;
                return r.then(function (t) {
                    o = !1, i = t, n && n()
                }, function (t) {
                    o = !0, i = t, n && n()
                }).then(function () {
                    o ? e(i) : t(i)
                })
            })
        }, t.prototype.toString = function () {
            return "[object SyncPromise]"
        }, t
    }(), lu = function () {
        function t(t) {
            this.T = t, this.j = []
        }

        return t.prototype.isReady = function () {
            return void 0 === this.T || this.length() < this.T
        }, t.prototype.add = function (t) {
            var n, r = this;
            return this.isReady() ? (-1 === Zo(n = this.j).call(n, t) && this.j.push(t), t.then(function () {
                return r.remove(t)
            }).then(null, function () {
                return r.remove(t).then(null, function () {
                })
            }), t) : hu.reject(new Ot("Not adding Promise due to buffer limit reached."))
        }, t.prototype.remove = function (t) {
            var n, r;
            return Bo(n = this.j).call(n, Zo(r = this.j).call(r, t), 1)[0]
        }, t.prototype.length = function () {
            return this.j.length
        }, t.prototype.drain = function (t) {
            var n = this;
            return new hu(function (r) {
                var e = fu(function () {
                    t && t > 0 && r(!1)
                }, t);
                hu.all(n.j).then(function () {
                    clearTimeout(e), r(!0)
                }).then(null, function () {
                    r(!0)
                })
            })
        }, t
    }(), pu = {method: "", url: ""};

    function bu(t, n) {
        var r = {method: t, url: n}, i = function (t, n) {
            for (var r in t) {
                if (!n.hasOwnProperty(r)) return !1;
                if (t[r] !== n[r]) return !1
            }
            return !0
        }(pu, r);
        return i || (pu = e({}, r)), i
    }

    var mu = Object.freeze({
        __proto__: null,
        BeidouError: Ot,
        isError: di,
        isErrorEvent: hi,
        isDOMError: li,
        isDOMException: pi,
        isString: bi,
        isPrimitive: mi,
        isPlainObject: yi,
        isEvent: gi,
        isElement: wi,
        isRegExp: xi,
        isThenable: Ai,
        isSyntheticEvent: Ei,
        isInstanceOf: Oi,
        is: Si,
        isSameOrigin: Ti,
        logger: Pi,
        dynamicRequire: Ue,
        isNodeEnv: Xe,
        getGlobalObject: Qe,
        uuid4: _e,
        parseUrl: function (t) {
            if (!t) return {};
            var n = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!n) return {};
            var r = n[6] || "", e = n[8] || "";
            return {host: n[4], path: n[5], protocol: n[2], relative: n[5] + r + e}
        },
        getEventDescription: Ke,
        consoleSandbox: We,
        addExceptionTypeValue: Ze,
        addExceptionMechanism: function (t, n) {
            void 0 === n && (n = {});
            try {
                var r;
                t.exceptions[0].mechanism = t.exceptions[0].mechanism || {}, pe(r = me(n)).call(r, function (r) {
                    t.exceptions[0].mechanism[r] = n[r]
                })
            } catch (t) {
            }
        },
        getLocationHref: Ye,
        isDevHref: Ge,
        htmlTreeAsString: $e,
        crossPlatformPerformance: ii,
        timestampWithMs: oi,
        parseSemver: function (t) {
            var n = t.match(ui) || [], r = Be(n[1], 10), e = Be(n[2], 10), i = Be(n[3], 10);
            return {
                buildmetadata: n[5],
                major: isNaN(r) ? void 0 : r,
                minor: isNaN(e) ? void 0 : e,
                patch: isNaN(i) ? void 0 : i,
                prerelease: n[4]
            }
        },
        parseRetryAfterHeader: ci,
        getFunctionName: si,
        fill: function (t, n, r) {
            if (n in t) {
                var e = t[n], i = r(e);
                if ("function" == typeof i) try {
                    i.prototype = i.prototype || {}, Ni(i, {__beidou_original__: {enumerable: !1, value: e}})
                } catch (t) {
                }
                t[n] = i
            }
        },
        urlEncode: function (t) {
            var n;
            return Ri(n = me(t)).call(n, function (n) {
                return encodeURIComponent(n) + "=" + encodeURIComponent(t[n])
            }).join("&")
        },
        normalizeToSize: function t(n, r, e) {
            void 0 === r && (r = 3), void 0 === e && (e = 102400);
            var i = eu(n, r);
            return tu(i) > e ? t(n, r - 1, e) : i
        },
        walk: ru,
        normalize: eu,
        extractExceptionKeysForMessage: iu,
        dropUndefinedKeys: function t(n) {
            var r, e;
            if (yi(n)) {
                var i = n, u = {};
                try {
                    for (var a = o(me(i)), c = a.next(); !c.done; c = a.next()) {
                        var f = c.value;
                        void 0 !== i[f] && (u[f] = t(i[f]))
                    }
                } catch (t) {
                    r = {error: t}
                } finally {
                    try {
                        c && !c.done && (e = a.return) && e.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return u
            }
            return Xi(n) ? Ri(n).call(n, t) : n
        },
        intercept: function (t, n, r) {
            var e;
            if (n in t) {
                var i = r(t[n]);
                if ("function" == typeof i) try {
                    Ni(t, ((e = {})[n] = {configurable: !0, enumerable: !0, writable: !0, value: i}, e))
                } catch (t) {
                } else t[n] = i
            }
        },
        PromiseBuffer: lu,
        truncate: Yo,
        snipLine: function (t, n) {
            var r = t, e = r.length;
            if (e <= 150) return r;
            n > e && (n = e);
            var i = Math.max(n - 60, 0);
            i < 5 && (i = 0);
            var o = Math.min(i + 140, e);
            return o > e - 5 && (o = e), o === e && (i = Math.max(o - 140, 0)), r = ce(r).call(r, i, o), i > 0 && (r = "'{snip} " + r), o < e && (r += " {snip}"), r
        },
        safeJoin: function (t, n) {
            if (!Xi(t)) return "";
            for (var r = [], e = 0; e < t.length; e++) {
                var i = t[e];
                try {
                    r.push(String(i))
                } catch (t) {
                    r.push("[value cannot be serialized]")
                }
            }
            return r.join(n)
        },
        isMatchingPattern: Go,
        SyncPromise: hu,
        repeatCheck: bu
    }), yu = function () {
        function t() {
            this.P = !1, this.N = [], this.L = [], this.C = [], this.M = {}, this.R = {}
        }

        return t.clone = function (n) {
            var r = new t;
            return n && (r.C = a(n.C), r.M = e({}, n.M), r.R = e({}, n.R), r.I = n.I, r.D = n.D, r.L = a(n.L)), r
        }, t.prototype.addScopeListener = function (t) {
            this.N.push(t)
        }, t.prototype.addEventProcessor = function (t) {
            return this.L.push(t), this
        }, t.prototype.setTransactionName = function (t) {
            return this.D = t, this.H(), this
        }, t.prototype.setTransaction = function (t) {
            return this.setTransactionName(t)
        }, t.prototype.setContext = function (t, n) {
            var r;
            return this.R = e(e({}, this.R), ((r = {})[t] = n, r)), this.H(), this
        }, t.prototype.setSpan = function (t) {
            return this.I = t, this.H(), this
        }, t.prototype.getSpan = function () {
            return this.I
        }, t.prototype.getTransaction = function () {
            var t = this.getSpan();
            if (t && t.spanRecorder && t.spanRecorder.spans[0]) return t.spanRecorder.spans[0]
        }, t.prototype.getBreadcrumb = function () {
            return this.C
        }, t.prototype.update = function (n) {
            if (!n) return this;
            if ("function" == typeof n) {
                var r = n(this);
                return r instanceof t ? r : this
            }
            return n instanceof t ? (this.M = e(e({}, this.M), n.M), this.R = e(e({}, this.R), n.R)) : yi(n) && (n = n, this.M = e(e({}, this.M), n.extra), this.R = e(e({}, this.R), n.contexts)), this
        }, t.prototype.clear = function () {
            return this.C = [], this.M = {}, this.R = {}, this.D = void 0, this.I = void 0, this.H(), this
        }, t.prototype.addBreadcrumb = function (t, n) {
            var r, i = e({timestamp: oi()}, t);
            return this.C = void 0 !== n && n >= 0 ? ce(r = a(this.C, [i])).call(r, -n) : a(this.C, [i]), this.H(), this
        }, t.prototype.clearBreadcrumbs = function () {
            return this.C = [], this.H(), this
        }, t.prototype.applyToEvent = function (t, n) {
            return this.R && me(this.R).length && (t.contexts = e(e({}, this.R), t.contexts)), this.V(a(gu(), this.L), t, n)
        }, t.prototype.V = function (t, n, r, i) {
            var o = this;
            return void 0 === i && (i = 0), new hu(function (u, a) {
                var c = t[i];
                if (null === n || "function" != typeof c) u(n); else {
                    var f = c(e({}, n), r);
                    Ai(f) ? f.then(function (n) {
                        return o.V(t, n, r, i + 1).then(u)
                    }).then(null, a) : o.V(t, f, r, i + 1).then(u).then(null, a)
                }
            })
        }, t.prototype.H = function () {
            var t = this;
            this.P || (this.P = !0, fu(function () {
                var n;
                pe(n = t.N).call(n, function (n) {
                    n(t)
                }), t.P = !1
            }))
        }, t
    }();

    function gu() {
        var t = Qe();
        return t.__BEIDOU__ = t.__BEIDOU__ || {}, t.__BEIDOU__.globalEventProcessors = t.__BEIDOU__.globalEventProcessors || [], t.__BEIDOU__.globalEventProcessors
    }

    function wu(t) {
        gu().push(t)
    }

    var xu, Au, Eu, Ou, Su = function () {
        function t(t, n) {
            void 0 === n && (n = new yu), this.q = [], this.q.push({client: t, scope: n}), this.bindClient(t)
        }

        return t.prototype.bindClient = function (t) {
            this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
        }, t.prototype.pushScope = function () {
            var t = this.getStack(), n = t.length > 0 ? t[t.length - 1].scope : void 0, r = yu.clone(n);
            return this.getStack().push({client: this.getClient(), scope: r}), r
        }, t.prototype.popScope = function () {
            return void 0 !== this.getStack().pop()
        }, t.prototype.withScope = function (t) {
            var n = this.pushScope();
            try {
                t(n)
            } finally {
                this.popScope()
            }
        }, t.prototype.getClient = function () {
            return this.getStackTop().client
        }, t.prototype.getScope = function () {
            return this.getStackTop().scope
        }, t.prototype.getStack = function () {
            return this.q
        }, t.prototype.getStackTop = function () {
            return this.q[this.q.length - 1]
        }, t.prototype.captureException = function (t, n) {
            var r = this.B = _e(), i = n;
            if (!n) {
                var o = void 0;
                try {
                    throw new Error("Beidou syntheticException")
                } catch (t) {
                    o = t
                }
                i = {originalException: t, syntheticException: o}
            }
            return this.U("captureException", t, e({timestamp: Le(), event_id: r}, i)), r
        }, t.prototype.captureEvent = function (t, n) {
            var r = this.B = _e();
            return this.U("captureEvent", t, e({timestamp: Le(), event_id: r}, n)), r
        }, t.prototype.lastEventId = function () {
            return this.B
        }, t.prototype.addBreadcrumb = function (t, n) {
            var r = this.getStackTop();
            if (r.scope && r.client) {
                var i = r.client.getOptions && r.client.getOptions() || {}, o = i.beforeBreadcrumb,
                    u = void 0 === o ? null : o, a = i.maxBreadcrumbs, c = void 0 === a ? 100 : a;
                if (!(c <= 0)) {
                    var f = oi(), s = e({timestamp: f}, t), v = u ? We(function () {
                        return u(s, n)
                    }) : s;
                    null !== v && r.scope.addBreadcrumb(v, Math.min(c, 100))
                }
            }
        }, t.prototype.setContext = function (t, n) {
            var r = this.getStackTop();
            r.scope && r.scope.setContext(t, n)
        }, t.prototype.configureScope = function (t) {
            var n = this.getStackTop();
            n.scope && n.client && t(n.scope)
        }, t.prototype.getIntegration = function (t) {
            var n = this.getClient();
            if (!n) return null;
            try {
                return n.getIntegration(t)
            } catch (n) {
                return Pi.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
            }
        }, t.prototype.startSpan = function (t) {
            return this.X("startSpan", t)
        }, t.prototype.startTransaction = function (t) {
            return this.X("startTransaction", t)
        }, t.prototype.U = function (t) {
            for (var n, r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
            var i = this.getStackTop();
            i && i.client && i.client[t] && (n = i.client)[t].apply(n, a(r, [i.scope]))
        }, t.prototype.X = function (t) {
            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var e = Tu().__BEIDOU__;
            if (e && e.extensions && "function" == typeof e.extensions[t]) return e.extensions[t].apply(this, n);
            Pi.warn("Extension method " + t + " couldn't be found, doing nothing.")
        }, t
    }();

    function Tu() {
        var t = Qe();
        return t.__BEIDOU__ = t.__BEIDOU__ || {extensions: {}, hub: void 0}, t
    }

    function ju() {
        var t = Tu();
        return function (t) {
            if (t && t.__BEIDOU__ && t.__BEIDOU__.hub) return !0;
            return !1
        }(t) || function (t, n) {
            if (!t) return !1;
            t.__BEIDOU__ = t.__BEIDOU__ || {}, t.__BEIDOU__.hub = n
        }(t, new Su), function (t) {
            if (t && t.__BEIDOU__ && t.__BEIDOU__.hub) return t.__BEIDOU__.hub;
            return t.__BEIDOU__ = t.__BEIDOU__ || {}, t.__BEIDOU__.hub = new Su, t.__BEIDOU__.hub
        }(t)
    }

    function ku(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        var e = ju();
        if (e && e[t]) return e[t].apply(e, a(n));
        throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
    }

    function captureException(t, n) {
        var r;
        try {
            throw new Error("Beidou syntheticException")
        } catch (t) {
            r = t
        }
        return ku("captureException", t, {captureContext: n, originalException: t, syntheticException: r})
    }

    !function (t) {
        t.resource = "resource", t.api = "api", t.api_rate = "api_rate", t.api_dyeing = "api_dyeing", t.exception = "exception", t.performance = "performance", t.breadcrumb = "breadcrumb"
    }(xu || (xu = {})), function (t) {
        t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Debug = 2] = "Debug", t[t.Verbose = 3] = "Verbose"
    }(Au || (Au = {})), function (t) {
        t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
    }(Eu || (Eu = {})), function (t) {
        t.fromString = function (n) {
            switch (n) {
                case"debug":
                    return t.Debug;
                case"info":
                    return t.Info;
                case"warn":
                case"warning":
                    return t.Warning;
                case"error":
                    return t.Error;
                case"fatal":
                    return t.Fatal;
                case"critical":
                    return t.Critical;
                case"log":
                default:
                    return t.Log
            }
        }
    }(Eu || (Eu = {})), function (t) {
        t.Unknown = "unknown", t.Skipped = "skipped", t.Success = "success", t.RateLimit = "rate_limit", t.Invalid = "invalid", t.Failed = "failed"
    }(Ou || (Ou = {})), function (t) {
        t.fromHttpCode = function (n) {
            return n >= 200 && n < 300 ? t.Success : 429 === n ? t.RateLimit : n >= 400 && n < 500 ? t.Invalid : n >= 500 ? t.Failed : t.Unknown
        }
    }(Ou || (Ou = {}));
    var zu = [];

    function Pu(t) {
        var n, r = {};
        Xi(t.defaultIntegrations) && t.defaultIntegrations.length && pe(n = t.defaultIntegrations).call(n, function (t) {
            r[t.name] = t, function (t) {
                -1 === Zo(zu).call(zu, t.name) && (t.setupOnce(wu, ju), zu.push(t.name), Pi.log("Integration installed: " + t.name))
            }(t)
        });
        return r
    }

    var Nu, Lu = 30, Cu = 500, Fu = function () {
        function t(t, n) {
            this.J = {}, this._ = !1, this.K = new t(n);
            var r = n.maxSendEvent, e = void 0 === r ? Lu : r;
            this.W = Math.min(e, Cu), this.Z = n
        }

        return t.prototype.captureException = function (t, n, r) {
            var e = this, i = n && n.event_id;
            return this._ = !0, this.Y().eventFromException(t, n).then(function (t) {
                t.type = xu.exception, i = e.captureEvent(t, n, r)
            }), i
        }, t.prototype.G = function () {
            return !Ge() || (Pi.warn("监控你在本地服务进行开发，不会进行北斗上报"), !0)
        }, t.prototype.$ = function (t) {
            return "breadcrumb" === t.type || "performance" === t.type || (this.W <= 0 ? (Pi.warn("当前发送次数已经用完"), !1) : (Pi.log("当前剩余发送event次数: " + this.W), this.W = this.W - 1, !0))
        }, t.prototype.captureEvent = function (t, n, r) {
            var e = this, i = n && n.event_id;
            return this._ = !0, this.tt(t, n, r).then(function (t) {
                i = t && t.event_id, e._ = !1
            }).then(null, function (t) {
                e._ = !1
            }), i
        }, t.prototype.getOptions = function () {
            return this.Z
        }, t.prototype.setupIntegrations = function () {
            this.nt() && (this.J = Pu(this.Z))
        }, t.prototype.getIntegration = function (t) {
            try {
                return this.J[t.id] || null
            } catch (n) {
                return Pi.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
            }
        }, t.prototype.Y = function () {
            return this.K
        }, t.prototype.nt = function () {
            return !1 !== this.getOptions().enabled
        }, t.prototype.rt = function () {
            return !!this.getOptions().isProd
        }, t.prototype.et = function () {
            return !!this.getOptions().isDebug
        }, t.prototype.it = function (t, n, r) {
            var i = this, o = this.getOptions().normalizeDepth, u = void 0 === o ? 3 : o, a = e({}, t);
            this.ot(a);
            var c = n;
            r && r.captureContext && (c = yu.clone(c).update(r.captureContext));
            var f = hu.resolve(a);
            return c && (f = c.applyToEvent(a, r)), f.then(function (t) {
                return "number" == typeof u && u > 0 ? i.ut(t, u) : t
            })
        }, t.prototype.ut = function (t, n) {
            if (!t) return null;
            var r = e(e({}, t), t.contexts && {contexts: eu(t.contexts, n)});
            return t.contexts && t.contexts.trace && (r.contexts.trace = t.contexts.trace), r
        }, t.prototype.ot = function (t) {
            var n = this.getOptions().maxValueLength, r = void 0 === n ? 250 : n, e = t.exceptions && t.exceptions[0];
            e && e.content && (e.content = Yo(e.content, r));
            var i = t.request;
            i && i.url && (i.url = Yo(i.url, r))
        }, t.prototype.at = function (t) {
            this.rt() && this.G() && this.$(t) && this.Y().sendEvent(t), this.et() && Pi.log(Ui(t, null, 2))
        }, t.prototype.tt = function (t, n, r) {
            var e = this, i = this.getOptions().beforeSend;
            return this.nt() ? new hu(function (o, u) {
                e.it(t, r, n).then(function (t) {
                    if (null !== t) {
                        var r = t;
                        if (n && n.data && !0 === n.data.__beidou__ || !i) return e.at(r), void o(r);
                        var a = i(t, n);
                        if (void 0 === a) Pi.error("`beforeSend` method has to return `null` or a valid event."); else if (Ai(a)) e.ct(a, o, u); else {
                            if (null === (r = a)) return Pi.log("`beforeSend` returned `null`, will not send event."), void o(null);
                            e.at(r), o(r)
                        }
                    } else u("An event processor returned null, will not send event.")
                }).then(null, function (t) {
                    e.captureException(t, {
                        data: {__beidou__: !0},
                        originalException: t
                    }), u("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                })
            }) : hu.reject("SDK not enabled, will not send event.")
        }, t.prototype.ct = function (t, n, r) {
            var e = this;
            t.then(function (t) {
                null !== t ? (e.at(t), n(t)) : r("`beforeSend` returned `null`, will not send event.")
            }).then(null, function (t) {
                r("beforeSend rejected with " + t)
            })
        }, t
    }(), Mu = function () {
        function t() {
        }

        return t.prototype.sendEvent = function (t) {
            return hu.resolve({reason: "NoopTransport: Event has been skipped", status: Ou.Skipped})
        }, t.prototype.close = function (t) {
            return hu.resolve(!0)
        }, t
    }(), Ru = function () {
        function t(t) {
            this.Z = t, this.ft = this.st()
        }

        return t.prototype.eventFromException = function (t, n) {
            throw new Ot("Backend has to implement `eventFromException` method")
        }, t.prototype.eventFromMessage = function (t, n) {
            throw new Ot("Backend has to implement `eventFromMessage` method")
        }, t.prototype.sendEvent = function (t) {
            this.ft.sendEvent(t).then(null, function (t) {
                Pi.error("Error while sending event: " + t)
            })
        }, t.prototype.getTransport = function () {
            return this.ft
        }, t.prototype.st = function () {
            return new Mu
        }, t
    }();
    var Iu = function () {
        function t() {
            this.name = t.id
        }

        return t.prototype.setupOnce = function () {
            Nu = Function.prototype.toString, Function.prototype.toString = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = this.__beidou_original__ || this;
                return Nu.apply(r, t)
            }
        }, t.id = "FunctionToString", t
    }(), Du = Jn.some, Hu = fe("some");
    xt({target: "Array", proto: !0, forced: !Hu}, {
        some: function (t) {
            return Du(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Vu = oe("Array").some, qu = Array.prototype, Bu = function (t) {
            var n = t.some;
            return t === qu || t instanceof Array && n === qu.some ? Vu : n
        }, Uu = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], Xu = function () {
            function t(n) {
                void 0 === n && (n = {}), this.Z = n, this.name = t.id
            }

            return t.prototype.setupOnce = function () {
                wu(function (n) {
                    var r = ju();
                    if (!r) return n;
                    var e = r.getIntegration(t);
                    if (e) {
                        var i = r.getClient(), o = i ? i.getOptions() : {}, u = e.vt(o);
                        if (e.dt(n, u)) return null
                    }
                    return n
                })
            }, t.prototype.dt = function (t, n) {
                return this.ht(t, n) ? (Pi.warn("Event dropped due to being internal Beidou Error.\nEvent: " + Ke(t)), !0) : this.lt(t, n) ? (Pi.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Ke(t)), !0) : this.pt(t, n) ? (Pi.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Ke(t) + ".\nUrl: " + this.bt(t)), !0) : !this.yt(t, n) && (Pi.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Ke(t) + ".\nUrl: " + this.bt(t)), !0)
            }, t.prototype.ht = function (t, n) {
                if (!n.ignoreInternal) return !1;
                try {
                    var r;
                    return t && t.exceptions && t.exceptions[0] && t.exceptions[0].content && Zo(r = t.exceptions[0].content).call(r, "BeidouError") > -1 || !1
                } catch (t) {
                    return !1
                }
            }, t.prototype.lt = function (t, n) {
                var r;
                return !(!n.ignoreErrors || !n.ignoreErrors.length) && Bu(r = this.gt(t)).call(r, function (t) {
                    var r;
                    return Bu(r = n.ignoreErrors).call(r, function (n) {
                        return Go(t, n)
                    })
                })
            }, t.prototype.pt = function (t, n) {
                var r;
                if (!n.denyUrls || !n.denyUrls.length) return !1;
                var e = this.bt(t);
                return !!e && Bu(r = n.denyUrls).call(r, function (t) {
                    return Go(e, t)
                })
            }, t.prototype.yt = function (t, n) {
                var r;
                if (!n.allowUrls || !n.allowUrls.length) return !0;
                var e = this.bt(t);
                return !e || Bu(r = n.allowUrls).call(r, function (t) {
                    return Go(e, t)
                })
            }, t.prototype.vt = function (t) {
                return void 0 === t && (t = {}), {
                    allowUrls: a(this.Z.allowUrls || [], t.allowUrls || []),
                    denyUrls: a(this.Z.denyUrls || [], t.denyUrls || []),
                    ignoreErrors: a(this.Z.ignoreErrors || [], t.ignoreErrors || [], Uu),
                    ignoreInternal: void 0 === this.Z.ignoreInternal || this.Z.ignoreInternal
                }
            }, t.prototype.gt = function (t) {
                if (t.exceptions) try {
                    var n = (t.exceptions && t.exceptions[0] || {}).content;
                    return [void 0 === n ? "" : n]
                } catch (n) {
                    return Pi.error("Cannot extract message for event " + Ke(t)), []
                }
                return []
            }, t.prototype.bt = function (t) {
                try {
                    if (t.exceptions) {
                        var n = t.exceptions[0] && t.exceptions[0].stacktrace;
                        return n && n[n.length - 1].filename || null
                    }
                    return null
                } catch (n) {
                    return Pi.error("Cannot extract url for event " + Ke(t)), null
                }
            }, t.id = "InboundFilters", t
        }(), Ju = Object.freeze({__proto__: null, FunctionToString: Iu, InboundFilters: Xu}), Qu = "?",
        _u = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        Ku = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
        Wu = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
        Zu = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, Yu = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        Gu = /Minified React error #\d+;/i;

    function $u(t) {
        var n = null, r = 0;
        t && ("number" == typeof t.framesToPop ? r = t.framesToPop : Gu.test(t.message) && (r = 1));
        try {
            if (n = function (t) {
                if (!t || !t.stacktrace) return null;
                for (var n, r = t.stacktrace, e = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = r.split("\n"), u = [], a = 0; a < o.length; a += 2) {
                    var c = null;
                    (n = e.exec(o[a])) ? c = {
                        url: n[2],
                        func: n[3],
                        args: [],
                        line: +n[1],
                        column: null
                    } : (n = i.exec(o[a])) && (c = {
                        url: n[6],
                        func: n[3] || n[4],
                        args: n[5] ? n[5].split(",") : [],
                        line: +n[1],
                        column: +n[2]
                    }), c && (!c.func && c.line && (c.func = Qu), u.push(c))
                }
                if (!u.length) return null;
                return {message: na(t), name: t.name, stack: u}
            }(t)) return ta(n, r)
        } catch (t) {
        }
        try {
            if (n = function (t) {
                if (!t || !t.stack) return null;
                for (var n, r, e, i = [], o = t.stack.split("\n"), u = 0; u < o.length; ++u) {
                    if (r = _u.exec(o[u])) {
                        var a, c, f, s = r[2] && 0 === Zo(a = r[2]).call(a, "native");
                        r[2] && 0 === Zo(c = r[2]).call(c, "eval") && (n = Yu.exec(r[2])) && (r[2] = n[1], r[3] = n[2], r[4] = n[3]), e = {
                            url: r[2] && 0 === Zo(f = r[2]).call(f, "address at ") ? r[2].substr("address at ".length) : r[2],
                            func: r[1] || Qu,
                            args: s ? [r[2]] : [],
                            line: r[3] ? +r[3] : null,
                            column: r[4] ? +r[4] : null
                        }
                    } else if (r = Wu.exec(o[u])) e = {
                        url: r[2],
                        func: r[1] || Qu,
                        args: [],
                        line: +r[3],
                        column: r[4] ? +r[4] : null
                    }; else {
                        if (!(r = Ku.exec(o[u]))) continue;
                        var v;
                        r[3] && Zo(v = r[3]).call(v, " > eval") > -1 && (n = Zu.exec(r[3])) ? (r[1] = r[1] || "eval", r[3] = n[1], r[4] = n[2], r[5] = "") : 0 !== u || r[5] || void 0 === t.columnNumber || (i[0].column = t.columnNumber + 1), e = {
                            url: r[3],
                            func: r[1] || Qu,
                            args: r[2] ? r[2].split(",") : [],
                            line: r[4] ? +r[4] : null,
                            column: r[5] ? +r[5] : null
                        }
                    }
                    !e.func && e.line && (e.func = Qu), i.push(e)
                }
                if (!i.length) return null;
                return {message: na(t), name: t.name, stack: i}
            }(t)) return ta(n, r)
        } catch (t) {
        }
        return {message: na(t), name: t && t.name, stack: [], failed: !0}
    }

    function ta(t, n) {
        try {
            var r;
            return e(e({}, t), {stack: ce(r = t.stack).call(r, n)})
        } catch (n) {
            return t
        }
    }

    function na(t) {
        var n = t && t.message;
        return n ? n.error && "string" == typeof n.error.message ? n.error.message : n : "No error message"
    }

    var ra = 50, ea = iu, ia = gi, oa = Si;

    function ua(t) {
        return {
            exceptions: [function (t) {
                var n = aa(t.stack), r = t.name, e = t.message, i = {content: r + ":" + e};
                return n && n.length && (i.stacktrace = n), void 0 === r && "" === e && (i.content = "Unrecoverable error caught"), i
            }(t)]
        }
    }

    function aa(t) {
        var n, r;
        if (!t || !t.length) return [];
        var e = t, i = e[0].func || "", o = e[e.length - 1].func || "";
        return -1 === Zo(i).call(i, "captureMessage") && -1 === Zo(i).call(i, "captureException") || (e = ce(e).call(e, 1)), -1 !== Zo(o).call(o, "beidouWrapped") && (e = ce(e).call(e, 0, -1)), Ne(n = Ri(r = ce(e).call(e, 0, ra)).call(r, function (t) {
            return {
                colno: null === t.column ? void 0 : t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                lineno: null === t.line ? void 0 : t.line
            }
        })).call(n)
    }

    function ca(t) {
        if (void 0 === t && (t = {}), !me(t).length) return {};
        var n = {};
        for (var r in t) {
            var e = oa(t[r]);
            n[r] = "Object" === e ? "[Object]" : "Array" === e ? "[Array]" : t[r]
        }
        return n
    }

    var fa = Ze, sa = li, va = pi, da = di, ha = hi, la = gi, pa = yi, ba = hu;

    function ma(t, n, r) {
        var e = ga(n, r && r.syntheticException || void 0, {attachStacktrace: t.attachStacktrace});
        return ba.resolve(e)
    }

    function ya(t, n, r) {
        var e = wa(n, r && r.syntheticException || void 0, {attachStacktrace: t.attachStacktrace});
        return ba.resolve(e)
    }

    function ga(t, n, r) {
        var e;
        if (void 0 === r && (r = {}), ha(t) && t.error) return e = ua($u(t = t.error));
        if (sa(t) || va(t)) {
            var i = t, o = i.name || (sa(i) ? "DOMError" : "DOMException"), u = i.message ? o + ": " + i.message : o;
            return e = wa(u, n, r), fa(e, u), e
        }
        return da(t) ? e = ua($u(t)) : pa(t) || la(t) ? e = function (t, n, r) {
            var e = {exceptions: [{content: (ia(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error") + ":Non-Error " + (r ? "promise rejection" : "exception") + " captured with keys is " + ea(t)}]};
            if (n) {
                var i = aa($u(n).stack);
                e.stacktrace = {frames: i}
            }
            return e
        }(t, n, r.rejection) : (e = wa(t, n, r), fa(e, "" + t, void 0), e)
    }

    function wa(t, n, r) {
        void 0 === r && (r = {});
        var e, i = t,
            o = t.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
        o && (e = o[1], i = o[2]);
        var u = {content: (e || "Error") + ":" + i};
        if (r.attachStacktrace && n) {
            var a = $u(n);
            u.stacktrace = aa(a.stack)
        }
        return {exceptions: [u]}
    }

    var xa, Aa = lu, Ea = Ot, Oa = Qe;
    !function (t) {
        t.COMMON_REPORT_URL = "//tzjybeidou.58.com/collect/common", t.BREADCRUMB_REPORT_URL = "//tzjybeidou.58.com/collect/behavior"
    }(xa || (xa = {}));
    var Sa = function () {
        function t() {
            this.url = "", this.j = new Aa(30)
        }

        return t.prototype.wt = function (t) {
            var n = t.type, r = "";
            switch (void 0 === n ? "" : n) {
                case"breadcrumb":
                    r = xa.BREADCRUMB_REPORT_URL;
                    break;
                default:
                    r = xa.COMMON_REPORT_URL
            }
            return "" + Oa().location.protocol + r
        }, t.prototype.sendEvent = function (t) {
            throw new Ea("Transport Class has to implement `sendEvent` method")
        }, t.prototype.close = function (t) {
            return this.j.drain(t)
        }, t.prototype.finalFomartData = function (t) {
            var n = t.projectId, r = t.exceptions, i = t.apis, o = t.resources, u = t.performances, a = t.breadcrumbs,
                c = t.type, f = t.sdk, s = t.request, v = e(e(e(e(e({
                    projectId: n,
                    type: c,
                    sdk: f,
                    request: s
                }, u && {performances: u}), r && {exceptions: r}), i && {apis: i}), o && {resources: o}), a && {breadcrumbs: a});
            if ("exception" === v.type && v.exceptions && v.exceptions[0] && v.exceptions[0].stacktrace) try {
                v.exceptions[0].stacktrace = Ui(v.exceptions[0].stacktrace)
            } catch (t) {
                v.exceptions[0].stacktrace = "[]"
            }
            try {
                v = Ui(v)
            } catch (t) {
                v = "{}"
            }
            var d = new FormData;
            return d.append("content", v), d
        }, t
    }(), Ta = function (t, n) {
        var r = this;
        if (!(r instanceof Ta)) return new Ta(t, n);
        At && (r = At(new Error(void 0), kr(r))), void 0 !== n && yt(r, "message", qt(n));
        var e = [];
        return go(t, e.push, {that: e}), yt(r, "errors", e), r
    };
    Ta.prototype = cn(Error.prototype, {
        constructor: g(5, Ta),
        message: g(5, ""),
        name: g(5, "AggregateError")
    }), xt({global: !0}, {AggregateError: Ta});
    var ja = h.Promise, ka = Z("species"), za = function (t) {
        var n = z(t), r = mt.f;
        p && n && !n[ka] && r(n, ka, {
            configurable: !0, get: function () {
                return this
            }
        })
    }, Pa = Z("iterator"), Na = !1;
    try {
        var La = 0, Ca = {
            next: function () {
                return {done: !!La++}
            }, return: function () {
                Na = !0
            }
        };
        Ca[Pa] = function () {
            return this
        }, Array.from(Ca, function () {
            throw 2
        })
    } catch (t) {
    }
    var Fa, Ma, Ra, Ia, Da = Z("species"), Ha = function (t, n) {
            var r, e = pt(t).constructor;
            return void 0 === e || null == (r = pt(e)[Da]) ? n : ht(r)
        }, Va = /(?:ipad|iphone|ipod).*applewebkit/i.test(P), qa = "process" == x(h.process), Ba = h.setImmediate,
        Ua = h.clearImmediate, Xa = h.process, Ja = h.MessageChannel, Qa = h.Dispatch, _a = 0, Ka = {};
    try {
        Fa = h.location
    } catch (t) {
    }
    var Wa = function (t) {
        if (Ka.hasOwnProperty(t)) {
            var n = Ka[t];
            delete Ka[t], n()
        }
    }, Za = function (t) {
        return function () {
            Wa(t)
        }
    }, Ya = function (t) {
        Wa(t.data)
    }, Ga = function (t) {
        h.postMessage(String(t), Fa.protocol + "//" + Fa.host)
    };
    Ba && Ua || (Ba = function (t) {
        for (var n = [], r = arguments.length, e = 1; r > e;) n.push(arguments[e++]);
        return Ka[++_a] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, n)
        }, Ma(_a), _a
    }, Ua = function (t) {
        delete Ka[t]
    }, qa ? Ma = function (t) {
        Xa.nextTick(Za(t))
    } : Qa && Qa.now ? Ma = function (t) {
        Qa.now(Za(t))
    } : Ja && !Va ? (Ia = (Ra = new Ja).port2, Ra.port1.onmessage = Ya, Ma = lt(Ia.postMessage, Ia, 1)) : h.addEventListener && "function" == typeof postMessage && !h.importScripts && Fa && "file:" !== Fa.protocol && !l(Ga) ? (Ma = Ga, h.addEventListener("message", Ya, !1)) : Ma = "onreadystatechange" in rt("script") ? function (t) {
        $t.appendChild(rt("script")).onreadystatechange = function () {
            $t.removeChild(this), Wa(t)
        }
    } : function (t) {
        setTimeout(Za(t), 0)
    });
    var $a, tc, nc, rc, ec, ic, oc, uc, ac = {set: Ba, clear: Ua},
        cc = /ipad|iphone|ipod/i.test(P) && void 0 !== h.Pebble, fc = /web0s(?!.*chrome)/i.test(P), sc = ot.f,
        vc = ac.set, dc = h.MutationObserver || h.WebKitMutationObserver, hc = h.document, lc = h.process,
        pc = h.Promise, bc = sc(h, "queueMicrotask"), mc = bc && bc.value;
    mc || ($a = function () {
        var t, n;
        for (qa && (t = lc.domain) && t.exit(); tc;) {
            n = tc.fn, tc = tc.next;
            try {
                n()
            } catch (t) {
                throw tc ? rc() : nc = void 0, t
            }
        }
        nc = void 0, t && t.enter()
    }, Va || qa || fc || !dc || !hc ? !cc && pc && pc.resolve ? ((oc = pc.resolve(void 0)).constructor = pc, uc = oc.then, rc = function () {
        uc.call(oc, $a)
    }) : rc = qa ? function () {
        lc.nextTick($a)
    } : function () {
        vc.call(h, $a)
    } : (ec = !0, ic = hc.createTextNode(""), new dc($a).observe(ic, {characterData: !0}), rc = function () {
        ic.data = ec = !ec
    }));
    var yc, gc, wc, xc = mc || function (t) {
            var n = {fn: t, next: void 0};
            nc && (nc.next = n), tc || (tc = n, rc()), nc = n
        }, Ac = function (t) {
            var n, r;
            this.promise = new t(function (t, e) {
                if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
                n = t, r = e
            }), this.resolve = ht(n), this.reject = ht(r)
        }, Ec = {
            f: function (t) {
                return new Ac(t)
            }
        }, Oc = function (t, n) {
            if (pt(t), T(n) && n.constructor === t) return n;
            var r = Ec.f(t);
            return (0, r.resolve)(n), r.promise
        }, Sc = function (t) {
            try {
                return {error: !1, value: t()}
            } catch (t) {
                return {error: !0, value: t}
            }
        }, Tc = "object" == typeof window, jc = ac.set, kc = Z("species"), zc = "Promise", Pc = Bn.get, Nc = Bn.set,
        Lc = Bn.getterFor(zc), Cc = ja && ja.prototype, Fc = ja, Mc = Cc, Rc = h.TypeError, Ic = h.document,
        Dc = h.process, Hc = Ec.f, Vc = Hc, qc = !!(Ic && Ic.createEvent && h.dispatchEvent),
        Bc = "function" == typeof PromiseRejectionEvent, Uc = dt(zc, function () {
            var t = Cn(Fc), n = t !== String(Fc);
            if (!n && 66 === M) return !0;
            if (!Mc.finally) return !0;
            if (M >= 51 && /native code/.test(t)) return !1;
            var r = new Fc(function (t) {
                t(1)
            }), e = function (t) {
                t(function () {
                }, function () {
                })
            };
            return (r.constructor = {})[kc] = e, !(r.then(function () {
            }) instanceof e) || !n && Tc && !Bc
        }), Xc = Uc || !function (t, n) {
            if (!n && !Na) return !1;
            var r = !1;
            try {
                var e = {};
                e[Pa] = function () {
                    return {
                        next: function () {
                            return {done: r = !0}
                        }
                    }
                }, t(e)
            } catch (t) {
            }
            return r
        }(function (t) {
            Fc.all(t).catch(function () {
            })
        }), Jc = function (t) {
            var n;
            return !(!T(t) || "function" != typeof (n = t.then)) && n
        }, Qc = function (t, n) {
            if (!t.notified) {
                t.notified = !0;
                var r = t.reactions;
                xc(function () {
                    for (var e = t.value, i = 1 == t.state, o = 0; r.length > o;) {
                        var u, a, c, f = r[o++], s = i ? f.ok : f.fail, v = f.resolve, d = f.reject, h = f.domain;
                        try {
                            s ? (i || (2 === t.rejection && Zc(t), t.rejection = 1), !0 === s ? u = e : (h && h.enter(), u = s(e), h && (h.exit(), c = !0)), u === f.promise ? d(Rc("Promise-chain cycle")) : (a = Jc(u)) ? a.call(u, v, d) : v(u)) : d(e)
                        } catch (t) {
                            h && !c && h.exit(), d(t)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && Kc(t)
                })
            }
        }, _c = function (t, n, r) {
            var e, i;
            qc ? ((e = Ic.createEvent("Event")).promise = n, e.reason = r, e.initEvent(t, !1, !0), h.dispatchEvent(e)) : e = {
                promise: n,
                reason: r
            }, !Bc && (i = h["on" + t]) ? i(e) : "unhandledrejection" === t && function (t, n) {
                var r = h.console;
                r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, n))
            }("Unhandled promise rejection", r)
        }, Kc = function (t) {
            jc.call(h, function () {
                var n, r = t.facade, e = t.value;
                if (Wc(t) && (n = Sc(function () {
                    qa ? Dc.emit("unhandledRejection", e, r) : _c("unhandledrejection", r, e)
                }), t.rejection = qa || Wc(t) ? 2 : 1, n.error)) throw n.value
            })
        }, Wc = function (t) {
            return 1 !== t.rejection && !t.parent
        }, Zc = function (t) {
            jc.call(h, function () {
                var n = t.facade;
                qa ? Dc.emit("rejectionHandled", n) : _c("rejectionhandled", n, t.value)
            })
        }, Yc = function (t, n, r) {
            return function (e) {
                t(n, e, r)
            }
        }, Gc = function (t, n, r) {
            t.done || (t.done = !0, r && (t = r), t.value = n, t.state = 2, Qc(t, !0))
        }, $c = function (t, n, r) {
            if (!t.done) {
                t.done = !0, r && (t = r);
                try {
                    if (t.facade === n) throw Rc("Promise can't be resolved itself");
                    var e = Jc(n);
                    e ? xc(function () {
                        var r = {done: !1};
                        try {
                            e.call(n, Yc($c, r, t), Yc(Gc, r, t))
                        } catch (n) {
                            Gc(r, n, t)
                        }
                    }) : (t.value = n, t.state = 1, Qc(t, !1))
                } catch (n) {
                    Gc({done: !1}, n, t)
                }
            }
        };
    Uc && (Mc = (Fc = function (t) {
        wo(this, Fc, zc), ht(t), yc.call(this);
        var n = Pc(this);
        try {
            t(Yc($c, n), Yc(Gc, n))
        } catch (t) {
            Gc(n, t)
        }
    }).prototype, (yc = function (t) {
        Nc(this, {type: zc, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0})
    }).prototype = To(Mc, {
        then: function (t, n) {
            var r = Lc(this), e = Hc(Ha(this, Fc));
            return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = qa ? Dc.domain : void 0, r.parent = !0, r.reactions.push(e), 0 != r.state && Qc(r, !1), e.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), gc = function () {
        var t = new yc, n = Pc(t);
        this.promise = t, this.resolve = Yc($c, n), this.reject = Yc(Gc, n)
    }, Ec.f = Hc = function (t) {
        return t === Fc || t === wc ? new gc(t) : Vc(t)
    }), xt({global: !0, wrap: !0, forced: Uc}, {Promise: Fc}), kn(Fc, zc, !1, !0), za(zc), wc = z(zc), xt({
        target: zc,
        stat: !0,
        forced: Uc
    }, {
        reject: function (t) {
            var n = Hc(this);
            return n.reject.call(void 0, t), n.promise
        }
    }), xt({target: zc, stat: !0, forced: !0}, {
        resolve: function (t) {
            return Oc(this === wc ? Fc : this, t)
        }
    }), xt({target: zc, stat: !0, forced: Xc}, {
        all: function (t) {
            var n = this, r = Hc(n), e = r.resolve, i = r.reject, o = Sc(function () {
                var r = ht(n.resolve), o = [], u = 0, a = 1;
                go(t, function (t) {
                    var c = u++, f = !1;
                    o.push(void 0), a++, r.call(n, t).then(function (t) {
                        f || (f = !0, o[c] = t, --a || e(o))
                    }, i)
                }), --a || e(o)
            });
            return o.error && i(o.value), r.promise
        }, race: function (t) {
            var n = this, r = Hc(n), e = r.reject, i = Sc(function () {
                var i = ht(n.resolve);
                go(t, function (t) {
                    i.call(n, t).then(r.resolve, e)
                })
            });
            return i.error && e(i.value), r.promise
        }
    }), xt({target: "Promise", stat: !0}, {
        allSettled: function (t) {
            var n = this, r = Ec.f(n), e = r.resolve, i = r.reject, o = Sc(function () {
                var r = ht(n.resolve), i = [], o = 0, u = 1;
                go(t, function (t) {
                    var a = o++, c = !1;
                    i.push(void 0), u++, r.call(n, t).then(function (t) {
                        c || (c = !0, i[a] = {status: "fulfilled", value: t}, --u || e(i))
                    }, function (t) {
                        c || (c = !0, i[a] = {status: "rejected", reason: t}, --u || e(i))
                    })
                }), --u || e(i)
            });
            return o.error && i(o.value), r.promise
        }
    });
    xt({target: "Promise", stat: !0}, {
        any: function (t) {
            var n = this, r = Ec.f(n), e = r.resolve, i = r.reject, o = Sc(function () {
                var r = ht(n.resolve), o = [], u = 0, a = 1, c = !1;
                go(t, function (t) {
                    var f = u++, s = !1;
                    o.push(void 0), a++, r.call(n, t).then(function (t) {
                        s || c || (c = !0, e(t))
                    }, function (t) {
                        s || c || (s = !0, o[f] = t, --a || i(new (z("AggregateError"))(o, "No one promise resolved")))
                    })
                }), --a || i(new (z("AggregateError"))(o, "No one promise resolved"))
            });
            return o.error && i(o.value), r.promise
        }
    });
    var tf = !!ja && l(function () {
        ja.prototype.finally.call({
            then: function () {
            }
        }, function () {
        })
    });
    xt({target: "Promise", proto: !0, real: !0, forced: tf}, {
        finally: function (t) {
            var n = Ha(this, z("Promise")), r = "function" == typeof t;
            return this.then(r ? function (r) {
                return Oc(n, t()).then(function () {
                    return r
                })
            } : t, r ? function (r) {
                return Oc(n, t()).then(function () {
                    throw r
                })
            } : t)
        }
    });
    var nf = j.Promise, rf = Pi, ef = ci, of = hu, uf = Qe(), af = function (t) {
        function n() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.xt = new Date(Le()), n
        }

        return r(n, t), n.prototype.sendEvent = function (t) {
            var n = this;
            if (new Date(Le()) < this.xt) return nf.reject({
                event: t,
                reason: "Transport locked till " + this.xt + " due to too many requests.",
                status: 429
            });
            var r = this.finalFomartData(t);
            this.url = this.wt(t);
            var e = {body: r, method: "POST", credentials: "include"};
            return this.j.add(new of(function (t, r) {
                uf.fetch(n.url, e).then(function (e) {
                    var i = Ou.fromHttpCode(e.status);
                    if (i !== Ou.Success) {
                        if (i === Ou.RateLimit) {
                            var o = Le(), u = e.headers.get("Retry-After");
                            n.xt = new Date(o + ef(o, u)), rf.warn("Too many requests, backing off till: " + n.xt)
                        }
                        r(e)
                    } else t({status: i})
                }).catch(r)
            }))
        }, n
    }(Sa), cf = Pi, ff = ci, sf = hu, vf = function (t) {
        function n() {
            var n = null !== t && t.apply(this, arguments) || this;
            return n.xt = new Date(Le()), n
        }

        return r(n, t), n.prototype.sendEvent = function (t) {
            var n = this;
            return new Date(Le()) < this.xt ? nf.reject({
                event: t,
                reason: "Transport locked till " + this.xt + " due to too many requests.",
                status: 429
            }) : (this.url = this.wt(t), this.j.add(new sf(function (r, e) {
                var i = new XMLHttpRequest;
                i.onreadystatechange = function () {
                    if (4 === i.readyState) {
                        var t = Ou.fromHttpCode(i.status);
                        if (t !== Ou.Success) {
                            if (t === Ou.RateLimit) {
                                var o = Le(), u = i.getResponseHeader("Retry-After");
                                n.xt = new Date(o + ff(o, u)), cf.warn("Too many requests, backing off till: " + n.xt)
                            }
                            e(i)
                        } else r({status: t})
                    }
                }, i.open("POST", n.url);
                var o = n.finalFomartData(t);
                i.send(o)
            })))
        }, n
    }(Sa), df = Jn.filter, hf = Mt("filter");
    xt({target: "Array", proto: !0, forced: !hf}, {
        filter: function (t) {
            return df(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var lf = oe("Array").filter, pf = Array.prototype, bf = function (t) {
        var n = t.filter;
        return t === pf || t instanceof Array && n === pf.filter ? lf : n
    }, mf = Pi, yf = Qe;

    function gf() {
        if (!("fetch" in yf())) return !1;
        try {
            return new Headers, new Request(""), new Response, !0
        } catch (t) {
            return !1
        }
    }

    function wf(t) {
        return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
    }

    function xf() {
        return "PerformanceObserver" in yf()
    }

    xt({target: "Array", proto: !0}, {
        fill: function (t) {
            for (var n = q(this), r = Pt(n.length), e = arguments.length, i = Xt(e > 1 ? arguments[1] : void 0, r), o = e > 2 ? arguments[2] : void 0, u = void 0 === o ? r : Xt(o, r); u > i;) n[i++] = t;
            return n
        }
    });
    var Af = oe("Array").fill, Ef = Array.prototype, Of = function (t) {
        var n = t.fill;
        return t === Ef || t instanceof Array && n === Ef.fill ? Af : n
    }, Sf = function (t) {
        return function (n, r, e, i) {
            ht(r);
            var o = q(n), u = E(o), a = Pt(o.length), c = t ? a - 1 : 0, f = t ? -1 : 1;
            if (e < 2) for (; ;) {
                if (c in u) {
                    i = u[c], c += f;
                    break
                }
                if (c += f, t ? c < 0 : a <= c) throw TypeError("Reduce of empty array with no initial value")
            }
            for (; t ? c >= 0 : a > c; c += f) c in u && (i = r(i, u[c], c, o));
            return i
        }
    }, Tf = {left: Sf(!1), right: Sf(!0)}.left, jf = fe("reduce");
    xt({target: "Array", proto: !0, forced: !jf || !qa && M > 79 && M < 83}, {
        reduce: function (t) {
            return Tf(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var kf, zf, Pf = oe("Array").reduce, Nf = Array.prototype, Lf = function (t) {
            var n = t.reduce;
            return t === Nf || t instanceof Array && n === Nf.reduce ? Pf : n
        },
        Cf = /W(UB|BU)A/i.test(navigator.userAgent) || /WBTown/i.test(navigator.userAgent) || /wbutown/i.test(navigator.userAgent) || /AJK/.test(navigator.userAgent) || /HSApartmentBrokerPMS/i.test(navigator.userAgent) || -1 !== Zo(kf = document.cookie).call(kf, "58ua=58app"),
        Ff = Zo(zf = navigator.userAgent).call(zf, "Android") > -1,
        Mf = (/WBTown/i.test(navigator.userAgent), /wbutown/i.test(navigator.userAgent), !Ff && /W(UB|BU)A/i.test(navigator.userAgent) || /WBTown/i.test(navigator.userAgent) || /wbutown/i.test(navigator.userAgent)),
        Rf = Qe();
    var If = Qe(), Df = If.innerWidth, Hf = If.innerHeight,
        Vf = "data:image/png;base64,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",
        qf = "@@beidou_right_bar_hide";

    function Bf(t) {
        var n = document.createElement("div");
        n.id = "$beidou_side_bar", n.style.cssText = "width:80px;height:154px;position:fixed;top:" + (Hf - 154) / 2 + "px;\n  right:-80px;transition: -webkit-transform 0.5s ease-in;-moz-transition: transform 0.5s ease-in;\n  -webkit-transition: -webkit-transform 0.5s ease-in; -o-transition: transform 0.5s ease-in;z-index:9000;";
        var r = document.createElement("div");
        r.id = "$beidou_report_bar", r.style.cssText = "padding-top:5px;width:80px;height:90px;background:rgba(0,0,0,0.8);text-align:center;\n  border-radius:3px;box-sizing:border-box;";
        var e = document.createElement("img");
        e.src = Vf, e.style.cssText = "width:60px;height:60px;display:inline-block";
        var i = document.createElement("div");
        i.style.cssText = "margin-top:-10px;text-align:center;font-size:13px;height:30px;line-height:30px;width:100%;\n  color:#fff;box-sizing:border-box;", i.innerHTML = "反馈问题";
        var o = document.createElement("div");
        o.id = "$beidou_side_bar_close", o.style.cssText = "width:80px;height:30px;margin-top:2px;background:rgba(0,0,0,0.8);\n  border-radius:3px;line-height:30px;text-align:center;font-size:13px;color:#fff;", o.innerHTML = "关闭";
        var u = document.createElement("div");
        u.id = "$beidou_side_bar_close_disappear", u.style.cssText = "width:80px;height:30px;margin-top:2px;background:rgba(0,0,0,0.8);\n  border-radius:3px;line-height:30px;text-align:center;font-size:13px;color:#fff;", u.innerHTML = "不在提示", r.appendChild(e), r.appendChild(i), n.appendChild(r), n.appendChild(o), n.appendChild(u), document.body.appendChild(n);
        var a = Jf("transform"), c = document.getElementById("$beidou_side_bar"),
            f = document.getElementById("$beidou_report_bar"), s = document.getElementById("$beidou_side_bar_close"),
            v = document.getElementById("$beidou_side_bar_close_disappear");
        c && fu(function () {
            c.style[a] = "translate3d(-90px, 0, 0)"
        }, 200), c && f && s && v && (f.onclick = function () {
            t && function (t) {
                var n = document.createElement("div");
                n.id = "$beidou_report_mask", n.style.cssText = "height:" + Hf + "px;width:" + Df + "px;position:fixed;left:0px;top:0px;\n  width:100%;background:rgba(0,0,0,0.5);z-index:9999;";
                var r = document.createElement("div");
                r.style.cssText = "position:absolute;left:20px;right:20px;top:50%;transform:translate(0, -50%);\n  z-index:10000;background:white;border-radius:5px;overflow:hidden;box-sizing:border-box;padding-bottom:20px;";
                var e = document.createElement("div");
                e.style.cssText = "text-align:center;font-size:13px;width:100%;height:40px;line-height:40px;\n  position:relative;background:#5e7af6;color:#333;", e.innerHTML = "问题反馈上报";
                var i = document.createElement("div");
                i.id = "$beidou_report_close", i.style.cssText = "text-align:center;font-size:13px;width:40px;height:40px;line-height:40px;color:#fff;\n  position:absolute;top:0;right:0", i.innerHTML = "✕";
                var o = document.createElement("div");
                o.style.cssText = "width:100%;padding:30px;15px;box-sizing:border-box;font-size:13px;color:#999;", o.innerHTML = "建议在Wi-Fi环境点击上报，上报的日志将作为开发人员修复问题的依据，有助于为您提供更优质的服务。";
                var u = document.createElement("div");
                u.id = "$beidou_report_btn", u.style.cssText = "margin:0 auto;text-align:center;font-size:13px;width:140px;height:40px;line-height:40px;\n  background:#5e7af6;border-radius:5px;color:#fff", u.innerHTML = "点击上报", e.appendChild(i), r.appendChild(e), r.appendChild(o), r.appendChild(u), n.appendChild(r), document.body.appendChild(n);
                var a = document.getElementById("$beidou_report_mask"),
                    c = document.getElementById("$beidou_report_btn"),
                    f = document.getElementById("$beidou_report_close");
                a && c && f && (f.onclick = function () {
                    document.body.removeChild(a)
                }, c.onclick = function () {
                    t && t(), document.body.removeChild(a)
                })
            }(t), document.body.removeChild(c)
        }, s.onclick = function () {
            document.body.removeChild(c)
        }, v.onclick = function () {
            var t, n, r, e, i;
            t = qf, n = "1", r = 864e5, e = (new Rf.Date).getTime(), i = Ui({
                data: n,
                time: e,
                expire: r
            }), Rf.localStorage.setItem(t, i), document.body.removeChild(c)
        })
    }

    var Uf = document.createElement("div").style, Xf = function () {
        var t = {
            webkit: "webkitTransform",
            Moz: "MozTransform",
            O: "OTransform",
            ms: "msTransform",
            standard: "transform"
        };
        for (var n in t) if (void 0 !== Uf[t[n]]) return n;
        return !1
    }(), Jf = function (t) {
        return !1 === Xf ? "" : "standard" === Xf ? t : Xf + t.charAt(0).toUpperCase() + t.substr(1)
    }, Qf = "nativechannel://", _f = [], Kf = !1;
    var Wf = Ff ? function (t) {
        window.prompt(t)
    } : function (t) {
        var n;
        Yf.length > 0 ? n = Yf.shift() : (n = function () {
            var t = document.createElement("iframe");
            return t.setAttribute("style", "display:none;"), t.setAttribute("height", "0px"), t.setAttribute("width", "0px"), t.setAttribute("frameborder", "0"), t
        }(), document.body.appendChild(n));
        n.src = t, fu(function () {
            Yf.push(n)
        }, 20)
    };

    function Zf(t) {
        Cf && Wf(t)
    }

    var Yf = [];
    var Gf = function t() {
        document.removeEventListener("DOMContentLoaded", t), Kf = !0, function () {
            for (; _f.length;) Zf(_f.shift())
        }()
    };

    function $f(t, n) {
        !function (t) {
            Kf ? Zf(t) : _f.push(t)
        }(function (t, n) {
            var r = "" + Qf + t;
            return n && (r += "?params=" + encodeURIComponent(Ui(n))), r
        }(t, n))
    }

    /complete|loaded|interactive/.test(document.readyState) && document.body ? Gf() : document.addEventListener("DOMContentLoaded", Gf, !1);
    var ts = Qf, ns = Of(mu), rs = ts, es = Qe(), is = function () {
        function t(t) {
            this.callback = t
        }

        return t.prototype.observe = function () {
            Cf && (Ff ? this.observeAndr() : this.observeIOS())
        }, t.prototype.record = function (t) {
            this.callback(e({}, t))
        }, t.prototype.collect = function (t) {
            if (t) {
                var n = this.parseMessage(t);
                n && "behavior_record" !== n.actionName && (this.interceptCallback(n), this.record(n))
            }
        }, t.prototype.interceptCallback = function (t) {
            var n;
            if (t.callback) {
                var r = t.callback.split("."), i = r[r.length - 1],
                    o = Lf(n = ce(r).call(r, 0, -1)).call(n, function (t, n) {
                        return t[n]
                    }, es), u = this;
                ns(o, i, function (n) {
                    return function () {
                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                        u.record(e(e({}, t), {callbackParams: r})), n.apply(null, r)
                    }
                })
            }
        }, t.prototype.observeAndr = function () {
            if (!(Ff && Cf && es.stub && es.stub.jsCallMethod)) {
                var t = es.prompt, n = this;
                es.prompt = function (r, e) {
                    return n.collect(r), t.call(this, r, e)
                }
            }
        }, t.prototype.observeIOS = function () {
            var t;
            if ("MutationObserver" in yf()) {
                var n = document.createElement;
                document.createElement = function () {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    var i = n.apply(this, t);
                    return i instanceof HTMLIFrameElement && e(i), i
                }, pe(t = document.querySelectorAll("iframe")).call(t, function (t) {
                    e(t)
                });
                var r = this
            }

            function e(t) {
                try {
                    new MutationObserver(function (t, n) {
                        var e, i;
                        try {
                            for (var u = o(t), a = u.next(); !a.done; a = u.next()) {
                                var c = a.value.target.src;
                                r.collect(c), c && -1 !== Zo(c).call(c, rs) || n.disconnect()
                            }
                        } catch (t) {
                            e = {error: t}
                        } finally {
                            try {
                                a && !a.done && (i = u.return) && i.call(u)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }).observe(t, {attributeFilter: ["src"]})
                } catch (t) {
                }
            }
        }, t.prototype.parseMessage = function (t) {
            t = decodeURIComponent(t);
            var n = new RegExp("^" + rs + "(.*)\\?params=({.*})").exec(t);
            if (!n) return this.parseMessage_iOS_old(t);
            var r = u(n, 3), e = r[1], i = r[2];
            if (e) {
                var o;
                try {
                    o = JSON.parse(i)
                } catch (t) {
                    o = {}
                }
                return {params: o, actionName: e, carrier: "common", callback: o.callback || ""}
            }
        }, t.prototype.parseMessage_iOS_old = function (t) {
            var n = new RegExp("^" + rs + "\\?paras=({.*})").exec(t);
            if (n) {
                var r = u(n, 2)[1];
                if (r) {
                    var e;
                    try {
                        e = JSON.parse(r)
                    } catch (t) {
                        e = {}
                    }
                    return {params: e, actionName: e.action || "", carrier: "link", callback: e.callback || ""}
                }
            }
        }, t
    }(), os = function () {
        function t(t) {
            this.callback = t
        }

        return t.prototype.observe = function () {
            this.observeResource()
        }, t.prototype.disconnect = function () {
        }, t.prototype.observeResource = function () {
            var t = this;
            if (xf()) {
                new PerformanceObserver(function (n) {
                    var r, e, i = t.formatEntries(n.getEntries());
                    try {
                        for (var u = o(i), a = u.next(); !a.done; a = u.next()) {
                            var c = a.value;
                            t.callback(c)
                        }
                    } catch (t) {
                        r = {error: t}
                    } finally {
                        try {
                            a && !a.done && (e = u.return) && e.call(u)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                }).observe({entryTypes: ["resource"]})
            }
        }, t.prototype.formatEntries = function (t) {
            var n, r = [];
            return pe(n = bf(t).call(t, function (t) {
                var n = t.initiatorType, r = t.name;
                t.duration;
                return "fetch" !== n && "xhr" !== n && "xmlhttprequest" !== n && "img" !== r && Zo(r).call(r, "://tzjybeidou.58.com") < 0
            })).call(n, function (t) {
                var n = t.initiatorType, e = t.name, i = t.duration, o = t.requestStart, u = t.responseEnd,
                    a = performance.timeOrigin, c = +(o + a).toFixed(), f = +(u + a).toFixed();
                r.push({url: e, category: n, duraion: i, fetchStart: c, responseEnd: f, statusCode: 200})
            }), r
        }, t
    }(), us = Oi, as = bi, cs = Pi, fs = si, ss = Qe, vs = Of(mu), ds = ss(), hs = {}, ls = {};

    function ps(t) {
        if (!ls[t]) switch (ls[t] = !0, t) {
            case"xhr":
                !function () {
                    if (!("XMLHttpRequest" in ds)) return;
                    var t = XMLHttpRequest.prototype;
                    vs(t, "open", function (t) {
                        return function () {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var e = Le(), i = this, o = n[1];
                            i.__beidou_xhr__ = {
                                method: as(n[0]) ? n[0].toUpperCase() : n[0],
                                url: n[1]
                            }, as(o) && "POST" === i.__beidou_xhr__.method && o.match(/beidou_key/) && (i.__beidou_own_request__ = !0);
                            var u = function () {
                                if (4 === i.readyState) {
                                    try {
                                        i.__beidou_xhr__ && (i.__beidou_xhr__.status_code = i.status)
                                    } catch (t) {
                                    }
                                    ms("xhr", {args: n, endTimestamp: Le(), startTimestamp: e, xhr: i})
                                }
                            };
                            return "onreadystatechange" in i && "function" == typeof i.onreadystatechange ? vs(i, "onreadystatechange", function (t) {
                                return function () {
                                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                    return u(), t.apply(i, n)
                                }
                            }) : i.addEventListener("readystatechange", u), t.apply(i, n)
                        }
                    }), vs(t, "send", function (t) {
                        return function () {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            return ms("xhr", {args: n, startTimestamp: Le(), xhr: this}), t.apply(this, n)
                        }
                    })
                }();
                break;
            case"fetch":
                !function () {
                    if (!function () {
                        if (!gf()) return !1;
                        var t = yf();
                        if (wf(t.fetch)) return !0;
                        var n = !1, r = t.document;
                        if (r && "function" == typeof r.createElement) try {
                            var e = r.createElement("iframe");
                            e.hidden = !0, r.head.appendChild(e), e.contentWindow && e.contentWindow.fetch && (n = wf(e.contentWindow.fetch)), r.head.removeChild(e)
                        } catch (t) {
                            mf.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                        }
                        return n
                    }()) return;
                    vs(ds, "fetch", function (t) {
                        return function () {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var i = {args: n, fetchData: {method: ys(n), url: gs(n)}, startTimestamp: Le()};
                            return ms("fetch", e({}, i)), t.apply(ds, n).then(function (t) {
                                return ms("fetch", e(e({}, i), {endTimestamp: Le(), response: t})), t
                            }, function (t) {
                                throw ms("fetch", e(e({}, i), {endTimestamp: Le(), error: t})), t
                            })
                        }
                    })
                }();
                break;
            case"error":
                ws = ds.onerror, ds.onerror = function (t, n, r, e, i) {
                    return ms("error", {
                        column: e,
                        error: i,
                        line: r,
                        msg: t,
                        url: n
                    }), !!ws && ws.apply(this, arguments)
                };
                break;
            case"unhandledrejection":
                xs = ds.onunhandledrejection, ds.onunhandledrejection = function (t) {
                    return ms("unhandledrejection", t), !xs || xs.apply(this, arguments)
                };
                break;
            case"factoryHybrid":
                new is(function (t) {
                    ms("factoryHybrid", t)
                }).observe();
                break;
            case"resource":
                new os(function (t) {
                    ms("resource", t)
                }).observe();
                break;
            default:
                cs.warn("unknown instrumentation type:", t)
        }
    }

    function bs(t) {
        t && "string" == typeof t.type && "function" == typeof t.callback && (hs[t.type] = hs[t.type] || [], hs[t.type].push(t.callback), ps(t.type))
    }

    function ms(t, n) {
        var r, e;
        if (t && hs[t]) try {
            for (var i = o(hs[t] || []), u = i.next(); !u.done; u = i.next()) {
                var a = u.value;
                try {
                    a(n)
                } catch (n) {
                    cs.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + fs(a) + "\nError: " + n)
                }
            }
        } catch (t) {
            r = {error: t}
        } finally {
            try {
                u && !u.done && (e = i.return) && e.call(i)
            } finally {
                if (r) throw r.error
            }
        }
    }

    function ys(t) {
        return void 0 === t && (t = []), "Request" in ds && us(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
    }

    function gs(t) {
        return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in ds && us(t[0], Request) ? t[0].url : String(t[0])
    }

    var ws = null;
    var xs = null;
    var As = Qe();

    function Es(t, n, r) {
        if (void 0 === n && (n = 200), !Cf) {
            var e = null, i = (new Date).getTime(), o = 0;
            As.addEventListener("click", function () {
                var u = (new Date).getTime();
                o = u - i < n ? o + 1 : 1, i = (new Date).getTime(), clearTimeout(e), e = fu(function () {
                    if (clearTimeout(e), o > t) {
                        var n = function (t) {
                            var n = Rf.localStorage.getItem(t);
                            if (!n) return !1;
                            var r = JSON.parse(n), e = r.data, i = r.time, o = void 0 === i ? 0 : i, u = r.expire,
                                a = void 0 === u ? 0 : u;
                            return 0 === a ? e : a > 0 && (new Rf.Date).getTime() - o > a ? (Rf.localStorage.removeItem(t), !1) : e
                        }(qf);
                        r && !n && Bf(r)
                    }
                }, n + 10)
            }, !0)
        }
    }

    var Os = function () {
        function t() {
            this.keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }

        return t.prototype.encode = function (t) {
            void 0 === t && (t = "");
            var n, r, e, i, o, u, a, c = "", f = 0;
            for (t = this.utf8Encode(String(t)); f < t.length;) i = (n = t.charCodeAt(f++)) >> 2, o = (3 & n) << 4 | (r = t.charCodeAt(f++)) >> 4, u = (15 & r) << 2 | (e = t.charCodeAt(f++)) >> 6, a = 63 & e, isNaN(r) ? u = a = 64 : isNaN(e) && (a = 64), c = c + this.keyStr.charAt(i) + this.keyStr.charAt(o) + this.keyStr.charAt(u) + this.keyStr.charAt(a);
            return c
        }, t.prototype.decode = function (t) {
            var n, r, e, i, o, u, a = "", c = 0;
            for (t = String(t).replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < t.length;) {
                var f, s, v, d;
                n = Zo(f = this.keyStr).call(f, t.charAt(c++)) << 2 | (i = Zo(s = this.keyStr).call(s, t.charAt(c++))) >> 4, r = (15 & i) << 4 | (o = Zo(v = this.keyStr).call(v, t.charAt(c++))) >> 2, e = (3 & o) << 6 | (u = Zo(d = this.keyStr).call(d, t.charAt(c++))), a += String.fromCharCode(n), 64 != o && (a += String.fromCharCode(r)), 64 != u && (a += String.fromCharCode(e))
            }
            return a = this.utf8Decode(a)
        }, t.prototype.utf8Encode = function (t) {
            t = t.replace(/\r\n/g, "\n");
            for (var n = "", r = 0; r < t.length; r++) {
                var e = t.charCodeAt(r);
                e < 128 ? n += String.fromCharCode(e) : e > 127 && e < 2048 ? (n += String.fromCharCode(e >> 6 | 192), n += String.fromCharCode(63 & e | 128)) : (n += String.fromCharCode(e >> 12 | 224), n += String.fromCharCode(e >> 6 & 63 | 128), n += String.fromCharCode(63 & e | 128))
            }
            return n
        }, t.prototype.utf8Decode = function (t) {
            for (var n = "", r = 0, e = 0, i = 0, o = 0; r < t.length;) (e = t.charCodeAt(r)) < 128 ? (n += String.fromCharCode(e), r++) : e > 191 && e < 224 ? (i = t.charCodeAt(r + 1), n += String.fromCharCode((31 & e) << 6 | 63 & i), r += 2) : (i = t.charCodeAt(r + 1), o = t.charCodeAt(r + 2), n += String.fromCharCode((15 & e) << 12 | (63 & i) << 6 | 63 & o), r += 3);
            return n
        }, t
    }(), Ss = Qe, Ts = (ju(), Ss(), hu), js = function (t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }

        return r(n, t), n.prototype.sendEvent = function (t) {
            var n = t.projectId, r = t.breadcrumbs, i = t.type, o = t.sdk, u = t.request,
                a = e({projectId: n, type: i, sdk: o, request: u}, r && {breadcrumbs: r});
            return this.j.add(new Ts(function (t, n) {
                try {
                    $f("behavior_record", {content: Ui(a)}), t()
                } catch (t) {
                    n(t)
                }
            }))
        }, n
    }(Sa), ks = hu, zs = Pi, Ps = ju(), Ns = function (t) {
        function n(n) {
            var r = t.call(this) || this;
            return r.options = {}, r.options = n, r
        }

        return r(n, t), n.prototype.sendEvent = function (t) {
            var n = t.type, r = t.request, e = void 0 === r ? {} : r, i = t.breadcrumbs, o = e.headers,
                u = (void 0 === o ? {} : o).imei;
            return "breadcrumb" === n ? Cf ? Mf || this.options.reportAppBreadcrumb ? (new js).sendEvent(t) : this.j.add(new ks(function (t) {
                t()
            })) : this.j.add(new ks(function (t, n) {
                i && i.length && (Ps.addBreadcrumb(i[0]), t()), zs.warn("breadcrumbs is: " + i), n("event does not have breadcrumbs attr!")
            })) : ("reportBreadcrumb" === n && (t.type = "breadcrumb", function (t, n) {
                var r = document.createElement("div");
                r.id = "$beidou_alert_content", r.style.cssText = "height:" + Hf + "px;width:" + Df + "px;position:fixed;left:0px;top:0px;\n  width:100%;background:rgba(0,0,0,0.5);z-index:9999;";
                var e = document.createElement("div");
                e.style.cssText = "position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:250px;\n  z-index:10000;background:white;padding-top:10px;border-radius:13px;";
                var i = document.createElement("div");
                i.style.cssText = "text-align:center;font-size:13px;width:100;padding:0 10px", i.innerHTML = t || "提示";
                var o = document.createElement("input");
                o.style.cssText = "display:block;margin:0 auto;width:80%;margin-top:20px;", o.value = n || "", o.readOnly = !0;
                var u = document.createElement("div");
                u.id = "$beidou_close_btn", u.style.cssText = "display:block;margin:10px auto 0px;width:100%;height:40px;text-align:center;\n  line-height:40px;font-size:15px;border-top:solid 1px rgba(0,0,0,.1);color:#007aff;", u.innerHTML = "确定", e.appendChild(i), e.appendChild(o), e.appendChild(u), r.appendChild(e), document.body.appendChild(r);
                var a = document.getElementById("$beidou_alert_content"),
                    c = document.getElementById("$beidou_close_btn");
                c && a && (c.onclick = function () {
                    document.body.removeChild(a)
                })
            }("请您将下面表单内容复制给相关的开发人员!", u)), gf() ? (new af).sendEvent(t) : (new vf).sendEvent(t))
        }, n
    }(Sa), Ls = function (t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }

        return r(n, t), n.prototype.eventFromException = function (t, n) {
            return ma(this.Z, t, n)
        }, n.prototype.eventFromMessage = function (t, n) {
            return ya(this.Z, t, n)
        }, n.prototype.st = function () {
            return new Ns(this.Z)
        }, n
    }(Ru), Cs = function (t) {
        function n(n) {
            return void 0 === n && (n = {}), t.call(this, Ls, n) || this
        }

        return r(n, t), n
    }(Fu), Fs = oi, Ms = yi, Rs = function () {
        function t() {
            this.spans = []
        }

        return t.prototype.add = function (t) {
            this.spans.length > 100 ? t.spanRecorder = void 0 : this.spans.push(t)
        }, t
    }(), Is = function () {
        function t(t) {
            if (this.startTimestamp = Fs(), this.pageContexts = [], !t || !Ms(t)) return this;
            t.description && (this.description = t.description), void 0 !== t.startTimestamp && (this.startTimestamp = t.startTimestamp), void 0 !== t.endTimestamp && (this.endTimestamp = t.endTimestamp)
        }

        return t.prototype.addPageContext = function (t) {
            this.pageContexts.push(t)
        }, t.prototype.child = function (t) {
            return this.startChild(t)
        }, t.prototype.startChild = function (n) {
            var r = new t(e({}, n));
            return r.spanRecorder = this.spanRecorder, r.spanRecorder && r.spanRecorder.add(r), r
        }, t.prototype.finish = function (t) {
            this.endTimestamp = "number" == typeof t ? t : Fs()
        }, t
    }(), Ds = ju, Hs = Oi, Vs = Pi, qs = function (t) {
        function n(n, r) {
            var e = t.call(this, n) || this;
            return e.At = Ds(), Hs(r, Su) && (e.At = r), n.name && (e.name = n.name), e
        }

        return r(n, t), n.prototype.setName = function (t) {
            this.name = t
        }, n.prototype.initSpanRecorder = function () {
            this.spanRecorder || (this.spanRecorder = new Rs), this.spanRecorder.add(this)
        }, n.prototype.finish = function (n) {
            var r, e = this;
            if (void 0 === this.endTimestamp) {
                this.name || (Vs.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), t.prototype.finish.call(this, n);
                var i = this.spanRecorder ? bf(r = this.spanRecorder.spans).call(r, function (t) {
                    return t !== e && t.endTimestamp
                }) : [], o = Ri(i).call(i, function (t) {
                    return {description: t.description, endTimestamp: t.endTimestamp, startTimestamp: t.startTimestamp}
                });
                this.At.captureEvent({
                    performances: [{
                        contexts: "__beidou_pageload" === this.name ? this.pageContexts : [],
                        spans: "__beidou_pageload" === this.name ? o : a([{
                            description: "custom-" + this.name,
                            startTimestamp: this.startTimestamp,
                            endTimestamp: this.endTimestamp
                        }], o)
                    }], type: "performance"
                })
            }
        }, n
    }(Is), Bs = Tu;

    function Us(t) {
        var n = new qs(t, this);
        return n.initSpanRecorder(), n
    }

    var Xs = Qe;

    function Js(t) {
        return t / 1e3
    }

    function Qs(t) {
        return 1e3 * t
    }

    var _s = function () {
        var t = Xs().performance;
        if (t) return t.timeOrigin ? t.timeOrigin : t.timing && t.timing.navigationStart || Le()
    }();

    function Ks(t) {
        return +t.toFixed()
    }

    var Ws, Zs = Qe();
    !function (t) {
        t.TIMING = "timing", t.GETENTRIES = "getEntries"
    }(Ws || (Ws = {}));
    var Ys = [{
        description: "navigation",
        startTimestamp: "startTime",
        endTimestamp: "fetchStart"
    }, {
        description: "domainLookup",
        startTimestamp: "domainLookupStart",
        endTimestamp: "domainLookupEnd"
    }, {
        description: "connect",
        startTimestamp: "connectStart",
        endTimestamp: "secureConnectionStart"
    }, {
        description: "secureConnection",
        startTimestamp: "secureConnectionStart",
        endTimestamp: "connectEnd"
    }, {
        description: "request",
        startTimestamp: "requestStart",
        endTimestamp: "responseStart"
    }, {
        description: "response",
        startTimestamp: "requestStart",
        endTimestamp: "responseEnd"
    }, {
        description: "domInteractiveEvent",
        startTimestamp: "responseEnd",
        endTimestamp: "domInteractive"
    }, {
        description: "domCompleteEvent",
        startTimestamp: "domInteractive",
        endTimestamp: "domComplete"
    }, {
        description: "domContentLoadedEvent",
        startTimestamp: "domContentLoadedEventStart",
        endTimestamp: "domContentLoadedEventEnd"
    }, {description: "loadEvent", startTimestamp: "loadEventStart", endTimestamp: "loadEventEnd"}];

    function Gs(t, n) {
        var r = n.startTimestamp, o = i(n, ["startTimestamp"]);
        return r && t.startTimestamp > r && (t.startTimestamp = r), t.startChild(e({startTimestamp: r}, o))
    }

    var $s, tv = Qe(), nv = function () {
        function t() {
            this.Et = {}, this.Ot = function () {
            }, tv && tv.performance && xf() && this.St()
        }

        return t.prototype.getLcp = function () {
            return this.Ot(), this.Et
        }, t.prototype.St = function () {
            var t = this;
            try {
                var n = "hidden" === document.visibilityState ? 0 : 1 / 0;
                document.addEventListener("visibilitychange", function (t) {
                    n = Math.min(n, t.timeStamp)
                }, {once: !0});
                var r = function (r) {
                    r.startTime < n && (t.Et = e(e({}, r.size && {extra: encodeURIComponent(Ui({elementSize: r.size}))}), {time: Ks(r.startTime)}))
                }, i = new PerformanceObserver(function (t) {
                    var n;
                    pe(n = t.getEntries()).call(n, r)
                });
                i.observe({buffered: !0, type: "largest-contentful-paint"}), this.Ot = function () {
                    var t;
                    i.takeRecords && pe(t = i.takeRecords()).call(t, r)
                }
            } catch (t) {
            }
        }, t
    }(), rv = Pi, ev = function () {
        function t() {
            this.name = t.id
        }

        return t.prototype.setupOnce = function (t, n) {
            this.Tt = n, this.jt()
        }, t.prototype.jt = function () {
            if (this.Tt) {
                var t = this.Tt(), n = {name: "__beidou_pageload"}, r = Us.apply(t, [n]);
                !function t(n, r, e, i) {
                    void 0 === e && (e = 1e3), void 0 === i && (i = 12), fu(function () {
                        if (!(i < 1)) {
                            var o = n(), u = o.code, a = o.item;
                            if (0 === u) r && r(a); else if (1 === u) return t(n, r, e, i - 1)
                        }
                    }, e)
                }(function () {
                    var t = function (t) {
                        var n, r, e, i, o;
                        if (Zs && Zs.performance && "__beidou_pageload" === t.name) {
                            if ((null === (n = null == Zs ? void 0 : Zs.performance) || void 0 === n ? void 0 : n.getEntriesByType) && (null === (i = null === (e = null === (r = null == Zs ? void 0 : Zs.performance) || void 0 === r ? void 0 : r.getEntriesByType) || void 0 === e ? void 0 : e.call(r, "navigation")) || void 0 === i ? void 0 : i.length) > 0) {
                                var u, a = bf(u = Zs.performance.getEntries()).call(u, function (t) {
                                    return "navigation" === t.entryType
                                });
                                return {type: Ws.GETENTRIES, data: a[0]}
                            }
                            return (null === (o = null == Zs ? void 0 : Zs.performance) || void 0 === o ? void 0 : o.timing) ? {
                                type: Ws.TIMING,
                                data: Zs.performance.timing
                            } : void 0
                        }
                    }(r);
                    if (t) {
                        var n = t.data;
                        return n.loadEventStart > 0 && n.loadEventEnd > 0 ? {code: 0, item: t} : {code: 1}
                    }
                    return {code: -1}
                }, function (t) {
                    !function (t, n) {
                        if (_s) {
                            var r = n.data;
                            if (n.type === Ws.GETENTRIES) {
                                var e = Js(_s);
                                pe(Ys).call(Ys, function (n) {
                                    var i = n.description, o = r[n.startTimestamp], u = r[n.endTimestamp];
                                    i && void 0 !== o && void 0 !== u && Gs(t, {
                                        description: i,
                                        endTimestamp: Ks(Qs(e + Js(u))),
                                        startTimestamp: Ks(Qs(e + Js(o)))
                                    })
                                })
                            } else pe(Ys).call(Ys, function (n) {
                                var e = n.description, i = r[n.startTimestamp], o = r[n.endTimestamp];
                                switch (e) {
                                    case"navigation":
                                        i = r.navigationStart;
                                        break;
                                    case"connect":
                                        i = r.connectStart, o = r.connectEnd;
                                        break;
                                    case"secureConnection":
                                        i = r.secureConnectionStart || r.connectEnd
                                }
                                e && void 0 !== i && void 0 !== o && Gs(t, {
                                    description: e,
                                    endTimestamp: o,
                                    startTimestamp: i
                                })
                            })
                        }
                    }(r, t);
                    var n, e = (new nv).getLcp();
                    e && e.time && (n = e, r.addPageContext({
                        description: "LCP",
                        time: n.time,
                        extra: n.extra
                    })), function (t, n) {
                        var r = n.type, e = n.data;
                        r === Ws.GETENTRIES ? (t.addPageContext({
                            description: "domReady",
                            time: Ks(e.domInteractive - e.startTime)
                        }), t.addPageContext({
                            description: "loadFinish",
                            time: Ks(e.loadEventStart - e.startTime)
                        })) : (t.addPageContext({
                            description: "domReady",
                            time: Ks(e.domInteractive - e.navigationStart)
                        }), t.addPageContext({
                            description: "loadFinish",
                            time: Ks(e.loadEventStart - e.navigationStart)
                        }))
                    }(r, t), function (t) {
                        var n, r;
                        tv && tv.performance && tv.performance.getEntries && pe(n = bf(r = tv.performance.getEntries()).call(r, function (t) {
                            return "paint" === t.entryType
                        })).call(n, function (n) {
                            "first-paint" === n.name ? t.addPageContext({
                                description: "FP",
                                time: Ks(n.startTime)
                            }) : "first-contentful-paint" === n.name && t.addPageContext({
                                description: "FCP",
                                time: Ks(n.startTime)
                            })
                        })
                    }(r), r.finish()
                })
            } else rv.warn("hub 必须存在")
        }, t.id = "BrowserTracing", t
    }();
    ($s = Bs()).__BEIDOU__ && ($s.__BEIDOU__.extensions = $s.__BEIDOU__.extensions || {}, $s.__BEIDOU__.extensions.startTransaction || ($s.__BEIDOU__.extensions.startTransaction = Us)), xt({
        target: "Object",
        stat: !0,
        forced: !p,
        sham: !p
    }, {defineProperty: mt.f});
    var iv = f(function (t) {
        var n = j.Object, r = t.exports = function (t, r, e) {
            return n.defineProperty(t, r, e)
        };
        n.defineProperty.sham && (r.sham = !0)
    }), ov = ot.f, uv = l(function () {
        ov(1)
    });
    xt({target: "Object", stat: !0, forced: !p || uv, sham: !p}, {
        getOwnPropertyDescriptor: function (t, n) {
            return ov(S(t), n)
        }
    });
    var av = f(function (t) {
        var n = j.Object, r = t.exports = function (t, r) {
            return n.getOwnPropertyDescriptor(t, r)
        };
        n.getOwnPropertyDescriptor.sham && (r.sham = !0)
    }), cv = Ze, fv = captureException, sv = function (t) {
        ku("withScope", t)
    }, vv = 0;

    function dv() {
        return vv > 0
    }

    function hv(t, n, r) {
        if (void 0 === n && (n = {}), "function" != typeof t) return t;
        try {
            if (t.__beidou__) return t;
            if (t.__beidou_wrapped__) return t.__beidou_wrapped__
        } catch (n) {
            return t
        }
        var beidouWrapped = function () {
            var i = ce(Array.prototype).call(arguments);
            try {
                r && "function" == typeof r && r.apply(this, arguments);
                var o = Ri(i).call(i, function (t) {
                    return hv(t, n)
                });
                return t.handleEvent ? t.handleEvent.apply(this, o) : t.apply(this, o)
            } catch (t) {
                throw vv += 1, fu(function () {
                    vv -= 1
                }), sv(function (r) {
                    r.addEventProcessor(function (t) {
                        var r = e({}, t);
                        return n.mechanism && cv(r, void 0, void 0), r
                    }), fv(t)
                }), t
            }
        };
        try {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (beidouWrapped[i] = t[i])
        } catch (t) {
        }
        t.prototype = t.prototype || {}, beidouWrapped.prototype = t.prototype, iv(t, "__beidou_wrapped__", {
            enumerable: !1,
            value: beidouWrapped
        }), Ni(beidouWrapped, {
            __beidou__: {enumerable: !1, value: !0},
            __beidou_original__: {enumerable: !1, value: t}
        });
        try {
            av(beidouWrapped, "name").configurable && iv(beidouWrapped, "name", {
                get: function () {
                    return t.name
                }
            })
        } catch (t) {
        }
        return beidouWrapped
    }

    var lv = ju, pv = Ye, bv = hi, mv = mi, yv = bi, gv = function () {
        function t() {
            this.name = t.id, this.kt = !1, this.zt = !1
        }

        return t.prototype.setupOnce = function () {
            Error.stackTraceLimit = 50, this.Pt(), this.Nt()
        }, t.prototype.Pt = function () {
            var n = this;
            this.kt || (bs({
                callback: function (r) {
                    var e = r.error, i = lv(), o = i.getIntegration(t), u = e && !0 === e.__beidou_own_request__;
                    if (o && !dv() && !u) {
                        var a = i.getClient(), c = mv(e) ? n.Lt(r.msg, r.url, r.line, r.column) : n.Ct(ga(e, void 0, {
                            attachStacktrace: a && a.getOptions().attachStacktrace,
                            rejection: !1
                        }), r.url, r.line, r.column);
                        c.type = xu.exception, i.captureEvent(c, {originalException: e})
                    }
                }, type: "error"
            }), this.kt = !0)
        }, t.prototype.Nt = function () {
            var n = this;
            this.zt || (bs({
                callback: function (r) {
                    var e = r;
                    try {
                        "reason" in r ? e = r.reason : "detail" in r && "reason" in r.detail && (e = r.detail.reason)
                    } catch (t) {
                    }
                    var i = lv(), o = i.getIntegration(t), u = e && !0 === e.__beidou_own_request__;
                    if (!o || dv() || u) return !0;
                    var a = i.getClient(), c = mv(e) ? n.Ft(e) : ga(e, void 0, {
                        attachStacktrace: a && a.getOptions().attachStacktrace,
                        rejection: !0
                    });
                    c.type = xu.exception, i.captureEvent(c, {originalException: e})
                }, type: "unhandledrejection"
            }), this.zt = !0)
        }, t.prototype.Lt = function (t, n, r, e) {
            var i, o = bv(t) ? t.message : t;
            if (yv(o)) {
                var u = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                u && (i = u[1], o = u[2])
            }
            var a = {exceptions: [{content: (i || "Error") + ":" + o}]};
            return this.Ct(a, n, r, e)
        }, t.prototype.Ft = function (t) {
            return {exceptions: [{content: "UnhandledRejection:Non-Error promise rejection captured with value is " + t}]}
        }, t.prototype.Ct = function (t, n, r, e) {
            t.exceptions = t.exceptions || [];
            var i = isNaN(Be(e, 10)) ? void 0 : e, o = isNaN(Be(r, 10)) ? void 0 : r,
                u = yv(n) && n.length > 0 ? n : pv();
            return 0 === t.exceptions.length && (t.exceptions[0].stacktrace = [{
                colno: i,
                filename: u,
                function: "?",
                lineno: o
            }]), t
        }, t.id = "GlobalHandlers", t
    }(), wv = [].slice, xv = {}, Av = Function.bind || function (t) {
        var n = ht(this), r = wv.call(arguments, 1), e = function () {
            var i = r.concat(wv.call(arguments));
            return this instanceof e ? function (t, n, r) {
                if (!(n in xv)) {
                    for (var e = [], i = 0; i < n; i++) e[i] = "a[" + i + "]";
                    xv[n] = Function("C,a", "return new C(" + e.join(",") + ")")
                }
                return xv[n](t, r)
            }(n, i.length, i) : n.apply(t, i)
        };
        return T(n.prototype) && (e.prototype = n.prototype), e
    };
    xt({target: "Function", proto: !0}, {bind: Av});
    var Ev = oe("Function").bind, Ov = Function.prototype, Sv = function (t) {
            var n = t.bind;
            return t === Ov || t instanceof Function && n === Ov.bind ? Ev : n
        }, Tv = Of(mu), jv = si, kv = Qe,
        zv = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
        Pv = function () {
            function t(n) {
                this.name = t.id, this.Z = e({
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0
                }, n)
            }

            return t.prototype.setupOnce = function () {
                var t, n, r, e, i = kv();
                this.Z.setTimeout && Tv(i, "setTimeout", Sv(t = this.Mt).call(t, this));
                this.Z.setInterval && Tv(i, "setInterval", Sv(n = this.Mt).call(n, this));
                this.Z.requestAnimationFrame && Tv(i, "requestAnimationFrame", Sv(r = this.Rt).call(r, this));
                this.Z.XMLHttpRequest && "XMLHttpRequest" in i && Tv(XMLHttpRequest.prototype, "send", Sv(e = this.It).call(e, this));
                if (this.Z.eventTarget) {
                    var o, u = Xi(this.Z.eventTarget) ? this.Z.eventTarget : zv;
                    pe(u).call(u, Sv(o = this.Dt).call(o, this))
                }
            }, t.prototype.Mt = function (t) {
                return function () {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var e = n[0];
                    return n[0] = hv(e, {
                        mechanism: {
                            data: {function: jv(t)},
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, n)
                }
            }, t.prototype.Rt = function (t) {
                return function (n) {
                    return t.call(this, hv(n, {
                        mechanism: {
                            data: {function: "requestAnimationFrame", handler: jv(t)},
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, t.prototype.Dt = function (t) {
                var n = kv(), r = n[t] && n[t].prototype;
                r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (Tv(r, "addEventListener", function (n) {
                    return function (r, e, i) {
                        try {
                            var o;
                            if ("function" == typeof e.handleEvent) e.handleEvent = hv(Sv(o = e.handleEvent).call(o, e), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: jv(e),
                                        target: t
                                    }, handled: !0, type: "instrument"
                                }
                            })
                        } catch (t) {
                        }
                        return n.call(this, r, hv(e, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: jv(e),
                                    target: t
                                }, handled: !0, type: "instrument"
                            }
                        }), i)
                    }
                }), Tv(r, "removeEventListener", function (t) {
                    return function (n, r, e) {
                        try {
                            t.call(this, n, r.__beidou_wrapped__, e)
                        } catch (t) {
                        }
                        return t.call(this, n, r, e)
                    }
                }))
            }, t.prototype.It = function (t) {
                return function () {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var e = this, i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    return pe(i).call(i, function (t) {
                        t in e && "function" == typeof e[t] && Tv(e, t, function (n) {
                            var r = {mechanism: {data: {function: t, handler: jv(n)}, handled: !0, type: "instrument"}};
                            return n.__beidou_original__ && (r.mechanism.data.handler = jv(n.__beidou_original__)), hv(n, r)
                        })
                    }), t.apply(this, n)
                }
            }, t.id = "TryCatch", t
        }(), Nv = ju, Lv = Pi, Cv = function () {
            function t(n) {
                this.name = t.id, this.Z = e({fetch: !0, xhr: !0, factoryHybrid: !0, resource: !0}, n)
            }

            return t.prototype.setupOnce = function () {
                var t = this;
                this.Z.xhr && bs({
                    callback: function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.Ht.apply(t, a(n))
                    }, type: "xhr"
                }), this.Z.fetch && bs({
                    callback: function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.Vt.apply(t, a(n))
                    }, type: "fetch"
                }), this.Z.factoryHybrid && bs({
                    callback: function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.qt.apply(t, a(n))
                    }, type: "factoryHybrid"
                }), this.Z.resource && bs({
                    callback: function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        t.Bt.apply(t, a(n))
                    }, type: "resource"
                });
                Es(10, 200, function () {
                    try {
                        var t = Nv().getScope(), n = (null == t ? void 0 : t.getBreadcrumb()) || [];
                        if (n.length) {
                            var r = {type: "reportBreadcrumb", breadcrumbs: n};
                            Nv().captureEvent(r)
                        }
                    } catch (t) {
                        Lv.warn("ErrorListener error")
                    }
                })
            }, t.prototype.Ht = function (t) {
                if (t.endTimestamp) {
                    if (t.xhr.__beidou_own_request__) return;
                    try {
                        var n = {
                            type: "breadcrumb",
                            breadcrumbs: [{
                                type: "api",
                                text: encodeURIComponent(Ui(e(e({category: "xhr"}, t.xhr.__beidou_xhr__), {
                                    response: ca(JSON.parse(t.xhr.response)),
                                    params: t.args
                                })))
                            }]
                        };
                        Nv().captureEvent(n)
                    } catch (t) {
                        Lv.warn("parse error" + t)
                    }
                }
            }, t.prototype.Vt = function (t) {
                var n = (t || {}).response;
                if (t.endTimestamp && (!t.fetchData.url.match(/beidou_key/) || "POST" !== t.fetchData.method) && !t.fetchData.url.match(/tzjybeidou\.58\.com/) && (n.status >= 200 && n.status < 300 || 304 === n.status)) try {
                    var r = n.headers.get("Content-Type") || "";
                    if (Zo(r).call(r, "json") > -1) t.response.clone().json().then(function (n) {
                        var r = {
                            type: "breadcrumb",
                            breadcrumbs: [{
                                type: "api",
                                text: encodeURIComponent(Ui(e(e({category: "fetch"}, t.fetchData), {
                                    statusCode: t.response.status,
                                    response: ca(n),
                                    params: t.args
                                })))
                            }]
                        };
                        Nv().captureEvent(r)
                    })
                } catch (t) {
                    Lv.warn("parse error" + t)
                }
            }, t.prototype.qt = function (t) {
                var n = {type: "breadcrumb", breadcrumbs: [{type: "hybrid", text: encodeURIComponent(Ui(t))}]};
                Nv().captureEvent(n)
            }, t.prototype.Bt = function (t) {
                var n = {type: "breadcrumb", breadcrumbs: [{type: "resource", text: encodeURIComponent(Ui(t))}]};
                Nv().captureEvent(n)
            }, t.id = "Breadcrumbs", t
        }(), Fv = function () {
            function t(t, n) {
                for (var r = 0; r < n.length; r++) {
                    var e = n[r];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
                }
            }

            return function (n, r, e) {
                return r && t(n.prototype, r), e && t(n, e), n
            }
        }();
    var Mv = "-1", Rv = {name: "na", version: Mv};

    function Iv(t) {
        return function (n) {
            return Object.prototype.toString.call(n) === "[object " + t + "]"
        }
    }

    var Dv = Iv("String"), Hv = Iv("RegExp"), Vv = Iv("Object"), qv = Iv("Function");

    function Bv(t, n, r, e) {
        var i = Rv;
        !function (t, n) {
            for (var r = 0, e = t.length; r < e && !1 !== n.call(t, t[r], r); r++) ;
        }(n, function (n) {
            var r = function (t, n, r) {
                var e = qv(n) ? n.call(null, r) : n;
                if (!e) return null;
                var i = {name: t, version: Mv, codename: ""};
                if (!0 === e) return i;
                if (Dv(e)) {
                    if (-1 !== r.indexOf(e)) return i
                } else {
                    if (Vv(e)) return e.hasOwnProperty("version") && (i.version = e.version), i;
                    if (Hv(e)) {
                        var o = e.exec(r);
                        if (o) return o.length >= 2 && o[1] ? i.version = o[1].replace(/_/g, ".") : i.version = Mv, i
                    }
                }
            }(n[0], n[1], t);
            if (r) return i = r, !1
        }), r.call(e, i.name, i.version)
    }

    var Uv = function () {
            function t(n) {
                !function (t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.Ut = n
            }

            return Fv(t, [{
                key: "parse", value: function (t) {
                    t = (t || "").toLowerCase();
                    var n = {};
                    Bv(t, this.Ut.device, function (t, r) {
                        var e = parseFloat(r);
                        n.device = {name: t, version: e, fullVersion: r}, n.device[t] = e
                    }, n), Bv(t, this.Ut.os, function (t, r) {
                        var e = parseFloat(r);
                        n.os = {name: t, version: e, fullVersion: r}, n.os[t] = e
                    }, n);
                    var r = this.IEMode(t);
                    return Bv(t, this.Ut.engine, function (t, e) {
                        var i = e;
                        r && (e = r.engineVersion || r.engineMode, i = r.engineMode);
                        var o = parseFloat(e);
                        n.engine = {
                            name: t,
                            version: o,
                            fullVersion: e,
                            mode: parseFloat(i),
                            fullMode: i,
                            compatible: !!r && r.compatible
                        }, n.engine[t] = o
                    }, n), Bv(t, this.Ut.browser, function (t, e) {
                        var i = e;
                        r && ("ie" === t && (e = r.browserVersion), i = r.browserMode);
                        var o = parseFloat(e);
                        n.browser = {
                            name: t,
                            version: o,
                            fullVersion: e,
                            mode: parseFloat(i),
                            fullMode: i,
                            compatible: !!r && r.compatible
                        }, n.browser[t] = o
                    }, n), n
                }
            }, {
                key: "IEMode", value: function (t) {
                    if (!this.Ut.re_msie.test(t)) return null;
                    var n, r, e = void 0, i = void 0, o = void 0;
                    if (-1 !== t.indexOf("trident/") && (e = /\btrident\/([0-9.]+)/.exec(t)) && e.length >= 2) {
                        i = e[1];
                        var u = e[1].split(".");
                        u[0] = parseInt(u[0], 10) + 4, o = u.join(".")
                    }
                    r = (e = this.Ut.re_msie.exec(t))[1];
                    var a = e[1].split(".");
                    return void 0 === o && (o = r), a[0] = parseInt(a[0], 10) - 4, n = a.join("."), void 0 === i && (i = n), {
                        browserVersion: o,
                        browserMode: r,
                        engineVersion: i,
                        engineMode: n,
                        compatible: i !== n
                    }
                }
            }]), t
        }(), Xv = "undefined" == typeof window ? global : window, Jv = Xv.external,
        Qv = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/, _v = /\bbb10\b.+?\bversion\/([\d.]+)/,
        Kv = /\bblackberry\b.+\bversion\/([\d.]+)/, Wv = /\bblackberry\d+\/([\d.]+)/;

    function Zv(t) {
        if (Jv) try {
            var n = Jv.twGetRunPath.toLowerCase(), r = Jv.twGetSecurityID(Xv), e = Jv.twGetVersion(r);
            if (n && -1 === n.indexOf(t)) return !1;
            if (e) return {version: e}
        } catch (t) {
        }
    }

    var Yv = {
            device: [["nokia", function (t) {
                return -1 !== t.indexOf("nokia ") ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/
            }], ["samsung", function (t) {
                return -1 !== t.indexOf("samsung") ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ : /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
            }], ["wp", function (t) {
                return -1 !== t.indexOf("windows phone ") || -1 !== t.indexOf("xblwp") || -1 !== t.indexOf("zunewp") || -1 !== t.indexOf("windows ce")
            }], ["pc", "windows"], ["ipad", "ipad"], ["ipod", "ipod"], ["iphone", /\biphone\b|\biph(\d)/], ["mac", "macintosh"], ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/], ["hongmi", /\bhm[ \-]?([a-z0-9]+)/], ["aliyun", /\baliyunos\b(?:[\-](\d+))?/], ["meizu", function (t) {
                return t.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9cx]{1,4})\b/
            }], ["nexus", /\bnexus ([0-9s.]+)/], ["huawei", function (t) {
                var n = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
                return -1 !== t.indexOf("huawei-huawei") ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : n.test(t) ? n : /\bhuawei[ _\-]?([a-z0-9]+)/
            }], ["lenovo", function (t) {
                return -1 !== t.indexOf("lenovo-lenovo") ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/
            }], ["zte", function (t) {
                return /\bzte\-[tu]/.test(t) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/
            }], ["vivo", /\bvivo(?: ([a-z0-9]+))?/], ["htc", function (t) {
                return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(t) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/
            }], ["oppo", /\boppo[_]([a-z0-9]+)/], ["konka", /\bkonka[_\-]([a-z0-9]+)/], ["sonyericsson", /\bmt([a-z0-9]+)/], ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/], ["lg", /\blg[\-]([a-z0-9]+)/], ["android", /\bandroid\b|\badr\b/], ["blackberry", function (t) {
                return t.indexOf("blackberry") >= 0 ? /\bblackberry\s?(\d+)/ : "bb10"
            }]],
            os: [["wp", function (t) {
                return -1 !== t.indexOf("windows phone ") ? /\bwindows phone (?:os )?([0-9.]+)/ : -1 !== t.indexOf("xblwp") ? /\bxblwp([0-9.]+)/ : -1 !== t.indexOf("zunewp") ? /\bzunewp([0-9.]+)/ : "windows phone"
            }], ["windows", /\bwindows nt ([0-9.]+)/], ["macosx", /\bmac os x ([0-9._]+)/], ["ios", function (t) {
                return /\bcpu(?: iphone)? os /.test(t) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : -1 !== t.indexOf("iph os ") ? /\biph os ([0-9_]+)/ : /\bios\b/
            }], ["yunos", /\baliyunos ([0-9.]+)/], ["android", function (t) {
                return t.indexOf("android") >= 0 ? /\bandroid[ \/-]?([0-9.x]+)?/ : t.indexOf("adr") >= 0 ? t.indexOf("mqqbrowser") >= 0 ? /\badr[ ]\(linux; u; ([0-9.]+)?/ : /\badr(?:[ ]([0-9.]+))?/ : "android"
            }], ["chromeos", /\bcros i686 ([0-9.]+)/], ["linux", "linux"], ["windowsce", /\bwindows ce(?: ([0-9.]+))?/], ["symbian", /\bsymbian(?:os)?\/([0-9.]+)/], ["blackberry", function (t) {
                var n = t.match(_v) || t.match(Kv) || t.match(Wv);
                return n ? {version: n[1]} : "blackberry"
            }]],
            browser: [["edge", /edge\/([0-9.]+)/], ["sogou", function (t) {
                return t.indexOf("sogoumobilebrowser") >= 0 ? /sogoumobilebrowser\/([0-9.]+)/ : t.indexOf("sogoumse") >= 0 || / se ([0-9.x]+)/
            }], ["theworld", function () {
                var t = Zv("theworld");
                return void 0 !== t ? t : /theworld(?: ([\d.])+)?/
            }], ["360", function (t) {
                var n = Zv("360se");
                return void 0 !== n ? n : -1 !== t.indexOf("360 aphone browser") ? /\b360 aphone browser \(([^\)]+)\)/ : /\b360(?:se|ee|chrome|browser)\b/
            }], ["maxthon", function () {
                try {
                    if (Jv && (Jv.mxVersion || Jv.max_version)) return {version: Jv.mxVersion || Jv.max_version}
                } catch (t) {
                }
                return /\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/
            }], ["micromessenger", /\bmicromessenger\/([\d.]+)/], ["qq", /\bm?qqbrowser\/([0-9.]+)/], ["green", "greenbrowser"], ["tt", /\btencenttraveler ([0-9.]+)/], ["liebao", function (t) {
                if (t.indexOf("liebaofast") >= 0) return /\bliebaofast\/([0-9.]+)/;
                if (-1 === t.indexOf("lbbrowser")) return !1;
                var n = void 0;
                try {
                    Jv && Jv.LiebaoGetVersion && (n = Jv.LiebaoGetVersion())
                } catch (t) {
                }
                return {version: n || "-1"}
            }], ["tao", /\btaobrowser\/([0-9.]+)/], ["coolnovo", /\bcoolnovo\/([0-9.]+)/], ["saayaa", "saayaa"], ["baidu", /\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/], ["ie", Qv], ["mi", /\bmiuibrowser\/([0-9.]+)/], ["opera", function (t) {
                var n = /\bopera.+version\/([0-9.ab]+)/;
                return n.test(t) ? n : /\bopr\/([0-9.]+)/
            }], ["oupeng", /\boupeng\/([0-9.]+)/], ["yandex", /yabrowser\/([0-9.]+)/], ["ali-ap", function (t) {
                return t.indexOf("aliapp") > 0 ? /\baliapp\(ap\/([0-9.]+)\)/ : /\balipayclient\/([0-9.]+)\b/
            }], ["ali-ap-pd", /\baliapp\(ap-pd\/([0-9.]+)\)/], ["ali-am", /\baliapp\(am\/([0-9.]+)\)/], ["ali-tb", /\baliapp\(tb\/([0-9.]+)\)/], ["ali-tb-pd", /\baliapp\(tb-pd\/([0-9.]+)\)/], ["ali-tm", /\baliapp\(tm\/([0-9.]+)\)/], ["ali-tm-pd", /\baliapp\(tm-pd\/([0-9.]+)\)/], ["uc", function (t) {
                return t.indexOf("ucbrowser/") >= 0 ? /\bucbrowser\/([0-9.]+)/ : t.indexOf("ubrowser/") >= 0 ? /\bubrowser\/([0-9.]+)/ : /\buc\/[0-9]/.test(t) ? /\buc\/([0-9.]+)/ : t.indexOf("ucweb") >= 0 ? /\bucweb([0-9.]+)?/ : /\b(?:ucbrowser|uc)\b/
            }], ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/], ["android", function (t) {
                if (-1 !== t.indexOf("android")) return /\bversion\/([0-9.]+(?: beta)?)/
            }], ["blackberry", function (t) {
                var n = t.match(_v) || t.match(Kv) || t.match(Wv);
                return n ? {version: n[1]} : "blackberry"
            }], ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//], ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/], ["firefox", /\bfirefox\/([0-9.ab]+)/], ["nokia", /\bnokiabrowser\/([0-9.]+)/]],
            engine: [["edgehtml", /edge\/([0-9.]+)/], ["trident", Qv], ["blink", function () {
                return "chrome" in Xv && "CSS" in Xv && /\bapplewebkit[\/]?([0-9.+]+)/
            }], ["webkit", /\bapplewebkit[\/]?([0-9.+]+)/], ["gecko", function (t) {
                var n = t.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/);
                if (n) return {version: n[1] + "." + n[2]}
            }], ["presto", /\bpresto\/([0-9.]+)/], ["androidwebkit", /\bandroidwebkit\/([0-9.]+)/], ["coolpadwebkit", /\bcoolpadwebkit\/([0-9.]+)/], ["u2", /\bu2\/([0-9.]+)/], ["u3", /\bu3\/([0-9.]+)/]],
            re_msie: Qv
        }, Gv = (navigator.userAgent || "") + " " + (navigator.appVersion || "") + " " + (navigator.vendor || ""),
        $v = new Uv(Yv);

    function td(t) {
        var n = $v.parse(t), r = function (t) {
            if (!Yv.re_msie.test(t)) return null;
            var n, r, e = void 0, i = void 0, o = void 0;
            if (-1 !== t.indexOf("trident/") && (e = /\btrident\/([0-9.]+)/.exec(t)) && e.length >= 2) {
                i = e[1];
                var u = e[1].split(".");
                u[0] = parseInt(u[0], 10) + 4, o = u.join(".")
            }
            r = (e = Yv.re_msie.exec(t))[1];
            var a = e[1].split(".");
            return void 0 === o && (o = r), a[0] = parseInt(a[0], 10) - 4, n = a.join("."), void 0 === i && (i = n), {
                browserVersion: o,
                browserMode: r,
                engineVersion: i,
                engineMode: n,
                compatible: i !== n
            }
        }(t);
        if (r) {
            var e = n.engine.name, i = r.engineVersion || r.engineMode, o = parseFloat(i), u = r.engineMode;
            n.engine = {
                name: e,
                version: o,
                fullVersion: i,
                mode: parseFloat(u),
                fullMode: u,
                compatible: !!r && r.compatible
            }, n.engine[n.engine.name] = o;
            var a = n.browser.name, c = n.browser.fullVersion;
            "ie" === a && (c = r.browserVersion);
            var f = r.browserMode, s = parseFloat(c);
            n.browser = {
                name: a,
                version: s,
                fullVersion: c,
                mode: parseFloat(f),
                fullMode: f,
                compatible: !!r && r.compatible
            }, n.browser[a] = s
        }
        return n
    }

    var nd = td(Gv);
    nd.parse = td;
    var rd, ed, id = _e, od = Pi, ud = Qe(), ad = wu, cd = ju;

    function fd() {
        var t = navigator.userAgent;
        if (rd) return rd;
        var n = function (t) {
            var n = (t = t.toLowerCase()).match(/(micromessenger)\/([0-9\.\-]+)/i);
            return n && n.length > 0 ? {appName: "WEIXIN", appVersion: n[2]} : {appName: "", appVersion: ""}
        }(t);
        if (n.appName) return rd = n;
        var r = function (t) {
            var n = t.match(/(\w*?QQ\w*?)\/([0-9\.\-]+)/i);
            return n && n.length > 0 ? {appName: "QQ", appVersion: n[2]} : {appName: "", appVersion: ""}
        }(t);
        if (r.appName) return rd = r;
        var e = function (t) {
            var n = t.match(/([0-9\.\-]+)\/(\w*?jxedt\w*?)/i);
            return n && n.length > 0 ? {appName: "jxedt", appVersion: n[1]} : {appName: "", appVersion: ""}
        }(t);
        if (e.appName) return rd = e;
        var i = function (t) {
            if (~Zo(t).call(t, "58ZhuanZhuan")) {
                var n = t.match(/(\w*?zzVersion\w*?)\/([0-9\.\-]+)/i);
                if (n && n.length > 0) return {appName: "58ZhuanZhuan", appVersion: n[2]}
            }
            return {appName: "", appVersion: ""}
        }(t);
        if (i.appName) return rd = i;
        var o = navigator.userAgent.match(/([-\w\.]+)\/([\w\.])+/gi);
        if (o && o.length > 0) {
            var u = o[o.length - 1], a = o[o.length - 1].split("/");
            if (Zo(u).call(u, "Safari") > -1 && (u = o[o.length - 2] || "", (Zo(u).call(u, "Chrome") > -1 || Zo(u).call(u, "Version") > -1) && (a = o[o.length - 2].split("/")), Zo(u).call(u, "Mobile") > -1 && (a = o[o.length - 3].split("/"))), 2 === a.length) return rd = {
                appName: "Version" === a[0] ? "Safari" : a[0],
                appVersion: a[1]
            }
        }
        return rd = {appName: "", appVersion: ""}
    }

    function sd() {
        return ed || (ed = id())
    }

    function vd() {
        var t = ud.WMDA_SDK_CONFIG, n = void 0 === t ? {} : t, r = n.project_id, e = void 0 === r ? "" : r, i = n.appid;
        return {
            projectId: e, appId: void 0 === i ? "" : i, uuid: function (t) {
                if (void 0 === t) return "";
                var n = "", r = document.cookie, e = new RegExp("(^|;)\\s*" + t + "=([^;]*)(;|$)"), i = r.match(e);
                return null != i && (n = unescape(i[2])), void 0 !== n && (n = n.replace(/^\"|\'/i, "").replace(/\"|\'$/i, "")), n
            }("wmda_uuid"), pageId: ""
        }
    }

    function dd(t) {
        return void 0 === t && (t = []), Ri(t).call(t, function (t) {
            return e(e({eventId: id()}, t), {timestamp: Le()})
        })
    }

    var hd = function () {
            function t() {
                this.name = t.id
            }

            return t.prototype.setupOnce = function () {
                var t = (cd().getClient() || {
                    getOptions: function () {
                        return {projectId: ""}
                    }
                }).getOptions().projectId;
                ad(function (n) {
                    try {
                        n.projectId = t, n.sdk = {name: "beidou.browser", version: "1.2.2"};
                        var r = n.request || {};
                        r.url = r.url || ud.location.href, r.headers = r.headers || {};
                        var i = fd(), o = {
                            appName: i.appName,
                            appVersion: i.appVersion,
                            imei: sd(),
                            uuid: sd(),
                            pid: sd(),
                            os: nd.os.name,
                            osv: nd.os.fullVersion,
                            device: nd.device.name
                        };
                        r.headers = e(e({}, r.headers), o), r.wmda = vd(), n.request = r, n.apis && (n.apis = dd(n.apis)), n.resources && (n.resources = dd(n.resources)), n.performances && (n.performances = dd(n.performances)), n.breadcrumbs && (n.breadcrumbs = dd(n.breadcrumbs))
                    } catch (t) {
                        od.warn("get commom error ")
                    }
                    return n
                })
            }, t.id = "Common", t
        }(), ld = ju(), pd = Pi, bd = Ye, md = Qe(), yd = function () {
            function t() {
                this.name = t.id
            }

            return t.prototype.setupOnce = function () {
                function t(t) {
                    if (t) {
                        var n = t.target || t.srcElement;
                        if (n instanceof HTMLElement) {
                            var r, e = n.localName, i = n.src, o = n.href, u = n.outerHTML, a = void 0 === u ? "" : u;
                            if (~Zo(r = ["link", "script", "img"]).call(r, e)) {
                                var c = i || o || "";
                                c === bd() && (c = "https://resource.58cdn.com.cn/" + e + "/blank");
                                if ("script" !== e || /^([\s\S]+?)\.js/.exec(c)) !function (t) {
                                    var n = {
                                        type: "resource", resources: Ri(t).call(t, function (t) {
                                            return {url: t.url, category: t.category, extra: t.extra, statusCode: 404}
                                        })
                                    };
                                    ld.captureEvent(n)
                                }([{url: c, category: e, extra: Ui({domInfo: a})}]); else {
                                    var f = /^[^\?]+/.exec(c), s = f && f[0] || "";
                                    d = {
                                        type: "api", apis: Ri(v = [{url: s, category: e}]).call(v, function (t) {
                                            return {url: t.url, category: "jsonp", statusCode: 404, method: "GET"}
                                        })
                                    }, ld.captureEvent(d)
                                }
                            }
                        }
                    }
                    var v, d
                }

                md.addEventListener("error", function (n) {
                    try {
                        t(n)
                    } catch (n) {
                        pd.warn("ErrorListener error")
                    }
                }, !0)
            }, t.id = "ResourceErrorIntegration", t
        }(), gd = mt.f, wd = vo.fastKey, xd = Bn.set, Ad = Bn.getterFor, Ed = (So("Map", function (t) {
            return function () {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }, {
            getConstructor: function (t, n, r, e) {
                var i = t(function (t, o) {
                    wo(t, i, n), xd(t, {
                        type: n,
                        index: cn(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), p || (t.size = 0), null != o && go(o, t[e], {that: t, AS_ENTRIES: r})
                }), o = Ad(n), u = function (t, n, r) {
                    var e, i, u = o(t), c = a(t, n);
                    return c ? c.value = r : (u.last = c = {
                        index: i = wd(n, !0),
                        key: n,
                        value: r,
                        previous: e = u.last,
                        next: void 0,
                        removed: !1
                    }, u.first || (u.first = c), e && (e.next = c), p ? u.size++ : t.size++, "F" !== i && (u.index[i] = c)), t
                }, a = function (t, n) {
                    var r, e = o(t), i = wd(n);
                    if ("F" !== i) return e.index[i];
                    for (r = e.first; r; r = r.next) if (r.key == n) return r
                };
                return To(i.prototype, {
                    clear: function () {
                        for (var t = o(this), n = t.index, r = t.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete n[r.index], r = r.next;
                        t.first = t.last = void 0, p ? t.size = 0 : this.size = 0
                    }, delete: function (t) {
                        var n = o(this), r = a(this, t);
                        if (r) {
                            var e = r.next, i = r.previous;
                            delete n.index[r.index], r.removed = !0, i && (i.next = e), e && (e.previous = i), n.first == r && (n.first = e), n.last == r && (n.last = i), p ? n.size-- : this.size--
                        }
                        return !!r
                    }, forEach: function (t) {
                        for (var n, r = o(this), e = lt(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.next : r.first;) for (e(n.value, n.key, this); n && n.removed;) n = n.previous
                    }, has: function (t) {
                        return !!a(this, t)
                    }
                }), To(i.prototype, r ? {
                    get: function (t) {
                        var n = a(this, t);
                        return n && n.value
                    }, set: function (t, n) {
                        return u(this, 0 === t ? 0 : t, n)
                    }
                } : {
                    add: function (t) {
                        return u(this, t = 0 === t ? 0 : t, t)
                    }
                }), p && gd(i.prototype, "size", {
                    get: function () {
                        return o(this).size
                    }
                }), i
            }, setStrong: function (t, n, r) {
                var e = n + " Iterator", i = Ad(n), o = Ad(e);
                Dr(t, n, function (t, n) {
                    xd(this, {type: e, target: t, state: i(t), kind: n, last: void 0})
                }, function () {
                    for (var t = o(this), n = t.kind, r = t.last; r && r.removed;) r = r.previous;
                    return t.target && (t.last = r = r ? r.next : t.state.first) ? "keys" == n ? {
                        value: r.key,
                        done: !1
                    } : "values" == n ? {value: r.value, done: !1} : {
                        value: [r.key, r.value],
                        done: !1
                    } : (t.target = void 0, {value: void 0, done: !0})
                }, r ? "entries" : "values", !r, !0), za(n)
            }
        }), j.Map), Od = bu, Sd = _e, Td = Qe, jd = Oi, kd = Ti, zd = Go, Pd = bi, Nd = new Ed, Ld = ju(), Cd = Td(),
        Fd = function () {
            function t() {
                this.name = t.id, this.base64 = new Os, this.dyeingBody = ""
            }

            return t.prototype.setupOnce = function () {
                var t = this;
                bs({
                    callback: function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var e = n[0], i = e.xhr;
                        if (e.endTimestamp) t.Xt.apply(t, a(n)); else {
                            var o = t.Jt(i.__beidou_xhr__.url, "xhr"), u = o.traceId, c = o.sw8;
                            c && u && (i.__beidou_xhr__.sw8Id = u, t.Qt.apply(t, a(["xhr", c], n)), t._t.apply(t, a(["xhr"], n)))
                        }
                    }, type: "xhr"
                }), bs({
                    callback: function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var e = n[0], i = e.fetchData, o = e.endTimestamp, u = (i || {}).url;
                        if (o) t.Kt.apply(t, a(n)); else {
                            var c = t.Jt(u, "fetch"), f = c.traceId, s = c.sw8;
                            s && f && (i.sw8Id = f, t.Qt.apply(t, a(["fetch", s], n)), t._t.apply(t, a(["fetch"], n)))
                        }
                    }, type: "fetch"
                })
            }, t.prototype.Xt = function (t) {
                var n = t.endTimestamp, r = t.startTimestamp, o = t.xhr.__beidou_xhr__ || {}, u = (o || {}).status_code;
                if (!this.Wt(o.url, o.method) && !Od(o.method, o.url)) {
                    var a = {
                        category: "xhr",
                        method: o.method,
                        url: this.Zt(o.url),
                        statusCode: u,
                        eventId: Sd(),
                        timestamp: Le()
                    }, c = !(u >= 200 && u < 300) && 304 !== u;
                    if (o.sw8Id) {
                        var f = Nd.get(o.sw8Id) || {}, s = f.traceId, v = f.sampling, d = i(f, ["traceId", "sampling"]);
                        s && (0 === v || c) && n - r > 0 && (a.eventId = s, a.seqSpan = this.getSeqSpan(e(e({}, d), {
                            traceId: s,
                            startTime: r,
                            endTime: n,
                            isError: c,
                            url: o.url,
                            method: o.method
                        })), this.Yt() && (a.dyeingData = {body: decodeURIComponent(this.dyeingBody), res: ""}))
                    }
                    var h = {apis: [a], type: this.Yt() ? "api_dyeing" : "api"};
                    if (o.status_code >= 400) Ld.captureEvent(e({}, h)); else if (0 === o.status_code) h.apis[0].statusCode = 418, Ld.captureEvent(e({}, h)); else if (a.seqSpan && !c) {
                        if (h.apis[0].statusCode = o.status_code, "api_dyeing" === h.type) try {
                            h.apis[0].dyeingData = {
                                body: decodeURIComponent(this.dyeingBody),
                                res: decodeURIComponent(t.xhr.response)
                            }
                        } catch (t) {
                        } else h.type = "api_rate";
                        Ld.captureEvent(e({}, h))
                    }
                    this.Gt(t, h)
                }
            }, t.prototype.Kt = function (t) {
                var n = this, r = t || {}, o = r.endTimestamp, u = r.fetchData, a = r.startTimestamp, c = r.response,
                    f = u || {}, s = f.sw8Id, v = f.url, d = f.method;
                if (delete u.sw8Id, !this.Wt(t.fetchData.url, t.fetchData.method) && !this.$t(t) && !Od(t.fetchData.method, t.fetchData.url)) {
                    var h = {
                        category: "fetch",
                        method: t.fetchData.method,
                        url: this.Zt(t.fetchData.url),
                        statusCode: 404
                    }, l = !(c.status >= 200 && c.status < 300) && 304 !== c.status;
                    if (s) {
                        var p = Nd.get(s) || {}, b = p.traceId, m = p.sampling, y = i(p, ["traceId", "sampling"]);
                        b && (0 === m || l) && o - a > 0 && (h.eventId = b, h.seqSpan = this.getSeqSpan(e(e({}, y), {
                            traceId: b,
                            startTime: a,
                            endTime: o,
                            isError: l,
                            url: v,
                            method: d
                        })), this.Yt() && (h.dyeingData = {body: decodeURIComponent(this.dyeingBody), res: ""}))
                    }
                    var g = {apis: [h], type: this.Yt() ? "api_dyeing" : "api"};
                    if (t.error) g.apis[0].statusCode = 418, Ld.captureEvent(e({}, g)); else if (t.response.ok) {
                        if (h.seqSpan && !l) if (g.apis[0].statusCode = c.status, "api_dyeing" === g.type) try {
                            var w = c.headers.get("Content-Type") || "";
                            if (Zo(w).call(w, "json") > -1) c.clone().json().then(function (t) {
                                g.apis[0].dyeingData = {
                                    body: decodeURIComponent(n.dyeingBody),
                                    res: decodeURIComponent(Ui(t))
                                }, Ld.captureEvent(e({}, g))
                            })
                        } catch (t) {
                        } else g.type = "api_rate", Ld.captureEvent(e({}, g))
                    } else g.apis[0].statusCode = t.response.status, Ld.captureEvent(e({}, g));
                    this.Gt(t, g)
                }
            }, t.prototype.Gt = function (t, n) {
                var r = Ld.getClient(), i = (r ? r.getOptions() : {}).overtime, o = void 0 === i ? 1e4 : i;
                t && t.endTimestamp - t.startTimestamp > o && (n.apis[0].statusCode = 408, Ld.captureEvent(e({}, n)))
            }, t.prototype.tn = function (t) {
                try {
                    var n = document.createElement("a");
                    return n.href = t, {pathname: n.pathname, origin: n.origin}
                } catch (t) {
                    return {}
                }
            }, t.prototype.Wt = function (t, n) {
                if (t.match(/tzjybeidou\.58\.com/) && "POST" === n) return !0;
                if (t.split("?")[0].match(/\.(png|jpe?g|gif)$/)) return !0;
                var r, e = Ld.getClient(), i = e ? e.getOptions() : {}, o = !1;
                i.denyUrls && pe(r = i.denyUrls).call(r, function (n) {
                    t.match(n) && (o = !0)
                });
                return o
            }, t.prototype.Zt = function (t) {
                try {
                    return new Cd.URL(t, Cd.origin).href
                } catch (n) {
                    return t
                }
            }, t.prototype.$t = function (t) {
                var n = t.response, r = n.status, e = n.type;
                return 0 === r && "opaque" === e
            }, t.prototype.Qt = function (t, n, r) {
                n && ("xhr" === t ? this.nn(r, n) : "fetch" === t && this.rn(r, n))
            }, t.prototype.getSeqSpan = function (t) {
                var n = t.traceId, r = t.traceSegmentId, e = t.startTime, i = t.endTime, o = t.isError,
                    u = t.operationName, a = t.peer, c = t.url, f = t.method, s = t.service, v = t.serviceInstance;
                return Ui([{
                    traceId: n,
                    traceSegmentId: r,
                    service: "beidou-" + s,
                    serviceInstance: v,
                    spans: [{
                        componentId: 4100,
                        endTime: i,
                        isError: o,
                        operationName: u,
                        parentSpanId: -1,
                        peer: a,
                        spanId: 0,
                        spanLayer: "Http",
                        spanType: "Exit",
                        startTime: e,
                        tags: [{key: "http.method", value: f}, {key: "url", value: c}]
                    }]
                }])
            }, t.prototype.en = function (t, n) {
                if (!t) return !1;
                var r = Ld.getClient(), e = (r ? r.getOptions() : {}) || {}, i = e.globalTrace, o = e.denyTraces,
                    u = e.allowTraces;
                if (this.Wt(t, "POST")) return !1;
                switch (i) {
                    case"fetch":
                        if ("fetch" !== n) return !1;
                        break;
                    case"xhr":
                        if ("xhr" !== n) return !1;
                        break;
                    case"all":
                        break;
                    case"none":
                        return !1;
                    default:
                        var a = this.Zt(t);
                        if (!kd(a)) return !1
                }
                return (!o || !this.in(t, o)) && !(u && !this.on(t, u))
            }, t.prototype.in = function (t, n) {
                return Bu(n).call(n, function (n) {
                    return zd(t, n)
                })
            }, t.prototype.on = function (t, n) {
                return Bu(n).call(n, function (n) {
                    return zd(t, n)
                })
            }, t.prototype.Yt = function () {
                var t = Ld.getClient(), n = (t ? t.getOptions() : {}) || {}, r = n.dyeingUserImeis,
                    e = void 0 === r ? [] : r, i = n.currentUserImei, o = void 0 === i ? "" : i, u = n.dyeingStartTime,
                    a = void 0 === u ? 0 : u, c = n.dyeingDuration, f = void 0 === c ? 0 : c,
                    s = Bu(e).call(e, function (t) {
                        return o === t
                    }), v = Le(), d = !0;
                return a && (d = v >= a, f && (d = v >= a && v - a + f)), s && d
            }, t.prototype.Jt = function (t, n) {
                var r = Ld.getClient(), e = r ? r.getOptions() : {};
                if (!this.en(t, n)) return {};
                var i = Sd(), o = Sd(), u = this.Zt(t), a = this.tn(u) || {}, c = a.pathname, f = void 0 === c ? "" : c,
                    s = a.origin, v = void 0 === s ? "" : s, d = location && location.host, h = e.projectId,
                    l = String(this.base64.encode(i)), p = String(this.base64.encode(o)),
                    b = String(this.base64.encode(h)), m = String(this.base64.encode(v)),
                    y = String(this.base64.encode(f)), g = String(this.base64.encode(d)),
                    w = this.Yt() ? 0 : function (t) {
                        if (isNaN(t)) return 1;
                        var n = 1e3 * t || 1, r = Math.floor(1e3 * Math.random());
                        return 1 === t ? 0 : r <= n ? 0 : 1
                    }(e.samplingRate || .001),
                    x = "1-" + l + "-" + p + "-0-" + b + "-" + m + "-" + y + "-" + g + "-" + w;
                return Nd.set(i, {
                    traceId: i,
                    traceSegmentId: o,
                    operationName: f,
                    peer: d,
                    url: t,
                    service: h,
                    serviceInstance: v,
                    sampling: w
                }), {traceId: i, sw8: x}
            }, t.prototype.un = function () {
                return this.base64.encode("source") + ":" + this.base64.encode("beidou")
            }, t.prototype.rn = function (t, n) {
                var r = t.args[0] = t.args[0], i = t.args[1] = t.args[1] || {}, o = i.headers;
                jd(r, Request) && (o = r.headers);
                var u = this.un();
                o && n ? "function" == typeof o.append ? (o.append("sw8", n), o.append("sw8-correlation", u)) : o = Xi(o) ? a(o, [["sw8", n], ["sw8-correlation", u]]) : e(e({}, o), {
                    sw8: n,
                    "sw8-correlation": u
                }) : o = {sw8: n, "sw8-correlation": u}, i.headers = o
            }, t.prototype.nn = function (t, n) {
                if (t.xhr.setRequestHeader && n) try {
                    var r = this.un();
                    t.xhr.setRequestHeader("sw8", n), t.xhr.setRequestHeader("sw8-correlation", r)
                } catch (t) {
                }
            }, t.prototype._t = function (t, n) {
                if (this.Yt) try {
                    var r = null, e = n.args, i = void 0 === e ? [] : e;
                    if (r = "xhr" === t ? i[0] || "" : i[1].body || "", Pd(r)) this.dyeingBody = r; else if (jd(r, FormData)) {
                        var o = {};
                        pe(r).call(r, function (t, n) {
                            return o[n] = t
                        }), this.dyeingBody = Ui(o)
                    }
                } catch (t) {
                }
            }, t.id = "APIErrorIntegration", t
        }(), Md = Qe, Rd = Pi, Id = function (t, n) {
            !0 === n.isDebug && Pi.enable();
            var r = ju(), e = new t(n);
            r.bindClient(e)
        }, Dd = Ju,
        Hd = [new Dd.InboundFilters, new Dd.FunctionToString, new Pv, new Cv, new gv, new hd, new yd, new ev, new Fd];
    var Vd = wu, qd = function (t) {
        ku("addBreadcrumb", t)
    }, Bd = function (t) {
        if (bi(t)) {
            var n = Yo(t, 500), r = {type: "breadcrumb", breadcrumbs: [{type: "custom", text: encodeURIComponent(n)}]};
            ku("captureEvent", r), Pi.log("2", r)
        }
    }, Ud = captureException, Xd = function (t) {
        return ku("captureEvent", t)
    }, Jd = function (t) {
        return ku("startTransaction", e({}, t))
    };
    return t.BrowserClient = Cs, t.addBreadcrumb = qd, t.addCustomBreadcrumb = Bd, t.addGlobalEventProcessor = Vd, t.captureEvent = Xd, t.captureException = Ud, t.eventFromException = ma, t.eventFromMessage = ya, t.init = function (t) {
        void 0 === t && (t = {});
        var n = Md();
        if (n.__BEIDOU__ = n.__BEIDOU__ || {}, !0 !== n.__BEIDOU__.isInit) {
            n.__BEIDOU__.isInit = !0;
            var r = t;
            (t = {}).projectId = r.projectId, t.isProd = "boolean" != typeof r.isProd || r.isProd, t.beforeSend = r.beforeSend, t.isDebug = "boolean" == typeof r.isDebug && r.isDebug, t.reportAppBreadcrumb = "boolean" == typeof r.reportAppBreadcrumb && r.reportAppBreadcrumb, t.reportWebBreadcrumb = "boolean" == typeof r.reportWebBreadcrumb && r.reportWebBreadcrumb, t.defaultIntegrations = Hd, r.denyUrls && (t.denyUrls = r.denyUrls), r.ignoreErrors && (t.ignoreErrors = r.ignoreErrors), r.globalTrace && (t.globalTrace = r.globalTrace), Xi(r.allowTraces) && r.allowTraces.length && (t.allowTraces = r.allowTraces), Xi(r.denyTraces) && r.denyTraces.length && (t.denyTraces = r.denyTraces), Xi(r.dyeingUserImeis) && r.dyeingUserImeis.length && (t.dyeingUserImeis = r.dyeingUserImeis), r.currentUserImei && (t.currentUserImei = r.currentUserImei), r.dyeingStartTime && (t.dyeingStartTime = r.dyeingStartTime), r.dyeingDuration && (t.dyeingDuration = r.dyeingDuration), r.overtime && (t.overtime = r.overtime), r.maxValueLength && (t.maxValueLength = r.maxValueLength), Id(Cs, t)
        } else Rd.warn("你已经初始化过了^_^")
    }, t.startTransaction = Jd, t
}({});
