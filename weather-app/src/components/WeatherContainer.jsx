/* eslint-disable react/prop-types */
import WeatherCardComponent from './WeatherCard.jsx';

import { Grid } from '@mui/material';
const WeatherContainerComponent = ({ cities, removeCity }) => {
	return (
		<>
			<Grid
				sx={{ flexGrow: 1 }}
				container
				spacing={2}
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
				style={{ backgroundColor: 'yellow', height: 400 }}
			>
				<Grid item xs={12}>
					<Grid container justifyContent='center' spacing={2}>
						{cities.map((city, index) => (
							<WeatherCardComponent city={city} key={index} removeCity={removeCity} />
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default WeatherContainerComponent;
