import React from "react";
import ReactDOM from "react-dom/client";

const heading = document.createElement("h1");
heading.innerHTML = "Hello World from Javascript!";
const root1 = document.getElementById("root");
root1.appendChild(heading); 

//React
const heading2 = React.createElement(
  "h1",
  { id: "heading2" },
  "Hello World from React!"
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading2);
console.log(heading2);

//
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "childHeading1" },
      "I am the child heading 1!"
    ),
    React.createElement(
      "h1",
      { id: "childHeading2" },
      "I am the child heading 2!"
    ),
  ])
);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent);
console.log(parent);