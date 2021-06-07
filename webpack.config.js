const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

const themePath = path.join(__dirname, "./");

const config = {
  entry: {
    // define main entry point — this handles the main JS, CSS, and SVG sprites loading:
    main: themePath + "js/app.js",
    style: themePath + "scss/_style.scss",
    // define print styles entry point:
    print: themePath + "scss/_print.scss",
  },
  output: {
    filename: "[name].js",
    path: themePath + "/dist/",
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  // uncomment the following to enable robust polyfill support for legacy browsers (see package.json for full browserslist)
                  // use as a last resort — this will seriously bloat your JS!
                  // you should be adding individual polyfills within your scripts on an as-needed basis only
                  // {
                  //   debug: true,
                  //   // useBuiltIns: "usage",
                  //   // corejs: 3,
                  // },
                ],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // there is limited support for IE grid compatibility, full details here: https://github.com/postcss/autoprefixer#grid-autoplacement-support-in-ie
                      grid: "autoplace",
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
      },
      {
        // handle raster images without srcset and non-inline SVGs
        test: /\.(png|jpe?g|(?<!inline\.)svg)$/,
        exclude: themePath + "images/sprites/", // exclude SVG sprite source files
        use: [
          {
            loader: "url-loader",
            // this loader falls back to (and accepts options for) file-loader
            options: {
              limit: 4 * 1024, // 4kB limit
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
          {
            loader: "img-loader",
            options: {
              enabled: false, // optimize only in production/stage mode (it's slow)
              svgo: {
                plugins: [
                  {
                    removeViewBox: false,
                    cleanupIDs: true,
                  },
                ],
              },
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts",
          },
        },
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            interpolate: true,
            minimize: false,
            attrs: ["img:src", "link:href", "image:xlink:href"],
          },
        },
      },
      {
        // load all SVGs and compile as a sprite
        test: /\.svg$/,
        include: themePath + "images/sprites/",
        use: {
          loader: "svg-sprite-loader",
          options: {
            extract: true,
            spriteFilename: "sprites.svg",
          },
        },
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        class: "svg_sprite",
      },
    }),
    new BrowserSyncPlugin(
      {
        host: "localhost/NOR-WRS",
        // host: path.join("localhost", __dirname),
        port: 1212,
        proxy: "localhost/NOR-WRS",
        // proxy: path.join("localhost", __dirname),
        files: [
          {
            match: ["**/*.php", "**/*.twig", "**/*.css"],
          },
        ],
        injectChanges: true,
        reloadDebounce: 300,
      },
      {
        reload: false,
        injectCss: true,
      }
    ),
  ],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};

module.exports = config;
