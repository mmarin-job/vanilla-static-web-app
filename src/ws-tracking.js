
(function() {
    "use strict";
    var t = this && this.t || function() {
        t = Object.assign || function(t) {
            for (var n, e = 1, i = arguments.length; e < i; e++) {
                n = arguments[e];
                for (var o in n)
                    if (Object.prototype.hasOwnProperty.call(n, o))
                        t[o] = n[o]
            }
            return t
        }
        ;
        return t.apply(this, arguments)
    }
    ;
    var n;
    (function(t) {
        var n = function() {
            function t(t, n) {
                this.i = t;
                this.o = n
            }
            t.prototype.u = function(t) {
                if (!t) {
                    return null
                }
                var n = t + "=";
                return this.i.cookie && this.i.cookie.split("; ").reduce(function(t, e) {
                    return e.substring(0, n.length) === n ? e.split("=")[1] : t
                }, null)
            }
            ;
            t.prototype.s = function(t) {
                if (!t) {
                    return t
                }
                var n = "/+=";
                var e = "-_";
                return t && t.replace(new RegExp("[" + n + "]","g"), function(t) {
                    return e[n.indexOf(t)]
                }).replace(/[^a-zA-Z0-9_-]/g, "")
            }
            ;
            t.prototype.l = function(t, n) {
                if (!t) {
                    return null
                }
                var e = typeof n !== "number" || isNaN(n);
                var i = this.s(this.u(t));
                if (i && !e) {
                    this.i.cookie = t + "=" + i + ";path=/;max-age=" + n
                }
                var o = this.o.crypto || this.o.msCrypto;
                if (!i && o && o.getRandomValues) {
                    var r = e ? 6 : 30;
                    var a = o.getRandomValues(new Uint8Array(r));
                    i = this.s(btoa(String.fromCharCode.apply(null, a)));
                    this.i.cookie = t + "=" + i + ";path=/" + (e ? "" : ";max-age=" + n)
                }
                return i
            }
            ;
            return t
        }();
        t.g = n
    }
    )(n || (n = {}));
    var n;
    (function(n) {
        var e;
        (function(n) {
            n.v = 250;
            var e = Object.freeze;
            function i(t) {
                if (!t) {
                    return null
                }
                var n = t.lastIndexOf("/");
                return n >= 0 ? t.substring(0, n) : "."
            }
            var o = i(document.currentScript && document.currentScript["src"]) || "https://mktdplt102cdn.azureedge.net/public/latest/js";
            function r(i, r, u, f) {
                c(u || document, function() {
                    var c;
                    var s = u.getElementsByClassName("d365-mkt-config");
                    if (s.length === 0) {
                        i(null, null)
                    } else {
                        if (s.length > 1) {
                            (c = r) === null || c === void 0 ? void 0 : c.log("only one element with class 'd365-mkt-config' is expected for tracking configuration")
                        }
                        var l = s[0].getAttribute.bind(s[0]);
                        var d = l("data-cookie") || "msd365mkttr";
                        var g = a(l("data-msdyn-tracking")) === "false";
                        var v = s[0].hasAttribute("data-anonymize") && a(l("data-anonymize")) !== "false";
                        var m = {
                            m: l("data-website-id"),
                            k: l("data-hostname"),
                            p: l("data-cdn") || o,
                            h: d,
                            DoNotTrack: g,
                            Anonymize: v,
                            C: l("data-location")
                        };
                        var k = e(m);
                        f = f || window;
                        var p = f["d365mktConfigureTracking"];
                        if (typeof p == "function") {
                            var h = p(k);
                            var y = false;
                            if (typeof h["then"] == "function") {
                                h.then(function(n) {
                                    if (!y) {
                                        i(e(t(t({}, m), n)), s[0])
                                    }
                                });
                                f.setTimeout(function() {
                                    y = true;
                                    i(k, s[0])
                                }, n.v)
                            } else {
                                i(e(t(t({}, m), h)), s[0])
                            }
                        } else {
                            i(k, s[0])
                        }
                    }
                })
            }
            n.T = r;
            function a(t) {
                var n;
                return n = t && t.toLowerCase && t.toLowerCase(),
                n !== null && n !== void 0 ? n : t
            }
            function c(t, n) {
                if (t.readyState !== "loading") {
                    n()
                } else {
                    var e = function() {
                        t.removeEventListener("DOMContentLoaded", e);
                        n()
                    };
                    t.addEventListener("DOMContentLoaded", e)
                }
            }
        }
        )(e = n.N || (n.N = {}))
    }
    )(n || (n = {}));
    var n;
    (function(t) {
        var n;
        (function(n) {
            var e = "data-msdyn-tracking";
            function i(t) {
                return encodeURIComponent(t)
            }
            function o(t) {
                return t + "&id=" + i(Math.floor(Math.random() * 9999999999).toString())
            }
            function r(n, e, i, o) {
                if (n.Anonymize || n.DoNotTrack) {
                    return null
                }
                return new t.g(e,i).l(n.h + (!o ? "s" : ""), o)
            }
            function a(t) {
                return t && t.toLowerCase && t.toLowerCase() || t
            }
            function c(t, n, e, i, a) {
                var c = 60 * 60 * 24 * 730;
                var u = r(t, i, a, c);
                var f = r(t, i, a);
                var s = new Image;
                s.id = "i" + t.m;
                s.width = 0;
                s.height = 0;
                s.src = o("https://" + t.k + "/t/" + n + "/" + t.m + (u ? "/" + u + "/" + f : "") + "?" + e);
                s.onload = function() {
                    var n = i.getElementById("d" + t.m);
                    if (n) {
                        n.style.width = "0";
                        n.style.height = "0";
                        n.appendChild(s)
                    }
                }
            }
            function u(t, n, e, o, r) {
                c(t, "l" + (t.Anonymize ? "/anon" : ""), s(o, t.C) + "&tg=" + i(n) + "&fn=" + i(e), o, r)
            }
            function f(t, n, i, o) {
                if (o.button === 0 || o.button === 1) {
                    var r = o.target;
                    while (r && r.tagName !== "A") {
                        r = r.parentElement || r.parentNode
                    }
                    if (r && a(r.getAttribute(e)) !== "false" && !t.DoNotTrack) {
                        var c = r.firstElementChild;
                        u(t, r.href, c && (c.alt || c.title || c.src) || r.text || r.innerText, n, i)
                    }
                }
            }
            function s(t, n) {
                return "ad=" + i(t.location.toString()) + (!n ? "" : "&intad=" + i(n)) + "&rf=" + i(t.referrer)
            }
            n.M = s;
            function l(t, n, e) {
                c(t, "v" + (t.Anonymize ? "/anon" : ""), s(n, t.C), n, e)
            }
            n.A = l;
            var d = function(t) {
                return function(n, e) {
                    if (!t[n]) {
                        t[n] = true;
                        e()
                    }
                }
            }({});
            function g(t, n, e) {
                if (n.body.addEventListener) {
                    var i = navigator.appVersion.indexOf("MSIE") === -1 ? "mousedown" : "click";
                    d(t.m || "", function() {
                        return n.body.addEventListener(i, function(i) {
                            return f(t, n, e, i)
                        })
                    })
                }
            }
            n.L = g
        }
        )(n = t.S || (t.S = {}))
    }
    )(n || (n = {}));
    (function(e, i) {
        function o(t, n) {
            var o = function() {
                return !!(i["MsCrmMkt"] && i["MsCrmMkt"]["initTracking"])
            };
            if (o()) {
                n(true);
                return
            }
            var r = e.querySelectorAll('script[src*="' + t + '"]');
            if (r.length === 0 || e.readyState === "complete") {
                n(false);
                return
            }
            e.addEventListener("readystatechange", function() {
                if (e.readyState === "complete") {
                    n(o())
                }
            })
        }
        function r(t, n, e, i) {
            var o = t.m;
            var r = "https://" + t.k + "/f";
            var a = "https://" + t.k + "/t";
            var c = function(t) {
                i();
                t && t()
            };
            if (typeof n === "function") {
                if (!e) {
                    c(function() {
                        n(o, r, a, null, null, t.Anonymize)
                    })
                } else {
                    e.w(o, a, function(e) {
                        n(o, r, a, e, null, t.Anonymize)
                    }, null)
                }
            } else {
                c()
            }
        }
        var a = function(t) {};
        function c(t, n) {
            t.DoNotTrack = n["DoNotTrack"];
            t.Anonymize = n["Anonymize"]
        }
        function u(u) {
            if (u && !u.DoNotTrack) {
                o(u.p, function(o) {
                    if (!o) {
                        var f = t({}, u);
                        r(f, i["ms_tr_il_08"], i["ms_tr_il_w_01"], function() {
                            n.S.A(f, e, i);
                            n.S.L(f, e, i)
                        });
                        a = function(t) {
                            c(f, t)
                        }
                    }
                })
            }
        }
        function f() {
            n.N.T(function(n) {
                if (n && !n.DoNotTrack) {
                    u(n)
                } else if (n) {
                    a = function(e) {
                        return u(t(t({}, n), e))
                    }
                }
            }, {
                log: function(t) {
                    i.console && i.console.log && i.console.log(t)
                },
                error: function(t) {
                    i.console && i.console.error && i.console.error(t)
                }
            }, e, i)
        }
        i["MsCrmMkt"] = i["MsCrmMkt"] || {};
        var s = i["MsCrmMkt"]["reconfigureTracking"];
        i["MsCrmMkt"]["reconfigureTracking"] = function(t) {
            if (typeof s == "function") {
                s(t)
            }
            a(t)
        }
        ;
        f()
    }
    )(document, window)
}
)();
