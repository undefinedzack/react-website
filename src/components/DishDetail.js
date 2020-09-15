import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import CommentForm from "./CommentFormComponent";

class DishDetail extends Component{

    render(){

         const current_dish = this.props.dish


         if (this.props.dish != null){
            const comments = this.props.comments.map((comment) => {
             return (
                 <div key={this.props.comments.id} className={"row"}>
                     <div className={"col-12 m-2"}>
                         {comment.comment}
                     </div>
                     <div className={"col-12 m-2"}>
                         -- {comment.author}  {new Intl.DateTimeFormat('en-US',{year: 'numeric', month : 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                     </div>
                 </div>
             )
        });

        return (
            <div className={"container"}>
                <div className={"row"}>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to={'/menu'}>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.name}</BreadcrumbItem>

                    </Breadcrumb>
                    <div className={"col-12"}>
                        <h3>Menu</h3>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 col-md-5 m-1"}>
                        <Card>
                            <Card.Img src={current_dish.image} alt={current_dish.name}/>
                            <Card.Body>
                                <Card.Title>{current_dish.name}</Card.Title>
                                <Card.Text>{current_dish.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className={"col-12 col-md-5 m-1"}>
                        <Card>
                            <Card.Title> Comments </Card.Title>
                            <Card.Body>
                                {comments}
                            </Card.Body>
                        </Card>
                        <CommentForm />
                    </div>
                </div>
            </div>
     );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;