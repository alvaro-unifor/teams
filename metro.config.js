const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  serializer: {
    getModulesRunBeforeMainModule: () => [
      require.resolve('react-native/Libraries/Core/InitializeCore'),
    ],
    getPolyfills: () => require('react-native/rn-get-polyfills')(),
    isThirdPartyModule: (module) => {
      // Block virtual modules from appearing in the source maps.
      if (module.path.includes('__virtual__')) return true;
      // Generally block node modules
      if (/(?:^|[/\\])node_modules[/\\]/.test(module.path)) {
        // Allow the expo-router/entry and expo/AppEntry modules to be considered first party so the root of the app appears in the trace.
        return !module.path.match(/[/\\](expo-router[/\\]entry|expo[/\\]AppEntry)/);
      }
      return false;
    },
  },
  watcher: {
    additionalExts: ['env.development.local', 'env.local', 'env.development', 'env'],
  },
};