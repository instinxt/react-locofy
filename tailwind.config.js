/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-contrast": "#fff",
        gray: {
          "100": "#8e8e94",
          "200": "rgba(255, 255, 255, 0.2)",
        },
        aliceblue: "#f3f7fb",
        whitesmoke: "#eaeaea",
        orange: "#f99a0e",
        darkorange: "#dc880b",
        "other-outlined-border": "rgba(0, 0, 0, 0.23)",
        "text-secondary": "rgba(0, 0, 0, 0.6)",
        "grey-grey-300": "#e0e0e0",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "grey-grey-400": "#bdbdbd",
        "grey-grey-700": "#616161",
        slategray: "#576074",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#303030",
          "400": "rgba(48, 48, 48, 0.87)",
        },
        cornflowerblue: {
          "100": "#4dabff",
          "200": "#1262af",
          "300": "#1262ae",
        },
        gainsboro: "rgba(226, 226, 226, 0.1)",
        lavender: {
          "100": "#cdddec",
          "200": "#ccdcec",
        },
        darkgray: "#999",
        yellowgreen: "#79ca00",
        gold: "#fdbf00",
        sandybrown: "#ff9b53",
        black: "#000",
        lightgray: "#cecece",
      },
      spacing: {},
      fontFamily: {
        "components-button-large": "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        "29xl": "48px",
        "45xl": "64px",
        "12xl": "31px",
        "3xs": "10px",
        lgi: "19px",
        "19xl": "38px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      mini: "15px",
      smi: "13px",
      xs: "12px",
      "11xl": "30px",
      "5xl": "24px",
      "3xl": "22px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "19xl": "38px",
      "4xl": "23px",
      "42xl": "61px",
      "30xl": "49px",
      "18xl": "37px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
