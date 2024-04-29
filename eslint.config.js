
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
module.exports = {
  ...js.configs.recommended,
  extends: ["plugin:vue/recommended"],
  rules: { "no-console": "off" },
  plugins: {
    vue: pluginVue
  },
}