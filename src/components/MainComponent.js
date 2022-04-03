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
import { comment } from "postcss";
import About from "./AboutComponent";

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

    const AboutUs = () => {
      return <About leaders={this.state.leaders} />;
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
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
          <Route path="menu/:dishId" component={DishWithId} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={AboutUs} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
