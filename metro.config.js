const { getDefaultConfig } = require("metro-config");
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

//Workaround for Apollo Client
//https://github.com/apollographql/apollo-client/blob/v3.5.5/CHANGELOG.md#apollo-client-354-2021-11-19
exports.resolver = {
  ...defaultResolver,
  sourceExts: [
    ...defaultResolver.sourceExts,
    "cjs",
  ],
};