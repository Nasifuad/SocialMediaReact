/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ handleAdd }) => {
  // const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(todo);
    setTodo("");
  };
  return (
    <>
      <h1 className="text-3xl p-10">Form</h1>
      <div className="flex">
        <form id="form" name="form" className="flex gap-10 ">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Enter your todo"
          />
          <button onSubmit={(e) => handleSubmit(e)}>ADD</button>
        </form>
      </div>
    </>
  );
};
const Tasks = ({ tasks }) => {
  return <div>{tasks}</div>;
};

const App = () => {
  const [tasks, setTasks] = useState("hello");
  function handleAdd(task) {
    setTasks(task);
    console.log(tasks);
  }
  return (
    <div className="flex flex-col justify-center items-center bg-slate-gray h-screen">
      <Form handleAdd={handleAdd} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
