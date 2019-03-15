module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    development: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              test: './test',
            },
          },
        ],
      ],
    },
    production: {
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              test: './test',
            },
          },
        ],
      ],
    },
  },
}
