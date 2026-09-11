import { resolve } from "path";
import { defineConfig } from "vite";

const root = import.meta.dirname;

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        villas: resolve(root, "villas.html"),
        gallery: resolve(root, "gallery.html"),
        book: resolve(root, "book.html"),
        contact: resolve(root, "contact.html"),
      },
    },
  },
});
