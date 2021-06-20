const request = require('postman-request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibW9vZ2FsaXRlIiwiYSI6ImNrcTJ1bG85ZzBzN28yb3A4cGNsbDRtOTcifQ.S7KhQHGEdtyU4kF3m1TLTg&limit=1`;
  request({url, json: true}, (error, { body })=> {
    if (error) {
      callback('Unable to connect to location services')
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined)
    } else {
      const {center: coordinates, place_name: location} = body.features[0]
      callback(undefined, {
        latitude: coordinates[1],
        longitude: coordinates[0],
        location: location
      })
    }
  })
}

module.exports = geocode;