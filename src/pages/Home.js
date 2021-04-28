import React from 'react';
import { Col, Form, Button} from "react-bootstrap";
//import { Redirect } from 'react-router-dom'; // add this import 
class Home extends React.Component {
  state={
    Cname:'',
    Cemail:''
  }
  handleChange = (event) => {
    this.setState({
      Cname:event.target.value,    
    });
  }
  hChange = (event1) => {
    this.setState({  
      Cemail:event1.target.value
    });
  }
  mySubmit = (event) => {
    event.preventDefault();
   // const org = this.state.Cname;
  }
  render(){
    return (
      <Form onSubmit={this.mySubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="Cname">
            <Form.Label> Company Name</Form.Label>
            <Form.Control type="Cname" placeholer="Enter your Company Name" onChange={this.handleChange}></Form.Control>

          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} controlId="Cemail">
          <Form.Label> Company Email Address </Form.Label>
          <Form.Control type="Cemail" placeholer="Enter Company email address" onChange={this.hChange}></Form.Control>
        </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};
export default Home;