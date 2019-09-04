import React from 'react'

function Atmosphere(props){

  console.log(props)
  return (
    <div>
      <div>Pressure: {props.pressure} hPA</div>
      <div>Humidity: {props.humidity}%</div>
    </div>
  )
}

export default Atmosphere
