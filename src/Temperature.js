import React from 'react'

function Temperature(props){

  console.log(props)
  return (
    <div>
      <div>Temp: {props.temp} K</div>
      <div>Temp Min: {props.temp_min} K Max:{props.temp_max} K</div>
    </div>
  )
}

export default Temperature
