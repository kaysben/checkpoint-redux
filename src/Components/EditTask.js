import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { AiTwotoneEdit } from "react-icons/ai";
import { Edit } from ".././Redux/Actions/Action";
import { useDispatch } from "react-redux";

const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow} >
        Launch demo modal
      </Button> */}
      <AiTwotoneEdit onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Form.Control
          type="text"
          placeholder="Enter the new task title ..."
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Enter the new task Description ..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <Modal.Footer>
          <Button
            variant="outline-light"
            onClick={() => {
              dispatch(Edit(task.id, editedTitle, description));
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
