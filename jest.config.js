module.exports = {
  // Jest configuration provided by Grafana scaffolding
  ...require('./.config/jest.config'),
  testTimeout: 300000,
  "transformIgnorePatterns": [
    "node_modules/(?!monaco-promql/)"
  ]
};
