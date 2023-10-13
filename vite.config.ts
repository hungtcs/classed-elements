import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import dts from "vite-plugin-dts";
import solid from "vite-plugin-solid";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
    },
  },
  plugins: [dts({ tsconfigPath: "tsconfig.lib.json" }), solid(), checker({ typescript: true })],
  server: {
    port: 1024,
  },
});
