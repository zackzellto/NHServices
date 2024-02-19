import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxying API requests to the Express server running on port 5000
      "/api": {
        target: "http://localhost:5000", // Target backend server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // If you are using https, set to true
        ws: true, // Proxy websockets if needed
      },
    },
  },
});
