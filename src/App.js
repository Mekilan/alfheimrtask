import React from "react";
import "./styles.css";
import HeaderNav from "./component/headerNav";
import ContentPage from "./component/ContentPage/contentPage";
import { connect } from "react-redux";
import { getProductList } from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    window.testdata = this;
    this.state = {
      catdata: "laptop",
      getdatalist: []
    };
  }
  async componentDidMount() {
    let querystring = "?limit=10&page=2&category=laptop";
    await this.props.getProductList(querystring);
    this.setState({}, () => {
      this.setState({ getdatalist: this.props.productlist.productlist.state });
    });
  }
  render() {
    const callBackFunc = (data) => {};
    return (
      <div className="App">
        <HeaderNav callback={callBackFunc} />
        <ContentPage listdata={this.state.getdatalist} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productlist: state
  };
};
export default connect(mapStateToProps, { getProductList })(App);
