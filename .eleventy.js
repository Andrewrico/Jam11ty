const site = require('./src/_data/site.json');
const fs = require("fs");
const Terser = require("terser");
const dateFilter = require('./src/filters/date-filter.js');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const CleanCSS = require("clean-css");
const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function (eleventyConfig) {

    // Plugins
    eleventyConfig.addPlugin(pluginPWA, {
        swDest: "./build/sw.js",
        globDirectory: "./build"
    });
    eleventyConfig.addPlugin(rssPlugin);
    eleventyConfig.addPlugin(syntaxHighlight);

    // Filters
    eleventyConfig.addFilter('dateFilter', dateFilter);
    eleventyConfig.addFilter('markdownFilter', markdownFilter);
    eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });
    eleventyConfig.addFilter("jsmin", function (code) {
        let minified = Terser.minify(code);
        if (minified.error) {
            console.log("Terser error: ", minified.error);
            return code;
        }
        return minified.code;
    });

    // Aliases
    eleventyConfig.addLayoutAlias('homepage', 'template/index.njk');
    eleventyConfig.addLayoutAlias('blog', 'template/blog.njk');

    // Helpers
    eleventyConfig.addTransform('htmlmin', htmlMinTransform);

    // Pass throughs
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/static");
    eleventyConfig.addPassthroughCopy('src/admin/config.yml');
    eleventyConfig.addPassthroughCopy('src/admin/previews.js');
    eleventyConfig.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

    // Post Collection
    const now = new Date();
    const livePosts = post => post.date <= now && !post.data.draft;
    eleventyConfig.addCollection('posts', collection => {
        return [
            ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
        ].reverse();
    });

    eleventyConfig.addCollection('postFeed', collection => {
        return [...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)]
            .reverse()
            .slice(0, site.maxPostsPerPage);
    });

    // Directories 
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data",
            includes: "_includes"
        },
        passthroughFileCopy: true,
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        templateFormats: [
            "html",
            "njk",
            "md"
        ]
    };
};