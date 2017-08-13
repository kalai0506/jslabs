# Initiate npm
npm init -y
# react dependencies
npm i react react-dom react-router --save
# Webpack and Bable dev dependencies
npm i webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

touch .babelrc webpack.config.js

mkdir app

cd app
touch index.html app.js main.js
