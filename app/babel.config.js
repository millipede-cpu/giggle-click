// module.exports = {
//   presets: [
//     "@babel/preset-env",
//     "@babel/preset-typescript",
//     "@babel/preset-react",
//   ],
//   moduleNameMapper: {
//     "\\.(css|less|scss)$": "identity-obj-proxy",
//     "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
//   },
// };
// babel.config.js

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],

    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};
