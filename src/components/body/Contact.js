import React, {Component} from 'react';
import {Form,FormGroup,Input,Col,Label,Button} from 'reactstrap';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:"",
            lastname:"",
            telnum:"",
            email:"",
            agree:"",
            contactType:"",
            message:""
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputChange = event =>{
        const name=event.target.name;
        const value=event.target.type=="checkbox"?event.target.checked:event.target.value;

        this.setState({
            [name]:value
        });
    }


    handleSubmit = event =>{
        console.log(this.state);
        event.preventDefault();
    }
    render(){
        document.title="Contact";
        return(
            <div className="container">
      <div className="row row-content" style={{paddingLeft: "20px", textAlign:"left"}}>
          <div className="col-12">
              <h3>Send Us Your Feedback</h3>
          </div>
     <div className="col-12 col-md-7">
     <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
              <Label htmlFor="firstname" md={4}>First Name</Label>
              <Col md={8}>
                  <input type="text"
                   name="firstname" 
                   placeholder="First Name"
                   value={this.state.firstname}
                   onChange={this.handleInputChange} />
              </Col>
          </FormGroup>

          <FormGroup row>
              <Label htmlFor="lastname" md={4}>Last Name</Label>
              <Col md={8}>
                  <input type="text"
                   name="lastname"
                    placeholder="Last Name"
                     value={this.state.lastname}
                     onChange={this.handleInputChange} />
              </Col>
          </FormGroup>

          <FormGroup row>
              <Label htmlFor="telnum" md={4}>Tel.Number</Label>
              <Col md={8}>
                  <input type="tel"
                   name="telnum"
                    placeholder="TelePhone Number"
                     value={this.state.telnum} 
                     onChange={this.handleInputChange}/>
              </Col>
          </FormGroup>

          <FormGroup row>
              <Label htmlFor="email" md={4}>Email</Label>
              <Col md={8}>
                  <input type="email" 
                  name="email" 
                  placeholder="Email"
                   value={this.state.email}
                   onChange={this.handleInputChange} />
              </Col>
          </FormGroup>


        <FormGroup row>
            <Col md={{size:6, offset:2}}>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"
                         name="agree"
                          checked={this.state.agree} onChange={this.handleInputChange}/><strong>May We Contact you?</strong>
                    </Label>
                </FormGroup>
            </Col>

            <Col md={{size:3,offset:1}}> 
               <Input type="select"
                name="contactType"
                 value={this.state.contactType} onChange={this.handleInputChange}>
                   <option>Tell.</option>
                   <option>Email</option>
               </Input>
            </Col>
        </FormGroup>
          

          <FormGroup row>
              <Label htmlFor="message" md={4}>Your Feedback</Label>
              <Col md={8}>
                  <input type="textarea" name="message" value={this.state.message} onChange={this.handleInputChange}/>
              </Col>
          </FormGroup>

          <FormGroup>
              <Col md={{size:10,  offset:2}}>
                  <Button type="submit" color="primary">Send Feedback</Button>
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