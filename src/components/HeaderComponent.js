import React, {Component, useState} from "react";
import {Navbar, NavbarBrand, Jumbotron, Nav, NavItem, Form, Modal, Button, FormGroup} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Header extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen : false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: "+this.username.value +
            " Password: "+ this.password.value +
            " Remember: "+ this.remember.checked);
        event.preventDefault();
    }


    render() {


       return(
           <>
               <Navbar className={"navbar-dark"} expand={"md"}>
                    <div className="container">
                        <Navbar.Toggle />
                        <Navbar.Brand className={"mr-auto"} href={"/"}>
                            <img src={"assets/images/logo.png"} height={"30"} width={"41"}
                            alt={"Ristorante Con Fusion"}/>
                        </Navbar.Brand>
                        <Navbar.Collapse className={"navbar"}>
                            <Nav className={"navbar"}>
                                <NavItem>
                                    <NavLink className={"nav-link"} to={"/home"}>
                                        <span className={"fa fa-home fa-lg"}></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={"nav-link"} to={"/aboutus"}>
                                        <span className={"fa fa-info fa-lg"}></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={"nav-link"} to={"/menu"}>
                                        <span className={"fa fa-list fa-lg"}></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={"nav-link"} to={"/contactus"}>
                                        <span className={"fa fa-address-card fa-lg"}></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className={"ml-auto"}>
                                <Nav.Item>
                                    <Button onClick={this.toggleModal} >
                                        <span className={"fa fa-sign-in fa-lg"}></span>Login
                                    </Button>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
               </Navbar>
               <Jumbotron>
                   <div className={"container"}>
                       <div className={"row row-header"}>
                           <div className={"col-12 col-sm-6"}>
                               <h1>Ristorante Con Fusion</h1>
                               <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses! </p>
                           </div>
                       </div>
                   </div>
               </Jumbotron>
               <Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
                   <Modal.Header closeButton>Login</Modal.Header>
                   <Modal.Body>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup controlId={"username"}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type={"text"}
                                    ref={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup controlId={"password"}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type={"password"}
                                    ref={(input) => this.password = input}
                                />
                            </FormGroup>
                            <FormGroup controlId={"remember"}>
                                <Form.Check
                                    type={"checkbox"}
                                    label={"Remember Me"}
                                    ref={(input) => this.remember = input}
                                />
                            </FormGroup>
                            <Button type={"submit"} value={"submit"} color={"primary"}>Login</Button>
                        </Form>
                   </Modal.Body>
               </Modal>
           </>
       );
    }
}

export default Header;