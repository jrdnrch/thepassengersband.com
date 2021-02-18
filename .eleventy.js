const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");



  };