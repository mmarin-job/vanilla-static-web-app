
/**
/* @preserve Version - 1.92.2006.0
*/
!function(t, e) {
    t.ES6Promise = e()
}(this, function() {
    "use strict";
    function t(t) {
        var e = typeof t;
        return null !== t && ("object" === e || "function" === e)
    }
    function e(t) {
        return "function" == typeof t
    }
    function n(t) {
        W = t
    }
    function r(t) {
        z = t
    }
    function o() {
        return function() {
            return process.nextTick(a)
        }
    }
    function i() {
        return "undefined" != typeof U ? function() {
            U(a)
        }
        : c()
    }
    function s() {
        var t = 0
          , e = new H(a)
          , n = document.createTextNode("");
        return e.observe(n, {
            characterData: !0
        }),
        function() {
            n.data = t = ++t % 2
        }
    }
    function u() {
        var t = new MessageChannel;
        return t.port1.onmessage = a,
        function() {
            return t.port2.postMessage(0)
        }
    }
    function c() {
        var t = setTimeout;
        return function() {
            return t(a, 1)
        }
    }
    function a() {
        for (var t = 0; t < N; t += 2) {
            var e = Q[t]
              , n = Q[t + 1];
            e(n),
            Q[t] = void 0,
            Q[t + 1] = void 0
        }
        N = 0
    }
    function f() {
        try {
            var t = Function("return this")().require("vertx");
            return U = t.runOnLoop || t.runOnContext,
            i()
        } catch (e) {
            return c()
        }
    }
    function l(t, e) {
        var n = this
          , r = new this.constructor(p);
        void 0 === r[V] && x(r);
        var o = n._state;
        if (o) {
            var i = arguments[o - 1];
            z(function() {
                return T(o, r, i, n._result)
            })
        } else
            j(n, r, t, e);
        return r
    }
    function h(t) {
        var e = this;
        if (t && "object" == typeof t && t.constructor === e)
            return t;
        var n = new e(p);
        return w(n, t),
        n
    }
    function p() {}
    function v() {
        return new TypeError("You cannot resolve a promise with itself")
    }
    function d() {
        return new TypeError("A promises callback cannot return that same promise.")
    }
    function _(t, e, n, r) {
        try {
            t.call(e, n, r)
        } catch (o) {
            return o
        }
    }
    function y(t, e, n) {
        z(function(t) {
            var r = !1
              , o = _(n, e, function(n) {
                r || (r = !0,
                e !== n ? w(t, n) : A(t, n))
            }, function(e) {
                r || (r = !0,
                S(t, e))
            }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0,
            S(t, o))
        }, t)
    }
    function m(t, e) {
        e._state === Z ? A(t, e._result) : e._state === $ ? S(t, e._result) : j(e, void 0, function(e) {
            return w(t, e)
        }, function(e) {
            return S(t, e)
        })
    }
    function b(t, n, r) {
        n.constructor === t.constructor && r === l && n.constructor.resolve === h ? m(t, n) : void 0 === r ? A(t, n) : e(r) ? y(t, n, r) : A(t, n)
    }
    function w(e, n) {
        if (e === n)
            S(e, v());
        else if (t(n)) {
            var r = void 0;
            try {
                r = n.then
            } catch (o) {
                return void S(e, o)
            }
            b(e, n, r)
        } else
            A(e, n)
    }
    function g(t) {
        t._onerror && t._onerror(t._result),
        E(t)
    }
    function A(t, e) {
        t._state === X && (t._result = e,
        t._state = Z,
        0 !== t._subscribers.length && z(E, t))
    }
    function S(t, e) {
        t._state === X && (t._state = $,
        t._result = e,
        z(g, t))
    }
    function j(t, e, n, r) {
        var o = t._subscribers
          , i = o.length;
        t._onerror = null,
        o[i] = e,
        o[i + Z] = n,
        o[i + $] = r,
        0 === i && t._state && z(E, t)
    }
    function E(t) {
        var e = t._subscribers
          , n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3)
                r = e[s],
                o = e[s + n],
                r ? T(n, r, o, i) : o(i);
            t._subscribers.length = 0
        }
    }
    function T(t, n, r, o) {
        var i = e(r)
          , s = void 0
          , u = void 0
          , c = !0;
        if (i) {
            try {
                s = r(o)
            } catch (a) {
                c = !1,
                u = a
            }
            if (n === s)
                return void S(n, d())
        } else
            s = o;
        n._state !== X || (i && c ? w(n, s) : c === !1 ? S(n, u) : t === Z ? A(n, s) : t === $ && S(n, s))
    }
    function M(t, e) {
        try {
            e(function(e) {
                w(t, e)
            }, function(e) {
                S(t, e)
            })
        } catch (n) {
            S(t, n)
        }
    }
    function P() {
        return tt++
    }
    function x(t) {
        t[V] = tt++,
        t._state = void 0,
        t._result = void 0,
        t._subscribers = []
    }
    function C() {
        return new Error("Array Methods must be provided an Array")
    }
    function O(t) {
        return new et(this,t).promise
    }
    function k(t) {
        var e = this;
        return new e(L(t) ? function(n, r) {
            for (var o = t.length, i = 0; i < o; i++)
                e.resolve(t[i]).then(n, r)
        }
        : function(t, e) {
            return e(new TypeError("You must pass an array to race."))
        }
        )
    }
    function F(t) {
        var e = this
          , n = new e(p);
        return S(n, t),
        n
    }
    function Y() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }
    function q() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }
    function D() {
        var t = void 0;
        if ("undefined" != typeof global)
            t = global;
        else if ("undefined" != typeof self)
            t = self;
        else
            try {
                t = Function("return this")()
            } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment")
            }
        var n = t.Promise;
        if (n) {
            var r = null;
            try {
                r = Object.prototype.toString.call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast)
                return
        }
        t.Promise = nt
    }
    var K = void 0;
    K = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ;
    var L = K
      , N = 0
      , U = void 0
      , W = void 0
      , z = function(t, e) {
        Q[N] = t,
        Q[N + 1] = e,
        N += 2,
        2 === N && (W ? W(a) : R())
    }
      , B = "undefined" != typeof window ? window : void 0
      , G = B || {}
      , H = G.MutationObserver || G.WebKitMutationObserver
      , I = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process)
      , J = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel
      , Q = new Array(1e3)
      , R = void 0;
    R = I ? o() : H ? s() : J ? u() : void 0 === B && "function" == typeof require ? f() : c();
    var V = Math.random().toString(36).substring(2)
      , X = void 0
      , Z = 1
      , $ = 2
      , tt = 0
      , et = function() {
        function t(t, e) {
            this._instanceConstructor = t,
            this.promise = new t(p),
            this.promise[V] || x(this.promise),
            L(e) ? (this.length = e.length,
            this._remaining = e.length,
            this._result = new Array(this.length),
            0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0,
            this._enumerate(e),
            0 === this._remaining && A(this.promise, this._result))) : S(this.promise, C())
        }
        return t.prototype._enumerate = function(t) {
            for (var e = 0; this._state === X && e < t.length; e++)
                this._eachEntry(t[e], e)
        }
        ,
        t.prototype._eachEntry = function(t, e) {
            var n = this._instanceConstructor
              , r = n.resolve;
            if (r === h) {
                var o = void 0
                  , i = void 0
                  , s = !1;
                try {
                    o = t.then
                } catch (u) {
                    s = !0,
                    i = u
                }
                if (o === l && t._state !== X)
                    this._settledAt(t._state, e, t._result);
                else if ("function" != typeof o)
                    this._remaining--,
                    this._result[e] = t;
                else if (n === nt) {
                    var c = new n(p);
                    s ? S(c, i) : b(c, t, o),
                    this._willSettleAt(c, e)
                } else
                    this._willSettleAt(new n(function(e) {
                        return e(t)
                    }
                    ), e)
            } else
                this._willSettleAt(r(t), e)
        }
        ,
        t.prototype._settledAt = function(t, e, n) {
            var r = this.promise;
            r._state === X && (this._remaining--,
            t === $ ? S(r, n) : this._result[e] = n),
            0 === this._remaining && A(r, this._result)
        }
        ,
        t.prototype._willSettleAt = function(t, e) {
            var n = this;
            j(t, void 0, function(t) {
                return n._settledAt(Z, e, t)
            }, function(t) {
                return n._settledAt($, e, t)
            })
        }
        ,
        t
    }()
      , nt = function() {
        function t(e) {
            this[V] = P(),
            this._result = this._state = void 0,
            this._subscribers = [],
            p !== e && ("function" != typeof e && Y(),
            this instanceof t ? M(this, e) : q())
        }
        return t.prototype["catch"] = function(t) {
            return this.then(null, t)
        }
        ,
        t.prototype["finally"] = function(t) {
            var n = this
              , r = n.constructor;
            return e(t) ? n.then(function(e) {
                return r.resolve(t()).then(function() {
                    return e
                })
            }, function(e) {
                return r.resolve(t()).then(function() {
                    throw e
                })
            }) : n.then(t, t)
        }
        ,
        t
    }();
    return nt.prototype.then = l,
    nt.all = O,
    nt.race = k,
    nt.resolve = h,
    nt.reject = F,
    nt._setScheduler = n,
    nt._setAsap = r,
    nt._asap = z,
    nt.polyfill = D,
    nt.Promise = nt,
    nt.polyfill(),
    nt
});
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(d, b) {
            d.__proto__ = b
        }
        || function(d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]
        }
        ;
        return extendStatics(d, b)
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype,
        new __)
    }
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p]
        }
        return t
    }
    ;
    return __assign.apply(this, arguments)
}
;
var __spreadArrays = this && this.__spreadArrays || function() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++,
        k++)
            r[k] = a[j];
    return r
}
;
var MsCrmMkt;
(function(MsCrmMkt) {
    if (MsCrmMkt["MsCrmFormLoader"] && MsCrmMkt["MsCrmFormLoader"].onformload) {
        throw new Error("MsCrmFormLoader is already defined, make sure Dynamics 365 Marketing loader.js script is not included twice in the page")
    }
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var FormEvent = function() {
        function FormEvent(type, formPageId, formPlaceholder) {
            this.type = type;
            this.formPageId = formPageId;
            this.formPlaceholder = formPlaceholder
        }
        FormEvent.prototype.getFormPageId = function() {
            return this.formPageId
        }
        ;
        FormEvent.prototype.getFormPlaceholder = function() {
            return this.formPlaceholder
        }
        ;
        FormEvent.prototype.getType = function() {
            return this.type
        }
        ;
        return FormEvent
    }();
    MsCrmMkt.FormEvent = FormEvent
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var FormLoadEvent = function(_super) {
        __extends(FormLoadEvent, _super);
        function FormLoadEvent(formPageId, formPlaceholder) {
            return _super.call(this, "formLoad", formPageId, formPlaceholder) || this
        }
        FormLoadEvent.prototype.preventFormLoadingProgressBar = function() {
            this.formLoadingProgressBarPrevented = true
        }
        ;
        FormLoadEvent.prototype.setFormNotification = function(notificationFunction) {
            this.notificationFunction = notificationFunction
        }
        ;
        return FormLoadEvent
    }(MsCrmMkt.FormEvent);
    MsCrmMkt.FormLoadEvent = FormLoadEvent
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var FormSubmitEvent = function(_super) {
        __extends(FormSubmitEvent, _super);
        function FormSubmitEvent(formPageId, formPlaceholder) {
            var _this = _super.call(this, "formSubmit", formPageId, formPlaceholder) || this;
            _this.extraValues = {};
            return _this
        }
        FormSubmitEvent.prototype.preventDefault = function() {
            this.defaultPrevented = true
        }
        ;
        FormSubmitEvent.prototype.setExtraValue = function(name, value) {
            this.extraValues[name] = value
        }
        ;
        return FormSubmitEvent
    }(MsCrmMkt.FormEvent);
    MsCrmMkt.FormSubmitEvent = FormSubmitEvent
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var AfterFormSubmitEvent = function(_super) {
        __extends(AfterFormSubmitEvent, _super);
        function AfterFormSubmitEvent(formPageId, formPlaceholder, redirectUrl) {
            var _this = _super.call(this, "afterFormSubmit", formPageId, formPlaceholder) || this;
            _this.redirectUrl = redirectUrl;
            return _this
        }
        AfterFormSubmitEvent.prototype.getRedirectUrl = function() {
            return this.redirectUrl
        }
        ;
        return AfterFormSubmitEvent
    }(MsCrmMkt.FormEvent);
    MsCrmMkt.AfterFormSubmitEvent = AfterFormSubmitEvent
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var dataCorrelationEstablishingAttribute = "data-correlation-establishing";
    var dataIsLoadingAttribute = "data-is-loading";
    var dataErrorImageUrlAttribute = "data-error-image-url";
    var dataErrorMessageAttribute = "data-error-message";
    var dataSuccessImageUrlAttribute = "data-success-image-url";
    var dataFormBlockPrefixAttribute = "data-formControlsPrefix";
    var MarketingFormPlaceholder = function() {
        function MarketingFormPlaceholder(_element) {
            this._element = _element
        }
        MarketingFormPlaceholder.prototype.getAttribute = function(attributeName) {
            return this._element.getAttribute(attributeName)
        }
        ;
        MarketingFormPlaceholder.prototype.setAttribute = function(attributeName, value) {
            if (!value) {
                this._element.removeAttribute(attributeName);
                return
            }
            this._element.setAttribute(attributeName, value)
        }
        ;
        Object.defineProperty(MarketingFormPlaceholder.prototype, "element", {
            get: function() {
                return this._element
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketingFormPlaceholder.prototype, "isCorrelationEstablishing", {
            get: function() {
                return this.getAttribute(dataCorrelationEstablishingAttribute) === "true"
            },
            set: function(value) {
                this.setAttribute(dataCorrelationEstablishingAttribute, value.toString())
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketingFormPlaceholder.prototype, "isLoading", {
            get: function() {
                return this.getAttribute(dataIsLoadingAttribute) === "true"
            },
            set: function(value) {
                this.setAttribute(dataIsLoadingAttribute, value.toString())
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketingFormPlaceholder.prototype, "controlIdPrefix", {
            get: function() {
                return this.getAttribute(dataFormBlockPrefixAttribute)
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketingFormPlaceholder.prototype, "metadata", {
            get: function() {
                var errorImageUrl = this.getAttribute(dataErrorImageUrlAttribute);
                var errorMessage = this.getAttribute(dataErrorMessageAttribute);
                var successImageUrl = this.getAttribute(dataSuccessImageUrlAttribute);
                return {
                    ErrorImageUrl: errorImageUrl,
                    ErrorMessage: errorMessage,
                    SuccessImageUrl: successImageUrl
                }
            },
            set: function(value) {
                this.setAttribute(dataErrorImageUrlAttribute, value ? value.ErrorImageUrl : null);
                this.setAttribute(dataErrorMessageAttribute, value ? value.ErrorMessage : null);
                this.setAttribute(dataSuccessImageUrlAttribute, value ? value.SuccessImageUrl : null)
            },
            enumerable: true,
            configurable: true
        });
        return MarketingFormPlaceholder
    }();
    MsCrmMkt.MarketingFormPlaceholder = MarketingFormPlaceholder
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Logger = function() {
        function Logger() {}
        Logger.prototype.log = function(message) {
            if (window && window.console && window.console.log) {
                window.console.log(message)
            }
        }
        ;
        Logger.prototype.error = function(message) {
            if (window && window.console && window.console.error) {
                window.console.error(message)
            }
        }
        ;
        return Logger
    }();
    MsCrmMkt.Logger = Logger
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var BasicConfigProvider;
    (function(BasicConfigProvider) {
        BasicConfigProvider.DefaultTimeout = 250;
        var freeze = Object.freeze;
        function parentLocation(scriptLocation) {
            if (!scriptLocation) {
                return null
            }
            var lastSeparator = scriptLocation.lastIndexOf("/");
            return lastSeparator >= 0 ? scriptLocation.substring(0, lastSeparator) : "."
        }
        var defaultScriptDir = parentLocation(document.currentScript && document.currentScript["src"]) || "https://mktdplt102cdn.azureedge.net/public/latest/js";
        function getConfig(done, logger, doc, wnd) {
            whenLoaded(doc || document, function() {
                var _a;
                var configElements = doc.getElementsByClassName("d365-mkt-config");
                if (configElements.length === 0) {
                    done(null, null)
                } else {
                    if (configElements.length > 1) {
                        (_a = logger) === null || _a === void 0 ? void 0 : _a.log("only one element with class 'd365-mkt-config' is expected for tracking configuration")
                    }
                    var readAttribute = configElements[0].getAttribute.bind(configElements[0]);
                    var cookieName = readAttribute("data-cookie") || "msd365mkttr";
                    var doNotTrack_1 = toLowerCase(readAttribute("data-msdyn-tracking")) === "false";
                    var anonymize = configElements[0].hasAttribute("data-anonymize") && toLowerCase(readAttribute("data-anonymize")) !== "false";
                    var config_1 = {
                        WebsiteId: readAttribute("data-website-id"),
                        HostName: readAttribute("data-hostname"),
                        CdnName: readAttribute("data-cdn") || defaultScriptDir,
                        CookieName: cookieName,
                        DoNotTrack: doNotTrack_1,
                        Anonymize: anonymize,
                        TrackingLocation: readAttribute("data-location")
                    };
                    var staticConfig_1 = freeze(config_1);
                    wnd = wnd || window;
                    var extension = wnd["d365mktConfigureTracking"];
                    if (typeof extension == "function") {
                        var overrides = extension(staticConfig_1);
                        var timeout_1 = false;
                        if (typeof overrides["then"] == "function") {
                            overrides.then(function(c) {
                                if (!timeout_1) {
                                    done(freeze(__assign(__assign({}, config_1), c)), configElements[0])
                                }
                            });
                            wnd.setTimeout(function() {
                                timeout_1 = true;
                                done(staticConfig_1, configElements[0])
                            }, BasicConfigProvider.DefaultTimeout)
                        } else {
                            done(freeze(__assign(__assign({}, config_1), overrides)), configElements[0])
                        }
                    } else {
                        done(staticConfig_1, configElements[0])
                    }
                }
            })
        }
        BasicConfigProvider.getConfig = getConfig;
        function toLowerCase(s) {
            var _a;
            return _a = s && s.toLowerCase && s.toLowerCase(),
            _a !== null && _a !== void 0 ? _a : s
        }
        function whenLoaded(doc, done) {
            if (doc.readyState !== "loading") {
                done()
            } else {
                var listener_1 = function() {
                    doc.removeEventListener("DOMContentLoaded", listener_1);
                    done()
                };
                doc.addEventListener("DOMContentLoaded", listener_1)
            }
        }
    }
    )(BasicConfigProvider = MsCrmMkt.BasicConfigProvider || (MsCrmMkt.BasicConfigProvider = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    function safeRegExp(value, logger) {
        try {
            if (!value) {
                return null
            }
            return new RegExp(value)
        } catch (e) {
            logger.error("failed to parse '" + value + "' as regular expression: " + e);
            return null
        }
    }
    var ConfigProvider = function() {
        function ConfigProvider(logger, doc, win) {
            this.logger = logger;
            this.doc = doc || document;
            this.win = win || window
        }
        ConfigProvider.prototype.getConfig = function() {
            var _this = this;
            return new ES6Promise.Promise(function(resolve, reject) {
                MsCrmMkt.BasicConfigProvider.getConfig(function(parsed, element) {
                    if (!element || !parsed) {
                        resolve(parsed);
                        return
                    }
                    var ignorePreventDefaultValue = element.getAttribute("data-ignore-prevent-default") || "false";
                    var noSubmit = element.getAttribute("data-no-submit") || "false";
                    var submitMode = element.getAttribute("data-submit-mode") || "default";
                    var hideSessions = element.getAttribute("data-events-hide-sessions") || "false";
                    var hideWaitList = element.getAttribute("data-events-hide-waitlist") || "false";
                    var uiLanguage = element.getAttribute("data-ui-language");
                    var fallbackToActionMethodName = element.getAttribute("data-find-by-id-fallback-to-action") || "false";
                    var ignoreSuffix = element.getAttribute("data-find-by-id-ignore-suffix-from");
                    var ignorePrefix = element.getAttribute("data-find-by-id-ignore-prefix-to");
                    var idRegExp = safeRegExp(element.getAttribute("data-find-by-id-regex"), _this.logger);
                    var config = __assign(__assign({}, parsed), {
                        FormCapture: Object.freeze({
                            IgnorePreventDefault: ignorePreventDefaultValue.toLowerCase() === "true",
                            NoSubmit: noSubmit.toLowerCase() === "true",
                            SubmitMode: submitMode.toLowerCase(),
                            FallbackToActionMethodName: fallbackToActionMethodName.toLowerCase() === "true",
                            IgnorePrefixTo: ignorePrefix,
                            IgnoreSuffixFrom: ignoreSuffix,
                            IdRegExp: idRegExp
                        }),
                        EventForm: Object.freeze({
                            HideSessions: hideSessions && hideSessions.toLowerCase() === "true",
                            HideWaitlisting: hideWaitList && hideWaitList.toLowerCase() === "true"
                        }),
                        FormUI: Object.freeze({
                            Language: uiLanguage
                        })
                    });
                    resolve(Object.freeze(config))
                }, _this.logger, _this.doc, _this.win)
            }
            ).then(function(c) {
                return _this.applyExtension(c)
            })
        }
        ;
        ConfigProvider.prototype.timeout = function(delay) {
            var _this = this;
            return new ES6Promise.Promise(function(resolve, reject) {
                _this.win.setTimeout(function() {
                    return reject("Timed out after " + delay + " ms")
                }, delay)
            }
            )
        }
        ;
        ConfigProvider.prototype.safeTimeout = function(n, defaultValue) {
            if (typeof n === "number" && !isNaN(n) && n >= 0) {
                return n
            }
            this.logger.log("Timeout is less then 0 or not a number: " + n + ", using " + defaultValue);
            return defaultValue
        }
        ;
        ConfigProvider.prototype.whenLoaded = function() {
            var _this = this;
            if (this.doc.readyState !== "loading") {
                return ES6Promise.Promise.resolve()
            } else {
                return new ES6Promise.Promise(function(resolve, reject) {
                    var listener = function() {
                        _this.doc.removeEventListener("DOMContentLoaded", listener);
                        resolve()
                    };
                    _this.doc.addEventListener("DOMContentLoaded", listener)
                }
                )
            }
        }
        ;
        ConfigProvider.prototype.applyExtension = function(staticConfig) {
            var _this = this;
            var configure = this.win.d365mktConfigure;
            if (!configure || typeof configure !== "function") {
                return ES6Promise.Promise.resolve(staticConfig)
            }
            try {
                var config = configure(staticConfig);
                return ES6Promise.Promise.race([config, this.timeout(this.safeTimeout(config && config.timeout, ConfigProvider.DefaultTimeout))]).then(function(c) {
                    return c || staticConfig
                }).catch(function(e) {
                    _this.logger.error(e);
                    return staticConfig
                })
            } catch (e) {
                this.logger.error(e);
                return ES6Promise.Promise.resolve(staticConfig)
            }
        }
        ;
        ConfigProvider.DefaultTimeout = MsCrmMkt.BasicConfigProvider.DefaultTimeout;
        return ConfigProvider
    }();
    MsCrmMkt.ConfigProvider = ConfigProvider
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var ScriptLoader = function() {
        function ScriptLoader() {
            this.promises = {}
        }
        ScriptLoader.prototype.loadScript = function(src) {
            if (this.promises[src]) {
                return this.promises[src]
            }
            return this.promises[src] = new ES6Promise.Promise(function(resolve, reject) {
                var scriptLoaded = false;
                var scriptElement = document.createElement("script");
                scriptElement.type = "text/javascript";
                scriptElement.src = src;
                var onLoadFunction = function() {
                    if (!scriptLoaded && (!scriptElement.readyState || scriptElement.readyState === "complete")) {
                        scriptLoaded = true;
                        resolve()
                    }
                };
                scriptElement.onload = onLoadFunction;
                scriptElement.onerror = reject;
                scriptElement.onreadystatechange = onLoadFunction;
                var firstScriptOnPage = document.getElementsByTagName("script")[0];
                firstScriptOnPage.parentNode.insertBefore(scriptElement, firstScriptOnPage)
            }
            )
        }
        ;
        ScriptLoader.prototype.ensureModernizr = function() {
            var _this = this;
            return new ES6Promise.Promise(function(resolve, reject) {
                if (typeof Modernizr !== "undefined") {
                    resolve();
                    return
                }
                _this.loadScript("https://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js").then(function() {
                    return resolve()
                }, function(error) {
                    return reject(error)
                })
            }
            )
        }
        ;
        ScriptLoader.prototype.ensureJquery = function() {
            var _this = this;
            return new ES6Promise.Promise(function(resolve, reject) {
                if (typeof $ !== "undefined") {
                    resolve($);
                    return
                }
                if (typeof jQuery !== "undefined") {
                    resolve(jQuery);
                    return
                }
                _this.loadScript("https://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.2.4.min.js").then(function() {
                    resolve($)
                }, function(error) {
                    return reject(error)
                })
            }
            )
        }
        ;
        ScriptLoader.prototype.ensureJqueryUI = function() {
            var _this = this;
            return new ES6Promise.Promise(function(resolve, reject) {
                _this.ensureJquery().then(function($) {
                    if ($("#msdyncrm-mkt-jquery-ui-css").length === 0) {
                        $("head").append('<link id="msdyncrm-mkt-jquery-ui-css" rel="stylesheet" href="https://ajax.aspnetcdn.com/ajax/jquery.ui/1.12.1/themes/base/jquery-ui.css" />')
                    }
                    if ($.datepicker) {
                        resolve($);
                        return
                    }
                    _this.loadScript("https://ajax.aspnetcdn.com/ajax/jquery.ui/1.12.1/jquery-ui.min.js").then(function() {
                        return resolve($)
                    }, function(error) {
                        return reject(error)
                    })
                }, function(error) {
                    return reject(error)
                })
            }
            )
        }
        ;
        ScriptLoader.prototype.getCdnUrl = function() {
            var tipCdnUrl = "https://mktdplp901cdn.azureedge.net";
            var scripts = document.querySelectorAll("script[src*='form-loader.js'], script[src*='loader.js']");
            for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].src.indexOf(tipCdnUrl) === 0) {
                    return tipCdnUrl
                }
            }
            return "https://mktdplp102cdn.azureedge.net"
        }
        ;
        ScriptLoader.prototype.ensureJqueryUITimer = function() {
            var _this = this;
            return new ES6Promise.Promise(function(resolve, reject) {
                _this.ensureJqueryUI().then(function($) {
                    if ($("#msdyncrm-mkt-jquery-ui-timer-css").length === 0) {
                        $("head").append('<link id="msdyncrm-mkt-jquery-ui-timer-css" rel="stylesheet" href="' + _this.getCdnUrl() + '/public/latest/css/jquery-ui-timepicker-addon.min.css" />')
                    }
                    if ($.datetimepicker) {
                        resolve();
                        return
                    }
                    _this.loadScript(_this.getCdnUrl() + "/public/latest/js/jquery-ui-timepicker-addon.min.js").then(function() {
                        return resolve()
                    }, function(error) {
                        return reject(error)
                    })
                }, function(error) {
                    return reject(error)
                })
            }
            )
        }
        ;
        return ScriptLoader
    }();
    MsCrmMkt.ScriptLoader = ScriptLoader
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Telemetry;
    (function(Telemetry) {
        var internalStartTime = now();
        var TelemetryObject = function() {
            function TelemetryObject(serviceEndpoint) {
                var _this = this;
                if (serviceEndpoint === void 0) {
                    serviceEndpoint = ""
                }
                this.onUnloadFunction = null;
                this.serviceEndpoint = serviceEndpoint;
                this.formPageId = TelemetryObject.getFirstFormPageId();
                if (window.addEventListener) {
                    this.onUnloadFunction = function() {
                        _this.onUnload()
                    }
                    ;
                    window.addEventListener("beforeunload", this.onUnloadFunction)
                }
            }
            Object.defineProperty(TelemetryObject, "activityId", {
                get: function() {
                    var _a;
                    return _a = TelemetryObject._activityId,
                    _a !== null && _a !== void 0 ? _a : TelemetryObject._defaultActivityId
                },
                enumerable: true,
                configurable: true
            });
            TelemetryObject.setActivityIdIfNotOverriden = function(value) {
                if (value && !TelemetryObject._activityId) {
                    TelemetryObject._activityId = value
                }
            }
            ;
            TelemetryObject.prototype.onUnload = function() {
                var endpoint = this.getFormSendingUrl();
                if (!endpoint) {
                    return
                }
                var measure = new Telemetry.ImmediateMeasurement("MsCrmMkt.WindowUnload");
                var measurements = new Array(measure);
                measurements = getResourcesMeasurements(measurements);
                measurements = getNavigationMeasurements(measurements);
                var data = JSON.stringify(measurements);
                if (typeof navigator.sendBeacon === "function") {
                    navigator.sendBeacon(endpoint, data);
                    return
                }
                var request = new XMLHttpRequest;
                request.open("POST", endpoint, false);
                request.setRequestHeader("Content-Type", "text/plain");
                request.send(data)
            }
            ;
            TelemetryObject.prototype.getFormSendingUrl = function() {
                if (!this.formPageId || this.formPageId.length === 0 || !this.serviceEndpoint || this.serviceEndpoint.length === 0) {
                    return null
                }
                return [this.serviceEndpoint, "m", this.formPageId, "id", TelemetryObject.activityId].join("/")
            }
            ;
            TelemetryObject.getFirstFormPageId = function() {
                var formBlock = document.querySelector("[" + MsCrmMkt.formBlockIdAttrName + "]");
                if (formBlock) {
                    return formBlock.getAttribute(MsCrmMkt.formBlockIdAttrName)
                }
                return null
            }
            ;
            TelemetryObject.prototype.removeUnloadCallback = function() {
                if (window.removeEventListener && this.onUnloadFunction) {
                    window.removeEventListener("beforeunload", this.onUnloadFunction)
                }
            }
            ;
            TelemetryObject.prototype.sendMeasurements = function(measurements) {
                var url = this.getFormSendingUrl();
                if (url) {
                    measurements = getResourcesMeasurements(measurements);
                    measurements = getNavigationMeasurements(measurements);
                    measurements.push(new Measurement("MsCrmMkt.LoaderStartTime",internalStartTime));
                    var request = getSendRequest(url);
                    request.send(JSON.stringify(measurements))
                }
                this.removeUnloadCallback()
            }
            ;
            TelemetryObject.prototype.runAndMeasure = function(fun, name, measurements) {
                if (measurements === void 0) {
                    measurements = null
                }
                if (measurements == null) {
                    measurements = new Array
                }
                measurements.push(new ImmediateMeasurement(name + "Start"));
                var success = true;
                try {
                    fun()
                } catch (_a) {
                    success = false
                }
                measurements.push(new ImmediateMeasurement(name + "End",success));
                return measurements
            }
            ;
            TelemetryObject._defaultActivityId = generateUUID();
            return TelemetryObject
        }();
        Telemetry.TelemetryObject = TelemetryObject;
        var Measurement = function() {
            function Measurement(name, value, success) {
                if (success === void 0) {
                    success = true
                }
                this.name = name;
                this.value = value;
                this.success = success
            }
            return Measurement
        }();
        Telemetry.Measurement = Measurement;
        var ImmediateMeasurement = function() {
            function ImmediateMeasurement(name, success) {
                if (success === void 0) {
                    success = true
                }
                this.name = name;
                this.success = success;
                this.value = now()
            }
            return ImmediateMeasurement
        }();
        Telemetry.ImmediateMeasurement = ImmediateMeasurement;
        function now() {
            if (Date.now) {
                return Date.now()
            } else {
                return (new Date).getTime()
            }
        }
        function getSendRequest(endpoint) {
            var request = new XMLHttpRequest;
            request.open("POST", endpoint, true);
            request.setRequestHeader("Content-Type", "text/plain");
            return request
        }
        function performanceTimingEnabled() {
            return !!(window.performance && window.performance.timing)
        }
        function performanceNavigationEnabled() {
            return !!(window.performance && window.performance.navigation)
        }
        function performanceEntriesEnabled() {
            return !!window.performance.getEntriesByType
        }
        function getNavigationMeasurements(measurements) {
            if (measurements === void 0) {
                measurements = null
            }
            if (measurements == null) {
                measurements = new Array
            }
            if (performanceTimingEnabled()) {
                var navigationObject = window.performance.timing;
                measurements.push(new Measurement("MsCrmMkt.Navigation.NavigationStart",navigationObject.navigationStart));
                measurements.push(new Measurement("MsCrmMkt.Navigation.RedirectStart",navigationObject.redirectStart));
                measurements.push(new Measurement("MsCrmMkt.Navigation.RedirectEnd",navigationObject.redirectEnd));
                measurements.push(new Measurement("MsCrmMkt.Navigation.FetchStart",navigationObject.fetchStart));
                measurements.push(new Measurement("MsCrmMkt.Navigation.DomainLookupStart",navigationObject.domainLookupStart));
                measurements.push(new Measurement("MsCrmMkt.Navigation.DomainLookupEnd",navigationObject.domainLookupEnd));
                measurements.push(new Measurement("MsCrmMkt.Navigation.ConnectStart",navigationObject.connectStart));
                measurements.push(new Measurement("MsCrmMkt.Navigation.ConnectEnd",navigationObject.connectEnd));
                measurements.push(new Measurement("MsCrmMkt.Navigation.RequestStart",navigationObject.requestStart));
                measurements.push(new Measurement("MsCrmMkt.Navigation.ResponseStart",navigationObject.responseStart));
                measurements.push(new Measurement("MsCrmMkt.Navigation.ResponseEnd",navigationObject.responseEnd));
                measurements.push(new Measurement("MsCrmMkt.Navigation.DOMLoading",navigationObject.domLoading));
                measurements.push(new Measurement("MsCrmMkt.Navigation.DOMInteractive",navigationObject.domInteractive));
                measurements.push(new Measurement("MsCrmMkt.Navigation.DOMComplete",navigationObject.domComplete));
                measurements.push(new Measurement("MsCrmMkt.Navigation.LoadEventStart",navigationObject.loadEventStart));
                measurements.push(new Measurement("MsCrmMkt.Navigation.LoadEventEnd",navigationObject.loadEventEnd))
            }
            return measurements
        }
        function getResourcesMeasurements(measurements) {
            if (measurements === void 0) {
                measurements = null
            }
            if (measurements == null) {
                measurements = new Array
            }
            if (performanceEntriesEnabled() && window.performance.getEntriesByType("resource").length > 0 && window.performance.getEntriesByType("resource")[0]instanceof PerformanceResourceTiming) {
                var resourceEntries = window.performance.getEntriesByType("resource");
                for (var i = 0; i < resourceEntries.length; i++) {
                    var url = resourceEntries[i].name;
                    var measureName = "";
                    if (url.search(/^https?:\/\/.*dynamics\.com\/t\/w/) == 0) {
                        measureName = "MsCrmMkt.Resource.RequestW|" + url.substring(url.search(/\/t\/w/)) + "|"
                    } else if (url.search(/^https?:\/\/.*dynamics\.com\/t\/v/) == 0) {
                        measureName = "MsCrmMkt.Resource.RequestV|" + url.substring(url.search(/\/t\/v/)) + "|"
                    } else if (url.search(/^https?:\/\/.*dynamics\.com\/t\/c/) == 0) {
                        measureName = "MsCrmMkt.Resource.RequestC|" + url.substring(url.search(/\/t\/c/)) + "|"
                    } else if (url.search(/^https?:\/\/.*dynamics\.com\/f\/formpage/) == 0) {
                        measureName = "MsCrmMkt.Resource.RequestF|" + url.substring(url.search(/\/f\/formpage/)) + "|"
                    } else if (url.search(/^https?:\/\/.*js\/loader.js/) == 0 || url.search(/^https?:\/\/.*js\/form\-loader.js/) == 0) {
                        measureName = "MsCrmMkt.Resource.RequestLoader"
                    } else if (url.search(/^https?:\/\/.*js\/captcha.js/) == 0) {
                        measureName = "MsCrmMkt.Resource.CaptchaLoader"
                    }
                    if (measureName != "") {
                        measurements.push(new Measurement(measureName + "Start",resourceEntries[i].startTime));
                        measurements.push(new Measurement(measureName + "End",resourceEntries[i].startTime + resourceEntries[i].duration))
                    }
                }
            }
            return measurements
        }
        function generateUUID() {
            var d = now();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === "x" ? r : r & 3 | 8).toString(16)
            })
        }
        Telemetry.generateUUID = generateUUID
    }
    )(Telemetry = MsCrmMkt.Telemetry || (MsCrmMkt.Telemetry = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var PromiseModule;
(function(PromiseModule) {
    if (typeof ES6Promise !== "undefined") {
        ES6Promise.polyfill()
    }
    var PromiseUtility = function() {
        function PromiseUtility() {}
        PromiseUtility.doWhile = function(condition, promiseProvider) {
            var _this = this;
            return new Promise(function(resolve, reject) {
                _this._loop(resolve, reject, condition, promiseProvider)
            }
            )
        }
        ;
        PromiseUtility._loop = function(resolve, reject, condition, promiseProvider) {
            var _this = this;
            if (condition()) {
                promiseProvider().then(function() {
                    return _this._loop(resolve, reject, condition, promiseProvider)
                }).catch(reject)
            } else {
                resolve()
            }
        }
        ;
        return PromiseUtility
    }();
    PromiseModule.PromiseUtility = PromiseUtility
}
)(PromiseModule || (PromiseModule = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var correlationUrlPath = "c";
    var correlationWithoutWebsiteUrlPath = "cc";
    var correlationMessage = "getCid";
    var correlationRenewMessage = "renewCid";
    var correlationRenewingTimeoutBufferSeconds = 60;
    var correlationExpirationTimeInMs = 36e5;
    var CorrelationHandler = function() {
        function CorrelationHandler() {}
        CorrelationHandler.prototype.uuidv4 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0
                  , v = c == "x" ? r : r & 3 | 8;
                return v.toString(16)
            })
        }
        ;
        CorrelationHandler.prototype.establishCorrelation = function(config, websiteVisitedQueryParams, correlationTimeout) {
            var visitorCookie = null;
            var sessionCookie = null;
            if (config && !config.DoNotTrack && !config.Anonymize) {
                var cookieManager = new MsCrmMkt.CookieManager(document,window);
                var cookiePrefix = config.CookieName;
                var maxAge = 60 * 60 * 24 * 730;
                visitorCookie = cookieManager.getOrGenerateCookie(cookiePrefix, maxAge);
                sessionCookie = cookieManager.getOrGenerateCookie(cookiePrefix + "s")
            }
            return this.establishCorrelationInternal(config, websiteVisitedQueryParams, visitorCookie, sessionCookie, correlationTimeout)
        }
        ;
        CorrelationHandler.prototype.establishCorrelationInternal = function(config, websiteVisitedQueryParams, visitorCookie, sessionCookie, correlationTimeout) {
            var _this = this;
            var baseUrl = "https://" + config.HostName + "/t";
            var queryParameters = "";
            if (websiteVisitedQueryParams && websiteVisitedQueryParams.length !== 0 && !config.DoNotTrack) {
                queryParameters += "?trackwebsitevisited=true&" + websiteVisitedQueryParams;
                if (queryParameters.indexOf("&id=") < 0) {
                    queryParameters += "&id=" + Math.floor(Math.random() * 9999999999)
                }
            }
            var forms = MsCrmMkt.FormUtility.getAllForms().map(function(f) {
                return f.FormPageId
            });
            if (forms.length !== 0) {
                var prefix = queryParameters.length === 0 ? "?" : "&";
                queryParameters += prefix + "formPageIds=" + forms.join(",")
            }
            this.frame = document.createElement("iframe");
            this.frame.style.display = "none";
            this.frame.src = this.buildUrl(baseUrl, config.WebsiteId, config.Anonymize, config.DoNotTrack, visitorCookie, sessionCookie) + queryParameters;
            var a = document.createElement("a");
            a.href = this.frame.src;
            this.frameOrigin = a.protocol + "//" + a.hostname;
            this.token = this.uuidv4();
            this.frame.onload = function() {
                _this.frame.contentWindow.postMessage({
                    msg: correlationMessage,
                    token: _this.token
                }, _this.frameOrigin)
            }
            ;
            return new ES6Promise.Promise(function(resolve, reject) {
                _this.frame.onerror = function() {
                    if (typeof _this.onCorrelationFailed === "function") {
                        _this.onCorrelationFailed(config.WebsiteId)
                    }
                    reject()
                }
                ;
                _this.receiveMessageListener = function(event) {
                    _this.receiveMessage(event, config.WebsiteId, resolve, reject)
                }
                ;
                window.addEventListener("message", _this.receiveMessageListener, false);
                document.body.appendChild(_this.frame);
                if (typeof correlationTimeout === "number" && !isNaN(correlationTimeout)) {
                    setTimeout(reject, correlationTimeout)
                }
            }
            )
        }
        ;
        CorrelationHandler.prototype.receiveMessage = function(event, websiteId, resolve, reject) {
            if (event.origin !== this.frameOrigin) {
                return
            }
            if (event.data.token && event.data.token !== this.token) {
                return
            }
            switch (event.data.msg) {
            case "cid":
                this.handleCorrelationResponseMessage(websiteId, event.data);
                resolve();
                break;
            case "renewedCid":
                this.handleCorrelationRenewedMessage(event.data);
                break;
            case "noaccess":
                if (typeof this.onCorrelationFailed === "function") {
                    this.onCorrelationFailed(null)
                }
                reject();
                break
            }
        }
        ;
        CorrelationHandler.prototype.handleCorrelationResponseMessage = function(websiteId, correlationResponse) {
            this.onCorrelationRenewedInternal();
            if (typeof this.onCorrelationEstablished === "function") {
                var correlationId = correlationResponse.renewableCorrelationId ? correlationResponse.renewableCorrelationId : correlationResponse.data;
                this.onCorrelationEstablished(websiteId, correlationId, correlationResponse.captureForms, correlationResponse.forms, correlationResponse.activityId)
            }
            if (typeof this.onCorrelationRenewed === "function" && correlationResponse.renewableCorrelationLifeSpanSeconds) {
                this.lastCorrelationId = correlationResponse.renewableCorrelationId;
                this.renewableCorrelationLifeSpanSeconds = correlationResponse.renewableCorrelationLifeSpanSeconds;
                this.scheduleCorrelationRenewing()
            }
        }
        ;
        CorrelationHandler.prototype.handleCorrelationRenewedMessage = function(correlationResponse) {
            this.lastCorrelationId = correlationResponse.data.CorrelationId;
            this.onCorrelationRenewedInternal();
            this.onCorrelationRenewed(this.lastCorrelationId);
            this.scheduleCorrelationRenewing()
        }
        ;
        CorrelationHandler.prototype.onCorrelationRenewedInternal = function() {
            var _this = this;
            this.correlationRenewedDate = new Date;
            if (typeof this.correlationExpirationTimer === "undefined") {
                this.correlationExpirationTimer = setInterval(function() {
                    if ((new Date).getTime() - _this.correlationRenewedDate.getTime() > correlationExpirationTimeInMs) {
                        clearInterval(_this.correlationExpirationTimer);
                        _this.onCorrelationExpired()
                    }
                }, 6e4)
            }
        }
        ;
        CorrelationHandler.prototype.scheduleCorrelationRenewing = function() {
            var _this = this;
            this.correlationRenewingTimer = setTimeout(function() {
                _this.frame.contentWindow.postMessage({
                    msg: correlationRenewMessage,
                    correlationId: _this.lastCorrelationId,
                    token: _this.token
                }, _this.frameOrigin)
            }, (this.renewableCorrelationLifeSpanSeconds - correlationRenewingTimeoutBufferSeconds) * 1e3)
        }
        ;
        CorrelationHandler.prototype.buildUrl = function(baseUrl, id, anonymize, doNotTrack, visitor, session) {
            var trackingMode = "";
            if (anonymize) {
                trackingMode = "/anon"
            }
            if (doNotTrack) {
                trackingMode = "/notr"
            }
            if (typeof id === "undefined" || id == null) {
                return __spreadArrays([baseUrl, correlationWithoutWebsiteUrlPath + trackingMode], visitor && session ? [visitor, session] : []).join("/")
            }
            return __spreadArrays([baseUrl, correlationUrlPath + trackingMode, id], visitor && session ? [visitor, session] : []).join("/")
        }
        ;
        CorrelationHandler.prototype.dispose = function() {
            if (!this.frame) {
                return
            }
            if (!!this.correlationRenewingTimer) {
                clearTimeout(this.correlationRenewingTimer)
            }
            window.removeEventListener("message", this.receiveMessageListener);
            this.receiveMessageListener = null;
            this.frame.parentNode.removeChild(this.frame)
        }
        ;
        return CorrelationHandler
    }();
    MsCrmMkt.CorrelationHandler = CorrelationHandler
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var FormCaptureSendingQueue = function() {
        function FormCaptureSendingQueue() {
            this.queue = []
        }
        FormCaptureSendingQueue.prototype.setSendingCallback = function(sendingCallback) {
            if (this.sendingCallback) {
                return
            }
            this.sendingCallback = sendingCallback;
            this.queue.forEach(function(e) {
                return ES6Promise.Promise.resolve(e).then(function(e) {
                    return sendingCallback(e.form)
                }).then(function(value) {
                    return e.resolve(value)
                }, function(error) {
                    return e.reject(error)
                })
            })
        }
        ;
        FormCaptureSendingQueue.prototype.enqueue = function(form) {
            var _this = this;
            if (this.sendingCallback) {
                return new ES6Promise.Promise(function(resolve, reject) {
                    try {
                        resolve(_this.sendingCallback(form))
                    } catch (e) {
                        reject(e)
                    }
                }
                )
            }
            return new ES6Promise.Promise(function(resolve, reject) {
                _this.queue.push({
                    form: form,
                    resolve: resolve,
                    reject: reject
                })
            }
            )
        }
        ;
        return FormCaptureSendingQueue
    }();
    MsCrmMkt.FormCaptureSendingQueue = FormCaptureSendingQueue
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var formLoaderClassName = "formLoader";
    MsCrmMkt.formAlreadyLoaded = false;
    var FormLoaderInternal = function() {
        function FormLoaderInternal(formsServiceBaseUrl, localizationProvider, logger, telemetryObject) {
            this.formsServiceBaseUrl = formsServiceBaseUrl;
            this.localizationProvider = localizationProvider;
            this.logger = logger;
            this.telemetryObject = telemetryObject;
            this.measurements = [];
            this.scriptLoader = new MsCrmMkt.ScriptLoader;
            this.lookupUtility = new MsCrmMkt.Lookups.LookupUtility(logger,localizationProvider,function() {
                return MsCrmMkt.MsCrmFormLoader.uiLanguage
            }
            );
            this.dialogProvider = new MsCrmMkt.DialogProvider(localizationProvider,function() {
                return MsCrmMkt.MsCrmFormLoader.uiLanguage
            }
            );
            this.validation = new MsCrmMkt.MsCrmFormValidation(logger,localizationProvider,function() {
                return MsCrmMkt.MsCrmFormLoader.uiLanguage
            }
            ,this.lookupUtility);
            this.hierarchies = new MsCrmMkt.Hierarchy.FieldHierarchies(logger,localizationProvider,function() {
                return MsCrmMkt.MsCrmFormLoader.uiLanguage
            }
            )
        }
        FormLoaderInternal.prototype.trigger = function(formEvent) {
            FormLoaderInternal.trigger(formEvent, this.logger)
        }
        ;
        FormLoaderInternal.triggerCallbacks = function(event, callbacks, logger) {
            if (!callbacks || callbacks.length === 0) {
                return
            }
            var clone = callbacks.slice(0);
            for (var _i = 0, clone_1 = clone; _i < clone_1.length; _i++) {
                var callback = clone_1[_i];
                try {
                    callback(event)
                } catch (e) {
                    logger.error(e)
                }
            }
        }
        ;
        FormLoaderInternal.trigger = function(formEvent, logger) {
            FormLoaderInternal.triggerCallbacks(formEvent, FormLoaderInternal.callbacks[formEvent.getType()], logger);
            try {
                switch (formEvent.getType()) {
                case "afterFormLoad":
                    MsCrmMkt.MsCrmFormLoader.afterformload(formEvent.getFormPageId(), formEvent);
                    break;
                case "afterFormRender":
                    MsCrmMkt.MsCrmFormLoader.afterformrender(formEvent.getFormPageId(), formEvent);
                    break;
                case "afterFormSubmit":
                    MsCrmMkt.MsCrmFormLoader.afterformsubmit(formEvent.getFormPageId(), formEvent);
                    break;
                case "formLoad":
                    MsCrmMkt.MsCrmFormLoader.onformload(formEvent.getFormPageId(), formEvent);
                    break;
                case "formRender":
                    MsCrmMkt.MsCrmFormLoader.onformrender(formEvent.getFormPageId(), formEvent);
                    break;
                case "formSubmit":
                    MsCrmMkt.MsCrmFormLoader.onformsubmit(formEvent.getFormPageId(), formEvent);
                    break
                }
            } catch (e) {
                logger.error(e)
            }
        }
        ;
        FormLoaderInternal.on = function(eventType, callback) {
            if (!this.callbacks[eventType]) {
                this.callbacks[eventType] = [callback]
            } else {
                this.callbacks[eventType].push(callback)
            }
        }
        ;
        FormLoaderInternal.off = function(eventType) {
            if (typeof eventType === "undefined") {
                this.callbacks = {};
                return
            }
            this.callbacks[eventType] = []
        }
        ;
        FormLoaderInternal.sendFormCaptureToCrm = function(form) {
            return FormLoaderInternal.formCaptureSendingQueue.enqueue(form)
        }
        ;
        Object.defineProperty(FormLoaderInternal, "uiLanguage", {
            get: function() {
                return FormLoaderInternal._uiLanguage || navigator.language
            },
            set: function(value) {
                FormLoaderInternal._uiLanguage = value
            },
            enumerable: true,
            configurable: true
        });
        FormLoaderInternal.fillLookupFromSearch = function(lookupFieldId, searchTerm) {
            return MsCrmMkt.Lookups.LookupUtility.fillLookupFromSearch(lookupFieldId, searchTerm)
        }
        ;
        FormLoaderInternal.prototype.measuredCall = function(call, name) {
            this.measurements.push(new MsCrmMkt.Telemetry.ImmediateMeasurement(name + "Start"));
            try {
                call()
            } catch (e) {
                this.measurements.push(new MsCrmMkt.Telemetry.ImmediateMeasurement(name + "End",false));
                throw e
            }
            this.measurements.push(new MsCrmMkt.Telemetry.ImmediateMeasurement(name + "End",true))
        }
        ;
        FormLoaderInternal.prototype.safeCall = function(call) {
            try {
                call()
            } catch (e) {
                this.logger.error(e)
            }
        }
        ;
        FormLoaderInternal.prototype.load = function(correlationId, forms) {
            var _this = this;
            this.correlationId = correlationId;
            this.knownForms = forms;
            MsCrmMkt.CssProvider.ensureDefaultStyles();
            return new ES6Promise.Promise(function(resolve, reject) {
                var promises = MsCrmMkt.FormUtility.getAllForms().map(function(f) {
                    return _this.loadForm(f)
                });
                ES6Promise.Promise.all(promises).then(function() {
                    _this.sendMeasurementLogs(true);
                    resolve()
                }, function() {
                    _this.sendMeasurementLogs(false);
                    reject()
                })
            }
            )
        }
        ;
        FormLoaderInternal.prototype.isFormLoaded = function(formPlaceholder) {
            if (formPlaceholder.querySelector("form")) {
                return true
            }
            return false
        }
        ;
        FormLoaderInternal.prototype.removeAllErrorMessages = function(form) {
            var _this = this;
            form.FormPlaceholders.forEach(function(formPlaceholder) {
                _this.dialogProvider.removeAllErrorMessages(formPlaceholder.element)
            })
        }
        ;
        FormLoaderInternal.prototype.showErrorMessage = function(message, link, linkMessage, formPlaceholder, containerHeight, containerWidth, dialogButton, linkCssClass) {
            if (this.dialogProvider.isAnyErrorMessageShown(formPlaceholder)) {
                return
            }
            this.dialogProvider.showErrorMessage(message, link, linkMessage, linkCssClass, formPlaceholder, containerHeight, containerWidth, dialogButton)
        }
        ;
        Object.defineProperty(FormLoaderInternal.prototype, "correlationId", {
            get: function() {
                return this._correlationId
            },
            set: function(correlationId) {
                this._correlationId = correlationId
            },
            enumerable: true,
            configurable: true
        });
        FormLoaderInternal.prototype.clientApiCallback = function(form, name, callback) {
            var _this = this;
            this.measuredCall(function() {
                return form.FormPlaceholders.forEach(function(placeholder) {
                    _this.safeCall(function() {
                        return callback(form.FormPageId, placeholder)
                    })
                })
            }, name)
        }
        ;
        FormLoaderInternal.prototype.setCorrelationEstablishmentStarted = function() {
            var _this = this;
            MsCrmMkt.CssProvider.ensureDefaultStyles();
            MsCrmMkt.FormUtility.getAllForms().forEach(function(form) {
                if (!form.FormPlaceholders[0].isCorrelationEstablishing) {
                    form.FormPlaceholders[0].isCorrelationEstablishing = true;
                    _this.setFormLoadingStarted(form)
                }
            })
        }
        ;
        FormLoaderInternal.prototype.setCorrelationEstablishmentFailed = function() {
            var _this = this;
            MsCrmMkt.FormUtility.getAllForms().forEach(function(form) {
                _this.removeLoaders(form)
            })
        }
        ;
        FormLoaderInternal.prototype.setFormLoadingStarted = function(form) {
            var _this = this;
            this.measuredCall(function() {
                form.FormPlaceholders.forEach(function(formPlaceholder) {
                    var formLoadEvent = new MsCrmMkt.FormLoadEvent(form.FormPageId,formPlaceholder.element);
                    _this.trigger(formLoadEvent);
                    if (!formLoadEvent.formLoadingProgressBarPrevented) {
                        _this.addLoader(formPlaceholder)
                    }
                    if (formLoadEvent.notificationFunction && typeof formLoadEvent.notificationFunction === "function") {
                        formPlaceholder.element.msdyncrm_notification = formLoadEvent.notificationFunction
                    }
                })
            }, "MsCrmMkt.OnFormLoad_" + form.FormPageId);
            this.measurements.push(new MsCrmMkt.Telemetry.ImmediateMeasurement("MsCrmMkt.LoadForm_" + form.FormPageId + "_Start",true))
        }
        ;
        FormLoaderInternal.prototype.loadForm = function(form) {
            var _this = this;
            return new ES6Promise.Promise(function(resolve, reject) {
                if (form.FormPlaceholders[0].isLoading) {
                    resolve();
                    return
                }
                form.FormPlaceholders.forEach(function(placeholder) {
                    return placeholder.isLoading = true
                });
                var formLoadFinished = function(success) {
                    _this.removeLoaders(form);
                    _this.measurements.push(new MsCrmMkt.Telemetry.ImmediateMeasurement("MsCrmMkt.LoadForm_" + form.FormPageId + "_End",success))
                };
                var onLoadSuccess = function(data) {
                    formLoadFinished(true);
                    _this.removeAllErrorMessages(form);
                    try {
                        _this.processForm(form, data)
                    } catch (e) {
                        reject();
                        return
                    }
                    resolve()
                };
                if (_this.knownForms && _this.knownForms[form.FormPageId]) {
                    onLoadSuccess(_this.knownForms[form.FormPageId]);
                    return
                }
                _this.getForm(form.FormPageId).then(function(data) {
                    onLoadSuccess(data)
                }, function() {
                    formLoadFinished(false);
                    reject()
                })
            }
            )
        }
        ;
        FormLoaderInternal.prototype.sendMeasurementLogs = function(sucess) {
            if (this.telemetryObject) {
                var finishedLoadingMeasurement = new MsCrmMkt.Telemetry.ImmediateMeasurement("MsCrmMkt.LoadedAllForms",sucess);
                this.measurements.push(finishedLoadingMeasurement);
                this.telemetryObject.sendMeasurements(this.measurements)
            }
        }
        ;
        FormLoaderInternal.prototype.onFormRender = function(form) {
            var _this = this;
            this.clientApiCallback(form, "MsCrmMkt.OnFormRender_" + form.FormPageId + "_", function(formPageId, formPlaceholder) {
                return _this.trigger(new MsCrmMkt.FormEvent("formRender",formPageId,formPlaceholder.element))
            })
        }
        ;
        FormLoaderInternal.prototype.renderFormAndAttachHandlers = function(form, formData, prefillData) {
            var _this = this;
            if (formData) {
                var formHtmlContent = formData.FormRendering;
                this.renderForms(form, formHtmlContent);
                if (prefillData) {
                    this.measuredCall(function() {
                        return _this.prefillData(form, prefillData)
                    }, "MsCrmMkt.PrefillForm_" + form.FormPageId + "_")
                }
                if (formData.ContainsCaptcha) {
                    this.measuredCall(function() {
                        return _this.renderCaptcha(formData.HipUrl, formData.FlowId)
                    }, "MsCrmMkt.RenderCaptcha_" + form.FormPageId + "_")
                }
            }
            this.clientApiCallback(form, "MsCrmMkt.AfterFormRender_" + form.FormPageId + "_", function(formPageId, formPlaceholder) {
                return _this.trigger(new MsCrmMkt.FormEvent("afterFormRender",formPageId,formPlaceholder.element))
            });
            if (formData) {
                var formControlsMapping = [];
                if (formData.FormControlsMappings) {
                    formControlsMapping = formData.FormControlsMappings
                }
                this.attachSubmitHandlers(form, formControlsMapping, formData.ContainsCaptcha);
                this.validation.attachValidationHandlers(form);
                this.attachLookupsAutosuggest(form);
                this.hierarchies.setup(form, formControlsMapping)
            }
        }
        ;
        FormLoaderInternal.prototype.processForm = function(form, parsedResponse) {
            var _this = this;
            this.onFormRender(form);
            var formData = parsedResponse.Form || parsedResponse.FormContactMissing;
            if (formData) {
                var metadata_1 = {
                    ErrorMessage: formData.ErrorMessage,
                    SuccessImageUrl: formData.SuccessImageUrl,
                    ErrorImageUrl: formData.ErrorImageUrl
                };
                form.FormPlaceholders.forEach(function(placeholder) {
                    return placeholder.metadata = metadata_1
                })
            }
            if (!formData || parsedResponse.ErrorCode === FormLoaderInternal.formLoadResponseContactMissing) {
                form.FormPlaceholders.forEach(function(placeholder) {
                    return _this.showFormLoadingError(form, parsedResponse.ErrorCode, placeholder, parsedResponse)
                })
            }
            if (parsedResponse.ErrorCode === FormLoaderInternal.formLoadResponseContactMissing) {
                formData = null
            }
            this.renderFormAndAttachHandlers(form, formData, parsedResponse.PrefillData);
            this.clientApiCallback(form, "MsCrmMkt.AfterFormLoad_" + form.FormPageId + "_", function(formPageId, formPlaceholder) {
                return _this.trigger(new MsCrmMkt.FormEvent("afterFormLoad",formPageId,formPlaceholder.element))
            })
        }
        ;
        FormLoaderInternal.prototype.addLoader = function(formPlaceholder) {
            var formLoaderDiv = document.createElement("div");
            formLoaderDiv.className = formLoaderClassName;
            formPlaceholder.element.appendChild(formLoaderDiv)
        }
        ;
        FormLoaderInternal.prototype.removeLoader = function(formPlaceholder) {
            var formLoaders = formPlaceholder.element.getElementsByClassName(formLoaderClassName);
            for (var i = formLoaders.length - 1; i >= 0; --i) {
                formLoaders[i].parentNode.removeChild(formLoaders[i])
            }
        }
        ;
        FormLoaderInternal.prototype.removeLoaders = function(form) {
            var _this = this;
            form.FormPlaceholders.forEach(function(placeholder) {
                _this.removeLoader(placeholder)
            })
        }
        ;
        FormLoaderInternal.prototype.setupForceLoadButton = function(form, parsedResponse) {
            var _this = this;
            if (!parsedResponse.FormContactMissing) {
                return
            }
            var callback = function() {
                _this.removeAllErrorMessages(form);
                _this.onFormRender(form);
                _this.renderFormAndAttachHandlers(form, parsedResponse.FormContactMissing, parsedResponse.PrefillData)
            };
            var label = this.localizationProvider.getMessageForLanguage("ForceRenderForm", MsCrmMkt.MsCrmFormLoader.uiLanguage);
            return new MsCrmMkt.DialogButton(label,callback)
        }
        ;
        FormLoaderInternal.prototype.showFormLoadingError = function(form, errorCode, formPlaceholder, parsedResponse) {
            if (!errorCode) {
                errorCode = "FormNotFound"
            }
            var localizationKey;
            var dialogButton = null;
            switch (errorCode) {
            case "EventFormWithoutRegistration":
                localizationKey = "EventFormWithoutRegistration";
                break;
            case "TooManyRequests":
                localizationKey = "TooManyRequests";
                break;
            case FormLoaderInternal.formLoadResponseContactMissing:
                localizationKey = "ContactMissing";
                dialogButton = this.setupForceLoadButton(form, parsedResponse);
                break;
            default:
                localizationKey = "MissingFormPage";
                break
            }
            var messageFormat = this.localizationProvider.getMessageForLanguage(localizationKey, MsCrmMkt.MsCrmFormLoader.uiLanguage);
            var messageLink = this.localizationProvider.getMessageForLanguage("Reload", MsCrmMkt.MsCrmFormLoader.uiLanguage);
            if (messageFormat && !this.isFormLoaded(formPlaceholder.element)) {
                this.showErrorMessage(messageFormat.replace("{FormPageId}", form.FormPageId), window.location.href, messageLink, formPlaceholder.element, 400, 400, dialogButton, "reloadButtonStyle")
            }
        }
        ;
        FormLoaderInternal.prototype.renderForms = function(form, formHtmlContent) {
            var _this = this;
            form.FormPlaceholders.forEach(function(placeholder) {
                var formFragment = _this.createFormDocumentFragment(formHtmlContent);
                _this.addControlsPrefix(formFragment, placeholder.controlIdPrefix);
                var lastChild = placeholder.element.lastChild;
                placeholder.element.appendChild(formFragment);
                _this.reinjectScripts(!lastChild ? placeholder.element.firstChild : lastChild.nextSibling);
                _this.modernizeIfNeeded(placeholder.element)
            })
        }
        ;
        FormLoaderInternal.prototype.reinjectScripts = function(start) {
            var _loop_1 = function(inserted) {
                if (inserted.nodeName && inserted.nodeName.toUpperCase() === "SCRIPT") {
                    var script_1 = inserted.ownerDocument.createElement("script");
                    [].forEach.call(inserted.attributes, function(attr) {
                        script_1.setAttribute(attr.nodeName, attr.nodeValue)
                    });
                    [].forEach.call(inserted.childNodes, function(n) {
                        return script_1.appendChild(n)
                    });
                    inserted.parentNode.insertBefore(script_1, inserted);
                    inserted.parentNode.removeChild(inserted)
                } else if (inserted.nodeType === inserted.ELEMENT_NODE) {
                    this_1.reinjectScripts(inserted.firstChild)
                }
            };
            var this_1 = this;
            for (var inserted = start; !!inserted; inserted = inserted.nextSibling) {
                _loop_1(inserted)
            }
        }
        ;
        FormLoaderInternal.prototype.modernizeIfNeeded = function(placeholder) {
            var _this = this;
            var dateElements = placeholder.querySelectorAll("input[type='date']");
            var dateTimeElements = placeholder.querySelectorAll("input[type='datetime-local']");
            if (dateElements.length === 0 && dateTimeElements.length === 0) {
                return
            }
            this.scriptLoader.ensureModernizr().then(function() {
                if (!Modernizr.inputtypes.date) {
                    _this.scriptLoader.ensureJqueryUI().then(function() {
                        for (var i = 0; i < dateElements.length; i++) {
                            dateElements[i].pattern = MsCrmMkt.MsCrmFormValidation.defaultDatePattern;
                            dateElements[i].placeholder = FormLoaderInternal.defaultDatePlaceholder;
                            $(dateElements[i]).datepicker({
                                dateFormat: FormLoaderInternal.defaultDateFormat
                            })
                        }
                    })
                }
                var ua = window.navigator.userAgent;
                var isFirefoxDesktop = /Firefox/i.test(ua) && !/Android/i.test(ua);
                if (!Modernizr.inputtypes["datetime-local"] || isFirefoxDesktop) {
                    _this.scriptLoader.ensureJqueryUITimer().then(function() {
                        for (var i = 0; i < dateTimeElements.length; i++) {
                            if (isFirefoxDesktop) {
                                dateTimeElements[i].type = "text"
                            }
                            dateTimeElements[i].pattern = MsCrmMkt.MsCrmFormValidation.modernizrDatetimePattern;
                            dateTimeElements[i].placeholder = FormLoaderInternal.defaultDatetimePlaceholder;
                            $(dateTimeElements[i]).datetimepicker({
                                dateFormat: FormLoaderInternal.defaultDateFormat
                            })
                        }
                    })
                }
            })
        }
        ;
        FormLoaderInternal.isTextDatetimeField = function(inputField) {
            var pattern = inputField.attributes["pattern"] ? inputField.attributes["pattern"].value : undefined;
            return inputField.type === "text" && (pattern === MsCrmMkt.MsCrmFormValidation.defaultDatetimePattern || pattern === MsCrmMkt.MsCrmFormValidation.modernizrDatetimePattern)
        }
        ;
        FormLoaderInternal.isTextDateField = function(inputField) {
            var pattern = inputField.attributes["pattern"] ? inputField.attributes["pattern"].value : undefined;
            return inputField.type === "text" && pattern === MsCrmMkt.MsCrmFormValidation.defaultDatePattern
        }
        ;
        FormLoaderInternal.prototype.prefillData = function(form, prefillData) {
            var _this = this;
            if (!prefillData) {
                return
            }
            var _loop_2 = function(i) {
                var currentItem = prefillData[i];
                if (!currentItem || !currentItem.Key) {
                    return "continue"
                }
                form.FormPlaceholders.forEach(function(placeholder) {
                    var elements = placeholder.element.querySelectorAll('[name="' + currentItem.Key + '"]');
                    if (!elements || elements.length === 0) {
                        return
                    }
                    for (var j = 0; j < elements.length; j++) {
                        var element = elements[j];
                        if (element.nodeName === "INPUT" && element.type === "checkbox") {
                            element.checked = false
                        }
                    }
                    var value = currentItem.Value;
                    var parsedOptions;
                    for (var j = 0; j < elements.length; j++) {
                        var element = elements[j];
                        var nodeName = element.nodeName;
                        var originalInputType = element.attributes["type"] ? element.attributes["type"].value : undefined;
                        if (nodeName === "INPUT") {
                            var input = element;
                            if (input.type === "checkbox") {
                                if (MsCrmMkt.FormHelper.isCheckboxListItem(input) && value) {
                                    if (!parsedOptions) {
                                        parsedOptions = FormLoaderInternal.parsePrefillOptions(value)
                                    }
                                    if (parsedOptions[input.getAttribute("value")]) {
                                        input.checked = true
                                    }
                                } else if (value) {
                                    if (value.toUpperCase() === "TRUE") {
                                        input.checked = true
                                    }
                                }
                                continue
                            }
                            if (input.type === "radio") {
                                var crmValue = _this.mapToCrmValue(value);
                                input.checked = input.value === crmValue;
                                continue
                            }
                            if (originalInputType === "datetime-local") {
                                if (input.type === "datetime-local" || FormLoaderInternal.isTextDatetimeField(input)) {
                                    var localDateTime = new Date(value);
                                    var timezoneOffset = (new Date).getTimezoneOffset() * 6e4;
                                    var localISODateTime = new Date(localDateTime.getTime() - timezoneOffset).toISOString().slice(0, -8);
                                    input.value = localISODateTime
                                }
                                continue
                            }
                            if (originalInputType === "date") {
                                if (input.type === "date" || FormLoaderInternal.isTextDateField(input)) {
                                    var localDate = new Date(value);
                                    var isoDate = localDate.toISOString().split("T")[0];
                                    input.value = isoDate
                                }
                                continue
                            }
                            if (input.type === "button" || input.type === "submit" || input.type === "reset") {
                                continue
                            }
                            var list = input.getAttribute("list");
                            if (list && list.length) {
                                _this.lookupUtility.prefill(input, value);
                                continue
                            }
                            input.value = value;
                            continue
                        }
                        if (nodeName === "SELECT") {
                            var select = element;
                            if (select.type === "select-one") {
                                for (var k = 0; k < select.options.length; k++) {
                                    var option = select.options.item(k);
                                    var crmValue = _this.mapToCrmValue(value);
                                    option.selected = option.value === crmValue
                                }
                            }
                            continue
                        }
                        if (nodeName === "TEXTAREA") {
                            element.value = value;
                            continue
                        }
                    }
                })
            };
            for (var i = 0; i < prefillData.length; i++) {
                _loop_2(i)
            }
        }
        ;
        FormLoaderInternal.parsePrefillOptions = function(value) {
            var checkboxListDict = {};
            var inputValues = value.split(",");
            for (var i = 0; i < inputValues.length; i++) {
                checkboxListDict[inputValues[i]] = true
            }
            return checkboxListDict
        }
        ;
        FormLoaderInternal.prototype.mapToCrmValue = function(value) {
            var twoOptionsFlag = value === "True" || value === "False";
            if (!twoOptionsFlag) {
                return value
            }
            return value === "True" ? "1" : "0"
        }
        ;
        FormLoaderInternal.prototype.createFormDocumentFragment = function(formHtmlContent) {
            var result = document.createDocumentFragment();
            var hostElement = document.createElement("div");
            if (formHtmlContent) {
                hostElement.insertAdjacentHTML("beforeend", formHtmlContent)
            }
            while (hostElement.hasChildNodes()) {
                result.appendChild(hostElement.firstChild)
            }
            return result
        }
        ;
        FormLoaderInternal.prototype.addControlsPrefix = function(node, controlIdPrefix) {
            if (!controlIdPrefix || controlIdPrefix.trim().length === 0) {
                return
            }
            var labels = node.querySelectorAll("label[for]");
            var newIds = {};
            var _loop_3 = function(i) {
                var label = labels[i];
                var controlId = label.getAttribute("for");
                if (newIds[controlId]) {
                    return "continue"
                }
                var control = node.querySelector("[id='" + controlId + "']");
                if (control && control.tagName !== "DATALIST") {
                    var newId_1 = controlIdPrefix + control.id;
                    newIds[newId_1] = true;
                    control.id = newId_1;
                    var allLabels = node.querySelectorAll("label[for='" + controlId + "']");
                    [].forEach.call(allLabels, function(l) {
                        return l.setAttribute("for", newId_1)
                    });
                    var list = control.getAttribute("list");
                    if (list && list.length) {
                        var listElement = node.querySelector("datalist[id=" + list + "]");
                        if (listElement) {
                            var newListId = controlIdPrefix + listElement.id;
                            listElement.id = newListId;
                            control.setAttribute("list", newListId)
                        }
                    }
                }
            };
            for (var i = 0; i < labels.length; i++) {
                _loop_3(i)
            }
        }
        ;
        FormLoaderInternal.prototype.renderCaptcha = function(hipUrl, flowId) {
            if (!hipUrl || !flowId) {
                return
            }
            var scriptHolder = document.getElementById("ms_captcha_scriptholder");
            if (scriptHolder == null) {
                return
            }
            WLSPHIP0.error = 0;
            var renderScript = document.createElement("script");
            renderScript.src = hipUrl;
            scriptHolder.insertBefore(renderScript, scriptHolder.firstChild);
            var captchaFlowId = document.getElementById("ms_captcha_flow_id");
            if (captchaFlowId != null) {
                captchaFlowId.value = flowId
            }
        }
        ;
        FormLoaderInternal.setSubmitButtonsDisabled = function(form, disabled) {
            Array.prototype.forEach.call(form.querySelectorAll("[type='submit']"), function(button) {
                button.disabled = disabled
            })
        }
        ;
        FormLoaderInternal.prototype.attachSubmitHandlers = function(form, formControlMapping, containsCaptcha) {
            var _this = this;
            form.FormPlaceholders.forEach(function(placeholder) {
                var allForms = placeholder.element.querySelectorAll("FORM");
                var _loop_4 = function(i) {
                    var currentForm = allForms[i];
                    currentForm.onsubmit = function(e) {
                        e.preventDefault();
                        var formSubmitEvent = new MsCrmMkt.FormSubmitEvent(form.FormPageId,placeholder.element);
                        _this.trigger(formSubmitEvent);
                        if (formSubmitEvent.defaultPrevented) {
                            return
                        }
                        if (containsCaptcha) {
                            WLSPHIP0.verify(function(solution, token, param) {
                                return WLSPHIP0.verifyCallback(solution, token, param)
                            }, "");
                            if (WLSPHIP0.error !== 0) {
                                WLSPHIP0.reloadCaptchaAndShowError();
                                return
                            }
                        }
                        if (!_this.forwardToFriendValid(currentForm, formControlMapping)) {
                            _this.onFormSubmittedFeedback(placeholder, currentForm, form.FormPageId, placeholder.metadata.ErrorMessage, true, "formSubmit")
                        }
                        FormLoaderInternal.setSubmitButtonsDisabled(currentForm, true);
                        _this.serializeAndPostForm(currentForm, form.FormPageId, formSubmitEvent.extraValues).then(function(responseText) {
                            _this.onFormSubmitted(placeholder, form.FormPageId, responseText, currentForm)
                        }, function() {
                            _this.onFormSubmittedFeedback(placeholder, currentForm, form.FormPageId, placeholder.metadata.ErrorMessage, true, "afterFormSubmit")
                        })
                    }
                };
                for (var i = 0; i < allForms.length; i++) {
                    _loop_4(i)
                }
            })
        }
        ;
        FormLoaderInternal.prototype.redirectTo = function(redirectUrl) {
            var servicesLocation = document.createElement("a");
            servicesLocation.href = this.formsServiceBaseUrl;
            if (window.location.hostname === servicesLocation.hostname && window.location.pathname.indexOf("/t/formsandbox") === 0) {
                window.parent.location.href = redirectUrl
            } else {
                window.location.href = redirectUrl
            }
        }
        ;
        FormLoaderInternal.prototype.forwardToFriendValid = function(currentForm, formControlMapping) {
            if (!formControlMapping) {
                return true
            }
            var f2fTools = formControlMapping.filter(function(c) {
                return c.Type === "forwardToFriend" && c.FormControlId
            });
            if (!f2fTools.length) {
                return true
            }
            for (var _i = 0, f2fTools_1 = f2fTools; _i < f2fTools_1.length; _i++) {
                var f2fTool = f2fTools_1[_i];
                var f2fToolElements = currentForm.querySelectorAll("[name=" + f2fTool.FormControlId + "]");
                for (var i = 0; i < f2fToolElements.length; i++) {
                    var f2fToolElementInputs = f2fToolElements[i].querySelectorAll("input[name=f2f_email]");
                    for (var j = 0; j < f2fToolElementInputs.length; j++) {
                        var value = f2fToolElementInputs[j].value;
                        if (value && value.length) {
                            return true
                        }
                    }
                }
            }
            return false
        }
        ;
        FormLoaderInternal.prototype.attachLookupsAutosuggest = function(form) {
            var _this = this;
            var serviceFabricBaseUrl = this.formsServiceBaseUrl.substring(0, this.formsServiceBaseUrl.length - 2);
            form.FormPlaceholders.forEach(function(placeholder) {
                var allLookups = placeholder.element.querySelectorAll("INPUT[list]");
                for (var i = 0; i < allLookups.length; i++) {
                    _this.lookupUtility.createLookupControl(allLookups[i], serviceFabricBaseUrl)
                }
            })
        }
        ;
        FormLoaderInternal.prototype.onFormSubmittedFeedback = function(placeholder, form, formPageId, message, isError, eventType) {
            var _this = this;
            FormLoaderInternal.setSubmitButtonsDisabled(form, false);
            if (placeholder.element.msdyncrm_notification && typeof placeholder.element.msdyncrm_notification === "function") {
                try {
                    placeholder.element.msdyncrm_notification({
                        Message: message,
                        IsError: isError,
                        EventType: eventType
                    })
                } catch (ex) {
                    this.logger.error(ex)
                }
                return
            }
            var metadata = placeholder.metadata;
            var dialog = this.dialogProvider.showFeedback(isError, message, form, form.offsetHeight, form.offsetWidth, metadata.ErrorImageUrl, metadata.SuccessImageUrl);
            var button = dialog.getElementsByTagName("button")[0];
            button.addEventListener("click", function() {
                placeholder.isLoading = false;
                var parent = dialog.parentElement;
                parent.removeChild(dialog);
                _this.loadForm({
                    FormPageId: formPageId,
                    FormPlaceholders: [placeholder]
                })
            })
        }
        ;
        FormLoaderInternal.updateCssClassForElements = function(form, elementsToSet, cssClass) {
            Array.prototype.forEach.call(form.querySelectorAll("input,select,textarea"), function(e) {
                if (elementsToSet[e.name] || elementsToSet[e.id]) {
                    MsCrmMkt.CssProvider.addClass(e, cssClass)
                } else {
                    MsCrmMkt.CssProvider.removeClass(e, cssClass)
                }
            })
        }
        ;
        FormLoaderInternal.prototype.onFormSubmitted = function(placeholder, formPageId, responseText, form) {
            if (!responseText) {
                FormLoaderInternal.setSubmitButtonsDisabled(form, false);
                this.trigger(new MsCrmMkt.AfterFormSubmitEvent(formPageId,placeholder.element,""));
                return
            }
            var parsedResult = JSON.parse(responseText);
            if (parsedResult.SubmissionStatus && parsedResult.SubmissionStatus !== "Success") {
                if (parsedResult.InvalidSubmittedFields && parsedResult.InvalidSubmittedFields.length) {
                    if (typeof form.reportValidity === "function") {
                        form.reportValidity()
                    }
                    MsCrmMkt.CssProvider.ensureDefaultStyles();
                    var invalidSubmittedFields_1 = {};
                    parsedResult.InvalidSubmittedFields.forEach(function(f) {
                        return invalidSubmittedFields_1[f] = true
                    });
                    FormLoaderInternal.updateCssClassForElements(form, invalidSubmittedFields_1, MsCrmMkt.CssProvider.invalidFieldClassName());
                    FormLoaderInternal.setSubmitButtonsDisabled(form, false);
                    return
                }
                if (parsedResult.MissingRequiredFields && parsedResult.MissingRequiredFields.length) {
                    if (typeof form.reportValidity === "function") {
                        form.reportValidity()
                    }
                    MsCrmMkt.CssProvider.ensureDefaultStyles();
                    var missingRequiredFields_1 = {};
                    parsedResult.MissingRequiredFields.forEach(function(f) {
                        return missingRequiredFields_1[f] = true
                    });
                    FormLoaderInternal.updateCssClassForElements(form, missingRequiredFields_1, MsCrmMkt.CssProvider.requiredFieldClassName());
                    FormLoaderInternal.setSubmitButtonsDisabled(form, false);
                    return
                }
                if (parsedResult.SubmissionStatus === "LimitExceeded") {
                    var message = parsedResult.LimitExceededMessage || this.localizationProvider.getMessageForLanguage("LimitExceededDefaultMessage", MsCrmMkt.MsCrmFormLoader.uiLanguage);
                    this.onFormSubmittedFeedback(placeholder, form, formPageId, message, true, "afterFormSubmit");
                    return
                }
                if (parsedResult.SubmissionStatus === "RegistrationFailed") {
                    var message = parsedResult.RegistrationErrorMessage !== null ? parsedResult.RegistrationErrorMessage : placeholder.metadata.ErrorMessage;
                    this.onFormSubmittedFeedback(placeholder, form, formPageId, message, true, "afterFormSubmit");
                    return
                }
                this.onFormSubmittedFeedback(placeholder, form, formPageId, placeholder.metadata.ErrorMessage, true, "afterFormSubmit");
                return
            }
            if (!parsedResult.CaptchaVerificationResult) {
                WLSPHIP0.error = 1;
                WLSPHIP0.reloadCaptchaAndShowError();
                FormLoaderInternal.setSubmitButtonsDisabled(form, false);
                return
            }
            var redirectUrl = parsedResult.RedirectUrl;
            var redirectDefined = !this.isNullOrWhiteSpace(redirectUrl);
            this.trigger(new MsCrmMkt.AfterFormSubmitEvent(formPageId,placeholder.element,redirectUrl));
            if (redirectDefined) {
                this.redirectTo(redirectUrl)
            } else {
                var confirmationMessage = parsedResult.ConfirmationMessage;
                this.onFormSubmittedFeedback(placeholder, form, formPageId, confirmationMessage, false, "afterFormSubmit")
            }
        }
        ;
        FormLoaderInternal.prototype.isNullOrWhiteSpace = function(text) {
            return typeof text === "undefined" || text == null || text.trim() === ""
        }
        ;
        FormLoaderInternal.isFieldExcluded = function(field) {
            return field.getAttribute(FormLoaderInternal.hiddenFieldAttrName) === "true"
        }
        ;
        FormLoaderInternal.prototype.serializeForm = function(form, extraValues) {
            if (!form) {
                return null
            }
            var elements = form.elements;
            var encodedData = [];
            var checkboxListDict = FormLoaderInternal.getCheckboxListsDictionary(form);
            for (var i = 0; i < elements.length; i++) {
                var currentElement = elements[i];
                var name_1 = currentElement["name"];
                if (!name_1) {
                    continue
                }
                var encodedName = encodeURIComponent(name_1);
                if (currentElement.nodeName === "INPUT") {
                    var input = currentElement;
                    var encodedValue = encodeURIComponent(input.value);
                    var originalInputType = input.attributes["type"] ? input.attributes["type"].value : undefined;
                    if (FormLoaderInternal.isFieldExcluded(input) || input.type === "file") {
                        continue
                    }
                    var lookupValue = this.lookupUtility.getValidLookupValue(input);
                    if (lookupValue) {
                        encodedData.push(encodedName + "=" + encodeURIComponent(lookupValue));
                        continue
                    }
                    if (originalInputType === "datetime-local") {
                        if (input.type === "datetime-local" || FormLoaderInternal.isTextDatetimeField(input)) {
                            if (input.value) {
                                var localDateTime = new Date(input.value.replace("T", " ").replace(/-/g, "/"));
                                var utcDateTime = localDateTime.toISOString();
                                var encodedUtcDateTime = encodeURIComponent(utcDateTime);
                                encodedData.push(encodedName + "=" + encodedUtcDateTime)
                            } else {
                                encodedData.push(encodedName + "=" + encodedValue)
                            }
                        }
                        continue
                    }
                    if (originalInputType === "date") {
                        if (input.type === "date" || FormLoaderInternal.isTextDateField(input)) {
                            encodedData.push(encodedName + "=" + encodedValue)
                        }
                        continue
                    }
                    if (input.type === "checkbox") {
                        if (input.checked) {
                            if (MsCrmMkt.FormHelper.isCheckboxListItem(input)) {
                                var name_2 = input.getAttribute("name");
                                var value = input.getAttribute("value");
                                checkboxListDict[name_2].push(value)
                            } else {
                                encodedData.push(encodedName + "=true")
                            }
                        }
                        continue
                    }
                    if (input.type === "radio") {
                        if (input.checked) {
                            encodedData.push(encodedName + "=" + encodedValue)
                        }
                        continue
                    }
                    encodedData.push(encodedName + "=" + encodedValue);
                    continue
                }
                if (currentElement.nodeName === "TEXTAREA") {
                    var input = currentElement;
                    var encodedValue = encodeURIComponent(input.value);
                    encodedData.push(encodedName + "=" + encodedValue);
                    continue
                }
                if (currentElement.nodeName === "BUTTON") {
                    var input = currentElement;
                    var encodedValue = encodeURIComponent(input.value);
                    encodedData.push(encodedName + "=" + encodedValue);
                    continue
                }
                if (currentElement.nodeName === "SELECT") {
                    var input = currentElement;
                    if (input.type === "select-one") {
                        var encodedValue = encodeURIComponent(input.value);
                        encodedData.push(encodedName + "=" + encodedValue)
                    }
                }
            }
            var encodedCheckboxLists = FormLoaderInternal.encodeCheckboxLists(checkboxListDict);
            encodedData = encodedData.concat(encodedCheckboxLists);
            if (extraValues) {
                for (var key in extraValues) {
                    if (extraValues.hasOwnProperty(key)) {
                        encodedData.push(encodeURIComponent(key) + "=" + encodeURIComponent(extraValues[key]))
                    }
                }
            }
            return encodedData.join("&")
        }
        ;
        FormLoaderInternal.getCheckboxListsDictionary = function(parent) {
            var checkboxListDict = {};
            var checkboxListFieldBlocks = MsCrmMkt.FormHelper.getCheckboxListFieldBlocks(parent);
            for (var j = 0; j < checkboxListFieldBlocks.length; j++) {
                var checkbox = checkboxListFieldBlocks[j].querySelector("input[type='" + MsCrmMkt.inputTypeCheckbox + "']");
                if (checkbox) {
                    checkboxListDict[checkbox.getAttribute("name")] = []
                }
            }
            return checkboxListDict
        }
        ;
        FormLoaderInternal.encodeCheckboxLists = function(checkboxListDict) {
            var encodedData = [];
            for (var checkboxListId in checkboxListDict) {
                var selectedValues = checkboxListDict[checkboxListId];
                var jsonValues = JSON.stringify(selectedValues);
                encodedData.push(checkboxListId + "=" + jsonValues)
            }
            return encodedData
        }
        ;
        FormLoaderInternal.encodeInput = function(inputElement) {
            var encodedName = encodeURIComponent(inputElement.getAttribute("name"));
            var encodedValue = encodeURIComponent(inputElement.getAttribute("value"));
            return encodedName + "=" + encodedValue
        }
        ;
        FormLoaderInternal.prototype.getForm = function(formPageId) {
            var _this = this;
            return new ES6Promise.Promise(function(resolve, reject) {
                var request = new XMLHttpRequest;
                var url = _this.buildUrl(formPageId);
                request.open("GET", url, true);
                request.onreadystatechange = function() {
                    if (request.readyState === 4) {
                        request.onreadystatechange = null;
                        var status_1 = request.status;
                        if (status_1 === 200 || status_1 === 204) {
                            var parsedResponse = JSON.parse(request.responseText);
                            resolve(parsedResponse || {
                                Form: null,
                                PrefillData: null,
                                ErrorCode: "FormNotFound"
                            });
                            return
                        }
                        reject({
                            status: status_1,
                            responseText: request.responseText
                        })
                    }
                }
                ;
                request.send()
            }
            )
        }
        ;
        FormLoaderInternal.prototype.serializeAndPostForm = function(formElement, formPageId, extraValues) {
            return this.postForm(formPageId, this.serializeForm(formElement, extraValues))
        }
        ;
        FormLoaderInternal.prototype.postFormOnce = function(url, data) {
            return new ES6Promise.Promise(function(resolve, reject) {
                var request = new XMLHttpRequest;
                request.open("POST", url, true);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.setRequestHeader("x-submit-attempt", (FormLoaderInternal.submitCounter++).toFixed());
                if (FormLoaderInternal._uiLanguage) {
                    request.setRequestHeader("Accept-Language", FormLoaderInternal._uiLanguage)
                }
                request.onreadystatechange = function() {
                    if (request.readyState === 4) {
                        request.onreadystatechange = null;
                        if (request.status === 200) {
                            resolve(request.responseText);
                            return
                        } else if (request.status >= 400) {
                            reject(true);
                            return
                        }
                        reject(false)
                    }
                }
                ;
                request.send(data)
            }
            )
        }
        ;
        FormLoaderInternal.prototype.postForm = function(formPageId, data) {
            var _this = this;
            var maxRetries = 3;
            return new ES6Promise.Promise(function(resolve, reject) {
                var url = _this.buildUrl(formPageId);
                var retry = function() {
                    _this.postFormOnce(url, data).then(function(responseText) {
                        return resolve(responseText)
                    }, function(retryable) {
                        maxRetries--;
                        if (!retryable || maxRetries === 0) {
                            reject(retryable);
                            return
                        }
                        retry()
                    })
                };
                retry()
            }
            )
        }
        ;
        FormLoaderInternal.prototype.buildUrl = function(id) {
            var urlParts = [this.formsServiceBaseUrl, "formpage", id];
            if (!!this.correlationId) {
                urlParts.push("correlation");
                urlParts.push(this.correlationId)
            }
            return urlParts.join("/")
        }
        ;
        FormLoaderInternal.defaultDateFormat = "yy-mm-dd";
        FormLoaderInternal.defaultDatePlaceholder = "yyyy-mm-dd";
        FormLoaderInternal.defaultDatetimePlaceholder = "yyyy-mm-dd hh:mm";
        FormLoaderInternal.hiddenFieldAttrName = "data-field-hidden";
        FormLoaderInternal.formCaptureSendingQueue = new MsCrmMkt.FormCaptureSendingQueue;
        FormLoaderInternal.callbacks = {};
        FormLoaderInternal.submitCounter = 0;
        FormLoaderInternal.formLoadResponseContactMissing = "ContactMissing";
        FormLoaderInternal.onformload = function(formPageId, formEvent) {}
        ;
        FormLoaderInternal.afterformload = function(formPageId, formEvent) {}
        ;
        FormLoaderInternal.onformrender = function(formPageId, formEvent) {}
        ;
        FormLoaderInternal.afterformrender = function(formPageId, formEvent) {}
        ;
        FormLoaderInternal.onformsubmit = function(formPageId, formEvent) {}
        ;
        FormLoaderInternal.afterformsubmit = function(formPageId, formEvent) {}
        ;
        return FormLoaderInternal
    }();
    MsCrmMkt.FormLoaderInternal = FormLoaderInternal;
    MsCrmMkt.MsCrmFormLoader = FormLoaderInternal
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var MsCrmPageLoader = function() {
        function MsCrmPageLoader(telemetryObject) {
            this.telemetryObject = telemetryObject
        }
        MsCrmPageLoader.prototype.load = function(serviceEndpoint, correlationId) {
            var configuration = MsCrmPageLoader.getConfiguration();
            if (!configuration || !configuration.id || configuration.id.length === 0) {
                return
            }
            var url = [serviceEndpoint, "p", configuration.id, "c", correlationId].join("/");
            var maxRetries = 3;
            this.getPersonalizedPage(maxRetries, url)
        }
        ;
        MsCrmPageLoader.ensurePersonalization = function(config) {
            MsCrmPageLoader.ensurePersonalizedPageLoaded(config)
        }
        ;
        MsCrmPageLoader.prototype.getPersonalizedPage = function(retries, url) {
            var _this = this;
            var request = new XMLHttpRequest;
            request.open("GET", url, true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.onreadystatechange = function() {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        _this.signalSuccess(request.status, request.responseText);
                        return
                    }
                    if (retries > 0) {
                        _this.getPersonalizedPage(retries - 1, url);
                        return
                    }
                    _this.signalFailure(request.status, request.responseText);
                    return
                }
            }
            ;
            request.send()
        }
        ;
        MsCrmPageLoader.getConfiguration = function() {
            return window.msdyncrm_personalizedpage
        }
        ;
        MsCrmPageLoader.prototype.signalSuccess = function(status, responseText) {
            var parsedText;
            try {
                parsedText = JSON.parse(responseText)
            } catch (_a) {
                this.signalFailure(status, responseText);
                return
            }
            if (parsedText && parsedText.Error) {
                this.signalFailure(status, responseText);
                return
            }
            var configuration = MsCrmPageLoader.getConfiguration();
            if (configuration && configuration.success && typeof configuration.success === "function") {
                configuration.success(parsedText)
            }
        }
        ;
        MsCrmPageLoader.prototype.signalFailure = function(status, responseText) {
            var configuration = MsCrmMkt.MsCrmPageLoader.getConfiguration();
            if (configuration && configuration.error && typeof configuration.error === "function") {
                configuration.error({
                    status: status,
                    responseText: responseText
                })
            }
        }
        ;
        MsCrmPageLoader.isCorrelationEstablished = function() {
            var trackingScriptBase = document.getElementsByClassName("ms_crm_trackingscript_base");
            if (trackingScriptBase.length > 0) {
                return true
            }
            var trackingScriptPresents = window.trackingScriptLoaded;
            if (typeof trackingScriptPresents !== "undefined" && trackingScriptPresents) {
                return true
            }
            var scripts = document.getElementsByTagName("script");
            for (var i = 0; i < scripts.length; i++) {
                if (scripts[i].src)
                    continue;
                var content = scripts[i].innerHTML;
                if (content.indexOf("ms_tr_il_08") !== -1 || content.indexOf("ms_tr_il_w_01") !== -1) {
                    return true
                }
            }
            return false
        }
        ;
        MsCrmPageLoader.ensurePersonalizedPageLoaded = function(trackingConfig) {
            if (MsCrmMkt.MsCrmPageLoader.isCorrelationEstablished()) {
                return
            }
            var configuration = MsCrmMkt.MsCrmPageLoader.getConfiguration();
            if (!configuration || !configuration.id || configuration.id.length === 0 || configuration._loaded) {
                return
            }
            configuration._loaded = true;
            var serviceEndpoint = configuration.endpoint;
            if (!serviceEndpoint || serviceEndpoint.length === 0) {
                return
            }
            var formsUrl = serviceEndpoint + "/f";
            var correlationHandler = new MsCrmMkt.CorrelationHandler;
            correlationHandler.onCorrelationEstablished = function(wid, correlationId, formsToCapture) {
                var telemetryObject = new MsCrmMkt.Telemetry.TelemetryObject(formsUrl);
                var pageLoader = new MsCrmMkt.MsCrmPageLoader(telemetryObject);
                pageLoader.load(formsUrl, correlationId);
                correlationHandler.dispose()
            }
            ;
            correlationHandler.onCorrelationFailed = function() {
                correlationHandler.dispose()
            }
            ;
            correlationHandler.establishCorrelation(trackingConfig, MsCrmMkt.Tracking.locationParams(document, trackingConfig.TrackingLocation))
        }
        ;
        return MsCrmPageLoader
    }();
    MsCrmMkt.MsCrmPageLoader = MsCrmPageLoader
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var FormUtility = function() {
        function FormUtility() {}
        FormUtility.getAllForms = function() {
            var forms = new Array;
            var formsMap = {};
            var formBlockElements = document.querySelectorAll("[" + MsCrmMkt.formBlockIdAttrName + "]");
            for (var i = 0; i < formBlockElements.length; i++) {
                var element = formBlockElements[i];
                var id = element.getAttribute(MsCrmMkt.formBlockIdAttrName);
                if (id) {
                    var form = formsMap[id];
                    if (form) {
                        form.FormPlaceholders.push(new MsCrmMkt.MarketingFormPlaceholder(element));
                        continue
                    }
                    form = {
                        FormPageId: id,
                        FormPlaceholders: [new MsCrmMkt.MarketingFormPlaceholder(element)]
                    };
                    forms.push(form);
                    formsMap[id] = form
                }
            }
            return forms
        }
        ;
        return FormUtility
    }();
    MsCrmMkt.FormUtility = FormUtility
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var LocalizationProvider = function() {
        function LocalizationProvider(logger) {
            this.logger = logger;
            this.getMessageShown = {};
            this.baseVariant = null
        }
        LocalizationProvider.prototype.getMessage = function(key) {
            return this.getMessageForLanguage(key, navigator.language)
        }
        ;
        LocalizationProvider.prototype.getMessageForLanguage = function(key, language) {
            if (this.getMessageShown[key]) {
                return null
            }
            this.ensureBaseVariants();
            language = language.toLowerCase();
            language = this.baseVariant[language] || language;
            if (MsCrmMkt.Localization.labels && !MsCrmMkt.Localization.labels[language]) {
                language = this.baseVariant["*"] || "en-us"
            }
            this.getMessageShown[key] = true;
            return MsCrmMkt.Localization.labels[language][key] !== undefined ? MsCrmMkt.Localization.labels[language][key]["Value"] : ""
        }
        ;
        LocalizationProvider.prototype.reloadKey = function(key) {
            this.getMessageShown[key] = false
        }
        ;
        LocalizationProvider.prototype.ensureBaseVariants = function() {
            if (!this.baseVariant && MsCrmMkt.Localization.labels) {
                var buffer = {};
                var defaultMissing = {};
                for (var key in MsCrmMkt.Localization.labels) {
                    if (!MsCrmMkt.Localization.labels.hasOwnProperty(key)) {
                        continue
                    }
                    var dash = key.indexOf("-");
                    if (dash > 0) {
                        var base = key.substring(0, dash);
                        if (buffer[base] && !MsCrmMkt.Localization.labels._config.defaultVariant[base]) {
                            this.logger.log("Multiple variants found for the base language " + base + " and no default is configured");
                            defaultMissing[base] = true
                        }
                        buffer[base] = key
                    }
                }
                for (var key in defaultMissing) {
                    if (!defaultMissing.hasOwnProperty(key)) {
                        continue
                    }
                    delete buffer[key]
                }
                for (var key in MsCrmMkt.Localization.labels._config.defaultVariant) {
                    if (!MsCrmMkt.Localization.labels._config.defaultVariant.hasOwnProperty(key)) {
                        continue
                    }
                    buffer[key] = MsCrmMkt.Localization.labels._config.defaultVariant[key]
                }
                this.baseVariant = buffer
            }
        }
        ;
        return LocalizationProvider
    }();
    MsCrmMkt.LocalizationProvider = LocalizationProvider
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var DialogProvider = function() {
        function DialogProvider(localizationProvider, getUiLanguage) {
            this.localizationProvider = localizationProvider;
            this.getUiLanguage = getUiLanguage
        }
        DialogProvider.prototype.showErrorMessage = function(message, link, linkMessage, linkCssClass, formPlaceholder, containerHeight, containerWidth, dialogButton) {
            var _a;
            MsCrmMkt.CssProvider.ensureDefaultStyles();
            var container = document.createElement("div");
            var internalContainer = document.createElement("div");
            var messageContainer = document.createElement("div");
            var linkContainer = document.createElement("div");
            var linkElement = document.createElement("a");
            var buttonContainer = document.createElement("div");
            var buttonElement = (_a = dialogButton) === null || _a === void 0 ? void 0 : _a.createElement();
            var iconContainer = document.createElement("img");
            container.className = DialogProvider.dialogProviderContainerStyleClass;
            container.style.height = containerHeight < 400 ? "400px" : containerHeight + "px";
            container.style.width = containerWidth < 400 ? "400px" : containerWidth + "px";
            iconContainer.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAMgAyAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/UjVdVtND0+4v7+5is7K2jaae4ncJHEijLMzHgADnJr4h8ZftgfET49eLbvwd+z1oZltbc7LrxXfRAKg6b18wbI1ODjeGdh0UEUftgeMte+Pfxl0P9nnwdeG1tZCl34jvUOVRceZsbHVUTD7c/M7ovBFfVvgLwF4R/Z8+HUelaVHb6NoGmQGa4u52VC5Vf3k80hxljjJY+mBgAAebKU8RNwg+WMd31b7Ltbqz7ShQw2TYanisVTVWvVV4QfwxjspSS1k5P4Y7W1d7nypa/8ABOzxP8Qh9s+Kfxh1rXL6TmS2si8kUZPZXmY5HsI1xT7j/gmBpvh+P7R4N+J3iPQNTX5knZFYbu3+qMZH519meEvF2keOtAs9b0K/g1PSbyMS293btuSRT/Igggg8ggg4IrWZggyenqapYHDNX5b+d3+dzOXFOdU5OHteVLTlUIqK8uXlt8mfAV18UP2h/wBjq5if4hwr8Tfh8HWNtZhcyXECnoTKQHVuekwYE8B+9fZ3wp+LPhr4z+ELbxJ4W1Bb7TpvlZeksEmMtHInVXGRx7gjIIJl8OeL/Cfxe0LUf7I1HTvEukrLLp94sLLPEWHyyRuOhH14IIIyCDXw54j0u4/YB/aQ0zWtJeQfCPxlN5N5aMSyWTbvmA94929CeSm9ecE1neWEtLm5qb+bXnfqvyOz2dHP1Oi6KpYyKbSiuWNSyu4uP2Z21VrKW1j9D6KhS5SVFdGDowyGU5BHrRXqHwZ8O/8ABOyzHxB8dfGH4p3h86+1XVTa28rcmON3aZ1HtgwADtsFfaHi7wlpXjrw7f6FrlnFqOk30RhuLWZcrIp/UEdQRyCARgivjT/gl/djQtB+Jvgy4O3UdG11Xljbg/Mpi/nbmvuFmCDJ6eprz8Ck8NG/W9/W7ufYcUzlDOqvI7KPKo26RUY8tvlqj87P+Ku/4Jz/ABG/5e/E3wT125+sljIf0WVQPZZVHZh8u78cP2kPEH7U/ieH4RfA6R5NOvYg2teJcPEiwEDeuSAUjAOGONzn5FGPvH7SHxw1r9qfxhJ8DfhFDDqOnSOBr3iBxvtlRGBYK+CBGrAZccuwCpx97k9L0vxb/wAE2/iElxcI3iv4VeImiivL+C3Ec0Uqg8kZOyRcuQpO11z0YfL5kpOLdOm37G+r7d0n27vofc0aMa8aeLxdOLzFxbhBu3Pa3LOcbW9pa7jFtc9k2rn2p+z18APDn7O/gWPw/oSGe4k2y3+pSriW8mxjc3oo5CqOFHqSSeJ/b28EW/jX9mHxZ5kYe50lE1a2c/8ALN4mG8j6xtIv/Aq9s8H+MNI8e+HLHXtBvodS0m+iE1vdQNlXU/qCOhB5BBBwQa8u/bP8QweGv2YfiFczsFE2mtZJ7vOywqB+L17FWFOOHlFfDZ/kfnGBxGLqZzRrVW3VdSN7735knf8AFW6bWPjjwJ/wUOvvDHgjw9o0vkzy6dp1vaPLIoLOY4lQknuTiivBfDn7JXizxJ4e0vVra0ma3v7WK6iYJwVdAw7ehor5mOIxqStc/bquVcLupJzcb3d9et3f8bn1d8TrmX9jn9sqH4gywyr8PfHatFqckS5WCdiDKSB/EHCzepV5AMkGvtLxh4b0z4u/D3UdHOoTx6TrdkYhfaXcbHMUi8PG69iCD3BBwQQSDF8WvhR4f+NPgi/8LeJbb7Rp10uQ6YEkEg+5LG38LKeh75IOQSD8RaR4l+L/AOwFdvpGuaXN8QvhGrk2uoWuQ1ipPrz5PXJjf5CfuMMsT7r/ANklJSV6cvwb3v5P8D8rppZ/RoyozUcZRSjZtL2kY/C4t6c8drP4klY+vvgB+z14Z/Z38FroXh+MzXEpEl/qcygT3ko/ibHRRkhVHAHqSSe28YeD9I8e+HL7QdesYdS0m+iMNxazrlXU/qCOoI5BAIwQK8U8Fft7fBXxraRSDxbHoVywy1prcTWzx+xfBjP/AAFzW14h/bP+C3hq0ae5+IWkXIUfc06Rrtz7ARBq6YVcPGnaMly+qPFxGBzmpi3VrUajqt3vyyvfvdL7rPToan7O/wCzvo37OPhrVNF0XVNR1O2vr57z/T5crEDwiIg+UYUAFgMsRk8YA+X/ANsfxtc/tJfF7wt8AvBsxnigvhdeIb2D5kgKjBUn/pkhdmHdyi/eGKXxp+2N4+/aTvZvBvwB8L6lbRynyrvxReKIzboepBGUg74dmLn+FQ2K97/ZW/ZW0j9nfw7PLJONY8YakA2p6w4Pzc58qPPIQHnJ5Y8nsF4/dxMVQoL931fS3Zd79WfRpVcmqyzXNZXxb+CGjkpNW5520jyrWMXq2ez6H4dtPDmiafpOnoLewsLeO1t4lHCRooVVH0AAorUor11poj86k3JuUnqwqC8RZYWR1DowKsrDIIPUGiigT2PzO/4KFeBPDXhjWzJo3h7StJklQSO9jZRQl2K5LEqoySe9eC/sneHtK8R/EK1ttW0yz1S3aQAw3lukyHp2YEUUV8diIpY61up/SeUVaj4X53J3s9bu/wB97/ifs94d0LTfDemx6fpGn2ml2EQAjtbKBYYkHsqgAfgK1KKK+xtbRH828zk3KTu2FFFFAH//2Q==";
            iconContainer.className = "dialogProviderIconContainerStyle";
            messageContainer.textContent = message;
            messageContainer.className = "dialogProviderMessageContainerStyle";
            linkElement.href = link;
            linkElement.textContent = linkMessage ? linkMessage : "Read more";
            linkElement.className = linkCssClass;
            linkContainer.className = "dialogProviderLinkContainerStyle";
            linkContainer.appendChild(linkElement);
            buttonContainer.className = "dialogProviderLinkButtonContainerStyle";
            if (buttonElement) {
                buttonContainer.appendChild(buttonElement)
            }
            internalContainer.className = "dialogProviderInternalContainerStyle";
            internalContainer.appendChild(iconContainer);
            internalContainer.appendChild(messageContainer);
            internalContainer.appendChild(linkContainer);
            internalContainer.appendChild(buttonContainer);
            internalContainer.style.top = (containerHeight - 400) / 2 + "px";
            container.appendChild(internalContainer);
            formPlaceholder.appendChild(container)
        }
        ;
        DialogProvider.prototype.removeAllErrorMessages = function(formPlaceholder) {
            Array.prototype.forEach.call(formPlaceholder.querySelectorAll("div." + DialogProvider.dialogProviderContainerStyleClass), function(container) {
                formPlaceholder.removeChild(container)
            })
        }
        ;
        DialogProvider.prototype.isAnyErrorMessageShown = function(formPlaceholder) {
            return formPlaceholder.querySelector("div." + DialogProvider.dialogProviderContainerStyleClass) != null
        }
        ;
        DialogProvider.prototype.showFeedback = function(isError, message, form, containerHeight, containerWidth, errorImageUrl, successImageUrl) {
            MsCrmMkt.CssProvider.ensureDefaultStyles();
            var formContainer = form.parentElement;
            var container = document.createElement("div");
            var internalContainer = document.createElement("div");
            var messageContainer = document.createElement("div");
            var buttonContainer = document.createElement("button");
            var iconContainer = document.createElement("img");
            DialogProvider.fixContainerSize(containerHeight, containerWidth, container);
            container.className = "onFormSubmittedFeedback";
            if (isError) {
                internalContainer.setAttribute("data-submissionresponse", "error");
                iconContainer.src = errorImageUrl && errorImageUrl.length ? errorImageUrl : "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23FFC8C8'/%3E%3Cpath d='M33.5996 31L45.7285 43.1465L44.1465 44.7285L32 32.5996L19.8535 44.7285L18.2715 43.1465L30.4004 31L18.2715 18.8535L19.8535 17.2715L32 29.4004L44.1465 17.2715L45.7285 18.8535L33.5996 31Z' fill='%23A80000'/%3E%3C/svg%3E%0A";
                this.localizationProvider.reloadKey("TryAgain");
                buttonContainer.textContent = this.localizationProvider.getMessageForLanguage("TryAgain", this.getUiLanguage());
                buttonContainer.className = "onFormSubmittedFeedbackButton onFormSubmittedFeedbackButtonFail"
            } else {
                internalContainer.setAttribute("data-submissionresponse", "success");
                iconContainer.src = successImageUrl && successImageUrl.length ? successImageUrl : "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23C5E6C2'/%3E%3Cpath d='M45.091 22.591L26.3 41.3996L16.509 31.591L18.091 30.009L26.3 38.2004L43.509 21.009L45.091 22.591Z' fill='%2327AE60'/%3E%3C/svg%3E%0A";
                this.localizationProvider.reloadKey("Reload");
                buttonContainer.textContent = this.localizationProvider.getMessageForLanguage("Reload", this.getUiLanguage());
                buttonContainer.className = "onFormSubmittedFeedbackButton onFormSubmittedFeedbackButtonSuccess"
            }
            iconContainer.className = "onFormSubmittedFeedbackIcon";
            iconContainer.setAttribute("aria-hidden", "true");
            messageContainer.textContent = message;
            messageContainer.className = "onFormSubmittedFeedbackMessage";
            messageContainer.setAttribute("role", "alert");
            internalContainer.className = "onFormSubmittedFeedbackInternalContainerStyle";
            internalContainer.appendChild(iconContainer);
            internalContainer.appendChild(messageContainer);
            internalContainer.appendChild(buttonContainer);
            internalContainer.style.top = (containerHeight - 400) / 2 + "px";
            container.appendChild(internalContainer);
            formContainer.appendChild(container);
            form.parentNode.removeChild(form);
            return container
        }
        ;
        DialogProvider.fixContainerSize = function(containerHeight, containerWidth, container) {
            var minContainerSize = 400;
            if (containerHeight < minContainerSize) {
                container.style.height = minContainerSize + "px"
            } else if (containerHeight > window.innerHeight) {
                container.style.height = window.innerHeight + "px"
            } else {
                container.style.height = containerHeight + "px"
            }
            if (containerWidth < minContainerSize) {
                container.style.width = minContainerSize + "px"
            } else if (containerWidth > window.innerWidth) {
                container.style.width = window.innerWidth + "px"
            } else {
                container.style.width = containerWidth + "px"
            }
        }
        ;
        DialogProvider.dialogProviderContainerStyleClass = "dialogProviderContainerStyle";
        return DialogProvider
    }();
    MsCrmMkt.DialogProvider = DialogProvider
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var defaultStyleElementId = "cssProviderStyle";
    var invalidFieldClassName = "mkt-invalid-field";
    var requiredFieldClassName = "mkt-required-field";
    var CssProvider = function() {
        function CssProvider() {}
        CssProvider.invalidFieldClassName = function() {
            return invalidFieldClassName
        }
        ;
        CssProvider.requiredFieldClassName = function() {
            return requiredFieldClassName
        }
        ;
        CssProvider.hasClass = function(el, className) {
            return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className)
        }
        ;
        CssProvider.addClass = function(el, className) {
            if (!el) {
                return
            }
            if (el.classList) {
                el.classList.add(className);
                return
            }
            if (!CssProvider.hasClass(el, className)) {
                el.className += " " + className
            }
        }
        ;
        CssProvider.removeClass = function(el, className) {
            if (el.classList) {
                el.classList.remove(className);
                return
            }
            el.className = el.className.replace(new RegExp("\\b" + className + "\\b","g"), "")
        }
        ;
        CssProvider.ensureDefaultStyles = function() {
            if (document.getElementById(defaultStyleElementId)) {
                return
            }
            var css = "div[data-form-block-id] .dialogProviderMessageContainerStyle { color: #A80000; padding-top: 20px; padding-bottom: 20px; text-align: center; }\n                div[data-form-block-id] #validation-summary p[role=alert] { color: red; }\n                div[data-form-block-id] .dialogProviderInternalContainerStyle { padding: 20px; position: absolute; }\n                div[data-form-block-id] .dialogProviderIconContainerStyle { display: block; margin-left: auto; margin-right: auto; }\n                div[data-form-block-id] .dialogProviderLinkContainerStyle { text-align: center; display: flex; align-items: center; justify-content: center; } \n                div[data-form-block-id] .dialogProviderContainerStyle { background: white; position: relative; }\n                div[data-form-block-id] .dialogProviderLinkButtonContainerStyle { margin-top: 16px; text-align: center; display: flex; align-items: center; justify-content: center; } \n                div[data-form-block-id] .dialogProviderLinkButtonStyle { background: none; background-color: transparent; border: none; font-size: 12px; color: #757575; cursor: pointer; padding: 0; text-decoration: underline; } \n                div[data-form-block-id] .reloadButtonStyle, .noIconButtonStyle { display: flex; color: #000000 !important; text-decoration: none; }\n                div[data-form-block-id] .reloadButtonStyle:before { display: flex; align-items: center; margin-right: 8px; content: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.1328 0.296875C10.9974 0.53125 11.7891 0.898438 12.5078 1.39844C13.2266 1.89323 13.8438 2.48177 14.3594 3.16406C14.8802 3.84115 15.2839 4.59375 15.5703 5.42188C15.8568 6.24479 16 7.10417 16 8C16 8.73438 15.9036 9.44271 15.7109 10.125C15.5234 10.8073 15.2552 11.4453 14.9062 12.0391C14.5625 12.6328 14.1458 13.1745 13.6562 13.6641C13.1719 14.1484 12.6328 14.5651 12.0391 14.9141C11.4453 15.2578 10.8073 15.526 10.125 15.7188C9.44271 15.9062 8.73438 16 8 16C7.26562 16 6.55729 15.9062 5.875 15.7188C5.19271 15.526 4.55469 15.2578 3.96094 14.9141C3.36719 14.5651 2.82552 14.1484 2.33594 13.6641C1.85156 13.1745 1.4349 12.6328 1.08594 12.0391C0.742188 11.4453 0.473958 10.8099 0.28125 10.1328C0.09375 9.45052 0 8.73958 0 8C0 7.27083 0.0963542 6.5625 0.289062 5.875C0.481771 5.1875 0.755208 4.54167 1.10938 3.9375C1.46875 3.32812 1.90365 2.77604 2.41406 2.28125C2.92448 1.78125 3.5 1.35417 4.14062 1H2V0H6V4H5V1.67969C4.39062 1.97135 3.83854 2.33854 3.34375 2.78125C2.85417 3.21875 2.4349 3.71354 2.08594 4.26562C1.73698 4.8125 1.46875 5.40365 1.28125 6.03906C1.09375 6.67448 1 7.32812 1 8C1 8.64062 1.08333 9.26042 1.25 9.85938C1.41667 10.4531 1.65104 11.0104 1.95312 11.5312C2.26042 12.0469 2.6276 12.5182 3.05469 12.9453C3.48177 13.3724 3.95312 13.7396 4.46875 14.0469C4.98958 14.349 5.54688 14.5833 6.14062 14.75C6.73438 14.9167 7.35417 15 8 15C8.64062 15 9.25781 14.9167 9.85156 14.75C10.4505 14.5833 11.0078 14.349 11.5234 14.0469C12.0443 13.7396 12.5182 13.3724 12.9453 12.9453C13.3724 12.5182 13.737 12.0469 14.0391 11.5312C14.3464 11.0104 14.5833 10.4531 14.75 9.85938C14.9167 9.26562 15 8.64583 15 8C15 7.21875 14.8724 6.46615 14.6172 5.74219C14.3672 5.01823 14.0156 4.35938 13.5625 3.76562C13.1094 3.17188 12.5677 2.65885 11.9375 2.22656C11.3125 1.78906 10.6224 1.46615 9.86719 1.25781L10.1328 0.296875Z' fill='%232266E3'/%3E%3C/svg%3E%0A\"); } \n                div[data-form-block-id] .onFormSubmittedFeedback { display: flex; align-items: center; justify-content: center; background: white; margin: 0 auto; }\n                div[data-form-block-id] .onFormSubmittedFeedbackIcon { display: block; margin-left: auto; margin-right: auto; height: 64px; size: 64px; }\n                div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackMessage { padding: 30px 10px 40px 10px; color: black; font-size: 16px; font-family: Segoe UI; text-align: center; }\n                div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackButton { min-width: 80px; min-height: 32px; font-size: 14px; border-radius: 2px; display: block; margin-left: auto; margin-right: auto; }\n                div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackButtonSuccess { color: white; background-color: #0078D4; border: 1px solid #0078D4; }\n                div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackButtonFail { color: black; background-color: white; border: 1px solid #8A8886; }\n                div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackInternalContainerStyle { padding: 20px; }\n                div[data-form-block-id] .formLoader { border: 16px solid #f3f3f3; border-radius: 50%; border-top: 16px solid #0078D4; width: 120px; height: 120px; -webkit-animation: spin 2s linear infinite; /* Safari */ animation: spin 2s linear infinite; margin: 0 auto; }\n                /* Safari */ @-webkit-keyframes spin { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); } }\n                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }\n                div[data-form-block-id] ." + invalidFieldClassName + ", div[data-form-block-id] ." + requiredFieldClassName + " { border-color: red; }\n                div[data-form-block-id] input." + invalidFieldClassName + '[type="checkbox"], div[data-form-block-id] input.' + invalidFieldClassName + '[type="radio"], div[data-form-block-id] input.' + requiredFieldClassName + '[type="checkbox"], div[data-form-block-id] input.' + requiredFieldClassName + "[type=\"radio\"] { outline: 1px solid red; }\n                div[data-form-block-id] .ui-selectmenu-open { display: block !important; }\n                div[data-form-block-id] .ui-selectmenu-menu { padding: 0; margin: 0; position: absolute; top: 0; left: 0; display: none; }\n                div[data-form-block-id] .ui-front { z-index: 100; }\n                div[data-form-block-id] .ui-menu { list-style: none; padding: 0; margin: 0; display: block; outline: 0; }\n                div[data-form-block-id] .ui-menu .ui-retry-item { }\n                div[data-form-block-id] .ui-menu .ui-retry-item-wrapper { padding: 32px; display: flex; align-items: center; justify-content: center; flex-direction: column; }\n                div[data-form-block-id] .ui-menu .ui-retry-text { text-align: center; font-size: 12px; color: #808080; }\n                div[data-form-block-id] .ui-menu .ui-retry-button-wrapper { margin-top: 32px; font-size: 12px; }\n                div[data-form-block-id] .ui-menu .ui-retry-button { display: flex; align-items: center; background: none; background-color: transparent; border: none; cursor: pointer; padding: 0; }\n                div[data-form-block-id] .ui-menu .ui-retry-button::before { display: flex; align-items: center; margin-right: 8px; content: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.1328 0.296875C10.9974 0.53125 11.7891 0.898438 12.5078 1.39844C13.2266 1.89323 13.8438 2.48177 14.3594 3.16406C14.8802 3.84115 15.2839 4.59375 15.5703 5.42188C15.8568 6.24479 16 7.10417 16 8C16 8.73438 15.9036 9.44271 15.7109 10.125C15.5234 10.8073 15.2552 11.4453 14.9062 12.0391C14.5625 12.6328 14.1458 13.1745 13.6562 13.6641C13.1719 14.1484 12.6328 14.5651 12.0391 14.9141C11.4453 15.2578 10.8073 15.526 10.125 15.7188C9.44271 15.9062 8.73438 16 8 16C7.26562 16 6.55729 15.9062 5.875 15.7188C5.19271 15.526 4.55469 15.2578 3.96094 14.9141C3.36719 14.5651 2.82552 14.1484 2.33594 13.6641C1.85156 13.1745 1.4349 12.6328 1.08594 12.0391C0.742188 11.4453 0.473958 10.8099 0.28125 10.1328C0.09375 9.45052 0 8.73958 0 8C0 7.27083 0.0963542 6.5625 0.289062 5.875C0.481771 5.1875 0.755208 4.54167 1.10938 3.9375C1.46875 3.32812 1.90365 2.77604 2.41406 2.28125C2.92448 1.78125 3.5 1.35417 4.14062 1H2V0H6V4H5V1.67969C4.39062 1.97135 3.83854 2.33854 3.34375 2.78125C2.85417 3.21875 2.4349 3.71354 2.08594 4.26562C1.73698 4.8125 1.46875 5.40365 1.28125 6.03906C1.09375 6.67448 1 7.32812 1 8C1 8.64062 1.08333 9.26042 1.25 9.85938C1.41667 10.4531 1.65104 11.0104 1.95312 11.5312C2.26042 12.0469 2.6276 12.5182 3.05469 12.9453C3.48177 13.3724 3.95312 13.7396 4.46875 14.0469C4.98958 14.349 5.54688 14.5833 6.14062 14.75C6.73438 14.9167 7.35417 15 8 15C8.64062 15 9.25781 14.9167 9.85156 14.75C10.4505 14.5833 11.0078 14.349 11.5234 14.0469C12.0443 13.7396 12.5182 13.3724 12.9453 12.9453C13.3724 12.5182 13.737 12.0469 14.0391 11.5312C14.3464 11.0104 14.5833 10.4531 14.75 9.85938C14.9167 9.26562 15 8.64583 15 8C15 7.21875 14.8724 6.46615 14.6172 5.74219C14.3672 5.01823 14.0156 4.35938 13.5625 3.76562C13.1094 3.17188 12.5677 2.65885 11.9375 2.22656C11.3125 1.78906 10.6224 1.46615 9.86719 1.25781L10.1328 0.296875Z' fill='%232266E3'/%3E%3C/svg%3E%0A\"); } \n                div[data-form-block-id] .ui-menu .ui-loading-item { font-size: 12px; background-repeat: no-repeat; background-position-x: 8px; background-position-y: center; background-size: 1em 1em; background-image: url('data:image/gif;base64,R0lGODlhHgAeAKUAAAQGBISGhMTGxERGRKSmpOTm5CwqLGRmZNTW1LS2tJSWlPT29BwaHFxaXDw6PHx6fMzOzKyurOzu7Nze3Ly+vJyenBQSFIyOjExOTDQyNGxubPz+/CQiJGRiZERCRAwKDMzKzKyqrOzq7CwuLNza3Ly6vJyanPz6/BweHFxeXDw+PISChNTS1LSytPTy9OTi5MTCxKSipJSSlFRSVHRydP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQA1ACwAAAAAHgAeAAAG/sCacDjcFEoV2cUUopBcG6J0WjtRNLNZR/NYLSsRgShKlSI6Dg+msaUFlrFIiYJYlIeEzMgxwGi5XgoEEQkwIAgudzIcHBlpazQKES0tIXFzICwTiVMxDCgGIyoDAQhkQhsSLCWGCCQvdkQsDBagIzMQdzUuEJkTL2NDJyoWnwYzBbqoE64FIgtkER/FKA7Jysu/IlA1GyrTnwnYRCfaEicbJADTFhin4zUizhLQMgAAxQTw5C8SLtAp1tW6tq+bs3/eBI54t0+CiHMbDKz74KEgEQn+FpyQOE2FxSEOEToQaODExxoOz50ICI7ERyMZN9jDx0DGxwXz0KljpyLWjj4RwBB6A4dCQcEFrzCiqyGN2ggQ8E6QePWQzDALtQyoyKVsAQsEv+idgoDC2AgPBHxK2SBCgC9gDD3Z4nOgxQuT3VyQoICpmdohFziEUqFmxoEHFxSYqBCnkC8JdwiMcNSHjQY3cORQOARZF4IUjxqkAJS5UJ1xVjSs2dIlsxi88Da8QHJBhoImiBgSCQIAIfkECQkAPAAsAAAAAB4AHgCFFBIUjIqMTE5MxMbENDI0rKqsbG5s5ObkJCIknJqcXF5c1NbUREJEvLq8fH589Pb0HBoclJKUVFZUzM7MPDo8tLK0dHZ07O7sLCospKKkZGZk3N7cTEpMxMLEhIaE/P78FBYUjI6MVFJUzMrMNDY0rK6sdHJ07OrsJCYknJ6cZGJk3NrcREZEvL68hIKE/Pr8HB4clJaUXFpc1NLUPD48tLa0fHp89PL0LC4spKakbGps5OLk////AAAAAAAAAAAABv5AnnA4/GwyNpVMYQrVDh+idMp7VQQIFI5AYrAEMpln8qJOZywIDIXh0r4imUpniB3MwxRMjcDgSDQMHCISCho6Fg4BM3gBACAQWX8CFiERASaHJjYuHhETVCmPaloWI2VFByUODh4hMQkrUjMgjzAIDAN4PCcZAREJGQUXQy8stggcd7tVNQkpOSUDUTwlAABqJDvMxRU5BRUNJzwfxyC3NdxENyUlNS0zHyvIEqjqQjPhHQMPCZBrBe6ta9BiwIQTOs4hwDFOoJAPAwaMmHFAQCQUDKg55LFgxIQZO2hkwSBh45ANE1fsYJCFQEmTPHZMWLDhgAQtBDjYc7hhgbzKExa2dNlg8oPPDTsu5CBAIFAOkw9WqDzwYAMBCm807FS3Y0XNEx8+aHgzqITDGzQPnLgRpYUgMCoW3HuxAalaVC8MCJAgQ4MJWcxeSP3K9mQYFX5tdNha5MJRtRe2tjBkwIINDwkmXKD24cWBBTNo7rhLpYaOTYpeZSjRoEOLDh59jj7xAM8AG61eBQNXY99Hr6Nr7zrgC1iGaO8kzkR6gjEVeSWguWsdewVVjeo+3FgxY0TsHTdeYJcSBAAh+QQJCQA8ACwAAAAAHgAeAIUUEhSMioxMTkzExsQ0MjSsqqxsbmzk5uQkIiScmpxcXlzU1tREQkS8urx8fnz09vQcGhyUkpRUVlTMzsw8Ojy0srR0dnTs7uwsKiykoqRkZmTc3txMSkzEwsSEhoT8/vwUFhSMjoxUUlTMysw0NjSsrqx0cnTs6uwkJiScnpxkYmTc2txERkS8vryEgoT8+vwcHhyUlpRcWlzU0tQ8Pjy0trR8enz08vQsLiykpqRsamzk4uT///8AAAAAAAAAAAAG/kCecDj8rBIGAYMls+R2H6J0ynuVWAAQBAJDoHAEgqb1ok5nDECW68WACSQGw7QxD1OgrLaLcsMpSywCMi12AWp7XjQ6Lh42MiwsHCISMgo1VBl6MDAoBiNlRRsJMhIKKhoGA1IzEIk0HXY8Bx6oBiYOB0MvHCCcCBy6slUJJiY2DhlRPBVsKBQ7w7sxDo0BKzwfAp19mNJDFwEeIRElHxttOAqh30ItETEJKTcZfWAV7UQnMSkZOSsWwJCgcSJfkRIZCpSYoOKPiGUGeXRQWGGEBAo0GOiIOGRChRoNBihYwmEjRx4zGrToMMGAJAEqIBqc0GLAiAUhRFBSIMzgvIcRNifsqFDplDeDNwZMmDHjwoFTGhixa7di6YIVLz540KHDhIVY+S7MuLrhQJQJxpB5iPbtxdUVG3Y8EPIiggMHAQLE6GnnxQq4cU9APCAuRLwUM6YS+XBjwYa4B04onmFYXo4cDVbcWPbhxYUNfyGfmDtlQr8cCmvUqMl0LNkdkS+QprKCIsgOHUaMmPB2B+wTFxRPuTBAZYegY+HCPnDhhnAqH05M0M1b+W/nMqV9eHDigO/YDz5kJxIEACH5BAkJADUALAAAAAAeAB4AhQQGBIyOjMzKzERGRKyurOTm5GRmZCwqLJyenNza3Ly+vPT29HR2dFxaXDw6PBwaHJSWlNTS1ExOTLS2tOzu7GxubKSmpBQSFDQyNOTi5MTGxPz+/ISChERCRAwKDJSSlMzOzExKTLSytOzq7GxqbCwuLKSipNze3MTCxPz6/Hx6fGRiZDw+PCQiJJyanNTW1FRSVLy6vPTy9HRydKyqrP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+wJpwONwkICtWqcRaQRIbonRaS9FYgGzWowWwCCnqNMLymM9odCciHpoel/jFE6fb65eHqR14wP8PJQ0VDCsOfoh5AVQ0LQ8tkC0GGgtEGy8cB4+RFlIvJQehLSwabTUnDZChJS9DKStLSzAFpkIbDBixK2E1Cg4OLCwStLVCCxXBvwo1GxUDHc/LxUMnEtADFRsFMBLdM1HTQy7d3QUxMA3o0uFCGQ3pDTEIKysGBhTsRYUGKy4BFQBVgMtXAwHACgECqGCgYhFBISIYMggAgYNFCA+FTLDIwQWNhBQH5hMBkoYCFyhd4COYwkRKBS9MyDTRiuAImQhoyiDAk0CWDF7sNPQkIGODgAlIJ5zINyLGBKcCooxAQZXqymIpNKBQQJXYJQEaBAgAIQNrBLFiXwxc8KJthLYjRFqS0bZuhEpEZCRIcGLviQwUUoDbkEJGAb57+V7NmyFDgcaQC4yQDLnxY8BtFozYPIJCZ86bPXvujLfNhgUUKMhQzXo1awoLgJraQHiB7RS2Y9+mnY+279++2wQBACH5BAkJADwALAAAAAAeAB4AhRQSFIyKjExOTMTGxDQyNKyqrGxubOTm5CQiJJyanFxeXNTW1ERCRLy6vHx+fPT29BwaHJSSlFRWVMzOzDw6PLSytHR2dOzu7CwqLKSipGRmZNze3ExKTMTCxISGhPz+/BQWFIyOjFRSVMzKzDQ2NKyurHRydOzq7CQmJJyenGRiZNza3ERGRLy+vISChPz6/BweHJSWlFxaXNTS1Dw+PLS2tHx6fPTy9CwuLKSmpGxqbOTi5P///wAAAAAAAAAAAAb+QJ5wOPzscjYJhyEwpFYfonTKe7U0JBwOg4DBICAAq/SiTjcmFoNCImxRXXCYNTMPWzIBR83ObhEIEBAAACAZdjUqMhIieywiJh4uBhxwXyBhAVQDBhoqChISATNlRSseOF5gAClSBy4mBjoqJnV2GzJxIDC2PB8ZDjYWkRd2Qw8GXV8cpSsBkg4uxcZDLwqWEBW+JTERz73UQhskXDACHzcZCTEhOVHhRAEYKHAbKzkZKQng8DzjBPMyTChRIEOGB/2IfJBBwI2NETVKSHyXUIgDNgQUjGjQoEKLikQiMKBBQcKEAS0adAA5JMYeBjJWjOjQogPFih4asTCwY8KyyQ4IQb4wwEhAiAsLZkwYsYPlCg0KFtV4sSLphBk34aXQ4UnBiQ8H7CU9UHGFjVg6XJR5sUPsghv9bkQIFmuCkA8ndrStGtRYuhDQYpSqcuLA3hVfzRjJ0A1wALJEHhRuu2EB4gfvPjzY0QKfvm52pzy4MNntDKUjUlaoUMBzaCovThQ2vKKqz5kpa1QguIIaOtmG7a1APYCmymm+X5AOXjnpiAEzDmT1rfnGZL0XMNsJAgAh+QQJCQA8ACwAAAAAHgAeAIUUEhSMioxMTkzExsQ0MjSsqqxsbmzk5uQkIiScmpxcXlzU1tREQkS8urx8fnz09vQcGhyUkpRUVlTMzsw8Ojy0srR0dnTs7uwsKiykoqRkZmTc3txMSkzEwsSEhoT8/vwUFhSMjoxUUlTMysw0NjSsrqx0cnTs6uwkJiScnpxkYmTc2txERkS8vryEgoT8+vwcHhyUlpRcWlzU0tQ8Pjy0trR8enz08vQsLiykpqRsamzk4uT///8AAAAAAAAAAAAG/kCecDj8HBohk0KhsuU2H6J0yntNAgqJiMWgkHAYhKDyok4PCYNOJRMJWDQKAYNCQDgz83AWcFhMGgptbzRfdDAQMBl6ExEBLjYWOhoGHhERDjKGCDAgIAFUKykxIX0OKStRQy8bASQoiCAAi0Q3JRmjIREbejwbMnUQACB5Qh8DJQUpCRk3vUIvBnaeLGU8Jw0VBTk5zs9CDzIwnQAlPB8zLQ3JO99EGziIACwfDyMdLTUdqu5CHpyeVlyYMKBDg3b9hqwIAwFEggMzRgxoYS3hORacIOjYsSDiCH4WTdSBIeDAihkTJlgk4gFHHQYHNpxcsHKIhzkIGJzYsaIjvsiEFgi4lHAjZs8HNV+IkIPDxoMDRk/UXACHBIEMH04c4AllZQAOXUhAubFTptSEMyRwgKMhyosLUGUidXfBQpu1HYyR3Xr02wUXgSQIMFHxwwWtMhcc+FlkhgcTa2TI4EXkxYmyJ2ccuKHqw40FBVz4MaBBRQsqD7TyXDDhXgd8FTIkKAXJgoEKelIbZV2wRo1ty0o5cJG319sdMiP21iabVIoD7uqd6NkaX40SOVJUWFEx+luTKUdM2MBZTxAAIfkECQkANwAsAAAAAB4AHgCFBAYEhIaExMbEREZE5ObkZGZkJCYkpKak1NbUtLa0VFZU9Pb0dHZ0PDo8HBocnJqczM7M7O7sLC4srK6s3N7cvL68XF5cfH58DA4MTE5MdHJ0/P78REJEJCIkpKKklJKUzMrM7OrsbGpsLCosrKqs3NrcvLq8XFpc/Pr8fHp8PD48HB4cnJ6c1NLU9PL0NDI0tLK05OLkxMLEZGJkhIKEFBIUVFJU////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv7Am3A43LhKlcnj82GZCBuidHrbhECTwzKQ0hRONk0FRZ0uEALThLRNib6ZgWqGKA9dCIhMrf3QGAxwGQ0vLwd2LhQIIGlZBxMJMCwpFjYDhCMdH1QLBBQlIHsgIWRFMQ8ZKi8GBg4eUlaeiyARdjcxIi8SHQ4rLUULIQQxLQiltgsMIysONRylRhExnwu2RCgWvDUYE1UoLhHDLtZSFCPNGCobG9/CMVHkRDToACXsLsLj8UQIK9sAH9hFCHdsXxUV/yzcixACnkEhBf6pa0fgIZEU/0YIZGhxCIOMC6F0vGFBYsiC+1C8+DfjXr6OAugFXABumMN9IujZ+yaNQoItgwJabVNBJpqnEvrIEeDACwMGEkKMCFMEIakdAgoyNXtWxF0LCAIo3LxWwcaLZStWQJDSSREjEyYQRIBnpUKKS2d5vZqSCNSeLA8Cf7gg4kQcVaw2lcHzds0WBhpmGB5U6BAyNHzavDEsh048KwJg9OHiBYwYlNaMIGHDxInIMkEAACH5BAkJADwALAAAAAAeAB4AhRQSFIyKjExOTMTGxDQyNKyqrGxubOTm5CQiJJyanFxeXNTW1ERCRLy6vHx+fPT29BwaHJSSlFRWVMzOzDw6PLSytHR2dOzu7CwqLKSipGRmZNze3ExKTMTCxISGhPz+/BQWFIyOjFRSVMzKzDQ2NKyurHRydOzq7CQmJJyenGRiZNza3ERGRLy+vISChPz6/BweHJSWlFxaXNTS1Dw+PLS2tHx6fPTy9CwuLKSmpGxqbOTi5P///wAAAAAAAAAAAAb+QJ5wOPy8LofVbDKarW4fonTK+zxOmxWz06qVCqnKKkqVHnfZ2WjQaVQKuVQslDmUh6/TYafcNrxxCREeLg4jdw9IaAtqAxMLEwMlggEeDhYGNVRHJ2hKG1BEHxctIQ42JjoqLVKjenwLN3c8FwkGqjIyG0U3ihsbL7NCLykaChIiJmScnsHCwx4yEgIsrB83rysXz0QnCtQMGh8fr79k3EIJHAwUJDtXB1nb6EM7LDQUBBk3eysLzvSqKMiHw8IFWAvOBbRBAgcGCfGULAhIJAABDChYJIE0g+IQFzhQIGCQpJFCegYwIIAh4ECjDg88vmCAAgYEHRf87KI4QiSxBBAJHozgUqMBQHQGakIAMGZGCzclOtIbgMEmCBZRTnQpkaMOugMMEPwEUELIhwEVuiZIsOPZAQ41QYBgAPBGiQxyQgSAWeZDDZpWIUyQsiJFAr0uLHhocMAZuQoKQooFASADlQkRQhTCpEGFilsiaJC4uPJngDszApy6pUKGCA73KDhUCiOFsAMJUqk4Bo6gTw5Shb2Y4EEFsnXtZosocfTZhwM1QphQoECDjRxj7gQBACH5BAkJADwALAAAAAAeAB4AhRQSFIyKjExOTMTGxDQyNKyqrGxubOTm5CQiJJyanFxeXNTW1ERCRLy6vHx+fPT29BwaHJSSlFRWVMzOzDw6PLSytHR2dOzu7CwqLKSipGRmZNze3ExKTMTCxISGhPz+/BQWFIyOjFRSVMzKzDQ2NKyurHRydOzq7CQmJJyenGRiZNza3ERGRLy+vISChPz6/BweHJSWlFxaXNTS1Dw+PLS2tHx6fPTy9CwuLKSmpGxqbOTi5P///wAAAAAAAAAAAAb+QJ5wOPx8HrfL4bA7XB4fonTK+7xup9Nut1ktZpPR7BSlSj/JE3PTnc1Gg06rMbiYh6+Leu0FD+JzFSUlK3cPektdCytsXSMNNYM5GSkTVIdqXCsHUERoMyWTCQkRlkQvmY03dzw3FaQhAQEHRUqaGy+sQi81IR4uDjFlD1srXrm6uxkuNhYmlh8nijN2yUMXDhYGOgFWxgsTK2XWQiXbKgpOX2G05EMnGioyEjU7b3/I7jwvFjIiAhFW/IkzTl+IfxwMzIhDRx+RBBxYMFAwoUGDCi0cDgnBgAYFCSNqCCpR0J0NjyRUTKhQYFI1fS9EkCCAw8aKHDlSJDClb8KzTAwoMtygRCpFPnIWCKBYuuFDhRghfHXQN0ApBgQicq2I5QJYIWsHWFyFAaGCkA/Lmpmw8JXVAQ4oEEAAwSHfgWwGDGjQUOGBGV4UEJAFgYCnkAEmdKCbp6HADmQfDpSQEXcwiAxUaixGyIKGgHkMlAqeCwJAgDstZAgQwKEjhZ9AR4MAASGFrg0mGDCgQIFmbMsAGBi+86KFBhI4cPwmzaHA0WQfduSwISGiCAMpVjwnEgQAIfkECQkANAAsAAAAAB4AHgCFBAYEhIaExMbEREJEpKak5ObkZGJkLCoslJaU1NbUtLa09Pb0HBocVFJUdHJ0jI6MzM7MrK6s7O7sPD48nJ6c3N7cvL68DA4MTEpMNDI0/P78JCIkXFpcfHp8jIqMzMrMREZErKqs7OrsZGZkLC4snJqc3NrcvLq8/Pr8HB4cVFZUdHZ0lJKU1NLUtLK09PL0pKKk5OLkxMLEFBIU////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AmnA41BiPSCNxyaQZUdCoFLVQNpeal3bLfUkW2gXqOlxIROc0ep1OL8ivgnwul9jP9EKs8Gq+KhUxJoEFKBpEGigSgSYxgH1ECwkmLQmTkFcoFZaTCW9CGiYfHxAfCWNkQpqjpAmHNCIyArIfn6mgLQKzAiJOHwonwQW3SwvBwQJZES4RETKvxEMtzcwvJgTYBBXRSy/ZIQkWJeMUttxOIeMlMiEsDywl0Oc0Lu4P6QH5JfNEJ/keJR50GMiC35AIA1e8c8Cwg7xzJRg6YEHBwAiLw/ihWGHRAIUTKjiEdGEwgUiRJwo0WNlghLloHlg2KKDBAYibIAjMg4ABp4yDQxYmCJ0wAAI3EQ2GTrCgikOGpxkmfCBWQAXUDBygmchwoOsBEiVeDkGhYILXryaWENiQYoPbFBNKnAJVIEQDt2zd6mTCIkUKBgz+Bj5AlMSGGYATp3hAhkKKCzMiS55MOQWFWxAGXNjMuXPnCUaJoQgxAYDp06gnhBCbKhQCAxMykBhggIWJh0SCAAAh+QQJCQA8ACwAAAAAHgAeAIUUEhSMioxMTkzExsQ0MjSsqqxsbmzk5uQkIiScmpxcXlzU1tREQkS8urx8fnz09vQcGhyUkpRUVlTMzsw8Ojy0srR0dnTs7uwsKiykoqRkZmTc3txMSkzEwsSEhoT8/vwUFhSMjoxUUlTMysw0NjSsrqx0cnTs6uwkJiScnpxkYmTc2txERkS8vryEgoT8+vwcHhyUlpRcWlzU0tQ8Pjy0trR8enz08vQsLiykpqRsamzk4uT///8AAAAAAAAAAAAG/kCecDj8vE6H3eFwuT0+H6J0yvucZoPJbLHa7HankzNKld4GjdZgNJpwu8pTk1zmrUqlSiO91nK9SxcXL3UTKRkFBSU1ajNeGyuRG0tyD1QzETEJKTklIyd0VQ8ncAdhlkQHAQEhmgUHdTwvO6UnhEIfMQ4urBk3sbi0gBdkEyYWNg4RF8BFkHCWHwE6BsgzzUQPC3+gBwoqOjohodg7W5EvNTIyChoD2FIPbFsXIQIiMirM8EUjfQcmOHAQoYEcvBkd1ixQwIAFBwP8pCxI02GGBAo0WGiISGRGBUYjVJDAKMAgtg55aoywgYMACQYbOMoqkEPRhAwocLTMIPPAsiZEXRCgwIBDACp+FTJtuvFBBIyhGBJE3OCBVYwKUSpAgCGUwDtsNwLsWrVCyAsWWxEgIDGi2QUX1ZKloDMDBoi0OGIclfJhgAENOkyYcHBCSgYQd7kiYJFgwy0rDUxIYKdCg4G2UwIAAJBYKAYaIiQIYMCAw73JKmrUSQGBc1oERF1ibGhaRgtgExhs7jy05ciMJmI2e1GCBeKtXHuT0NDiFrwPK1LoEOBQgo0cO0wKCQIAIfkECQkAPAAsAAAAAB4AHgCFFBIUjIqMTE5MxMbENDI0rKqsbG5s5ObkJCIknJqcXF5c1NbUREJEvLq8fH589Pb0HBoclJKUVFZUzM7MPDo8tLK0dHZ07O7sLCospKKkZGZk3N7cTEpMxMLEhIaE/P78FBYUjI6MVFJUzMrMNDY0rK6sdHJ07OrsJCYknJ6cZGJk3NrcREZEvL68hIKE/Pr8HB4clJaUXFpc1NLUPD48tLa0fHp89PL0LC4spKakbGps5OLk////AAAAAAAAAAAABv5AnnA4/NxWk9FotjhcXh+idMr7rEqZXKnW6owmi9XhEaVKD5lALJEpVLiD5Wqze5qHA4fLE4qlcm4NHQMTM3M7Jw93NQYmNi4BEQk5HYUzSmArOweJVC0qOgYWDh4VB2VCHw87YXROL1IbMjIqGiYeG3c8DxtznBeoHyYCEgoqHje6Qi87mpw3ZS0MHCISBifKRTuudh8aDCwCIiPZRA++J9A7JBQ0HBaw5UMnzicvGTgkNAw18kQvC1w9sICDAAUG2PylWuHrhgQMBQWgUrghICIGCCDKUEhkB5MNBxjAQIFDAschG0aE2SEARkYa8Tgu+LJghw4ILnHk4vhhgLyXGQcSgMCJIsHJC4II0QMAwiUDRQpHVOgyggyLoSNjKDxRYEuLGVFKAACAEwe5cjcKaKnQIOELBkxdEjir60KGGFlKDEA1AwRWkgmgTvkwI0QfNiWSEUnBFCcGDAIybIj34UKHCBb2RPCzgkqAxghIshOgwYAGFSoaPQoQYsKdFDCIYiCgb1q1WqIcBHCtawYLCKFntwsngpYOExEOlHtRQkToggc5EFPgYULMch82ZLChQoYCEyEanLoTBAA7') }\n                div[data-form-block-id] .ui-menu .ui-loading-item-wrapper { padding: 8px 8px 8px calc(1em + 16px); }\n                div[data-form-block-id] .ui-menu .ui-menu-item { margin: 0; cursor: pointer; list-style-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"); }\n                div[data-form-block-id] .ui-menu .ui-menu-item-wrapper { position: relative; padding: 3px 1em 3px .4em; }\n                div[data-form-block-id] .ui-selectmenu-menu .ui-menu { overflow: auto; overflow-x: hidden; padding-bottom: 1px; max-height:200px; }\n                div[data-form-block-id] .ui-widget.ui-widget-content { border: 1px solid #c5c5c5; }\n                div[data-form-block-id] .ui-state-active { border: 1px solid #003eff; background: #007fff; font-weight: normal; color: #ffffff; }\n                div[data-form-block-id] .lookup-behavior { border: 1px solid; background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJUExURQAAALm5uV9fX11dXb6+vt3d3QEBAWFhYYGBgQUFBeHh4SUlJYWFhaWlpSkpKUlJSampqcnJyU1NTW1tbc3Nze3t7RAQEHFxcZCQkBQUFPHx8TQ0NJWVlbS0tDg4OFhYWNjY2FxcXHx8fNzc3Pz8/CAgIICAgKCgoCQkJERERKSkpMTExEhISGhoaMjIyOjo6AsLC2xsbIyMjOzs7C8vL6+vrzMzM1NTU9PT01dXV3d3d/f39xsbG3t7e5ubmx8fH/v7+5+fnwAAAK01p50AAABDdFJOU////////////////////////////////////////////////////////////////////////////////////////wBBYgTvAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA9klEQVRYw+3WRRLDMAwFUKXM3DTllJmZ4f6H6qIwSQMe21pKB3iTie2vD0/UAeKII4444ogjjskpHvbwfJ0XWOPj4fwBhhbk+3chdy0c4TyKqCsX4z3ZuJuW4L8oSRcuxc+lnbWMyDXOOnI5ES6vOmgFsUem2WvFkuCbLdtyFdEIqNppNfFEqdtwijinW7WGTN41LVxLhmt3/rSuXBr3zFpfNtwHJm4oy42M2lh+9UwM3FSem81/2gJjMS6/mrpC2bPrD6fhrO3NW9titYAdAABUsbg9AMABr6McAUDH405nuGA2qOvtjlrIHtQ+iSOOOOKII453XqrPlBvWgyjkAAAAAElFTkSuQmCC'); background-repeat: no-repeat; background-position-x: right; background-position-y: center; background-size: 1em 1em; filter: drop-shadow(0 0 1px black); }\n                div[data-form-block-id] .lookup-loading { }\n                div[data-form-block-id] .ui-widget-content { border: 1px solid #dddddd;\tbackground: #ffffff; color: #333333; }";
            var head = document.head || document.getElementsByTagName("head")[0];
            var style = document.createElement("style");
            style.id = defaultStyleElementId;
            style.type = "text/css";
            style.appendChild(document.createTextNode(css));
            head.insertBefore(style, head.firstChild)
        }
        ;
        return CssProvider
    }();
    MsCrmMkt.CssProvider = CssProvider
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Localization = function() {
        function Localization() {}
        Localization.labels = {
            "ar-sa": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Ù‚Ø¯ Ù„Ø§ ÙŠÙƒÙˆÙ† Ø§Ù„Ù…Ø¬Ø§Ù„ Ø­ÙŠØ« ØªÙ… ØªØ¶Ù…ÙŠÙ† Ù‡Ø°Ø§ Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ Ù…Ø¯Ø±Ø¬Ù‹Ø§ ÙƒØ³Ø¬Ù„ Ù…Ø¬Ø§Ù„ Ù„Ù„Ù†Ù…Ø§Ø°Ø¬ Ø§Ù„Ù…Ø³ØªØ¶Ø§ÙØ© Ø®Ø§Ø±Ø¬ÙŠÙ‹Ø§. ÙˆØ¥Ù„Ø§ØŒ ÙÙ…Ù† Ø§Ù„Ù…Ø­ØªÙ…Ù„ Ø£Ù† ÙŠÙƒÙˆÙ† Ù…Ù„Ø­Ù‚ Ø§Ù„Ù…Ø³ØªØ¹Ø±Ø¶ Ø£Ùˆ Ù…ÙƒÙˆÙ† Ø¥Ø¶Ø§ÙÙŠ ÙŠÙ…Ù†Ø¹ ØªØ­Ù…ÙŠÙ„ Ù‡Ø°Ø§ Ø§Ù„Ù†Ù…ÙˆØ°Ø¬. ÙŠØ±Ø¬Ù‰ Ù…Ø±Ø§Ø¬Ø¹Ø© Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ ÙˆØ¥Ø¹Ø§Ø¯Ø© ØªØ­Ù…ÙŠÙ„Ù‡ Ù„Ù„Ù…ØªØ§Ø¨Ø¹Ø©."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Ù‚Ø±Ø§Ø¡Ø© Ø§Ù„Ù…Ø²ÙŠØ¯"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Ø§Ù†ØªÙ‡Øª ØµÙ„Ø§Ø­ÙŠØ© Ø§Ù„Ù†Ù…ÙˆØ°Ø¬."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„ØªØ­Ù…ÙŠÙ„"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Ø­Ø§ÙˆÙ„ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Ù„Ø§ ÙŠÙ…ÙƒÙ†Ù†Ø§ Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ ØµÙØ­Ø© Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„ØªÙŠ ØªØ­Ø§ÙˆÙ„ ØªØ­Ù…ÙŠÙ„Ù‡Ø§: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø¥Ø¹Ø¯Ø§Ø¯ ØµÙØ­ØªÙƒ.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Ù„ÙŠØ³ Ù„Ø¯Ù‰ Ù†Ù…ÙˆØ°Ø¬ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø­Ø¯Ø« Ø£ÙŠ Ø­Ø¯Ø« Ù…Ù‚ØªØ±Ù† Ø¨Ù‡."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Ø¹Ø¯Ø¯ Ø§Ù„Ø·Ù„Ø¨Ø§Øª ÙƒØ¨ÙŠØ± Ø¬Ø¯Ù‹Ø§. ÙŠÙØ±Ø¬Ù‰ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù„Ø§Ø­Ù‚Ù‹Ø§."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "ÙŠØªØ¹Ø°Ø± Ø¹Ù„ÙŠÙ†Ø§ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø§ØªØµØ§Ù„ Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ. ØªØ£ÙƒØ¯ Ù…Ù† Ø¹Ø¯Ù… Ø­Ø¸Ø± Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø£Ùˆ Ø§Ø³ØªØ®Ø¯Ù… Ø§Ø±ØªØ¨Ø§Ø· Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø§Ø´ØªØ±Ø§Ùƒ ÙÙŠ Ø¨Ø±ÙŠØ¯Ùƒ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Ø­Ø¯Ø¯ Ø®ÙŠØ§Ø±Ù‹Ø§ ÙˆØ§Ø­Ø¯Ù‹Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Ø­Ø¯Ø¯ Ø®ÙŠØ§Ø±Ù‹Ø§ ÙˆØ§Ø­Ø¯Ù‹Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Ø§Ø®ØªÙŠØ§Ø± Ø­Ù‚Ù„ ØµØ§Ù„Ø­ Ù…Ù† Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„ Ù…Ø·Ù„ÙˆØ¨"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "ØªÙ… ØªØ¬Ø§ÙˆØ² Ø­Ø¯ Ø¹Ø¯Ø¯ Ø§Ù„Ø·Ù„Ø¨Ø§Øª"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Ø¥Ø¸Ù‡Ø§Ø± Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ Ø¹Ù„Ù‰ Ø£ÙŠ Ø­Ø§Ù„"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ø¬Ø§Ø±Ù Ø§Ù„ØªØ­Ù…ÙŠÙ„..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ø¬Ø§Ø±Ù ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø²ÙŠØ¯..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Ø§Ù„Ø®Ø§Ø¯Ù… Ù…Ø´ØºÙˆÙ„ Ø§Ù„Ø¢Ù† ÙˆÙ„Ø§ ÙŠØªÙ… Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù‚ÙŠÙ…Ø­Ø§ÙˆÙ„ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰ ÙÙŠ ÙˆÙ‚Øª Ù„Ø§Ø­Ù‚."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Ø­Ø¯Ø«Øª Ù…Ø´ÙƒÙ„Ø© ÙÙŠ Ø§Ø³ØªØ±Ø¯Ø§Ø¯ Ø§Ù„Ø¹Ù†Ø§ØµØ±Ø­Ø§ÙˆÙ„ Ù…Ø±Ø© Ø£Ø®Ø±Ù‰ ÙÙŠ ÙˆÙ‚Øª Ù„Ø§Ø­Ù‚."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø©"
                }
            },
            "bg-bg": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Ð”Ð¾Ð¼ÐµÐ¹Ð½ÑŠÑ‚, Ð² ÐºÐ¾Ð¹Ñ‚Ð¾ Ðµ Ð²Ð³Ñ€Ð°Ð´ÐµÐ½ Ñ‚Ð¾Ð·Ð¸ Ñ„Ð¾Ñ€Ð¼ÑƒÐ»ÑÑ€, Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð½Ðµ Ðµ Ð²ÐºÐ»ÑŽÑ‡ÐµÐ½ ÐºÐ°Ñ‚Ð¾ Ð·Ð°Ð¿Ð¸Ñ Ð½Ð° Ð´Ð¾Ð¼ÐµÐ¹Ð½ Ð·Ð° Ð²ÑŠÐ½ÑˆÐ½Ð¾ Ñ…Ð¾ÑÑ‚Ð²Ð°Ð½Ð¸ Ñ„Ð¾Ñ€Ð¼ÑƒÐ»ÑÑ€Ð¸. Ð’ Ð¿Ñ€Ð¾Ñ‚Ð¸Ð²ÐµÐ½ ÑÐ»ÑƒÑ‡Ð°Ð¹ Ñ€Ð°Ð·ÑˆÐ¸Ñ€ÐµÐ½Ð¸ÐµÑ‚Ð¾ Ð¸Ð»Ð¸ Ð´Ð¾Ð±Ð°Ð²ÐºÐ°Ñ‚Ð° Ð½Ð° Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€Ð° Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð°Ñ‚ Ð·Ð°Ñ€ÐµÐ¶Ð´Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ñ‚Ð¾Ð·Ð¸ Ñ„Ð¾Ñ€Ð¼ÑƒÐ»ÑÑ€. ÐŸÑ€ÐµÐ³Ð»ÐµÐ´Ð°Ñ‚Ðµ Ð¸ Ð·Ð°Ñ€ÐµÐ´ÐµÑ‚Ðµ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾ Ñ„Ð¾Ñ€Ð¼ÑƒÐ»ÑÑ€Ð°, Ð·Ð° Ð´Ð° Ð¿Ñ€Ð¾Ð´ÑŠÐ»Ð¶Ð¸Ñ‚Ðµ."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "ÐŸÑ€Ð¾Ñ‡ÐµÑ‚ÐµÑ‚Ðµ Ð¿Ð¾Ð²ÐµÑ‡Ðµ"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Ð¤Ð¾Ñ€Ð¼ÑƒÐ»ÑÑ€ÑŠÑ‚ Ðµ Ð¸Ð·Ñ‚ÐµÐºÑŠÐ»."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾ Ð·Ð°Ñ€ÐµÐ¶Ð´Ð°Ð½Ðµ"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€ÐµÐ½ Ð¾Ð¿Ð¸Ñ‚"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'ÐÐµ Ð¼Ð¾Ð¶ÐµÐ¼ Ð´Ð° Ð½Ð°Ð¼ÐµÑ€Ð¸Ð¼ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°Ñ‚Ð° Ñ Ñ„Ð¾Ñ€Ð¼ÑƒÐ»ÑÑ€Ð¸, ÐºÐ¾ÑÑ‚Ð¾ ÑÐµ Ð¾Ð¿Ð¸Ñ‚Ð²Ð°Ñ‚Ðµ Ð´Ð° Ð·Ð°Ñ€ÐµÐ´Ð¸Ñ‚Ðµ: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. ÐœÐ¾Ð»Ñ, Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐµÑ‚Ðµ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ°Ñ‚Ð° Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°Ñ‚Ð° ÑÐ¸.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Ð¢Ð¾Ð·Ð¸ Ñ„Ð¾Ñ€Ð¼ÑƒÐ»ÑÑ€ Ð·Ð° Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ Ð·Ð° ÑÑŠÐ±Ð¸Ñ‚Ð¸Ðµ Ð½ÑÐ¼Ð° ÑÐ²ÑŠÑ€Ð·Ð°Ð½Ð¾ Ñ Ð½ÐµÐ³Ð¾ ÑÑŠÐ±Ð¸Ñ‚Ð¸Ðµ."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Ð¢Ð²ÑŠÑ€Ð´Ðµ Ð¼Ð½Ð¾Ð³Ð¾ Ð·Ð°ÑÐ²ÐºÐ¸. ÐœÐ¾Ð»Ñ, Ð¾Ð¿Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾ Ð¿Ð¾-ÐºÑŠÑÐ½Ð¾."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "ÐÐµ Ð¼Ð¾Ð¶ÐµÐ¼ Ð´Ð° Ð¿Ð¾Ñ‚Ð²ÑŠÑ€Ð´Ð¸Ð¼ Ð²Ð°ÑˆÐ°Ñ‚Ð° Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð·Ð° ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚. Ð£Ð²ÐµÑ€ÐµÑ‚Ðµ ÑÐµ, Ñ‡Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ Ð½Ðµ ÑÐ° Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð°Ð½Ð¸ Ð¸Ð»Ð¸ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¹Ñ‚Ðµ Ð²Ñ€ÑŠÐ·ÐºÐ°Ñ‚Ð° Ð·Ð° Ð¾Ñ‚Ð¿Ð¸ÑÐ²Ð°Ð½Ðµ Ð² Ð¸Ð¼ÐµÐ¹Ð»Ð° ÑÐ¸."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ð¿Ð¾Ð½Ðµ ÐµÐ´Ð½Ð° Ð¾Ð¿Ñ†Ð¸Ñ"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ð¿Ð¾Ð½Ðµ ÐµÐ´Ð½Ð° Ð¾Ð¿Ñ†Ð¸Ñ"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Ð˜Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ð²Ð°Ð»Ð¸Ð´Ð½Ð¾ Ð¿Ð¾Ð»Ðµ Ð¾Ñ‚ ÑÐ¿Ð¸ÑÑŠÐºÐ°"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Ð¢Ð¾Ð²Ð° Ð¿Ð¾Ð»Ðµ Ðµ Ð·Ð°Ð´ÑŠÐ»Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð¾"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "ÐžÐ³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸ÐµÑ‚Ð¾ Ð·Ð° Ð±Ñ€Ð¾Ñ Ð½Ð° Ð·Ð°ÑÐ²ÐºÐ¸Ñ‚Ðµ Ðµ Ð¿Ñ€ÐµÐ²Ð¸ÑˆÐµÐ½Ð¾"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "ÐŸÐ¾ÐºÐ°Ð·Ð²Ð°Ð½Ðµ Ð½Ð° Ñ„Ð¾Ñ€Ð¼ÑƒÐ»ÑÑ€Ð° Ð²ÑŠÐ¿Ñ€ÐµÐºÐ¸ Ñ‚Ð¾Ð²Ð°"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ð·Ð°Ñ€ÐµÐ¶Ð´Ð°Ð½Ðµ..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ð·Ð°Ñ€ÐµÐ¶Ð´Ð°Ð½Ðµ Ð½Ð° Ð¾Ñ‰Ðµ..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Ð¡ÑŠÑ€Ð²ÑŠÑ€ÑŠÑ‚ Ðµ Ð·Ð°ÐµÑ‚ Ð² Ð¼Ð¾Ð¼ÐµÐ½Ñ‚Ð° Ð¸ Ð½Ðµ Ð²ÑÐ¸Ñ‡ÐºÐ¸ ÑÑ‚Ð¾Ð¹Ð½Ð¾ÑÑ‚Ð¸ ÑÐµ Ð¸Ð·Ð²Ð»Ð¸Ñ‡Ð°Ñ‚. ÐžÐ¿Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾ Ð¿Ð¾-ÐºÑŠÑÐ½Ð¾."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Ð’ÑŠÐ·Ð½Ð¸ÐºÐ½Ð° Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼ Ð¿Ñ€Ð¸ Ð¸Ð·Ð²Ð»Ð¸Ñ‡Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸. ÐžÐ¿Ð¸Ñ‚Ð°Ð¹Ñ‚Ðµ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾ Ð¿Ð¾-ÐºÑŠÑÐ½Ð¾."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "ÐžÐ¿Ð¸Ñ‚ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾"
                }
            },
            "ca-es": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Ã‰s possible que el domini on estÃ  incrustat aquest formulari no figuri en un registre de domini per a formularis allotjats externament. Si no Ã©s aixÃ­, Ã©s possible que un complement o una extensiÃ³ del navegador bloquegi la cÃ rrega d'aquest formulari. Reviseu i torneu a carregar el formulari per continuar."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "MÃ©s informaciÃ³"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "El formulari ha caducat."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Torna a carregar"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Torna-ho a provar"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'No trobem la pÃ gina del formulari que intenteu carregar: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Consulteu la configuraciÃ³ de la pÃ gina.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "El formulari d'inscripciÃ³ a l'esdeveniment no tÃ© associat cap esdeveniment."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Hi ha massa solÂ·licituds. Torneu-ho a provar mÃ©s tard."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "No podem verificar la vostra informaciÃ³ de contacte. Assegureu-vos que les galetes no estiguin bloquejades o utilitzeu l'enllaÃ§ per anulÂ·lar la subscripciÃ³ del vostre correu electrÃ²nic."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Seleccioneu almenys una opciÃ³"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Seleccioneu almenys una opciÃ³"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Trieu un camp vÃ lid de la llista"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Aquest camp Ã©s obligatori"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "El lÃ­mit de recompte de solÂ·licituds s'ha excedit"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Mostra el formulari de totes maneres"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "s'estÃ  carregant..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "s'estÃ  carregant mÃ©s..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "El servidor estÃ  ocupat ara mateix i no s'estan recuperant tots els valors. Torneu-ho a provar mÃ©s tard."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "S'ha produÃ¯t un problema en recuperar els elements. Torneu-ho a provar mÃ©s tard."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Torna-ho a provar"
                }
            },
            "cs-cz": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "DomÃ©na, ve kterÃ© je tento formulÃ¡Å™ vloÅ¾en, nemusÃ­ bÃ½t zapsÃ¡na jako zÃ¡znam domÃ©ny pro externÄ› hostovanÃ© formulÃ¡Å™e. V opaÄnÃ©m pÅ™Ã­padÄ› mÅ¯Å¾e rozÅ¡Ã­Å™enÃ­ prohlÃ­Å¾eÄe nebo modul plug-in blokovat naÄÃ­tÃ¡nÃ­ tohoto formulÃ¡Å™e. Chcete-li pokraÄovat, zkontrolujte a znovu naÄtÄ›te formulÃ¡Å™."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "ÄŒÃ­st dÃ¡l"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Platnost formulÃ¡Å™e vyprÅ¡ela."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Znovu naÄÃ­st"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Opakovat"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'NemÅ¯Å¾eme najÃ­t strÃ¡nku formulÃ¡Å™e, kterou se pokouÅ¡Ã­te naÄÃ­st: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. OvÄ›Å™te nastavenÃ­ strÃ¡nky.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "FormulÃ¡Å™ registrace na akci nemÃ¡ k sobÄ› Å¾Ã¡dnou pÅ™idruÅ¾enou akci."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "PÅ™Ã­liÅ¡ mnoho Å¾Ã¡dostÃ­. Zkuste to znovu pozdÄ›ji."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "NemÅ¯Å¾eme ovÄ›Å™it vaÅ¡e kontaktnÃ­ Ãºdaje. UjistÄ›te se, Å¾e soubory cookie nejsou blokovÃ¡ny, nebo pouÅ¾ijte odkaz pro odhlÃ¡Å¡enÃ­ ve vaÅ¡em e-mailu."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Vyberte alespoÅˆ jednu moÅ¾nost"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Vyberte alespoÅˆ jednu moÅ¾nost"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Ze seznamu zvolte platnÃ© pole"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Toto pole je povinnÃ©"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Byl pÅ™ekroÄen limit poÄtu poÅ¾adavkÅ¯"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "PÅ™esto formulÃ¡Å™ zobrazit"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "NaÄÃ­tÃ¡nÃ­"
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "NaÄÃ­tajÃ­ se dalÅ¡Ã­..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Server je nynÃ­ zaneprÃ¡zdnÄ›n a nejsou naÄteny vÅ¡echny hodnoty. Zkuste to znovu pozdÄ›ji."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "PÅ™i naÄÃ­tÃ¡nÃ­ poloÅ¾ek doÅ¡lo k potÃ­Å¾Ã­m. Zkuste to znovu pozdÄ›ji."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Opakovat"
                }
            },
            "da-dk": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Det domÃ¦ne, som denne formular er integreret i, registreres muligvis ikke som en domÃ¦nepost for eksternt hostede formularer. Ellers blokerer en browserudvidelse eller en plug-in muligvis for denne formular, sÃ¥ den ikke kan indlÃ¦ses. Gennemse og genindlÃ¦s formularer for at fortsÃ¦tte."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "LÃ¦s mere"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Formularen er udlÃ¸bet."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "GenindlÃ¦s"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "PrÃ¸v igen"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Vi kan ikke finde den formularside, du forsÃ¸ger at indlÃ¦se: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. KontrollÃ©r sideopsÃ¦tningen.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Formularen til arrangementstilmelding har ikke noget arrangement knyttet til sig."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Der er for mange anmodninger. PrÃ¸v igen senere."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Vi kan ikke kontrollere dine kontaktoplysninger. KontrollÃ©r, at cookies ikke er blokeret, eller brug linket Opsig abonnement i din mail."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "VÃ¦lg mindst Ã©n indstilling"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "VÃ¦lg mindst Ã©n indstilling"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "VÃ¦lg et gyldigt felt pÃ¥ listen"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Dette felt er obligatorisk"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "GrÃ¦nsen for antal anmodninger blev overskredet"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Vis formular alligevel"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "indlÃ¦ser..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "indlÃ¦ser flere..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Serveren er optaget i Ã¸jeblikket, og det er ikke alle vÃ¦rdier, der hentes. PrÃ¸v igen senere."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Der opstod et problem under hentning af elementer. PrÃ¸v igen senere."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "PrÃ¸v igen"
                }
            },
            "de-de": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Die DomÃ¤ne, in die dieses Formular eingebettet ist, wird mÃ¶glicherweise nicht als DomÃ¤neneintrag fÃ¼r extern gehostete Formulare erfasst. Andernfalls blockiert mÃ¶glicherweise eine Browsererweiterung oder ein Plug-In das Laden dieses Formulars. ÃœberprÃ¼fen Sie das Formular, und laden Sie es erneut, um fortzufahren."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Weitere Informationen"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Das Formular ist abgelaufen."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Neu laden"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Wiederholen"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Die Formularseite, die Sie laden mÃ¶chten, kann nicht gefunden werden: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Bitte Ã¼berprÃ¼fen Sie die Seiteneinrichtung.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Dem Ereignisregistierungsformular ist kein Ereignis zugeordnet."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Zu viele Anforderungen. Versuchen Sie es spÃ¤ter erneut."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Ihre Kontaktinformationen kÃ¶nnen nicht Ã¼berprÃ¼ft werden. Stellen Sie sicher, dass Cookies nicht blockiert sind. Verwenden Sie alternativ den Link zum KÃ¼ndigen des Abonnements in Ihrer E-Mail."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Mindestens eine Option auswÃ¤hlen"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Mindestens eine Option auswÃ¤hlen"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "WÃ¤hlen Sie ein gÃ¼ltiges Feld aus der Liste aus."
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Dieses Feld ist ein Pflichtfeld"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "HÃ¶chstanzahl an Anforderungen wurde Ã¼berschritten"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Formular sowieso anzeigen"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "wird geladenÂ ..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "mehr werden geladenÂ ..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Der Server ist derzeit ausgelastet, und es werden nicht alle Werte abgerufen. Versuchen Sie es spÃ¤ter erneut."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Beim Abrufen von Elementen ist ein Problem aufgetreten. Versuchen Sie es spÃ¤ter erneut."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Wiederholen"
                }
            },
            "el-gr": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "ÎŸ Ï„Î¿Î¼Î­Î±Ï‚ ÏƒÏ„Î¿Î½ Î¿Ï€Î¿Î¯Î¿ ÎµÎ¯Î½Î±Î¹ ÎµÎ½ÏƒÏ‰Î¼Î±Ï„Ï‰Î¼Î­Î½Î· Î±Ï…Ï„Î® Î· Ï†ÏŒÏÎ¼Î± Î¯ÏƒÏ‰Ï‚ Î½Î± Î¼Î·Î½ ÎµÎ¯Î½Î±Î¹ ÎºÎ±Ï„Î±Ï‡Ï‰ÏÎ·Î¼Î­Î½Î¿Ï‚ Ï‰Ï‚ ÎºÎ±ÏÏ„Î­Î»Î± Ï„Î¿Î¼Î­Î± Î³Î¹Î± Ï†ÏŒÏÎ¼ÎµÏ‚ Ï€Î¿Ï… Ï†Î¹Î»Î¿Î¾ÎµÎ½Î¿ÏÎ½Ï„Î±Î¹ ÎµÎ¾Ï‰Ï„ÎµÏÎ¹ÎºÎ¬. Î”Î¹Î±Ï†Î¿ÏÎµÏ„Î¹ÎºÎ¬, Î¼Î¹Î± ÎµÏ€Î­ÎºÏ„Î±ÏƒÎ· Î® Ï€ÏÎ¿ÏƒÎ¸Î®ÎºÎ· Ï€ÏÎ¿Î³ÏÎ¬Î¼Î¼Î±Ï„Î¿Ï‚ Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚ ÎµÎ½Î´Î­Ï‡ÎµÏ„Î±Î¹ Î½Î± Î±Ï€Î¿ÎºÎ»ÎµÎ¯ÎµÎ¹ Ï„Î· Ï†ÏŒÏÏ„Ï‰ÏƒÎ· Î±Ï…Ï„Î®Ï‚ Ï„Î·Ï‚ Ï†ÏŒÏÎ¼Î±Ï‚. Î•Î¾ÎµÏ„Î¬ÏƒÏ„Îµ ÎºÎ±Î¹ Ï†Î¿ÏÏ„ÏŽÏƒÏ„Îµ ÎµÎº Î½Î­Î¿Ï… Ï„Î· Ï†ÏŒÏÎ¼Î± Î³Î¹Î± Î½Î± ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÎµÏ„Îµ."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Î”Î¹Î±Î²Î¬ÏƒÏ„Îµ Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ±"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Î— Ï†ÏŒÏÎ¼Î± Î­Ï‡ÎµÎ¹ Î»Î®Î¾ÎµÎ¹."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Î•Ï€Î±Î½Î¬Î»Î·ÏˆÎ· Ï†ÏŒÏÏ„Ï‰ÏƒÎ·Ï‚"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "ÎÎ­Î± Ï€ÏÎ¿ÏƒÏ€Î¬Î¸ÎµÎ¹Î±"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Î”ÎµÎ½ ÎµÎ¯Î½Î±Î¹ Î´Ï…Î½Î±Ï„Î® Î· ÎµÏÏÎµÏƒÎ· Ï„Î·Ï‚ ÏƒÎµÎ»Î¯Î´Î±Ï‚ Ï†ÏŒÏÎ¼Î±Ï‚ Ï€Î¿Ï… Ï€ÏÎ¿ÏƒÏ€Î±Î¸ÎµÎ¯Ï„Îµ Î½Î± Ï†Î¿ÏÏ„ÏŽÏƒÎµÏ„Îµ: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Î•Î»Î­Î³Î¾Ï„Îµ Ï„Î¹Ï‚ ÏÏ…Î¸Î¼Î¯ÏƒÎµÎ¹Ï‚ Ï„Î·Ï‚ ÏƒÎµÎ»Î¯Î´Î±Ï‚ ÏƒÎ±Ï‚.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Î— Ï†ÏŒÏÎ¼Î± ÎµÎ³Î³ÏÎ±Ï†Î®Ï‚ ÏƒÎµ ÎµÎºÎ´Î®Î»Ï‰ÏƒÎ· Î´ÎµÎ½ Î­Ï‡ÎµÎ¹ ÏƒÏ…ÏƒÏ‡ÎµÏ„Î¹ÏƒÎ¼Î­Î½Î· ÎµÎºÎ´Î®Î»Ï‰ÏƒÎ· Î¼Îµ Î±Ï…Ï„Î®Î½."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Î Î¬ÏÎ± Ï€Î¿Î»Î»Î­Ï‚ Î±Î¹Ï„Î®ÏƒÎµÎ¹Ï‚. Î”Î¿ÎºÎ¹Î¼Î¬ÏƒÏ„Îµ Î¾Î±Î½Î¬ Î±ÏÎ³ÏŒÏ„ÎµÏÎ±."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Î”ÎµÎ½ ÎµÎ¯Î½Î±Î¹ Î´Ï…Î½Î±Ï„Î® Î· ÎµÏ€Î±Î»Î®Î¸ÎµÏ…ÏƒÎ· Ï„Ï‰Î½ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¹ÏŽÎ½ ÎµÏ€Î¹ÎºÎ¿Î¹Î½Ï‰Î½Î¯Î±Ï‚ ÏƒÎ±Ï‚. Î’ÎµÎ²Î±Î¹Ï‰Î¸ÎµÎ¯Ï„Îµ ÏŒÏ„Î¹ Ï„Î± cookie Î´ÎµÎ½ Î­Ï‡Î¿Ï…Î½ Î±Ï€Î¿ÎºÎ»ÎµÎ¹ÏƒÏ„ÎµÎ¯ Î® Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÏ„Îµ Ï„Î· ÏƒÏÎ½Î´ÎµÏƒÎ· ÎºÎ±Ï„Î¬ÏÎ³Î·ÏƒÎ·Ï‚ ÎµÎ³Î³ÏÎ±Ï†Î®Ï‚ ÏƒÏ„Î¿ Î¼Î®Î½Ï…Î¼Î± Î·Î»ÎµÎºÏ„ÏÎ¿Î½Î¹ÎºÎ¿Ï Ï„Î±Ï‡Ï…Î´ÏÎ¿Î¼ÎµÎ¯Î¿Ï…."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "ÎšÎ¬Î½Ï„Îµ Ï„Î¿Ï…Î»Î¬Ï‡Î¹ÏƒÏ„Î¿Î½ Î¼Î¯Î± ÎµÏ€Î¹Î»Î¿Î³Î®"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "ÎšÎ¬Î½Ï„Îµ Ï„Î¿Ï…Î»Î¬Ï‡Î¹ÏƒÏ„Î¿Î½ Î¼Î¯Î± ÎµÏ€Î¹Î»Î¿Î³Î®"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Î•Ï€Î¹Î»Î­Î¾Ï„Îµ Î­Î½Î± Î­Î³ÎºÏ…ÏÎ¿ Ï€ÎµÎ´Î¯Î¿ Î±Ï€ÏŒ Ï„Î· Î»Î¯ÏƒÏ„Î±"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Î‘Ï…Ï„ÏŒ Ï„Î¿ Ï€ÎµÎ´Î¯Î¿ ÎµÎ¯Î½Î±Î¹ Ï…Ï€Î¿Ï‡ÏÎµÏ‰Ï„Î¹ÎºÏŒ"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "ÎˆÎ³Î¹Î½Îµ Ï…Ï€Î­ÏÎ²Î±ÏƒÎ· Ï„Î¿Ï… Î¿ÏÎ¯Î¿Ï… Ï€Î»Î®Î¸Î¿Ï…Ï‚ Î±Î¹Ï„Î®ÏƒÎµÏ‰Î½"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Î•Î¼Ï†Î¬Î½Î¹ÏƒÎ· Ï†ÏŒÏÎ¼Î±Ï‚ Î¿ÏÏ„Ï‰Ï‚ Î® Î¬Î»Î»Ï‰Ï‚"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ï†ÏŒÏÏ„Ï‰ÏƒÎ·..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ï†ÏŒÏÏ„Ï‰ÏƒÎ· Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÏ‰Î½..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "ÎŸ Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏƒÏ„Î®Ï‚ ÎµÎ¯Î½Î±Î¹ Î±Ï€Î±ÏƒÏ‡Î¿Î»Î·Î¼Î­Î½Î¿Ï‚ Î±Ï…Ï„Î® Ï„Î· ÏƒÏ„Î¹Î³Î¼Î® ÎºÎ±Î¹ Î´ÎµÎ½ Î±Î½Î±ÎºÏ„ÏŽÎ½Ï„Î±Î¹ ÏŒÎ»ÎµÏ‚ Î¿Î¹ Ï„Î¹Î¼Î­Ï‚. Î”Î¿ÎºÎ¹Î¼Î¬ÏƒÏ„Îµ Î¾Î±Î½Î¬ Î±ÏÎ³ÏŒÏ„ÎµÏÎ±."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Î¥Ï€Î®ÏÎ¾Îµ Ï€ÏÏŒÎ²Î»Î·Î¼Î± Î±Î½Î¬ÎºÏ„Î·ÏƒÎ·Ï‚ ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Ï‰Î½. Î”Î¿ÎºÎ¹Î¼Î¬ÏƒÏ„Îµ Î¾Î±Î½Î¬ Î±ÏÎ³ÏŒÏ„ÎµÏÎ±."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Î•Ï€Î±Î½Î¬Î»Î·ÏˆÎ·"
                }
            },
            "en-au": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "The domain where this form is embedded might not be enlisted as a domain record for externally hosted forms. Otherwise, a browser extension or plugin may be blocking this form from loading. Review and reload form to continue."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Read more"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "The form has expired."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Reload"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Try again"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'We can\'t find the form page you\'re trying to load: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Please check your page setup.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "The event registration form has no event associated with it."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Too many requests. Please try again later."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "We're unable to verify your contact information. Make sure cookies are not blocked or use the unsubscribe link in your email."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Select at least one option"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Select at least one option"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Choose a valid field from the list"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "This field is required"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Requests count limit was exceeded"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Show form anyway"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "loading..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "loading more..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "The server is busy right now and not all values are being retrieved. Try again later."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "There was a problem retrieving items. Try again later."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Retry"
                }
            },
            "en-ca": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "The domain where this form is embedded might not be enlisted as a domain record for externally hosted forms. Otherwise, a browser extension or plugin may be blocking this form from loading. Review and reload form to continue."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Read more"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "The form has expired."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Reload"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Try again"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'We can\'t find the form page you\'re trying to load: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Please check your page setup.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "The event registration form has no event associated with it."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Too many requests. Please try again later."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "We're unable to verify your contact information. Make sure cookies are not blocked or use the unsubscribe link in your email."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Select at least one option"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Select at least one option"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Choose a valid field from the list"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "This field is required"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Requests count limit was exceeded"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Show form anyway"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "loading..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "loading more..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "The server is busy right now and not all values are being retrieved. Try again later."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "There was a problem retrieving items. Try again later."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Retry"
                }
            },
            "en-gb": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "The domain where this form is embedded might not be enlisted as a domain record for externally hosted forms. Otherwise, a browser extension or plugin may be blocking this form from loading. Review and reload form to continue."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Read more"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "The form has expired."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Reload"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Try again"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'We can\'t find the form page you\'re trying to load: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Please check your page setup.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "The event registration form has no event associated with it."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Too many requests. Please try again later."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "We're unable to verify your contact information. Make sure cookies are not blocked or use the unsubscribe link in your email."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Select at least one option"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Select at least one option"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Choose a valid field from the list"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "This field is required"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Requests count limit was exceeded"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Show form anyway"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "loading..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "loading more..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "The server is busy right now and not all values are being retrieved. Try again later."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "There was a problem retrieving items. Try again later."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Retry"
                }
            },
            "en-us": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "The domain where this form is embedded might not be enlisted as a domain record for externally hosted forms. Otherwise, a browser extension or plugin may be blocking this form from loading. Review and reload form to continue."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Read more"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "The form has expired."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Reload"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Try again"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'We can\'t find the form page you\'re trying to load: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Please check your page setup.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "The event registration form has no event associated with it."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Too many requests. Please try again later."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "We're unable to verify your contact information. Make sure cookies are not blocked or use the unsubscribe link in your email."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Select at least one option"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Select at least one option"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Choose a valid field from the list"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "This field is required"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Requests count limit was exceeded"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Show form anyway"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "loading..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "loading more..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "The server is busy right now and not all values are being retrieved. Try again later."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "There was a problem retrieving items. Try again later."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Retry"
                }
            },
            "es-es": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "El dominio en el que estÃ¡ insertado este formulario podrÃ­a no estar incluido como registro de dominio para formularios hospedados externamente. Si no es asÃ­, es posible que una extensiÃ³n o un complemento de explorador bloqueen el formulario para que no se cargue. Revise y vuelva a cargar el formulario para continuar."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Leer mÃ¡s"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "El formulario ha expirado."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Volver a cargar"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Volver a intentarlo"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'No encontramos la pÃ¡gina de formulario que intenta cargar: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Compruebe la configuraciÃ³n de la pÃ¡gina.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "El formulario de registro en evento no tiene ningÃºn evento asociado a este."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Demasiadas solicitudes. Vuelva a intentarlo mÃ¡s tarde."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "No podemos comprobar su informaciÃ³n de contacto. AsegÃºrese de que las cookies no estÃ¡n bloqueadas o use el vÃ­nculo de cancelaciÃ³n de suscripciÃ³n de su correo electrÃ³nico."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Seleccione al menos una opciÃ³n"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Seleccione al menos una opciÃ³n"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Elija un campo vÃ¡lido en la lista"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Este campo es obligatorio"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Se ha superado el lÃ­mite de recuento de solicitudes"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Mostrar formulario de todos modos"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "cargando..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "cargando mÃ¡s..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "El servidor estÃ¡ ocupado en este momento y no todos los valores se estÃ¡n recuperando. IntÃ©ntalo de nuevo mÃ¡s tarde."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Hubo un problema para recuperar elementos. IntÃ©ntelo de nuevo mÃ¡s tarde."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Reintentar"
                }
            },
            "et-ee": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Domeen, kuhu see vorm on manustatud, ei pruugi olla vÃ¤ljaspool majutatud vormide domeenikirjena loetletud. Muidu vÃµib brauseri laiend vÃµi lisandmoodul selle vormi laadimise blokeerida. JÃ¤tkamiseks vaadake vorm Ã¼le ja laadige see uuesti."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Lisateave"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Vorm on aegunud."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Laadi uuesti"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Proovi uuesti"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Me ei leia vormi lehte, mida proovite laadida: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Kontrollige oma lehe seadistust.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "SÃ¼ndmusele registreerumise vormiga ei ole seostatud Ã¼htegi sÃ¼ndmust."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Liiga palju pÃ¤ringuid. Proovige hiljem uuesti."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Me ei saa teie kontaktteavet kontrollida. Veenduge, et kÃ¼psised ei oleks blokeeritud, vÃµi kasutage oma meilis kordustellimuse tÃ¼histamise linki."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Valige vÃ¤hemalt Ã¼ks suvand"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Valige vÃ¤hemalt Ã¼ks suvand"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Vali loendist kehtiv vÃ¤li"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "See vÃ¤li on nÃµutav"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "PÃ¤ringute arvu limiit on Ã¼letatud"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Kuva vorm sellest hoolimata"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "laadimine..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "lisaÃ¼ksuste laadimine..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Server on praegu hÃµivatud ja kÃµiki vÃ¤Ã¤rtusi ei tooda. Proovige hiljem uuesti."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Ãœksuste toomisel ilmnes probleem. Proovige hiljem uuesti."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Proovi uuesti"
                }
            },
            "eu-es": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Baliteke inprimaki hori txertatuta dagoen domeinua ez egotea zerrendatuta kanpoan ostatatutako inprimakien domeinu-erregistro gisa. Bestela, baliteke arakatzailearen luzapen edo plugin batek inprimaki hori kargatzea galaraztea. Jarraitzeko, berrikusi eta berriro kargatu inprimakia."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Irakurri gehiago"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Inprimakia iraungi da."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Kargatu berriro"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Saiatu berriro"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Ez dugu aurkitu kargatu nahi duzun inprimaki-orria: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Egiaztatu orriaren konfigurazioa.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Gertaeran izena emateko inprimakiak ez du gertaerarik erlazionatuta."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Eskaera gehiegi jaso dira. Saiatu berriro geroago."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Ezin dugu zure harremanetarako informazioa egiaztatu. Ziurtatu cookie-ak ez daudela blokeatuta edo erabili harpidetza ezeztatzeko esteka zure posta elektronikoan."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Hautatu aukera bat gutxienez"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Hautatu aukera bat gutxienez"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Aukeratu erabil daitekeen eremu bat zerrendatik"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Eremua beharrezkoa da"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Eskaeren kopuru muga gainditu da"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Erakutsi inprimakia hala ere"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "kargatzen..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "gehiago kargatzen..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Zerbitzaria lanpetuta dagoenez ez dira eskuratuko balio guztiak. Saiatu berriro geroago."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Arazoren bat izan da elementuak eskuratzean. Saiatu berriro geroago."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Saiatu berriro"
                }
            },
            "fi-fi": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Toimialuetta, johon tÃ¤mÃ¤ lomake on upotettu, ei ole ehkÃ¤ liitetty ulkoisesti isÃ¤nnÃ¶ityjen lomakkeiden toimialuetietueena. Muussa tapauksessa selainlaajennus ehkÃ¤ estÃ¤Ã¤ tÃ¤mÃ¤n lomakkeen latautumisen. Jatka tarkistamalla ja lataamalla lomake uudelleen."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "LisÃ¤tietoja"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Lomake on vanhentunut."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Lataa uudelleen"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "YritÃ¤ uudelleen"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Lomakesivua, jota yritÃ¤t ladata, ei lÃ¶ydy: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Tarkista sivun asetukset.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Tapahtuman rekisterÃ¶intilomakkeeseen ei ole liitetty tapahtumaa."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Liian monta pyyntÃ¶Ã¤. YritÃ¤ myÃ¶hemmin uudelleen."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Emme voi vahvistaa yhteystietojasi. Varmista, ettÃ¤ evÃ¤steitÃ¤ ei ole estetty, tai kÃ¤ytÃ¤ sÃ¤hkÃ¶postissasi olevaa tilauksen peruutuslinkkiÃ¤."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Valitse vÃ¤hintÃ¤Ã¤n yksi vaihtoehto"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Valitse vÃ¤hintÃ¤Ã¤n yksi vaihtoehto"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Valitse kelvollinen kenttÃ¤ luettelosta"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "TÃ¤mÃ¤ kenttÃ¤ on pakollinen"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "PyyntÃ¶jen mÃ¤Ã¤rÃ¤n raja ylitettiin"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "NÃ¤ytÃ¤ lomake joka tapauksessa"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "ladataan..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "ladataan lisÃ¤Ã¤..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Palvelin on varattuna juuri nyt, eikÃ¤ kaikkia arvoja noudeta. YritÃ¤ myÃ¶hemmin uudelleen."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Kohteiden noutamisessa oli ongelma. YritÃ¤ myÃ¶hemmin uudelleen."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "YritÃ¤ uudelleen"
                }
            },
            "fr-ca": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Le domaine dans lequel ce formulaire est incorporÃ© nâ€™est peut-Ãªtre pas inscrit en tant que dossier de domaine pour les formulaires hÃ©bergÃ©s en externe. Sinon, une extension de navigateur ou un plug-in risque dâ€™empÃªcher le chargement de ce formulaire. VÃ©rifiez et rechargez le formulaire pour continuer."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "En savoir plus"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Le formulaire a expirÃ©."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Recharger"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "RÃ©essayer"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Impossible de trouver la page de formulaire que vous tentez de chargerÂ : <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Veuillez vÃ©rifier votre mise en page.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Aucun Ã©vÃ©nement n'est associÃ© au formulaire d'inscription Ã  un Ã©vÃ©nement."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Trop de requÃªtes. Veuillez rÃ©essayer plus tard."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Nous ne pouvons pas vÃ©rifier vos coordonnÃ©es. Veillez Ã  ce que les cookies ne soient pas bloquÃ©s ou utilisez le lien de dÃ©sabonnement dans votre courrier Ã©lectronique."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "SÃ©lectionner au moins une option"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "SÃ©lectionner au moins une option"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "SÃ©lectionner un champ valide dans la liste"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Ce champ est obligatoire"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Le nombre maximal de demandes a Ã©tÃ© dÃ©passÃ©"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Afficher le formulaire malgrÃ© tout"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "chargement en cours..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "chargement dâ€™autres Ã©lÃ©ments en cours..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Le serveur est occupÃ© actuellement et toutes les valeurs ne sont pas rÃ©cupÃ©rÃ©es. Recommencez ultÃ©rieurement."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Un problÃ¨me est survenu lors de la rÃ©cupÃ©ration des Ã©lÃ©ments. Recommencez ultÃ©rieurement."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Recommencer"
                }
            },
            "fr-fr": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Le domaine dans lequel ce formulaire est incorporÃ© nâ€™est peut-Ãªtre pas inscrit en tant quâ€™enregistrement de domaine pour les formulaires hÃ©bergÃ©s en externe. Sinon, une extension de navigateur ou un plug-in risque dâ€™empÃªcher le chargement de ce formulaire. VÃ©rifiez et rechargez le formulaire pour continuer."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "En savoir plus"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Le formulaire a expirÃ©."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Recharger"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "RÃ©essayer"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Impossible de trouver la page de formulaire que vous tentez de chargerÂ : <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Veuillez vÃ©rifier votre mise en page.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Aucun Ã©vÃ©nement n'est associÃ© au formulaire d'inscription Ã  un Ã©vÃ©nement."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Trop de requÃªtes. Veuillez rÃ©essayer plus tard."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Nous ne pouvons pas vÃ©rifier vos coordonnÃ©es. Veillez Ã  ce que les cookies ne soient pas bloquÃ©s ou utilisez le lien de dÃ©sabonnement dans votre courrier Ã©lectronique."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "SÃ©lectionner au moins une option"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "SÃ©lectionner au moins une option"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "SÃ©lectionner un champ valide dans la liste"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Ce champ est obligatoire"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Le nombre maximal de demandes a Ã©tÃ© dÃ©passÃ©"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Afficher le formulaire malgrÃ© tout"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "chargement en cours..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "chargement dâ€™autres Ã©lÃ©ments en cours..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Le serveur est occupÃ© actuellement et toutes les valeurs ne sont pas rÃ©cupÃ©rÃ©es. Recommencez ultÃ©rieurement."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Un problÃ¨me est survenu lors de la rÃ©cupÃ©ration des Ã©lÃ©ments. Recommencez ultÃ©rieurement."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Recommencer"
                }
            },
            "gl-es": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Ã‰ posible que o dominio onde estÃ¡ incorporado este formulario non figure nun rexistro de dominio para formularios aloxados externamente. Se non, Ã© posible que un complemento ou unha extensiÃ³n do explorador bloquee a carga deste formulario. Revise e volva cargar o formulario para continuar."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Ler mÃ¡is"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "O formulario caducou."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Cargar de novo"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Tentar de novo"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Non podemos atopar a pÃ¡xina do formulario que estÃ¡ tentando cargar: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Comprobe a configuraciÃ³n da pÃ¡xina.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "O formulario de rexistro de evento non ten ningÃºn evento asociado."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Demasiadas solicitudes. Volva tentalo mÃ¡is tarde."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Non podemos verificar a sÃºa informaciÃ³n de contacto. AsegÃºrese de que as cookies non estean bloqueadas ou utilice a ligazÃ³n para cancelar a subscriciÃ³n no seu correo electrÃ³nico."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Seleccione polo menos unha opciÃ³n"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Seleccione polo menos unha opciÃ³n"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Escoller un campo vÃ¡lido da lista"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Este campo Ã© obrigatorio"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Excedeuse o lÃ­mite de solicitudes"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Mostrar o formulario igualmente"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "cargando..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "cargando mÃ¡is..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "O servidor estÃ¡ ocupado neste momento e non se estÃ¡n a recuperar todos os valores. TÃ©ntao de novo mÃ¡is tarde."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Houbo un problema ao recuperar elementos. TÃ©ntao de novo mÃ¡is tarde."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Tentar de novo"
                }
            },
            "he-il": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "×™×™×ª×›×Ÿ ×©×”×ª×—×•× ×©×‘×• ×˜×•×¤×¡ ×–×” ×”×•×˜×‘×¢ ×œ× × ×›×œ×œ ×›×¨×©×•×ž×ª ×ª×—×•× ×¢×‘×•×¨ ×˜×¤×¡×™× ×”×ž×ª××¨×—×™× ×—×™×¦×•× ×™×ª. ××—×¨×ª, ×™×™×ª×›×Ÿ ×©×”×¨×—×‘×” ××• ×™×™×©×•× plugin ×©×œ ×”×“×¤×“×¤×Ÿ ×—×•×¡×ž×™× ××ª ×˜×¢×™× ×ª ×”×˜×•×¤×¡. ×¡×§×•×¨ ×•×˜×¢×Ÿ ×ž×—×“×© ××ª ×”×˜×•×¤×¡ ×›×“×™ ×œ×”×ž×©×™×š."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "×ž×™×“×¢ × ×•×¡×£"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "×¤×’ ×ª×•×§×¤×• ×©×œ ×”×˜×•×¤×¡."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "×˜×¢×Ÿ ×ž×—×“×©"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "× ×¡×” ×©×•×‘"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: '××™×Ÿ ×œ× ×• ××¤×©×¨×•×ª ×œ×ž×¦×•× ××ª ×“×£ ×”×˜×•×¤×¡ ×©××ª×” ×ž× ×¡×” ×œ×˜×¢×•×Ÿ: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. ×‘×“×•×§ ××ª ×”×’×“×¨×ª ×”×“×£ ×©×œ×š.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "×œ×˜×•×¤×¡ ×”×”×¨×©×ž×” ×œ××™×¨×•×¢ ×œ× ×ž×©×•×™×š ××™×¨×•×¢."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "×™×•×ª×¨ ×ž×“×™ ×‘×§×©×•×ª. × ×¡×” ×©×•×‘ ×ž××•×—×¨ ×™×•×ª×¨."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "××™× × ×• ×ž×¦×œ×™×—×™× ×œ××ž×ª ××ª ×¤×¨×˜×™ ××™×© ×”×§×©×¨ ×©×œ×š. ×•×“× ×©×§×‘×¦×™ Cookie ××™× × ×—×¡×•×ž×™× ××• ×”×©×ª×ž×© ×‘×§×™×©×•×¨ ×œ×‘×™×˜×•×œ ×”×ž× ×•×™ ×‘×“×•××¨ ×”××œ×§×˜×¨×•× ×™ ×©×œ×š."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "â€×‘×—×¨ ×œ×¤×—×•×ª ××¤×©×¨×•×ª ××—×ª"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "â€×‘×—×¨ ×œ×¤×—×•×ª ××¤×©×¨×•×ª ××—×ª"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "â€â€×‘×—×¨ ×©×“×” ×—×•×§×™ ×ž×ª×•×š ×”×¨×©×™×ž×”"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "×©×“×” ×–×” × ×“×¨×©"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "××™×¨×¢×” ×—×¨×™×’×” ×ž×ž×’×‘×œ×ª ×¡×¤×™×¨×ª ×”×‘×§×©×•×ª"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "×”×¦×’ ×˜×•×¤×¡ ×‘×›×œ ×ž×§×¨×”"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "×˜×•×¢×Ÿ..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "×˜×•×¢×Ÿ ×¢×•×“..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "×”×©×¨×ª ××™× ×• ×¤× ×•×™ ×›×¢×ª ×•×œ× ×›×œ ×”×¢×¨×›×™× ×ž××•×—×–×¨×™×. × ×¡×” ×©×•×‘ ×ž××•×—×¨ ×™×•×ª×¨."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "××™×¨×¢×” ×‘×¢×™×” ×‘××—×–×•×¨ ×¤×¨×™×˜×™×. × ×¡×” ×©×•×‘ ×ž××•×—×¨ ×™×•×ª×¨."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "× ×¡×” ×©× ×™×ª"
                }
            },
            "hr-hr": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Domena u koju je ovaj obrazac ugraÄ‘en moÅ¾da nije pridruÅ¾ena kao zapis domene obrazaca hostiranih vani. U suprotnom, proÅ¡irenje ili dodatak preglednika moÅ¾da blokiraju prijenos ovog obrasca. Pregledajte i ponovno uÄitajte obrazac kako biste nastavili."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Saznajte viÅ¡e"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Obrazac je istekao."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Ponovno uÄitaj"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "PokuÅ¡ajte ponovno"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Ne moÅ¾emo pronaÄ‡i stranicu obrasca koju pokuÅ¡avate uÄitati: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Provjerite postavke stranice.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Obrascu registracije za dogaÄ‘aj nije pridruÅ¾en nijedan dogaÄ‘aj."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "PreviÅ¡e zahtjeva. PokuÅ¡ajte ponovo kasnije."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Ne moÅ¾emo provjeriti vaÅ¡e podatke za kontakt. Provjerite jesu li kolaÄiÄ‡i blokirani ili upotrijebite vezu u e-poÅ¡ti za otkazivanje pretplate."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Odaberite barem jednu moguÄ‡nost"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Odaberite barem jednu moguÄ‡nost"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Odaberite valjano polje s popisa"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "To je polje obvezno"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "PrekoraÄeno je ograniÄenje broja zahtjeva"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "PrikaÅ¾i obrazac u svakom sluÄaju"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "uÄitavanje u tijeku..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "uÄitava se viÅ¡e..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "PosluÅ¾itelj je trenutaÄno zauzet i ne dohvaÄ‡aju se sve vrijednosti. PokuÅ¡ajte ponovno kasnije."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "DoÅ¡lo je do problema pri dohvaÄ‡anju stavki. PokuÅ¡ajte ponovno kasnije."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "PokuÅ¡aj ponovno"
                }
            },
            "hu-hu": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "ElÅ‘fordulhat, hogy a tartomÃ¡ny, ahol az Å±rlap be van Ã¡gyazva nincs felsorolva a kÃ¼lsÅ‘ megoldÃ¡sokban Ã¼zemeltetett Å±rlapok domainrekordjakÃ©nt. EllenkezÅ‘ esetben elÅ‘fordulhat, hogy egy bÃ¶ngÃ©szÅ‘bÅ‘vÃ­tmÃ©ny vagy beÃ©pÃ¼lÅ‘ modul blokkolja az Å±rlap betÃ¶ltÃ©sÃ©t. A folytatÃ¡shoz tekintse Ã¡t Ã©s tÃ¶ltse be Ãºjra az Å±rlapot."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "TovÃ¡bbi informÃ¡ciÃ³k"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Az Å±rlap lejÃ¡rt."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "ÃšjratÃ¶ltÃ©s"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Ãšjra"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Nem talÃ¡ljuk a betÃ¶lteni kÃ­vÃ¡nt Å±rlapoldalt: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. EllenÅ‘rizze az oldalbeÃ¡llÃ­tÃ¡st.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Az esemÃ©nyregisztrÃ¡ciÃ³s Å±rlaphoz nincs esemÃ©ny tÃ¡rsÃ­tva."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "TÃºl sok kÃ©rÃ©s. PrÃ³bÃ¡lkozzon Ãºjra kÃ©sÅ‘bb."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Nem tudjuk ellenÅ‘rizni a kapcsolattartÃ¡si adatait. GyÅ‘zÅ‘djÃ¶n meg rÃ³la, hogy a cookie-k nincsenek letiltva, vagy hasznÃ¡lja az e-mailben talÃ¡lhatÃ³ leiratkozÃ¡si hivatkozÃ¡st."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "VÃ¡lasszon ki legalÃ¡bb egy lehetÅ‘sÃ©get"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "VÃ¡lasszon ki legalÃ¡bb egy lehetÅ‘sÃ©get"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "VÃ¡lasszon Ã©rvÃ©nyes mezÅ‘t a listÃ¡rÃ³l"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "A mezÅ‘ kitÃ¶ltÃ©se kÃ¶telezÅ‘"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "TÃºllÃ©pte a kÃ©rÃ©sek szÃ¡mÃ¡nak korlÃ¡tjÃ¡t"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Akkor is jelenjen meg az Å±rlap"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "betÃ¶ltÃ©s..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "tovÃ¡bbiak betÃ¶ltÃ©se..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "A kiszolgÃ¡lÃ³ jelenleg foglalt, Ã©s nem minden Ã©rtÃ©k kerÃ¼l beolvasÃ¡sra. PrÃ³bÃ¡lkozzon Ãºjra kÃ©sÅ‘bb."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "ProblÃ©ma lÃ©pett fel az elemek beolvasÃ¡sa sorÃ¡n. PrÃ³bÃ¡lkozzon Ãºjra kÃ©sÅ‘bb."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Ãšjra"
                }
            },
            "id-id": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Domain tempat formulir ini disematkan mungkin tidak terdaftar sebagai rekaman domain untuk formulir yang di-host secara eksternal. Jika tidak, ekstensi atau plugin browser mungkin memblokir formulir ini dari pemuatan. Tinjau dan muat ulang formulir untuk melanjutkan."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Baca selengkapnya"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Formulir telah kedaluwarsa."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Muat ulang"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Coba lagi"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Kami tidak dapat menemukan halaman formulir yang sedang Anda muat: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Periksa konfigurasi halaman Anda.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Formulir pendaftaran aktivitas tidak memiliki aktivitas yang terkait."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Terlalu banyak permintaan. Coba lagi nanti."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Kami tidak dapat memverifikasi informasi kontak Anda. Pastikan cookie tidak diblokir atau gunakan tautan berhenti berlangganan di email Anda."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Pilih setidaknya satu opsi"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Pilih setidaknya satu opsi"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Pilih bidang valid dari daftar"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Bidang ini harus diisi"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Batas jumlah permintaan terlampaui"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Tetap tampilkan formulir"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "memuat..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "memuat lainnya..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Server sibuk saat ini dan tidak semua nilai diambil. Coba lagi nanti."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Terjadi masalah saat mengambil item. Coba lagi nanti."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Coba Lagi"
                }
            },
            "it-it": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Il dominio in cui questo modulo Ã¨ incorporato potrebbe non essere incluso come record di dominio per i moduli ospitati esternamente. In caso contrario, un'estensione del browser o un plug-in potrebbe impedire il caricamento del modulo. Rivedi e ricarica il modulo per continuare."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Altre informazioni"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Il modulo Ã¨ scaduto."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Ricarica"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Riprova"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Impossibile trovare la pagina del modulo che stai tentando di caricare: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Verifica la configurazione della pagina.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Il modulo di registrazione dell'evento non ha alcun evento associato."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Troppe richieste. Riprova piÃ¹ tardi."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Impossibile verificare le informazioni di contatto. Assicurati che i cookie non siano bloccati o utilizza il collegamento per l'annullamento dell'iscrizione nel messaggio e-mail."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Seleziona almeno un'opzione"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Seleziona almeno un'opzione"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Scegli un campo valido dall'elenco"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Questo campo Ã¨ obbligatorio"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Limite del numero di richieste superato"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Mostra comunque il modulo"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "caricamento in corso..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "caricamento di altri elementi in corso..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Il server Ã¨ occupato in questo momento e non tutti i valori vengono recuperati. Riprova piÃ¹ tardi."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Si Ã¨ verificato un problema durante il recupero degli elementi. Riprova piÃ¹ tardi."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Riprova"
                }
            },
            "ja-jp": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "ã“ã®ãƒ•ã‚©ãƒ¼ãƒ ãŒåŸ‹ã‚è¾¼ã¾ã‚Œã¦ã„ã‚‹ãƒ‰ãƒ¡ã‚¤ãƒ³ã¯ã€å¤–éƒ¨ã§ãƒ›ã‚¹ãƒˆã•ã‚Œã‚‹ãƒ•ã‚©ãƒ¼ãƒ ã®ãƒ‰ãƒ¡ã‚¤ãƒ³ ãƒ¬ã‚³ãƒ¼ãƒ‰ã¨ã—ã¦ä¸€è¦§ã«è¡¨ç¤ºã•ã‚Œã¦ã„ãªã„å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚ãã†ã§ãªã„å ´åˆã¯ã€ãƒ–ãƒ©ã‚¦ã‚¶ãƒ¼ã®æ‹¡å¼µæ©Ÿèƒ½ã¾ãŸã¯ãƒ—ãƒ©ã‚°ã‚¤ãƒ³ãŒã€ã“ã®ãƒ•ã‚©ãƒ¼ãƒ ã®èª­ã¿è¾¼ã¿ã‚’ãƒ–ãƒ­ãƒƒã‚¯ã—ã¦ã„ã‚‹å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚ç¶šè¡Œã™ã‚‹ã«ã¯ãƒ•ã‚©ãƒ¼ãƒ ã‚’ç¢ºèªã—ã¦å†èª­ã¿è¾¼ã¿ã—ã¦ãã ã•ã„ã€‚"
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "è©³ç´°"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "ãƒ•ã‚©ãƒ¼ãƒ ã®æœ‰åŠ¹æœŸé™ãŒåˆ‡ã‚Œã¦ã„ã¾ã™ã€‚"
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "å†èª­ã¿è¾¼ã¿"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "ã‚„ã‚Šç›´ã—"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'èª­ã¿è¾¼ã‚‚ã†ã¨ã—ã¦ã„ã‚‹ãƒ•ã‚©ãƒ¼ãƒ  ãƒšãƒ¼ã‚¸ãŒè¦‹ã¤ã‹ã‚Šã¾ã›ã‚“: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>ã€‚ãƒšãƒ¼ã‚¸è¨­å®šã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "ã‚¤ãƒ™ãƒ³ãƒˆç™»éŒ²ãƒ•ã‚©ãƒ¼ãƒ ã«é–¢é€£ä»˜ã‘ã‚‰ã‚Œã¦ã„ã‚‹ã‚¤ãƒ™ãƒ³ãƒˆãŒã‚ã‚Šã¾ã›ã‚“ã€‚"
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "è¦æ±‚ãŒå¤šã™ãŽã¾ã™ã€‚å¾Œã§ã‚„ã‚Šç›´ã—ã¦ãã ã•ã„ã€‚"
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "å–å¼•å…ˆæ‹…å½“è€…æƒ…å ±ã‚’ç¢ºèªã§ãã¾ã›ã‚“ã€‚Cookie ãŒãƒ–ãƒ­ãƒƒã‚¯ã•ã‚Œã¦ã„ãªã„ã“ã¨ã‚’ç¢ºèªã™ã‚‹ã‹ã€é›»å­ãƒ¡ãƒ¼ãƒ«ã®ç™»éŒ²è§£é™¤ãƒªãƒ³ã‚¯ã‚’ä½¿ç”¨ã—ã¦ãã ã•ã„ã€‚"
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "å°‘ãªãã¨ã‚‚ 1 ã¤ã®ã‚ªãƒ—ã‚·ãƒ§ãƒ³ã‚’é¸æŠžã—ã¦ãã ã•ã„"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "å°‘ãªãã¨ã‚‚ 1 ã¤ã®ã‚ªãƒ—ã‚·ãƒ§ãƒ³ã‚’é¸æŠžã—ã¦ãã ã•ã„"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "ãƒªã‚¹ãƒˆã‹ã‚‰æœ‰åŠ¹ãªãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã‚’é¸æŠžã—ã¾ã™"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "ã“ã‚Œã¯å¿…é ˆãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰ã§ã™"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "è¦æ±‚æ•°ã®ä¸Šé™ã‚’è¶…ãˆã¦ã„ã¾ã™"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "ãƒ•ã‚©ãƒ¼ãƒ ã‚’è¡¨ç¤ºã™ã‚‹"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "èª­ã¿è¾¼ã¿ä¸­..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "ã•ã‚‰ã«èª­ã¿è¾¼ã‚“ã§ã„ã¾ã™..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "ç¾åœ¨ã€ã‚µãƒ¼ãƒãƒ¼ãŒãƒ“ã‚¸ãƒ¼çŠ¶æ…‹ã§ã‚ã‚Šã€ã™ã¹ã¦ã®å€¤ã‚’å–å¾—ã™ã‚‹ã“ã¨ãŒã§ãã¾ã›ã‚“ã€‚å¾Œã§ã‚„ã‚Šç›´ã—ã¦ãã ã•ã„ã€‚"
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "ã‚¢ã‚¤ãƒ†ãƒ ã®å–å¾—ä¸­ã«å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚å¾Œã§ã‚„ã‚Šç›´ã—ã¦ãã ã•ã„ã€‚"
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "å†è©¦è¡Œ"
                }
            },
            "ko-kr": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "ì´ ì–‘ì‹ì´ í¬í•¨ëœ ë„ë©”ì¸ì€ ì™¸ë¶€ì—ì„œ í˜¸ìŠ¤íŒ…ë˜ëŠ” ì–‘ì‹ì— ëŒ€í•œ ë„ë©”ì¸ ë ˆì½”ë“œë¡œ ë“±ë¡ë˜ì§€ ì•Šì„ ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ê·¸ë ‡ì§€ ì•Šìœ¼ë©´ ë¸Œë¼ìš°ì € í™•ìž¥ ë˜ëŠ” í”ŒëŸ¬ê·¸ ì¸ì´ ì–‘ì‹ì„ ë¡œë“œí•˜ì§€ ëª»í•˜ë„ë¡ ì°¨ë‹¨í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ì–‘ì‹ì„ ê²€í† í•˜ê³  ë‹¤ì‹œ ë¡œë“œí•˜ì—¬ ê³„ì†í•©ë‹ˆë‹¤."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "ìžì„¸í•œ ë‚´ìš©"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "ì–‘ì‹ì´ ë§Œë£Œë˜ì—ˆìŠµë‹ˆë‹¤."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "ë‹¤ì‹œ ë¡œë“œ"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "ë‹¤ì‹œ ì‹œë„"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'ë¡œë“œí•˜ë ¤ëŠ” ì–‘ì‹ íŽ˜ì´ì§€ë¥¼ ì°¾ì„ ìˆ˜ ì—†ìŠµë‹ˆë‹¤. <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. íŽ˜ì´ì§€ ì„¤ì •ì„ í™•ì¸í•˜ì‹­ì‹œì˜¤.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "ì´ë²¤íŠ¸ ë“±ë¡ ì–‘ì‹ì— ì—°ê²°ëœ ì´ë²¤íŠ¸ê°€ ì—†ìŠµë‹ˆë‹¤."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "ìš”ì²­ì´ ë„ˆë¬´ ë§ŽìŠµë‹ˆë‹¤. ë‚˜ì¤‘ì— ë‹¤ì‹œ ì‹œë„í•˜ì‹­ì‹œì˜¤."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "ê·€í•˜ì˜ ì—°ë½ì²˜ ì •ë³´ë¥¼ í™•ì¸í•  ìˆ˜ ì—†ìŠµë‹ˆë‹¤. ì¿ í‚¤ê°€ ì°¨ë‹¨ë˜ì§€ ì•Šì•˜ëŠ”ì§€ í™•ì¸í•˜ê±°ë‚˜ ì „ìž ë©”ì¼ì˜ ìˆ˜ì‹  ê±°ë¶€ ë§í¬ë¥¼ ì‚¬ìš©í•˜ì‹­ì‹œì˜¤."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "ì˜µì…˜ì„ í•˜ë‚˜ ì´ìƒ ì„ íƒí•˜ì‹­ì‹œì˜¤."
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "ì˜µì…˜ì„ í•˜ë‚˜ ì´ìƒ ì„ íƒí•˜ì‹­ì‹œì˜¤."
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "ëª©ë¡ì—ì„œ ìœ íš¨í•œ í•„ë“œ ì„ íƒ"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "ì´ í•„ë“œëŠ” í•„ìˆ˜ìž…ë‹ˆë‹¤."
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "ìš”ì²­ ìˆ˜ ì œí•œì„ ì´ˆê³¼í–ˆìŠµë‹ˆë‹¤."
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "ê·¸ëŒ€ë¡œ ì–‘ì‹ í‘œì‹œ"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "ë¡œë“œí•˜ëŠ” ì¤‘..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "ë” ë¡œë“œí•˜ëŠ” ì¤‘..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "ì„œë²„ê°€ í˜„ìž¬ ì‚¬ìš© ì¤‘ì´ë©° ëª¨ë“  ê°’ì´ ê²€ìƒ‰ë˜ì§€ ì•Šê³  ìžˆìŠµë‹ˆë‹¤. ë‚˜ì¤‘ì— ë‹¤ì‹œ ì‹œë„í•˜ì‹­ì‹œì˜¤."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "í•­ëª©ì„ ê²€ìƒ‰í•˜ëŠ” ë° ë¬¸ì œê°€ ìžˆìŠµë‹ˆë‹¤. ë‚˜ì¤‘ì— ë‹¤ì‹œ ì‹œë„í•˜ì‹­ì‹œì˜¤."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "ë‹¤ì‹œ ì‹œë„"
                }
            },
            "lt-lt": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Domenas, kuriame Ä¯dÄ—ta Å¡i forma, gali bÅ«ti neÄ¯trauktas Ä¯ sÄ…raÅ¡Ä… kaip domeno Ä¯raÅ¡as iÅ¡oriÅ¡kai nuomojamoms formoms. Kitu atveju narÅ¡yklÄ—s plÄ—tinys arba papildinys gali blokuoti Å¡ios formos Ä¯kÄ—limÄ…. NorÄ—dami tÄ™sti, perÅ¾iÅ«rÄ—kite ir iÅ¡ naujo Ä¯kelkite formÄ…."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Skaityti daugiau"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Formos galiojimo laikas baigÄ—si."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Ä®kelti iÅ¡ naujo"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Bandyti dar kartÄ…"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Nerandame formos puslapio, kurÄ¯ bandote Ä¯kelti: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Patikrinkite savo puslapio nustatymus.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Su Ä¯vykio registravimo forma nesusietas joks Ä¯vykis."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Per daug uÅ¾klausÅ³. Bandykite dar kartÄ… vÄ—liau."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Negalime patvirtinti jÅ«sÅ³ kontaktinÄ—s informacijos. Ä®sitikinkite, kad slapukai nÄ—ra blokuojami, arba naudokite el. laiÅ¡ke esanÄiÄ… prenumeratos atsisakymo nuorodÄ…."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Pasirinkite bent vienÄ… parinktÄ¯"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Pasirinkite bent vienÄ… parinktÄ¯"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Pasirinkite tinkamÄ… laukÄ… iÅ¡ sÄ…raÅ¡o"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Å Ä¯ laukÄ… uÅ¾pildyti bÅ«tina"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "VirÅ¡ytas uÅ¾klausÅ³ skaiÄiaus apribojimas"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Vis tiek rodyti formÄ…"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ä¯keliama..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ä¯keliama daugiau..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Serveris dabar uÅ¾imtas ir nuskaitomos ne visos reikÅ¡mÄ—s. Pabandykite dar kartÄ… vÄ—liau."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Kilo problema nuskaitant elementus. Pabandykite dar kartÄ… vÄ—liau."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Kartoti"
                }
            },
            "lv-lv": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "DomÄ“ns, kurÄ Å¡Ä« veidlapa ir iegulta, iespÄ“jams, nav reÄ£istrÄ“ts kÄ domÄ“na ieraksts ÄrÄ“ji viesotÄm veidlapÄm. PretÄ“jÄ gadÄ«jumÄ pÄrlÅ«kprogrammas paplaÅ¡inÄjums vai spraudnis, iespÄ“jams, bloÄ·Ä“ Å¡Ä«s veidlapas ielÄdi. Lai turpinÄtu, pÄrskatiet un atkÄrtoti ielÄdÄ“jiet veidlapu."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "UzzinÄt vairÄk"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Veidlapas derÄ«gums ir beidzies."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "IelÄdÄ“t atkÄrtoti"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "MÄ“Ä£iniet vÄ“lreiz"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'MÄ“s nevaram atrast veidlapu, kuru mÄ“Ä£inÄt ielÄdÄ“t: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. LÅ«dzu, pÄrbaudiet lapas iestatÄ«jumus.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Notikuma reÄ£istrÄcijas veidlapÄ nav neviena ar to saistÄ«ta notikuma."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "PÄrÄk daudz pieprasÄ«jumu. LÅ«dzu, vÄ“lÄk mÄ“Ä£iniet vÄ“lreiz."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "MÄ“s nevaram verificÄ“t jÅ«su kontaktinformÄciju. PÄrliecinieties, ka sÄ«kfaili nav bloÄ·Ä“ti, vai izmantojiet abonementa anulÄ“Å¡anas saiti savÄ e-pastÄ."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Atlasiet vismaz vienu opciju"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Atlasiet vismaz vienu opciju"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "SarakstÄ izvÄ“lÄ“ties derÄ«gu lauku"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Å is lauks ir obligÄts"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "PieprasÄ«jumu skaita ierobeÅ¾ojums tika pÄrsniegts"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "RÄdÄ«t veidlapu jebkurÄ gadÄ«jumÄ"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "Notiek ielÄde..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "Tiek ielÄdÄ“ts vairÄk..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Serveris paÅ¡laik ir aizÅ†emts, un ne visas vÄ“rtÄ«bas tiek izgÅ«tas. VÄ“lÄk mÄ“Ä£iniet vÄ“lreiz."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "IzgÅ«stot elementus, radÄs problÄ“ma. VÄ“lÄk mÄ“Ä£iniet vÄ“lreiz."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "MÄ“Ä£inÄt vÄ“lreiz"
                }
            },
            "nb-no": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Domenet dette skjemaet er innebygd pÃ¥, er kanskje ikke oppfÃ¸rt som en domeneoppfÃ¸ring for eksternt driftede skjemaer. Det kan ogsÃ¥ hende at en nettleserutvidelse eller plugin-modul blokkerer innlastingen av skjemaet. Se gjennom og last inn skjemaet pÃ¥ nytt for Ã¥ fortsette."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Les mer"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Skjemaet er utlÃ¸pt."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Last inn pÃ¥ nytt"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "PrÃ¸v pÃ¥ nytt"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Finner ikke skjemasiden du prÃ¸ver Ã¥ laste inn: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Kontroller sideoppsettet.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Skjemaet for registrering av arrangementer har ikke noe arrangement tilknyttet."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "For mange forespÃ¸rsler. PrÃ¸v pÃ¥ nytt senere."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Vi kan ikke bekrefte kontaktinformasjonen din. Kontroller at informasjonskapsler ikke er blokkert, eller bruk koblingen i e-posten din for Ã¥ avslutte abonnementet."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Velg minst ett alternativ"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Velg minst ett alternativ"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Velg et gyldig skript fra listen"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Dette feltet er obligatorisk"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Grensen for antall forespÃ¸rsler er overskredet"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Vis skjemaet likevel"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "laster inn ..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "laster inn flere ..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Serveren er opptatt akkurat nÃ¥, og ikke alle verdiene hentes. PrÃ¸v pÃ¥ nytt senere."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Det oppstod et problem under henting av elementer. PrÃ¸v pÃ¥ nytt senere."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "PrÃ¸v pÃ¥ nytt"
                }
            },
            "nl-nl": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Het domein waar dit formulier is ingesloten, kan mogelijk niet worden aangemeld als domeinrecord voor extern gehoste formulieren. Anders kan een browseruitbreiding of -invoegtoepassing voorkomen dat dit formulier wordt geladen. Controleer het formulier en laad het opnieuw om door te gaan."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Meer lezen"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Het formulier is verlopen."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Opnieuw laden"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Opnieuw proberen"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'We kunnen de formulierpagina niet vinden die u probeert te laden: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Controleer uw pagina-instelling.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Aan het registratieformulier voor gebeurtenissen is geen gebeurtenis gekoppeld."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Te veel aanvragen. Probeer het later opnieuw."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Uw contactgegevens kunnen niet worden geverifieerd. Zorg ervoor dat cookies niet worden geblokkeerd of gebruik de afmeldingskoppeling in uw e-mail."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Selecteer ten minste Ã©Ã©n optie"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Selecteer ten minste Ã©Ã©n optie"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Een geldig veld in de lijst kiezen"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Dit veld is vereist"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Limiet voor aantal aanvragen is overschreden"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Formulier toch weergeven"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "laden..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "meer laden..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "De server is momenteel bezet en niet alle waarden worden opgehaald. Probeer het later opnieuw."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Er is een probleem bij het ophalen van items. Probeer het later opnieuw."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Opnieuw"
                }
            },
            "pl-pl": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "ByÄ‡ moÅ¼e domena, w ktÃ³rej ten formularz jest osadzony, nie jest wyszczegÃ³lniana jako rekord domeny dla formularzy hostowanych zewnÄ™trznie. W przeciwnym razie byÄ‡ moÅ¼e rozszerzenie lub wtyczka przeglÄ…darki blokuje wczytywanie tego formularza. Aby kontynuowaÄ‡, przejrzyj formularz i zaÅ‚aduj go ponownie."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Dowiedz siÄ™ wiÄ™cej"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Formularz wygasÅ‚."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "ZaÅ‚aduj ponownie"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "SprÃ³buj ponownie"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Nie moÅ¼emy znaleÅºÄ‡ strony formularza, ktÃ³rÄ… prÃ³bujesz zaÅ‚adowaÄ‡: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. SprawdÅº ustawienia strony.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Z formularzem rejestracji na wydarzenie nie jest skojarzone Å¼adne wydarzenie."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Zbyt wiele Å¼Ä…daÅ„. SprÃ³buj ponownie pÃ³Åºniej."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Nie moÅ¼na zweryfikowaÄ‡ Twoich danych kontaktowych. Upewnij siÄ™, Å¼e pliki cookie nie sÄ… blokowane, lub kliknij Å‚Ä…cze rezygnacji z subskrypcji znajdujÄ…ce siÄ™ w wiadomoÅ›ci e-mail."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Wybierz co najmniej jednÄ… opcjÄ™"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Wybierz co najmniej jednÄ… opcjÄ™"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Wybierz prawidÅ‚owe pole z listy"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "To pole jest wymagane"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Przekroczono limit liczby Å¼Ä…daÅ„"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "PokaÅ¼ formularz mimo to"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "trwa Å‚adowanie..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "zaÅ‚aduj wiÄ™cej..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Serwer jest obecnie zajÄ™ty i nie wszystkie wartoÅ›ci sÄ… pobierane. SprÃ³buj ponownie pÃ³Åºniej."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "WystÄ…piÅ‚ problem podczas pobierania elementÃ³w. SprÃ³buj ponownie pÃ³Åºniej."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "PonÃ³w prÃ³bÄ™"
                }
            },
            "pt-br": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "O domÃ­nio em que este formulÃ¡rio estÃ¡ inserido pode nÃ£o estar inscrito como um registro de domÃ­nio para formulÃ¡rios hospedados externamente. Caso contrÃ¡rio, uma extensÃ£o ou um plug-in do navegador pode estar bloqueando o carregamento deste formulÃ¡rio. Revise e recarregue o formulÃ¡rio para continuar."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Leia mais"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "O formulÃ¡rio expirou."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Recarregar"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Tentar novamente"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'NÃ£o foi possÃ­vel encontrar a pÃ¡gina de formulÃ¡rio que vocÃª estÃ¡ tentando carregar: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Verifique a configuraÃ§Ã£o da pÃ¡gina.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "O formulÃ¡rio de registro de eventos nÃ£o possui eventos associados a ele."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "NÃºmero excessivo de solicitaÃ§Ãµes. Tente novamente mais tarde."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "NÃ£o Ã© possÃ­vel verificar suas informaÃ§Ãµes de contato. Certifique-se de que os cookies nÃ£o sejam bloqueados ou use o link cancelar assinatura em seu email."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Selecione pelo menos uma opÃ§Ã£o"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Selecione pelo menos uma opÃ§Ã£o"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Escolher um campo vÃ¡lido na lista"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Este campo Ã© obrigatÃ³rio"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "O limite de contagem de solicitaÃ§Ãµes foi excedido"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Mostrar formulÃ¡rio mesmo assim"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "carregando..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "carregando mais..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "O servidor estÃ¡ ocupado no momento e nem todos os valores estÃ£o sendo recuperados. Tente mais tarde."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Problema ao recuperar itens. Tente mais tarde."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Tentar novamente"
                }
            },
            "pt-pt": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "O domÃ­nio em que este formulÃ¡rio estÃ¡ incorporado pode nÃ£o estar inscrito como um registo de domÃ­nio para os formulÃ¡rios alojados externamente. Caso contrÃ¡rio, um plug-in ou uma extensÃ£o de browser pode estar a bloquear o carregamento deste formulÃ¡rio. Reveja e recarregue o formulÃ¡rio para continuar."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Mais informaÃ§Ãµes"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "O formulÃ¡rio expirou."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Recarregar"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Tentar novamente"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'NÃ£o Ã© possÃ­vel localizar a pÃ¡gina de formulÃ¡rio que estÃ¡ a tentar carregar: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Verifique a configuraÃ§Ã£o da pÃ¡gina.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "O formulÃ¡rio de registo de eventos nÃ£o tem qualquer evento associado."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Demasiados pedidos. Tente novamente mais tarde."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "NÃ£o Ã© possÃ­vel verificar as suas informaÃ§Ãµes de contacto. Certifique-se de que os cookies nÃ£o estÃ£o bloqueados ou utilize a ligaÃ§Ã£o Anular a subscriÃ§Ã£o do seu e-mail."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Selecione pelo menos uma opÃ§Ã£o"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Selecione pelo menos uma opÃ§Ã£o"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Escolher um campo vÃ¡lido na lista"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Este campo Ã© obrigatÃ³rio"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "O limite de contagem de pedidos foi excedido"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Mostrar formulÃ¡rio mesmo assim"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "a carregar..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "a carregar mais..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "O servidor estÃ¡ ocupado neste momento e nem todos os valores estÃ£o a ser obtidos. Tente novamente mais tarde."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Ocorreu um problema ao obter os itens. Tente novamente mais tarde."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Repetir"
                }
            },
            "ro-ro": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Este posibil ca domeniul Ã®n care este Ã®ncorporat acest formular sÄƒ nu fie listat ca Ã®nregistrare de domeniu pentru formularele gÄƒzduite extern. ÃŽn caz contrar, este posibil ca o extensie de browser sau un insert sÄƒ blocheze Ã®ncÄƒrcarea acestui formular. RevizuiÈ›i formularul È™i Ã®ncÄƒrcaÈ›i-l pentru a continua."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "CitiÈ›i mai multe"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Formularul a expirat."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "ReÃ®ncÄƒrcaÈ›i"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "ÃŽncercaÈ›i din nou"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Nu putem gÄƒsi pagina de formular pe care Ã®ncercaÈ›i sÄƒ o Ã®ncÄƒrcaÈ›i: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. VerificaÈ›i configurarea paginii.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Formularul de Ã®nregistrare la eveniment nu are niciun eveniment asociat cu el."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Prea multe cereri. ÃŽncercaÈ›i din nou mai tÃ¢rziu."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Nu putem verifica informaÈ›iile dvs. de contact. AsiguraÈ›i-vÄƒ cÄƒ modulele cookie nu sunt blocate sau utilizaÈ›i linkul de dezabonare din e-mail."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "SelectaÈ›i cel puÈ›in o opÈ›iune"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "SelectaÈ›i cel puÈ›in o opÈ›iune"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "AlegeÈ›i un cÃ¢mp valid din listÄƒ"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Acest cÃ¢mp este obligatoriu"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "S-a depÄƒÈ™it limita numÄƒrului de solicitÄƒri"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "AfiÈ™aÈ›i formularul oricum"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "se Ã®ncarcÄƒ..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "se Ã®ncarcÄƒ mai multe..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Serverul este ocupat acum È™i nu toate valorile sunt regÄƒsite. ÃŽncercaÈ›i din nou mai tÃ¢rziu."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "ProblemÄƒ la regÄƒsirea elementelor. ÃŽncercaÈ›i din nou mai tÃ¢rziu."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "ReÃ®ncercare"
                }
            },
            "ru-ru": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Ð”Ð¾Ð¼ÐµÐ½, Ð³Ð´Ðµ Ð²ÑÑ‚Ñ€Ð¾ÐµÐ½Ð° ÑÑ‚Ð° Ñ„Ð¾Ñ€Ð¼Ð°, Ð¼Ð¾Ð¶ÐµÑ‚ Ð½Ðµ Ð²Ñ…Ð¾Ð´Ð¸Ñ‚ÑŒ Ð² ÑÐ¿Ð¸ÑÐ¾Ðº Ð·Ð°Ð¿Ð¸ÑÐµÐ¹ Ð´Ð¾Ð¼ÐµÐ½Ð¾Ð² Ð´Ð»Ñ Ñ„Ð¾Ñ€Ð¼ Ñ Ð²Ð½ÐµÑˆÐ½Ð¸Ð¼ Ñ€Ð°Ð·Ð¼ÐµÑ‰ÐµÐ½Ð¸ÐµÐ¼. Ð¢Ð°ÐºÐ¶Ðµ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾, Ñ‡Ñ‚Ð¾ Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÑƒ ÑÑ‚Ð¾Ð¹ Ñ„Ð¾Ñ€Ð¼Ñ‹ Ð±Ð»Ð¾ÐºÐ¸Ñ€ÑƒÐµÑ‚ Ñ€Ð°ÑÑˆÐ¸Ñ€ÐµÐ½Ð¸Ðµ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð° Ð¸Ð»Ð¸ Ð´Ñ€ÑƒÐ³Ð¾Ð¹ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡Ð°ÐµÐ¼Ñ‹Ð¹ Ð¼Ð¾Ð´ÑƒÐ»ÑŒ. Ð”Ð»Ñ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶ÐµÐ½Ð¸Ñ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ñ„Ð¾Ñ€Ð¼Ñƒ Ð¸ Ð¿ÐµÑ€ÐµÐ·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚Ðµ ÐµÐµ."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½ÐµÐµ..."
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Ð¡Ñ€Ð¾Ðº Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ Ñ„Ð¾Ñ€Ð¼Ñ‹ Ð¸ÑÑ‚ÐµÐº."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "ÐŸÐµÑ€ÐµÐ·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'ÐÐµ ÑƒÐ´Ð°ÐµÑ‚ÑÑ Ð½Ð°Ð¹Ñ‚Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ Ñ„Ð¾Ñ€Ð¼Ñ‹, ÐºÐ¾Ñ‚Ð¾Ñ€ÑƒÑŽ Ð²Ñ‹ Ð¿Ñ‹Ñ‚Ð°ÐµÑ‚ÐµÑÑŒ Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÑƒ ÑÐ²Ð¾ÐµÐ¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Ð£ Ñ„Ð¾Ñ€Ð¼Ñ‹ Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ð¸ Ð½Ð° ÑÐ¾Ð±Ñ‹Ñ‚Ð¸Ðµ Ð½ÐµÑ‚ ÑÐ²ÑÐ·Ð°Ð½Ð½Ð¾Ð³Ð¾ ÑÐ¾Ð±Ñ‹Ñ‚Ð¸Ñ."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Ð¡Ð»Ð¸ÑˆÐºÐ¾Ð¼ Ð¼Ð½Ð¾Ð³Ð¾ Ð·Ð°Ð¿Ñ€Ð¾ÑÐ¾Ð². ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ Ð¿Ð¾Ð·Ð¶Ðµ."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: 'ÐÐ°Ð¼ Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¿Ñ€Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÑŒ Ð²Ð°ÑˆÑƒ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½ÑƒÑŽ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ. Ð£Ð±ÐµÐ´Ð¸Ñ‚ÐµÑÑŒ, Ñ‡Ñ‚Ð¾ Ñ„Ð°Ð¹Ð»Ñ‹ cookie Ð½Ðµ Ð±Ð»Ð¾ÐºÐ¸Ñ€ÑƒÑŽÑ‚ÑÑ, Ð¸Ð»Ð¸ Ð¿ÐµÑ€ÐµÐ¹Ð´Ð¸Ñ‚Ðµ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ "ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ" Ð² ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ð¸ ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ð¹ Ð¿Ð¾Ñ‡Ñ‚Ñ‹.'
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹ Ð¾Ð´Ð¸Ð½ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹ Ð¾Ð´Ð¸Ð½ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ð¾Ðµ Ð¿Ð¾Ð»Ðµ Ð¸Ð· ÑÐ¿Ð¸ÑÐºÐ°"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Ð­Ñ‚Ð¾ Ð¿Ð¾Ð»Ðµ ÑÐ²Ð»ÑÐµÑ‚ÑÑ Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¼"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "ÐŸÑ€ÐµÐ²Ñ‹ÑˆÐµÐ½Ð¾ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÐ½Ð¸Ðµ Ð½Ð° Ñ‡Ð¸ÑÐ»Ð¾ Ð·Ð°Ð¿Ñ€Ð¾ÑÐ¾Ð²"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ñ„Ð¾Ñ€Ð¼Ñƒ Ð² Ð»ÑŽÐ±Ð¾Ð¼ ÑÐ»ÑƒÑ‡Ð°Ðµ"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ð·Ð°Ð³Ñ€ÑƒÐ¶Ð°ÐµÐ¼ ÐµÑ‰Ðµ..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Ð’ Ð´Ð°Ð½Ð½Ñ‹Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚ ÑÐµÑ€Ð²ÐµÑ€ Ð·Ð°Ð½ÑÑ‚, Ð¸ ÑƒÐ´Ð°ÐµÑ‚ÑÑ Ð¸Ð·Ð²Ð»ÐµÑ‡ÑŒ Ð½Ðµ Ð²ÑÐµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ñ. ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ Ð¿Ð¾Ð·Ð¶Ðµ."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Ð’Ð¾Ð·Ð½Ð¸ÐºÐ»Ð° Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð° Ñ Ð¸Ð·Ð²Ð»ÐµÑ‡ÐµÐ½Ð¸ÐµÐ¼ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð². ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ Ð¿Ð¾Ð·Ð¶Ðµ."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚ÑŒ"
                }
            },
            "sk-sk": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "DomÃ©na, na ktorej je tento formulÃ¡r vloÅ¾enÃ½, pravdepodobne nie je zaradenÃ¡ ako zÃ¡znam domÃ©ny pre externe hosÅ¥ovanÃ© formulÃ¡re. VÂ opaÄnom prÃ­pade mÃ´Å¾e rozÅ¡Ã­renie alebo doplnok prehliadaÄa blokovaÅ¥ naÄÃ­tanie tohto formulÃ¡ra. Ak chcete pokraÄovaÅ¥, skontrolujte aÂ znova naÄÃ­tajte formulÃ¡r."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "ÄŒÃ­taÅ¥ Äalej"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "PlatnosÅ¥ formulÃ¡ra uplynula."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Znova naÄÃ­taÅ¥"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "SkÃºsiÅ¥ znova"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'StrÃ¡nku formulÃ¡ra, ktorÃº sa pokÃºÅ¡ate naÄÃ­taÅ¥, nemÃ´Å¾eme nÃ¡jsÅ¥: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Skontrolujte nastavenie strÃ¡nky.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "KÂ formulÃ¡ru na registrÃ¡ciu udalosti nie je priradenÃ¡ Å¾iadna udalosÅ¥."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "PrÃ­liÅ¡ veÄ¾a Å¾iadostÃ­. SkÃºste to znova neskÃ´r."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Nepodarilo sa overiÅ¥ vaÅ¡e kontaktnÃ© Ãºdaje. Uistite sa, Å¾e sÃºbory cookie nie sÃº blokovanÃ©, alebo pouÅ¾ite prepojenie na zruÅ¡enie odberu vÂ e-maile."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Vyberte aspoÅˆ jednu moÅ¾nosÅ¥"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Vyberte aspoÅˆ jednu moÅ¾nosÅ¥"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Vyberte platnÃ© pole zo zoznamu"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Toto pole je povinnÃ©"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Bol prekroÄenÃ½ limit poÄtu poÅ¾iadaviek"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Napriek tomu zobraziÅ¥ formulÃ¡r"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "naÄÃ­tava saâ€¦"
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "naÄÃ­tava sa viacâ€¦"
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Server je momentÃ¡lne zaneprÃ¡zdnenÃ½ a nie vÅ¡etky hodnoty sa naÄÃ­tavajÃº. SkÃºste to znova neskÃ´r."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Vyskytol sa problÃ©m s naÄÃ­tanÃ­m poloÅ¾iek. SkÃºste to znova neskÃ´r."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "SkÃºsiÅ¥ znova"
                }
            },
            "sl-si": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Domena, v kateri je vdelan ta obrazec, morda ni vÄlanjena kot zapis domene za obrazce z zunanjim gostovanjem. Sicer nalaganje tega obrazca morda blokira razÅ¡iritev ali vtiÄnik brskalnika. ÄŒe Å¾elite nadaljevati, preverite in znova naloÅ¾ite obrazec."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "VeÄ o tem"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Obrazec je potekel."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Znova naloÅ¾i"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "VnoviÄni poskus"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Strani obrazca, ki jo poskuÅ¡ate naloÅ¾iti, ni mogoÄe najti: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div> Preverite nastavitev strani.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Registracijski obrazec za dogodek nima povezanega dogodka."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "PreveÄ zahtev. Poskusite znova pozneje."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "VaÅ¡ih podatkov za stik ni mogoÄe preveriti. PrepriÄajte se, da piÅ¡kotki niso blokirani, ali uporabite povezavo za odjavo v e-poÅ¡tnem sporoÄilu."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Izberite vsaj eno moÅ¾nost"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Izberite vsaj eno moÅ¾nost"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Na seznamu izberite veljavno polje"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "To polje je obvezno"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Omejitev Å¡tevila zahtev je preseÅ¾ena"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Vseeno pokaÅ¾i obrazec"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "nalaganje ..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "nalaganje veÄ ..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "StreÅ¾nik je trenutno zaseden in vse vrednosti niso pridobljene. Poskusite znova pozneje."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Pri pridobivanju elementov je priÅ¡lo do teÅ¾ave. Poskusite znova pozneje."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Poskusi znova"
                }
            },
            "sr-cyrl-cs": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Ð”Ð¾Ð¼ÐµÐ½ Ñƒ ÐºÐ¾Ñ˜Ð¸ Ñ˜Ðµ Ð¾Ð²Ð°Ñ˜ Ð¾Ð±Ñ€Ð°Ð·Ð°Ñ† ÑƒÐ³Ñ€Ð°Ñ’ÐµÐ½ Ð¼Ð¾Ð¶Ð´Ð° Ð½Ð¸Ñ˜Ðµ ÑƒÐ¿Ð¸ÑÐ°Ð½ ÐºÐ°Ð¾ Ð·Ð°Ð¿Ð¸Ñ Ð´Ð¾Ð¼ÐµÐ½Ð° Ð·Ð° ÑÐ¿Ð¾Ñ™Ð½Ð¾ Ñ…Ð¾ÑÑ‚Ð¾Ð²Ð°Ð½Ðµ Ð¾Ð±Ñ€Ð°ÑÑ†Ðµ. Ð£ ÑÑƒÐ¿Ñ€Ð¾Ñ‚Ð½Ð¾Ð¼, Ð¿Ñ€Ð¾ÑˆÐ¸Ñ€ÐµÑšÐµ Ð¿Ñ€ÐµÐ³Ð»ÐµÐ´Ð°Ñ‡Ð° Ð¸Ð»Ð¸ Ð´Ð¾Ð´Ð°Ñ‚Ð½Ð° ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ð° Ð¼Ð¾Ð¶Ð´Ð° Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð°Ñ˜Ñƒ ÑƒÑ‡Ð¸Ñ‚Ð°Ð²Ð°ÑšÐµ Ð¾Ð²Ð¾Ð³ Ð¾Ð±Ñ€Ð°ÑÑ†Ð°. Ð ÐµÐ´Ð¸Ð³ÑƒÑ˜Ñ‚Ðµ Ð¸ Ð¿Ð¾Ð½Ð¾Ð²Ð¾ ÑƒÑ‡Ð¸Ñ‚Ð°Ñ˜Ñ‚Ðµ Ð¾Ð±Ñ€Ð°Ð·Ð°Ñ† Ð´Ð° Ð±Ð¸ÑÑ‚Ðµ Ð½Ð°ÑÑ‚Ð°Ð²Ð¸Ð»Ð¸."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "ÐŸÑ€Ð¾Ñ‡Ð¸Ñ‚Ð°Ñ˜Ñ‚Ðµ Ð²Ð¸ÑˆÐµ"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "ÐžÐ±Ñ€Ð°Ð·Ð°Ñ† Ñ˜Ðµ Ð¸ÑÑ‚ÐµÐºÐ°Ð¾."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Ð£Ñ‡Ð¸Ñ‚Ð°Ñ˜ Ð¿Ð¾Ð½Ð¾Ð²Ð¾"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "ÐŸÐ¾ÐºÑƒÑˆÐ°Ñ˜ Ð¿Ð¾Ð½Ð¾Ð²Ð¾"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'ÐÐµ Ð¼Ð¾Ð¶ÐµÐ¼Ð¾ Ð´Ð° Ð¿Ñ€Ð¾Ð½Ð°Ñ’ÐµÐ¼Ð¾ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ Ð¾Ð±Ñ€Ð°ÑÑ†Ð° ÐºÐ¾Ñ˜Ð¸ Ð¿Ð¾ÐºÑƒÑˆÐ°Ð²Ð°Ñ‚Ðµ Ð´Ð° ÑƒÑ‡Ð¸Ñ‚Ð°Ñ‚Ðµ: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. ÐŸÑ€Ð¾Ð²ÐµÑ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð´ÐµÑˆÐ°Ð²Ð°ÑšÐµ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "ÐžÐ±Ñ€Ð°Ð·Ð°Ñ† Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ˜Ðµ Ð´Ð¾Ð³Ð°Ñ’Ð°Ñ˜Ð° Ð½ÐµÐ¼Ð° Ð½Ð¸Ñ˜ÐµÐ´Ð°Ð½ Ð¿Ð¾Ð²ÐµÐ·Ð°Ð½ Ð´Ð¾Ð³Ð°Ñ’Ð°Ñ˜."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "ÐŸÑ€ÐµÐ²Ð¸ÑˆÐµ Ð·Ð°Ñ…Ñ‚ÐµÐ²Ð°. ÐŸÐ¾ÐºÑƒÑˆÐ°Ñ˜Ñ‚Ðµ Ð¿Ð¾Ð½Ð¾Ð²Ð¾ ÐºÐ°ÑÐ½Ð¸Ñ˜Ðµ."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "ÐÐµ Ð¼Ð¾Ð¶ÐµÐ¼Ð¾ Ð´Ð° Ð²ÐµÑ€Ð¸Ñ„Ð¸ÐºÑƒÑ˜ÐµÐ¼Ð¾ Ð²Ð°ÑˆÐµ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ˜Ðµ. Ð£Ð²ÐµÑ€Ð¸Ñ‚Ðµ ÑÐµ Ð´Ð° ÐºÐ¾Ð»Ð°Ñ‡Ð¸Ñ›Ð¸ Ð½Ð¸ÑÑƒ Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð°Ð½Ð¸ Ð¸Ð»Ð¸ ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ñ‚Ðµ Ð²ÐµÐ·Ñƒ Ð·Ð° Ð¾Ñ‚ÐºÐ°Ð·Ð¸Ð²Ð°ÑšÐµ Ð¿Ñ€ÐµÑ‚Ð¿Ð»Ð°Ñ‚Ðµ Ñƒ Ðµ-Ð¿Ð¾Ñ€ÑƒÑ†Ð¸."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Ð˜Ð·Ð°Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð±Ð°Ñ€ Ñ˜ÐµÐ´Ð½Ñƒ Ð¾Ð¿Ñ†Ð¸Ñ˜Ñƒ"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Ð˜Ð·Ð°Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð±Ð°Ñ€ Ñ˜ÐµÐ´Ð½Ñƒ Ð¾Ð¿Ñ†Ð¸Ñ˜Ñƒ"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "ÐžÐ´Ð°Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð²Ð°Ð¶ÐµÑ›Ðµ Ð¿Ð¾Ñ™Ðµ ÑÐ° Ð»Ð¸ÑÑ‚Ðµ"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "ÐžÐ²Ð¾ Ð¿Ð¾Ñ™Ðµ Ñ˜Ðµ Ð¾Ð±Ð°Ð²ÐµÐ·Ð½Ð¾"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "ÐŸÑ€ÐµÐºÐ¾Ñ€Ð°Ñ‡ÐµÐ½Ð¾ Ñ˜Ðµ Ð¾Ð³Ñ€Ð°Ð½Ð¸Ñ‡ÐµÑšÐµ Ð±Ñ€Ð¾Ñ˜Ð° Ð·Ð°Ñ…Ñ‚ÐµÐ²Ð°"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Ð¡Ð²ÐµÑ˜ÐµÐ´Ð½Ð¾ Ð¿Ñ€Ð¸ÐºÐ°Ð¶Ð¸ Ð¾Ð±Ñ€Ð°Ð·Ð°Ñ†"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "ÑƒÑ‡Ð¸Ñ‚Ð°Ð²Ð°ÑšÐµ..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "ÑƒÑ‡Ð¸Ñ‚Ð°Ð²Ð°ÑšÐµ Ñ˜Ð¾Ñˆ..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Ð¡ÐµÑ€Ð²ÐµÑ€ Ñ˜Ðµ Ñ‚Ñ€ÐµÐ½ÑƒÑ‚Ð½Ð¾ Ð·Ð°ÑƒÐ·ÐµÑ‚ Ð¸ Ð½Ðµ Ð¿Ñ€ÐµÑƒÐ·Ð¸Ð¼Ð°Ñ˜Ñƒ ÑÐµ ÑÐ²Ðµ Ð²Ñ€ÐµÐ´Ð½Ð¾ÑÑ‚Ð¸. ÐŸÐ¾ÐºÑƒÑˆÐ°Ñ˜Ñ‚Ðµ Ð¿Ð¾Ð½Ð¾Ð²Ð¾ ÐºÐ°ÑÐ½Ð¸Ñ˜Ðµ."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Ð”Ð¾ÑˆÐ»Ð¾ Ñ˜Ðµ Ð´Ð¾ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð° Ð¿Ñ€Ð¸Ð»Ð¸ÐºÐ¾Ð¼ Ð¿Ñ€ÐµÑƒÐ·Ð¸Ð¼Ð°ÑšÐ° ÑÑ‚Ð°Ð²ÐºÐ¸. ÐŸÐ¾ÐºÑƒÑˆÐ°Ñ˜Ñ‚Ðµ Ð¿Ð¾Ð½Ð¾Ð²Ð¾ ÐºÐ°ÑÐ½Ð¸Ñ˜Ðµ."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "ÐŸÐ¾ÐºÑƒÑˆÐ°Ñ˜ Ð¿Ð¾Ð½Ð¾Ð²Ð¾"
                }
            },
            "sr-latn-cs": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Domen u koji je ovaj obrazac ugraÄ‘en moÅ¾da nije upisan kao zapis domena za spoljno hostovane obrasce. U suprotnom, proÅ¡irenje pregledaÄa ili dodatna komponenta moÅ¾da blokiraju uÄitavanje ovog obrasca. Redigujte i ponovo uÄitajte obrazac da biste nastavili."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "ProÄitajte viÅ¡e"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Obrazac je istekao."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "UÄitaj ponovo"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "PokuÅ¡aj ponovo"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'Ne moÅ¾emo da pronaÄ‘emo stranicu obrasca koji pokuÅ¡avate da uÄitate: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Proverite podeÅ¡avanje stranice.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Obrazac registracije dogaÄ‘aja nema nijedan povezan dogaÄ‘aj."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "PreviÅ¡e zahteva. PokuÅ¡ajte ponovo kasnije."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Ne moÅ¾emo da verifikujemo vaÅ¡e kontakt informacije. Uverite se da kolaÄiÄ‡i nisu blokirani ili koristite vezu za otkazivanje pretplate u e-poruci."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Izaberite bar jednu opciju"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Izaberite bar jednu opciju"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Odaberite vaÅ¾eÄ‡e polje sa liste"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Ovo polje je obavezno"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "PrekoraÄeno je ograniÄenje broja zahteva"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Ipak prikaÅ¾i obrazac"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "uÄitavanje..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "uÄitavanje joÅ¡..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Server je trenutno zauzet i ne preuzimaju se sve vrednosti. PokuÅ¡ajte ponovo kasnije."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "DoÅ¡lo je do problema prilikom preuzimanja stavki. PokuÅ¡ajte ponovo kasnije."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "PokuÅ¡aj ponovo"
                }
            },
            "sv-se": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "DomÃ¤nen dÃ¤r det hÃ¤r formulÃ¤ret Ã¤r inbÃ¤ddat kanske inte Ã¤r anmÃ¤lt som en domÃ¤npost fÃ¶r externt vÃ¤rdbaserade formulÃ¤r. Annars kanske ett webblÃ¤sartillÃ¤gg eller plugin-program fÃ¶rhindrar att det hÃ¤r formulÃ¤ret lÃ¤ses in. Granska och lÃ¤s in formulÃ¤ret pÃ¥ nytt om du vill fortsÃ¤tta."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Mer information"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "FormulÃ¤ret har upphÃ¶rt att gÃ¤lla."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "LÃ¤s in igen"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "FÃ¶rsÃ¶k igen"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'De gÃ¥r inte att hitta den formulÃ¤rsida du fÃ¶rsÃ¶ker lÃ¤sa in: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Kontrollera sidinstÃ¤llningarna.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "HÃ¤ndelseregistreringsformulÃ¤ret har inga associerade hÃ¤ndelser."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "FÃ¶r mÃ¥nga begÃ¤randen. FÃ¶rsÃ¶k igen senare."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Vi kan inte verifiera dina kontaktuppgifter. Se till att cookies inte Ã¤r blockerade eller anvÃ¤nd lÃ¤nken fÃ¶r att avsluta prenumerationen i e-postmeddelandet."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "VÃ¤lj minst ett alternativ"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "VÃ¤lj minst ett alternativ"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "VÃ¤lj ett giltigt fÃ¤lt i listan"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "FÃ¤ltet Ã¤r obligatoriskt"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Antalet begÃ¤randen har Ã¶verskridits"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Visa formulÃ¤r Ã¤ndÃ¥"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "lÃ¤ser in â€¦"
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "lÃ¤ser in fler â€¦"
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Servern Ã¤r upptagen just nu och alla vÃ¤rden hÃ¤mtas inte. FÃ¶rsÃ¶k igen senare."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Ett fel uppstod nÃ¤r objekt hÃ¤mtades. FÃ¶rsÃ¶k igen senare."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "FÃ¶rsÃ¶k igen"
                }
            },
            "th-th": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "à¹‚à¸”à¹€à¸¡à¸™à¸—à¸µà¹ˆà¸à¸±à¸‡à¸Ÿà¸­à¸£à¹Œà¸¡à¸™à¸µà¹‰à¸­à¸²à¸ˆà¹„à¸¡à¹ˆà¹„à¸”à¹‰à¹€à¸›à¹‡à¸™à¸£à¸²à¸¢à¸à¸²à¸£à¸‚à¸­à¸‡à¹€à¸£à¸à¸„à¸­à¸£à¹Œà¸”à¹‚à¸”à¹€à¸¡à¸™à¸ªà¹à¸²à¸«à¸£à¸±à¸šà¸Ÿà¸­à¸£à¹Œà¸¡à¸—à¸µà¹ˆà¹‚à¸®à¸ªà¸•à¹Œà¸ à¸²à¸¢à¸™à¸­à¸ à¸«à¸£à¸·à¸­à¹„à¸¡à¹ˆà¹€à¸Šà¹ˆà¸™à¸™à¸±à¹‰à¸™à¸ªà¹ˆà¸§à¸™à¸‚à¸¢à¸²à¸¢à¹€à¸šà¸£à¸²à¸§à¹Œà¹€à¸‹à¸­à¸£à¹Œà¸«à¸£à¸·à¸­à¸›à¸¥à¸±à¹Šà¸à¸­à¸´à¸™à¸­à¸²à¸ˆà¸šà¸¥à¹‡à¸­à¸à¸Ÿà¸­à¸£à¹Œà¸¡à¸™à¸µà¹‰à¹„à¸¡à¹ˆà¹ƒà¸«à¹‰à¹‚à¸«à¸¥à¸” à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹à¸¥à¸°à¹‚à¸«à¸¥à¸”à¸Ÿà¸­à¸£à¹Œà¸¡à¹ƒà¸«à¸¡à¹ˆà¹€à¸žà¸·à¹ˆà¸­à¸”à¹à¸²à¹€à¸™à¸´à¸™à¸à¸²à¸£à¸•à¹ˆà¸­"
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "à¸­à¹ˆà¸²à¸™à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸•à¸´à¸¡"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "à¸Ÿà¸­à¸£à¹Œà¸¡à¸«à¸¡à¸”à¸­à¸²à¸¢à¸¸à¹à¸¥à¹‰à¸§"
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "à¹‚à¸«à¸¥à¸”à¹ƒà¸«à¸¡à¹ˆ"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'à¹€à¸£à¸²à¹„à¸¡à¹ˆà¸žà¸šà¹€à¸žà¸ˆà¸Ÿà¸­à¸£à¹Œà¸¡à¸—à¸µà¹ˆà¸„à¸¸à¸“à¸à¸³à¸¥à¸±à¸‡à¸žà¸¢à¸²à¸¢à¸²à¸¡à¹‚à¸«à¸¥à¸”: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div> à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸„à¹ˆà¸²à¹€à¸žà¸ˆà¸‚à¸­à¸‡à¸„à¸¸à¸“'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "à¸Ÿà¸­à¸£à¹Œà¸¡à¸à¸²à¸£à¸¥à¸‡à¸—à¸°à¹€à¸šà¸µà¸¢à¸™à¹€à¸«à¸•à¸¸à¸à¸²à¸£à¸“à¹Œà¹„à¸¡à¹ˆà¸¡à¸µà¹€à¸«à¸•à¸¸à¸à¸²à¸£à¸“à¹Œà¸—à¸µà¹ˆà¹€à¸Šà¸·à¹ˆà¸­à¸¡à¹‚à¸¢à¸‡à¸Ÿà¸­à¸£à¹Œà¸¡"
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "à¸¡à¸µà¸„à¸³à¸‚à¸­à¸¡à¸²à¸à¹€à¸à¸´à¸™à¹„à¸› à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡à¹ƒà¸™à¸ à¸²à¸¢à¸«à¸¥à¸±à¸‡"
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "à¹€à¸£à¸²à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¸¢à¸·à¸™à¸¢à¸±à¸™à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸à¸²à¸£à¸•à¸´à¸”à¸•à¹ˆà¸­à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹ƒà¸«à¹‰à¹à¸™à¹ˆà¹ƒà¸ˆà¸§à¹ˆà¸²à¸„à¸¸à¸à¸à¸µà¹‰à¹„à¸¡à¹ˆà¹„à¸”à¹‰à¸–à¸¹à¸à¸šà¸¥à¹‡à¸­à¸à¸«à¸£à¸·à¸­à¹ƒà¸Šà¹‰à¸¥à¸´à¸‡à¸à¹Œà¸¢à¸à¹€à¸¥à¸´à¸à¸à¸²à¸£à¸šà¸­à¸à¸£à¸±à¸šà¹ƒà¸™à¸­à¸µà¹€à¸¡à¸¥à¸‚à¸­à¸‡à¸„à¸¸à¸“"
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "à¹€à¸¥à¸·à¸­à¸à¸­à¸¢à¹ˆà¸²à¸‡à¸™à¹‰à¸­à¸¢à¸«à¸™à¸¶à¹ˆà¸‡à¸•à¸±à¸§à¹€à¸¥à¸·à¸­à¸"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "à¹€à¸¥à¸·à¸­à¸à¸­à¸¢à¹ˆà¸²à¸‡à¸™à¹‰à¸­à¸¢à¸«à¸™à¸¶à¹ˆà¸‡à¸•à¸±à¸§à¹€à¸¥à¸·à¸­à¸"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "à¹€à¸¥à¸·à¸­à¸à¸Ÿà¸´à¸¥à¸”à¹Œà¸—à¸µà¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡à¸ˆà¸²à¸à¸£à¸²à¸¢à¸à¸²à¸£"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "à¸Ÿà¸´à¸¥à¸”à¹Œà¸™à¸µà¹‰à¹€à¸›à¹‡à¸™à¸Ÿà¸´à¸¥à¸”à¹Œà¸—à¸µà¹ˆà¸•à¹‰à¸­à¸‡à¸£à¸°à¸šà¸¸"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "à¹€à¸à¸´à¸™à¸ˆà¸³à¸™à¸§à¸™à¸„à¸³à¸‚à¸­à¸ªà¸¹à¸‡à¸ªà¸¸à¸”"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "à¹à¸ªà¸”à¸‡à¹à¸šà¸šà¸Ÿà¸­à¸£à¹Œà¸¡à¸•à¹ˆà¸­à¹„à¸›"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "à¸à¸³à¸¥à¸±à¸‡à¹‚à¸«à¸¥à¸”..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "à¸à¸³à¸¥à¸±à¸‡à¹‚à¸«à¸¥à¸”à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸•à¸´à¸¡..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "à¹€à¸‹à¸´à¸£à¹Œà¸Ÿà¹€à¸§à¸­à¸£à¹Œà¹„à¸¡à¹ˆà¸§à¹ˆà¸²à¸‡à¹ƒà¸™à¸‚à¸“à¸°à¸™à¸µà¹‰à¹à¸¥à¸°à¸„à¹ˆà¸²à¹„à¸¡à¹ˆà¹„à¸”à¹‰à¸–à¸¹à¸à¹€à¸£à¸µà¸¢à¸à¹ƒà¸Šà¹‰à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸” à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡à¹ƒà¸™à¸ à¸²à¸¢à¸«à¸¥à¸±à¸‡"
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "à¸¡à¸µà¸›à¸±à¸à¸«à¸²à¹ƒà¸™à¸à¸²à¸£à¹€à¸£à¸µà¸¢à¸à¸£à¸²à¸¢à¸à¸²à¸£ à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡à¹ƒà¸™à¸ à¸²à¸¢à¸«à¸¥à¸±à¸‡"
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡"
                }
            },
            "tr-tr": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "Bu formun katÄ±ÅŸtÄ±rÄ±ldÄ±ÄŸÄ± etki alanÄ±, harici olarak barÄ±ndÄ±rÄ±lan formlarÄ±n etki alanÄ± kaydÄ± olarak listelenmemiÅŸ olabilir. Ya da bir tarayÄ±cÄ± uzantÄ±sÄ± veya eklenti bu formun yÃ¼klenmesini engelliyor olabilir. Devam etmek iÃ§in formu inceleyin ve yeniden yÃ¼kleyin."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "DevamÄ±nÄ± okuyun"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Formun sÃ¼resi doldu."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Yeniden yÃ¼kle"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Yeniden dene"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'YÃ¼klemeye Ã§alÄ±ÅŸtÄ±ÄŸÄ±nÄ±z form sayfasÄ±nÄ± bulamÄ±yoruz: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. LÃ¼tfen sayfa ayarÄ±nÄ±zÄ± kontrol edin.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Etkinlik kaydÄ± formuyla iliÅŸkilendirilmiÅŸ bir etkinlik yok."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Ã‡ok fazla istek var. LÃ¼tfen daha sonra yeniden deneyin."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "Ä°letiÅŸim bilgilerinizi doÄŸrulayamÄ±yoruz. TanÄ±mlama bilgilerinin engellenmediÄŸinden emin olun veya e-postanÄ±zdaki abonelikten Ã§Ä±kma baÄŸlantÄ±sÄ±nÄ± kullanÄ±n."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "En az bir seÃ§enek belirleyin"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "En az bir seÃ§enek belirleyin"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Listeden geÃ§erli bir alan seÃ§in"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Bu alan gereklidir"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "Ä°stek sayÄ±sÄ± sÄ±nÄ±rÄ± aÅŸÄ±ldÄ±"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Yine de formu gÃ¶ster"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "yÃ¼kleniyor..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "daha fazlasÄ± yÃ¼kleniyor..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Sunucu ÅŸu anda meÅŸgul ve tÃ¼m deÄŸerler alÄ±namÄ±yor. Daha sonra yeniden deneyin."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "Ã–ÄŸeler alÄ±nÄ±rken bir sorun oluÅŸtu. Daha sonra yeniden deneyin."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Yeniden dene"
                }
            },
            "uk-ua": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "ÐœÐ¾Ð¶Ð»Ð¸Ð²Ð¾, Ð´Ð¾Ð¼ÐµÐ½, Ñƒ ÑÐºÐ¸Ð¹ Ð²Ð±ÑƒÐ´Ð¾Ð²Ð°Ð½Ð° Ñ†Ñ Ñ„Ð¾Ñ€Ð¼Ð°, Ð½Ðµ Ð²ÐºÐ°Ð·Ð°Ð½Ð¾ ÑÐº Ð´Ð¾Ð¼ÐµÐ½ Ð´Ð»Ñ Ð·Ð¾Ð²Ð½Ñ–ÑˆÐ½ÑŒÐ¾Ð³Ð¾ Ñ€Ð¾Ð·Ð¼Ñ–Ñ‰ÐµÐ½Ð½Ñ Ñ„Ð¾Ñ€Ð¼. Ð†Ð½ÑˆÐ° Ð¹Ð¼Ð¾Ð²Ñ–Ñ€Ð½Ð° Ð¿Ñ€Ð¸Ñ‡Ð¸Ð½Ð°: Ñ€Ð¾Ð·ÑˆÐ¸Ñ€ÐµÐ½Ð½Ñ Ð°Ð±Ð¾ Ð¿Ð»Ð°Ð³Ñ–Ð½ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð° Ð¼Ð¾Ð¶ÑƒÑ‚ÑŒ Ð±Ð»Ð¾ÐºÑƒÐ²Ð°Ñ‚Ð¸ Ð·Ð°Ð²Ð°Ð½Ñ‚Ð°Ð¶ÐµÐ½Ð½Ñ Ñ†Ñ–Ñ”Ñ— Ñ„Ð¾Ñ€Ð¼Ð¸. ÐŸÐµÑ€ÐµÐ²Ñ–Ñ€Ñ‚Ðµ Ð¹ Ð¿ÐµÑ€ÐµÐ·Ð°Ð²Ð°Ð½Ñ‚Ð°Ð¶Ñ‚Ðµ Ñ„Ð¾Ñ€Ð¼Ñƒ, Ñ‰Ð¾Ð± Ð¿Ñ€Ð¾Ð´Ð¾Ð²Ð¶Ð¸Ñ‚Ð¸."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Ð§Ð¸Ñ‚Ð°Ñ‚Ð¸ Ñ‰Ðµ"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Ð¢ÐµÑ€Ð¼Ñ–Ð½ Ð´Ñ–Ñ— Ñ„Ð¾Ñ€Ð¼Ð¸ Ð¼Ð¸Ð½ÑƒÐ²."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "ÐŸÐµÑ€ÐµÐ·Ð°Ð²Ð°Ð½Ñ‚Ð°Ð¶Ð¸Ñ‚Ð¸"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ñ–Ñ‚ÑŒ ÑÐ¿Ñ€Ð¾Ð±Ñƒ"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'ÐœÐ¸ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÐ¼Ð¾ Ð·Ð½Ð°Ð¹Ñ‚Ð¸ ÑÑ‚Ð¾Ñ€Ñ–Ð½ÐºÑƒ Ñ„Ð¾Ñ€Ð¼Ð¸, ÑÐºÑƒ Ð²Ð¸ Ð½Ð°Ð¼Ð°Ð³Ð°Ñ”Ñ‚ÐµÑÑ Ð·Ð°Ð²Ð°Ð½Ñ‚Ð°Ð¶Ð¸Ñ‚Ð¸: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. ÐŸÐµÑ€ÐµÐ²Ñ–Ñ€Ñ‚Ðµ Ð½Ð°Ð»Ð°ÑˆÑ‚ÑƒÐ²Ð°Ð½Ð½Ñ ÑÑ‚Ð¾Ñ€Ñ–Ð½ÐºÐ¸.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "Ð£ Ñ„Ð¾Ñ€Ð¼Ð¸ Ñ€ÐµÑ”ÑÑ‚Ñ€Ð°Ñ†Ñ–Ñ— Ð½Ð° Ð¿Ð¾Ð´Ñ–ÑŽ Ð½ÐµÐ¼Ð°Ñ” Ð¿Ð¾Ð²â€™ÑÐ·Ð°Ð½Ð¸Ñ… Ð¿Ð¾Ð´Ñ–Ð¹."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "Ð—Ð°Ð±Ð°Ð³Ð°Ñ‚Ð¾ Ð·Ð°Ð¿Ð¸Ñ‚Ñ–Ð². ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ñ–Ñ‚ÑŒ ÑÐ¿Ñ€Ð¾Ð±Ñƒ Ð¿Ñ–Ð·Ð½Ñ–ÑˆÐµ."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "ÐÐµ Ð²Ð´Ð°Ð»Ð¾ÑÑ Ð¿ÐµÑ€ÐµÐ²Ñ–Ñ€Ð¸Ñ‚Ð¸ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½Ñƒ Ñ–Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ñ–ÑŽ. ÐŸÐµÑ€ÐµÐºÐ¾Ð½Ð°Ð¹Ñ‚ÐµÑÑ, Ñ‰Ð¾ Ñ„Ð°Ð¹Ð»Ð¸ cookie Ð½Ðµ Ð·Ð°Ð±Ð»Ð¾ÐºÐ¾Ð²Ð°Ð½Ð¾, Ð°Ð±Ð¾ ÑÐºÐ¾Ñ€Ð¸ÑÑ‚Ð°Ð¹Ñ‚ÐµÑÑ Ð¿Ð¾ÑÐ¸Ð»Ð°Ð½Ð½ÑÐ¼ Ð½Ð° ÑÐºÐ°ÑÑƒÐ²Ð°Ð½Ð½Ñ Ð¿Ñ–Ð´Ð¿Ð¸ÑÐºÐ¸ Ð² Ð¿Ð¾Ð²Ñ–Ð´Ð¾Ð¼Ð»ÐµÐ½Ð½Ñ– ÐµÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ñ— Ð¿Ð¾ÑˆÑ‚Ð¸."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Ð’Ð¸Ð±ÐµÑ€Ñ–Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð½Ð°Ð¹Ð¼Ð½Ñ– Ð¾Ð´Ð¸Ð½ Ð²Ð°Ñ€Ñ–Ð°Ð½Ñ‚"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Ð’Ð¸Ð±ÐµÑ€Ñ–Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð½Ð°Ð¹Ð¼Ð½Ñ– Ð¾Ð´Ð¸Ð½ Ð²Ð°Ñ€Ñ–Ð°Ð½Ñ‚"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Ð’Ð¸Ð±ÐµÑ€Ñ–Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð¿ÑƒÑÑ‚Ð¸Ð¼Ðµ Ð¿Ð¾Ð»Ðµ Ð·Ñ– ÑÐ¿Ð¸ÑÐºÑƒ"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "Ð¦Ðµ Ð¾Ð±Ð¾Ð²â€™ÑÐ·ÐºÐ¾Ð²Ðµ Ð¿Ð¾Ð»Ðµ"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "ÐŸÐµÑ€ÐµÐ²Ð¸Ñ‰ÐµÐ½Ð¾ Ð¾Ð±Ð¼ÐµÐ¶ÐµÐ½Ð½Ñ Ð½Ð° ÐºÑ–Ð»ÑŒÐºÑ–ÑÑ‚ÑŒ Ð·Ð°Ð¿Ð¸Ñ‚Ñ–Ð²"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Ð’ÑÐµ Ð¾Ð´Ð½Ð¾ Ð¿Ð¾ÐºÐ°Ð·ÑƒÐ²Ð°Ñ‚Ð¸ Ñ„Ð¾Ñ€Ð¼Ñƒ"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ð·Ð°Ð²Ð°Ð½Ñ‚Ð°Ð¶ÐµÐ½Ð½Ñâ€¦"
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ð·Ð°Ð²Ð°Ð½Ñ‚Ð°Ð¶ÐµÐ½Ð½Ñ Ð´Ð¾Ð´Ð°Ñ‚ÐºÐ¾Ð²Ð¸Ñ…..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "Ð¡ÐµÑ€Ð²ÐµÑ€ Ð·Ð°Ñ€Ð°Ð· Ð·Ð°Ð¹Ð½ÑÑ‚Ð¸Ð¹, Ñ– Ð¾Ñ‚Ñ€Ð¸Ð¼Ð°Ð½Ð¾ Ð½Ðµ Ð²ÑÑ– Ð·Ð½Ð°Ñ‡ÐµÐ½Ð½Ñ. ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ñ–Ñ‚ÑŒ ÑÐ¿Ñ€Ð¾Ð±Ñƒ Ð¿Ñ–Ð·Ð½Ñ–ÑˆÐµ."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "ÐÐµ Ð²Ð´Ð°Ð»Ð¾ÑÑ Ð¾Ñ‚Ñ€Ð¸Ð¼Ð°Ñ‚Ð¸ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¸. ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ñ–Ñ‚ÑŒ ÑÐ¿Ñ€Ð¾Ð±Ñƒ Ð¿Ñ–Ð·Ð½Ñ–ÑˆÐµ."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ð¸"
                }
            },
            "vi-vn": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "TÃªn miá»n mÃ  biá»ƒu máº«u nÃ y Ä‘Æ°á»£c nhÃºng cÃ³ thá»ƒ khÃ´ng Ä‘Æ°á»£c xáº¿p vÃ o báº£n ghi tÃªn miá»n cho biá»ƒu máº«u Ä‘Æ°á»£c lÆ°u trá»¯ bÃªn ngoÃ i. Náº¿u khÃ´ng, tiá»‡n Ã­ch má»Ÿ rá»™ng hoáº·c pháº§n bá»• trá»£ cá»§a trÃ¬nh duyá»‡t cÃ³ thá»ƒ cháº·n tÃ¡c vá»¥ táº£i biá»ƒu máº«u nÃ y. Xem xÃ©t vÃ  táº£i láº¡i biá»ƒu máº«u Ä‘á»ƒ tiáº¿p tá»¥c."
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "Äá»c thÃªm"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "Biá»ƒu máº«u Ä‘Ã£ háº¿t háº¡n."
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "Táº£i láº¡i"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "Thá»­ láº¡i"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'ChÃºng tÃ´i khÃ´ng thá»ƒ tÃ¬m tháº¥y trang biá»ƒu máº«u báº¡n Ä‘ang cá»‘ gáº¯ng táº£i: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>. Vui lÃ²ng kiá»ƒm tra thiáº¿t láº­p trang cá»§a báº¡n.'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "KhÃ´ng cÃ³ sá»± kiá»‡n nÃ o Ä‘Æ°á»£c liÃªn káº¿t vá»›i biá»ƒu máº«u Ä‘Äƒng kÃ½ sá»± kiá»‡n nÃ y."
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "QuÃ¡ nhiá»u yÃªu cáº§u. Vui lÃ²ng thá»­ láº¡i sau."
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "ChÃºng tÃ´i khÃ´ng thá»ƒ xÃ¡c minh thÃ´ng tin liÃªn há»‡ cá»§a báº¡n. Äáº£m báº£o cookie khÃ´ng bá»‹ cháº·n hoáº·c sá»­ dá»¥ng liÃªn káº¿t há»§y Ä‘Äƒng kÃ½ trong email cá»§a báº¡n."
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "Chá»n Ã­t nháº¥t má»™t tÃ¹y chá»n"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "Chá»n Ã­t nháº¥t má»™t tÃ¹y chá»n"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "Chá»n má»™t trÆ°á»ng há»£p lá»‡ trong danh sÃ¡ch"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "ÄÃ¢y lÃ  trÆ°á»ng báº¯t buá»™c"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "ÄÃ£ vÆ°á»£t quÃ¡ sá»‘ lÆ°á»£ng yÃªu cáº§u"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "Váº«n hiá»ƒn thá»‹ biá»ƒu máº«u"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ä‘ang táº£i..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "Ä‘ang táº£i thÃªm..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "MÃ¡y chá»§ Ä‘ang báº­n vÃ  khÃ´ng thá»ƒ truy xuáº¥t táº¥t cáº£ cÃ¡c giÃ¡ trá»‹. HÃ£y thá»­ láº¡i sau."
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "ÄÃ£ xáº£y ra lá»—i khi truy xuáº¥t cÃ¡c má»¥c. HÃ£y thá»­ láº¡i sau."
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "Thá»­ láº¡i"
                }
            },
            "zh-cn": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "æ­¤çª—ä½“åµŒå…¥åˆ°çš„åŸŸå¯èƒ½æœªåˆ—å‡ºä¸ºå¤–éƒ¨æ‰˜ç®¡çª—ä½“çš„åŸŸè®°å½•ã€‚æˆ–è€…ï¼Œæµè§ˆå™¨æ‰©å±•æˆ–æ’ä»¶å¯èƒ½é˜»æ­¢åŠ è½½æ­¤çª—ä½“ã€‚è¯·æ£€æŸ¥å¹¶é‡æ–°åŠ è½½çª—ä½“ä»¥ç»§ç»­ã€‚"
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "é˜…è¯»è¯¦ç»†ä¿¡æ¯"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "æ­¤çª—ä½“å·²åˆ°æœŸã€‚"
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "é‡æ–°åŠ è½½"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "é‡è¯•"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'æˆ‘ä»¬æ‰¾ä¸åˆ°æ‚¨å°è¯•åŠ è½½çš„çª—ä½“é¡µé¢: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>ã€‚è¯·æ£€æŸ¥æ‚¨çš„é¡µé¢è®¾ç½®ã€‚'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "äº‹ä»¶æ³¨å†Œçª—ä½“æ²¡æœ‰å…³è”çš„äº‹ä»¶ã€‚"
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "è¯·æ±‚è¿‡å¤šã€‚è¯·ç¨åŽé‡è¯•ã€‚"
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "æˆ‘ä»¬æ— æ³•éªŒè¯æ‚¨çš„è”ç³»äººä¿¡æ¯ã€‚è¯·ç¡®ä¿æœªé˜»æ­¢ Cookie æˆ–åœ¨ç”µå­é‚®ä»¶ä¸­ä½¿ç”¨å–æ¶ˆè®¢é˜…é“¾æŽ¥ã€‚"
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "è¯·è‡³å°‘é€‰æ‹©ä¸€ä¸ªé€‰é¡¹"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "è¯·è‡³å°‘é€‰æ‹©ä¸€ä¸ªé€‰é¡¹"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "ä»Žåˆ—è¡¨ä¸­é€‰æ‹©æœ‰æ•ˆå­—æ®µ"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "æ­¤å­—æ®µä¸ºå¿…å¡«å­—æ®µ"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "è¶…è¿‡äº†è¯·æ±‚è®¡æ•°é™åˆ¶"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "ä»æ˜¾ç¤ºçª—ä½“"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "æ­£åœ¨åŠ è½½..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "æ­£åœ¨åŠ è½½æ›´å¤šå†…å®¹..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "æœåŠ¡å™¨çŽ°åœ¨æ­£å¿™ï¼Œæ— æ³•æ£€ç´¢æ‰€æœ‰å€¼ã€‚è¯·ç¨åŽé‡è¯•ã€‚"
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "æ£€ç´¢é¡¹ç›®æ—¶å‡ºçŽ°é—®é¢˜ã€‚è¯·ç¨åŽé‡è¯•ã€‚"
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "é‡è¯•"
                }
            },
            "zh-hk": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "æ­¤è¡¨å–®åµŒå…¥çš„ç¶²åŸŸå¯èƒ½ä¸æœƒç™»éŒ„ç‚ºå¤–éƒ¨è¨—ç®¡è¡¨å–®çš„ç¶²åŸŸè¨˜éŒ„ã€‚å¦å‰‡ç€è¦½å™¨æ“´å……åŠŸèƒ½æˆ–å¤–æŽ›ç¨‹å¼å¯èƒ½æœƒå°éŽ–è¼‰å…¥æ­¤è¡¨å–®ã€‚æŸ¥çœ‹ä¸¦é‡æ–°è¼‰å…¥è¡¨å–®ä»¥ç¹¼çºŒã€‚"
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "é€²ä¸€æ­¥äº†è§£"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "è¡¨å–®å·²éŽæœŸã€‚"
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "é‡æ–°è¼‰å…¥"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "å†è©¦ä¸€æ¬¡"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'æ‰¾ä¸åˆ°æ‚¨è¦è¼‰å…¥çš„è¡¨å–®é é¢: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>ã€‚è«‹æª¢æŸ¥æ‚¨çš„ç‰ˆé¢è¨­å®šã€‚'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "æ²’æœ‰èˆ‡äº‹ä»¶è¨»å†Šå½¢å¼ç›¸é—œçš„äº‹ä»¶ã€‚"
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "è¦æ±‚å¤ªå¤šã€‚è«‹ç¨å¾Œå†è©¦ã€‚"
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "æˆ‘å€‘ç„¡æ³•é©—è­‰æ‚¨çš„è¯çµ¡è³‡è¨Šã€‚è«‹ç¢ºå®šæœªå°éŽ– Cookie æˆ–ä½¿ç”¨é›»å­éƒµä»¶ä¸­çš„å–æ¶ˆè¨‚é–±é€£çµã€‚"
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "è‡³å°‘é¸å–ä¸€å€‹é¸é …"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "è‡³å°‘é¸å–ä¸€å€‹é¸é …"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "å¾žæ¸…å–®ä¸­é¸æ“‡æœ‰æ•ˆæ¬„ä½"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "é€™æ˜¯å¿…å¡«æ¬„ä½"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "è¶…éŽè¦æ±‚è¨ˆæ•¸ä¸Šé™"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "ä¸€å¾‹é¡¯ç¤ºè¡¨å–®"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "æ­£åœ¨è¼‰å…¥..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "æ­£åœ¨è¼‰å…¥æ›´å¤š..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "ä¼ºæœå™¨ç›®å‰å¿™ç¢Œä¸­ï¼Œä¸¦éžæ‰€æœ‰å€¼éƒ½åœ¨æ“·å–ã€‚ç¨å¾Œå†è©¦ã€‚"
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "æ“·å–é …ç›®æ™‚ç™¼ç”Ÿå•é¡Œã€‚ç¨å¾Œå†è©¦ã€‚"
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "é‡è©¦"
                }
            },
            "zh-tw": {
                InvalidDomain: {
                    Purpose: "Warning: form misconfigured (missing authenticated domain) or interfering browser extension issue",
                    Value: "æ­¤è¡¨å–®åµŒå…¥çš„ç¶²åŸŸå¯èƒ½ä¸æœƒç™»éŒ„ç‚ºå¤–éƒ¨è¨—ç®¡è¡¨å–®çš„ç¶²åŸŸè¨˜éŒ„ã€‚å¦å‰‡ç€è¦½å™¨æ“´å……åŠŸèƒ½æˆ–å¤–æŽ›ç¨‹å¼å¯èƒ½æœƒå°éŽ–è¼‰å…¥æ­¤è¡¨å–®ã€‚æŸ¥çœ‹ä¸¦é‡æ–°è¼‰å…¥è¡¨å–®ä»¥ç¹¼çºŒã€‚"
                },
                InvalidDomainLink: {
                    Purpose: "text of the link for form misconfigured domain or interfering browser extension issue",
                    Value: "é€²ä¸€æ­¥äº†è§£"
                },
                InvalidDomainURL: {
                    Purpose: "URL for form misconfigured domain or interfering browser extension issue",
                    Value: "https://go.microsoft.com/fwlink/p/?linkid=2099472"
                },
                CorrelationExpired: {
                    Purpose: "The form expired already / need to reload the page",
                    Value: "è¡¨å–®å·²éŽæœŸã€‚"
                },
                Reload: {
                    Purpose: "Reload",
                    Value: "é‡æ–°è¼‰å…¥"
                },
                TryAgain: {
                    Purpose: "TryAgain",
                    Value: "å†è©¦ä¸€æ¬¡"
                },
                MissingFormPage: {
                    Purpose: "FormPage was not found.",
                    Value: 'æ‰¾ä¸åˆ°æ‚¨è¦è¼‰å…¥çš„è¡¨å–®é é¢: <div data-editorblocktype="FormBlock" data-form-block-id="{FormPageId}"></div>ã€‚è«‹æª¢æŸ¥æ‚¨çš„ç‰ˆé¢è¨­å®šã€‚'
                },
                EventFormWithoutRegistration: {
                    Purpose: "Event form was created, but is missing the link to an event",
                    Value: "æ²’æœ‰èˆ‡äº‹ä»¶è¨»å†Šå½¢å¼ç›¸é—œçš„äº‹ä»¶ã€‚"
                },
                TooManyRequests: {
                    Purpose: "User-based throttling - too many requests.",
                    Value: "è¦æ±‚å¤ªå¤šã€‚è«‹ç¨å¾Œå†è©¦ã€‚"
                },
                ContactMissing: {
                    Purpose: "Contact is missing for form load",
                    Value: "æˆ‘å€‘ç„¡æ³•é©—è­‰æ‚¨çš„è¯çµ¡è³‡è¨Šã€‚è«‹ç¢ºå®šæœªå°éŽ– Cookie æˆ–ä½¿ç”¨é›»å­éƒµä»¶ä¸­çš„å–æ¶ˆè¨‚é–±é€£çµã€‚"
                },
                ValidationRequiredCheckboxList: {
                    Purpose: "No option in the checkbox list was selected",
                    Value: "è‡³å°‘é¸å–ä¸€å€‹é¸é …"
                },
                ValidationRequiredRadioButtons: {
                    Purpose: "No option in the radio buttons field was selected",
                    Value: "è‡³å°‘é¸å–ä¸€å€‹é¸é …"
                },
                ValidationInvalidLookup: {
                    Purpose: "Lookup field contains invalid value (user did not select a value from the dropdown/not resolved to entity reference)",
                    Value: "å¾žæ¸…å–®ä¸­é¸æ“‡æœ‰æ•ˆæ¬„ä½"
                },
                ValidationRequiredField: {
                    Purpose: "The field is required, no value set",
                    Value: "é€™æ˜¯å¿…å¡«æ¬„ä½"
                },
                LimitExceededDefaultMessage: {
                    Purpose: "Limit exceeded default message",
                    Value: "è¶…éŽè¦æ±‚è¨ˆæ•¸ä¸Šé™"
                },
                ForceRenderForm: {
                    Purpose: "Label for button that is shown when contact data is missing (e.g. visiting Subscription center directly), after clicking the form is rendered",
                    Value: "ä¸€å¾‹é¡¯ç¤ºè¡¨å–®"
                },
                LookupLoading: {
                    Purpose: "Loading message for first page of lookup items (displayed in dropdown, lowercase)",
                    Value: "æ­£åœ¨è¼‰å…¥..."
                },
                LookupLoadingMore: {
                    Purpose: "Loading message for successive pages of lookup items (displayed in dropdown, lowercase)",
                    Value: "æ­£åœ¨è¼‰å…¥æ›´å¤š..."
                },
                LookupRequestThrottled: {
                    Purpose: "Error message for when there have been too many lookup requests sent to the server",
                    Value: "ä¼ºæœå™¨ç›®å‰å¿™ç¢Œä¸­ï¼Œä¸¦éžæ‰€æœ‰å€¼éƒ½åœ¨æ“·å–ã€‚ç¨å¾Œå†è©¦ã€‚"
                },
                LookupGenericError: {
                    Purpose: "Error message for when there was a problem fetching items from the server",
                    Value: "æ“·å–é …ç›®æ™‚ç™¼ç”Ÿå•é¡Œã€‚ç¨å¾Œå†è©¦ã€‚"
                },
                Retry: {
                    Purpose: "Retry action",
                    Value: "é‡è©¦"
                }
            },
            _config: {
                defaultVariant: {
                    "*": "en-us",
                    en: "en-us",
                    fr: "fr-fr",
                    pt: "pt-pt",
                    sr: "sr-latn-cs",
                    zh: "zh-tw"
                }
            }
        };
        return Localization
    }();
    MsCrmMkt.Localization = Localization
}
)(MsCrmMkt || (MsCrmMkt = {}));
function ms_tr_il_08(wsIdOrConfig, serviceEndpoint, baseUrl, websiteVisitedQueryParams, correlationCallback) {
    var _this = this;
    var config;
    function getLocation(href) {
        var l = document.createElement("a");
        l.href = href;
        return l
    }
    if (wsIdOrConfig && typeof wsIdOrConfig == "object") {
        config = wsIdOrConfig
    } else {
        config = {
            WebsiteId: wsIdOrConfig,
            HostName: getLocation(baseUrl).host,
            Anonymize: false,
            DoNotTrack: false
        }
    }
    serviceEndpoint = serviceEndpoint || "https://" + config.HostName + "/f";
    var telemetryObject = new MsCrmMkt.Telemetry.TelemetryObject(serviceEndpoint);
    var correlationHandler = new MsCrmMkt.CorrelationHandler;
    var logger = new MsCrmMkt.Logger;
    var localizationProvider = new MsCrmMkt.LocalizationProvider(logger);
    var formLoader = new MsCrmMkt.FormLoaderInternal(serviceEndpoint,localizationProvider,logger,telemetryObject);
    correlationHandler.onCorrelationEstablished = function(wid, correlationId, formsToCapture, forms, correlationActivityId) {
        var pageLoader = new MsCrmMkt.MsCrmPageLoader(telemetryObject);
        pageLoader.load(serviceEndpoint, correlationId);
        if (correlationActivityId && correlationActivityId.length) {
            MsCrmMkt.Telemetry.TelemetryObject.setActivityIdIfNotOverriden(correlationActivityId)
        }
        formLoader.load(correlationId, forms);
        if (typeof correlationCallback === "function") {
            correlationCallback(formLoader, correlationId, formsToCapture)
        }
    }
    ;
    correlationHandler.onCorrelationRenewed = function(correlationId) {
        formLoader.correlationId = correlationId
    }
    ;
    correlationHandler.onCorrelationExpired = function() {
        var forms = MsCrmMkt.FormUtility.getAllForms().map(function(f) {
            return f.FormPlaceholders
        });
        var message = localizationProvider.getMessageForLanguage("CorrelationExpired", MsCrmMkt.MsCrmFormLoader.uiLanguage);
        var messageLink = localizationProvider.getMessageForLanguage("Reload", MsCrmMkt.MsCrmFormLoader.uiLanguage);
        if (message) {
            forms.forEach(function(formPlaceholders) {
                formPlaceholders.forEach(function(formPlaceholder) {
                    if (formPlaceholder.element.msdyncrm_notification && typeof formPlaceholder.element.msdyncrm_notification === "function") {
                        try {
                            formPlaceholder.element.msdyncrm_notification({
                                Message: message,
                                IsError: true,
                                EventType: "formLoad"
                            })
                        } catch (ex) {
                            _this.logger.error(ex)
                        }
                        return
                    }
                    var form = formPlaceholder.element.querySelector("form");
                    if (form) {
                        form.remove()
                    }
                    formLoader.showErrorMessage(message, "", messageLink, formPlaceholder.element, 400, 400, null, "noIconButtonStyle")
                })
            })
        }
    }
    ;
    correlationHandler.onCorrelationFailed = function() {
        var forms = MsCrmMkt.FormUtility.getAllForms().map(function(f) {
            return f.FormPlaceholders
        });
        var message = localizationProvider.getMessageForLanguage("InvalidDomain", MsCrmMkt.MsCrmFormLoader.uiLanguage);
        var messageLink = localizationProvider.getMessageForLanguage("InvalidDomainLink", MsCrmMkt.MsCrmFormLoader.uiLanguage);
        var messageUrl = localizationProvider.getMessageForLanguage("InvalidDomainURL", MsCrmMkt.MsCrmFormLoader.uiLanguage);
        if (message) {
            forms.forEach(function(formPlaceholders) {
                formPlaceholders.forEach(function(formPlaceholder) {
                    if (formPlaceholder.element.msdyncrm_notification && typeof formPlaceholder.element.msdyncrm_notification === "function") {
                        try {
                            formPlaceholder.element.msdyncrm_notification({
                                Message: message,
                                IsError: true,
                                EventType: "formLoad"
                            })
                        } catch (ex) {
                            _this.logger.error(ex)
                        }
                        return
                    }
                    if (!formLoader.isFormLoaded(formPlaceholder.element)) {
                        formLoader.showErrorMessage(message, messageUrl, messageLink, formPlaceholder.element, 400, 400, null, "noIconButtonStyle")
                    }
                })
            })
        }
        logger.log("The domain where this page is published isn't whitelisted for use the embedded forms");
        formLoader.setCorrelationEstablishmentFailed();
        correlationHandler.dispose()
    }
    ;
    formLoader.setCorrelationEstablishmentStarted();
    if (window.location.host === "www.qatar2022.qa" && typeof document.body.getBoundingClientRect === "function") {
        var interval;
        interval = setInterval(function() {
            var rect = document.body.getBoundingClientRect();
            if (rect && rect.width) {
                var anyPlaceholderVisible = false;
                MsCrmMkt.FormUtility.getAllForms().forEach(function(f) {
                    f.FormPlaceholders.forEach(function(ph) {
                        var placeholderRect = ph.element.getBoundingClientRect();
                        var isVisible = placeholderRect.x <= rect.width;
                        if (isVisible) {
                            anyPlaceholderVisible = true
                        }
                    })
                });
                if (anyPlaceholderVisible) {
                    clearInterval(interval);
                    correlationHandler.establishCorrelation(config, websiteVisitedQueryParams)
                }
            }
        }, 200)
    } else {
        correlationHandler.establishCorrelation(config, websiteVisitedQueryParams)
    }
}
var ms_tr_il_w_01 = function() {
    var config;
    function getLocation(href) {
        var l = document.createElement("a");
        l.href = href;
        return l
    }
    return {
        w: function(wsIdOrConfig, srv, c, pageUrl) {
            if (wsIdOrConfig && typeof wsIdOrConfig == "object") {
                config = wsIdOrConfig
            } else {
                config = {
                    WebsiteId: wsIdOrConfig,
                    HostName: getLocation(srv).host,
                    TrackingLocation: pageUrl,
                    Anonymize: false,
                    DoNotTrack: false
                }
            }
            MsCrmMkt.Tracking.listenClicks(config, document, window);
            c(MsCrmMkt.Tracking.locationParams(document, config.TrackingLocation))
        }
    }
}();
var MsCrmMkt;
(function(MsCrmMkt) {
    var Tracking;
    (function(Tracking) {
        var trackingAttribute = "data-msdyn-tracking";
        function encodeComponent(s) {
            return encodeURIComponent(s)
        }
        function appendRandomId(params) {
            return params + "&id=" + encodeComponent(Math.floor(Math.random() * 9999999999).toString())
        }
        function getOrGenerateCookie(config, doc, wnd, maxAgeSeconds) {
            if (config.Anonymize || config.DoNotTrack) {
                return null
            }
            return new MsCrmMkt.CookieManager(doc,wnd).getOrGenerateCookie(config.CookieName + (!maxAgeSeconds ? "s" : ""), maxAgeSeconds)
        }
        function toLowerCase(s) {
            return s && s.toLowerCase && s.toLowerCase() || s
        }
        function performImageRequest(config, interactionType, params, doc, wnd) {
            var maxAge = 60 * 60 * 24 * 730;
            var visitorCookie = getOrGenerateCookie(config, doc, wnd, maxAge);
            var sessionCookie = getOrGenerateCookie(config, doc, wnd);
            var image = new Image;
            image.id = "i" + config.WebsiteId;
            image.width = 0;
            image.height = 0;
            image.src = appendRandomId("https://" + config.HostName + "/t/" + interactionType + "/" + config.WebsiteId + (visitorCookie ? "/" + visitorCookie + "/" + sessionCookie : "") + "?" + params);
            image.onload = function() {
                var imgContainer = doc.getElementById("d" + config.WebsiteId);
                if (imgContainer) {
                    imgContainer.style.width = "0";
                    imgContainer.style.height = "0";
                    imgContainer.appendChild(image)
                }
            }
        }
        function requestWebsiteClicked(config, linkHref, linkText, doc, wnd) {
            performImageRequest(config, "l" + (config.Anonymize ? "/anon" : ""), locationParams(doc, config.TrackingLocation) + "&tg=" + encodeComponent(linkHref) + "&fn=" + encodeComponent(linkText), doc, wnd)
        }
        function onClick(config, doc, wnd, ev) {
            if (ev.button === 0 || ev.button === 1) {
                var t = ev.target;
                while (t && t.tagName !== "A") {
                    t = t.parentElement || t.parentNode
                }
                if (t && toLowerCase(t.getAttribute(trackingAttribute)) !== "false" && !config.DoNotTrack) {
                    var ch = t.firstElementChild;
                    requestWebsiteClicked(config, t.href, ch && (ch.alt || ch.title || ch.src) || t.text || t.innerText, doc, wnd)
                }
            }
        }
        function locationParams(doc, trackingLocation) {
            return "ad=" + encodeComponent(doc.location.toString()) + (!trackingLocation ? "" : "&intad=" + encodeComponent(trackingLocation)) + "&rf=" + encodeComponent(doc.referrer)
        }
        Tracking.locationParams = locationParams;
        function requestWebsiteVisited(config, doc, wnd) {
            performImageRequest(config, "v" + (config.Anonymize ? "/anon" : ""), locationParams(doc, config.TrackingLocation), doc, wnd)
        }
        Tracking.requestWebsiteVisited = requestWebsiteVisited;
        var oncePerKey = function(map) {
            return function(key, body) {
                if (!map[key]) {
                    map[key] = true;
                    body()
                }
            }
        }({});
        function listenClicks(config, doc, wnd) {
            if (doc.body.addEventListener) {
                var eventName = navigator.appVersion.indexOf("MSIE") === -1 ? "mousedown" : "click";
                oncePerKey(config.WebsiteId || "", function() {
                    return doc.body.addEventListener(eventName, function(e) {
                        return onClick(config, doc, wnd, e)
                    })
                })
            }
        }
        Tracking.listenClicks = listenClicks
    }
    )(Tracking = MsCrmMkt.Tracking || (MsCrmMkt.Tracking = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var requiredErrorMessageAttrName = "data-requiredErrorMessage";
    var ariaInvalidAttrName = "aria-invalid";
    var ariaLabelledByAttrName = "aria-labelledby";
    var validationErrorsContainerId = "validation-summary";
    var ValidationEventSource;
    (function(ValidationEventSource) {
        ValidationEventSource[ValidationEventSource["Change"] = 0] = "Change";
        ValidationEventSource[ValidationEventSource["Invalid"] = 1] = "Invalid"
    }
    )(ValidationEventSource || (ValidationEventSource = {}));
    var MsCrmFormValidation = function() {
        function MsCrmFormValidation(logger, localizationProvider, getUiLanguage, lookupUtility) {
            this.logger = logger;
            this.localizationProvider = localizationProvider;
            this.getUiLanguage = getUiLanguage;
            this.lookupUtility = lookupUtility
        }
        MsCrmFormValidation.prototype.attachValidationHandlers = function(form) {
            var _this = this;
            form.FormPlaceholders.forEach(function(placeholder) {
                var allForms = placeholder.element.querySelectorAll("FORM");
                for (var i = 0; i < allForms.length; i++) {
                    var currentForm = allForms[i];
                    var requiredElements = allForms[i].querySelectorAll("[required]");
                    for (var j = 0; j < requiredElements.length; j++) {
                        var requiredElement = requiredElements[j];
                        var tagName = requiredElement.tagName;
                        var type = requiredElement.type;
                        var isValidForPatternChange = tagName === "INPUT" && (type === "text" || type === "phone") || tagName === "TEXTAREA";
                        var currentPattern = requiredElement.pattern;
                        if (isValidForPatternChange && (!currentPattern || currentPattern.length === 0)) {
                            requiredElement.pattern = MsCrmFormValidation.defaultTextPattern
                        }
                        var ariaRequiredAttrName = "aria-required";
                        requiredElement.setAttribute(ariaRequiredAttrName, "true");
                        requiredElement.addEventListener("change", _this.validateRequired(currentForm, ValidationEventSource.Change), false);
                        requiredElement.addEventListener("invalid", _this.validateRequired(currentForm, ValidationEventSource.Invalid), false)
                    }
                    var datetimeElements = allForms[i].querySelectorAll('[type="datetime-local"]');
                    var ua = window.navigator.userAgent;
                    var maybeSafari = /iP(ad|od|hone)/i.test(ua) || /Mac OS X/i.test(ua);
                    var ie11 = /Trident\//i.test(ua);
                    for (var j = 0; j < datetimeElements.length; j++) {
                        if (maybeSafari || datetimeElements[j].type === "text") {
                            if (!_this.isValidDatetime(datetimeElements[j].value)) {
                                MsCrmFormValidation.setInputInvalid(datetimeElements[j], MsCrmFormValidation.datetimeErrorMessage)
                            }
                            datetimeElements[j].addEventListener("change", _this.validateDatetime(currentForm, MsCrmFormValidation.datetimeErrorMessage, maybeSafari, ie11), false);
                            datetimeElements[j].addEventListener("invalid", _this.validateDatetime(currentForm, MsCrmFormValidation.datetimeErrorMessage, maybeSafari, ie11), false)
                        }
                    }
                    var dateElements = allForms[i].querySelectorAll('[type="date"]');
                    for (var j = 0; j < dateElements.length; j++) {
                        if (dateElements[j].type === "text") {
                            if (!_this.isValidDatetime(dateElements[j].value)) {
                                MsCrmFormValidation.setInputInvalid(dateElements[j], MsCrmFormValidation.dateErrorMessage)
                            }
                            dateElements[j].addEventListener("change", _this.validateDate(currentForm, MsCrmFormValidation.dateErrorMessage), false);
                            dateElements[j].addEventListener("invalid", _this.validateDate(currentForm, MsCrmFormValidation.dateErrorMessage), false)
                        }
                    }
                    var checkboxListFieldBlocks = MsCrmMkt.FormHelper.getCheckboxListFieldBlocks(currentForm);
                    for (var j = 0; j < checkboxListFieldBlocks.length; j++) {
                        _this.attachValidationHandlersCheckboxList(currentForm, checkboxListFieldBlocks[j])
                    }
                    var radioButtonsFieldBlocks = MsCrmMkt.FormHelper.getRadioButtonsFieldBlocks(currentForm);
                    for (var j = 0; j < radioButtonsFieldBlocks.length; j++) {
                        _this.attachValidationHandlersRadioButtons(currentForm, radioButtonsFieldBlocks[j])
                    }
                    var lookupFieldBlocks = MsCrmMkt.FormHelper.getLookupFieldBlocks(currentForm);
                    for (var j = 0; j < lookupFieldBlocks.length; j++) {
                        _this.attachValidationHandlerLookup(currentForm, lookupFieldBlocks[j])
                    }
                }
            })
        }
        ;
        MsCrmFormValidation.createValidationErrorsContainer = function() {
            var errorElement = document.createElement("div");
            errorElement.id = validationErrorsContainerId;
            return errorElement
        }
        ;
        MsCrmFormValidation.findValidationErrorsContainer = function(form) {
            return form.querySelector("#" + validationErrorsContainerId)
        }
        ;
        MsCrmFormValidation.getOrCreateValidationErrorsContainer = function(form) {
            var errorsContainer = MsCrmFormValidation.findValidationErrorsContainer(form);
            if (!errorsContainer) {
                errorsContainer = MsCrmFormValidation.createValidationErrorsContainer();
                form.insertBefore(errorsContainer, form.firstChild)
            }
            return errorsContainer
        }
        ;
        MsCrmFormValidation.getErrorElementId = function(input) {
            return "error_" + input.id
        }
        ;
        MsCrmFormValidation.createValidationErrorElement = function(id, text, forceVisibleElement) {
            var errorElement = document.createElement("p");
            errorElement.id = id;
            errorElement.setAttribute("role", "alert");
            if (!forceVisibleElement) {
                errorElement.hidden = true
            }
            errorElement.textContent = text;
            return errorElement
        }
        ;
        MsCrmFormValidation.findValidationErrorElement = function(errorsContainer, id) {
            return errorsContainer.querySelector("#" + id)
        }
        ;
        MsCrmFormValidation.getOrCreateValidationErrorElement = function(form, input, errorElementMessage, forceVisibleError) {
            var errorsContainer = MsCrmFormValidation.getOrCreateValidationErrorsContainer(form);
            var errorElementId = MsCrmFormValidation.getErrorElementId(input);
            var errorElement = MsCrmFormValidation.findValidationErrorElement(errorsContainer, errorElementId);
            if (!errorElement) {
                errorElement = MsCrmFormValidation.createValidationErrorElement(errorElementId, errorElementMessage, forceVisibleError);
                errorsContainer.insertBefore(errorElement, errorsContainer.firstChild)
            }
            return errorElement
        }
        ;
        MsCrmFormValidation.getValidationErrorElementMessageForInput = function(form, errorMessage, labelForId) {
            var labelForInput = form.querySelector('label[for="' + labelForId + '"]');
            if (labelForInput) {
                return labelForInput.textContent + ": " + errorMessage
            }
            return errorMessage
        }
        ;
        MsCrmFormValidation.setValidationErrorElementForInput = function(form, input, errorMessage, labelForId, forceVisibleError) {
            if (labelForId === void 0) {
                labelForId = null
            }
            var errorElementMessage = MsCrmFormValidation.getValidationErrorElementMessageForInput(form, errorMessage, labelForId ? labelForId : input.id);
            var errorElement = MsCrmFormValidation.getOrCreateValidationErrorElement(form, input, errorElementMessage, forceVisibleError);
            input.setAttribute(ariaLabelledByAttrName, errorElement.id);
            input.setAttribute(ariaInvalidAttrName, "true")
        }
        ;
        MsCrmFormValidation.setInputInvalid = function(input, errorMessage) {
            input.setCustomValidity(errorMessage)
        }
        ;
        MsCrmFormValidation.setInputValid = function(input) {
            input.setCustomValidity("")
        }
        ;
        MsCrmFormValidation.addValidationError = function(form, input, errorMessage, labelForId, forceVisibleError) {
            if (labelForId === void 0) {
                labelForId = null
            }
            if (forceVisibleError === void 0) {
                forceVisibleError = false
            }
            MsCrmFormValidation.setInputInvalid(input, errorMessage);
            MsCrmFormValidation.setValidationErrorElementForInput(form, input, errorMessage, labelForId, forceVisibleError)
        }
        ;
        MsCrmFormValidation.removeValidationError = function(form, input) {
            MsCrmFormValidation.setInputValid(input);
            var errorsContainer = MsCrmFormValidation.findValidationErrorsContainer(form);
            if (errorsContainer) {
                var errorElement = MsCrmFormValidation.findValidationErrorElement(errorsContainer, MsCrmFormValidation.getErrorElementId(input));
                if (errorElement) {
                    errorsContainer.removeChild(errorElement)
                }
            }
            input.removeAttribute(ariaLabelledByAttrName);
            input.removeAttribute(ariaInvalidAttrName)
        }
        ;
        MsCrmFormValidation.prototype.attachChangeEventValidation = function(input, validator) {
            input.addEventListener("change", validator, false)
        }
        ;
        MsCrmFormValidation.prototype.attachInvalidEventValidation = function(input, validator) {
            input.addEventListener("invalid", validator, false)
        }
        ;
        MsCrmFormValidation.prototype.loadValidationErrorMessage = function(key) {
            this.localizationProvider.reloadKey(key);
            return this.localizationProvider.getMessageForLanguage(key, this.getUiLanguage())
        }
        ;
        MsCrmFormValidation.getRequiredErrorMessageFromAttribute = function(fieldInput) {
            return MsCrmMkt.FormHelper.findAttributeInDataBlock(fieldInput, requiredErrorMessageAttrName)
        }
        ;
        MsCrmFormValidation.isDefaultPatternMismatch = function(input) {
            return input.pattern === ".*\\S+.*" && input.validity.patternMismatch
        }
        ;
        MsCrmFormValidation.prototype.localizeRequiredErrorMessage = function(form, fieldInput, eventSource) {
            if (fieldInput.validity.valueMissing || MsCrmFormValidation.isDefaultPatternMismatch(fieldInput)) {
                var errorMessage = MsCrmFormValidation.getRequiredErrorMessageFromAttribute(fieldInput);
                if (!errorMessage) {
                    var textboxValidationErrorMessageKey = "ValidationRequiredField";
                    errorMessage = this.loadValidationErrorMessage(textboxValidationErrorMessageKey)
                }
                var forceVisibleErrorSummary = eventSource === ValidationEventSource.Invalid && fieldInput.offsetParent === null;
                MsCrmFormValidation.addValidationError(form, fieldInput, errorMessage, null, forceVisibleErrorSummary)
            }
        }
        ;
        MsCrmFormValidation.prototype.attachValidationHandlersCheckboxList = function(form, checkboxListDataBlock) {
            var required = MsCrmMkt.FormHelper.isFormFieldRequired(checkboxListDataBlock);
            if (required) {
                var allCheckboxes = MsCrmMkt.FormHelper.getChildInputsByType(checkboxListDataBlock, MsCrmMkt.inputTypeCheckbox);
                if (allCheckboxes && allCheckboxes.length) {
                    this.validateRequiredCheckboxList(form, checkboxListDataBlock, false);
                    for (var i = 0; i < allCheckboxes.length; i++) {
                        this.attachChangeEventValidation(allCheckboxes[i], this.getOnCheckboxListItemChangeListener(form));
                        this.attachInvalidEventValidation(allCheckboxes[i], this.getOnCheckboxListItemChangeListener(form))
                    }
                }
            }
        }
        ;
        MsCrmFormValidation.prototype.validateRequiredCheckboxList = function(form, checkboxListDataBlock, displayAccessibleError) {
            var allCheckboxes = MsCrmMkt.FormHelper.getChildInputsByType(checkboxListDataBlock, MsCrmMkt.inputTypeCheckbox);
            var firstCheckbox = allCheckboxes[0];
            MsCrmFormValidation.removeValidationError(form, firstCheckbox);
            for (var i = 0; i < allCheckboxes.length; i++) {
                MsCrmFormValidation.setInputValid(allCheckboxes[i])
            }
            var selectedCheckboxes = checkboxListDataBlock.querySelectorAll("input[type='" + MsCrmMkt.inputTypeCheckbox + "']:checked");
            if (!selectedCheckboxes.length) {
                var requiredErrorMessage = MsCrmFormValidation.getRequiredErrorMessageFromAttribute(firstCheckbox);
                if (!requiredErrorMessage) {
                    var requiredCheckboxListMessageKey = "ValidationRequiredCheckboxList";
                    requiredErrorMessage = this.loadValidationErrorMessage(requiredCheckboxListMessageKey)
                }
                for (var i = 0; i < allCheckboxes.length; i++) {
                    MsCrmFormValidation.setInputInvalid(allCheckboxes[i], requiredErrorMessage)
                }
                if (displayAccessibleError) {
                    MsCrmFormValidation.addValidationError(form, firstCheckbox, requiredErrorMessage, firstCheckbox.name)
                }
            }
        }
        ;
        MsCrmFormValidation.prototype.getOnCheckboxListItemChangeListener = function(form) {
            var _this = this;
            return function(e) {
                var dataBlock = MsCrmMkt.FormHelper.getParentElement(e.target, function(el) {
                    return el.hasAttribute(MsCrmMkt.FormHelper.formBlockTypeAttrName)
                });
                _this.validateRequiredCheckboxList(form, dataBlock, true)
            }
        }
        ;
        MsCrmFormValidation.prototype.attachValidationHandlersRadioButtons = function(form, radioButtonsDataBlock) {
            var required = MsCrmMkt.FormHelper.isFormFieldRequired(radioButtonsDataBlock);
            if (required) {
                var allRadioButtons = MsCrmMkt.FormHelper.getChildInputsByType(radioButtonsDataBlock, MsCrmMkt.inputTypeRadio);
                if (allRadioButtons && allRadioButtons.length) {
                    this.validateRequiredRadioButtons(form, radioButtonsDataBlock, false);
                    for (var i = 0; i < allRadioButtons.length; i++) {
                        this.attachChangeEventValidation(allRadioButtons[i], this.getOnRadioButtonChangeListener(form));
                        this.attachInvalidEventValidation(allRadioButtons[i], this.getOnRadioButtonChangeListener(form))
                    }
                }
            }
        }
        ;
        MsCrmFormValidation.prototype.validateRequiredRadioButtons = function(form, radioButtonsDataBlock, displayAccessibleError) {
            var allRadioButtons = MsCrmMkt.FormHelper.getChildInputsByType(radioButtonsDataBlock, MsCrmMkt.inputTypeRadio);
            var firstRadioButton = allRadioButtons[0];
            MsCrmFormValidation.removeValidationError(form, firstRadioButton);
            for (var i = 0; i < allRadioButtons.length; i++) {
                MsCrmFormValidation.setInputValid(allRadioButtons[i])
            }
            var selectedRadioButtons = radioButtonsDataBlock.querySelectorAll("input[type='" + MsCrmMkt.inputTypeRadio + "']:checked");
            if (!selectedRadioButtons.length) {
                var requiredErrorMessage = MsCrmFormValidation.getRequiredErrorMessageFromAttribute(firstRadioButton);
                if (!requiredErrorMessage) {
                    var requiredRadioButtonsMessageKey = "ValidationRequiredRadioButtons";
                    requiredErrorMessage = this.loadValidationErrorMessage(requiredRadioButtonsMessageKey)
                }
                for (var i = 0; i < allRadioButtons.length; i++) {
                    MsCrmFormValidation.setInputInvalid(allRadioButtons[i], requiredErrorMessage)
                }
                if (displayAccessibleError) {
                    MsCrmFormValidation.addValidationError(form, firstRadioButton, requiredErrorMessage, firstRadioButton.name)
                }
            }
        }
        ;
        MsCrmFormValidation.prototype.getOnRadioButtonChangeListener = function(form) {
            var _this = this;
            return function(e) {
                var dataBlock = MsCrmMkt.FormHelper.getParentElement(e.target, function(el) {
                    return el.hasAttribute(MsCrmMkt.FormHelper.formBlockTypeAttrName)
                });
                _this.validateRequiredRadioButtons(form, dataBlock, true)
            }
        }
        ;
        MsCrmFormValidation.prototype.attachValidationHandlerLookup = function(form, lookupDataBlock) {
            var lookupInputs = MsCrmMkt.FormHelper.getChildInputsByType(lookupDataBlock, "text");
            if (lookupInputs && lookupInputs.length) {
                this.validateLookup(form, lookupDataBlock, false);
                var lookupInput = lookupInputs[0];
                this.attachChangeEventValidation(lookupInput, this.getOnLookupChangeListener(form));
                this.attachInvalidEventValidation(lookupInput, this.getOnLookupChangeListener(form))
            }
        }
        ;
        MsCrmFormValidation.prototype.validateLookup = function(form, parentField, displayAccessibleError) {
            var lookupInput = MsCrmMkt.FormHelper.getChildInputsByType(parentField, "text")[0];
            MsCrmFormValidation.removeValidationError(form, lookupInput);
            MsCrmFormValidation.setInputValid(lookupInput);
            if (lookupInput.value && lookupInput.value.length) {
                var parsedValue = MsCrmMkt.Lookups.LookupControl.getElementLookupValue(lookupInput);
                if (parsedValue === null) {
                    var invalidLookupMessageKey = "ValidationInvalidLookup";
                    var invalidErrorMessage = this.loadValidationErrorMessage(invalidLookupMessageKey);
                    MsCrmFormValidation.setInputInvalid(lookupInput, invalidErrorMessage);
                    if (displayAccessibleError) {
                        MsCrmFormValidation.addValidationError(form, lookupInput, invalidErrorMessage)
                    }
                }
            }
        }
        ;
        MsCrmFormValidation.prototype.getOnLookupChangeListener = function(form) {
            var _this = this;
            return function(e) {
                var target = e.target;
                if (target.validity.valueMissing) {
                    return
                }
                var dataBlock = MsCrmMkt.FormHelper.getParentElement(e.target, function(el) {
                    return el.hasAttribute(MsCrmMkt.FormHelper.formBlockTypeAttrName)
                });
                _this.validateLookup(form, dataBlock, true)
            }
        }
        ;
        MsCrmFormValidation.prototype.validateRequired = function(form, eventSource) {
            var _this = this;
            return function(e) {
                var target = e.target;
                MsCrmFormValidation.removeValidationError(form, target);
                _this.localizeRequiredErrorMessage(form, target, eventSource)
            }
        }
        ;
        MsCrmFormValidation.prototype.validateDatetime = function(form, message, maybeSafari, ie11) {
            return function(e) {
                var target = e.target;
                if (target.validity.valueMissing) {
                    return
                }
                if (maybeSafari) {
                    target.value = target.value.substring(0, 16);
                    if (typeof target.form.checkValidity == "function") {
                        target.form.checkValidity()
                    }
                }
                var date;
                if (maybeSafari || ie11) {
                    date = new Date(target.value.substring(0, 16).replace(" ", "T"))
                } else {
                    date = new Date(target.value)
                }
                var isValidDatetime = date instanceof Date ? !isNaN(date.getTime()) : false;
                if (!isValidDatetime) {
                    MsCrmFormValidation.addValidationError(form, target, message)
                } else {
                    MsCrmFormValidation.removeValidationError(form, target)
                }
            }
        }
        ;
        MsCrmFormValidation.prototype.validateDate = function(form, message) {
            return function(e) {
                var target = e.target;
                if (target.validity.valueMissing) {
                    return
                }
                MsCrmFormValidation.removeValidationError(form, target);
                var date = new Date(target.value);
                var isValidDatetime = date instanceof Date ? !isNaN(date.getTime()) : false;
                if (!isValidDatetime) {
                    MsCrmFormValidation.addValidationError(form, target, message)
                }
            }
        }
        ;
        MsCrmFormValidation.prototype.isValidDatetime = function(datetime) {
            if (!datetime) {
                return true
            }
            var date = new Date(datetime);
            var isValidDatetime = date instanceof Date ? !isNaN(date.getTime()) : false;
            return isValidDatetime
        }
        ;
        MsCrmFormValidation.defaultTextPattern = ".*\\S+.*";
        MsCrmFormValidation.defaultDatetimePattern = "[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}";
        MsCrmFormValidation.modernizrDatetimePattern = "[0-9]{4}-[0-9]{2}-[0-9]{2}(T| )[0-9]{2}:[0-9]{2}";
        MsCrmFormValidation.defaultDatePattern = "[0-9]{4}-[0-9]{2}-[0-9]{2}";
        MsCrmFormValidation.datetimeErrorMessage = "Invalid date or time value";
        MsCrmFormValidation.dateErrorMessage = "Invalid date value";
        return MsCrmFormValidation
    }();
    MsCrmMkt.MsCrmFormValidation = MsCrmFormValidation
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    MsCrmMkt.formBlockIdAttrName = "data-form-block-id";
    MsCrmMkt.inputTypeCheckbox = "checkbox";
    MsCrmMkt.inputTypeRadio = "radio";
    var FormHelper = function() {
        function FormHelper() {}
        FormHelper.getFieldBlocksOfType = function(fieldBlockType, parent) {
            return parent.querySelectorAll("[" + FormHelper.formBlockTypeAttrName + '="' + fieldBlockType + '"]')
        }
        ;
        FormHelper.getCheckboxListFieldBlocks = function(parent) {
            return parent.querySelectorAll("[" + FormHelper.formBlockTypeAttrName + '="' + FormHelper.fieldCheckboxListType + '"]')
        }
        ;
        FormHelper.getRadioButtonsFieldBlocks = function(parent) {
            return parent.querySelectorAll("[" + FormHelper.formBlockTypeAttrName + '="' + FormHelper.fieldRadioButtonsType + '"]')
        }
        ;
        FormHelper.getLookupFieldBlocks = function(parent) {
            return parent.querySelectorAll("[" + FormHelper.formBlockTypeAttrName + '="' + FormHelper.fieldLookupType + '"]')
        }
        ;
        FormHelper.attachChangeEventValidation = function(input, validator) {
            input.addEventListener("change", validator, false)
        }
        ;
        FormHelper.getChildInputsByType = function(formField, inputType) {
            return formField.querySelectorAll("input[type='" + inputType + "']")
        }
        ;
        FormHelper.findAttributeInDataBlock = function(childElement, attrName) {
            var _this = this;
            var parentElement = FormHelper.getParentElement(childElement, function(el) {
                return el.hasAttribute(attrName) || el.hasAttribute(_this.formBlockTypeAttrName)
            });
            if (parentElement.hasAttribute(attrName)) {
                return parentElement.getAttribute(attrName)
            }
            return null
        }
        ;
        FormHelper.isAttributeValueTrue = function(attributeValue) {
            return attributeValue.toUpperCase() === "TRUE"
        }
        ;
        FormHelper.isFormFieldRequired = function(dataBlock) {
            var requiredFieldAttrName = "data-required-field";
            if (dataBlock.hasAttribute(requiredFieldAttrName)) {
                return FormHelper.isAttributeValueTrue(dataBlock.getAttribute(requiredFieldAttrName))
            }
            var elementWithRequiredAttribute = dataBlock.querySelector("[" + requiredFieldAttrName + "]");
            return elementWithRequiredAttribute ? FormHelper.isAttributeValueTrue(elementWithRequiredAttribute.getAttribute(requiredFieldAttrName)) : false
        }
        ;
        FormHelper.getOptionsFieldBlockByName = function(parent, inputName) {
            var input = parent.querySelector("input[name='" + inputName + "'], select[name='" + inputName + "']");
            if (!input) {
                return null
            }
            var fieldBlock = FormHelper.getParentElement(input, function(el) {
                return el.hasAttribute(FormHelper.formBlockTypeAttrName)
            });
            return fieldBlock
        }
        ;
        FormHelper.getParentElement = function(element, filter) {
            while (element != null) {
                if (filter(element)) {
                    return element
                }
                element = element.parentElement
            }
            return null
        }
        ;
        FormHelper.isCheckboxListItem = function(input) {
            var parentField = this.getParentElement(input, function(el) {
                return el.hasAttribute(FormHelper.formBlockTypeAttrName)
            });
            if (parentField != null) {
                return parentField.getAttribute(FormHelper.formBlockTypeAttrName) === FormHelper.fieldCheckboxListType
            }
            return false
        }
        ;
        FormHelper.triggerChangeEvent = function(element) {
            if ("createEvent"in document) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                element.dispatchEvent(evt)
            }
        }
        ;
        FormHelper.formBlockTypeAttrName = "data-editorblocktype";
        FormHelper.fieldCheckboxType = "Field-checkbox";
        FormHelper.fieldCheckboxListType = "Field-checkboxList";
        FormHelper.fieldRadioButtonsType = "Field-radioButtons";
        FormHelper.fieldDropdownType = "Field-dropdown";
        FormHelper.fieldLookupType = "Field-lookup";
        return FormHelper
    }();
    MsCrmMkt.FormHelper = FormHelper
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var DialogButton = function() {
        function DialogButton(label, onClickHandler) {
            this.label = label;
            this.onClickHandler = onClickHandler
        }
        DialogButton.prototype.createElement = function() {
            var _this = this;
            var buttonElement = document.createElement("button");
            buttonElement.textContent = this.label;
            buttonElement.setAttribute("aria-label", this.label);
            buttonElement.setAttribute("title", this.label);
            buttonElement.className = "dialogProviderLinkButtonStyle";
            buttonElement.onclick = function() {
                return _this.onClickHandler()
            }
            ;
            return buttonElement
        }
        ;
        return DialogButton
    }();
    MsCrmMkt.DialogButton = DialogButton
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var CookieManager = function() {
        function CookieManager(doc, wnd) {
            this.doc = doc;
            this.wnd = wnd
        }
        CookieManager.prototype.getCookie = function(name) {
            if (!name) {
                return null
            }
            var search = name + "=";
            return this.doc.cookie && this.doc.cookie.split("; ").reduce(function(a, c) {
                return c.substring(0, search.length) === search ? c.split("=")[1] : a
            }, null)
        }
        ;
        CookieManager.prototype.webSafeBase64 = function(value) {
            if (!value) {
                return value
            }
            var search = "/+=";
            var replace = "-_";
            return value && value.replace(new RegExp("[" + search + "]","g"), function(c) {
                return replace[search.indexOf(c)]
            }).replace(/[^a-zA-Z0-9_-]/g, "")
        }
        ;
        CookieManager.prototype.getOrGenerateCookie = function(name, maxAgeSeconds) {
            if (!name) {
                return null
            }
            var isSession = typeof maxAgeSeconds !== "number" || isNaN(maxAgeSeconds);
            var value = this.webSafeBase64(this.getCookie(name));
            if (value && !isSession) {
                this.doc.cookie = name + "=" + value + ";path=/;max-age=" + maxAgeSeconds
            }
            var crypto = this.wnd.crypto || this.wnd.msCrypto;
            if (!value && crypto && crypto.getRandomValues) {
                var size = isSession ? 6 : 30;
                var bits = crypto.getRandomValues(new Uint8Array(size));
                value = this.webSafeBase64(btoa(String.fromCharCode.apply(null, bits)));
                this.doc.cookie = name + "=" + value + ";path=/" + (isSession ? "" : ";max-age=" + maxAgeSeconds)
            }
            return value
        }
        ;
        return CookieManager
    }();
    MsCrmMkt.CookieManager = CookieManager
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var FormCaptureState = function() {
        function FormCaptureState(sendSubmission, ignorePreventDefault, triggerSubmit, logger) {
            this.sendSubmission = sendSubmission;
            this.ignorePreventDefault = ignorePreventDefault;
            this.triggerSubmit = triggerSubmit;
            this.logger = logger;
            this.ignoreSubmit = false
        }
        FormCaptureState.prototype.captureSubmit = function(event) {
            var _this = this;
            if (this.ignoreSubmit) {
                return
            }
            var defaultPrevented = event.defaultPrevented || typeof event.isDefaultPrevented === "function" && event.isDefaultPrevented();
            if (defaultPrevented && !this.ignorePreventDefault) {
                this.logger.log('Skipping sending form to CRM, "preventDefault" is set on form submit event and data-ignore-prevent-default="true" in not present in configuration element. More details here - https://docs.microsoft.com/en-us/dynamics365/marketing/developer/marketing-form-client-side-extensibility#form-capturing-behavior-customization');
                return
            }
            event.preventDefault();
            var formElement = event.target;
            var finishCapture = function() {
                try {
                    _this.ignoreSubmit = true;
                    _this.triggerSubmit(formElement)
                } finally {
                    _this.ignoreSubmit = false
                }
            };
            this.sendSubmission(defaultPrevented ? function() {}
            : finishCapture)
        }
        ;
        return FormCaptureState
    }();
    MsCrmMkt.FormCaptureState = FormCaptureState
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var formPageIdAttributeKey = "data-form-page-id";
    var captureKey = "msd365mktCaptureState";
    var handlerAttachedKey = "msd365mktHandlerAttached";
    var FormCapture = function() {
        function FormCapture(loader, formsToCapture, baseUrl, config, websiteId, correlationId, logger) {
            this.loader = loader;
            this.formsToCapture = formsToCapture;
            this.baseUrl = baseUrl;
            this.config = config;
            this.websiteId = websiteId;
            this.correlationId = correlationId;
            this.logger = logger;
            this.rescanDelayMs = 2e3;
            this.maxDelayMs = 60 * 1e3 * 5
        }
        FormCapture.prototype.captureForms = function() {
            this.scanAndReschedule(this.formsToCapture, 0);
            this.attachSendingCallback(this.formsToCapture)
        }
        ;
        FormCapture.prototype.scanAndReschedule = function(remainingForms, retryAttempt) {
            var _this = this;
            var lastRetry = this.maxDelayMs / this.rescanDelayMs;
            var remaining = this.scanForms(remainingForms, retryAttempt === 0 || retryAttempt >= lastRetry);
            if (remaining && remaining.length > 0 && retryAttempt < lastRetry) {
                window.setTimeout(function() {
                    return _this.scanAndReschedule(remaining, retryAttempt + 1)
                }, this.rescanDelayMs)
            }
        }
        ;
        FormCapture.prototype.scanForms = function(remainingForms, log) {
            var _this = this;
            var result = [];
            if (remainingForms && remainingForms.length > 0) {
                var visitData = {
                    location: document.location.toString(),
                    missingForms: [],
                    foundForms: []
                };
                var jQueryGlobal_1 = window["jQuery"] || window["$"];
                var jQuerySubmission_1 = typeof jQueryGlobal_1 == "function" && typeof jQueryGlobal_1(document).submit == "function";
                switch (this.config.SubmitMode) {
                case "default":
                    {
                        log && this.logger.log("Submit mode defaulted to " + (jQuerySubmission_1 ? "jquery" : "vanilla"));
                        break
                    }
                case "vanilla":
                    {
                        jQuerySubmission_1 = false;
                        log && this.logger.log("Submit mode set to vanilla by config");
                        break
                    }
                case "jquery":
                    {
                        if (!jQuerySubmission_1) {
                            throw new Error("jQuery submit mode is not available")
                        } else {
                            log && this.logger.log("Submit mode set to jquery by config")
                        }
                        break
                    }
                default:
                    {
                        throw new Error("Submit mode '" + this.config.SubmitMode + "' not supported")
                    }
                }
                var attachHandler = jQuerySubmission_1 ? function(element, handler) {
                    jQueryGlobal_1(element).submit(handler)
                }
                : function(element, handler) {
                    element.addEventListener("submit", handler, true)
                }
                ;
                var _loop_5 = function(captureDef) {
                    var form = this_2.findForm(captureDef, log);
                    if (!form) {
                        visitData.missingForms.push(captureDef);
                        return "continue"
                    }
                    if (form.getAttribute(formPageIdAttributeKey)) {
                        return "continue"
                    }
                    form.setAttribute(formPageIdAttributeKey, captureDef.blockId);
                    var triggerSubmission = function(element) {
                        _this.loader.trigger(new MsCrmMkt.FormEvent("afterFormSubmit",captureDef.blockId,element));
                        if (jQuerySubmission_1) {
                            _this.submitFormWhenJQueryActive(element)
                        } else {
                            HTMLFormElement.prototype.submit.call(element)
                        }
                    };
                    var formLoadEvent = new MsCrmMkt.FormLoadEvent(captureDef.blockId,form);
                    this_2.loader.trigger(formLoadEvent);
                    var sendSubmission = function(finishCapture) {
                        var formSubmitEvent = new MsCrmMkt.FormSubmitEvent(form.FormPageId,form);
                        _this.loader.trigger(formSubmitEvent);
                        if (formSubmitEvent.defaultPrevented) {
                            return
                        }
                        _this.loader.serializeAndPostForm(form, captureDef.blockId, formSubmitEvent.extraValues).then(function() {
                            return finishCapture()
                        }, function() {
                            return finishCapture()
                        })
                    };
                    form[captureKey] = new MsCrmMkt.FormCaptureState(sendSubmission,this_2.config.IgnorePreventDefault,triggerSubmission,this_2.logger);
                    if (!form[handlerAttachedKey]) {
                        if (this_2.config.NoSubmit) {
                            if (log) {
                                this_2.logger.log('Will skip sending forms to CRM on form submit event - as data-no-submit="true" was specificed in configuration element. More details here - https://docs.microsoft.com/en-us/dynamics365/marketing/developer/marketing-form-client-side-extensibility#form-capturing-behavior-customization')
                            }
                        } else {
                            var submitHandler = function(event) {
                                if (event.target[captureKey]) {
                                    event.target[captureKey].captureSubmit(event)
                                }
                            };
                            attachHandler(form, submitHandler);
                            form[handlerAttachedKey] = true
                        }
                    }
                    visitData.foundForms.push(this_2.reportFoundForm(captureDef, form))
                };
                var this_2 = this;
                for (var _i = 0, remainingForms_1 = remainingForms; _i < remainingForms_1.length; _i++) {
                    var captureDef = remainingForms_1[_i];
                    _loop_5(captureDef)
                }
                if (visitData.foundForms.length > 0 || log) {
                    this.post(this.baseUrl + ("/cv/" + encodeURIComponent(this.websiteId) + "/c/" + encodeURIComponent(this.correlationId)), visitData)
                }
                result = visitData.missingForms;
                if (log) {
                    this.logger.log("Missing forms - " + JSON.stringify(result))
                }
            }
            return result
        }
        ;
        FormCapture.prototype.attachSendingCallback = function(remainingForms) {
            var _this = this;
            MsCrmMkt.FormLoaderInternal.formCaptureSendingQueue.setSendingCallback(function(form) {
                if (!form) {
                    throw new Error("form argument is null")
                }
                var jQueryGlobal = window["jQuery"] || window["$"];
                var formElement;
                var jQueryForm = false;
                _this.safeCall(function() {
                    jQueryForm = typeof jQueryGlobal === "function" && !!jQueryGlobal.prototype && form instanceof jQueryGlobal
                });
                if (jQueryForm) {
                    if (form.length !== 1) {
                        throw new Error("form argument is invalid - expecting single form")
                    }
                    formElement = form[0]
                } else {
                    formElement = form
                }
                var formPageId = formElement.getAttribute(formPageIdAttributeKey);
                if (!formPageId) {
                    _this.scanForms(remainingForms, false);
                    formPageId = formElement.getAttribute(formPageIdAttributeKey)
                }
                if (formPageId && formPageId.length !== 0) {
                    return _this.loader.serializeAndPostForm(formElement, formPageId)
                }
                throw new Error("form was not recognized as valid for form capturing.")
            })
        }
        ;
        FormCapture.prototype.safeCall = function(call) {
            try {
                call()
            } catch (e) {
                this.logger.error(e)
            }
        }
        ;
        FormCapture.prototype.submitFormWhenJQueryActive = function(form) {
            var button = form.ownerDocument.createElement("input");
            button.style.display = "none";
            button.type = "submit";
            form.appendChild(button).click();
            form.removeChild(button)
        }
        ;
        FormCapture.prototype.reportFoundForm = function(record, form) {
            return {
                form: record,
                fields: Array.prototype.map.call(form.elements, function(e) {
                    return {
                        tagName: e.tagName,
                        type: e.type,
                        name: e.name,
                        typeAttr: e.getAttribute("type")
                    }
                })
            }
        }
        ;
        FormCapture.prototype.findForm = function(captureDef, log) {
            if (captureDef.formId.id) {
                var elements = this.findFormsById(captureDef.formId.id, this.config, log);
                if (elements.length === 1 && elements[0].nodeName.toUpperCase() === "FORM") {
                    return elements[0]
                } else {
                    log && this.logger.log("For id " + captureDef.formId.id + " selected " + elements.length + " elements with config " + JSON.stringify(this.config));
                    if (!this.config.FallbackToActionMethodName) {
                        return null
                    }
                }
            }
            var attributeSelector = "";
            if (captureDef.formId.name) {
                attributeSelector += '[name="' + captureDef.formId.name + '"]'
            }
            if (captureDef.formId.action) {
                attributeSelector += '[action="' + captureDef.formId.action + '"]'
            }
            if (captureDef.formId.method) {
                attributeSelector += '[method="' + captureDef.formId.method + '"]'
            }
            if (attributeSelector !== "") {
                var forms = document.querySelectorAll("form" + attributeSelector);
                if (forms && forms.length === 1) {
                    return forms[0]
                }
            }
            if (log && typeof captureDef.formId.index === "number") {
                this.logger.log("Multiple forms selected by '" + attributeSelector + "', falling back to index");
                var allForms = document.forms;
                if (allForms && allForms.length > captureDef.formId.index) {
                    return allForms[captureDef.formId.index]
                }
            }
            return null
        }
        ;
        FormCapture.prototype.findFormsById = function(id, config, log) {
            var _this = this;
            if (!config.IgnorePrefixTo && !config.IgnoreSuffixFrom && !config.IdRegExp) {
                var element = document.getElementById(id);
                return element ? [element] : []
            }
            var expected = this.extractId(id, config);
            if (!expected) {
                log && this.logger.log("Empty value extracted for " + id + " by config " + JSON.stringify(config));
                return []
            }
            return document.forms && [].filter.call(document.forms, function(f) {
                return _this.extractId(f.id, config) === expected
            }) || []
        }
        ;
        FormCapture.prototype.extractId = function(value, config) {
            var _a, _b, _c;
            if (!value) {
                return value
            }
            var match = value;
            if (config.IgnorePrefixTo && match.indexOf(config.IgnorePrefixTo) >= 0) {
                match = match.substring(value.indexOf(config.IgnorePrefixTo) + config.IgnorePrefixTo.length)
            }
            if (config.IgnoreSuffixFrom && match.lastIndexOf(config.IgnoreSuffixFrom) >= 0) {
                match = match.substring(0, match.lastIndexOf(config.IgnoreSuffixFrom))
            }
            if (config.IdRegExp) {
                var regMatch = config.IdRegExp.exec(match);
                var selected = ((_b = (_a = regMatch) === null || _a === void 0 ? void 0 : _a["groups"]) === null || _b === void 0 ? void 0 : _b["value"]) || ((_c = regMatch) === null || _c === void 0 ? void 0 : _c[1]);
                match = selected || match
            }
            return match
        }
        ;
        FormCapture.prototype.post = function(url, data) {
            var request = new XMLHttpRequest;
            request.open("POST", url, true);
            request.setRequestHeader("Content-Type", "text/plain");
            request.send(JSON.stringify(data))
        }
        ;
        return FormCapture
    }();
    MsCrmMkt.FormCapture = FormCapture
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var reconfigure = function(overrides) {};
    var prevReconfigure = MsCrmMkt.reconfigureTracking;
    MsCrmMkt.reconfigureTracking = function(config) {
        if (typeof prevReconfigure == "function") {
            prevReconfigure(config)
        }
        reconfigure(config)
    }
    ;
    function mutateConfig(mutable, overrides) {
        mutable.DoNotTrack = overrides.DoNotTrack;
        mutable.Anonymize = overrides.Anonymize
    }
    function initTracking(rawConfig) {
        var mutableConfig = __assign({
            FormCapture: {
                IgnorePreventDefault: rawConfig.IgnorePreventDefault,
                NoSubmit: rawConfig.NoSubmit,
                SubmitMode: "default",
                FallbackToActionMethodName: false
            },
            EventForm: {},
            FormUI: {}
        }, rawConfig);
        reconfigure = function(overrides) {
            mutateConfig(mutableConfig, overrides)
        }
        ;
        var formsRoute = "https://" + mutableConfig.HostName + "/f";
        var trackingRoute = "https://" + mutableConfig.HostName + "/t";
        var loadForms = typeof ms_tr_il_08 !== "function" ? null : ms_tr_il_08;
        var visitTracking = ms_tr_il_w_01 && ms_tr_il_w_01.w ? ms_tr_il_w_01 : null;
        function captureForms(formLoader, correlationId, formsToCapture) {
            if (formsToCapture) {
                new MsCrmMkt.FormCapture(formLoader,formsToCapture,formsRoute,mutableConfig.FormCapture,mutableConfig.WebsiteId,correlationId,new MsCrmMkt.Logger).captureForms()
            }
        }
        if (typeof loadForms === "function") {
            if (visitTracking !== null) {
                visitTracking.w(mutableConfig, trackingRoute, function(websiteVisitedParams) {
                    loadForms(mutableConfig, formsRoute, trackingRoute, websiteVisitedParams, captureForms)
                }, mutableConfig.TrackingLocation)
            } else {
                loadForms(mutableConfig, formsRoute, trackingRoute, null, captureForms)
            }
        }
    }
    MsCrmMkt.initTracking = initTracking;
    function collectConfig() {
        var logger = new MsCrmMkt.Logger;
        new MsCrmMkt.ConfigProvider(logger).getConfig().then(function(config) {
            if (config) {
                MsCrmMkt.MsCrmPageLoader.ensurePersonalization(config);
                MsCrmMkt.initTracking(config);
                MsCrmMkt.initFormDetection(config, new MsCrmMkt.ScriptLoader)
            }
        })
    }
    collectConfig()
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var defaultScriptDir = parentLocation(document.currentScript && document.currentScript["src"]) || "https://mktdplt102cdn.azureedge.net/public/latest/js";
    var scriptQuery = urlQuery(document.currentScript && document.currentScript["src"]) || "";
    function initFormDetection(config, scriptLoader) {
        if (window.opener) {
            var loader_1 = new DetectionLoader(config.HostName,config.WebsiteId,scriptLoader);
            window.addEventListener("message", function(event) {
                return loader_1.onMessage(event)
            }, false);
            window.opener.postMessage({
                Key: "d365-mkt-forms",
                Type: "Announce"
            }, "*")
        }
    }
    MsCrmMkt.initFormDetection = initFormDetection;
    function parentLocation(scriptLocation) {
        if (!scriptLocation) {
            return null
        }
        var lastSeparator = scriptLocation.lastIndexOf("/");
        return lastSeparator >= 0 ? scriptLocation.substring(0, lastSeparator) : "."
    }
    function urlQuery(scriptLocation) {
        if (!scriptLocation) {
            return null
        }
        var lastSeparator = scriptLocation.lastIndexOf("?");
        return lastSeparator >= 0 ? scriptLocation.substring(lastSeparator) : ""
    }
    var DetectionLoader = function() {
        function DetectionLoader(apiHost, websiteId, scriptLoader, scriptLocation) {
            if (scriptLocation === void 0) {
                scriptLocation = defaultScriptDir
            }
            this.apiHost = apiHost;
            this.websiteId = websiteId;
            this.scriptLoader = scriptLoader;
            this.scriptLocation = scriptLocation
        }
        DetectionLoader.prototype.onMessage = function(event) {
            var _this = this;
            if (event.data.Key === "d365-mkt-forms") {
                this.validateOrigin(event.origin).then(function() {
                    return _this.loadScript(_this.scriptLocation + "/form-capture-setup.js" + scriptQuery)
                }).then(function() {
                    switch (event.data.Type) {
                    case "Detect":
                        MsCrmMkt["startDetection"](event.origin, _this.websiteId, event.data.Id);
                        break;
                    case "Stop":
                        MsCrmMkt["stopDetection"](event.origin, _this.websiteId, event.data.Id);
                        break
                    }
                })
            }
        }
        ;
        DetectionLoader.prototype.loadScript = function(location) {
            return this.scriptLoader.loadScript(location)
        }
        ;
        DetectionLoader.prototype.validateOrigin = function(origin) {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", "https://" + this.apiHost + "/t/detectforms/" + this.websiteId + "/origin?check=" + encodeURIComponent(origin), true);
            return new ES6Promise.Promise(function(resolve, reject) {
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        xhr.onreadystatechange = null;
                        if (200 <= xhr.status && xhr.status < 300) {
                            resolve()
                        } else {
                            reject(xhr.responseText)
                        }
                    }
                }
                ;
                xhr.send()
            }
            )
        }
        ;
        return DetectionLoader
    }()
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Lookups;
    (function(Lookups) {
        var CachedLookupProvider = function() {
            function CachedLookupProvider(lookupProvider, cacheSize) {
                this.lookupProvider = lookupProvider;
                this.cacheSize = cacheSize;
                this._cache = []
            }
            CachedLookupProvider.prototype.getItems = function(request) {
                var _this = this;
                var key = JSON.stringify(request);
                var response = null;
                this._cache.forEach(function(pair) {
                    if (pair.request === key) {
                        response = pair.response
                    }
                });
                if (response) {
                    return new ES6Promise.Promise(function(resolve) {
                        return resolve(response)
                    }
                    )
                }
                return this.lookupProvider.getItems(request).then(function(e) {
                    if (e.ErrorCode === "Success") {
                        if (_this._cache.length >= _this.cacheSize) {
                            _this._cache.shift()
                        }
                        _this._cache.push({
                            request: key,
                            response: e
                        })
                    }
                    return e
                })
            }
            ;
            return CachedLookupProvider
        }();
        Lookups.CachedLookupProvider = CachedLookupProvider
    }
    )(Lookups = MsCrmMkt.Lookups || (MsCrmMkt.Lookups = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Lookups;
    (function(Lookups) {
        var Datalist = function() {
            function Datalist(element) {
                this.element = element
            }
            Datalist.prototype.getElement = function() {
                return this.element
            }
            ;
            Datalist.prototype.forEach = function(callback) {
                var options = this.element.querySelectorAll("option");
                for (var i = 0; i < options.length; i++) {
                    callback(options[i])
                }
            }
            ;
            Datalist.prototype.clearOptions = function() {
                while (this.element.childNodes.length !== 0) {
                    this.element.removeChild(this.element.childNodes[0])
                }
            }
            ;
            Datalist.getFromInput = function(element) {
                if (!element) {
                    return null
                }
                if (element.list) {
                    return new Datalist(element.list)
                }
                var listAttribute = element.getAttribute("list");
                if (!listAttribute) {
                    return null
                }
                var listElement = document.getElementById(listAttribute);
                if (!listElement) {
                    return null
                }
                return new Datalist(listElement)
            }
            ;
            return Datalist
        }();
        Lookups.Datalist = Datalist
    }
    )(Lookups = MsCrmMkt.Lookups || (MsCrmMkt.Lookups = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Lookups;
    (function(Lookups) {
        var LookupParentChildEntity = "data-parent-child-entity-logicalname";
        var LookupParentChildToParent = "data-parent-child-to-parent";
        var LookupParentFieldId = "data-parent-fieldid";
        var LookupDataValueAttribute = "data-value";
        var LookupControlIndex = "data-lookup-index";
        var LookupControl = function() {
            function LookupControl(input, container, lookupProvider, logger, messages) {
                var _this = this;
                this.input = input;
                this.container = container;
                this.lookupProvider = lookupProvider;
                this.logger = logger;
                this.messages = messages;
                this._lastSearchTerm = "";
                this._currentRequestVer = 0;
                this.page = 1;
                input.removeAttribute("list");
                MsCrmMkt.CssProvider.addClass(input, "lookup-behavior");
                input.autocomplete = "off";
                this.controlIndex = LookupControl.counter++;
                this.divIdentifier = "lookup-popup-div-" + this.controlIndex;
                this.ulIdentifier = "lookup-popup-ul-" + this.controlIndex;
                input.addEventListener("input", function() {
                    return _this.onInput()
                });
                input.addEventListener("keydown", function(e) {
                    return _this.onKeydown(e)
                });
                input.addEventListener("keyup", function(e) {
                    return _this.onKeyup(e)
                });
                input.addEventListener("focus", function() {
                    return _this.setPopupVisible(true)
                });
                input.addEventListener("blur", function() {
                    return _this.setPopupVisible(false)
                });
                this._lastSearchTerm = input.value;
                if (!this._lastSearchTerm || !this._lastSearchTerm.length) {
                    this.refreshData(false)
                }
            }
            LookupControl.prototype.getMessage = function(key) {
                return this.messages[key]
            }
            ;
            Object.defineProperty(LookupControl.prototype, "controlIndex", {
                get: function() {
                    var index = this.input.getAttribute(LookupControlIndex);
                    if (index && index.length) {
                        return parseInt(index)
                    }
                    return -1
                },
                set: function(value) {
                    this.input.setAttribute(LookupControlIndex, value.toString())
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LookupControl.prototype, "parentInput", {
                get: function() {
                    var parentName = this.input.getAttribute("data-parent-fieldid");
                    if (parentName && parentName.length) {
                        return this.input.form.querySelector("input[name='" + parentName + "']")
                    }
                    return null
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LookupControl.prototype, "childrenInputs", {
                get: function() {
                    var result = [];
                    var childElements = this.input.form.querySelectorAll("input[data-parent-fieldid='" + this.input.name + "']");
                    for (var i = 0; i < childElements.length; i++) {
                        result.push(childElements.item(i))
                    }
                    return result
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LookupControl.prototype, "highlightedItem", {
                get: function() {
                    var highlightedItems = this.popupElement.querySelectorAll("li.ui-state-active");
                    if (highlightedItems && highlightedItems.length !== 0) {
                        var element = highlightedItems.item(0);
                        return LookupControl.getElementLookupValue(element, element.innerText)
                    }
                    return null
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LookupControl.prototype, "selectedItem", {
                get: function() {
                    return LookupControl.getElementLookupValue(this.input)
                },
                set: function(item) {
                    var _a, _b, _c, _d;
                    if (item) {
                        this.input.value = item.v
                    }
                    var selectedItem = this.selectedItem;
                    if (((_a = item) === null || _a === void 0 ? void 0 : _a.id) === ((_b = selectedItem) === null || _b === void 0 ? void 0 : _b.id) && ((_c = item) === null || _c === void 0 ? void 0 : _c.n) === ((_d = selectedItem) === null || _d === void 0 ? void 0 : _d.n)) {
                        return
                    }
                    LookupControl.setElementLookupValue(this.input, item);
                    this.childrenInputs.forEach(function(child) {
                        var _a;
                        child.value = null;
                        LookupControl.setElementLookupValue(child, null);
                        (_a = Lookups.LookupUtility.getLookupField(child.id)) === null || _a === void 0 ? void 0 : _a.fillFromTypeSearch(child.value, false, 0)
                    })
                },
                enumerable: true,
                configurable: true
            });
            LookupControl.prototype.onInput = function() {
                this.selectedItem = null
            }
            ;
            Object.defineProperty(LookupControl.prototype, "popupElement", {
                get: function() {
                    var popupElement = document.getElementById(this.divIdentifier);
                    if (!popupElement) {
                        popupElement = this.renderPopupElement()
                    }
                    return popupElement
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LookupControl.prototype, "popupList", {
                get: function() {
                    return this.popupElement.querySelector("#" + this.ulIdentifier)
                },
                enumerable: true,
                configurable: true
            });
            LookupControl.prototype.setPopupVisible = function(visible) {
                var popupElement = this.popupElement;
                if (visible) {
                    this.updateListWidth(this.popupList);
                    var boundingClientRect = this.input.getBoundingClientRect();
                    var positionParent = popupElement.parentElement;
                    while (positionParent && positionParent.parentElement !== positionParent && window.getComputedStyle(positionParent).position === "static") {
                        positionParent = positionParent.parentElement
                    }
                    if (positionParent) {
                        var positionRect = positionParent.getBoundingClientRect();
                        popupElement.style.top = boundingClientRect.top + boundingClientRect.height + positionParent.scrollTop - positionRect.top + "px";
                        popupElement.style.left = boundingClientRect.left + positionParent.scrollLeft - positionRect.left + "px"
                    } else {
                        popupElement.style.top = boundingClientRect.top + boundingClientRect.height + window.pageYOffset + "px";
                        popupElement.style.left = boundingClientRect.left + window.pageXOffset + "px"
                    }
                    MsCrmMkt.CssProvider.addClass(popupElement, "ui-selectmenu-open")
                } else {
                    MsCrmMkt.CssProvider.removeClass(popupElement, "ui-selectmenu-open")
                }
            }
            ;
            LookupControl.prototype.moveActiveSelection = function(offset) {
                var selectedItem;
                var items = this.popupElement.querySelectorAll("li:not(.ui-loading-item)");
                for (var i = 0; i < items.length; i++) {
                    var item = items.item(i);
                    if (MsCrmMkt.CssProvider.hasClass(item, "ui-state-active")) {
                        MsCrmMkt.CssProvider.removeClass(item, "ui-state-active");
                        selectedItem = items.item(i);
                        if (i + offset < items.length && i + offset >= 0) {
                            selectedItem = items.item(i + offset);
                            break
                        }
                    }
                }
                if (!selectedItem && items.length > 0) {
                    selectedItem = items.item(0)
                }
                MsCrmMkt.CssProvider.addClass(selectedItem, "ui-state-active");
                var list = this.popupList;
                if (selectedItem && list.scrollHeight > list.clientHeight) {
                    var scrollBottom = list.clientHeight + list.scrollTop;
                    var elementBottom = selectedItem.offsetTop + selectedItem.offsetHeight;
                    if (elementBottom > scrollBottom) {
                        list.scrollTop = elementBottom - list.clientHeight
                    } else if (selectedItem.offsetTop < list.scrollTop) {
                        list.scrollTop = selectedItem.offsetTop
                    }
                }
            }
            ;
            LookupControl.prototype.fillFromAPISearch = function(searchTerm) {
                this._typeSearchPromise && this._typeSearchPromise.cancel();
                if (!this._apiSearchPromise) {
                    this._apiSearchPromise = this.performSearch(searchTerm, false, 0)
                } else {
                    this._apiSearchPromise.cancel();
                    this._apiSearchPromise = this.performSearch(searchTerm, false, 1e3)
                }
                return this._apiSearchPromise.promise
            }
            ;
            LookupControl.prototype.fillFromTypeSearch = function(searchTerm, showPopup, delayMs) {
                if (showPopup === void 0) {
                    showPopup = true
                }
                if (delayMs === void 0) {
                    delayMs = 200
                }
                this._apiSearchPromise && this._apiSearchPromise.cancel();
                this._typeSearchPromise && this._typeSearchPromise.cancel();
                this._typeSearchPromise = this.performSearch(searchTerm, showPopup, delayMs);
                return this._typeSearchPromise.promise
            }
            ;
            LookupControl.prototype.performSearch = function(searchTerm, showPopup, delayMs) {
                var _this = this;
                if (delayMs === void 0) {
                    delayMs = 0
                }
                this._lastSearchTerm = searchTerm;
                var timeoutHandler;
                var finished = false;
                var cancel = function() {
                    finished = true
                };
                var promise = new ES6Promise.Promise(function(resolve, reject) {
                    timeoutHandler = window.setTimeout(function() {
                        if (finished) {
                            cancel()
                        }
                        _this.refreshData(showPopup).then(function(r) {
                            finished = true;
                            resolve(r)
                        }).catch(function(e) {
                            finished = true;
                            reject(e)
                        })
                    }, delayMs);
                    cancel = function() {
                        if (finished) {
                            return
                        }
                        clearTimeout(timeoutHandler);
                        finished = true;
                        reject("Request cancelled")
                    }
                }
                );
                return {
                    promise: promise,
                    cancel: cancel
                }
            }
            ;
            LookupControl.prototype.onKeydown = function(event) {
                switch (event.key) {
                case "Down":
                case "ArrowDown":
                    this.moveActiveSelection(1);
                    event.preventDefault();
                    return;
                case "Up":
                case "ArrowUp":
                    this.moveActiveSelection(-1);
                    event.preventDefault();
                    return;
                case "Enter":
                    var item = this.highlightedItem;
                    if (item) {
                        this.selectedItem = item;
                        this.setPopupVisible(false)
                    }
                    event.preventDefault();
                    return
                }
            }
            ;
            LookupControl.prototype.onKeyup = function(event) {
                switch (event.key) {
                case "Down":
                case "ArrowDown":
                    event.preventDefault();
                    return;
                case "Up":
                case "ArrowUp":
                    event.preventDefault();
                    return;
                case "Enter":
                    event.preventDefault();
                    return
                }
                this.fillFromTypeSearch(this.input.value)
            }
            ;
            LookupControl.prototype.onLoadingStarted = function() {
                MsCrmMkt.CssProvider.addClass(this.input, "lookup-loading");
                var list = this.popupList;
                var loadingItem = list.querySelector(".ui-loading-item");
                if (loadingItem) {
                    return
                }
                loadingItem = document.createElement("li");
                loadingItem.className = "ui-loading-item";
                var content = document.createElement("div");
                content.className = "ui-loading-item-wrapper";
                content.setAttribute("role", "option");
                var message = "";
                if (this._loadingMoreData === true) {
                    message = this.getMessage("LookupLoadingMore")
                } else {
                    message = this.getMessage("LookupLoading")
                }
                content.innerText = message;
                loadingItem.appendChild(content);
                list.appendChild(loadingItem)
            }
            ;
            LookupControl.prototype.onLoadingFinished = function() {
                MsCrmMkt.CssProvider.removeClass(this.input, "lookup-loading");
                var list = this.popupList;
                var loadingItem = list.querySelector(".ui-loading-item");
                if (loadingItem) {
                    list.removeChild(loadingItem)
                }
            }
            ;
            LookupControl.prototype.onError = function(errorKey) {
                var _this = this;
                this._retryNeeded = true;
                var list = this.popupList;
                var listItem = document.createElement("li");
                listItem.className = "ui-retry-item";
                var retryContentWrapper = document.createElement("div");
                retryContentWrapper.className = "ui-retry-item-wrapper";
                var retryText = document.createElement("div");
                retryText.className = "ui-retry-text";
                retryText.setAttribute("role", "option");
                retryText.innerText = this.getMessage(errorKey);
                var buttonContent = document.createElement("div");
                buttonContent.className = "ui-retry-button-wrapper";
                var retryButton = document.createElement("button");
                retryButton.type = "button";
                var label = this.getMessage("Retry");
                retryButton.className = "ui-retry-button";
                retryButton.setAttribute("aria-label", label);
                retryButton.setAttribute("title", label);
                retryButton.textContent = label;
                retryButton.onmousedown = function(event) {
                    _this.retry();
                    event.preventDefault()
                }
                ;
                buttonContent.appendChild(retryButton);
                retryContentWrapper.appendChild(retryText);
                retryContentWrapper.appendChild(buttonContent);
                listItem.appendChild(retryContentWrapper);
                list.appendChild(listItem)
            }
            ;
            LookupControl.prototype.retry = function() {
                this._retryNeeded = false;
                var list = this.popupList;
                var retryItem = list.querySelector(".ui-retry-item");
                if (retryItem) {
                    list.removeChild(retryItem)
                }
                if (this.page > 1) {
                    this.loadMoreData()
                } else {
                    this.refreshData(true)
                }
            }
            ;
            LookupControl.prototype.loadItems = function(request) {
                var _this = this;
                var version = ++this._currentRequestVer;
                this.onLoadingStarted();
                return this.lookupProvider.getItems(request).then(function(response) {
                    if (response.ErrorCode === "Success") {
                        if (version === _this._currentRequestVer) {
                            _this._lastSuccessfulResponse = response
                        } else {
                            throw new Error("Stale response received")
                        }
                    } else if (response.ErrorCode === "RelevanceSearchServiceReturnedError") {} else {
                        _this.logger.error("There was a problem retrieving items. Try again later.");
                        _this.onError("LookupGenericError")
                    }
                    _this.onLoadingFinished();
                    return response
                }).catch(function(e) {
                    if (e.status) {
                        _this.logger.error(e);
                        if (e.status === 429) {
                            _this.logger.error("The server is busy right now and not all values are being retrieved. Try again later.");
                            _this.onError("LookupRequestThrottled")
                        } else {
                            _this.onError("LookupGenericError")
                        }
                    }
                    if (!e.aborted) {
                        _this.onLoadingFinished()
                    }
                    throw e
                })
            }
            ;
            LookupControl.prototype.getAllItems = function(response) {
                if (response.ItemsV2) {
                    response.ItemsV2.forEach(function(items) {
                        items.Items.forEach(function(item) {
                            return item.n = items.EntityName
                        })
                    });
                    return response.ItemsV2.map(function(r) {
                        return r.Items
                    }).reduce(function(a, b) {
                        return a.concat(b)
                    }, []).sort(function(a, b) {
                        return a.v.localeCompare(b.v)
                    })
                } else {
                    return response.Items
                }
            }
            ;
            LookupControl.prototype.resetControl = function() {
                this._loadingMoreData = false;
                this._retryNeeded = false;
                this._lastSuccessfulResponse = null;
                this.page = 1;
                this.popupList.innerHTML = ""
            }
            ;
            LookupControl.prototype.refreshData = function(showPopup) {
                var _this = this;
                this.resetControl();
                return new ES6Promise.Promise(function(resolve, reject) {
                    _this.loadItems(_this.getLookupRequest(_this.page)).then(function(response) {
                        var items = [];
                        if (response.ErrorCode === "Success") {
                            _this.page++;
                            items = _this.getAllItems(response)
                        }
                        _this.appendItems(items);
                        if (showPopup) {
                            _this.setPopupVisible(true)
                        }
                        return response
                    }).then(function(response) {
                        PromiseModule.PromiseUtility.doWhile(function() {
                            return _this.shouldLoadMoreDataOnRefresh()
                        }, function() {
                            return _this.loadMoreData()
                        });
                        return response
                    }).then(function(response) {
                        if (response.ErrorCode === "Success") {
                            resolve(true)
                        } else {
                            reject(Error("Error response recieved"))
                        }
                    }).catch(function() {
                        reject(Error("Error loading data"))
                    })
                }
                )
            }
            ;
            LookupControl.prototype.hasAnyData = function(response) {
                return response.ItemsV2.length > 0
            }
            ;
            LookupControl.prototype.loadMoreData = function() {
                var _this = this;
                if (this._loadingMoreData === true || this._retryNeeded === true) {
                    return
                }
                if (!this._lastSuccessfulResponse || !this._lastSuccessfulResponse.ItemsV2) {
                    return
                }
                if (!this.hasAnyData(this._lastSuccessfulResponse)) {
                    return
                }
                this._loadingMoreData = true;
                return this.loadItems(this.getLookupRequest(this.page)).then(function(response) {
                    if (response.ErrorCode === "Success") {
                        _this.page++;
                        _this.appendItems(_this.getAllItems(response))
                    }
                    _this._loadingMoreData = false
                }).catch(function() {
                    _this._loadingMoreData = false
                })
            }
            ;
            LookupControl.prototype.getLookupRequest = function(pageNumber) {
                var pagingInfos = null;
                if (this._lastSuccessfulResponse && this._lastSuccessfulResponse.ItemsV2) {
                    pagingInfos = this._lastSuccessfulResponse.ItemsV2.map(function(i) {
                        var pagingInfo = {
                            entityName: i.EntityName,
                            pagingCookie: i.PagingCookie
                        };
                        return pagingInfo
                    })
                }
                var parentFieldId = this.input.getAttribute(LookupParentFieldId);
                var parentChildEntity = this.input.getAttribute(LookupParentChildEntity);
                var parentChildToParent = this.input.getAttribute(LookupParentChildToParent);
                var request = {
                    searchText: this._lastSearchTerm,
                    page: pageNumber,
                    pagingInfos: pagingInfos
                };
                if (parentFieldId && parentFieldId.length && parentChildEntity && parentChildEntity.length && parentChildToParent && parentChildToParent.length) {
                    var parent_1 = this.parentInput;
                    var parentValue = LookupControl.getElementLookupValue(parent_1);
                    if (parentValue) {
                        request.childEntityName = parentChildEntity;
                        request.childToParentRelationshipAttributeName = parentChildToParent;
                        request.parentFieldId = parentFieldId;
                        request.parentValue = JSON.stringify({
                            Id: parentValue.id,
                            LogicalName: parentValue.n
                        })
                    }
                }
                return request
            }
            ;
            LookupControl.setElementLookupValue = function(element, item) {
                if (element) {
                    if (item) {
                        element.setAttribute(LookupDataValueAttribute, item.n + "," + item.id);
                        return
                    }
                    element.removeAttribute(LookupDataValueAttribute)
                }
            }
            ;
            LookupControl.getElementLookupValue = function(element, value) {
                if (value === void 0) {
                    value = null
                }
                if (element) {
                    var attributeValue = element.getAttribute(LookupDataValueAttribute);
                    if (attributeValue && attributeValue.length) {
                        var parts = attributeValue.split(",");
                        return {
                            n: parts[0],
                            id: parts[1],
                            v: value
                        }
                    }
                }
                return null
            }
            ;
            LookupControl.prototype.renderItem = function(item) {
                var _this = this;
                var listItem = document.createElement("li");
                listItem.className = "ui-menu-item";
                LookupControl.setElementLookupValue(listItem, item);
                listItem.onmouseenter = function() {
                    var siblings = listItem.parentElement.children;
                    for (var i = 0; i < siblings.length; i++) {
                        MsCrmMkt.CssProvider.removeClass(siblings.item(i), "ui-state-active")
                    }
                    MsCrmMkt.CssProvider.addClass(listItem, "ui-state-active")
                }
                ;
                var content = document.createElement("div");
                content.className = "ui-menu-item-wrapper";
                content.setAttribute("role", "option");
                content.innerText = item.v;
                listItem.appendChild(content);
                content.onmousedown = function() {
                    _this.selectedItem = item;
                    _this.setPopupVisible(false)
                }
                ;
                return listItem
            }
            ;
            LookupControl.prototype.appendItems = function(items) {
                var _this = this;
                var list = this.popupList;
                items.forEach(function(item) {
                    list.appendChild(_this.renderItem(item))
                })
            }
            ;
            LookupControl.prototype.updateListWidth = function(list) {
                var boundingClientRect = this.input.getBoundingClientRect();
                list.style.width = boundingClientRect.width + "px"
            }
            ;
            LookupControl.prototype.renderPopupElement = function() {
                var _this = this;
                var result = document.createElement("div");
                result.className = "ui-selectmenu-menu ui-front";
                result.id = this.divIdentifier;
                var list = document.createElement("ul");
                list.id = this.ulIdentifier;
                this.updateListWidth(list);
                list.setAttribute("role", "listbox");
                list.className = "ui-menu ui-corner-bottom ui-widget ui-widget-content";
                result.appendChild(list);
                list.onscroll = function(event) {
                    var element = event.target;
                    if (_this.isAtEndOfScroll(element)) {
                        _this.loadMoreData()
                    }
                }
                ;
                this.input.insertAdjacentElement("afterend", result);
                list.onmousedown = function(event) {
                    event.preventDefault()
                }
                ;
                return result
            }
            ;
            LookupControl.prototype.isAtEndOfScroll = function(element) {
                return element.clientHeight !== 0 && Math.abs(element.scrollHeight - (element.clientHeight + element.scrollTop)) < 1
            }
            ;
            LookupControl.prototype.shouldLoadMoreDataOnRefresh = function() {
                return this._lastSuccessfulResponse && this.hasAnyData(this._lastSuccessfulResponse) && this.isAtEndOfScroll(this.popupList)
            }
            ;
            LookupControl.counter = 0;
            return LookupControl
        }();
        Lookups.LookupControl = LookupControl
    }
    )(Lookups = MsCrmMkt.Lookups || (MsCrmMkt.Lookups = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Lookups;
    (function(Lookups) {
        var LookupProvider = function() {
            function LookupProvider(marketingFieldIdentifier, serviceFabricBaseUrl) {
                this.marketingFieldIdentifier = marketingFieldIdentifier;
                this.serviceFabricBaseUrl = serviceFabricBaseUrl
            }
            LookupProvider.prototype.getItems = function(lookupRequest) {
                var _this = this;
                if (this.abortController) {
                    this.abortController.abort()
                }
                return new ES6Promise.Promise(function(resolve, reject) {
                    var request = new XMLHttpRequest;
                    var url = _this.serviceFabricBaseUrl + "/t/lookup/" + _this.marketingFieldIdentifier;
                    request.open("POST", url, true);
                    request.setRequestHeader("Content-type", "application/json");
                    request.onreadystatechange = function() {
                        if (request.readyState === 4) {
                            var aborted = _this.abortController && _this.abortController.signal.aborted;
                            if (aborted) {
                                return
                            }
                            request.onreadystatechange = null;
                            var status_2 = request.status;
                            if (status_2 === 200 || status_2 === 204) {
                                var parsedResponse = JSON.parse(request.responseText);
                                resolve(parsedResponse);
                                return
                            }
                            reject({
                                status: status_2,
                                responseText: request.responseText
                            })
                        }
                    }
                    ;
                    if (typeof AbortController === "function") {
                        _this.abortController = new AbortController;
                        _this.abortController.signal.addEventListener("abort", function() {
                            if (!request.onreadystatechange) {
                                return
                            }
                            request.abort && request.abort();
                            reject({
                                aborted: true
                            })
                        })
                    }
                    request.send(JSON.stringify(lookupRequest))
                }
                )
            }
            ;
            return LookupProvider
        }();
        Lookups.LookupProvider = LookupProvider
    }
    )(Lookups = MsCrmMkt.Lookups || (MsCrmMkt.Lookups = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Lookups;
    (function(Lookups) {
        var LookupUtility = function() {
            function LookupUtility(logger, localizationProvider, getUiLanguage) {
                this.logger = logger;
                this.messages = LookupUtility.getLookupMessages(localizationProvider, getUiLanguage)
            }
            LookupUtility.fillLookupFromSearch = function(lookupFieldId, searchTerm) {
                var _a;
                return ((_a = LookupUtility.lookupFields[lookupFieldId]) === null || _a === void 0 ? void 0 : _a.fillFromAPISearch(searchTerm)) || ES6Promise.Promise.reject("Lookup field with id " + lookupFieldId + " not found")
            }
            ;
            LookupUtility.getLookupField = function(lookupFieldId) {
                return LookupUtility.lookupFields[lookupFieldId]
            }
            ;
            LookupUtility.prototype.getValidLookupValue = function(element) {
                var item = Lookups.LookupControl.getElementLookupValue(element);
                if (item) {
                    return JSON.stringify({
                        Id: item.id,
                        LogicalName: item.n
                    })
                }
                return null
            }
            ;
            LookupUtility.prototype.prefill = function(input, value) {
                Lookups.LookupControl.setElementLookupValue(input, value);
                if (value) {
                    input.value = value.v
                }
            }
            ;
            LookupUtility.prototype.createLookupControl = function(element, serviceFabricBaseUrl) {
                if (!Lookups.Datalist.getFromInput(element)) {
                    return null
                }
                var lookupProvider = new Lookups.CachedLookupProvider(new Lookups.LookupProvider(element.name,serviceFabricBaseUrl),10);
                LookupUtility.lookupFields[element.id] = new Lookups.LookupControl(element,element.parentElement,lookupProvider,this.logger,this.messages)
            }
            ;
            LookupUtility.getMessage = function(key, localizationProvider, getUiLanguage) {
                return localizationProvider.getMessageForLanguage(key, getUiLanguage())
            }
            ;
            LookupUtility.getLookupMessages = function(localizationProvider, getUiLanguage) {
                var messages = {};
                messages["LookupLoading"] = LookupUtility.getMessage("LookupLoading", localizationProvider, getUiLanguage);
                messages["LookupLoadingMore"] = LookupUtility.getMessage("LookupLoadingMore", localizationProvider, getUiLanguage);
                messages["LookupRequestThrottled"] = LookupUtility.getMessage("LookupRequestThrottled", localizationProvider, getUiLanguage);
                messages["LookupGenericError"] = LookupUtility.getMessage("LookupGenericError", localizationProvider, getUiLanguage);
                messages["Retry"] = LookupUtility.getMessage("Retry", localizationProvider, getUiLanguage);
                return messages
            }
            ;
            LookupUtility.lookupFields = {};
            return LookupUtility
        }();
        Lookups.LookupUtility = LookupUtility
    }
    )(Lookups = MsCrmMkt.Lookups || (MsCrmMkt.Lookups = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Hierarchy;
    (function(Hierarchy) {
        var HierarchyFieldBase = function() {
            function HierarchyFieldBase(logger, fieldBlock) {
                this.logger = logger;
                this.fieldBlock = fieldBlock
            }
            HierarchyFieldBase.prototype.onOptionsChanged = function() {
                if (this.optionsChangedHandler) {
                    this.optionsChangedHandler(this.getSelectedOptions())
                }
            }
            ;
            HierarchyFieldBase.prototype.hideField = function(field) {
                field.setAttribute(MsCrmMkt.FormLoaderInternal.hiddenFieldAttrName, "true")
            }
            ;
            HierarchyFieldBase.prototype.showField = function(field) {
                field.removeAttribute(MsCrmMkt.FormLoaderInternal.hiddenFieldAttrName)
            }
            ;
            HierarchyFieldBase.prototype.triggerChangeEvent = function(element) {
                MsCrmMkt.FormHelper.triggerChangeEvent(element)
            }
            ;
            HierarchyFieldBase.prototype.registerOnOptionsChangedHandler = function(handler) {
                this.optionsChangedHandler = handler
            }
            ;
            return HierarchyFieldBase
        }();
        Hierarchy.HierarchyFieldBase = HierarchyFieldBase
    }
    )(Hierarchy = MsCrmMkt.Hierarchy || (MsCrmMkt.Hierarchy = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Hierarchy;
    (function(Hierarchy) {
        var CheckboxHierarchyField = function(_super) {
            __extends(CheckboxHierarchyField, _super);
            function CheckboxHierarchyField(logger, fieldBlock) {
                var _this = _super.call(this, logger, fieldBlock) || this;
                _this.checkbox = MsCrmMkt.FormHelper.getChildInputsByType(fieldBlock, MsCrmMkt.inputTypeCheckbox)[0];
                _this.setupHandler();
                return _this
            }
            CheckboxHierarchyField.prototype.getSelectedOptions = function() {
                return this.checkbox.checked ? [1] : [0]
            }
            ;
            CheckboxHierarchyField.prototype.filterOptions = function(filteredOptions) {
                return
            }
            ;
            CheckboxHierarchyField.prototype.setupHandler = function() {
                var _this = this;
                MsCrmMkt.FormHelper.attachChangeEventValidation(this.checkbox, function(e) {
                    _this.onOptionsChanged()
                })
            }
            ;
            return CheckboxHierarchyField
        }(Hierarchy.HierarchyFieldBase);
        Hierarchy.CheckboxHierarchyField = CheckboxHierarchyField
    }
    )(Hierarchy = MsCrmMkt.Hierarchy || (MsCrmMkt.Hierarchy = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Hierarchy;
    (function(Hierarchy) {
        var CheckboxListHierarchyField = function(_super) {
            __extends(CheckboxListHierarchyField, _super);
            function CheckboxListHierarchyField(logger, fieldBlock) {
                var _this = _super.call(this, logger, fieldBlock) || this;
                _this.spans = fieldBlock.querySelectorAll("span.lp-checkboxListItem");
                _this.checkboxes = new Array(_this.spans.length);
                _this.values = new Array(_this.spans.length);
                _this.origState = new Array(_this.spans.length);
                Array.prototype.forEach.call(_this.spans, function(span, index) {
                    var checkbox = span.querySelector("input[type='" + MsCrmMkt.inputTypeCheckbox + "']");
                    _this.checkboxes[index] = checkbox;
                    _this.values[index] = parseInt(checkbox.value);
                    _this.origState[index] = checkbox.checked
                });
                _this.setupHandler();
                return _this
            }
            CheckboxListHierarchyField.prototype.getSelectedOptions = function() {
                var selectedOptions = [];
                for (var i = 0; i < this.checkboxes.length; i++) {
                    if (this.checkboxes[i].checked) {
                        selectedOptions.push(this.values[i])
                    }
                }
                return selectedOptions
            }
            ;
            CheckboxListHierarchyField.prototype.filterOptions = function(filteredOptions) {
                for (var i = 0; i < this.spans.length; i++) {
                    var span = this.spans[i];
                    var checkbox = this.checkboxes[i];
                    if (filteredOptions.indexOf(this.values[i]) < 0) {
                        span.style.display = "none";
                        checkbox.checked = false;
                        checkbox.hidden = true;
                        this.hideField(checkbox)
                    } else {
                        if (checkbox.hidden) {
                            checkbox.checked = this.origState[i]
                        }
                        span.style.removeProperty("display");
                        checkbox.hidden = false;
                        this.showField(checkbox)
                    }
                }
                if (this.checkboxes.length > 0) {
                    this.triggerChangeEvent(this.checkboxes[0])
                }
            }
            ;
            CheckboxListHierarchyField.prototype.setupHandler = function() {
                var _this = this;
                for (var i = 0; i < this.checkboxes.length; i++) {
                    this.checkboxes[i].addEventListener("change", function(e) {
                        _this.onOptionsChanged()
                    }, false)
                }
            }
            ;
            return CheckboxListHierarchyField
        }(Hierarchy.HierarchyFieldBase);
        Hierarchy.CheckboxListHierarchyField = CheckboxListHierarchyField
    }
    )(Hierarchy = MsCrmMkt.Hierarchy || (MsCrmMkt.Hierarchy = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Hierarchy;
    (function(Hierarchy) {
        var DropdownHierarchyField = function(_super) {
            __extends(DropdownHierarchyField, _super);
            function DropdownHierarchyField(logger, fieldBlock) {
                var _this = _super.call(this, logger, fieldBlock) || this;
                _this.dropdown = fieldBlock.querySelector("select");
                var optionElements = fieldBlock.querySelectorAll("option");
                _this.options = new Array(optionElements.length);
                _this.values = new Array(optionElements.length);
                Array.prototype.forEach.call(optionElements, function(option, index) {
                    _this.options[index] = option;
                    if (option.selected) {
                        _this.origCheckedIndex = index
                    }
                    if (option.value) {
                        _this.values[index] = parseInt(option.value)
                    } else {
                        _this.values[index] = null
                    }
                });
                _this.setupHandler();
                return _this
            }
            DropdownHierarchyField.prototype.getSelectedOptions = function() {
                for (var i = 0; i < this.options.length; i++) {
                    if (this.options[i].selected && this.values[i] != null) {
                        return [this.values[i]]
                    }
                }
                return []
            }
            ;
            DropdownHierarchyField.prototype.filterOptions = function(filteredOptions) {
                var anyOptionSelected = false;
                var selectedOptions = this.options.filter(function(o) {
                    return o.selected
                });
                if (selectedOptions && selectedOptions.length) {
                    var selectedValue = parseInt(selectedOptions[0].value);
                    anyOptionSelected = filteredOptions.indexOf(selectedValue) >= 0
                }
                for (var i = 0; i < this.options.length; i++) {
                    var option = this.options[i];
                    if (!option.value) {
                        continue
                    }
                    if (filteredOptions.indexOf(this.values[i]) < 0) {
                        var parent_2 = option.parentNode;
                        if (parent_2.nodeName.toLowerCase() !== "span") {
                            parent_2.removeChild(option);
                            var span = document.createElement("span");
                            span.style.display = "none";
                            span.appendChild(option);
                            parent_2.appendChild(span)
                        }
                        option.selected = false;
                        option.hidden = true;
                        this.hideField(option)
                    } else {
                        if (option.hidden && i === this.origCheckedIndex && !anyOptionSelected) {
                            option.selected = true
                        }
                        var parent_3 = option.parentNode;
                        if (parent_3.nodeName.toLowerCase() === "span") {
                            var select = parent_3.parentElement;
                            select.removeChild(parent_3);
                            select.appendChild(option)
                        }
                        option.hidden = false;
                        this.showField(option)
                    }
                }
            }
            ;
            DropdownHierarchyField.prototype.setupHandler = function() {
                var _this = this;
                this.dropdown.addEventListener("change", function(e) {
                    _this.onOptionsChanged()
                }, false)
            }
            ;
            return DropdownHierarchyField
        }(Hierarchy.HierarchyFieldBase);
        Hierarchy.DropdownHierarchyField = DropdownHierarchyField
    }
    )(Hierarchy = MsCrmMkt.Hierarchy || (MsCrmMkt.Hierarchy = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Hierarchy;
    (function(Hierarchy) {
        var FieldHierarchies = function() {
            function FieldHierarchies(logger, localizationProvider, getUiLanguage) {
                this.logger = logger;
                this.localizationProvider = localizationProvider;
                this.getUiLanguage = getUiLanguage
            }
            FieldHierarchies.prototype.setup = function(form, formControlsMapping) {
                var _this = this;
                this.hierarchyFields = {};
                form.FormPlaceholders.forEach(function(placeholder) {
                    var allForms = placeholder.element.querySelectorAll("FORM");
                    for (var i = 0; i < allForms.length; i++) {
                        var currentForm = allForms[i];
                        _this.setupHierarchies(currentForm, formControlsMapping)
                    }
                })
            }
            ;
            FieldHierarchies.prototype.getHierarchyField = function(fieldName, fieldBlockElement) {
                if (!this.hierarchyFields[fieldName]) {
                    this.hierarchyFields[fieldName] = this.createHierarchyField(fieldBlockElement)
                }
                return this.hierarchyFields[fieldName]
            }
            ;
            FieldHierarchies.prototype.setupHierarchies = function(form, formControlsMapping) {
                var _this = this;
                var parentFields = this.getAllParentFields(form, formControlsMapping);
                formControlsMapping.forEach(function(mapping) {
                    if (mapping && mapping.Hierarchy && mapping.Hierarchy.Parent) {
                        _this.setupChild(form, mapping, parentFields)
                    }
                });
                for (var parentFieldId in parentFields) {
                    var parent_4 = parentFields[parentFieldId];
                    this.setupHierarchy(parent_4)
                }
            }
            ;
            FieldHierarchies.prototype.setupChild = function(form, mapping, parentFields) {
                var hierarchy = mapping.Hierarchy;
                var childFieldName = mapping.FormControlId;
                var fieldBlockElement = MsCrmMkt.FormHelper.getOptionsFieldBlockByName(form, childFieldName);
                if (!fieldBlockElement) {
                    this.logger.error("FieldHierarchies.setupChild: child field with name attribute [" + childFieldName + "] not found in form");
                    return
                }
                var child = this.getHierarchyField(childFieldName, fieldBlockElement);
                var parent = parentFields[hierarchy.Parent];
                if (!child || !parent) {
                    return
                }
                parent.addChild({
                    fieldBlock: fieldBlockElement,
                    mapping: mapping,
                    hierarchyField: child
                })
            }
            ;
            FieldHierarchies.prototype.setupHierarchy = function(parent) {
                if (parent.isAnyChildRequired()) {
                    parent.getHierarchyField().filterOptions(parent.getAllParentOptionsInRelationships())
                }
                this.refreshOptions(parent, parent.getHierarchyField().getSelectedOptions());
                this.attachListener(parent)
            }
            ;
            FieldHierarchies.prototype.getAllParentFields = function(form, formControlsMapping) {
                var _this = this;
                var parentFields = {};
                formControlsMapping.forEach(function(mapping) {
                    if (mapping && mapping.Hierarchy && !parentFields[mapping.Hierarchy.Parent]) {
                        var parentFieldName = mapping.Hierarchy.Parent;
                        var fieldBlockElement = MsCrmMkt.FormHelper.getOptionsFieldBlockByName(form, parentFieldName);
                        if (fieldBlockElement) {
                            var parentField = _this.getHierarchyField(parentFieldName, fieldBlockElement);
                            if (parentField) {
                                parentFields[mapping.Hierarchy.Parent] = new Hierarchy.HierarchyParent(parentField)
                            }
                        } else {
                            _this.logger.error("FieldHierarchies.getAllParentFields: parent field with name attribute [" + parentFieldName + "] not found in form")
                        }
                    }
                });
                return parentFields
            }
            ;
            FieldHierarchies.prototype.attachListener = function(parent) {
                var _this = this;
                parent.getHierarchyField().registerOnOptionsChangedHandler(function(selectedOptions) {
                    _this.refreshOptions(parent, selectedOptions)
                })
            }
            ;
            FieldHierarchies.prototype.refreshOptions = function(parent, selectedParentOptions) {
                parent.getChildren().forEach(function(child) {
                    var relationships = child.mapping.Hierarchy.Relationships;
                    var childOptions = relationships.filter(function(r) {
                        return selectedParentOptions.indexOf(r.ParentOption) >= 0
                    }).map(function(r) {
                        return r.ChildOptions
                    }).reduce(function(a, b) {
                        return a.concat(b.filter(function(v) {
                            return a.indexOf(v) < 0
                        }))
                    }, []);
                    child.hierarchyField.filterOptions(childOptions)
                })
            }
            ;
            FieldHierarchies.prototype.createHierarchyField = function(fieldBlockElement) {
                var fieldBlockType = fieldBlockElement.getAttribute(MsCrmMkt.FormHelper.formBlockTypeAttrName);
                switch (fieldBlockType) {
                case MsCrmMkt.FormHelper.fieldCheckboxType:
                    return new Hierarchy.CheckboxHierarchyField(this.logger,fieldBlockElement);
                case MsCrmMkt.FormHelper.fieldCheckboxListType:
                    return new Hierarchy.CheckboxListHierarchyField(this.logger,fieldBlockElement);
                case MsCrmMkt.FormHelper.fieldRadioButtonsType:
                    return new Hierarchy.RadioButtonsHierarchyField(this.logger,fieldBlockElement);
                case MsCrmMkt.FormHelper.fieldDropdownType:
                    return new Hierarchy.DropdownHierarchyField(this.logger,fieldBlockElement);
                default:
                    {
                        this.logger.error("FieldHierarchies.getHierarchyField: unknown form field block type [" + fieldBlockType + "]")
                    }
                }
                return null
            }
            ;
            return FieldHierarchies
        }();
        Hierarchy.FieldHierarchies = FieldHierarchies
    }
    )(Hierarchy = MsCrmMkt.Hierarchy || (MsCrmMkt.Hierarchy = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Hierarchy;
    (function(Hierarchy) {
        var HierarchyParent = function() {
            function HierarchyParent(field) {
                this.field = field;
                this.children = []
            }
            HierarchyParent.prototype.getHierarchyField = function() {
                return this.field
            }
            ;
            HierarchyParent.prototype.addChild = function(child) {
                this.children.push(child)
            }
            ;
            HierarchyParent.prototype.getChildren = function() {
                return this.children
            }
            ;
            HierarchyParent.prototype.isAnyChildRequired = function() {
                return this.children.some(function(child) {
                    return MsCrmMkt.FormHelper.isFormFieldRequired(child.fieldBlock)
                })
            }
            ;
            HierarchyParent.prototype.getAllParentOptionsInRelationships = function() {
                return this.children.map(function(child) {
                    return child.mapping.Hierarchy.Relationships.map(function(r) {
                        return r.ParentOption
                    })
                }).reduce(function(a, b) {
                    return a.concat(b.filter(function(v) {
                        return a.indexOf(v) < 0
                    }))
                }, [])
            }
            ;
            return HierarchyParent
        }();
        Hierarchy.HierarchyParent = HierarchyParent
    }
    )(Hierarchy = MsCrmMkt.Hierarchy || (MsCrmMkt.Hierarchy = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Hierarchy;
    (function(Hierarchy) {
        var RadioButtonsHierarchyField = function(_super) {
            __extends(RadioButtonsHierarchyField, _super);
            function RadioButtonsHierarchyField(logger, fieldBlock) {
                var _this = _super.call(this, logger, fieldBlock) || this;
                _this.spans = fieldBlock.querySelectorAll("span.lp-radioButton");
                _this.radioButtons = new Array(_this.spans.length);
                _this.values = new Array(_this.spans.length);
                Array.prototype.forEach.call(_this.spans, function(span, index) {
                    var radio = span.querySelector("input[type='" + MsCrmMkt.inputTypeRadio + "']");
                    _this.radioButtons[index] = radio;
                    _this.values[index] = parseInt(radio.value);
                    if (radio.checked) {
                        _this.origCheckedIndex = index
                    }
                });
                _this.setupHandler();
                return _this
            }
            RadioButtonsHierarchyField.prototype.getSelectedOptions = function() {
                for (var i = 0; i < this.radioButtons.length; i++) {
                    if (this.radioButtons[i].checked) {
                        return [this.values[i]]
                    }
                }
                return []
            }
            ;
            RadioButtonsHierarchyField.prototype.filterOptions = function(filteredOptions) {
                var anyRadioButtonChecked = false;
                var checkedButtons = this.radioButtons.filter(function(r) {
                    return r.checked
                });
                if (checkedButtons && checkedButtons.length) {
                    var checkedValue = parseInt(checkedButtons[0].value);
                    anyRadioButtonChecked = filteredOptions.indexOf(checkedValue) >= 0
                }
                for (var i = 0; i < this.spans.length; i++) {
                    var span = this.spans[i];
                    var radio = this.radioButtons[i];
                    if (filteredOptions.indexOf(this.values[i]) < 0) {
                        span.style.display = "none";
                        radio.checked = false;
                        radio.hidden = true;
                        this.hideField(radio)
                    } else {
                        if (radio.hidden && i === this.origCheckedIndex && !anyRadioButtonChecked) {
                            radio.checked = true
                        }
                        span.style.removeProperty("display");
                        radio.hidden = false;
                        this.showField(radio)
                    }
                }
                if (this.radioButtons.length > 0) {
                    this.triggerChangeEvent(this.radioButtons[0])
                }
            }
            ;
            RadioButtonsHierarchyField.prototype.setupHandler = function() {
                var _this = this;
                for (var i = 0; i < this.radioButtons.length; i++) {
                    this.radioButtons[i].addEventListener("change", function(e) {
                        _this.onOptionsChanged()
                    }, false)
                }
            }
            ;
            return RadioButtonsHierarchyField
        }(Hierarchy.HierarchyFieldBase);
        Hierarchy.RadioButtonsHierarchyField = RadioButtonsHierarchyField
    }
    )(Hierarchy = MsCrmMkt.Hierarchy || (MsCrmMkt.Hierarchy = {}))
}
)(MsCrmMkt || (MsCrmMkt = {}));
var MsCrmMkt;
(function(MsCrmMkt) {
    var Captcha = function() {
        function Captcha() {
            this.error = 0;
            this.left = "10";
            this.showInstruction = true;
            this.showMenu = true;
            this.showError = true;
            this.errorMessage = "";
            this.instructionsInside = false;
            this.inputWidth = 245;
            this.done = false;
            this.holder = "ms_captcha_holder";
            this.scriptHolder = "ms_captcha_scriptholder";
            this.count = 0;
            this.type = "visual";
            this.market = "en-us"
        }
        Captcha.prototype.getInstruction = function() {}
        ;
        Captcha.prototype.getMenu = function() {}
        ;
        Captcha.prototype.getError = function() {
            return null
        }
        ;
        Captcha.prototype.getSolution = function() {}
        ;
        Captcha.prototype.reloadHIP = function() {}
        ;
        Captcha.prototype.switchHIP = function() {}
        ;
        Captcha.prototype.clientValidation = function() {}
        ;
        Captcha.prototype.setError = function() {
            return null
        }
        ;
        Captcha.prototype.setFocus = function() {}
        ;
        Captcha.prototype.verify = function(callback, param) {}
        ;
        Captcha.prototype.instructionOutsideCallback = function(instruction) {
            this.instructionCallback(instruction)
        }
        ;
        Captcha.prototype.menuOutsideCallback = function(menu) {
            this.refreshOutsideMenu(menu)
        }
        ;
        Captcha.prototype.showErrorCallback = function(message) {
            var ele = document.getElementById("idError");
            if (ele) {
                ele.innerHTML = message
            }
        }
        ;
        Captcha.prototype.removeErrorCallback = function() {
            var ele = document.getElementById("idError");
            if (ele) {
                ele.innerHTML = ""
            }
        }
        ;
        Captcha.prototype.postLoad = function() {
            var inputId = this.setError();
            var messageText = this.getError();
            if (messageText && inputId) {
                var captchaInput = document.getElementById(inputId);
                if (captchaInput) {
                    captchaInput.focus()
                }
            }
        }
        ;
        Captcha.prototype.verifyCallback = function(solution, token, param) {
            this.clientValidation();
            if (this.error != 0) {
                return
            }
            document.getElementById("Solution").value = solution;
            document.getElementById("Token").value = token;
            document.getElementById("Type").value = this.type;
            return
        }
        ;
        Captcha.prototype.refreshOutsideMenu = function(menu) {
            for (var i = 0; i < 4; i++) {
                var ele = document.getElementById("idMenu" + i);
                if (!ele)
                    return;
                ele.innerHTML = "";
                ele.title = "";
                ele.onclick = function() {}
            }
            var itemLength = menu.length;
            if (!this.showMenu) {
                var _loop_6 = function(j) {
                    var ele = document.getElementById("idMenu" + j);
                    if (!ele)
                        return {
                            value: void 0
                        };
                    ele.innerHTML = menu[j].text;
                    ele.title = menu[j].tip;
                    var trigger = menu[j].trigger;
                    ele.onclick = function() {
                        trigger();
                        return false
                    }
                };
                for (var j = 0; j < itemLength; j++) {
                    var state_1 = _loop_6(j);
                    if (typeof state_1 === "object")
                        return state_1.value
                }
            }
        }
        ;
        Captcha.prototype.instructionCallback = function(instruction) {
            if (this.showInstruction) {
                var ins_1 = document.getElementById("idInstruction");
                if (ins_1) {
                    ins_1.innerHTML = ""
                }
                return
            }
            var ins = document.getElementById("idInstruction");
            if (ins) {
                ins.innerHTML = instruction
            }
        }
        ;
        Captcha.prototype.reloadCaptchaAndShowError = function() {
            var error = WLSPHIP0.error;
            this.reloadHIP();
            this.error = error;
            this.setError()
        }
        ;
        return Captcha
    }();
    MsCrmMkt.Captcha = Captcha
}
)(MsCrmMkt || (MsCrmMkt = {}));
var WLSPHIP0 = new MsCrmMkt.Captcha;
