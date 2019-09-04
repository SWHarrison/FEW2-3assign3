import React from 'react'
import Temperature from './Temperature'
import Atmosphere from './Atmosphere'
import WeatherDesc from './WeatherDesc'

function Weather(props) {

  console.log("props")
  console.log(props)
  const { main, description, icon } = props.weatherGeneral
  const { temp, pressure, humidity, temp_min, temp_max } = props.weatherData

  return (
    <div>
      <WeatherDesc main = {main} description = {description}/>
      <Temperature temp = {temp} temp_min = {temp_min} temp_max = {temp_max}/>
      <Atmosphere pressure = {pressure} humidity = {humidity}/>
    </div>
  )
}

export default Weather
