// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  // CommonJS (for Node)
  {
    input: "src/monscii.js",
    output: {
      file: "dist/monscii.cjs.js",
      format: "cjs",
      exports: "default",
    },
    plugins: [resolve(), commonjs()],
  },
  // ES Module (for bundlers)
  {
    input: "src/monscii.js",
    output: {
      file: "dist/monscii.esm.js",
      format: "esm",
    },
    plugins: [resolve(), commonjs()],
  },
  // UMD (for browsers)
  {
    input: "src/monscii.js",
    output: {
      file: "dist/monscii.umd.js",
      format: "umd",
      name: "Monscii",
      globals: {},
    },
    plugins: [resolve(), commonjs()],
  },
];
