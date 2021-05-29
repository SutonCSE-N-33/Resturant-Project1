import React from 'react';
import {Card, CardBody,CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const MenuItem =props =>{
    return(
       <div>
            <Card style={{margin:"10px"}}>
            <CardBody>
                <CardImg src={props.dish.image}
                 alt={props.dish.name} 
                 height="300px" width="100%" style={{opacity:"0.5"}}/>
                 <CardImgOverlay>
                     <CardTitle style={{marginTop:"20px" ,cursor:"pointer"}} onClick={props.dishSelect}>
                         {props.dish.name}
                     </CardTitle>
                 </CardImgOverlay>
            </CardBody>
        </Card>
       </div>
    )
}

export default MenuItem;