import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import firebase from 'astro-firebase';

// https://astro.build/config
export default defineConfig({
  adapter: firebase(),
  integrations: [preact()]
});
