import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  body: {
    backgroundColor: '#292c35',
  },
  '@font-face': [
    {
      fontFamily: 'Muli Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli Regular'),\n    url('./src/assets/fonts/Muli-Regular.woff') format('woff')",
    },
    {
      fontFamily: 'Muli Italic',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli Italic'),\n    url('./src/assets/fonts/Muli-Italic.woff') format('woff')",
    },
    {
      fontFamily: 'Muli ExtraLight',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli ExtraLight'),\n    url('./src/assets/fonts/Muli-ExtraLight.woff') format('woff')",
    },
    {
      fontFamily: 'Muli ExtraLight Italic',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli ExtraLight Italic'),\n    url('./src/assets/fonts/Muli-ExtraLightItalic.woff') format('woff')",
    },
    {
      fontFamily: 'Muli Light',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli Light'), url('./src/assets/fonts/Muli-Light.woff') format('woff')",
    },
    {
      fontFamily: 'Muli Light Italic',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli Light Italic'),\n    url('./src/assets/fonts/Muli-LightItalic.woff') format('woff')",
    },
    {
      fontFamily: 'Muli SemiBold',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli SemiBold'),\n    url('./src/assets/fonts/Muli-SemiBold.woff') format('woff')",
    },
    {
      fontFamily: 'Muli SemiBold Italic',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli SemiBold Italic'),\n    url('./src/assets/fonts/Muli-SemiBoldItalic.woff') format('woff')",
    },
    {
      fontFamily: 'Muli Bold',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli Bold'), url('./src/assets/fonts/Muli-Bold.woff') format('woff')",
    },
    {
      fontFamily: 'Muli Bold Italic',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli Bold Italic'),\n    url('./src/assets/fonts/Muli-BoldItalic.woff') format('woff')",
    },
    {
      fontFamily: 'Muli ExtraBold',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli ExtraBold'),\n    url('./src/assets/fonts/Muli-ExtraBold.woff') format('woff')",
    },
    {
      fontFamily: 'Muli ExtraBold Italic',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli ExtraBold Italic'),\n    url('./src/assets/fonts/Muli-ExtraBoldItalic.woff') format('woff')",
    },
    {
      fontFamily: 'Muli Black',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli Black'), url('./src/assets/fonts/Muli-Black.woff') format('woff')",
    },
    {
      fontFamily: 'Muli Black Italic',
      fontStyle: 'normal',
      fontWeight: 'normal',
      src: "local('Muli Black Italic'),\n    url('./src/assets/fonts/Muli-BlackItalic.woff') format('woff')",
    },
  ],
});
