import React, { Component } from "react";
//import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProductList } from "../actions";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  FormControl
} from "react-bootstrap";

const periphals = [
  { code: 10, name: "monitor" },
  { code: 20, name: "laptop" },
  { code: 30, name: "processor" },
  { code: 40, name: "ram" },
  { code: 50, name: "hdd" }
];

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrval: ""
    };
  }
  componentDidMount() {}
  dropDwnClick = async (evt) => {
    debugger;
    let value = "";
    let data = evt.currentTarget.id;
    if (data.toLowerCase() === "ram") {
      value = "?limit=21&page=2&category=ram";
    }
    if (data.toLowerCase() === "monitor") {
      value = "?limit=40&page=2&category=monitor";
    }
    if (data.toLowerCase() === "processor") {
      value = "?limit=23&page=3&category=processor";
    }
    if (data.toLowerCase() === "hdd") {
      value = "?limit=30&page=1&category=hdd";
    }
    if (data.toLowerCase() === "laptop") {
      value = "?limit=30&page=1&category=laptop";
    }
    await this.props.getProductList(value);
    window.commomdata.setState({}, () => {
      window.commomdata.setState({ getdatalist: this.props.productlist.state });
    });
  };
  onSearchdata = (evt) => {
    this.setState({ scrval: evt.target.value });
    let data = this.props.productlist.state.filter((item) => {
      let searchValue = item.productName.toLowerCase();
      return searchValue.indexOf(evt.target.value) !== -1;
    });
    window.commomdata.setState({ getdatalist: data });
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home" className="cp-logo">
              <img
                src="https://challengerbuildyourpc.com/static/media/navlogo-challenger.d3f33c16.png"
                alt=""
                style={{ width: "100%" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">BUILD YOUR PC</Nav.Link>
                <Nav.Link href="#link">PRE-BUILD PCs </Nav.Link>
                <Nav.Link href="/laptop">LAPTOPS</Nav.Link>
                <NavDropdown title="PERIPHERALS" id="basic-nav-dropdown">
                  {periphals.map((item, i) => (
                    <NavDropdown.Item
                      href="#"
                      key={item.code}
                      eventKey={i}
                      id={item.name}
                      onClick={this.dropDwnClick}
                    >
                      {item.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link href="#about">ABOUT US</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search with Lowercase"
                  className="mr-2"
                  aria-label="Search"
                  onChange={this.onSearchdata}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
export default connect(mapStateToProps, { getProductList })(HeaderNav);
