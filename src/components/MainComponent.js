import { Component } from "react";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Switch, Route, Redirect } from "react-router-dom";

import DishDetail from "./DishDetail";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      selectedDishId: null,
    };
  }

  //--Event handling Function
  onDishSelect(dishID) {
    console.log(dishID);
    this.setState({ selectedDishId: dishID });
  }

  render() {
    //Home component function to pass in props
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path={"/menu"}
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/contact" component={Contact} />
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
