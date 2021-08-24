module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          screens: './src/screens',
          images: './src/images',
          constants: './src/constants',
          common: './src/common',
        },
      },
    ],
  ],
};
