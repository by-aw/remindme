import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Remind Me",
        short_name: "Remind Me",
        description: "Never forget a thing",
        theme_color: "#832FB6",
        background_color: "#000000",
        orientation: "portrait",
        display: "standalone",
        icons: [
          {
            src: "192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots : [
          {
            src: "screenshot1.webp",
            sizes: "1280x720",
            type: "image/webp",
            form_factor: "wide",
            label: "Remind Me"
          },
          {
            src: "screenshot2.webp",
            sizes: "430x932",
            type: "image/webp",
            label: "Remind Me"
          }
        ]
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
