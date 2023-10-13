import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import dts from "vite-plugin-dts";
import solid from "vite-plugin-solid";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "@classed-elements/utils"],
    },
  },
  plugins: [dts(), solid(), checker({ typescript: true })],
});
