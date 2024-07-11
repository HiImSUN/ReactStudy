import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  return (
    <div>
      <form>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write you to-do.."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
