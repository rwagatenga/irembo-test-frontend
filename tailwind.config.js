/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // colors: {
    //   gray: colors.coolGray,
    //   blue: colors.lightBlue,
    //   red: colors.rose,
    //   pink: colors.fuchsia,
    // },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
// const colors = require('tailwindcss/colors');
import { colors } from "tailwindcss/colors";

// console.log({ colors });
// export default {
//   theme: {
//     screens: {
//       sm: "480px",
//       md: "768px",
//       lg: "976px",
//       xl: "1440px",
//     },
//     colors: {
//       gray: colors.coolGray,
//       blue: colors.lightBlue,
//       red: colors.rose,
//       pink: colors.fuchsia,
//     },
//     fontFamily: {
//       sans: ["Graphik", "sans-serif"],
//       serif: ["Merriweather", "serif"],
//     },
//     extend: {
//       spacing: {
//         128: "32rem",
//         144: "36rem",
//       },
//       borderRadius: {
//         "4xl": "2rem",
//       },
//     },
//   },
// };
