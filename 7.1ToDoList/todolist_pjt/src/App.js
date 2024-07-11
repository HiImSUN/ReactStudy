import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onChangeHandler = (event) => {
    setToDo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      // 만약 빈 todo가 제출되면 함수 종료
      return;
    }
    setToDoList((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const deleteBtn = (index) => {
    setToDoList((currentArray) =>
      currentArray.filter((item, toDoIndex) => index !== toDoIndex)
    );
  };

  return (
    <div>
      <h1>TO-DO LIST ({toDoList.length}개)</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Write your todo"
          value={toDo}
        />
        <button type="submit">작성하기</button>
      </form>
      <hr />
      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteBtn(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
