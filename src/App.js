import React from "react";
import "./App.css";
import { useState, useCallback } from "react";
import Lists from "./component/Lists";
import Form from "./component/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleClick = useCallback(
    (_id) => {
      let newTodoData = todoData.filter((_data) => _data.id !== _id);
      setTodoData(newTodoData); //todoData값을 state를 이용해 newTodoData로 변경! (재호출 렌더링)
    },
    [todoData]
  );

  const handleSubmit = (e) => {
    e.preventDefault(); //리로드막아주기

    let newTodoData = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodoData]);
    setValue(""); //
  };

  const handleRemoveClick = () => {
    setTodoData([]);
  }; //setTodoData를 빈배열로 만들기! (모든 목록 빈배열!-> 전체삭제)

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className=" w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3 ">
          <h1>Todo List</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>

        <Lists
          handleClick={handleClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
