What is JSX ?
JSX is a JavaScript syntax which is easier to create react elements.

How do we use to build our normal web apps before react and any frameworks that came out in the market?

So at that time we just have our basic Html/Markup, JavaScript/Logic. So we use to write our markup the skeleton and then we use to write our logics what will happen on click. So these frameworks these libraries the react tries to merge things up like HTML and JavaScript.
So we can do things in one file. 

So JSX is a convention where we merge Html and JavaScript together.

MYTH => Most of the developers think that JSX is html inside JavaScript but actually this is not. The syntax below is JSX syntax not html inside JavaScript. So what was that than? JSX is a HTML or XML like syntax. So it is not HTML or XML inside JavaScript. JSX is JSX it is  a different syntax.
const jsxHeading = <h1>This is JSX syntax</h1>;

Fundamental difference in JSX
command 1 =>
const heading = React.creatElement("h1", {}, "This is my heading");

command 2 =>
const jsxHeading = <h1>This is JSX syntax</h1>;

Basically command 1 is equivalent to command 2

So this piece of code is JSX in the command 1 => <h1>This is JSX syntax</h1> what will happen when this piece of code is executed it will create the react element. command 1 => <h1>This is JSX syntax</h1> This is also a react element this jsxheading is a react element.

command 1 => This is how we can create a react element by using core react.
const heading = React.creatElement("h1", {}, "This is my heading");

command 2 => This is how we can create a react element by using JSX
const jsxHeading = <h1>This is JSX syntax</h1>;



JS engine understands Ecma Script!
Js engine understand all versions of ecma script js engine understands javascript so how jsx is working behind the scenes how the code is working. You know who is the beast you remember yes parcel. Parcel is doing this.

So JSX code transpiled before it goes to the js engine. 
Parcel it self not doing the transpilation or converting the code for browser to understand. It uses a package called babel. And babel is transpiling the code for react and browser to understand. Babel also done a lot of things.

If we have to create attribute in jsx it must be in camelCase.

When older browsers do not understand your es6 code then babel transform you code so the older browsers can understand.

Babel is a champ in converting one code to another.

JSX single line and multiple line wrapping inside the () round brackets
For multiple line of code we wrap our code inside the () round brackets why because babel needs to understand that from where jsx is starting and ending.
