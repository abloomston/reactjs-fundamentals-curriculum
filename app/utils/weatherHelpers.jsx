import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5';
const api_key = OPEN_WEATHER_API_KEY; // set as env variable before running webpack

var helpers = {
	getWeatherData: cityState =>
    axios.get('/forecast/daily', {
      baseURL: baseURL,
      params: {
        q: cityState,
        type: 'accurate',
        APPID: api_key,
        cnt: 5
      }
    }).then(data => data.data)
};

module.exports = helpers;
