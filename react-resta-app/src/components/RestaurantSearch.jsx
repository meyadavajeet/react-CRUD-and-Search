import React, { Component } from 'react';

class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
        }
    }


    search(event) {
        console.warn(event);
    }

    render() {
        return (
            <div>
                RestaurantSearch
                <input type="text" onChange={(event) => this.search(event.target.value)} />
            </div>
        );
    }
}

export default RestaurantSearch;