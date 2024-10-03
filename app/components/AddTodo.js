"use client"
import { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [disc, setDisc] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, disc }]);
    setTitle('');
    setDisc('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="enter e1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Task Here"
        />
        <input
          type="text"
          className="enter e2"
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
          placeholder="Enter Description Here"
        />
        <button className="sub">Submit</button>
      </form>
      <div>
        {tasks.length === 0 ? (
          <h2>No Task here</h2>
        ) : (
          tasks.map((task, index) => (
            <div className="All-Data" key={index}>
              <h4>{task.title}</h4>
              <h4>{task.disc}</h4>
              <button onClick={() => {
                const newTasks = tasks.filter((_, i) => i !== index);
                setTasks(newTasks);
              }}>Delete</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AddTodo;
