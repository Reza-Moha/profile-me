import LocalFont from "next/font/local";
export const vazirFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/vazir/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  style: "normal",
  display: "block",
});
export const doranFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/Doran/Doran-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Doran/Doran-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Doran/Doran-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Doran/Doran-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Doran/Doran-Thin.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-doran",
  style: "normal",
  display: "block",
});

export const kalameFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/Kalame/KalamehRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kalame/KalamehBlack.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kalame/KalamehBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kalame/KalamehThin.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-kalame",
  style: "normal",
  display: "block",
});
