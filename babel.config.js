module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false,
                targets: {
                    chrome: 80,
                    ios: 12,
                    android: 7,
                },
                useBuiltIns: "usage",
                corejs: 3,
            },
        ],
        "@babel/preset-typescript",
        "@babel/preset-react",
    ],
};
