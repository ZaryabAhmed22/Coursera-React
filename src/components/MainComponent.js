import { Component } from "react";
import { DISHES } from "../shared/data";
import { Switch, Route, Redirect } from "react-router-dom";

import DishDetail from "./DishDetail";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDishId: null,
    };
  }

  //--Event handling Function
  onDishSelect(dishID) {
    console.log(dishID);
    this.setState({ selectedDishId: dishID });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path={"/menu"}
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>

        {this.state.selectedDishId !== null && (
          <DishDetail
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDishId
              )[0]
            }
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default Main;
