import { j as F } from "./jsx-runtime.dvAB8w6V.js";
/* empty css                            */ import { r as he } from "./index.B3PfHquH.js";
function Re(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function Fe(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((s) => {
      typeof t[s] > "u"
        ? (t[s] = e[s])
        : Re(e[s]) &&
          Re(t[s]) &&
          Object.keys(e[s]).length > 0 &&
          Fe(t[s], e[s]);
    });
}
const Je = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function X() {
  const t = typeof document < "u" ? document : {};
  return Fe(t, Je), t;
}
const nt = {
  document: Je,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  },
};
function G() {
  const t = typeof window < "u" ? window : {};
  return Fe(t, nt), t;
}
function ot(t) {
  const e = t;
  Object.keys(e).forEach((s) => {
    try {
      e[s] = null;
    } catch {}
    try {
      delete e[s];
    } catch {}
  });
}
function te(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function q() {
  return Date.now();
}
function lt(t) {
  const e = G();
  let s;
  return (
    e.getComputedStyle && (s = e.getComputedStyle(t, null)),
    !s && t.currentStyle && (s = t.currentStyle),
    s || (s = t.style),
    s
  );
}
function $e(t, e) {
  e === void 0 && (e = "x");
  const s = G();
  let i, r, a;
  const c = lt(t);
  return (
    s.WebKitCSSMatrix
      ? ((r = c.transform || c.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((d) => d.replace(",", "."))
            .join(", ")),
        (a = new s.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((a =
          c.MozTransform ||
          c.OTransform ||
          c.MsTransform ||
          c.msTransform ||
          c.transform ||
          c
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (i = a.toString().split(","))),
    e === "x" &&
      (s.WebKitCSSMatrix
        ? (r = a.m41)
        : i.length === 16
        ? (r = parseFloat(i[12]))
        : (r = parseFloat(i[4]))),
    e === "y" &&
      (s.WebKitCSSMatrix
        ? (r = a.m42)
        : i.length === 16
        ? (r = parseFloat(i[13]))
        : (r = parseFloat(i[5]))),
    r || 0
  );
}
function le(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function dt(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function V() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let s = 1; s < arguments.length; s += 1) {
    const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
    if (i != null && !dt(i)) {
      const r = Object.keys(Object(i)).filter((a) => e.indexOf(a) < 0);
      for (let a = 0, c = r.length; a < c; a += 1) {
        const d = r[a],
          n = Object.getOwnPropertyDescriptor(i, d);
        n !== void 0 &&
          n.enumerable &&
          (le(t[d]) && le(i[d])
            ? i[d].__swiper__
              ? (t[d] = i[d])
              : V(t[d], i[d])
            : !le(t[d]) && le(i[d])
            ? ((t[d] = {}), i[d].__swiper__ ? (t[d] = i[d]) : V(t[d], i[d]))
            : (t[d] = i[d]));
      }
    }
  }
  return t;
}
function de(t, e, s) {
  t.style.setProperty(e, s);
}
function Qe(t) {
  let { swiper: e, targetPosition: s, side: i } = t;
  const r = G(),
    a = -e.translate;
  let c = null,
    d;
  const n = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const f = s > a ? "next" : "prev",
    l = (p, u) => (f === "next" && p >= u) || (f === "prev" && p <= u),
    o = () => {
      (d = new Date().getTime()), c === null && (c = d);
      const p = Math.max(Math.min((d - c) / n, 1), 0),
        u = 0.5 - Math.cos(p * Math.PI) / 2;
      let v = a + u * (s - a);
      if ((l(v, s) && (v = s), e.wrapperEl.scrollTo({ [i]: v }), l(v, s))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [i]: v });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(o);
    };
  o();
}
function ie(t) {
  return (
    t.querySelector(".swiper-slide-transform") ||
    (t.shadowRoot && t.shadowRoot.querySelector(".swiper-slide-transform")) ||
    t
  );
}
function R(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter((s) => s.matches(e));
}
function U(t, e) {
  e === void 0 && (e = []);
  const s = document.createElement(t);
  return s.classList.add(...(Array.isArray(e) ? e : [e])), s;
}
function ve(t) {
  const e = G(),
    s = X(),
    i = t.getBoundingClientRect(),
    r = s.body,
    a = t.clientTop || r.clientTop || 0,
    c = t.clientLeft || r.clientLeft || 0,
    d = t === e ? e.scrollY : t.scrollTop,
    n = t === e ? e.scrollX : t.scrollLeft;
  return { top: i.top + d - a, left: i.left + n - c };
}
function ct(t, e) {
  const s = [];
  for (; t.previousElementSibling; ) {
    const i = t.previousElementSibling;
    e ? i.matches(e) && s.push(i) : s.push(i), (t = i);
  }
  return s;
}
function pt(t, e) {
  const s = [];
  for (; t.nextElementSibling; ) {
    const i = t.nextElementSibling;
    e ? i.matches(e) && s.push(i) : s.push(i), (t = i);
  }
  return s;
}
function J(t, e) {
  return G().getComputedStyle(t, null).getPropertyValue(e);
}
function pe(t) {
  let e = t,
    s;
  if (e) {
    for (s = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (s += 1);
    return s;
  }
}
function ee(t, e) {
  const s = [];
  let i = t.parentElement;
  for (; i; ) e ? i.matches(e) && s.push(i) : s.push(i), (i = i.parentElement);
  return s;
}
function ce(t, e) {
  function s(i) {
    i.target === t && (e.call(t, i), t.removeEventListener("transitionend", s));
  }
  e && t.addEventListener("transitionend", s);
}
function Oe(t, e, s) {
  const i = G();
  return (
    t[e === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      i
        .getComputedStyle(t, null)
        .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      i
        .getComputedStyle(t, null)
        .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
let Me;
function ft() {
  const t = G(),
    e = X();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    ),
  };
}
function et() {
  return Me || (Me = ft()), Me;
}
let Pe;
function ut(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const s = et(),
    i = G(),
    r = i.navigator.platform,
    a = e || i.navigator.userAgent,
    c = { ios: !1, android: !1 },
    d = i.screen.width,
    n = i.screen.height,
    f = a.match(/(Android);?[\s\/]+([\d.]+)?/);
  let l = a.match(/(iPad).*OS\s([\d_]+)/);
  const o = a.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !l && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    u = r === "Win32";
  let v = r === "MacIntel";
  const w = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !l &&
      v &&
      s.touch &&
      w.indexOf(`${d}x${n}`) >= 0 &&
      ((l = a.match(/(Version)\/([\d.]+)/)),
      l || (l = [0, 1, "13_0_0"]),
      (v = !1)),
    f && !u && ((c.os = "android"), (c.android = !0)),
    (l || p || o) && ((c.os = "ios"), (c.ios = !0)),
    c
  );
}
function mt(t) {
  return t === void 0 && (t = {}), Pe || (Pe = ut(t)), Pe;
}
let ze;
function ht() {
  const t = G();
  let e = !1;
  function s() {
    const i = t.navigator.userAgent.toLowerCase();
    return (
      i.indexOf("safari") >= 0 &&
      i.indexOf("chrome") < 0 &&
      i.indexOf("android") < 0
    );
  }
  if (s()) {
    const i = String(t.navigator.userAgent);
    if (i.includes("Version/")) {
      const [r, a] = i
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      e = r < 16 || (r === 16 && a < 2);
    }
  }
  return {
    isSafari: e || s(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent
    ),
  };
}
function gt() {
  return ze || (ze = ht()), ze;
}
function wt(t) {
  let { swiper: e, on: s, emit: i } = t;
  const r = G();
  let a = null,
    c = null;
  const d = () => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    },
    n = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((a = new ResizeObserver((o) => {
          c = r.requestAnimationFrame(() => {
            const { width: p, height: u } = e;
            let v = p,
              w = u;
            o.forEach((g) => {
              let { contentBoxSize: b, contentRect: h, target: m } = g;
              (m && m !== e.el) ||
                ((v = h ? h.width : (b[0] || b).inlineSize),
                (w = h ? h.height : (b[0] || b).blockSize));
            }),
              (v !== p || w !== u) && d();
          });
        })),
        a.observe(e.el));
    },
    f = () => {
      c && r.cancelAnimationFrame(c),
        a && a.unobserve && e.el && (a.unobserve(e.el), (a = null));
    },
    l = () => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    };
  s("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      n();
      return;
    }
    r.addEventListener("resize", d), r.addEventListener("orientationchange", l);
  }),
    s("destroy", () => {
      f(),
        r.removeEventListener("resize", d),
        r.removeEventListener("orientationchange", l);
    });
}
function vt(t) {
  let { swiper: e, extendParams: s, on: i, emit: r } = t;
  const a = [],
    c = G(),
    d = function (l, o) {
      o === void 0 && (o = {});
      const p = c.MutationObserver || c.WebkitMutationObserver,
        u = new p((v) => {
          if (e.__preventObserver__) return;
          if (v.length === 1) {
            r("observerUpdate", v[0]);
            return;
          }
          const w = function () {
            r("observerUpdate", v[0]);
          };
          c.requestAnimationFrame
            ? c.requestAnimationFrame(w)
            : c.setTimeout(w, 0);
        });
      u.observe(l, {
        attributes: typeof o.attributes > "u" ? !0 : o.attributes,
        childList: typeof o.childList > "u" ? !0 : o.childList,
        characterData: typeof o.characterData > "u" ? !0 : o.characterData,
      }),
        a.push(u);
    },
    n = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const l = ee(e.hostEl);
          for (let o = 0; o < l.length; o += 1) d(l[o]);
        }
        d(e.hostEl, { childList: e.params.observeSlideChildren }),
          d(e.wrapperEl, { attributes: !1 });
      }
    },
    f = () => {
      a.forEach((l) => {
        l.disconnect();
      }),
        a.splice(0, a.length);
    };
  s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    i("init", n),
    i("destroy", f);
}
var bt = {
  on(t, e, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = s ? "unshift" : "push";
    return (
      t.split(" ").forEach((a) => {
        i.eventsListeners[a] || (i.eventsListeners[a] = []),
          i.eventsListeners[a][r](e);
      }),
      i
    );
  },
  once(t, e, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r() {
      i.off(t, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
        c[d] = arguments[d];
      e.apply(i, c);
    }
    return (r.__emitterProxy = e), i.on(t, r, s);
  },
  onAny(t, e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const i = e ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(t) < 0 && s.eventsAnyListeners[i](t), s;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const s = e.eventsAnyListeners.indexOf(t);
    return s >= 0 && e.eventsAnyListeners.splice(s, 1), e;
  },
  off(t, e) {
    const s = this;
    return (
      !s.eventsListeners ||
        s.destroyed ||
        !s.eventsListeners ||
        t.split(" ").forEach((i) => {
          typeof e > "u"
            ? (s.eventsListeners[i] = [])
            : s.eventsListeners[i] &&
              s.eventsListeners[i].forEach((r, a) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                  s.eventsListeners[i].splice(a, 1);
              });
        }),
      s
    );
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, s, i;
    for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
      a[c] = arguments[c];
    return (
      typeof a[0] == "string" || Array.isArray(a[0])
        ? ((e = a[0]), (s = a.slice(1, a.length)), (i = t))
        : ((e = a[0].events), (s = a[0].data), (i = a[0].context || t)),
      s.unshift(i),
      (Array.isArray(e) ? e : e.split(" ")).forEach((n) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((f) => {
            f.apply(i, [n, ...s]);
          }),
          t.eventsListeners &&
            t.eventsListeners[n] &&
            t.eventsListeners[n].forEach((f) => {
              f.apply(i, s);
            });
      }),
      t
    );
  },
};
function yt() {
  const t = this;
  let e, s;
  const i = t.el;
  typeof t.params.width < "u" && t.params.width !== null
    ? (e = t.params.width)
    : (e = i.clientWidth),
    typeof t.params.height < "u" && t.params.height !== null
      ? (s = t.params.height)
      : (s = i.clientHeight),
    !((e === 0 && t.isHorizontal()) || (s === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(J(i, "padding-left") || 0, 10) -
        parseInt(J(i, "padding-right") || 0, 10)),
      (s =
        s -
        parseInt(J(i, "padding-top") || 0, 10) -
        parseInt(J(i, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(s) && (s = 0),
      Object.assign(t, {
        width: e,
        height: s,
        size: t.isHorizontal() ? e : s,
      }));
}
function xt() {
  const t = this;
  function e(L) {
    return t.isHorizontal()
      ? L
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[L];
  }
  function s(L, z) {
    return parseFloat(L.getPropertyValue(e(z)) || 0);
  }
  const i = t.params,
    { wrapperEl: r, slidesEl: a, size: c, rtlTranslate: d, wrongRTL: n } = t,
    f = t.virtual && i.virtual.enabled,
    l = f ? t.virtual.slides.length : t.slides.length,
    o = R(a, `.${t.params.slideClass}, swiper-slide`),
    p = f ? t.virtual.slides.length : o.length;
  let u = [];
  const v = [],
    w = [];
  let g = i.slidesOffsetBefore;
  typeof g == "function" && (g = i.slidesOffsetBefore.call(t));
  let b = i.slidesOffsetAfter;
  typeof b == "function" && (b = i.slidesOffsetAfter.call(t));
  const h = t.snapGrid.length,
    m = t.slidesGrid.length;
  let x = i.spaceBetween,
    T = -g,
    A = 0,
    P = 0;
  if (typeof c > "u") return;
  typeof x == "string" && x.indexOf("%") >= 0
    ? (x = (parseFloat(x.replace("%", "")) / 100) * c)
    : typeof x == "string" && (x = parseFloat(x)),
    (t.virtualSize = -x),
    o.forEach((L) => {
      d ? (L.style.marginLeft = "") : (L.style.marginRight = ""),
        (L.style.marginBottom = ""),
        (L.style.marginTop = "");
    }),
    i.centeredSlides &&
      i.cssMode &&
      (de(r, "--swiper-centered-offset-before", ""),
      de(r, "--swiper-centered-offset-after", ""));
  const $ = i.grid && i.grid.rows > 1 && t.grid;
  $ && t.grid.initSlides(p);
  let S;
  const k =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (L) => typeof i.breakpoints[L].slidesPerView < "u"
    ).length > 0;
  for (let L = 0; L < p; L += 1) {
    S = 0;
    let z;
    if (
      (o[L] && (z = o[L]),
      $ && t.grid.updateSlide(L, z, p, e),
      !(o[L] && J(z, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        k && (o[L].style[e("width")] = "");
        const C = getComputedStyle(z),
          y = z.style.transform,
          E = z.style.webkitTransform;
        if (
          (y && (z.style.transform = "none"),
          E && (z.style.webkitTransform = "none"),
          i.roundLengths)
        )
          S = t.isHorizontal() ? Oe(z, "width") : Oe(z, "height");
        else {
          const D = s(C, "width"),
            M = s(C, "padding-left"),
            O = s(C, "padding-right"),
            I = s(C, "margin-left"),
            j = s(C, "margin-right"),
            B = C.getPropertyValue("box-sizing");
          if (B && B === "border-box") S = D + I + j;
          else {
            const { clientWidth: N, offsetWidth: _ } = z;
            S = D + M + O + I + j + (_ - N);
          }
        }
        y && (z.style.transform = y),
          E && (z.style.webkitTransform = E),
          i.roundLengths && (S = Math.floor(S));
      } else
        (S = (c - (i.slidesPerView - 1) * x) / i.slidesPerView),
          i.roundLengths && (S = Math.floor(S)),
          o[L] && (o[L].style[e("width")] = `${S}px`);
      o[L] && (o[L].swiperSlideSize = S),
        w.push(S),
        i.centeredSlides
          ? ((T = T + S / 2 + A / 2 + x),
            A === 0 && L !== 0 && (T = T - c / 2 - x),
            L === 0 && (T = T - c / 2 - x),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            i.roundLengths && (T = Math.floor(T)),
            P % i.slidesPerGroup === 0 && u.push(T),
            v.push(T))
          : (i.roundLengths && (T = Math.floor(T)),
            (P - Math.min(t.params.slidesPerGroupSkip, P)) %
              t.params.slidesPerGroup ===
              0 && u.push(T),
            v.push(T),
            (T = T + S + x)),
        (t.virtualSize += S + x),
        (A = S),
        (P += 1);
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, c) + b),
    d &&
      n &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (r.style.width = `${t.virtualSize + x}px`),
    i.setWrapperSize && (r.style[e("width")] = `${t.virtualSize + x}px`),
    $ && t.grid.updateWrapperSize(S, u, e),
    !i.centeredSlides)
  ) {
    const L = [];
    for (let z = 0; z < u.length; z += 1) {
      let C = u[z];
      i.roundLengths && (C = Math.floor(C)),
        u[z] <= t.virtualSize - c && L.push(C);
    }
    (u = L),
      Math.floor(t.virtualSize - c) - Math.floor(u[u.length - 1]) > 1 &&
        u.push(t.virtualSize - c);
  }
  if (f && i.loop) {
    const L = w[0] + x;
    if (i.slidesPerGroup > 1) {
      const z = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup
        ),
        C = L * i.slidesPerGroup;
      for (let y = 0; y < z; y += 1) u.push(u[u.length - 1] + C);
    }
    for (let z = 0; z < t.virtual.slidesBefore + t.virtual.slidesAfter; z += 1)
      i.slidesPerGroup === 1 && u.push(u[u.length - 1] + L),
        v.push(v[v.length - 1] + L),
        (t.virtualSize += L);
  }
  if ((u.length === 0 && (u = [0]), x !== 0)) {
    const L = t.isHorizontal() && d ? "marginLeft" : e("marginRight");
    o.filter((z, C) =>
      !i.cssMode || i.loop ? !0 : C !== o.length - 1
    ).forEach((z) => {
      z.style[L] = `${x}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let L = 0;
    w.forEach((C) => {
      L += C + (x || 0);
    }),
      (L -= x);
    const z = L - c;
    u = u.map((C) => (C <= 0 ? -g : C > z ? z + b : C));
  }
  if (i.centerInsufficientSlides) {
    let L = 0;
    if (
      (w.forEach((z) => {
        L += z + (x || 0);
      }),
      (L -= x),
      L < c)
    ) {
      const z = (c - L) / 2;
      u.forEach((C, y) => {
        u[y] = C - z;
      }),
        v.forEach((C, y) => {
          v[y] = C + z;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: o,
      snapGrid: u,
      slidesGrid: v,
      slidesSizesGrid: w,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    de(r, "--swiper-centered-offset-before", `${-u[0]}px`),
      de(
        r,
        "--swiper-centered-offset-after",
        `${t.size / 2 - w[w.length - 1] / 2}px`
      );
    const L = -t.snapGrid[0],
      z = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map((C) => C + L)),
      (t.slidesGrid = t.slidesGrid.map((C) => C + z));
  }
  if (
    (p !== l && t.emit("slidesLengthChange"),
    u.length !== h &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    v.length !== m && t.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && t.updateSlidesOffset(),
    !f && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const L = `${i.containerModifierClass}backface-hidden`,
      z = t.el.classList.contains(L);
    p <= i.maxBackfaceHiddenSlides
      ? z || t.el.classList.add(L)
      : z && t.el.classList.remove(L);
  }
}
function St(t) {
  const e = this,
    s = [],
    i = e.virtual && e.params.virtual.enabled;
  let r = 0,
    a;
  typeof t == "number"
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed);
  const c = (d) => (i ? e.slides[e.getSlideIndexByData(d)] : e.slides[d]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((d) => {
        s.push(d);
      });
    else
      for (a = 0; a < Math.ceil(e.params.slidesPerView); a += 1) {
        const d = e.activeIndex + a;
        if (d > e.slides.length && !i) break;
        s.push(c(d));
      }
  else s.push(c(e.activeIndex));
  for (a = 0; a < s.length; a += 1)
    if (typeof s[a] < "u") {
      const d = s[a].offsetHeight;
      r = d > r ? d : r;
    }
  (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
function Et() {
  const t = this,
    e = t.slides,
    s = t.isElement
      ? t.isHorizontal()
        ? t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset =
      (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
      s -
      t.cssOverflowAdjustment();
}
function Tt(t) {
  t === void 0 && (t = (this && this.translate) || 0);
  const e = this,
    s = e.params,
    { slides: i, rtlTranslate: r, snapGrid: a } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let c = -t;
  r && (c = t),
    i.forEach((n) => {
      n.classList.remove(s.slideVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let d = s.spaceBetween;
  typeof d == "string" && d.indexOf("%") >= 0
    ? (d = (parseFloat(d.replace("%", "")) / 100) * e.size)
    : typeof d == "string" && (d = parseFloat(d));
  for (let n = 0; n < i.length; n += 1) {
    const f = i[n];
    let l = f.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
    const o =
        (c + (s.centeredSlides ? e.minTranslate() : 0) - l) /
        (f.swiperSlideSize + d),
      p =
        (c - a[0] + (s.centeredSlides ? e.minTranslate() : 0) - l) /
        (f.swiperSlideSize + d),
      u = -(c - l),
      v = u + e.slidesSizesGrid[n];
    ((u >= 0 && u < e.size - 1) ||
      (v > 1 && v <= e.size) ||
      (u <= 0 && v >= e.size)) &&
      (e.visibleSlides.push(f),
      e.visibleSlidesIndexes.push(n),
      i[n].classList.add(s.slideVisibleClass)),
      (f.progress = r ? -o : o),
      (f.originalProgress = r ? -p : p);
  }
}
function Ct(t) {
  const e = this;
  if (typeof t > "u") {
    const l = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * l) || 0;
  }
  const s = e.params,
    i = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: a, isEnd: c, progressLoop: d } = e;
  const n = a,
    f = c;
  if (i === 0) (r = 0), (a = !0), (c = !0);
  else {
    r = (t - e.minTranslate()) / i;
    const l = Math.abs(t - e.minTranslate()) < 1,
      o = Math.abs(t - e.maxTranslate()) < 1;
    (a = l || r <= 0), (c = o || r >= 1), l && (r = 0), o && (r = 1);
  }
  if (s.loop) {
    const l = e.getSlideIndexByData(0),
      o = e.getSlideIndexByData(e.slides.length - 1),
      p = e.slidesGrid[l],
      u = e.slidesGrid[o],
      v = e.slidesGrid[e.slidesGrid.length - 1],
      w = Math.abs(t);
    w >= p ? (d = (w - p) / v) : (d = (w + v - u) / v), d > 1 && (d -= 1);
  }
  Object.assign(e, { progress: r, progressLoop: d, isBeginning: a, isEnd: c }),
    (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
      e.updateSlidesProgress(t),
    a && !n && e.emit("reachBeginning toEdge"),
    c && !f && e.emit("reachEnd toEdge"),
    ((n && !a) || (f && !c)) && e.emit("fromEdge"),
    e.emit("progress", r);
}
function Mt() {
  const t = this,
    { slides: e, params: s, slidesEl: i, activeIndex: r } = t,
    a = t.virtual && s.virtual.enabled,
    c = (n) => R(i, `.${s.slideClass}${n}, swiper-slide${n}`)[0];
  e.forEach((n) => {
    n.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
  });
  let d;
  if (a)
    if (s.loop) {
      let n = r - t.virtual.slidesBefore;
      n < 0 && (n = t.virtual.slides.length + n),
        n >= t.virtual.slides.length && (n -= t.virtual.slides.length),
        (d = c(`[data-swiper-slide-index="${n}"]`));
    } else d = c(`[data-swiper-slide-index="${r}"]`);
  else d = e[r];
  if (d) {
    d.classList.add(s.slideActiveClass);
    let n = pt(d, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !n && (n = e[0]), n && n.classList.add(s.slideNextClass);
    let f = ct(d, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !f === 0 && (f = e[e.length - 1]),
      f && f.classList.add(s.slidePrevClass);
  }
  t.emitSlidesClasses();
}
const ge = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const s = () => (t.isElement ? "swiper-slide" : `.${t.params.slideClass}`),
      i = e.closest(s());
    if (i) {
      let r = i.querySelector(`.${t.params.lazyPreloaderClass}`);
      !r &&
        t.isElement &&
        (i.shadowRoot
          ? (r = i.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              i.shadowRoot &&
                ((r = i.shadowRoot.querySelector(
                  `.${t.params.lazyPreloaderClass}`
                )),
                r && r.remove());
            })),
        r && r.remove();
    }
  },
  Le = (t, e) => {
    if (!t.slides[e]) return;
    const s = t.slides[e].querySelector('[loading="lazy"]');
    s && s.removeAttribute("loading");
  },
  De = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const s = t.slides.length;
    if (!s || !e || e < 0) return;
    e = Math.min(e, s);
    const i =
        t.params.slidesPerView === "auto"
          ? t.slidesPerViewDynamic()
          : Math.ceil(t.params.slidesPerView),
      r = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const c = r,
        d = [c - e];
      d.push(...Array.from({ length: e }).map((n, f) => c + i + f)),
        t.slides.forEach((n, f) => {
          d.includes(n.column) && Le(t, f);
        });
      return;
    }
    const a = r + i - 1;
    if (t.params.rewind || t.params.loop)
      for (let c = r - e; c <= a + e; c += 1) {
        const d = ((c % s) + s) % s;
        (d < r || d > a) && Le(t, d);
      }
    else
      for (let c = Math.max(r - e, 0); c <= Math.min(a + e, s - 1); c += 1)
        c !== r && (c > a || c < r) && Le(t, c);
  };
function Pt(t) {
  const { slidesGrid: e, params: s } = t,
    i = t.rtlTranslate ? t.translate : -t.translate;
  let r;
  for (let a = 0; a < e.length; a += 1)
    typeof e[a + 1] < "u"
      ? i >= e[a] && i < e[a + 1] - (e[a + 1] - e[a]) / 2
        ? (r = a)
        : i >= e[a] && i < e[a + 1] && (r = a + 1)
      : i >= e[a] && (r = a);
  return s.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function zt(t) {
  const e = this,
    s = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: i, params: r, activeIndex: a, realIndex: c, snapIndex: d } = e;
  let n = t,
    f;
  const l = (p) => {
    let u = p - e.virtual.slidesBefore;
    return (
      u < 0 && (u = e.virtual.slides.length + u),
      u >= e.virtual.slides.length && (u -= e.virtual.slides.length),
      u
    );
  };
  if ((typeof n > "u" && (n = Pt(e)), i.indexOf(s) >= 0)) f = i.indexOf(s);
  else {
    const p = Math.min(r.slidesPerGroupSkip, n);
    f = p + Math.floor((n - p) / r.slidesPerGroup);
  }
  if ((f >= i.length && (f = i.length - 1), n === a)) {
    f !== d && ((e.snapIndex = f), e.emit("snapIndexChange")),
      e.params.loop &&
        e.virtual &&
        e.params.virtual.enabled &&
        (e.realIndex = l(n));
    return;
  }
  let o;
  e.virtual && r.virtual.enabled && r.loop
    ? (o = l(n))
    : e.slides[n]
    ? (o = parseInt(
        e.slides[n].getAttribute("data-swiper-slide-index") || n,
        10
      ))
    : (o = n),
    Object.assign(e, {
      previousSnapIndex: d,
      snapIndex: f,
      previousRealIndex: c,
      realIndex: o,
      previousIndex: a,
      activeIndex: n,
    }),
    e.initialized && De(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (c !== o && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Lt(t, e) {
  const s = this,
    i = s.params;
  let r = t.closest(`.${i.slideClass}, swiper-slide`);
  !r &&
    s.isElement &&
    e &&
    e.length > 1 &&
    e.includes(t) &&
    [...e.slice(e.indexOf(t) + 1, e.length)].forEach((d) => {
      !r && d.matches && d.matches(`.${i.slideClass}, swiper-slide`) && (r = d);
    });
  let a = !1,
    c;
  if (r) {
    for (let d = 0; d < s.slides.length; d += 1)
      if (s.slides[d] === r) {
        (a = !0), (c = d);
        break;
      }
  }
  if (r && a)
    (s.clickedSlide = r),
      s.virtual && s.params.virtual.enabled
        ? (s.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (s.clickedIndex = c);
  else {
    (s.clickedSlide = void 0), (s.clickedIndex = void 0);
    return;
  }
  i.slideToClickedSlide &&
    s.clickedIndex !== void 0 &&
    s.clickedIndex !== s.activeIndex &&
    s.slideToClickedSlide();
}
var At = {
  updateSize: yt,
  updateSlides: xt,
  updateAutoHeight: St,
  updateSlidesOffset: Et,
  updateSlidesProgress: Tt,
  updateProgress: Ct,
  updateSlidesClasses: Mt,
  updateActiveIndex: zt,
  updateClickedSlide: Lt,
};
function It(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: s, rtlTranslate: i, translate: r, wrapperEl: a } = e;
  if (s.virtualTranslate) return i ? -r : r;
  if (s.cssMode) return r;
  let c = $e(a, t);
  return (c += e.cssOverflowAdjustment()), i && (c = -c), c || 0;
}
function $t(t, e) {
  const s = this,
    { rtlTranslate: i, params: r, wrapperEl: a, progress: c } = s;
  let d = 0,
    n = 0;
  const f = 0;
  s.isHorizontal() ? (d = i ? -t : t) : (n = t),
    r.roundLengths && ((d = Math.floor(d)), (n = Math.floor(n))),
    (s.previousTranslate = s.translate),
    (s.translate = s.isHorizontal() ? d : n),
    r.cssMode
      ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
          ? -d
          : -n)
      : r.virtualTranslate ||
        (s.isHorizontal()
          ? (d -= s.cssOverflowAdjustment())
          : (n -= s.cssOverflowAdjustment()),
        (a.style.transform = `translate3d(${d}px, ${n}px, ${f}px)`));
  let l;
  const o = s.maxTranslate() - s.minTranslate();
  o === 0 ? (l = 0) : (l = (t - s.minTranslate()) / o),
    l !== c && s.updateProgress(t),
    s.emit("setTranslate", s.translate, e);
}
function Ot() {
  return -this.snapGrid[0];
}
function Dt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function kt(t, e, s, i, r) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    s === void 0 && (s = !0),
    i === void 0 && (i = !0);
  const a = this,
    { params: c, wrapperEl: d } = a;
  if (a.animating && c.preventInteractionOnTransition) return !1;
  const n = a.minTranslate(),
    f = a.maxTranslate();
  let l;
  if (
    (i && t > n ? (l = n) : i && t < f ? (l = f) : (l = t),
    a.updateProgress(l),
    c.cssMode)
  ) {
    const o = a.isHorizontal();
    if (e === 0) d[o ? "scrollLeft" : "scrollTop"] = -l;
    else {
      if (!a.support.smoothScroll)
        return (
          Qe({ swiper: a, targetPosition: -l, side: o ? "left" : "top" }), !0
        );
      d.scrollTo({ [o ? "left" : "top"]: -l, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (a.setTransition(0),
        a.setTranslate(l),
        s && (a.emit("beforeTransitionStart", e, r), a.emit("transitionEnd")))
      : (a.setTransition(e),
        a.setTranslate(l),
        s && (a.emit("beforeTransitionStart", e, r), a.emit("transitionStart")),
        a.animating ||
          ((a.animating = !0),
          a.onTranslateToWrapperTransitionEnd ||
            (a.onTranslateToWrapperTransitionEnd = function (p) {
              !a ||
                a.destroyed ||
                (p.target === this &&
                  (a.wrapperEl.removeEventListener(
                    "transitionend",
                    a.onTranslateToWrapperTransitionEnd
                  ),
                  (a.onTranslateToWrapperTransitionEnd = null),
                  delete a.onTranslateToWrapperTransitionEnd,
                  s && a.emit("transitionEnd")));
            }),
          a.wrapperEl.addEventListener(
            "transitionend",
            a.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Ft = {
  getTranslate: It,
  setTranslate: $t,
  minTranslate: Ot,
  maxTranslate: Dt,
  translateTo: kt,
};
function _t(t, e) {
  const s = this;
  s.params.cssMode ||
    ((s.wrapperEl.style.transitionDuration = `${t}ms`),
    (s.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : "")),
    s.emit("setTransition", t, e);
}
function tt(t) {
  let { swiper: e, runCallbacks: s, direction: i, step: r } = t;
  const { activeIndex: a, previousIndex: c } = e;
  let d = i;
  if (
    (d || (a > c ? (d = "next") : a < c ? (d = "prev") : (d = "reset")),
    e.emit(`transition${r}`),
    s && a !== c)
  ) {
    if (d === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      d === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function jt(t, e) {
  t === void 0 && (t = !0);
  const s = this,
    { params: i } = s;
  i.cssMode ||
    (i.autoHeight && s.updateAutoHeight(),
    tt({ swiper: s, runCallbacks: t, direction: e, step: "Start" }));
}
function Ht(t, e) {
  t === void 0 && (t = !0);
  const s = this,
    { params: i } = s;
  (s.animating = !1),
    !i.cssMode &&
      (s.setTransition(0),
      tt({ swiper: s, runCallbacks: t, direction: e, step: "End" }));
}
var Bt = { setTransition: _t, transitionStart: jt, transitionEnd: Ht };
function Gt(t, e, s, i, r) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    s === void 0 && (s = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const a = this;
  let c = t;
  c < 0 && (c = 0);
  const {
    params: d,
    snapGrid: n,
    slidesGrid: f,
    previousIndex: l,
    activeIndex: o,
    rtlTranslate: p,
    wrapperEl: u,
    enabled: v,
  } = a;
  if ((a.animating && d.preventInteractionOnTransition) || (!v && !i && !r))
    return !1;
  const w = Math.min(a.params.slidesPerGroupSkip, c);
  let g = w + Math.floor((c - w) / a.params.slidesPerGroup);
  g >= n.length && (g = n.length - 1);
  const b = -n[g];
  if (d.normalizeSlideIndex)
    for (let m = 0; m < f.length; m += 1) {
      const x = -Math.floor(b * 100),
        T = Math.floor(f[m] * 100),
        A = Math.floor(f[m + 1] * 100);
      typeof f[m + 1] < "u"
        ? x >= T && x < A - (A - T) / 2
          ? (c = m)
          : x >= T && x < A && (c = m + 1)
        : x >= T && (c = m);
    }
  if (
    a.initialized &&
    c !== o &&
    ((!a.allowSlideNext &&
      (p
        ? b > a.translate && b > a.minTranslate()
        : b < a.translate && b < a.minTranslate())) ||
      (!a.allowSlidePrev &&
        b > a.translate &&
        b > a.maxTranslate() &&
        (o || 0) !== c))
  )
    return !1;
  c !== (l || 0) && s && a.emit("beforeSlideChangeStart"), a.updateProgress(b);
  let h;
  if (
    (c > o ? (h = "next") : c < o ? (h = "prev") : (h = "reset"),
    (p && -b === a.translate) || (!p && b === a.translate))
  )
    return (
      a.updateActiveIndex(c),
      d.autoHeight && a.updateAutoHeight(),
      a.updateSlidesClasses(),
      d.effect !== "slide" && a.setTranslate(b),
      h !== "reset" && (a.transitionStart(s, h), a.transitionEnd(s, h)),
      !1
    );
  if (d.cssMode) {
    const m = a.isHorizontal(),
      x = p ? b : -b;
    if (e === 0) {
      const T = a.virtual && a.params.virtual.enabled;
      T &&
        ((a.wrapperEl.style.scrollSnapType = "none"),
        (a._immediateVirtual = !0)),
        T && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
          ? ((a._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              u[m ? "scrollLeft" : "scrollTop"] = x;
            }))
          : (u[m ? "scrollLeft" : "scrollTop"] = x),
        T &&
          requestAnimationFrame(() => {
            (a.wrapperEl.style.scrollSnapType = ""), (a._immediateVirtual = !1);
          });
    } else {
      if (!a.support.smoothScroll)
        return (
          Qe({ swiper: a, targetPosition: x, side: m ? "left" : "top" }), !0
        );
      u.scrollTo({ [m ? "left" : "top"]: x, behavior: "smooth" });
    }
    return !0;
  }
  return (
    a.setTransition(e),
    a.setTranslate(b),
    a.updateActiveIndex(c),
    a.updateSlidesClasses(),
    a.emit("beforeTransitionStart", e, i),
    a.transitionStart(s, h),
    e === 0
      ? a.transitionEnd(s, h)
      : a.animating ||
        ((a.animating = !0),
        a.onSlideToWrapperTransitionEnd ||
          (a.onSlideToWrapperTransitionEnd = function (x) {
            !a ||
              a.destroyed ||
              (x.target === this &&
                (a.wrapperEl.removeEventListener(
                  "transitionend",
                  a.onSlideToWrapperTransitionEnd
                ),
                (a.onSlideToWrapperTransitionEnd = null),
                delete a.onSlideToWrapperTransitionEnd,
                a.transitionEnd(s, h)));
          }),
        a.wrapperEl.addEventListener(
          "transitionend",
          a.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Rt(t, e, s, i) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    s === void 0 && (s = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let a = t;
  return (
    r.params.loop &&
      (r.virtual && r.params.virtual.enabled
        ? (a = a + r.virtual.slidesBefore)
        : (a = r.getSlideIndexByData(a))),
    r.slideTo(a, e, s, i)
  );
}
function Xt(t, e, s) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const i = this,
    { enabled: r, params: a, animating: c } = i;
  if (!r) return i;
  let d = a.slidesPerGroup;
  a.slidesPerView === "auto" &&
    a.slidesPerGroup === 1 &&
    a.slidesPerGroupAuto &&
    (d = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const n = i.activeIndex < a.slidesPerGroupSkip ? 1 : d,
    f = i.virtual && a.virtual.enabled;
  if (a.loop) {
    if (c && !f && a.loopPreventsSliding) return !1;
    if (
      (i.loopFix({ direction: "next" }),
      (i._clientLeft = i.wrapperEl.clientLeft),
      i.activeIndex === i.slides.length - 1 && a.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + n, t, e, s);
        }),
        !0
      );
  }
  return a.rewind && i.isEnd
    ? i.slideTo(0, t, e, s)
    : i.slideTo(i.activeIndex + n, t, e, s);
}
function Nt(t, e, s) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const i = this,
    {
      params: r,
      snapGrid: a,
      slidesGrid: c,
      rtlTranslate: d,
      enabled: n,
      animating: f,
    } = i;
  if (!n) return i;
  const l = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (f && !l && r.loopPreventsSliding) return !1;
    i.loopFix({ direction: "prev" }), (i._clientLeft = i.wrapperEl.clientLeft);
  }
  const o = d ? i.translate : -i.translate;
  function p(b) {
    return b < 0 ? -Math.floor(Math.abs(b)) : Math.floor(b);
  }
  const u = p(o),
    v = a.map((b) => p(b));
  let w = a[v.indexOf(u) - 1];
  if (typeof w > "u" && r.cssMode) {
    let b;
    a.forEach((h, m) => {
      u >= h && (b = m);
    }),
      typeof b < "u" && (w = a[b > 0 ? b - 1 : b]);
  }
  let g = 0;
  if (
    (typeof w < "u" &&
      ((g = c.indexOf(w)),
      g < 0 && (g = i.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
        (g = Math.max(g, 0)))),
    r.rewind && i.isBeginning)
  ) {
    const b =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1;
    return i.slideTo(b, t, e, s);
  } else if (r.loop && i.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        i.slideTo(g, t, e, s);
      }),
      !0
    );
  return i.slideTo(g, t, e, s);
}
function Yt(t, e, s) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const i = this;
  return i.slideTo(i.activeIndex, t, e, s);
}
function Vt(t, e, s, i) {
  t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    i === void 0 && (i = 0.5);
  const r = this;
  let a = r.activeIndex;
  const c = Math.min(r.params.slidesPerGroupSkip, a),
    d = c + Math.floor((a - c) / r.params.slidesPerGroup),
    n = r.rtlTranslate ? r.translate : -r.translate;
  if (n >= r.snapGrid[d]) {
    const f = r.snapGrid[d],
      l = r.snapGrid[d + 1];
    n - f > (l - f) * i && (a += r.params.slidesPerGroup);
  } else {
    const f = r.snapGrid[d - 1],
      l = r.snapGrid[d];
    n - f <= (l - f) * i && (a -= r.params.slidesPerGroup);
  }
  return (
    (a = Math.max(a, 0)),
    (a = Math.min(a, r.slidesGrid.length - 1)),
    r.slideTo(a, t, e, s)
  );
}
function Wt() {
  const t = this,
    { params: e, slidesEl: s } = t,
    i = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let r = t.clickedIndex,
    a;
  const c = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    (a = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? r < t.loopedSlides - i / 2 ||
          r > t.slides.length - t.loopedSlides + i / 2
          ? (t.loopFix(),
            (r = t.getSlideIndex(
              R(s, `${c}[data-swiper-slide-index="${a}"]`)[0]
            )),
            te(() => {
              t.slideTo(r);
            }))
          : t.slideTo(r)
        : r > t.slides.length - i
        ? (t.loopFix(),
          (r = t.getSlideIndex(
            R(s, `${c}[data-swiper-slide-index="${a}"]`)[0]
          )),
          te(() => {
            t.slideTo(r);
          }))
        : t.slideTo(r);
  } else t.slideTo(r);
}
var qt = {
  slideTo: Gt,
  slideToLoop: Rt,
  slideNext: Xt,
  slidePrev: Nt,
  slideReset: Yt,
  slideToClosest: Vt,
  slideToClickedSlide: Wt,
};
function Ut(t) {
  const e = this,
    { params: s, slidesEl: i } = e;
  if (!s.loop || (e.virtual && e.params.virtual.enabled)) return;
  R(i, `.${s.slideClass}, swiper-slide`).forEach((a, c) => {
    a.setAttribute("data-swiper-slide-index", c);
  }),
    e.loopFix({
      slideRealIndex: t,
      direction: s.centeredSlides ? void 0 : "next",
    });
}
function Kt(t) {
  let {
    slideRealIndex: e,
    slideTo: s = !0,
    direction: i,
    setTranslate: r,
    activeSlideIndex: a,
    byController: c,
    byMousewheel: d,
  } = t === void 0 ? {} : t;
  const n = this;
  if (!n.params.loop) return;
  n.emit("beforeLoopFix");
  const {
    slides: f,
    allowSlidePrev: l,
    allowSlideNext: o,
    slidesEl: p,
    params: u,
  } = n;
  if (
    ((n.allowSlidePrev = !0),
    (n.allowSlideNext = !0),
    n.virtual && u.virtual.enabled)
  ) {
    s &&
      (!u.centeredSlides && n.snapIndex === 0
        ? n.slideTo(n.virtual.slides.length, 0, !1, !0)
        : u.centeredSlides && n.snapIndex < u.slidesPerView
        ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0)
        : n.snapIndex === n.snapGrid.length - 1 &&
          n.slideTo(n.virtual.slidesBefore, 0, !1, !0)),
      (n.allowSlidePrev = l),
      (n.allowSlideNext = o),
      n.emit("loopFix");
    return;
  }
  const v =
    u.slidesPerView === "auto"
      ? n.slidesPerViewDynamic()
      : Math.ceil(parseFloat(u.slidesPerView, 10));
  let w = u.loopedSlides || v;
  w % u.slidesPerGroup !== 0 &&
    (w += u.slidesPerGroup - (w % u.slidesPerGroup)),
    (n.loopedSlides = w);
  const g = [],
    b = [];
  let h = n.activeIndex;
  typeof a > "u"
    ? (a = n.getSlideIndex(
        n.slides.filter((P) => P.classList.contains(u.slideActiveClass))[0]
      ))
    : (h = a);
  const m = i === "next" || !i,
    x = i === "prev" || !i;
  let T = 0,
    A = 0;
  if (a < w) {
    T = Math.max(w - a, u.slidesPerGroup);
    for (let P = 0; P < w - a; P += 1) {
      const $ = P - Math.floor(P / f.length) * f.length;
      g.push(f.length - $ - 1);
    }
  } else if (a > n.slides.length - w * 2) {
    A = Math.max(a - (n.slides.length - w * 2), u.slidesPerGroup);
    for (let P = 0; P < A; P += 1) {
      const $ = P - Math.floor(P / f.length) * f.length;
      b.push($);
    }
  }
  if (
    (x &&
      g.forEach((P) => {
        (n.slides[P].swiperLoopMoveDOM = !0),
          p.prepend(n.slides[P]),
          (n.slides[P].swiperLoopMoveDOM = !1);
      }),
    m &&
      b.forEach((P) => {
        (n.slides[P].swiperLoopMoveDOM = !0),
          p.append(n.slides[P]),
          (n.slides[P].swiperLoopMoveDOM = !1);
      }),
    n.recalcSlides(),
    u.slidesPerView === "auto" && n.updateSlides(),
    u.watchSlidesProgress && n.updateSlidesOffset(),
    s)
  ) {
    if (g.length > 0 && x)
      if (typeof e > "u") {
        const P = n.slidesGrid[h],
          S = n.slidesGrid[h + T] - P;
        d
          ? n.setTranslate(n.translate - S)
          : (n.slideTo(h + T, 0, !1, !0),
            r &&
              ((n.touches[n.isHorizontal() ? "startX" : "startY"] += S),
              (n.touchEventsData.currentTranslate = n.translate)));
      } else
        r &&
          (n.slideToLoop(e, 0, !1, !0),
          (n.touchEventsData.currentTranslate = n.translate));
    else if (b.length > 0 && m)
      if (typeof e > "u") {
        const P = n.slidesGrid[h],
          S = n.slidesGrid[h - A] - P;
        d
          ? n.setTranslate(n.translate - S)
          : (n.slideTo(h - A, 0, !1, !0),
            r &&
              ((n.touches[n.isHorizontal() ? "startX" : "startY"] += S),
              (n.touchEventsData.currentTranslate = n.translate)));
      } else n.slideToLoop(e, 0, !1, !0);
  }
  if (
    ((n.allowSlidePrev = l),
    (n.allowSlideNext = o),
    n.controller && n.controller.control && !c)
  ) {
    const P = {
      slideRealIndex: e,
      direction: i,
      setTranslate: r,
      activeSlideIndex: a,
      byController: !0,
    };
    Array.isArray(n.controller.control)
      ? n.controller.control.forEach(($) => {
          !$.destroyed &&
            $.params.loop &&
            $.loopFix({
              ...P,
              slideTo: $.params.slidesPerView === u.slidesPerView ? s : !1,
            });
        })
      : n.controller.control instanceof n.constructor &&
        n.controller.control.params.loop &&
        n.controller.control.loopFix({
          ...P,
          slideTo:
            n.controller.control.params.slidesPerView === u.slidesPerView
              ? s
              : !1,
        });
  }
  n.emit("loopFix");
}
function Zt() {
  const t = this,
    { params: e, slidesEl: s } = t;
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
  t.recalcSlides();
  const i = [];
  t.slides.forEach((r) => {
    const a =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    i[a] = r;
  }),
    t.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    i.forEach((r) => {
      s.append(r);
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0);
}
var Jt = { loopCreate: Ut, loopFix: Kt, loopDestroy: Zt };
function Qt(t) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const s = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (s.style.cursor = "move"),
    (s.style.cursor = t ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function ei() {
  const t = this;
  (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
var ti = { setGrabCursor: Qt, unsetGrabCursor: ei };
function ii(t, e) {
  e === void 0 && (e = this);
  function s(i) {
    if (!i || i === X() || i === G()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(t);
    return !r && !i.getRootNode ? null : r || s(i.getRootNode().host);
  }
  return s(e);
}
function si(t) {
  const e = this,
    s = X(),
    i = G(),
    r = e.touchEventsData;
  r.evCache.push(t);
  const { params: a, touches: c, enabled: d } = e;
  if (
    !d ||
    (!a.simulateTouch && t.pointerType === "mouse") ||
    (e.animating && a.preventInteractionOnTransition)
  )
    return;
  !e.animating && a.cssMode && a.loop && e.loopFix();
  let n = t;
  n.originalEvent && (n = n.originalEvent);
  let f = n.target;
  if (
    (a.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(f)) ||
    ("which" in n && n.which === 3) ||
    ("button" in n && n.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const l = !!a.noSwipingClass && a.noSwipingClass !== "",
    o = t.composedPath ? t.composedPath() : t.path;
  l && n.target && n.target.shadowRoot && o && (f = o[0]);
  const p = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
    u = !!(n.target && n.target.shadowRoot);
  if (a.noSwiping && (u ? ii(p, f) : f.closest(p))) {
    e.allowClick = !0;
    return;
  }
  if (a.swipeHandler && !f.closest(a.swipeHandler)) return;
  (c.currentX = n.pageX), (c.currentY = n.pageY);
  const v = c.currentX,
    w = c.currentY,
    g = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
    b = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
  if (g && (v <= b || v >= i.innerWidth - b))
    if (g === "prevent") t.preventDefault();
    else return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (c.startX = v),
    (c.startY = w),
    (r.touchStartTime = q()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    a.threshold > 0 && (r.allowThresholdMove = !1);
  let h = !0;
  f.matches(r.focusableElements) &&
    ((h = !1), f.nodeName === "SELECT" && (r.isTouched = !1)),
    s.activeElement &&
      s.activeElement.matches(r.focusableElements) &&
      s.activeElement !== f &&
      s.activeElement.blur();
  const m = h && e.allowTouchMove && a.touchStartPreventDefault;
  (a.touchStartForcePreventDefault || m) &&
    !f.isContentEditable &&
    n.preventDefault(),
    a.freeMode &&
      a.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !a.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", n);
}
function ri(t) {
  const e = X(),
    s = this,
    i = s.touchEventsData,
    { params: r, touches: a, rtlTranslate: c, enabled: d } = s;
  if (!d || (!r.simulateTouch && t.pointerType === "mouse")) return;
  let n = t;
  if ((n.originalEvent && (n = n.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", n);
    return;
  }
  const f = i.evCache.findIndex((P) => P.pointerId === n.pointerId);
  f >= 0 && (i.evCache[f] = n);
  const l = i.evCache.length > 1 ? i.evCache[0] : n,
    o = l.pageX,
    p = l.pageY;
  if (n.preventedByNestedSwiper) {
    (a.startX = o), (a.startY = p);
    return;
  }
  if (!s.allowTouchMove) {
    n.target.matches(i.focusableElements) || (s.allowClick = !1),
      i.isTouched &&
        (Object.assign(a, {
          startX: o,
          startY: p,
          prevX: s.touches.currentX,
          prevY: s.touches.currentY,
          currentX: o,
          currentY: p,
        }),
        (i.touchStartTime = q()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (s.isVertical()) {
      if (
        (p < a.startY && s.translate <= s.maxTranslate()) ||
        (p > a.startY && s.translate >= s.minTranslate())
      ) {
        (i.isTouched = !1), (i.isMoved = !1);
        return;
      }
    } else if (
      (o < a.startX && s.translate <= s.maxTranslate()) ||
      (o > a.startX && s.translate >= s.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    n.target === e.activeElement &&
    n.target.matches(i.focusableElements)
  ) {
    (i.isMoved = !0), (s.allowClick = !1);
    return;
  }
  if (
    (i.allowTouchCallbacks && s.emit("touchMove", n),
    n.targetTouches && n.targetTouches.length > 1)
  )
    return;
  (a.currentX = o), (a.currentY = p);
  const u = a.currentX - a.startX,
    v = a.currentY - a.startY;
  if (s.params.threshold && Math.sqrt(u ** 2 + v ** 2) < s.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let P;
    (s.isHorizontal() && a.currentY === a.startY) ||
    (s.isVertical() && a.currentX === a.startX)
      ? (i.isScrolling = !1)
      : u * u + v * v >= 25 &&
        ((P = (Math.atan2(Math.abs(v), Math.abs(u)) * 180) / Math.PI),
        (i.isScrolling = s.isHorizontal()
          ? P > r.touchAngle
          : 90 - P > r.touchAngle));
  }
  if (
    (i.isScrolling && s.emit("touchMoveOpposite", n),
    typeof i.startMoving > "u" &&
      (a.currentX !== a.startX || a.currentY !== a.startY) &&
      (i.startMoving = !0),
    i.isScrolling ||
      (s.zoom &&
        s.params.zoom &&
        s.params.zoom.enabled &&
        i.evCache.length > 1))
  ) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving) return;
  (s.allowClick = !1),
    !r.cssMode && n.cancelable && n.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && n.stopPropagation();
  let w = s.isHorizontal() ? u : v,
    g = s.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
  r.oneWayMovement &&
    ((w = Math.abs(w) * (c ? 1 : -1)), (g = Math.abs(g) * (c ? 1 : -1))),
    (a.diff = w),
    (w *= r.touchRatio),
    c && ((w = -w), (g = -g));
  const b = s.touchesDirection;
  (s.swipeDirection = w > 0 ? "prev" : "next"),
    (s.touchesDirection = g > 0 ? "prev" : "next");
  const h = s.params.loop && !r.cssMode,
    m =
      (s.swipeDirection === "next" && s.allowSlideNext) ||
      (s.swipeDirection === "prev" && s.allowSlidePrev);
  if (!i.isMoved) {
    if (
      (h && m && s.loopFix({ direction: s.swipeDirection }),
      (i.startTranslate = s.getTranslate()),
      s.setTransition(0),
      s.animating)
    ) {
      const P = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      s.wrapperEl.dispatchEvent(P);
    }
    (i.allowMomentumBounce = !1),
      r.grabCursor &&
        (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
        s.setGrabCursor(!0),
      s.emit("sliderFirstMove", n);
  }
  let x;
  i.isMoved &&
    b !== s.touchesDirection &&
    h &&
    m &&
    Math.abs(w) >= 1 &&
    (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (x = !0)),
    s.emit("sliderMove", n),
    (i.isMoved = !0),
    (i.currentTranslate = w + i.startTranslate);
  let T = !0,
    A = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (A = 0),
    w > 0
      ? (h &&
          m &&
          !x &&
          i.currentTranslate >
            (r.centeredSlides
              ? s.minTranslate() - s.size / 2
              : s.minTranslate()) &&
          s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        i.currentTranslate > s.minTranslate() &&
          ((T = !1),
          r.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + w) ** A)))
      : w < 0 &&
        (h &&
          m &&
          !x &&
          i.currentTranslate <
            (r.centeredSlides
              ? s.maxTranslate() + s.size / 2
              : s.maxTranslate()) &&
          s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              s.slides.length -
              (r.slidesPerView === "auto"
                ? s.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        i.currentTranslate < s.maxTranslate() &&
          ((T = !1),
          r.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - w) ** A))),
    T && (n.preventedByNestedSwiper = !0),
    !s.allowSlideNext &&
      s.swipeDirection === "next" &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !s.allowSlidePrev &&
      s.swipeDirection === "prev" &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !s.allowSlidePrev &&
      !s.allowSlideNext &&
      (i.currentTranslate = i.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(w) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        (i.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (i.currentTranslate = i.startTranslate),
          (a.diff = s.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY);
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
      r.watchSlidesProgress) &&
      (s.updateActiveIndex(), s.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
    s.updateProgress(i.currentTranslate),
    s.setTranslate(i.currentTranslate));
}
function ai(t) {
  const e = this,
    s = e.touchEventsData,
    i = s.evCache.findIndex((m) => m.pointerId === t.pointerId);
  if (
    (i >= 0 && s.evCache.splice(i, 1),
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      t.type
    ) &&
      !(
        ["pointercancel", "contextmenu"].includes(t.type) &&
        (e.browser.isSafari || e.browser.isWebView)
      ))
  )
    return;
  const {
    params: r,
    touches: a,
    rtlTranslate: c,
    slidesGrid: d,
    enabled: n,
  } = e;
  if (!n || (!r.simulateTouch && t.pointerType === "mouse")) return;
  let f = t;
  if (
    (f.originalEvent && (f = f.originalEvent),
    s.allowTouchCallbacks && e.emit("touchEnd", f),
    (s.allowTouchCallbacks = !1),
    !s.isTouched)
  ) {
    s.isMoved && r.grabCursor && e.setGrabCursor(!1),
      (s.isMoved = !1),
      (s.startMoving = !1);
    return;
  }
  r.grabCursor &&
    s.isMoved &&
    s.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const l = q(),
    o = l - s.touchStartTime;
  if (e.allowClick) {
    const m = f.path || (f.composedPath && f.composedPath());
    e.updateClickedSlide((m && m[0]) || f.target, m),
      e.emit("tap click", f),
      o < 300 &&
        l - s.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", f);
  }
  if (
    ((s.lastClickTime = q()),
    te(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !s.isTouched ||
      !s.isMoved ||
      !e.swipeDirection ||
      a.diff === 0 ||
      s.currentTranslate === s.startTranslate)
  ) {
    (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
    return;
  }
  (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
  let p;
  if (
    (r.followFinger
      ? (p = c ? e.translate : -e.translate)
      : (p = -s.currentTranslate),
    r.cssMode)
  )
    return;
  if (r.freeMode && r.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  let u = 0,
    v = e.slidesSizesGrid[0];
  for (
    let m = 0;
    m < d.length;
    m += m < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const x = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof d[m + x] < "u"
      ? p >= d[m] && p < d[m + x] && ((u = m), (v = d[m + x] - d[m]))
      : p >= d[m] && ((u = m), (v = d[d.length - 1] - d[d.length - 2]));
  }
  let w = null,
    g = null;
  r.rewind &&
    (e.isBeginning
      ? (g =
          r.virtual && r.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (w = 0));
  const b = (p - d[u]) / v,
    h = u < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (o > r.longSwipesMs) {
    if (!r.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (b >= r.longSwipesRatio
        ? e.slideTo(r.rewind && e.isEnd ? w : u + h)
        : e.slideTo(u)),
      e.swipeDirection === "prev" &&
        (b > 1 - r.longSwipesRatio
          ? e.slideTo(u + h)
          : g !== null && b < 0 && Math.abs(b) > r.longSwipesRatio
          ? e.slideTo(g)
          : e.slideTo(u));
  } else {
    if (!r.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (f.target === e.navigation.nextEl || f.target === e.navigation.prevEl)
      ? f.target === e.navigation.nextEl
        ? e.slideTo(u + h)
        : e.slideTo(u)
      : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : u + h),
        e.swipeDirection === "prev" && e.slideTo(g !== null ? g : u));
  }
}
function Xe() {
  const t = this,
    { params: e, el: s } = t;
  if (s && s.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: i, allowSlidePrev: r, snapGrid: a } = t,
    c = t.virtual && t.params.virtual.enabled;
  (t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses();
  const d = c && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !d
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !c
    ? t.slideToLoop(t.realIndex, 0, !1, !0)
    : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.resume();
      }, 500))),
    (t.allowSlidePrev = r),
    (t.allowSlideNext = i),
    t.params.watchOverflow && a !== t.snapGrid && t.checkOverflow();
}
function ni(t) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function oi() {
  const t = this,
    { wrapperEl: e, rtlTranslate: s, enabled: i } = t;
  if (!i) return;
  (t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
  let r;
  const a = t.maxTranslate() - t.minTranslate();
  a === 0 ? (r = 0) : (r = (t.translate - t.minTranslate()) / a),
    r !== t.progress && t.updateProgress(s ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1);
}
function li(t) {
  const e = this;
  ge(e, t.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
let Ne = !1;
function di() {}
const it = (t, e) => {
  const s = X(),
    { params: i, el: r, wrapperEl: a, device: c } = t,
    d = !!i.nested,
    n = e === "on" ? "addEventListener" : "removeEventListener",
    f = e;
  r[n]("pointerdown", t.onTouchStart, { passive: !1 }),
    s[n]("pointermove", t.onTouchMove, { passive: !1, capture: d }),
    s[n]("pointerup", t.onTouchEnd, { passive: !0 }),
    s[n]("pointercancel", t.onTouchEnd, { passive: !0 }),
    s[n]("pointerout", t.onTouchEnd, { passive: !0 }),
    s[n]("pointerleave", t.onTouchEnd, { passive: !0 }),
    s[n]("contextmenu", t.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) &&
      r[n]("click", t.onClick, !0),
    i.cssMode && a[n]("scroll", t.onScroll),
    i.updateOnWindowResize
      ? t[f](
          c.ios || c.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Xe,
          !0
        )
      : t[f]("observerUpdate", Xe, !0),
    r[n]("load", t.onLoad, { capture: !0 });
};
function ci() {
  const t = this,
    e = X(),
    { params: s } = t;
  (t.onTouchStart = si.bind(t)),
    (t.onTouchMove = ri.bind(t)),
    (t.onTouchEnd = ai.bind(t)),
    s.cssMode && (t.onScroll = oi.bind(t)),
    (t.onClick = ni.bind(t)),
    (t.onLoad = li.bind(t)),
    Ne || (e.addEventListener("touchstart", di), (Ne = !0)),
    it(t, "on");
}
function pi() {
  it(this, "off");
}
var fi = { attachEvents: ci, detachEvents: pi };
const Ye = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function ui() {
  const t = this,
    { realIndex: e, initialized: s, params: i, el: r } = t,
    a = i.breakpoints;
  if (!a || (a && Object.keys(a).length === 0)) return;
  const c = t.getBreakpoint(a, t.params.breakpointsBase, t.el);
  if (!c || t.currentBreakpoint === c) return;
  const n = (c in a ? a[c] : void 0) || t.originalParams,
    f = Ye(t, i),
    l = Ye(t, n),
    o = i.enabled;
  f && !l
    ? (r.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !f &&
      l &&
      (r.classList.add(`${i.containerModifierClass}grid`),
      ((n.grid.fill && n.grid.fill === "column") ||
        (!n.grid.fill && i.grid.fill === "column")) &&
        r.classList.add(`${i.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((b) => {
      if (typeof n[b] > "u") return;
      const h = i[b] && i[b].enabled,
        m = n[b] && n[b].enabled;
      h && !m && t[b].disable(), !h && m && t[b].enable();
    });
  const p = n.direction && n.direction !== i.direction,
    u = i.loop && (n.slidesPerView !== i.slidesPerView || p),
    v = i.loop;
  p && s && t.changeDirection(), V(t.params, n);
  const w = t.params.enabled,
    g = t.params.loop;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    o && !w ? t.disable() : !o && w && t.enable(),
    (t.currentBreakpoint = c),
    t.emit("_beforeBreakpoint", n),
    s &&
      (u
        ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides())
        : !v && g
        ? (t.loopCreate(e), t.updateSlides())
        : v && !g && t.loopDestroy()),
    t.emit("breakpoint", n);
}
function mi(t, e, s) {
  if ((e === void 0 && (e = "window"), !t || (e === "container" && !s))) return;
  let i = !1;
  const r = G(),
    a = e === "window" ? r.innerHeight : s.clientHeight,
    c = Object.keys(t).map((d) => {
      if (typeof d == "string" && d.indexOf("@") === 0) {
        const n = parseFloat(d.substr(1));
        return { value: a * n, point: d };
      }
      return { value: d, point: d };
    });
  c.sort((d, n) => parseInt(d.value, 10) - parseInt(n.value, 10));
  for (let d = 0; d < c.length; d += 1) {
    const { point: n, value: f } = c[d];
    e === "window"
      ? r.matchMedia(`(min-width: ${f}px)`).matches && (i = n)
      : f <= s.clientWidth && (i = n);
  }
  return i || "max";
}
var hi = { setBreakpoint: ui, getBreakpoint: mi };
function gi(t, e) {
  const s = [];
  return (
    t.forEach((i) => {
      typeof i == "object"
        ? Object.keys(i).forEach((r) => {
            i[r] && s.push(e + r);
          })
        : typeof i == "string" && s.push(e + i);
    }),
    s
  );
}
function wi() {
  const t = this,
    { classNames: e, params: s, rtl: i, el: r, device: a } = t,
    c = gi(
      [
        "initialized",
        s.direction,
        { "free-mode": t.params.freeMode && s.freeMode.enabled },
        { autoheight: s.autoHeight },
        { rtl: i },
        { grid: s.grid && s.grid.rows > 1 },
        {
          "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column",
        },
        { android: a.android },
        { ios: a.ios },
        { "css-mode": s.cssMode },
        { centered: s.cssMode && s.centeredSlides },
        { "watch-progress": s.watchSlidesProgress },
      ],
      s.containerModifierClass
    );
  e.push(...c), r.classList.add(...e), t.emitContainerClasses();
}
function vi() {
  const t = this,
    { el: e, classNames: s } = t;
  e.classList.remove(...s), t.emitContainerClasses();
}
var bi = { addClasses: wi, removeClasses: vi };
function yi() {
  const t = this,
    { isLocked: e, params: s } = t,
    { slidesOffsetBefore: i } = s;
  if (i) {
    const r = t.slides.length - 1,
      a = t.slidesGrid[r] + t.slidesSizesGrid[r] + i * 2;
    t.isLocked = t.size > a;
  } else t.isLocked = t.snapGrid.length === 1;
  s.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    s.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var xi = { checkOverflow: yi },
  ke = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Si(t, e) {
  return function (i) {
    i === void 0 && (i = {});
    const r = Object.keys(i)[0],
      a = i[r];
    if (typeof a != "object" || a === null) {
      V(e, i);
      return;
    }
    if (
      (t[r] === !0 && (t[r] = { enabled: !0 }),
      r === "navigation" &&
        t[r] &&
        t[r].enabled &&
        !t[r].prevEl &&
        !t[r].nextEl &&
        (t[r].auto = !0),
      ["pagination", "scrollbar"].indexOf(r) >= 0 &&
        t[r] &&
        t[r].enabled &&
        !t[r].el &&
        (t[r].auto = !0),
      !(r in t && "enabled" in a))
    ) {
      V(e, i);
      return;
    }
    typeof t[r] == "object" && !("enabled" in t[r]) && (t[r].enabled = !0),
      t[r] || (t[r] = { enabled: !1 }),
      V(e, i);
  };
}
const Ae = {
    eventsEmitter: bt,
    update: At,
    translate: Ft,
    transition: Bt,
    slide: qt,
    loop: Jt,
    grabCursor: ti,
    events: fi,
    breakpoints: hi,
    checkOverflow: xi,
    classes: bi,
  },
  Ie = {};
class Y {
  constructor() {
    let e, s;
    for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++)
      r[a] = arguments[a];
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
      ? (s = r[0])
      : ([e, s] = r),
      s || (s = {}),
      (s = V({}, s)),
      e && !s.el && (s.el = e);
    const c = X();
    if (
      s.el &&
      typeof s.el == "string" &&
      c.querySelectorAll(s.el).length > 1
    ) {
      const l = [];
      return (
        c.querySelectorAll(s.el).forEach((o) => {
          const p = V({}, s, { el: o });
          l.push(new Y(p));
        }),
        l
      );
    }
    const d = this;
    (d.__swiper__ = !0),
      (d.support = et()),
      (d.device = mt({ userAgent: s.userAgent })),
      (d.browser = gt()),
      (d.eventsListeners = {}),
      (d.eventsAnyListeners = []),
      (d.modules = [...d.__modules__]),
      s.modules && Array.isArray(s.modules) && d.modules.push(...s.modules);
    const n = {};
    d.modules.forEach((l) => {
      l({
        params: s,
        swiper: d,
        extendParams: Si(s, n),
        on: d.on.bind(d),
        once: d.once.bind(d),
        off: d.off.bind(d),
        emit: d.emit.bind(d),
      });
    });
    const f = V({}, ke, n);
    return (
      (d.params = V({}, f, Ie, s)),
      (d.originalParams = V({}, d.params)),
      (d.passedParams = V({}, s)),
      d.params &&
        d.params.on &&
        Object.keys(d.params.on).forEach((l) => {
          d.on(l, d.params.on[l]);
        }),
      d.params && d.params.onAny && d.onAny(d.params.onAny),
      Object.assign(d, {
        enabled: d.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return d.params.direction === "horizontal";
        },
        isVertical() {
          return d.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: d.params.allowSlideNext,
        allowSlidePrev: d.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: d.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: d.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      d.emit("_swiper"),
      d.params.init && d.init(),
      d
    );
  }
  getSlideIndex(e) {
    const { slidesEl: s, params: i } = this,
      r = R(s, `.${i.slideClass}, swiper-slide`),
      a = pe(r[0]);
    return pe(e) - a;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (s) => s.getAttribute("data-swiper-slide-index") * 1 === e
      )[0]
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: s, params: i } = e;
    e.slides = R(s, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, s) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = i.minTranslate(),
      c = (i.maxTranslate() - r) * e + r;
    i.translateTo(c, typeof s > "u" ? 0 : s),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const s = e.el.className
      .split(" ")
      .filter(
        (i) =>
          i.indexOf("swiper") === 0 ||
          i.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", s.join(" "));
  }
  getSlideClasses(e) {
    const s = this;
    return s.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (i) =>
              i.indexOf("swiper-slide") === 0 ||
              i.indexOf(s.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const s = [];
    e.slides.forEach((i) => {
      const r = e.getSlideClasses(i);
      s.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
    }),
      e.emit("_slideClasses", s);
  }
  slidesPerViewDynamic(e, s) {
    e === void 0 && (e = "current"), s === void 0 && (s = !1);
    const i = this,
      {
        params: r,
        slides: a,
        slidesGrid: c,
        slidesSizesGrid: d,
        size: n,
        activeIndex: f,
      } = i;
    let l = 1;
    if (typeof r.slidesPerView == "number") return r.slidesPerView;
    if (r.centeredSlides) {
      let o = a[f] ? a[f].swiperSlideSize : 0,
        p;
      for (let u = f + 1; u < a.length; u += 1)
        a[u] &&
          !p &&
          ((o += a[u].swiperSlideSize), (l += 1), o > n && (p = !0));
      for (let u = f - 1; u >= 0; u -= 1)
        a[u] &&
          !p &&
          ((o += a[u].swiperSlideSize), (l += 1), o > n && (p = !0));
    } else if (e === "current")
      for (let o = f + 1; o < a.length; o += 1)
        (s ? c[o] + d[o] - c[f] < n : c[o] - c[f] < n) && (l += 1);
    else for (let o = f - 1; o >= 0; o -= 1) c[f] - c[o] < n && (l += 1);
    return l;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: s, params: i } = e;
    i.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((c) => {
        c.complete && ge(e, c);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function r() {
      const c = e.rtlTranslate ? e.translate * -1 : e.translate,
        d = Math.min(Math.max(c, e.maxTranslate()), e.minTranslate());
      e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let a;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      r(), i.autoHeight && e.updateAutoHeight();
    else {
      if (
        (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
        e.isEnd &&
        !i.centeredSlides
      ) {
        const c = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
        a = e.slideTo(c.length - 1, 0, !1, !0);
      } else a = e.slideTo(e.activeIndex, 0, !1, !0);
      a || r();
    }
    i.watchOverflow && s !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, s) {
    s === void 0 && (s = !0);
    const i = this,
      r = i.params.direction;
    return (
      e || (e = r === "horizontal" ? "vertical" : "horizontal"),
      e === r ||
        (e !== "horizontal" && e !== "vertical") ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
        i.el.classList.add(`${i.params.containerModifierClass}${e}`),
        i.emitContainerClasses(),
        (i.params.direction = e),
        i.slides.forEach((a) => {
          e === "vertical" ? (a.style.width = "") : (a.style.height = "");
        }),
        i.emit("changeDirection"),
        s && i.update()),
      i
    );
  }
  changeLanguageDirection(e) {
    const s = this;
    (s.rtl && e === "rtl") ||
      (!s.rtl && e === "ltr") ||
      ((s.rtl = e === "rtl"),
      (s.rtlTranslate = s.params.direction === "horizontal" && s.rtl),
      s.rtl
        ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`),
          (s.el.dir = "rtl"))
        : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`),
          (s.el.dir = "ltr")),
      s.update());
  }
  mount(e) {
    const s = this;
    if (s.mounted) return !0;
    let i = e || s.params.el;
    if ((typeof i == "string" && (i = document.querySelector(i)), !i))
      return !1;
    (i.swiper = s),
      i.parentNode &&
        i.parentNode.host &&
        i.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (s.isElement = !0);
    const r = () =>
      `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let c =
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(r())
        : R(i, r())[0];
    return (
      !c &&
        s.params.createElements &&
        ((c = U("div", s.params.wrapperClass)),
        i.append(c),
        R(i, `.${s.params.slideClass}`).forEach((d) => {
          c.append(d);
        })),
      Object.assign(s, {
        el: i,
        wrapperEl: c,
        slidesEl:
          s.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : c,
        hostEl: s.isElement ? i.parentNode.host : i,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || J(i, "direction") === "rtl",
        rtlTranslate:
          s.params.direction === "horizontal" &&
          (i.dir.toLowerCase() === "rtl" || J(i, "direction") === "rtl"),
        wrongRTL: J(c, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const s = this;
    if (s.initialized || s.mount(e) === !1) return s;
    s.emit("beforeInit"),
      s.params.breakpoints && s.setBreakpoint(),
      s.addClasses(),
      s.updateSize(),
      s.updateSlides(),
      s.params.watchOverflow && s.checkOverflow(),
      s.params.grabCursor && s.enabled && s.setGrabCursor(),
      s.params.loop && s.virtual && s.params.virtual.enabled
        ? s.slideTo(
            s.params.initialSlide + s.virtual.slidesBefore,
            0,
            s.params.runCallbacksOnInit,
            !1,
            !0
          )
        : s.slideTo(
            s.params.initialSlide,
            0,
            s.params.runCallbacksOnInit,
            !1,
            !0
          ),
      s.params.loop && s.loopCreate(),
      s.attachEvents();
    const r = [...s.el.querySelectorAll('[loading="lazy"]')];
    return (
      s.isElement && r.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((a) => {
        a.complete
          ? ge(s, a)
          : a.addEventListener("load", (c) => {
              ge(s, c.target);
            });
      }),
      De(s),
      (s.initialized = !0),
      De(s),
      s.emit("init"),
      s.emit("afterInit"),
      s
    );
  }
  destroy(e, s) {
    e === void 0 && (e = !0), s === void 0 && (s = !0);
    const i = this,
      { params: r, el: a, wrapperEl: c, slides: d } = i;
    return (
      typeof i.params > "u" ||
        i.destroyed ||
        (i.emit("beforeDestroy"),
        (i.initialized = !1),
        i.detachEvents(),
        r.loop && i.loopDestroy(),
        s &&
          (i.removeClasses(),
          a.removeAttribute("style"),
          c.removeAttribute("style"),
          d &&
            d.length &&
            d.forEach((n) => {
              n.classList.remove(
                r.slideVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass
              ),
                n.removeAttribute("style"),
                n.removeAttribute("data-swiper-slide-index");
            })),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach((n) => {
          i.off(n);
        }),
        e !== !1 && ((i.el.swiper = null), ot(i)),
        (i.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    V(Ie, e);
  }
  static get extendedDefaults() {
    return Ie;
  }
  static get defaults() {
    return ke;
  }
  static installModule(e) {
    Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
    const s = Y.prototype.__modules__;
    typeof e == "function" && s.indexOf(e) < 0 && s.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((s) => Y.installModule(s)), Y)
      : (Y.installModule(e), Y);
  }
}
Object.keys(Ae).forEach((t) => {
  Object.keys(Ae[t]).forEach((e) => {
    Y.prototype[e] = Ae[t][e];
  });
});
Y.use([wt, vt]);
const ye = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function se(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object" &&
    !t.__swiper__
  );
}
function be(t, e) {
  const s = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((i) => s.indexOf(i) < 0)
    .forEach((i) => {
      typeof t[i] > "u"
        ? (t[i] = e[i])
        : se(e[i]) && se(t[i]) && Object.keys(e[i]).length > 0
        ? e[i].__swiper__
          ? (t[i] = e[i])
          : be(t[i], e[i])
        : (t[i] = e[i]);
    });
}
function Ei(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl > "u" &&
      typeof t.navigation.prevEl > "u"
  );
}
function Ti(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function Ci(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function cs(t) {
  t === void 0 && (t = "");
  const e = t
      .split(" ")
      .map((i) => i.trim())
      .filter((i) => !!i),
    s = [];
  return (
    e.forEach((i) => {
      s.indexOf(i) < 0 && s.push(i);
    }),
    s.join(" ")
  );
}
function we(t) {
  return (
    t === void 0 && (t = ""),
    t.replace(/-[a-z]/g, (e) => e.toUpperCase().replace("-", ""))
  );
}
function ps(t) {
  return (
    t === void 0 && (t = ""),
    t
      ? t.includes("swiper-wrapper")
        ? t
        : `swiper-wrapper ${t}`
      : "swiper-wrapper"
  );
}
function Mi(t) {
  let {
    swiper: e,
    slides: s,
    passedParams: i,
    changedParams: r,
    nextEl: a,
    prevEl: c,
    scrollbarEl: d,
    paginationEl: n,
  } = t;
  const f = r.filter(
      (S) => S !== "children" && S !== "direction" && S !== "wrapperClass"
    ),
    {
      params: l,
      pagination: o,
      navigation: p,
      scrollbar: u,
      virtual: v,
      thumbs: w,
    } = e;
  let g, b, h, m, x, T, A, P;
  r.includes("thumbs") &&
    i.thumbs &&
    i.thumbs.swiper &&
    l.thumbs &&
    !l.thumbs.swiper &&
    (g = !0),
    r.includes("controller") &&
      i.controller &&
      i.controller.control &&
      l.controller &&
      !l.controller.control &&
      (b = !0),
    r.includes("pagination") &&
      i.pagination &&
      (i.pagination.el || n) &&
      (l.pagination || l.pagination === !1) &&
      o &&
      !o.el &&
      (h = !0),
    r.includes("scrollbar") &&
      i.scrollbar &&
      (i.scrollbar.el || d) &&
      (l.scrollbar || l.scrollbar === !1) &&
      u &&
      !u.el &&
      (m = !0),
    r.includes("navigation") &&
      i.navigation &&
      (i.navigation.prevEl || c) &&
      (i.navigation.nextEl || a) &&
      (l.navigation || l.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (x = !0);
  const $ = (S) => {
    e[S] &&
      (e[S].destroy(),
      S === "navigation"
        ? (e.isElement && (e[S].prevEl.remove(), e[S].nextEl.remove()),
          (l[S].prevEl = void 0),
          (l[S].nextEl = void 0),
          (e[S].prevEl = void 0),
          (e[S].nextEl = void 0))
        : (e.isElement && e[S].el.remove(),
          (l[S].el = void 0),
          (e[S].el = void 0)));
  };
  r.includes("loop") &&
    e.isElement &&
    (l.loop && !i.loop ? (T = !0) : !l.loop && i.loop ? (A = !0) : (P = !0)),
    f.forEach((S) => {
      if (se(l[S]) && se(i[S]))
        be(l[S], i[S]),
          (S === "navigation" || S === "pagination" || S === "scrollbar") &&
            "enabled" in i[S] &&
            !i[S].enabled &&
            $(S);
      else {
        const k = i[S];
        (k === !0 || k === !1) &&
        (S === "navigation" || S === "pagination" || S === "scrollbar")
          ? k === !1 && $(S)
          : (l[S] = i[S]);
      }
    }),
    f.includes("controller") &&
      !b &&
      e.controller &&
      e.controller.control &&
      l.controller &&
      l.controller.control &&
      (e.controller.control = l.controller.control),
    r.includes("children") &&
      s &&
      v &&
      l.virtual.enabled &&
      ((v.slides = s), v.update(!0)),
    r.includes("children") && s && l.loop && (P = !0),
    g && w.init() && w.update(!0),
    b && (e.controller.control = l.controller.control),
    h &&
      (e.isElement &&
        (!n || typeof n == "string") &&
        ((n = document.createElement("div")),
        n.classList.add("swiper-pagination"),
        n.part.add("pagination"),
        e.el.appendChild(n)),
      n && (l.pagination.el = n),
      o.init(),
      o.render(),
      o.update()),
    m &&
      (e.isElement &&
        (!d || typeof d == "string") &&
        ((d = document.createElement("div")),
        d.classList.add("swiper-scrollbar"),
        d.part.add("scrollbar"),
        e.el.appendChild(d)),
      d && (l.scrollbar.el = d),
      u.init(),
      u.updateSize(),
      u.setTranslate()),
    x &&
      (e.isElement &&
        ((!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-next"),
          (a.innerHTML = e.hostEl.constructor.nextButtonSvg),
          a.part.add("button-next"),
          e.el.appendChild(a)),
        (!c || typeof c == "string") &&
          ((c = document.createElement("div")),
          c.classList.add("swiper-button-prev"),
          (c.innerHTML = e.hostEl.constructor.prevButtonSvg),
          c.part.add("button-prev"),
          e.el.appendChild(c))),
      a && (l.navigation.nextEl = a),
      c && (l.navigation.prevEl = c),
      p.init(),
      p.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
    r.includes("direction") && e.changeDirection(i.direction, !1),
    (T || P) && e.loopDestroy(),
    (A || P) && e.loopCreate(),
    e.update();
}
function Pi(t) {
  let { swiper: e, extendParams: s, on: i, emit: r } = t;
  s({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  });
  let a;
  const c = X();
  e.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: [],
  };
  const d = c.createElement("div");
  function n(v, w) {
    const g = e.params.virtual;
    if (g.cache && e.virtual.cache[w]) return e.virtual.cache[w];
    let b;
    return (
      g.renderSlide
        ? ((b = g.renderSlide.call(e, v, w)),
          typeof b == "string" && ((d.innerHTML = b), (b = d.children[0])))
        : e.isElement
        ? (b = U("swiper-slide"))
        : (b = U("div", e.params.slideClass)),
      b.setAttribute("data-swiper-slide-index", w),
      g.renderSlide || (b.innerHTML = v),
      g.cache && (e.virtual.cache[w] = b),
      b
    );
  }
  function f(v) {
    const {
        slidesPerView: w,
        slidesPerGroup: g,
        centeredSlides: b,
        loop: h,
      } = e.params,
      { addSlidesBefore: m, addSlidesAfter: x } = e.params.virtual,
      { from: T, to: A, slides: P, slidesGrid: $, offset: S } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const k = e.activeIndex || 0;
    let L;
    e.rtlTranslate ? (L = "right") : (L = e.isHorizontal() ? "left" : "top");
    let z, C;
    b
      ? ((z = Math.floor(w / 2) + g + x), (C = Math.floor(w / 2) + g + m))
      : ((z = w + (g - 1) + x), (C = (h ? w : g) + m));
    let y = k - C,
      E = k + z;
    h || ((y = Math.max(y, 0)), (E = Math.min(E, P.length - 1)));
    let D = (e.slidesGrid[y] || 0) - (e.slidesGrid[0] || 0);
    h && k >= C
      ? ((y -= C), b || (D += e.slidesGrid[0]))
      : h && k < C && ((y = -C), b && (D += e.slidesGrid[0])),
      Object.assign(e.virtual, {
        from: y,
        to: E,
        offset: D,
        slidesGrid: e.slidesGrid,
        slidesBefore: C,
        slidesAfter: z,
      });
    function M() {
      e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        r("virtualUpdate");
    }
    if (T === y && A === E && !v) {
      e.slidesGrid !== $ &&
        D !== S &&
        e.slides.forEach((_) => {
          _.style[L] = `${D - Math.abs(e.cssOverflowAdjustment())}px`;
        }),
        e.updateProgress(),
        r("virtualUpdate");
      return;
    }
    if (e.params.virtual.renderExternal) {
      e.params.virtual.renderExternal.call(e, {
        offset: D,
        from: y,
        to: E,
        slides: (function () {
          const H = [];
          for (let W = y; W <= E; W += 1) H.push(P[W]);
          return H;
        })(),
      }),
        e.params.virtual.renderExternalUpdate ? M() : r("virtualUpdate");
      return;
    }
    const O = [],
      I = [],
      j = (_) => {
        let H = _;
        return (
          _ < 0 ? (H = P.length + _) : H >= P.length && (H = H - P.length), H
        );
      };
    if (v)
      e.slides
        .filter((_) => _.matches(`.${e.params.slideClass}, swiper-slide`))
        .forEach((_) => {
          _.remove();
        });
    else
      for (let _ = T; _ <= A; _ += 1)
        if (_ < y || _ > E) {
          const H = j(_);
          e.slides
            .filter((W) =>
              W.matches(
                `.${e.params.slideClass}[data-swiper-slide-index="${H}"], swiper-slide[data-swiper-slide-index="${H}"]`
              )
            )
            .forEach((W) => {
              W.remove();
            });
        }
    const B = h ? -P.length : 0,
      N = h ? P.length * 2 : P.length;
    for (let _ = B; _ < N; _ += 1)
      if (_ >= y && _ <= E) {
        const H = j(_);
        typeof A > "u" || v
          ? I.push(H)
          : (_ > A && I.push(H), _ < T && O.push(H));
      }
    if (
      (I.forEach((_) => {
        e.slidesEl.append(n(P[_], _));
      }),
      h)
    )
      for (let _ = O.length - 1; _ >= 0; _ -= 1) {
        const H = O[_];
        e.slidesEl.prepend(n(P[H], H));
      }
    else
      O.sort((_, H) => H - _),
        O.forEach((_) => {
          e.slidesEl.prepend(n(P[_], _));
        });
    R(e.slidesEl, ".swiper-slide, swiper-slide").forEach((_) => {
      _.style[L] = `${D - Math.abs(e.cssOverflowAdjustment())}px`;
    }),
      M();
  }
  function l(v) {
    if (typeof v == "object" && "length" in v)
      for (let w = 0; w < v.length; w += 1) v[w] && e.virtual.slides.push(v[w]);
    else e.virtual.slides.push(v);
    f(!0);
  }
  function o(v) {
    const w = e.activeIndex;
    let g = w + 1,
      b = 1;
    if (Array.isArray(v)) {
      for (let h = 0; h < v.length; h += 1)
        v[h] && e.virtual.slides.unshift(v[h]);
      (g = w + v.length), (b = v.length);
    } else e.virtual.slides.unshift(v);
    if (e.params.virtual.cache) {
      const h = e.virtual.cache,
        m = {};
      Object.keys(h).forEach((x) => {
        const T = h[x],
          A = T.getAttribute("data-swiper-slide-index");
        A && T.setAttribute("data-swiper-slide-index", parseInt(A, 10) + b),
          (m[parseInt(x, 10) + b] = T);
      }),
        (e.virtual.cache = m);
    }
    f(!0), e.slideTo(g, 0);
  }
  function p(v) {
    if (typeof v > "u" || v === null) return;
    let w = e.activeIndex;
    if (Array.isArray(v))
      for (let g = v.length - 1; g >= 0; g -= 1)
        e.params.virtual.cache &&
          (delete e.virtual.cache[v[g]],
          Object.keys(e.virtual.cache).forEach((b) => {
            b > v &&
              ((e.virtual.cache[b - 1] = e.virtual.cache[b]),
              e.virtual.cache[b - 1].setAttribute(
                "data-swiper-slide-index",
                b - 1
              ),
              delete e.virtual.cache[b]);
          })),
          e.virtual.slides.splice(v[g], 1),
          v[g] < w && (w -= 1),
          (w = Math.max(w, 0));
    else
      e.params.virtual.cache &&
        (delete e.virtual.cache[v],
        Object.keys(e.virtual.cache).forEach((g) => {
          g > v &&
            ((e.virtual.cache[g - 1] = e.virtual.cache[g]),
            e.virtual.cache[g - 1].setAttribute(
              "data-swiper-slide-index",
              g - 1
            ),
            delete e.virtual.cache[g]);
        })),
        e.virtual.slides.splice(v, 1),
        v < w && (w -= 1),
        (w = Math.max(w, 0));
    f(!0), e.slideTo(w, 0);
  }
  function u() {
    (e.virtual.slides = []),
      e.params.virtual.cache && (e.virtual.cache = {}),
      f(!0),
      e.slideTo(0, 0);
  }
  i("beforeInit", () => {
    if (!e.params.virtual.enabled) return;
    let v;
    if (typeof e.passedParams.virtual.slides > "u") {
      const w = [...e.slidesEl.children].filter((g) =>
        g.matches(`.${e.params.slideClass}, swiper-slide`)
      );
      w &&
        w.length &&
        ((e.virtual.slides = [...w]),
        (v = !0),
        w.forEach((g, b) => {
          g.setAttribute("data-swiper-slide-index", b),
            (e.virtual.cache[b] = g),
            g.remove();
        }));
    }
    v || (e.virtual.slides = e.params.virtual.slides),
      e.classNames.push(`${e.params.containerModifierClass}virtual`),
      (e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0),
      f();
  }),
    i("setTranslate", () => {
      e.params.virtual.enabled &&
        (e.params.cssMode && !e._immediateVirtual
          ? (clearTimeout(a),
            (a = setTimeout(() => {
              f();
            }, 100)))
          : f());
    }),
    i("init update resize", () => {
      e.params.virtual.enabled &&
        e.params.cssMode &&
        de(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
    }),
    Object.assign(e.virtual, {
      appendSlide: l,
      prependSlide: o,
      removeSlide: p,
      removeAllSlides: u,
      update: f,
    });
}
function zi(t) {
  let { swiper: e, extendParams: s, on: i, emit: r } = t;
  const a = X(),
    c = G();
  (e.keyboard = { enabled: !1 }),
    s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function d(l) {
    if (!e.enabled) return;
    const { rtlTranslate: o } = e;
    let p = l;
    p.originalEvent && (p = p.originalEvent);
    const u = p.keyCode || p.charCode,
      v = e.params.keyboard.pageUpDown,
      w = v && u === 33,
      g = v && u === 34,
      b = u === 37,
      h = u === 39,
      m = u === 38,
      x = u === 40;
    if (
      (!e.allowSlideNext &&
        ((e.isHorizontal() && h) || (e.isVertical() && x) || g)) ||
      (!e.allowSlidePrev &&
        ((e.isHorizontal() && b) || (e.isVertical() && m) || w))
    )
      return !1;
    if (
      !(p.shiftKey || p.altKey || p.ctrlKey || p.metaKey) &&
      !(
        a.activeElement &&
        a.activeElement.nodeName &&
        (a.activeElement.nodeName.toLowerCase() === "input" ||
          a.activeElement.nodeName.toLowerCase() === "textarea")
      )
    ) {
      if (e.params.keyboard.onlyInViewport && (w || g || b || h || m || x)) {
        let T = !1;
        if (
          ee(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
          ee(e.el, `.${e.params.slideActiveClass}`).length === 0
        )
          return;
        const A = e.el,
          P = A.clientWidth,
          $ = A.clientHeight,
          S = c.innerWidth,
          k = c.innerHeight,
          L = ve(A);
        o && (L.left -= A.scrollLeft);
        const z = [
          [L.left, L.top],
          [L.left + P, L.top],
          [L.left, L.top + $],
          [L.left + P, L.top + $],
        ];
        for (let C = 0; C < z.length; C += 1) {
          const y = z[C];
          if (y[0] >= 0 && y[0] <= S && y[1] >= 0 && y[1] <= k) {
            if (y[0] === 0 && y[1] === 0) continue;
            T = !0;
          }
        }
        if (!T) return;
      }
      e.isHorizontal()
        ? ((w || g || b || h) &&
            (p.preventDefault ? p.preventDefault() : (p.returnValue = !1)),
          (((g || h) && !o) || ((w || b) && o)) && e.slideNext(),
          (((w || b) && !o) || ((g || h) && o)) && e.slidePrev())
        : ((w || g || m || x) &&
            (p.preventDefault ? p.preventDefault() : (p.returnValue = !1)),
          (g || x) && e.slideNext(),
          (w || m) && e.slidePrev()),
        r("keyPress", u);
    }
  }
  function n() {
    e.keyboard.enabled ||
      (a.addEventListener("keydown", d), (e.keyboard.enabled = !0));
  }
  function f() {
    e.keyboard.enabled &&
      (a.removeEventListener("keydown", d), (e.keyboard.enabled = !1));
  }
  i("init", () => {
    e.params.keyboard.enabled && n();
  }),
    i("destroy", () => {
      e.keyboard.enabled && f();
    }),
    Object.assign(e.keyboard, { enable: n, disable: f });
}
function Li(t) {
  let { swiper: e, extendParams: s, on: i, emit: r } = t;
  const a = G();
  s({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel",
    },
  }),
    (e.mousewheel = { enabled: !1 });
  let c,
    d = q(),
    n;
  const f = [];
  function l(m) {
    let P = 0,
      $ = 0,
      S = 0,
      k = 0;
    return (
      "detail" in m && ($ = m.detail),
      "wheelDelta" in m && ($ = -m.wheelDelta / 120),
      "wheelDeltaY" in m && ($ = -m.wheelDeltaY / 120),
      "wheelDeltaX" in m && (P = -m.wheelDeltaX / 120),
      "axis" in m && m.axis === m.HORIZONTAL_AXIS && ((P = $), ($ = 0)),
      (S = P * 10),
      (k = $ * 10),
      "deltaY" in m && (k = m.deltaY),
      "deltaX" in m && (S = m.deltaX),
      m.shiftKey && !S && ((S = k), (k = 0)),
      (S || k) &&
        m.deltaMode &&
        (m.deltaMode === 1 ? ((S *= 40), (k *= 40)) : ((S *= 800), (k *= 800))),
      S && !P && (P = S < 1 ? -1 : 1),
      k && !$ && ($ = k < 1 ? -1 : 1),
      { spinX: P, spinY: $, pixelX: S, pixelY: k }
    );
  }
  function o() {
    e.enabled && (e.mouseEntered = !0);
  }
  function p() {
    e.enabled && (e.mouseEntered = !1);
  }
  function u(m) {
    return (e.params.mousewheel.thresholdDelta &&
      m.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime &&
        q() - d < e.params.mousewheel.thresholdTime)
      ? !1
      : m.delta >= 6 && q() - d < 60
      ? !0
      : (m.direction < 0
          ? (!e.isEnd || e.params.loop) &&
            !e.animating &&
            (e.slideNext(), r("scroll", m.raw))
          : (!e.isBeginning || e.params.loop) &&
            !e.animating &&
            (e.slidePrev(), r("scroll", m.raw)),
        (d = new a.Date().getTime()),
        !1);
  }
  function v(m) {
    const x = e.params.mousewheel;
    if (m.direction < 0) {
      if (e.isEnd && !e.params.loop && x.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && x.releaseOnEdges) return !0;
    return !1;
  }
  function w(m) {
    let x = m,
      T = !0;
    if (
      !e.enabled ||
      m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
    )
      return;
    const A = e.params.mousewheel;
    e.params.cssMode && x.preventDefault();
    let P = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (P = document.querySelector(e.params.mousewheel.eventsTarget));
    const $ = P && P.contains(x.target);
    if (!e.mouseEntered && !$ && !A.releaseOnEdges) return !0;
    x.originalEvent && (x = x.originalEvent);
    let S = 0;
    const k = e.rtlTranslate ? -1 : 1,
      L = l(x);
    if (A.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) S = -L.pixelX * k;
        else return !0;
      else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) S = -L.pixelY;
      else return !0;
    else
      S = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * k : -L.pixelY;
    if (S === 0) return !0;
    A.invert && (S = -S);
    let z = e.getTranslate() + S * A.sensitivity;
    if (
      (z >= e.minTranslate() && (z = e.minTranslate()),
      z <= e.maxTranslate() && (z = e.maxTranslate()),
      (T = e.params.loop
        ? !0
        : !(z === e.minTranslate() || z === e.maxTranslate())),
      T && e.params.nested && x.stopPropagation(),
      !e.params.freeMode || !e.params.freeMode.enabled)
    ) {
      const C = {
        time: q(),
        delta: Math.abs(S),
        direction: Math.sign(S),
        raw: m,
      };
      f.length >= 2 && f.shift();
      const y = f.length ? f[f.length - 1] : void 0;
      if (
        (f.push(C),
        y
          ? (C.direction !== y.direction ||
              C.delta > y.delta ||
              C.time > y.time + 150) &&
            u(C)
          : u(C),
        v(C))
      )
        return !0;
    } else {
      const C = { time: q(), delta: Math.abs(S), direction: Math.sign(S) },
        y =
          n &&
          C.time < n.time + 500 &&
          C.delta <= n.delta &&
          C.direction === n.direction;
      if (!y) {
        n = void 0;
        let E = e.getTranslate() + S * A.sensitivity;
        const D = e.isBeginning,
          M = e.isEnd;
        if (
          (E >= e.minTranslate() && (E = e.minTranslate()),
          E <= e.maxTranslate() && (E = e.maxTranslate()),
          e.setTransition(0),
          e.setTranslate(E),
          e.updateProgress(),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          ((!D && e.isBeginning) || (!M && e.isEnd)) && e.updateSlidesClasses(),
          e.params.loop &&
            e.loopFix({
              direction: C.direction < 0 ? "next" : "prev",
              byMousewheel: !0,
            }),
          e.params.freeMode.sticky)
        ) {
          clearTimeout(c), (c = void 0), f.length >= 15 && f.shift();
          const O = f.length ? f[f.length - 1] : void 0,
            I = f[0];
          if (
            (f.push(C), O && (C.delta > O.delta || C.direction !== O.direction))
          )
            f.splice(0);
          else if (
            f.length >= 15 &&
            C.time - I.time < 500 &&
            I.delta - C.delta >= 1 &&
            C.delta <= 6
          ) {
            const j = S > 0 ? 0.8 : 0.2;
            (n = C),
              f.splice(0),
              (c = te(() => {
                e.slideToClosest(e.params.speed, !0, void 0, j);
              }, 0));
          }
          c ||
            (c = te(() => {
              (n = C),
                f.splice(0),
                e.slideToClosest(e.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (y || r("scroll", x),
          e.params.autoplay &&
            e.params.autoplayDisableOnInteraction &&
            e.autoplay.stop(),
          A.releaseOnEdges &&
            (E === e.minTranslate() || E === e.maxTranslate()))
        )
          return !0;
      }
    }
    return x.preventDefault ? x.preventDefault() : (x.returnValue = !1), !1;
  }
  function g(m) {
    let x = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (x = document.querySelector(e.params.mousewheel.eventsTarget)),
      x[m]("mouseenter", o),
      x[m]("mouseleave", p),
      x[m]("wheel", w);
  }
  function b() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener("wheel", w), !0)
      : e.mousewheel.enabled
      ? !1
      : (g("addEventListener"), (e.mousewheel.enabled = !0), !0);
  }
  function h() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, w), !0)
      : e.mousewheel.enabled
      ? (g("removeEventListener"), (e.mousewheel.enabled = !1), !0)
      : !1;
  }
  i("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && h(),
      e.params.mousewheel.enabled && b();
  }),
    i("destroy", () => {
      e.params.cssMode && b(), e.mousewheel.enabled && h();
    }),
    Object.assign(e.mousewheel, { enable: b, disable: h });
}
function _e(t, e, s, i) {
  return (
    t.params.createElements &&
      Object.keys(i).forEach((r) => {
        if (!s[r] && s.auto === !0) {
          let a = R(t.el, `.${i[r]}`)[0];
          a || ((a = U("div", i[r])), (a.className = i[r]), t.el.append(a)),
            (s[r] = a),
            (e[r] = a);
        }
      }),
    s
  );
}
function Ai(t) {
  let { swiper: e, extendParams: s, on: i, emit: r } = t;
  s({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  const a = (w) => (Array.isArray(w) ? w : [w]).filter((g) => !!g);
  function c(w) {
    let g;
    return w &&
      typeof w == "string" &&
      e.isElement &&
      ((g = e.el.querySelector(w)), g)
      ? g
      : (w &&
          (typeof w == "string" && (g = [...document.querySelectorAll(w)]),
          e.params.uniqueNavElements &&
            typeof w == "string" &&
            g.length > 1 &&
            e.el.querySelectorAll(w).length === 1 &&
            (g = e.el.querySelector(w))),
        w && !g ? w : g);
  }
  function d(w, g) {
    const b = e.params.navigation;
    (w = a(w)),
      w.forEach((h) => {
        h &&
          (h.classList[g ? "add" : "remove"](...b.disabledClass.split(" ")),
          h.tagName === "BUTTON" && (h.disabled = g),
          e.params.watchOverflow &&
            e.enabled &&
            h.classList[e.isLocked ? "add" : "remove"](b.lockClass));
      });
  }
  function n() {
    const { nextEl: w, prevEl: g } = e.navigation;
    if (e.params.loop) {
      d(g, !1), d(w, !1);
      return;
    }
    d(g, e.isBeginning && !e.params.rewind), d(w, e.isEnd && !e.params.rewind);
  }
  function f(w) {
    w.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r("navigationPrev"));
  }
  function l(w) {
    w.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r("navigationNext"));
  }
  function o() {
    const w = e.params.navigation;
    if (
      ((e.params.navigation = _e(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(w.nextEl || w.prevEl))
    )
      return;
    let g = c(w.nextEl),
      b = c(w.prevEl);
    Object.assign(e.navigation, { nextEl: g, prevEl: b }),
      (g = a(g)),
      (b = a(b));
    const h = (m, x) => {
      m && m.addEventListener("click", x === "next" ? l : f),
        !e.enabled && m && m.classList.add(...w.lockClass.split(" "));
    };
    g.forEach((m) => h(m, "next")), b.forEach((m) => h(m, "prev"));
  }
  function p() {
    let { nextEl: w, prevEl: g } = e.navigation;
    (w = a(w)), (g = a(g));
    const b = (h, m) => {
      h.removeEventListener("click", m === "next" ? l : f),
        h.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    w.forEach((h) => b(h, "next")), g.forEach((h) => b(h, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? v() : (o(), n());
  }),
    i("toEdge fromEdge lock unlock", () => {
      n();
    }),
    i("destroy", () => {
      p();
    }),
    i("enable disable", () => {
      let { nextEl: w, prevEl: g } = e.navigation;
      if (((w = a(w)), (g = a(g)), e.enabled)) {
        n();
        return;
      }
      [...w, ...g]
        .filter((b) => !!b)
        .forEach((b) => b.classList.add(e.params.navigation.lockClass));
    }),
    i("click", (w, g) => {
      let { nextEl: b, prevEl: h } = e.navigation;
      (b = a(b)), (h = a(h));
      const m = g.target;
      if (e.params.navigation.hideOnClick && !h.includes(m) && !b.includes(m)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === m || e.pagination.el.contains(m))
        )
          return;
        let x;
        b.length
          ? (x = b[0].classList.contains(e.params.navigation.hiddenClass))
          : h.length &&
            (x = h[0].classList.contains(e.params.navigation.hiddenClass)),
          r(x === !0 ? "navigationShow" : "navigationHide"),
          [...b, ...h]
            .filter((T) => !!T)
            .forEach((T) =>
              T.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const u = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        o(),
        n();
    },
    v = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
  Object.assign(e.navigation, {
    enable: u,
    disable: v,
    update: n,
    init: o,
    destroy: p,
  });
}
function Z(t) {
  return (
    t === void 0 && (t = ""),
    `.${t
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Ii(t) {
  let { swiper: e, extendParams: s, on: i, emit: r } = t;
  const a = "swiper-pagination";
  s({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${a}-bullet`,
      bulletActiveClass: `${a}-bullet-active`,
      modifierClass: `${a}-`,
      currentClass: `${a}-current`,
      totalClass: `${a}-total`,
      hiddenClass: `${a}-hidden`,
      progressbarFillClass: `${a}-progressbar-fill`,
      progressbarOppositeClass: `${a}-progressbar-opposite`,
      clickableClass: `${a}-clickable`,
      lockClass: `${a}-lock`,
      horizontalClass: `${a}-horizontal`,
      verticalClass: `${a}-vertical`,
      paginationDisabledClass: `${a}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let c,
    d = 0;
  const n = (h) => (Array.isArray(h) ? h : [h]).filter((m) => !!m);
  function f() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function l(h, m) {
    const { bulletActiveClass: x } = e.params.pagination;
    h &&
      ((h = h[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
      h &&
        (h.classList.add(`${x}-${m}`),
        (h = h[`${m === "prev" ? "previous" : "next"}ElementSibling`]),
        h && h.classList.add(`${x}-${m}-${m}`)));
  }
  function o(h) {
    const m = h.target.closest(Z(e.params.pagination.bulletClass));
    if (!m) return;
    h.preventDefault();
    const x = pe(m) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === x) return;
      const T = e.realIndex,
        A = e.getSlideIndexByData(x),
        P = e.getSlideIndexByData(e.realIndex),
        $ = (S) => {
          const k = e.activeIndex;
          e.loopFix({ direction: S, activeSlideIndex: A, slideTo: !1 });
          const L = e.activeIndex;
          k === L && e.slideToLoop(T, 0, !1, !0);
        };
      if (A > e.slides.length - e.loopedSlides) $(A > P ? "next" : "prev");
      else if (e.params.centeredSlides) {
        const S =
          e.params.slidesPerView === "auto"
            ? e.slidesPerViewDynamic()
            : Math.ceil(parseFloat(e.params.slidesPerView, 10));
        A < Math.floor(S / 2) && $("prev");
      }
      e.slideToLoop(x);
    } else e.slideTo(x);
  }
  function p() {
    const h = e.rtl,
      m = e.params.pagination;
    if (f()) return;
    let x = e.pagination.el;
    x = n(x);
    let T, A;
    const P =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      $ = e.params.loop
        ? Math.ceil(P / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((A = e.previousRealIndex || 0),
          (T =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
        ? ((T = e.snapIndex), (A = e.previousSnapIndex))
        : ((A = e.previousIndex || 0), (T = e.activeIndex || 0)),
      m.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const S = e.pagination.bullets;
      let k, L, z;
      if (
        (m.dynamicBullets &&
          ((c = Oe(S[0], e.isHorizontal() ? "width" : "height")),
          x.forEach((C) => {
            C.style[e.isHorizontal() ? "width" : "height"] = `${
              c * (m.dynamicMainBullets + 4)
            }px`;
          }),
          m.dynamicMainBullets > 1 &&
            A !== void 0 &&
            ((d += T - (A || 0)),
            d > m.dynamicMainBullets - 1
              ? (d = m.dynamicMainBullets - 1)
              : d < 0 && (d = 0)),
          (k = Math.max(T - d, 0)),
          (L = k + (Math.min(S.length, m.dynamicMainBullets) - 1)),
          (z = (L + k) / 2)),
        S.forEach((C) => {
          const y = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (E) => `${m.bulletActiveClass}${E}`
            ),
          ]
            .map((E) =>
              typeof E == "string" && E.includes(" ") ? E.split(" ") : E
            )
            .flat();
          C.classList.remove(...y);
        }),
        x.length > 1)
      )
        S.forEach((C) => {
          const y = pe(C);
          y === T
            ? C.classList.add(...m.bulletActiveClass.split(" "))
            : e.isElement && C.setAttribute("part", "bullet"),
            m.dynamicBullets &&
              (y >= k &&
                y <= L &&
                C.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),
              y === k && l(C, "prev"),
              y === L && l(C, "next"));
        });
      else {
        const C = S[T];
        if (
          (C && C.classList.add(...m.bulletActiveClass.split(" ")),
          e.isElement &&
            S.forEach((y, E) => {
              y.setAttribute("part", E === T ? "bullet-active" : "bullet");
            }),
          m.dynamicBullets)
        ) {
          const y = S[k],
            E = S[L];
          for (let D = k; D <= L; D += 1)
            S[D] &&
              S[D].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          l(y, "prev"), l(E, "next");
        }
      }
      if (m.dynamicBullets) {
        const C = Math.min(S.length, m.dynamicMainBullets + 4),
          y = (c * C - c) / 2 - z * c,
          E = h ? "right" : "left";
        S.forEach((D) => {
          D.style[e.isHorizontal() ? E : "top"] = `${y}px`;
        });
      }
    }
    x.forEach((S, k) => {
      if (
        (m.type === "fraction" &&
          (S.querySelectorAll(Z(m.currentClass)).forEach((L) => {
            L.textContent = m.formatFractionCurrent(T + 1);
          }),
          S.querySelectorAll(Z(m.totalClass)).forEach((L) => {
            L.textContent = m.formatFractionTotal($);
          })),
        m.type === "progressbar")
      ) {
        let L;
        m.progressbarOpposite
          ? (L = e.isHorizontal() ? "vertical" : "horizontal")
          : (L = e.isHorizontal() ? "horizontal" : "vertical");
        const z = (T + 1) / $;
        let C = 1,
          y = 1;
        L === "horizontal" ? (C = z) : (y = z),
          S.querySelectorAll(Z(m.progressbarFillClass)).forEach((E) => {
            (E.style.transform = `translate3d(0,0,0) scaleX(${C}) scaleY(${y})`),
              (E.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      m.type === "custom" && m.renderCustom
        ? ((S.innerHTML = m.renderCustom(e, T + 1, $)),
          k === 0 && r("paginationRender", S))
        : (k === 0 && r("paginationRender", S), r("paginationUpdate", S)),
        e.params.watchOverflow &&
          e.enabled &&
          S.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function u() {
    const h = e.params.pagination;
    if (f()) return;
    const m =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.slides.length;
    let x = e.pagination.el;
    x = n(x);
    let T = "";
    if (h.type === "bullets") {
      let A = e.params.loop
        ? Math.ceil(m / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && A > m && (A = m);
      for (let P = 0; P < A; P += 1)
        h.renderBullet
          ? (T += h.renderBullet.call(e, P, h.bulletClass))
          : (T += `<${h.bulletElement} ${
              e.isElement ? 'part="bullet"' : ""
            } class="${h.bulletClass}"></${h.bulletElement}>`);
    }
    h.type === "fraction" &&
      (h.renderFraction
        ? (T = h.renderFraction.call(e, h.currentClass, h.totalClass))
        : (T = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`)),
      h.type === "progressbar" &&
        (h.renderProgressbar
          ? (T = h.renderProgressbar.call(e, h.progressbarFillClass))
          : (T = `<span class="${h.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      x.forEach((A) => {
        h.type !== "custom" && (A.innerHTML = T || ""),
          h.type === "bullets" &&
            e.pagination.bullets.push(...A.querySelectorAll(Z(h.bulletClass)));
      }),
      h.type !== "custom" && r("paginationRender", x[0]);
  }
  function v() {
    e.params.pagination = _e(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const h = e.params.pagination;
    if (!h.el) return;
    let m;
    typeof h.el == "string" && e.isElement && (m = e.el.querySelector(h.el)),
      !m &&
        typeof h.el == "string" &&
        (m = [...document.querySelectorAll(h.el)]),
      m || (m = h.el),
      !(!m || m.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof h.el == "string" &&
          Array.isArray(m) &&
          m.length > 1 &&
          ((m = [...e.el.querySelectorAll(h.el)]),
          m.length > 1 &&
            (m = m.filter((x) => ee(x, ".swiper")[0] === e.el)[0])),
        Array.isArray(m) && m.length === 1 && (m = m[0]),
        Object.assign(e.pagination, { el: m }),
        (m = n(m)),
        m.forEach((x) => {
          h.type === "bullets" &&
            h.clickable &&
            x.classList.add(...(h.clickableClass || "").split(" ")),
            x.classList.add(h.modifierClass + h.type),
            x.classList.add(
              e.isHorizontal() ? h.horizontalClass : h.verticalClass
            ),
            h.type === "bullets" &&
              h.dynamicBullets &&
              (x.classList.add(`${h.modifierClass}${h.type}-dynamic`),
              (d = 0),
              h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
            h.type === "progressbar" &&
              h.progressbarOpposite &&
              x.classList.add(h.progressbarOppositeClass),
            h.clickable && x.addEventListener("click", o),
            e.enabled || x.classList.add(h.lockClass);
        }));
  }
  function w() {
    const h = e.params.pagination;
    if (f()) return;
    let m = e.pagination.el;
    m &&
      ((m = n(m)),
      m.forEach((x) => {
        x.classList.remove(h.hiddenClass),
          x.classList.remove(h.modifierClass + h.type),
          x.classList.remove(
            e.isHorizontal() ? h.horizontalClass : h.verticalClass
          ),
          h.clickable &&
            (x.classList.remove(...(h.clickableClass || "").split(" ")),
            x.removeEventListener("click", o));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((x) =>
          x.classList.remove(...h.bulletActiveClass.split(" "))
        );
  }
  i("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const h = e.params.pagination;
    let { el: m } = e.pagination;
    (m = n(m)),
      m.forEach((x) => {
        x.classList.remove(h.horizontalClass, h.verticalClass),
          x.classList.add(
            e.isHorizontal() ? h.horizontalClass : h.verticalClass
          );
      });
  }),
    i("init", () => {
      e.params.pagination.enabled === !1 ? b() : (v(), u(), p());
    }),
    i("activeIndexChange", () => {
      typeof e.snapIndex > "u" && p();
    }),
    i("snapIndexChange", () => {
      p();
    }),
    i("snapGridLengthChange", () => {
      u(), p();
    }),
    i("destroy", () => {
      w();
    }),
    i("enable disable", () => {
      let { el: h } = e.pagination;
      h &&
        ((h = n(h)),
        h.forEach((m) =>
          m.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    i("lock unlock", () => {
      p();
    }),
    i("click", (h, m) => {
      const x = m.target,
        T = n(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        T &&
        T.length > 0 &&
        !x.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && x === e.navigation.nextEl) ||
            (e.navigation.prevEl && x === e.navigation.prevEl))
        )
          return;
        const A = T[0].classList.contains(e.params.pagination.hiddenClass);
        r(A === !0 ? "paginationShow" : "paginationHide"),
          T.forEach((P) => P.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const g = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: h } = e.pagination;
      h &&
        ((h = n(h)),
        h.forEach((m) =>
          m.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        v(),
        u(),
        p();
    },
    b = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: h } = e.pagination;
      h &&
        ((h = n(h)),
        h.forEach((m) =>
          m.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        w();
    };
  Object.assign(e.pagination, {
    enable: g,
    disable: b,
    render: u,
    update: p,
    init: v,
    destroy: w,
  });
}
function $i(t) {
  let { swiper: e, extendParams: s, on: i, emit: r } = t;
  const a = X();
  let c = !1,
    d = null,
    n = null,
    f,
    l,
    o,
    p;
  s({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null });
  function u() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: z, rtlTranslate: C } = e,
      { dragEl: y, el: E } = z,
      D = e.params.scrollbar,
      M = e.params.loop ? e.progressLoop : e.progress;
    let O = l,
      I = (o - l) * M;
    C
      ? ((I = -I), I > 0 ? ((O = l - I), (I = 0)) : -I + l > o && (O = o + I))
      : I < 0
      ? ((O = l + I), (I = 0))
      : I + l > o && (O = o - I),
      e.isHorizontal()
        ? ((y.style.transform = `translate3d(${I}px, 0, 0)`),
          (y.style.width = `${O}px`))
        : ((y.style.transform = `translate3d(0px, ${I}px, 0)`),
          (y.style.height = `${O}px`)),
      D.hide &&
        (clearTimeout(d),
        (E.style.opacity = 1),
        (d = setTimeout(() => {
          (E.style.opacity = 0), (E.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function v(z) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${z}ms`);
  }
  function w() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: z } = e,
      { dragEl: C, el: y } = z;
    (C.style.width = ""),
      (C.style.height = ""),
      (o = e.isHorizontal() ? y.offsetWidth : y.offsetHeight),
      (p =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (l = o * p)
        : (l = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (C.style.width = `${l}px`)
        : (C.style.height = `${l}px`),
      p >= 1 ? (y.style.display = "none") : (y.style.display = ""),
      e.params.scrollbar.hide && (y.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        z.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function g(z) {
    return e.isHorizontal() ? z.clientX : z.clientY;
  }
  function b(z) {
    const { scrollbar: C, rtlTranslate: y } = e,
      { el: E } = C;
    let D;
    (D =
      (g(z) -
        ve(E)[e.isHorizontal() ? "left" : "top"] -
        (f !== null ? f : l / 2)) /
      (o - l)),
      (D = Math.max(Math.min(D, 1), 0)),
      y && (D = 1 - D);
    const M = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * D;
    e.updateProgress(M),
      e.setTranslate(M),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function h(z) {
    const C = e.params.scrollbar,
      { scrollbar: y, wrapperEl: E } = e,
      { el: D, dragEl: M } = y;
    (c = !0),
      (f =
        z.target === M
          ? g(z) -
            z.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      z.preventDefault(),
      z.stopPropagation(),
      (E.style.transitionDuration = "100ms"),
      (M.style.transitionDuration = "100ms"),
      b(z),
      clearTimeout(n),
      (D.style.transitionDuration = "0ms"),
      C.hide && (D.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      r("scrollbarDragStart", z);
  }
  function m(z) {
    const { scrollbar: C, wrapperEl: y } = e,
      { el: E, dragEl: D } = C;
    c &&
      (z.preventDefault ? z.preventDefault() : (z.returnValue = !1),
      b(z),
      (y.style.transitionDuration = "0ms"),
      (E.style.transitionDuration = "0ms"),
      (D.style.transitionDuration = "0ms"),
      r("scrollbarDragMove", z));
  }
  function x(z) {
    const C = e.params.scrollbar,
      { scrollbar: y, wrapperEl: E } = e,
      { el: D } = y;
    c &&
      ((c = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (E.style.transitionDuration = "")),
      C.hide &&
        (clearTimeout(n),
        (n = te(() => {
          (D.style.opacity = 0), (D.style.transitionDuration = "400ms");
        }, 1e3))),
      r("scrollbarDragEnd", z),
      C.snapOnRelease && e.slideToClosest());
  }
  function T(z) {
    const { scrollbar: C, params: y } = e,
      E = C.el;
    if (!E) return;
    const D = E,
      M = y.passiveListeners ? { passive: !1, capture: !1 } : !1,
      O = y.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!D) return;
    const I = z === "on" ? "addEventListener" : "removeEventListener";
    D[I]("pointerdown", h, M),
      a[I]("pointermove", m, M),
      a[I]("pointerup", x, O);
  }
  function A() {
    !e.params.scrollbar.el || !e.scrollbar.el || T("on");
  }
  function P() {
    !e.params.scrollbar.el || !e.scrollbar.el || T("off");
  }
  function $() {
    const { scrollbar: z, el: C } = e;
    e.params.scrollbar = _e(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const y = e.params.scrollbar;
    if (!y.el) return;
    let E;
    typeof y.el == "string" && e.isElement && (E = e.el.querySelector(y.el)),
      !E && typeof y.el == "string"
        ? (E = a.querySelectorAll(y.el))
        : E || (E = y.el),
      e.params.uniqueNavElements &&
        typeof y.el == "string" &&
        E.length > 1 &&
        C.querySelectorAll(y.el).length === 1 &&
        (E = C.querySelector(y.el)),
      E.length > 0 && (E = E[0]),
      E.classList.add(e.isHorizontal() ? y.horizontalClass : y.verticalClass);
    let D;
    E &&
      ((D = E.querySelector(`.${e.params.scrollbar.dragClass}`)),
      D || ((D = U("div", e.params.scrollbar.dragClass)), E.append(D))),
      Object.assign(z, { el: E, dragEl: D }),
      y.draggable && A(),
      E &&
        E.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass);
  }
  function S() {
    const z = e.params.scrollbar,
      C = e.scrollbar.el;
    C &&
      C.classList.remove(
        e.isHorizontal() ? z.horizontalClass : z.verticalClass
      ),
      P();
  }
  i("init", () => {
    e.params.scrollbar.enabled === !1 ? L() : ($(), w(), u());
  }),
    i("update resize observerUpdate lock unlock", () => {
      w();
    }),
    i("setTranslate", () => {
      u();
    }),
    i("setTransition", (z, C) => {
      v(C);
    }),
    i("enable disable", () => {
      const { el: z } = e.scrollbar;
      z &&
        z.classList[e.enabled ? "remove" : "add"](e.params.scrollbar.lockClass);
    }),
    i("destroy", () => {
      S();
    });
  const k = () => {
      e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            e.params.scrollbar.scrollbarDisabledClass
          ),
        $(),
        w(),
        u();
    },
    L = () => {
      e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            e.params.scrollbar.scrollbarDisabledClass
          ),
        S();
    };
  Object.assign(e.scrollbar, {
    enable: k,
    disable: L,
    updateSize: w,
    setTranslate: u,
    init: $,
    destroy: S,
  });
}
function Oi(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({ parallax: { enabled: !1 } });
  const r =
      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
    a = (n, f) => {
      const { rtl: l } = e,
        o = l ? -1 : 1,
        p = n.getAttribute("data-swiper-parallax") || "0";
      let u = n.getAttribute("data-swiper-parallax-x"),
        v = n.getAttribute("data-swiper-parallax-y");
      const w = n.getAttribute("data-swiper-parallax-scale"),
        g = n.getAttribute("data-swiper-parallax-opacity"),
        b = n.getAttribute("data-swiper-parallax-rotate");
      if (
        (u || v
          ? ((u = u || "0"), (v = v || "0"))
          : e.isHorizontal()
          ? ((u = p), (v = "0"))
          : ((v = p), (u = "0")),
        u.indexOf("%") >= 0
          ? (u = `${parseInt(u, 10) * f * o}%`)
          : (u = `${u * f * o}px`),
        v.indexOf("%") >= 0
          ? (v = `${parseInt(v, 10) * f}%`)
          : (v = `${v * f}px`),
        typeof g < "u" && g !== null)
      ) {
        const m = g - (g - 1) * (1 - Math.abs(f));
        n.style.opacity = m;
      }
      let h = `translate3d(${u}, ${v}, 0px)`;
      if (typeof w < "u" && w !== null) {
        const m = w - (w - 1) * (1 - Math.abs(f));
        h += ` scale(${m})`;
      }
      if (b && typeof b < "u" && b !== null) {
        const m = b * f * -1;
        h += ` rotate(${m}deg)`;
      }
      n.style.transform = h;
    },
    c = () => {
      const { el: n, slides: f, progress: l, snapGrid: o, isElement: p } = e,
        u = R(n, r);
      e.isElement && u.push(...R(e.hostEl, r)),
        u.forEach((v) => {
          a(v, l);
        }),
        f.forEach((v, w) => {
          let g = v.progress;
          e.params.slidesPerGroup > 1 &&
            e.params.slidesPerView !== "auto" &&
            (g += Math.ceil(w / 2) - l * (o.length - 1)),
            (g = Math.min(Math.max(g, -1), 1)),
            v
              .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
              .forEach((b) => {
                a(b, g);
              });
        });
    },
    d = function (n) {
      n === void 0 && (n = e.params.speed);
      const { el: f, hostEl: l } = e,
        o = [...f.querySelectorAll(r)];
      e.isElement && o.push(...l.querySelectorAll(r)),
        o.forEach((p) => {
          let u =
            parseInt(p.getAttribute("data-swiper-parallax-duration"), 10) || n;
          n === 0 && (u = 0), (p.style.transitionDuration = `${u}ms`);
        });
    };
  i("beforeInit", () => {
    e.params.parallax.enabled &&
      ((e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0));
  }),
    i("init", () => {
      e.params.parallax.enabled && c();
    }),
    i("setTranslate", () => {
      e.params.parallax.enabled && c();
    }),
    i("setTransition", (n, f) => {
      e.params.parallax.enabled && d(f);
    });
}
function Di(t) {
  let { swiper: e, extendParams: s, on: i, emit: r } = t;
  const a = G();
  s({
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed",
    },
  }),
    (e.zoom = { enabled: !1 });
  let c = 1,
    d = !1,
    n,
    f;
  const l = [],
    o = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3,
    },
    p = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {},
    },
    u = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0,
    };
  let v = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return v;
    },
    set(M) {
      if (v !== M) {
        const O = o.imageEl,
          I = o.slideEl;
        r("zoomChange", M, O, I);
      }
      v = M;
    },
  });
  function w() {
    if (l.length < 2) return 1;
    const M = l[0].pageX,
      O = l[0].pageY,
      I = l[1].pageX,
      j = l[1].pageY;
    return Math.sqrt((I - M) ** 2 + (j - O) ** 2);
  }
  function g() {
    if (l.length < 2) return { x: null, y: null };
    const M = o.imageEl.getBoundingClientRect();
    return [
      (l[0].pageX + (l[1].pageX - l[0].pageX) / 2 - M.x - a.scrollX) / c,
      (l[0].pageY + (l[1].pageY - l[0].pageY) / 2 - M.y - a.scrollY) / c,
    ];
  }
  function b() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function h(M) {
    const O = b();
    return !!(
      M.target.matches(O) ||
      e.slides.filter((I) => I.contains(M.target)).length > 0
    );
  }
  function m(M) {
    const O = `.${e.params.zoom.containerClass}`;
    return !!(
      M.target.matches(O) ||
      [...e.hostEl.querySelectorAll(O)].filter((I) => I.contains(M.target))
        .length > 0
    );
  }
  function x(M) {
    if ((M.pointerType === "mouse" && l.splice(0, l.length), !h(M))) return;
    const O = e.params.zoom;
    if (((n = !1), (f = !1), l.push(M), !(l.length < 2))) {
      if (((n = !0), (o.scaleStart = w()), !o.slideEl)) {
        (o.slideEl = M.target.closest(`.${e.params.slideClass}, swiper-slide`)),
          o.slideEl || (o.slideEl = e.slides[e.activeIndex]);
        let I = o.slideEl.querySelector(`.${O.containerClass}`);
        if (
          (I &&
            (I = I.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
          (o.imageEl = I),
          I
            ? (o.imageWrapEl = ee(o.imageEl, `.${O.containerClass}`)[0])
            : (o.imageWrapEl = void 0),
          !o.imageWrapEl)
        ) {
          o.imageEl = void 0;
          return;
        }
        o.maxRatio =
          o.imageWrapEl.getAttribute("data-swiper-zoom") || O.maxRatio;
      }
      if (o.imageEl) {
        const [I, j] = g();
        (o.originX = I),
          (o.originY = j),
          (o.imageEl.style.transitionDuration = "0ms");
      }
      d = !0;
    }
  }
  function T(M) {
    if (!h(M)) return;
    const O = e.params.zoom,
      I = e.zoom,
      j = l.findIndex((B) => B.pointerId === M.pointerId);
    j >= 0 && (l[j] = M),
      !(l.length < 2) &&
        ((f = !0),
        (o.scaleMove = w()),
        o.imageEl &&
          ((I.scale = (o.scaleMove / o.scaleStart) * c),
          I.scale > o.maxRatio &&
            (I.scale = o.maxRatio - 1 + (I.scale - o.maxRatio + 1) ** 0.5),
          I.scale < O.minRatio &&
            (I.scale = O.minRatio + 1 - (O.minRatio - I.scale + 1) ** 0.5),
          (o.imageEl.style.transform = `translate3d(0,0,0) scale(${I.scale})`)));
  }
  function A(M) {
    if (!h(M) || (M.pointerType === "mouse" && M.type === "pointerout")) return;
    const O = e.params.zoom,
      I = e.zoom,
      j = l.findIndex((B) => B.pointerId === M.pointerId);
    j >= 0 && l.splice(j, 1),
      !(!n || !f) &&
        ((n = !1),
        (f = !1),
        o.imageEl &&
          ((I.scale = Math.max(Math.min(I.scale, o.maxRatio), O.minRatio)),
          (o.imageEl.style.transitionDuration = `${e.params.speed}ms`),
          (o.imageEl.style.transform = `translate3d(0,0,0) scale(${I.scale})`),
          (c = I.scale),
          (d = !1),
          I.scale > 1 && o.slideEl
            ? o.slideEl.classList.add(`${O.zoomedSlideClass}`)
            : I.scale <= 1 &&
              o.slideEl &&
              o.slideEl.classList.remove(`${O.zoomedSlideClass}`),
          I.scale === 1 &&
            ((o.originX = 0), (o.originY = 0), (o.slideEl = void 0))));
  }
  function P(M) {
    const O = e.device;
    if (!o.imageEl || p.isTouched) return;
    O.android && M.cancelable && M.preventDefault(), (p.isTouched = !0);
    const I = l.length > 0 ? l[0] : M;
    (p.touchesStart.x = I.pageX), (p.touchesStart.y = I.pageY);
  }
  function $(M) {
    if (!h(M) || !m(M)) return;
    const O = e.zoom;
    if (!o.imageEl || !p.isTouched || !o.slideEl) return;
    p.isMoved ||
      ((p.width = o.imageEl.offsetWidth),
      (p.height = o.imageEl.offsetHeight),
      (p.startX = $e(o.imageWrapEl, "x") || 0),
      (p.startY = $e(o.imageWrapEl, "y") || 0),
      (o.slideWidth = o.slideEl.offsetWidth),
      (o.slideHeight = o.slideEl.offsetHeight),
      (o.imageWrapEl.style.transitionDuration = "0ms"));
    const I = p.width * O.scale,
      j = p.height * O.scale;
    if (I < o.slideWidth && j < o.slideHeight) return;
    if (
      ((p.minX = Math.min(o.slideWidth / 2 - I / 2, 0)),
      (p.maxX = -p.minX),
      (p.minY = Math.min(o.slideHeight / 2 - j / 2, 0)),
      (p.maxY = -p.minY),
      (p.touchesCurrent.x = l.length > 0 ? l[0].pageX : M.pageX),
      (p.touchesCurrent.y = l.length > 0 ? l[0].pageY : M.pageY),
      Math.max(
        Math.abs(p.touchesCurrent.x - p.touchesStart.x),
        Math.abs(p.touchesCurrent.y - p.touchesStart.y)
      ) > 5 && (e.allowClick = !1),
      !p.isMoved && !d)
    ) {
      if (
        e.isHorizontal() &&
        ((Math.floor(p.minX) === Math.floor(p.startX) &&
          p.touchesCurrent.x < p.touchesStart.x) ||
          (Math.floor(p.maxX) === Math.floor(p.startX) &&
            p.touchesCurrent.x > p.touchesStart.x))
      ) {
        p.isTouched = !1;
        return;
      }
      if (
        !e.isHorizontal() &&
        ((Math.floor(p.minY) === Math.floor(p.startY) &&
          p.touchesCurrent.y < p.touchesStart.y) ||
          (Math.floor(p.maxY) === Math.floor(p.startY) &&
            p.touchesCurrent.y > p.touchesStart.y))
      ) {
        p.isTouched = !1;
        return;
      }
    }
    M.cancelable && M.preventDefault(), M.stopPropagation(), (p.isMoved = !0);
    const N = (O.scale - c) / (o.maxRatio - e.params.zoom.minRatio),
      { originX: _, originY: H } = o;
    (p.currentX =
      p.touchesCurrent.x - p.touchesStart.x + p.startX + N * (p.width - _ * 2)),
      (p.currentY =
        p.touchesCurrent.y -
        p.touchesStart.y +
        p.startY +
        N * (p.height - H * 2)),
      p.currentX < p.minX &&
        (p.currentX = p.minX + 1 - (p.minX - p.currentX + 1) ** 0.8),
      p.currentX > p.maxX &&
        (p.currentX = p.maxX - 1 + (p.currentX - p.maxX + 1) ** 0.8),
      p.currentY < p.minY &&
        (p.currentY = p.minY + 1 - (p.minY - p.currentY + 1) ** 0.8),
      p.currentY > p.maxY &&
        (p.currentY = p.maxY - 1 + (p.currentY - p.maxY + 1) ** 0.8),
      u.prevPositionX || (u.prevPositionX = p.touchesCurrent.x),
      u.prevPositionY || (u.prevPositionY = p.touchesCurrent.y),
      u.prevTime || (u.prevTime = Date.now()),
      (u.x =
        (p.touchesCurrent.x - u.prevPositionX) / (Date.now() - u.prevTime) / 2),
      (u.y =
        (p.touchesCurrent.y - u.prevPositionY) / (Date.now() - u.prevTime) / 2),
      Math.abs(p.touchesCurrent.x - u.prevPositionX) < 2 && (u.x = 0),
      Math.abs(p.touchesCurrent.y - u.prevPositionY) < 2 && (u.y = 0),
      (u.prevPositionX = p.touchesCurrent.x),
      (u.prevPositionY = p.touchesCurrent.y),
      (u.prevTime = Date.now()),
      (o.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`);
  }
  function S() {
    const M = e.zoom;
    if (!o.imageEl) return;
    if (!p.isTouched || !p.isMoved) {
      (p.isTouched = !1), (p.isMoved = !1);
      return;
    }
    (p.isTouched = !1), (p.isMoved = !1);
    let O = 300,
      I = 300;
    const j = u.x * O,
      B = p.currentX + j,
      N = u.y * I,
      _ = p.currentY + N;
    u.x !== 0 && (O = Math.abs((B - p.currentX) / u.x)),
      u.y !== 0 && (I = Math.abs((_ - p.currentY) / u.y));
    const H = Math.max(O, I);
    (p.currentX = B), (p.currentY = _);
    const W = p.width * M.scale,
      K = p.height * M.scale;
    (p.minX = Math.min(o.slideWidth / 2 - W / 2, 0)),
      (p.maxX = -p.minX),
      (p.minY = Math.min(o.slideHeight / 2 - K / 2, 0)),
      (p.maxY = -p.minY),
      (p.currentX = Math.max(Math.min(p.currentX, p.maxX), p.minX)),
      (p.currentY = Math.max(Math.min(p.currentY, p.maxY), p.minY)),
      (o.imageWrapEl.style.transitionDuration = `${H}ms`),
      (o.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`);
  }
  function k() {
    const M = e.zoom;
    o.slideEl &&
      e.activeIndex !== e.slides.indexOf(o.slideEl) &&
      (o.imageEl && (o.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      o.imageWrapEl && (o.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      o.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
      (M.scale = 1),
      (c = 1),
      (o.slideEl = void 0),
      (o.imageEl = void 0),
      (o.imageWrapEl = void 0),
      (o.originX = 0),
      (o.originY = 0));
  }
  function L(M) {
    const O = e.zoom,
      I = e.params.zoom;
    if (!o.slideEl) {
      M &&
        M.target &&
        (o.slideEl = M.target.closest(`.${e.params.slideClass}, swiper-slide`)),
        o.slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (o.slideEl = R(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
            : (o.slideEl = e.slides[e.activeIndex]));
      let oe = o.slideEl.querySelector(`.${I.containerClass}`);
      oe &&
        (oe = oe.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (o.imageEl = oe),
        oe
          ? (o.imageWrapEl = ee(o.imageEl, `.${I.containerClass}`)[0])
          : (o.imageWrapEl = void 0);
    }
    if (!o.imageEl || !o.imageWrapEl) return;
    e.params.cssMode &&
      ((e.wrapperEl.style.overflow = "hidden"),
      (e.wrapperEl.style.touchAction = "none")),
      o.slideEl.classList.add(`${I.zoomedSlideClass}`);
    let j, B, N, _, H, W, K, Q, je, He, Be, Ge, ue, me, Se, Ee, Te, Ce;
    typeof p.touchesStart.x > "u" && M
      ? ((j = M.pageX), (B = M.pageY))
      : ((j = p.touchesStart.x), (B = p.touchesStart.y));
    const ne = typeof M == "number" ? M : null;
    c === 1 && ne && ((j = void 0), (B = void 0)),
      (O.scale =
        ne || o.imageWrapEl.getAttribute("data-swiper-zoom") || I.maxRatio),
      (c = ne || o.imageWrapEl.getAttribute("data-swiper-zoom") || I.maxRatio),
      M && !(c === 1 && ne)
        ? ((Te = o.slideEl.offsetWidth),
          (Ce = o.slideEl.offsetHeight),
          (N = ve(o.slideEl).left + a.scrollX),
          (_ = ve(o.slideEl).top + a.scrollY),
          (H = N + Te / 2 - j),
          (W = _ + Ce / 2 - B),
          (je = o.imageEl.offsetWidth),
          (He = o.imageEl.offsetHeight),
          (Be = je * O.scale),
          (Ge = He * O.scale),
          (ue = Math.min(Te / 2 - Be / 2, 0)),
          (me = Math.min(Ce / 2 - Ge / 2, 0)),
          (Se = -ue),
          (Ee = -me),
          (K = H * O.scale),
          (Q = W * O.scale),
          K < ue && (K = ue),
          K > Se && (K = Se),
          Q < me && (Q = me),
          Q > Ee && (Q = Ee))
        : ((K = 0), (Q = 0)),
      ne && O.scale === 1 && ((o.originX = 0), (o.originY = 0)),
      (o.imageWrapEl.style.transitionDuration = "300ms"),
      (o.imageWrapEl.style.transform = `translate3d(${K}px, ${Q}px,0)`),
      (o.imageEl.style.transitionDuration = "300ms"),
      (o.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`);
  }
  function z() {
    const M = e.zoom,
      O = e.params.zoom;
    if (!o.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual
        ? (o.slideEl = R(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
        : (o.slideEl = e.slides[e.activeIndex]);
      let I = o.slideEl.querySelector(`.${O.containerClass}`);
      I &&
        (I = I.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (o.imageEl = I),
        I
          ? (o.imageWrapEl = ee(o.imageEl, `.${O.containerClass}`)[0])
          : (o.imageWrapEl = void 0);
    }
    !o.imageEl ||
      !o.imageWrapEl ||
      (e.params.cssMode &&
        ((e.wrapperEl.style.overflow = ""),
        (e.wrapperEl.style.touchAction = "")),
      (M.scale = 1),
      (c = 1),
      (o.imageWrapEl.style.transitionDuration = "300ms"),
      (o.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      (o.imageEl.style.transitionDuration = "300ms"),
      (o.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      o.slideEl.classList.remove(`${O.zoomedSlideClass}`),
      (o.slideEl = void 0),
      (o.originX = 0),
      (o.originY = 0));
  }
  function C(M) {
    const O = e.zoom;
    O.scale && O.scale !== 1 ? z() : L(M);
  }
  function y() {
    const M = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
      O = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: M, activeListenerWithCapture: O };
  }
  function E() {
    const M = e.zoom;
    if (M.enabled) return;
    M.enabled = !0;
    const { passiveListener: O, activeListenerWithCapture: I } = y();
    e.wrapperEl.addEventListener("pointerdown", x, O),
      e.wrapperEl.addEventListener("pointermove", T, I),
      ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
        e.wrapperEl.addEventListener(j, A, O);
      }),
      e.wrapperEl.addEventListener("pointermove", $, I);
  }
  function D() {
    const M = e.zoom;
    if (!M.enabled) return;
    M.enabled = !1;
    const { passiveListener: O, activeListenerWithCapture: I } = y();
    e.wrapperEl.removeEventListener("pointerdown", x, O),
      e.wrapperEl.removeEventListener("pointermove", T, I),
      ["pointerup", "pointercancel", "pointerout"].forEach((j) => {
        e.wrapperEl.removeEventListener(j, A, O);
      }),
      e.wrapperEl.removeEventListener("pointermove", $, I);
  }
  i("init", () => {
    e.params.zoom.enabled && E();
  }),
    i("destroy", () => {
      D();
    }),
    i("touchStart", (M, O) => {
      e.zoom.enabled && P(O);
    }),
    i("touchEnd", (M, O) => {
      e.zoom.enabled && S();
    }),
    i("doubleTap", (M, O) => {
      !e.animating &&
        e.params.zoom.enabled &&
        e.zoom.enabled &&
        e.params.zoom.toggle &&
        C(O);
    }),
    i("transitionEnd", () => {
      e.zoom.enabled && e.params.zoom.enabled && k();
    }),
    i("slideChange", () => {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && k();
    }),
    Object.assign(e.zoom, { enable: E, disable: D, in: L, out: z, toggle: C });
}
function ki(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
    (e.controller = { control: void 0 });
  function r(f, l) {
    const o = (function () {
      let w, g, b;
      return (h, m) => {
        for (g = -1, w = h.length; w - g > 1; )
          (b = (w + g) >> 1), h[b] <= m ? (g = b) : (w = b);
        return w;
      };
    })();
    (this.x = f), (this.y = l), (this.lastIndex = f.length - 1);
    let p, u;
    return (
      (this.interpolate = function (w) {
        return w
          ? ((u = o(this.x, w)),
            (p = u - 1),
            ((w - this.x[p]) * (this.y[u] - this.y[p])) /
              (this.x[u] - this.x[p]) +
              this.y[p])
          : 0;
      }),
      this
    );
  }
  function a(f) {
    e.controller.spline = e.params.loop
      ? new r(e.slidesGrid, f.slidesGrid)
      : new r(e.snapGrid, f.snapGrid);
  }
  function c(f, l) {
    const o = e.controller.control;
    let p, u;
    const v = e.constructor;
    function w(g) {
      if (g.destroyed) return;
      const b = e.rtlTranslate ? -e.translate : e.translate;
      e.params.controller.by === "slide" &&
        (a(g), (u = -e.controller.spline.interpolate(-b))),
        (!u || e.params.controller.by === "container") &&
          ((p =
            (g.maxTranslate() - g.minTranslate()) /
            (e.maxTranslate() - e.minTranslate())),
          (Number.isNaN(p) || !Number.isFinite(p)) && (p = 1),
          (u = (b - e.minTranslate()) * p + g.minTranslate())),
        e.params.controller.inverse && (u = g.maxTranslate() - u),
        g.updateProgress(u),
        g.setTranslate(u, e),
        g.updateActiveIndex(),
        g.updateSlidesClasses();
    }
    if (Array.isArray(o))
      for (let g = 0; g < o.length; g += 1)
        o[g] !== l && o[g] instanceof v && w(o[g]);
    else o instanceof v && l !== o && w(o);
  }
  function d(f, l) {
    const o = e.constructor,
      p = e.controller.control;
    let u;
    function v(w) {
      w.destroyed ||
        (w.setTransition(f, e),
        f !== 0 &&
          (w.transitionStart(),
          w.params.autoHeight &&
            te(() => {
              w.updateAutoHeight();
            }),
          ce(w.wrapperEl, () => {
            p && w.transitionEnd();
          })));
    }
    if (Array.isArray(p))
      for (u = 0; u < p.length; u += 1)
        p[u] !== l && p[u] instanceof o && v(p[u]);
    else p instanceof o && l !== p && v(p);
  }
  function n() {
    e.controller.control &&
      e.controller.spline &&
      ((e.controller.spline = void 0), delete e.controller.spline);
  }
  i("beforeInit", () => {
    if (
      typeof window < "u" &&
      (typeof e.params.controller.control == "string" ||
        e.params.controller.control instanceof HTMLElement)
    ) {
      const f = document.querySelector(e.params.controller.control);
      if (f && f.swiper) e.controller.control = f.swiper;
      else if (f) {
        const l = (o) => {
          (e.controller.control = o.detail[0]),
            e.update(),
            f.removeEventListener("init", l);
        };
        f.addEventListener("init", l);
      }
      return;
    }
    e.controller.control = e.params.controller.control;
  }),
    i("update", () => {
      n();
    }),
    i("resize", () => {
      n();
    }),
    i("observerUpdate", () => {
      n();
    }),
    i("setTranslate", (f, l, o) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTranslate(l, o);
    }),
    i("setTransition", (f, l, o) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTransition(l, o);
    }),
    Object.assign(e.controller, { setTranslate: c, setTransition: d });
}
function Fi(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
    },
  }),
    (e.a11y = { clicked: !1 });
  let r = null;
  function a(y) {
    const E = r;
    E.length !== 0 && ((E.innerHTML = ""), (E.innerHTML = y));
  }
  const c = (y) => (Array.isArray(y) ? y : [y]).filter((E) => !!E);
  function d(y) {
    const E = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(y).replace(/x/g, E);
  }
  function n(y) {
    (y = c(y)),
      y.forEach((E) => {
        E.setAttribute("tabIndex", "0");
      });
  }
  function f(y) {
    (y = c(y)),
      y.forEach((E) => {
        E.setAttribute("tabIndex", "-1");
      });
  }
  function l(y, E) {
    (y = c(y)),
      y.forEach((D) => {
        D.setAttribute("role", E);
      });
  }
  function o(y, E) {
    (y = c(y)),
      y.forEach((D) => {
        D.setAttribute("aria-roledescription", E);
      });
  }
  function p(y, E) {
    (y = c(y)),
      y.forEach((D) => {
        D.setAttribute("aria-controls", E);
      });
  }
  function u(y, E) {
    (y = c(y)),
      y.forEach((D) => {
        D.setAttribute("aria-label", E);
      });
  }
  function v(y, E) {
    (y = c(y)),
      y.forEach((D) => {
        D.setAttribute("id", E);
      });
  }
  function w(y, E) {
    (y = c(y)),
      y.forEach((D) => {
        D.setAttribute("aria-live", E);
      });
  }
  function g(y) {
    (y = c(y)),
      y.forEach((E) => {
        E.setAttribute("aria-disabled", !0);
      });
  }
  function b(y) {
    (y = c(y)),
      y.forEach((E) => {
        E.setAttribute("aria-disabled", !1);
      });
  }
  function h(y) {
    if (y.keyCode !== 13 && y.keyCode !== 32) return;
    const E = e.params.a11y,
      D = y.target;
    (e.pagination &&
      e.pagination.el &&
      (D === e.pagination.el || e.pagination.el.contains(y.target)) &&
      !y.target.matches(Z(e.params.pagination.bulletClass))) ||
      (e.navigation &&
        e.navigation.nextEl &&
        D === e.navigation.nextEl &&
        ((e.isEnd && !e.params.loop) || e.slideNext(),
        e.isEnd ? a(E.lastSlideMessage) : a(E.nextSlideMessage)),
      e.navigation &&
        e.navigation.prevEl &&
        D === e.navigation.prevEl &&
        ((e.isBeginning && !e.params.loop) || e.slidePrev(),
        e.isBeginning ? a(E.firstSlideMessage) : a(E.prevSlideMessage)),
      e.pagination &&
        D.matches(Z(e.params.pagination.bulletClass)) &&
        D.click());
  }
  function m() {
    if (e.params.loop || e.params.rewind || !e.navigation) return;
    const { nextEl: y, prevEl: E } = e.navigation;
    E && (e.isBeginning ? (g(E), f(E)) : (b(E), n(E))),
      y && (e.isEnd ? (g(y), f(y)) : (b(y), n(y)));
  }
  function x() {
    return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
  }
  function T() {
    return x() && e.params.pagination.clickable;
  }
  function A() {
    const y = e.params.a11y;
    x() &&
      e.pagination.bullets.forEach((E) => {
        e.params.pagination.clickable &&
          (n(E),
          e.params.pagination.renderBullet ||
            (l(E, "button"),
            u(
              E,
              y.paginationBulletMessage.replace(/\{\{index\}\}/, pe(E) + 1)
            ))),
          E.matches(Z(e.params.pagination.bulletActiveClass))
            ? E.setAttribute("aria-current", "true")
            : E.removeAttribute("aria-current");
      });
  }
  const P = (y, E, D) => {
      n(y),
        y.tagName !== "BUTTON" &&
          (l(y, "button"), y.addEventListener("keydown", h)),
        u(y, D),
        p(y, E);
    },
    $ = () => {
      e.a11y.clicked = !0;
    },
    S = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          e.destroyed || (e.a11y.clicked = !1);
        });
      });
    },
    k = (y) => {
      if (e.a11y.clicked) return;
      const E = y.target.closest(`.${e.params.slideClass}, swiper-slide`);
      if (!E || !e.slides.includes(E)) return;
      const D = e.slides.indexOf(E) === e.activeIndex,
        M =
          e.params.watchSlidesProgress &&
          e.visibleSlides &&
          e.visibleSlides.includes(E);
      D ||
        M ||
        (y.sourceCapabilities && y.sourceCapabilities.firesTouchEvents) ||
        (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
        e.slideTo(e.slides.indexOf(E), 0));
    },
    L = () => {
      const y = e.params.a11y;
      y.itemRoleDescriptionMessage && o(e.slides, y.itemRoleDescriptionMessage),
        y.slideRole && l(e.slides, y.slideRole);
      const E = e.slides.length;
      y.slideLabelMessage &&
        e.slides.forEach((D, M) => {
          const O = e.params.loop
              ? parseInt(D.getAttribute("data-swiper-slide-index"), 10)
              : M,
            I = y.slideLabelMessage
              .replace(/\{\{index\}\}/, O + 1)
              .replace(/\{\{slidesLength\}\}/, E);
          u(D, I);
        });
    },
    z = () => {
      const y = e.params.a11y;
      e.el.append(r);
      const E = e.el;
      y.containerRoleDescriptionMessage &&
        o(E, y.containerRoleDescriptionMessage),
        y.containerMessage && u(E, y.containerMessage);
      const D = e.wrapperEl,
        M = y.id || D.getAttribute("id") || `swiper-wrapper-${d(16)}`,
        O = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      v(D, M), w(D, O), L();
      let { nextEl: I, prevEl: j } = e.navigation ? e.navigation : {};
      (I = c(I)),
        (j = c(j)),
        I && I.forEach((B) => P(B, M, y.nextSlideMessage)),
        j && j.forEach((B) => P(B, M, y.prevSlideMessage)),
        T() &&
          (Array.isArray(e.pagination.el)
            ? e.pagination.el
            : [e.pagination.el]
          ).forEach((N) => {
            N.addEventListener("keydown", h);
          }),
        e.el.addEventListener("focus", k, !0),
        e.el.addEventListener("pointerdown", $, !0),
        e.el.addEventListener("pointerup", S, !0);
    };
  function C() {
    r && r.remove();
    let { nextEl: y, prevEl: E } = e.navigation ? e.navigation : {};
    (y = c(y)),
      (E = c(E)),
      y && y.forEach((D) => D.removeEventListener("keydown", h)),
      E && E.forEach((D) => D.removeEventListener("keydown", h)),
      T() &&
        (Array.isArray(e.pagination.el)
          ? e.pagination.el
          : [e.pagination.el]
        ).forEach((M) => {
          M.removeEventListener("keydown", h);
        }),
      e.el.removeEventListener("focus", k, !0),
      e.el.removeEventListener("pointerdown", $, !0),
      e.el.removeEventListener("pointerup", S, !0);
  }
  i("beforeInit", () => {
    (r = U("span", e.params.a11y.notificationClass)),
      r.setAttribute("aria-live", "assertive"),
      r.setAttribute("aria-atomic", "true");
  }),
    i("afterInit", () => {
      e.params.a11y.enabled && z();
    }),
    i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      e.params.a11y.enabled && L();
    }),
    i("fromEdge toEdge afterInit lock unlock", () => {
      e.params.a11y.enabled && m();
    }),
    i("paginationUpdate", () => {
      e.params.a11y.enabled && A();
    }),
    i("destroy", () => {
      e.params.a11y.enabled && C();
    });
}
function _i(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1,
    },
  });
  let r = !1,
    a = {};
  const c = (u) =>
      u
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, ""),
    d = (u) => {
      const v = G();
      let w;
      u ? (w = new URL(u)) : (w = v.location);
      const g = w.pathname
          .slice(1)
          .split("/")
          .filter((x) => x !== ""),
        b = g.length,
        h = g[b - 2],
        m = g[b - 1];
      return { key: h, value: m };
    },
    n = (u, v) => {
      const w = G();
      if (!r || !e.params.history.enabled) return;
      let g;
      e.params.url ? (g = new URL(e.params.url)) : (g = w.location);
      const b = e.slides[v];
      let h = c(b.getAttribute("data-history"));
      if (e.params.history.root.length > 0) {
        let x = e.params.history.root;
        x[x.length - 1] === "/" && (x = x.slice(0, x.length - 1)),
          (h = `${x}/${u ? `${u}/` : ""}${h}`);
      } else g.pathname.includes(u) || (h = `${u ? `${u}/` : ""}${h}`);
      e.params.history.keepQuery && (h += g.search);
      const m = w.history.state;
      (m && m.value === h) ||
        (e.params.history.replaceState
          ? w.history.replaceState({ value: h }, null, h)
          : w.history.pushState({ value: h }, null, h));
    },
    f = (u, v, w) => {
      if (v)
        for (let g = 0, b = e.slides.length; g < b; g += 1) {
          const h = e.slides[g];
          if (c(h.getAttribute("data-history")) === v) {
            const x = e.getSlideIndex(h);
            e.slideTo(x, u, w);
          }
        }
      else e.slideTo(0, u, w);
    },
    l = () => {
      (a = d(e.params.url)), f(e.params.speed, a.value, !1);
    },
    o = () => {
      const u = G();
      if (e.params.history) {
        if (!u.history || !u.history.pushState) {
          (e.params.history.enabled = !1),
            (e.params.hashNavigation.enabled = !0);
          return;
        }
        if (((r = !0), (a = d(e.params.url)), !a.key && !a.value)) {
          e.params.history.replaceState || u.addEventListener("popstate", l);
          return;
        }
        f(0, a.value, e.params.runCallbacksOnInit),
          e.params.history.replaceState || u.addEventListener("popstate", l);
      }
    },
    p = () => {
      const u = G();
      e.params.history.replaceState || u.removeEventListener("popstate", l);
    };
  i("init", () => {
    e.params.history.enabled && o();
  }),
    i("destroy", () => {
      e.params.history.enabled && p();
    }),
    i("transitionEnd _freeModeNoMomentumRelease", () => {
      r && n(e.params.history.key, e.activeIndex);
    }),
    i("slideChange", () => {
      r && e.params.cssMode && n(e.params.history.key, e.activeIndex);
    });
}
function ji(t) {
  let { swiper: e, extendParams: s, emit: i, on: r } = t,
    a = !1;
  const c = X(),
    d = G();
  s({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(p, u) {
        if (e.virtual && e.params.virtual.enabled) {
          const v = e.slides.filter(
            (g) => g.getAttribute("data-hash") === u
          )[0];
          return v
            ? parseInt(v.getAttribute("data-swiper-slide-index"), 10)
            : 0;
        }
        return e.getSlideIndex(
          R(
            e.slidesEl,
            `.${e.params.slideClass}[data-hash="${u}"], swiper-slide[data-hash="${u}"]`
          )[0]
        );
      },
    },
  });
  const n = () => {
      i("hashChange");
      const p = c.location.hash.replace("#", ""),
        u =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        v = u ? u.getAttribute("data-hash") : "";
      if (p !== v) {
        const w = e.params.hashNavigation.getSlideIndex(e, p);
        if (typeof w > "u" || Number.isNaN(w)) return;
        e.slideTo(w);
      }
    },
    f = () => {
      if (!a || !e.params.hashNavigation.enabled) return;
      const p =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        u = p
          ? p.getAttribute("data-hash") || p.getAttribute("data-history")
          : "";
      e.params.hashNavigation.replaceState &&
      d.history &&
      d.history.replaceState
        ? (d.history.replaceState(null, null, `#${u}` || ""), i("hashSet"))
        : ((c.location.hash = u || ""), i("hashSet"));
    },
    l = () => {
      if (
        !e.params.hashNavigation.enabled ||
        (e.params.history && e.params.history.enabled)
      )
        return;
      a = !0;
      const p = c.location.hash.replace("#", "");
      if (p) {
        const v = e.params.hashNavigation.getSlideIndex(e, p);
        e.slideTo(v || 0, 0, e.params.runCallbacksOnInit, !0);
      }
      e.params.hashNavigation.watchState && d.addEventListener("hashchange", n);
    },
    o = () => {
      e.params.hashNavigation.watchState &&
        d.removeEventListener("hashchange", n);
    };
  r("init", () => {
    e.params.hashNavigation.enabled && l();
  }),
    r("destroy", () => {
      e.params.hashNavigation.enabled && o();
    }),
    r("transitionEnd _freeModeNoMomentumRelease", () => {
      a && f();
    }),
    r("slideChange", () => {
      a && e.params.cssMode && f();
    });
}
function Hi(t) {
  let { swiper: e, extendParams: s, on: i, emit: r, params: a } = t;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    s({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let c,
    d,
    n = a && a.autoplay ? a.autoplay.delay : 3e3,
    f = a && a.autoplay ? a.autoplay.delay : 3e3,
    l,
    o = new Date().getTime,
    p,
    u,
    v,
    w,
    g,
    b;
  function h(M) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (M.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", h), S()));
  }
  const m = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (p = !0) : p && ((f = l), (p = !1));
      const M = e.autoplay.paused ? l : o + f - new Date().getTime();
      (e.autoplay.timeLeft = M),
        r("autoplayTimeLeft", M, M / n),
        (d = requestAnimationFrame(() => {
          m();
        }));
    },
    x = () => {
      let M;
      return (
        e.virtual && e.params.virtual.enabled
          ? (M = e.slides.filter((I) =>
              I.classList.contains("swiper-slide-active")
            )[0])
          : (M = e.slides[e.activeIndex]),
        M ? parseInt(M.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    T = (M) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(d), m();
      let O = typeof M > "u" ? e.params.autoplay.delay : M;
      (n = e.params.autoplay.delay), (f = e.params.autoplay.delay);
      const I = x();
      !Number.isNaN(I) &&
        I > 0 &&
        typeof M > "u" &&
        ((O = I), (n = I), (f = I)),
        (l = O);
      const j = e.params.speed,
        B = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(j, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, j, !0, !0), r("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(j, !0, !0), r("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, j, !0, !0), r("autoplay")),
            e.params.cssMode &&
              ((o = new Date().getTime()),
              requestAnimationFrame(() => {
                T();
              })));
        };
      return (
        O > 0
          ? (clearTimeout(c),
            (c = setTimeout(() => {
              B();
            }, O)))
          : requestAnimationFrame(() => {
              B();
            }),
        O
      );
    },
    A = () => {
      (e.autoplay.running = !0), T(), r("autoplayStart");
    },
    P = () => {
      (e.autoplay.running = !1),
        clearTimeout(c),
        cancelAnimationFrame(d),
        r("autoplayStop");
    },
    $ = (M, O) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(c), M || (b = !0);
      const I = () => {
        r("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", h)
            : S();
      };
      if (((e.autoplay.paused = !0), O)) {
        g && (l = e.params.autoplay.delay), (g = !1), I();
        return;
      }
      (l = (l || e.params.autoplay.delay) - (new Date().getTime() - o)),
        !(e.isEnd && l < 0 && !e.params.loop) && (l < 0 && (l = 0), I());
    },
    S = () => {
      (e.isEnd && l < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((o = new Date().getTime()),
        b ? ((b = !1), T(l)) : T(),
        (e.autoplay.paused = !1),
        r("autoplayResume"));
    },
    k = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const M = X();
      M.visibilityState === "hidden" && ((b = !0), $(!0)),
        M.visibilityState === "visible" && S();
    },
    L = (M) => {
      M.pointerType === "mouse" &&
        ((b = !0), !(e.animating || e.autoplay.paused) && $(!0));
    },
    z = (M) => {
      M.pointerType === "mouse" && e.autoplay.paused && S();
    },
    C = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", L),
        e.el.addEventListener("pointerleave", z));
    },
    y = () => {
      e.el.removeEventListener("pointerenter", L),
        e.el.removeEventListener("pointerleave", z);
    },
    E = () => {
      X().addEventListener("visibilitychange", k);
    },
    D = () => {
      X().removeEventListener("visibilitychange", k);
    };
  i("init", () => {
    e.params.autoplay.enabled && (C(), E(), (o = new Date().getTime()), A());
  }),
    i("destroy", () => {
      y(), D(), e.autoplay.running && P();
    }),
    i("beforeTransitionStart", (M, O, I) => {
      e.destroyed ||
        !e.autoplay.running ||
        (I || !e.params.autoplay.disableOnInteraction ? $(!0, !0) : P());
    }),
    i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          P();
          return;
        }
        (u = !0),
          (v = !1),
          (b = !1),
          (w = setTimeout(() => {
            (b = !0), (v = !0), $(!0);
          }, 200));
      }
    }),
    i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !u)) {
        if (
          (clearTimeout(w),
          clearTimeout(c),
          e.params.autoplay.disableOnInteraction)
        ) {
          (v = !1), (u = !1);
          return;
        }
        v && e.params.cssMode && S(), (v = !1), (u = !1);
      }
    }),
    i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (g = !0);
    }),
    Object.assign(e.autoplay, { start: A, stop: P, pause: $, resume: S });
}
function Bi(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let r = !1,
    a = !1;
  e.thumbs = { swiper: null };
  function c() {
    const f = e.thumbs.swiper;
    if (!f || f.destroyed) return;
    const l = f.clickedIndex,
      o = f.clickedSlide;
    if (
      (o && o.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
      typeof l > "u" ||
      l === null
    )
      return;
    let p;
    f.params.loop
      ? (p = parseInt(
          f.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        ))
      : (p = l),
      e.params.loop ? e.slideToLoop(p) : e.slideTo(p);
  }
  function d() {
    const { thumbs: f } = e.params;
    if (r) return !1;
    r = !0;
    const l = e.constructor;
    if (f.swiper instanceof l)
      (e.thumbs.swiper = f.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        e.thumbs.swiper.update();
    else if (le(f.swiper)) {
      const o = Object.assign({}, f.swiper);
      Object.assign(o, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new l(o)),
        (a = !0);
    }
    return (
      e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", c),
      !0
    );
  }
  function n(f) {
    const l = e.thumbs.swiper;
    if (!l || l.destroyed) return;
    const o =
      l.params.slidesPerView === "auto"
        ? l.slidesPerViewDynamic()
        : l.params.slidesPerView;
    let p = 1;
    const u = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (p = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (p = 1),
      (p = Math.floor(p)),
      l.slides.forEach((g) => g.classList.remove(u)),
      l.params.loop || (l.params.virtual && l.params.virtual.enabled))
    )
      for (let g = 0; g < p; g += 1)
        R(l.slidesEl, `[data-swiper-slide-index="${e.realIndex + g}"]`).forEach(
          (b) => {
            b.classList.add(u);
          }
        );
    else
      for (let g = 0; g < p; g += 1)
        l.slides[e.realIndex + g] && l.slides[e.realIndex + g].classList.add(u);
    const v = e.params.thumbs.autoScrollOffset,
      w = v && !l.params.loop;
    if (e.realIndex !== l.realIndex || w) {
      const g = l.activeIndex;
      let b, h;
      if (l.params.loop) {
        const m = l.slides.filter(
          (x) => x.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
        )[0];
        (b = l.slides.indexOf(m)),
          (h = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (b = e.realIndex), (h = b > e.previousIndex ? "next" : "prev");
      w && (b += h === "next" ? v : -1 * v),
        l.visibleSlidesIndexes &&
          l.visibleSlidesIndexes.indexOf(b) < 0 &&
          (l.params.centeredSlides
            ? b > g
              ? (b = b - Math.floor(o / 2) + 1)
              : (b = b + Math.floor(o / 2) - 1)
            : b > g && l.params.slidesPerGroup,
          l.slideTo(b, f ? 0 : void 0));
    }
  }
  i("beforeInit", () => {
    const { thumbs: f } = e.params;
    if (!(!f || !f.swiper))
      if (typeof f.swiper == "string" || f.swiper instanceof HTMLElement) {
        const l = X(),
          o = () => {
            const u =
              typeof f.swiper == "string"
                ? l.querySelector(f.swiper)
                : f.swiper;
            if (u && u.swiper) (f.swiper = u.swiper), d(), n(!0);
            else if (u) {
              const v = (w) => {
                (f.swiper = w.detail[0]),
                  u.removeEventListener("init", v),
                  d(),
                  n(!0),
                  f.swiper.update(),
                  e.update();
              };
              u.addEventListener("init", v);
            }
            return u;
          },
          p = () => {
            if (e.destroyed) return;
            o() || requestAnimationFrame(p);
          };
        requestAnimationFrame(p);
      } else d(), n(!0);
  }),
    i("slideChange update resize observerUpdate", () => {
      n();
    }),
    i("setTransition", (f, l) => {
      const o = e.thumbs.swiper;
      !o || o.destroyed || o.setTransition(l);
    }),
    i("beforeDestroy", () => {
      const f = e.thumbs.swiper;
      !f || f.destroyed || (a && f.destroy());
    }),
    Object.assign(e.thumbs, { init: d, update: n });
}
function Gi(t) {
  let { swiper: e, extendParams: s, emit: i, once: r } = t;
  s({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function a() {
    if (e.params.cssMode) return;
    const n = e.getTranslate();
    e.setTranslate(n),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function c() {
    if (e.params.cssMode) return;
    const { touchEventsData: n, touches: f } = e;
    n.velocities.length === 0 &&
      n.velocities.push({
        position: f[e.isHorizontal() ? "startX" : "startY"],
        time: n.touchStartTime,
      }),
      n.velocities.push({
        position: f[e.isHorizontal() ? "currentX" : "currentY"],
        time: q(),
      });
  }
  function d(n) {
    let { currentPos: f } = n;
    if (e.params.cssMode) return;
    const {
        params: l,
        wrapperEl: o,
        rtlTranslate: p,
        snapGrid: u,
        touchEventsData: v,
      } = e,
      g = q() - v.touchStartTime;
    if (f < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (f > -e.maxTranslate()) {
      e.slides.length < u.length
        ? e.slideTo(u.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (l.freeMode.momentum) {
      if (v.velocities.length > 1) {
        const $ = v.velocities.pop(),
          S = v.velocities.pop(),
          k = $.position - S.position,
          L = $.time - S.time;
        (e.velocity = k / L),
          (e.velocity /= 2),
          Math.abs(e.velocity) < l.freeMode.minimumVelocity && (e.velocity = 0),
          (L > 150 || q() - $.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= l.freeMode.momentumVelocityRatio),
        (v.velocities.length = 0);
      let b = 1e3 * l.freeMode.momentumRatio;
      const h = e.velocity * b;
      let m = e.translate + h;
      p && (m = -m);
      let x = !1,
        T;
      const A = Math.abs(e.velocity) * 20 * l.freeMode.momentumBounceRatio;
      let P;
      if (m < e.maxTranslate())
        l.freeMode.momentumBounce
          ? (m + e.maxTranslate() < -A && (m = e.maxTranslate() - A),
            (T = e.maxTranslate()),
            (x = !0),
            (v.allowMomentumBounce = !0))
          : (m = e.maxTranslate()),
          l.loop && l.centeredSlides && (P = !0);
      else if (m > e.minTranslate())
        l.freeMode.momentumBounce
          ? (m - e.minTranslate() > A && (m = e.minTranslate() + A),
            (T = e.minTranslate()),
            (x = !0),
            (v.allowMomentumBounce = !0))
          : (m = e.minTranslate()),
          l.loop && l.centeredSlides && (P = !0);
      else if (l.freeMode.sticky) {
        let $;
        for (let S = 0; S < u.length; S += 1)
          if (u[S] > -m) {
            $ = S;
            break;
          }
        Math.abs(u[$] - m) < Math.abs(u[$ - 1] - m) ||
        e.swipeDirection === "next"
          ? (m = u[$])
          : (m = u[$ - 1]),
          (m = -m);
      }
      if (
        (P &&
          r("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (p
            ? (b = Math.abs((-m - e.translate) / e.velocity))
            : (b = Math.abs((m - e.translate) / e.velocity)),
          l.freeMode.sticky)
        ) {
          const $ = Math.abs((p ? -m : m) - e.translate),
            S = e.slidesSizesGrid[e.activeIndex];
          $ < S
            ? (b = l.speed)
            : $ < 2 * S
            ? (b = l.speed * 1.5)
            : (b = l.speed * 2.5);
        }
      } else if (l.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      l.freeMode.momentumBounce && x
        ? (e.updateProgress(T),
          e.setTransition(b),
          e.setTranslate(m),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          ce(o, () => {
            !e ||
              e.destroyed ||
              !v.allowMomentumBounce ||
              (i("momentumBounce"),
              e.setTransition(l.speed),
              setTimeout(() => {
                e.setTranslate(T),
                  ce(o, () => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
        ? (i("_freeModeNoMomentumRelease"),
          e.updateProgress(m),
          e.setTransition(b),
          e.setTranslate(m),
          e.transitionStart(!0, e.swipeDirection),
          e.animating ||
            ((e.animating = !0),
            ce(o, () => {
              !e || e.destroyed || e.transitionEnd();
            })))
        : e.updateProgress(m),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (l.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else l.freeMode && i("_freeModeNoMomentumRelease");
    (!l.freeMode.momentum || g >= l.longSwipesMs) &&
      (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: { onTouchStart: a, onTouchMove: c, onTouchEnd: d },
  });
}
function Ri(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({ grid: { rows: 1, fill: "column" } });
  let r, a, c, d;
  const n = () => {
      let v = e.params.spaceBetween;
      return (
        typeof v == "string" && v.indexOf("%") >= 0
          ? (v = (parseFloat(v.replace("%", "")) / 100) * e.size)
          : typeof v == "string" && (v = parseFloat(v)),
        v
      );
    },
    f = (v) => {
      const { slidesPerView: w } = e.params,
        { rows: g, fill: b } = e.params.grid;
      (c = Math.floor(v / g)),
        Math.floor(v / g) === v / g ? (r = v) : (r = Math.ceil(v / g) * g),
        w !== "auto" && b === "row" && (r = Math.max(r, w * g)),
        (a = r / g);
    },
    l = (v, w, g, b) => {
      const { slidesPerGroup: h } = e.params,
        m = n(),
        { rows: x, fill: T } = e.params.grid;
      let A, P, $;
      if (T === "row" && h > 1) {
        const S = Math.floor(v / (h * x)),
          k = v - x * h * S,
          L = S === 0 ? h : Math.min(Math.ceil((g - S * x * h) / x), h);
        ($ = Math.floor(k / L)),
          (P = k - $ * L + S * h),
          (A = P + ($ * r) / x),
          (w.style.order = A);
      } else
        T === "column"
          ? ((P = Math.floor(v / x)),
            ($ = v - P * x),
            (P > c || (P === c && $ === x - 1)) &&
              (($ += 1), $ >= x && (($ = 0), (P += 1))))
          : (($ = Math.floor(v / a)), (P = v - $ * a));
      (w.row = $),
        (w.column = P),
        (w.style[b("margin-top")] = $ !== 0 ? m && `${m}px` : "");
    },
    o = (v, w, g) => {
      const { centeredSlides: b, roundLengths: h } = e.params,
        m = n(),
        { rows: x } = e.params.grid;
      if (
        ((e.virtualSize = (v + m) * r),
        (e.virtualSize = Math.ceil(e.virtualSize / x) - m),
        (e.wrapperEl.style[g("width")] = `${e.virtualSize + m}px`),
        b)
      ) {
        const T = [];
        for (let A = 0; A < w.length; A += 1) {
          let P = w[A];
          h && (P = Math.floor(P)), w[A] < e.virtualSize + w[0] && T.push(P);
        }
        w.splice(0, w.length), w.push(...T);
      }
    },
    p = () => {
      d = e.params.grid && e.params.grid.rows > 1;
    },
    u = () => {
      const { params: v, el: w } = e,
        g = v.grid && v.grid.rows > 1;
      d && !g
        ? (w.classList.remove(
            `${v.containerModifierClass}grid`,
            `${v.containerModifierClass}grid-column`
          ),
          (c = 1),
          e.emitContainerClasses())
        : !d &&
          g &&
          (w.classList.add(`${v.containerModifierClass}grid`),
          v.grid.fill === "column" &&
            w.classList.add(`${v.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        (d = g);
    };
  i("init", p),
    i("update", u),
    (e.grid = { initSlides: f, updateSlide: l, updateWrapperSize: o });
}
function Xi(t) {
  const e = this,
    { params: s, slidesEl: i } = e;
  s.loop && e.loopDestroy();
  const r = (a) => {
    if (typeof a == "string") {
      const c = document.createElement("div");
      (c.innerHTML = a), i.append(c.children[0]), (c.innerHTML = "");
    } else i.append(a);
  };
  if (typeof t == "object" && "length" in t)
    for (let a = 0; a < t.length; a += 1) t[a] && r(t[a]);
  else r(t);
  e.recalcSlides(),
    s.loop && e.loopCreate(),
    (!s.observer || e.isElement) && e.update();
}
function Ni(t) {
  const e = this,
    { params: s, activeIndex: i, slidesEl: r } = e;
  s.loop && e.loopDestroy();
  let a = i + 1;
  const c = (d) => {
    if (typeof d == "string") {
      const n = document.createElement("div");
      (n.innerHTML = d), r.prepend(n.children[0]), (n.innerHTML = "");
    } else r.prepend(d);
  };
  if (typeof t == "object" && "length" in t) {
    for (let d = 0; d < t.length; d += 1) t[d] && c(t[d]);
    a = i + t.length;
  } else c(t);
  e.recalcSlides(),
    s.loop && e.loopCreate(),
    (!s.observer || e.isElement) && e.update(),
    e.slideTo(a, 0, !1);
}
function Yi(t, e) {
  const s = this,
    { params: i, activeIndex: r, slidesEl: a } = s;
  let c = r;
  i.loop && ((c -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
  const d = s.slides.length;
  if (t <= 0) {
    s.prependSlide(e);
    return;
  }
  if (t >= d) {
    s.appendSlide(e);
    return;
  }
  let n = c > t ? c + 1 : c;
  const f = [];
  for (let l = d - 1; l >= t; l -= 1) {
    const o = s.slides[l];
    o.remove(), f.unshift(o);
  }
  if (typeof e == "object" && "length" in e) {
    for (let l = 0; l < e.length; l += 1) e[l] && a.append(e[l]);
    n = c > t ? c + e.length : c;
  } else a.append(e);
  for (let l = 0; l < f.length; l += 1) a.append(f[l]);
  s.recalcSlides(),
    i.loop && s.loopCreate(),
    (!i.observer || s.isElement) && s.update(),
    i.loop ? s.slideTo(n + s.loopedSlides, 0, !1) : s.slideTo(n, 0, !1);
}
function Vi(t) {
  const e = this,
    { params: s, activeIndex: i } = e;
  let r = i;
  s.loop && ((r -= e.loopedSlides), e.loopDestroy());
  let a = r,
    c;
  if (typeof t == "object" && "length" in t) {
    for (let d = 0; d < t.length; d += 1)
      (c = t[d]), e.slides[c] && e.slides[c].remove(), c < a && (a -= 1);
    a = Math.max(a, 0);
  } else
    (c = t),
      e.slides[c] && e.slides[c].remove(),
      c < a && (a -= 1),
      (a = Math.max(a, 0));
  e.recalcSlides(),
    s.loop && e.loopCreate(),
    (!s.observer || e.isElement) && e.update(),
    s.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1);
}
function Wi() {
  const t = this,
    e = [];
  for (let s = 0; s < t.slides.length; s += 1) e.push(s);
  t.removeSlide(e);
}
function qi(t) {
  let { swiper: e } = t;
  Object.assign(e, {
    appendSlide: Xi.bind(e),
    prependSlide: Ni.bind(e),
    addSlide: Yi.bind(e),
    removeSlide: Vi.bind(e),
    removeAllSlides: Wi.bind(e),
  });
}
function ae(t) {
  const {
    effect: e,
    swiper: s,
    on: i,
    setTranslate: r,
    setTransition: a,
    overwriteParams: c,
    perspective: d,
    recreateShadows: n,
    getEffectParams: f,
  } = t;
  i("beforeInit", () => {
    if (s.params.effect !== e) return;
    s.classNames.push(`${s.params.containerModifierClass}${e}`),
      d && d() && s.classNames.push(`${s.params.containerModifierClass}3d`);
    const o = c ? c() : {};
    Object.assign(s.params, o), Object.assign(s.originalParams, o);
  }),
    i("setTranslate", () => {
      s.params.effect === e && r();
    }),
    i("setTransition", (o, p) => {
      s.params.effect === e && a(p);
    }),
    i("transitionEnd", () => {
      if (s.params.effect === e && n) {
        if (!f || !f().slideShadows) return;
        s.slides.forEach((o) => {
          o.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((p) => p.remove());
        }),
          n();
      }
    });
  let l;
  i("virtualUpdate", () => {
    s.params.effect === e &&
      (s.slides.length || (l = !0),
      requestAnimationFrame(() => {
        l && s.slides && s.slides.length && (r(), (l = !1));
      }));
  });
}
function fe(t, e) {
  const s = ie(e);
  return (
    s !== e &&
      ((s.style.backfaceVisibility = "hidden"),
      (s.style["-webkit-backface-visibility"] = "hidden")),
    s
  );
}
function xe(t) {
  let { swiper: e, duration: s, transformElements: i, allSlides: r } = t;
  const { activeIndex: a } = e,
    c = (d) =>
      d.parentElement
        ? d.parentElement
        : e.slides.filter(
            (f) => f.shadowRoot && f.shadowRoot === d.parentNode
          )[0];
  if (e.params.virtualTranslate && s !== 0) {
    let d = !1,
      n;
    r
      ? (n = i)
      : (n = i.filter((f) => {
          const l = f.classList.contains("swiper-slide-transform") ? c(f) : f;
          return e.getSlideIndex(l) === a;
        })),
      n.forEach((f) => {
        ce(f, () => {
          if (d || !e || e.destroyed) return;
          (d = !0), (e.animating = !1);
          const l = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          e.wrapperEl.dispatchEvent(l);
        });
      });
  }
}
function Ui(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({ fadeEffect: { crossFade: !1 } }),
    ae({
      effect: "fade",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: c } = e,
          d = e.params.fadeEffect;
        for (let n = 0; n < c.length; n += 1) {
          const f = e.slides[n];
          let o = -f.swiperSlideOffset;
          e.params.virtualTranslate || (o -= e.translate);
          let p = 0;
          e.isHorizontal() || ((p = o), (o = 0));
          const u = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(f.progress), 0)
              : 1 + Math.min(Math.max(f.progress, -1), 0),
            v = fe(d, f);
          (v.style.opacity = u),
            (v.style.transform = `translate3d(${o}px, ${p}px, 0px)`);
        }
      },
      setTransition: (c) => {
        const d = e.slides.map((n) => ie(n));
        d.forEach((n) => {
          n.style.transitionDuration = `${c}ms`;
        }),
          xe({ swiper: e, duration: c, transformElements: d, allSlides: !0 });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
function Ki(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  });
  const r = (n, f, l) => {
    let o = l
        ? n.querySelector(".swiper-slide-shadow-left")
        : n.querySelector(".swiper-slide-shadow-top"),
      p = l
        ? n.querySelector(".swiper-slide-shadow-right")
        : n.querySelector(".swiper-slide-shadow-bottom");
    o ||
      ((o = U(
        "div",
        `swiper-slide-shadow-cube swiper-slide-shadow-${
          l ? "left" : "top"
        }`.split(" ")
      )),
      n.append(o)),
      p ||
        ((p = U(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            l ? "right" : "bottom"
          }`.split(" ")
        )),
        n.append(p)),
      o && (o.style.opacity = Math.max(-f, 0)),
      p && (p.style.opacity = Math.max(f, 0));
  };
  ae({
    effect: "cube",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
          el: n,
          wrapperEl: f,
          slides: l,
          width: o,
          height: p,
          rtlTranslate: u,
          size: v,
          browser: w,
        } = e,
        g = e.params.cubeEffect,
        b = e.isHorizontal(),
        h = e.virtual && e.params.virtual.enabled;
      let m = 0,
        x;
      g.shadow &&
        (b
          ? ((x = e.wrapperEl.querySelector(".swiper-cube-shadow")),
            x || ((x = U("div", "swiper-cube-shadow")), e.wrapperEl.append(x)),
            (x.style.height = `${o}px`))
          : ((x = n.querySelector(".swiper-cube-shadow")),
            x || ((x = U("div", "swiper-cube-shadow")), n.append(x))));
      for (let A = 0; A < l.length; A += 1) {
        const P = l[A];
        let $ = A;
        h && ($ = parseInt(P.getAttribute("data-swiper-slide-index"), 10));
        let S = $ * 90,
          k = Math.floor(S / 360);
        u && ((S = -S), (k = Math.floor(-S / 360)));
        const L = Math.max(Math.min(P.progress, 1), -1);
        let z = 0,
          C = 0,
          y = 0;
        $ % 4 === 0
          ? ((z = -k * 4 * v), (y = 0))
          : ($ - 1) % 4 === 0
          ? ((z = 0), (y = -k * 4 * v))
          : ($ - 2) % 4 === 0
          ? ((z = v + k * 4 * v), (y = v))
          : ($ - 3) % 4 === 0 && ((z = -v), (y = 3 * v + v * 4 * k)),
          u && (z = -z),
          b || ((C = z), (z = 0));
        const E = `rotateX(${b ? 0 : -S}deg) rotateY(${
          b ? S : 0
        }deg) translate3d(${z}px, ${C}px, ${y}px)`;
        L <= 1 &&
          L > -1 &&
          ((m = $ * 90 + L * 90), u && (m = -$ * 90 - L * 90)),
          (P.style.transform = E),
          g.slideShadows && r(P, L, b);
      }
      if (
        ((f.style.transformOrigin = `50% 50% -${v / 2}px`),
        (f.style["-webkit-transform-origin"] = `50% 50% -${v / 2}px`),
        g.shadow)
      )
        if (b)
          x.style.transform = `translate3d(0px, ${o / 2 + g.shadowOffset}px, ${
            -o / 2
          }px) rotateX(90deg) rotateZ(0deg) scale(${g.shadowScale})`;
        else {
          const A = Math.abs(m) - Math.floor(Math.abs(m) / 90) * 90,
            P =
              1.5 -
              (Math.sin((A * 2 * Math.PI) / 360) / 2 +
                Math.cos((A * 2 * Math.PI) / 360) / 2),
            $ = g.shadowScale,
            S = g.shadowScale / P,
            k = g.shadowOffset;
          x.style.transform = `scale3d(${$}, 1, ${S}) translate3d(0px, ${
            p / 2 + k
          }px, ${-p / 2 / S}px) rotateX(-90deg)`;
        }
      const T =
        (w.isSafari || w.isWebView) && w.needPerspectiveFix ? -v / 2 : 0;
      (f.style.transform = `translate3d(0px,0,${T}px) rotateX(${
        e.isHorizontal() ? 0 : m
      }deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`),
        f.style.setProperty("--swiper-cube-translate-z", `${T}px`);
    },
    setTransition: (n) => {
      const { el: f, slides: l } = e;
      if (
        (l.forEach((o) => {
          (o.style.transitionDuration = `${n}ms`),
            o
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((p) => {
                p.style.transitionDuration = `${n}ms`;
              });
        }),
        e.params.cubeEffect.shadow && !e.isHorizontal())
      ) {
        const o = f.querySelector(".swiper-cube-shadow");
        o && (o.style.transitionDuration = `${n}ms`);
      }
    },
    recreateShadows: () => {
      const n = e.isHorizontal();
      e.slides.forEach((f) => {
        const l = Math.max(Math.min(f.progress, 1), -1);
        r(f, l, n);
      });
    },
    getEffectParams: () => e.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0,
    }),
  });
}
function re(t, e, s) {
  const i = `swiper-slide-shadow${s ? `-${s}` : ""}${
      t ? ` swiper-slide-shadow-${t}` : ""
    }`,
    r = ie(e);
  let a = r.querySelector(`.${i.split(" ").join(".")}`);
  return a || ((a = U("div", i.split(" "))), r.append(a)), a;
}
function Zi(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
  const r = (n, f) => {
    let l = e.isHorizontal()
        ? n.querySelector(".swiper-slide-shadow-left")
        : n.querySelector(".swiper-slide-shadow-top"),
      o = e.isHorizontal()
        ? n.querySelector(".swiper-slide-shadow-right")
        : n.querySelector(".swiper-slide-shadow-bottom");
    l || (l = re("flip", n, e.isHorizontal() ? "left" : "top")),
      o || (o = re("flip", n, e.isHorizontal() ? "right" : "bottom")),
      l && (l.style.opacity = Math.max(-f, 0)),
      o && (o.style.opacity = Math.max(f, 0));
  };
  ae({
    effect: "flip",
    swiper: e,
    on: i,
    setTranslate: () => {
      const { slides: n, rtlTranslate: f } = e,
        l = e.params.flipEffect;
      for (let o = 0; o < n.length; o += 1) {
        const p = n[o];
        let u = p.progress;
        e.params.flipEffect.limitRotation &&
          (u = Math.max(Math.min(p.progress, 1), -1));
        const v = p.swiperSlideOffset;
        let g = -180 * u,
          b = 0,
          h = e.params.cssMode ? -v - e.translate : -v,
          m = 0;
        e.isHorizontal()
          ? f && (g = -g)
          : ((m = h), (h = 0), (b = -g), (g = 0)),
          (p.style.zIndex = -Math.abs(Math.round(u)) + n.length),
          l.slideShadows && r(p, u);
        const x = `translate3d(${h}px, ${m}px, 0px) rotateX(${b}deg) rotateY(${g}deg)`,
          T = fe(l, p);
        T.style.transform = x;
      }
    },
    setTransition: (n) => {
      const f = e.slides.map((l) => ie(l));
      f.forEach((l) => {
        (l.style.transitionDuration = `${n}ms`),
          l
            .querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .forEach((o) => {
              o.style.transitionDuration = `${n}ms`;
            });
      }),
        xe({ swiper: e, duration: n, transformElements: f });
    },
    recreateShadows: () => {
      e.params.flipEffect,
        e.slides.forEach((n) => {
          let f = n.progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(n.progress, 1), -1)),
            r(n, f);
        });
    },
    getEffectParams: () => e.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode,
    }),
  });
}
function Ji(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    ae({
      effect: "coverflow",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { width: c, height: d, slides: n, slidesSizesGrid: f } = e,
          l = e.params.coverflowEffect,
          o = e.isHorizontal(),
          p = e.translate,
          u = o ? -p + c / 2 : -p + d / 2,
          v = o ? l.rotate : -l.rotate,
          w = l.depth;
        for (let g = 0, b = n.length; g < b; g += 1) {
          const h = n[g],
            m = f[g],
            x = h.swiperSlideOffset,
            T = (u - x - m / 2) / m,
            A =
              typeof l.modifier == "function" ? l.modifier(T) : T * l.modifier;
          let P = o ? v * A : 0,
            $ = o ? 0 : v * A,
            S = -w * Math.abs(A),
            k = l.stretch;
          typeof k == "string" &&
            k.indexOf("%") !== -1 &&
            (k = (parseFloat(l.stretch) / 100) * m);
          let L = o ? 0 : k * A,
            z = o ? k * A : 0,
            C = 1 - (1 - l.scale) * Math.abs(A);
          Math.abs(z) < 0.001 && (z = 0),
            Math.abs(L) < 0.001 && (L = 0),
            Math.abs(S) < 0.001 && (S = 0),
            Math.abs(P) < 0.001 && (P = 0),
            Math.abs($) < 0.001 && ($ = 0),
            Math.abs(C) < 0.001 && (C = 0);
          const y = `translate3d(${z}px,${L}px,${S}px)  rotateX(${$}deg) rotateY(${P}deg) scale(${C})`,
            E = fe(l, h);
          if (
            ((E.style.transform = y),
            (h.style.zIndex = -Math.abs(Math.round(A)) + 1),
            l.slideShadows)
          ) {
            let D = o
                ? h.querySelector(".swiper-slide-shadow-left")
                : h.querySelector(".swiper-slide-shadow-top"),
              M = o
                ? h.querySelector(".swiper-slide-shadow-right")
                : h.querySelector(".swiper-slide-shadow-bottom");
            D || (D = re("coverflow", h, o ? "left" : "top")),
              M || (M = re("coverflow", h, o ? "right" : "bottom")),
              D && (D.style.opacity = A > 0 ? A : 0),
              M && (M.style.opacity = -A > 0 ? -A : 0);
          }
        }
      },
      setTransition: (c) => {
        e.slides
          .map((n) => ie(n))
          .forEach((n) => {
            (n.style.transitionDuration = `${c}ms`),
              n
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((f) => {
                  f.style.transitionDuration = `${c}ms`;
                });
          });
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    });
}
function Qi(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
      next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
    },
  });
  const r = (d) => (typeof d == "string" ? d : `${d}px`);
  ae({
    effect: "creative",
    swiper: e,
    on: i,
    setTranslate: () => {
      const { slides: d, wrapperEl: n, slidesSizesGrid: f } = e,
        l = e.params.creativeEffect,
        { progressMultiplier: o } = l,
        p = e.params.centeredSlides;
      if (p) {
        const u = f[0] / 2 - e.params.slidesOffsetBefore || 0;
        n.style.transform = `translateX(calc(50% - ${u}px))`;
      }
      for (let u = 0; u < d.length; u += 1) {
        const v = d[u],
          w = v.progress,
          g = Math.min(Math.max(v.progress, -l.limitProgress), l.limitProgress);
        let b = g;
        p ||
          (b = Math.min(
            Math.max(v.originalProgress, -l.limitProgress),
            l.limitProgress
          ));
        const h = v.swiperSlideOffset,
          m = [e.params.cssMode ? -h - e.translate : -h, 0, 0],
          x = [0, 0, 0];
        let T = !1;
        e.isHorizontal() || ((m[1] = m[0]), (m[0] = 0));
        let A = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        g < 0 ? ((A = l.next), (T = !0)) : g > 0 && ((A = l.prev), (T = !0)),
          m.forEach((C, y) => {
            m[y] = `calc(${C}px + (${r(A.translate[y])} * ${Math.abs(g * o)}))`;
          }),
          x.forEach((C, y) => {
            x[y] = A.rotate[y] * Math.abs(g * o);
          }),
          (v.style.zIndex = -Math.abs(Math.round(w)) + d.length);
        const P = m.join(", "),
          $ = `rotateX(${x[0]}deg) rotateY(${x[1]}deg) rotateZ(${x[2]}deg)`,
          S =
            b < 0
              ? `scale(${1 + (1 - A.scale) * b * o})`
              : `scale(${1 - (1 - A.scale) * b * o})`,
          k = b < 0 ? 1 + (1 - A.opacity) * b * o : 1 - (1 - A.opacity) * b * o,
          L = `translate3d(${P}) ${$} ${S}`;
        if ((T && A.shadow) || !T) {
          let C = v.querySelector(".swiper-slide-shadow");
          if ((!C && A.shadow && (C = re("creative", v)), C)) {
            const y = l.shadowPerProgress ? g * (1 / l.limitProgress) : g;
            C.style.opacity = Math.min(Math.max(Math.abs(y), 0), 1);
          }
        }
        const z = fe(l, v);
        (z.style.transform = L),
          (z.style.opacity = k),
          A.origin && (z.style.transformOrigin = A.origin);
      }
    },
    setTransition: (d) => {
      const n = e.slides.map((f) => ie(f));
      n.forEach((f) => {
        (f.style.transitionDuration = `${d}ms`),
          f.querySelectorAll(".swiper-slide-shadow").forEach((l) => {
            l.style.transitionDuration = `${d}ms`;
          });
      }),
        xe({ swiper: e, duration: d, transformElements: n, allSlides: !0 });
    },
    perspective: () => e.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode,
    }),
  });
}
function es(t) {
  let { swiper: e, extendParams: s, on: i } = t;
  s({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8,
    },
  }),
    ae({
      effect: "cards",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: c, activeIndex: d, rtlTranslate: n } = e,
          f = e.params.cardsEffect,
          { startTranslate: l, isTouched: o } = e.touchEventsData,
          p = n ? -e.translate : e.translate;
        for (let u = 0; u < c.length; u += 1) {
          const v = c[u],
            w = v.progress,
            g = Math.min(Math.max(w, -4), 4);
          let b = v.swiperSlideOffset;
          e.params.centeredSlides &&
            !e.params.cssMode &&
            (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
            e.params.centeredSlides &&
              e.params.cssMode &&
              (b -= c[0].swiperSlideOffset);
          let h = e.params.cssMode ? -b - e.translate : -b,
            m = 0;
          const x = -100 * Math.abs(g);
          let T = 1,
            A = -f.perSlideRotate * g,
            P = f.perSlideOffset - Math.abs(g) * 0.75;
          const $ =
              e.virtual && e.params.virtual.enabled ? e.virtual.from + u : u,
            S =
              ($ === d || $ === d - 1) &&
              g > 0 &&
              g < 1 &&
              (o || e.params.cssMode) &&
              p < l,
            k =
              ($ === d || $ === d + 1) &&
              g < 0 &&
              g > -1 &&
              (o || e.params.cssMode) &&
              p > l;
          if (S || k) {
            const y = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
            (A += -28 * g * y),
              (T += -0.5 * y),
              (P += 96 * y),
              (m = `${-25 * y * Math.abs(g)}%`);
          }
          if (
            (g < 0
              ? (h = `calc(${h}px ${n ? "-" : "+"} (${P * Math.abs(g)}%))`)
              : g > 0
              ? (h = `calc(${h}px ${n ? "-" : "+"} (-${P * Math.abs(g)}%))`)
              : (h = `${h}px`),
            !e.isHorizontal())
          ) {
            const y = m;
            (m = h), (h = y);
          }
          const L = g < 0 ? `${1 + (1 - T) * g}` : `${1 - (1 - T) * g}`,
            z = `
        translate3d(${h}, ${m}, ${x}px)
        rotateZ(${f.rotate ? (n ? -A : A) : 0}deg)
        scale(${L})
      `;
          if (f.slideShadows) {
            let y = v.querySelector(".swiper-slide-shadow");
            y || (y = re("cards", v)),
              y &&
                (y.style.opacity = Math.min(
                  Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                  1
                ));
          }
          v.style.zIndex = -Math.abs(Math.round(w)) + c.length;
          const C = fe(f, v);
          C.style.transform = z;
        }
      },
      setTransition: (c) => {
        const d = e.slides.map((n) => ie(n));
        d.forEach((n) => {
          (n.style.transitionDuration = `${c}ms`),
            n.querySelectorAll(".swiper-slide-shadow").forEach((f) => {
              f.style.transitionDuration = `${c}ms`;
            });
        }),
          xe({ swiper: e, duration: c, transformElements: d });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
const ts = [
  Pi,
  zi,
  Li,
  Ai,
  Ii,
  $i,
  Oi,
  Di,
  ki,
  Fi,
  _i,
  ji,
  Hi,
  Bi,
  Gi,
  Ri,
  qi,
  Ui,
  Ki,
  Zi,
  Ji,
  Qi,
  es,
];
Y.use(ts);
const Ve = (t) => {
    if (parseFloat(t) === Number(t)) return Number(t);
    if (t === "true" || t === "") return !0;
    if (t === "false") return !1;
    if (t === "null") return null;
    if (t !== "undefined") {
      if (
        typeof t == "string" &&
        t.includes("{") &&
        t.includes("}") &&
        t.includes('"')
      ) {
        let e;
        try {
          e = JSON.parse(t);
        } catch {
          e = t;
        }
        return e;
      }
      return t;
    }
  },
  We = [
    "a11y",
    "autoplay",
    "controller",
    "cards-effect",
    "coverflow-effect",
    "creative-effect",
    "cube-effect",
    "fade-effect",
    "flip-effect",
    "free-mode",
    "grid",
    "hash-navigation",
    "history",
    "keyboard",
    "mousewheel",
    "navigation",
    "pagination",
    "parallax",
    "scrollbar",
    "thumbs",
    "virtual",
    "zoom",
  ];
function qe(t, e, s) {
  const i = {},
    r = {};
  be(i, ke);
  const a = [...ye, "on"],
    c = a.map((n) => n.replace(/_/, ""));
  a.forEach((n) => {
    (n = n.replace("_", "")), typeof t[n] < "u" && (r[n] = t[n]);
  });
  const d = [...t.attributes];
  return (
    typeof e == "string" &&
      typeof s < "u" &&
      d.push({ name: e, value: se(s) ? { ...s } : s }),
    d.forEach((n) => {
      const f = We.filter((l) => n.name.indexOf(`${l}-`) === 0)[0];
      if (f) {
        const l = we(f),
          o = we(n.name.split(`${f}-`)[1]);
        typeof r[l] > "u" && (r[l] = {}),
          r[l] === !0 && (r[l] = { enabled: !0 }),
          (r[l][o] = Ve(n.value));
      } else {
        const l = we(n.name);
        if (!c.includes(l)) return;
        const o = Ve(n.value);
        r[l] && We.includes(n.name) && !se(o)
          ? (r[l].constructor !== Object && (r[l] = {}), (r[l].enabled = !!o))
          : (r[l] = o);
      }
    }),
    be(i, r),
    i.navigation
      ? (i.navigation = {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          ...(i.navigation !== !0 ? i.navigation : {}),
        })
      : i.navigation === !1 && delete i.navigation,
    i.scrollbar
      ? (i.scrollbar = {
          el: ".swiper-scrollbar",
          ...(i.scrollbar !== !0 ? i.scrollbar : {}),
        })
      : i.scrollbar === !1 && delete i.scrollbar,
    i.pagination
      ? (i.pagination = {
          el: ".swiper-pagination",
          ...(i.pagination !== !0 ? i.pagination : {}),
        })
      : i.pagination === !1 && delete i.pagination,
    { params: i, passedParams: r }
  );
}
const is =
    ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;overflow:clip;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",
  ss =
    "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
class rs {}
const st = typeof window > "u" || typeof HTMLElement > "u" ? rs : HTMLElement,
  Ue = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,
  rt = (t, e) => {
    if (typeof CSSStyleSheet < "u" && t.adoptedStyleSheets) {
      const s = new CSSStyleSheet();
      s.replaceSync(e), (t.adoptedStyleSheets = [s]);
    } else {
      const s = document.createElement("style");
      (s.rel = "stylesheet"), (s.textContent = e), t.appendChild(s);
    }
  };
class at extends st {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get nextButtonSvg() {
    return Ue;
  }
  static get prevButtonSvg() {
    return Ue.replace(
      "/></svg>",
      ' transform-origin="center" transform="rotate(180)"/></svg>'
    );
  }
  cssStyles() {
    return [
      is,
      ...(this.injectStyles && Array.isArray(this.injectStyles)
        ? this.injectStyles
        : []),
    ].join(`
`);
  }
  cssLinks() {
    return this.injectStylesUrls || [];
  }
  calcSlideSlots() {
    const e = this.slideSlots || 0,
      s = [...this.querySelectorAll("[slot^=slide-]")].map((i) =>
        parseInt(i.getAttribute("slot").split("slide-")[1], 10)
      );
    if (
      ((this.slideSlots = s.length ? Math.max(...s) + 1 : 0), !!this.rendered)
    ) {
      if (this.slideSlots > e)
        for (let i = e; i < this.slideSlots; i += 1) {
          const r = document.createElement("swiper-slide");
          r.setAttribute("part", `slide slide-${i + 1}`);
          const a = document.createElement("slot");
          a.setAttribute("name", `slide-${i + 1}`),
            r.appendChild(a),
            this.shadowRoot.querySelector(".swiper-wrapper").appendChild(r);
        }
      else if (this.slideSlots < e) {
        const i = this.swiper.slides;
        for (let r = i.length - 1; r >= 0; r -= 1)
          r > this.slideSlots && i[r].remove();
      }
    }
  }
  render() {
    if (this.rendered) return;
    this.calcSlideSlots();
    let e = this.cssStyles();
    this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")),
      e.length && rt(this.shadowRoot, e),
      this.cssLinks().forEach((i) => {
        if (this.shadowRoot.querySelector(`link[href="${i}"]`)) return;
        const a = document.createElement("link");
        (a.rel = "stylesheet"), (a.href = i), this.shadowRoot.appendChild(a);
      });
    const s = document.createElement("div");
    s.classList.add("swiper"),
      (s.part = "container"),
      (s.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({ length: this.slideSlots })
          .map(
            (i, r) => `
        <swiper-slide part="slide slide-${r}">
          <slot name="slide-${r}"></slot>
        </swiper-slide>
        `
          )
          .join("")}
      </div>
      <slot name="container-end"></slot>
      ${
        Ei(this.passedParams)
          ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `
          : ""
      }
      ${
        Ti(this.passedParams)
          ? `
        <div part="pagination" class="swiper-pagination"></div>
      `
          : ""
      }
      ${
        Ci(this.passedParams)
          ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `
          : ""
      }
    `),
      this.shadowRoot.appendChild(s),
      (this.rendered = !0);
  }
  initialize() {
    var e = this;
    if (this.initialized) return;
    this.initialized = !0;
    const { params: s, passedParams: i } = qe(this);
    (this.swiperParams = s),
      (this.passedParams = i),
      delete this.swiperParams.init,
      this.render(),
      (this.swiper = new Y(this.shadowRoot.querySelector(".swiper"), {
        ...(s.virtual
          ? {}
          : { observer: !0, observeSlideChildren: this.slideSlots > 0 }),
        ...s,
        touchEventsTarget: "container",
        onAny: function (r) {
          r === "observerUpdate" && e.calcSlideSlots();
          const a = s.eventsPrefix
            ? `${s.eventsPrefix}${r.toLowerCase()}`
            : r.toLowerCase();
          for (
            var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), n = 1;
            n < c;
            n++
          )
            d[n - 1] = arguments[n];
          const f = new CustomEvent(a, {
            detail: d,
            bubbles: r !== "hashChange",
            cancelable: !0,
          });
          e.dispatchEvent(f);
        },
      }));
  }
  connectedCallback() {
    (this.initialized &&
      this.nested &&
      this.closest("swiper-slide") &&
      this.closest("swiper-slide").swiperLoopMoveDOM) ||
      this.init === !1 ||
      this.getAttribute("init") === "false" ||
      this.initialize();
  }
  disconnectedCallback() {
    (this.nested &&
      this.closest("swiper-slide") &&
      this.closest("swiper-slide").swiperLoopMoveDOM) ||
      (this.swiper && this.swiper.destroy && this.swiper.destroy(),
      (this.initialized = !1));
  }
  updateSwiperOnPropChange(e, s) {
    const { params: i, passedParams: r } = qe(this, e, s);
    (this.passedParams = r),
      (this.swiperParams = i),
      Mi({
        swiper: this.swiper,
        passedParams: this.passedParams,
        changedParams: [we(e)],
        ...(e === "navigation" && r[e]
          ? { prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }
          : {}),
        ...(e === "pagination" && r[e]
          ? { paginationEl: ".swiper-pagination" }
          : {}),
        ...(e === "scrollbar" && r[e]
          ? { scrollbarEl: ".swiper-scrollbar" }
          : {}),
      });
  }
  attributeChangedCallback(e, s, i) {
    this.initialized &&
      (s === "true" && i === null && (i = !1),
      this.updateSwiperOnPropChange(e, i));
  }
  static get observedAttributes() {
    return ye
      .filter((s) => s.includes("_"))
      .map((s) =>
        s
          .replace(/[A-Z]/g, (i) => `-${i}`)
          .replace("_", "")
          .toLowerCase()
      );
  }
}
ye.forEach((t) => {
  t !== "init" &&
    ((t = t.replace("_", "")),
    Object.defineProperty(at.prototype, t, {
      configurable: !0,
      get() {
        return (this.passedParams || {})[t];
      },
      set(e) {
        this.passedParams || (this.passedParams = {}),
          (this.passedParams[t] = e),
          this.initialized && this.updateSwiperOnPropChange(t, e);
      },
    }));
});
class as extends st {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  render() {
    const e =
      this.lazy ||
      this.getAttribute("lazy") === "" ||
      this.getAttribute("lazy") === "true";
    if (
      (rt(this.shadowRoot, ss),
      this.shadowRoot.appendChild(document.createElement("slot")),
      e)
    ) {
      const s = document.createElement("div");
      s.classList.add("swiper-lazy-preloader"),
        s.part.add("preloader"),
        this.shadowRoot.appendChild(s);
    }
  }
  initialize() {
    this.render();
  }
  connectedCallback() {
    this.initialize();
  }
}
const ns = () => {
  typeof window > "u" ||
    (window.customElements.get("swiper-container") ||
      window.customElements.define("swiper-container", at),
    window.customElements.get("swiper-slide") ||
      window.customElements.define("swiper-slide", as));
};
typeof window < "u" &&
  (window.SwiperElementRegisterParams = (t) => {
    ye.push(...t);
  });
const Ke = ({ type: t, id: e }) => {
    let s = "next_linear_5621_3488",
      i = "prev_linear_5621_3491";
    e &&
      ((s = `next_linear_5621_3488_${e}`), (i = `prev_linear_5621_3491_${e}`));
    const r = F.jsxs("svg", {
        width: "100%",
        height: "100%",
        className: "w-8 h-8 sm:w-[53px] sm:h-[53px]",
        viewBox: "0 0 53 53",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          F.jsxs("g", {
            className: "state--normal",
            children: [
              F.jsx("rect", {
                x: "-0.5",
                y: "0.5",
                width: "52",
                height: "52",
                rx: "14.5",
                transform: "matrix(-1 0 0 1 52 0)",
                stroke: `url(#paint0_${i})`,
              }),
              F.jsx("path", {
                d: "M37.5 27H19",
                stroke: `url(#paint1_${i})`,
                strokeWidth: "2",
              }),
              F.jsx("path", {
                d: "M27 19L19 27L27 35",
                stroke: `url(#paint2_${i})`,
                strokeWidth: "2",
              }),
            ],
          }),
          F.jsxs("g", {
            className: "state--hover",
            children: [
              F.jsx("rect", {
                x: "-0.5",
                y: "0.5",
                width: "52",
                height: "52",
                rx: "14.5",
                transform: "matrix(-1 0 0 1 52 0)",
                fill: `url(#paint0_linear_498_2_${i})`,
              }),
              F.jsx("path", {
                d: "M37.5 27H19",
                stroke: "#040921",
                strokeWidth: "2",
              }),
              F.jsx("path", {
                d: "M27 19L19 27L27 35",
                stroke: "#040921",
                strokeWidth: "2",
              }),
            ],
          }),
          F.jsx("defs", {
            children: F.jsxs("linearGradient", {
              id: `paint0_linear_498_2_${i}`,
              x1: "2.30967e-09",
              y1: "3.51724",
              x2: "71.8459",
              y2: "10.072",
              gradientUnits: "userSpaceOnUse",
              children: [
                F.jsx("stop", { stopColor: "#97CCFF" }),
                F.jsx("stop", { offset: "0.521678", stopColor: "#C0CDFF" }),
                F.jsx("stop", { offset: "1", stopColor: "#E69EF2" }),
              ],
            }),
          }),
          F.jsxs("defs", {
            children: [
              F.jsxs("linearGradient", {
                id: `paint0_${i}`,
                x1: "-7.57142",
                y1: "-107.828",
                x2: "127.839",
                y2: "-39.6679",
                gradientUnits: "userSpaceOnUse",
                children: [
                  F.jsx("stop", { stopColor: "#F7AAFD" }),
                  F.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                  F.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                  F.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                  F.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
                ],
              }),
              F.jsxs("linearGradient", {
                id: `paint1_${i}`,
                x1: "30.746",
                y1: "26.0506",
                x2: "30.4804",
                y2: "28.9955",
                gradientUnits: "userSpaceOnUse",
                children: [
                  F.jsx("stop", { stopColor: "#F7AAFD" }),
                  F.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                  F.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                  F.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                  F.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
                ],
              }),
              F.jsxs("linearGradient", {
                id: `paint2_${i}`,
                x1: "24.0794",
                y1: "3.8092",
                x2: "11.0195",
                y2: "7.72214",
                gradientUnits: "userSpaceOnUse",
                children: [
                  F.jsx("stop", { stopColor: "#F7AAFD" }),
                  F.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                  F.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                  F.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                  F.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
                ],
              }),
            ],
          }),
        ],
      }),
      a = F.jsxs("svg", {
        width: "100%",
        height: "100%",
        className: "w-8 h-8 sm:w-[53px] sm:h-[53px]",
        viewBox: "0 0 53 53",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          F.jsxs("g", {
            className: "state--normal",
            children: [
              F.jsx("rect", {
                x: "0.5",
                y: "0.5",
                width: "52",
                height: "52",
                rx: "14.5",
                stroke: `url(#paint0_${s})`,
              }),
              F.jsx("path", {
                d: "M15.5 27H34",
                stroke: `url(#paint1_${s}`,
                strokeWidth: "2",
              }),
              F.jsx("path", {
                d: "M26 19L34 27L26 35",
                stroke: `url(#paint2_${s})`,
                strokeWidth: "2",
              }),
            ],
          }),
          F.jsxs("g", {
            className: "state--hover",
            children: [
              F.jsx("rect", {
                x: "0.5",
                y: "0.5",
                width: "52",
                height: "52",
                rx: "14.5",
                fill: `url(#paint0_linear_4232_n_3_${s})`,
              }),
              F.jsx("path", {
                d: "M15.5 27H34",
                stroke: "#040921",
                strokeWidth: "2",
              }),
              F.jsx("path", {
                d: "M26 19L34 27L26 35",
                stroke: "#040921",
                strokeWidth: "2",
              }),
            ],
          }),
          F.jsx("defs", {
            children: F.jsxs("linearGradient", {
              id: `paint0_linear_4232_n_3_${s}`,
              x1: "2.30967e-09",
              y1: "3.51724",
              x2: "71.8459",
              y2: "10.072",
              gradientUnits: "userSpaceOnUse",
              children: [
                F.jsx("stop", { stopColor: "#97CCFF" }),
                F.jsx("stop", { offset: "0.521678", stopColor: "#C0CDFF" }),
                F.jsx("stop", { offset: "1", stopColor: "#E69EF2" }),
              ],
            }),
          }),
          F.jsxs("defs", {
            children: [
              F.jsxs("linearGradient", {
                id: `paint0_${s}`,
                x1: "-7.57142",
                y1: "-107.828",
                x2: "127.839",
                y2: "-39.6679",
                gradientUnits: "userSpaceOnUse",
                children: [
                  F.jsx("stop", { stopColor: "#F7AAFD" }),
                  F.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                  F.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                  F.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                  F.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
                ],
              }),
              F.jsxs("linearGradient", {
                id: `paint1_${s}`,
                x1: "22.254",
                y1: "26.0506",
                x2: "22.5196",
                y2: "28.9955",
                gradientUnits: "userSpaceOnUse",
                children: [
                  F.jsx("stop", { stopColor: "#F7AAFD" }),
                  F.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                  F.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                  F.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                  F.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
                ],
              }),
              F.jsxs("linearGradient", {
                id: `paint2_${s}`,
                x1: "28.9206",
                y1: "3.8092",
                x2: "41.9805",
                y2: "7.72214",
                gradientUnits: "userSpaceOnUse",
                children: [
                  F.jsx("stop", { stopColor: "#F7AAFD" }),
                  F.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                  F.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                  F.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                  F.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
                ],
              }),
            ],
          }),
        ],
      });
    return t === "next" ? a : r;
  },
  Ze = (t) => {
    if (!t) return;
    const {
      activeIndex: e,
      params: { slidesPerView: s },
      slides: i,
    } = t;
    i?.forEach((r) => {
      r?.classList.remove(
        ...Array.from(r.classList).filter((a) => a.startsWith("slide-id-"))
      );
    });
    for (let r = 0; r < i?.length; r++) {
      const a = i[r];
      if (a && r >= e && r < e + s) {
        const c = r - e;
        a.classList.add(`slide-id-${c}`),
          c === 0 && a.classList.add("slide-id--first"),
          c === s - 1 && a.classList.add("slide-id--last");
      }
    }
  },
  fs = ({
    params: t,
    cssClass: e,
    children: s,
    buttonPosition: i,
    hideButtons: r,
    onSliderInit: a,
    onSliderChange: c,
    randomIdx: d,
  }) => {
    const n = he.useRef(null),
      [f, l] = he.useState(null),
      o = !r,
      p = "inline-block",
      u = "inline-block",
      v = "static inline-block mt-5",
      w = "static inline-block mt-5",
      g = i === "bottom" ? v : p,
      b = i === "bottom" ? w : u,
      h = (T) => {
        const A = T === "prev" ? "slidePrev" : "slideNext";
        n.current.swiper[A]();
      },
      x = {
        ...{
          loop: !1,
          navigation: !1,
          allowTouchMove: !0,
          slideToClickedSlide: !0,
          pagination: { clickable: !0 },
          injectStyles: [
            `
          .swiper-pagination-bullet {
            background: #6D7FB1;
            width: 8px;
            height: 8px;
            margin: 0 9px !important;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            width: 12px;
            height: 12px;        
            background: linear-gradient(117deg, #97CCFF 0%, #C0CDFF 52%, #E69EF2 100%);
          }
          .swiper-horizontal {padding-bottom: 80px;}  
          .swiper-pagination {padding: 10px 0;}
          
          @media (max-width: 767px) {
          .swiper-horizontal {padding-bottom: 50px;}
          } 
      `,
          ],
        },
        ...t,
      };
    return (
      he.useEffect(() => {
        ns(),
          Object.assign(n.current, x),
          n.current.initialize(),
          a && a(n.current),
          Ze(n.current.swiper);
      }, []),
      he.useEffect(() => {
        n.current.addEventListener("progress", (T) => {
          const [A, P] = T.detail;
          l(JSON.stringify(P));
        }),
          n.current.addEventListener("slidechange", (T) => {
            Ze(n.current.swiper), c && c(T);
          });
      }, [])
    );
  };
export {
  fs as C,
  Y as S,
  Ti as a,
  Ci as b,
  Mi as c,
  ke as d,
  be as e,
  se as i,
  Ei as n,
  ye as p,
  cs as u,
  ps as w,
};
