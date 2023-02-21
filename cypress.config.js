const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.saucedemo.com/",
    "pageLoadTimeout": 150000,
    "defaultCommandTimeout": 20000,
    "video": false,
    "chromeWebSecurity": false,
    "includeShadowDom": true,
    "experimentalStudio": true
  },
});
