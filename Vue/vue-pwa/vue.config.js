/* eslint-disable indent */
const CompressionPlugin = require('compression-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/css/style.scss";'
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { publicPath: '/' }));
    },
    configureWebpack: config => {
        return process.env.NODE_ENV === 'production'
            ? {
                  plugins: [
                      new CompressionPlugin({
                          filename: '[path].gz[query]',
                          algorithm: 'gzip',
                          test: /\.js$|\.css$|\.html$/,
                          threshold: 10240,
                          minRatio: 0.8
                      }),
                      new CompressionPlugin({
                          filename: '[path].br[query]',
                          algorithm: 'brotliCompress',
                          test: /\.(js|css|html|svg)$/,
                          compressionOptions: { level: 11 },
                          threshold: 10240,
                          minRatio: 0.8
                      }),
                      new ImageminPlugin({
                          pngquant: {
                              quality: '95-100'
                          }
                      })
                  ]
              }
            : {
                  plugins: []
              };
    },
    pwa: {
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'img/icons/safari-pinned-tab.png',
            msTileImage: 'img/icons/msapplication-icon-144x144.png'
        }
    }
};
