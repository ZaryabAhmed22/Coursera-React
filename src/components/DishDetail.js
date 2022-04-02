import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

//function for rendering dihs comments
function RenderCommment({ comments }) {
  if (comments === null) return "";

  const comment = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(new Date(comment.date))}
        </p>
      </li>
    );
  });

  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">{comment}</ul>
    </div>
  );
}

//function for rendering a dish
function RenderDish(props) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width={"100%"} src={props.dish.image} alt={props.dish.name} />
        <CardBody>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default function DishDetail(props) {
  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderCommment comments={props.dish.comments} />
      </div>
    </div>
  );
}
