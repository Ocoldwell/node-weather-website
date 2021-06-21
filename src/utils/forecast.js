const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=4826244120672e650a408ada68876ad2&query=${latitude},${longitude}`;

  request({url, json: true}, (error, {body})=> {
    if (error) {
      callback('Unable to connect to location services')
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const {weather_descriptions: description, temperature, humidity, feelslike, wind_speed, wind_degree, wind_dir, weather_icons} = body.current;
      callback(undefined, `${description[0]}. It is currently ${temperature} degrees out, It feels like ${feelslike} degrees. The humidity is
      ${humidity}%. The wind speed is ${wind_speed}mph at ${wind_degree} degrees ${wind_dir}.`)
    }
  })
}

module.exports= forecast;