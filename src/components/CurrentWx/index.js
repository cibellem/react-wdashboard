import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css"
let moment = require('moment');

//here I map over the resutls objects to fill the current conditions Jumbotron
//Im using moment.js to convert the time
const CurrentConditions = ({ results, icon, uvIndex }) => {
    let newDate = new Date();

    const imgURL = `owf owf-${icon} owf-5x`
    console.log(imgURL)



    return (
        <span className="  ">
            {
                results.map(item => (

                    <div className="container jumbotronContainer  " key={item.name}>
                        <div className="row ">
                            <div className="col-4 ">
                                <h3 className="text-center cityName">{item.name}</h3>
                                <p className="today text-center">{moment(newDate).format('dddd')}</p>
                                <p className="todayDate text-center">{moment(newDate).format('L')}</p>


                            </div>
                            <div className="col-6 text-align-center">
                                <h3 className="temperature">{Math.round(item.temperature)}°F</h3>
                                <h5 className="humidity">Humidity: {item.humidity} %</h5>
                                <h5 className="wind">Wind: {item.wind} MPH</h5>
                                <h5 className="uvIndex">UV Index: {uvIndex}</h5>





                            </div>
                            <div className="col-2">

                                <i className={imgURL}></i>


                            </div>
                        </div>
                        <div className="row">
                            <div className="col">



                            </div>
                        </div>


                    </div>




                ))
            }

        </span >
    )
}


export default CurrentConditions