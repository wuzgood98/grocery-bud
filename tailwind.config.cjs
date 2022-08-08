/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      borderRadius: {
        s: "0.25rem",
      },
    },
    colors: {
      /* dark shades of primary color*/
      clrPrimary1: "hsl(205, 86%, 17%)",
      clrPrimary2: "hsl(205, 77%, 27%)",
      clrPrimary3: "hsl(205, 72%, 37%)",
      clrPrimary4: "hsl(205, 63%, 48%)",
      /* primary/main color */
      clrPrimary5: "hsl(205, 78%, 60%)",
      /* lighter shades of primary color */
      clrPrimary6: "hsl(205, 89%, 70%)",
      clrPrimary7: "hsl(205, 90%, 76%)",
      clrPrimary8: "hsl(205, 86%, 81%)",
      clrPrimary9: "hsl(205, 90%, 88%)",
      clrPrimary10: "hsl(205, 100%, 96%)",
      /* darkest grey - used for headings */
      clrGrey1: "hsl(209, 61%, 16%)",
      clrGrey2: "hsl(211, 39%, 23%)",
      clrGrey3: "hsl(209, 34%, 30%)",
      clrGrey4: "hsl(209, 28%, 39%)",
      /* grey used for paragraphs */
      clrGrey5: "hsl(210, 22%, 49%)",
      clrGrey6: "hsl(209, 23%, 60%)",
      clrGrey7: "hsl(211, 27%, 70%)",
      clrGrey8: "hsl(210, 31%, 80%)",
      clrGrey9: "hsl(212, 33%, 89%)",
      clrGrey10: "hsl(210, 36%, 96%)",
      clrWhite: "#fff",
      clrRedDark: "hsl(360, 67%, 44%)",
      clrRedLight: "hsl(360, 71%, 66%)",
      clrGreenDark: "hsl(125, 67%, 44%)",
      clrGreenLight: "hsl(125, 71%, 66%)",
      clrBlack: "#222",
    },
  },
  plugins: [],
};
