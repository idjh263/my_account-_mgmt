const webpack = require('webpack');const path = require('path');
//const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackPwaManifest = require("webpack-pwa-manifest");

const config = {
    entry: './public/js/index.js', 
    output: {
        path: path.resolve(__dirname, 'public/js'), 
        filename: 'main.bundle.js'
    }, 
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
          }), 
          new WebpackPwaManifest({
            name: "My Account Management",
            short_name: "Budget",
            description: "An app that allows you to view budget.", 
            start_url: "../public/index.html",
            background_color: "#dddddd", 
            theme_color: "#ffffff", 
            fingerprints: false,
            inject: false,
            icons: [{
            src: path.resolve("public/icons/icon-512x512.png"), sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("public", "icons")
            }] 
        })
    ],
    mode: 'development'
   
};
module.exports = config;
