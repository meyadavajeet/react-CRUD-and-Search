import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'

class RestauranstList extends Component {

    constructor() {
        super();
        this.state = {
            list: null,
        }

    }

    componentDidMount() {
        this.getRestaurantList();
    }

    getRestaurantList() {
        fetch("http://localhost:3000/restaurant")
            .then((respose) => respose.json())
            .then((result) => {
                // console.warn(result);
                this.setState({ list: result });
            }, (error) => { console.log(error) })
    }

    delete(id) {
        fetch('http://localhost:3000/restaurant/' + id, {
            method: "DELETE",
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(this.state)
        })
            .then((result) => {
                result.json().then(() => {
                    alert("Restaurant Deleted successfully")
                    this.getRestaurantList();
                })
            })
    }

    render() {
        // console.log(this.state);
        return (
            <>
                RestauranstList
                {/* show api data using map method and if not loaded correctly show loading status in browser */}
                {
                    this.state.list ?
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map((item, index) =>
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <Link to={"update/" + item.id}><FontAwesomeIcon icon={faEdit} color="saffron" /> </Link> |
                                                <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /> </span> |
                                                <Link to={"details/" + item.id}><FontAwesomeIcon icon={faEye} /></Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        : <div>loading....</div>
                }

            </>
        );
    }
}

export default RestauranstList;