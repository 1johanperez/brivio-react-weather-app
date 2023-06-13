/* eslint-disable react/prop-types */
import WeatherCardComponent from './WeatherCard';

import Container from '@mui/material/Container';
const WeatherContainerComponent = ({ cities }) => {
	console.log('cities', cities);

	return (
		<>
			asdfasf
			<Container style={{ backgroundColor: 'yellow', margin: 'auto' }} maxWidth='sm'>
				{cities.map((city, index) => (
					<WeatherCardComponent city={city} key={index} />
				))}
			</Container>
		</>
	);
};

export default WeatherContainerComponent;
