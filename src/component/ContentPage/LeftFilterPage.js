import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { connect } from "react-redux";

class LeftFilterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrval: "",
      setsh: "show",
      setsubsh: "show"
    };
  }
  componentDidMount(props) {}

  hTL = (evt) => {
    debugger;
    if (evt.currentTarget.id === "htl") {
      //let data = this.props.productlist.state.filter((item) => {
      // let searchValue = item.totalPrice;
      //return searchValue.indexOf(evt.target.value) !== -1;
      //});
    }
  };

  expandCollapse = () => {
    if (this.state.setsh === "show") {
      this.setState({ setsh: "hide" });
    } else {
      this.setState({ setsh: "show" });
    }
  };
  expandCollapseSub = () => {
    if (this.state.setsubsh === "show") {
      this.setState({ setsubsh: "hide" });
    } else {
      this.setState({ setsubsh: "show" });
    }
  };
  render() {
    return (
      <div className="shrt-p">
        <Accordion>
          <Card>
            <Card.Header onClick={this.expandCollapse}>
              SORT BY PRICE
            </Card.Header>
            <Accordion.Collapse eventKey="0" className={this.state.setsh}>
              <React.Fragment>
                <Card.Body>
                  <input type="checkbox" onChange={this.hTL} id="htl" /> Highest
                  to Lowest
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
            <Card.Header onClick={this.expandCollapseSub}>
              SUB CATEGORY
            </Card.Header>
            <Accordion.Collapse eventKey="1" className={this.state.setsubsh}>
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
  }
}
const mapStateToProps = (state) => {
  return {
    productlist: state.productlist,
    totalpage: state.totalPage
  };
};
export default connect(mapStateToProps)(LeftFilterPage);
