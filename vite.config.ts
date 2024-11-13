import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";


export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "extension",
    rollupOptions: {
      output: {
        entryFileNames: "extension.js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? "";
          if (name.endsWith(".png")) {
            return "logo.png";
          } else if (name.endsWith(".css")) {
            return "index.css";
          }
          return "[name].[ext]";
        },
      },
    },
  },
});
