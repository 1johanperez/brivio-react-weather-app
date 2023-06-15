/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const WeatherCardComponent = ({ city, index, removeCity }) => {
	return (
		<Grid key={index} item>
			<Card sx={{ maxWidth: 345 }}>
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
						{city.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{city.daily[0].summary}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Current: {Math.round(city.current.temp)} F
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Hi:{Math.round(city.daily[0].temp.max)} F
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Low:{Math.round(city.daily[0].temp.min)} F
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Overcast: {city.current.weather[0].description}
					</Typography>
				</CardContent>
				<CardActions>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Link to={`/home/:${city.name}`} state={{ data: city.daily }}>
							{/* <Button
							size='small'
							onClick={() =>
								navigate(`/home/:${city.name}`, {
									state: { data: city.daily, name: city.name },
								})
							}
						> */}
							5-Day Outlook
							{/* </Button> */}
						</Link>
						<Button size='small' onClick={() => removeCity(city.lat, city.lon)}>
							Remove City
						</Button>
					</div>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default WeatherCardComponent;
