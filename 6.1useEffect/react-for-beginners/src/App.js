import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run this all the time");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  return (
    <div>
      <h1>Welcome {counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
