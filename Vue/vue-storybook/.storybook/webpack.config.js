const path = require('path');
const rootPath = path.resolve(__dirname, '../src');

module.exports = ({ config }) => {
    // Scss support
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    prependData: `
						@import "@/assets/css/element-cover.scss";
					`
                }
            }
        ]
    });
    // Typescript support
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-docgen-loader',
        enforce: 'post'
    });

    config.resolve.alias['@'] = rootPath;
    config.resolve.alias['~'] = rootPath;

    return config;
};
