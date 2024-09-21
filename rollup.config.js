import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/monscii.js",
    output: {
      file: "dist/monscii.cjs.js",
      format: "cjs",
      exports: "default",
    },
    plugins: [resolve(), commonjs()],
  },
  {
    input: "src/monscii.js",
    output: {
      file: "dist/monscii.esm.js",
      format: "esm",
    },
    plugins: [resolve(), commonjs()],
  },
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
