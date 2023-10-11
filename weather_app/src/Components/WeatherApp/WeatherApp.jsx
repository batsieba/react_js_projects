import React from 'react'
import './WeatherApp.css'

import search_icon from "../Asset/search.png";
import clear_icon from "../Asset/clear.png";
import cloud_icon from "../Asset/clouds.png";
import drizzle_icon from "../Asset/drizzle.png";
import rain_icon from "../Asset/rain.png";
import snow_icon from "../Asset/snow.png";
import wind_icon from "../Asset/wind.png";
import humidity_icon from "../Asset/humidity.png";

export const WeatherApp = () => {
  return (
    
    <div className="container">
        <div className="top-bar">
            <input type="text" className="city" placeholder='Search'/>
            <div className="search-icon">
                <img src={search_icon} alt="" />
            </div>
        </div>

        <div className="weather-img">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>

        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>

            </div>

            <div className="element">
                <img src={wind_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="wind-speed">18km/h</div>
                    <div className="text">Wind Speed</div>
                </div>

            </div>
        </div>
    </div>
    
  )
}


