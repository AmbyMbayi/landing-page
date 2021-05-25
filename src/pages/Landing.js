import React from 'react';
import LandingLayout from '../components/layouts/LandingLayout';
import Hero from '../components/sections/Hero';

function Landing() {
	return (
		<LandingLayout>
			<Hero
				title="Landing Page using ChakraUI"
				subtitle="Chakra UI  gives you the building blocks you need to build your React applications"
				image="https://source.unsplash.com/WLUHO9A_xik/800x600"
				ctaText="Chakra Docs"
				ctaLink="/signup"
			/>
		</LandingLayout>
	);
}

export default Landing;
