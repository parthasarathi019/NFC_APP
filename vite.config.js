import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  server: {
    proxy: {
      "/ui": "http://localhost:5000",
    },
  },
  plugins: [react()],
});
