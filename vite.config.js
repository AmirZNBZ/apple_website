import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/iPhone_15_website",
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-n6j",
      project: "javascript-react",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
