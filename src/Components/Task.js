import React from "react";
import "./Task.css";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { Delete, Done } from "../Redux/Actions/Action";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="Task">
      <h3
        style={task.isDone === true ? { textDecoration: "line-through" } : null}
      >
        {task.title}
      </h3>
      <p>{task.description}</p>
      <div className="icons">
        <EditTask task={task} style={{ margin: 10 }} />
        <AiOutlineDelete
          style={{ margin: 10 }}
          onClick={() => dispatch(Delete(task.id))}
        />
        <IoMdDoneAll
          style={{ margin: 10 }}
          onClick={() => {
            dispatch(Done(task.id));
          }}
        />
      </div>
    </div>
  );
};

export default Task;
