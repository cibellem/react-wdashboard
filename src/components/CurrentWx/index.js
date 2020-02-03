import React from "react"

import "./style.css"
let moment = require('moment');

//here I map over the resutls objects to fill the current conditions Jumbotron
//Im using moment.js to convert the time
const CurrentConditions = ({ results, icon, uvIndex }) => {
    let newDate = new Date();

    const imgURL = `owf owf-${icon} owf-5x`
 



    return (
       
           

                    <div className="container col-8 jumbotronContainer  " >
                    {
                results.map(item => (
                        <div className="row" key={item.name} >
                            <div className="col-4 ">
                                <h3 className="text-center cityName">{item.name}</h3>
                                <p className="today text-center">{moment(newDate).format('dddd')}</p>
                                <p className="todayDate text-center">{moment(newDate).format('L')}</p>


                            </div>
                            <div className="col-4
                             text-center">
                                <h3 className="temperature">{Math.round(item.temperature)}°F</h3>
                               












                            </div>
                            <div className=" text-center col-4 iconDiv">
                                <i className={imgURL}></i>
                                <h5 className="humidity"> <b> Humidity:</b> {item.humidity} %</h5>
                                <h5 className="wind"> <b> Wind:</b>{item.wind} MPH</h5>
                                <h5 className="uvIndex"><b>Uv:</b> {Math.round(uvIndex)}</h5>

                            </div>

                        </div>
    ))
}
                    </div>




            

    )
}


export default CurrentConditions