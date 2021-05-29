import React from 'react';
import {Card, CardImg, CardBody, CardTitle,CardText} from 'reactstrap';
import LoadComment from './LoadComments';
import CommentForm from './CommentForm';
const DishDetail= props => {
    return(
        <div>
                 <Card style={{marginTop:"10px"}}>
                     <CardImg top src={props.dish.image} alt={props.dish.name} />
                     <CardBody style={{textAlign:"left"}}>
                         <CardTitle>{props.dish.name}</CardTitle>
                         <CardText>{props.dish.description}</CardText>
                         <hr/>
                         <LoadComment comments={props.comments} />
                         <CommentForm dishId={props.dish.id} />
                     </CardBody>
                </Card> 
        </div>
    )
}

export default DishDetail; 