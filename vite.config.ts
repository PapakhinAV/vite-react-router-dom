import {defineConfig, normalizePath} from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import {resolve} from "node:path";
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'
//@ts-ignore
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssr(), tsconfigPaths(),
    checker({
      enableBuild: false,
      typescript: true,
      eslint: {
        // к сожалению, здесь нельзя просто написать `yarn lint`, надо именно в cli-формате eslint-а.
        // поэтому import'им `package.json` и подставляем скрипт оттуда, чтобы был один источник истины
        lintCommand: packageJson.scripts['lint:ts'],
        dev: {
          logLevel: ['error'],
        },
      },
      stylelint: {
        lintCommand: packageJson.scripts['lint:styles'],
        dev: {
          logLevel: ['error'],
          overrideConfig: {
            ignorePath: '.stylelintignore',
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': normalizePath(resolve(__dirname, './src')),
      '@sandbox': normalizePath(resolve(__dirname, './src/mock/@sandbox')),
    },
  },
  optimizeDeps: {
    // это норма
    // https://github.com/storybookjs/storybook/blob/e23041c/code/lib/builder-vite/src/optimizeDeps.ts
    include: [
      'prop-types',
      'exenv',
      'react-is',
      'shallowequal',
      'hoist-non-react-statics',
      'react-input-mask',
      'lodash/debounce',
      'lodash/omit',
    ],
  },
})
