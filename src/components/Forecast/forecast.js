import React from "react"
import "./style.css"
import Moment from 'react-moment';


const FiveDaysForecast = (props) => {
    console.log(props)
    return (
        <span className="container ">
            <div className="row">


                {
                    props.forecast.map(item => (
                        <div className="col" key={item.dt}>


                            <div className=" card weatherCard">

                                <div className=" container " >
                                    <div className="row">
                                        <div className="col">
                                            <h3 className="weekday"><Moment format="dddd">{item.dt_txt}</Moment></h3>



                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="temperatureCard">{Math.round(item.main.temp)}°F</h3>



                                            <p className="date"> <Moment format="l">{item.dt_txt}</Moment></p>

                                        </div>
                                        <i className={item.icon}></i>




                                    </div>
                                    <div className="row">
                                        <div className="col-6 ">
                                            <h6 className="minTemp">min:{Math.round(item.main.temp_min)}°F</h6>

                                        </div>
                                        <div className="col-6 ">
                                            <h6 className="maxTemp">max:{Math.round(item.main.temp_max)}°F</h6>
                                        </div>


                                    </div>



                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </span >

    )
}

export default FiveDaysForecast