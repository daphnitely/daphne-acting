module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addPassthroughCopy({
    "node_modules/normalize.css/normalize.css": "assets/css/normalize.css",
  });
};
