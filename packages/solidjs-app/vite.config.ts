import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid(), checker({ typescript: true })],
  server: {
    port: 1024,
  },
});
