import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/heroes-spa-app/" : "/", // 👈 clave aquí
  plugins: [react()],
}));
