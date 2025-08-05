import React from 'react';

const InputComponent = ({ onInputChange }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter something" 
        onChange={onInputChange} 
      />
    </div>
  );
};

export default InputComponent;
