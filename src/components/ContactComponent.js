import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Col, Form, FormGroup, Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname : '',
            lastname : '',
            telnum : '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message:'',
            touched: {
                firstname: false,
                lastname:false,
                telnum: false,
                email: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const controlId = target.id;

        this.setState({
           [controlId]: value
        });
    }

    handleBlur = (field) => (event) => {
        this.setState({
            touched: {...this.state.touched, [field] : true}
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First name should be more than 3 characters'
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First name should be less than 10 characters'

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last name should be more than 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last name should be less than 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only Numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @ sign';

        return errors;
    }


    handleSubmit(event){
        console.log("current state is: "+JSON.stringify(this.state));
        alert("current state is: "+JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);


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

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup as={Row} controlId={"firstname"}>
                            <Form.Label column md={"2"}>First Name</Form.Label>
                            <Col md={"10"}>
                                <Form.Control
                                    type={"text"}
                                    placeholder={"First Name"}
                                    value={this.state.firstname}
                                    isValid= {errors.firstname === ''}
                                    isInvalid= {errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange} />
                                    <Form.Control.Feedback type={"invalid"}>{errors.firstname}</Form.Control.Feedback>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"lastname"}>
                            <Form.Label column md={"2"}>Last Name</Form.Label>
                            <Col md={"10"}>
                                <Form.Control
                                    type={"text"}
                                    placeholder={"Last Name"}
                                    value={this.state.lastname}
                                    isValid= {errors.lastname === ''}
                                    isInvalid= {errors.lastname !== ''}
                                    onBlur={this.handleBlur('lastname')}
                                    onChange={this.handleInputChange}/>
                                    <Form.Control.Feedback type={"invalid"}>{errors.lastname}</Form.Control.Feedback>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"telnum"}>
                            <Form.Label column md={"2"}>Contact Tel.</Form.Label>
                            <Col md={"10"}>
                                <Form.Control
                                    type={"tel"}
                                    placeholder={"Telephone No."}
                                    value={this.state.telnum}
                                    isValid= {errors.telnum === ''}
                                    isInvalid= {errors.telnum !== ''}
                                    onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInputChange} />
                                    <Form.Control.Feedback type={"invalid"}>{errors.telnum}</Form.Control.Feedback>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"email"}>
                            <Form.Label column md={"2"}>Email</Form.Label>
                            <Col md={"10"}>
                                <Form.Control
                                    type={"email"}
                                    placeholder={"Email"}
                                    value={this.state.email}
                                    isValid= {errors.email === ''}
                                    isInvalid= {errors.email !== ''}
                                    onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange} />
                                    <Form.Control.Feedback type={"invalid"}>{errors.email}</Form.Control.Feedback>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} >
                            <Col md={{size : 6 ,offset:2}}>
                                <FormGroup >
                                    <Form.Check
                                        type={"checkbox"}
                                        id={"agree"}
                                        checked={this.state.agree}
                                        label={<strong>May we contact you?</strong>}

                                        onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={{size : 3 ,offset:1}}>
                                <Form.Control
                                    as={"select"}
                                    value={this.state.contactType} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Form.Control>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} controlId={"message"}>
                            <Form.Label column md={"2"}>Your Feedback</Form.Label>
                            <Col md={"10"}>
                                <Form.Control
                                    as={"textarea"}
                                    rows={"12"}
                                    value={this.state.message}
                                    onChange={this.handleInputChange} />
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