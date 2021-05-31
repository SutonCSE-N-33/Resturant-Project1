import React, {Component} from 'react';
import {Form,FormGroup,Input,Col,Label,Button} from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';

const required = val => val && val.length;
const isNumber = val => !isNan(Number(val));
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component{
   
    handleSubmit = values => {
        console.log(values);
       
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
     <LocalForm onSubmit={ values => this.handleSubmit(values)}>
          <FormGroup row>
              <Label htmlFor="firstname" md={4}>First Name</Label>
              <Col md={8}>
                  <Control.text
                       model=".firstName"
                   name="firstname" 
                   placeholder="First Name"
                   className = "form-control"
                   validators = {{
                    required
                }}
                    />
                    <Errors 
                    className = "text-danger"
                    model = ".firstName" 
                    show = "touched"
                    message = {
                        {
                            required:"Required"
                        }
                    } />
              </Col>
          </FormGroup>

          <FormGroup row>
              <Label htmlFor="lastname" md={4}>Last Name</Label>
              <Col md={8}>
                  <Control.text
                  model = ".lastname"
                   name="lastname"
                    placeholder="Last Name"
                    className = "form-control"
                    validators = {{
                        required
                    }}
                     />
                      <Errors 
                    className = "text-danger"
                    model = ".lastname" 
                    show = "touched"
                    message = {
                        {
                            required:"Required"
                        }
                    } />
              </Col>
          </FormGroup>

          <FormGroup row>
              <Label htmlFor="telnum" md={4}>Tel.Number</Label>
              <Col md={8}>
                  <Control.text 
                  model = ".telnum"
                   name="telnum"
                    placeholder="TelePhone Number"
                    className = "form-control"
                    validators = {{
                        required,
                        isNumber
                    }}
                    />
                     <Errors 
                    className = "text-danger"
                    model = ".telnum" 
                    show = "touched"
                    message = {
                        {
                            required:"Required, ",
                            isNumber: "Invalid Number!"

                        }
                    } />
              </Col>
          </FormGroup>

          <FormGroup row>
              <Label htmlFor="email" md={4}>Email</Label>
              <Col md={8}>
                  <Control.text 
                  model = ".email"
                  name="email" 
                  placeholder="Email"
                  className = "form-control"
                  validators = {{
                    required,
                    validEmail
                }}
                    />
              </Col>
          </FormGroup>


        <FormGroup row>
            <Col md={{size:6, offset:2}}>
                <FormGroup check>
                    <Label check>
                        <Control.checkbox
                         model = ".agree"
                         name="agree"
                         className = "form-check-input"
                          /><strong>May We Contact you?</strong>
                    </Label>
                </FormGroup>
            </Col>

            <Col md={{size:3,offset:1}}> 
               <Control.select
                model =".contactType"
                name="contactType"
                className = "form-control"
                 >
                   <option>Tell.</option>
                   <option>Email</option>
               </Control.select>
            </Col>
        </FormGroup>
          

          <FormGroup row>
              <Label htmlFor="message" md={4}>Your Feedback</Label>
              <Col md={8}>
                  <Control.textarea model="message"
                   name="message" 
                    className = "form-control"
                    validators = {{
                        required
                    }} />
              </Col>
          </FormGroup>

          <FormGroup>
              <Col md={{size:10,  offset:2}}>
                  <Button type="submit" color="primary">Send Feedback</Button>
              </Col>
          </FormGroup>
      </LocalForm>
     </div>
      </div>
            </div>
        );
    }
}

export default Contact;