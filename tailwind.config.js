/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        DarkAccent: "#111111",
        QuietText: "#7E7A72",
        Accent: "#E4A85E",
        BrightAccent: "#F99D2B",
        Text: "#F5F2EC",
      },
    },
  },
  plugins: [],
};
