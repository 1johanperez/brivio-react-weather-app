/* eslint-disable react/prop-types */
import { useState } from 'react';

import { TextField, Button } from '@mui/material';
import { getCityCoordinates, getCityWeather } from '../queries/queries';
import { ResponsiveContainer } from 'recharts';

const FormComponent = ({ addCity }) => {
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};

	const handleStateChange = (event) => {
		setState(event.target.value);
	};

	const handleCountryChange = (event) => {
		setCountry(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const coordinates = await getCityCoordinates(city, country, state, 1);
		const newCity = await getCityWeather(coordinates);
		addCity(newCity);
		setCity('');
		setCountry('');
		setState('');
		return;
	};

	return (
		<ResponsiveContainer width='100%'>
			<form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit}>
				<TextField label='City' value={city} onChange={handleCityChange} required />
				<br />
				<div style={{ marginLeft: 10 }} />
				<TextField label='State' value={state} onChange={handleStateChange} required />
				<br /> <div style={{ marginLeft: 10 }} />
				<TextField label='Country' value={country} onChange={handleCountryChange} required />
				<br />
				<div style={{ marginLeft: 10 }} />
				<Button variant='contained' color='primary' type='submit'>
					Add City
				</Button>
			</form>
		</ResponsiveContainer>
	);
};

export default FormComponent;
