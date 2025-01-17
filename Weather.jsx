import React, { useEffect, useRef, useState } from 'react'
import'./Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {

  const search = async (city)=> {
    if(city === ""){
      alert("Enter City Name");
      return;
    }

    try {
       const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}';

       const response = await fetch(url);
       constdata = await response.json();

       if(!response.ok){
        alert(data.message);
        return;
       }
       console.log(data);
    } catch (error) {

    }
  }
  
  useEffect(() =>{
    search("New York");
  },[])

 return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search'/>
        <img src={search_icon} alt="" />
      </div>
        <img src={clear_icon} alt=""  className='weather_icon'/>
      <p className='temperature'>16&deg;c </p>
      <p className='location'>New York</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt=" "/>
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt=" "/>
          <div>
            <p>3.6km/hr</p>
            <span>Wind Speed</span>
      </div>
    </div>
    </div>

      
    </div>
    )
}

export default Weather
