import React from 'react';
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Container>
				{children}
			</Container>
			<footer className="text-center mt-4">
				<p>&copy; {new Date().getFullYear()} Star Wars Universe</p>
			</footer>
		</>
	);
};

export default Layout;
