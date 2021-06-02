import React from "react";
import LeftFilterPage from "./LeftFilterPage";
import RightSideProductList from "./rightSideProductList";
//import Paginator from "./paginator";

const ContentPage = (props) => {
  debugger;
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
              {props.listdata !== undefined ? (
                props.listdata.length !== 0 ? (
                  <RightSideProductList
                    productlist={props.listdata}
                    callback={callBackFun}
                  />
                ) : (
                  <div className="txt-algn-nd">No Data Found...</div>
                )
              ) : null}
            </div>
          </div>
        </div>
        {/*<div className="row">
          <div className="col">
            <Paginator totalpages={totalPages} />
          </div>
                </div>*/}
      </div>
    </div>
  );
};

export default ContentPage;
