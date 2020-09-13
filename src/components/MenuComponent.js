import React from "react";
import {Breadcrumb, BreadcrumbItem, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({dish , onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
            <Card.Img src={dish.image} alt={dish.name}/>
            <Card.ImgOverlay>
                <Card.Title> {dish.name} </Card.Title>
            </Card.ImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return(
            <div key={dish.id} className={"col-12 col-md-5 m-1"}>
                <RenderMenuItem dish={dish}/>
            </div>
        )
    });

    return (
        <div className={"container"}>
            <div className={"row"}>
                <Breadcrumb>
                    <BreadcrumbItem><Link to={'/home'}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className={"col-12"}>
                    <h3>Menu</h3>
                </div>
            </div>
            <div className={"row"}>
                {menu}
            </div>
        </div>
    );

}




export default Menu;