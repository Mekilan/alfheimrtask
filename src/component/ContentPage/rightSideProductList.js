import React, { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

const RightSideProductList = (props) => {
  const { productlist, totalpages } = props;
  console.log(productlist);
  const [detailview, setDetail] = useState([]);
  const onCardDetailClick = () => {
    setDetail([]);
    props.callback(detailview);
  };
  return (
    <React.Fragment>
      {productlist !== undefined
        ? productlist.map((item, i) => (
            <div
              className="col-lg-4 card-list"
              key={i}
              onClick={onCardDetailClick}
            >
              <CardGroup>
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.productImages[0].s3URL}
                    className="card-l-img"
                  />
                  <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>
                    <Card.Text className="">Rs: {item.totalPrice}</Card.Text>
                    <Card.Text className="">
                      Save {item.discountPercentage}%
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          ))
        : null}
    </React.Fragment>
  );
};

export default RightSideProductList;