import { Route, Routes } from 'react-router-dom';
('react-router-dom');
import { LoginPage, DetailedPage, HomePage, ErrorPage } from './pages/index';
import { NavbarComponent } from './components';

function App() {
	return (
		<>
			<NavbarComponent />
			<div className='container'>
				<Routes>
					<Route path='/' element={<LoginPage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/:city' element={<DetailedPage />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
