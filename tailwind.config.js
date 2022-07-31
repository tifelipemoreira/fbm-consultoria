module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#073bab",
        fbmprimary: "#041531",
        fbmsecondary: "#0583F2",
        fmbwhite:"#FFFFFF"


      },
      fontFamily:{
        "Dancing":["Dancing Script", "cursive"],
        "Roboto":["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
};
