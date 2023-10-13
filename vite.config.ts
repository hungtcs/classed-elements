import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import checker from "vite-plugin-checker";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      name: "Classed",
      entry: "./lib/index.ts",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
    },
  },
  plugins: [
    dts({ tsconfigPath: "tsconfig.lib.json" }),
    solid(),
    checker({ typescript: true }),
  ],
  server: {
    port: 1024,
  },
});
