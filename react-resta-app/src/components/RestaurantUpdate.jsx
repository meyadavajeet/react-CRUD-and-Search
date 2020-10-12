import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

class RestaurantUpdate extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null
        }
    }
    F

    componentDidMount() {
        fetch("http://localhost:3000/restaurant/" + this.props.match.params.id)
            .then((respose) => respose.json())
            .then((result) => {
                console.warn(result);
                this.setState(
                    {
                        name: result.name,
                        email: result.email,
                        address: result.address,
                        rating: result.rating,
                        id: result.id

                    }
                );
            }, (error) => { console.log(error) })
    }

    update() {
        fetch('http://localhost:3000/restaurant/' + this.state.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((result) => {
                result.json().then(() => {
                    alert("Restaurant updated successfully")
                })
            })
    }


    render() {
        //get id with props
        // console.log(this.props.match.params.id)

        // console


        return (
            <>
                <Container>
                    <Row>
                        <Col xs={3} sm={3}></Col>
                        <Col xs={6} sm={6}>
                            <h5>Edit and  Update </h5>
                            <br />
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"
                                        onChange={(event) => { this.setState({ name: event.target.value }) }}
                                        value={this.state.name}
                                        placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"
                                        onChange={(event) => { this.setState({ email: event.target.value }) }}
                                        value={this.state.email}
                                        placeholder="Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text"
                                        onChange={(event) => { this.setState({ address: event.target.value }) }}
                                        value={this.state.address}
                                        placeholder="Address" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control type="text"
                                        onChange={(event) => { this.setState({ rating: event.target.value }) }}
                                        value={this.state.rating}
                                        placeholder="Rating" />
                                </Form.Group>
                                <Button variant="primary" onClick={() => { this.update() }} >
                                    Update
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

export default RestaurantUpdate;