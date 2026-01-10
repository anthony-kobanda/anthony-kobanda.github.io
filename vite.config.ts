import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a *user/organization* site (repo named <username>.github.io), base should be '/'.
// For a *project* site (repo named <repo>), base must be '/<repo>/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
