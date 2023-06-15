/* eslint-disable react/prop-types */
import BasicTable from './Table';
import Graph from './Graph';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const WeatherContainerComponent = ({ data }) => {
	const navigate = useNavigate();

	const columnTitles = ['Hi', 'Low', 'Overcast'];

	const rows = data
		.map((day) => {
			return { day: day.dt, hi: day.temp.max, low: day.temp.min, overcast: day.weather[0].description };
		})
		.slice(0, 5);

	return (
		<>
			<Grid
				sx={{ flexGrow: 1 }}
				container
				spacing={2}
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
				style={{ backgroundColor: 'white', height: 400 }}
			>
				<Graph data={data} />
				<BasicTable rows={rows} columnTitles={columnTitles} />
				<Button size='small' onClick={() => navigate(-1, { state: { data } })}>
					Back
				</Button>
			</Grid>
		</>
	);
};

export default WeatherContainerComponent;
