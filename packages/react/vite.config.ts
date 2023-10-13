import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "@classed-elements/utils"],
    },
  },
  plugins: [dts(), react(), checker({ typescript: true })],
});
