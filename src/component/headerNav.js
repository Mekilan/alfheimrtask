import React, { Component } from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  FormControl
} from "react-bootstrap";

const periphals = [
  { code: 10, name: "Monitor" },
  { code: 20, name: "Laptop" },
  { code: 30, name: "Processor" },
  { code: 40, name: "RAM" },
  { code: 50, name: "HDD" }
];

class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  dropDwnClick = (evt) => {
    debugger;
    console.log("Clicked");
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
                <Nav.Link href="#laptops">LAPTOPS</Nav.Link>
                <NavDropdown title="PERIPHERALS" id="basic-nav-dropdown">
                  {periphals.map((item, i) => (
                    <NavDropdown.Item
                      href="#"
                      key={i}
                      eventKey={i}
                      value={item.code}
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
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default HeaderNav;
