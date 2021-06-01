import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

const LeftFilterPage = () => {
  const [setsh, setShowHide] = useState("show");
  const [setsubsh, setSubShowHide] = useState("show");
  const expandCollapse = () => {
    if (setsh === "show") {
      setShowHide("hide");
    } else {
      setShowHide("show");
    }
  };
  const expandCollapseSub = () => {
    if (setsubsh === "show") {
      setSubShowHide("hide");
    } else {
      setSubShowHide("show");
    }
  };
  return (
    <div className="shrt-p">
      <Accordion>
        <Card>
          <Card.Header onClick={expandCollapse}>SORT BY PRICE</Card.Header>
          <Accordion.Collapse eventKey="0" className={setsh}>
            <React.Fragment>
              <Card.Body>
                <input type="checkbox" /> Highest to Lowest
              </Card.Body>
              <Card.Body>
                <input type="checkbox" /> Lowest to Highest
              </Card.Body>
            </React.Fragment>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion className="shrt-p">
        <Card>
          <Card.Header onClick={expandCollapseSub}>SUB CATEGORY</Card.Header>
          <Accordion.Collapse eventKey="1" className={setsubsh}>
            <React.Fragment>
              <Card.Body>
                <input type="checkbox" /> ACER
              </Card.Body>
              <Card.Body>
                <input type="checkbox" /> BENQ
              </Card.Body>
              <Card.Body>
                <input type="checkbox" /> DELL
              </Card.Body>
              <Card.Body>
                <input type="checkbox" /> GIGABYTE
              </Card.Body>
              <Card.Body>
                <input type="checkbox" /> HP
              </Card.Body>
              <Card.Body>
                <input type="checkbox" /> LG
              </Card.Body>
              <Card.Body>
                <input type="checkbox" /> SAMSUNG
              </Card.Body>
            </React.Fragment>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default LeftFilterPage;
