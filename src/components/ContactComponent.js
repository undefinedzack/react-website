import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, FormGroup,Form, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { Control, Errors, actions } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)


class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("current state is: "+JSON.stringify(values));
        alert("current state is: "+JSON.stringify(values));
        this.props.postFeedback(this.props.feedId,
            values.firstname,
            values.lastname,
            values.telnum,
            values.email,
            values.agree,
            values.contactType,
            values.message);
        this.props.resetFeedbackForm();
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

                    <Form model={"feedback"} onSubmit={(values) => this.handleSubmit(values)}>
                        <FormGroup as={Row} controlId={"firstname"}>
                            <Form.Label column md={"2"}>First Name</Form.Label>
                            <Col md={"10"}>
                                <Control.text
                                    placeholder={"First Name"}
                                    className={"form-control"}
                                    model={".firstname"}
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    model={".firstname"}
                                    className={"text-danger"}
                                    show={"touched"}
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />

                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"lastname"}>
                            <Form.Label column md={"2"}>Last Name</Form.Label>
                            <Col md={"10"}>
                                <Control.text
                                    className={"form-control"}
                                    model={".lastname"}
                                    placeholder={"Last Name"}
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    model={".lastname"}
                                    className={"text-danger"}
                                    show={"touched"}
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"telnum"}>
                            <Form.Label column md={"2"}>Contact Tel.</Form.Label>
                            <Col md={"10"}>
                                <Control.text
                                    className={"form-control"}
                                    model={".telnum"}
                                    placeholder={"Telephone No."}
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15),
                                        isNumber
                                    }}
                                />
                                <Errors
                                    model={".telnum"}
                                    className={"text-danger"}
                                    show={"touched"}
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 Numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                        isNumber: 'Must be a number'
                                    }}
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
                                    validators={{
                                        required,
                                        validEmail
                                    }}
                                />
                                <Errors
                                    model={".email"}
                                    className={"text-danger"}
                                    show={"touched"}
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid Email Address'
                                    }}
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
                    </Form>

                </div>
            </div>
        </div>
    );
    }
}

export default Contact;