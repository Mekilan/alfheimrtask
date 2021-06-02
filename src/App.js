import React from "react";
import "./styles.css";
import { Router, Route } from "react-router-dom";
import HeaderNav from "./component/headerNav";
import ContentPageCommon from "./component/ContentPage/contentPageCommon";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./History";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getjson: []
    };
  }

  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route
            path="/:monitor?/:laptop?/:hdd?/:processor?/:ram?"
            exact
            component={HeaderNav}
          />
          <Route
            path="/:monitor?/:laptop?/:hdd?/:processor?/:ram?"
            exact
            component={ContentPageCommon}
          ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
