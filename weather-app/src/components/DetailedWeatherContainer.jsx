/* eslint-disable react/prop-types */
import BasicTable from './Table';
import Graph from './Graph';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
const WeatherContainerComponent = ({ data }) => {
	const columnTitles = ['Hi', 'Low', 'Overcast'];

	const rows = data
		.map((day) => {
			return { day: day.dt, hi: day.temp.max, low: day.temp.min, overcast: day.weather[0].description };
		})
		.slice(0, 5);
	console.log('DATA IN DETAILED', data);
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
				<Link to={`/home`} onClick={() => localStorage.setItem('cities', { data })}>
					Back
				</Link>
				{/* <Button size='small' onClick={() => navigate(-1, { state: { data } })}>
					Back
				</Button> */}
			</Grid>
		</>
	);
};

export default WeatherContainerComponent;
