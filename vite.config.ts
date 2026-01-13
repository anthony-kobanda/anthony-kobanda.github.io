import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // no `base` needed for a user/organization site; Vite’s docs say you
  // can omit it when deploying to `https://<username>.github.io/` :contentReference[oaicite:0]{index=0}.
});
