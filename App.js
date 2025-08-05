import React from "react";
import ReactDOM from "react-dom/client";
import A from "./react docs/Components/A";
import ParentComponent from "./react docs/Components/ParentComponent";

// Hello World From Core JS
const jsHeading = document.createElement("h1");
jsHeading.innerHTML = "Hello World from Javascript!";
const root1 = document.getElementById("rootforjs");
root1.appendChild(jsHeading);

//Hello World From Core React
const rHeading = React.createElement("h1", {}, "Hello World From React!");
const root2 = ReactDOM.createRoot(document.getElementById("rootforreact"));
root2.render(rHeading);

// JSX => Babel transpiles it to React.createElement give us a react element => And this
// ReactElement at the end is JS Object => And when this react element or a js object is rendered
// root.render(heading) it will create the HTMLElement on the DOM.
// Hello World From JSX

const jsxHeading = (<h1 className="jsx">Hello World Frm JSX!</h1>);
const root3 = ReactDOM.createRoot(document.getElementById("rootforjsx"));
root3.render(jsxHeading);


const root4 = ReactDOM.createRoot(document.getElementById("parentA"));
root4.render(<A />)

const root5 = ReactDOM.createRoot(document.getElementById("ParentComponent"));
root5.render(<ParentComponent />)

