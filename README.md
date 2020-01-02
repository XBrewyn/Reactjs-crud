# Reactjs-crud

> A curd app with react

 ![npm package version](https://img.shields.io/badge/npm%20package->=10.16.3-green)
## Tecnologies

- [Nodejs](https://github.com/nvm-sh/nvm)
- [Reactjs](https://reactjs.org/) 
- [Jest](https://jestjs.io/docs/en/using-matchers)
- [Express](https://expressjs.com/en/guide/routing.html)
- [Emotion](https://emotion.sh/docs/introduction)
- [React-loadable](https://github.com/jamiebuilds/react-loadable)
- [Webpack](https://webpack.js.org/)
- [Redux](https://redux.js.org/)

## Installation

- Clone the repository and enter to the directory

   `https://github.com/XBrewyn/Reactjs-crud.git`
   
   `cd Reactjs-crud` 
   
- Install dependencies

   `npm i`
   
 - Start the project

   Run the server: `npm run backend-dev`
 
   Run the fontend: `npm run frontend-dev`

   Run the test: `npm t`
     
## Folder Structure

  ```bash
   Reactjs-crud
   ├── backend
   │   ├── controllers
   │   │   └── crud
   │   │       ├── add.js
   │   │       ├── all.js
   │   │       ├── delete.js
   │   │       ├── select.js
   │   │       └── update.js
   │   │
   │   ├── models
   │   │   └── data.json
   │   │
   │   ├── router
   │   │   └── api.js
   │   │
   │   ├── utils
   │   │   ├── helperFunction.js
   │   │   └── helperFunction.test.js
   │   │
   │   └── server.js
   │
   │
   ├── frontend    
   │   ├── components
   │   │   ├── add
   │   │   │   ├── _test_
   │   │   │   │   └── add.jsx
   │   │   │   
   │   │   │   ├── add.jsx
   │   │   │   ├── css.jsx
   │   │   │   └── data.jsx
   │   │   │
   │   │   ├── all
   │   │   │   ├── _test_
   │   │   │   │   └── all.jsx
   │   │   │   │
   │   │   │   ├── all.jsx
   │   │   │   └── css.jsx
   │   │   │ 
   │   │   │   
   │   │   ├── delete
   │   │   │   ├── _test_
   │   │   │   │   └── delete.jsx
   │   │   │   │   
   │   │   │   ├── css.jsx
   │   │   │   ├── data.jsx
   │   │   │   └── delete.jsx
   │   │   │  
   │   │   ├── error404
   │   │   │   ├── _test_
   │   │   │   │   └── error404.jsx
   │   │   │   │  
   │   │   │   ├── css.jsx
   │   │   │   └── error404.jsx
   │   │   │   
   │   │   ├── navigation
   │   │   │   ├── _test_
   │   │   │   │   └── navigation.jsx
   │   │   │   │  
   │   │   │   ├── css.jsx
   │   │   │   └── navigation.jsx
   │   │   │   
   │   │   └── update
   │   │       ├── _test_
   │   │       │   └── update.jsx
   │   │       │  
   │   │       ├── css.jsx
   │   │       ├── data.jsx
   │   │       └── update.jsx
   │   │
   │   ├── redux
   │   ├── utils
   │   ├── app.jsx
   │   ├── index.html
   │   └── index.jsx
   │
   ├── .babelrc.js
   ├── .env
   ├── .eslintrc.js
   ├── .gitignore 
   ├── package-lock.json    
   ├── package.json
   ├── README.md
   ├── webpack.config.js
   └── webpack.config.production.js
   ```
