"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
// https://vitejs.dev/config/
exports.default = (0, vite_1.defineConfig)({
  plugins: [(0, plugin_react_1.default)()],
  server: {
    proxy: {
      // Proxying API requests to the Express server
      "/api": {
        target: "http://localhost:5000", // Target backend server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false, // If you are using https, set to true
        ws: true, // Proxy websockets if needed
      },
    },
  },
});
