import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
    return {
        plugins: [react(), viteSingleFile()],
    };
});
