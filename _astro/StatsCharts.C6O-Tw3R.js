import { j as _ } from "./jsx-runtime.dvAB8w6V.js";
import { r as Q, R as Ia } from "./index.B3PfHquH.js";
/* empty css                       */ /* empty css                       */ import { a as Pn } from "./axios.B4uVmeYG.js";
import { R as Ya } from "./index.8TwnY06w.js";
import { A as Ea } from "./index.DVrsjWxF.js";
import { m as gi } from "./motion.uZKkojSN.js";
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function cs(e) {
  return (e + 0.5) | 0;
}
const Gt = (e, t, s) => Math.max(Math.min(e, s), t);
function Ge(e) {
  return Gt(cs(e * 2.55), 0, 255);
}
function Jt(e) {
  return Gt(cs(e * 255), 0, 255);
}
function Wt(e) {
  return Gt(cs(e / 2.55) / 100, 0, 1);
}
function Tn(e) {
  return Gt(cs(e * 100), 0, 100);
}
const mt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Ti = [..."0123456789ABCDEF"],
  Na = (e) => Ti[e & 15],
  Wa = (e) => Ti[(e & 240) >> 4] + Ti[e & 15],
  ys = (e) => (e & 240) >> 4 === (e & 15),
  ja = (e) => ys(e.r) && ys(e.g) && ys(e.b) && ys(e.a);
