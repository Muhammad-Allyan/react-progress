import React, {memo}  from 'react';

const OutputComponent = ({ input }) => {
    console.log('output comp');
  return (
    <div>
      <h2>Output:</h2>
      <p>{input}</p>
    </div>
  );
};

export default memo(OutputComponent);
