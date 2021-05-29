import React, {Component} from 'react';
import {Form, Button, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addComment} from '../../redux/actionCreators';


const mapDispatchToProps = dispatch => {
    return {
        addComment:(dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
    }
}



class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            author:"",
            rating:"",
            comment:""
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    handleSubmit = event =>{      
      this.props.addComment(this.props.dishId, this.state.rating,
        this.state.author, this.state.comment);

       this.setState({
        author:"",
        rating:"",
        comment:""
    });
       event.preventDefault();
    }


    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input 
                    type="text" 
                    name="author" 
                    value={this.state.author} 
                    placeholder="Your Name" 
                    onChange={this.handleInputChange}
                    required
                    />
                    <br/>
                    <Input 
                    type="select" 
                    name="rating" 
                    onChange={this.handleInputChange}
                    value={this.state.rating} 
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                        <br/>
                        <Input 
                        type="textarea"
                        name="comment"
                        placeholder="Enter Your Comment"
                        required
                        onChange={this.handleInputChange} />
                        <Button type="submit">Submit comment</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);

