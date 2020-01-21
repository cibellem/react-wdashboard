import React from "react"
import "./style.css"
var moment = require('moment');


const FiveDaysForecast = ({ forecast }) => {
    console.log(forecast)





    return (
        <span className="container ">
            <div className="row">


                {
                    forecast.map(item => (
                        <div className="col">


                            <div className="card weatherCard">

                                <div className=" container " >
                                    <div className="row">
                                        <div className="col">

                                            <h3>{item.main.temp}</h3>


                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <h3>{item.dt_txt}</h3>

                                        </div>




                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h6>min:{item.main.temp_min}</h6>

                                        </div>
                                        <div className="col-6">
                                            <h6>max:{item.main.temp_max}</h6>
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