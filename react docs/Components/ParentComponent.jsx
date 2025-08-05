import React, { useState } from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';
let count = 1;

const ParentComponent = () => {
    count ++
    console.log("count", count);
  // State to store the input value
  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);

  // Handler to update inputValue
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>React Input-Output Example</h1>
      {/* Passing handleInputChange as prop to InputComponent */}
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <InputComponent onInputChange={handleInputChange} />
      {/* Passing inputValue as prop to OutputComponent */}
      <OutputComponent input={inputValue} />
    </div>
  );
};

export default ParentComponent;
