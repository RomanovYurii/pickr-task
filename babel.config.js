module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          actions: './src/actions',
          components: './src/components',
          reducers: './src/reducers',
          screens: './src/screens',
          store: './src/store',
          utils: './src/utils',
        },
      },
    ],
  ],
};
