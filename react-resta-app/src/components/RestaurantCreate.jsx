import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null
        }
    }

    create() {
        // console.log(this.state)
        fetch('http://localhost:3000/restaurant', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((result) => {
                result.json().then(() => {
                    alert("Restaurant added successfully")
                })
            })
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col xs={3} sm={3}></Col>
                        <Col xs={6} sm={6}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"
                                        onChange={(event) => { this.setState({ name: event.target.value }) }}
                                        placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"
                                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                                        placeholder="Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text"
                                        onChange={(event) => { this.setState({ address: event.target.value }) }}
                                        placeholder="Address" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control type="text"
                                        onChange={(event) => { this.setState({ rating: event.target.value }) }}
                                        placeholder="Rating" />
                                </Form.Group>
                                <Button variant="primary" onClick={() => { this.create() }} >
                                    Submit
                                 </Button>
                            </Form>

                        </Col>
                        <Col xs={3} sm={3}></Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default RestaurantCreate;