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
    //this.state = {};
  }

  render() {
    console.log(this);
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
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

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}
