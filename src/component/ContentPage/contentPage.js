import React from "react";
import LeftFilterPage from "./LeftFilterPage";
import RightSideProductList from "./rightSideProductList";

const ContentPage = (props) => {
  debugger;
  const { products, totalPages } = props.listdata;
  const callBackFun = (data) => {};
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <a href="#i">
            <img src="/img/poster.jpeg" alt="" className="img-bg" />
          </a>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <LeftFilterPage />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <RightSideProductList
                productlist={products}
                totalpages={totalPages}
                callback={callBackFun}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
