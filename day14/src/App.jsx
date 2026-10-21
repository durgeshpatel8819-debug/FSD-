import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addHandler = () => {
    if (task === "") {
      alert("Please add some task");
    } else {
      if (editIndex !== null) {
        //update
        const updatedList = [...todoList];
        updatedList[editIndex] = task;
        setTodoList([...updatedList]);
        setEditIndex(null);
      } else {
        setTodoList([...todoList, task]);
        console.log(todoList);
      }

      // console.log(task);
      setTask("");
    }
  };

  const deleteHandler = (index) => {
    console.log(todoList[index]);
    const updatedList = todoList.filter((d, i) => i !== index);
    setTodoList([...updatedList]);
  };

  const editHandler = (index) => {
    setTask(todoList[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)}></input>
      <button onClick={addHandler}>{editIndex !== null ? "UPDATE" : "ADD"}</button>
      <br></br>
      {todoList.map((data, index) => (
        <div key={index}>
          <span>{data}</span>
          <button onClick={() => editHandler(index)}>Edit</button>
          <button onClick={() => deleteHandler(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;