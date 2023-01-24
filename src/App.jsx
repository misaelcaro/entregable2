
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

import WeatherCard from './components/WeatherCard'




function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState(true)


  const success = (pos) => {
    const newCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(newCoords)
  }

  const changeUnitTemperature = () => {
    setIsCelsius(!isCelsius)

  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const API_KEY = "f4242e9427fbc4148e47904dfd242342"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then(res => {
          const tempKelvin = res.data.main.temp
          const tempCelsius = (tempKelvin - 273.15).toFixed(1)
          const tempFahrenheit = ((tempCelsius * 9 / 5) + 32).toFixed(1)
          const newTemperature = {
            celsius: tempCelsius,
            fahrenheit: tempFahrenheit
          }
          setTemperature(newTemperature)
          setWeather(res.data)
        })

        .catch(err => console.log(err))

    }
  }, [coords])



  return (



    <div className="app" >
     
      {

        weather ? (
          <WeatherCard
            weather={weather}
            temperature={temperature}
            changeUnitTemperature={changeUnitTemperature}
            isCelsius={isCelsius}
          />
        ) : <span className="spiner"></span>

      }



    </div>
  )
}

export default App