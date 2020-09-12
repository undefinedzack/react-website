import React, {Component} from "react";
import {Card} from "react-bootstrap";

class DishDetail extends Component{

    render(){

         const current_dish = this.props.dish


         if (this.props.dish != null){
            const comments = current_dish.comments.map((comment) => {
             return (
                 <div key={current_dish.comments.id} className={"row"}>
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