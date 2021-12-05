import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const FilterTask = ({ setFilterAll, setStatus }) => {
  return (
    <div>
      <ButtonGroup aria-label="Basic example" style={{ margin: 20 }}>
        <Button
          style={{ marginLeft: 20 }}
          variant="secondary"
          onClick={() => {
            setStatus("");
            setFilterAll(true);
          }}
        >
          All
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="secondary"
          onClick={() => setStatus(true)}
        >
          Done tasks
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="secondary"
          onClick={() => setStatus(false)}
        >
          unDone tasks
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default FilterTask;
