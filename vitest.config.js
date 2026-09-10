import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        // Simule un navigateur pour les composants React
        environment: "jsdom",

        // Charge les extensions de Testing Library avant les tests
        setupFiles: "./src/setupTests.js",
    },
});