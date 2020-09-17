import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Modal, Row} from "react-bootstrap";
import {Control, Errors, LocalForm} from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen : false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.toggleModal();
        alert("current state is: "+JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return(
            <>
            <Button onClick={this.toggleModal} className={"mt-3 bg-secondary"}>
                <span className={"fa fa-pencil fa-lg"}></span> Submit Comment
            </Button>
            <Modal show={this.state.isModalOpen} onHide={this.toggleModal}>
                   <Modal.Header closeButton>Submit Comment</Modal.Header>
                   <Modal.Body>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup controlId={"rating"}>
                                <Form.Label>Rating</Form.Label>
                                <Control.select
                                    model={".rating"}
                                    className={"form-control"}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>
                            <FormGroup controlId={"name"}>
                                <Form.Label>Your Name</Form.Label>
                                <Control.text
                                    model={".name"}
                                    className={"form-control"}
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    model={".name"}
                                    className={"text-danger"}
                                    show={"touched"}
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </FormGroup>
                            <FormGroup controlId={"comment"}>
                                <Form.Label>Comment</Form.Label>
                                <Row>
                                    <Col className={"md-12"} >
                                        <Control.textarea
                                            model={".comment"}
                                            rows={"12"}
                                            className={"form-control"}
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Button type={"submit"} color={"primary"}>Submit</Button>
                        </LocalForm>
                   </Modal.Body>
               </Modal>
            </>
        )
    };
}

export default CommentForm;