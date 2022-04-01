import React, { Component } from "react";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    //--Creating the local state
    //-- To change the state use this.setState({key: value})
    //--never change state directly >> this.state.key = newValue
    // this.state = {
    //   selectedDish: null,
    // };
    console.log("Menu Component Constuctor invoked"); //--1
  }

  componentDidMount() {
    console.log("Menu Component componentDidMount invoked"); //--3
  }
  // //--Event handling Function
  // onDishSelect(dish) {
  //   this.setState({ selectedDish: dish });
  // }

  //Conditionall rendering
  // renderDish(dish) {
  //   if (dish != null) {
  //     return <DishDetail dish={dish} />;
  //   } else {
  //     return "";
  //   }
  // }

  render() {
    //console.log(this);
    const menu = this.props.dishes.map((dish) => {
      return (
        <div
          onClick={() => this.props.onClick(dish.id)}
          key={dish.id}
          className="col-12 col-md-5 m-1"
        >
          <Card>
            {/* <Media obejct src={dish.image} alt={dish.name} /> */}
            <CardImg width={"100%"} src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log("Menu Component Render is invoked"); //--2

    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/* <div>{this.renderDish(this.state.selectedDish)}</div> */}
      </div>
    );
  }
}
