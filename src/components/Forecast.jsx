import React from 'react'

const Forecast = ({ forecast }) => {
    console.log(forecast);
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div className="bg-gray-900 flex min-w-[50%] min-h-[50%] rounded-3xl shadow-xl text-white items-center justify-center">
            <div className='w-1/3 h-full bg-indigo-900 rounded-3xl flex flex-col items-center justify-center text-white'>
                <span className='font-bold text-xl'>{weekday[new Date(forecast.applicable_date).getDay()]}</span>
                <span className='text-md'>{forecast.applicable_date}</span>
                <img src={`https://www.metaweather.com/static/img/weather/${forecast.weather_state_abbr}.svg`} alt="" className='w-1/2 my-5' />
                <span className='text-2xl font-bold'>{Math.round(forecast.the_temp)}°C</span>
            </div>
            <div className='w-2/3 h-full p-5 uppercase '>
                <div className='my-2 flex justify-between'>
                    <p className='font-bold'>Humidity</p>
                    <p>{forecast.humidity} %</p>
                </div>
                <div className='my-2 flex justify-between'>
                    <p className='font-bold'>predictability</p>
                    <p>{forecast.predictability} %</p>
                </div>
                <div className='my-2 flex justify-between'>
                    <p className='font-bold'>Max Temperature</p>
                    <p>{Math.floor(forecast.max_temp)} °C</p>
                </div>
                <div className='my-2 flex justify-between'>
                    <p className='font-bold'>Min Temperature</p>
                    <p>{Math.floor(forecast.min_temp)} °C</p>
                </div>
                <div className='my-2 flex justify-between'>
                    <p className='font-bold'>Wind speed</p>
                    <p>{Math.floor(forecast.wind_speed)} km/h</p>
                </div>
                <div className='my-2 flex justify-between'>
                    <p className='font-bold'>Air pressure</p>
                    <p>{Math.floor(forecast.air_pressure)} mb</p>
                </div>
            </div>
        </div>
    )
}

export default Forecast