/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["shared-ui-components"]);

module.exports = withPlugins([withTM()], {
  //nextConfig
  reactStrictMode: true,
});
