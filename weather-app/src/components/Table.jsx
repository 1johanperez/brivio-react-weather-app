/* eslint-disable react/prop-types */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const BasicTable = ({ rows, columnTitles }) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Day of The Week</TableCell>
						{columnTitles.map((title, index) => (
							<TableCell key={index} align='right'>
								{title}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component='th' scope='row'>
								{row.day}
							</TableCell>
							<TableCell align='right'>{row.hi}</TableCell>
							<TableCell align='right'>{row.low}</TableCell>
							<TableCell align='right'>{row.overcast}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default BasicTable;
