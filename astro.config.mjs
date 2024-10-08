import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx()],
	image: {
		service: squooshImageService(),
	},
	site: "https://juliandrv-blog.vercel.app",
	publicDir: "./public",
});
