import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import rollupNodePolyfill from "rollup-plugin-node-polyfills";
import inject from "@rollup/plugin-inject";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            util: "rollup-plugin-node-polyfills/polyfills/util",
            events: "rollup-plugin-node-polyfills/polyfills/events",
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [NodeModulesPolyfillPlugin()],
        },
    },
    build: {
        rollupOptions: {
            plugins: [
                inject({ Buffer: ["buffer", "Buffer"] }),
                rollupNodePolyfill(),
            ],
        },
    },
});
