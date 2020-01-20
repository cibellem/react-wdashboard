import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./style.css"
let moment = require('moment');

//here I map over the resutls objects to fill the current conditions Jumbotron
//Im using moment.js to convert the time
const CurrentConditions = ({ results }) => {
    let newDate = new Date();

    return (
        <Jumbotron className=" jumbotronContainer   ">
            {
                results.map(item => (

                    <div className="container">
                        <div className="row ">
                            <div className="col-4">
                                <h3 className="cityName">{item.name}</h3>
                                <h6 className="today">{moment(newDate).format('dddd')}</h6>
                                <p className="text-muted todayDate">{moment(newDate).format('L')}</p>


                            </div>
                            <div className="col-6">
                                <h3 className="temperature">{item.temperature}°F</h3>
                                <h5 className="humidity">Humidity: {item.humidity} %</h5>
                                <h5 className="wind">Wind: {item.wind} MPH</h5>



                            </div>
                            <div className="col-2">
                                <img className="wxIcon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">



                            </div>
                        </div>


                    </div>




                ))
            }

        </Jumbotron>
    )
}


export default CurrentConditions