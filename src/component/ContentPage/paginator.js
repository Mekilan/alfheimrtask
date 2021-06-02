import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const Paginator = (props) => {
  return (
    <React.Fragment>
      <ButtonGroup className="mb-2">
        <Button>Previous</Button>
        <Button variant="secondary">1</Button>
        <Button>Next</Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Paginator;
