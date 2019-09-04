import React from 'react'

function WeatherDesc(props){

  console.log(props)
  return (
    <div>
      <div>Title: {props.main}</div>
      <div>Desc: {props.description}</div>
    </div>
  )
}

export default WeatherDesc
