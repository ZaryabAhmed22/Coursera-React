import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem(props) {
  return (
    <Card>
      <Link to={`/menu/${props.dish.id}`}>
        <CardImg width={"100%"} src={props.dish.image} alt={props.dish.name} />
        <CardImgOverlay>
          <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

export default function Menu(props) {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });
  console.log("Menu Component Render is invoked"); //--2

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
      {/* <div>{this.renderDish(this.state.selectedDish)}</div> */}
    </div>
  );
}
