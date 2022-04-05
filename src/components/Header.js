import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    //Binding the toggleNav
    this.toggleNav = this.toggleNav.bind(this);

    //Binding the toggleModal
    this.toggleModal = this.toggleModal.bind(this);
  }

  //Nav toggling
  toggleNav() {
    this.setState({
      isNavOpen: true,
    });
  }

  //Modal toggling
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar dark expand={"md"}>
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className={"mr-auto"} href="/">
              <img src="assets/images.logo.png" alt="Ristorante Con Fusion" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className={"nav-link"} to="/home">
                    <span className="fa fa-home fa-lg ">Home</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className={"nav-link"} to="/about">
                    <span className="fa fa-info fa-lg">About Us</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className={"nav-link"} to="/menu">
                    <span className="fa fa-list fa-lg">Menu</span>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className={"nav-link"} to="/contact">
                    <span className="fa fa-address-card fa-lg">Contact Us</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outlinr onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg">Login</span>
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration fromthe World's best cuisines, and create
                  unique fusion experience
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>

        {/* Modal */}
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody></ModalBody>
        </Modal>
      </>
    );
  }
}
