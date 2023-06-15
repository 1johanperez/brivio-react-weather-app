/* eslint-disable react/prop-types */
import BasicTable from './Table';
import Graph from './Graph';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const WeatherContainerComponent = ({ data }) => {
	const navigate = useNavigate();

	const days = data;

	console.log('weekdata', days);

	const columnTitles = ['Hi', 'Low', 'Overcast'];

	const rows = days.map((day) => {
		return { day: day.dt, hi: day.temp.max, low: day.temp.min, overcast: day.weather[0].description };
	});

	console.log('ROWS', rows);

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
				<Graph test={days} />
				<BasicTable rows={rows} columnTitles={columnTitles} />
				<Button size='small' onClick={() => navigate(-1)}>
					Back
				</Button>
			</Grid>
		</>
	);
};

export default WeatherContainerComponent;
