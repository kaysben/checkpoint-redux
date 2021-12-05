import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Add } from "../Redux/Actions/Action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  // **********Verification if empty form ********

  const HandleRequired = () => {
    return isRequired ? setShow(true) : setShow(false);
  };
  const [isRequired, setisRequired] = useState(true);
  const [show, setShow] = useState(false);
  // ***********************

  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Form.Control
          type="text"
          value={task}
          placeholder="Enter task title..."
          onChange={(e) => {
            setTask(e.target.value);
            setisRequired(false);
          }}
        />
        <span
          style={{
            fontSize: "12px",
            color: "red",
            padding: 5,
            textAlign: "center",
          }}
        >
          {show ? "You must add a Task title" : ""}
        </span>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          // onClick={() => {
          //   dispatch(
          // Add({
          //   id: Math.random(),
          //   description:
          //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          //   title: task,
          //   isDone: false,
          // })
          //   );
          //   setTask("");
          // }}
          onClick={() => {
            task !== ""
              ? dispatch(
                  Add({
                    id: Math.random(),
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                    title: task,
                    isDone: false,
                  }),
                  setShow(false)
                )
              : HandleRequired();
            setisRequired(true);
            setTask("");
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
