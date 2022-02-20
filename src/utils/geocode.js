const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWtzaGl0MTAyMCIsImEiOiJja2pndHVmbGs5MmVzMnFsYmJwMXBlOHZqIn0.VaFaM3YbDS8b0BNuVDrKYA&limit=1';

    request({url: url, json:true}, (error,response) => {
        if(error){
            callback("Could not connect to the geocoding service!",undefined);
        } else if (response.body.features.length === 0 ) {
            callback("Unable to find location! Try Again...",undefined);
        } else {
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }); 
        }
    })
    return 
}

module.exports = geocode;