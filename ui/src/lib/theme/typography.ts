import { convertPixelsToRem } from '../utils';

// general
const defaultFontSize = `${convertPixelsToRem(16)}rem`;
const defaultFontFamily = 'Lato';
const fontWeightLight = 300;
const fontWeightRegular = 400;
const fontWeightMedium = 500;
const fontWeightBold = 700;
const fallbackDefaultFonts = ", 'Helvetica Neue', Helvetica, -apple-system, BlinkMacSystemFont, \
'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif, \
'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
const fallbackDefaultCodeFonts = ", 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace";

// headlines
const headlineFontFamily = 'Raleway';
const headline1 = {
    fontFamily: headlineFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(46)}rem`,
    lineHeight: `${convertPixelsToRem(50)}rem`,
    fontWeight: fontWeightBold
};
const headline2 = {
    fontFamily: headlineFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(36)}rem`,
    lineHeight: `${convertPixelsToRem(40)}rem`,
    fontWeight: fontWeightBold
};
const headline3 = {
    fontFamily: headlineFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(24)}rem`,
    lineHeight: `${convertPixelsToRem(28)}rem`,
    fontWeight: fontWeightBold
};
const headline4 = {
    fontFamily: headlineFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(18)}rem`,
    lineHeight: `${convertPixelsToRem(22)}rem`,
    fontWeight: fontWeightBold
};
const headline5 = {
    fontFamily: headlineFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(13)}rem`,
    lineHeight: `${convertPixelsToRem(18)}rem`,
    fontWeight: fontWeightMedium
};

// body
const bodyFontFamily = defaultFontFamily;
const bodyJumbo = {
    fontFamily: bodyFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(24)}rem`,
    lineHeight: `${convertPixelsToRem(30)}rem`,
};
const bodyBig = {
    fontFamily: bodyFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(16)}rem`,
    lineHeight: `${convertPixelsToRem(22)}rem`,
};
const bodyBigBold = {
    fontFamily: bodyBig.fontFamily,
    fontSize: bodyBig.fontSize,
    lineHeight: bodyBig.lineHeight,
    fontWeight: fontWeightBold
};
const bodySmall = {
    fontFamily: bodyFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(14)}rem`,
    lineHeight: `${convertPixelsToRem(20)}rem`,
};
const bodySmallBold = {
    fontFamily: bodySmall.fontFamily,
    fontSize: bodySmall.fontSize,
    lineHeight: bodySmall.lineHeight,
    fontWeight: fontWeightBold
};
const bodyMicro = {
    fontFamily: bodyFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(13)}rem`,
    lineHeight: `${convertPixelsToRem(18)}rem`,
};
const notification = {
    fontFamily: bodyFontFamily + fallbackDefaultFonts,
    fontSize: `${convertPixelsToRem(14)}rem`,
    lineHeight: `${convertPixelsToRem(18)}rem`,
};
const notificationBold = {
    fontFamily: notification.fontFamily,
    fontSize: notification.fontSize,
    lineHeight: notification.lineHeight,
    fontWeight: fontWeightBold
};

//attribution
const attributionFontFamily = 'Volkhov';
const quote = {
  fontFamily: attributionFontFamily + fallbackDefaultFonts,
  fontSize: `${convertPixelsToRem(30)}rem`,
  lineHeight: `${convertPixelsToRem(42)}rem`,
  fontWeight: fontWeightBold
};
const author = {
  fontFamily: attributionFontFamily + fallbackDefaultFonts,
  fontSize: `${convertPixelsToRem(18)}rem`,
  lineHeight: `${convertPixelsToRem(36)}rem`,
};

//code
const codeFontFamily = 'Roboto Mono';
const code = {
  fontFamily: codeFontFamily + fallbackDefaultCodeFonts,
  fontSize: `${convertPixelsToRem(13)}rem`,
  lineHeight: `${convertPixelsToRem(18)}rem`,
};
const codeDark = {
  fontFamily: code.fontFamily,
  fontSize: code.fontSize,
  lineHeight: code.lineHeight,
  backgroundColorKey: 'N10',
  colorKey: 'N5',
  padding: `${convertPixelsToRem(20)}rem`,
};

export const Typography = {
    // general
    fontSize: defaultFontSize,
    fontFamily: defaultFontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,

    // headlines
    headlineFontFamily,
    headline1,
    headline2,
    headline3,
    headline4,
    headline5,

    // body
    bodyFontFamily,
    bodyJumbo,
    bodyBig,
    bodyBigBold,
    bodySmall,
    bodySmallBold,
    bodyMicro,
    notification,
    notificationBold,

    // attribution
    attributionFontFamily,
    quote,
    author,

    // code
    codeFontFamily,
    code,
    codeDark
};
