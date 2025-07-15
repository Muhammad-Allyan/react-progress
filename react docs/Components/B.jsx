// Component B
export default function B({ sendDataToA }) {
  const handleChange = (e) => {
    sendDataToA(e.target.value);
  };

  return <input placeholder="Type in B" onChange={handleChange} />;
}
        