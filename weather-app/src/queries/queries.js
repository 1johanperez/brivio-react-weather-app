import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY_2;

const GEO_CODE_API_URL = import.meta.env.VITE_GEO_CODE_API_URL;

const API_URL = import.meta.env.VITE_OPEN_WEATHER_API_URL;

export const getCityCoordinates = async (city, country, state, limit) => {
	try {
		let response = await axios.get(`${GEO_CODE_API_URL}${city},${state},${country}&limit=${limit}&appid=${API_KEY}`);
		return response.data[0];
	} catch (error) {
		console.log('Error while calling the api ', error.message);
		return error.response;
	}
};

export const getCityWeather = async (coordinates) => {
	const { lat, lon, name } = coordinates;
	try {
		let response = await axios.get(
			`${API_URL}lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely&appid=${API_KEY}`
		);
		const res = { ...response.data, name };
		return res;
	} catch (error) {
		console.log('Error while calling the api ', error.message);
		return error.response;
	}
};
