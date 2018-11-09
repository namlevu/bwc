
npm i webpack -S
npm i webpack-cli --save-dev
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

Don’t forget to configure Babel! Create a new file named .babelrc inside the project folder
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
