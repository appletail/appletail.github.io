# 프로젝트 개요

심재원의 프론트엔드 포트폴리오 사이트입니다.
cra, vite와 같은 툴 없이 webpack과 babel을 직접 설정하여 react, typescript 개발환경을 구축했습니다.

백엔드 서버 없이 github page로 배포한 정적 웹페이지입니다.

# 01 개발 환경

- node v16.18.0, npm, webpack, babel, typescript, react, react-router-dom, eslint, prettier

```
$ npm init -y

$ npm i react react-dom
$ npm i -D webpack webpack-cli webpack-dev-server
$ npm i babel-loader css-loader style-loader mini-css-extract-plugin
$ npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
$ npm i --save-dev html-webpack-plugin
$ npm i --save-dev clean-webpack-plugin
$ npm install http-proxy-middleware --save

npm install --save-dev @types/react @types/react-dom
npm install --save-dev typescript ts-loader source-map-loader

npm i react-router-dom

npx eslint --init
npm i --save-dev eslint-config-airbnb eslint-config-airbnb-typescript
npm i eslint-config-prettier
npm i -D postcss postcss-loader postcss-preset-env
```

---

※ 공식문서 외 참고 사이트  
https://velog.io/@jungsangu/Webpack-Babel로-React-Typescript-개발환경-구축하기  
https://typescript-kr.github.io/pages/tutorials/react-&-webpack.html  
https://velog.io/@party3205/React-Cra-없이-리액트-직접-구현하며-웹팩-바벨-다루기  
https://velog.io/@han1368/ReactTypescriptEsLintairbnbPrettier-개발환경-설정-방법  
https://blog.shiren.dev/2020-12-01/  
