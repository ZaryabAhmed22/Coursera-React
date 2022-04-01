import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import "./App.css";
import Main from "./components/MainComponent";
import Menu from "./components/Menu";
import { DISHES } from "./shared/data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
