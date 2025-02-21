import { defineConfig, configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { config } from "dotenv";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    exclude: [...configDefaults.exclude, "*/e2e/*"],
    environment: "jsdom",
    env: {
<<<<<<< HEAD
      ...config({ path: ".env.local" }).parsed,
=======
      DISABLE_LEAD_COLLECTION: "false",
      ...config({ path: ".env" }).parsed,
>>>>>>> 76b3c48 (New bets)
    },
  },
});
