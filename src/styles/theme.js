import { lightenDarkenColor } from '@utils';

export const whiteColor = `#ffffff`;
export const blackColor = `#000000`;
export const backgroundColor = `#f7f7f7`;
export const backgroundDarkColor = `#323232`;

export const primaryColor = `#7362c9`;
export const secondaryColor = `#1b187f`;
export const highlightColor = `rgba(255, 235, 20, 0.7)`;

export const textColor = lightenDarkenColor(blackColor, 65);
export const linkColor = lightenDarkenColor(secondaryColor, 15);
export const linkColorHover = lightenDarkenColor(linkColor, -15);
export const borderColor = `rgba(4, 4, 4, .1)`;

export const successColor = `#d4edda`;
export const dangerColor = `#f8d7da`;
export const infoColor = `#d1ecf1`;
export const warningColor = `#fff3cd`;

export default {
  light: {
    whiteColor,
    blackColor,
    backgroundColor,
    backgroundDarkColor,
    primaryColor,
    secondaryColor,
    highlightColor,
    textColor,
    linkColor,
    linkColorHover,
    borderColor,
    successColor,
    dangerColor,
    infoColor,
    warningColor,
  },
  dark: {
    whiteColor,
    blackColor,
    backgroundColor,
    backgroundDarkColor,
    primaryColor,
    secondaryColor,
    highlightColor,
    textColor,
    linkColor,
    linkColorHover,
    borderColor,
    successColor,
    dangerColor,
    infoColor,
    warningColor,
  },
};
