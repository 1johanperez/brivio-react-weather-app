import { WeatherContainerComponent } from '../components';
import { useState } from 'react';
import FormComponent from '../components/FormComponent';

const HomePage = () => {
	const [cities, setCities] = useState([]);

	const addCity = (newCity) => {
		setCities([...cities, newCity]);
	};

	const removeCity = (lat, lon) => {
		const updatedCities = cities.filter((city) => city.lat !== lat && city.lon !== lon);
		setCities(updatedCities);
	};
	return (
		<>
			<h1>{cities.length ? `Your Weather At A Glance!` : `No Cities Saved, Add One Below!`}</h1>
			<FormComponent cities={cities} addCity={addCity} />
			{cities.length && <WeatherContainerComponent cities={cities} removeCity={removeCity} />}
		</>
	);
};
export default HomePage;
