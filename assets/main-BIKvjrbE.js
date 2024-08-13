var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _TypeIt_instances, empty_fn, fire_fn, move_fn, prepLoop_fn, fireItemWithContext_fn, wait_fn, attachCursor_fn, elementIsInput_fn, queueAndReturn_fn, maybeAppendPause_fn, generateTemporaryOptionQueueItems_fn, updateOptions_fn, generateQueue_fn, _buildOptions, prependHardcodedStrings_fn, setUpCursor_fn, addSplitPause_fn, type_fn, delete_fn, removeNode_fn, getPace_fn, derivedCursorPosition_get, isInput_get, shouldRenderCursor_get, allChars_get;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var aos = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e) {
      function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = { exports: {}, id: o, loaded: false };
        return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
      }
      var n = {};
      return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var i = Object.assign || function(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = arguments[t2];
          for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
        }
        return e2;
      }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
        var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e2 && (k = true), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
      }, O = function() {
        w = (0, h.default)(), j();
      }, M = function() {
        w.forEach(function(e2, t2) {
          e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
        });
      }, S = function(e2) {
        return e2 === true || "mobile" === e2 && p.default.mobile() || "phone" === e2 && p.default.phone() || "tablet" === e2 && p.default.tablet() || "function" == typeof e2 && e2() === true;
      }, _ = function(e2) {
        x = i(x, e2), w = (0, h.default)();
        var t2 = document.all && !window.atob;
        return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
          j(true);
        }) : document.addEventListener(x.startEvent, function() {
          j(true);
        }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
          (0, b.default)(w, x.once);
        }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
      };
      e.exports = { init: _, refresh: j, refreshHard: O };
    }, function(e, t) {
    }, , , , , function(e, t) {
      (function(t2) {
        function n(e2, t3, n2) {
          function o2(t4) {
            var n3 = b2, o3 = v2;
            return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
          }
          function r2(e3) {
            return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
          }
          function a2(e3) {
            var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
            return S ? j(i2, y2 - o3) : i2;
          }
          function c2(e3) {
            var n3 = e3 - w2, o3 = e3 - k2;
            return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
          }
          function f2() {
            var e3 = O();
            return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
          }
          function d2(e3) {
            return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
          }
          function l2() {
            void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
          }
          function p2() {
            return void 0 === h2 ? g2 : d2(O());
          }
          function m2() {
            var e3 = O(), n3 = c2(e3);
            if (b2 = arguments, v2 = this, w2 = e3, n3) {
              if (void 0 === h2) return r2(w2);
              if (S) return h2 = setTimeout(f2, t3), o2(w2);
            }
            return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
          }
          var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
          if ("function" != typeof e2) throw new TypeError(s);
          return t3 = u(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
        }
        function o(e2, t3, o2) {
          var r2 = true, a2 = true;
          if ("function" != typeof e2) throw new TypeError(s);
          return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, { leading: r2, maxWait: t3, trailing: a2 });
        }
        function i(e2) {
          var t3 = "undefined" == typeof e2 ? "undefined" : c(e2);
          return !!e2 && ("object" == t3 || "function" == t3);
        }
        function r(e2) {
          return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : c(e2));
        }
        function a(e2) {
          return "symbol" == ("undefined" == typeof e2 ? "undefined" : c(e2)) || r(e2) && k.call(e2) == d;
        }
        function u(e2) {
          if ("number" == typeof e2) return e2;
          if (a(e2)) return f;
          if (i(e2)) {
            var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
            e2 = i(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
          e2 = e2.replace(l, "");
          var n2 = m.test(e2);
          return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
        }
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t2 ? "undefined" : c(t2)) && t2 && t2.Object === Object && t2, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
          return h.Date.now();
        };
        e.exports = o;
      }).call(t, /* @__PURE__ */ function() {
        return this;
      }());
    }, function(e, t) {
      (function(t2) {
        function n(e2, t3, n2) {
          function i2(t4) {
            var n3 = b2, o2 = v2;
            return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
          }
          function r2(e3) {
            return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
          }
          function u2(e3) {
            var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
            return S ? x(i3, y2 - o2) : i3;
          }
          function s2(e3) {
            var n3 = e3 - w2, o2 = e3 - O;
            return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
          }
          function f2() {
            var e3 = j();
            return s2(e3) ? d2(e3) : void (h2 = setTimeout(f2, u2(e3)));
          }
          function d2(e3) {
            return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
          }
          function l2() {
            void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
          }
          function p2() {
            return void 0 === h2 ? g2 : d2(j());
          }
          function m2() {
            var e3 = j(), n3 = s2(e3);
            if (b2 = arguments, v2 = this, w2 = e3, n3) {
              if (void 0 === h2) return r2(w2);
              if (S) return h2 = setTimeout(f2, t3), i2(w2);
            }
            return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
          }
          var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
          if ("function" != typeof e2) throw new TypeError(c);
          return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
        }
        function o(e2) {
          var t3 = "undefined" == typeof e2 ? "undefined" : u(e2);
          return !!e2 && ("object" == t3 || "function" == t3);
        }
        function i(e2) {
          return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : u(e2));
        }
        function r(e2) {
          return "symbol" == ("undefined" == typeof e2 ? "undefined" : u(e2)) || i(e2) && w.call(e2) == f;
        }
        function a(e2) {
          if ("number" == typeof e2) return e2;
          if (r(e2)) return s;
          if (o(e2)) {
            var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
            e2 = o(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
          e2 = e2.replace(d, "");
          var n2 = p.test(e2);
          return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s : +e2;
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t2 ? "undefined" : u(t2)) && t2 && t2.Object === Object && t2, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
          return g.Date.now();
        };
        e.exports = n;
      }).call(t, /* @__PURE__ */ function() {
        return this;
      }());
    }, function(e, t) {
      function n(e2) {
        var t2 = void 0, o2 = void 0;
        for (t2 = 0; t2 < e2.length; t2 += 1) {
          if (o2 = e2[t2], o2.dataset && o2.dataset.aos) return true;
          if (o2.children && n(o2.children)) return true;
        }
        return false;
      }
      function o() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      function i() {
        return !!o();
      }
      function r(e2, t2) {
        var n2 = window.document, i2 = o(), r2 = new i2(a);
        u = t2, r2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
      }
      function a(e2) {
        e2 && e2.forEach(function(e3) {
          var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
          if (n(i2)) return u();
        });
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var u = function() {
      };
      t.default = { isSupported: i, ready: r };
    }, function(e, t) {
      function n(e2, t2) {
        if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = /* @__PURE__ */ function() {
        function e2(e3, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
        }
        return function(t2, n2, o2) {
          return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
        };
      }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
        function e2() {
          n(this, e2);
        }
        return i(e2, [{ key: "phone", value: function() {
          var e3 = o();
          return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
        } }, { key: "mobile", value: function() {
          var e3 = o();
          return !(!u.test(e3) && !c.test(e3.substr(0, 4)));
        } }, { key: "tablet", value: function() {
          return this.mobile() && !this.phone();
        } }]), e2;
      }();
      t.default = new s();
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2, t2, n2) {
        var o2 = e2.node.getAttribute("data-aos-once");
        t2 > e2.position ? e2.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n2 && "true" !== o2) && e2.node.classList.remove("aos-animate");
      }, o = function(e2, t2) {
        var o2 = window.pageYOffset, i = window.innerHeight;
        e2.forEach(function(e3, r) {
          n(e3, i + o2, t2);
        });
      };
      t.default = o;
    }, function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(12), r = o(i), a = function(e2, t2) {
        return e2.forEach(function(e3, n2) {
          e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
        }), e2;
      };
      t.default = a;
    }, function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(13), r = o(i), a = function(e2, t2) {
        var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = { offset: e2.getAttribute("data-aos-offset"), anchor: e2.getAttribute("data-aos-anchor"), anchorPlacement: e2.getAttribute("data-aos-anchor-placement") };
        switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            n2 += e2.offsetHeight / 2;
            break;
          case "bottom-bottom":
            n2 += e2.offsetHeight;
            break;
          case "top-center":
            n2 += i2 / 2;
            break;
          case "bottom-center":
            n2 += i2 / 2 + e2.offsetHeight;
            break;
          case "center-center":
            n2 += i2 / 2 + e2.offsetHeight / 2;
            break;
          case "top-top":
            n2 += i2;
            break;
          case "bottom-top":
            n2 += e2.offsetHeight + i2;
            break;
          case "center-top":
            n2 += e2.offsetHeight / 2 + i2;
        }
        return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
      };
      t.default = a;
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2) {
        for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); ) t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
        return { top: n2, left: t2 };
      };
      t.default = n;
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2) {
        return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
          return { node: e3 };
        });
      };
      t.default = n;
    }]);
  });
})(aos);
var aosExports = aos.exports;
const AOS = /* @__PURE__ */ getDefaultExportFromCjs(aosExports);
AOS.init();
const isArray = (thing) => Array.isArray(thing);
const asArray = (value) => isArray(value) ? value : [value];
let Queue = function(initialItems) {
  let add = function(steps) {
    asArray(steps).forEach((step) => {
      var _a;
      return _q.set(Symbol((_a = step.char) == null ? void 0 : _a.innerText), buildQueueItem({ ...step }));
    });
    return this;
  };
  let getTypeable = () => rawValues().filter((value) => value.typeable);
  let set = function(index, item) {
    let keys = [..._q.keys()];
    _q.set(keys[index], buildQueueItem(item));
  };
  let buildQueueItem = (queueItem) => {
    queueItem.shouldPauseCursor = function() {
      return Boolean(this.typeable || this.cursorable || this.deletable);
    };
    return queueItem;
  };
  let reset = function() {
    _q.forEach((item) => delete item.done);
  };
  let wipe = function() {
    _q = /* @__PURE__ */ new Map();
    add(initialItems);
  };
  let getQueue = () => _q;
  let rawValues = () => Array.from(_q.values());
  let destroy = (key) => _q.delete(key);
  let getItems = (all = false) => all ? rawValues() : rawValues().filter((i) => !i.done);
  let done = (key, shouldDestroy = false) => shouldDestroy ? _q.delete(key) : _q.get(key).done = true;
  let _q = /* @__PURE__ */ new Map();
  add(initialItems);
  return {
    add,
    set,
    wipe,
    done,
    reset,
    destroy,
    getItems,
    getQueue,
    getTypeable
  };
};
const DATA_ATTRIBUTE = "data-typeit-id";
const CURSOR_CLASS = "ti-cursor";
const END = "END";
const DEFAULT_STATUSES = {
  started: false,
  completed: false,
  frozen: false,
  destroyed: false
};
const DEFAULT_OPTIONS = {
  breakLines: true,
  cursor: {
    autoPause: true,
    autoPauseDelay: 500,
    animation: {
      frames: [0, 0, 1].map((n) => {
        return { opacity: n };
      }),
      options: {
        iterations: Infinity,
        easing: "steps(2, start)",
        fill: "forwards"
      }
    }
  },
  cursorChar: "|",
  cursorSpeed: 1e3,
  deleteSpeed: null,
  html: true,
  lifeLike: true,
  loop: false,
  loopDelay: 750,
  nextStringDelay: 750,
  speed: 100,
  startDelay: 250,
  startDelete: false,
  strings: [],
  waitUntilVisible: false,
  beforeString: () => {
  },
  afterString: () => {
  },
  beforeStep: () => {
  },
  afterStep: () => {
  },
  afterComplete: () => {
  }
};
const PLACEHOLDER_CSS = `[${DATA_ATTRIBUTE}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;
const createElement = (el) => document.createElement(el);
const createTextNode = (content) => document.createTextNode(content);
const appendStyleBlock = (styles, id = "") => {
  let styleBlock = createElement("style");
  styleBlock.id = id;
  styleBlock.appendChild(createTextNode(styles));
  document.head.appendChild(styleBlock);
};
const calculateDelay = (delayArg) => {
  if (!isArray(delayArg)) {
    delayArg = [delayArg / 2, delayArg / 2];
  }
  return delayArg;
};
const randomInRange = (value, range2) => {
  return Math.abs(
    Math.random() * (value + range2 - (value - range2)) + (value - range2)
  );
};
let range = (val) => val / 2;
function calculatePace(options) {
  let { speed, deleteSpeed, lifeLike } = options;
  deleteSpeed = deleteSpeed !== null ? deleteSpeed : speed / 3;
  return lifeLike ? [
    randomInRange(speed, range(speed)),
    randomInRange(deleteSpeed, range(deleteSpeed))
  ] : [speed, deleteSpeed];
}
const toArray = (val) => Array.from(val);
let expandTextNodes = (element) => {
  [...element.childNodes].forEach((child) => {
    if (child.nodeValue) {
      [...child.nodeValue].forEach((c) => {
        child.parentNode.insertBefore(createTextNode(c), child);
      });
      child.remove();
      return;
    }
    expandTextNodes(child);
  });
  return element;
};
const getParsedBody = (content) => {
  let doc = document.implementation.createHTMLDocument();
  doc.body.innerHTML = content;
  return expandTextNodes(doc.body);
};
function walkElementNodes(element, shouldReverse = false, shouldIncludeCursor = false) {
  let cursor = element.querySelector(`.${CURSOR_CLASS}`);
  let walker = document.createTreeWalker(element, NodeFilter.SHOW_ALL, {
    acceptNode: (node) => {
      var _a, _b;
      if (cursor && shouldIncludeCursor) {
        if ((_a = node.classList) == null ? void 0 : _a.contains(CURSOR_CLASS)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        if (cursor.contains(node)) {
          return NodeFilter.FILTER_REJECT;
        }
      }
      return ((_b = node.classList) == null ? void 0 : _b.contains(CURSOR_CLASS)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  let nextNode;
  let nodes = [];
  while (nextNode = walker.nextNode()) {
    if (!nextNode.originalParent) {
      nextNode.originalParent = nextNode.parentNode;
    }
    nodes.push(nextNode);
  }
  return shouldReverse ? nodes.reverse() : nodes;
}
function chunkStringAsHtml(string) {
  return walkElementNodes(getParsedBody(string));
}
function maybeChunkStringAsHtml(str, asHtml = true) {
  return asHtml ? chunkStringAsHtml(str) : toArray(str).map(createTextNode);
}
const cleanUpSkipped = ({
  index,
  newIndex,
  queueItems,
  cleanUp
}) => {
  for (let i = index + 1; i < newIndex + 1; i++) {
    cleanUp(queueItems[i][0]);
  }
};
const isNumber = (value) => Number.isInteger(value);
const countStepsToSelector = ({
  queueItems,
  selector,
  cursorPosition,
  to
}) => {
  if (isNumber(selector)) {
    return selector * -1;
  }
  let isMovingToEnd = new RegExp(END, "i").test(to);
  let selectorIndex = selector ? [...queueItems].reverse().findIndex(({ char }) => {
    let parentElement = char.parentElement;
    let parentMatches = parentElement.matches(selector);
    if (isMovingToEnd && parentMatches) {
      return true;
    }
    return parentMatches && parentElement.firstChild.isSameNode(char);
  }) : -1;
  if (selectorIndex < 0) {
    selectorIndex = isMovingToEnd ? 0 : queueItems.length - 1;
  }
  let offset = isMovingToEnd ? 0 : 1;
  return selectorIndex - cursorPosition + offset;
};
const destroyTimeouts = (timeouts) => {
  timeouts.forEach(clearTimeout);
  return [];
};
const duplicate = (value, times) => new Array(times).fill(value);
let beforePaint = (cb) => {
  return new Promise((resolve) => {
    requestAnimationFrame(async () => {
      resolve(await cb());
    });
  });
};
let getAnimationFromElement = (element) => {
  return element == null ? void 0 : element.getAnimations().find((animation) => {
    return animation.id === element.dataset.tiAnimationId;
  });
};
let setCursorAnimation = ({
  cursor,
  frames,
  options
}) => {
  let animation = cursor.animate(frames, options);
  animation.pause();
  animation.id = cursor.dataset.tiAnimationId;
  beforePaint(() => {
    beforePaint(() => {
      animation.play();
    });
  });
  return animation;
};
let rebuildCursorAnimation = ({
  cursor,
  options,
  cursorOptions
}) => {
  if (!cursor || !cursorOptions) return;
  let animation = getAnimationFromElement(cursor);
  let oldCurrentTime;
  if (animation) {
    options.delay = animation.effect.getComputedTiming().delay;
    oldCurrentTime = animation.currentTime;
    animation.cancel();
  }
  let newAnimation = setCursorAnimation({
    cursor,
    frames: cursorOptions.animation.frames,
    options
  });
  if (oldCurrentTime) {
    newAnimation.currentTime = oldCurrentTime;
  }
  return newAnimation;
};
let execute = (queueItem) => {
  var _a;
  return (_a = queueItem.func) == null ? void 0 : _a.call(null);
};
let fireItem = async ({
  index,
  queueItems,
  wait: wait2,
  cursor,
  cursorOptions
}) => {
  let queueItem = queueItems[index][1];
  let instantQueue = [];
  let tempIndex = index;
  let futureItem = queueItem;
  let shouldBeGrouped = () => futureItem && !futureItem.delay;
  let shouldPauseCursor = queueItem.shouldPauseCursor() && cursorOptions.autoPause;
  while (shouldBeGrouped()) {
    instantQueue.push(futureItem);
    shouldBeGrouped() && tempIndex++;
    futureItem = queueItems[tempIndex] ? queueItems[tempIndex][1] : null;
  }
  if (instantQueue.length) {
    await beforePaint(async () => {
      for (let q of instantQueue) {
        await execute(q);
      }
    });
    return tempIndex - 1;
  }
  let animation = getAnimationFromElement(cursor);
  let options;
  if (animation) {
    options = {
      ...animation.effect.getComputedTiming(),
      delay: shouldPauseCursor ? cursorOptions.autoPauseDelay : 0
    };
  }
  await wait2(async () => {
    if (animation && shouldPauseCursor) {
      animation.cancel();
    }
    await beforePaint(() => {
      execute(queueItem);
    });
  }, queueItem.delay);
  await rebuildCursorAnimation({
    cursor,
    options,
    cursorOptions
  });
  return index;
};
const fireWhenVisible = (element, func) => {
  let observer = new IntersectionObserver(
    (entries, observer2) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          func();
          observer2.unobserve(element);
        }
      });
    },
    { threshold: 1 }
  );
  observer.observe(element);
};
const generateHash = () => Math.random().toString().substring(2, 9);
const isInput = (el) => {
  return "value" in el;
};
let getAllChars = (element) => {
  if (isInput(element)) {
    return toArray(element.value);
  }
  return walkElementNodes(element, true).filter(
    (c) => !(c.childNodes.length > 0)
  );
};
let handleFunctionalArg = (arg) => {
  return typeof arg === "function" ? arg() : arg;
};
let select = (selector, element = document, all = false) => {
  return element[`querySelector${all ? "All" : ""}`](selector);
};
let isBodyElement = (node) => /body/i.test(node == null ? void 0 : node.tagName);
let insertIntoElement = (originalTarget, character) => {
  if (isInput(originalTarget)) {
    originalTarget.value = `${originalTarget.value}${character.textContent}`;
    return;
  }
  character.innerHTML = "";
  let target = isBodyElement(character.originalParent) ? originalTarget : (
    // If we add one-off fresh elements, there will be no
    // "originalParent", so always fall back to the default target.
    character.originalParent || originalTarget
  );
  target.insertBefore(
    character,
    select("." + CURSOR_CLASS, target) || null
  );
};
const isNonVoidElement = (el) => /<(.+)>(.*?)<\/(.+)>/.test(el.outerHTML);
const merge = (originalObj, newObj) => Object.assign({}, originalObj, newObj);
let processCursorOptions = (cursorOptions) => {
  var _a, _b;
  if (typeof cursorOptions === "object") {
    let newOptions = {};
    let { frames: defaultFrames, options: defaultOptions } = DEFAULT_OPTIONS.cursor.animation;
    newOptions.animation = cursorOptions.animation || {};
    newOptions.animation.frames = ((_a = cursorOptions.animation) == null ? void 0 : _a.frames) || defaultFrames;
    newOptions.animation.options = merge(
      defaultOptions,
      ((_b = cursorOptions.animation) == null ? void 0 : _b.options) || {}
    );
    newOptions.autoPause = cursorOptions.autoPause ?? DEFAULT_OPTIONS.cursor.autoPause;
    newOptions.autoPauseDelay = cursorOptions.autoPauseDelay || DEFAULT_OPTIONS.cursor.autoPauseDelay;
    return newOptions;
  }
  if (cursorOptions === true) {
    return DEFAULT_OPTIONS.cursor;
  }
  return cursorOptions;
};
const removeNode = (node, rootElement) => {
  if (!node) return;
  let nodeParent = node.parentNode;
  let nodeToRemove = nodeParent.childNodes.length > 1 || nodeParent.isSameNode(rootElement) ? (
    // This parent still needs to exist.
    node
  ) : (
    // There's nothing else in there, so just delete the entire thing.
    // By doing this, we clean up markup as we go along.
    nodeParent
  );
  nodeToRemove.remove();
};
const repositionCursor = (element, allChars, newCursorPosition) => {
  let nodeToInsertBefore = allChars[newCursorPosition - 1];
  let cursor = select(`.${CURSOR_CLASS}`, element);
  element = (nodeToInsertBefore == null ? void 0 : nodeToInsertBefore.parentNode) || element;
  element.insertBefore(cursor, nodeToInsertBefore || null);
};
function selectorToElement(thing) {
  return typeof thing === "string" ? select(thing) : thing;
}
let cursorFontStyles = {
  "font-family": "",
  "font-weight": "",
  "font-size": "",
  "font-style": "",
  "line-height": "",
  color: "",
  transform: "translateX(-.125em)"
};
let setCursorStyles = (id, element) => {
  let rootSelector = `[${DATA_ATTRIBUTE}='${id}']`;
  let cursorSelector = `${rootSelector} .${CURSOR_CLASS}`;
  let computedStyles = getComputedStyle(element);
  let customProperties = Object.entries(cursorFontStyles).reduce(
    (accumulator, [item, value]) => {
      return `${accumulator} ${item}: var(--ti-cursor-${item}, ${value || computedStyles[item]});`;
    },
    ""
  );
  appendStyleBlock(
    `${cursorSelector} { display: inline-block; width: 0; ${customProperties} }`,
    id
  );
};
function splitOnBreak(str) {
  return str.replace(/<!--(.+?)-->/g, "").trim().split(/<br(?:\s*?)(?:\/)?>/);
}
let updateCursorPosition = (steps, cursorPosition, printedCharacters) => {
  return Math.min(
    Math.max(cursorPosition + steps, 0),
    printedCharacters.length
  );
};
let wait = (callback, delay, timeouts) => {
  return new Promise((resolve) => {
    let cb = async () => {
      await callback();
      resolve();
    };
    timeouts.push(setTimeout(cb, delay || 0));
  });
};
class TypeIt {
  constructor(element, options = {}) {
    __privateAdd(this, _TypeIt_instances);
    __publicField(this, "element");
    __publicField(this, "timeouts");
    __publicField(this, "cursorPosition");
    __publicField(this, "predictedCursorPosition");
    __publicField(this, "statuses", {
      started: false,
      completed: false,
      frozen: false,
      destroyed: false
    });
    __publicField(this, "opts");
    __publicField(this, "id");
    __publicField(this, "queue");
    __publicField(this, "cursor");
    __publicField(this, "unfreeze", () => {
    });
    __publicField(this, "is", function(key) {
      return this.statuses[key];
    });
    __privateAdd(this, _buildOptions, (options) => {
      options.cursor = processCursorOptions(
        options.cursor ?? DEFAULT_OPTIONS.cursor
      );
      this.opts.strings = __privateMethod(this, _TypeIt_instances, prependHardcodedStrings_fn).call(this, asArray(this.opts.strings));
      this.opts = merge(this.opts, {
        html: !__privateGet(this, _TypeIt_instances, isInput_get) && this.opts.html,
        nextStringDelay: calculateDelay(this.opts.nextStringDelay),
        loopDelay: calculateDelay(this.opts.loopDelay)
      });
    });
    this.opts = merge(DEFAULT_OPTIONS, options);
    this.element = selectorToElement(element);
    this.timeouts = [];
    this.cursorPosition = 0;
    this.unfreeze = () => {
    };
    this.predictedCursorPosition = null;
    this.statuses = merge({}, DEFAULT_STATUSES);
    this.id = generateHash();
    this.queue = Queue([{ delay: this.opts.startDelay }]);
    __privateGet(this, _buildOptions).call(this, options);
    this.cursor = __privateMethod(this, _TypeIt_instances, setUpCursor_fn).call(this);
    this.element.dataset.typeitId = this.id;
    appendStyleBlock(PLACEHOLDER_CSS);
    if (this.opts.strings.length) {
      __privateMethod(this, _TypeIt_instances, generateQueue_fn).call(this);
    }
  }
  /**
   * Can only be called once.
   */
  go() {
    if (this.statuses.started) {
      return this;
    }
    __privateMethod(this, _TypeIt_instances, attachCursor_fn).call(this);
    if (!this.opts.waitUntilVisible) {
      __privateMethod(this, _TypeIt_instances, fire_fn).call(this);
      return this;
    }
    fireWhenVisible(this.element, __privateMethod(this, _TypeIt_instances, fire_fn).bind(this));
    return this;
  }
  destroy(shouldRemoveCursor = true) {
    this.timeouts = destroyTimeouts(this.timeouts);
    handleFunctionalArg(shouldRemoveCursor) && this.cursor && __privateMethod(this, _TypeIt_instances, removeNode_fn).call(this, this.cursor);
    this.statuses.destroyed = true;
  }
  reset(rebuild) {
    !this.is("destroyed") && this.destroy();
    if (rebuild) {
      this.queue.wipe();
      rebuild(this);
    } else {
      this.queue.reset();
    }
    this.cursorPosition = 0;
    for (let property in this.statuses) {
      this.statuses[property] = false;
    }
    this.element[__privateMethod(this, _TypeIt_instances, elementIsInput_fn).call(this) ? "value" : "innerHTML"] = "";
    return this;
  }
  type(string, actionOpts = {}) {
    string = handleFunctionalArg(string);
    let { instant } = actionOpts;
    let bookEndQueueItems = __privateMethod(this, _TypeIt_instances, generateTemporaryOptionQueueItems_fn).call(this, actionOpts);
    let chars = maybeChunkStringAsHtml(string, this.opts.html);
    let charsAsQueueItems = chars.map((char) => {
      return {
        func: () => __privateMethod(this, _TypeIt_instances, type_fn).call(this, char),
        char,
        delay: instant || isNonVoidElement(char) ? 0 : __privateMethod(this, _TypeIt_instances, getPace_fn).call(this),
        typeable: char.nodeType === Node.TEXT_NODE
      };
    });
    let itemsToQueue = [
      bookEndQueueItems[0],
      { func: async () => await this.opts.beforeString(string, this) },
      ...charsAsQueueItems,
      { func: async () => await this.opts.afterString(string, this) },
      bookEndQueueItems[1]
    ];
    return __privateMethod(this, _TypeIt_instances, queueAndReturn_fn).call(this, itemsToQueue, actionOpts);
  }
  break(actionOpts = {}) {
    return __privateMethod(this, _TypeIt_instances, queueAndReturn_fn).call(this, {
      func: () => __privateMethod(this, _TypeIt_instances, type_fn).call(this, createElement("BR")),
      typeable: true
    }, actionOpts);
  }
  move(movementArg, actionOpts = {}) {
    movementArg = handleFunctionalArg(movementArg);
    let bookEndQueueItems = __privateMethod(this, _TypeIt_instances, generateTemporaryOptionQueueItems_fn).call(this, actionOpts);
    let { instant, to } = actionOpts;
    let numberOfSteps = countStepsToSelector({
      queueItems: this.queue.getTypeable(),
      selector: movementArg === null ? "" : movementArg,
      to,
      cursorPosition: __privateGet(this, _TypeIt_instances, derivedCursorPosition_get)
    });
    let directionalStep = numberOfSteps < 0 ? -1 : 1;
    this.predictedCursorPosition = __privateGet(this, _TypeIt_instances, derivedCursorPosition_get) + numberOfSteps;
    return __privateMethod(this, _TypeIt_instances, queueAndReturn_fn).call(this, [
      bookEndQueueItems[0],
      ...duplicate(
        {
          func: () => __privateMethod(this, _TypeIt_instances, move_fn).call(this, directionalStep),
          delay: instant ? 0 : __privateMethod(this, _TypeIt_instances, getPace_fn).call(this),
          cursorable: true
        },
        Math.abs(numberOfSteps)
      ),
      bookEndQueueItems[1]
    ], actionOpts);
  }
  exec(func, actionOpts = {}) {
    let bookEndQueueItems = __privateMethod(this, _TypeIt_instances, generateTemporaryOptionQueueItems_fn).call(this, actionOpts);
    return __privateMethod(this, _TypeIt_instances, queueAndReturn_fn).call(this, [bookEndQueueItems[0], { func: () => func(this) }, bookEndQueueItems[1]], actionOpts);
  }
  options(opts, actionOpts = {}) {
    opts = handleFunctionalArg(opts);
    __privateMethod(this, _TypeIt_instances, updateOptions_fn).call(this, opts);
    return __privateMethod(this, _TypeIt_instances, queueAndReturn_fn).call(this, {}, actionOpts);
  }
  pause(milliseconds, actionOpts = {}) {
    return __privateMethod(this, _TypeIt_instances, queueAndReturn_fn).call(this, { delay: handleFunctionalArg(milliseconds) }, actionOpts);
  }
  delete(numCharacters = null, actionOpts = {}) {
    numCharacters = handleFunctionalArg(numCharacters);
    let bookEndQueueItems = __privateMethod(this, _TypeIt_instances, generateTemporaryOptionQueueItems_fn).call(this, actionOpts);
    let num = numCharacters;
    let { instant, to } = actionOpts;
    let typeableQueueItems = this.queue.getTypeable();
    let rounds = (() => {
      if (num === null) {
        return typeableQueueItems.length;
      }
      if (isNumber(num)) {
        return num;
      }
      return countStepsToSelector({
        queueItems: typeableQueueItems,
        selector: num,
        cursorPosition: __privateGet(this, _TypeIt_instances, derivedCursorPosition_get),
        to
      });
    })();
    return __privateMethod(this, _TypeIt_instances, queueAndReturn_fn).call(this, [
      bookEndQueueItems[0],
      ...duplicate(
        {
          func: __privateMethod(this, _TypeIt_instances, delete_fn).bind(this),
          delay: instant ? 0 : __privateMethod(this, _TypeIt_instances, getPace_fn).call(this, 1),
          deletable: true
        },
        rounds
      ),
      bookEndQueueItems[1]
    ], actionOpts);
  }
  freeze() {
    this.statuses.frozen = true;
  }
  /**
   * Like `.go()`, but more... "off the grid."
   *
   * - won't trigger `afterComplete` callback
   * - items won't be replayed after `.reset()`
   *
   * When called, all non-done items will be "flushed" --
   * that is, executed, but not remembered.
   */
  flush(cb = () => {
  }) {
    __privateMethod(this, _TypeIt_instances, attachCursor_fn).call(this);
    __privateMethod(this, _TypeIt_instances, fire_fn).call(this, false).then(cb);
    return this;
  }
  getQueue() {
    return this.queue;
  }
  getOptions() {
    return this.opts;
  }
  updateOptions(options) {
    return __privateMethod(this, _TypeIt_instances, updateOptions_fn).call(this, options);
  }
  getElement() {
    return this.element;
  }
  empty(actionOpts = {}) {
    return __privateMethod(this, _TypeIt_instances, queueAndReturn_fn).call(this, { func: __privateMethod(this, _TypeIt_instances, empty_fn).bind(this) }, actionOpts);
  }
}
_TypeIt_instances = new WeakSet();
empty_fn = async function() {
  if (__privateMethod(this, _TypeIt_instances, elementIsInput_fn).call(this)) {
    this.element.value = "";
    return;
  }
  __privateGet(this, _TypeIt_instances, allChars_get).forEach(__privateMethod(this, _TypeIt_instances, removeNode_fn).bind(this));
  return;
};
fire_fn = async function(remember = true) {
  this.statuses.started = true;
  let cleanUp = (qKey) => {
    this.queue.done(qKey, !remember);
  };
  try {
    let queueItems = [...this.queue.getQueue()];
    for (let index = 0; index < queueItems.length; index++) {
      let [queueKey, queueItem] = queueItems[index];
      if (queueItem.done) continue;
      if (!queueItem.deletable || queueItem.deletable && __privateGet(this, _TypeIt_instances, allChars_get).length) {
        let newIndex = await __privateMethod(this, _TypeIt_instances, fireItemWithContext_fn).call(this, index, queueItems);
        cleanUpSkipped({
          index,
          newIndex,
          queueItems,
          cleanUp
        });
        index = newIndex;
      }
      cleanUp(queueKey);
    }
    if (!remember) {
      return this;
    }
    this.statuses.completed = true;
    await this.opts.afterComplete(this);
    if (!this.opts.loop) {
      throw "";
    }
    let delay = this.opts.loopDelay;
    __privateMethod(this, _TypeIt_instances, wait_fn).call(this, async () => {
      await __privateMethod(this, _TypeIt_instances, prepLoop_fn).call(this, delay[0]);
      __privateMethod(this, _TypeIt_instances, fire_fn).call(this);
    }, delay[1]);
  } catch (e) {
  }
  return this;
};
move_fn = async function(step) {
  this.cursorPosition = updateCursorPosition(
    step,
    this.cursorPosition,
    __privateGet(this, _TypeIt_instances, allChars_get)
  );
  repositionCursor(this.element, __privateGet(this, _TypeIt_instances, allChars_get), this.cursorPosition);
};
prepLoop_fn = async function(delay) {
  let derivedCursorPosition = __privateGet(this, _TypeIt_instances, derivedCursorPosition_get);
  derivedCursorPosition && await __privateMethod(this, _TypeIt_instances, move_fn).call(this, { value: derivedCursorPosition });
  let queueItems = __privateGet(this, _TypeIt_instances, allChars_get).map((c) => {
    return [
      Symbol(),
      {
        func: __privateMethod(this, _TypeIt_instances, delete_fn).bind(this),
        delay: __privateMethod(this, _TypeIt_instances, getPace_fn).call(this, 1),
        deletable: true,
        shouldPauseCursor: () => true
      }
    ];
  });
  for (let index = 0; index < queueItems.length; index++) {
    await __privateMethod(this, _TypeIt_instances, fireItemWithContext_fn).call(this, index, queueItems);
  }
  this.queue.reset();
  this.queue.set(0, { delay });
};
fireItemWithContext_fn = function(index, queueItems) {
  return fireItem({
    index,
    queueItems,
    wait: __privateMethod(this, _TypeIt_instances, wait_fn).bind(this),
    cursor: this.cursor,
    cursorOptions: this.opts.cursor
  });
};
wait_fn = async function(callback, delay, silent = false) {
  if (this.statuses.frozen) {
    await new Promise((resolve) => {
      this.unfreeze = () => {
        this.statuses.frozen = false;
        resolve();
      };
    });
  }
  silent || await this.opts.beforeStep(this);
  await wait(callback, delay, this.timeouts);
  silent || await this.opts.afterStep(this);
};
attachCursor_fn = async function() {
  !__privateMethod(this, _TypeIt_instances, elementIsInput_fn).call(this) && this.cursor && this.element.appendChild(this.cursor);
  if (__privateGet(this, _TypeIt_instances, shouldRenderCursor_get)) {
    setCursorStyles(this.id, this.element);
    this.cursor.dataset.tiAnimationId = this.id;
    let { animation } = this.opts.cursor;
    let { frames, options } = animation;
    setCursorAnimation({
      frames,
      cursor: this.cursor,
      options: {
        duration: this.opts.cursorSpeed,
        ...options
      }
    });
  }
};
elementIsInput_fn = function() {
  return isInput(this.element);
};
queueAndReturn_fn = function(steps, opts) {
  this.queue.add(steps);
  __privateMethod(this, _TypeIt_instances, maybeAppendPause_fn).call(this, opts);
  return this;
};
maybeAppendPause_fn = function(opts = {}) {
  let delay = opts.delay;
  delay && this.queue.add({ delay });
};
generateTemporaryOptionQueueItems_fn = function(newOptions = {}) {
  return [
    { func: () => __privateMethod(this, _TypeIt_instances, updateOptions_fn).call(this, newOptions) },
    { func: () => __privateMethod(this, _TypeIt_instances, updateOptions_fn).call(this, this.opts) }
  ];
};
updateOptions_fn = async function(opts) {
  this.opts = merge(this.opts, opts);
};
/**
 * Based on provided strings, generate a TypeIt queue
 * to be fired for each character in the string.
 */
generateQueue_fn = function() {
  let strings = this.opts.strings.filter((string) => !!string);
  strings.forEach((string, index) => {
    this.type(string);
    if (index + 1 === strings.length) {
      return;
    }
    let splitItems = this.opts.breakLines ? [{ func: () => __privateMethod(this, _TypeIt_instances, type_fn).call(this, createElement("BR")), typeable: true }] : duplicate(
      {
        func: __privateMethod(this, _TypeIt_instances, delete_fn).bind(this),
        delay: __privateMethod(this, _TypeIt_instances, getPace_fn).call(this, 1)
      },
      this.queue.getTypeable().length
    );
    __privateMethod(this, _TypeIt_instances, addSplitPause_fn).call(this, splitItems);
  });
};
_buildOptions = new WeakMap();
prependHardcodedStrings_fn = function(strings) {
  let existingMarkup = this.element.innerHTML;
  if (!existingMarkup) {
    return strings;
  }
  this.element.innerHTML = "";
  if (this.opts.startDelete) {
    this.element.innerHTML = existingMarkup;
    expandTextNodes(this.element);
    __privateMethod(this, _TypeIt_instances, addSplitPause_fn).call(this, duplicate(
      {
        func: __privateMethod(this, _TypeIt_instances, delete_fn).bind(this),
        delay: __privateMethod(this, _TypeIt_instances, getPace_fn).call(this, 1),
        deletable: true
      },
      __privateGet(this, _TypeIt_instances, allChars_get).length
    ));
    return strings;
  }
  return splitOnBreak(existingMarkup).concat(strings);
};
/**
 * Provided it's a non-form element and the options is provided,
 * set up the cursor element for the animation.
 */
setUpCursor_fn = function() {
  if (__privateGet(this, _TypeIt_instances, isInput_get)) {
    return null;
  }
  let cursor = createElement("span");
  cursor.className = CURSOR_CLASS;
  if (!__privateGet(this, _TypeIt_instances, shouldRenderCursor_get)) {
    cursor.style.visibility = "hidden";
    return cursor;
  }
  cursor.innerHTML = getParsedBody(this.opts.cursorChar).innerHTML;
  return cursor;
};
addSplitPause_fn = function(items) {
  let delay = this.opts.nextStringDelay;
  this.queue.add([{ delay: delay[0] }, ...items, { delay: delay[1] }]);
};
type_fn = function(char) {
  insertIntoElement(this.element, char);
};
delete_fn = function() {
  if (!__privateGet(this, _TypeIt_instances, allChars_get).length) return;
  if (__privateGet(this, _TypeIt_instances, isInput_get)) {
    this.element.value = this.element.value.slice(0, -1);
  } else {
    __privateMethod(this, _TypeIt_instances, removeNode_fn).call(this, __privateGet(this, _TypeIt_instances, allChars_get)[this.cursorPosition]);
  }
};
removeNode_fn = function(node) {
  removeNode(node, this.element);
};
getPace_fn = function(index = 0) {
  return calculatePace(this.opts)[index];
};
derivedCursorPosition_get = function() {
  return this.predictedCursorPosition ?? this.cursorPosition;
};
isInput_get = function() {
  return isInput(this.element);
};
shouldRenderCursor_get = function() {
  return !!this.opts.cursor && !__privateGet(this, _TypeIt_instances, isInput_get);
};
allChars_get = function() {
  return getAllChars(this.element);
};
const subtitle = new TypeIt("#mainSubTitle", {
  speed: 50,
  waitUntilVisible: true,
  afterComplete: () => {
    subtitle.destroy();
  }
}).pause(1e3).type("Por: ").pause(400).type("Luis Felipe Linares Perdomo").pause(100).type(".").pause(500);
const title = new TypeIt("#mainTitle", {
  speed: 100,
  waitUntilVisible: true,
  afterComplete: async () => {
    subtitle.go();
    title.destroy();
  }
}).type("Metricas", { delay: 300 }).delete(7).type("étricas ").pause(300).type("de calidad de hardware").pause(500).delete(8).type("Software").pause(350).type(".").pause(500).go();
const titleTrends = new TypeIt("#titleTrends", {
  speed: 100,
  waitUntilVisible: true,
  afterComplete: () => {
    yearTrend.go(), titleTrends.destroy();
  }
}).pause(1500).type("Tendencias tecnologicas.").pause(500).delete(7).type("ógicas.").pause(500).go();
const yearTrend = new TypeIt("#yearTrends", {
  speed: 100,
  waitUntilVisible: true,
  afterComplete: () => {
    yearTrend.destroy();
  }
}).type("2024.");
const cycleTitle = new TypeIt("#cycleTitle", {
  speed: 100,
  waitUntilVisible: true,
  afterComplete: () => {
    cycleTitle.destroy();
  }
}).type("Ciclos").pause(700).type(" de vida del desarrollo de ").pause(500).type("software.").pause(700).go();
const components = new TypeIt("#components", {
  speed: 100,
  waitUntilVisible: true,
  afterComplete: () => {
    components.destroy();
  }
}).pause(500).type("Componentes y métricas").break().type("de calidad de software.").pause(500).go();
const bibliography = new TypeIt("#bibliography", {
  speed: 100,
  waitUntilVisible: true,
  afterComplete: () => bibliography.destroy()
}).pause(500).type("Bibliografia").pause(400).delete(2).type("ía.").pause(300).go();
new TypeIt("#thanks", {
  speed: 220,
  waitUntilVisible: true
}).pause(500).type("Muchas").pause(400).type(" ").pause(300).type("gracias por su tiempo ").break().pause(800).delete(8).break().type("atención").delete(8).type("tiempo y atención").pause(1e3).type(".").pause(2e3).delete(41).pause(500).type(":D").pause(300).delete(2).type("Muchas gracias por su").break().type("tiempo y atención.").go();
