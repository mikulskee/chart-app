import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Post from '../components/Post/Post';
import Chart from '../components/Chart/Chart';
import Summary from '../components/Summary/Summary';
import Footer from '../components/Footer/Footer';

const MainPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Post />
			<Chart />
			<Summary />
			<Footer />
		</>
	);
};

export default MainPage;
