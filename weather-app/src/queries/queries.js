import axios from 'axios';

const API_KEY = `0222c76e3cd606e9edbf2d27da602526`;

// API FOR CITY

// const API_URL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

// CORDINATES

// const GEO_CODE_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${API_KEY}`;

export const getCityCoordinates = async (city, country, state, limit) => {
	try {
		let response = await axios.get(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${API_KEY}`
		);
		return response;
	} catch (error) {
		console.log('Error while calling the api ', error.message);
		return error.response;
	}
};

export const getCityWeather = async (coordinates) => {
	const { lat, lon, name } = coordinates.data[0];
	try {
		let response = await axios.get(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}`
		);

		const res = { ...response.data, name };
		return res;
	} catch (error) {
		console.log('Error while calling the api ', error.message);
		return error.response;
	}
};
