import React from "react"
import axios from "axios"



export default {
    // Gets city current conditions
    getCurrentConditions: function (city) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=9ff2356a02ea9802929dcef5b6128c26");
    },
    //get 5 days forecast
    getForecast: function () {
        return axios.get("https://randomuser.me/api/?results=300&nat=us");
    },
    //api to get uv index
    getUvindex: function () {
        return axios.get("https://randomuser.me/api/?results=300&nat=us");
    },
    //get longitude and latitude
    getLonLat: function () {
        return axios.get("https://randomuser.me/api/?results=300&nat=us");
    }
};