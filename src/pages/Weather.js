import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Weather() {
  const [position, setPosition] = useState(null)
  const [temp, setTemp] = useState(0)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setPosition(position)
        const address = process.env.REACT_APP_URL +
        'lat=' + position.coords.latitude + 
        '&lon=' + position.coords.longitude + 
        '&units=metric' +
        '&lang=fi' + 
        '&appid=' + process.env.REACT_APP_API_KEY
        axios.get(address)
          .then(response => {
            console.log(response.data)  
            setTemp(response.data.main.temp)
          }).catch(error => {
            console.log(error)
            alert('Error retrieving weather information, try later again!')
          })
      })
    } else {
      alert('Browser does not support geolocation!')
    }
  }, [])
  
  return (
    <>
      <h3>Current weather on your location</h3>
      {/* Display position if retrieved.  */}
      {position && <p>Your location is {position.coords.latitude.toFixed(3)},{position.coords.longitude.toFixed(3)}</p>}
      <p>Temperature is <span>{temp}</span></p>
    </>
  )
}
