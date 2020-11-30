const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const tsRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "babel-loader",
        },
    ],
};

module.exports = (_, args) => {
    const isProd = args.mode === "production";
    return {
        mode: isProd ? "production" : "development",
        entry: {
            main: path.resolve(__dirname, "src/main.tsx"),
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name].js",
        },
        devtool: "source-map",
        module: {
            rules: [
                tsRule,
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".mjs", ".jsx", ".js", ".json"],
            plugins: [
                new TsconfigPathsPlugin(),
            ],
        },
        optimization: {
            minimize: isProd,
            minimizer: [
                new TerserPlugin(),
            ],
        },
        devServer: {
            contentBase: path.resolve(__dirname, "public"),
            port: 3000,
        },
    };
};
