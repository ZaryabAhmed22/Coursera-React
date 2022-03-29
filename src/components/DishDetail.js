import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  renderCommment(comments) {
    if (comments === null) return "";

    const comment = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {comment.date}
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

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              width={"100%"}
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>

        {this.renderCommment(this.props.dish.comments)}
      </div>
    );
  }
}