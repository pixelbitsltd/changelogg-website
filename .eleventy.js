const { EleventyI18nPlugin, EleventyHtmlBasePlugin, EleventyRenderPlugin } = require('@11ty/eleventy');
const rollupPlugin = require('eleventy-plugin-rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy({ "src/assets/img/*": "img" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/preline/dist/preline.js": "js/preline.js"
  });
  eleventyConfig.addWatchTarget('src/assets/js/');

  eleventyConfig.addPlugin(rollupPlugin, {
    rollupOptions: {
      output: {
        format: 'es',
        dir: 'dist/js',
      },
      plugins: [nodeResolve()]
    },
    useAbsoluteScriptPaths: true,
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://changelo.gg",
    },
  });

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',

    pathPrefix: '/',

    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
}