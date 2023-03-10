
# vite
```ts
import { resolve } from 'path';
import { defineConfig, loadEnv  } from "vite";
import vue from "@vitejs/plugin-vue";
// import viteCompression from 'vite-plugin-compression';
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { VitePWA } from 'vite-plugin-pwa'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; // svg icon
import path from 'path';
import legacy from '@vitejs/plugin-legacy' // 兼容的版本
import  { createStyleImportPlugin, VantResolve } from "vite-plugin-style-import"
// https://vitejs.dev/config/

export default ({mode}) => {
  // console.log('process.env', loadEnv(mode, process.cwd()))
  const env = loadEnv(mode, process.cwd()) // 加载环境变量
  return defineConfig({
    plugins: [
      vueJsx(),
      VitePWA(),
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // svgoOptions: true,
        // default
        symbolId: 'icon-[dir]-[name]',
      }),
      legacy({
        targets: ['Chrome 64'], // 兼容的版本
        modernPolyfills: true
      }),
    ],
    build: {
      reportCompressedSize: true,
      target: ['ios11'] // 兼容的版本
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
        {
          find: 'assets',
          replacement: resolve(__dirname, './src/assets'),
        },
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js', // compile template
        },
      ],
      extensions: ['.ts', '.js'],
    },
    // css: {
    //   postcss: {
        
    //   }
    // },
    server: {
      host:"0.0.0.0",
      proxy: {
        // '/': env.VITE_BASE_URL, // 配置需要前缀 VITE_
      },
    },
  });
}

```
## 用 Vite 将 JS 和 CSS 打包成一个文件

- 我们可以使用 vite-plugin-css-injected-by-js 将 css 注入(inject)到 js Assets 中。 .
- 我们可以通过在 rollup 的配置中禁用 block 来发出单个 js Assets 。

```js
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
```

## Vite 打包 vue 的时候，如何把所有css打包到一个文件中

1. https://cn.vitejs.dev/config/build-options.html#build-csscodesplit
![avatar](/images/img/Tlink_2023-03-10_14-49-26.png)
