import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    rolldownOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
});
