/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WeatherCardComponent = ({ city, index, removeCity }) => {
	const navigate = useNavigate();
	return (
		<Grid key={index} item>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia sx={{ height: 40 }} image='/static/images/cards/contemplative-reptile.jpg' title='green iguana' />
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
						{city.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{city.daily[0].summary}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Current: {city.current.temp}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Hi:{city.daily[0].temp.max}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Low:{city.daily[0].temp.min}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Overcast:{city.current.weather[0].description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						onClick={() =>
							navigate(`/:${city.name}`, {
								state: { daily: city.daily, name: city.name, coordinates: { lat: city.lat, lon: city.lon } },
							})
						}
					>
						5-Day Outlook
					</Button>
					<Button size='small' onClick={() => removeCity(city.lat, city.lon)}>
						Remove City
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default WeatherCardComponent;
