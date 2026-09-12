import { resolve } from "path";
import { defineConfig } from "vite";

const root = import.meta.dirname;

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        gallery: resolve(root, "gallery.html"),
        faq: resolve(root, "faq.html"),
        contact: resolve(root, "contact.html"),
        wedding: resolve(root, "wedding-planning.html"),
        reservation: resolve(root, "reservation.html"),
      },
    },
  },
});
