// Component C
export default function C({ dataFromB, sendDataToA }) {
  const handleClick = () => {
    sendDataToA("C's message");
  };

  return (
    <div>
      <p>Data from B: {dataFromB}</p>
      <button onClick={handleClick}>Send C's data to A</button>
    </div>
  );
}
