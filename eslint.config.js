// eslint V9  默认配置文件为 eslint.config.js
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import { defineFlatConfig } from 'eslint-define-config'
import * as parserVue from 'vue-eslint-parser'
export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    plugins: {
      vue: pluginVue,
    },
  },
  {
    processor: pluginVue.processors['.vue'],
  },
  {
    rules: {
      // override/add rules settings here, such as:
      'no-unused-vars': 'error',
      'no-console': 'error',
    },
  },
]
