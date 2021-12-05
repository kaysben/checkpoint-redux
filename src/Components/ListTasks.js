import React from "react";
import { useSelector } from "react-redux";
import "./ListTasks.css";
import Task from "./Task";

const ListTasks = ({ filterAll, status }) => {
  const Tasks = useSelector((state) => state.tasks);

  return (
    <div className="taskContainer">
      {status === true || status === false
        ? Tasks.filter((task) => task.isDone === status).map((task) => (
            <div key={task.id}>
              <Task task={task} />
            </div>
          ))
        : filterAll === true
        ? Tasks.map((task) => (
            <div key={task.id}>
              <Task task={task} />
            </div>
          ))
        : Tasks.map((task) => (
            <div key={task.id}>
              <Task task={task} />
            </div>
          ))}

      {/* {Tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} />
        </div>
      ))} */}
    </div>
  );
};

export default ListTasks;
