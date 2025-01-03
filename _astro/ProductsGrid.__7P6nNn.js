import { j as s } from "./jsx-runtime.dvAB8w6V.js";
import { r as c } from "./index.B3PfHquH.js";
import { C as _ } from "./CarouselSwipper.vHt-rwwp.js";
import { S as g } from "./swiper-react.CKAcPsL9.js";
import { m as x } from "./motion.uZKkojSN.js";
/* empty css                            */ const F = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8 },
  },
  u = {
    spaceBetween: 16,
    slidesPerView: 10,
    autoHeight: !1,
    loop: !1,
    grid: { rows: 2, fill: "row" },
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 12,
        grid: { rows: 2, fill: "row" },
      },
      576: {
        slidesPerView: 6,
        spaceBetween: 16,
        grid: { rows: 2, fill: "row" },
      },
      640: {
        slidesPerView: 8,
        spaceBetween: 16,
        grid: { rows: 2, fill: "row" },
      },
      1024: {
        slidesPerView: 10,
        spaceBetween: 16,
        grid: { rows: 2, fill: "row" },
      },
      1440: {
        slidesPerView: 12,
        spaceBetween: 16,
        grid: { rows: 2, fill: "row" },
      },
      1640: {
        slidesPerView: 18,
        spaceBetween: 20,
        grid: { rows: 1, fill: "row" },
      },
    },
    pagination: !1,
    injectStyles: [
      `
          .swiper {padding: 20px 0 80px}
          @media (max-width: 767px) {
            .swiper {padding: 20px 0 60px}
          }
      `,
    ],
  },
  v = () =>
    s.jsxs("svg", {
      width: "49",
      height: "49",
      viewBox: "0 0 49 49",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        s.jsx("rect", {
          x: "0.583333",
          y: "0.583333",
          width: "47.8333",
          height: "47.8333",
          rx: "11.0833",
          fill: "url(#paint0_linear_6134_3476_close_button)",
          stroke: "url(#paint1_linear_6134_3476_close_button)",
          strokeWidth: "1.16667",
        }),
        s.jsx("path", {
          d: "M17 32L32 17",
          stroke: "#091024",
          strokeWidth: "2",
          strokeLinecap: "round",
        }),
        s.jsx("path", {
          d: "M32 32L17 17",
          stroke: "#091024",
          strokeWidth: "2",
          strokeLinecap: "round",
        }),
        s.jsxs("defs", {
          children: [
            s.jsxs("linearGradient", {
              id: "paint0_linear_6134_3476_close_button",
              x1: "-7",
              y1: "-99.6897",
              x2: "118.191",
              y2: "-36.6741",
              gradientUnits: "userSpaceOnUse",
              children: [
                s.jsx("stop", { stopColor: "#F7AAFD" }),
                s.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                s.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                s.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                s.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
              ],
            }),
            s.jsxs("linearGradient", {
              id: "paint1_linear_6134_3476_close_button",
              x1: "-7",
              y1: "-99.6897",
              x2: "118.191",
              y2: "-36.6741",
              gradientUnits: "userSpaceOnUse",
              children: [
                s.jsx("stop", { stopColor: "#F7AAFD" }),
                s.jsx("stop", { offset: "0.255208", stopColor: "#A6ABFF" }),
                s.jsx("stop", { offset: "0.494792", stopColor: "#93D5FF" }),
                s.jsx("stop", { offset: "0.71875", stopColor: "#F1C4FF" }),
                s.jsx("stop", { offset: "1", stopColor: "#D7F4FF" }),
              ],
            }),
          ],
        }),
      ],
    }),
  b = ({ css: e }) =>
    s.jsx("div", {
      className: `of-container relative ${e}`,
      children: s.jsxs("a", {
        target: "_blank",
        href: "https://fabric AI.dev",
        className:
          "of-button__primary of-button--sm max-md:w-full md:absolute md:left-[180px] md:-bottom-[53px]",
        children: [
          s.jsx("span", {
            className: "of-button__label mr-2",
            children: "Go to marketplace",
          }),
          s.jsx("i", {
            className: "of-button__icon inline-block",
            children: s.jsxs("svg", {
              width: "13",
              height: "13",
              viewBox: "0 0 13 13",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                s.jsx("path", {
                  d: "M1 12L12 1",
                  stroke: "#030820",
                  strokeWidth: "2",
                }),
                s.jsx("path", {
                  d: "M3 1H12V10",
                  stroke: "#030820",
                  strokeWidth: "2",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  w = ({ item: e, handleOnClose: i }) => {
    const l = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
      o = Math.floor(Math.random() * 9999) + 1,
      a = Math.floor(Math.random() * 9999) + 1,
      r = Math.floor(Math.random() * 9999) + 1;
    return s.jsxs(x.div, {
      className:
        "absolute -top-5 max-sm:-mt-[97] left-1/2 -ml-[147px] of-product__card-overlay p-[1px] w-[300px] z-50",
      initial: "hidden",
      animate: "visible",
      layout: !0,
      exit: "hidden",
      variants: l,
      transition: { duration: 0.3 },
      children: [
        s.jsxs("div", {
          className:
            "relative z-10 inner overflow-hidden bg-dark-blue-1700 rounded-[20px]",
          children: [
            s.jsx("div", {
              className: "flex flex-col relative z-10 p-0.5",
              children: s.jsxs("div", {
                className:
                  "py-[12px] flex flex-row px-4 overflow-hidden rounded-t-[10px]",
                children: [
                  s.jsxs("picture", {
                    className: "flex-[0_0_110px] overflow-hidden",
                    children: [
                      s.jsx("source", {
                        srcSet: `${e?.thumbWebp.src}`,
                        type: "image/webp",
                      }),
                      s.jsx("img", {
                        width: e?.thumb.width,
                        height: e?.thumb.height,
                        src: e?.thumb.src,
                        alt: e?.name,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "pl-4 pt-4 overflow-hidden of-gradient__text",
                    children: [
                      e?.name &&
                        s.jsx("strong", {
                          className:
                            "block font-semibold mb-1 block overflow-hidden whitespace-nowrap text-ellipsis",
                          children: e.name,
                        }),
                      e?.company &&
                        s.jsx("p", {
                          className: "font-semibold mb-2.5",
                          children: e.company,
                        }),
                      e?.version &&
                        s.jsx("span", {
                          className: "text-sm of-gradient__text",
                          children: e.version,
                        }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsxs("div", {
              className: "of-product__card-links flex flex-row w-full z-20",
              children: [
                e?.telegram &&
                  s.jsxs("a", {
                    href: e?.telegram,
                    target: "_blank",
                    className:
                      "flex flex-1 flex-col justify-center items-center",
                    children: [
                      s.jsx("i", {
                        className: "icon icon__svg mb-1 inline-block",
                        children: s.jsxs("svg", {
                          width: "21",
                          height: "17",
                          viewBox: "0 0 21 17",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            s.jsx("g", {
                              className: "icon-active",
                              children: s.jsx("path", {
                                d: "M20.9824 1.46783C21.1459 0.489745 20.1408 -0.282263 19.2008 0.0995698L0.478822 7.7044C-0.195264 7.97822 -0.145953 8.92294 0.553175 9.12888L4.41406 10.2664C5.15103 10.4835 5.9489 10.3712 6.59241 9.95994L15.2972 4.39608C15.5597 4.22827 15.8458 4.57361 15.6215 4.78744L9.35562 10.7642C8.7478 11.344 8.86842 12.3265 9.59961 12.7506L16.6149 16.8207C17.4018 17.2771 18.414 16.8186 18.5611 15.9388L20.9824 1.46783Z",
                                fill: "white",
                              }),
                            }),
                            s.jsx("g", {
                              className: "icon-hover",
                              children: s.jsx("path", {
                                d: "M20.9824 1.46783C21.1459 0.489745 20.1408 -0.282263 19.2008 0.0995698L0.478822 7.7044C-0.195264 7.97822 -0.145953 8.92294 0.553175 9.12888L4.41406 10.2664C5.15103 10.4835 5.9489 10.3712 6.59241 9.95994L15.2972 4.39608C15.5597 4.22827 15.8458 4.57361 15.6215 4.78744L9.35562 10.7642C8.7478 11.344 8.86842 12.3265 9.59961 12.7506L16.6149 16.8207C17.4018 17.2771 18.414 16.8186 18.5611 15.9388L20.9824 1.46783Z",
                                fill: `url(#${a}_radial_tel)`,
                              }),
                            }),
                            s.jsx("defs", {
                              children: s.jsxs("radialGradient", {
                                id: `${a}_radial_tel`,
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform:
                                  "translate(2.85562 0.462582) rotate(51.992) scale(36.571 88.4689)",
                                children: [
                                  s.jsx("stop", { stopColor: "#95D7FF" }),
                                  s.jsx("stop", {
                                    offset: "0.354167",
                                    stopColor: "#FF91B6",
                                  }),
                                  s.jsx("stop", {
                                    offset: "0.697917",
                                    stopColor: "#4272FF",
                                  }),
                                  s.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#F155FF",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      s.jsx("span", {
                        className: "text-xs of-gradient__text",
                        children: "Telegram",
                      }),
                    ],
                  }),
                e?.discord &&
                  s.jsxs("a", {
                    href: e?.discord,
                    target: "_blank",
                    className:
                      "flex flex-1 flex-col justify-center items-center",
                    children: [
                      s.jsx("i", {
                        className: "icon icon__svg mb-1 inline-block",
                        children: s.jsxs("svg", {
                          width: "24",
                          height: "18",
                          viewBox: "0 0 24 18",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            s.jsx("g", {
                              className: "icon-active",
                              children: s.jsx("path", {
                                d: "M20.3137 1.5092C18.7606 0.809814 17.1066 0.294478 15.3641 0C15.1495 0.368097 14.897 0.871164 14.7328 1.27607C12.8894 1.00613 11.0586 1.00613 9.25302 1.27607C9.07625 0.871164 8.82372 0.368097 8.60908 0C6.86664 0.294478 5.2126 0.809814 3.65956 1.5092C0.528233 6.09815 -0.31773 10.5767 0.0989384 14.9816C2.18228 16.4908 4.18986 17.3988 6.1722 18C6.66462 17.3497 7.09392 16.6503 7.47271 15.9264C6.75301 15.6687 6.07119 15.3374 5.42724 14.9571C5.60401 14.8344 5.76815 14.6994 5.9323 14.5767C9.88432 16.3681 14.1646 16.3681 18.0662 14.5767C18.2303 14.7117 18.3945 14.8344 18.5712 14.9571C17.9273 15.3374 17.2328 15.6564 16.5258 15.9264C16.9046 16.6503 17.3338 17.3497 17.8263 18C19.8086 17.3988 21.8288 16.4908 23.8995 14.9816C24.392 9.86505 23.0536 5.43557 20.3389 1.5092H20.3137ZM8.00301 12.2822C6.81614 12.2822 5.84391 11.2147 5.84391 9.90186C5.84391 8.58898 6.79089 7.52149 8.00301 7.52149C9.21514 7.52149 10.1747 8.58898 10.1621 9.90186C10.1621 11.2025 9.21514 12.2822 8.00301 12.2822ZM15.9702 12.2822C14.7833 12.2822 13.8111 11.2147 13.8111 9.90186C13.8111 8.58898 14.7581 7.52149 15.9702 7.52149C17.1823 7.52149 18.1419 8.58898 18.1293 9.90186C18.1293 11.2025 17.1823 12.2822 15.9702 12.2822Z",
                                fill: "white",
                              }),
                            }),
                            s.jsx("g", {
                              className: "icon-hover",
                              children: s.jsx("path", {
                                d: "M20.3137 1.5092C18.7606 0.809814 17.1066 0.294478 15.3641 0C15.1495 0.368097 14.897 0.871164 14.7328 1.27607C12.8894 1.00613 11.0586 1.00613 9.25302 1.27607C9.07625 0.871164 8.82372 0.368097 8.60908 0C6.86664 0.294478 5.2126 0.809814 3.65956 1.5092C0.528233 6.09815 -0.31773 10.5767 0.0989384 14.9816C2.18228 16.4908 4.18986 17.3988 6.1722 18C6.66462 17.3497 7.09392 16.6503 7.47271 15.9264C6.75301 15.6687 6.07119 15.3374 5.42724 14.9571C5.60401 14.8344 5.76815 14.6994 5.9323 14.5767C9.88432 16.3681 14.1646 16.3681 18.0662 14.5767C18.2303 14.7117 18.3945 14.8344 18.5712 14.9571C17.9273 15.3374 17.2328 15.6564 16.5258 15.9264C16.9046 16.6503 17.3338 17.3497 17.8263 18C19.8086 17.3988 21.8288 16.4908 23.8995 14.9816C24.392 9.86505 23.0536 5.43557 20.3389 1.5092H20.3137ZM8.00301 12.2822C6.81614 12.2822 5.84391 11.2147 5.84391 9.90186C5.84391 8.58898 6.79089 7.52149 8.00301 7.52149C9.21514 7.52149 10.1747 8.58898 10.1621 9.90186C10.1621 11.2025 9.21514 12.2822 8.00301 12.2822ZM15.9702 12.2822C14.7833 12.2822 13.8111 11.2147 13.8111 9.90186C13.8111 8.58898 14.7581 7.52149 15.9702 7.52149C17.1823 7.52149 18.1419 8.58898 18.1293 9.90186C18.1293 11.2025 17.1823 12.2822 15.9702 12.2822Z",
                                fill: `url(#${r}_radial_dis)`,
                              }),
                            }),
                            s.jsx("defs", {
                              children: s.jsxs("radialGradient", {
                                id: `${r}_radial_dis`,
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform:
                                  "translate(3.26357 0.489793) rotate(49.8512) scale(39.9154 98.0851)",
                                children: [
                                  s.jsx("stop", { stopColor: "#95D7FF" }),
                                  s.jsx("stop", {
                                    offset: "0.354167",
                                    stopColor: "#FF91B6",
                                  }),
                                  s.jsx("stop", {
                                    offset: "0.697917",
                                    stopColor: "#4272FF",
                                  }),
                                  s.jsx("stop", {
                                    offset: "1",
                                    stopColor: "#F155FF",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      s.jsx("span", {
                        className: "text-xs of-gradient__text",
                        children: "Discord",
                      }),
                    ],
                  }),
                e?.demo &&
                  s.jsxs("a", {
                    href: e?.demo,
                    target: "_blank",
                    className:
                      "flex flex-1 flex-col justify-center items-center",
                    children: [
                      s.jsx("i", {
                        className: "icon icon__svg mb-1 inline-block",
                        children: s.jsxs("svg", {
                          width: "17",
                          height: "17",
                          viewBox: "0 0 17 17",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            s.jsxs("g", {
                              className: "icon-active",
                              children: [
                                s.jsx("path", {
                                  d: "M1.61905 0C0.724886 0 0 0.724836 0 1.61905V5.66667C0 6.56088 0.724886 7.28571 1.61905 7.28571H5.66667C6.56083 7.28571 7.28571 6.56088 7.28571 5.66667V1.61905C7.28571 0.724836 6.56083 0 5.66667 0H1.61905Z",
                                  fill: "white",
                                }),
                                s.jsx("path", {
                                  d: "M11.3333 0C10.4392 0 9.71429 0.724836 9.71429 1.61905V5.66667C9.71429 6.56088 10.4392 7.28571 11.3333 7.28571H15.381C16.2751 7.28571 17 6.56088 17 5.66667V1.61905C17 0.724836 16.2751 0 15.381 0H11.3333Z",
                                  fill: "white",
                                }),
                                s.jsx("path", {
                                  d: "M0 11.3333C0 10.4391 0.724886 9.71429 1.61905 9.71429H5.66667C6.56083 9.71429 7.28571 10.4391 7.28571 11.3333V15.381C7.28571 16.2752 6.56083 17 5.66667 17H1.61905C0.724886 17 0 16.2752 0 15.381V11.3333Z",
                                  fill: "white",
                                }),
                                s.jsx("path", {
                                  d: "M11.3333 9.71429C10.4392 9.71429 9.71429 10.4391 9.71429 11.3333V15.381C9.71429 16.2752 10.4392 17 11.3333 17H15.381C16.2751 17 17 16.2752 17 15.381V11.3333C17 10.4391 16.2751 9.71429 15.381 9.71429H11.3333Z",
                                  fill: "white",
                                }),
                              ],
                            }),
                            s.jsx("g", {
                              className: "icon-hover",
                              children: s.jsxs("svg", {
                                width: "17",
                                height: "17",
                                viewBox: "0 0 17 17",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  s.jsx("path", {
                                    d: "M1.61905 0C0.724885 0 0 0.724836 0 1.61905V5.66667C0 6.56088 0.724885 7.28571 1.61905 7.28571H5.66667C6.56083 7.28571 7.28571 6.56088 7.28571 5.66667V1.61905C7.28571 0.724836 6.56083 0 5.66667 0H1.61905Z",
                                    fill: "url(#paint0_radial_1734_288_demo)",
                                  }),
                                  s.jsx("path", {
                                    d: "M11.3333 0C10.4392 0 9.71429 0.724836 9.71429 1.61905V5.66667C9.71429 6.56088 10.4392 7.28571 11.3333 7.28571H15.381C16.2751 7.28571 17 6.56088 17 5.66667V1.61905C17 0.724836 16.2751 0 15.381 0H11.3333Z",
                                    fill: "url(#paint1_radial_1734_288_demo)",
                                  }),
                                  s.jsx("path", {
                                    d: "M0 11.3333C0 10.4391 0.724885 9.71429 1.61905 9.71429H5.66667C6.56083 9.71429 7.28571 10.4391 7.28571 11.3333V15.381C7.28571 16.2752 6.56083 17 5.66667 17H1.61905C0.724885 17 0 16.2752 0 15.381V11.3333Z",
                                    fill: "url(#paint2_radial_1734_288_demo)",
                                  }),
                                  s.jsx("path", {
                                    d: "M11.3333 9.71429C10.4392 9.71429 9.71429 10.4391 9.71429 11.3333V15.381C9.71429 16.2752 10.4392 17 11.3333 17H15.381C16.2751 17 17 16.2752 17 15.381V11.3333C17 10.4391 16.2751 9.71429 15.381 9.71429H11.3333Z",
                                    fill: "url(#paint3_radial_1734_288_demo)",
                                  }),
                                  s.jsxs("defs", {
                                    children: [
                                      s.jsxs("radialGradient", {
                                        id: "paint0_radial_1734_288_demo",
                                        cx: "0",
                                        cy: "0",
                                        r: "1",
                                        gradientUnits: "userSpaceOnUse",
                                        gradientTransform:
                                          "translate(2.31169 0.462582) rotate(57.6805) scale(34.0976 76.8127)",
                                        children: [
                                          s.jsx("stop", {
                                            stopColor: "#95D7FF",
                                          }),
                                          s.jsx("stop", {
                                            offset: "0.354167",
                                            stopColor: "#FF91B6",
                                          }),
                                          s.jsx("stop", {
                                            offset: "0.697917",
                                            stopColor: "#4272FF",
                                          }),
                                          s.jsx("stop", {
                                            offset: "1",
                                            stopColor: "#F155FF",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("radialGradient", {
                                        id: "paint1_radial_1734_288_demo",
                                        cx: "0",
                                        cy: "0",
                                        r: "1",
                                        gradientUnits: "userSpaceOnUse",
                                        gradientTransform:
                                          "translate(2.31169 0.462582) rotate(57.6805) scale(34.0976 76.8127)",
                                        children: [
                                          s.jsx("stop", {
                                            stopColor: "#95D7FF",
                                          }),
                                          s.jsx("stop", {
                                            offset: "0.354167",
                                            stopColor: "#FF91B6",
                                          }),
                                          s.jsx("stop", {
                                            offset: "0.697917",
                                            stopColor: "#4272FF",
                                          }),
                                          s.jsx("stop", {
                                            offset: "1",
                                            stopColor: "#F155FF",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("radialGradient", {
                                        id: "paint2_radial_1734_288_demo",
                                        cx: "0",
                                        cy: "0",
                                        r: "1",
                                        gradientUnits: "userSpaceOnUse",
                                        gradientTransform:
                                          "translate(2.31169 0.462582) rotate(57.6805) scale(34.0976 76.8127)",
                                        children: [
                                          s.jsx("stop", {
                                            stopColor: "#95D7FF",
                                          }),
                                          s.jsx("stop", {
                                            offset: "0.354167",
                                            stopColor: "#FF91B6",
                                          }),
                                          s.jsx("stop", {
                                            offset: "0.697917",
                                            stopColor: "#4272FF",
                                          }),
                                          s.jsx("stop", {
                                            offset: "1",
                                            stopColor: "#F155FF",
                                          }),
                                        ],
                                      }),
                                      s.jsxs("radialGradient", {
                                        id: "paint3_radial_1734_288_demo",
                                        cx: "0",
                                        cy: "0",
                                        r: "1",
                                        gradientUnits: "userSpaceOnUse",
                                        gradientTransform:
                                          "translate(2.31169 0.462582) rotate(57.6805) scale(34.0976 76.8127)",
                                        children: [
                                          s.jsx("stop", {
                                            stopColor: "#95D7FF",
                                          }),
                                          s.jsx("stop", {
                                            offset: "0.354167",
                                            stopColor: "#FF91B6",
                                          }),
                                          s.jsx("stop", {
                                            offset: "0.697917",
                                            stopColor: "#4272FF",
                                          }),
                                          s.jsx("stop", {
                                            offset: "1",
                                            stopColor: "#F155FF",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      s.jsx("span", {
                        className: "text-xs of-gradient__text",
                        children: "Demo",
                      }),
                    ],
                  }),
                e?.url &&
                  s.jsxs("a", {
                    href: e?.url,
                    target: "_blank",
                    className:
                      "flex flex-1 flex-col justify-center items-center",
                    children: [
                      s.jsx("i", {
                        className: "icon icon__svg mb-1 inline-block",
                        children: s.jsxs("svg", {
                          width: "17",
                          height: "17",
                          viewBox: "0 0 17 17",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            s.jsxs("g", {
                              className: "icon-active",
                              children: [
                                s.jsx("path", {
                                  d: "M4 2C2.89543 2 2 2.89543 2 4V13C2 14.1046 2.89543 15 4 15H13C14.1046 15 15 14.1046 15 13V9.5H17V13C17 15.2091 15.2091 17 13 17H4C1.79086 17 0 15.2091 0 13V4C0 1.79086 1.79086 0 4 0H7.5V2H4Z",
                                  fill: "white",
                                }),
                                s.jsx("path", {
                                  d: "M13.5859 2H10V0H15C16.1046 0 17 0.895431 17 2V7H15V3.41436L7.20718 11.2072L5.79297 9.79297L13.5859 2Z",
                                  fill: "white",
                                }),
                              ],
                            }),
                            s.jsxs("g", {
                              className: "icon-hover",
                              children: [
                                s.jsx("path", {
                                  d: "M4 2C2.89543 2 2 2.89543 2 4V13C2 14.1046 2.89543 15 4 15H13C14.1046 15 15 14.1046 15 13V9.5H17V13C17 15.2091 15.2091 17 13 17H4C1.79086 17 0 15.2091 0 13V4C0 1.79086 1.79086 0 4 0H7.5V2H4Z",
                                  fill: `url(#${o}_radial_0)`,
                                }),
                                s.jsx("path", {
                                  d: "M13.5859 2H10V0H15C16.1046 0 17 0.895431 17 2V7H15V3.41436L7.20718 11.2072L5.79297 9.79297L13.5859 2Z",
                                  fill: `url(#${o}_radial_1)`,
                                }),
                              ],
                            }),
                            s.jsxs("defs", {
                              children: [
                                s.jsxs("radialGradient", {
                                  id: `${o}_radial_0`,
                                  cx: "0",
                                  cy: "0",
                                  r: "1",
                                  gradientUnits: "userSpaceOnUse",
                                  gradientTransform:
                                    "translate(2.31169 0.462582) rotate(57.6805) scale(34.0976 76.8127)",
                                  children: [
                                    s.jsx("stop", { stopColor: "#95D7FF" }),
                                    s.jsx("stop", {
                                      offset: "0.354167",
                                      stopColor: "#FF91B6",
                                    }),
                                    s.jsx("stop", {
                                      offset: "0.697917",
                                      stopColor: "#4272FF",
                                    }),
                                    s.jsx("stop", {
                                      offset: "1",
                                      stopColor: "#F155FF",
                                    }),
                                  ],
                                }),
                                s.jsxs("radialGradient", {
                                  id: `${o}_radial_1`,
                                  cx: "0",
                                  cy: "0",
                                  r: "1",
                                  gradientUnits: "userSpaceOnUse",
                                  gradientTransform:
                                    "translate(2.31169 0.462582) rotate(57.6805) scale(34.0976 76.8127)",
                                  children: [
                                    s.jsx("stop", { stopColor: "#95D7FF" }),
                                    s.jsx("stop", {
                                      offset: "0.354167",
                                      stopColor: "#FF91B6",
                                    }),
                                    s.jsx("stop", {
                                      offset: "0.697917",
                                      stopColor: "#4272FF",
                                    }),
                                    s.jsx("stop", {
                                      offset: "1",
                                      stopColor: "#F155FF",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      s.jsx("span", {
                        className: "text-xs of-gradient__text",
                        children: "Info",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        s.jsx("span", {
          className:
            "absolute -top-6 -right-2 xs:-right-4 z-20 lg:hidden cursor-pointer",
          onClick: i,
          children: s.jsx(v, {}),
        }),
      ],
    });
  },
  m = ({
    handleOnClick: e,
    handleWhileHover: i,
    handleHoverEnd: l,
    handleOnClose: o,
    index: a,
    item: r,
    selectedId: h,
    hasOverlay: f,
  }) => {
    const C = (t) => {
        e && e(t);
      },
      j = () => {
        i && i(a);
      },
      p = () => {
        l && l();
      };
    return s.jsxs(x.div, {
      onClick: (t) => C(t),
      whileHover: j,
      onHoverEnd: p,
      className: "of-product__card relative",
      children: [
        s.jsxs("div", {
          className: `of-product__card-preview relative ${
            r.soon ? "is-disabled" : "cursor-pointer"
          }`,
          children: [
            s.jsxs("picture", {
              className: "mb-3 max-w-[110px]",
              children: [
                s.jsx("source", {
                  srcSet: `${r?.thumbWebp.src}`,
                  type: "image/webp",
                }),
                s.jsx("img", {
                  width: r?.thumb.width,
                  height: r?.thumb.height,
                  src: r?.thumb.src,
                  loading: "lazy",
                  alt: r?.name,
                }),
              ],
            }),
            r.soon &&
              s.jsx("div", {
                className:
                  "h-[20px] bg-gradient-to-r from-[#97CCFF] via-[#C0CDFF] to-[#EBC4FF] items-center rounded-[10px] inline-flex absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 sm:px-3 z-10",
                children: s.jsx("span", {
                  className: "text-xs font-medium uppercase text-dark-blue",
                  children: "Soon",
                }),
              }),
          ],
        }),
        f && !r.soon && h === a && s.jsx(w, { item: r, handleOnClose: o }),
      ],
    });
  },
  B = ({ items: e }) => {
    const [i, l] = c.useState(null),
      [o, a] = c.useState(null),
      [r, h] = c.useState("no-js"),
      f = (t) => {
        o || l(t);
      },
      C = () => {
        o || l(null);
      },
      j = (t, n, d) => {
        t.stopPropagation(), !(!o || d?.soon) && l(n);
      },
      p = (t) => {
        t.stopPropagation(), l(null);
      };
    return (
      c.useEffect(() => {
        const t = () => {
          a(window.innerWidth < 1024);
        };
        return (
          window.addEventListener("resize", t),
          t(),
          () => {
            window.removeEventListener("resize", t);
          }
        );
      }, []),
      c.useEffect(() => {
        h("is-ready");
      }, []),
      s.jsxs(x.div, {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 1.2 },
        viewport: { once: !0 },
        className: "relative md:pt-20",
        children: [
          s.jsx(b, { css: "max-md: hidden" }),
          s.jsx(_, {
            params: u,
            children:
              e?.length > 0 &&
              e.map((t, n) =>
                s.jsxs(
                  g,
                  {
                    onClick: (d) => j(d, n, t),
                    children: [
                      !o &&
                        s.jsx(
                          m,
                          {
                            hasOverlay: !0,
                            index: n,
                            item: t,
                            selectedId: i,
                            handleWhileHover: (d) => f(d),
                            handleHoverEnd: C,
                          },
                          n
                        ),
                      o &&
                        s.jsx(m, {
                          index: n,
                          item: t,
                          handleOnClose: (d) => p(d),
                        }),
                    ],
                  },
                  n
                )
              ),
          }),
          o &&
            i !== null &&
            s.jsxs(s.Fragment, {
              children: [
                s.jsx(w, { item: e[i], handleOnClose: p }),
                s.jsx(x.div, {
                  initial: "hidden",
                  animate: "visible",
                  exit: "hidden",
                  variants: F,
                  transition: { duration: 0.3 },
                  className:
                    "bg-dark-blue fixed top-0 left-0 w-full h-full z-10",
                }),
              ],
            }),
        ],
      })
    );
  };
export { B as default };
