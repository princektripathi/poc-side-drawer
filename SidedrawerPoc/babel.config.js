module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: './src/config/.env',
        blocklist: null,
        safe: true,
        allowUndefined: false,
        verbose: false,
        allowlist: ['API_URL'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
