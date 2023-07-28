import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            util: "rollup-plugin-node-polyfills/polyfills/util",
        },
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [NodeModulesPolyfillPlugin()],
        },
    },
});
