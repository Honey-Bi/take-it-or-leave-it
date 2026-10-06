import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: { outDir: "build" },
  server: { host: "127.0.0.1", port: 3001 },
  resolve: { alias: {
      "pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "components": fileURLToPath(new URL("./src/components", import.meta.url))
  } },
  test: { globals: true, environment: "jsdom" },
});
