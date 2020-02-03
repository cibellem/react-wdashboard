import React, { Component } from "react";
import API from "../../Utils/API";
import CurrentJumbotron from "../CurrentWx";
import FiveDaysForecast from "../Forecast/forecast";
import RecentSearchBar from "../RecentSearch/recents";
import "./style.css";

//this component handles the search and input change
// this component it's the heart of this application. Where all the logic happens

class SearchInput extends Component {
  state = {
    search: "",
    results: [],
    searchedCities: [],
    forecast: [],
    icon: "",
    uvIndex: "",
    position: []
  };

  //when search it's made I push the city searched to my searchedCities array.
  //  This array will hold the recent searches I am going to display later
  handleCitySearch = event => {
    event.preventDefault();
    localStorage.setItem("city-search", this.state.searchedCities);

    const { search, searchedCities } = this.state;
    //unshift add the current searched city to the top of the array
    searchedCities.unshift(search);

    //IF OUR LIST HAS MORE THAN 5 CITIES, DROP THE LAST ONE
    while (searchedCities.length > 5) {
      searchedCities.pop();
    }

    API.getCurrentConditions(this.state.search).then(res => {
      if (res.status === 400 || res.status === 500) {
        throw new Error(res.statusText);
      }

      const name = res.data.name;
      const temperature = res.data.main.temp;
      const minTemp = res.data.main.temp_min;
      const maxTemp = res.data.main.temp_max;
      const humidity = res.data.main.humidity;
      const wind = res.data.wind.speed;
      const icon = res.data.weather[0].id;
      const lon = res.data.coord.lon;
      const lat = res.data.coord.lat;
      console.log(res);
      console.log(lon);
      this.setState({
        results: [{ name, temperature, maxTemp, minTemp, humidity, wind }],
        icon: icon
      });
      API.getUvindex(lat, lon).then(respost => {
        const uvIndex = respost.data.value;
        this.setState({
          uvIndex: uvIndex
        });

        console.log(this.state.results);
      });

      console.log(this.state.results);
    });

    API.getForecast(this.state.search).then(response => {
      const dailyData = response.data.list.filter(reading =>
        reading.dt_txt.includes("18:00:00")
      );

      this.setState({
        forecast: dailyData
      });
    });
  };

  handleResecentSearch = event => {
    const mostRecent = event.target.value;
    this.setState({
      search: mostRecent
    });
    // handleCitySearch();
  };

  handleInputChange = event => {
    const userSearch = event.target.value;
    this.setState({
      search: userSearch
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <RecentSearchBar searchedCities={this.state.searchedCities} />

          <div className="col-3 mx-4 fixed-bottom">
            <div className="row">
              <input
                className="inputSearch "
                type="text"
                name="city"
                id="city"
                value={this.value}
                onChange={this.handleInputChange}
              />

              <button
                type="submit"
                className="btnSearch btn "
                onClick={this.handleCitySearch}
              >
                <i className=" fas fa-search "></i>{" "}
              </button>
            </div>
            <div className="row ">
              <label className="mx-2 searchLabel">Search by City Name</label>
            </div>
          </div>
          <div className="col-12  ">
            <CurrentJumbotron
              uvIndex={this.state.uvIndex}
              icon={this.state.icon}
              results={this.state.results}
            />
          </div>
        </div>
        <div className="row">
          <FiveDaysForecast
            icon={this.state.icon}
            forecast={this.state.forecast}
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
