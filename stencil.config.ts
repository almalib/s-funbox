import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 's-funbox',
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]
  },
  globalStyle: 'src/global/global.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
