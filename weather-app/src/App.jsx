import { Route, Routes } from 'react-router-dom';
('react-router-dom');
import { LoginPage, SummaryPage, DetailedPage } from './pages/index';
import { NavbarComponent } from './components';

function App() {
	return (
		<>
			<NavbarComponent />
			<div className='container'>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/summary' element={<SummaryPage />} />
					<Route path='/detailed' element={<DetailedPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
