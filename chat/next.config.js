/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    distDir: 'build',
    swcMinify: true,
    webpack: (config, option) => {
        config.plugins.push(
            new option.webpack.container.ModuleFederationPlugin({
                name: 'chat',
                filename: 'chatEntry.js',
                remoteType: 'var',
                shared: [
                    {
                        react: {
                            eager: true,
                            singleton: true,
                            requiredVersion: false,
                        },
                    },
                    {
                        'react-dom': {
                            eager: true,
                            singleton: true,
                            requiredVersion: false,
                        },
                    },
                ],
            })
        );

        return config;
    },
};

module.exports = nextConfig;
