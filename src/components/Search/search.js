import React, { Component } from "react"
import API from "../../Utils/API";
import CurrentJumbotron from "../CurrentWx"
import FiveDaysForecast from "../Forecast/forecast"
import RecentSearchBar from "../RecentSearch/recents"
import "./style.css"

//this component handles the search and input change
// this component it's the heart of this application. Where all the logic happens

class SearchInput extends Component {

    state = {
        search: "",
        results: [],
        searchedCities: [],
        forecast: [],
        data: {}

    }


    //when search it's made I push the city searched to my searchedCities array.
    //  This array will hold the recent searches I am going to display later
    handleCitySearch = event => {
        event.preventDefault();

        //need to fix the array logic

        const { search, searchedCities } = this.state
        if (searchedCities.length === 4) {

        }
        else {
            searchedCities.push(search)
        }
        console.log(searchedCities)
        API.getCurrentConditions(this.state.search)
            .then(res => {
                if (res.status === 400 || res.status === 500) {
                    throw new Error(res.statusText);
                }
                console.log(res)
                const name = res.data.name
                const temperature = res.data.main.temp
                const minTemp = res.data.main.temp_min
                const maxTemp = res.data.main.temp_max
                const humidity = res.data.main.humidity
                const wind = res.data.wind.speed
                const icon = res.data.weather[0].id
                this.setState({
                    results: [{ name, temperature, maxTemp, minTemp, humidity, wind, icon }],
                    data: res

                })



            })

        API.getForecast(this.state.search).then(response => {
            const dailyData = response.data.list.filter(reading =>
                reading.dt_txt.includes("18:00:00"))

            this.setState({
                forecast: dailyData

            })
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

            <div className="container" >

                <div className="row">


                    <RecentSearchBar
                        handleCitySearch={this.handleCitySearch}
                        searchedCities={this.state.searchedCities}
                        handleInputChange={this.state.handleInputChange}
                    />


                    <div className="col-3 mx-4 fixed-bottom">


                        <div className="row">
                            <input
                                className="inputSearch "
                                type="text"
                                name="city"
                                id="city"
                                value={this.value}
                                onChange={this.handleInputChange} />

                            <button
                                type="submit"
                                className="btnSearch btn "
                                onClick={this.handleCitySearch}><i className=" fas fa-search "></i> </button>

                        </div>
                        <div className="row ">
                            <label className="mx-2 searchLabel" >Search by City Name</label>

                        </div>



                    </div>
                    <div className="col-12  ">
                        <CurrentJumbotron
                            data={this.state.data}
                            results={this.state.results} />

                    </div>

                </div>
                <div className="row">
                    <FiveDaysForecast
                        forecast={this.state.forecast}
                        results={this.state.results} />
                </div>


            </div>


        )


    }
}

export default SearchInput