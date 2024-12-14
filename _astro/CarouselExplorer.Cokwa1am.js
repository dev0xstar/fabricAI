import{j as s}from"./jsx-runtime.dvAB8w6V.js";import{R as p}from"./index.B3PfHquH.js";import{C as d}from"./CarouselSwipper.vHt-rwwp.js";/* empty css                            */const m=({items:t,bgSrc:r})=>{const[o,a]=p.useState(!1),l={effect:"coverflow",loop:!0,grabCursor:!0,pagination:{clickable:!0},centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:150,modifier:5,slideShadows:!1,initialSlide:2},injectStyles:[`
            .swiper { overflow: visible !important; }
            
            .swiper .swiper-pagination-bullet {
                background: #6D7FB1;
                width: 8px;
                height: 8px;
                margin: 0 9px !important;
                opacity: 1;
          }
          .swiper .swiper-pagination-bullet-active {
            width: 12px;
            height: 12px;        
            background: linear-gradient(117deg, #97CCFF 0%, #C0CDFF 52%, #E69EF2 100%);
          }
          .swiper-horizontal {padding-bottom: 80px;}  
          .swiper-pagination {padding: 10px 0;}
          
          @media (max-width: 767px) {
          .swiper-horizontal {padding-bottom: 50px;}
          }
          
          swiper-slide:not(.swiper-slide-active)  {
                opacity: 0.8; 
                filter: blur(8px);
                -webkit-filter: blur(8px); }
            }
      `]},n=()=>{a(!0)};return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"of-container",children:s.jsxs("div",{className:"of-heading flex flex-col w-full",children:[s.jsxs("div",{className:"flex w-full items-center mb-4 md:mb-6",children:[s.jsx("i",{className:"inline-block mr-3 md:mr-5",children:s.jsxs("svg",{width:"100%",height:"100",className:"w-8 h-8 sm:w-[53px] sm:h-[53px]",viewBox:"0 0 53 53",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M1 15L2.36607 17.3571C4.59648 21.2057 10.1535 21.2057 12.3839 17.3571V17.3571C12.9922 16.3075 14.5078 16.3075 15.1161 17.3571V17.3571C17.3465 21.2057 22.9035 21.2057 25.1339 17.3571V17.3571C25.7422 16.3075 27.2578 16.3075 27.8661 17.3571V17.3571C30.0965 21.2057 35.6535 21.2057 37.8839 17.3571V17.3571C38.4922 16.3075 40.0078 16.3075 40.6161 17.3571V17.3571C42.8465 21.2057 48.4035 21.2057 50.6339 17.3571L52 15",stroke:"url(#paint0_linear_489_5981)",strokeWidth:"2"}),s.jsx("rect",{x:"0.5",y:"0.5",width:"52",height:"52",rx:"14.5",stroke:"url(#paint1_linear_489_5981)"}),s.jsx("path",{d:"M23 31H30C31.6569 31 33 32.3431 33 34V52H20V34C20 32.3431 21.3431 31 23 31Z",stroke:"url(#paint2_linear_489_5981)",strokeWidth:"2","data-astro-source-loc":"4:6"}),s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"paint0_linear_489_5981",x1:"-6.28571",y1:"12.9655",x2:"-6.03827",y2:"19.3177",gradientUnits:"userSpaceOnUse",children:[s.jsx("stop",{stopColor:"#F7AAFD"}),s.jsx("stop",{offset:"0.255208",stopColor:"#A6ABFF"}),s.jsx("stop",{offset:"0.494792",stopColor:"#93D5FF"}),s.jsx("stop",{offset:"0.71875",stopColor:"#F1C4FF"}),s.jsx("stop",{offset:"1",stopColor:"#D7F4FF"})]}),s.jsxs("linearGradient",{id:"paint1_linear_489_5981",x1:"-7.57142",y1:"-107.828",x2:"127.839",y2:"-39.6679",gradientUnits:"userSpaceOnUse",children:[s.jsx("stop",{stopColor:"#F7AAFD"}),s.jsx("stop",{offset:"0.255208",stopColor:"#A6ABFF"}),s.jsx("stop",{offset:"0.494792",stopColor:"#93D5FF"}),s.jsx("stop",{offset:"0.71875",stopColor:"#F1C4FF"}),s.jsx("stop",{offset:"1",stopColor:"#D7F4FF"})]}),s.jsxs("linearGradient",{id:"paint2_linear_489_5981",x1:"16.8571",y1:"-16.7931",x2:"60.2181",y2:"-2.55876",gradientUnits:"userSpaceOnUse",children:[s.jsx("stop",{stopColor:"#F7AAFD"}),s.jsx("stop",{offset:"0.255208",stopColor:"#A6ABFF"}),s.jsx("stop",{offset:"0.494792",stopColor:"#93D5FF"}),s.jsx("stop",{offset:"0.71875",stopColor:"#F1C4FF"}),s.jsx("stop",{offset:"1",stopColor:"#D7F4FF"})]})]})]})}),s.jsx("h3",{className:"of__heading-gradient text-base md:text-2xl",children:"Join our marketplace"})]}),s.jsxs("p",{className:"of-gradient__text font-medium of-heading--primary",children:["Venture into Fabric AI's ",s.jsx("br",{className:"max-sm:hidden"})," AI Apps Marketplace"]})]})}),s.jsx("div",{className:"of-container of-marketplace--container",children:s.jsxs("div",{className:"of-marketplace__carousel",children:[s.jsx(d,{onSliderInit:n,params:l,children:t?.length>0&&t.map((e,i)=>s.jsx("div",{slot:`slide-${i}`,children:s.jsx("div",{className:"of__carousel__item",children:s.jsxs("picture",{children:[s.jsx("source",{media:"(max-width: 640px)","data-srcset":`${e?.webp.src}`,type:"image/webp"}),s.jsx("source",{media:"(min-width: 641px)","data-srcset":`${e?.webp.src} 1x, ${e?.webp2x.src} 2x`,type:"image/webp"}),s.jsx("img",{width:e?.img.width,height:e?.img.height,"data-src":e?.img.src,className:"lazyload",decoding:"async",alt:e?.alt})]})})},i))}),o&&s.jsx("div",{className:"of-marketplace--gradient",children:s.jsx("img",{src:r.src,alt:"Fabric AI gradient"})})]})})]})};export{m as default};
