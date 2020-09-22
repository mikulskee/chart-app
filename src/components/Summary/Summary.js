import React from 'react';
import styled from 'styled-components';

import PostTitle from '../PostTitle/PostTitle';
import PostContent from '../PostContent/PostContent';
import covidPhoto from '../../assets/images/covid-photo-3.jpg';
const PostPhoto = styled.img`
	display: block;
	width: 60vw;
	max-width: 600px;
	margin: 60px auto;
`;

const Thanks = styled.h3`
	margin: 40px auto;
	color: #e29b9b;
	width: fit-content;
	font-family: ${({ theme }) => theme.fonts.cursive};
	font-weight: 700;
	font-size: 1.4rem;
`;

const Summary = () => {
	return (
		<section>
			<PostTitle style={{ marginTop: '50px' }}>Conclusion...</PostTitle>
			<PostContent>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
				convallis urna, a efficitur mauris. Nam eu est malesuada, posuere diam
				in, malesuada eros. Etiam sit amet lorem facilisis, condimentum lectus
				id, pulvinar ex. Nulla dignissim eget lacus in consequat. Nulla
				tincidunt egestas lectus, et consequat erat. Nullam elementum rhoncus
				ante, nec porta elit. Donec eget massa neque. Donec sed velit quis nibh
				faucibus rhoncus vel nec libero. Sed eleifend id dui vel faucibus.
			</PostContent>
			<PostPhoto src={covidPhoto} alt="people-in-masks" />
			<Thanks>Thank you for reading...</Thanks>
		</section>
	);
};

export default Summary;
