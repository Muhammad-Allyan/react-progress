# Learning React 🚀

# (A) Setup the nodejs and npm in our project. 🚀

## 1- package.json is the configuration for our npm.

# 2- Most important package is the bundler we are using in our project.

# 3- With help of bundler we will minify, compressed, optimised, cahched, package our app. For making our app ready to deploy to the production.

# 4- When we do create react app then behind the scenes this create app uses webpack & Babel as a bundler.

# 5- So in our app we are using parcel as a bundler. Webpack, Parcel, Vite these are the bundlers.

# 6- So parcel basically comes as a node package so we are going to install that packge.

# 7- When we will install any package/dependencies in our app we have the same command for all.

# 8- Command => npm install parcel but we will give the parameter a flag which is => npm install -D parcel.

# 9- What is -D above in the command?

# The -D is represents the dependency. There are two types of dependencies.

# 1- The developer dependency/packages => It is generally required for in a development face. When we are developing our app so the we required the dev dependency/package.

# 2- The normal dependency/packages => The normal dependency/package are used in production also.

# So we are telling npm the package manager that we are installing the package as a dev dependency.

# So after writing this command => npm install -D parcel. Then it will install the parcel and fetch the package the parcel from the npm package manager repository.

# So after the installaion is complete then we got the package-lock.json and node-modules in our project and what is these two files? Also parcel has been added in our package.json file as a dev dependeny.

# "parcel": "^2.15.4" => The caret sign ?

# "parcel": "~2.15.4" => The tilde sign ?

# package-lock.json =>

# "integrity": "sha512 ?

# node-modules =>

# Reinstalling the node-modules command => npm install

# 9- gitignore file ?

# 10- Important files to push ?

# (B) IGNITING OUR APP / BUILDING OUR APP 🚀

# We will use parcel to ignite/build our app and how? See the command below 👇

# 1- The command => npx parcel index.html

# 2- npx parcel ?

# 3- npm install react =>

# 4- npm install react-dom =>

# 5- npm i = npm install

# 6-
