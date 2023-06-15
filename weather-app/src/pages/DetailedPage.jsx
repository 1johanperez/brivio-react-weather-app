/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import { DetailedWeatherContainerComponent } from '../components';

const DetailedPage = () => {
	const location = useLocation();
	console.log('LOCATIONSTATE', location.state);
	const { data, name } = location.state;
	return (
		<>
			<h1>{name} 5-Day Weather At A Glance!</h1>
			<DetailedWeatherContainerComponent data={data} />
		</>
	);
};
export default DetailedPage;
