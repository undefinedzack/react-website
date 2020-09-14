import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Form, FormGroup, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("current state is: "+JSON.stringify(values));
        alert("current state is: "+JSON.stringify(values));
    }

    render() {
        return(
        <div className="container">
            <div className={"row"}>
                <Breadcrumb>
                    <BreadcrumbItem><Link to={'/home'}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className={"col-12"}>
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className={"row row-content"}>
                <div className={"col-12"}>
                    <h3>Send us your feedback</h3>
                </div>
                <div className={"col-12 col-md-9"}>

                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <FormGroup as={Row} controlId={"firstname"}>
                            <Form.Label column md={"2"}>First Name</Form.Label>
                            <Col md={"10"}>
                                <Control.text
                                    className={"form-control"}
                                    model={".firstname"}
                                    type={"text"}
                                    placeholder={"First Name"}
                                     />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"lastname"}>
                            <Form.Label column md={"2"}>Last Name</Form.Label>
                            <Col md={"10"}>
                                <Control.text
                                    className={"form-control"}
                                    model={".lastname"}
                                    type={"text"}
                                    placeholder={"Last Name"}
                                   />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"telnum"}>
                            <Form.Label column md={"2"}>Contact Tel.</Form.Label>
                            <Col md={"10"}>
                                <Control.text
                                    className={"form-control"}
                                    model={".telnum"}
                                    type={"tel"}
                                    placeholder={"Telephone No."}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"email"}>
                            <Form.Label column md={"2"}>Email</Form.Label>
                            <Col md={"10"}>
                                <Control.text
                                    className={"form-control"}
                                    model={".email"}
                                    type={"email"}
                                    placeholder={"Email"}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} >
                            <Col md={{size : 6 ,offset:2}}>
                                <FormGroup>
                                    <Control.checkbox
                                        className={"form-check-input"}
                                        model={".agree"}
                                        type={"checkbox"}
                                    />
                                    <strong>May we contact you?</strong>
                                </FormGroup>
                            </Col>
                            <Col md={{size : 3 ,offset:1}}>
                                <Control.select
                                    model={".contactType"}
                                    className={"form-control"}
                                    as={"select"}
                                     >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"message"}>
                            <Form.Label column md={"2"}>Your Feedback</Form.Label>
                            <Col md={"10"}>
                                <Control.textarea
                                    model={".message"}
                                    className={"form-control"}
                                    as={"textarea"}
                                    rows={"12"}
                                     />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"submit"}>
                            <Col md={{size : 10 ,offset:2}}>
                                <Button
                                    type={"submit"}
                                    color={"primary"} >Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </LocalForm>

                </div>
            </div>
        </div>
    );
    }
}

export default Contact;