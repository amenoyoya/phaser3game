const phaser = `${__dirname}/node_modules/phaser/dist/phaser.js`;

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/app.ts`,
  output: {
    path: `${__dirname}/public/js/`,
    filename: 'app.js',
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      {
        test: /phaser\.js$/,
        loader: 'expose-loader',
        options: {
          exposes: { globalName: 'Phaser', override: true },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser: phaser,
    },
  },
};