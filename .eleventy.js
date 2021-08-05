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

module.exports = function (config11ty) {

    // Alias
    config11ty.addLayoutAlias('homepage', 'template/index.njk');

    config11ty.addTransform('htmlmin', htmlMinTransform);

    // Passthrough
    config11ty.addPassthroughCopy('src/robots.txt');
    config11ty.addPassthroughCopy("src/images");
    config11ty.addPassthroughCopy("src/static");
    config11ty.addPassthroughCopy('src/admin/config.yml');
    config11ty.addPassthroughCopy('src/admin/previews.js');
    config11ty.addPassthroughCopy('node_modules/nunjucks/browser/nunjucks-slim.js');

    // Plugin
    config11ty.addPlugin(rssPlugin);
    config11ty.addPlugin(syntaxHighlight);

    // config11ty.setBrowserSyncConfig({
    //   callbacks: {
    //     ready: function (err, browserSync) {
    //       const content_404 = fs.readFileSync('dist/404.html');
    //       browserSync.addMiddleware("*", (req, res) => {
    //         res.write(content_404);
    //         res.end();
    //       });
    //     }
    //   }
    // });

    // FILTERS
    config11ty.addFilter('dateFilter', dateFilter);
    config11ty.addFilter('markdownFilter', markdownFilter);
    config11ty.addFilter('w3DateFilter', w3DateFilter);
    config11ty.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });
    config11ty.addFilter("jsmin", function (code) {
        let minified = Terser.minify(code);
        if (minified.error) {
            console.log("Terser error: ", minified.error);
            return code;
        }
        return minified.code;
    });

    // directories output 
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