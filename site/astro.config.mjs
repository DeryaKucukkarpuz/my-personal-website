// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://deryakucukkarpuz.github.io',
	base: process.env.NODE_ENV === 'development' ? '/' : '/my-personal-website',
});
