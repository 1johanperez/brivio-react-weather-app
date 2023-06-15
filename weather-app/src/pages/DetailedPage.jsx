/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import { DetailedWeatherContainerComponent } from '../components';

const DetailedPage = () => {
	/*

  GET CITY FROM PARAMS,
  MAKE API CALL,
  DISPLAY DATA
  USE DETAILED SPECIFC WEATHER CARD
  pass isDetailed to WeatherContainer, inside of there rener either summaryCard or DetailedCared
  */
	const location = useLocation();
	console.log('LOCATION', location);
	const data = location.state;
	const weekData = data.daily;
	console.log('data', data);
	return (
		<>
			<h1>{data.name} 5-Day Weather At A Glance!</h1>
			{/* GRAPH GOES HERE */}
			{/* TABLE GOES HERE */}

			<DetailedWeatherContainerComponent data={weekData} />
		</>
	);
};
export default DetailedPage;
