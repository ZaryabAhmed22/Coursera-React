import React from "react";
import {
  Media,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

function RenderMenuItem(props) {
  return (
    <Card>
      <CardImg width={"100%"} src={props.dish.image} alt={props.dish.name} />
      <CardImgOverlay>
        <CardTitle>{props.dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

export default function Menu(props) {
  const menu = props.dishes.map((dish) => {
    return (
      <div
        onClick={() => props.onClick(dish.id)}
        key={dish.id}
        className="col-12 col-md-5 m-1"
      >
        <RenderMenuItem dish={dish} onClick={props.onClick} />
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
