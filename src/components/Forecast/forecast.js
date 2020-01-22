import React from "react"
import "./style.css"
import Moment from 'react-moment';


const FiveDaysForecast = ({ forecast, icon }) => {
    console.log(forecast)


    const imgURL = `owf owf-${icon} owf-3x`
    console.log(imgURL)
    return (
        <span className="container ">

            <div className="row">



                {
                    forecast.map(item => (
                        <div className="col" key={item.dt}>


                            <div className=" card weatherCard">

                                <div className=" container " >
                                    <div className="row">
                                        <div className="col">
                                            <h3 className="weekday"><Moment format="dddd">{item.dt_txt}</Moment></h3>




                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h3 className="temperatureCard">{Math.round(item.main.temp)}°F</h3>
                                            <i className={imgURL}></i>



                                            <p className="date"> <Moment format="l">{item.dt_txt}</Moment></p>

                                        </div>





                                    </div>
                                    <div className="row">
                                        <div className="col-6 ">
                                            <h6 className="minTemp"><b>min: </b>{Math.round(item.main.temp_min)}°F</h6>

                                        </div>
                                        <div className="col-6 ">
                                            <h6 className="maxTemp"><b>max: </b>{Math.round(item.main.temp_max)}°F</h6>
                                        </div>


                                    </div>



                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>
            <h5 className="text-center forecastTitle">5 day Forecast</h5>
        </span >

    )
}

export default FiveDaysForecast