function za(e) {
  var t = e.length,
    s;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (s = {
            r: 255 & (mt[e[1]] * 17),
            g: 255 & (mt[e[2]] * 17),
            b: 255 & (mt[e[3]] * 17),
            a: t === 5 ? mt[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (s = {
            r: (mt[e[1]] << 4) | mt[e[2]],
            g: (mt[e[3]] << 4) | mt[e[4]],
            b: (mt[e[5]] << 4) | mt[e[6]],
            a: t === 9 ? (mt[e[7]] << 4) | mt[e[8]] : 255,
          })),
    s
  );
}
const Ha = (e, t) => (e < 255 ? t(e) : "");
function Ba(e) {
  var t = ja(e) ? Na : Wa;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + Ha(e.a, t) : void 0;
}
const Va =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function sr(e, t, s) {
  const i = t * Math.min(s, 1 - s),
    n = (o, r = (o + e / 30) % 12) =>
      s - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function Ua(e, t, s) {
  const i = (n, o = (n + e / 60) % 6) =>
    s - s * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function $a(e, t, s) {
  const i = sr(e, 1, 0.5);
  let n;
  for (t + s > 1 && ((n = 1 / (t + s)), (t *= n), (s *= n)), n = 0; n < 3; n++)
    (i[n] *= 1 - t - s), (i[n] += t);
  return i;
}
function Ga(e, t, s, i, n) {
  return e === n
    ? (t - s) / i + (t < s ? 6 : 0)
    : t === n
    ? (s - e) / i + 2
    : (e - t) / i + 4;
}
function Bi(e) {
  const s = e.r / 255,
    i = e.g / 255,
    n = e.b / 255,
    o = Math.max(s, i, n),
    r = Math.min(s, i, n),
    a = (o + r) / 2;
  let l, h, c;
  return (
    o !== r &&
      ((c = o - r),
      (h = a > 0.5 ? c / (2 - o - r) : c / (o + r)),
      (l = Ga(s, i, n, c, o)),
      (l = l * 60 + 0.5)),
    [l | 0, h || 0, a]
  );
}
function Vi(e, t, s, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, s, i)).map(Jt);
}
function Ui(e, t, s) {
  return Vi(sr, e, t, s);
}
function Ka(e, t, s) {
  return Vi($a, e, t, s);
}
function Xa(e, t, s) {
  return Vi(Ua, e, t, s);
}
function ir(e) {
  return ((e % 360) + 360) % 360;
}
function Za(e) {
  const t = Va.exec(e);
  let s = 255,
    i;
  if (!t) return;
  t[5] !== i && (s = t[6] ? Ge(+t[5]) : Jt(+t[5]));
  const n = ir(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (i = Ka(n, o, r))
      : t[1] === "hsv"
      ? (i = Xa(n, o, r))
      : (i = Ui(n, o, r)),
    { r: i[0], g: i[1], b: i[2], a: s }
  );
}
function qa(e, t) {
  var s = Bi(e);
  (s[0] = ir(s[0] + t)), (s = Ui(s)), (e.r = s[0]), (e.g = s[1]), (e.b = s[2]);
}
function Qa(e) {
  if (!e) return;
  const t = Bi(e),
    s = t[0],
    i = Tn(t[1]),
    n = Tn(t[2]);
  return e.a < 255
    ? `hsla(${s}, ${i}%, ${n}%, ${Wt(e.a)})`
    : `hsl(${s}, ${i}%, ${n}%)`;
}
const Fn = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Ln = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Ja() {
  const e = {},
    t = Object.keys(Ln),
    s = Object.keys(Fn);
  let i, n, o, r, a;
  for (i = 0; i < t.length; i++) {
    for (r = a = t[i], n = 0; n < s.length; n++)
      (o = s[n]), (a = a.replace(o, Fn[o]));
    (o = parseInt(Ln[r], 16)),
      (e[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255]);
  }
  return e;
}
let xs;
function tl(e) {
  xs || ((xs = Ja()), (xs.transparent = [0, 0, 0, 0]));
  const t = xs[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const el =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function sl(e) {
  const t = el.exec(e);
  let s = 255,
    i,
    n,
    o;
  if (t) {
    if (t[7] !== i) {
      const r = +t[7];
      s = t[8] ? Ge(r) : Gt(r * 255, 0, 255);
    }
    return (
      (i = +t[1]),
      (n = +t[3]),
      (o = +t[5]),
      (i = 255 & (t[2] ? Ge(i) : Gt(i, 0, 255))),
      (n = 255 & (t[4] ? Ge(n) : Gt(n, 0, 255))),
      (o = 255 & (t[6] ? Ge(o) : Gt(o, 0, 255))),
      { r: i, g: n, b: o, a: s }
    );
  }
}
function il(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Wt(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const mi = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  ke = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function nl(e, t, s) {
  const i = ke(Wt(e.r)),
    n = ke(Wt(e.g)),
    o = ke(Wt(e.b));
  return {
    r: Jt(mi(i + s * (ke(Wt(t.r)) - i))),
    g: Jt(mi(n + s * (ke(Wt(t.g)) - n))),
    b: Jt(mi(o + s * (ke(Wt(t.b)) - o))),
    a: e.a + s * (t.a - e.a),
  };
}
function ws(e, t, s) {
  if (e) {
    let i = Bi(e);
    (i[t] = Math.max(0, Math.min(i[t] + i[t] * s, t === 0 ? 360 : 1))),
      (i = Ui(i)),
      (e.r = i[0]),
      (e.g = i[1]),
      (e.b = i[2]);
  }
}
function nr(e, t) {
  return e && Object.assign(t || {}, e);
}
function An(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = Jt(e[3])))
      : ((t = nr(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Jt(t.a))),
    t
  );
}
function ol(e) {
  return e.charAt(0) === "r" ? sl(e) : Za(e);
}
class ts {
  constructor(t) {
    if (t instanceof ts) return t;
    const s = typeof t;
    let i;
    s === "object"
      ? (i = An(t))
      : s === "string" && (i = za(t) || tl(t) || ol(t)),
      (this._rgb = i),
      (this._valid = !!i);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = nr(this._rgb);
    return t && (t.a = Wt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = An(t);
  }
  rgbString() {
    return this._valid ? il(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Ba(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Qa(this._rgb) : void 0;
  }
  mix(t, s) {
    if (t) {
      const i = this.rgb,
        n = t.rgb;
      let o;
      const r = s === o ? 0.5 : s,
        a = 2 * r - 1,
        l = i.a - n.a,
        h = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (o = 1 - h),
        (i.r = 255 & (h * i.r + o * n.r + 0.5)),
        (i.g = 255 & (h * i.g + o * n.g + 0.5)),
        (i.b = 255 & (h * i.b + o * n.b + 0.5)),
        (i.a = r * i.a + (1 - r) * n.a),
        (this.rgb = i);
    }
    return this;
  }
  interpolate(t, s) {
    return t && (this._rgb = nl(this._rgb, t._rgb, s)), this;
  }
  clone() {
    return new ts(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Jt(t)), this;
  }
  clearer(t) {
    const s = this._rgb;
    return (s.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      s = cs(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = s), this;
  }
  opaquer(t) {
    const s = this._rgb;
    return (s.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return ws(this._rgb, 2, t), this;
  }
  darken(t) {
    return ws(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ws(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ws(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return qa(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function Rt() {}
const rl = (() => {
  let e = 0;
  return () => e++;
})();
function H(e) {
  return e === null || typeof e > "u";
}
function K(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function I(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function et(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function dt(e, t) {
  return et(e) ? e : t;
}
function W(e, t) {
  return typeof e > "u" ? t : e;
}
const al = (e, t) =>
  typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function V(e, t, s) {
  if (e && typeof e.call == "function") return e.apply(s, t);
}
function j(e, t, s, i) {
  let n, o, r;
  if (K(e)) for (o = e.length, n = 0; n < o; n++) t.call(s, e[n], n);
  else if (I(e))
    for (r = Object.keys(e), o = r.length, n = 0; n < o; n++)
      t.call(s, e[r[n]], r[n]);
}
function zs(e, t) {
  let s, i, n, o;
  if (!e || !t || e.length !== t.length) return !1;
  for (s = 0, i = e.length; s < i; ++s)
    if (
      ((n = e[s]),
      (o = t[s]),
      n.datasetIndex !== o.datasetIndex || n.index !== o.index)
    )
      return !1;
  return !0;
}
function Hs(e) {
  if (K(e)) return e.map(Hs);
  if (I(e)) {
    const t = Object.create(null),
      s = Object.keys(e),
      i = s.length;
    let n = 0;
    for (; n < i; ++n) t[s[n]] = Hs(e[s[n]]);
    return t;
  }
  return e;
}
function or(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function ll(e, t, s, i) {
  if (!or(e)) return;
  const n = t[e],
    o = s[e];
  I(n) && I(o) ? es(n, o, i) : (t[e] = Hs(o));
}
function es(e, t, s) {
  const i = K(t) ? t : [t],
    n = i.length;
  if (!I(e)) return e;
  s = s || {};
  const o = s.merger || ll;
  let r;
  for (let a = 0; a < n; ++a) {
    if (((r = i[a]), !I(r))) continue;
    const l = Object.keys(r);
    for (let h = 0, c = l.length; h < c; ++h) o(l[h], e, r, s);
  }
  return e;
}
function Ze(e, t) {
  return es(e, t, { merger: hl });
}
function hl(e, t, s) {
  if (!or(e)) return;
  const i = t[e],
    n = s[e];
  I(i) && I(n)
    ? Ze(i, n)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Hs(n));
}
const Rn = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function cl(e) {
  const t = e.split("."),
    s = [];
  let i = "";
  for (const n of t)
    (i += n),
      i.endsWith("\\") ? (i = i.slice(0, -1) + ".") : (s.push(i), (i = ""));
  return s;
}
function dl(e) {
  const t = cl(e);
  return (s) => {
    for (const i of t) {
      if (i === "") break;
      s = s && s[i];
    }
    return s;
  };
}
function Le(e, t) {
  return (Rn[t] || (Rn[t] = dl(t)))(e);
}
function $i(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ss = (e) => typeof e < "u",
  se = (e) => typeof e == "function",
  In = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const s of e) if (!t.has(s)) return !1;
    return !0;
  };
function ul(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const st = Math.PI,
  Tt = 2 * st,
  Bs = Number.POSITIVE_INFINITY,
  fl = st / 180,
  ut = st / 2,
  oe = st / 4,
  Yn = (st * 2) / 3,
  Kt = Math.log10,
  te = Math.sign;
function Is(e, t, s) {
  return Math.abs(e - t) < s;
}
function En(e) {
  const t = Math.round(e);
  e = Is(e, t, e / 1e3) ? t : e;
  const s = Math.pow(10, Math.floor(Kt(e))),
    i = e / s;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * s;
}
function gl(e) {
  const t = [],
    s = Math.sqrt(e);
  let i;
  for (i = 1; i < s; i++) e % i === 0 && (t.push(i), t.push(e / i));
  return s === (s | 0) && t.push(s), t.sort((n, o) => n - o).pop(), t;
}
function Vs(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function ml(e, t) {
  const s = Math.round(e);
  return s - t <= e && s + t >= e;
}
function rr(e, t, s) {
  let i, n, o;
  for (i = 0, n = e.length; i < n; i++)
    (o = e[i][s]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)));
}
function Xt(e) {
  return e * (st / 180);
}
function Gi(e) {
  return e * (180 / st);
}
function Nn(e) {
  if (!et(e)) return;
  let t = 1,
    s = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), s++;
  return s;
}
function pl(e, t) {
  const s = t.x - e.x,
    i = t.y - e.y,
    n = Math.sqrt(s * s + i * i);
  let o = Math.atan2(i, s);
  return o < -0.5 * st && (o += Tt), { angle: o, distance: n };
}
function _l(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Ct(e) {
  return ((e % Tt) + Tt) % Tt;
}
function bl(e, t, s, i) {
  const n = Ct(e),
    o = Ct(t),
    r = Ct(s),
    a = Ct(o - n),
    l = Ct(r - n),
    h = Ct(n - o),
    c = Ct(n - r);
  return n === o || n === r || (i && o === r) || (a > l && h < c);
}
function xt(e, t, s) {
  return Math.max(t, Math.min(s, e));
}
function yl(e) {
  return xt(e, -32768, 32767);
}
function Se(e, t, s, i = 1e-6) {
  return e >= Math.min(t, s) - i && e <= Math.max(t, s) + i;
}
function Ki(e, t, s) {
  s = s || ((r) => e[r] < t);
  let i = e.length - 1,
    n = 0,
    o;
  for (; i - n > 1; ) (o = (n + i) >> 1), s(o) ? (n = o) : (i = o);
  return { lo: n, hi: i };
}
const Fi = (e, t, s, i) =>
    Ki(
      e,
      s,
      i
        ? (n) => {
            const o = e[n][t];
            return o < s || (o === s && e[n + 1][t] === s);
          }
        : (n) => e[n][t] < s
    ),
  xl = (e, t, s) => Ki(e, s, (i) => e[i][t] >= s);
function wl(e, t, s) {
  let i = 0,
    n = e.length;
  for (; i < n && e[i] < t; ) i++;
  for (; n > i && e[n - 1] > s; ) n--;
  return i > 0 || n < e.length ? e.slice(i, n) : e;
}
const ar = ["push", "pop", "shift", "splice", "unshift"];
function kl(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    ar.forEach((s) => {
      const i = "_onData" + $i(s),
        n = e[s];
      Object.defineProperty(e, s, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = n.apply(this, o);
          return (
            e._chartjs.listeners.forEach((a) => {
              typeof a[i] == "function" && a[i](...o);
            }),
            r
          );
        },
      });
    });
}
function Wn(e, t) {
  const s = e._chartjs;
  if (!s) return;
  const i = s.listeners,
    n = i.indexOf(t);
  n !== -1 && i.splice(n, 1),
    !(i.length > 0) &&
      (ar.forEach((o) => {
        delete e[o];
      }),
      delete e._chartjs);
}
function lr(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const hr = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function cr(e, t) {
  let s = [],
    i = !1;
  return function (...n) {
    (s = n),
      i ||
        ((i = !0),
        hr.call(window, () => {
          (i = !1), e.apply(t, s);
        }));
  };
}
function vl(e, t) {
  let s;
  return function (...i) {
    return (
      t ? (clearTimeout(s), (s = setTimeout(e, t, i))) : e.apply(this, i), t
    );
  };
}
const Xi = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  nt = (e, t, s) => (e === "start" ? t : e === "end" ? s : (t + s) / 2),
  Ml = (e, t, s, i) =>
    e === (i ? "left" : "right") ? s : e === "center" ? (t + s) / 2 : t,
  ks = (e) => e === 0 || e === 1,
  jn = (e, t, s) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * Tt) / s)),
  zn = (e, t, s) => Math.pow(2, -10 * e) * Math.sin(((e - t) * Tt) / s) + 1,
  qe = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * ut) + 1,
    easeOutSine: (e) => Math.sin(e * ut),
    easeInOutSine: (e) => -0.5 * (Math.cos(st * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      ks(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (ks(e) ? e : jn(e, 0.075, 0.3)),
    easeOutElastic: (e) => (ks(e) ? e : zn(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return ks(e)
        ? e
        : e < 0.5
        ? 0.5 * jn(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * zn(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - qe.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? qe.easeInBounce(e * 2) * 0.5
        : qe.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function dr(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Hn(e) {
  return dr(e) ? e : new ts(e);
}
function pi(e) {
  return dr(e) ? e : new ts(e).saturate(0.5).darken(0.1).hexString();
}
const Sl = ["x", "y", "borderWidth", "radius", "tension"],
  Dl = ["color", "borderColor", "backgroundColor"];
function Ol(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: Dl },
      numbers: { type: "number", properties: Sl },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function Cl(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Bn = new Map();
function Pl(e, t) {
  t = t || {};
  const s = e + JSON.stringify(t);
  let i = Bn.get(s);
  return i || ((i = new Intl.NumberFormat(e, t)), Bn.set(s, i)), i;
}
function Zi(e, t, s) {
  return Pl(t, s).format(e);
}
const ur = {
  values(e) {
    return K(e) ? e : "" + e;
  },
  numeric(e, t, s) {
    if (e === 0) return "0";
    const i = this.chart.options.locale;
    let n,
      o = e;
    if (s.length > 1) {
      const h = Math.max(Math.abs(s[0].value), Math.abs(s[s.length - 1].value));
      (h < 1e-4 || h > 1e15) && (n = "scientific"), (o = Tl(e, s));
    }
    const r = Kt(Math.abs(o)),
      a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      l = { notation: n, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), Zi(e, i, l);
  },
  logarithmic(e, t, s) {
    if (e === 0) return "0";
    const i = s[t].significand || e / Math.pow(10, Math.floor(Kt(e)));
    return [1, 2, 3, 5, 10, 15].includes(i) || t > 0.8 * s.length
      ? ur.numeric.call(this, e, t, s)
      : "";
  },
};
function Tl(e, t) {
  let s = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(s) >= 1 && e !== Math.floor(e) && (s = e - Math.floor(e)), s;
}
var ti = { formatters: ur };
function Fl(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, s) => s.lineWidth,
      tickColor: (t, s) => s.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: ti.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const me = Object.create(null),
  Li = Object.create(null);
function Qe(e, t) {
  if (!t) return e;
  const s = t.split(".");
  for (let i = 0, n = s.length; i < n; ++i) {
    const o = s[i];
    e = e[o] || (e[o] = Object.create(null));
  }
  return e;
}
function _i(e, t, s) {
  return typeof t == "string" ? es(Qe(e, t), s) : es(Qe(e, ""), t);
}
class Ll {
  constructor(t, s) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (i, n) => pi(n.backgroundColor)),
      (this.hoverBorderColor = (i, n) => pi(n.borderColor)),
      (this.hoverColor = (i, n) => pi(n.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(s);
  }
  set(t, s) {
    return _i(this, t, s);
  }
  get(t) {
    return Qe(this, t);
  }
  describe(t, s) {
    return _i(Li, t, s);
  }
  override(t, s) {
    return _i(me, t, s);
  }
  route(t, s, i, n) {
    const o = Qe(this, t),
      r = Qe(this, i),
      a = "_" + s;
    Object.defineProperties(o, {
      [a]: { value: o[s], writable: !0 },
      [s]: {
        enumerable: !0,
        get() {
          const l = this[a],
            h = r[n];
          return I(l) ? Object.assign({}, h, l) : W(l, h);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
  apply(t) {
    t.forEach((s) => s(this));
  }
}
var X = new Ll(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [Ol, Cl, Fl]
);
function Al(e) {
  return !e || H(e.size) || H(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function Us(e, t, s, i, n) {
  let o = t[n];
  return (
    o || ((o = t[n] = e.measureText(n).width), s.push(n)), o > i && (i = o), i
  );
}
function Rl(e, t, s, i) {
  i = i || {};
  let n = (i.data = i.data || {}),
    o = (i.garbageCollect = i.garbageCollect || []);
  i.font !== t &&
    ((n = i.data = {}), (o = i.garbageCollect = []), (i.font = t)),
    e.save(),
    (e.font = t);
  let r = 0;
  const a = s.length;
  let l, h, c, d, u;
  for (l = 0; l < a; l++)
    if (((d = s[l]), d != null && !K(d))) r = Us(e, n, o, r, d);
    else if (K(d))
      for (h = 0, c = d.length; h < c; h++)
        (u = d[h]), u != null && !K(u) && (r = Us(e, n, o, r, u));
  e.restore();
  const f = o.length / 2;
  if (f > s.length) {
    for (l = 0; l < f; l++) delete n[o[l]];
    o.splice(0, f);
  }
  return r;
}
function re(e, t, s) {
  const i = e.currentDevicePixelRatio,
    n = s !== 0 ? Math.max(s / 2, 0.5) : 0;
  return Math.round((t - n) * i) / i + n;
}
function Vn(e, t) {
  (!t && !e) ||
    ((t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore());
}
function Un(e, t, s, i) {
  fr(e, t, s, i, null);
}
function fr(e, t, s, i, n) {
  let o, r, a, l, h, c, d, u;
  const f = t.pointStyle,
    g = t.rotation,
    m = t.radius;
  let p = (g || 0) * fl;
  if (
    f &&
    typeof f == "object" &&
    ((o = f.toString()),
    o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(s, i),
      e.rotate(p),
      e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
      e.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch ((e.beginPath(), f)) {
      default:
        n ? e.ellipse(s, i, n / 2, m, 0, 0, Tt) : e.arc(s, i, m, 0, Tt),
          e.closePath();
        break;
      case "triangle":
        (c = n ? n / 2 : m),
          e.moveTo(s + Math.sin(p) * c, i - Math.cos(p) * m),
          (p += Yn),
          e.lineTo(s + Math.sin(p) * c, i - Math.cos(p) * m),
          (p += Yn),
          e.lineTo(s + Math.sin(p) * c, i - Math.cos(p) * m),
          e.closePath();
        break;
      case "rectRounded":
        (h = m * 0.516),
          (l = m - h),
          (r = Math.cos(p + oe) * l),
          (d = Math.cos(p + oe) * (n ? n / 2 - h : l)),
          (a = Math.sin(p + oe) * l),
          (u = Math.sin(p + oe) * (n ? n / 2 - h : l)),
          e.arc(s - d, i - a, h, p - st, p - ut),
          e.arc(s + u, i - r, h, p - ut, p),
          e.arc(s + d, i + a, h, p, p + ut),
          e.arc(s - u, i + r, h, p + ut, p + st),
          e.closePath();
        break;
      case "rect":
        if (!g) {
          (l = Math.SQRT1_2 * m),
            (c = n ? n / 2 : l),
            e.rect(s - c, i - l, 2 * c, 2 * l);
          break;
        }
        p += oe;
      case "rectRot":
        (d = Math.cos(p) * (n ? n / 2 : m)),
          (r = Math.cos(p) * m),
          (a = Math.sin(p) * m),
          (u = Math.sin(p) * (n ? n / 2 : m)),
          e.moveTo(s - d, i - a),
          e.lineTo(s + u, i - r),
          e.lineTo(s + d, i + a),
          e.lineTo(s - u, i + r),
          e.closePath();
        break;
      case "crossRot":
        p += oe;
      case "cross":
        (d = Math.cos(p) * (n ? n / 2 : m)),
          (r = Math.cos(p) * m),
          (a = Math.sin(p) * m),
          (u = Math.sin(p) * (n ? n / 2 : m)),
          e.moveTo(s - d, i - a),
          e.lineTo(s + d, i + a),
          e.moveTo(s + u, i - r),
          e.lineTo(s - u, i + r);
        break;
      case "star":
        (d = Math.cos(p) * (n ? n / 2 : m)),
          (r = Math.cos(p) * m),
          (a = Math.sin(p) * m),
          (u = Math.sin(p) * (n ? n / 2 : m)),
          e.moveTo(s - d, i - a),
          e.lineTo(s + d, i + a),
          e.moveTo(s + u, i - r),
          e.lineTo(s - u, i + r),
          (p += oe),
          (d = Math.cos(p) * (n ? n / 2 : m)),
          (r = Math.cos(p) * m),
          (a = Math.sin(p) * m),
          (u = Math.sin(p) * (n ? n / 2 : m)),
          e.moveTo(s - d, i - a),
          e.lineTo(s + d, i + a),
          e.moveTo(s + u, i - r),
          e.lineTo(s - u, i + r);
        break;
      case "line":
        (r = n ? n / 2 : Math.cos(p) * m),
          (a = Math.sin(p) * m),
          e.moveTo(s - r, i - a),
          e.lineTo(s + r, i + a);
        break;
      case "dash":
        e.moveTo(s, i),
          e.lineTo(s + Math.cos(p) * (n ? n / 2 : m), i + Math.sin(p) * m);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function De(e, t, s) {
  return (
    (s = s || 0.5),
    !t ||
      (e &&
        e.x > t.left - s &&
        e.x < t.right + s &&
        e.y > t.top - s &&
        e.y < t.bottom + s)
  );
}
function qi(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function Qi(e) {
  e.restore();
}
function Il(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    H(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function Yl(e, t, s, i, n) {
  if (n.strikethrough || n.underline) {
    const o = e.measureText(i),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = s - o.actualBoundingBoxAscent,
      h = s + o.actualBoundingBoxDescent,
      c = n.strikethrough ? (l + h) / 2 : h;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = n.decorationWidth || 2),
      e.moveTo(r, c),
      e.lineTo(a, c),
      e.stroke();
  }
}
function El(e, t) {
  const s = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = s);
}
function pe(e, t, s, i, n, o = {}) {
  const r = K(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, h;
  for (e.save(), e.font = n.string, Il(e, o), l = 0; l < r.length; ++l)
    (h = r[l]),
      o.backdrop && El(e, o.backdrop),
      a &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        H(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(h, s, i, o.maxWidth)),
      e.fillText(h, s, i, o.maxWidth),
      Yl(e, s, i, h, o),
      (i += Number(n.lineHeight));
  e.restore();
}
function is(e, t) {
  const { x: s, y: i, w: n, h: o, radius: r } = t;
  e.arc(s + r.topLeft, i + r.topLeft, r.topLeft, 1.5 * st, st, !0),
    e.lineTo(s, i + o - r.bottomLeft),
    e.arc(s + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, st, ut, !0),
    e.lineTo(s + n - r.bottomRight, i + o),
    e.arc(
      s + n - r.bottomRight,
      i + o - r.bottomRight,
      r.bottomRight,
      ut,
      0,
      !0
    ),
    e.lineTo(s + n, i + r.topRight),
    e.arc(s + n - r.topRight, i + r.topRight, r.topRight, 0, -ut, !0),
    e.lineTo(s + r.topLeft, i);
}
const Nl = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  Wl = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function jl(e, t) {
  const s = ("" + e).match(Nl);
  if (!s || s[1] === "normal") return t * 1.2;
  switch (((e = +s[2]), s[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const zl = (e) => +e || 0;
function gr(e, t) {
  const s = {},
    i = I(t),
    n = i ? Object.keys(t) : t,
    o = I(e) ? (i ? (r) => W(e[r], e[t[r]]) : (r) => e[r]) : () => e;
  for (const r of n) s[r] = zl(o(r));
  return s;
}
function mr(e) {
  return gr(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function ue(e) {
  return gr(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function rt(e) {
  const t = mr(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function J(e, t) {
  (e = e || {}), (t = t || X.font);
  let s = W(e.size, t.size);
  typeof s == "string" && (s = parseInt(s, 10));
  let i = W(e.style, t.style);
  i &&
    !("" + i).match(Wl) &&
    (console.warn('Invalid font style specified: "' + i + '"'), (i = void 0));
  const n = {
    family: W(e.family, t.family),
    lineHeight: jl(W(e.lineHeight, t.lineHeight), s),
    size: s,
    style: i,
    weight: W(e.weight, t.weight),
    string: "",
  };
  return (n.string = Al(n)), n;
}
function vs(e, t, s, i) {
  let n, o, r;
  for (n = 0, o = e.length; n < o; ++n)
    if (((r = e[n]), r !== void 0 && r !== void 0)) return r;
}
function Hl(e, t, s) {
  const { min: i, max: n } = e,
    o = al(t, (n - i) / 2),
    r = (a, l) => (s && a === 0 ? 0 : a + l);
  return { min: r(i, -Math.abs(o)), max: r(n, o) };
}
function _e(e, t) {
  return Object.assign(Object.create(e), t);
}
function Ji(e, t = [""], s, i, n = () => e[0]) {
  const o = s || e;
  typeof i > "u" && (i = yr("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: i,
    _getTarget: n,
    override: (a) => Ji([a, ...e], t, o, i),
  };
  return new Proxy(r, {
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete e[0][l], !0;
    },
    get(a, l) {
      return _r(a, l, () => Zl(l, t, e, a));
    },
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(a, l) {
      return Gn(a).includes(l);
    },
    ownKeys(a) {
      return Gn(a);
    },
    set(a, l, h) {
      const c = a._storage || (a._storage = n());
      return (a[l] = c[l] = h), delete a._keys, !0;
    },
  });
}
function Ae(e, t, s, i) {
  const n = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: s,
    _stack: new Set(),
    _descriptors: pr(e, i),
    setContext: (o) => Ae(e, o, s, i),
    override: (o) => Ae(e.override(o), t, s, i),
  };
  return new Proxy(n, {
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    get(o, r, a) {
      return _r(o, r, () => Vl(o, r, a));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(e, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(o, r) {
      return Reflect.has(e, r);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(o, r, a) {
      return (e[r] = a), delete o[r], !0;
    },
  });
}
function pr(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: s = t.scriptable,
    _indexable: i = t.indexable,
    _allKeys: n = t.allKeys,
  } = e;
  return {
    allKeys: n,
    scriptable: s,
    indexable: i,
    isScriptable: se(s) ? s : () => s,
    isIndexable: se(i) ? i : () => i,
  };
}
const Bl = (e, t) => (e ? e + $i(t) : t),
  tn = (e, t) =>
    I(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function _r(e, t, s) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const i = s();
  return (e[t] = i), i;
}
function Vl(e, t, s) {
  const { _proxy: i, _context: n, _subProxy: o, _descriptors: r } = e;
  let a = i[t];
  return (
    se(a) && r.isScriptable(t) && (a = Ul(t, a, e, s)),
    K(a) && a.length && (a = $l(t, a, e, r.isIndexable)),
    tn(t, a) && (a = Ae(a, n, o && o[t], r)),
    a
  );
}
function Ul(e, t, s, i) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = s;
  if (a.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + e
    );
  a.add(e);
  let l = t(o, r || i);
  return a.delete(e), tn(e, l) && (l = en(n._scopes, n, e, l)), l;
}
function $l(e, t, s, i) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = s;
  if (typeof o.index < "u" && i(e)) return t[o.index % t.length];
  if (I(t[0])) {
    const l = t,
      h = n._scopes.filter((c) => c !== l);
    t = [];
    for (const c of l) {
      const d = en(h, n, e, c);
      t.push(Ae(d, o, r && r[e], a));
    }
  }
  return t;
}
function br(e, t, s) {
  return se(e) ? e(t, s) : e;
}
const Gl = (e, t) => (e === !0 ? t : typeof e == "string" ? Le(t, e) : void 0);
function Kl(e, t, s, i, n) {
  for (const o of t) {
    const r = Gl(s, o);
    if (r) {
      e.add(r);
      const a = br(r._fallback, s, n);
      if (typeof a < "u" && a !== s && a !== i) return a;
    } else if (r === !1 && typeof i < "u" && s !== i) return null;
  }
  return !1;
}
function en(e, t, s, i) {
  const n = t._rootScopes,
    o = br(t._fallback, s, i),
    r = [...e, ...n],
    a = new Set();
  a.add(i);
  let l = $n(a, r, s, o || s, i);
  return l === null ||
    (typeof o < "u" && o !== s && ((l = $n(a, r, o, l, i)), l === null))
    ? !1
    : Ji(Array.from(a), [""], n, o, () => Xl(t, s, i));
}
function $n(e, t, s, i, n) {
  for (; s; ) s = Kl(e, t, s, i, n);
  return s;
}
function Xl(e, t, s) {
  const i = e._getTarget();
  t in i || (i[t] = {});
  const n = i[t];
  return K(n) && I(s) ? s : n || {};
}
function Zl(e, t, s, i) {
  let n;
  for (const o of t)
    if (((n = yr(Bl(o, e), s)), typeof n < "u"))
      return tn(e, n) ? en(s, i, e, n) : n;
}
function yr(e, t) {
  for (const s of t) {
    if (!s) continue;
    const i = s[e];
    if (typeof i < "u") return i;
  }
}
function Gn(e) {
  let t = e._keys;
  return t || (t = e._keys = ql(e._scopes)), t;
}
function ql(e) {
  const t = new Set();
  for (const s of e)
    for (const i of Object.keys(s).filter((n) => !n.startsWith("_"))) t.add(i);
  return Array.from(t);
}
function sn() {
  return typeof window < "u" && typeof document < "u";
}
function nn(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function $s(e, t, s) {
  let i;
  return (
    typeof e == "string"
      ? ((i = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (i = (i / 100) * t.parentNode[s]))
      : (i = e),
    i
  );
}
const ei = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Ql(e, t) {
  return ei(e).getPropertyValue(t);
}
const Jl = ["top", "right", "bottom", "left"];
function fe(e, t, s) {
  const i = {};
  s = s ? "-" + s : "";
  for (let n = 0; n < 4; n++) {
    const o = Jl[n];
    i[o] = parseFloat(e[t + "-" + o + s]) || 0;
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i;
}
const th = (e, t, s) => (e > 0 || t > 0) && (!s || !s.shadowRoot);
function eh(e, t) {
  const s = e.touches,
    i = s && s.length ? s[0] : e,
    { offsetX: n, offsetY: o } = i;
  let r = !1,
    a,
    l;
  if (th(n, o, e.target)) (a = n), (l = o);
  else {
    const h = t.getBoundingClientRect();
    (a = i.clientX - h.left), (l = i.clientY - h.top), (r = !0);
  }
  return { x: a, y: l, box: r };
}
function ce(e, t) {
  if ("native" in e) return e;
  const { canvas: s, currentDevicePixelRatio: i } = t,
    n = ei(s),
    o = n.boxSizing === "border-box",
    r = fe(n, "padding"),
    a = fe(n, "border", "width"),
    { x: l, y: h, box: c } = eh(e, s),
    d = r.left + (c && a.left),
    u = r.top + (c && a.top);
  let { width: f, height: g } = t;
  return (
    o && ((f -= r.width + a.width), (g -= r.height + a.height)),
    {
      x: Math.round((((l - d) / f) * s.width) / i),
      y: Math.round((((h - u) / g) * s.height) / i),
    }
  );
}
function sh(e, t, s) {
  let i, n;
  if (t === void 0 || s === void 0) {
    const o = e && nn(e);
    if (!o) (t = e.clientWidth), (s = e.clientHeight);
    else {
      const r = o.getBoundingClientRect(),
        a = ei(o),
        l = fe(a, "border", "width"),
        h = fe(a, "padding");
      (t = r.width - h.width - l.width),
        (s = r.height - h.height - l.height),
        (i = $s(a.maxWidth, o, "clientWidth")),
        (n = $s(a.maxHeight, o, "clientHeight"));
    }
  }
  return { width: t, height: s, maxWidth: i || Bs, maxHeight: n || Bs };
}
const Ms = (e) => Math.round(e * 10) / 10;
function ih(e, t, s, i) {
  const n = ei(e),
    o = fe(n, "margin"),
    r = $s(n.maxWidth, e, "clientWidth") || Bs,
    a = $s(n.maxHeight, e, "clientHeight") || Bs,
    l = sh(e, t, s);
  let { width: h, height: c } = l;
  if (n.boxSizing === "content-box") {
    const u = fe(n, "border", "width"),
      f = fe(n, "padding");
    (h -= f.width + u.width), (c -= f.height + u.height);
  }
  return (
    (h = Math.max(0, h - o.width)),
    (c = Math.max(0, i ? h / i : c - o.height)),
    (h = Ms(Math.min(h, r, l.maxWidth))),
    (c = Ms(Math.min(c, a, l.maxHeight))),
    h && !c && (c = Ms(h / 2)),
    (t !== void 0 || s !== void 0) &&
      i &&
      l.height &&
      c > l.height &&
      ((c = l.height), (h = Ms(Math.floor(c * i)))),
    { width: h, height: c }
  );
}
function Kn(e, t, s) {
  const i = t || 1,
    n = Math.floor(e.height * i),
    o = Math.floor(e.width * i);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const r = e.canvas;
  return (
    r.style &&
      (s || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${e.height}px`), (r.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== i || r.height !== n || r.width !== o
      ? ((e.currentDevicePixelRatio = i),
        (r.height = n),
        (r.width = o),
        e.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  );
}
const nh = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    sn() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return e;
})();
function Xn(e, t) {
  const s = Ql(e, t),
    i = s && s.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
const oh = function (e, t) {
    return {
      x(s) {
        return e + e + t - s;
      },
      setWidth(s) {
        t = s;
      },
      textAlign(s) {
        return s === "center" ? s : s === "right" ? "left" : "right";
      },
      xPlus(s, i) {
        return s - i;
      },
      leftForLtr(s, i) {
        return s - i;
      },
    };
  },
  rh = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function Ce(e, t, s) {
  return e ? oh(t, s) : rh();
}
function xr(e, t) {
  let s, i;
  (t === "ltr" || t === "rtl") &&
    ((s = e.canvas.style),
    (i = [s.getPropertyValue("direction"), s.getPropertyPriority("direction")]),
    s.setProperty("direction", t, "important"),
    (e.prevTextDirection = i));
}
function wr(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
/*!
 * Chart.js v4.4.3
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class ah {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, s, i, n) {
    const o = s.listeners[n],
      r = s.duration;
    o.forEach((a) =>
      a({
        chart: t,
        initial: s.initial,
        numSteps: r,
        currentStep: Math.min(i - s.start, r),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = hr.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let s = 0;
    this._charts.forEach((i, n) => {
      if (!i.running || !i.items.length) return;
      const o = i.items;
      let r = o.length - 1,
        a = !1,
        l;
      for (; r >= 0; --r)
        (l = o[r]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((o[r] = o[o.length - 1]), o.pop());
      a && (n.draw(), this._notify(n, i, t, "progress")),
        o.length ||
          ((i.running = !1),
          this._notify(n, i, t, "complete"),
          (i.initial = !1)),
        (s += o.length);
    }),
      (this._lastDate = t),
      s === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const s = this._charts;
    let i = s.get(t);
    return (
      i ||
        ((i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        s.set(t, i)),
      i
    );
  }
  listen(t, s, i) {
    this._getAnims(t).listeners[s].push(i);
  }
  add(t, s) {
    !s || !s.length || this._getAnims(t).items.push(...s);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const s = this._charts.get(t);
    s &&
      ((s.running = !0),
      (s.start = Date.now()),
      (s.duration = s.items.reduce((i, n) => Math.max(i, n._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const s = this._charts.get(t);
    return !(!s || !s.running || !s.items.length);
  }
  stop(t) {
    const s = this._charts.get(t);
    if (!s || !s.items.length) return;
    const i = s.items;
    let n = i.length - 1;
    for (; n >= 0; --n) i[n].cancel();
    (s.items = []), this._notify(t, s, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Yt = new ah();
const Zn = "transparent",
  lh = {
    boolean(e, t, s) {
      return s > 0.5 ? t : e;
    },
    color(e, t, s) {
      const i = Hn(e || Zn),
        n = i.valid && Hn(t || Zn);
      return n && n.valid ? n.mix(i, s).hexString() : t;
    },
    number(e, t, s) {
      return e + (t - e) * s;
    },
  };
class hh {
  constructor(t, s, i, n) {
    const o = s[i];
    n = vs([t.to, n, o, t.from]);
    const r = vs([t.from, o, n]);
    (this._active = !0),
      (this._fn = t.fn || lh[t.type || typeof r]),
      (this._easing = qe[t.easing] || qe.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = s),
      (this._prop = i),
      (this._from = r),
      (this._to = n),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, s, i) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop],
        o = i - this._start,
        r = this._duration - o;
      (this._start = i),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = vs([t.to, s, n, t.from])),
        (this._from = vs([t.from, n, s]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const s = t - this._start,
      i = this._duration,
      n = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to;
    let l;
    if (((this._active = o !== a && (r || s < i)), !this._active)) {
      (this._target[n] = a), this._notify(!0);
      return;
    }
    if (s < 0) {
      this._target[n] = o;
      return;
    }
    (l = (s / i) % 2),
      (l = r && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[n] = this._fn(o, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((s, i) => {
      t.push({ res: s, rej: i });
    });
  }
  _notify(t) {
    const s = t ? "res" : "rej",
      i = this._promises || [];
    for (let n = 0; n < i.length; n++) i[n][s]();
  }
}
class kr {
  constructor(t, s) {
    (this._chart = t), (this._properties = new Map()), this.configure(s);
  }
  configure(t) {
    if (!I(t)) return;
    const s = Object.keys(X.animation),
      i = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!I(o)) return;
      const r = {};
      for (const a of s) r[a] = o[a];
      ((K(o.properties) && o.properties) || [n]).forEach((a) => {
        (a === n || !i.has(a)) && i.set(a, r);
      });
    });
  }
  _animateOptions(t, s) {
    const i = s.options,
      n = dh(t, i);
    if (!n) return [];
    const o = this._createAnimations(n, i);
    return (
      i.$shared &&
        ch(t.options.$animations, i).then(
          () => {
            t.options = i;
          },
          () => {}
        ),
      o
    );
  }
  _createAnimations(t, s) {
    const i = this._properties,
      n = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(s),
      a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const h = r[l];
      if (h.charAt(0) === "$") continue;
      if (h === "options") {
        n.push(...this._animateOptions(t, s));
        continue;
      }
      const c = s[h];
      let d = o[h];
      const u = i.get(h);
      if (d)
        if (u && d.active()) {
          d.update(u, c, a);
          continue;
        } else d.cancel();
      if (!u || !u.duration) {
        t[h] = c;
        continue;
      }
      (o[h] = d = new hh(u, t, h, c)), n.push(d);
    }
    return n;
  }
  update(t, s) {
    if (this._properties.size === 0) {
      Object.assign(t, s);
      return;
    }
    const i = this._createAnimations(t, s);
    if (i.length) return Yt.add(this._chart, i), !0;
  }
}
function ch(e, t) {
  const s = [],
    i = Object.keys(t);
  for (let n = 0; n < i.length; n++) {
    const o = e[i[n]];
    o && o.active() && s.push(o.wait());
  }
  return Promise.all(s);
}
function dh(e, t) {
  if (!t) return;
  let s = e.options;
  if (!s) {
    e.options = t;
    return;
  }
  return (
    s.$shared &&
      (e.options = s = Object.assign({}, s, { $shared: !1, $animations: {} })),
    s
  );
}
function qn(e, t) {
  const s = (e && e.options) || {},
    i = s.reverse,
    n = s.min === void 0 ? t : 0,
    o = s.max === void 0 ? t : 0;
  return { start: i ? o : n, end: i ? n : o };
}
function uh(e, t, s) {
  if (s === !1) return !1;
  const i = qn(e, s),
    n = qn(t, s);
  return { top: n.end, right: i.end, bottom: n.start, left: i.start };
}
function fh(e) {
  let t, s, i, n;
  return (
    I(e)
      ? ((t = e.top), (s = e.right), (i = e.bottom), (n = e.left))
      : (t = s = i = n = e),
    { top: t, right: s, bottom: i, left: n, disabled: e === !1 }
  );
}
function vr(e, t) {
  const s = [],
    i = e._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = i.length; n < o; ++n) s.push(i[n].index);
  return s;
}
function Qn(e, t, s, i = {}) {
  const n = e.keys,
    o = i.mode === "single";
  let r, a, l, h;
  if (t !== null) {
    for (r = 0, a = n.length; r < a; ++r) {
      if (((l = +n[r]), l === s)) {
        if (i.all) continue;
        break;
      }
      (h = e.values[l]), et(h) && (o || t === 0 || te(t) === te(h)) && (t += h);
    }
    return t;
  }
}
function gh(e, t) {
  const { iScale: s, vScale: i } = t,
    n = s.axis === "x" ? "x" : "y",
    o = i.axis === "x" ? "x" : "y",
    r = Object.keys(e),
    a = new Array(r.length);
  let l, h, c;
  for (l = 0, h = r.length; l < h; ++l)
    (c = r[l]), (a[l] = { [n]: c, [o]: e[c] });
  return a;
}
function Jn(e, t) {
  const s = e && e.options.stacked;
  return s || (s === void 0 && t.stack !== void 0);
}
function mh(e, t, s) {
  return `${e.id}.${t.id}.${s.stack || s.type}`;
}
function ph(e) {
  const { min: t, max: s, minDefined: i, maxDefined: n } = e.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: n ? s : Number.POSITIVE_INFINITY,
  };
}
function _h(e, t, s) {
  const i = e[t] || (e[t] = {});
  return i[s] || (i[s] = {});
}
function to(e, t, s, i) {
  for (const n of t.getMatchingVisibleMetas(i).reverse()) {
    const o = e[n.index];
    if ((s && o > 0) || (!s && o < 0)) return n.index;
  }
  return null;
}
function eo(e, t) {
  const { chart: s, _cachedMeta: i } = e,
    n = s._stacks || (s._stacks = {}),
    { iScale: o, vScale: r, index: a } = i,
    l = o.axis,
    h = r.axis,
    c = mh(o, r, i),
    d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f],
      { [l]: m, [h]: p } = g,
      b = g._stacks || (g._stacks = {});
    (u = b[h] = _h(n, c, m)),
      (u[a] = p),
      (u._top = to(u, r, !0, i.type)),
      (u._bottom = to(u, r, !1, i.type));
    const w = u._visualValues || (u._visualValues = {});
    w[a] = p;
  }
}
function bi(e, t) {
  const s = e.scales;
  return Object.keys(s)
    .filter((i) => s[i].axis === t)
    .shift();
}
function bh(e, t) {
  return _e(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function yh(e, t, s) {
  return _e(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: s,
    index: t,
    mode: "default",
    type: "data",
  });
}
function je(e, t) {
  const s = e.controller.index,
    i = e.vScale && e.vScale.axis;
  if (i) {
    t = t || e._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[i] === void 0 || o[i][s] === void 0) return;
      delete o[i][s],
        o[i]._visualValues !== void 0 &&
          o[i]._visualValues[s] !== void 0 &&
          delete o[i]._visualValues[s];
    }
  }
}
const yi = (e) => e === "reset" || e === "none",
  so = (e, t) => (t ? e : Object.assign({}, e)),
  xh = (e, t, s) =>
    e && !t.hidden && t._stacked && { keys: vr(s, !0), values: null };
class Mr {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, s) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = s),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = Jn(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && je(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      s = this._cachedMeta,
      i = this.getDataset(),
      n = (d, u, f, g) => (d === "x" ? u : d === "r" ? g : f),
      o = (s.xAxisID = W(i.xAxisID, bi(t, "x"))),
      r = (s.yAxisID = W(i.yAxisID, bi(t, "y"))),
      a = (s.rAxisID = W(i.rAxisID, bi(t, "r"))),
      l = s.indexAxis,
      h = (s.iAxisID = n(l, o, r, a)),
      c = (s.vAxisID = n(l, r, o, a));
    (s.xScale = this.getScaleForId(o)),
      (s.yScale = this.getScaleForId(r)),
      (s.rScale = this.getScaleForId(a)),
      (s.iScale = this.getScaleForId(h)),
      (s.vScale = this.getScaleForId(c));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const s = this._cachedMeta;
    return t === s.iScale ? s.vScale : s.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Wn(this._data, this), t._stacked && je(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      s = t.data || (t.data = []),
      i = this._data;
    if (I(s)) {
      const n = this._cachedMeta;
      this._data = gh(s, n);
    } else if (i !== s) {
      if (i) {
        Wn(i, this);
        const n = this._cachedMeta;
        je(n), (n._parsed = []);
      }
      s && Object.isExtensible(s) && kl(s, this),
        (this._syncList = []),
        (this._data = s);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const s = this._cachedMeta,
      i = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = s._stacked;
    (s._stacked = Jn(s.vScale, s)),
      s.stack !== i.stack && ((n = !0), je(s), (s.stack = i.stack)),
      this._resyncElements(t),
      (n || o !== s._stacked) && eo(this, s._parsed);
  }
  configure() {
    const t = this.chart.config,
      s = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), s, !0);
    (this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, s) {
    const { _cachedMeta: i, _data: n } = this,
      { iScale: o, _stacked: r } = i,
      a = o.axis;
    let l = t === 0 && s === n.length ? !0 : i._sorted,
      h = t > 0 && i._parsed[t - 1],
      c,
      d,
      u;
    if (this._parsing === !1) (i._parsed = n), (i._sorted = !0), (u = n);
    else {
      K(n[t])
        ? (u = this.parseArrayData(i, n, t, s))
        : I(n[t])
        ? (u = this.parseObjectData(i, n, t, s))
        : (u = this.parsePrimitiveData(i, n, t, s));
      const f = () => d[a] === null || (h && d[a] < h[a]);
      for (c = 0; c < s; ++c)
        (i._parsed[c + t] = d = u[c]), l && (f() && (l = !1), (h = d));
      i._sorted = l;
    }
    r && eo(this, u);
  }
  parsePrimitiveData(t, s, i, n) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      l = r.axis,
      h = o.getLabels(),
      c = o === r,
      d = new Array(n);
    let u, f, g;
    for (u = 0, f = n; u < f; ++u)
      (g = u + i),
        (d[u] = { [a]: c || o.parse(h[g], g), [l]: r.parse(s[g], g) });
    return d;
  }
  parseArrayData(t, s, i, n) {
    const { xScale: o, yScale: r } = t,
      a = new Array(n);
    let l, h, c, d;
    for (l = 0, h = n; l < h; ++l)
      (c = l + i),
        (d = s[c]),
        (a[l] = { x: o.parse(d[0], c), y: r.parse(d[1], c) });
    return a;
  }
  parseObjectData(t, s, i, n) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      h = new Array(n);
    let c, d, u, f;
    for (c = 0, d = n; c < d; ++c)
      (u = c + i),
        (f = s[u]),
        (h[c] = { x: o.parse(Le(f, a), u), y: r.parse(Le(f, l), u) });
    return h;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, s, i) {
    const n = this.chart,
      o = this._cachedMeta,
      r = s[t.axis],
      a = { keys: vr(n, !0), values: s._stacks[t.axis]._visualValues };
    return Qn(a, r, o.index, { mode: i });
  }
  updateRangeFromParsed(t, s, i, n) {
    const o = i[s.axis];
    let r = o === null ? NaN : o;
    const a = n && i._stacks[s.axis];
    n && a && ((n.values = a), (r = Qn(n, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r));
  }
  getMinMax(t, s) {
    const i = this._cachedMeta,
      n = i._parsed,
      o = i._sorted && t === i.iScale,
      r = n.length,
      a = this._getOtherScale(t),
      l = xh(s, i, this.chart),
      h = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: c, max: d } = ph(a);
    let u, f;
    function g() {
      f = n[u];
      const m = f[a.axis];
      return !et(f[t.axis]) || c > m || d < m;
    }
    for (
      u = 0;
      u < r && !(!g() && (this.updateRangeFromParsed(h, t, f, l), o));
      ++u
    );
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!g()) {
          this.updateRangeFromParsed(h, t, f, l);
          break;
        }
    }
    return h;
  }
  getAllParsedValues(t) {
    const s = this._cachedMeta._parsed,
      i = [];
    let n, o, r;
    for (n = 0, o = s.length; n < o; ++n)
      (r = s[n][t.axis]), et(r) && i.push(r);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const s = this._cachedMeta,
      i = s.iScale,
      n = s.vScale,
      o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : "",
    };
  }
  _update(t) {
    const s = this._cachedMeta;
    this.update(t || "default"),
      (s._clip = fh(
        W(this.options.clip, uh(s.xScale, s.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      s = this.chart,
      i = this._cachedMeta,
      n = i.data || [],
      o = s.chartArea,
      r = [],
      a = this._drawStart || 0,
      l = this._drawCount || n.length - a,
      h = this.options.drawActiveElementsOnTop;
    let c;
    for (i.dataset && i.dataset.draw(t, o, a, l), c = a; c < a + l; ++c) {
      const d = n[c];
      d.hidden || (d.active && h ? r.push(d) : d.draw(t, o));
    }
    for (c = 0; c < r.length; ++c) r[c].draw(t, o);
  }
  getStyle(t, s) {
    const i = s ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, s, i) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      (o = r.$context || (r.$context = yh(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = n.data[t]),
        (o.index = o.dataIndex = t);
    } else
      (o =
        this.$context ||
        (this.$context = bh(this.chart.getContext(), this.index))),
        (o.dataset = n),
        (o.index = o.datasetIndex = this.index);
    return (o.active = !!s), (o.mode = i), o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, s) {
    return this._resolveElementOptions(this.dataElementType.id, s, t);
  }
  _resolveElementOptions(t, s = "default", i) {
    const n = s === "active",
      o = this._cachedDataOpts,
      r = t + "-" + s,
      a = o[r],
      l = this.enableOptionSharing && ss(i);
    if (a) return so(a, l);
    const h = this.chart.config,
      c = h.datasetElementScopeKeys(this._type, t),
      d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      u = h.getOptionScopes(this.getDataset(), c),
      f = Object.keys(X.elements[t]),
      g = () => this.getContext(i, n, s),
      m = h.resolveNamedOptions(u, f, g, d);
    return m.$shared && ((m.$shared = l), (o[r] = Object.freeze(so(m, l)))), m;
  }
  _resolveAnimations(t, s, i) {
    const n = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${s}`,
      a = o[r];
    if (a) return a;
    let l;
    if (n.options.animation !== !1) {
      const c = this.chart.config,
        d = c.datasetAnimationScopeKeys(this._type, s),
        u = c.getOptionScopes(this.getDataset(), d);
      l = c.createResolver(u, this.getContext(t, i, s));
    }
    const h = new kr(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(h)), h;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, s) {
    return !s || yi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, s) {
    const i = this.resolveDataElementOptions(t, s),
      n = this._sharedOptions,
      o = this.getSharedOptions(i),
      r = this.includeOptions(s, o) || o !== n;
    return (
      this.updateSharedOptions(o, s, i), { sharedOptions: o, includeOptions: r }
    );
  }
  updateElement(t, s, i, n) {
    yi(n) ? Object.assign(t, i) : this._resolveAnimations(s, n).update(t, i);
  }
  updateSharedOptions(t, s, i) {
    t && !yi(s) && this._resolveAnimations(void 0, s).update(t, i);
  }
  _setStyle(t, s, i, n) {
    t.active = n;
    const o = this.getStyle(s, n);
    this._resolveAnimations(s, i, n).update(t, {
      options: (!n && this.getSharedOptions(o)) || o,
    });
  }
  removeHoverStyle(t, s, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, s, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const s = this._data,
      i = this._cachedMeta.data;
    for (const [a, l, h] of this._syncList) this[a](l, h);
    this._syncList = [];
    const n = i.length,
      o = s.length,
      r = Math.min(o, n);
    r && this.parse(0, r),
      o > n
        ? this._insertElements(n, o - n, t)
        : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, s, i = !0) {
    const n = this._cachedMeta,
      o = n.data,
      r = t + s;
    let a;
    const l = (h) => {
      for (h.length += s, a = h.length - 1; a >= r; a--) h[a] = h[a - s];
    };
    for (l(o), a = t; a < r; ++a) o[a] = new this.dataElementType();
    this._parsing && l(n._parsed),
      this.parse(t, s),
      i && this.updateElements(o, t, s, "reset");
  }
  updateElements(t, s, i, n) {}
  _removeElements(t, s) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const n = i._parsed.splice(t, s);
      i._stacked && je(i, n);
    }
    i.data.splice(t, s);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [s, i, n] = t;
      this[s](i, n);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, s) {
    s && this._sync(["_removeElements", t, s]);
    const i = arguments.length - 2;
    i && this._sync(["_insertElements", t, i]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
function wh(e, t) {
  if (!e._cache.$bar) {
    const s = e.getMatchingVisibleMetas(t);
    let i = [];
    for (let n = 0, o = s.length; n < o; n++)
      i = i.concat(s[n].controller.getAllParsedValues(e));
    e._cache.$bar = lr(i.sort((n, o) => n - o));
  }
  return e._cache.$bar;
}
function kh(e) {
  const t = e.iScale,
    s = wh(t, e.type);
  let i = t._length,
    n,
    o,
    r,
    a;
  const l = () => {
    r === 32767 ||
      r === -32768 ||
      (ss(a) && (i = Math.min(i, Math.abs(r - a) || i)), (a = r));
  };
  for (n = 0, o = s.length; n < o; ++n) (r = t.getPixelForValue(s[n])), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    (r = t.getPixelForTick(n)), l();
  return i;
}
function vh(e, t, s, i) {
  const n = s.barThickness;
  let o, r;
  return (
    H(n)
      ? ((o = t.min * s.categoryPercentage), (r = s.barPercentage))
      : ((o = n * i), (r = 1)),
    { chunk: o / i, ratio: r, start: t.pixels[e] - o / 2 }
  );
}
function Mh(e, t, s, i) {
  const n = t.pixels,
    o = n[e];
  let r = e > 0 ? n[e - 1] : null,
    a = e < n.length - 1 ? n[e + 1] : null;
  const l = s.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)),
    a === null && (a = o + o - r);
  const h = o - ((o - Math.min(r, a)) / 2) * l;
  return {
    chunk: ((Math.abs(a - r) / 2) * l) / i,
    ratio: s.barPercentage,
    start: h,
  };
}
function Sh(e, t, s, i) {
  const n = s.parse(e[0], i),
    o = s.parse(e[1], i),
    r = Math.min(n, o),
    a = Math.max(n, o);
  let l = r,
    h = a;
  Math.abs(r) > Math.abs(a) && ((l = a), (h = r)),
    (t[s.axis] = h),
    (t._custom = { barStart: l, barEnd: h, start: n, end: o, min: r, max: a });
}
function Sr(e, t, s, i) {
  return K(e) ? Sh(e, t, s, i) : (t[s.axis] = s.parse(e, i)), t;
}
function io(e, t, s, i) {
  const n = e.iScale,
    o = e.vScale,
    r = n.getLabels(),
    a = n === o,
    l = [];
  let h, c, d, u;
  for (h = s, c = s + i; h < c; ++h)
    (u = t[h]),
      (d = {}),
      (d[n.axis] = a || n.parse(r[h], h)),
      l.push(Sr(u, d, o, h));
  return l;
}
function xi(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function Dh(e, t, s) {
  return e !== 0 ? te(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= s ? 1 : -1);
}
function Oh(e) {
  let t, s, i, n, o;
  return (
    e.horizontal
      ? ((t = e.base > e.x), (s = "left"), (i = "right"))
      : ((t = e.base < e.y), (s = "bottom"), (i = "top")),
    t ? ((n = "end"), (o = "start")) : ((n = "start"), (o = "end")),
    { start: s, end: i, reverse: t, top: n, bottom: o }
  );
}
function Ch(e, t, s, i) {
  let n = t.borderSkipped;
  const o = {};
  if (!n) {
    e.borderSkipped = o;
    return;
  }
  if (n === !0) {
    e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: r, end: a, reverse: l, top: h, bottom: c } = Oh(e);
  n === "middle" &&
    s &&
    ((e.enableBorderRadius = !0),
    (s._top || 0) === i
      ? (n = h)
      : (s._bottom || 0) === i
      ? (n = c)
      : ((o[no(c, r, a, l)] = !0), (n = h))),
    (o[no(n, r, a, l)] = !0),
    (e.borderSkipped = o);
}
function no(e, t, s, i) {
  return i ? ((e = Ph(e, t, s)), (e = oo(e, s, t))) : (e = oo(e, t, s)), e;
}
function Ph(e, t, s) {
  return e === t ? s : e === s ? t : e;
}
function oo(e, t, s) {
  return e === "start" ? t : e === "end" ? s : e;
}
function Th(e, { inflateAmount: t }, s) {
  e.inflateAmount = t === "auto" ? (s === 1 ? 0.33 : 0) : t;
}
class Fh extends Mr {
  static id = "bar";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  };
  static overrides = {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  };
  parsePrimitiveData(t, s, i, n) {
    return io(t, s, i, n);
  }
  parseArrayData(t, s, i, n) {
    return io(t, s, i, n);
  }
  parseObjectData(t, s, i, n) {
    const { iScale: o, vScale: r } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      h = o.axis === "x" ? a : l,
      c = r.axis === "x" ? a : l,
      d = [];
    let u, f, g, m;
    for (u = i, f = i + n; u < f; ++u)
      (m = s[u]),
        (g = {}),
        (g[o.axis] = o.parse(Le(m, h), u)),
        d.push(Sr(Le(m, c), g, r, u));
    return d;
  }
  updateRangeFromParsed(t, s, i, n) {
    super.updateRangeFromParsed(t, s, i, n);
    const o = i._custom;
    o &&
      s === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const s = this._cachedMeta,
      { iScale: i, vScale: n } = s,
      o = this.getParsed(t),
      r = o._custom,
      a = xi(r)
        ? "[" + r.start + ", " + r.end + "]"
        : "" + n.getLabelForValue(o[n.axis]);
    return { label: "" + i.getLabelForValue(o[i.axis]), value: a };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const s = this._cachedMeta;
    this.updateElements(s.data, 0, s.data.length, t);
  }
  updateElements(t, s, i, n) {
    const o = n === "reset",
      {
        index: r,
        _cachedMeta: { vScale: a },
      } = this,
      l = a.getBasePixel(),
      h = a.isHorizontal(),
      c = this._getRuler(),
      { sharedOptions: d, includeOptions: u } = this._getSharedOptions(s, n);
    for (let f = s; f < s + i; f++) {
      const g = this.getParsed(f),
        m =
          o || H(g[a.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(f),
        p = this._calculateBarIndexPixels(f, c),
        b = (g._stacks || {})[a.axis],
        w = {
          horizontal: h,
          base: m.base,
          enableBorderRadius:
            !b || xi(g._custom) || r === b._top || r === b._bottom,
          x: h ? m.head : p.center,
          y: h ? p.center : m.head,
          height: h ? p.size : Math.abs(m.size),
          width: h ? Math.abs(m.size) : p.size,
        };
      u &&
        (w.options =
          d || this.resolveDataElementOptions(f, t[f].active ? "active" : n));
      const S = w.options || t[f].options;
      Ch(w, S, b, r), Th(w, S, c.ratio), this.updateElement(t[f], f, w, n);
    }
  }
  _getStacks(t, s) {
    const { iScale: i } = this._cachedMeta,
      n = i
        .getMatchingVisibleMetas(this._type)
        .filter((l) => l.controller.options.grouped),
      o = i.options.stacked,
      r = [],
      a = (l) => {
        const h = l.controller.getParsed(s),
          c = h && h[l.vScale.axis];
        if (H(c) || isNaN(c)) return !0;
      };
    for (const l of n)
      if (
        !(s !== void 0 && a(l)) &&
        ((o === !1 ||
          r.indexOf(l.stack) === -1 ||
          (o === void 0 && l.stack === void 0)) &&
          r.push(l.stack),
        l.index === t)
      )
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, s, i) {
    const n = this._getStacks(t, i),
      o = s !== void 0 ? n.indexOf(s) : -1;
    return o === -1 ? n.length - 1 : o;
  }
  _getRuler() {
    const t = this.options,
      s = this._cachedMeta,
      i = s.iScale,
      n = [];
    let o, r;
    for (o = 0, r = s.data.length; o < r; ++o)
      n.push(i.getPixelForValue(this.getParsed(o)[i.axis], o));
    const a = t.barThickness;
    return {
      min: a || kh(s),
      pixels: n,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: s, _stacked: i, index: n },
        options: { base: o, minBarLength: r },
      } = this,
      a = o || 0,
      l = this.getParsed(t),
      h = l._custom,
      c = xi(h);
    let d = l[s.axis],
      u = 0,
      f = i ? this.applyStack(s, l, i) : d,
      g,
      m;
    f !== d && ((u = f - d), (f = d)),
      c &&
        ((d = h.barStart),
        (f = h.barEnd - h.barStart),
        d !== 0 && te(d) !== te(h.barEnd) && (u = 0),
        (u += d));
    const p = !H(o) && !c ? o : u;
    let b = s.getPixelForValue(p);
    if (
      (this.chart.getDataVisibility(t)
        ? (g = s.getPixelForValue(u + f))
        : (g = b),
      (m = g - b),
      Math.abs(m) < r)
    ) {
      (m = Dh(m, s, a) * r), d === a && (b -= m / 2);
      const w = s.getPixelForDecimal(0),
        S = s.getPixelForDecimal(1),
        D = Math.min(w, S),
        v = Math.max(w, S);
      (b = Math.max(Math.min(b, v), D)),
        (g = b + m),
        i &&
          !c &&
          (l._stacks[s.axis]._visualValues[n] =
            s.getValueForPixel(g) - s.getValueForPixel(b));
    }
    if (b === s.getPixelForValue(a)) {
      const w = (te(m) * s.getLineWidthForValue(a)) / 2;
      (b += w), (m -= w);
    }
    return { size: m, base: b, head: g, center: g + m / 2 };
  }
  _calculateBarIndexPixels(t, s) {
    const i = s.scale,
      n = this.options,
      o = n.skipNull,
      r = W(n.maxBarThickness, 1 / 0);
    let a, l;
    if (s.grouped) {
      const h = o ? this._getStackCount(t) : s.stackCount,
        c = n.barThickness === "flex" ? Mh(t, s, n, h) : vh(t, s, n, h),
        d = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          o ? t : void 0
        );
      (a = c.start + c.chunk * d + c.chunk / 2),
        (l = Math.min(r, c.chunk * c.ratio));
    } else
      (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
        (l = Math.min(r, s.min * s.ratio));
    return { base: a - l / 2, head: a + l / 2, center: a, size: l };
  }
  draw() {
    const t = this._cachedMeta,
      s = t.vScale,
      i = t.data,
      n = i.length;
    let o = 0;
    for (; o < n; ++o)
      this.getParsed(o)[s.axis] !== null &&
        !i[o].hidden &&
        i[o].draw(this._ctx);
  }
}
function ae() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class on {
  static override(t) {
    Object.assign(on.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  init() {}
  formats() {
    return ae();
  }
  parse() {
    return ae();
  }
  format() {
    return ae();
  }
  add() {
    return ae();
  }
  diff() {
    return ae();
  }
  startOf() {
    return ae();
  }
  endOf() {
    return ae();
  }
}
var Lh = { _date: on };
function Ah(e, t, s, i) {
  const { controller: n, data: o, _sorted: r } = e,
    a = n._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? xl : Fi;
    if (i) {
      if (n._sharedOptions) {
        const h = o[0],
          c = typeof h.getRange == "function" && h.getRange(t);
        if (c) {
          const d = l(o, t, s - c),
            u = l(o, t, s + c);
          return { lo: d.lo, hi: u.hi };
        }
      }
    } else return l(o, t, s);
  }
  return { lo: 0, hi: o.length - 1 };
}
function ds(e, t, s, i, n) {
  const o = e.getSortedVisibleDatasetMetas(),
    r = s[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: h, data: c } = o[a],
      { lo: d, hi: u } = Ah(o[a], t, r, n);
    for (let f = d; f <= u; ++f) {
      const g = c[f];
      g.skip || i(g, h, f);
    }
  }
}
function Rh(e) {
  const t = e.indexOf("x") !== -1,
    s = e.indexOf("y") !== -1;
  return function (i, n) {
    const o = t ? Math.abs(i.x - n.x) : 0,
      r = s ? Math.abs(i.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function wi(e, t, s, i, n) {
  const o = [];
  return (
    (!n && !e.isPointInArea(t)) ||
      ds(
        e,
        s,
        t,
        function (a, l, h) {
          (!n && !De(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, i) &&
              o.push({ element: a, datasetIndex: l, index: h }));
        },
        !0
      ),
    o
  );
}
function Ih(e, t, s, i) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: h, endAngle: c } = r.getProps(
        ["startAngle", "endAngle"],
        i
      ),
      { angle: d } = pl(r, { x: t.x, y: t.y });
    bl(d, h, c) && n.push({ element: r, datasetIndex: a, index: l });
  }
  return ds(e, s, t, o), n;
}
function Yh(e, t, s, i, n, o) {
  let r = [];
  const a = Rh(s);
  let l = Number.POSITIVE_INFINITY;
  function h(c, d, u) {
    const f = c.inRange(t.x, t.y, n);
    if (i && !f) return;
    const g = c.getCenterPoint(n);
    if (!(!!o || e.isPointInArea(g)) && !f) return;
    const p = a(t, g);
    p < l
      ? ((r = [{ element: c, datasetIndex: d, index: u }]), (l = p))
      : p === l && r.push({ element: c, datasetIndex: d, index: u });
  }
  return ds(e, s, t, h), r;
}
function ki(e, t, s, i, n, o) {
  return !o && !e.isPointInArea(t)
    ? []
    : s === "r" && !i
    ? Ih(e, t, s, n)
    : Yh(e, t, s, i, n, o);
}
function ro(e, t, s, i, n) {
  const o = [],
    r = s === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    ds(e, s, t, (l, h, c) => {
      l[r](t[s], n) &&
        (o.push({ element: l, datasetIndex: h, index: c }),
        (a = a || l.inRange(t.x, t.y, n)));
    }),
    i && !a ? [] : o
  );
}
var Eh = {
  evaluateInteractionItems: ds,
  modes: {
    index(e, t, s, i) {
      const n = ce(t, e),
        o = s.axis || "x",
        r = s.includeInvisible || !1,
        a = s.intersect ? wi(e, n, o, i, r) : ki(e, n, o, !1, i, r),
        l = [];
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach((h) => {
            const c = a[0].index,
              d = h.data[c];
            d &&
              !d.skip &&
              l.push({ element: d, datasetIndex: h.index, index: c });
          }),
          l)
        : [];
    },
    dataset(e, t, s, i) {
      const n = ce(t, e),
        o = s.axis || "xy",
        r = s.includeInvisible || !1;
      let a = s.intersect ? wi(e, n, o, i, r) : ki(e, n, o, !1, i, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          h = e.getDatasetMeta(l).data;
        a = [];
        for (let c = 0; c < h.length; ++c)
          a.push({ element: h[c], datasetIndex: l, index: c });
      }
      return a;
    },
    point(e, t, s, i) {
      const n = ce(t, e),
        o = s.axis || "xy",
        r = s.includeInvisible || !1;
      return wi(e, n, o, i, r);
    },
    nearest(e, t, s, i) {
      const n = ce(t, e),
        o = s.axis || "xy",
        r = s.includeInvisible || !1;
      return ki(e, n, o, s.intersect, i, r);
    },
    x(e, t, s, i) {
      const n = ce(t, e);
      return ro(e, n, "x", s.intersect, i);
    },
    y(e, t, s, i) {
      const n = ce(t, e);
      return ro(e, n, "y", s.intersect, i);
    },
  },
};
const Dr = ["left", "top", "right", "bottom"];
function ze(e, t) {
  return e.filter((s) => s.pos === t);
}
function ao(e, t) {
  return e.filter((s) => Dr.indexOf(s.pos) === -1 && s.box.axis === t);
}
function He(e, t) {
  return e.sort((s, i) => {
    const n = t ? i : s,
      o = t ? s : i;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Nh(e) {
  const t = [];
  let s, i, n, o, r, a;
  for (s = 0, i = (e || []).length; s < i; ++s)
    (n = e[s]),
      ({
        position: o,
        options: { stack: r, stackWeight: a = 1 },
      } = n),
      t.push({
        index: s,
        box: n,
        pos: o,
        horizontal: n.isHorizontal(),
        weight: n.weight,
        stack: r && o + r,
        stackWeight: a,
      });
  return t;
}
function Wh(e) {
  const t = {};
  for (const s of e) {
    const { stack: i, pos: n, stackWeight: o } = s;
    if (!i || !Dr.includes(n)) continue;
    const r = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 });
    r.count++, (r.weight += o);
  }
  return t;
}
function jh(e, t) {
  const s = Wh(e),
    { vBoxMaxWidth: i, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box,
      h = s[a.stack],
      c = h && a.stackWeight / h.weight;
    a.horizontal
      ? ((a.width = c ? c * i : l && t.availableWidth), (a.height = n))
      : ((a.width = i), (a.height = c ? c * n : l && t.availableHeight));
  }
  return s;
}
function zh(e) {
  const t = Nh(e),
    s = He(
      t.filter((h) => h.box.fullSize),
      !0
    ),
    i = He(ze(t, "left"), !0),
    n = He(ze(t, "right")),
    o = He(ze(t, "top"), !0),
    r = He(ze(t, "bottom")),
    a = ao(t, "x"),
    l = ao(t, "y");
  return {
    fullSize: s,
    leftAndTop: i.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: ze(t, "chartArea"),
    vertical: i.concat(n).concat(l),
    horizontal: o.concat(r).concat(a),
  };
}
function lo(e, t, s, i) {
  return Math.max(e[s], t[s]) + Math.max(e[i], t[i]);
}
function Or(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function Hh(e, t, s, i) {
  const { pos: n, box: o } = s,
    r = e.maxPadding;
  if (!I(n)) {
    s.size && (e[n] -= s.size);
    const d = i[s.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, s.horizontal ? o.height : o.width)),
      (s.size = d.size / d.count),
      (e[n] += s.size);
  }
  o.getPadding && Or(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - lo(r, e, "left", "right")),
    l = Math.max(0, t.outerHeight - lo(r, e, "top", "bottom")),
    h = a !== e.w,
    c = l !== e.h;
  return (
    (e.w = a),
    (e.h = l),
    s.horizontal ? { same: h, other: c } : { same: c, other: h }
  );
}
function Bh(e) {
  const t = e.maxPadding;
  function s(i) {
    const n = Math.max(t[i] - e[i], 0);
    return (e[i] += n), n;
  }
  (e.y += s("top")), (e.x += s("left")), s("right"), s("bottom");
}
function Vh(e, t) {
  const s = t.maxPadding;
  function i(n) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      n.forEach((r) => {
        o[r] = Math.max(t[r], s[r]);
      }),
      o
    );
  }
  return i(e ? ["left", "right"] : ["top", "bottom"]);
}
function Ke(e, t, s, i) {
  const n = [];
  let o, r, a, l, h, c;
  for (o = 0, r = e.length, h = 0; o < r; ++o) {
    (a = e[o]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, Vh(a.horizontal, t));
    const { same: d, other: u } = Hh(t, s, a, i);
    (h |= d && n.length), (c = c || u), l.fullSize || n.push(a);
  }
  return (h && Ke(n, t, s, i)) || c;
}
function Ss(e, t, s, i, n) {
  (e.top = s),
    (e.left = t),
    (e.right = t + i),
    (e.bottom = s + n),
    (e.width = i),
    (e.height = n);
}
function ho(e, t, s, i) {
  const n = s.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box,
      h = i[a.stack] || { count: 1, placed: 0, weight: 1 },
      c = a.stackWeight / h.weight || 1;
    if (a.horizontal) {
      const d = t.w * c,
        u = h.size || l.height;
      ss(h.start) && (r = h.start),
        l.fullSize
          ? Ss(l, n.left, r, s.outerWidth - n.right - n.left, u)
          : Ss(l, t.left + h.placed, r, d, u),
        (h.start = r),
        (h.placed += d),
        (r = l.bottom);
    } else {
      const d = t.h * c,
        u = h.size || l.width;
      ss(h.start) && (o = h.start),
        l.fullSize
          ? Ss(l, o, n.top, u, s.outerHeight - n.bottom - n.top)
          : Ss(l, o, t.top + h.placed, u, d),
        (h.start = o),
        (h.placed += d),
        (o = l.right);
    }
  }
  (t.x = o), (t.y = r);
}
var _t = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(s) {
                t.draw(s);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const s = e.boxes ? e.boxes.indexOf(t) : -1;
    s !== -1 && e.boxes.splice(s, 1);
  },
  configure(e, t, s) {
    (t.fullSize = s.fullSize), (t.position = s.position), (t.weight = s.weight);
  },
  update(e, t, s, i) {
    if (!e) return;
    const n = rt(e.options.layout.padding),
      o = Math.max(t - n.width, 0),
      r = Math.max(s - n.height, 0),
      a = zh(e.boxes),
      l = a.vertical,
      h = a.horizontal;
    j(e.boxes, (m) => {
      typeof m.beforeLayout == "function" && m.beforeLayout();
    });
    const c =
        l.reduce(
          (m, p) => (p.box.options && p.box.options.display === !1 ? m : m + 1),
          0
        ) || 1,
      d = Object.freeze({
        outerWidth: t,
        outerHeight: s,
        padding: n,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / c,
        hBoxMaxHeight: r / 2,
      }),
      u = Object.assign({}, n);
    Or(u, rt(i));
    const f = Object.assign(
        { maxPadding: u, w: o, h: r, x: n.left, y: n.top },
        n
      ),
      g = jh(l.concat(h), d);
    Ke(a.fullSize, f, d, g),
      Ke(l, f, d, g),
      Ke(h, f, d, g) && Ke(l, f, d, g),
      Bh(f),
      ho(a.leftAndTop, f, d, g),
      (f.x += f.w),
      (f.y += f.h),
      ho(a.rightAndBottom, f, d, g),
      (e.chartArea = {
        left: f.left,
        top: f.top,
        right: f.left + f.w,
        bottom: f.top + f.h,
        height: f.h,
        width: f.w,
      }),
      j(a.chartArea, (m) => {
        const p = m.box;
        Object.assign(p, e.chartArea),
          p.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Cr {
  acquireContext(t, s) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, s, i) {}
  removeEventListener(t, s, i) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, s, i, n) {
    return (
      (s = Math.max(0, s || t.width)),
      (i = i || t.height),
      { width: s, height: Math.max(0, n ? Math.floor(s / n) : i) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Uh extends Cr {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Ys = "$chartjs",
  $h = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  co = (e) => e === null || e === "";
function Gh(e, t) {
  const s = e.style,
    i = e.getAttribute("height"),
    n = e.getAttribute("width");
  if (
    ((e[Ys] = {
      initial: {
        height: i,
        width: n,
        style: { display: s.display, height: s.height, width: s.width },
      },
    }),
    (s.display = s.display || "block"),
    (s.boxSizing = s.boxSizing || "border-box"),
    co(n))
  ) {
    const o = Xn(e, "width");
    o !== void 0 && (e.width = o);
  }
  if (co(i))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const o = Xn(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Pr = nh ? { passive: !0 } : !1;
function Kh(e, t, s) {
  e && e.addEventListener(t, s, Pr);
}
function Xh(e, t, s) {
  e && e.canvas && e.canvas.removeEventListener(t, s, Pr);
}
function Zh(e, t) {
  const s = $h[e.type] || e.type,
    { x: i, y: n } = ce(e, t);
  return {
    type: s,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: n !== void 0 ? n : null,
  };
}
function Gs(e, t) {
  for (const s of e) if (s === t || s.contains(t)) return !0;
}
function qh(e, t, s) {
  const i = e.canvas,
    n = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || Gs(a.addedNodes, i)), (r = r && !Gs(a.removedNodes, i));
      r && s();
    });
  return n.observe(document, { childList: !0, subtree: !0 }), n;
}
function Qh(e, t, s) {
  const i = e.canvas,
    n = new MutationObserver((o) => {
      let r = !1;
      for (const a of o)
        (r = r || Gs(a.removedNodes, i)), (r = r && !Gs(a.addedNodes, i));
      r && s();
    });
  return n.observe(document, { childList: !0, subtree: !0 }), n;
}
const ns = new Map();
let uo = 0;
function Tr() {
  const e = window.devicePixelRatio;
  e !== uo &&
    ((uo = e),
    ns.forEach((t, s) => {
      s.currentDevicePixelRatio !== e && t();
    }));
}
function Jh(e, t) {
  ns.size || window.addEventListener("resize", Tr), ns.set(e, t);
}
function tc(e) {
  ns.delete(e), ns.size || window.removeEventListener("resize", Tr);
}
function ec(e, t, s) {
  const i = e.canvas,
    n = i && nn(i);
  if (!n) return;
  const o = cr((a, l) => {
      const h = n.clientWidth;
      s(a, l), h < n.clientWidth && s();
    }, window),
    r = new ResizeObserver((a) => {
      const l = a[0],
        h = l.contentRect.width,
        c = l.contentRect.height;
      (h === 0 && c === 0) || o(h, c);
    });
  return r.observe(n), Jh(e, o), r;
}
function vi(e, t, s) {
  s && s.disconnect(), t === "resize" && tc(e);
}
function sc(e, t, s) {
  const i = e.canvas,
    n = cr((o) => {
      e.ctx !== null && s(Zh(o, e));
    }, e);
  return Kh(i, t, n), n;
}
class ic extends Cr {
  acquireContext(t, s) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (Gh(t, s), i) : null;
  }
  releaseContext(t) {
    const s = t.canvas;
    if (!s[Ys]) return !1;
    const i = s[Ys].initial;
    ["height", "width"].forEach((o) => {
      const r = i[o];
      H(r) ? s.removeAttribute(o) : s.setAttribute(o, r);
    });
    const n = i.style || {};
    return (
      Object.keys(n).forEach((o) => {
        s.style[o] = n[o];
      }),
      (s.width = s.width),
      delete s[Ys],
      !0
    );
  }
  addEventListener(t, s, i) {
    this.removeEventListener(t, s);
    const n = t.$proxies || (t.$proxies = {}),
      r = { attach: qh, detach: Qh, resize: ec }[s] || sc;
    n[s] = r(t, s, i);
  }
  removeEventListener(t, s) {
    const i = t.$proxies || (t.$proxies = {}),
      n = i[s];
    if (!n) return;
    (({ attach: vi, detach: vi, resize: vi })[s] || Xh)(t, s, n),
      (i[s] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, s, i, n) {
    return ih(t, s, i, n);
  }
  isAttached(t) {
    const s = t && nn(t);
    return !!(s && s.isConnected);
  }
}
function nc(e) {
  return !sn() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? Uh
    : ic;
}
class Re {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(t) {
    const { x: s, y: i } = this.getProps(["x", "y"], t);
    return { x: s, y: i };
  }
  hasValue() {
    return Vs(this.x) && Vs(this.y);
  }
  getProps(t, s) {
    const i = this.$animations;
    if (!s || !i) return this;
    const n = {};
    return (
      t.forEach((o) => {
        n[o] = i[o] && i[o].active() ? i[o]._to : this[o];
      }),
      n
    );
  }
}
function oc(e, t) {
  const s = e.options.ticks,
    i = rc(e),
    n = Math.min(s.maxTicksLimit || i, i),
    o = s.major.enabled ? lc(t) : [],
    r = o.length,
    a = o[0],
    l = o[r - 1],
    h = [];
  if (r > n) return hc(t, h, o, r / n), h;
  const c = ac(o, t, n);
  if (r > 0) {
    let d, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Ds(t, h, c, H(f) ? 0 : a - f, a), d = 0, u = r - 1; d < u; d++)
      Ds(t, h, c, o[d], o[d + 1]);
    return Ds(t, h, c, l, H(f) ? t.length : l + f), h;
  }
  return Ds(t, h, c), h;
}
function rc(e) {
  const t = e.options.offset,
    s = e._tickSize(),
    i = e._length / s + (t ? 0 : 1),
    n = e._maxLength / s;
  return Math.floor(Math.min(i, n));
}
function ac(e, t, s) {
  const i = cc(e),
    n = t.length / s;
  if (!i) return Math.max(n, 1);
  const o = gl(i);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n) return l;
  }
  return Math.max(n, 1);
}
function lc(e) {
  const t = [];
  let s, i;
  for (s = 0, i = e.length; s < i; s++) e[s].major && t.push(s);
  return t;
}
function hc(e, t, s, i) {
  let n = 0,
    o = s[0],
    r;
  for (i = Math.ceil(i), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), n++, (o = s[n * i]));
}
function Ds(e, t, s, i, n) {
  const o = W(i, 0),
    r = Math.min(W(n, e.length), e.length);
  let a = 0,
    l,
    h,
    c;
  for (
    s = Math.ceil(s), n && ((l = n - i), (s = l / Math.floor(l / s))), c = o;
    c < 0;

  )
    a++, (c = Math.round(o + a * s));
  for (h = Math.max(o, 0); h < r; h++)
    h === c && (t.push(e[h]), a++, (c = Math.round(o + a * s)));
}
function cc(e) {
  const t = e.length;
  let s, i;
  if (t < 2) return !1;
  for (i = e[0], s = 1; s < t; ++s) if (e[s] - e[s - 1] !== i) return !1;
  return i;
}
const dc = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  fo = (e, t, s) => (t === "top" || t === "left" ? e[t] + s : e[t] - s),
  go = (e, t) => Math.min(t || e, e);
function mo(e, t) {
  const s = [],
    i = e.length / t,
    n = e.length;
  let o = 0;
  for (; o < n; o += i) s.push(e[Math.floor(o)]);
  return s;
}
function uc(e, t, s) {
  const i = e.ticks.length,
    n = Math.min(t, i - 1),
    o = e._startPixel,
    r = e._endPixel,
    a = 1e-6;
  let l = e.getPixelForTick(n),
    h;
  if (
    !(
      s &&
      (i === 1
        ? (h = Math.max(l - o, r - l))
        : t === 0
        ? (h = (e.getPixelForTick(1) - l) / 2)
        : (h = (l - e.getPixelForTick(n - 1)) / 2),
      (l += n < t ? h : -h),
      l < o - a || l > r + a)
    )
  )
    return l;
}
function fc(e, t) {
  j(e, (s) => {
    const i = s.gc,
      n = i.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o) delete s.data[i[o]];
      i.splice(0, n);
    }
  });
}
function Be(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function po(e, t) {
  if (!e.display) return 0;
  const s = J(e.font, t),
    i = rt(e.padding);
  return (K(e.text) ? e.text.length : 1) * s.lineHeight + i.height;
}
function gc(e, t) {
  return _e(e, { scale: t, type: "scale" });
}
function mc(e, t, s) {
  return _e(e, { tick: s, index: t, type: "tick" });
}
function pc(e, t, s) {
  let i = Xi(e);
  return ((s && t !== "right") || (!s && t === "right")) && (i = dc(i)), i;
}
function _c(e, t, s, i) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = e,
    { chartArea: h, scales: c } = l;
  let d = 0,
    u,
    f,
    g;
  const m = r - n,
    p = a - o;
  if (e.isHorizontal()) {
    if (((f = nt(i, o, a)), I(s))) {
      const b = Object.keys(s)[0],
        w = s[b];
      g = c[b].getPixelForValue(w) + m - t;
    } else
      s === "center" ? (g = (h.bottom + h.top) / 2 + m - t) : (g = fo(e, s, t));
    u = a - o;
  } else {
    if (I(s)) {
      const b = Object.keys(s)[0],
        w = s[b];
      f = c[b].getPixelForValue(w) - p + t;
    } else
      s === "center" ? (f = (h.left + h.right) / 2 - p + t) : (f = fo(e, s, t));
    (g = nt(i, r, n)), (d = s === "left" ? -ut : ut);
  }
  return { titleX: f, titleY: g, maxWidth: u, rotation: d };
}
class be extends Re {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, s) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: s, _suggestedMin: i, _suggestedMax: n } = this;
    return (
      (t = dt(t, Number.POSITIVE_INFINITY)),
      (s = dt(s, Number.NEGATIVE_INFINITY)),
      (i = dt(i, Number.POSITIVE_INFINITY)),
      (n = dt(n, Number.NEGATIVE_INFINITY)),
      { min: dt(t, i), max: dt(s, n), minDefined: et(t), maxDefined: et(s) }
    );
  }
  getMinMax(t) {
    let { min: s, max: i, minDefined: n, maxDefined: o } = this.getUserBounds(),
      r;
    if (n && o) return { min: s, max: i };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, h = a.length; l < h; ++l)
      (r = a[l].controller.getMinMax(this, t)),
        n || (s = Math.min(s, r.min)),
        o || (i = Math.max(i, r.max));
    return (
      (s = o && s > i ? i : s),
      (i = n && s > i ? s : i),
      { min: dt(s, dt(i, s)), max: dt(i, dt(s, i)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    V(this.options.beforeUpdate, [this]);
  }
  update(t, s, i) {
    const { beginAtZero: n, grace: o, ticks: r } = this.options,
      a = r.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = s),
      (this._margins = i =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = Hl(this, o, n)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? mo(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === "auto") &&
        ((this.ticks = oc(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      s,
      i;
    this.isHorizontal()
      ? ((s = this.left), (i = this.right))
      : ((s = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = s),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - s),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    V(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    V(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    V(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), V(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    V(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const s = this.options.ticks;
    let i, n, o;
    for (i = 0, n = t.length; i < n; i++)
      (o = t[i]), (o.label = V(s.callback, [o.value, i, t], this));
  }
  afterTickToLabelConversion() {
    V(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    V(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      s = t.ticks,
      i = go(this.ticks.length, t.ticks.maxTicksLimit),
      n = s.minRotation || 0,
      o = s.maxRotation;
    let r = n,
      a,
      l,
      h;
    if (
      !this._isVisible() ||
      !s.display ||
      n >= o ||
      i <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = n;
      return;
    }
    const c = this._getLabelSizes(),
      d = c.widest.width,
      u = c.highest.height,
      f = xt(this.chart.width - d, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / i : f / (i - 1)),
      d + 6 > a &&
        ((a = f / (i - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          Be(t.grid) -
          s.padding -
          po(t.title, this.chart.options.font)),
        (h = Math.sqrt(d * d + u * u)),
        (r = Gi(
          Math.min(
            Math.asin(xt((c.highest.height + 6) / a, -1, 1)),
            Math.asin(xt(l / h, -1, 1)) - Math.asin(xt(u / h, -1, 1))
          )
        )),
        (r = Math.max(n, Math.min(o, r)))),
      (this.labelRotation = r);
  }
  afterCalculateLabelRotation() {
    V(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    V(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: s,
        options: { ticks: i, title: n, grid: o },
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal();
    if (r) {
      const l = po(n, s.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = Be(o) + l))
          : ((t.height = this.maxHeight), (t.width = Be(o) + l)),
        i.display && this.ticks.length)
      ) {
        const {
            first: h,
            last: c,
            widest: d,
            highest: u,
          } = this._getLabelSizes(),
          f = i.padding * 2,
          g = Xt(this.labelRotation),
          m = Math.cos(g),
          p = Math.sin(g);
        if (a) {
          const b = i.mirror ? 0 : p * d.width + m * u.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = i.mirror ? 0 : m * d.width + p * u.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(h, c, p, m);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            s.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            s.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, s, i, n) {
    const {
        ticks: { align: o, padding: r },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      h = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const c = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0,
        f = 0;
      l
        ? h
          ? ((u = n * t.width), (f = i * s.height))
          : ((u = i * t.height), (f = n * s.width))
        : o === "start"
        ? (f = s.width)
        : o === "end"
        ? (u = t.width)
        : o !== "inner" && ((u = t.width / 2), (f = s.width / 2)),
        (this.paddingLeft = Math.max(
          ((u - c + r) * this.width) / (this.width - c),
          0
        )),
        (this.paddingRight = Math.max(
          ((f - d + r) * this.width) / (this.width - d),
          0
        ));
    } else {
      let c = s.height / 2,
        d = t.height / 2;
      o === "start"
        ? ((c = 0), (d = t.height))
        : o === "end" && ((c = s.height), (d = 0)),
        (this.paddingTop = c + r),
        (this.paddingBottom = d + r);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    V(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: s } = this.options;
    return s === "top" || s === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let s, i;
    for (s = 0, i = t.length; s < i; s++)
      H(t[s].label) && (t.splice(s, 1), i--, s--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const s = this.options.ticks.sampleSize;
      let i = this.ticks;
      s < i.length && (i = mo(i, s)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            i,
            i.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, s, i) {
    const { ctx: n, _longestTextCache: o } = this,
      r = [],
      a = [],
      l = Math.floor(s / go(s, i));
    let h = 0,
      c = 0,
      d,
      u,
      f,
      g,
      m,
      p,
      b,
      w,
      S,
      D,
      v;
    for (d = 0; d < s; d += l) {
      if (
        ((g = t[d].label),
        (m = this._resolveTickFontOptions(d)),
        (n.font = p = m.string),
        (b = o[p] = o[p] || { data: {}, gc: [] }),
        (w = m.lineHeight),
        (S = D = 0),
        !H(g) && !K(g))
      )
        (S = Us(n, b.data, b.gc, S, g)), (D = w);
      else if (K(g))
        for (u = 0, f = g.length; u < f; ++u)
          (v = g[u]),
            !H(v) && !K(v) && ((S = Us(n, b.data, b.gc, S, v)), (D += w));
      r.push(S), a.push(D), (h = Math.max(S, h)), (c = Math.max(D, c));
    }
    fc(o, s);
    const O = r.indexOf(h),
      P = a.indexOf(c),
      C = (L) => ({ width: r[L] || 0, height: a[L] || 0 });
    return {
      first: C(0),
      last: C(s - 1),
      widest: C(O),
      highest: C(P),
      widths: r,
      heights: a,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, s) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const s = this.ticks;
    return t < 0 || t > s.length - 1 ? null : this.getPixelForValue(s[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const s = this._startPixel + t * this._length;
    return yl(this._alignToPixels ? re(this.chart, s, 0) : s);
  }
  getDecimalForPixel(t) {
    const s = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - s : s;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: s } = this;
    return t < 0 && s < 0 ? s : t > 0 && s > 0 ? t : 0;
  }
  getContext(t) {
    const s = this.ticks || [];
    if (t >= 0 && t < s.length) {
      const i = s[t];
      return i.$context || (i.$context = mc(this.getContext(), t, i));
    }
    return this.$context || (this.$context = gc(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      s = Xt(this.labelRotation),
      i = Math.abs(Math.cos(s)),
      n = Math.abs(Math.sin(s)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      l = o ? o.highest.height + r : 0;
    return this.isHorizontal()
      ? l * i > a * n
        ? a / i
        : l / n
      : l * n < a * i
      ? l / i
      : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const s = this.axis,
      i = this.chart,
      n = this.options,
      { grid: o, position: r, border: a } = n,
      l = o.offset,
      h = this.isHorizontal(),
      d = this.ticks.length + (l ? 1 : 0),
      u = Be(o),
      f = [],
      g = a.setContext(this.getContext()),
      m = g.display ? g.width : 0,
      p = m / 2,
      b = function (it) {
        return re(i, it, m);
      };
    let w, S, D, v, O, P, C, L, z, A, N, at;
    if (r === "top")
      (w = b(this.bottom)),
        (P = this.bottom - u),
        (L = w - p),
        (A = b(t.top) + p),
        (at = t.bottom);
    else if (r === "bottom")
      (w = b(this.top)),
        (A = t.top),
        (at = b(t.bottom) - p),
        (P = w + p),
        (L = this.top + u);
    else if (r === "left")
      (w = b(this.right)),
        (O = this.right - u),
        (C = w - p),
        (z = b(t.left) + p),
        (N = t.right);
    else if (r === "right")
      (w = b(this.left)),
        (z = t.left),
        (N = b(t.right) - p),
        (O = w + p),
        (C = this.left + u);
    else if (s === "x") {
      if (r === "center") w = b((t.top + t.bottom) / 2 + 0.5);
      else if (I(r)) {
        const it = Object.keys(r)[0],
          gt = r[it];
        w = b(this.chart.scales[it].getPixelForValue(gt));
      }
      (A = t.top), (at = t.bottom), (P = w + p), (L = P + u);
    } else if (s === "y") {
      if (r === "center") w = b((t.left + t.right) / 2);
      else if (I(r)) {
        const it = Object.keys(r)[0],
          gt = r[it];
        w = b(this.chart.scales[it].getPixelForValue(gt));
      }
      (O = w - p), (C = O - u), (z = t.left), (N = t.right);
    }
    const St = W(n.ticks.maxTicksLimit, d),
      Z = Math.max(1, Math.ceil(d / St));
    for (S = 0; S < d; S += Z) {
      const it = this.getContext(S),
        gt = o.setContext(it),
        ps = a.setContext(it),
        _s = gt.lineWidth,
        xe = gt.color,
        bs = ps.dash || [],
        we = ps.dashOffset,
        Ne = gt.tickWidth,
        ie = gt.tickColor,
        We = gt.tickBorderDash || [],
        ne = gt.tickBorderDashOffset;
      (D = uc(this, S, l)),
        D !== void 0 &&
          ((v = re(i, D, _s)),
          h ? (O = C = z = N = v) : (P = L = A = at = v),
          f.push({
            tx1: O,
            ty1: P,
            tx2: C,
            ty2: L,
            x1: z,
            y1: A,
            x2: N,
            y2: at,
            width: _s,
            color: xe,
            borderDash: bs,
            borderDashOffset: we,
            tickWidth: Ne,
            tickColor: ie,
            tickBorderDash: We,
            tickBorderDashOffset: ne,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = w), f;
  }
  _computeLabelItems(t) {
    const s = this.axis,
      i = this.options,
      { position: n, ticks: o } = i,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: h, padding: c, mirror: d } = o,
      u = Be(i.grid),
      f = u + c,
      g = d ? -c : f,
      m = -Xt(this.labelRotation),
      p = [];
    let b,
      w,
      S,
      D,
      v,
      O,
      P,
      C,
      L,
      z,
      A,
      N,
      at = "middle";
    if (n === "top")
      (O = this.bottom - g), (P = this._getXAxisLabelAlignment());
    else if (n === "bottom")
      (O = this.top + g), (P = this._getXAxisLabelAlignment());
    else if (n === "left") {
      const Z = this._getYAxisLabelAlignment(u);
      (P = Z.textAlign), (v = Z.x);
    } else if (n === "right") {
      const Z = this._getYAxisLabelAlignment(u);
      (P = Z.textAlign), (v = Z.x);
    } else if (s === "x") {
      if (n === "center") O = (t.top + t.bottom) / 2 + f;
      else if (I(n)) {
        const Z = Object.keys(n)[0],
          it = n[Z];
        O = this.chart.scales[Z].getPixelForValue(it) + f;
      }
      P = this._getXAxisLabelAlignment();
    } else if (s === "y") {
      if (n === "center") v = (t.left + t.right) / 2 - f;
      else if (I(n)) {
        const Z = Object.keys(n)[0],
          it = n[Z];
        v = this.chart.scales[Z].getPixelForValue(it);
      }
      P = this._getYAxisLabelAlignment(u).textAlign;
    }
    s === "y" &&
      (l === "start" ? (at = "top") : l === "end" && (at = "bottom"));
    const St = this._getLabelSizes();
    for (b = 0, w = a.length; b < w; ++b) {
      (S = a[b]), (D = S.label);
      const Z = o.setContext(this.getContext(b));
      (C = this.getPixelForTick(b) + o.labelOffset),
        (L = this._resolveTickFontOptions(b)),
        (z = L.lineHeight),
        (A = K(D) ? D.length : 1);
      const it = A / 2,
        gt = Z.color,
        ps = Z.textStrokeColor,
        _s = Z.textStrokeWidth;
      let xe = P;
      r
        ? ((v = C),
          P === "inner" &&
            (b === w - 1
              ? (xe = this.options.reverse ? "left" : "right")
              : b === 0
              ? (xe = this.options.reverse ? "right" : "left")
              : (xe = "center")),
          n === "top"
            ? h === "near" || m !== 0
              ? (N = -A * z + z / 2)
              : h === "center"
              ? (N = -St.highest.height / 2 - it * z + z)
              : (N = -St.highest.height + z / 2)
            : h === "near" || m !== 0
            ? (N = z / 2)
            : h === "center"
            ? (N = St.highest.height / 2 - it * z)
            : (N = St.highest.height - A * z),
          d && (N *= -1),
          m !== 0 && !Z.showLabelBackdrop && (v += (z / 2) * Math.sin(m)))
        : ((O = C), (N = ((1 - A) * z) / 2));
      let bs;
      if (Z.showLabelBackdrop) {
        const we = rt(Z.backdropPadding),
          Ne = St.heights[b],
          ie = St.widths[b];
        let We = N - we.top,
          ne = 0 - we.left;
        switch (at) {
          case "middle":
            We -= Ne / 2;
            break;
          case "bottom":
            We -= Ne;
            break;
        }
        switch (P) {
          case "center":
            ne -= ie / 2;
            break;
          case "right":
            ne -= ie;
            break;
          case "inner":
            b === w - 1 ? (ne -= ie) : b > 0 && (ne -= ie / 2);
            break;
        }
        bs = {
          left: ne,
          top: We,
          width: ie + we.width,
          height: Ne + we.height,
          color: Z.backdropColor,
        };
      }
      p.push({
        label: D,
        font: L,
        textOffset: N,
        options: {
          rotation: m,
          color: gt,
          strokeColor: ps,
          strokeWidth: _s,
          textAlign: xe,
          textBaseline: at,
          translation: [v, O],
          backdrop: bs,
        },
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: s } = this.options;
    if (-Xt(this.labelRotation)) return t === "top" ? "left" : "right";
    let n = "center";
    return (
      s.align === "start"
        ? (n = "left")
        : s.align === "end"
        ? (n = "right")
        : s.align === "inner" && (n = "inner"),
      n
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: s,
        ticks: { crossAlign: i, mirror: n, padding: o },
      } = this.options,
      r = this._getLabelSizes(),
      a = t + o,
      l = r.widest.width;
    let h, c;
    return (
      s === "left"
        ? n
          ? ((c = this.right + o),
            i === "near"
              ? (h = "left")
              : i === "center"
              ? ((h = "center"), (c += l / 2))
              : ((h = "right"), (c += l)))
          : ((c = this.right - a),
            i === "near"
              ? (h = "right")
              : i === "center"
              ? ((h = "center"), (c -= l / 2))
              : ((h = "left"), (c = this.left)))
        : s === "right"
        ? n
          ? ((c = this.left + o),
            i === "near"
              ? (h = "right")
              : i === "center"
              ? ((h = "center"), (c -= l / 2))
              : ((h = "left"), (c -= l)))
          : ((c = this.left + a),
            i === "near"
              ? (h = "left")
              : i === "center"
              ? ((h = "center"), (c += l / 2))
              : ((h = "right"), (c = this.right)))
        : (h = "right"),
      { textAlign: h, x: c }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      s = this.options.position;
    if (s === "left" || s === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (s === "top" || s === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: s },
      left: i,
      top: n,
      width: o,
      height: r,
    } = this;
    s && (t.save(), (t.fillStyle = s), t.fillRect(i, n, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const s = this.options.grid;
    if (!this._isVisible() || !s.display) return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? s.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const s = this.options.grid,
      i = this.ctx,
      n =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, h, c) => {
      !c.width ||
        !c.color ||
        (i.save(),
        (i.lineWidth = c.width),
        (i.strokeStyle = c.color),
        i.setLineDash(c.borderDash || []),
        (i.lineDashOffset = c.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(h.x, h.y),
        i.stroke(),
        i.restore());
    };
    if (s.display)
      for (o = 0, r = n.length; o < r; ++o) {
        const l = n[o];
        s.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          s.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: s,
        options: { border: i, grid: n },
      } = this,
      o = i.setContext(this.getContext()),
      r = i.display ? o.width : 0;
    if (!r) return;
    const a = n.setContext(this.getContext(0)).lineWidth,
      l = this._borderValue;
    let h, c, d, u;
    this.isHorizontal()
      ? ((h = re(t, this.left, r) - r / 2),
        (c = re(t, this.right, a) + a / 2),
        (d = u = l))
      : ((d = re(t, this.top, r) - r / 2),
        (u = re(t, this.bottom, a) + a / 2),
        (h = c = l)),
      s.save(),
      (s.lineWidth = o.width),
      (s.strokeStyle = o.color),
      s.beginPath(),
      s.moveTo(h, d),
      s.lineTo(c, u),
      s.stroke(),
      s.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const i = this.ctx,
      n = this._computeLabelArea();
    n && qi(i, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options,
        l = r.font,
        h = r.label,
        c = r.textOffset;
      pe(i, h, 0, c, l, a);
    }
    n && Qi(i);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: s, title: i, reverse: n },
    } = this;
    if (!i.display) return;
    const o = J(i.font),
      r = rt(i.padding),
      a = i.align;
    let l = o.lineHeight / 2;
    s === "bottom" || s === "center" || I(s)
      ? ((l += r.bottom),
        K(i.text) && (l += o.lineHeight * (i.text.length - 1)))
      : (l += r.top);
    const {
      titleX: h,
      titleY: c,
      maxWidth: d,
      rotation: u,
    } = _c(this, l, s, a);
    pe(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: d,
      rotation: u,
      textAlign: pc(a, s, n),
      textBaseline: "middle",
      translation: [h, c],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      s = (t.ticks && t.ticks.z) || 0,
      i = W(t.grid && t.grid.z, -1),
      n = W(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== be.prototype.draw
      ? [
          {
            z: s,
            draw: (o) => {
              this.draw(o);
            },
          },
        ]
      : [
          {
            z: i,
            draw: (o) => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle();
            },
          },
          {
            z: n,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: s,
            draw: (o) => {
              this.drawLabels(o);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const s = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + "AxisID",
      n = [];
    let o, r;
    for (o = 0, r = s.length; o < r; ++o) {
      const a = s[o];
      a[i] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const s = this.options.ticks.setContext(this.getContext(t));
    return J(s.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Os {
  constructor(t, s, i) {
    (this.type = t),
      (this.scope = s),
      (this.override = i),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const s = Object.getPrototypeOf(t);
    let i;
    xc(s) && (i = this.register(s));
    const n = this.items,
      o = t.id,
      r = this.scope + "." + o;
    if (!o) throw new Error("class does not have id: " + t);
    return (
      o in n ||
        ((n[o] = t),
        bc(t, r, i),
        this.override && X.override(t.id, t.overrides)),
      r
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const s = this.items,
      i = t.id,
      n = this.scope;
    i in s && delete s[i],
      n && i in X[n] && (delete X[n][i], this.override && delete me[i]);
  }
}
function bc(e, t, s) {
  const i = es(Object.create(null), [s ? X.get(s) : {}, X.get(t), e.defaults]);
  X.set(t, i),
    e.defaultRoutes && yc(t, e.defaultRoutes),
    e.descriptors && X.describe(t, e.descriptors);
}
function yc(e, t) {
  Object.keys(t).forEach((s) => {
    const i = s.split("."),
      n = i.pop(),
      o = [e].concat(i).join("."),
      r = t[s].split("."),
      a = r.pop(),
      l = r.join(".");
    X.route(o, n, l, a);
  });
}
function xc(e) {
  return "id" in e && "defaults" in e;
}
class wc {
  constructor() {
    (this.controllers = new Os(Mr, "datasets", !0)),
      (this.elements = new Os(Re, "elements")),
      (this.plugins = new Os(Object, "plugins")),
      (this.scales = new Os(be, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, s, i) {
    [...s].forEach((n) => {
      const o = i || this._getRegistryForType(n);
      i || o.isForType(n) || (o === this.plugins && n.id)
        ? this._exec(t, o, n)
        : j(n, (r) => {
            const a = i || this._getRegistryForType(r);
            this._exec(t, a, r);
          });
    });
  }
  _exec(t, s, i) {
    const n = $i(t);
    V(i["before" + n], [], i), s[t](i), V(i["after" + n], [], i);
  }
  _getRegistryForType(t) {
    for (let s = 0; s < this._typedRegistries.length; s++) {
      const i = this._typedRegistries[s];
      if (i.isForType(t)) return i;
    }
    return this.plugins;
  }
  _get(t, s, i) {
    const n = s.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return n;
  }
}
var Ot = new wc();
class kc {
  constructor() {
    this._init = [];
  }
  notify(t, s, i, n) {
    s === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t),
      r = this._notify(o, t, s, i);
    return (
      s === "afterDestroy" &&
        (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")),
      r
    );
  }
  _notify(t, s, i, n) {
    n = n || {};
    for (const o of t) {
      const r = o.plugin,
        a = r[i],
        l = [s, n, o.options];
      if (V(a, l, r) === !1 && n.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    H(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const s = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), s;
  }
  _createDescriptors(t, s) {
    const i = t && t.config,
      n = W(i.options && i.options.plugins, {}),
      o = vc(i);
    return n === !1 && !s ? [] : Sc(t, o, n, s);
  }
  _notifyStateChanges(t) {
    const s = this._oldCache || [],
      i = this._cache,
      n = (o, r) =>
        o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(s, i), t, "stop"), this._notify(n(i, s), t, "start");
  }
}
function vc(e) {
  const t = {},
    s = [],
    i = Object.keys(Ot.plugins.items);
  for (let o = 0; o < i.length; o++) s.push(Ot.getPlugin(i[o]));
  const n = e.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    s.indexOf(r) === -1 && (s.push(r), (t[r.id] = !0));
  }
  return { plugins: s, localIds: t };
}
function Mc(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function Sc(e, { plugins: t, localIds: s }, i, n) {
  const o = [],
    r = e.getContext();
  for (const a of t) {
    const l = a.id,
      h = Mc(i[l], n);
    h !== null &&
      o.push({
        plugin: a,
        options: Dc(e.config, { plugin: a, local: s[l] }, h, r),
      });
  }
  return o;
}
function Dc(e, { plugin: t, local: s }, i, n) {
  const o = e.pluginScopeKeys(t),
    r = e.getOptionScopes(i, o);
  return (
    s && t.defaults && r.push(t.defaults),
    e.createResolver(r, n, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Ai(e, t) {
  const s = X.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || s.indexAxis || "x"
  );
}
function Oc(e, t) {
  let s = e;
  return (
    e === "_index_" ? (s = t) : e === "_value_" && (s = t === "x" ? "y" : "x"),
    s
  );
}
function Cc(e, t) {
  return e === t ? "_index_" : "_value_";
}
function _o(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function Pc(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function Ri(e, ...t) {
  if (_o(e)) return e;
  for (const s of t) {
    const i =
      s.axis || Pc(s.position) || (e.length > 1 && _o(e[0].toLowerCase()));
    if (i) return i;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function bo(e, t, s) {
  if (s[t + "AxisID"] === e) return { axis: t };
}
function Tc(e, t) {
  if (t.data && t.data.datasets) {
    const s = t.data.datasets.filter((i) => i.xAxisID === e || i.yAxisID === e);
    if (s.length) return bo(e, "x", s[0]) || bo(e, "y", s[0]);
  }
  return {};
}
function Fc(e, t) {
  const s = me[e.type] || { scales: {} },
    i = t.scales || {},
    n = Ai(e.type, t),
    o = Object.create(null);
  return (
    Object.keys(i).forEach((r) => {
      const a = i[r];
      if (!I(a))
        return console.error(`Invalid scale configuration for scale: ${r}`);
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${r}`
        );
      const l = Ri(r, a, Tc(r, e), X.scales[a.type]),
        h = Cc(l, n),
        c = s.scales || {};
      o[r] = Ze(Object.create(null), [{ axis: l }, a, c[l], c[h]]);
    }),
    e.data.datasets.forEach((r) => {
      const a = r.type || e.type,
        l = r.indexAxis || Ai(a, t),
        c = (me[a] || {}).scales || {};
      Object.keys(c).forEach((d) => {
        const u = Oc(d, l),
          f = r[u + "AxisID"] || u;
        (o[f] = o[f] || Object.create(null)),
          Ze(o[f], [{ axis: u }, i[f], c[d]]);
      });
    }),
    Object.keys(o).forEach((r) => {
      const a = o[r];
      Ze(a, [X.scales[a.type], X.scale]);
    }),
    o
  );
}
function Fr(e) {
  const t = e.options || (e.options = {});
  (t.plugins = W(t.plugins, {})), (t.scales = Fc(e, t));
}
function Lr(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function Lc(e) {
  return (e = e || {}), (e.data = Lr(e.data)), Fr(e), e;
}
const yo = new Map(),
  Ar = new Set();
function Cs(e, t) {
  let s = yo.get(e);
  return s || ((s = t()), yo.set(e, s), Ar.add(s)), s;
}
const Ve = (e, t, s) => {
  const i = Le(t, s);
  i !== void 0 && e.add(i);
};
class Ac {
  constructor(t) {
    (this._config = Lc(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Lr(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Fr(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Cs(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, s) {
    return Cs(`${t}.transition.${s}`, () => [
      [`datasets.${t}.transitions.${s}`, `transitions.${s}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, s) {
    return Cs(`${t}-${s}`, () => [
      [`datasets.${t}.elements.${s}`, `datasets.${t}`, `elements.${s}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const s = t.id,
      i = this.type;
    return Cs(`${i}-plugin-${s}`, () => [
      [`plugins.${s}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, s) {
    const i = this._scopeCache;
    let n = i.get(t);
    return (!n || s) && ((n = new Map()), i.set(t, n)), n;
  }
  getOptionScopes(t, s, i) {
    const { options: n, type: o } = this,
      r = this._cachedScopes(t, i),
      a = r.get(s);
    if (a) return a;
    const l = new Set();
    s.forEach((c) => {
      t && (l.add(t), c.forEach((d) => Ve(l, t, d))),
        c.forEach((d) => Ve(l, n, d)),
        c.forEach((d) => Ve(l, me[o] || {}, d)),
        c.forEach((d) => Ve(l, X, d)),
        c.forEach((d) => Ve(l, Li, d));
    });
    const h = Array.from(l);
    return (
      h.length === 0 && h.push(Object.create(null)), Ar.has(s) && r.set(s, h), h
    );
  }
  chartOptionScopes() {
    const { options: t, type: s } = this;
    return [t, me[s] || {}, X.datasets[s] || {}, { type: s }, X, Li];
  }
  resolveNamedOptions(t, s, i, n = [""]) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: a } = xo(this._resolverCache, t, n);
    let l = r;
    if (Ic(r, s)) {
      (o.$shared = !1), (i = se(i) ? i() : i);
      const h = this.createResolver(t, i, a);
      l = Ae(r, i, h);
    }
    for (const h of s) o[h] = l[h];
    return o;
  }
  createResolver(t, s, i = [""], n) {
    const { resolver: o } = xo(this._resolverCache, t, i);
    return I(s) ? Ae(o, s, void 0, n) : o;
  }
}
function xo(e, t, s) {
  let i = e.get(t);
  i || ((i = new Map()), e.set(t, i));
  const n = s.join();
  let o = i.get(n);
  return (
    o ||
      ((o = {
        resolver: Ji(t, s),
        subPrefixes: s.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      i.set(n, o)),
    o
  );
}
const Rc = (e) => I(e) && Object.getOwnPropertyNames(e).some((t) => se(e[t]));
function Ic(e, t) {
  const { isScriptable: s, isIndexable: i } = pr(e);
  for (const n of t) {
    const o = s(n),
      r = i(n),
      a = (r || o) && e[n];
    if ((o && (se(a) || Rc(a))) || (r && K(a))) return !0;
  }
  return !1;
}
var Yc = "4.4.3";
const Ec = ["top", "bottom", "left", "right", "chartArea"];
function wo(e, t) {
  return e === "top" || e === "bottom" || (Ec.indexOf(e) === -1 && t === "x");
}
function ko(e, t) {
  return function (s, i) {
    return s[e] === i[e] ? s[t] - i[t] : s[e] - i[e];
  };
}
function vo(e) {
  const t = e.chart,
    s = t.options.animation;
  t.notifyPlugins("afterRender"), V(s && s.onComplete, [e], t);
}
function Nc(e) {
  const t = e.chart,
    s = t.options.animation;
  V(s && s.onProgress, [e], t);
}
function Rr(e) {
  return (
    sn() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Es = {},
  Mo = (e) => {
    const t = Rr(e);
    return Object.values(Es)
      .filter((s) => s.canvas === t)
      .pop();
  };
function Wc(e, t, s) {
  const i = Object.keys(e);
  for (const n of i) {
    const o = +n;
    if (o >= t) {
      const r = e[n];
      delete e[n], (s > 0 || o > t) && (e[o + s] = r);
    }
  }
}
function jc(e, t, s, i) {
  return !s || e.type === "mouseout" ? null : i ? t : e;
}
function Ps(e, t, s) {
  return e.options.clip ? e[s] : t[s];
}
function zc(e, t) {
  const { xScale: s, yScale: i } = e;
  return s && i
    ? {
        left: Ps(s, t, "left"),
        right: Ps(s, t, "right"),
        top: Ps(i, t, "top"),
        bottom: Ps(i, t, "bottom"),
      }
    : t;
}
let rn = class {
  static defaults = X;
  static instances = Es;
  static overrides = me;
  static registry = Ot;
  static version = Yc;
  static getChart = Mo;
  static register(...t) {
    Ot.add(...t), So();
  }
  static unregister(...t) {
    Ot.remove(...t), So();
  }
  constructor(t, s) {
    const i = (this.config = new Ac(s)),
      n = Rr(t),
      o = Mo(n);
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas with ID '" +
          o.canvas.id +
          "' can be reused."
      );
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    (this.platform = new (i.platform || nc(n))()),
      this.platform.updateConfig(i);
    const a = this.platform.acquireContext(n, r.aspectRatio),
      l = a && a.canvas,
      h = l && l.height,
      c = l && l.width;
    if (
      ((this.id = rl()),
      (this.ctx = a),
      (this.canvas = l),
      (this.width = c),
      (this.height = h),
      (this._options = r),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new kc()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = vl((d) => this.update(d), r.resizeDelay || 0)),
      (this._dataChanges = []),
      (Es[this.id] = this),
      !a || !l)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item"
      );
      return;
    }
    Yt.listen(this, "complete", vo),
      Yt.listen(this, "progress", Nc),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: s },
      width: i,
      height: n,
      _aspectRatio: o,
    } = this;
    return H(t) ? (s && o ? o : n ? i / n : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Ot;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : Kn(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return Vn(this.canvas, this.ctx), this;
  }
  stop() {
    return Yt.stop(this), this;
  }
  resize(t, s) {
    Yt.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: s })
      : this._resize(t, s);
  }
  _resize(t, s) {
    const i = this.options,
      n = this.canvas,
      o = i.maintainAspectRatio && this.aspectRatio,
      r = this.platform.getMaximumSize(n, t, s, o),
      a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
      l = this.width ? "resize" : "attach";
    (this.width = r.width),
      (this.height = r.height),
      (this._aspectRatio = this.aspectRatio),
      Kn(this, a, !0) &&
        (this.notifyPlugins("resize", { size: r }),
        V(i.onResize, [this, r], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const s = this.options.scales || {};
    j(s, (i, n) => {
      i.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      s = t.scales,
      i = this.scales,
      n = Object.keys(i).reduce((r, a) => ((r[a] = !1), r), {});
    let o = [];
    s &&
      (o = o.concat(
        Object.keys(s).map((r) => {
          const a = s[r],
            l = Ri(r, a),
            h = l === "r",
            c = l === "x";
          return {
            options: a,
            dposition: h ? "chartArea" : c ? "bottom" : "left",
            dtype: h ? "radialLinear" : c ? "category" : "linear",
          };
        })
      )),
      j(o, (r) => {
        const a = r.options,
          l = a.id,
          h = Ri(l, a),
          c = W(a.type, r.dtype);
        (a.position === void 0 || wo(a.position, h) !== wo(r.dposition)) &&
          (a.position = r.dposition),
          (n[l] = !0);
        let d = null;
        if (l in i && i[l].type === c) d = i[l];
        else {
          const u = Ot.getScale(c);
          (d = new u({ id: l, type: c, ctx: this.ctx, chart: this })),
            (i[d.id] = d);
        }
        d.init(a, t);
      }),
      j(n, (r, a) => {
        r || delete i[a];
      }),
      j(i, (r) => {
        _t.configure(this, r, r.options), _t.addBox(this, r);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      s = this.data.datasets.length,
      i = t.length;
    if ((t.sort((n, o) => n.index - o.index), i > s)) {
      for (let n = s; n < i; ++n) this._destroyDatasetMeta(n);
      t.splice(s, i - s);
    }
    this._sortedMetasets = t.slice(0).sort(ko("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: s },
    } = this;
    t.length > s.length && delete this._stacks,
      t.forEach((i, n) => {
        s.filter((o) => o === i._dataset).length === 0 &&
          this._destroyDatasetMeta(n);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      s = this.data.datasets;
    let i, n;
    for (this._removeUnreferencedMetasets(), i = 0, n = s.length; i < n; i++) {
      const o = s[i];
      let r = this.getDatasetMeta(i);
      const a = o.type || this.config.type;
      if (
        (r.type &&
          r.type !== a &&
          (this._destroyDatasetMeta(i), (r = this.getDatasetMeta(i))),
        (r.type = a),
        (r.indexAxis = o.indexAxis || Ai(a, this.options)),
        (r.order = o.order || 0),
        (r.index = i),
        (r.label = "" + o.label),
        (r.visible = this.isDatasetVisible(i)),
        r.controller)
      )
        r.controller.updateIndex(i), r.controller.linkScales();
      else {
        const l = Ot.getController(a),
          { datasetElementType: h, dataElementType: c } = X.datasets[a];
        Object.assign(l, {
          dataElementType: Ot.getElement(c),
          datasetElementType: h && Ot.getElement(h),
        }),
          (r.controller = new l(this, i)),
          t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    j(
      this.data.datasets,
      (t, s) => {
        this.getDatasetMeta(s).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const s = this.config;
    s.update();
    const i = (this._options = s.createResolver(
        s.chartOptionScopes(),
        this.getContext()
      )),
      n = (this._animationsDisabled = !i.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let h = 0, c = this.data.datasets.length; h < c; h++) {
      const { controller: d } = this.getDatasetMeta(h),
        u = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), (r = Math.max(+d.getMaxOverflow(), r));
    }
    (r = this._minPadding = i.layout.autoPadding ? r : 0),
      this._updateLayout(r),
      n ||
        j(o, (h) => {
          h.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins("afterUpdate", { mode: t }),
      this._layers.sort(ko("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l
      ? this._eventHandler(l, !0)
      : a.length && this._updateHoverStyles(a, a, !0),
      this.render();
  }
  _updateScales() {
    j(this.scales, (t) => {
      _t.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      s = new Set(Object.keys(this._listeners)),
      i = new Set(t.events);
    (!In(s, i) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      s = this._getUniformDataChanges() || [];
    for (const { method: i, start: n, count: o } of s) {
      const r = i === "_removeElements" ? -o : o;
      Wc(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const s = this.data.datasets.length,
      i = (o) =>
        new Set(
          t
            .filter((r) => r[0] === o)
            .map((r, a) => a + "," + r.splice(1).join(","))
        ),
      n = i(0);
    for (let o = 1; o < s; o++) if (!In(n, i(o))) return;
    return Array.from(n)
      .map((o) => o.split(","))
      .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    _t.update(this, this.width, this.height, t);
    const s = this.chartArea,
      i = s.width <= 0 || s.height <= 0;
    (this._layers = []),
      j(
        this.boxes,
        (n) => {
          (i && n.position === "chartArea") ||
            (n.configure && n.configure(), this._layers.push(...n._layers()));
        },
        this
      ),
      this._layers.forEach((n, o) => {
        n._idx = o;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let s = 0, i = this.data.datasets.length; s < i; ++s)
        this.getDatasetMeta(s).controller.configure();
      for (let s = 0, i = this.data.datasets.length; s < i; ++s)
        this._updateDataset(s, se(t) ? t({ datasetIndex: s }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, s) {
    const i = this.getDatasetMeta(t),
      n = { meta: i, index: t, mode: s, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 &&
      (i.controller._update(s),
      (n.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (Yt.has(this)
        ? this.attached && !Yt.running(this) && Yt.start(this)
        : (this.draw(), vo({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: n } = this._resizeBeforeDraw;
      this._resize(i, n), (this._resizeBeforeDraw = null);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const s = this._layers;
    for (t = 0; t < s.length && s[t].z <= 0; ++t) s[t].draw(this.chartArea);
    for (this._drawDatasets(); t < s.length; ++t) s[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const s = this._sortedMetasets,
      i = [];
    let n, o;
    for (n = 0, o = s.length; n < o; ++n) {
      const r = s[n];
      (!t || r.visible) && i.push(r);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let s = t.length - 1; s >= 0; --s) this._drawDataset(t[s]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const s = this.ctx,
      i = t._clip,
      n = !i.disabled,
      o = zc(t, this.chartArea),
      r = { meta: t, index: t.index, cancelable: !0 };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 &&
      (n &&
        qi(s, {
          left: i.left === !1 ? 0 : o.left - i.left,
          right: i.right === !1 ? this.width : o.right + i.right,
          top: i.top === !1 ? 0 : o.top - i.top,
          bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom,
        }),
      t.controller.draw(),
      n && Qi(s),
      (r.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return De(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, s, i, n) {
    const o = Eh.modes[s];
    return typeof o == "function" ? o(this, t, i, n) : [];
  }
  getDatasetMeta(t) {
    const s = this.data.datasets[t],
      i = this._metasets;
    let n = i.filter((o) => o && o._dataset === s).pop();
    return (
      n ||
        ((n = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (s && s.order) || 0,
          index: t,
          _dataset: s,
          _parsed: [],
          _sorted: !1,
        }),
        i.push(n)),
      n
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = _e(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const s = this.data.datasets[t];
    if (!s) return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !s.hidden;
  }
  setDatasetVisibility(t, s) {
    const i = this.getDatasetMeta(t);
    i.hidden = !s;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, s, i) {
    const n = i ? "show" : "hide",
      o = this.getDatasetMeta(t),
      r = o.controller._resolveAnimations(void 0, n);
    ss(s)
      ? ((o.data[s].hidden = !i), this.update())
      : (this.setDatasetVisibility(t, i),
        r.update(o, { visible: i }),
        this.update((a) => (a.datasetIndex === t ? n : void 0)));
  }
  hide(t, s) {
    this._updateVisibility(t, s, !1);
  }
  show(t, s) {
    this._updateVisibility(t, s, !0);
  }
  _destroyDatasetMeta(t) {
    const s = this._metasets[t];
    s && s.controller && s.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, s;
    for (
      this.stop(), Yt.remove(this), t = 0, s = this.data.datasets.length;
      t < s;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: s } = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        Vn(t, s),
        this.platform.releaseContext(s),
        (this.canvas = null),
        (this.ctx = null)),
      delete Es[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      s = this.platform,
      i = (o, r) => {
        s.addEventListener(this, o, r), (t[o] = r);
      },
      n = (o, r, a) => {
        (o.offsetX = r), (o.offsetY = a), this._eventHandler(o);
      };
    j(this.options.events, (o) => i(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      s = this.platform,
      i = (l, h) => {
        s.addEventListener(this, l, h), (t[l] = h);
      },
      n = (l, h) => {
        t[l] && (s.removeEventListener(this, l, h), delete t[l]);
      },
      o = (l, h) => {
        this.canvas && this.resize(l, h);
      };
    let r;
    const a = () => {
      n("attach", a),
        (this.attached = !0),
        this.resize(),
        i("resize", o),
        i("detach", r);
    };
    (r = () => {
      (this.attached = !1),
        n("resize", o),
        this._stop(),
        this._resize(0, 0),
        i("attach", a);
    }),
      s.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    j(this._listeners, (t, s) => {
      this.platform.removeEventListener(this, s, t);
    }),
      (this._listeners = {}),
      j(this._responsiveListeners, (t, s) => {
        this.platform.removeEventListener(this, s, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, s, i) {
    const n = i ? "set" : "remove";
    let o, r, a, l;
    for (
      s === "dataset" &&
        ((o = this.getDatasetMeta(t[0].datasetIndex)),
        o.controller["_" + n + "DatasetHoverStyle"]()),
        a = 0,
        l = t.length;
      a < l;
      ++a
    ) {
      r = t[a];
      const h = r && this.getDatasetMeta(r.datasetIndex).controller;
      h && h[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const s = this._active || [],
      i = t.map(({ datasetIndex: o, index: r }) => {
        const a = this.getDatasetMeta(o);
        if (!a) throw new Error("No dataset found at index " + o);
        return { datasetIndex: o, element: a.data[r], index: r };
      });
    !zs(i, s) &&
      ((this._active = i),
      (this._lastEvent = null),
      this._updateHoverStyles(i, s));
  }
  notifyPlugins(t, s, i) {
    return this._plugins.notify(this, t, s, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((s) => s.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, s, i) {
    const n = this.options.hover,
      o = (l, h) =>
        l.filter(
          (c) =>
            !h.some(
              (d) => c.datasetIndex === d.datasetIndex && c.index === d.index
            )
        ),
      r = o(s, t),
      a = i ? t : o(t, s);
    r.length && this.updateHoverStyle(r, n.mode, !1),
      a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, s) {
    const i = {
        event: t,
        replay: s,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      n = (r) =>
        (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, n) === !1) return;
    const o = this._handleEvent(t, s, i.inChartArea);
    return (
      (i.cancelable = !1),
      this.notifyPlugins("afterEvent", i, n),
      (o || i.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, s, i) {
    const { _active: n = [], options: o } = this,
      r = s,
      a = this._getActiveElements(t, n, i, r),
      l = ul(t),
      h = jc(t, this._lastEvent, i, l);
    i &&
      ((this._lastEvent = null),
      V(o.onHover, [t, a, this], this),
      l && V(o.onClick, [t, a, this], this));
    const c = !zs(a, n);
    return (
      (c || s) && ((this._active = a), this._updateHoverStyles(a, n, s)),
      (this._lastEvent = h),
      c
    );
  }
  _getActiveElements(t, s, i, n) {
    if (t.type === "mouseout") return [];
    if (!i) return s;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
};
function So() {
  return j(rn.instances, (e) => e._plugins.invalidate());
}
function Ir(e, t) {
  const {
    x: s,
    y: i,
    base: n,
    width: o,
    height: r,
  } = e.getProps(["x", "y", "base", "width", "height"], t);
  let a, l, h, c, d;
  return (
    e.horizontal
      ? ((d = r / 2),
        (a = Math.min(s, n)),
        (l = Math.max(s, n)),
        (h = i - d),
        (c = i + d))
      : ((d = o / 2),
        (a = s - d),
        (l = s + d),
        (h = Math.min(i, n)),
        (c = Math.max(i, n))),
    { left: a, top: h, right: l, bottom: c }
  );
}
function Zt(e, t, s, i) {
  return e ? 0 : xt(t, s, i);
}
function Hc(e, t, s) {
  const i = e.options.borderWidth,
    n = e.borderSkipped,
    o = mr(i);
  return {
    t: Zt(n.top, o.top, 0, s),
    r: Zt(n.right, o.right, 0, t),
    b: Zt(n.bottom, o.bottom, 0, s),
    l: Zt(n.left, o.left, 0, t),
  };
}
function Bc(e, t, s) {
  const { enableBorderRadius: i } = e.getProps(["enableBorderRadius"]),
    n = e.options.borderRadius,
    o = ue(n),
    r = Math.min(t, s),
    a = e.borderSkipped,
    l = i || I(n);
  return {
    topLeft: Zt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Zt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Zt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Zt(!l || a.bottom || a.right, o.bottomRight, 0, r),
  };
}
function Vc(e) {
  const t = Ir(e),
    s = t.right - t.left,
    i = t.bottom - t.top,
    n = Hc(e, s / 2, i / 2),
    o = Bc(e, s / 2, i / 2);
  return {
    outer: { x: t.left, y: t.top, w: s, h: i, radius: o },
    inner: {
      x: t.left + n.l,
      y: t.top + n.t,
      w: s - n.l - n.r,
      h: i - n.t - n.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r)),
      },
    },
  };
}
function Mi(e, t, s, i) {
  const n = t === null,
    o = s === null,
    a = e && !(n && o) && Ir(e, i);
  return a && (n || Se(t, a.left, a.right)) && (o || Se(s, a.top, a.bottom));
}
function Uc(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function $c(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Si(e, t, s = {}) {
  const i = e.x !== s.x ? -t : 0,
    n = e.y !== s.y ? -t : 0,
    o = (e.x + e.w !== s.x + s.w ? t : 0) - i,
    r = (e.y + e.h !== s.y + s.h ? t : 0) - n;
  return { x: e.x + i, y: e.y + n, w: e.w + o, h: e.h + r, radius: e.radius };
}
class Gc extends Re {
  static id = "bar";
  static defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: s,
        options: { borderColor: i, backgroundColor: n },
      } = this,
      { inner: o, outer: r } = Vc(this),
      a = Uc(r.radius) ? is : $c;
    t.save(),
      (r.w !== o.w || r.h !== o.h) &&
        (t.beginPath(),
        a(t, Si(r, s, o)),
        t.clip(),
        a(t, Si(o, -s, r)),
        (t.fillStyle = i),
        t.fill("evenodd")),
      t.beginPath(),
      a(t, Si(o, s)),
      (t.fillStyle = n),
      t.fill(),
      t.restore();
  }
  inRange(t, s, i) {
    return Mi(this, t, s, i);
  }
  inXRange(t, s) {
    return Mi(this, t, null, s);
  }
  inYRange(t, s) {
    return Mi(this, null, t, s);
  }
  getCenterPoint(t) {
    const {
      x: s,
      y: i,
      base: n,
      horizontal: o,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: o ? (s + n) / 2 : s, y: o ? i : (i + n) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
const Do = (e, t) => {
    let { boxHeight: s = t, boxWidth: i = t } = e;
    return (
      e.usePointStyle &&
        ((s = Math.min(s, t)), (i = e.pointStyleWidth || Math.min(i, t))),
      { boxWidth: i, boxHeight: s, itemHeight: Math.max(t, s) }
    );
  },
  Kc = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class Oo extends Re {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, s, i) {
    (this.maxWidth = t),
      (this.maxHeight = s),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let s = V(t.generateLabels, [this.chart], this) || [];
    t.filter && (s = s.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (s = s.sort((i, n) => t.sort(i, n, this.chart.data))),
      this.options.reverse && s.reverse(),
      (this.legendItems = s);
  }
  fit() {
    const { options: t, ctx: s } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels,
      n = J(i.font),
      o = n.size,
      r = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Do(i, o);
    let h, c;
    (s.font = n.string),
      this.isHorizontal()
        ? ((h = this.maxWidth), (c = this._fitRows(r, o, a, l) + 10))
        : ((c = this.maxHeight), (h = this._fitCols(r, n, a, l) + 10)),
      (this.width = Math.min(h, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(c, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, s, i, n) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      h = (this.lineWidths = [0]),
      c = n + a;
    let d = t;
    (o.textAlign = "left"), (o.textBaseline = "middle");
    let u = -1,
      f = -c;
    return (
      this.legendItems.forEach((g, m) => {
        const p = i + s / 2 + o.measureText(g.text).width;
        (m === 0 || h[h.length - 1] + p + 2 * a > r) &&
          ((d += c), (h[h.length - (m > 0 ? 0 : 1)] = 0), (f += c), u++),
          (l[m] = { left: 0, top: f, row: u, width: p, height: n }),
          (h[h.length - 1] += p + a);
      }),
      d
    );
  }
  _fitCols(t, s, i, n) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      h = (this.columnSizes = []),
      c = r - t;
    let d = a,
      u = 0,
      f = 0,
      g = 0,
      m = 0;
    return (
      this.legendItems.forEach((p, b) => {
        const { itemWidth: w, itemHeight: S } = Xc(i, s, o, p, n);
        b > 0 &&
          f + S + 2 * a > c &&
          ((d += u + a),
          h.push({ width: u, height: f }),
          (g += u + a),
          m++,
          (u = f = 0)),
          (l[b] = { left: g, top: f, col: m, width: w, height: S }),
          (u = Math.max(u, w)),
          (f += S + a);
      }),
      (d += u),
      h.push({ width: u, height: f }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: s,
        options: {
          align: i,
          labels: { padding: n },
          rtl: o,
        },
      } = this,
      r = Ce(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = nt(i, this.left + n, this.right - this.lineWidths[a]);
      for (const h of s)
        a !== h.row &&
          ((a = h.row),
          (l = nt(i, this.left + n, this.right - this.lineWidths[a]))),
          (h.top += this.top + t + n),
          (h.left = r.leftForLtr(r.x(l), h.width)),
          (l += h.width + n);
    } else {
      let a = 0,
        l = nt(i, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const h of s)
        h.col !== a &&
          ((a = h.col),
          (l = nt(
            i,
            this.top + t + n,
            this.bottom - this.columnSizes[a].height
          ))),
          (h.top = l),
          (h.left += this.left + n),
          (h.left = r.leftForLtr(r.x(h.left), h.width)),
          (l += h.height + n);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      qi(t, this), this._draw(), Qi(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: s, lineWidths: i, ctx: n } = this,
      { align: o, labels: r } = t,
      a = X.color,
      l = Ce(t.rtl, this.left, this.width),
      h = J(r.font),
      { padding: c } = r,
      d = h.size,
      u = d / 2;
    let f;
    this.drawTitle(),
      (n.textAlign = l.textAlign("left")),
      (n.textBaseline = "middle"),
      (n.lineWidth = 0.5),
      (n.font = h.string);
    const { boxWidth: g, boxHeight: m, itemHeight: p } = Do(r, d),
      b = function (O, P, C) {
        if (isNaN(g) || g <= 0 || isNaN(m) || m < 0) return;
        n.save();
        const L = W(C.lineWidth, 1);
        if (
          ((n.fillStyle = W(C.fillStyle, a)),
          (n.lineCap = W(C.lineCap, "butt")),
          (n.lineDashOffset = W(C.lineDashOffset, 0)),
          (n.lineJoin = W(C.lineJoin, "miter")),
          (n.lineWidth = L),
          (n.strokeStyle = W(C.strokeStyle, a)),
          n.setLineDash(W(C.lineDash, [])),
          r.usePointStyle)
        ) {
          const z = {
              radius: (m * Math.SQRT2) / 2,
              pointStyle: C.pointStyle,
              rotation: C.rotation,
              borderWidth: L,
            },
            A = l.xPlus(O, g / 2),
            N = P + u;
          fr(n, z, A, N, r.pointStyleWidth && g);
        } else {
          const z = P + Math.max((d - m) / 2, 0),
            A = l.leftForLtr(O, g),
            N = ue(C.borderRadius);
          n.beginPath(),
            Object.values(N).some((at) => at !== 0)
              ? is(n, { x: A, y: z, w: g, h: m, radius: N })
              : n.rect(A, z, g, m),
            n.fill(),
            L !== 0 && n.stroke();
        }
        n.restore();
      },
      w = function (O, P, C) {
        pe(n, C.text, O, P + p / 2, h, {
          strikethrough: C.hidden,
          textAlign: l.textAlign(C.textAlign),
        });
      },
      S = this.isHorizontal(),
      D = this._computeTitleHeight();
    S
      ? (f = {
          x: nt(o, this.left + c, this.right - i[0]),
          y: this.top + c + D,
          line: 0,
        })
      : (f = {
          x: this.left + c,
          y: nt(o, this.top + D + c, this.bottom - s[0].height),
          line: 0,
        }),
      xr(this.ctx, t.textDirection);
    const v = p + c;
    this.legendItems.forEach((O, P) => {
      (n.strokeStyle = O.fontColor), (n.fillStyle = O.fontColor);
      const C = n.measureText(O.text).width,
        L = l.textAlign(O.textAlign || (O.textAlign = r.textAlign)),
        z = g + u + C;
      let A = f.x,
        N = f.y;
      l.setWidth(this.width),
        S
          ? P > 0 &&
            A + z + c > this.right &&
            ((N = f.y += v),
            f.line++,
            (A = f.x = nt(o, this.left + c, this.right - i[f.line])))
          : P > 0 &&
            N + v > this.bottom &&
            ((A = f.x = A + s[f.line].width + c),
            f.line++,
            (N = f.y =
              nt(o, this.top + D + c, this.bottom - s[f.line].height)));
      const at = l.x(A);
      if (
        (b(at, N, O),
        (A = Ml(L, A + g + u, S ? A + z : this.right, t.rtl)),
        w(l.x(A), N, O),
        S)
      )
        f.x += z + c;
      else if (typeof O.text != "string") {
        const St = h.lineHeight;
        f.y += Yr(O, St) + c;
      } else f.y += v;
    }),
      wr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      s = t.title,
      i = J(s.font),
      n = rt(s.padding);
    if (!s.display) return;
    const o = Ce(t.rtl, this.left, this.width),
      r = this.ctx,
      a = s.position,
      l = i.size / 2,
      h = n.top + l;
    let c,
      d = this.left,
      u = this.width;
    if (this.isHorizontal())
      (u = Math.max(...this.lineWidths)),
        (c = this.top + h),
        (d = nt(t.align, d, this.right - u));
    else {
      const g = this.columnSizes.reduce((m, p) => Math.max(m, p.height), 0);
      c =
        h +
        nt(
          t.align,
          this.top,
          this.bottom - g - t.labels.padding - this._computeTitleHeight()
        );
    }
    const f = nt(a, d, d + u);
    (r.textAlign = o.textAlign(Xi(a))),
      (r.textBaseline = "middle"),
      (r.strokeStyle = s.color),
      (r.fillStyle = s.color),
      (r.font = i.string),
      pe(r, s.text, f, c, i);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      s = J(t.font),
      i = rt(t.padding);
    return t.display ? s.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, s) {
    let i, n, o;
    if (Se(t, this.left, this.right) && Se(s, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (
          ((n = o[i]),
          Se(t, n.left, n.left + n.width) && Se(s, n.top, n.top + n.height))
        )
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const s = this.options;
    if (!Qc(t.type, s)) return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem,
        o = Kc(n, i);
      n && !o && V(s.onLeave, [t, n, this], this),
        (this._hoveredItem = i),
        i && !o && V(s.onHover, [t, i, this], this);
    } else i && V(s.onClick, [t, i, this], this);
  }
}
function Xc(e, t, s, i, n) {
  const o = Zc(i, e, t, s),
    r = qc(n, i, t.lineHeight);
  return { itemWidth: o, itemHeight: r };
}
function Zc(e, t, s, i) {
  let n = e.text;
  return (
    n &&
      typeof n != "string" &&
      (n = n.reduce((o, r) => (o.length > r.length ? o : r))),
    t + s.size / 2 + i.measureText(n).width
  );
}
function qc(e, t, s) {
  let i = e;
  return typeof t.text != "string" && (i = Yr(t, s)), i;
}
function Yr(e, t) {
  const s = e.text ? e.text.length : 0;
  return t * s;
}
function Qc(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var Jc = {
  id: "legend",
  _element: Oo,
  start(e, t, s) {
    const i = (e.legend = new Oo({ ctx: e.ctx, options: s, chart: e }));
    _t.configure(e, i, s), _t.addBox(e, i);
  },
  stop(e) {
    _t.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, s) {
    const i = e.legend;
    _t.configure(e, i, s), (i.options = s);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, s) {
      const i = t.datasetIndex,
        n = s.chart;
      n.isDatasetVisible(i)
        ? (n.hide(i), (t.hidden = !0))
        : (n.show(i), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: s,
              pointStyle: i,
              textAlign: n,
              color: o,
              useBorderRadius: r,
              borderRadius: a,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const h = l.controller.getStyle(s ? 0 : void 0),
            c = rt(h.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: h.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: h.borderCapStyle,
            lineDash: h.borderDash,
            lineDashOffset: h.borderDashOffset,
            lineJoin: h.borderJoinStyle,
            lineWidth: (c.width + c.height) / 4,
            strokeStyle: h.borderColor,
            pointStyle: i || h.pointStyle,
            rotation: h.rotation,
            textAlign: n || h.textAlign,
            borderRadius: r && (a || h.borderRadius),
            datasetIndex: l.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class Er extends Re {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, s) {
    const i = this.options;
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = s);
    const n = K(i.text) ? i.text.length : 1;
    this._padding = rt(i.padding);
    const o = n * J(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = o) : (this.width = o);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: s, left: i, bottom: n, right: o, options: r } = this,
      a = r.align;
    let l = 0,
      h,
      c,
      d;
    return (
      this.isHorizontal()
        ? ((c = nt(a, i, o)), (d = s + t), (h = o - i))
        : (r.position === "left"
            ? ((c = i + t), (d = nt(a, n, s)), (l = st * -0.5))
            : ((c = o - t), (d = nt(a, s, n)), (l = st * 0.5)),
          (h = n - s)),
      { titleX: c, titleY: d, maxWidth: h, rotation: l }
    );
  }
  draw() {
    const t = this.ctx,
      s = this.options;
    if (!s.display) return;
    const i = J(s.font),
      o = i.lineHeight / 2 + this._padding.top,
      { titleX: r, titleY: a, maxWidth: l, rotation: h } = this._drawArgs(o);
    pe(t, s.text, 0, 0, i, {
      color: s.color,
      maxWidth: l,
      rotation: h,
      textAlign: Xi(s.align),
      textBaseline: "middle",
      translation: [r, a],
    });
  }
}
function td(e, t) {
  const s = new Er({ ctx: e.ctx, options: t, chart: e });
  _t.configure(e, s, t), _t.addBox(e, s), (e.titleBlock = s);
}
var ed = {
  id: "title",
  _element: Er,
  start(e, t, s) {
    td(e, s);
  },
  stop(e) {
    const t = e.titleBlock;
    _t.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, s) {
    const i = e.titleBlock;
    _t.configure(e, i, s), (i.options = s);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Xe = {
  average(e) {
    if (!e.length) return !1;
    let t,
      s,
      i = new Set(),
      n = 0,
      o = 0;
    for (t = 0, s = e.length; t < s; ++t) {
      const a = e[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        i.add(l.x), (n += l.y), ++o;
      }
    }
    return { x: [...i].reduce((a, l) => a + l) / i.size, y: n / o };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let s = t.x,
      i = t.y,
      n = Number.POSITIVE_INFINITY,
      o,
      r,
      a;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const h = l.getCenterPoint(),
          c = _l(t, h);
        c < n && ((n = c), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (s = l.x), (i = l.y);
    }
    return { x: s, y: i };
  },
};
function Dt(e, t) {
  return t && (K(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function Et(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function sd(e, t) {
  const { element: s, datasetIndex: i, index: n } = t,
    o = e.getDatasetMeta(i).controller,
    { label: r, value: a } = o.getLabelAndValue(n);
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(n),
    raw: e.data.datasets[i].data[n],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: i,
    element: s,
  };
}
function Co(e, t) {
  const s = e.chart.ctx,
    { body: i, footer: n, title: o } = e,
    { boxWidth: r, boxHeight: a } = t,
    l = J(t.bodyFont),
    h = J(t.titleFont),
    c = J(t.footerFont),
    d = o.length,
    u = n.length,
    f = i.length,
    g = rt(t.padding);
  let m = g.height,
    p = 0,
    b = i.reduce(
      (D, v) => D + v.before.length + v.lines.length + v.after.length,
      0
    );
  if (
    ((b += e.beforeBody.length + e.afterBody.length),
    d &&
      (m += d * h.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    b)
  ) {
    const D = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    m += f * D + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  u && (m += t.footerMarginTop + u * c.lineHeight + (u - 1) * t.footerSpacing);
  let w = 0;
  const S = function (D) {
    p = Math.max(p, s.measureText(D).width + w);
  };
  return (
    s.save(),
    (s.font = h.string),
    j(e.title, S),
    (s.font = l.string),
    j(e.beforeBody.concat(e.afterBody), S),
    (w = t.displayColors ? r + 2 + t.boxPadding : 0),
    j(i, (D) => {
      j(D.before, S), j(D.lines, S), j(D.after, S);
    }),
    (w = 0),
    (s.font = c.string),
    j(e.footer, S),
    s.restore(),
    (p += g.width),
    { width: p, height: m }
  );
}
function id(e, t) {
  const { y: s, height: i } = t;
  return s < i / 2 ? "top" : s > e.height - i / 2 ? "bottom" : "center";
}
function nd(e, t, s, i) {
  const { x: n, width: o } = i,
    r = s.caretSize + s.caretPadding;
  if ((e === "left" && n + o + r > t.width) || (e === "right" && n - o - r < 0))
    return !0;
}
function od(e, t, s, i) {
  const { x: n, width: o } = s,
    {
      width: r,
      chartArea: { left: a, right: l },
    } = e;
  let h = "center";
  return (
    i === "center"
      ? (h = n <= (a + l) / 2 ? "left" : "right")
      : n <= o / 2
      ? (h = "left")
      : n >= r - o / 2 && (h = "right"),
    nd(h, e, t, s) && (h = "center"),
    h
  );
}
function Po(e, t, s) {
  const i = s.yAlign || t.yAlign || id(e, s);
  return { xAlign: s.xAlign || t.xAlign || od(e, t, s, i), yAlign: i };
}
function rd(e, t) {
  let { x: s, width: i } = e;
  return t === "right" ? (s -= i) : t === "center" && (s -= i / 2), s;
}
function ad(e, t, s) {
  let { y: i, height: n } = e;
  return (
    t === "top" ? (i += s) : t === "bottom" ? (i -= n + s) : (i -= n / 2), i
  );
}
function To(e, t, s, i) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = e,
    { xAlign: a, yAlign: l } = s,
    h = n + o,
    { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = ue(r);
  let g = rd(t, a);
  const m = ad(t, l, h);
  return (
    l === "center"
      ? a === "left"
        ? (g += h)
        : a === "right" && (g -= h)
      : a === "left"
      ? (g -= Math.max(c, u) + n)
      : a === "right" && (g += Math.max(d, f) + n),
    { x: xt(g, 0, i.width - t.width), y: xt(m, 0, i.height - t.height) }
  );
}
function Ts(e, t, s) {
  const i = rt(s.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - i.right
    : e.x + i.left;
}
function Fo(e) {
  return Dt([], Et(e));
}
function ld(e, t, s) {
  return _e(e, { tooltip: t, tooltipItems: s, type: "tooltip" });
}
function Lo(e, t) {
  const s = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return s ? e.override(s) : e;
}
const Nr = {
  beforeTitle: Rt,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        s = t.chart.data.labels,
        i = s ? s.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (i > 0 && t.dataIndex < i) return s[t.dataIndex];
    }
    return "";
  },
  afterTitle: Rt,
  beforeBody: Rt,
  beforeLabel: Rt,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const s = e.formattedValue;
    return H(s) || (t += s), t;
  },
  labelColor(e) {
    const s = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: s.borderColor,
      backgroundColor: s.backgroundColor,
      borderWidth: s.borderWidth,
      borderDash: s.borderDash,
      borderDashOffset: s.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const s = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: s.pointStyle, rotation: s.rotation };
  },
  afterLabel: Rt,
  afterBody: Rt,
  beforeFooter: Rt,
  footer: Rt,
  afterFooter: Rt,
};
function lt(e, t, s, i) {
  const n = e[t].call(s, i);
  return typeof n > "u" ? Nr[t].call(s, i) : n;
}
class Ao extends Re {
  static positioners = Xe;
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const s = this.chart,
      i = this.options.setContext(this.getContext()),
      n = i.enabled && s.options.animation && i.animations,
      o = new kr(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = ld(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, s) {
    const { callbacks: i } = s,
      n = lt(i, "beforeTitle", this, t),
      o = lt(i, "title", this, t),
      r = lt(i, "afterTitle", this, t);
    let a = [];
    return (a = Dt(a, Et(n))), (a = Dt(a, Et(o))), (a = Dt(a, Et(r))), a;
  }
  getBeforeBody(t, s) {
    return Fo(lt(s.callbacks, "beforeBody", this, t));
  }
  getBody(t, s) {
    const { callbacks: i } = s,
      n = [];
    return (
      j(t, (o) => {
        const r = { before: [], lines: [], after: [] },
          a = Lo(i, o);
        Dt(r.before, Et(lt(a, "beforeLabel", this, o))),
          Dt(r.lines, lt(a, "label", this, o)),
          Dt(r.after, Et(lt(a, "afterLabel", this, o))),
          n.push(r);
      }),
      n
    );
  }
  getAfterBody(t, s) {
    return Fo(lt(s.callbacks, "afterBody", this, t));
  }
  getFooter(t, s) {
    const { callbacks: i } = s,
      n = lt(i, "beforeFooter", this, t),
      o = lt(i, "footer", this, t),
      r = lt(i, "afterFooter", this, t);
    let a = [];
    return (a = Dt(a, Et(n))), (a = Dt(a, Et(o))), (a = Dt(a, Et(r))), a;
  }
  _createItems(t) {
    const s = this._active,
      i = this.chart.data,
      n = [],
      o = [],
      r = [];
    let a = [],
      l,
      h;
    for (l = 0, h = s.length; l < h; ++l) a.push(sd(this.chart, s[l]));
    return (
      t.filter && (a = a.filter((c, d, u) => t.filter(c, d, u, i))),
      t.itemSort && (a = a.sort((c, d) => t.itemSort(c, d, i))),
      j(a, (c) => {
        const d = Lo(t.callbacks, c);
        n.push(lt(d, "labelColor", this, c)),
          o.push(lt(d, "labelPointStyle", this, c)),
          r.push(lt(d, "labelTextColor", this, c));
      }),
      (this.labelColors = n),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = a),
      a
    );
  }
  update(t, s) {
    const i = this.options.setContext(this.getContext()),
      n = this._active;
    let o,
      r = [];
    if (!n.length) this.opacity !== 0 && (o = { opacity: 0 });
    else {
      const a = Xe[i.position].call(this, n, this._eventPosition);
      (r = this._createItems(i)),
        (this.title = this.getTitle(r, i)),
        (this.beforeBody = this.getBeforeBody(r, i)),
        (this.body = this.getBody(r, i)),
        (this.afterBody = this.getAfterBody(r, i)),
        (this.footer = this.getFooter(r, i));
      const l = (this._size = Co(this, i)),
        h = Object.assign({}, a, l),
        c = Po(this.chart, i, h),
        d = To(i, h, c, this.chart);
      (this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (o = {
          opacity: 1,
          x: d.x,
          y: d.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        i.external &&
        i.external.call(this, { chart: this.chart, tooltip: this, replay: s });
  }
  drawCaret(t, s, i, n) {
    const o = this.getCaretPosition(t, i, n);
    s.lineTo(o.x1, o.y1), s.lineTo(o.x2, o.y2), s.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, s, i) {
    const { xAlign: n, yAlign: o } = this,
      { caretSize: r, cornerRadius: a } = i,
      { topLeft: l, topRight: h, bottomLeft: c, bottomRight: d } = ue(a),
      { x: u, y: f } = t,
      { width: g, height: m } = s;
    let p, b, w, S, D, v;
    return (
      o === "center"
        ? ((D = f + m / 2),
          n === "left"
            ? ((p = u), (b = p - r), (S = D + r), (v = D - r))
            : ((p = u + g), (b = p + r), (S = D - r), (v = D + r)),
          (w = p))
        : (n === "left"
            ? (b = u + Math.max(l, c) + r)
            : n === "right"
            ? (b = u + g - Math.max(h, d) - r)
            : (b = this.caretX),
          o === "top"
            ? ((S = f), (D = S - r), (p = b - r), (w = b + r))
            : ((S = f + m), (D = S + r), (p = b + r), (w = b - r)),
          (v = S)),
      { x1: p, x2: b, x3: w, y1: S, y2: D, y3: v }
    );
  }
  drawTitle(t, s, i) {
    const n = this.title,
      o = n.length;
    let r, a, l;
    if (o) {
      const h = Ce(i.rtl, this.x, this.width);
      for (
        t.x = Ts(this, i.titleAlign, i),
          s.textAlign = h.textAlign(i.titleAlign),
          s.textBaseline = "middle",
          r = J(i.titleFont),
          a = i.titleSpacing,
          s.fillStyle = i.titleColor,
          s.font = r.string,
          l = 0;
        l < o;
        ++l
      )
        s.fillText(n[l], h.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + a),
          l + 1 === o && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, s, i, n, o) {
    const r = this.labelColors[i],
      a = this.labelPointStyles[i],
      { boxHeight: l, boxWidth: h } = o,
      c = J(o.bodyFont),
      d = Ts(this, "left", o),
      u = n.x(d),
      f = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
      g = s.y + f;
    if (o.usePointStyle) {
      const m = {
          radius: Math.min(h, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        p = n.leftForLtr(u, h) + h / 2,
        b = g + l / 2;
      (t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        Un(t, m, p, b),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        Un(t, m, p, b);
    } else {
      (t.lineWidth = I(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0);
      const m = n.leftForLtr(u, h),
        p = n.leftForLtr(n.xPlus(u, 1), h - 2),
        b = ue(r.borderRadius);
      Object.values(b).some((w) => w !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          is(t, { x: m, y: g, w: h, h: l, radius: b }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          is(t, { x: p, y: g + 1, w: h - 2, h: l - 2, radius: b }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(m, g, h, l),
          t.strokeRect(m, g, h, l),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(p, g + 1, h - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, s, i) {
    const { body: n } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: a,
        boxHeight: l,
        boxWidth: h,
        boxPadding: c,
      } = i,
      d = J(i.bodyFont);
    let u = d.lineHeight,
      f = 0;
    const g = Ce(i.rtl, this.x, this.width),
      m = function (C) {
        s.fillText(C, g.x(t.x + f), t.y + u / 2), (t.y += u + o);
      },
      p = g.textAlign(r);
    let b, w, S, D, v, O, P;
    for (
      s.textAlign = r,
        s.textBaseline = "middle",
        s.font = d.string,
        t.x = Ts(this, p, i),
        s.fillStyle = i.bodyColor,
        j(this.beforeBody, m),
        f = a && p !== "right" ? (r === "center" ? h / 2 + c : h + 2 + c) : 0,
        D = 0,
        O = n.length;
      D < O;
      ++D
    ) {
      for (
        b = n[D],
          w = this.labelTextColors[D],
          s.fillStyle = w,
          j(b.before, m),
          S = b.lines,
          a &&
            S.length &&
            (this._drawColorBox(s, t, D, g, i),
            (u = Math.max(d.lineHeight, l))),
          v = 0,
          P = S.length;
        v < P;
        ++v
      )
        m(S[v]), (u = d.lineHeight);
      j(b.after, m);
    }
    (f = 0), (u = d.lineHeight), j(this.afterBody, m), (t.y -= o);
  }
  drawFooter(t, s, i) {
    const n = this.footer,
      o = n.length;
    let r, a;
    if (o) {
      const l = Ce(i.rtl, this.x, this.width);
      for (
        t.x = Ts(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          s.textAlign = l.textAlign(i.footerAlign),
          s.textBaseline = "middle",
          r = J(i.footerFont),
          s.fillStyle = i.footerColor,
          s.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        s.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + i.footerSpacing);
    }
  }
  drawBackground(t, s, i, n) {
    const { xAlign: o, yAlign: r } = this,
      { x: a, y: l } = t,
      { width: h, height: c } = i,
      {
        topLeft: d,
        topRight: u,
        bottomLeft: f,
        bottomRight: g,
      } = ue(n.cornerRadius);
    (s.fillStyle = n.backgroundColor),
      (s.strokeStyle = n.borderColor),
      (s.lineWidth = n.borderWidth),
      s.beginPath(),
      s.moveTo(a + d, l),
      r === "top" && this.drawCaret(t, s, i, n),
      s.lineTo(a + h - u, l),
      s.quadraticCurveTo(a + h, l, a + h, l + u),
      r === "center" && o === "right" && this.drawCaret(t, s, i, n),
      s.lineTo(a + h, l + c - g),
      s.quadraticCurveTo(a + h, l + c, a + h - g, l + c),
      r === "bottom" && this.drawCaret(t, s, i, n),
      s.lineTo(a + f, l + c),
      s.quadraticCurveTo(a, l + c, a, l + c - f),
      r === "center" && o === "left" && this.drawCaret(t, s, i, n),
      s.lineTo(a, l + d),
      s.quadraticCurveTo(a, l, a + d, l),
      s.closePath(),
      s.fill(),
      n.borderWidth > 0 && s.stroke();
  }
  _updateAnimationTarget(t) {
    const s = this.chart,
      i = this.$animations,
      n = i && i.x,
      o = i && i.y;
    if (n || o) {
      const r = Xe[t.position].call(this, this._active, this._eventPosition);
      if (!r) return;
      const a = (this._size = Co(this, t)),
        l = Object.assign({}, r, this._size),
        h = Po(s, t, l),
        c = To(t, l, h, s);
      (n._to !== c.x || o._to !== c.y) &&
        ((this.xAlign = h.xAlign),
        (this.yAlign = h.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, c));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const s = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i) return;
    this._updateAnimationTarget(s);
    const n = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y };
    i = Math.abs(i) < 0.001 ? 0 : i;
    const r = rt(s.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    s.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(o, t, n, s),
      xr(t, s.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, s),
      this.drawBody(o, t, s),
      this.drawFooter(o, t, s),
      wr(t, s.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, s) {
    const i = this._active,
      n = t.map(({ datasetIndex: a, index: l }) => {
        const h = this.chart.getDatasetMeta(a);
        if (!h) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: h.data[l], index: l };
      }),
      o = !zs(i, n),
      r = this._positionChanged(n, s);
    (o || r) &&
      ((this._active = n),
      (this._eventPosition = s),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, s, i = !0) {
    if (s && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, s, i),
      a = this._positionChanged(r, t),
      l = s || !zs(r, o) || a;
    return (
      l &&
        ((this._active = r),
        (n.enabled || n.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, s))),
      l
    );
  }
  _getActiveElements(t, s, i, n) {
    const o = this.options;
    if (t.type === "mouseout") return [];
    if (!n)
      return s.filter(
        (a) =>
          this.chart.data.datasets[a.datasetIndex] &&
          this.chart
            .getDatasetMeta(a.datasetIndex)
            .controller.getParsed(a.index) !== void 0
      );
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, s) {
    const { caretX: i, caretY: n, options: o } = this,
      r = Xe[o.position].call(this, t, s);
    return r !== !1 && (i !== r.x || n !== r.y);
  }
}
var hd = {
  id: "tooltip",
  _element: Ao,
  positioners: Xe,
  afterInit(e, t, s) {
    s && (e.tooltip = new Ao({ chart: e, options: s }));
  },
  beforeUpdate(e, t, s) {
    e.tooltip && e.tooltip.initialize(s);
  },
  reset(e, t, s) {
    e.tooltip && e.tooltip.initialize(s);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const s = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...s, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", s);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const s = t.replay;
      e.tooltip.handleEvent(t.event, s, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: Nr,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const cd = (e, t, s, i) => (
  typeof t == "string"
    ? ((s = e.push(t) - 1), i.unshift({ index: s, label: t }))
    : isNaN(t) && (s = null),
  s
);
function dd(e, t, s, i) {
  const n = e.indexOf(t);
  if (n === -1) return cd(e, t, s, i);
  const o = e.lastIndexOf(t);
  return n !== o ? s : n;
}
const ud = (e, t) => (e === null ? null : xt(Math.round(e), 0, t));
function Ro(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class fd extends be {
  static id = "category";
  static defaults = { ticks: { callback: Ro } };
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const s = this._addedLabels;
    if (s.length) {
      const i = this.getLabels();
      for (const { index: n, label: o } of s) i[n] === o && i.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, s) {
    if (H(t)) return null;
    const i = this.getLabels();
    return (
      (s =
        isFinite(s) && i[s] === t ? s : dd(i, t, W(s, t), this._addedLabels)),
      ud(s, i.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: s } = this.getUserBounds();
    let { min: i, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (i = 0), s || (n = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = n);
  }
  buildTicks() {
    const t = this.min,
      s = this.max,
      i = this.options.offset,
      n = [];
    let o = this.getLabels();
    (o = t === 0 && s === o.length - 1 ? o : o.slice(t, s + 1)),
      (this._valueRange = Math.max(o.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0));
    for (let r = t; r <= s; r++) n.push({ value: r });
    return n;
  }
  getLabelForValue(t) {
    return Ro.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const s = this.ticks;
    return t < 0 || t > s.length - 1 ? null : this.getPixelForValue(s[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
function gd(e, t) {
  const s = [],
    {
      bounds: n,
      step: o,
      min: r,
      max: a,
      precision: l,
      count: h,
      maxTicks: c,
      maxDigits: d,
      includeBounds: u,
    } = e,
    f = o || 1,
    g = c - 1,
    { min: m, max: p } = t,
    b = !H(r),
    w = !H(a),
    S = !H(h),
    D = (p - m) / (d + 1);
  let v = En((p - m) / g / f) * f,
    O,
    P,
    C,
    L;
  if (v < 1e-14 && !b && !w) return [{ value: m }, { value: p }];
  (L = Math.ceil(p / v) - Math.floor(m / v)),
    L > g && (v = En((L * v) / g / f) * f),
    H(l) || ((O = Math.pow(10, l)), (v = Math.ceil(v * O) / O)),
    n === "ticks"
      ? ((P = Math.floor(m / v) * v), (C = Math.ceil(p / v) * v))
      : ((P = m), (C = p)),
    b && w && o && ml((a - r) / o, v / 1e3)
      ? ((L = Math.round(Math.min((a - r) / v, c))),
        (v = (a - r) / L),
        (P = r),
        (C = a))
      : S
      ? ((P = b ? r : P), (C = w ? a : C), (L = h - 1), (v = (C - P) / L))
      : ((L = (C - P) / v),
        Is(L, Math.round(L), v / 1e3)
          ? (L = Math.round(L))
          : (L = Math.ceil(L)));
  const z = Math.max(Nn(v), Nn(P));
  (O = Math.pow(10, H(l) ? z : l)),
    (P = Math.round(P * O) / O),
    (C = Math.round(C * O) / O);
  let A = 0;
  for (
    b &&
    (u && P !== r
      ? (s.push({ value: r }),
        P < r && A++,
        Is(Math.round((P + A * v) * O) / O, r, Io(r, D, e)) && A++)
      : P < r && A++);
    A < L;
    ++A
  ) {
    const N = Math.round((P + A * v) * O) / O;
    if (w && N > a) break;
    s.push({ value: N });
  }
  return (
    w && u && C !== a
      ? s.length && Is(s[s.length - 1].value, a, Io(a, D, e))
        ? (s[s.length - 1].value = a)
        : s.push({ value: a })
      : (!w || C === a) && s.push({ value: C }),
    s
  );
}
function Io(e, t, { horizontal: s, minRotation: i }) {
  const n = Xt(i),
    o = (s ? Math.sin(n) : Math.cos(n)) || 0.001,
    r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class Ks extends be {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, s) {
    return H(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: s, maxDefined: i } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => (n = s ? n : l),
      a = (l) => (o = i ? o : l);
    if (t) {
      const l = te(n),
        h = te(o);
      l < 0 && h < 0 ? a(0) : l > 0 && h > 0 && r(0);
    }
    if (n === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(n - l);
    }
    (this.min = n), (this.max = o);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: s, stepSize: i } = t,
      n;
    return (
      i
        ? ((n = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          n > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`
            ),
            (n = 1e3)))
        : ((n = this.computeTickLimit()), (s = s || 11)),
      s && (n = Math.min(s, n)),
      n
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      s = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const n = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: s.precision,
        step: s.stepSize,
        count: s.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: s.minRotation || 0,
        includeBounds: s.includeBounds !== !1,
      },
      o = this._range || this,
      r = gd(n, o);
    return (
      t.bounds === "ticks" && rr(r, this, "value"),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    );
  }
  configure() {
    const t = this.ticks;
    let s = this.min,
      i = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const n = (i - s) / Math.max(t.length - 1, 1) / 2;
      (s -= n), (i += n);
    }
    (this._startValue = s), (this._endValue = i), (this._valueRange = i - s);
  }
  getLabelForValue(t) {
    return Zi(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class md extends Ks {
  static id = "linear";
  static defaults = { ticks: { callback: ti.formatters.numeric } };
  determineDataLimits() {
    const { min: t, max: s } = this.getMinMax(!0);
    (this.min = et(t) ? t : 0),
      (this.max = et(s) ? s : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      s = t ? this.width : this.height,
      i = Xt(this.options.ticks.minRotation),
      n = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      o = this._resolveTickFontOptions(0);
    return Math.ceil(s / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const os = (e) => Math.floor(Kt(e)),
  le = (e, t) => Math.pow(10, os(e) + t);
function Yo(e) {
  return e / Math.pow(10, os(e)) === 1;
}
function Eo(e, t, s) {
  const i = Math.pow(10, s),
    n = Math.floor(e / i);
  return Math.ceil(t / i) - n;
}
function pd(e, t) {
  const s = t - e;
  let i = os(s);
  for (; Eo(e, t, i) > 10; ) i++;
  for (; Eo(e, t, i) < 10; ) i--;
  return Math.min(i, os(e));
}
function _d(e, { min: t, max: s }) {
  t = dt(e.min, t);
  const i = [],
    n = os(t);
  let o = pd(t, s),
    r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o),
    l = n > o ? Math.pow(10, n) : 0,
    h = Math.round((t - l) * r) / r,
    c = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((h - c) / Math.pow(10, o)),
    u = dt(e.min, Math.round((l + c + d * Math.pow(10, o)) * r) / r);
  for (; u < s; )
    i.push({ value: u, major: Yo(u), significand: d }),
      d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
      d >= 20 && (o++, (d = 2), (r = o >= 0 ? 1 : r)),
      (u = Math.round((l + c + d * Math.pow(10, o)) * r) / r);
  const f = dt(e.max, u);
  return i.push({ value: f, major: Yo(f), significand: d }), i;
}
class ep extends be {
  static id = "logarithmic";
  static defaults = {
    ticks: { callback: ti.formatters.logarithmic, major: { enabled: !0 } },
  };
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, s) {
    const i = Ks.prototype.parse.apply(this, [t, s]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return et(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: s } = this.getMinMax(!0);
    (this.min = et(t) ? Math.max(0, t) : null),
      (this.max = et(s) ? Math.max(0, s) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !et(this._userMin) &&
        (this.min = t === le(this.min, 0) ? le(this.min, -1) : le(this.min, 0)),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: s } = this.getUserBounds();
    let i = this.min,
      n = this.max;
    const o = (a) => (i = t ? i : a),
      r = (a) => (n = s ? n : a);
    i === n && (i <= 0 ? (o(1), r(10)) : (o(le(i, -1)), r(le(n, 1)))),
      i <= 0 && o(le(n, -1)),
      n <= 0 && r(le(i, 1)),
      (this.min = i),
      (this.max = n);
  }
  buildTicks() {
    const t = this.options,
      s = { min: this._userMin, max: this._userMax },
      i = _d(s, this);
    return (
      t.bounds === "ticks" && rr(i, this, "value"),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : Zi(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = Kt(t)),
      (this._valueRange = Kt(this.max) - Kt(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Kt(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const s = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + s * this._valueRange);
  }
}
function Ii(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const s = rt(t.backdropPadding);
    return W(t.font && t.font.size, X.font.size) + s.height;
  }
  return 0;
}
function bd(e, t, s) {
  return (
    (s = K(s) ? s : [s]), { w: Rl(e, t.string, s), h: s.length * t.lineHeight }
  );
}
function No(e, t, s, i, n) {
  return e === i || e === n
    ? { start: t - s / 2, end: t + s / 2 }
    : e < i || e > n
    ? { start: t - s, end: t }
    : { start: t, end: t + s };
}
function yd(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    s = Object.assign({}, t),
    i = [],
    n = [],
    o = e._pointLabels.length,
    r = e.options.pointLabels,
    a = r.centerPointLabels ? st / o : 0;
  for (let l = 0; l < o; l++) {
    const h = r.setContext(e.getPointLabelContext(l));
    n[l] = h.padding;
    const c = e.getPointPosition(l, e.drawingArea + n[l], a),
      d = J(h.font),
      u = bd(e.ctx, d, e._pointLabels[l]);
    i[l] = u;
    const f = Ct(e.getIndexAngle(l) + a),
      g = Math.round(Gi(f)),
      m = No(g, c.x, u.w, 0, 180),
      p = No(g, c.y, u.h, 90, 270);
    xd(s, t, f, m, p);
  }
  e.setCenterPoint(t.l - s.l, s.r - t.r, t.t - s.t, s.b - t.b),
    (e._pointLabelItems = vd(e, i, n));
}
function xd(e, t, s, i, n) {
  const o = Math.abs(Math.sin(s)),
    r = Math.abs(Math.cos(s));
  let a = 0,
    l = 0;
  i.start < t.l
    ? ((a = (t.l - i.start) / o), (e.l = Math.min(e.l, t.l - a)))
    : i.end > t.r && ((a = (i.end - t.r) / o), (e.r = Math.max(e.r, t.r + a))),
    n.start < t.t
      ? ((l = (t.t - n.start) / r), (e.t = Math.min(e.t, t.t - l)))
      : n.end > t.b &&
        ((l = (n.end - t.b) / r), (e.b = Math.max(e.b, t.b + l)));
}
function wd(e, t, s) {
  const i = e.drawingArea,
    { extra: n, additionalAngle: o, padding: r, size: a } = s,
    l = e.getPointPosition(t, i + n + r, o),
    h = Math.round(Gi(Ct(l.angle + ut))),
    c = Dd(l.y, a.h, h),
    d = Md(h),
    u = Sd(l.x, a.w, d);
  return {
    visible: !0,
    x: l.x,
    y: c,
    textAlign: d,
    left: u,
    top: c,
    right: u + a.w,
    bottom: c + a.h,
  };
}
function kd(e, t) {
  if (!t) return !0;
  const { left: s, top: i, right: n, bottom: o } = e;
  return !(
    De({ x: s, y: i }, t) ||
    De({ x: s, y: o }, t) ||
    De({ x: n, y: i }, t) ||
    De({ x: n, y: o }, t)
  );
}
function vd(e, t, s) {
  const i = [],
    n = e._pointLabels.length,
    o = e.options,
    { centerPointLabels: r, display: a } = o.pointLabels,
    l = { extra: Ii(o) / 2, additionalAngle: r ? st / n : 0 };
  let h;
  for (let c = 0; c < n; c++) {
    (l.padding = s[c]), (l.size = t[c]);
    const d = wd(e, c, l);
    i.push(d), a === "auto" && ((d.visible = kd(d, h)), d.visible && (h = d));
  }
  return i;
}
function Md(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function Sd(e, t, s) {
  return s === "right" ? (e -= t) : s === "center" && (e -= t / 2), e;
}
function Dd(e, t, s) {
  return (
    s === 90 || s === 270 ? (e -= t / 2) : (s > 270 || s < 90) && (e -= t), e
  );
}
function Od(e, t, s) {
  const { left: i, top: n, right: o, bottom: r } = s,
    { backdropColor: a } = t;
  if (!H(a)) {
    const l = ue(t.borderRadius),
      h = rt(t.backdropPadding);
    e.fillStyle = a;
    const c = i - h.left,
      d = n - h.top,
      u = o - i + h.width,
      f = r - n + h.height;
    Object.values(l).some((g) => g !== 0)
      ? (e.beginPath(), is(e, { x: c, y: d, w: u, h: f, radius: l }), e.fill())
      : e.fillRect(c, d, u, f);
  }
}
function Cd(e, t) {
  const {
    ctx: s,
    options: { pointLabels: i },
  } = e;
  for (let n = t - 1; n >= 0; n--) {
    const o = e._pointLabelItems[n];
    if (!o.visible) continue;
    const r = i.setContext(e.getPointLabelContext(n));
    Od(s, r, o);
    const a = J(r.font),
      { x: l, y: h, textAlign: c } = o;
    pe(s, e._pointLabels[n], l, h + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: c,
      textBaseline: "middle",
    });
  }
}
function Wr(e, t, s, i) {
  const { ctx: n } = e;
  if (s) n.arc(e.xCenter, e.yCenter, t, 0, Tt);
  else {
    let o = e.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++)
      (o = e.getPointPosition(r, t)), n.lineTo(o.x, o.y);
  }
}
function Pd(e, t, s, i, n) {
  const o = e.ctx,
    r = t.circular,
    { color: a, lineWidth: l } = t;
  (!r && !i) ||
    !a ||
    !l ||
    s < 0 ||
    (o.save(),
    (o.strokeStyle = a),
    (o.lineWidth = l),
    o.setLineDash(n.dash),
    (o.lineDashOffset = n.dashOffset),
    o.beginPath(),
    Wr(e, s, r, i),
    o.closePath(),
    o.stroke(),
    o.restore());
}
function Td(e, t, s) {
  return _e(e, { label: s, index: t, type: "pointLabel" });
}
class sp extends Ks {
  static id = "radialLinear";
  static defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0,
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: ti.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1,
    },
  };
  static defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color",
  };
  static descriptors = { angleLines: { _fallback: "grid" } };
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = rt(Ii(this.options) / 2)),
      s = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + s / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(s, i) / 2));
  }
  determineDataLimits() {
    const { min: t, max: s } = this.getMinMax(!1);
    (this.min = et(t) && !isNaN(t) ? t : 0),
      (this.max = et(s) && !isNaN(s) ? s : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ii(this.options));
  }
  generateTickLabels(t) {
    Ks.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((s, i) => {
          const n = V(this.options.pointLabels.callback, [s, i], this);
          return n || n === 0 ? n : "";
        })
        .filter((s, i) => this.chart.getDataVisibility(i)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? yd(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, s, i, n) {
    (this.xCenter += Math.floor((t - s) / 2)),
      (this.yCenter += Math.floor((i - n) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, s, i, n)
      ));
  }
  getIndexAngle(t) {
    const s = Tt / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0;
    return Ct(t * s + Xt(i));
  }
  getDistanceFromCenterForValue(t) {
    if (H(t)) return NaN;
    const s = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * s : (t - this.min) * s;
  }
  getValueForDistanceFromCenter(t) {
    if (H(t)) return NaN;
    const s = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - s : this.min + s;
  }
  getPointLabelContext(t) {
    const s = this._pointLabels || [];
    if (t >= 0 && t < s.length) {
      const i = s[t];
      return Td(this.getContext(), t, i);
    }
  }
  getPointPosition(t, s, i = 0) {
    const n = this.getIndexAngle(t) - ut + i;
    return {
      x: Math.cos(n) * s + this.xCenter,
      y: Math.sin(n) * s + this.yCenter,
      angle: n,
    };
  }
  getPointPositionForValue(t, s) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(s));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: s, top: i, right: n, bottom: o } = this._pointLabelItems[t];
    return { left: s, top: i, right: n, bottom: o };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: s },
    } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(),
        i.beginPath(),
        Wr(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          s,
          this._pointLabels.length
        ),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      s = this.options,
      { angleLines: i, grid: n, border: o } = s,
      r = this._pointLabels.length;
    let a, l, h;
    if (
      (s.pointLabels.display && Cd(this, r),
      n.display &&
        this.ticks.forEach((c, d) => {
          if (d !== 0 || (d === 0 && this.min < 0)) {
            l = this.getDistanceFromCenterForValue(c.value);
            const u = this.getContext(d),
              f = n.setContext(u),
              g = o.setContext(u);
            Pd(this, f, l, r, g);
          }
        }),
      i.display)
    ) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const c = i.setContext(this.getPointLabelContext(a)),
          { color: d, lineWidth: u } = c;
        !u ||
          !d ||
          ((t.lineWidth = u),
          (t.strokeStyle = d),
          t.setLineDash(c.borderDash),
          (t.lineDashOffset = c.borderDashOffset),
          (l = this.getDistanceFromCenterForValue(
            s.ticks.reverse ? this.min : this.max
          )),
          (h = this.getPointPosition(a, l)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(h.x, h.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      s = this.options,
      i = s.ticks;
    if (!i.display) return;
    const n = this.getIndexAngle(0);
    let o, r;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(n),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && this.min >= 0 && !s.reverse) return;
        const h = i.setContext(this.getContext(l)),
          c = J(h.font);
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          h.showLabelBackdrop)
        ) {
          (t.font = c.string),
            (r = t.measureText(a.label).width),
            (t.fillStyle = h.backdropColor);
          const d = rt(h.backdropPadding);
          t.fillRect(
            -r / 2 - d.left,
            -o - c.size / 2 - d.top,
            r + d.width,
            c.size + d.height
          );
        }
        pe(t, a.label, 0, -o, c, {
          color: h.color,
          strokeColor: h.textStrokeColor,
          strokeWidth: h.textStrokeWidth,
        });
      }),
      t.restore();
  }
  drawTitle() {}
}
const si = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  ct = Object.keys(si);
function Wo(e, t) {
  return e - t;
}
function jo(e, t) {
  if (H(t)) return null;
  const s = e._adapter,
    { parser: i, round: n, isoWeekday: o } = e._parseOpts;
  let r = t;
  return (
    typeof i == "function" && (r = i(r)),
    et(r) || (r = typeof i == "string" ? s.parse(r, i) : s.parse(r)),
    r === null
      ? null
      : (n &&
          (r =
            n === "week" && (Vs(o) || o === !0)
              ? s.startOf(r, "isoWeek", o)
              : s.startOf(r, n)),
        +r)
  );
}
function zo(e, t, s, i) {
  const n = ct.length;
  for (let o = ct.indexOf(e); o < n - 1; ++o) {
    const r = si[ct[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((s - t) / (a * r.size)) <= i) return ct[o];
  }
  return ct[n - 1];
}
function Fd(e, t, s, i, n) {
  for (let o = ct.length - 1; o >= ct.indexOf(s); o--) {
    const r = ct[o];
    if (si[r].common && e._adapter.diff(n, i, r) >= t - 1) return r;
  }
  return ct[s ? ct.indexOf(s) : 0];
}
function Ld(e) {
  for (let t = ct.indexOf(e) + 1, s = ct.length; t < s; ++t)
    if (si[ct[t]].common) return ct[t];
}
function Ho(e, t, s) {
  if (!s) e[t] = !0;
  else if (s.length) {
    const { lo: i, hi: n } = Ki(s, t),
      o = s[i] >= t ? s[i] : s[n];
    e[o] = !0;
  }
}
function Ad(e, t, s, i) {
  const n = e._adapter,
    o = +n.startOf(t[0].value, i),
    r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, i))
    (l = s[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function Bo(e, t, s) {
  const i = [],
    n = {},
    o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    (a = t[r]), (n[a] = r), i.push({ value: a, major: !1 });
  return o === 0 || !s ? i : Ad(e, i, n, s);
}
class Vo extends be {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  };
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, s = {}) {
    const i = t.time || (t.time = {}),
      n = (this._adapter = new Lh._date(t.adapters.date));
    n.init(s),
      Ze(i.displayFormats, n.formats()),
      (this._parseOpts = {
        parser: i.parser,
        round: i.round,
        isoWeekday: i.isoWeekday,
      }),
      super.init(t),
      (this._normalized = s.normalized);
  }
  parse(t, s) {
    return t === void 0 ? null : jo(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      s = this._adapter,
      i = t.time.unit || "day";
    let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(h) {
      !r && !isNaN(h.min) && (n = Math.min(n, h.min)),
        !a && !isNaN(h.max) && (o = Math.max(o, h.max));
    }
    (!r || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (n = et(n) && !isNaN(n) ? n : +s.startOf(Date.now(), i)),
      (o = et(o) && !isNaN(o) ? o : +s.endOf(Date.now(), i) + 1),
      (this.min = Math.min(n, o - 1)),
      (this.max = Math.max(n + 1, o));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let s = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY;
    return t.length && ((s = t[0]), (i = t[t.length - 1])), { min: s, max: i };
  }
  buildTicks() {
    const t = this.options,
      s = t.time,
      i = t.ticks,
      n = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      n.length &&
      ((this.min = this._userMin || n[0]),
      (this.max = this._userMax || n[n.length - 1]));
    const o = this.min,
      r = this.max,
      a = wl(n, o, r);
    return (
      (this._unit =
        s.unit ||
        (i.autoSkip
          ? zo(s.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : Fd(this, a.length, s.minUnit, this.min, this.max))),
      (this._majorUnit =
        !i.major.enabled || this._unit === "year" ? void 0 : Ld(this._unit)),
      this.initOffsets(n),
      t.reverse && a.reverse(),
      Bo(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let s = 0,
      i = 0,
      n,
      o;
    this.options.offset &&
      t.length &&
      ((n = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (s = 1 - n)
        : (s = (this.getDecimalForValue(t[1]) - n) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (i = o)
        : (i = (o - this.getDecimalForValue(t[t.length - 2])) / 2));
    const r = t.length < 3 ? 0.5 : 0.25;
    (s = xt(s, 0, r)),
      (i = xt(i, 0, r)),
      (this._offsets = { start: s, end: i, factor: 1 / (s + 1 + i) });
  }
  _generate() {
    const t = this._adapter,
      s = this.min,
      i = this.max,
      n = this.options,
      o = n.time,
      r = o.unit || zo(o.minUnit, s, i, this._getLabelCapacity(s)),
      a = W(n.ticks.stepSize, 1),
      l = r === "week" ? o.isoWeekday : !1,
      h = Vs(l) || l === !0,
      c = {};
    let d = s,
      u,
      f;
    if (
      (h && (d = +t.startOf(d, "isoWeek", l)),
      (d = +t.startOf(d, h ? "day" : r)),
      t.diff(i, s, r) > 1e5 * a)
    )
      throw new Error(
        s + " and " + i + " are too far apart with stepSize of " + a + " " + r
      );
    const g = n.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < i; u = +t.add(u, a, r), f++) Ho(c, u, g);
    return (
      (u === i || n.bounds === "ticks" || f === 1) && Ho(c, u, g),
      Object.keys(c)
        .sort(Wo)
        .map((m) => +m)
    );
  }
  getLabelForValue(t) {
    const s = this._adapter,
      i = this.options.time;
    return i.tooltipFormat
      ? s.format(t, i.tooltipFormat)
      : s.format(t, i.displayFormats.datetime);
  }
  format(t, s) {
    const n = this.options.time.displayFormats,
      o = this._unit,
      r = s || n[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, s, i, n) {
    const o = this.options,
      r = o.ticks.callback;
    if (r) return V(r, [t, s, i], this);
    const a = o.time.displayFormats,
      l = this._unit,
      h = this._majorUnit,
      c = l && a[l],
      d = h && a[h],
      u = i[s],
      f = h && d && u && u.major;
    return this._adapter.format(t, n || (f ? d : c));
  }
  generateTickLabels(t) {
    let s, i, n;
    for (s = 0, i = t.length; s < i; ++s)
      (n = t[s]), (n.label = this._tickFormatFunction(n.value, s, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const s = this._offsets,
      i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((s.start + i) * s.factor);
  }
  getValueForPixel(t) {
    const s = this._offsets,
      i = this.getDecimalForPixel(t) / s.factor - s.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const s = this.options.ticks,
      i = this.ctx.measureText(t).width,
      n = Xt(this.isHorizontal() ? s.maxRotation : s.minRotation),
      o = Math.cos(n),
      r = Math.sin(n),
      a = this._resolveTickFontOptions(0).size;
    return { w: i * o + a * r, h: i * r + a * o };
  }
  _getLabelCapacity(t) {
    const s = this.options.time,
      i = s.displayFormats,
      n = i[s.unit] || i.millisecond,
      o = this._tickFormatFunction(t, 0, Bo(this, [t], this._majorUnit), n),
      r = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      s,
      i;
    if (t.length) return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return (this._cache.data = n[0].controller.getAllParsedValues(this));
    for (s = 0, i = n.length; s < i; ++s)
      t = t.concat(n[s].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let s, i;
    if (t.length) return t;
    const n = this.getLabels();
    for (s = 0, i = n.length; s < i; ++s) t.push(jo(this, n[s]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return lr(t.sort(Wo));
  }
}
function Fs(e, t, s) {
  let i = 0,
    n = e.length - 1,
    o,
    r,
    a,
    l;
  s
    ? (t >= e[i].pos && t <= e[n].pos && ({ lo: i, hi: n } = Fi(e, "pos", t)),
      ({ pos: o, time: a } = e[i]),
      ({ pos: r, time: l } = e[n]))
    : (t >= e[i].time &&
        t <= e[n].time &&
        ({ lo: i, hi: n } = Fi(e, "time", t)),
      ({ time: o, pos: a } = e[i]),
      ({ time: r, pos: l } = e[n]));
  const h = r - o;
  return h ? a + ((l - a) * (t - o)) / h : a;
}
class ip extends Vo {
  static id = "timeseries";
  static defaults = Vo.defaults;
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      s = (this._table = this.buildLookupTable(t));
    (this._minPos = Fs(s, this.min)),
      (this._tableRange = Fs(s, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: s, max: i } = this,
      n = [],
      o = [];
    let r, a, l, h, c;
    for (r = 0, a = t.length; r < a; ++r)
      (h = t[r]), h >= s && h <= i && n.push(h);
    if (n.length < 2)
      return [
        { time: s, pos: 0 },
        { time: i, pos: 1 },
      ];
    for (r = 0, a = n.length; r < a; ++r)
      (c = n[r + 1]),
        (l = n[r - 1]),
        (h = n[r]),
        Math.round((c + l) / 2) !== h && o.push({ time: h, pos: r / (a - 1) });
    return o;
  }
  _generate() {
    const t = this.min,
      s = this.max;
    let i = super.getDataTimestamps();
    return (
      (!i.includes(t) || !i.length) && i.splice(0, 0, t),
      (!i.includes(s) || i.length === 1) && i.push(s),
      i.sort((n, o) => n - o)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const s = this.getDataTimestamps(),
      i = this.getLabelTimestamps();
    return (
      s.length && i.length
        ? (t = this.normalize(s.concat(i)))
        : (t = s.length ? s : i),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (Fs(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const s = this._offsets,
      i = this.getDecimalForPixel(t) / s.factor - s.end;
    return Fs(this._table, i * this._tableRange + this._minPos, !0);
  }
}
const jr = "label";
function Uo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Rd(e, t) {
  const s = e.options;
  s && t && Object.assign(s, t);
}
function zr(e, t) {
  e.labels = t;
}
function Hr(e, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : jr;
  const i = [];
  e.datasets = t.map((n) => {
    const o = e.datasets.find((r) => r[s] === n[s]);
    return !o || !n.data || i.includes(o)
      ? { ...n }
      : (i.push(o), Object.assign(o, n), o);
  });
}
function Id(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jr;
  const s = { labels: [], datasets: [] };
  return zr(s, e.labels), Hr(s, e.datasets, t), s;
}
function Yd(e, t) {
  const {
      height: s = 150,
      width: i = 300,
      redraw: n = !1,
      datasetIdKey: o,
      type: r,
      data: a,
      options: l,
      plugins: h = [],
      fallbackContent: c,
      updateMode: d,
      ...u
    } = e,
    f = Q.useRef(null),
    g = Q.useRef(),
    m = () => {
      f.current &&
        ((g.current = new rn(f.current, {
          type: r,
          data: Id(a, o),
          options: l && { ...l },
          plugins: h,
        })),
        Uo(t, g.current));
    },
    p = () => {
      Uo(t, null), g.current && (g.current.destroy(), (g.current = null));
    };
  return (
    Q.useEffect(() => {
      !n && g.current && l && Rd(g.current, l);
    }, [n, l]),
    Q.useEffect(() => {
      !n && g.current && zr(g.current.config.data, a.labels);
    }, [n, a.labels]),
    Q.useEffect(() => {
      !n && g.current && a.datasets && Hr(g.current.config.data, a.datasets, o);
    }, [n, a.datasets]),
    Q.useEffect(() => {
      g.current && (n ? (p(), setTimeout(m)) : g.current.update(d));
    }, [n, l, a.labels, a.datasets, d]),
    Q.useEffect(() => {
      g.current && (p(), setTimeout(m));
    }, [r]),
    Q.useEffect(() => (m(), () => p()), []),
    Ia.createElement(
      "canvas",
      Object.assign({ ref: f, role: "img", height: s, width: i }, u),
      c
    )
  );
}
const Ed = Q.forwardRef(Yd);
rn.register(fd, md, Gc, Fh, ed, hd, Jc);
const Nd = {
    responsive: !0,
    maintainAspectRatio: !1,
    plugins: { legend: { display: !1 } },
    scales: {
      y: {
        ticks: { color: "#A9C5E4" },
        grid: { display: !0, color: "#1E2944" },
      },
      x: { ticks: { color: "#A9C5E4" } },
    },
  },
  Wd = (e, t) => {
    const s = e.createLinearGradient(0, t.bottom, 0, t.top);
    return s.addColorStop(0.47, "#529ADD"), s.addColorStop(1, "#FF67CB"), s;
  },
  $o = ({ labels: e, values: t }) => {
    const s = Q.useRef(null),
      [i, n] = Q.useState({ datasets: [] }),
      o = { labels: e, datasets: [{ data: t }] };
    return (
      Q.useEffect(() => {
        const r = s.current;
        if (!r) return;
        const a = Wd(r.ctx, r.chartArea),
          l = {
            ...o,
            datasets: o.datasets.map((h) => ({ ...h, backgroundColor: a })),
          };
        n(l);
      }, []),
      _.jsx("div", {
        className: "of-chart relative sm:h-[50vh]",
        children: _.jsx(Ed, { type: "bar", ref: s, options: Nd, data: i }),
      })
    );
  }; //! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Br;
function x() {
  return Br.apply(null, arguments);
}
function jd(e) {
  Br = e;
}
function kt(e) {
  return (
    e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
  );
}
function ge(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function Y(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function an(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e) if (Y(e, t)) return !1;
  return !0;
}
function ht(e) {
  return e === void 0;
}
function Vt(e) {
  return (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  );
}
function us(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function Vr(e, t) {
  var s = [],
    i,
    n = e.length;
  for (i = 0; i < n; ++i) s.push(t(e[i], i));
  return s;
}
function qt(e, t) {
  for (var s in t) Y(t, s) && (e[s] = t[s]);
  return (
    Y(t, "toString") && (e.toString = t.toString),
    Y(t, "valueOf") && (e.valueOf = t.valueOf),
    e
  );
}
function Lt(e, t, s, i) {
  return fa(e, t, s, i, !0).utc();
}
function zd() {
  return {
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
  };
}
function T(e) {
  return e._pf == null && (e._pf = zd()), e._pf;
}
var Yi;
Array.prototype.some
  ? (Yi = Array.prototype.some)
  : (Yi = function (e) {
      var t = Object(this),
        s = t.length >>> 0,
        i;
      for (i = 0; i < s; i++) if (i in t && e.call(this, t[i], i, t)) return !0;
      return !1;
    });
function ln(e) {
  var t = null,
    s = !1,
    i = e._d && !isNaN(e._d.getTime());
  if (
    (i &&
      ((t = T(e)),
      (s = Yi.call(t.parsedDateParts, function (n) {
        return n != null;
      })),
      (i =
        t.overflow < 0 &&
        !t.empty &&
        !t.invalidEra &&
        !t.invalidMonth &&
        !t.invalidWeekday &&
        !t.weekdayMismatch &&
        !t.nullInput &&
        !t.invalidFormat &&
        !t.userInvalidated &&
        (!t.meridiem || (t.meridiem && s))),
      e._strict &&
        (i =
          i &&
          t.charsLeftOver === 0 &&
          t.unusedTokens.length === 0 &&
          t.bigHour === void 0)),
    Object.isFrozen == null || !Object.isFrozen(e))
  )
    e._isValid = i;
  else return i;
  return e._isValid;
}
function ii(e) {
  var t = Lt(NaN);
  return e != null ? qt(T(t), e) : (T(t).userInvalidated = !0), t;
}
var Go = (x.momentProperties = []),
  Di = !1;
function hn(e, t) {
  var s,
    i,
    n,
    o = Go.length;
  if (
    (ht(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    ht(t._i) || (e._i = t._i),
    ht(t._f) || (e._f = t._f),
    ht(t._l) || (e._l = t._l),
    ht(t._strict) || (e._strict = t._strict),
    ht(t._tzm) || (e._tzm = t._tzm),
    ht(t._isUTC) || (e._isUTC = t._isUTC),
    ht(t._offset) || (e._offset = t._offset),
    ht(t._pf) || (e._pf = T(t)),
    ht(t._locale) || (e._locale = t._locale),
    o > 0)
  )
    for (s = 0; s < o; s++) (i = Go[s]), (n = t[i]), ht(n) || (e[i] = n);
  return e;
}
function fs(e) {
  hn(this, e),
    (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
    this.isValid() || (this._d = new Date(NaN)),
    Di === !1 && ((Di = !0), x.updateOffset(this), (Di = !1));
}
function vt(e) {
  return e instanceof fs || (e != null && e._isAMomentObject != null);
}
function Ur(e) {
  x.suppressDeprecationWarnings === !1 &&
    typeof console < "u" &&
    console.warn &&
    console.warn("Deprecation warning: " + e);
}
function bt(e, t) {
  var s = !0;
  return qt(function () {
    if ((x.deprecationHandler != null && x.deprecationHandler(null, e), s)) {
      var i = [],
        n,
        o,
        r,
        a = arguments.length;
      for (o = 0; o < a; o++) {
        if (((n = ""), typeof arguments[o] == "object")) {
          n +=
            `
[` +
            o +
            "] ";
          for (r in arguments[0])
            Y(arguments[0], r) && (n += r + ": " + arguments[0][r] + ", ");
          n = n.slice(0, -2);
        } else n = arguments[o];
        i.push(n);
      }
      Ur(
        e +
          `
Arguments: ` +
          Array.prototype.slice.call(i).join("") +
          `
` +
          new Error().stack
      ),
        (s = !1);
    }
    return t.apply(this, arguments);
  }, t);
}
var Ko = {};
function $r(e, t) {
  x.deprecationHandler != null && x.deprecationHandler(e, t),
    Ko[e] || (Ur(t), (Ko[e] = !0));
}
x.suppressDeprecationWarnings = !1;
x.deprecationHandler = null;
function At(e) {
  return (
    (typeof Function < "u" && e instanceof Function) ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function Hd(e) {
  var t, s;
  for (s in e)
    Y(e, s) && ((t = e[s]), At(t) ? (this[s] = t) : (this["_" + s] = t));
  (this._config = e),
    (this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
        "|" +
        /\d{1,2}/.source
    ));
}
function Ei(e, t) {
  var s = qt({}, e),
    i;
  for (i in t)
    Y(t, i) &&
      (ge(e[i]) && ge(t[i])
        ? ((s[i] = {}), qt(s[i], e[i]), qt(s[i], t[i]))
        : t[i] != null
        ? (s[i] = t[i])
        : delete s[i]);
  for (i in e) Y(e, i) && !Y(t, i) && ge(e[i]) && (s[i] = qt({}, s[i]));
  return s;
}
function cn(e) {
  e != null && this.set(e);
}
var Ni;
Object.keys
  ? (Ni = Object.keys)
  : (Ni = function (e) {
      var t,
        s = [];
      for (t in e) Y(e, t) && s.push(t);
      return s;
    });
var Bd = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L",
};
function Vd(e, t, s) {
  var i = this._calendar[e] || this._calendar.sameElse;
  return At(i) ? i.call(t, s) : i;
}
function Ft(e, t, s) {
  var i = "" + Math.abs(e),
    n = t - i.length,
    o = e >= 0;
  return (
    (o ? (s ? "+" : "") : "-") +
    Math.pow(10, Math.max(0, n)).toString().substr(1) +
    i
  );
}
var dn =
    /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  Ls = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  Oi = {},
  Pe = {};
function M(e, t, s, i) {
  var n = i;
  typeof i == "string" &&
    (n = function () {
      return this[i]();
    }),
    e && (Pe[e] = n),
    t &&
      (Pe[t[0]] = function () {
        return Ft(n.apply(this, arguments), t[1], t[2]);
      }),
    s &&
      (Pe[s] = function () {
        return this.localeData().ordinal(n.apply(this, arguments), e);
      });
}
function Ud(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function $d(e) {
  var t = e.match(dn),
    s,
    i;
  for (s = 0, i = t.length; s < i; s++)
    Pe[t[s]] ? (t[s] = Pe[t[s]]) : (t[s] = Ud(t[s]));
  return function (n) {
    var o = "",
      r;
    for (r = 0; r < i; r++) o += At(t[r]) ? t[r].call(n, e) : t[r];
    return o;
  };
}
function Ns(e, t) {
  return e.isValid()
    ? ((t = Gr(t, e.localeData())), (Oi[t] = Oi[t] || $d(t)), Oi[t](e))
    : e.localeData().invalidDate();
}
function Gr(e, t) {
  var s = 5;
  function i(n) {
    return t.longDateFormat(n) || n;
  }
  for (Ls.lastIndex = 0; s >= 0 && Ls.test(e); )
    (e = e.replace(Ls, i)), (Ls.lastIndex = 0), (s -= 1);
  return e;
}
var Gd = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A",
};
function Kd(e) {
  var t = this._longDateFormat[e],
    s = this._longDateFormat[e.toUpperCase()];
  return t || !s
    ? t
    : ((this._longDateFormat[e] = s
        .match(dn)
        .map(function (i) {
          return i === "MMMM" || i === "MM" || i === "DD" || i === "dddd"
            ? i.slice(1)
            : i;
        })
        .join("")),
      this._longDateFormat[e]);
}
var Xd = "Invalid date";
function Zd() {
  return this._invalidDate;
}
var qd = "%d",
  Qd = /\d{1,2}/;
function Jd(e) {
  return this._ordinal.replace("%d", e);
}
var tu = {
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
};
function eu(e, t, s, i) {
  var n = this._relativeTime[s];
  return At(n) ? n(e, t, s, i) : n.replace(/%d/i, e);
}
function su(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return At(s) ? s(t) : s.replace(/%s/i, t);
}
var Xo = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year",
};
function yt(e) {
  return typeof e == "string" ? Xo[e] || Xo[e.toLowerCase()] : void 0;
}
function un(e) {
  var t = {},
    s,
    i;
  for (i in e) Y(e, i) && ((s = yt(i)), s && (t[s] = e[i]));
  return t;
}
var iu = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1,
};
function nu(e) {
  var t = [],
    s;
  for (s in e) Y(e, s) && t.push({ unit: s, priority: iu[s] });
  return (
    t.sort(function (i, n) {
      return i.priority - n.priority;
    }),
    t
  );
}
var Kr = /\d/,
  ft = /\d\d/,
  Xr = /\d{3}/,
  fn = /\d{4}/,
  ni = /[+-]?\d{6}/,
  $ = /\d\d?/,
  Zr = /\d\d\d\d?/,
  qr = /\d\d\d\d\d\d?/,
  oi = /\d{1,3}/,
  gn = /\d{1,4}/,
  ri = /[+-]?\d{1,6}/,
  Ie = /\d+/,
  ai = /[+-]?\d+/,
  ou = /Z|[+-]\d\d:?\d\d/gi,
  li = /Z|[+-]\d\d(?::?\d\d)?/gi,
  ru = /[+-]?\d+(\.\d{1,3})?/,
  gs =
    /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
  Ye = /^[1-9]\d?/,
  mn = /^([1-9]\d|\d)/,
  Xs;
Xs = {};
function k(e, t, s) {
  Xs[e] = At(t)
    ? t
    : function (i, n) {
        return i && s ? s : t;
      };
}
function au(e, t) {
  return Y(Xs, e) ? Xs[e](t._strict, t._locale) : new RegExp(lu(e));
}
function lu(e) {
  return Ht(
    e
      .replace("\\", "")
      .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, s, i, n, o) {
        return s || i || n || o;
      })
  );
}
function Ht(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function pt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function F(e) {
  var t = +e,
    s = 0;
  return t !== 0 && isFinite(t) && (s = pt(t)), s;
}
var Wi = {};
function B(e, t) {
  var s,
    i = t,
    n;
  for (
    typeof e == "string" && (e = [e]),
      Vt(t) &&
        (i = function (o, r) {
          r[t] = F(o);
        }),
      n = e.length,
      s = 0;
    s < n;
    s++
  )
    Wi[e[s]] = i;
}
function ms(e, t) {
  B(e, function (s, i, n, o) {
    (n._w = n._w || {}), t(s, n._w, n, o);
  });
}
function hu(e, t, s) {
  t != null && Y(Wi, e) && Wi[e](t, s._a, s, e);
}
function hi(e) {
  return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
}
var ot = 0,
  jt = 1,
  Pt = 2,
  tt = 3,
  wt = 4,
  zt = 5,
  de = 6,
  cu = 7,
  du = 8;
M("Y", 0, 0, function () {
  var e = this.year();
  return e <= 9999 ? Ft(e, 4) : "+" + e;
});
M(0, ["YY", 2], 0, function () {
  return this.year() % 100;
});
M(0, ["YYYY", 4], 0, "year");
M(0, ["YYYYY", 5], 0, "year");
M(0, ["YYYYYY", 6, !0], 0, "year");
k("Y", ai);
k("YY", $, ft);
k("YYYY", gn, fn);
k("YYYYY", ri, ni);
k("YYYYYY", ri, ni);
B(["YYYYY", "YYYYYY"], ot);
B("YYYY", function (e, t) {
  t[ot] = e.length === 2 ? x.parseTwoDigitYear(e) : F(e);
});
B("YY", function (e, t) {
  t[ot] = x.parseTwoDigitYear(e);
});
B("Y", function (e, t) {
  t[ot] = parseInt(e, 10);
});
function Je(e) {
  return hi(e) ? 366 : 365;
}
x.parseTwoDigitYear = function (e) {
  return F(e) + (F(e) > 68 ? 1900 : 2e3);
};
var Qr = Ee("FullYear", !0);
function uu() {
  return hi(this.year());
}
function Ee(e, t) {
  return function (s) {
    return s != null
      ? (Jr(this, e, s), x.updateOffset(this, t), this)
      : rs(this, e);
  };
}
function rs(e, t) {
  if (!e.isValid()) return NaN;
  var s = e._d,
    i = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return i ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return i ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return i ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return i ? s.getUTCHours() : s.getHours();
    case "Date":
      return i ? s.getUTCDate() : s.getDate();
    case "Day":
      return i ? s.getUTCDay() : s.getDay();
    case "Month":
      return i ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return i ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function Jr(e, t, s) {
  var i, n, o, r, a;
  if (!(!e.isValid() || isNaN(s))) {
    switch (((i = e._d), (n = e._isUTC), t)) {
      case "Milliseconds":
        return void (n ? i.setUTCMilliseconds(s) : i.setMilliseconds(s));
      case "Seconds":
        return void (n ? i.setUTCSeconds(s) : i.setSeconds(s));
      case "Minutes":
        return void (n ? i.setUTCMinutes(s) : i.setMinutes(s));
      case "Hours":
        return void (n ? i.setUTCHours(s) : i.setHours(s));
      case "Date":
        return void (n ? i.setUTCDate(s) : i.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    (o = s),
      (r = e.month()),
      (a = e.date()),
      (a = a === 29 && r === 1 && !hi(o) ? 28 : a),
      n ? i.setUTCFullYear(o, r, a) : i.setFullYear(o, r, a);
  }
}
function fu(e) {
  return (e = yt(e)), At(this[e]) ? this[e]() : this;
}
function gu(e, t) {
  if (typeof e == "object") {
    e = un(e);
    var s = nu(e),
      i,
      n = s.length;
    for (i = 0; i < n; i++) this[s[i].unit](e[s[i].unit]);
  } else if (((e = yt(e)), At(this[e]))) return this[e](t);
  return this;
}
function mu(e, t) {
  return ((e % t) + t) % t;
}
var q;
Array.prototype.indexOf
  ? (q = Array.prototype.indexOf)
  : (q = function (e) {
      var t;
      for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    });
function pn(e, t) {
  if (isNaN(e) || isNaN(t)) return NaN;
  var s = mu(t, 12);
  return (e += (t - s) / 12), s === 1 ? (hi(e) ? 29 : 28) : 31 - ((s % 7) % 2);
}
M("M", ["MM", 2], "Mo", function () {
  return this.month() + 1;
});
M("MMM", 0, 0, function (e) {
  return this.localeData().monthsShort(this, e);
});
M("MMMM", 0, 0, function (e) {
  return this.localeData().months(this, e);
});
k("M", $, Ye);
k("MM", $, ft);
k("MMM", function (e, t) {
  return t.monthsShortRegex(e);
});
k("MMMM", function (e, t) {
  return t.monthsRegex(e);
});
B(["M", "MM"], function (e, t) {
  t[jt] = F(e) - 1;
});
B(["MMM", "MMMM"], function (e, t, s, i) {
  var n = s._locale.monthsParse(e, i, s._strict);
  n != null ? (t[jt] = n) : (T(s).invalidMonth = e);
});
var pu =
    "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ),
  ta = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
  ea = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
  _u = gs,
  bu = gs;
function yu(e, t) {
  return e
    ? kt(this._months)
      ? this._months[e.month()]
      : this._months[
          (this._months.isFormat || ea).test(t) ? "format" : "standalone"
        ][e.month()]
    : kt(this._months)
    ? this._months
    : this._months.standalone;
}
function xu(e, t) {
  return e
    ? kt(this._monthsShort)
      ? this._monthsShort[e.month()]
      : this._monthsShort[ea.test(t) ? "format" : "standalone"][e.month()]
    : kt(this._monthsShort)
    ? this._monthsShort
    : this._monthsShort.standalone;
}
function wu(e, t, s) {
  var i,
    n,
    o,
    r = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (
      this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = [],
        i = 0;
      i < 12;
      ++i
    )
      (o = Lt([2e3, i])),
        (this._shortMonthsParse[i] = this.monthsShort(
          o,
          ""
        ).toLocaleLowerCase()),
        (this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase());
  return s
    ? t === "MMM"
      ? ((n = q.call(this._shortMonthsParse, r)), n !== -1 ? n : null)
      : ((n = q.call(this._longMonthsParse, r)), n !== -1 ? n : null)
    : t === "MMM"
    ? ((n = q.call(this._shortMonthsParse, r)),
      n !== -1
        ? n
        : ((n = q.call(this._longMonthsParse, r)), n !== -1 ? n : null))
    : ((n = q.call(this._longMonthsParse, r)),
      n !== -1
        ? n
        : ((n = q.call(this._shortMonthsParse, r)), n !== -1 ? n : null));
}
function ku(e, t, s) {
  var i, n, o;
  if (this._monthsParseExact) return wu.call(this, e, t, s);
  for (
    this._monthsParse ||
      ((this._monthsParse = []),
      (this._longMonthsParse = []),
      (this._shortMonthsParse = [])),
      i = 0;
    i < 12;
    i++
  ) {
    if (
      ((n = Lt([2e3, i])),
      s &&
        !this._longMonthsParse[i] &&
        ((this._longMonthsParse[i] = new RegExp(
          "^" + this.months(n, "").replace(".", "") + "$",
          "i"
        )),
        (this._shortMonthsParse[i] = new RegExp(
          "^" + this.monthsShort(n, "").replace(".", "") + "$",
          "i"
        ))),
      !s &&
        !this._monthsParse[i] &&
        ((o = "^" + this.months(n, "") + "|^" + this.monthsShort(n, "")),
        (this._monthsParse[i] = new RegExp(o.replace(".", ""), "i"))),
      s && t === "MMMM" && this._longMonthsParse[i].test(e))
    )
      return i;
    if (s && t === "MMM" && this._shortMonthsParse[i].test(e)) return i;
    if (!s && this._monthsParse[i].test(e)) return i;
  }
}
function sa(e, t) {
  if (!e.isValid()) return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t)) t = F(t);
    else if (((t = e.localeData().monthsParse(t)), !Vt(t))) return e;
  }
  var s = t,
    i = e.date();
  return (
    (i = i < 29 ? i : Math.min(i, pn(e.year(), s))),
    e._isUTC ? e._d.setUTCMonth(s, i) : e._d.setMonth(s, i),
    e
  );
}
function ia(e) {
  return e != null
    ? (sa(this, e), x.updateOffset(this, !0), this)
    : rs(this, "Month");
}
function vu() {
  return pn(this.year(), this.month());
}
function Mu(e) {
  return this._monthsParseExact
    ? (Y(this, "_monthsRegex") || na.call(this),
      e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    : (Y(this, "_monthsShortRegex") || (this._monthsShortRegex = _u),
      this._monthsShortStrictRegex && e
        ? this._monthsShortStrictRegex
        : this._monthsShortRegex);
}
function Su(e) {
  return this._monthsParseExact
    ? (Y(this, "_monthsRegex") || na.call(this),
      e ? this._monthsStrictRegex : this._monthsRegex)
    : (Y(this, "_monthsRegex") || (this._monthsRegex = bu),
      this._monthsStrictRegex && e
        ? this._monthsStrictRegex
        : this._monthsRegex);
}
function na() {
  function e(l, h) {
    return h.length - l.length;
  }
  var t = [],
    s = [],
    i = [],
    n,
    o,
    r,
    a;
  for (n = 0; n < 12; n++)
    (o = Lt([2e3, n])),
      (r = Ht(this.monthsShort(o, ""))),
      (a = Ht(this.months(o, ""))),
      t.push(r),
      s.push(a),
      i.push(a),
      i.push(r);
  t.sort(e),
    s.sort(e),
    i.sort(e),
    (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
    (this._monthsShortRegex = this._monthsRegex),
    (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
    (this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function Du(e, t, s, i, n, o, r) {
  var a;
  return (
    e < 100 && e >= 0
      ? ((a = new Date(e + 400, t, s, i, n, o, r)),
        isFinite(a.getFullYear()) && a.setFullYear(e))
      : (a = new Date(e, t, s, i, n, o, r)),
    a
  );
}
function as(e) {
  var t, s;
  return (
    e < 100 && e >= 0
      ? ((s = Array.prototype.slice.call(arguments)),
        (s[0] = e + 400),
        (t = new Date(Date.UTC.apply(null, s))),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
      : (t = new Date(Date.UTC.apply(null, arguments))),
    t
  );
}
function Zs(e, t, s) {
  var i = 7 + t - s,
    n = (7 + as(e, 0, i).getUTCDay() - t) % 7;
  return -n + i - 1;
}
function oa(e, t, s, i, n) {
  var o = (7 + s - i) % 7,
    r = Zs(e, i, n),
    a = 1 + 7 * (t - 1) + o + r,
    l,
    h;
  return (
    a <= 0
      ? ((l = e - 1), (h = Je(l) + a))
      : a > Je(e)
      ? ((l = e + 1), (h = a - Je(e)))
      : ((l = e), (h = a)),
    { year: l, dayOfYear: h }
  );
}
function ls(e, t, s) {
  var i = Zs(e.year(), t, s),
    n = Math.floor((e.dayOfYear() - i - 1) / 7) + 1,
    o,
    r;
  return (
    n < 1
      ? ((r = e.year() - 1), (o = n + Bt(r, t, s)))
      : n > Bt(e.year(), t, s)
      ? ((o = n - Bt(e.year(), t, s)), (r = e.year() + 1))
      : ((r = e.year()), (o = n)),
    { week: o, year: r }
  );
}
function Bt(e, t, s) {
  var i = Zs(e, t, s),
    n = Zs(e + 1, t, s);
  return (Je(e) - i + n) / 7;
}
M("w", ["ww", 2], "wo", "week");
M("W", ["WW", 2], "Wo", "isoWeek");
k("w", $, Ye);
k("ww", $, ft);
k("W", $, Ye);
k("WW", $, ft);
ms(["w", "ww", "W", "WW"], function (e, t, s, i) {
  t[i.substr(0, 1)] = F(e);
});
function Ou(e) {
  return ls(e, this._week.dow, this._week.doy).week;
}
var Cu = { dow: 0, doy: 6 };
function Pu() {
  return this._week.dow;
}
function Tu() {
  return this._week.doy;
}
function Fu(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Lu(e) {
  var t = ls(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
M("d", 0, "do", "day");
M("dd", 0, 0, function (e) {
  return this.localeData().weekdaysMin(this, e);
});
M("ddd", 0, 0, function (e) {
  return this.localeData().weekdaysShort(this, e);
});
M("dddd", 0, 0, function (e) {
  return this.localeData().weekdays(this, e);
});
M("e", 0, 0, "weekday");
M("E", 0, 0, "isoWeekday");
k("d", $);
k("e", $);
k("E", $);
k("dd", function (e, t) {
  return t.weekdaysMinRegex(e);
});
k("ddd", function (e, t) {
  return t.weekdaysShortRegex(e);
});
k("dddd", function (e, t) {
  return t.weekdaysRegex(e);
});
ms(["dd", "ddd", "dddd"], function (e, t, s, i) {
  var n = s._locale.weekdaysParse(e, i, s._strict);
  n != null ? (t.d = n) : (T(s).invalidWeekday = e);
});
ms(["d", "e", "E"], function (e, t, s, i) {
  t[i] = F(e);
});
function Au(e, t) {
  return typeof e != "string"
    ? e
    : isNaN(e)
    ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
    : parseInt(e, 10);
}
function Ru(e, t) {
  return typeof e == "string"
    ? t.weekdaysParse(e) % 7 || 7
    : isNaN(e)
    ? null
    : e;
}
function _n(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Iu = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  ra = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
  Yu = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
  Eu = gs,
  Nu = gs,
  Wu = gs;
function ju(e, t) {
  var s = kt(this._weekdays)
    ? this._weekdays
    : this._weekdays[
        e && e !== !0 && this._weekdays.isFormat.test(t)
          ? "format"
          : "standalone"
      ];
  return e === !0 ? _n(s, this._week.dow) : e ? s[e.day()] : s;
}
function zu(e) {
  return e === !0
    ? _n(this._weekdaysShort, this._week.dow)
    : e
    ? this._weekdaysShort[e.day()]
    : this._weekdaysShort;
}
function Hu(e) {
  return e === !0
    ? _n(this._weekdaysMin, this._week.dow)
    : e
    ? this._weekdaysMin[e.day()]
    : this._weekdaysMin;
}
function Bu(e, t, s) {
  var i,
    n,
    o,
    r = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (
      this._weekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._minWeekdaysParse = [],
        i = 0;
      i < 7;
      ++i
    )
      (o = Lt([2e3, 1]).day(i)),
        (this._minWeekdaysParse[i] = this.weekdaysMin(
          o,
          ""
        ).toLocaleLowerCase()),
        (this._shortWeekdaysParse[i] = this.weekdaysShort(
          o,
          ""
        ).toLocaleLowerCase()),
        (this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase());
  return s
    ? t === "dddd"
      ? ((n = q.call(this._weekdaysParse, r)), n !== -1 ? n : null)
      : t === "ddd"
      ? ((n = q.call(this._shortWeekdaysParse, r)), n !== -1 ? n : null)
      : ((n = q.call(this._minWeekdaysParse, r)), n !== -1 ? n : null)
    : t === "dddd"
    ? ((n = q.call(this._weekdaysParse, r)),
      n !== -1 || ((n = q.call(this._shortWeekdaysParse, r)), n !== -1)
        ? n
        : ((n = q.call(this._minWeekdaysParse, r)), n !== -1 ? n : null))
    : t === "ddd"
    ? ((n = q.call(this._shortWeekdaysParse, r)),
      n !== -1 || ((n = q.call(this._weekdaysParse, r)), n !== -1)
        ? n
        : ((n = q.call(this._minWeekdaysParse, r)), n !== -1 ? n : null))
    : ((n = q.call(this._minWeekdaysParse, r)),
      n !== -1 || ((n = q.call(this._weekdaysParse, r)), n !== -1)
        ? n
        : ((n = q.call(this._shortWeekdaysParse, r)), n !== -1 ? n : null));
}
function Vu(e, t, s) {
  var i, n, o;
  if (this._weekdaysParseExact) return Bu.call(this, e, t, s);
  for (
    this._weekdaysParse ||
      ((this._weekdaysParse = []),
      (this._minWeekdaysParse = []),
      (this._shortWeekdaysParse = []),
      (this._fullWeekdaysParse = [])),
      i = 0;
    i < 7;
    i++
  ) {
    if (
      ((n = Lt([2e3, 1]).day(i)),
      s &&
        !this._fullWeekdaysParse[i] &&
        ((this._fullWeekdaysParse[i] = new RegExp(
          "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._shortWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
          "i"
        )),
        (this._minWeekdaysParse[i] = new RegExp(
          "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
          "i"
        ))),
      this._weekdaysParse[i] ||
        ((o =
          "^" +
          this.weekdays(n, "") +
          "|^" +
          this.weekdaysShort(n, "") +
          "|^" +
          this.weekdaysMin(n, "")),
        (this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i"))),
      s && t === "dddd" && this._fullWeekdaysParse[i].test(e))
    )
      return i;
    if (s && t === "ddd" && this._shortWeekdaysParse[i].test(e)) return i;
    if (s && t === "dd" && this._minWeekdaysParse[i].test(e)) return i;
    if (!s && this._weekdaysParse[i].test(e)) return i;
  }
}
function Uu(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = rs(this, "Day");
  return e != null ? ((e = Au(e, this.localeData())), this.add(e - t, "d")) : t;
}
function $u(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Gu(e) {
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    var t = Ru(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else return this.day() || 7;
}
function Ku(e) {
  return this._weekdaysParseExact
    ? (Y(this, "_weekdaysRegex") || bn.call(this),
      e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    : (Y(this, "_weekdaysRegex") || (this._weekdaysRegex = Eu),
      this._weekdaysStrictRegex && e
        ? this._weekdaysStrictRegex
        : this._weekdaysRegex);
}
function Xu(e) {
  return this._weekdaysParseExact
    ? (Y(this, "_weekdaysRegex") || bn.call(this),
      e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    : (Y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Nu),
      this._weekdaysShortStrictRegex && e
        ? this._weekdaysShortStrictRegex
        : this._weekdaysShortRegex);
}
function Zu(e) {
  return this._weekdaysParseExact
    ? (Y(this, "_weekdaysRegex") || bn.call(this),
      e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    : (Y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Wu),
      this._weekdaysMinStrictRegex && e
        ? this._weekdaysMinStrictRegex
        : this._weekdaysMinRegex);
}
function bn() {
  function e(c, d) {
    return d.length - c.length;
  }
  var t = [],
    s = [],
    i = [],
    n = [],
    o,
    r,
    a,
    l,
    h;
  for (o = 0; o < 7; o++)
    (r = Lt([2e3, 1]).day(o)),
      (a = Ht(this.weekdaysMin(r, ""))),
      (l = Ht(this.weekdaysShort(r, ""))),
      (h = Ht(this.weekdays(r, ""))),
      t.push(a),
      s.push(l),
      i.push(h),
      n.push(a),
      n.push(l),
      n.push(h);
  t.sort(e),
    s.sort(e),
    i.sort(e),
    n.sort(e),
    (this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i")),
    (this._weekdaysShortRegex = this._weekdaysRegex),
    (this._weekdaysMinRegex = this._weekdaysRegex),
    (this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")),
    (this._weekdaysShortStrictRegex = new RegExp(
      "^(" + s.join("|") + ")",
      "i"
    )),
    (this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"));
}
function yn() {
  return this.hours() % 12 || 12;
}
function qu() {
  return this.hours() || 24;
}
M("H", ["HH", 2], 0, "hour");
M("h", ["hh", 2], 0, yn);
M("k", ["kk", 2], 0, qu);
M("hmm", 0, 0, function () {
  return "" + yn.apply(this) + Ft(this.minutes(), 2);
});
M("hmmss", 0, 0, function () {
  return "" + yn.apply(this) + Ft(this.minutes(), 2) + Ft(this.seconds(), 2);
});
M("Hmm", 0, 0, function () {
  return "" + this.hours() + Ft(this.minutes(), 2);
});
M("Hmmss", 0, 0, function () {
  return "" + this.hours() + Ft(this.minutes(), 2) + Ft(this.seconds(), 2);
});
function aa(e, t) {
  M(e, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), t);
  });
}
aa("a", !0);
aa("A", !1);
function la(e, t) {
  return t._meridiemParse;
}
k("a", la);
k("A", la);
k("H", $, mn);
k("h", $, Ye);
k("k", $, Ye);
k("HH", $, ft);
k("hh", $, ft);
k("kk", $, ft);
k("hmm", Zr);
k("hmmss", qr);
k("Hmm", Zr);
k("Hmmss", qr);
B(["H", "HH"], tt);
B(["k", "kk"], function (e, t, s) {
  var i = F(e);
  t[tt] = i === 24 ? 0 : i;
});
B(["a", "A"], function (e, t, s) {
  (s._isPm = s._locale.isPM(e)), (s._meridiem = e);
});
B(["h", "hh"], function (e, t, s) {
  (t[tt] = F(e)), (T(s).bigHour = !0);
});
B("hmm", function (e, t, s) {
  var i = e.length - 2;
  (t[tt] = F(e.substr(0, i))), (t[wt] = F(e.substr(i))), (T(s).bigHour = !0);
});
B("hmmss", function (e, t, s) {
  var i = e.length - 4,
    n = e.length - 2;
  (t[tt] = F(e.substr(0, i))),
    (t[wt] = F(e.substr(i, 2))),
    (t[zt] = F(e.substr(n))),
    (T(s).bigHour = !0);
});
B("Hmm", function (e, t, s) {
  var i = e.length - 2;
  (t[tt] = F(e.substr(0, i))), (t[wt] = F(e.substr(i)));
});
B("Hmmss", function (e, t, s) {
  var i = e.length - 4,
    n = e.length - 2;
  (t[tt] = F(e.substr(0, i))),
    (t[wt] = F(e.substr(i, 2))),
    (t[zt] = F(e.substr(n)));
});
function Qu(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ju = /[ap]\.?m?\.?/i,
  tf = Ee("Hours", !0);
function ef(e, t, s) {
  return e > 11 ? (s ? "pm" : "PM") : s ? "am" : "AM";
}
var ha = {
    calendar: Bd,
    longDateFormat: Gd,
    invalidDate: Xd,
    ordinal: qd,
    dayOfMonthOrdinalParse: Qd,
    relativeTime: tu,
    months: pu,
    monthsShort: ta,
    week: Cu,
    weekdays: Iu,
    weekdaysMin: Yu,
    weekdaysShort: ra,
    meridiemParse: Ju,
  },
  G = {},
  Ue = {},
  hs;
function sf(e, t) {
  var s,
    i = Math.min(e.length, t.length);
  for (s = 0; s < i; s += 1) if (e[s] !== t[s]) return s;
  return i;
}
function Zo(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function nf(e) {
  for (var t = 0, s, i, n, o; t < e.length; ) {
    for (
      o = Zo(e[t]).split("-"),
        s = o.length,
        i = Zo(e[t + 1]),
        i = i ? i.split("-") : null;
      s > 0;

    ) {
      if (((n = ci(o.slice(0, s).join("-"))), n)) return n;
      if (i && i.length >= s && sf(o, i) >= s - 1) break;
      s--;
    }
    t++;
  }
  return hs;
}
function of(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ci(e) {
  var t = null,
    s;
  if (
    G[e] === void 0 &&
    typeof module < "u" &&
    module &&
    module.exports &&
    of(e)
  )
    try {
      (t = hs._abbr), (s = require), s("./locale/" + e), ee(t);
    } catch {
      G[e] = null;
    }
  return G[e];
}
function ee(e, t) {
  var s;
  return (
    e &&
      (ht(t) ? (s = Ut(e)) : (s = xn(e, t)),
      s
        ? (hs = s)
        : typeof console < "u" &&
          console.warn &&
          console.warn(
            "Locale " + e + " not found. Did you forget to load it?"
          )),
    hs._abbr
  );
}
function xn(e, t) {
  if (t !== null) {
    var s,
      i = ha;
    if (((t.abbr = e), G[e] != null))
      $r(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ),
        (i = G[e]._config);
    else if (t.parentLocale != null)
      if (G[t.parentLocale] != null) i = G[t.parentLocale]._config;
      else if (((s = ci(t.parentLocale)), s != null)) i = s._config;
      else
        return (
          Ue[t.parentLocale] || (Ue[t.parentLocale] = []),
          Ue[t.parentLocale].push({ name: e, config: t }),
          null
        );
    return (
      (G[e] = new cn(Ei(i, t))),
      Ue[e] &&
        Ue[e].forEach(function (n) {
          xn(n.name, n.config);
        }),
      ee(e),
      G[e]
    );
  } else return delete G[e], null;
}
function rf(e, t) {
  if (t != null) {
    var s,
      i,
      n = ha;
    G[e] != null && G[e].parentLocale != null
      ? G[e].set(Ei(G[e]._config, t))
      : ((i = ci(e)),
        i != null && (n = i._config),
        (t = Ei(n, t)),
        i == null && (t.abbr = e),
        (s = new cn(t)),
        (s.parentLocale = G[e]),
        (G[e] = s)),
      ee(e);
  } else
    G[e] != null &&
      (G[e].parentLocale != null
        ? ((G[e] = G[e].parentLocale), e === ee() && ee(e))
        : G[e] != null && delete G[e]);
  return G[e];
}
function Ut(e) {
  var t;
  if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
    return hs;
  if (!kt(e)) {
    if (((t = ci(e)), t)) return t;
    e = [e];
  }
  return nf(e);
}
function af() {
  return Ni(G);
}
function wn(e) {
  var t,
    s = e._a;
  return (
    s &&
      T(e).overflow === -2 &&
      ((t =
        s[jt] < 0 || s[jt] > 11
          ? jt
          : s[Pt] < 1 || s[Pt] > pn(s[ot], s[jt])
          ? Pt
          : s[tt] < 0 ||
            s[tt] > 24 ||
            (s[tt] === 24 && (s[wt] !== 0 || s[zt] !== 0 || s[de] !== 0))
          ? tt
          : s[wt] < 0 || s[wt] > 59
          ? wt
          : s[zt] < 0 || s[zt] > 59
          ? zt
          : s[de] < 0 || s[de] > 999
          ? de
          : -1),
      T(e)._overflowDayOfYear && (t < ot || t > Pt) && (t = Pt),
      T(e)._overflowWeeks && t === -1 && (t = cu),
      T(e)._overflowWeekday && t === -1 && (t = du),
      (T(e).overflow = t)),
    e
  );
}
var lf =
    /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  hf =
    /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  cf = /Z|[+-]\d\d(?::?\d\d)?/,
  As = [
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
  Ci = [
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
  df = /^\/?Date\((-?\d+)/i,
  uf =
    /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
  ff = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60,
  };
function ca(e) {
  var t,
    s,
    i = e._i,
    n = lf.exec(i) || hf.exec(i),
    o,
    r,
    a,
    l,
    h = As.length,
    c = Ci.length;
  if (n) {
    for (T(e).iso = !0, t = 0, s = h; t < s; t++)
      if (As[t][1].exec(n[1])) {
        (r = As[t][0]), (o = As[t][2] !== !1);
        break;
      }
    if (r == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, s = c; t < s; t++)
        if (Ci[t][1].exec(n[3])) {
          a = (n[2] || " ") + Ci[t][0];
          break;
        }
      if (a == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!o && a != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (cf.exec(n[4])) l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    (e._f = r + (a || "") + (l || "")), vn(e);
  } else e._isValid = !1;
}
function gf(e, t, s, i, n, o) {
  var r = [
    mf(e),
    ta.indexOf(t),
    parseInt(s, 10),
    parseInt(i, 10),
    parseInt(n, 10),
  ];
  return o && r.push(parseInt(o, 10)), r;
}
function mf(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function pf(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, " ")
    .replace(/(\s\s+)/g, " ")
    .replace(/^\s\s*/, "")
    .replace(/\s\s*$/, "");
}
function _f(e, t, s) {
  if (e) {
    var i = ra.indexOf(e),
      n = new Date(t[0], t[1], t[2]).getDay();
    if (i !== n) return (T(s).weekdayMismatch = !0), (s._isValid = !1), !1;
  }
  return !0;
}
function bf(e, t, s) {
  if (e) return ff[e];
  if (t) return 0;
  var i = parseInt(s, 10),
    n = i % 100,
    o = (i - n) / 100;
  return o * 60 + n;
}
function da(e) {
  var t = uf.exec(pf(e._i)),
    s;
  if (t) {
    if (((s = gf(t[4], t[3], t[2], t[5], t[6], t[7])), !_f(t[1], s, e))) return;
    (e._a = s),
      (e._tzm = bf(t[8], t[9], t[10])),
      (e._d = as.apply(null, e._a)),
      e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      (T(e).rfc2822 = !0);
  } else e._isValid = !1;
}
function yf(e) {
  var t = df.exec(e._i);
  if (t !== null) {
    e._d = new Date(+t[1]);
    return;
  }
  if ((ca(e), e._isValid === !1)) delete e._isValid;
  else return;
  if ((da(e), e._isValid === !1)) delete e._isValid;
  else return;
  e._strict ? (e._isValid = !1) : x.createFromInputFallback(e);
}
x.createFromInputFallback = bt(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Me(e, t, s) {
  return e ?? t ?? s;
}
function xf(e) {
  var t = new Date(x.now());
  return e._useUTC
    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
    : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function kn(e) {
  var t,
    s,
    i = [],
    n,
    o,
    r;
  if (!e._d) {
    for (
      n = xf(e),
        e._w && e._a[Pt] == null && e._a[jt] == null && wf(e),
        e._dayOfYear != null &&
          ((r = Me(e._a[ot], n[ot])),
          (e._dayOfYear > Je(r) || e._dayOfYear === 0) &&
            (T(e)._overflowDayOfYear = !0),
          (s = as(r, 0, e._dayOfYear)),
          (e._a[jt] = s.getUTCMonth()),
          (e._a[Pt] = s.getUTCDate())),
        t = 0;
      t < 3 && e._a[t] == null;
      ++t
    )
      e._a[t] = i[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = i[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
    e._a[tt] === 24 &&
      e._a[wt] === 0 &&
      e._a[zt] === 0 &&
      e._a[de] === 0 &&
      ((e._nextDay = !0), (e._a[tt] = 0)),
      (e._d = (e._useUTC ? as : Du).apply(null, i)),
      (o = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
      e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
      e._nextDay && (e._a[tt] = 24),
      e._w &&
        typeof e._w.d < "u" &&
        e._w.d !== o &&
        (T(e).weekdayMismatch = !0);
  }
}
function wf(e) {
  var t, s, i, n, o, r, a, l, h;
  (t = e._w),
    t.GG != null || t.W != null || t.E != null
      ? ((o = 1),
        (r = 4),
        (s = Me(t.GG, e._a[ot], ls(U(), 1, 4).year)),
        (i = Me(t.W, 1)),
        (n = Me(t.E, 1)),
        (n < 1 || n > 7) && (l = !0))
      : ((o = e._locale._week.dow),
        (r = e._locale._week.doy),
        (h = ls(U(), o, r)),
        (s = Me(t.gg, e._a[ot], h.year)),
        (i = Me(t.w, h.week)),
        t.d != null
          ? ((n = t.d), (n < 0 || n > 6) && (l = !0))
          : t.e != null
          ? ((n = t.e + o), (t.e < 0 || t.e > 6) && (l = !0))
          : (n = o)),
    i < 1 || i > Bt(s, o, r)
      ? (T(e)._overflowWeeks = !0)
      : l != null
      ? (T(e)._overflowWeekday = !0)
      : ((a = oa(s, i, n, o, r)),
        (e._a[ot] = a.year),
        (e._dayOfYear = a.dayOfYear));
}
x.ISO_8601 = function () {};
x.RFC_2822 = function () {};
function vn(e) {
  if (e._f === x.ISO_8601) {
    ca(e);
    return;
  }
  if (e._f === x.RFC_2822) {
    da(e);
    return;
  }
  (e._a = []), (T(e).empty = !0);
  var t = "" + e._i,
    s,
    i,
    n,
    o,
    r,
    a = t.length,
    l = 0,
    h,
    c;
  for (n = Gr(e._f, e._locale).match(dn) || [], c = n.length, s = 0; s < c; s++)
    (o = n[s]),
      (i = (t.match(au(o, e)) || [])[0]),
      i &&
        ((r = t.substr(0, t.indexOf(i))),
        r.length > 0 && T(e).unusedInput.push(r),
        (t = t.slice(t.indexOf(i) + i.length)),
        (l += i.length)),
      Pe[o]
        ? (i ? (T(e).empty = !1) : T(e).unusedTokens.push(o), hu(o, i, e))
        : e._strict && !i && T(e).unusedTokens.push(o);
  (T(e).charsLeftOver = a - l),
    t.length > 0 && T(e).unusedInput.push(t),
    e._a[tt] <= 12 &&
      T(e).bigHour === !0 &&
      e._a[tt] > 0 &&
      (T(e).bigHour = void 0),
    (T(e).parsedDateParts = e._a.slice(0)),
    (T(e).meridiem = e._meridiem),
    (e._a[tt] = kf(e._locale, e._a[tt], e._meridiem)),
    (h = T(e).era),
    h !== null && (e._a[ot] = e._locale.erasConvertYear(h, e._a[ot])),
    kn(e),
    wn(e);
}
function kf(e, t, s) {
  var i;
  return s == null
    ? t
    : e.meridiemHour != null
    ? e.meridiemHour(t, s)
    : (e.isPM != null &&
        ((i = e.isPM(s)), i && t < 12 && (t += 12), !i && t === 12 && (t = 0)),
      t);
}
function vf(e) {
  var t,
    s,
    i,
    n,
    o,
    r,
    a = !1,
    l = e._f.length;
  if (l === 0) {
    (T(e).invalidFormat = !0), (e._d = new Date(NaN));
    return;
  }
  for (n = 0; n < l; n++)
    (o = 0),
      (r = !1),
      (t = hn({}, e)),
      e._useUTC != null && (t._useUTC = e._useUTC),
      (t._f = e._f[n]),
      vn(t),
      ln(t) && (r = !0),
      (o += T(t).charsLeftOver),
      (o += T(t).unusedTokens.length * 10),
      (T(t).score = o),
      a
        ? o < i && ((i = o), (s = t))
        : (i == null || o < i || r) && ((i = o), (s = t), r && (a = !0));
  qt(e, s || t);
}
function Mf(e) {
  if (!e._d) {
    var t = un(e._i),
      s = t.day === void 0 ? t.date : t.day;
    (e._a = Vr(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function (i) {
        return i && parseInt(i, 10);
      }
    )),
      kn(e);
  }
}
function Sf(e) {
  var t = new fs(wn(ua(e)));
  return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
}
function ua(e) {
  var t = e._i,
    s = e._f;
  return (
    (e._locale = e._locale || Ut(e._l)),
    t === null || (s === void 0 && t === "")
      ? ii({ nullInput: !0 })
      : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
        vt(t)
          ? new fs(wn(t))
          : (us(t) ? (e._d = t) : kt(s) ? vf(e) : s ? vn(e) : Df(e),
            ln(e) || (e._d = null),
            e))
  );
}
function Df(e) {
  var t = e._i;
  ht(t)
    ? (e._d = new Date(x.now()))
    : us(t)
    ? (e._d = new Date(t.valueOf()))
    : typeof t == "string"
    ? yf(e)
    : kt(t)
    ? ((e._a = Vr(t.slice(0), function (s) {
        return parseInt(s, 10);
      })),
      kn(e))
    : ge(t)
    ? Mf(e)
    : Vt(t)
    ? (e._d = new Date(t))
    : x.createFromInputFallback(e);
}
function fa(e, t, s, i, n) {
  var o = {};
  return (
    (t === !0 || t === !1) && ((i = t), (t = void 0)),
    (s === !0 || s === !1) && ((i = s), (s = void 0)),
    ((ge(e) && an(e)) || (kt(e) && e.length === 0)) && (e = void 0),
    (o._isAMomentObject = !0),
    (o._useUTC = o._isUTC = n),
    (o._l = s),
    (o._i = e),
    (o._f = t),
    (o._strict = i),
    Sf(o)
  );
}
function U(e, t, s, i) {
  return fa(e, t, s, i, !1);
}
var Of = bt(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = U.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : ii();
    }
  ),
  Cf = bt(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = U.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e > this ? this : e) : ii();
    }
  );
function ga(e, t) {
  var s, i;
  if ((t.length === 1 && kt(t[0]) && (t = t[0]), !t.length)) return U();
  for (s = t[0], i = 1; i < t.length; ++i)
    (!t[i].isValid() || t[i][e](s)) && (s = t[i]);
  return s;
}
function Pf() {
  var e = [].slice.call(arguments, 0);
  return ga("isBefore", e);
}
function Tf() {
  var e = [].slice.call(arguments, 0);
  return ga("isAfter", e);
}
var Ff = function () {
    return Date.now ? Date.now() : +new Date();
  },
  $e = [
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
function Lf(e) {
  var t,
    s = !1,
    i,
    n = $e.length;
  for (t in e)
    if (Y(e, t) && !(q.call($e, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (i = 0; i < n; ++i)
    if (e[$e[i]]) {
      if (s) return !1;
      parseFloat(e[$e[i]]) !== F(e[$e[i]]) && (s = !0);
    }
  return !0;
}
function Af() {
  return this._isValid;
}
function Rf() {
  return Mt(NaN);
}
function di(e) {
  var t = un(e),
    s = t.year || 0,
    i = t.quarter || 0,
    n = t.month || 0,
    o = t.week || t.isoWeek || 0,
    r = t.day || 0,
    a = t.hour || 0,
    l = t.minute || 0,
    h = t.second || 0,
    c = t.millisecond || 0;
  (this._isValid = Lf(t)),
    (this._milliseconds = +c + h * 1e3 + l * 6e4 + a * 1e3 * 60 * 60),
    (this._days = +r + o * 7),
    (this._months = +n + i * 3 + s * 12),
    (this._data = {}),
    (this._locale = Ut()),
    this._bubble();
}
function Ws(e) {
  return e instanceof di;
}
function ji(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function If(e, t, s) {
  var i = Math.min(e.length, t.length),
    n = Math.abs(e.length - t.length),
    o = 0,
    r;
  for (r = 0; r < i; r++) F(e[r]) !== F(t[r]) && o++;
  return o + n;
}
function ma(e, t) {
  M(e, 0, 0, function () {
    var s = this.utcOffset(),
      i = "+";
    return (
      s < 0 && ((s = -s), (i = "-")),
      i + Ft(~~(s / 60), 2) + t + Ft(~~s % 60, 2)
    );
  });
}
ma("Z", ":");
ma("ZZ", "");
k("Z", li);
k("ZZ", li);
B(["Z", "ZZ"], function (e, t, s) {
  (s._useUTC = !0), (s._tzm = Mn(li, e));
});
var Yf = /([\+\-]|\d\d)/gi;
function Mn(e, t) {
  var s = (t || "").match(e),
    i,
    n,
    o;
  return s === null
    ? null
    : ((i = s[s.length - 1] || []),
      (n = (i + "").match(Yf) || ["-", 0, 0]),
      (o = +(n[1] * 60) + F(n[2])),
      o === 0 ? 0 : n[0] === "+" ? o : -o);
}
function Sn(e, t) {
  var s, i;
  return t._isUTC
    ? ((s = t.clone()),
      (i = (vt(e) || us(e) ? e.valueOf() : U(e).valueOf()) - s.valueOf()),
      s._d.setTime(s._d.valueOf() + i),
      x.updateOffset(s, !1),
      s)
    : U(e).local();
}
function zi(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
x.updateOffset = function () {};
function Ef(e, t, s) {
  var i = this._offset || 0,
    n;
  if (!this.isValid()) return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (((e = Mn(li, e)), e === null)) return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return (
      !this._isUTC && t && (n = zi(this)),
      (this._offset = e),
      (this._isUTC = !0),
      n != null && this.add(n, "m"),
      i !== e &&
        (!t || this._changeInProgress
          ? ba(this, Mt(e - i, "m"), 1, !1)
          : this._changeInProgress ||
            ((this._changeInProgress = !0),
            x.updateOffset(this, !0),
            (this._changeInProgress = null))),
      this
    );
  } else return this._isUTC ? i : zi(this);
}
function Nf(e, t) {
  return e != null
    ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
    : -this.utcOffset();
}
function Wf(e) {
  return this.utcOffset(0, e);
}
function jf(e) {
  return (
    this._isUTC &&
      (this.utcOffset(0, e),
      (this._isUTC = !1),
      e && this.subtract(zi(this), "m")),
    this
  );
}
function zf() {
  if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Mn(ou, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Hf(e) {
  return this.isValid()
    ? ((e = e ? U(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
    : !1;
}
function Bf() {
  return (
    this.utcOffset() > this.clone().month(0).utcOffset() ||
    this.utcOffset() > this.clone().month(5).utcOffset()
  );
}
function Vf() {
  if (!ht(this._isDSTShifted)) return this._isDSTShifted;
  var e = {},
    t;
  return (
    hn(e, this),
    (e = ua(e)),
    e._a
      ? ((t = e._isUTC ? Lt(e._a) : U(e._a)),
        (this._isDSTShifted = this.isValid() && If(e._a, t.toArray()) > 0))
      : (this._isDSTShifted = !1),
    this._isDSTShifted
  );
}
function Uf() {
  return this.isValid() ? !this._isUTC : !1;
}
function $f() {
  return this.isValid() ? this._isUTC : !1;
}
function pa() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Gf = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
  Kf =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Mt(e, t) {
  var s = e,
    i = null,
    n,
    o,
    r;
  return (
    Ws(e)
      ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
      : Vt(e) || !isNaN(+e)
      ? ((s = {}), t ? (s[t] = +e) : (s.milliseconds = +e))
      : (i = Gf.exec(e))
      ? ((n = i[1] === "-" ? -1 : 1),
        (s = {
          y: 0,
          d: F(i[Pt]) * n,
          h: F(i[tt]) * n,
          m: F(i[wt]) * n,
          s: F(i[zt]) * n,
          ms: F(ji(i[de] * 1e3)) * n,
        }))
      : (i = Kf.exec(e))
      ? ((n = i[1] === "-" ? -1 : 1),
        (s = {
          y: he(i[2], n),
          M: he(i[3], n),
          w: he(i[4], n),
          d: he(i[5], n),
          h: he(i[6], n),
          m: he(i[7], n),
          s: he(i[8], n),
        }))
      : s == null
      ? (s = {})
      : typeof s == "object" &&
        ("from" in s || "to" in s) &&
        ((r = Xf(U(s.from), U(s.to))),
        (s = {}),
        (s.ms = r.milliseconds),
        (s.M = r.months)),
    (o = new di(s)),
    Ws(e) && Y(e, "_locale") && (o._locale = e._locale),
    Ws(e) && Y(e, "_isValid") && (o._isValid = e._isValid),
    o
  );
}
Mt.fn = di.prototype;
Mt.invalid = Rf;
function he(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function qo(e, t) {
  var s = {};
  return (
    (s.months = t.month() - e.month() + (t.year() - e.year()) * 12),
    e.clone().add(s.months, "M").isAfter(t) && --s.months,
    (s.milliseconds = +t - +e.clone().add(s.months, "M")),
    s
  );
}
function Xf(e, t) {
  var s;
  return e.isValid() && t.isValid()
    ? ((t = Sn(t, e)),
      e.isBefore(t)
        ? (s = qo(e, t))
        : ((s = qo(t, e)),
          (s.milliseconds = -s.milliseconds),
          (s.months = -s.months)),
      s)
    : { milliseconds: 0, months: 0 };
}
function _a(e, t) {
  return function (s, i) {
    var n, o;
    return (
      i !== null &&
        !isNaN(+i) &&
        ($r(
          t,
          "moment()." +
            t +
            "(period, number) is deprecated. Please use moment()." +
            t +
            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
        ),
        (o = s),
        (s = i),
        (i = o)),
      (n = Mt(s, i)),
      ba(this, n, e),
      this
    );
  };
}
function ba(e, t, s, i) {
  var n = t._milliseconds,
    o = ji(t._days),
    r = ji(t._months);
  e.isValid() &&
    ((i = i ?? !0),
    r && sa(e, rs(e, "Month") + r * s),
    o && Jr(e, "Date", rs(e, "Date") + o * s),
    n && e._d.setTime(e._d.valueOf() + n * s),
    i && x.updateOffset(e, o || r));
}
var Zf = _a(1, "add"),
  qf = _a(-1, "subtract");
function ya(e) {
  return typeof e == "string" || e instanceof String;
}
function Qf(e) {
  return (
    vt(e) ||
    us(e) ||
    ya(e) ||
    Vt(e) ||
    tg(e) ||
    Jf(e) ||
    e === null ||
    e === void 0
  );
}
function Jf(e) {
  var t = ge(e) && !an(e),
    s = !1,
    i = [
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
    ],
    n,
    o,
    r = i.length;
  for (n = 0; n < r; n += 1) (o = i[n]), (s = s || Y(e, o));
  return t && s;
}
function tg(e) {
  var t = kt(e),
    s = !1;
  return (
    t &&
      (s =
        e.filter(function (i) {
          return !Vt(i) && ya(e);
        }).length === 0),
    t && s
  );
}
function eg(e) {
  var t = ge(e) && !an(e),
    s = !1,
    i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
    n,
    o;
  for (n = 0; n < i.length; n += 1) (o = i[n]), (s = s || Y(e, o));
  return t && s;
}
function sg(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6
    ? "sameElse"
    : s < -1
    ? "lastWeek"
    : s < 0
    ? "lastDay"
    : s < 1
    ? "sameDay"
    : s < 2
    ? "nextDay"
    : s < 7
    ? "nextWeek"
    : "sameElse";
}
function ig(e, t) {
  arguments.length === 1 &&
    (arguments[0]
      ? Qf(arguments[0])
        ? ((e = arguments[0]), (t = void 0))
        : eg(arguments[0]) && ((t = arguments[0]), (e = void 0))
      : ((e = void 0), (t = void 0)));
  var s = e || U(),
    i = Sn(s, this).startOf("day"),
    n = x.calendarFormat(this, i) || "sameElse",
    o = t && (At(t[n]) ? t[n].call(this, s) : t[n]);
  return this.format(o || this.localeData().calendar(n, this, U(s)));
}
function ng() {
  return new fs(this);
}
function og(e, t) {
  var s = vt(e) ? e : U(e);
  return this.isValid() && s.isValid()
    ? ((t = yt(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() > s.valueOf()
        : s.valueOf() < this.clone().startOf(t).valueOf())
    : !1;
}
function rg(e, t) {
  var s = vt(e) ? e : U(e);
  return this.isValid() && s.isValid()
    ? ((t = yt(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() < s.valueOf()
        : this.clone().endOf(t).valueOf() < s.valueOf())
    : !1;
}
function ag(e, t, s, i) {
  var n = vt(e) ? e : U(e),
    o = vt(t) ? t : U(t);
  return this.isValid() && n.isValid() && o.isValid()
    ? ((i = i || "()"),
      (i[0] === "(" ? this.isAfter(n, s) : !this.isBefore(n, s)) &&
        (i[1] === ")" ? this.isBefore(o, s) : !this.isAfter(o, s)))
    : !1;
}
function lg(e, t) {
  var s = vt(e) ? e : U(e),
    i;
  return this.isValid() && s.isValid()
    ? ((t = yt(t) || "millisecond"),
      t === "millisecond"
        ? this.valueOf() === s.valueOf()
        : ((i = s.valueOf()),
          this.clone().startOf(t).valueOf() <= i &&
            i <= this.clone().endOf(t).valueOf()))
    : !1;
}
function hg(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function cg(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function dg(e, t, s) {
  var i, n, o;
  if (!this.isValid()) return NaN;
  if (((i = Sn(e, this)), !i.isValid())) return NaN;
  switch (((n = (i.utcOffset() - this.utcOffset()) * 6e4), (t = yt(t)), t)) {
    case "year":
      o = js(this, i) / 12;
      break;
    case "month":
      o = js(this, i);
      break;
    case "quarter":
      o = js(this, i) / 3;
      break;
    case "second":
      o = (this - i) / 1e3;
      break;
    case "minute":
      o = (this - i) / 6e4;
      break;
    case "hour":
      o = (this - i) / 36e5;
      break;
    case "day":
      o = (this - i - n) / 864e5;
      break;
    case "week":
      o = (this - i - n) / 6048e5;
      break;
    default:
      o = this - i;
  }
  return s ? o : pt(o);
}
function js(e, t) {
  if (e.date() < t.date()) return -js(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()),
    i = e.clone().add(s, "months"),
    n,
    o;
  return (
    t - i < 0
      ? ((n = e.clone().add(s - 1, "months")), (o = (t - i) / (i - n)))
      : ((n = e.clone().add(s + 1, "months")), (o = (t - i) / (n - i))),
    -(s + o) || 0
  );
}
x.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
x.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function ug() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function fg(e) {
  if (!this.isValid()) return null;
  var t = e !== !0,
    s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999
    ? Ns(
        s,
        t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
      )
    : At(Date.prototype.toISOString)
    ? t
      ? this.toDate().toISOString()
      : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
          .toISOString()
          .replace("Z", Ns(s, "Z"))
    : Ns(s, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function gg() {
  if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
  var e = "moment",
    t = "",
    s,
    i,
    n,
    o;
  return (
    this.isLocal() ||
      ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
      (t = "Z")),
    (s = "[" + e + '("]'),
    (i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
    (n = "-MM-DD[T]HH:mm:ss.SSS"),
    (o = t + '[")]'),
    this.format(s + i + n + o)
  );
}
function mg(e) {
  e || (e = this.isUtc() ? x.defaultFormatUtc : x.defaultFormat);
  var t = Ns(this, e);
  return this.localeData().postformat(t);
}
function pg(e, t) {
  return this.isValid() && ((vt(e) && e.isValid()) || U(e).isValid())
    ? Mt({ to: this, from: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function _g(e) {
  return this.from(U(), e);
}
function bg(e, t) {
  return this.isValid() && ((vt(e) && e.isValid()) || U(e).isValid())
    ? Mt({ from: this, to: e }).locale(this.locale()).humanize(!t)
    : this.localeData().invalidDate();
}
function yg(e) {
  return this.to(U(), e);
}
function xa(e) {
  var t;
  return e === void 0
    ? this._locale._abbr
    : ((t = Ut(e)), t != null && (this._locale = t), this);
}
var wa = bt(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function (e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function ka() {
  return this._locale;
}
var qs = 1e3,
  Te = 60 * qs,
  Qs = 60 * Te,
  va = (365 * 400 + 97) * 24 * Qs;
function Fe(e, t) {
  return ((e % t) + t) % t;
}
function Ma(e, t, s) {
  return e < 100 && e >= 0
    ? new Date(e + 400, t, s) - va
    : new Date(e, t, s).valueOf();
}
function Sa(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - va : Date.UTC(e, t, s);
}
function xg(e) {
  var t, s;
  if (((e = yt(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((s = this._isUTC ? Sa : Ma), e)) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(this.year(), this.month() - (this.month() % 3), 1);
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      t = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t -= Fe(t + (this._isUTC ? 0 : this.utcOffset() * Te), Qs));
      break;
    case "minute":
      (t = this._d.valueOf()), (t -= Fe(t, Te));
      break;
    case "second":
      (t = this._d.valueOf()), (t -= Fe(t, qs));
      break;
  }
  return this._d.setTime(t), x.updateOffset(this, !0), this;
}
function wg(e) {
  var t, s;
  if (((e = yt(e)), e === void 0 || e === "millisecond" || !this.isValid()))
    return this;
  switch (((s = this._isUTC ? Sa : Ma), e)) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      t =
        s(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      (t = this._d.valueOf()),
        (t += Qs - Fe(t + (this._isUTC ? 0 : this.utcOffset() * Te), Qs) - 1);
      break;
    case "minute":
      (t = this._d.valueOf()), (t += Te - Fe(t, Te) - 1);
      break;
    case "second":
      (t = this._d.valueOf()), (t += qs - Fe(t, qs) - 1);
      break;
  }
  return this._d.setTime(t), x.updateOffset(this, !0), this;
}
function kg() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function vg() {
  return Math.floor(this.valueOf() / 1e3);
}
function Mg() {
  return new Date(this.valueOf());
}
function Sg() {
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
}
function Dg() {
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
}
function Og() {
  return this.isValid() ? this.toISOString() : null;
}
function Cg() {
  return ln(this);
}
function Pg() {
  return qt({}, T(this));
}
function Tg() {
  return T(this).overflow;
}
function Fg() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict,
  };
}
M("N", 0, 0, "eraAbbr");
M("NN", 0, 0, "eraAbbr");
M("NNN", 0, 0, "eraAbbr");
M("NNNN", 0, 0, "eraName");
M("NNNNN", 0, 0, "eraNarrow");
M("y", ["y", 1], "yo", "eraYear");
M("y", ["yy", 2], 0, "eraYear");
M("y", ["yyy", 3], 0, "eraYear");
M("y", ["yyyy", 4], 0, "eraYear");
k("N", Dn);
k("NN", Dn);
k("NNN", Dn);
k("NNNN", Hg);
k("NNNNN", Bg);
B(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, s, i) {
  var n = s._locale.erasParse(e, i, s._strict);
  n ? (T(s).era = n) : (T(s).invalidEra = e);
});
k("y", Ie);
k("yy", Ie);
k("yyy", Ie);
k("yyyy", Ie);
k("yo", Vg);
B(["y", "yy", "yyy", "yyyy"], ot);
B(["yo"], function (e, t, s, i) {
  var n;
  s._locale._eraYearOrdinalRegex &&
    (n = e.match(s._locale._eraYearOrdinalRegex)),
    s._locale.eraYearOrdinalParse
      ? (t[ot] = s._locale.eraYearOrdinalParse(e, n))
      : (t[ot] = parseInt(e, 10));
});
function Lg(e, t) {
  var s,
    i,
    n,
    o = this._eras || Ut("en")._eras;
  for (s = 0, i = o.length; s < i; ++s) {
    switch (typeof o[s].since) {
      case "string":
        (n = x(o[s].since).startOf("day")), (o[s].since = n.valueOf());
        break;
    }
    switch (typeof o[s].until) {
      case "undefined":
        o[s].until = 1 / 0;
        break;
      case "string":
        (n = x(o[s].until).startOf("day").valueOf()),
          (o[s].until = n.valueOf());
        break;
    }
  }
  return o;
}
function Ag(e, t, s) {
  var i,
    n,
    o = this.eras(),
    r,
    a,
    l;
  for (e = e.toUpperCase(), i = 0, n = o.length; i < n; ++i)
    if (
      ((r = o[i].name.toUpperCase()),
      (a = o[i].abbr.toUpperCase()),
      (l = o[i].narrow.toUpperCase()),
      s)
    )
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (a === e) return o[i];
          break;
        case "NNNN":
          if (r === e) return o[i];
          break;
        case "NNNNN":
          if (l === e) return o[i];
          break;
      }
    else if ([r, a, l].indexOf(e) >= 0) return o[i];
}
function Rg(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0
    ? x(e.since).year()
    : x(e.since).year() + (t - e.offset) * s;
}
function Ig() {
  var e,
    t,
    s,
    i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (
      ((s = this.clone().startOf("day").valueOf()),
      (i[e].since <= s && s <= i[e].until) ||
        (i[e].until <= s && s <= i[e].since))
    )
      return i[e].name;
  return "";
}
function Yg() {
  var e,
    t,
    s,
    i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (
      ((s = this.clone().startOf("day").valueOf()),
      (i[e].since <= s && s <= i[e].until) ||
        (i[e].until <= s && s <= i[e].since))
    )
      return i[e].narrow;
  return "";
}
function Eg() {
  var e,
    t,
    s,
    i = this.localeData().eras();
  for (e = 0, t = i.length; e < t; ++e)
    if (
      ((s = this.clone().startOf("day").valueOf()),
      (i[e].since <= s && s <= i[e].until) ||
        (i[e].until <= s && s <= i[e].since))
    )
      return i[e].abbr;
  return "";
}
function Ng() {
  var e,
    t,
    s,
    i,
    n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (
      ((s = n[e].since <= n[e].until ? 1 : -1),
      (i = this.clone().startOf("day").valueOf()),
      (n[e].since <= i && i <= n[e].until) ||
        (n[e].until <= i && i <= n[e].since))
    )
      return (this.year() - x(n[e].since).year()) * s + n[e].offset;
  return this.year();
}
function Wg(e) {
  return (
    Y(this, "_erasNameRegex") || On.call(this),
    e ? this._erasNameRegex : this._erasRegex
  );
}
function jg(e) {
  return (
    Y(this, "_erasAbbrRegex") || On.call(this),
    e ? this._erasAbbrRegex : this._erasRegex
  );
}
function zg(e) {
  return (
    Y(this, "_erasNarrowRegex") || On.call(this),
    e ? this._erasNarrowRegex : this._erasRegex
  );
}
function Dn(e, t) {
  return t.erasAbbrRegex(e);
}
function Hg(e, t) {
  return t.erasNameRegex(e);
}
function Bg(e, t) {
  return t.erasNarrowRegex(e);
}
function Vg(e, t) {
  return t._eraYearOrdinalRegex || Ie;
}
function On() {
  var e = [],
    t = [],
    s = [],
    i = [],
    n,
    o,
    r,
    a,
    l,
    h = this.eras();
  for (n = 0, o = h.length; n < o; ++n)
    (r = Ht(h[n].name)),
      (a = Ht(h[n].abbr)),
      (l = Ht(h[n].narrow)),
      t.push(r),
      e.push(a),
      s.push(l),
      i.push(r),
      i.push(a),
      i.push(l);
  (this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i")),
    (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
    (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
    (this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i"));
}
M(0, ["gg", 2], 0, function () {
  return this.weekYear() % 100;
});
M(0, ["GG", 2], 0, function () {
  return this.isoWeekYear() % 100;
});
function ui(e, t) {
  M(0, [e, e.length], 0, t);
}
ui("gggg", "weekYear");
ui("ggggg", "weekYear");
ui("GGGG", "isoWeekYear");
ui("GGGGG", "isoWeekYear");
k("G", ai);
k("g", ai);
k("GG", $, ft);
k("gg", $, ft);
k("GGGG", gn, fn);
k("gggg", gn, fn);
k("GGGGG", ri, ni);
k("ggggg", ri, ni);
ms(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, s, i) {
  t[i.substr(0, 2)] = F(e);
});
ms(["gg", "GG"], function (e, t, s, i) {
  t[i] = x.parseTwoDigitYear(e);
});
function Ug(e) {
  return Da.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function $g(e) {
  return Da.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function Gg() {
  return Bt(this.year(), 1, 4);
}
function Kg() {
  return Bt(this.isoWeekYear(), 1, 4);
}
function Xg() {
  var e = this.localeData()._week;
  return Bt(this.year(), e.dow, e.doy);
}
function Zg() {
  var e = this.localeData()._week;
  return Bt(this.weekYear(), e.dow, e.doy);
}
function Da(e, t, s, i, n) {
  var o;
  return e == null
    ? ls(this, i, n).year
    : ((o = Bt(e, i, n)), t > o && (t = o), qg.call(this, e, t, s, i, n));
}
function qg(e, t, s, i, n) {
  var o = oa(e, t, s, i, n),
    r = as(o.year, 0, o.dayOfYear);
  return (
    this.year(r.getUTCFullYear()),
    this.month(r.getUTCMonth()),
    this.date(r.getUTCDate()),
    this
  );
}
M("Q", 0, "Qo", "quarter");
k("Q", Kr);
B("Q", function (e, t) {
  t[jt] = (F(e) - 1) * 3;
});
function Qg(e) {
  return e == null
    ? Math.ceil((this.month() + 1) / 3)
    : this.month((e - 1) * 3 + (this.month() % 3));
}
M("D", ["DD", 2], "Do", "date");
k("D", $, Ye);
k("DD", $, ft);
k("Do", function (e, t) {
  return e
    ? t._dayOfMonthOrdinalParse || t._ordinalParse
    : t._dayOfMonthOrdinalParseLenient;
});
B(["D", "DD"], Pt);
B("Do", function (e, t) {
  t[Pt] = F(e.match($)[0]);
});
var Oa = Ee("Date", !0);
M("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
k("DDD", oi);
k("DDDD", Xr);
B(["DDD", "DDDD"], function (e, t, s) {
  s._dayOfYear = F(e);
});
function Jg(e) {
  var t =
    Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
M("m", ["mm", 2], 0, "minute");
k("m", $, mn);
k("mm", $, ft);
B(["m", "mm"], wt);
var tm = Ee("Minutes", !1);
M("s", ["ss", 2], 0, "second");
k("s", $, mn);
k("ss", $, ft);
B(["s", "ss"], zt);
var em = Ee("Seconds", !1);
M("S", 0, 0, function () {
  return ~~(this.millisecond() / 100);
});
M(0, ["SS", 2], 0, function () {
  return ~~(this.millisecond() / 10);
});
M(0, ["SSS", 3], 0, "millisecond");
M(0, ["SSSS", 4], 0, function () {
  return this.millisecond() * 10;
});
M(0, ["SSSSS", 5], 0, function () {
  return this.millisecond() * 100;
});
M(0, ["SSSSSS", 6], 0, function () {
  return this.millisecond() * 1e3;
});
M(0, ["SSSSSSS", 7], 0, function () {
  return this.millisecond() * 1e4;
});
M(0, ["SSSSSSSS", 8], 0, function () {
  return this.millisecond() * 1e5;
});
M(0, ["SSSSSSSSS", 9], 0, function () {
  return this.millisecond() * 1e6;
});
k("S", oi, Kr);
k("SS", oi, ft);
k("SSS", oi, Xr);
var Qt, Ca;
for (Qt = "SSSS"; Qt.length <= 9; Qt += "S") k(Qt, Ie);
function sm(e, t) {
  t[de] = F(("0." + e) * 1e3);
}
for (Qt = "S"; Qt.length <= 9; Qt += "S") B(Qt, sm);
Ca = Ee("Milliseconds", !1);
M("z", 0, 0, "zoneAbbr");
M("zz", 0, 0, "zoneName");
function im() {
  return this._isUTC ? "UTC" : "";
}
function nm() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var y = fs.prototype;
y.add = Zf;
y.calendar = ig;
y.clone = ng;
y.diff = dg;
y.endOf = wg;
y.format = mg;
y.from = pg;
y.fromNow = _g;
y.to = bg;
y.toNow = yg;
y.get = fu;
y.invalidAt = Tg;
y.isAfter = og;
y.isBefore = rg;
y.isBetween = ag;
y.isSame = lg;
y.isSameOrAfter = hg;
y.isSameOrBefore = cg;
y.isValid = Cg;
y.lang = wa;
y.locale = xa;
y.localeData = ka;
y.max = Cf;
y.min = Of;
y.parsingFlags = Pg;
y.set = gu;
y.startOf = xg;
y.subtract = qf;
y.toArray = Sg;
y.toObject = Dg;
y.toDate = Mg;
y.toISOString = fg;
y.inspect = gg;
typeof Symbol < "u" &&
  Symbol.for != null &&
  (y[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">";
  });
y.toJSON = Og;
y.toString = ug;
y.unix = vg;
y.valueOf = kg;
y.creationData = Fg;
y.eraName = Ig;
y.eraNarrow = Yg;
y.eraAbbr = Eg;
y.eraYear = Ng;
y.year = Qr;
y.isLeapYear = uu;
y.weekYear = Ug;
y.isoWeekYear = $g;
y.quarter = y.quarters = Qg;
y.month = ia;
y.daysInMonth = vu;
y.week = y.weeks = Fu;
y.isoWeek = y.isoWeeks = Lu;
y.weeksInYear = Xg;
y.weeksInWeekYear = Zg;
y.isoWeeksInYear = Gg;
y.isoWeeksInISOWeekYear = Kg;
y.date = Oa;
y.day = y.days = Uu;
y.weekday = $u;
y.isoWeekday = Gu;
y.dayOfYear = Jg;
y.hour = y.hours = tf;
y.minute = y.minutes = tm;
y.second = y.seconds = em;
y.millisecond = y.milliseconds = Ca;
y.utcOffset = Ef;
y.utc = Wf;
y.local = jf;
y.parseZone = zf;
y.hasAlignedHourOffset = Hf;
y.isDST = Bf;
y.isLocal = Uf;
y.isUtcOffset = $f;
y.isUtc = pa;
y.isUTC = pa;
y.zoneAbbr = im;
y.zoneName = nm;
y.dates = bt("dates accessor is deprecated. Use date instead.", Oa);
y.months = bt("months accessor is deprecated. Use month instead", ia);
y.years = bt("years accessor is deprecated. Use year instead", Qr);
y.zone = bt(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Nf
);
y.isDSTShifted = bt(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Vf
);
function om(e) {
  return U(e * 1e3);
}
function rm() {
  return U.apply(null, arguments).parseZone();
}
function Pa(e) {
  return e;
}
var E = cn.prototype;
E.calendar = Vd;
E.longDateFormat = Kd;
E.invalidDate = Zd;
E.ordinal = Jd;
E.preparse = Pa;
E.postformat = Pa;
E.relativeTime = eu;
E.pastFuture = su;
E.set = Hd;
E.eras = Lg;
E.erasParse = Ag;
E.erasConvertYear = Rg;
E.erasAbbrRegex = jg;
E.erasNameRegex = Wg;
E.erasNarrowRegex = zg;
E.months = yu;
E.monthsShort = xu;
E.monthsParse = ku;
E.monthsRegex = Su;
E.monthsShortRegex = Mu;
E.week = Ou;
E.firstDayOfYear = Tu;
E.firstDayOfWeek = Pu;
E.weekdays = ju;
E.weekdaysMin = Hu;
E.weekdaysShort = zu;
E.weekdaysParse = Vu;
E.weekdaysRegex = Ku;
E.weekdaysShortRegex = Xu;
E.weekdaysMinRegex = Zu;
E.isPM = Qu;
E.meridiem = ef;
function Js(e, t, s, i) {
  var n = Ut(),
    o = Lt().set(i, t);
  return n[s](o, e);
}
function Ta(e, t, s) {
  if ((Vt(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
    return Js(e, t, s, "month");
  var i,
    n = [];
  for (i = 0; i < 12; i++) n[i] = Js(e, i, s, "month");
  return n;
}
function Cn(e, t, s, i) {
  typeof e == "boolean"
    ? (Vt(t) && ((s = t), (t = void 0)), (t = t || ""))
    : ((t = e),
      (s = t),
      (e = !1),
      Vt(t) && ((s = t), (t = void 0)),
      (t = t || ""));
  var n = Ut(),
    o = e ? n._week.dow : 0,
    r,
    a = [];
  if (s != null) return Js(t, (s + o) % 7, i, "day");
  for (r = 0; r < 7; r++) a[r] = Js(t, (r + o) % 7, i, "day");
  return a;
}
function am(e, t) {
  return Ta(e, t, "months");
}
function lm(e, t) {
  return Ta(e, t, "monthsShort");
}
function hm(e, t, s) {
  return Cn(e, t, s, "weekdays");
}
function cm(e, t, s) {
  return Cn(e, t, s, "weekdaysShort");
}
function dm(e, t, s) {
  return Cn(e, t, s, "weekdaysMin");
}
ee("en", {
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
    var t = e % 10,
      s =
        F((e % 100) / 10) === 1
          ? "th"
          : t === 1
          ? "st"
          : t === 2
          ? "nd"
          : t === 3
          ? "rd"
          : "th";
    return e + s;
  },
});
x.lang = bt("moment.lang is deprecated. Use moment.locale instead.", ee);
x.langData = bt(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Ut
);
var It = Math.abs;
function um() {
  var e = this._data;
  return (
    (this._milliseconds = It(this._milliseconds)),
    (this._days = It(this._days)),
    (this._months = It(this._months)),
    (e.milliseconds = It(e.milliseconds)),
    (e.seconds = It(e.seconds)),
    (e.minutes = It(e.minutes)),
    (e.hours = It(e.hours)),
    (e.months = It(e.months)),
    (e.years = It(e.years)),
    this
  );
}
function Fa(e, t, s, i) {
  var n = Mt(t, s);
  return (
    (e._milliseconds += i * n._milliseconds),
    (e._days += i * n._days),
    (e._months += i * n._months),
    e._bubble()
  );
}
function fm(e, t) {
  return Fa(this, e, t, 1);
}
function gm(e, t) {
  return Fa(this, e, t, -1);
}
function Qo(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function mm() {
  var e = this._milliseconds,
    t = this._days,
    s = this._months,
    i = this._data,
    n,
    o,
    r,
    a,
    l;
  return (
    (e >= 0 && t >= 0 && s >= 0) ||
      (e <= 0 && t <= 0 && s <= 0) ||
      ((e += Qo(Hi(s) + t) * 864e5), (t = 0), (s = 0)),
    (i.milliseconds = e % 1e3),
    (n = pt(e / 1e3)),
    (i.seconds = n % 60),
    (o = pt(n / 60)),
    (i.minutes = o % 60),
    (r = pt(o / 60)),
    (i.hours = r % 24),
    (t += pt(r / 24)),
    (l = pt(La(t))),
    (s += l),
    (t -= Qo(Hi(l))),
    (a = pt(s / 12)),
    (s %= 12),
    (i.days = t),
    (i.months = s),
    (i.years = a),
    this
  );
}
function La(e) {
  return (e * 4800) / 146097;
}
function Hi(e) {
  return (e * 146097) / 4800;
}
function pm(e) {
  if (!this.isValid()) return NaN;
  var t,
    s,
    i = this._milliseconds;
  if (((e = yt(e)), e === "month" || e === "quarter" || e === "year"))
    switch (((t = this._days + i / 864e5), (s = this._months + La(t)), e)) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (((t = this._days + Math.round(Hi(this._months))), e)) {
      case "week":
        return t / 7 + i / 6048e5;
      case "day":
        return t + i / 864e5;
      case "hour":
        return t * 24 + i / 36e5;
      case "minute":
        return t * 1440 + i / 6e4;
      case "second":
        return t * 86400 + i / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + i;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function $t(e) {
  return function () {
    return this.as(e);
  };
}
var Aa = $t("ms"),
  _m = $t("s"),
  bm = $t("m"),
  ym = $t("h"),
  xm = $t("d"),
  wm = $t("w"),
  km = $t("M"),
  vm = $t("Q"),
  Mm = $t("y"),
  Sm = Aa;
function Dm() {
  return Mt(this);
}
function Om(e) {
  return (e = yt(e)), this.isValid() ? this[e + "s"]() : NaN;
}
function ye(e) {
  return function () {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Cm = ye("milliseconds"),
  Pm = ye("seconds"),
  Tm = ye("minutes"),
  Fm = ye("hours"),
  Lm = ye("days"),
  Am = ye("months"),
  Rm = ye("years");
function Im() {
  return pt(this.days() / 7);
}
var Nt = Math.round,
  Oe = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
function Ym(e, t, s, i, n) {
  return n.relativeTime(t || 1, !!s, e, i);
}
function Em(e, t, s, i) {
  var n = Mt(e).abs(),
    o = Nt(n.as("s")),
    r = Nt(n.as("m")),
    a = Nt(n.as("h")),
    l = Nt(n.as("d")),
    h = Nt(n.as("M")),
    c = Nt(n.as("w")),
    d = Nt(n.as("y")),
    u =
      (o <= s.ss && ["s", o]) ||
      (o < s.s && ["ss", o]) ||
      (r <= 1 && ["m"]) ||
      (r < s.m && ["mm", r]) ||
      (a <= 1 && ["h"]) ||
      (a < s.h && ["hh", a]) ||
      (l <= 1 && ["d"]) ||
      (l < s.d && ["dd", l]);
  return (
    s.w != null && (u = u || (c <= 1 && ["w"]) || (c < s.w && ["ww", c])),
    (u = u ||
      (h <= 1 && ["M"]) ||
      (h < s.M && ["MM", h]) ||
      (d <= 1 && ["y"]) || ["yy", d]),
    (u[2] = t),
    (u[3] = +e > 0),
    (u[4] = i),
    Ym.apply(null, u)
  );
}
function Nm(e) {
  return e === void 0 ? Nt : typeof e == "function" ? ((Nt = e), !0) : !1;
}
function Wm(e, t) {
  return Oe[e] === void 0
    ? !1
    : t === void 0
    ? Oe[e]
    : ((Oe[e] = t), e === "s" && (Oe.ss = t - 1), !0);
}
function jm(e, t) {
  if (!this.isValid()) return this.localeData().invalidDate();
  var s = !1,
    i = Oe,
    n,
    o;
  return (
    typeof e == "object" && ((t = e), (e = !1)),
    typeof e == "boolean" && (s = e),
    typeof t == "object" &&
      ((i = Object.assign({}, Oe, t)),
      t.s != null && t.ss == null && (i.ss = t.s - 1)),
    (n = this.localeData()),
    (o = Em(this, !s, i, n)),
    s && (o = n.pastFuture(+this, o)),
    n.postformat(o)
  );
}
var Pi = Math.abs;
function ve(e) {
  return (e > 0) - (e < 0) || +e;
}
function fi() {
  if (!this.isValid()) return this.localeData().invalidDate();
  var e = Pi(this._milliseconds) / 1e3,
    t = Pi(this._days),
    s = Pi(this._months),
    i,
    n,
    o,
    r,
    a = this.asSeconds(),
    l,
    h,
    c,
    d;
  return a
    ? ((i = pt(e / 60)),
      (n = pt(i / 60)),
      (e %= 60),
      (i %= 60),
      (o = pt(s / 12)),
      (s %= 12),
      (r = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
      (l = a < 0 ? "-" : ""),
      (h = ve(this._months) !== ve(a) ? "-" : ""),
      (c = ve(this._days) !== ve(a) ? "-" : ""),
      (d = ve(this._milliseconds) !== ve(a) ? "-" : ""),
      l +
        "P" +
        (o ? h + o + "Y" : "") +
        (s ? h + s + "M" : "") +
        (t ? c + t + "D" : "") +
        (n || i || e ? "T" : "") +
        (n ? d + n + "H" : "") +
        (i ? d + i + "M" : "") +
        (e ? d + r + "S" : ""))
    : "P0D";
}
var R = di.prototype;
R.isValid = Af;
R.abs = um;
R.add = fm;
R.subtract = gm;
R.as = pm;
R.asMilliseconds = Aa;
R.asSeconds = _m;
R.asMinutes = bm;
R.asHours = ym;
R.asDays = xm;
R.asWeeks = wm;
R.asMonths = km;
R.asQuarters = vm;
R.asYears = Mm;
R.valueOf = Sm;
R._bubble = mm;
R.clone = Dm;
R.get = Om;
R.milliseconds = Cm;
R.seconds = Pm;
R.minutes = Tm;
R.hours = Fm;
R.days = Lm;
R.weeks = Im;
R.months = Am;
R.years = Rm;
R.humanize = jm;
R.toISOString = fi;
R.toString = fi;
R.toJSON = fi;
R.locale = xa;
R.localeData = ka;
R.toIsoString = bt(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  fi
);
R.lang = wa;
M("X", 0, 0, "unix");
M("x", 0, 0, "valueOf");
k("x", ai);
k("X", ru);
B("X", function (e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
B("x", function (e, t, s) {
  s._d = new Date(F(e));
}); //! moment.js
x.version = "2.30.1";
jd(U);
x.fn = y;
x.min = Pf;
x.max = Tf;
x.now = Ff;
x.utc = Lt;
x.unix = om;
x.months = am;
x.isDate = us;
x.locale = ee;
x.invalid = ii;
x.duration = Mt;
x.isMoment = vt;
x.weekdays = hm;
x.parseZone = rm;
x.localeData = Ut;
x.isDuration = Ws;
x.monthsShort = lm;
x.weekdaysMin = dm;
x.defineLocale = xn;
x.updateLocale = rf;
x.locales = af;
x.weekdaysShort = cm;
x.normalizeUnits = yt;
x.relativeTimeRounding = Nm;
x.relativeTimeThreshold = Wm;
x.calendarFormat = sg;
x.prototype = y;
x.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM",
};
const zm = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  Jo = { hidden: { opacity: 0 }, visible: { opacity: 0.8 } },
  Hm = () =>
    _.jsxs("svg", {
      width: "49",
      height: "49",
      viewBox: "0 0 49 49",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        _.jsx("rect", {
          x: "0.583333",
          y: "0.583333",
          width: "47.8333",
          height: "47.8333",
          rx: "11.0833",
          fill: "url(#paint0_linear_6134_3476)",
          stroke: "url(#paint1_linear_6134_3476)",
          strokeWidth: "1.16667",
        }),
        _.jsx("path", {
          d: "M17 32L32 17",
          stroke: "#091024",
          strokeWidth: "2",
          strokeWinecap: "round",
        }),
        _.jsx("path", {
          d: "M32 32L17 17",
          stroke: "#091024",
          strokeWidth: "2",
          strokeWinecap: "round",
        }),
        _.jsxs("defs", {
          children: [
            _.jsxs("linearGradient", {
              id: "paint0_linear_6134_3476",
              x1: "-7",
              y1: "-99.6897",
              x2: "118.191",
              y2: "-36.6741",
              gradientUnits: "userSpaceOnUse",
              children: [
                _.jsx("stop", { stopColor: "#F7AAFD" }),
                _.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                _.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                _.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                _.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
              ],
            }),
            _.jsxs("linearGradient", {
              id: "paint1_linear_6134_3476",
              x1: "-7",
              y1: "-99.6897",
              x2: "118.191",
              y2: "-36.6741",
              gradientUnits: "userSpaceOnUse",
              children: [
                _.jsx("stop", { stopColor: "#F7AAFD" }),
                _.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                _.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                _.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                _.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
              ],
            }),
          ],
        }),
      ],
    }),
  Bm = ({ closeModal: e }) =>
    Ya.createPortal(
      _.jsxs(_.Fragment, {
        children: [
          _.jsx(gi.div, {
            initial: "hidden",
            animate: "visible",
            exit: "hidden",
            variants: Jo,
            transition: { duration: 0.3 },
            className: "bg-dark-blue fixed top-0 left-0 w-full h-full z-[9998]",
          }),
          _.jsxs("div", {
            className:
              "of__modal modal-bg fixed inset-0 top-0 left-0 flex items-center w-full justify-center",
            children: [
              _.jsx(gi.div, {
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                variants: Jo,
                transition: { duration: 0.6 },
                className: "absolute z-[10000] top-4 right-4",
                children: _.jsx("button", {
                  onClick: e,
                  children: _.jsx(Hm, {}),
                }),
              }),
              _.jsx(gi.div, {
                className: "w-full",
                initial: "hidden",
                animate: "visible",
                exit: "hidden",
                variants: zm,
                transition: { duration: 0.3 },
                children: _.jsx("div", {
                  className:
                    "of__modal-bg w-[90%] lg:w-[900px] mx-auto relative",
                  children: _.jsx("div", {
                    className: "of__modal-content bg-black rounded-[30px]",
                    children: _.jsx("div", {
                      className:
                        "of-video__root rounded-[30px] overflow-hidden",
                      children: _.jsx("video", {
                        playsInline: !0,
                        controls: !0,
                        autoPlay: !0,
                        loop: !0,
                        width: "640",
                        height: "400",
                        children: _.jsx("source", {
                          src: "/fabric AI-git-journey.mp4",
                          type: "video/mp4",
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      document.body
    ),
  Vm = () => {
    const [e, t] = Q.useState(null),
      s = () => {
        t(!0);
      },
      i = () => {
        t(!1);
      };
    return (
      Q.useEffect(() => {
        const n = (o) => {
          o.key === "Escape" && i();
        };
        return (
          e && window.addEventListener("keydown", n),
          () => {
            window.removeEventListener("keydown", n);
          }
        );
      }, [e]),
      _.jsxs(_.Fragment, {
        children: [
          _.jsx(Ea, { children: e && _.jsx(Bm, { closeModal: i }) }),
        ],
      })
    );
  };
function Um(e) {
  const t = Math.pow(10, 3),
    s = Math.pow(10, 6);
  return e >= s
    ? `${Math.round((e / s) * 100) / 100}M`
    : e >= t
    ? `${Math.round((e / t) * 100) / 100}K`
    : Math.round(e * 100) / 100;
}
const Ra = async (e) => {
    const t = await Pn.get("/devstats/activity7.json"),
      s = await Pn.get("/devstats/activity30.json");
    return { week: t.data, month: s.data }[e];
  },
  Rs = async (e, t) => {
    const i = (await Ra(e)).total;
    return Um(i[t]);
  },
  tr = async (e, t) => {
    const i = (await Ra(e)).activity,
      n = Object.keys(i).sort((a, l) => x(a).diff(x(l))),
      o = n.map((a) => x(a).format("MMM Do")),
      r = n.map((a) => i[a][t]);
    return { labels: o, values: r };
  },
  er = ({ commits: e, changes: t }) =>
    _.jsxs(_.Fragment, {
      children: [
        _.jsxs("div", {
          className:
            "flex flex-row whitespace-nowrap items-center max-sm:w-full",
          children: [
            _.jsx("i", {
              className: "inline-block mr-2",
              children: _.jsx("svg", {
                width: "29",
                height: "29",
                viewBox: "0 0 29 29",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: _.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.5 0C22.5083 0 29 6.65539 29 14.8667C29 21.4338 24.8501 27.0047 19.0921 28.9724C18.357 29.1188 18.096 28.6545 18.096 28.2587C18.096 27.7686 18.1134 26.1678 18.1134 24.1784C18.1134 22.7922 17.6494 21.8875 17.1289 21.4264C20.358 21.0581 23.751 19.8008 23.751 14.0908C23.751 12.4668 23.1884 11.1415 22.2575 10.1004C22.4083 9.72488 22.9056 8.21272 22.1154 6.16532C22.1154 6.16532 20.9003 5.76697 18.1322 7.68966C16.9737 7.36051 15.7325 7.1949 14.5 7.1891C13.2675 7.1949 12.0278 7.36051 10.8707 7.68966C8.0997 5.76697 6.8817 6.16532 6.8817 6.16532C6.09435 8.21272 6.5917 9.72488 6.74105 10.1004C5.8145 11.1415 5.24755 12.4668 5.24755 14.0908C5.24755 19.7863 8.6333 21.0629 11.8538 21.4385C11.4391 21.8097 11.0635 22.4645 10.933 23.4258C10.1065 23.8057 8.0069 24.4632 6.7135 22.1911C6.7135 22.1911 5.94645 20.7626 4.49065 20.6582C4.49065 20.6582 3.0769 20.6394 4.39205 21.5616C4.39205 21.5616 5.3418 22.0184 6.00155 23.7366C6.00155 23.7366 6.8527 26.3901 10.8866 25.4911C10.8939 26.7337 10.9069 27.9049 10.9069 28.2587C10.9069 28.6516 10.6401 29.1115 9.91654 28.9738C4.15425 27.009 0 21.4352 0 14.8667C0 6.65539 6.4931 0 14.5 0Z",
                  fill: "#A9C5E4",
                }),
              }),
            }),
            _.jsxs("span", {
              className: "text-light-blue font-semibold max-sm:text-sm",
              children: [t, " Changes"],
            }),
          ],
        }),
        _.jsxs("div", {
          className:
            "flex flex-row whitespace-nowrap items-center max-sm:w-full",
          children: [
            _.jsx("i", {
              className: "inline-block mr-2",
              children: _.jsx("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 28 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: _.jsx("path", {
                  d: "M12.0979 1.8541C12.6966 0.0114756 15.3034 0.0114808 15.9021 1.8541L17.8167 7.74671C18.0845 8.57076 18.8524 9.12868 19.7189 9.12868H25.9147C27.8522 9.12868 28.6577 11.6079 27.0903 12.7467L22.0777 16.3885C21.3767 16.8978 21.0834 17.8006 21.3512 18.6246L23.2658 24.5172C23.8645 26.3598 21.7556 27.8921 20.1881 26.7533L15.1756 23.1115C14.4746 22.6022 13.5254 22.6022 12.8244 23.1115L7.81187 26.7533C6.24444 27.8921 4.13549 26.3598 4.73419 24.5172L6.64882 18.6246C6.91657 17.8006 6.62325 16.8978 5.92227 16.3885L0.909718 12.7467C-0.65771 11.6079 0.147847 9.12868 2.08529 9.12868H8.28115C9.1476 9.12868 9.91551 8.57076 10.1833 7.74671L12.0979 1.8541Z",
                  fill: "#A9C5E4",
                }),
              }),
            }),
            _.jsxs("span", {
              className: "text-light-blue font-semibold max-sm:text-sm",
              children: [e, " Commits"],
            }),
          ],
        }),
      ],
    }),
  np = () => {
    const [e, t] = Q.useState("month"),
      [s, i] = Q.useState(!0),
      [n, o] = Q.useState({
        week: null,
        month: null,
        weekCommits: null,
        monthCommits: null,
        weekChanged: null,
        monthChanged: null,
      });
    return (
      Q.useEffect(() => {
        (async () => {
          try {
            const a = await tr("month", "commits"),
              l = await tr("week", "commits"),
              h = await Rs("week", "commits"),
              c = await Rs("week", "changed"),
              d = await Rs("month", "commits"),
              u = await Rs("month", "changed");
            o({
              week: l,
              month: a,
              weekCommits: h,
              monthCommits: d,
              weekChanged: c,
              monthChanged: u,
            });
          } catch (a) {
            console.error("Failed to fetch data:", a);
          }
        })();
      }, []),
      Q.useEffect(() => {
        n?.week && i(!1);
      }, [n]),
      _.jsxs("div", {
        className: "of-container mb-14 sm:mb-20",
        children: [
          _.jsxs("div", {
            className: "flex justify-between mb-10",
            children: [
              _.jsxs("h3", {
                className:
                  "of__heading-gradient sm:mb-10 text-2xl leading-[1.15] whitespace-nowrap flex items-center",
                children: [
                  _.jsx("i", {
                    className: "inline-block mr-3 sm:mr-5",
                    children: _.jsxs("svg", {
                      className: "w-[53px] h-[53px]",
                      viewBox: "0 0 53 53",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        _.jsx("rect", {
                          x: "0.5",
                          y: "0.5",
                          width: "52",
                          height: "52",
                          rx: "14.5",
                          stroke: "url(#paint0_linear_37_892)",
                        }),
                        _.jsx("path", {
                          d: "M19 19L13 25.5L19 32",
                          stroke: "url(#paint1_linear_37_892)",
                          strokeWidth: "2",
                        }),
                        _.jsx("path", {
                          d: "M35 19L41 25.5L35 32",
                          stroke: "url(#paint2_linear_37_892)",
                          strokeWidth: "2",
                        }),
                        _.jsx("path", {
                          d: "M31.5 14L22 38",
                          stroke: "url(#paint3_linear_37_892)",
                          strokeWidth: "2",
                        }),
                        _.jsxs("defs", {
                          children: [
                            _.jsxs("linearGradient", {
                              id: "paint0_linear_37_892",
                              x1: "-7.57142",
                              y1: "-107.828",
                              x2: "127.839",
                              y2: "-39.6679",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                _.jsx("stop", { stopColor: "#F7AAFD" }),
                                _.jsx("stop", {
                                  offset: "0.255208",
                                  stopColor: "#A6ABFF",
                                }),
                                _.jsx("stop", {
                                  offset: "0.494792",
                                  stopColor: "#93D5FF",
                                }),
                                _.jsx("stop", {
                                  offset: "0.71875",
                                  stopColor: "#F1C4FF",
                                }),
                                _.jsx("stop", {
                                  offset: "1",
                                  stopColor: "#D7F4FF",
                                }),
                              ],
                            }),
                            _.jsxs("linearGradient", {
                              id: "paint1_linear_37_892",
                              x1: "31.2069",
                              y1: "17.1429",
                              x2: "10.4703",
                              y2: "36.1567",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                _.jsx("stop", { stopColor: "#F7AAFD" }),
                                _.jsx("stop", {
                                  offset: "0.255208",
                                  stopColor: "#A6ABFF",
                                }),
                                _.jsx("stop", {
                                  offset: "0.494792",
                                  stopColor: "#93D5FF",
                                }),
                                _.jsx("stop", {
                                  offset: "0.71875",
                                  stopColor: "#F1C4FF",
                                }),
                                _.jsx("stop", {
                                  offset: "1",
                                  stopColor: "#D7F4FF",
                                }),
                              ],
                            }),
                            _.jsxs("linearGradient", {
                              id: "paint2_linear_37_892",
                              x1: "22.7931",
                              y1: "17.1429",
                              x2: "43.5297",
                              y2: "36.1567",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                _.jsx("stop", { stopColor: "#F7AAFD" }),
                                _.jsx("stop", {
                                  offset: "0.255208",
                                  stopColor: "#A6ABFF",
                                }),
                                _.jsx("stop", {
                                  offset: "0.494792",
                                  stopColor: "#93D5FF",
                                }),
                                _.jsx("stop", {
                                  offset: "0.71875",
                                  stopColor: "#F1C4FF",
                                }),
                                _.jsx("stop", {
                                  offset: "1",
                                  stopColor: "#D7F4FF",
                                }),
                              ],
                            }),
                            _.jsxs("linearGradient", {
                              id: "paint3_linear_37_892",
                              x1: "20.6429",
                              y1: "-34.8276",
                              x2: "49.9027",
                              y2: "-28.9977",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                _.jsx("stop", { stopColor: "#F7AAFD" }),
                                _.jsx("stop", {
                                  offset: "0.255208",
                                  stopColor: "#A6ABFF",
                                }),
                                _.jsx("stop", {
                                  offset: "0.494792",
                                  stopColor: "#93D5FF",
                                }),
                                _.jsx("stop", {
                                  offset: "0.71875",
                                  stopColor: "#F1C4FF",
                                }),
                                _.jsx("stop", {
                                  offset: "1",
                                  stopColor: "#D7F4FF",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  "Dev Activity",
                ],
              }),
              _.jsx("div", {
                className: "max-sm:hidden",
                children: _.jsx(Vm, {}),
              }),
            ],
          }),
          _.jsxs("div", {
            className:
              "sm:bg-[var(--card--bg)] sm:rounded-[50px] sm:px-9 sm:py-9",
            children: [
              _.jsxs("div", {
                className:
                  "flex flex-col md:flex-row w-full justify-between mb-12",
                children: [
                  !s &&
                    _.jsxs("div", {
                      className:
                        "flex flex-row justify-center gap-5 sm:gap-8 sm:mr-8 mb-9 md:mb-0",
                      children: [
                        e === "week" &&
                          _.jsx(er, {
                            commits: n?.weekCommits,
                            changes: n?.weekChanged,
                          }),
                        e === "month" &&
                          _.jsx(er, {
                            commits: n?.monthCommits,
                            changes: n?.monthChanged,
                          }),
                      ],
                    }),
                  _.jsxs("div", {
                    className: "of-button__group",
                    children: [
                      _.jsx("button", {
                        onClick: () => t("week"),
                        type: "button",
                        className: `of-button--chart max-md:w-full max-md:flex-1 ${
                          e === "week" ? "is-active" : null
                        }`,
                        children: _.jsx("span", {
                          className: "of-button__label",
                          children: "Week",
                        }),
                      }),
                      _.jsx("button", {
                        onClick: () => t("month"),
                        type: "button",
                        className: `of-button--chart max-md:w-full max-md:flex-1 ${
                          e === "month" ? "is-active" : null
                        }`,
                        children: _.jsx("span", {
                          className: "of-button__label",
                          children: "Month",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              !s &&
                _.jsxs("div", {
                  className: "of-chart__root",
                  children: [
                    e === "week" &&
                      _.jsx($o, {
                        labels: n?.week?.labels,
                        values: n?.week?.values,
                      }),
                    e === "month" &&
                      _.jsx($o, {
                        labels: n?.month?.labels,
                        values: n?.month?.values,
                      }),
                  ],
                }),
            ],
          }),
        ],
      })
    );
  };
export { np as default };
