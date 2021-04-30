import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export default function Users() {

  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData((prevState) => ({ 
      ...prevState,
      [e.target.name]: e.target.value 
    }))
  }

  const handleSubmit = () => {
    axios.post("http://localhost:8000/add_user", { data })
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  // useEffect(() => {
  //   let url = "https://jsonplaceholder.typicode.com/users";
  //   axios.get(url).then(response => setData(response.data)).catch(error => console.error(error));
  // }, [])


  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} style={{ border: '1px solid #aeaeae', borderRadius: '10px', margin: '5px', boxShadow: '1px 0px 5px 0px #afafaf', padding: '10px', backgroundColor: '#ffeffe' }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="float-left">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full Name" name="name" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="float-left">Mobile No.</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile No." name="mobile" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="float-left">Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="float-left">Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Address" name="address" onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
            </Form.Text>
              </Form.Group>
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}