import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstName: false,
        lastName: false,
        telNum: false,
        email: false,
      },
    };

    //binding the handleSubmit method
    this.handleSubmit = this.handleSubmit.bind(this);

    //binding the handleInputChange method
    this.handleInputChange = this.handleInputChange.bind(this);

    //binding the handleBlur method
    this.handleBlur = this.handleBlur.bind(this);
  }

  //Change event
  handleInputChange(event) {
    const target = event.target;

    const value = target.type === "checkbox" ? target.checked : target.value;

    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  //Submit event
  handleSubmit(event) {
    console.log("Current State is" + JSON.stringify(this.state));
    event.preventDefault();
  }

  //Blur event
  handleBlur = (field) => (event) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  //Validation
  vaildate(firstName, lastName, telNum, email) {
    const errors = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
    };

    //First Name
    if (this.state.touched.firstName && firstName.length < 3) {
      errors.firstName =
        "First Name should contain more then 3 or equal to characters";
    } else if (this.state.touched.firstName && firstName.length > 10) {
      errors.firstName =
        "First Name should contain less then or equal to 10 characters";
    }

    //Last Name
    if (this.state.touched.lastName && lastName.length < 3) {
      errors.lastName =
        "Last Name should contain more then 3 or equal to characters";
    } else if (this.state.touched.lastName && lastName.length > 10) {
      errors.lastName =
        "Last Name should contain less then or equal to 10 characters";
    }

    //Tel num
    const reg = /^\d+$/;
    if (this.state.touched.telNum && !reg.test(telNum)) {
      errors.telNum = "Tel num should contain numbers only!";
    }

    //email
    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length !== 1
    ) {
      errors.email = "Email should contain the @";
    }

    return errors;
  }

  render() {
    const errors = this.vaildate(
      this.state.firstName,
      this.state.lastName,
      this.state.telNum,
      this.state.email
    );
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Contact Us</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 colmd-9">
            <Form onSubmit={this.handleSubmit}>
              {/* First Name */}
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    valid={errors.firstName === ""}
                    invalid={errors.firstName !== ""}
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("firstName")}
                  />

                  <FormFeedback>{errors.firstName}</FormFeedback>
                </Col>
              </FormGroup>

              {/* Last Name */}
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    valid={errors.firstName === ""}
                    invalid={errors.firstName !== ""}
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("lastName")}
                  />

                  <FormFeedback>{errors.lastName}</FormFeedback>
                </Col>
              </FormGroup>

              {/* Tel. Num */}
              <FormGroup row>
                <Label htmlFor="telNum" md={2}>
                  Tel. Num
                </Label>
                <Col md={10}>
                  <Input
                    type="telnum"
                    id="telNum"
                    name="telNum"
                    valid={errors.firstName === ""}
                    invalid={errors.firstName !== ""}
                    placeholder="Tel. Num"
                    value={this.state.telNum}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("telNum")}
                  />

                  <FormFeedback>{errors.telNum}</FormFeedback>
                </Col>
              </FormGroup>

              {/* Email */}
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    valid={errors.firstName === ""}
                    invalid={errors.firstName !== ""}
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("email")}
                  />

                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>

              {/* Last Name */}
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      {""} <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>

              {/* Feed Back */}
              <FormGroup row>
                <Label htmlFor="meassage" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    rows={"12"}
                    id="message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              {/* Button */}
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
