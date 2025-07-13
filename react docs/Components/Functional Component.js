import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
// Functional Components => New Ways
// Function Components uses javascript functions
// React Functional Comopnent is just a normal javascript function which return some piece of jsx
// or jsx elements

// Two ways to write functions see below the both are same.
const HeadingComponent1 = () => {
  return <h1 className="Component 1">This is a functional comopnent 1!</h1>;
};

const HeadingComponent2 = () => <h1 className="Component 2">This is a functional comopnent 2!</h1>;

const HeadingComponent3 = () => (
  <h1 className="Component 3">This is a functional component 3 with multiple line of code!</h1>
);

console.log(HeadingComponent1());
console.log(HeadingComponent2());
console.log(HeadingComponent3());

// How to render the function
// Component Composition
// Javascript inside JSX

const number = 25000;
const reactElement = (<h1>My react element inside the component!</h1>);

const HeadingComponent4 = () => (
    <div className="conatiner">
        <h1 className="Render-Heading">This is a rendered functional component!</h1>
        {reactElement}
        <h2>{`JS inside component ` + (100 + 200 + number)}</h2>
        <HeadingComponent5 />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("FunctionalComponent"));
root.render(<HeadingComponent4 />);

// To render the component we must have to give the component inside the angular bracket </>. This
// is the syntax babel knows. So when babel check that the somthing is written inside this bracket
// so it understands that their is a component over here. 


//Another Component
const HeadingComponent5 = () => (
    <h1>Component inside the component!</h1>
);

//Element inside elemnt

const childElement = <span>A child element inside parent element! <br /><br /></span>;
const CompoInElem = () => (
    <span>Component inside an element!</span>
);

const parentElement = (
    <div>
    <h1>Parent Element!</h1>
    {childElement}
    <CompoInElem />
    </div>
);

const rootElem = ReactDOM.createRoot(document.getElementById("Element-inside-element"));
rootElem.render(parentElement);

//Cross side scripting
//JSX takes care of the injection attacks
// JSX sanitizing the data
// Whatever the data is inside the {} the JSX won't blindly run it. JSX will sanitize our data 
// and then pass it. It prevents cross side scripting attacks for you.
// <Title/> => <Title></Title> => {Title()} => these all are the same thing for calling the 
// functional component because at the end it's normal js function and everthing in react at
// the end is js.