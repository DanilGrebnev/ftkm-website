const cracoAlias = require('craco-alias')

module.exports = {
    plugins: [
        {
            plugin: cracoAlias,
            options: {
                source: 'options',
                baseUrl: './src',
                aliases: {
                    '@variables': 'styles/_variables.scss',
                    '@utils': 'app/utils',
                    '@components': 'app/components',
                    '@types': 'app/types',
                    '@images': 'app/assets/images',
                    '@hooks': 'app/hooks',
                    '@video': 'app/assets/videos',
                },
            },
        },
    ],
}
