# Learning React 🚀

### (A) Setup the nodejs and npm in our project. 👇

1- package.json is the configuration for our npm.

2- Most important package is the bundler we are using in our project.

3- With help of bundler we will minify, compressed, optimised, cahched, package our app. For making our app ready to deploy to the production.

4- When we do create react app then behind the scenes this create app uses webpack & Babel as a bundler.

5- So in our app we are using parcel as a bundler. Webpack, Parcel, Vite these are the bundlers.

6- So parcel basically comes as a node package so we are going to install that packge.

7- When we will install any package/dependencies in our app we have the same command for all.

8- Command => npm install parcel but we will give the parameter a flag which is => npm install -D parcel.

9- What is -D above in the command?

10- The -D is represents the dependency. There are two types of dependencies.

10(a)- The developer dependency/packages => It is generally required for in a development face. When we are developing our app so the we required the dev dependency/package.

10(b)- The normal dependency/packages => The normal dependency/package are used in production also.

So we are telling npm the package manager that we are installing the package as a dev dependency.

So after writing this command => npm install -D parcel. Then it will install the parcel and fetch the package the parcel from the npm package manager repository.

So after the installaion is complete then we got the package-lock.json and node-modules in our project and what is these two files? Also parcel has been added in our package.json file as a dev dependeny.

11- "parcel": "^2.15.4" => The caret sign ?

12- "parcel": "~2.15.4" => The tilde sign ?

13- package-lock.json =>

14- "integrity": "sha512 ?

15- node-modules =>

16- Reinstalling the node-modules command => npm install

17- gitignore file ?

17(a)- node-modules file

17(b)- dist file

17(c)- parcel-cache file

18- Important files to push ?

### (B) IGNITING OUR APP / BUILDING OUR APP 👇

#### We will use parcel to ignite/build our app and how? See the command below 🚀

1- The command => npx parcel index.html

2- npx parcel ?

3- npx parcel build index.html ? 

4- "main": App.js => Entry point of our app ?

4- npm install react =>

5- npm install react-dom =>

6- npm i = npm install

### (C) What Parcel is doing for us ? 👇

- Dev Build
- Local Server
- HMR => Hot Module Replacment
- File Watching Algorithm => written in C++
- Caching => Faster Builds
- Image Optimisation
- Minification
- Bundling => The core job of parcel beacuse it is a bundler
- Compressing
- Content Hashing
- Code Splitting
- Differential Bundling => Your app can be opened inside internet explorer or older versions. So parcel take cares of all that to support older browsers
- Diagnostics
- Error Handling
- HTTPs Features
- Tree Shaking => remove unused code
- Different dev & production bundle

### (D) Making our app compatible for older versions ? 👇

#### browserslist 📂

1- What is browserslist?

- [Check Browsers Versions](https://browserslist.dev/)
- [Npm JS Browsers List ](https://www.npmjs.com/package/browserslist)

##### The command below is for last 2 version of all browsers.

"browserslist": [
"last 2 versions"
]
