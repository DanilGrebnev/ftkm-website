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
                    '@lib': 'app/lib',
                    '@components': 'app/components',
                    '@types': 'app/types',
                    '@images': 'app/assets/images',
                    '@hooks': 'app/hooks',
                    '@videos': 'app/assets/videos',
                    '@UI': 'app/UI',
                    '@Ordinary': 'app/Ordinary',
                    '@redux': 'app/redux',
                    '@interfaces': 'app/interface',
                    '@HOC': 'app/HOC',
                    '@fonts': 'fonts',
                    '@globalVariables': 'globalVariables.ts',
                    '@API_RESPONSES': 'app/API_RESPONSES.ts',
                },
            },
        },
    ],
}
