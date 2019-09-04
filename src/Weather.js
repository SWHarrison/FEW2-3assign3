import React from 'react'

function Weather(props) {

  console.log("props")
  console.log(props)
  const { main, description, icon } = props.weatherGeneral
  const { temp, pressure, humidity, temp_min, temp_max } = props.weatherData

  return (
    <div>
      <div>Title: {main}</div>
      <div>Desc: {description}</div>
      <div>Icon: {icon}</div>
      <div>Temp: {temp}</div>
      <div>Pressure: {pressure}</div>
      <div>Humidity: {humidity}</div>
      <div>Temp Min: {temp_min} Max:{temp_max}</div>
    </div>
  )
}

export default Weather
