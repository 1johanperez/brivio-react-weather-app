import { WeatherContainerComponent } from '../components';
import { useState } from 'react';
import { Form } from '../components';

const HomePage = () => {
	const [cities, setCities] = useState([]);

	const addCity = (newCity) => {
		if (cities.some((city) => city.lat === newCity.lat && city.lon == newCity.lon)) return;
		setCities((cities) => [...cities, newCity]);
	};

	const removeCity = (lat, lon) => {
		const updatedCities = cities.filter((city) => city.lat !== lat && city.lon !== lon);
		setCities(updatedCities);
	};
	return (
		<>
			<h1>{cities.length ? `Your Weather At A Glance!` : `No Cities Saved, Add One Below!`}</h1>
			<Form cities={cities} addCity={addCity} />
			<div style={{ marginTop: 20 }} />
			{cities.length && <WeatherContainerComponent cities={cities} removeCity={removeCity} />}
		</>
	);
};
export default HomePage;
