import React from 'react'



const WeatherCard = ({ weather, temperature, isCelsius, changeUnitTemperature,}) => {
    let url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
    
    if (url == `http://openweathermap.org/img/wn/01d@4x.png`)
        url = `https://i.ibb.co/wgJLRt6/Dise-o-sin-t-tulo-3.png`;

    else if (url == `http://openweathermap.org/img/wn/01n@4x.png`)
        url = `https://i.ibb.co/jkYsjD4/Dise-o-sin-t-tulo-4.png`

    else if (url == `http://openweathermap.org/img/wn/02d@4x.png`)
        url = `https://i.ibb.co/c2ZLKM2/Dise-o-sin-t-tulo-5.png`

    else if (url == `http://openweathermap.org/img/wn/02n@4x.png`)
        url = `https://i.ibb.co/6Wq939T/Dise-o-sin-t-tulo-6.png`

    else if (url == `http://openweathermap.org/img/wn/03d@4x.png`)
        url = `https://i.ibb.co/qRKXHpH/Dise-o-sin-t-tulo-7.png`

    else if (url == `http://openweathermap.org/img/wn/03n@4x.png`)
        url = `https://i.ibb.co/qRKXHpH/Dise-o-sin-t-tulo-7.png`

    else if (url == `http://openweathermap.org/img/wn/04d@4x.png`)
        url = `https://i.ibb.co/qRKXHpH/Dise-o-sin-t-tulo-7.png`

    else if (url == `http://openweathermap.org/img/wn/04n@4x.png`)
        url = `https://i.ibb.co/qRKXHpH/Dise-o-sin-t-tulo-7.png`

    else if (url == `http://openweathermap.org/img/wn/09d@4x.png`)
        url = `"https://i.ibb.co/RSVQRnq/Dise-o-sin-t-tulo-9.png`

    else if (url == `http://openweathermap.org/img/wn/09n@4x.png`)
        url = `https://i.ibb.co/PZ8GWtJ/Dise-o-sin-t-tulo-10.png`

    else if (url == `http://openweathermap.org/img/wn/10d@4x.png`)
        url = `https://i.ibb.co/d0BgDXQ/Dise-o-sin-t-tulo-8.png`

    else if (url == `http://openweathermap.org/img/wn/10n@4x.png`)
        url = `https://i.ibb.co/zVpm9KJ/Dise-o-sin-t-tulo-11.png`

    else if (url == `http://openweathermap.org/img/wn/11d@4x.png`)
        url = `https://i.ibb.co/4TRnm5x/Dise-o-sin-t-tulo-12.png`

    else if (url == `http://openweathermap.org/img/wn/11n@4x.png`)
        url = `https://i.ibb.co/7tnTFH0/Dise-o-sin-t-tulo-13.png`

    else if (url == `http://openweathermap.org/img/wn/13d@4x.png`)
        url = `https://i.ibb.co/6gNZ0dw/Dise-o-sin-t-tulo-16.png`

    else if (url == `http://openweathermap.org/img/wn/13n@4x.png`)
        url = `https://i.ibb.co/TkwRDy6/Dise-o-sin-t-tulo-15.png`

    else if (url == `http://openweathermap.org/img/wn/50d@4x.png`)
        url = `https://i.ibb.co/XC1gC6y/Dise-o-sin-t-tulo-17.png`

    else if (url == `http://openweathermap.org/img/wn/50n@4x.png`)
        url = `https://i.ibb.co/XC1gC6y/Dise-o-sin-t-tulo-17.png`


    return (
        <article className="weathercard">
           

            <h1 className="title">Weather App</h1>
            <h3 className="subTitle">{`${weather.name}, ${weather.sys.country}`}</h3>

            <p className="temp">{isCelsius ? `${temperature.celsius} °C` : `${temperature.fahrenheit} °F`} </p>
            <section className="weatherCard-body">
                <div>

                    <img className="imagen" src={url} alt="" />
                    
                    <p className="description" >{weather.weather[0].description}</p>
                    
                </div>
                <hr className="divider"/>
                <ul>
                    
                    <li>Wind speed: {weather.wind.speed} m/s</li>
                    <br />
                    <li>Clouds: {weather.clouds.all}%</li>
                    <br />
                    <li>pressure: {weather.main.pressure} hpa</li>
                </ul>
            </section>
            <br />
            <br />
            <button className="weatherCard-button" onClick={changeUnitTemperature}>Degrees °F/°C</button>
           
        </article>
            
    )
}

export default WeatherCard