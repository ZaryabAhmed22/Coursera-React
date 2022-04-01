import { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/data";

import DishDetail from "./DishDetail";
import Menu from "./Menu";

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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishID) => this.onDishSelect(dishID)}
        />

        {this.state.selectedDishId !== null && (
          <DishDetail
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === this.state.selectedDishId
              )[0]
            }
          />
        )}
      </div>
    );
  }
}

export default Main;
