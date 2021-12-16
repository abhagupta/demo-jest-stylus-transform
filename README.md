# Sample React App to demo jest stylus transformation

The project is a sample app to demonstrate the transformation of [stylus](https://stylus-lang.com/) when running jest test cases for visual testing.

Jest has transformers for css transformations, but in order to transform .styl files, you will need a [stylus transformer](https://www.npmjs.com/package/jest-transform-styl)

## How to run this project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`npm install`

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

 `npm test`

This command will launch 2 tests:
- App.test.js
- App.visual.test.js

### Usage
In your jest config in package.json, add following:git remote add origin https://github.com/abhagupta/demo-jest-stylus-transform.git
```
"jest": {
    "moduleNameMapper": {
      "\\.(css|less)$": "identity-obj-proxy",
      "\\.(styl)$": "jest-transform-styl"
    }
  }
```

This will tell jest to transform the .styl files using the module `jest-transform-styl`.  The utility of this can be extended to capture the screenshots and do pixel matching between before and after appearances of the app. The idea is to render the tranformed DOM produced by jest test in a visual tool, like chrome, capture the screenshot and use for comparison with next PR run. This is still WIP and ideas are welcome!

