const pink = {
  pink500: "#FB9D9D",
  pink300: "#F9C7C7",
  pink100: "#FEDBDB",
};

const red = {
  red500: "#F04E4E",
};

const grays = {
  white: "#fff",
  white200: "#F0EEEE",
  gray100: "#676767",
  gray600: "#383333",
  gray800: "#292424",
  gray900: "#161313",
  black: "#000",
};

export const AppStyles = {
  color: {
    primary: pink.pink300,
    secondary: red.red500,
    title: grays.black,
    text: grays.gray900,
    description: grays.gray600,
    priceText: grays.gray900,
    phoneNumText: grays.gray900,
    dateText: grays.gray100,
    label: grays.gray800,
    inputBg: pink.pink100,
    btnAuthBg: red.red500,
    activeDrawerColor: grays.gray600,
    activeDrawerBg: pink.pink500,
  },
  fontSize: {
    title: 30,
    label: 16,
  },
  buttonWidth: {
    auth: "50%",
  },
  textInputWidth: {
    main: "80%",
  },
};
