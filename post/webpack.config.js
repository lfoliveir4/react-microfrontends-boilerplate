const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:9003/",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    index: "index.html",
    port: 9003,
    historyApiFallback: true,
    hot: true,
    hotOnly: false,
    compress: true,
    open: true,
  },

  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
    ],
  },

  plugins: [
    new ReactRefreshPlugin(),
    new ModuleFederationPlugin({
      name: "post",
      library: { type: "var", name: "post" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: { "./Post": "./src/Post" },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
};
