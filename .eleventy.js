const { EleventyI18nPlugin, EleventyHtmlBasePlugin, EleventyRenderPlugin } = require('@11ty/eleventy');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ "src/assets/js/*": "js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/*": "img" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/preline/dist/preline.js": "js/preline.js"
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