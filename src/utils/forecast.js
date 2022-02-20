const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6bf601ab9666e546363af8f1248dc1e4&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long);

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Could not connect to the weather service!",undefined)
        } else if (response.body.error) {
            callback("Unable to find location",undefined);
        } else {
            callback(undefined,{
                weather: response.body.current.weather_descriptions[0],
                temp: response.body.current.temperature
            })
        }
    })

}

module.exports = forecast;