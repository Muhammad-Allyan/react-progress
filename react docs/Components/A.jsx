// Component A (Parent)
import React, { useState } from 'react';
import B from './B';
import C from './C';

export default function A() {
  const [dataFromB, setDataFromB] = useState('');
  const [dataFromC, setDataFromC] = useState('');

  return (
    <div>
      <B sendDataToA={setDataFromB} />
      <C dataFromB={dataFromB} sendDataToA={setDataFromC} />
      <p>Parent A sees B's data: {dataFromB}</p>
      <p>Parent A sees C's data: {dataFromC}</p>
    </div>
  );
}
