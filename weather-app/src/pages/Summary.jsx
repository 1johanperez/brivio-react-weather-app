import { WeatherContainerComponent } from '../components';

const SummaryPage = () => {
	// array of cities
	const mockData = [
		{ name: 'New York', currentTemp: 80, hi: 90, low: 70, overcastState: 'Sunny' },
		{ name: 'Los Angeles', currentTemp: 90, hi: 98, low: 78, overcastState: 'Rainy' },
		{ name: 'Washington, D.C.', currentTemp: 85, hi: 91, low: 82, overcastState: 'Cloudy' },
		{ name: 'Miami', currentTemp: 81, hi: 92, low: 75, overcastState: 'Sunny' },
	];

	return (
		<>
			<h1>Summary PAGE</h1>
			<WeatherContainerComponent cities={mockData} />
		</>
	);
};
export default SummaryPage;
