/* eslint-disable react/prop-types */
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = ({ data }) => {
	const chartData = data
		.map((day) => {
			return { day: new Date(day.dt * 1000).getDay(), hi: Math.round(day.temp.max), low: Math.round(day.temp.min) };
		})
		.slice(0, 5);

	return (
		<ResponsiveContainer width='60%' height='100%'>
			<LineChart
				width={500}
				height={300}
				data={chartData}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='day' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type='monotone' dataKey='hi' stroke='red' activeDot={{ r: 8 }} />
				<Line type='monotone' dataKey='low' stroke='#26a7de' />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Graph;
