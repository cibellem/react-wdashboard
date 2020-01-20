import React, { Component } from "react"
import API from "../../Utils/API";

//this component handles the search and input change
// this component it's the heart of this application. Where all the logic happens

class SearchInput extends Component {

    state = {
        search: "",
        searchedCities: []
    }


    //when search it's made I push the city searched to my searchedCities array.
    //  This array will hold the recent searches I am going to display alter
    handleCitySearch = event => {
        event.preventDefault();

        const { search, searchedCities } = this.state
        searchedCities.push(search)
        console.log(search)
        console.log(searchedCities)
        API.getCurrentConditions(this.state.search)
            .then(res => {
                console.log(res)
            })

    }


    handleInputChange = event => {

        const userSearch = event.target.value;
        this.setState({
            search: userSearch
        })

    }


    render() {
        return (

            <div className="">
                <div className="row">
                    <div className="col-2">
                        <label >Search by City Name</label>
                    </div>

                    <div className="col-4">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={this.value}
                            onChange={this.handleInputChange} />

                        <button
                            type="submit"
                            onClick={this.handleCitySearch}> Search</button>
                    </div>
                </div>

            </div>

        )


    }
}

export default SearchInput