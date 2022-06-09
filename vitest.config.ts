import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    outDir: "../dist",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["../.test/setup.ts"],
    include: ["**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
  },
});
