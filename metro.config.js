const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif'],
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'cjs', 'svg'],

    extraNodeModules: {
      app: path.resolve(__dirname, 'app'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
