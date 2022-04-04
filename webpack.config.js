const webpack = require('webpack');
const path = require('path');
//const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackPwaManifest = require("webpack-pwa-manifest");

const config = {
    entry: './assets/js/index.js', 
    output: {
      filename: '[name].bundle.js',
      path: `${__dirname}/dist`
    },
    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  esModule: false,
                  name(file) {
                    return '[path][name].[ext]';
                  },
                  publicPath(url) {
                    return url.replace('../', '/assets/');
                  }
                }
              },
              {
                loader: 'image-webpack-loader'
              }
            ]
          }
        ]
      },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
          }), 
          new WebpackPwaManifest({
            name: "My Account Management",
            short_name: "myaccount-management",
            description: "An app that allows you to view budget.", 
            start_url: "public/index.html",
            background_color: "#dddddd", 
            theme_color: "#ffffff", 
            fingerprints: false,
            inject: false,
            crossorigin: 'use-credentials',
            icons: [{
            src: path.resolve("assets/icons/icon-512x512.png"), sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons")
            }] 
        })
    ],
    mode: 'development'
   
};
module.exports = config;
