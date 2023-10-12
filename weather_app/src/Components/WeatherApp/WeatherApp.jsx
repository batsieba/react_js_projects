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

    let api = "17557e5bb1ab97bca1b55e63e6c46d48";

    const search = async() =>{
        const element = document.getElementsByClassName("city");
        if(element[0].value === ''){
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api}`;

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temperature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
        


    }

  return (
    
    <div className="container">
        <div className="top-bar">
            <input type="text" className="city" placeholder='Search'/>
            <div className="search-icon" onClick={search()}>
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
                    <div className="wind-rate">18km/h</div>
                    <div className="text">Wind Speed</div>
                </div>

            </div>
        </div>
    </div>
    
  )
}


